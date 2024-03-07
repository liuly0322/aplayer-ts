import APlayer from './player';

import { setTplRenderers } from './player';
import { fixedModeTplRenderer } from '../template/player';
import { addToList, removeFromList, clearList } from './list';

export const enableFixedModeOnce = () => {
    setTplRenderers(fixedModeTplRenderer)
}

export { addToList, removeFromList, clearList };

export default APlayer;