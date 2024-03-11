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
        mode: 'normal',
        afterInitHooks: [],
        get duration() {
            return isNaN(struct.audio.duration) ? 0 : struct.audio.duration;
        }
        // you may check other public attributes below
        // the origin code init them in the constructor (the current init function)
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
    let volumeStorage;
    let paused = true;
    let hls = null;
    let timer = Timer(player);
    let noticeTime;

    // objects that are public but has a inner name
    // these are never reassigned, so they share the same reference
    let options_;
    let container_;
    let template_;
    let list_;

    // inner methods
    function initAudio() {
        player.audio = document.createElement('audio');
        player.audio.preload = options_.preload;

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
                if (template_.ptime.innerHTML !== currentTime) {
                    template_.ptime.innerHTML = currentTime;
                }
            }
        });

        // show audio time: the metadata has loaded or changed
        player.on('durationchange', () => {
            if (player.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                template_.dtime.innerHTML = secondToTime(player.duration);
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
            if (list_.audios.length > 1) {
                player.notice('An audio error has occurred, player will skip forward in 2 seconds.');
                skipTime = setTimeout(() => {
                    player.skipForward();
                    if (!paused) {
                        player.play();
                    }
                }, 2000);
            }
            else if (list_.audios.length === 1) {
                player.notice('An audio error has occurred.');
            }
        });
        player.events.on('listswitch', () => {
            skipTime && clearTimeout(skipTime);
        });

        // multiple audio play
        player.on('ended', () => {
            if (options_.loop === 'none') {
                if (options_.order === 'list') {
                    if (list_.index < list_.audios.length - 1) {
                        list_.switch((list_.index + 1) % list_.audios.length);
                        player.play();
                    }
                    else {
                        list_.switch((list_.index + 1) % list_.audios.length);
                        player.pause();
                    }
                }
                else if (options_.order === 'random') {
                    if (player.randomOrder.indexOf(list_.index) < player.randomOrder.length - 1) {
                        list_.switch(nextIndex());
                        player.play();
                    }
                    else {
                        list_.switch(nextIndex());
                        player.pause();
                    }
                }
            }
            else if (options_.loop === 'one') {
                list_.switch(list_.index);
                player.play();
            }
            else if (options_.loop === 'all') {
                player.skipForward();
                player.play();
            }
        });
    }
    function setUIPlaying() {
        if (paused) {
            paused = false;
            template_.button.classList.remove('aplayer-play');
            template_.button.classList.add('aplayer-pause');
            template_.button.innerHTML = '';
            setTimeout(() => {
                template_.button.innerHTML = pause;
            }, 100);
            template_.skipPlayButton.innerHTML = pause;
        }

        timer.enable();

        if (options_.mutex) {
            instances.filter((instance) => instance !== player).forEach((instance) => {
                instance.pause();
            });
        }
    }
    function setUIPaused() {
        if (!paused) {
            paused = true;

            template_.button.classList.remove('aplayer-pause');
            template_.button.classList.add('aplayer-play');
            template_.button.innerHTML = '';
            setTimeout(() => {
                template_.button.innerHTML = play;
            }, 100);
            template_.skipPlayButton.innerHTML = play;
        }

        container_.classList.remove('aplayer-loading');
        timer.disable();
    }
    function prevIndex() {
        if (list_.audios.length > 1) {
            if (options_.order === 'list') {
                return list_.index - 1 < 0 ? list_.audios.length - 1 : list_.index - 1;
            }
            else if (options_.order === 'random') {
                const index = player.randomOrder.indexOf(list_.index);
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
        if (list_.audios.length > 1) {
            if (options_.order === 'list') {
                return (list_.index + 1) % list_.audios.length;
            }
            else if (options_.order === 'random') {
                const index = player.randomOrder.indexOf(list_.index);
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
        options_ = handleOption(options);
        player.options = options_;
        container_ = options_.container;
        player.container = container_;

        container_.classList.add('aplayer');
        if (options_.lrcType && !options_.fixed) {
            container_.classList.add('aplayer-withlrc');
        }
        if (options_.audio.length > 1) {
            container_.classList.add('aplayer-withlist');
        }
        if (isMobile) {
            container_.classList.add('aplayer-mobile');
        }
        const arrow = container_.offsetWidth <= 300;
        if (arrow) {
            container_.classList.add('aplayer-arrow');
        }

        // save lrc
        if (options_.lrcType === 2 || options_.lrcType === true) {
            const lrcEle = container_.getElementsByClassName('aplayer-lrc-content');
            for (let i = 0; i < lrcEle.length; i++) {
                if (options_.audio[i]) {
                    options_.audio[i].lrc = lrcEle[i].innerHTML;
                }
            }
        }

        player.randomOrder = randomOrder(options_.audio.length);
        template_ = Template(container_, options_, player.randomOrder, player.tplRenderers)
        player.template = template_;

        if (options_.fixed) {
            container_.classList.add('aplayer-fixed');
            template_.body.style.width = template_.body.offsetWidth - 18 + 'px';
        }
        if (options_.mini) {
            player.setMode('mini');
            template_.info.style.display = 'block';
        }
        if (template_.info.offsetWidth < 200) {
            template_.time.classList.add('aplayer-time-narrow');
        }

        if (options_.lrcType) {
            player.lrc = Lrc({
                container: template_.lrc,
                async: options_.lrcType === 3,
                player: player,
            });
        }

        volumeStorage = (() => {
            const storageName = options_.storageName;
            const data = JSON.parse(localStorage.getItem(storageName)) || {};
            data.volume ||= options_.volume;
            return {
                get() {
                    return data.volume;
                },
                set(value) {
                    data.volume = value;
                    localStorage.setItem(storageName, JSON.stringify(data));
                }
            }
        })()

        player.events = Events();
        player.bar = Bar(template_);
        player.controller = Controller(player);
        list_ = List(player);
        player.list = list_;

        initAudio();
        bindEvents();
        if (options_.order === 'random') {
            list_.switch(player.randomOrder[0]);
        }
        else {
            list_.switch(0);
        }

        // autoplay
        if (options_.autoplay) {
            player.play();
        }

        instances.push(player);

        player.afterInitHooks.forEach((hook) => {
            hook(player);
        })

        return player
    }
    player.setAudio = (audio) => {
        if (hls) {
            hls.destroy();
            hls = null;
        }
        let type = audio.type;
        if (options_.customAudioType && options_.customAudioType[type]) {
            if (Object.prototype.toString.call(options_.customAudioType[type]) === '[object Function]') {
                options_.customAudioType[type](player.audio, audio, player);
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
        container_.innerHTML = '';
        player.audio.src = '';
        timer.destroy();
        player.events.trigger('destroy');
    }
    player.setMode = (mode = 'normal') => {
        player.mode = mode;
        if (mode === 'mini') {
            container_.classList.add('aplayer-narrow');
        }
        else if (mode === 'normal') {
            container_.classList.remove('aplayer-narrow');
        }
    }
    player.notice = (text, time = 2000, opacity = 0.8) => {
        template_.notice.innerHTML = text;
        template_.notice.style.opacity = opacity;
        if (noticeTime) {
            clearTimeout(noticeTime);
        }
        player.events.trigger('noticeshow', {
            text: text,
        });
        if (time) {
            noticeTime = setTimeout(() => {
                template_.notice.style.opacity = 0;
                player.events.trigger('noticehide');
            }, time);
        }
    }
    player.theme = (color = list_.audios[list_.index].theme || options_.theme, index = list_.index, isReset = true) => {
        if (isReset) {
            list_.audios[index] && (list_.audios[index].theme = color);
        }
        template_.listCurs[index] && (template_.listCurs[index].style.backgroundColor = color);
        if (index === list_.index) {
            template_.pic.style.backgroundColor = color;
            template_.played.style.background = color;
            template_.thumb.style.background = color;
            template_.volume.style.background = color;
        }
    }
    player.seek = (time) => {
        time = Math.max(time, 0);
        time = Math.min(time, player.duration);
        player.audio.currentTime = time;
        player.bar.set('played', time / player.duration, 'width');
        template_.ptime.innerHTML = secondToTime(time);
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
            template_.volumeButton.innerHTML = volumeUp;
        }
        else if (player.volume() > 0) {
            template_.volumeButton.innerHTML = volumeDown;
        }
        else {
            template_.volumeButton.innerHTML = volumeOff;
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
        if (template_.button.classList.contains('aplayer-play')) {
            player.play();
        }
        else if (template_.button.classList.contains('aplayer-pause')) {
            player.pause();
        }
    }
    player.skipBack = () => {
        list_.switch(prevIndex());
    }
    player.skipForward = () => {
        list_.switch(nextIndex());
    }
    player.use = (plugin) => {
        plugin(player);
        return player;
    }
    return player;
}


export default APlayer;
