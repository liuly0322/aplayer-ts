import APlayer from "../src/js";

const ap1 = new APlayer({
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
});

const r = Math.random()
const url = `https://api.liuly.moe/meting-api/?server=netease&type=playlist&id=373425292&r=${r}`;

(async () => {
    const data = await fetch(url).then(res => res.json())
    const audioList = data.map(value => ({ ...value, cover: value.pic })) ?? []
    ap1.list.clear()
    ap1.list.add(audioList)
})()

window.ap1 = ap1