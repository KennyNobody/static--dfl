export default class Menu {
    constructor(el, app) {
        this.el = el;
        this.app = app;
        this.opened = false;
        this.links = this.el.querySelectorAll('[data-menu-link]');
        this.button = document.querySelectorAll('[data-menu-button]');
        this.tabs = this.el.querySelectorAll('[data-menu-tab]');

        this.setListeners();
    }

    setListeners() {
        this.button.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.show();
            });
        });

        this.links.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSection(e.target.hash.slice(1, e.target.hash.length));
            });
        });

        if (this.links.length && this.links.length === this.tabs.length) {
            this.toggleSection('tab-menu-1');
        }
    }

    show() {
        if (!this.opened) {
            this.app.body.fix(true);
            this.app.body.menu(true);
        } else {
            this.app.body.fix(false);
            this.app.body.menu(false);
        }

        this.opened = !this.opened;
    }

    toggleSection = el => {
        this.links.forEach(item => {
            if (item.hash === `#${el}`) {
                item.classList.add('active')
            } else {
                item.classList.remove('active');
            }
        });

        this.tabs.forEach(item => {
            if (item.id === el) {
                item.removeAttribute('hidden');
            } else {
                item.setAttribute('hidden', 'hidden');
            }
        });
    };

}
