import $imports from 'art-template/lib/runtime.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    let $$out = '', $each = $imports.$each, audio = $data.audio, $escape = $imports.$escape, theme = $data.theme, index = $data.index;
    $each(audio, function ($value, $index) {
        $$out += ' <li><span class="aplayer-list-cur" style="background-color: ';
        $$out += $escape($value.theme || theme);
        $$out += '"></span> <span class="aplayer-list-index">';
        $$out += $escape($index + index);
        $$out += '</span><span class="aplayer-list-title">';
        $$out += $escape($value.name);
        $$out += '</span><span class="aplayer-list-author">';
        $$out += $escape($value.artist);
        $$out += '</span></li> ';
    });
    return $$out;
}