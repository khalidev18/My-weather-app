export default class WeatherUI {
    constructor() {
        this.weatherInfo = document.getElementById('weather-info');
        this.loader = document.getElementById('loader');
        this.errorMessage = document.getElementById('error-message');
    }

    displayWeatherInfo(data) {
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('clouds').textContent = `${data.clouds.all}%`;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind').textContent = `${data.wind.speed} m/s`;

        this.weatherInfo.classList.remove('hidden');
    }

    showLoader() {
        this.loader.classList.remove('hidden');
    }

    hideLoader() {
        this.loader.classList.add('hidden');
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('hidden');
    }

    hideError() {
        this.errorMessage.classList.add('hidden');
    }

    hideWeatherInfo() {
        this.weatherInfo.classList.add('hidden');
    }
}