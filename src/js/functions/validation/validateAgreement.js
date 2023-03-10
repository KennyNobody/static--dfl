function validateAgreement(el) {
    const input = el.querySelector('input') || el.querySelector('textarea');

    if (input.checked || !input.hasAttribute('required')) {
        el.classList.remove('error');
        return true;
    }

    el.classList.add('error');
    return false;
}

export { validateAgreement };
