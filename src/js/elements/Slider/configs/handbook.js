import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    console.log('Пык')
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 8,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination,
        breakpoints: {
            1300: {
                spaceBetween: 20,
                slidesPerView: 3
            },
            700: {
                spaceBetween: 10,
                // slidesPerView: 3
            }
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev'),
                disabledClass: 'disabled'
            }
        }
    } catch (e) { /* empty */ }

    return data;
}
