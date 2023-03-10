class Dropdown {
    constructor(el) {
        this.el = el;
        this.button = this.el.querySelector('[data-dropdown-button]');

        this.setListeners();
    }

    setListeners() {
        this.button.addEventListener('click', () => {
            this.el.classList.toggle('active');
        })
    }
}

export { Dropdown };
