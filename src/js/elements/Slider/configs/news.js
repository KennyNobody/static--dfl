import {Navigation, Pagination} from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        // loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        // centeredSlides: false,
        // loopAdditionalSlides: 3,
        // watchSlidesProgress: true,
        // slideVisibleClass: 'visible',
        pagination: {
            el: '.slider__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active'
        },
        navigation: {
            // nextEl: item.querySelector('.slider__button--next'),
            // prevEl: item.querySelector('.slider__button--prev'),
            disabledClass: 'disabled'
        },
        breakpoints: {
            1000: {
                slidesPerView: 5,
            },
            700: {
                spaceBetween: 12,
                slidesPerView: 3
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
    } catch (e) {}

    return data;
}