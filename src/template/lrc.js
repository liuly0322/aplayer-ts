import $imports from './art-runtime';
export default function ($data) {
    'use strict';
    $data = $data || {};
    let $$out = '', $each = $imports.$each, lyrics = $data.lyrics, $escape = $imports.$escape;
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
}