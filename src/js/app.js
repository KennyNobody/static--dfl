import Swiper from "swiper";
import sliderFactory from './elements/Slider/factory';

import Dropmenu from "./elements/Dropmenu/Dropmenu";
import Header from "./elements/Header/Header";

class App {
    constructor() {
        this.createHeader();
        this.createDropmenu();
        this.createSliders();
    }

    createHeader() {
        const el = document.querySelector('[data-header]');

        if (el) this.header = new Header(el);
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
            this.sliders.push(new Swiper(item.querySelector('.swiper-container'), sliderFactory(item)));
        });
    }
}

export default App;