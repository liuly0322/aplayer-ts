import { $each, $escape } from './art-runtime.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    let $$out = '', lyrics = $data.lyrics;
    $each(lyrics, function ($value, $index) {
        $$out += ` <p ${$index === 0 ? ' class="aplayer-lrc-current" ' : ''}>${$escape($value[1])}</p> `;
    });
    return $$out;
}
