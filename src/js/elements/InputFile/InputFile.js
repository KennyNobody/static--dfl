export default class InputFile {
    constructor(el) {
        this.el = el;
        this.field = this.el.querySelector('[data-input-file-field]');
        this.caption = this.el.querySelector('[data-input-file-caption]');

        this.setListeners();
    }

    setListeners() {
        this.field.addEventListener('change', () => {
            this.caption.innerHTML = this.field.files[0].name;
        });
    }
}