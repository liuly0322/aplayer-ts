import APlayer from './player';

import { fixedModeTplRenderer } from '../template/player';
import { addToList, removeFromList, clearList } from './list';

export function APlayerFixedModePlugin(player) {
    player.tplRenderers = fixedModeTplRenderer
    const init_ = player.init
    player.init = (options) => {
        options.fixed = true
        return init_(options)
    }
}
export function addMusicPlugin(player) {
    player.afterInitHooks.push(() => {
        player.list.add = (audio) => {
            addToList(player, audio)
        }
    })
}
export function removeMusicPlugin(player) {
    player.afterInitHooks.push(() => {
        player.list.remove = (index) => {
            removeFromList(player, index)
        }
    })
}
export function clearMusicPlugin(player) {
    player.afterInitHooks.push(() => {
        player.list.clear = () => {
            clearList(player)
        }
    })
}
export function APlayerHlsPlugin(player) {
    player.hlsHandler = (audio) => {
        // eslint-disable-next-line no-undef
        if (Hls.isSupported()) {
            // eslint-disable-next-line no-undef
            const hls = new Hls();
            hls.loadSource(audio.url);
            hls.attachMedia(player.audio);
            return hls;
        }
        else if (player.audio.canPlayType('application/x-mpegURL') || player.audio.canPlayType('application/vnd.apple.mpegURL')) {
            player.audio.src = audio.url;
        }
        else {
            player.notice('Error: HLS is not supported.');
        }
    }
}

export default APlayer;