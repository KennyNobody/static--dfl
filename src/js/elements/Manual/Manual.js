import Mark from "mark.js/src/vanilla";

export default class Manual {
    constructor(el) {
        this.el = el;
        this.form = this.el.querySelector('[data-manual-form]');
        this.input = this.el.querySelector('[data-manual-input]')
        this.articles = this.el.querySelectorAll('[data-manual-article]');
        this.blocks = this.el.querySelectorAll('[data-manual-block]');
        this.items = this.el.querySelectorAll('[data-manual-item]');
        this.markInstance = null;

        this.setListeners();
    }

    setListeners() {
        this.input.addEventListener('input', (e) => {
            this.resetInstance();
            const val = e.target.value;
            if (val.length >= 3) this.search(val);
        });

        if (this.blocks) {
            this.markInstance = new Mark(this.blocks);
        }
    }

    search(str) {
        this.markInstance.mark(str, {
            "separateWordSearch": false,
        });

        this.sortArticles();
    }

    sortArticles() {
        this.items.forEach(item => {
            if (!item.querySelector('mark')) {
                item.setAttribute('hidden', 'hidden');
            }
        });

        this.articles.forEach(item => {
            const items = item.querySelectorAll('[data-manual-item]');
            const hiddenItems = item.querySelectorAll('[data-manual-item][hidden]');

            if (items.length === hiddenItems.length) {
                item.setAttribute('hidden', 'hidden');
            }
        });
    }

    resetInstance() {
        this.items.forEach(item => {
            item.removeAttribute('hidden');
        });

        this.articles.forEach(item => {
            item.removeAttribute('hidden');
        });

        this.markInstance.unmark();
    }
}
