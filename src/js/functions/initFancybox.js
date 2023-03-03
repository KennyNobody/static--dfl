// eslint-disable-next-line import/extensions
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function initGalleryModal() {
    Fancybox.bind('[data-fancybox="gallery"]', {
        dragToClose: false,
        id: "modal-gallery"
    });
}

export { initGalleryModal };
