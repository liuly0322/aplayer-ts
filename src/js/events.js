const playerEvents = (
    'destroy listshow listhide listadd listremove listswitch listclear ' +
    'noticeshow noticehide lrcshow lrchide'
).split(' ');

export const audioEvents = (
    'abort canplay canplaythrough durationchange emptied ended error ' +
    'loadeddata loadedmetadata loadstart mozaudioavailable pause play ' +
    'playing progress ratechange seeked seeking stalled suspend ' +
    'timeupdate volumechange waiting'
).split(' ');

export default () => {
    const events = {};
    return {
        on: function (name, callback) {
            if ((playerEvents.indexOf(name) >= 0 || audioEvents.indexOf(name) >= 0) && typeof callback === 'function') {
                (events[name] ||= []).push(callback);
            }
        },
        trigger: function (name, data) {
            events[name]?.forEach(callback => callback(data));
        }
    }
}

