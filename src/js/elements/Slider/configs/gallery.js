import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        // loop: true,
        spaceBetween: 12,
        slidesPerView: 'auto',
        // centeredSlides: false,
        // loopAdditionalSlides: 3,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination,
        breakpoints: {
            1300: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 3,
            },
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                // disabledClass: 'disabled'
            }
        }
    } catch (e) { /* empty */ }

    return data;
}