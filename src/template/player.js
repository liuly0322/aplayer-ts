import $imports from 'art-template/lib/runtime.js';
import { lrc, right, menu, play, loading, skip, volumeDown, orderList, loopOne, loopAll, loopNone, orderRandom } from '../js/icons'
import listItem from './list-item.js';
export default function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', options = $data.options, cover = $data.cover, $escape = $imports.$escape, icons = $data.icons, $$blocks = arguments[1] || {}, include = function (content) {
        $$out += content;
        return $$out;
    }, getObject = $data.getObject, theme = $data.theme, audio = $data.audio, index = $data.index;
    if (!options.fixed) {
        $$out += ' <div class="aplayer-body"><div class="aplayer-pic" style="';
        if (cover) {
            $$out += 'background-image:url(&quot;';
            $$out += $escape(cover);
            $$out += '&quot;);';
        }
        $$out += 'background-color: ';
        $$out += $escape(options.theme);
        $$out += '"><div class="aplayer-button aplayer-play">';
        $$out += play;
        $$out += '</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ';
        $$out += $escape(options.theme);
        $$out += '"><span class="aplayer-thumb" style="background: ';
        $$out += $escape(options.theme);
        $$out += '"><span class="aplayer-loading-icon">';
        $$out += loading;
        $$out += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ';
        $$out += skip;
        $$out += ' </span><span class="aplayer-icon aplayer-icon-play"> ';
        $$out += play;
        $$out += ' </span><span class="aplayer-icon aplayer-icon-forward"> ';
        $$out += skip;
        $$out += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ';
        $$out += volumeDown;
        $$out += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ';
        $$out += $escape(options.theme);
        $$out += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ';
        if (options.order === 'list') {
            $$out += orderList;
        } else if (options.order === 'random') {
            $$out += orderRandom;
        }
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ';
        if (options.loop === 'one') {
            $$out += loopOne;
        } else if (options.loop === 'all') {
            $$out += loopAll;
        } else if (options.loop === 'none') {
            $$out += loopNone;
        }
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ';
        $$out += menu;
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ';
        $$out += lrc;
        $$out += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">';
        $$out += right;
        $$out += '</button></div></div><div class="aplayer-list';
        if (options.listFolded) {
            $$out += ' aplayer-list-hide';
        }
        $$out += '" ';
        if (options.listMaxHeight) {
            $$out += ' style="max-height: ';
            $$out += $escape(options.listMaxHeight);
            $$out += '" ';
        }
        $$out += '><ol ';
        if (options.listMaxHeight) {
            $$out += ' style="max-height: ';
            $$out += $escape(options.listMaxHeight);
            $$out += '" ';
        }
        $$out += '> ';
        include(listItem(getObject({
            theme: options.theme,
            audio: options.audio,
            index: 1
        })));
        $$out += ' </ol></div> ';
    } else {
        $$out += ' <div class="aplayer-list';
        if (options.listFolded) {
            $$out += ' aplayer-list-hide';
        }
        $$out += '" ';
        if (options.listMaxHeight) {
            $$out += ' style="max-height: ';
            $$out += $escape(options.listMaxHeight);
            $$out += '" ';
        }
        $$out += '><ol ';
        if (options.listMaxHeight) {
            $$out += ' style="max-height: ';
            $$out += $escape(options.listMaxHeight);
            $$out += '" ';
        }
        $$out += '> ';
        include(listItem(getObject({
            theme: options.theme,
            audio: options.audio,
            index: 1
        })));
        $$out += ' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="';
        if (cover) {
            $$out += 'background-image:url(&quot;';
            $$out += $escape(cover);
            $$out += '&quot;);';
        }
        $$out += 'background-color: ';
        $$out += $escape(options.theme);
        $$out += '"><div class="aplayer-button aplayer-play">';
        $$out += play;
        $$out += '</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ';
        $$out += $escape(options.theme);
        $$out += '"><span class="aplayer-thumb" style="background: ';
        $$out += $escape(options.theme);
        $$out += '"><span class="aplayer-loading-icon">';
        $$out += loading;
        $$out += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ';
        $$out += skip;
        $$out += ' </span><span class="aplayer-icon aplayer-icon-play"> ';
        $$out += play;
        $$out += ' </span><span class="aplayer-icon aplayer-icon-forward"> ';
        $$out += skip;
        $$out += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ';
        $$out += volumeDown;
        $$out += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ';
        $$out += $escape(options.theme);
        $$out += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ';
        if (options.order === 'list') {
            $$out += orderList;
        } else if (options.order === 'random') {
            $$out += orderRandom;
        }
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ';
        if (options.loop === 'one') {
            $$out += loopOne;
        } else if (options.loop === 'all') {
            $$out += loopAll;
        } else if (options.loop === 'none') {
            $$out += loopNone;
        }
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ';
        $$out += menu;
        $$out += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ';
        $$out += lrc;
        $$out += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">';
        $$out += right;
        $$out += '</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ';
    }
    return $$out;
};