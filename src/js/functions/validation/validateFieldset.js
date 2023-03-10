function validateFieldset(el) {
    const elements = el.querySelectorAll('[data-input]');
    let flag = false;

    elements.forEach(item => {
        const input = item.querySelector('input') || item.querySelector('textarea');
        if (!flag && input.value) flag = true;
    });

    if (flag) {
        elements.forEach(item => {
            item.classList.remove('error');
        });

        return true;
    }

    elements.forEach(item => {
        item.classList.add('error');
    });

    return false;

}

export { validateFieldset };
