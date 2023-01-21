export default class Header {
    constructor(el) {
        this.el = el;

        this.setListeners();
    }

    setListeners() {
        document.addEventListener('scroll', () => {
            this.fix();
        });
    }

    fix() {
       window.pageYOffset > 0 ? this.el.classList.add('fixed') : this.el.classList.remove('fixed');
    }

}