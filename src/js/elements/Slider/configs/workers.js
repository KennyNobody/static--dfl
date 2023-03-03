import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function(el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 1,
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination: pagination,
        breakpoints: {
            1300: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2
            }
        }
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
