import {Navigation, Pagination} from "swiper";

export default function(el) {
    const data = {
        modules: [Navigation, Pagination],
        // loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
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
            700: {
                slidesPerView: 2
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
    } catch (e) {}

    return data;

}