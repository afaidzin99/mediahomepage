<?php
// URL of the API endpoint that returns JSON data
$url = 'https://sid.kemendesa.go.id/population-statistic/data?province_id=35&city_id=3515&district_id=3515090&village_id=3515090020&on=population';

// Initialize cURL session
$curl = curl_init($url);

// Set options for the cURL session
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // Disabling SSL verification (not recommended in production)

// Execute cURL request and get the JSON response
$json = curl_exec($curl);

// Check if cURL request was successful
if ($json === false) {
    // cURL request failed
    echo "Failed to fetch data!";
} else {
    // Set the appropriate headers to indicate JSON content
    header('Content-Type: application/json');

    // Output the JSON data to the user
    echo $json;
}

// Close cURL session
curl_close($curl);
?>
