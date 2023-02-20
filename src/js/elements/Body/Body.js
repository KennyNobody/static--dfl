export default class Body {
    constructor(el) {
        this.el = el;
    }

    fix(flag) {
        if (flag) {
            this.el.classList.add('body--fixed');
        } else {
            this.el.classList.remove('body--fixed');
        }
    }

    addMenuClass(flag) {
        if (flag) {
            this.el.classList.add('body--menu');
        } else {
            this.el.classList.remove('body--menu');
        }
    }
}