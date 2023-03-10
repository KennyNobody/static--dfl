import Swiper from "swiper";
import sliderFactory from './elements/Slider/factory';

import { Body } from "./elements/Body/Body";
import { Dropdown } from "./elements/Dropdown/Dropdown";
import { Dropmenu } from "./elements/Dropmenu/Dropmenu";
import { Form } from "./elements/Form/Form";
import { Menu } from "./elements/Menu/Menu";
import { Header } from "./elements/Header/Header";
import { Search } from "./elements/Search/Search";
import { Process } from "./elements/Process/Process";
import { InputFile } from "./elements/InputFile/InputFile";
import { Table } from "./elements/Table/Table";
import { Manual } from "./elements/Manual/Manual";
import { initGalleryModal } from "./functions/initFancybox";

class App {
    constructor() {
        this.createBody();
        this.initDropdown();
        this.createDropmenu();
        this.createForm();
        this.createMenu();
        this.createHeader();
        this.createSliders();
        this.createSearch();
        this.createProcess();
        this.createInputFile();
        this.createTable();
        this.initManual();
        this.initFunctions();
    }

    createBody() {
        const el = document.querySelector('[data-body]');

        if (el) this.body = new Body(el);
    }

    initDropdown() {
        const el = document.querySelectorAll('[data-dropdown]');

        if (el) this.dropdown = [];

        el.forEach((item) => {
            this.dropdown.push(new Dropdown(item));
        });
    }

    createDropmenu() {
        const el = document.querySelectorAll('[data-dropmenu]');

        if (el) this.dropmenu = [];

        el.forEach((item, index) => {
            this.dropmenu.push(new Dropmenu(item, index, this));
        });
    }

    createForm() {
        const el = document.querySelectorAll('[data-form]');

        if (el) this.form = [];

        el.forEach((item) => {
            this.form.push(new Form(item));
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
            const slider = new Swiper(
                item.querySelector('.swiper-container'),
                sliderFactory(item)
            );

            this.sliders.push(slider);
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

    initManual() {
        const el = document.querySelector('[data-manual]');

        if (el) this.search = new Manual(el);
    }

    initFunctions() {
        initGalleryModal();
    }
}

export default App;
