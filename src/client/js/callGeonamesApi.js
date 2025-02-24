// An async function that  fetch data from the Geonames API>
let fetchGeonamesData = async (geoURL, cityName, apiKey) => {
    // Fetch data from the Geonames API>
    const res = await fetch(geoURL + cityName + apiKey);

    try {
        // Attempt to parse the response as JSON
        const result = await res.json();
        // Return the parsed JSON result
        return result;
    } catch (error) {
        // Log any errors that occur during the fetch or JSON parsing
        console.log("error", error);
        // Return null if an error occurs
        return null;
    }
  };

  // Export the geonamesApi function
  export { fetchGeonamesData };

