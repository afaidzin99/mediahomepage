const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function fetchData() {
  try {
    console.log("Starting request to SIDESA POPULATION API...");
    const response = await axios.get(
      "http://sid.kemendesa.go.id/population-statistic/data?province_id=35&city_id=3515&district_id=3515090&village_id=3515090020&on=population"
    );
    console.log("Request successful. Response status:", response.status);
    const data = response.data;

    const cleanData = {
      total: data.total_data,
      married: data.kawin,
      unmarried: data.belum_kawin,
      divorced_live: data.cerai_hidup,
      divorced_dead: data.cerai_mati,
      wni: data.wni,
      wna: data.wna,
      not_nik: data.total_not_nik,
      not_kk: data.total_not_kk,
      last_update: data.last_update,
      men: {
        total: data.gender_men,
        age: {
          "0_4": data.l_0_4,
          "5_9": data.l_5_9,
          "10_14": data.l_10_14,
          "15_19": data.l_15_19,
          "20_24": data.l_20_24,
          "25_29": data.l_25_29,
          "30_34": data.l_30_34,
          "35_39": data.l_35_39,
          "40_44": data.l_40_44,
          "45_49": data.l_45_49,
          "50_54": data.l_50_54,
          "55_59": data.l_55_59,
          "60_64": data.l_60_64,
          "65_69": data.l_65_69,
          "70_74": data.l_70_74,
          "75+": data.l_75_plus,
        },
      },
      women: {
        total: data.gender_women,
        age: {
          "0_4": data.p_0_4,
          "5_9": data.p_5_9,
          "10_14": data.p_10_14,
          "15_19": data.p_15_19,
          "20_24": data.p_20_24,
          "25_29": data.p_25_29,
          "30_34": data.p_30_34,
          "35_39": data.p_35_39,
          "40_44": data.p_40_44,
          "45_49": data.p_45_49,
          "50_54": data.p_50_54,
          "55_59": data.p_55_59,
          "60_64": data.p_60_64,
          "65_69": data.p_65_69,
          "70_74": data.p_70_74,
          "75+": data.p_75_plus,
        },
      },
    };

    const dir = path.join(__dirname, "..", "data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(
      path.join(dir, "populasi.json"),
      JSON.stringify(cleanData, null, 2)
    );
    console.log("Data saved to populasi.json");
  } catch (error) {
    console.error(
      "Error making request to SIDESA POPULATION API:",
      error.message
    );
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
  }
}

fetchData();
