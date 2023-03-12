import axios from "axios";
import {dataGetRoutes} from "../../apiRoutes";
import { formatDate } from "../../functions/formatDate";
import {generatePagination} from "../../functions/generatePagination";

class Articles {
    constructor(el) {
        this.el = el;
        this.nowPage = 1;
        this.totalPage = null;
        this.name = el.getAttribute('data-articles');
        this.template = el.querySelector('[data-template]');
        this.content = el.querySelector('[data-articles-content]');
        this.toolbar = el.querySelector('[data-articles-toolbar]');

        this.init();
    }

    init() {
        this.setPaginateListeners();
        this.fetchData();
    }

    fetchData() {
        axios.get(dataGetRoutes[this.name], {
            params: {
                _page: this.nowPage,
                _limit: 3
            }
        })
            .then((response) => {
                this.renderItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }

    renderItems(data) {
        this.content.innerHTML = '';

        data.forEach(item => {
            this.createItem(item);
            this.content.append(this.createItem(item));
        });

        this.setPagination(this.nowPage, 5);
    }

    createItem(item) {
        console.log(item);

        const article = this.template.content.cloneNode(true);

        const attrs = article.querySelectorAll('[data-template-key]');

        attrs.forEach(i => {
            const name = i.getAttribute('data-template-key');


            // name.innerHTML = item.name;

            if (name === 'link') i.setAttribute('href', item[name]);
            else if (name === 'preview') i.setAttribute('src', item[name]);
            else if (name === 'date') i.innerHTML = formatDate(item[name]);
            else i.innerHTML = item[name];
        });

        return article;
    }

    setPagination(now, total) {
        this.toolbar.innerHTML = '';
        this.toolbar.append(generatePagination(now, total));
        this.setPaginateListeners();
    }

    setPaginateListeners() {
        const arr = [...this.toolbar.querySelectorAll('button'), ...this.toolbar.querySelectorAll('a')];

        arr.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.changePage(item.getAttribute('data-pagination-link'));
            })
        })
    }

    changePage(num) {
        if (Number.isInteger(num) && (num < 1 || num === this.nowPage)) return false;

        if (num === 'prev') this.nowPage -= 1;
        if (num === 'next') this.nowPage += 1;
        else this.nowPage = Number(num);

        this.fetchData();
    }
}

export {Articles};
