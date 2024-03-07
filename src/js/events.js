const playerEvents = [
    'destroy',
    'listshow', 'listhide', 'listadd', 'listremove', 'listswitch', 'listclear',
    'noticeshow', 'noticehide',
    'lrcshow', 'lrchide',
];

export const audioEvents = [
    'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
    'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
    'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend',
    'timeupdate', 'volumechange', 'waiting'
];

export default () => {
    const events = {};

    function on(name, callback) {
        if (type(name) && typeof callback === 'function') {
            if (!events[name]) {
                events[name] = [];
            }
            events[name].push(callback);
        }
    }
    function trigger(name, data) {
        if (events[name] && events[name].length) {
            for (let i = 0; i < events[name].length; i++) {
                events[name][i](data);
            }
        }
    }
    function type(name) {
        if (playerEvents.indexOf(name) !== -1) {
            return 'player';
        }
        else if (audioEvents.indexOf(name) !== -1) {
            return 'audio';
        }

        console.error(`Unknown event name: ${name}`);
        return null;
    }
    return { on, trigger, type }
}

