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

    container.innerHTML = tplPlayer({
        options: options,
        cover: cover,
        ...tplRenderers
    });

    const selectElement = (selector) => container.querySelector(selector);

    return {
        lrc: selectElement('.aplayer-lrc-contents'),
        lrcWrap: selectElement('.aplayer-lrc'),
        ptime: selectElement('.aplayer-ptime'),
        info: selectElement('.aplayer-info'),
        time: selectElement('.aplayer-time'),
        barWrap: selectElement('.aplayer-bar-wrap'),
        button: selectElement('.aplayer-button'),
        body: selectElement('.aplayer-body'),
        list: selectElement('.aplayer-list'),
        listOl: selectElement('.aplayer-list ol'),
        listCurs: container.querySelectorAll('.aplayer-list-cur'),
        played: selectElement('.aplayer-played'),
        loaded: selectElement('.aplayer-loaded'),
        thumb: selectElement('.aplayer-thumb'),
        volume: selectElement('.aplayer-volume'),
        volumeBar: selectElement('.aplayer-volume-bar'),
        volumeButton: selectElement('.aplayer-time button'),
        volumeBarWrap: selectElement('.aplayer-volume-bar-wrap'),
        loop: selectElement('.aplayer-icon-loop'),
        order: selectElement('.aplayer-icon-order'),
        menu: selectElement('.aplayer-icon-menu'),
        pic: selectElement('.aplayer-pic'),
        title: selectElement('.aplayer-title'),
        author: selectElement('.aplayer-author'),
        dtime: selectElement('.aplayer-dtime'),
        notice: selectElement('.aplayer-notice'),
        miniSwitcher: selectElement('.aplayer-miniswitcher'),
        skipBackButton: selectElement('.aplayer-icon-back'),
        skipForwardButton: selectElement('.aplayer-icon-forward'),
        skipPlayButton: selectElement('.aplayer-icon-play'),
        lrcButton: selectElement('.aplayer-icon-lrc'),
    }
}

export default Template;
