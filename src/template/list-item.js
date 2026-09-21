import { $each, $escape } from './art-runtime.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    let $$out = '', audio = $data.audio, theme = $data.theme, index = $data.index;
    $each(audio, function ($value, $index) {
        $$out += ` <li><span class="aplayer-list-cur" style="background-color: ${$escape($value.theme || theme)}"></span> <span class="aplayer-list-index">${$escape($index + index)}</span><span class="aplayer-list-title">${$escape($value.name)}</span><span class="aplayer-list-author">${$escape($value.artist)}</span></li> `;
    });
    return $$out;
}
