import APlayer from './player';

import { setTplRenderers } from './player';
import { fixedModeTplRenderer } from '../template/player';

export const enableFixedModeOnce = () => {
    setTplRenderers(fixedModeTplRenderer)
}

export default APlayer;