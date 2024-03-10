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

function type(name) {
    if (playerEvents.indexOf(name) !== -1) {
        return 'player';
    }
    else if (audioEvents.indexOf(name) !== -1) {
        return 'audio';
    }
}

export default () => {
    const events = {};
    return {
        on: function (name, callback) {
            if (type(name) && typeof callback === 'function') {
                events[name] ||= [];
                events[name].push(callback);
            }
        },
        trigger: function (name, data) {
            events[name]?.forEach(callback => callback(data));
        }
    }
}

