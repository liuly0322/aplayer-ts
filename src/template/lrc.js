import $imports from 'art-template/lib/runtime.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, lyrics = $data.lyrics, $value = $data.$value, $index = $data.$index, $escape = $imports.$escape;
    $each(lyrics, function ($value, $index) {
        $$out += ' <p ';
        if ($index === 0) {
            $$out += ' class="aplayer-lrc-current" ';
        }
        $$out += '>';
        $$out += $escape($value[1]);
        $$out += '</p> ';
    });
    return $$out;
};