import {Navigation, Pagination} from "swiper";

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
        pagination: {
            el: '.slider__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active'
        },
        breakpoints: {
            1300: {
                spaceBetween: 30,
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
                // disabledClass: 'disabled'
            }
        }
    } catch (e) {
    }

    return data;
}