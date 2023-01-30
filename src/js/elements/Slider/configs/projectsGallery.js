import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function(el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 4,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination: pagination,
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            1000: {
                spaceBetween: 12,
                slidesPerView: 'auto',
            }
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev'),
            }
        }
    } catch (e) {}

    return data;
}