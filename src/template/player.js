import $imports from 'art-template/lib/runtime.js';
import { lrc, right, menu, play, loading, skip, volumeDown, orderList, loopOne, loopAll, loopNone, orderRandom } from '../js/icons'
import listItem from './list-item.js';

const $escape = $imports.$escape;

export const notFixedModeTplRenderers = [
    (options, includeFunction) => {
        includeFunction('<div class="aplayer-body"><div class="aplayer-pic" style="')
    },
    (options, includeFunction) => {
        includeFunction('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ')
    },
    (options, includeFunction) => {
        includeFunction('</button></div></div><div class="aplayer-list');
        if (options.listFolded) {
            includeFunction(' aplayer-list-hide');
        }
        includeFunction('" ');
        if (options.listMaxHeight) {
            includeFunction(' style="max-height: ');
            includeFunction($escape(options.listMaxHeight));
            includeFunction('" ');
        }
        includeFunction('><ol ');
        if (options.listMaxHeight) {
            includeFunction(' style="max-height: ');
            includeFunction($escape(options.listMaxHeight));
            includeFunction('" ');
        }
        includeFunction('> ');
        includeFunction(listItem({
            theme: options.theme,
            audio: options.audio,
            index: 1
        }));
        includeFunction(' </ol></div> ');
    }
]

export const fixedModeTplRenderer = [
    (options, includeFunction) => {
        includeFunction(' <div class="aplayer-list');
        if (options.listFolded) {
            includeFunction(' aplayer-list-hide');
        }
        includeFunction('" ');
        if (options.listMaxHeight) {
            includeFunction(' style="max-height: ');
            includeFunction($escape(options.listMaxHeight));
            includeFunction('" ');
        }
        includeFunction('><ol ');
        if (options.listMaxHeight) {
            includeFunction(' style="max-height: ');
            includeFunction($escape(options.listMaxHeight));
            includeFunction('" ');
        }
        includeFunction('> ');
        includeFunction(listItem({
            theme: options.theme,
            audio: options.audio,
            index: 1
        }));
        includeFunction(' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="');
    },
    (options, includeFunction) => {
        includeFunction('</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
    },
    (options, includeFunction) => {
        includeFunction('</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ');
    }
]

export default function (options, cover, tplRenderers) {
    'use strict';
    let $$out = '', include = function (content) {
        $$out += content;
        return $$out;
    };
    tplRenderers[0](options, include);
    if (cover) {
        $$out += 'background-image:url(&quot;';
        $$out += $escape(cover);
        $$out += '&quot;);';
    }
    $$out += 'background-color: ';
    $$out += $escape(options.theme);
    $$out += '"><div class="aplayer-button aplayer-play">';
    $$out += play;
    tplRenderers[1](options, include);
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
    tplRenderers[2](options, include);
    return $$out;
}