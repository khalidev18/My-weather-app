export default class WeatherAPI {
    constructor() {
        this.API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
        this.BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeather(city) {
        const response = await fetch(
            `https://api.allorigins.win/raw?url=${encodeURIComponent(
                `${this.BASE_URL}?q=${city}&appid=${this.API_KEY}&units=metric`
            )}`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        return await response.json();
    }
}