import APlayer from "../src/js";
import { addToList } from "../src/js";
import { removeFromList } from "../src/js";
import '../src/css/base.css'

// import { APlayerFixedModePlugin } from "../src/js"
// import '../src/css/fixed.css'

const ap1 = APlayer()
    // .use(APlayerFixedModePlugin)
    .init({
        element: document.getElementById('player1'),
        theme: 'rgba(255,255,255,0.2)',
        preload: 'none',
        lrcType: 3,
        listFolded: true,
        listMaxHeight: '250px',
        audio: {
            name: '正在加载...',
            artist: '正在加载...',
            lrc: 'data:,loading...',
        },
    })

const r = Math.random()
const url = `https://api.liuly.moe/meting-api/?server=netease&type=playlist&id=373425292&r=${r}`;

(async () => {
    const data = await fetch(url).then(res => res.json())
    const audioList = data.map(value => ({ ...value, cover: value.pic })) ?? []
    removeFromList(ap1, 0)
    // clearList(ap1)
    addToList(ap1, audioList)
})()

window.ap1 = ap1