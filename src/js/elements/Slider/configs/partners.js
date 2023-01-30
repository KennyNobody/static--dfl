import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        // loop: true,
        spaceBetween: 16,
        slidesPerView: 3,
        // centeredSlides: false,
        // loopAdditionalSlides: 3,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination: pagination,
        breakpoints: {
            1000: {
                slidesPerView: 7,
            },
            700: {
                slidesPerView: 5,
            }
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
    } catch (e) {}

    return data;
}