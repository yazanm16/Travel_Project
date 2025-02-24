// // Define an async function to fetch weather data from the Weatherbit API
// let fetchWeatherData = async (geoData) => {
//     // Extract latitude and longitude from the geoData object
//     const lat = geoData.lat;
//     const lng = geoData.lng;
//
//     // API key for Weatherbit
//      const weatherbitApiKey = "3bc51005384141d08027f7a9c949b603";
//
//     // Construct the request URL for the Weatherbit API using the latitude, longitude, and API key
//     const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;
//
//     // Fetch data from the Weatherbit API
//     const res = await fetch(weatherbitApiReqURL);
//
//     // Initialize an empty object to hold the result
//     let result = {};
//
//     try {
//         // Attempt to parse the response as JSON
//         result = await res.json();
//     } catch (error) {
//         // Log any errors that occur during the fetch or JSON parsing
//         console.log("error:", error);
//     }
//
//     // Return the result (either the parsed JSON or an empty object if an error occurred)
//     return result;
//   };
//
//   // Export the weatherbitApi function for use in other modules
//   export { fetchWeatherData };




// Define an async function to fetch weather data from the Weatherbit API
const fetchWeatherData = async (geoData) => {
    // Destructure latitude and longitude from geoData
    const { lat, lng } = geoData;

    // API key for Weatherbit
    const apiKey = "3bc51005384141d08027f7a9c949b603";

    // Construct the request URL for the Weatherbit API using latitude, longitude, and API key
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}`;

    try {
        // Fetch and parse data from the Weatherbit API
        const response = await fetch(url);
        const data = await response.json();

        // Return the parsed JSON result
        return data;
    } catch (error) {
        // Log any errors and return an empty object if something goes wrong
        console.error("Error fetching data:", error);
        return {};
    }
};

// Export the function for use in other modules
export { fetchWeatherData };
