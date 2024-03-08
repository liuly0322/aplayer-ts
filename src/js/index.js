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

export { addToList, removeFromList, clearList };

export default APlayer;