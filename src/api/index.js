export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9b9b9efe03064009a9350634240109&q=${city}&aqi=yes`);

    if (!response.ok) {
        console.log("Error fetching weather data");
    }

    return await response.json();
}