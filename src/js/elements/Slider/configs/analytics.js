import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 12,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination,
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                disabledClass: 'disabled'
            }
        }
    } catch (e) { /* empty */ }

    return data;
}
