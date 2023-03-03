import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        autoHeight: true,
        slidesPerView: 1,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
            }
        }
    } catch (e) { /* empty */ }

    return data;
}
