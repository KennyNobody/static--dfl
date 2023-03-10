import { validateInput } from "./validateInput";
import { validateAgreement } from "./validateAgreement";
import { validateSelect } from "./validateSelect";
import { validateFieldset } from "./validateFieldset";

function validate(node) {
    const arr = [
        ...node.querySelectorAll('[data-input]'),
        ...node.querySelectorAll('[data-fieldset]'),
        ...node.querySelectorAll('[data-agreement]'),
        ...node.querySelectorAll('[data-select]')
    ];

    let flag = true;

    arr.forEach(item => {
        if (item.hasAttribute('data-input')) {
            if (!validateInput(item) && flag) flag = false;
        } else if (item.hasAttribute('data-fieldset')) {
            if (!validateFieldset(item) && flag) flag = false;
        } else if (item.hasAttribute('data-agreement')) {
            if (!validateAgreement(item) && flag) flag = false;
        } else if (item.hasAttribute('data-select')) {
            if (!validateSelect(item) && flag) flag = false;
        }
        else console.error('Не определено');
    });

    return flag;
}

export {validate};
