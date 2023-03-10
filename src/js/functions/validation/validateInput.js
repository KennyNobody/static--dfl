function validateInput(el) {
    const input = el.querySelector('input') || el.querySelector('textarea');

    if (input.value || !input.hasAttribute('required')) {
        el.classList.remove('error');
        return true;
    }

    el.classList.add('error');
    return false;
}

export { validateInput };
