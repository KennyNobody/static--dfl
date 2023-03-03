import {Navigation, Pagination} from "swiper";
import {pagination} from "./_pagination";

export default function(el){
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 9,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        slideVisibleClass: 'visible',
        pagination,
        breakpoints: {
            1300: {
                slidesPerView: 4,
            },
            1000: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            700: {
                spaceBetween: 12
            }
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                disabledClass: 'disabled'
            }
        }
    } catch (e) {
        console.log('Навигации нет');
    }

    return data;
}
