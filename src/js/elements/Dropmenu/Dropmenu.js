class Dropmenu {
    constructor(el, index, parent) {
        this.el = el;
        this.index = index;
        this.parent = parent;
        this.button = this.el.querySelector('[data-dropmenu-button]');
        this.content = this.el.querySelector('[data-dropmenu-content]');
        this.setListeners();
    }

    setListeners() {
        if (this.button && this.content) {
            this.button.addEventListener('click', () => {
                this.closeAll();
                this.toggle();
            });

            document.addEventListener('click', e => {
                const menu = e.target === this.content || this.content.contains(e.target);
                const button = e.target === this.button || this.button.contains(e.target);
                const menuIsActive = this.el.classList.contains('active');

                if (!menu && !button && menuIsActive) {
                    this.close();
                }
            })
        }
    }

    toggle() {
        this.el.classList.contains('active') ? this.close() : this.open();
    }

    open() {
        this.el.classList.add('active');
    }

    close() {
        this.el.classList.remove('active');
    }

    closeAll() {
        this.parent.dropmenu.forEach(item => {
            if (item.index !== this.index) item.close();
        });
    }
}

export { Dropmenu };
