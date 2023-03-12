function generatePagination(now, total) {
    const node = document.createElement('div');
    node.classList.add('pagination');

    const buttonPrev = document.createElement('button');
    buttonPrev.innerHTML = '<svg class="button-nav__icon"><use xlink:href="./assets/sprite/sprite.svg#icon-arrow-left"></use></svg>';
    buttonPrev.classList.add('button-nav');
    buttonPrev.classList.add('button-nav--pagination');
    buttonPrev.setAttribute('data-pagination-link', 'prev');
    if (now === 1) buttonPrev.setAttribute('disabled', 'disabled');

    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '<svg class="button-nav__icon"><use xlink:href="./assets/sprite/sprite.svg#icon-arrow-right"></use></svg>';
    buttonNext.classList.add('button-nav');
    buttonNext.classList.add('button-nav--pagination');
    buttonNext.setAttribute('data-pagination-link', 'next');
    if (now === total) buttonNext.setAttribute('disabled', 'disabled');

    node.append(buttonPrev);

    for (let i = 1; i <= total; i += 1) {
        const buttonPage = document.createElement('a');
        buttonPage.classList.add('link-pagination');
        if (i === now) buttonPage.classList.add('active');
        buttonPage.setAttribute('href', i);
        buttonPage.setAttribute('data-pagination-link', i);
        buttonPage.innerHTML = i;

        node.append(buttonPage);
    }

    node.append(buttonNext);

    return node;
}

export { generatePagination };

