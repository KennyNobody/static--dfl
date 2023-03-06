// eslint-disable-next-line import/extensions
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function initGalleryModal() {
    Fancybox.bind('[data-fancybox="review"]', {
        dragToClose: false,
        id: "modal-review"
    });

    Fancybox.bind('[data-fancybox="offer"]', {
        dragToClose: false,
        id: "modal-offer",
        groupAll: false,
        groupAttr: 'unreak',
        defaultType: 'html',
        on: {
            done: (fancybox) => {
                console.log(fancybox);
                // here `fancybox` refers to the current instance
            },
        },
    });

    Fancybox.bind('[data-fancybox="photo"]', {
        dragToClose: false,
        id: "modal-photo",
        groupAll: false,
        // groupAttr: 'unreak',
        defaultType: 'image',
    });

    Fancybox.bind('[data-fancybox="office"]', {
        dragToClose: false,
        id: "modal-photo",
        groupAll: false,
        // groupAttr: 'unreak',
        defaultType: 'image',
    });

    Fancybox.bind('[data-fancybox="project"]', {
        dragToClose: false,
        id: "modal-project",
        groupAll: false,
        groupAttr: 'unreak',
        defaultType: 'html',
    });
}

export { initGalleryModal };
