class Process {
    constructor(el) {
        this.el = el;
        this.items = this.el.querySelectorAll('[data-process-step]');
        this.marker = this.el.querySelector('[data-process-marker]');

        this.setListeners();
    }

    setListeners() {
        document.addEventListener('scroll', () => {
            if (this.checkElPosition() && this.checkMobile()) this.startMoving();
        });

        window.addEventListener('resize', () => {
            this.setMobileRoute();
        });

        this.setMobileRoute();
    }

    setMobileRoute() {
        let startMarker = this.el.querySelector('[data-process-point="start"]');
        let endMarker = this.el.querySelector('[data-process-point="end"]');
        let routeMobile = this.el.querySelector('[data-process-route-mobile]');

        routeMobile.style.top = startMarker.offsetTop + (startMarker.clientHeight / 2) + 'px';
        routeMobile.style.bottom = routeMobile.clientHeight - (routeMobile.clientHeight - endMarker.offsetTop - endMarker.offsetHeight) + 'px';
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

    checkMobile() {
        return window.innerWidth > 1000;
    }

    startMoving() {
        this.el.classList.add('animate');
    }
}

export { Process };
