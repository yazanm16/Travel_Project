// Define an async function to fetch data from the Pixabay API
const fetchPixabayData = async (cityName) => {
    // API key for Pixabay
    const apiKey = "48677559-a8ff58f4a7f0bc16186b0d177";

    // Construct the request URL for the Pixabay API using the city name and API key
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${cityName}&image_type=photo`;


    try {
        // Fetch and parse data from the Pixabay API
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
export { fetchPixabayData };
