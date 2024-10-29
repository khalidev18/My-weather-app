import WeatherAPI from './services/WeatherAPI.js';
import WeatherUI from './ui/WeatherUI.js';
import BackgroundManager from './ui/BackgroundManager.js';

class WeatherApp {
    constructor() {
        this.api = new WeatherAPI();
        this.ui = new WeatherUI();
        this.backgroundManager = new BackgroundManager();
        this.init();
    }

    init() {
        const form = document.getElementById('search-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const city = document.getElementById('city-input').value.trim();
            
            if (city) {
                this.ui.showLoader();
                this.ui.hideError();
                this.ui.hideWeatherInfo();

                try {
                    const weatherData = await this.api.getWeather(city);
                    this.backgroundManager.setBackground(weatherData.main.temp);
                    this.ui.displayWeatherInfo(weatherData);
                } catch (error) {
                    this.ui.showError('City not found. Please try again.');
                } finally {
                    this.ui.hideLoader();
                }
            }
        });
    }
}

// Initialize the app
new WeatherApp();