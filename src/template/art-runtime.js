// art-runtime.js
// MIT license
// (not android runtime, just art-template runtime :D)
// From: https://github.com/aui/art-template/blob/master/src/compile/runtime.js

const runtime = {}

runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
}

// https://stackoverflow.com/a/72805973
function xmlEscape(unsafe) {
    return unsafe.replace(/[<>&'"]/g, (c) => `&${({
        '<': 'lt',
        '>': 'gt',
        '&': 'amp',
        '\'': 'apos',
        '"': 'quot'
    })[c]};`);
}

export default runtime