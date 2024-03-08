import { secondToTime, isMobile, randomOrder } from './utils';
import { pause, play, volumeDown, volumeOff, volumeUp } from './icons';
import handleOption from './options';
import Template from './template';
import { notFixedModeTplRenderers } from '../template/player';
import Bar from './bar';
import Lrc from './lrc';
import Controller from './controller';
import Timer from './timer';
import Events, { audioEvents } from './events';
import List from './list';

const instances = [];

const getPlayerStruct = () => {
    const struct = {
        tplRenderers: notFixedModeTplRenderers,
        get duration() {
            return isNaN(struct.audio.duration) ? 0 : struct.audio.duration;
        }
        // you may check other public attributes below
        // the origin code init them in the constructor (the current init function)
        // mode: null,
        // disableTimeupdate: null,
        // randomOrder: null,
        // events: null,
        // bar: null,
        // list: null,
        // audio: null,
        // container: null,
        // lrc: null,
        // options: null,
        // template: null,
    }
    return struct
}

const APlayer = () => {
    // get public attributes
    const player = getPlayerStruct()

    // inner attributes
    const volumeStorage = (() => {
        const storageName = player.options.storageName;
        const data = JSON.parse(localStorage.getItem(storageName)) || {};
        data.volume ||= player.options.volume;
        return {
            get() {
                return data.volume;
            },
            set(value) {
                data.volume = value;
                localStorage.setItem(storageName, JSON.stringify(data));
            }
        }
    })();
    let paused = true;
    let hls = null;
    let noticeTime;

    // inner methods
    function initAudio() {
        player.audio = document.createElement('audio');
        player.audio.preload = player.options.preload;

        audioEvents.forEach((eventName) => {
            player.audio.addEventListener(eventName, (e) => {
                player.events.trigger(eventName, e);
            });
        });

        player.volume(volumeStorage.get(), true);
    }
    function bindEvents() {
        player.on('play', () => {
            if (paused) {
                setUIPlaying();
            }
        });

        player.on('pause', () => {
            if (!paused) {
                setUIPaused();
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
                    if (!paused) {
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
                        player.list.switch(nextIndex());
                        player.play();
                    }
                    else {
                        player.list.switch(nextIndex());
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
    function setUIPlaying() {
        if (paused) {
            paused = false;
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
            instances.filter((instance) => instance !== player).forEach((instance) => {
                instance.pause();
            });
        }
    }
    function setUIPaused() {
        if (!paused) {
            paused = true;

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
    function prevIndex() {
        if (player.list.audios.length > 1) {
            if (player.options.order === 'list') {
                return player.list.index - 1 < 0 ? player.list.audios.length - 1 : player.list.index - 1;
            }
            else if (player.options.order === 'random') {
                const index = player.randomOrder.indexOf(player.list.index);
                if (index === 0) {
                    return player.randomOrder[player.randomOrder.length - 1];
                }
                else {
                    return player.randomOrder[index - 1];
                }
            }
        }
        else {
            return 0;
        }
    }
    function nextIndex() {
        if (player.list.audios.length > 1) {
            if (player.options.order === 'list') {
                return (player.list.index + 1) % player.list.audios.length;
            }
            else if (player.options.order === 'random') {
                const index = player.randomOrder.indexOf(player.list.index);
                if (index === player.randomOrder.length - 1) {
                    return player.randomOrder[0];
                }
                else {
                    return player.randomOrder[index + 1];
                }
            }
        }
        else {
            return 0;
        }
    }

    // add new public methods to the player
    player.init = (options) => {
        player.options = handleOption(options);
        player.container = player.options.container;
        player.mode = 'normal';

        player.randomOrder = randomOrder(player.options.audio.length);

        player.container.classList.add('aplayer');
        if (player.options.lrcType && !player.options.fixed) {
            player.container.classList.add('aplayer-withlrc');
        }
        if (player.options.audio.length > 1) {
            player.container.classList.add('aplayer-withlist');
        }
        if (isMobile) {
            player.container.classList.add('aplayer-mobile');
        }
        const arrow = player.container.offsetWidth <= 300;
        if (arrow) {
            player.container.classList.add('aplayer-arrow');
        }

        // save lrc
        if (player.options.lrcType === 2 || player.options.lrcType === true) {
            const lrcEle = player.container.getElementsByClassName('aplayer-lrc-content');
            for (let i = 0; i < lrcEle.length; i++) {
                if (player.options.audio[i]) {
                    player.options.audio[i].lrc = lrcEle[i].innerHTML;
                }
            }
        }

        player.template = Template(player.container, player.options, player.randomOrder, player.tplRenderers)

        if (player.options.fixed) {
            player.container.classList.add('aplayer-fixed');
            player.template.body.style.width = player.template.body.offsetWidth - 18 + 'px';
        }
        if (player.options.mini) {
            player.setMode('mini');
            player.template.info.style.display = 'block';
        }
        if (player.template.info.offsetWidth < 200) {
            player.template.time.classList.add('aplayer-time-narrow');
        }

        if (player.options.lrcType) {
            player.lrc = Lrc({
                container: player.template.lrc,
                async: player.options.lrcType === 3,
                player: player,
            });
        }

        player.events = Events();
        player.bar = Bar(player.template);
        player.controller = Controller(player);
        player.timer = Timer(player);
        player.list = List(player);

        initAudio();
        bindEvents();
        if (player.options.order === 'random') {
            player.list.switch(player.randomOrder[0]);
        }
        else {
            player.list.switch(0);
        }

        // autoplay
        if (player.options.autoplay) {
            player.play();
        }

        instances.push(player);
        return player
    }
    player.setAudio = (audio) => {
        if (hls) {
            hls.destroy();
            hls = null;
        }
        let type = audio.type;
        if (player.options.customAudioType && player.options.customAudioType[type]) {
            if (Object.prototype.toString.call(player.options.customAudioType[type]) === '[object Function]') {
                player.options.customAudioType[type](player.audio, audio, player);
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
                    hls = new Hls();
                    hls.loadSource(audio.url);
                    hls.attachMedia(player.audio);
                }
                else if (player.audio.canPlayType('application/x-mpegURL') || player.audio.canPlayType('application/vnd.apple.mpegURL')) {
                    player.audio.src = audio.url;
                }
                else {
                    player.notice('Error: HLS is not supported.');
                }
            }
            else if (type === 'normal') {
                player.audio.src = audio.url;
            }
        }
        player.seek(0);

        if (!paused) {
            player.audio.play();
        }
    }
    player.destroy = () => {
        instances.splice(instances.indexOf(player), 1);
        player.pause();
        player.container.innerHTML = '';
        player.audio.src = '';
        player.timer.destroy();
        player.events.trigger('destroy');
    }
    player.setMode = (mode = 'normal') => {
        player.mode = mode;
        if (mode === 'mini') {
            player.container.classList.add('aplayer-narrow');
        }
        else if (mode === 'normal') {
            player.container.classList.remove('aplayer-narrow');
        }
    }
    player.notice = (text, time = 2000, opacity = 0.8) => {
        player.template.notice.innerHTML = text;
        player.template.notice.style.opacity = opacity;
        if (noticeTime) {
            clearTimeout(noticeTime);
        }
        player.events.trigger('noticeshow', {
            text: text,
        });
        if (time) {
            noticeTime = setTimeout(() => {
                player.template.notice.style.opacity = 0;
                player.events.trigger('noticehide');
            }, time);
        }
    }
    player.theme = (color = player.list.audios[player.list.index].theme || player.options.theme, index = player.list.index, isReset = true) => {
        if (isReset) {
            player.list.audios[index] && (player.list.audios[index].theme = color);
        }
        player.template.listCurs[index] && (player.template.listCurs[index].style.backgroundColor = color);
        if (index === player.list.index) {
            player.template.pic.style.backgroundColor = color;
            player.template.played.style.background = color;
            player.template.thumb.style.background = color;
            player.template.volume.style.background = color;
        }
    }
    player.seek = (time) => {
        time = Math.max(time, 0);
        time = Math.min(time, player.duration);
        player.audio.currentTime = time;
        player.bar.set('played', time / player.duration, 'width');
        player.template.ptime.innerHTML = secondToTime(time);
    }
    player.play = () => {
        setUIPlaying();

        const playPromise = player.audio.play();
        if (playPromise) {
            playPromise.catch((e) => {
                console.warn(e);
                if (e.name === 'NotAllowedError') {
                    setUIPaused();
                }
            });
        }
    }
    player.pause = () => {
        setUIPaused();
        player.audio.pause();
    }
    player.switchVolumeIcon = () => {
        if (player.volume() >= 0.95) {
            player.template.volumeButton.innerHTML = volumeUp;
        }
        else if (player.volume() > 0) {
            player.template.volumeButton.innerHTML = volumeDown;
        }
        else {
            player.template.volumeButton.innerHTML = volumeOff;
        }
    }
    player.volume = (percentage, nostorage) => {
        percentage = parseFloat(percentage);
        if (!isNaN(percentage)) {
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            player.bar.set('volume', percentage, 'height');
            if (!nostorage) {
                volumeStorage.set(percentage);
            }

            player.audio.volume = percentage;
            if (player.audio.muted) {
                player.audio.muted = false;
            }

            player.switchVolumeIcon();
        }

        return player.audio.muted ? 0 : player.audio.volume;
    }
    player.on = (name, callback) => {
        player.events.on(name, callback);
    }
    player.toggle = () => {
        if (player.template.button.classList.contains('aplayer-play')) {
            player.play();
        }
        else if (player.template.button.classList.contains('aplayer-pause')) {
            player.pause();
        }
    }
    player.skipBack = () => {
        player.list.switch(prevIndex());
    }
    player.skipForward = () => {
        player.list.switch(nextIndex());
    }
    player.use = (plugin) => {
        plugin(player);
        return player;
    }
    return player;
}


export default APlayer;
