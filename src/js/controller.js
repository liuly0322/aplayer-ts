import { isMobile, nameMap, getElementViewLeft, getElementViewTop, secondToTime } from './utils.js';
import { orderList, orderRandom, loopOne, loopNone, loopAll } from './icons.js';

export default (player) => {
    initPlayButton(player);
    initPlayBar(player);
    initOrderButton(player);
    initLoopButton(player);
    initMenuButton(player);
    if (!isMobile) {
        initVolumeButton(player);
    }
    initMiniSwitcher(player);
    initSkipButton(player);
    initLrcButton(player);
}

function initPlayButton(player) {
    player.template.pic.addEventListener('click', () => {
        player.toggle();
    });
}

function initPlayBar(player) {
    const thumbMove = (e) => {
        let percentage = ((e.clientX || e.changedTouches[0].clientX) - getElementViewLeft(player.template.barWrap)) / player.template.barWrap.clientWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        player.bar.set('played', percentage, 'width');
        player.lrc && player.lrc.update(percentage * player.duration);
        player.template.ptime.innerHTML = secondToTime(percentage * player.duration);
    };

    const thumbUp = (e) => {
        document.removeEventListener(nameMap.dragEnd, thumbUp);
        document.removeEventListener(nameMap.dragMove, thumbMove);
        let percentage = ((e.clientX || e.changedTouches[0].clientX) - getElementViewLeft(player.template.barWrap)) / player.template.barWrap.clientWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        player.bar.set('played', percentage, 'width');
        player.seek(player.bar.get('played', 'width') * player.duration);
        player.disableTimeupdate = false;
    };

    player.template.barWrap.addEventListener(nameMap.dragStart, () => {
        player.disableTimeupdate = true;
        document.addEventListener(nameMap.dragMove, thumbMove);
        document.addEventListener(nameMap.dragEnd, thumbUp);
    });
}

function initVolumeButton(player) {
    player.template.volumeButton.addEventListener('click', () => {
        if (player.audio.muted) {
            player.audio.muted = false;
            player.switchVolumeIcon();
            player.bar.set('volume', player.volume(), 'height');
        }
        else {
            player.audio.muted = true;
            player.switchVolumeIcon();
            player.bar.set('volume', 0, 'height');
        }
    });

    const thumbMove = (e) => {
        let percentage = 1 - ((e.clientY || e.changedTouches[0].clientY) - getElementViewTop(player.template.volumeBar, player.options.fixed)) / player.template.volumeBar.clientHeight;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        player.volume(percentage);
    };

    const thumbUp = (e) => {
        player.template.volumeBarWrap.classList.remove('aplayer-volume-bar-wrap-active');
        document.removeEventListener(nameMap.dragEnd, thumbUp);
        document.removeEventListener(nameMap.dragMove, thumbMove);
        let percentage = 1 - ((e.clientY || e.changedTouches[0].clientY) - getElementViewTop(player.template.volumeBar, player.options.fixed)) / player.template.volumeBar.clientHeight;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        player.volume(percentage);
    };

    player.template.volumeBarWrap.addEventListener(nameMap.dragStart, () => {
        player.template.volumeBarWrap.classList.add('aplayer-volume-bar-wrap-active');
        document.addEventListener(nameMap.dragMove, thumbMove);
        document.addEventListener(nameMap.dragEnd, thumbUp);
    });
}

function initOrderButton(player) {
    player.template.order.addEventListener('click', () => {
        if (player.options.order === 'list') {
            player.options.order = 'random';
            player.template.order.innerHTML = orderRandom;
        }
        else if (player.options.order === 'random') {
            player.options.order = 'list';
            player.template.order.innerHTML = orderList;
        }
    });
}

function initLoopButton(player) {
    player.template.loop.addEventListener('click', () => {
        if (player.list.audios.length > 1) {
            if (player.options.loop === 'one') {
                player.options.loop = 'none';
                player.template.loop.innerHTML = loopNone;
            }
            else if (player.options.loop === 'none') {
                player.options.loop = 'all';
                player.template.loop.innerHTML = loopAll;
            }
            else if (player.options.loop === 'all') {
                player.options.loop = 'one';
                player.template.loop.innerHTML = loopOne;
            }
        }
        else {
            if (player.options.loop === 'one' || player.options.loop === 'all') {
                player.options.loop = 'none';
                player.template.loop.innerHTML = loopNone;
            }
            else if (player.options.loop === 'none') {
                player.options.loop = 'all';
                player.template.loop.innerHTML = loopAll;
            }
        }
    });
}

function initMenuButton(player) {
    player.template.menu.addEventListener('click', () => {
        player.list.toggle();
    });
}

function initMiniSwitcher(player) {
    player.template.miniSwitcher.addEventListener('click', () => {
        player.setMode(player.mode === 'mini' ? 'normal' : 'mini');
    });
}

function initSkipButton(player) {
    player.template.skipBackButton.addEventListener('click', () => {
        player.skipBack();
    });
    player.template.skipForwardButton.addEventListener('click', () => {
        player.skipForward();
    });
    player.template.skipPlayButton.addEventListener('click', () => {
        player.toggle();
    });
}

function initLrcButton(player) {
    player.template.lrcButton.addEventListener('click', () => {
        if (player.template.lrcButton.classList.contains('aplayer-icon-lrc-inactivity')) {
            player.template.lrcButton.classList.remove('aplayer-icon-lrc-inactivity');
            player.lrc && player.lrc.show();
        }
        else {
            player.template.lrcButton.classList.add('aplayer-icon-lrc-inactivity');
            player.lrc && player.lrc.hide();
        }
    });
}
