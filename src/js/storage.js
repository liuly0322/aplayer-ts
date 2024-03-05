import { storage } from './utils';

class Storage {
    constructor(player) {
        this.storageName = player.options.storageName;

        this.data = JSON.parse(storage.get(this.storageName));
        if (!this.data) {
            this.data = {};
        }
        this.data.volume = this.data.volume || player.options.volume;
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
        storage.set(this.storageName, JSON.stringify(this.data));
    }
}

export default Storage;