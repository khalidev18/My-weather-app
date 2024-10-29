export default class BackgroundManager {
    constructor() {
        this.backgrounds = {
            cold: 'https://images.unsplash.com/photo-1478719059408-592965723cbc?auto=format&fit=crop&q=80',
            mild: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&q=80',
            warm: 'https://images.unsplash.com/photo-1561553873-e8491a564fd0?auto=format&fit=crop&q=80',
            default: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80'
        };
    }

    setBackground(temperature) {
        let backgroundUrl;
        
        if (temperature > 25) {
            backgroundUrl = this.backgrounds.warm;
        } else if (temperature < 10) {
            backgroundUrl = this.backgrounds.cold;
        } else {
            backgroundUrl = this.backgrounds.mild;
        }

        document.body.style.backgroundImage = `url(${backgroundUrl})`;
    }
}