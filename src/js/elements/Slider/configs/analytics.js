import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 12,
        slidesPerView: 'auto',
        pagination: pagination,
        breakpoints: {
            1300: {
                slidesPerView: 'auto'
            },
            1000: {

                slidesPerView: 2
            },
            700: {
                spaceBetween: 20
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
    } catch (e) {
    }

    return data;
}