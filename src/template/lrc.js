import { $each, $escape } from './art-runtime.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    let $$out = '', lyrics = $data.lyrics;
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
