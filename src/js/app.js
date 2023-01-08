import Dropmenu from "./elements/Dropmenu";

class App {
    constructor() {
        this.createDropmenu();
    }

    createDropmenu() {
        const el = document.querySelectorAll('[data-dropmenu]');

        if (el) this.dropmenu = [];

        el.forEach((item, index) => {
            this.dropmenu.push(new Dropmenu(item, index, this));
        });
    }
}

export default App;