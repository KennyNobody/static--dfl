import Swiper from "swiper";
import sliderFactory from './elements/Slider/factory';

import Body from "./elements/Body/Body";
import Dropmenu from "./elements/Dropmenu/Dropmenu";
import Menu from "./elements/Menu/Menu";
import Header from "./elements/Header/Header";
import Search from "./elements/Search/Search";
import Process from "./elements/Process/Process";
import InputFile from "./elements/InputFile/InputFile";
import Table from "./elements/Table/Table";

class App {
    constructor() {
        this.createBody();
        this.createDropmenu();
        this.createMenu();
        this.createHeader();
        this.createSliders();
        this.createSearch();
        this.createProcess();
        this.createInputFile();
        this.createTable();
    }

    createBody() {
        const el = document.querySelector('[data-body]');

        if (el) this.body = new Body(el);
    }

    createDropmenu() {
        const el = document.querySelectorAll('[data-dropmenu]');

        if (el) this.dropmenu = [];

        el.forEach((item, index) => {
            this.dropmenu.push(new Dropmenu(item, index, this));
        });
    }

    createHeader() {
        const el = document.querySelector('[data-header]');

        if (el) this.header = new Header(el);
    }

    createMenu() {
        const el = document.querySelector('[data-menu]');

        if (el) this.menu = new Menu(el, this);
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

    createTable() {
        const el = document.querySelectorAll('[data-table]');

        if (el) this.table = [];

        el.forEach((item) => {
            this.table.push(new Table(item));
        });
    }
}

export default App;