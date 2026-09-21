import tplPlayer from '../template/player.js';

function Template(container, options, randomOrder, tplRenderers) {
    let cover = '';
    if (options.audio.length) {
        if (options.order === 'random') {
            cover = options.audio[randomOrder[0]].cover;
        }
        else {
            cover = options.audio[0].cover;
        }
    }

    container.innerHTML = tplPlayer(options, cover, tplRenderers);

    const selectElement = (selector) => container.querySelector('.aplayer-' + selector);

    return {
        lrc: selectElement('lrc-contents'),
        lrcWrap: selectElement('lrc'),
        ptime: selectElement('ptime'),
        info: selectElement('info'),
        time: selectElement('time'),
        barWrap: selectElement('bar-wrap'),
        button: selectElement('button'),
        body: selectElement('body'),
        list: selectElement('list'),
        listOl: selectElement('list ol'),
        listCurs: container.querySelectorAll('.aplayer-list-cur'),
        played: selectElement('played'),
        loaded: selectElement('loaded'),
        thumb: selectElement('thumb'),
        volume: selectElement('volume'),
        volumeBar: selectElement('volume-bar'),
        volumeButton: selectElement('time button'),
        volumeBarWrap: selectElement('volume-bar-wrap'),
        loop: selectElement('icon-loop'),
        order: selectElement('icon-order'),
        menu: selectElement('icon-menu'),
        pic: selectElement('pic'),
        title: selectElement('title'),
        author: selectElement('author'),
        dtime: selectElement('dtime'),
        notice: selectElement('notice'),
        miniSwitcher: selectElement('miniswitcher'),
        skipBackButton: selectElement('icon-back'),
        skipForwardButton: selectElement('icon-forward'),
        skipPlayButton: selectElement('icon-play'),
        lrcButton: selectElement('icon-lrc'),
    }
}

export default Template;
