const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const URL =
  "https://idm.kemendesa.go.id/open/api/desa/rumusanpokok/3515102020/2023";

function ParseInfoTable(html) {
  const $ = cheerio.load(html);
  const data = {};

  $("table")
    .first()
    .find("tr")
    .each((i, row) => {
      const cells = $(row).find("td");
      if (cells.length > 3) {
        let key1 = cells.eq(0).text().trim();
        let value1 = cells.eq(1).text().trim().slice(2);
        let key2 = cells.eq(2).text().trim();
        let value2 = cells.eq(3).text().trim().slice(2);

        // Convert keys to lowercase and remove whitespaces
        key1 = key1.toLowerCase().replace(/\s+/g, "");
        key2 = key2.toLowerCase().replace(/\s+/g, "");

        data[key1] = value1;
        data[key2] = value2;
      }
    });

  return data;
}

function parseSecondTable(html) {
  const $ = cheerio.load(html);
  const data = [];
  let headers = [];

  $("table")
    .eq(1) // Select the second table
    .find("tr")
    .each((i, row) => {
      const cells = $(row).find("td");
      if (i === 0) {
        // If it's the first row, treat it as headers
        headers = cells
          .map((j, cell) =>
            $(cell).text().trim().toLowerCase().replace(/\s+/g, "")
          )
          .get();
      } else if (i === 1) {
        // Skip the second row
        return;
      } else if (cells.length > 5) {
        let rowData = {};
        for (let j = 0; j < 6; j++) {
          let key = headers[j];
          let value = cells.eq(j).text().trim();
          rowData[key] = value;
        }

        // Assign category based on row index, starting from the third row
        if (i <= 37) {
          rowData["category"] = "Social";
        } else if (i <= 49) {
          rowData["category"] = "Economy";
        } else {
          rowData["category"] = "Environment";
        }

        data.push(rowData);
      }
    });

  return data;
}

async function fetchData() {
  try {
    const response = await axios.get(URL);

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    const data = ParseInfoTable(response.data);
    const secondTable = parseSecondTable(response.data);

    // Write the data to JSON files
    fs.writeFileSync(
      path.join(__dirname, "../data/idm_summary.json"),
      JSON.stringify(data, null, 2)
    );
    fs.writeFileSync(
      path.join(__dirname, "../data/idm_indikator.json"),
      JSON.stringify(secondTable, null, 2)
    );

    console.log("Data saved successfully.");
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

fetchData();
