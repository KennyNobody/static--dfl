function validateSelect(el) {
    const select = el.querySelector('select');

    if (select.selectedIndex !== 0 || !select.hasAttribute('required')) {
        el.classList.remove('error');
        return true;
    }

    el.classList.add('error');
    return false;
}

export { validateSelect };
