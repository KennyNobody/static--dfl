class Table {
    constructor(el) {
        this.el = el;
        this.sections = this.el.querySelectorAll('[data-table-section]');

        this.initTable();
    }

    initTable = () => {
        this.sections.forEach(item => {
            this.initSection(item);
        });
    }

    initSection = item => {
        const control = item.querySelector('[data-table-control]');

        control.addEventListener('click', () => {
            item.classList.toggle('opened');
        });
    };
}

export { Table };
