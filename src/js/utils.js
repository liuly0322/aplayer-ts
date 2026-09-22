export const isMobile = (function () {
    try {
        return /mobile/i.test(window.navigator.userAgent);
    } catch (e) {
        console.error(e);
        return false;
    }
})();

/**
* Parse second to time string
*
* @param {Number} second
* @return {String} 00:00 or 00:00:00
*/
export function secondToTime(second) {
    const add0 = (num) => (num < 10 ? '0' : '') + num;
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? add0(hour) + ':' : '') + add0(min) + ':' + add0(sec);
}

/**
 * control play progress
 */
// get element's view position
export function getElementViewLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    const elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    const fullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    while (current !== null && (!fullscreen || current !== element)) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft - elementScrollLeft;
}

export function getElementViewTop(element, noScrollTop) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    const elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    return noScrollTop ? actualTop : actualTop - elementScrollTop;
}

export const nameMap = {
    dragStart: isMobile ? 'touchstart' : 'mousedown',
    dragMove: isMobile ? 'touchmove' : 'mousemove',
    dragEnd: isMobile ? 'touchend' : 'mouseup'
};

/**
 * get random order, using Fisher–Yates shuffle
 */
export function randomOrder(length) {
    const order = Array.from({ length }, (_, index) => index);
    for (let i = order.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const itemAtIndex = order[randomIndex];
        order[randomIndex] = order[i];
        order[i] = itemAtIndex;
    }
    return order;
}
