export default (player) => {
    let lastPlayPos = 0;
    let currentPlayPos = 0;
    let bufferingDetected = false;
    let enableloadingChecker = false;
    let timer = setInterval(() => {
        if (enableloadingChecker) {
            // whether the audio is buffering
            currentPlayPos = player.audio.currentTime;
            if (!bufferingDetected
                && currentPlayPos === lastPlayPos
                && !player.audio.paused) {
                player.container.classList.add('aplayer-loading');
                bufferingDetected = true;
            }
            if (bufferingDetected
                && currentPlayPos > lastPlayPos
                && !player.audio.paused) {
                player.container.classList.remove('aplayer-loading');
                bufferingDetected = false;
            }
            lastPlayPos = currentPlayPos;
        }
    }, 100);
    return {
        enable() {
            enableloadingChecker = true;
        },
        disable() {
            enableloadingChecker = false;
        },
        destroy() {
            enableloadingChecker = false;
            timer && clearInterval(timer);
        }
    }
}