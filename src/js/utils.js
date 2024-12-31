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
    const add0 = (num) => num < 10 ? '0' + num : '' + num;
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
}

/**
 * control play progress
 */
// get element's view position
export function getElementViewLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    const elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
    }
    else {
        while (current !== null && current !== element) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
    }
    return actualLeft - elementScrollLeft;
}

export function getElementViewTop(element, noScrollTop) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    let elementScrollTop = 0;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
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
    function shuffle(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        }
        return arr;
    }
    return shuffle([...Array(length)].map(function (item, i) {
        return i;
    }));
}
