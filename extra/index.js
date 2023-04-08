document
  .getElementById("weather-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var location = document.getElementById("location-input").value;
    getWeather(location);
  });

function getWeather(location) {
  var apiKey = "c811a4e9a01b25fd380ab7c2dea558f8"; // Replace with your OpenWeatherMap API key
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayWeather(data);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

function displayWeather(weatherData) {
  var weatherInfo = document.getElementById("weather-info");

  // Clear previous weather data
  weatherInfo.innerHTML = "";

  if (weatherData.cod === "404") {
    weatherInfo.textContent = "Location not found";
  } else {
    var cityName = weatherData.name;
    var temperature = Math.round(weatherData.main.temp - 273.15); // Convert temperature to Celsius
    var description = weatherData.weather[0].description;
    var iconUrl =
      "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

    var cityElement = document.createElement("h2");
    cityElement.textContent = cityName;

    var tempElement = document.createElement("p");
    tempElement.innerHTML = "Temperature: " + temperature + "&deg;C";

    var descElement = document.createElement("p");
    descElement.textContent = "Description: " + description;

    var iconElement = document.createElement("img");
    iconElement.src = iconUrl;
    iconElement.alt = description;
    weatherInfo.appendChild(cityElement);
    weatherInfo.appendChild(tempElement);
    weatherInfo.appendChild(descElement);
    weatherInfo.appendChild(iconElement);
  }
}
