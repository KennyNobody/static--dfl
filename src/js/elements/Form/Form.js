import { validate } from "../../functions/validation/validate";
import { sendFormData } from "../../functions/requests/sendRequest";

class Form {
    constructor(el) {
        this.el = el;
        this.activeIndex = 0;
        this.footer = el.querySelector('[data-form-footer]');
        this.sections = el.querySelectorAll('[data-form-section]');
        this.button = el.querySelectorAll('[data-form-button]');
        this.messageField = el.querySelector('[data-form-message-field]');

        this.init();
    }

    init() {
        this.setListeners();

        if (this.sections.length) this.setActiveSection(0, false);


    }

    setListeners() {
        this.button.forEach(item => {
            const name = item.getAttribute('data-form-button');

            item.addEventListener('click', (e) => {
                e.preventDefault();

                if (name === 'submit') {
                    // TODO Убрать ненужное
                    console.log('Отправляем форму');
                } else if (name === 'prev') {
                    this.setActiveSection(this.activeIndex - 1);
                } else if (name === 'next') {
                    this.setActiveSection(this.activeIndex + 1);
                } else {
                    console.error('Кнопка с таким name не определена');
                }
            })
        });
    }

    setActiveSection(num, valid = true) {
        if (
            num < 0 ||
            num > this.sections.length ||
            (valid && !validate(this.sections[this.activeIndex]))
        ) return false;

        if (num === this.sections.length) {
            this.submitData();
            return false;
        }

        this.sections.forEach((item, index) => {
            this.activeIndex = num;

            if (index === this.activeIndex) item.classList.add('active');
            else item.classList.remove('active');
        });

        this.toogleSectionsBlock();
        this.setMessage(num === this.sections.length - 1 ? 'Отправить запрос' : 'Далее');
        this.hideButtonPrev(num === 0);
        this.setPaddingBottom();
    }

    setMessage(str) {
        this.messageField.innerHTML = str;
    }

    hideButtonPrev(mode) {
        const arr = Array.from(this.button);
        const buttons = arr.filter(item => item.getAttribute('data-form-button') === 'prev');

        buttons.forEach(item => {
            mode ? item.setAttribute('hidden', 'hidden') : item.removeAttribute('hidden');
        });
    }

    setPaddingBottom() {
        this.el.style.paddingBottom = this.footer.clientHeight - 15 + 'px';
    }

    toogleSectionsBlock() {
        this.sections.forEach((item, index) => {
            if (this.activeIndex === 0) {
                index === 0 ? item.removeAttribute('hidden') : item.setAttribute('hidden', 'hidden');
            } else {
                index === 0 ? item.setAttribute('hidden', 'hidden') : item.removeAttribute('hidden');
            }
        });
    }

    submitData() {
        console.log('Отправляем');
        sendFormData({});
    }
}

export {Form};
