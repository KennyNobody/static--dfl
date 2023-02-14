import Swiper from "swiper";
import sliderFactory from './elements/Slider/factory';

import Dropmenu from "./elements/Dropmenu/Dropmenu";
import Header from "./elements/Header/Header";
import Search from "./elements/Search/Search";
import Process from "./elements/Process/Process";
import InputFile from "./elements/InputFile/InputFile";

class App {
    constructor() {
        this.createHeader();
        this.createDropmenu();
        this.createSliders();
        this.createSearch();
        this.createProcess();
        this.createInputFile();
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

    createSearch() {
        const el = document.querySelector('[data-search]');

        if (el) this.search = new Search(el);
    }

    createProcess() {
        const el = document.querySelector('[data-process]');

        if (el) this.search = new Process(el);
    }

    createInputFile() {
        const el = document.querySelectorAll('[data-input-file]');

        if (el) this.inputFile = [];

        el.forEach((item) => {
            this.inputFile.push(new InputFile(item));
        });
    }
}

export default App;