export default class Process {
    constructor(el) {
        this.el = el;
        this.itemIndex = 0;
        this.items = this.el.querySelectorAll('[data-process-step]');
        this.marker = this.el.querySelector('[data-process-marker]');

        this.setListeners();
    }

    setListeners() {
        document.addEventListener('scroll', () => {
            if (this.checkElPosition()) this.startMoving();
        });
    }

    checkElPosition() {
        let rect = this.el.getBoundingClientRect();
        const offset = window.innerHeight / 3;

        this.checkMarkerPosition();

        return rect.top < (offset * 2);
    }

    checkMarkerPosition() {
        let prevPosition = null;

        setInterval(() => {
            const nowPosition = this.marker.getBoundingClientRect().left;

            if (nowPosition !== prevPosition) {
                prevPosition = nowPosition;
                this.checkItemPosition(Number(nowPosition.toFixed()));
            } else {
                clearInterval(this);
            }
        }, 100);
    }

    checkItemPosition(markerPosition) {
        this.items.forEach(item => {
            let itemPosition = item.getBoundingClientRect().left;
            if (itemPosition < markerPosition && !item.classList.contains('active')) {
                item.classList.add('active');
            }
        });
    }

    startMoving() {
        this.el.classList.add('animate');
    }

}