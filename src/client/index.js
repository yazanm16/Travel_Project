// Import functions from local modules
import { handleFormSubmit } from "./js/formHandler"; // Handles form submission
import { updateUi } from "./js/updateUi"; // Updates the user interface with data
import { fetchGeonamesData } from "./js/callGeonamesApi"; // Calls the Geonames API for location data
import { fetchPixabayData } from "./js/callPixabayApi"; // Calls the Pixabay API for image data
import { fetchWeatherData } from "./js/callWeatherbitApi"; // Calls the Weatherbit API for weather data

// Import main stylesheet
import "./styles/style.scss"; // Styles for the application

// Add event listener to the "generate" button
// When clicked, it triggers the formHandler function
document.getElementById("generate").addEventListener("click", handleFormSubmit);

// Export functions for use in other modules
export { handleFormSubmit, updateUi, fetchGeonamesData, fetchPixabayData, fetchWeatherData };