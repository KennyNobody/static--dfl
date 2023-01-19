import 'swiper/swiper.min.css';
import Swiper from "swiper";
import sliderFactory from './elements/Slider/factory';

import Dropmenu from "./elements/Dropmenu/Dropmenu";

class App {
    constructor() {
        this.createDropmenu();
        this.createSliders();
    }

    createDropmenu() {
        const el = document.querySelectorAll('[data-dropmenu]');

        if (el) this.dropmenu = [];

        el.forEach((item, index) => {
            this.dropmenu.push(new Dropmenu(item, index, this));
        });
    }

    createSliders() {
        const el = document.querySelectorAll('[data-slider]');

        if (el) this.sliders = [];

        el.forEach(item => {
            const slider = item.querySelector('.swiper-container');
            const navigation = item.querySelector('[data-slider-nav]');

            this.sliders.push(new Swiper(slider, sliderFactory(item)));
        });
    }
}

export default App;