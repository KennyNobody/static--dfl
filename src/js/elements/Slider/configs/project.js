import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        // loop: true,
        slidesPerView: 1,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination: pagination
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev'),
                // disabledClass: 'disabled'
            }
        }
    } catch (e) {}

    return data;
}