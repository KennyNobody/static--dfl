import axios from "axios";

export default class Search {
    constructor(el) {
        this.el = el;
        this.form = this.el.querySelector('[data-search-form]');
        this.field = this.el.querySelector('[data-search-field]');
        this.button = this.el.querySelector('[data-search-button]');
        this.list = this.el.querySelector('[data-search-list]');
        this.listContent = this.el.querySelector('[data-search-list-content]');
        this.template = this.el.querySelector('[data-article-search-template]');

        this.setListeners();
    }

    setListeners() {
        this.form.addEventListener('submit', (e) => e.preventDefault());

        this.button.addEventListener('click', () => {
            this.open();
        });

        document.addEventListener('click', e => {
            let form = e.target === this.el || this.el.contains(e.target);

            if (!form && this.field.value < 3) {
                this.close();
            }
        });

        this.field.addEventListener('input', (e) => {
            const searchString = e.target.value;

            if (searchString.trim().length >= 3) {
                this.fetch(searchString.trim());
            } else {
                this.closeList();
            }
        });
    }

    open() {
        this.el.classList.add('active');
        this.field.focus();
    }

    close() {
        this.el.classList.remove('active');
        this.field.value = '';
        this.closeList();
        this.listContent.innerHTML = '';
    }

    fetch(val) {
        axios.get('http://localhost:3001/search', {
            params: {
                query: val
            }
        })
            .then((response) => {
                this.setResults(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {

            });
    }

    setResults(arr) {
        this.showList();

        if (arr.length) {
            arr.forEach(item => {
               this.renderItem(item);
            });
        }

        // TODO Сделать отображение лоадера и "НЕТ РЕЗУЛЬТАТОВ"
    }

    renderItem(el) {
        const clone = this.template.content.cloneNode(true);
        let link = clone.querySelector('*');

        link.innerHTML = el.title;
        link.setAttribute('href', el.link);

        this.listContent.appendChild(link);
    }

    showList() {
        this.list.removeAttribute('hidden');
    }

    closeList() {
        this.listContent.innerHTML = '';
        this.list.setAttribute('hidden', 'hidden');
    }
}