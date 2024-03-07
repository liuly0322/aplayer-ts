export function handleAudioOption(audio) {
    if (Object.prototype.toString.call(audio) !== '[object Array]') {
        audio = [audio];
    }
    return audio.map((item) => ({
        ...item,
        name: item.name || item.title || 'Audio name',
        artist: item.artist || item.author || 'Audio artist',
        cover: item.cover || item.pic,
        type: item.type || 'normal'
    }));
}

export default (options) => {

    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('aplayer')[0],
        mini: options.narrow || options.fixed || false,
        fixed: false,
        autoplay: false,
        mutex: true,
        lrcType: options.showlrc || options.lrc || 0,
        preload: 'auto',
        theme: '#b7daff',
        loop: 'all',
        order: 'list',
        volume: 0.7,
        listFolded: options.fixed,
        listMaxHeight: options.listmaxheight || '250px',
        audio: options.music || [],
        storageName: 'aplayer-setting'
    };

    options = Object.assign(defaultOption, options);
    options.audio = handleAudioOption(options.audio);
    if (options.audio.length <= 1 && options.loop === 'one') {
        options.loop = 'all';
    }

    return options;
};
