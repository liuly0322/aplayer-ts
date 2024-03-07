export default (player) => {
    const storageName = player.options.storageName;
    const data = JSON.parse(localStorage.getItem(storageName)) || {};
    data.volume ||= player.options.volume;

    return {
        getVolume() {
            return data.volume;
        },
        setVolume(value) {
            data.volume = value;
            localStorage.setItem(storageName, JSON.stringify(data));
        }
    }
}