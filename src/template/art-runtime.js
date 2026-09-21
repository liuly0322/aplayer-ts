// art-runtime.js
// MIT license
// (not android runtime, just art-template runtime :D)
// From: https://github.com/aui/art-template/blob/master/src/compile/runtime.js

// https://stackoverflow.com/a/72805973
export function $escape(content) {
    return toString(content).replace(/[<>&'"]/g, (c) => ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;'
    })[c]);
}

export function $each(data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
}

function toString(value) {
    if (typeof value === 'string') {
        return value;
    }
    if (value === undefined || value === null) {
        return '';
    }
    if (typeof value === 'function') {
        return toString(value.call(value));
    }
    return JSON.stringify(value);
}
