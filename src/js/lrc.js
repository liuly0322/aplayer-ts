import tplLrc from '../template/lrc.js';

export default (options) => {
    const container = options.container;
    const player = options.player;
    const async_ = options.async;

    let parsed_ = [];
    let index_ = 0;
    let current_ = [];

    function show() {
        player.events.trigger('lrcshow');
        player.template.lrcWrap.classList.remove('aplayer-lrc-hide');
    }

    function hide() {
        player.events.trigger('lrchide');
        player.template.lrcWrap.classList.add('aplayer-lrc-hide');
    }

    function toggle() {
        if (player.template.lrcWrap.classList.contains('aplayer-lrc-hide')) {
            show();
        }
        else {
            hide();
        }
    }

    function update(currentTime = player.audio.currentTime) {
        if (index_ > current_.length - 1 || currentTime < current_[index_][0] || (!current_[index_ + 1] || currentTime >= current_[index_ + 1][0])) {
            for (let i = 0; i < current_.length; i++) {
                if (currentTime >= current_[i][0] && (!current_[i + 1] || currentTime < current_[i + 1][0])) {
                    index_ = i;
                    container.style.transform = `translateY(${-index_ * 16}px)`;
                    container.style.webkitTransform = `translateY(${-index_ * 16}px)`;
                    container.getElementsByClassName('aplayer-lrc-current')[0].classList.remove('aplayer-lrc-current');
                    container.getElementsByTagName('p')[i].classList.add('aplayer-lrc-current');
                }
            }
        }
    }

    function switch_(index) {
        if (!parsed_[index]) {
            if (!async_) {
                if (player.list.audios[index].lrc) {
                    parsed_[index] = parse(player.list.audios[index].lrc);
                }
                else {
                    parsed_[index] = [['00:00', 'Not available']];
                }
            }
            else {
                parsed_[index] = [['00:00', 'Loading']];
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (index === player.list.index && xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                            parsed_[index] = parse(xhr.responseText);
                        }
                        else {
                            player.notice(`LRC file request fails: status ${xhr.status}`);
                            parsed_[index] = [['00:00', 'Not available']];
                        }
                        container.innerHTML = tplLrc({
                            lyrics: parsed_[index]
                        });
                        update(0);
                        current_ = parsed_[index];
                    }
                };
                const apiurl = player.list.audios[index].lrc;
                xhr.open('get', apiurl, true);
                xhr.send(null);
            }
        }

        container.innerHTML = tplLrc({
            lyrics: parsed_[index]
        });
        current_ = parsed_[index];
    }

    function remove(index) {
        parsed_.splice(index, 1);
    }

    function clear() {
        parsed_ = [];
        container.innerHTML = '';
    }

    return {
        show,
        hide,
        toggle,
        update,
        switch: switch_,
        remove,
        clear
    }
}

/**
 * Parse lrc, suppose multiple time tag
 *
 * @param {String} lrc_s - Format:
 * [mm:ss]lyric
 * [mm:ss.xx]lyric
 * [mm:ss.xxx]lyric
 * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
 * [mm:ss.xx]<mm:ss.xx>lyric
 *
 * @return {String} [[time, text], [time, text], [time, text], ...]
 */
function parse(lrc_s) {
    if (!lrc_s) {
        return [];
    }
    lrc_s = lrc_s.replace(/([^\]^\n])\[/g, '$1\n[');
    const lyric = lrc_s.split('\n');
    const lrc = [];
    const timePattern = /\[(\d{2}):(\d{2})(\.\d{2,3})?]/g;
    for (const line of lyric) {
        // match lrc text
        const lrcText = line.replace(/.*\[(\d{2}):(\d{2})(\.\d{2,3})?]/g, '').replace(/<(\d{2}):(\d{2})(\.\d{2,3})?>/g, '').trim();

        if (lrcText) {
            // handle multiple time tag
            // Exhausting exec resets lastIndex for the next line.
            let oneTime;
            while ((oneTime = timePattern.exec(line))) {
                const min2sec = oneTime[1] * 60;
                // Captures contain only decimal digits; unary + also handles leading zeros.
                const sec2sec = +oneTime[2];
                // The optional capture includes the decimal point and 2–3 digits.
                const msec2sec = +(oneTime[3] || 0);
                const lrcTime = min2sec + sec2sec + msec2sec;
                lrc.push([lrcTime, lrcText]);
            }
        }
    }
    // sort by time
    return lrc.sort((a, b) => a[0] - b[0]);
}
