import { secondToTime, isMobile, randomOrder } from './utils';
import { pause, play, volumeDown, volumeOff, volumeUp } from './icons';
import handleOption from './options';
import Template from './template';
import { notFixedModeTplRenderers } from '../template/player';
import Bar from './bar';
import VolumnStorage from './volumeStorage';
import Lrc from './lrc';
import Controller from './controller';
import Timer from './timer';
import Events, { audioEvents } from './events';
import List from './list';

const instances = [];

let getTplRenderers = notFixedModeTplRenderers
export function setTplRenderers(renderers) {
    getTplRenderers = renderers
}

function initAudio(player) {
    player.audio = document.createElement('audio');
    player.audio.preload = player.options.preload;

    for (let i = 0; i < audioEvents.length; i++) {
        player.audio.addEventListener(audioEvents[i], (e) => {
            player.events.trigger(audioEvents[i], e);
        });
    }

    player.volume(player.storage.getVolume(), true);
}

function bindEvents(player) {
    player.on('play', () => {
        if (player.paused) {
            setUIPlaying(player);
        }
    });

    player.on('pause', () => {
        if (!player.paused) {
            setUIPaused(player);
        }
    });

    player.on('timeupdate', () => {
        if (!player.disableTimeupdate) {
            player.bar.set('played', player.audio.currentTime / player.duration, 'width');
            player.lrc && player.lrc.update();
            const currentTime = secondToTime(player.audio.currentTime);
            if (player.template.ptime.innerHTML !== currentTime) {
                player.template.ptime.innerHTML = currentTime;
            }
        }
    });

    // show audio time: the metadata has loaded or changed
    player.on('durationchange', () => {
        if (player.duration !== 1) {           // compatibility: Android browsers will output 1 at first
            player.template.dtime.innerHTML = secondToTime(player.duration);
        }
    });

    // show audio loaded bar: to inform interested parties of progress downloading the media
    player.on('progress', () => {
        const percentage = player.audio.buffered.length ? player.audio.buffered.end(player.audio.buffered.length - 1) / player.duration : 0;
        player.bar.set('loaded', percentage, 'width');
    });

    // audio download error: an error occurs
    let skipTime;
    player.on('error', () => {
        if (player.list.audios.length > 1) {
            player.notice('An audio error has occurred, player will skip forward in 2 seconds.');
            skipTime = setTimeout(() => {
                player.skipForward();
                if (!player.paused) {
                    player.play();
                }
            }, 2000);
        }
        else if (player.list.audios.length === 1) {
            player.notice('An audio error has occurred.');
        }
    });
    player.events.on('listswitch', () => {
        skipTime && clearTimeout(skipTime);
    });

    // multiple audio play
    player.on('ended', () => {
        if (player.options.loop === 'none') {
            if (player.options.order === 'list') {
                if (player.list.index < player.list.audios.length - 1) {
                    player.list.switch((player.list.index + 1) % player.list.audios.length);
                    player.play();
                }
                else {
                    player.list.switch((player.list.index + 1) % player.list.audios.length);
                    player.pause();
                }
            }
            else if (player.options.order === 'random') {
                if (player.randomOrder.indexOf(player.list.index) < player.randomOrder.length - 1) {
                    player.list.switch(player.nextIndex());
                    player.play();
                }
                else {
                    player.list.switch(player.nextIndex());
                    player.pause();
                }
            }
        }
        else if (player.options.loop === 'one') {
            player.list.switch(player.list.index);
            player.play();
        }
        else if (player.options.loop === 'all') {
            player.skipForward();
            player.play();
        }
    });
}

function setUIPlaying(player) {
    if (player.paused) {
        player.paused = false;
        player.template.button.classList.remove('aplayer-play');
        player.template.button.classList.add('aplayer-pause');
        player.template.button.innerHTML = '';
        setTimeout(() => {
            player.template.button.innerHTML = pause;
        }, 100);
        player.template.skipPlayButton.innerHTML = pause;
    }

    player.timer.enable();

    if (player.options.mutex) {
        for (let i = 0; i < instances.length; i++) {
            if (player !== instances[i]) {
                instances[i].pause();
            }
        }
    }
}

function setUIPaused(player) {
    if (!player.paused) {
        player.paused = true;

        player.template.button.classList.remove('aplayer-pause');
        player.template.button.classList.add('aplayer-play');
        player.template.button.innerHTML = '';
        setTimeout(() => {
            player.template.button.innerHTML = play;
        }, 100);
        player.template.skipPlayButton.innerHTML = play;
    }

    player.container.classList.remove('aplayer-loading');
    player.timer.disable();
}

class APlayer {

    /**
     * APlayer constructor function
     *
     * @param {Object} options - See README
     * @constructor
     */
    constructor(options) {
        options.fixed = false;
        const tplRenderers = getTplRenderers()
        if (getTplRenderers != notFixedModeTplRenderers) {
            options.fixed = true;
            getTplRenderers = notFixedModeTplRenderers
        }
        this.options = handleOption(options);
        this.container = this.options.container;
        this.paused = true;
        this.playedPromise = Promise.resolve();
        this.mode = 'normal';

        this.randomOrder = randomOrder(this.options.audio.length);

        this.container.classList.add('aplayer');
        if (this.options.lrcType && !this.options.fixed) {
            this.container.classList.add('aplayer-withlrc');
        }
        if (this.options.audio.length > 1) {
            this.container.classList.add('aplayer-withlist');
        }
        if (isMobile) {
            this.container.classList.add('aplayer-mobile');
        }
        const arrow = this.container.offsetWidth <= 300;
        if (arrow) {
            this.container.classList.add('aplayer-arrow');
        }

        // save lrc
        if (this.options.lrcType === 2 || this.options.lrcType === true) {
            const lrcEle = this.container.getElementsByClassName('aplayer-lrc-content');
            for (let i = 0; i < lrcEle.length; i++) {
                if (this.options.audio[i]) {
                    this.options.audio[i].lrc = lrcEle[i].innerHTML;
                }
            }
        }

        this.template = Template(this.container, this.options, this.randomOrder, tplRenderers);

        if (this.options.fixed) {
            this.container.classList.add('aplayer-fixed');
            this.template.body.style.width = this.template.body.offsetWidth - 18 + 'px';
        }
        if (this.options.mini) {
            this.setMode('mini');
            this.template.info.style.display = 'block';
        }
        if (this.template.info.offsetWidth < 200) {
            this.template.time.classList.add('aplayer-time-narrow');
        }

        if (this.options.lrcType) {
            this.lrc = Lrc({
                container: this.template.lrc,
                async: this.options.lrcType === 3,
                player: this,
            });
        }

        this.events = Events();
        this.storage = VolumnStorage(this);
        this.bar = Bar(this.template);
        this.controller = Controller(this);
        this.timer = Timer(this);
        this.list = List(this);

        initAudio(this);
        bindEvents(this);
        if (this.options.order === 'random') {
            this.list.switch(this.randomOrder[0]);
        }
        else {
            this.list.switch(0);
        }

        // autoplay
        if (this.options.autoplay) {
            this.play();
        }

        instances.push(this);
    }

    setAudio(audio) {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
        let type = audio.type;
        if (this.options.customAudioType && this.options.customAudioType[type]) {
            if (Object.prototype.toString.call(this.options.customAudioType[type]) === '[object Function]') {
                this.options.customAudioType[type](this.audio, audio, this);
            }
            else {
                console.error(`Illegal customType: ${type}`);
            }
        }
        else {
            if (!type || type === 'auto') {
                if (/m3u8(#|\?|$)/i.exec(audio.url)) {
                    type = 'hls';
                }
                else {
                    type = 'normal';
                }
            }
            if (type === 'hls') {
                // eslint-disable-next-line no-undef
                if (Hls.isSupported()) {
                    // eslint-disable-next-line no-undef
                    this.hls = new Hls();
                    this.hls.loadSource(audio.url);
                    this.hls.attachMedia(this.audio);
                }
                else if (this.audio.canPlayType('application/x-mpegURL') || this.audio.canPlayType('application/vnd.apple.mpegURL')) {
                    this.audio.src = audio.url;
                }
                else {
                    this.notice('Error: HLS is not supported.');
                }
            }
            else if (type === 'normal') {
                this.audio.src = audio.url;
            }
        }
        this.seek(0);

        if (!this.paused) {
            this.audio.play();
        }
    }

    theme(color = this.list.audios[this.list.index].theme || this.options.theme, index = this.list.index, isReset = true) {
        if (isReset) {
            this.list.audios[index] && (this.list.audios[index].theme = color);
        }
        this.template.listCurs[index] && (this.template.listCurs[index].style.backgroundColor = color);
        if (index === this.list.index) {
            this.template.pic.style.backgroundColor = color;
            this.template.played.style.background = color;
            this.template.thumb.style.background = color;
            this.template.volume.style.background = color;
        }
    }

    seek(time) {
        time = Math.max(time, 0);
        time = Math.min(time, this.duration);
        this.audio.currentTime = time;
        this.bar.set('played', time / this.duration, 'width');
        this.template.ptime.innerHTML = secondToTime(time);
    }

    get duration() {
        return isNaN(this.audio.duration) ? 0 : this.audio.duration;
    }

    play() {
        setUIPlaying(this);

        const playPromise = this.audio.play();
        if (playPromise) {
            playPromise.catch((e) => {
                console.warn(e);
                if (e.name === 'NotAllowedError') {
                    setUIPaused(this);
                }
            });
        }
    }

    pause() {
        setUIPaused(this);
        this.audio.pause();
    }

    switchVolumeIcon() {
        if (this.volume() >= 0.95) {
            this.template.volumeButton.innerHTML = volumeUp;
        }
        else if (this.volume() > 0) {
            this.template.volumeButton.innerHTML = volumeDown;
        }
        else {
            this.template.volumeButton.innerHTML = volumeOff;
        }
    }

    /**
     * Set volume
     */
    volume(percentage, nostorage) {
        percentage = parseFloat(percentage);
        if (!isNaN(percentage)) {
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.bar.set('volume', percentage, 'height');
            if (!nostorage) {
                this.storage.setVolume(percentage);
            }

            this.audio.volume = percentage;
            if (this.audio.muted) {
                this.audio.muted = false;
            }

            this.switchVolumeIcon();
        }

        return this.audio.muted ? 0 : this.audio.volume;
    }

    /**
     * bind events
     */
    on(name, callback) {
        this.events.on(name, callback);
    }

    /**
     * toggle between play and pause
     */
    toggle() {
        if (this.template.button.classList.contains('aplayer-play')) {
            this.play();
        }
        else if (this.template.button.classList.contains('aplayer-pause')) {
            this.pause();
        }
    }

    /**
     * destroy this player
     */
    destroy() {
        instances.splice(instances.indexOf(this), 1);
        this.pause();
        this.container.innerHTML = '';
        this.audio.src = '';
        this.timer.destroy();
        this.events.trigger('destroy');
    }

    setMode(mode = 'normal') {
        this.mode = mode;
        if (mode === 'mini') {
            this.container.classList.add('aplayer-narrow');
        }
        else if (mode === 'normal') {
            this.container.classList.remove('aplayer-narrow');
        }
    }

    notice(text, time = 2000, opacity = 0.8) {
        this.template.notice.innerHTML = text;
        this.template.notice.style.opacity = opacity;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        this.events.trigger('noticeshow', {
            text: text,
        });
        if (time) {
            this.noticeTime = setTimeout(() => {
                this.template.notice.style.opacity = 0;
                this.events.trigger('noticehide');
            }, time);
        }
    }

    prevIndex() {
        if (this.list.audios.length > 1) {
            if (this.options.order === 'list') {
                return this.list.index - 1 < 0 ? this.list.audios.length - 1 : this.list.index - 1;
            }
            else if (this.options.order === 'random') {
                const index = this.randomOrder.indexOf(this.list.index);
                if (index === 0) {
                    return this.randomOrder[this.randomOrder.length - 1];
                }
                else {
                    return this.randomOrder[index - 1];
                }
            }
        }
        else {
            return 0;
        }
    }

    nextIndex() {
        if (this.list.audios.length > 1) {
            if (this.options.order === 'list') {
                return (this.list.index + 1) % this.list.audios.length;
            }
            else if (this.options.order === 'random') {
                const index = this.randomOrder.indexOf(this.list.index);
                if (index === this.randomOrder.length - 1) {
                    return this.randomOrder[0];
                }
                else {
                    return this.randomOrder[index + 1];
                }
            }
        }
        else {
            return 0;
        }
    }

    skipBack() {
        this.list.switch(this.prevIndex());
    }

    skipForward() {
        this.list.switch(this.nextIndex());
    }
}

export default APlayer;
