// Define the base URL for the Geonames API and the API key
const geoURL = "http://api.geonames.org/searchJSON?q=";
const apiKey = "&maxRows=10&username=pduoebsi1";

// Initialize an empty object to hold geo data
let geoData = {};

// Define the formHandler function
const handleFormSubmit = () => {

    // Get the city name and departure date from the form inputs
    const cityName = document.getElementById("zip").value;
    const departure = document.getElementById("date").value;

    // Calculate the countdown to the departure date
    const countDownDate = Date.parse(departure);
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Store the calculated days until departure in geoData
    geoData.daysUntil = daysUntil;

    // Chain API calls to fetch the data and update the UI
    Client.fetchGeonamesData(geoURL, cityName, apiKey)
        .then((geonamesResponse) => {
            const { name, lat, lng, countryCode } = geonamesResponse.geonames[0];
            geoData = { ...geoData, name, lat, lng, countryCode };

            return Client.fetchWeatherData(geoData);
        })
        .then((weatherResponse) => {
            const { temp, weather } = weatherResponse.data[0];
            geoData = { ...geoData, currentTemp: temp, weatherIcon: weather.icon };

            return Client.fetchPixabayData(cityName);
        })
        .then((pixabayResponse) => {
            geoData.image = pixabayResponse.hits[0].webformatURL;
            console.log(geoData);

            // Update the UI with the collected geoData
            Client.updateUi(geoData);
        })
        .catch((err) => {
            // Catch and log any errors that occur during the API calls
            console.log("Error:", err);
        });
}

// Export the handleFormSubmit function for use in other modules
export { handleFormSubmit };
