const T = /mobile/i.test(window.navigator.userAgent);
function M(t) {
  const e = (a) => a < 10 ? "0" + a : "" + a, o = Math.floor(t / 3600), i = Math.floor((t - o * 3600) / 60), s = Math.floor(t - o * 3600 - i * 60);
  return (o > 0 ? [o, i, s] : [i, s]).map(e).join(":");
}
function P(t) {
  let e = t.offsetLeft, o = t.offsetParent;
  const i = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; o !== null; )
      e += o.offsetLeft, o = o.offsetParent;
  else
    for (; o !== null && o !== t; )
      e += o.offsetLeft, o = o.offsetParent;
  return e - i;
}
function I(t, e) {
  let o = t.offsetTop, i = t.offsetParent, s = 0;
  for (; i !== null; )
    o += i.offsetTop, i = i.offsetParent;
  return s = document.body.scrollTop + document.documentElement.scrollTop, e ? o : o - s;
}
const f = {
  dragStart: T ? "touchstart" : "mousedown",
  dragMove: T ? "touchmove" : "mousemove",
  dragEnd: T ? "touchend" : "mouseup"
};
function W(t) {
  function e(o) {
    for (let i = o.length - 1; i >= 0; i--) {
      const s = Math.floor(Math.random() * (i + 1)), a = o[s];
      o[s] = o[i], o[i] = a;
    }
    return o;
  }
  return e([...Array(t)].map(function(o, i) {
    return i;
  }));
}
const R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', et = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', st = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', ot = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
function U(t) {
  return Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((e) => ({
    ...e,
    name: e.name || e.title || "Audio name",
    artist: e.artist || e.author || "Audio artist",
    cover: e.cover || e.pic,
    type: e.type || "normal"
  }));
}
const lt = (t) => {
  const e = {
    container: t.element || document.getElementsByClassName("aplayer")[0],
    mini: t.narrow || t.fixed || !1,
    fixed: !1,
    autoplay: !1,
    mutex: !0,
    lrcType: t.showlrc || t.lrc || 0,
    preload: "auto",
    theme: "#b7daff",
    loop: "all",
    order: "list",
    volume: 0.7,
    listFolded: t.fixed,
    listMaxHeight: t.listmaxheight || "250px",
    audio: t.music || [],
    storageName: "aplayer-setting"
  };
  return t = Object.assign(e, t), t.audio = U(t.audio), t.audio.length <= 1 && t.loop === "one" && (t.loop = "all"), t;
};
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var z = Object.create(window), ct = /["&'<>]/;
z.$escape = function(t) {
  return dt(D(t));
};
z.$each = function(t, e) {
  if (Array.isArray(t))
    for (var o = 0, i = t.length; o < i; o++)
      e(t[o], o);
  else
    for (var s in t)
      e(t[s], s);
};
function D(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = D(t.call(t)) : t = JSON.stringify(t)), t;
}
function dt(t) {
  var e = "" + t, o = ct.exec(e);
  if (!o)
    return t;
  var i = "", s = void 0, a = void 0, c = void 0;
  for (s = o.index, a = 0; s < e.length; s++) {
    switch (e.charCodeAt(s)) {
      case 34:
        c = "&#34;";
        break;
      case 38:
        c = "&#38;";
        break;
      case 39:
        c = "&#39;";
        break;
      case 60:
        c = "&#60;";
        break;
      case 62:
        c = "&#62;";
        break;
      default:
        continue;
    }
    a !== s && (i += e.substring(a, s)), a = s + 1, i += c;
  }
  return a !== s ? i + e.substring(a, s) : i;
}
var ut = z, pt = ut;
const k = /* @__PURE__ */ _(pt);
function A(t) {
  t = t || {};
  let e = "", o = k.$each, i = t.audio, s = k.$escape, a = t.theme, c = t.index;
  return o(i, function(l, d) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += s(l.theme || a), e += '"></span> <span class="aplayer-list-index">', e += s(d + c), e += '</span><span class="aplayer-list-title">', e += s(l.name), e += '</span><span class="aplayer-list-author">', e += s(l.artist), e += "</span></li> ";
  }), e;
}
const w = k.$escape, mt = [
  (t, e) => {
    e('<div class="aplayer-body"><div class="aplayer-pic" style="');
  },
  (t, e) => {
    e('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
  },
  (t, e) => {
    e('</button></div></div><div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(w(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(w(t.listMaxHeight)), e('" ')), e("> "), e(A({
      theme: t.theme,
      audio: t.audio,
      index: 1
    })), e(" </ol></div> ");
  }
], ht = [
  (t, e) => {
    e(' <div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(w(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(w(t.listMaxHeight)), e('" ')), e("> "), e(A({
      theme: t.theme,
      audio: t.audio,
      index: 1
    })), e(' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="');
  },
  (t, e) => {
    e('</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
  },
  (t, e) => {
    e('</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ');
  }
];
function ft(t, e, o) {
  let i = "", s = function(a) {
    return i += a, i;
  };
  return o[0](t, s), e && (i += "background-image:url(&quot;", i += w(e), i += "&quot;);"), i += "background-color: ", i += w(t.theme), i += '"><div class="aplayer-button aplayer-play">', i += B, o[1](t, s), i += w(t.theme), i += '"><span class="aplayer-thumb" style="background: ', i += w(t.theme), i += '"><span class="aplayer-loading-icon">', i += at, i += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', i += N, i += ' </span><span class="aplayer-icon aplayer-icon-play"> ', i += B, i += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', i += N, i += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', i += j, i += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', i += w(t.theme), i += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', t.order === "list" ? i += Y : t.order === "random" && (i += R), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', t.loop === "one" ? i += V : t.loop === "all" ? i += O : t.loop === "none" && (i += S), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', i += st, i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', i += nt, i += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', i += ot, o[2](t, s), i;
}
function vt(t, e, o, i) {
  let s = "";
  e.audio.length && (e.order === "random" ? s = e.audio[o[0]].cover : s = e.audio[0].cover), t.innerHTML = ft(e, s, i);
  const a = (c) => t.querySelector(c);
  return {
    lrc: a(".aplayer-lrc-contents"),
    lrcWrap: a(".aplayer-lrc"),
    ptime: a(".aplayer-ptime"),
    info: a(".aplayer-info"),
    time: a(".aplayer-time"),
    barWrap: a(".aplayer-bar-wrap"),
    button: a(".aplayer-button"),
    body: a(".aplayer-body"),
    list: a(".aplayer-list"),
    listOl: a(".aplayer-list ol"),
    listCurs: t.querySelectorAll(".aplayer-list-cur"),
    played: a(".aplayer-played"),
    loaded: a(".aplayer-loaded"),
    thumb: a(".aplayer-thumb"),
    volume: a(".aplayer-volume"),
    volumeBar: a(".aplayer-volume-bar"),
    volumeButton: a(".aplayer-time button"),
    volumeBarWrap: a(".aplayer-volume-bar-wrap"),
    loop: a(".aplayer-icon-loop"),
    order: a(".aplayer-icon-order"),
    menu: a(".aplayer-icon-menu"),
    pic: a(".aplayer-pic"),
    title: a(".aplayer-title"),
    author: a(".aplayer-author"),
    dtime: a(".aplayer-dtime"),
    notice: a(".aplayer-notice"),
    miniSwitcher: a(".aplayer-miniswitcher"),
    skipBackButton: a(".aplayer-icon-back"),
    skipForwardButton: a(".aplayer-icon-forward"),
    skipPlayButton: a(".aplayer-icon-play"),
    lrcButton: a(".aplayer-icon-lrc")
  };
}
const gt = (t) => {
  const e = { ...t };
  function o(s, a, c) {
    a = Math.max(a, 0), a = Math.min(a, 1), e[s].style[c] = a * 100 + "%";
  }
  function i(s, a) {
    return parseFloat(e[s].style[a]) / 100;
  }
  return { get: i, set: o };
}, wt = (t) => {
  const e = t.options.storageName, o = JSON.parse(localStorage.getItem(e)) || {};
  return o.volume || (o.volume = t.options.volume), {
    getVolume() {
      return o.volume;
    },
    setVolume(i) {
      o.volume = i, localStorage.setItem(e, JSON.stringify(o));
    }
  };
};
function $(t) {
  t = t || {};
  let e = "", o = k.$each, i = t.lyrics, s = k.$escape;
  return o(i, function(a, c) {
    e += " <p ", c === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += s(a[1]), e += "</p> ";
  }), e;
}
const yt = (t) => {
  const e = t.container, o = t.player, i = t.async;
  let s = [], a = 0, c = [];
  function l() {
    o.events.trigger("lrcshow"), o.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function d() {
    o.events.trigger("lrchide"), o.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function m() {
    o.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? l() : d();
  }
  function n(u = o.audio.currentTime) {
    if (a > c.length - 1 || u < c[a][0] || !c[a + 1] || u >= c[a + 1][0])
      for (let p = 0; p < c.length; p++)
        u >= c[p][0] && (!c[p + 1] || u < c[p + 1][0]) && (a = p, e.style.transform = `translateY(${-a * 16}px)`, e.style.webkitTransform = `translateY(${-a * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[p].classList.add("aplayer-lrc-current"));
  }
  function r(u) {
    if (!s[u])
      if (!i)
        o.list.audios[u].lrc ? s[u] = h(o.list.audios[u].lrc) : s[u] = [["00:00", "Not available"]];
      else {
        s[u] = [["00:00", "Loading"]];
        const p = new XMLHttpRequest();
        p.onreadystatechange = () => {
          u === o.list.index && p.readyState === 4 && (p.status >= 200 && p.status < 300 || p.status === 304 ? s[u] = h(p.responseText) : (o.notice(`LRC file request fails: status ${p.status}`), s[u] = [["00:00", "Not available"]]), e.innerHTML = $({
            lyrics: s[u]
          }), n(0), c = s[u]);
        };
        const y = o.list.audios[u].lrc;
        p.open("get", y, !0), p.send(null);
      }
    e.innerHTML = $({
      lyrics: s[u]
    }), c = s[u];
  }
  function h(u) {
    if (u) {
      u = u.replace(/([^\]^\n])\[/g, (g, b) => b + `
[`);
      const p = u.split(`
`);
      let y = [];
      const J = p.length;
      for (let g = 0; g < J; g++) {
        const b = p[g].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), G = p[g].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (b) {
          const K = b.length;
          for (let H = 0; H < K; H++) {
            const x = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(b[H]), Q = x[1] * 60, Z = parseInt(x[2]), F = x[4] ? parseInt(x[4]) / ((x[4] + "").length === 2 ? 100 : 1e3) : 0, tt = Q + Z + F;
            y.push([tt, G]);
          }
        }
      }
      return y = y.filter((g) => g[1]), y.sort((g, b) => g[0] - b[0]), y;
    } else
      return [];
  }
  function v(u) {
    s.splice(u, 1);
  }
  function E() {
    s = [], e.innerHTML = "";
  }
  return {
    show: l,
    hide: d,
    toggle: m,
    update: n,
    switch: r,
    parse: h,
    remove: v,
    clear: E
  };
}, bt = (t) => {
  Lt(t), Mt(t), Tt(t), kt(t), qt(t), T || xt(t), Bt(t), Et(t), Ht(t);
};
function Lt(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function Mt(t) {
  const e = (i) => {
    let s = ((i.clientX || i.changedTouches[0].clientX) - P(t.template.barWrap)) / t.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), t.bar.set("played", s, "width"), t.lrc && t.lrc.update(s * t.duration), t.template.ptime.innerHTML = M(s * t.duration);
  }, o = (i) => {
    document.removeEventListener(f.dragEnd, o), document.removeEventListener(f.dragMove, e);
    let s = ((i.clientX || i.changedTouches[0].clientX) - P(t.template.barWrap)) / t.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), t.bar.set("played", s, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(f.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(f.dragMove, e), document.addEventListener(f.dragEnd, o);
  });
}
function xt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (i) => {
    let s = 1 - ((i.clientY || i.changedTouches[0].clientY) - I(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), t.volume(s);
  }, o = (i) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(f.dragEnd, o), document.removeEventListener(f.dragMove, e);
    let s = 1 - ((i.clientY || i.changedTouches[0].clientY) - I(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), t.volume(s);
  };
  t.template.volumeBarWrap.addEventListener(f.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(f.dragMove, e), document.addEventListener(f.dragEnd, o);
  });
}
function Tt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = R) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = Y);
  });
}
function kt(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = O) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = V) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = O);
  });
}
function qt(t) {
  t.template.menu.addEventListener("click", () => {
    t.list.toggle();
  });
}
function Bt(t) {
  t.template.miniSwitcher.addEventListener("click", () => {
    t.setMode(t.mode === "mini" ? "normal" : "mini");
  });
}
function Et(t) {
  t.template.skipBackButton.addEventListener("click", () => {
    t.skipBack();
  }), t.template.skipForwardButton.addEventListener("click", () => {
    t.skipForward();
  }), t.template.skipPlayButton.addEventListener("click", () => {
    t.toggle();
  });
}
function Ht(t) {
  t.template.lrcButton.addEventListener("click", () => {
    t.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (t.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.show()) : (t.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.hide());
  });
}
const Ot = (t) => {
  let e = 0, o = 0, i = !1, s = !1, a = setInterval(() => {
    s && (o = t.audio.currentTime, !i && o === e && !t.audio.paused && (t.container.classList.add("aplayer-loading"), i = !0), i && o > e && !t.audio.paused && (t.container.classList.remove("aplayer-loading"), i = !1), e = o);
  }, 100);
  return {
    enable() {
      s = !0;
    },
    disable() {
      s = !1;
    },
    destroy() {
      s = !1, a && clearInterval(a);
    }
  };
}, St = [
  "destroy",
  "listshow",
  "listhide",
  "listadd",
  "listremove",
  "listswitch",
  "listclear",
  "noticeshow",
  "noticehide",
  "lrcshow",
  "lrchide"
], q = [
  "abort",
  "canplay",
  "canplaythrough",
  "durationchange",
  "emptied",
  "ended",
  "error",
  "loadeddata",
  "loadedmetadata",
  "loadstart",
  "mozaudioavailable",
  "pause",
  "play",
  "playing",
  "progress",
  "ratechange",
  "seeked",
  "seeking",
  "stalled",
  "suspend",
  "timeupdate",
  "volumechange",
  "waiting"
], zt = () => {
  const t = {};
  function e(s, a) {
    i(s) && typeof a == "function" && (t[s] || (t[s] = []), t[s].push(a));
  }
  function o(s, a) {
    if (t[s] && t[s].length)
      for (let c = 0; c < t[s].length; c++)
        t[s][c](a);
  }
  function i(s) {
    return St.indexOf(s) !== -1 ? "player" : q.indexOf(s) !== -1 ? "audio" : (console.error(`Unknown event name: ${s}`), null);
  }
  return { on: e, trigger: o, type: i };
};
var X = { exports: {} };
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(rt, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var o = function(l, d) {
        return l.nodeName === "HTML" ? -d : l.getBoundingClientRect().top + d;
      }, i = function(l) {
        return l < 0.5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1;
      }, s = function(l, d, m, n) {
        return m > n ? d : l + (d - l) * i(m / n);
      }, a = function(l, d, m, n) {
        d = d || 500, n = n || window;
        var r = n.scrollTop || window.pageYOffset;
        if (typeof l == "number")
          var h = parseInt(l);
        else
          var h = o(l, r);
        var v = Date.now(), E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(p) {
          window.setTimeout(p, 15);
        }, u = function() {
          var p = Date.now() - v;
          n !== window ? n.scrollTop = s(r, h, p, d) : window.scroll(0, s(r, h, p, d)), p > d ? typeof m == "function" && m(l) : E(u);
        };
        u();
      }, c = function(l) {
        if (!l.defaultPrevented) {
          l.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var d = document.getElementById(this.hash.substring(1));
          if (!d)
            return;
          a(d, 500, function(m) {
            location.replace("#" + m.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var l = document.querySelectorAll('a[href^="#"]:not([href="#"])'), d, m = l.length; d = l[--m]; )
          d.addEventListener("click", c, !1);
      }), a;
    }
  });
})(X);
var At = X.exports;
const Pt = /* @__PURE__ */ _(At);
function $t(t, e) {
  t.events.trigger("listadd", {
    audios: e
  }), e = U(e);
  const o = !(t.list.audios.length > 1), i = t.list.audios.length === 0;
  t.template.listOl.innerHTML += A({
    theme: t.options.theme,
    audio: e,
    index: t.list.audios.length + 1
  }), t.list.audios = t.list.audios.concat(e), o && t.list.audios.length > 1 && t.container.classList.add("aplayer-withlist"), t.randomOrder = W(t.list.audios.length), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur"), t.template.listCurs[t.list.audios.length - 1].style.backgroundColor = e.theme || t.options.theme, i && (t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0));
}
function Wt(t, e) {
  if (t.events.trigger("listremove", {
    index: e
  }), t.list.audios[e])
    if (t.list.audios.length > 1) {
      const o = t.container.querySelectorAll(".aplayer-list li");
      o[e].remove(), t.list.audios.splice(e, 1), t.lrc && t.lrc.remove(e), e === t.list.index && (t.list.audios[e] ? t.list.switch(e) : t.list.switch(e - 1)), t.list.index > e && t.list.index--;
      for (let i = e; i < o.length; i++)
        o[i].getElementsByClassName("aplayer-list-index")[0].textContent = i;
      t.list.audios.length === 1 && t.container.classList.remove("aplayer-withlist"), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur");
    } else
      It(t);
}
function It(t) {
  t.events.trigger("listclear"), t.list.index = 0, t.container.classList.remove("aplayer-withlist"), t.pause(), t.list.audios = [], t.lrc && t.lrc.clear(), t.audio.src = "", t.template.listOl.innerHTML = "", t.template.pic.style.backgroundImage = "", t.theme(t.options.theme, t.list.index, !1), t.template.title.innerHTML = "No audio", t.template.author.innerHTML = "", t.bar.set("loaded", 0, "width"), t.template.dtime.innerHTML = M(0);
}
const Ct = (t) => {
  let e = 0, o = t.options.audio;
  t.template.list.addEventListener("click", (l) => {
    let d;
    l.target.tagName.toUpperCase() === "LI" ? d = l.target : d = l.target.parentElement;
    const m = parseInt(d.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
    m !== e ? (c(m), t.play()) : t.toggle();
  });
  function i() {
    t.events.trigger("listshow"), t.template.list.classList.remove("aplayer-list-hide"), t.template.listOl.scrollTop = e * 33;
  }
  function s() {
    t.events.trigger("listhide"), t.template.list.classList.add("aplayer-list-hide");
  }
  function a() {
    t.template.list.classList.contains("aplayer-list-hide") ? i() : s();
  }
  function c(l) {
    if (t.events.trigger("listswitch", {
      index: l
    }), typeof l < "u" && o[l]) {
      e = l;
      const d = o[e];
      t.template.pic.style.backgroundImage = d.cover ? `url('${d.cover}')` : "", t.theme(o[e].theme || t.options.theme, e, !1), t.template.title.innerHTML = d.name, t.template.author.innerHTML = d.artist ? " - " + d.artist : "";
      const m = t.container.getElementsByClassName("aplayer-list-light")[0];
      m && m.classList.remove("aplayer-list-light"), t.container.querySelectorAll(".aplayer-list li")[e].classList.add("aplayer-list-light"), Pt(e * 33, 500, null, t.template.listOl), t.setAudio(d), t.lrc && t.lrc.switch(e), t.lrc && t.lrc.update(0), t.duration !== 1 && (t.template.dtime.innerHTML = M(t.duration));
    }
  }
  return {
    get index() {
      return e;
    },
    set index(l) {
      e = l;
    },
    get audios() {
      return o;
    },
    set audios(l) {
      o = l;
    },
    show: i,
    hide: s,
    toggle: a,
    switch: c
  };
}, L = [], Nt = () => {
  const t = {
    tplRenderers: mt,
    get duration() {
      return isNaN(t.audio.duration) ? 0 : t.audio.duration;
    }
    // you may check other public attributes below
    // the origin code init them in the constructor (the current init function)
    // mode: null,
    // disableTimeupdate: null,
    // randomOrder: null,
    // events: null,
    // bar: null,
    // list: null,
    // audio: null,
    // container: null,
    // lrc: null,
    // options: null,
    // template: null,
  };
  return t;
}, Rt = () => {
  const t = Nt();
  let e = !0, o = null, i;
  function s() {
    t.audio = document.createElement("audio"), t.audio.preload = t.options.preload;
    for (let n = 0; n < q.length; n++)
      t.audio.addEventListener(q[n], (r) => {
        t.events.trigger(q[n], r);
      });
    t.volume(t.storage.getVolume(), !0);
  }
  function a() {
    t.on("play", () => {
      e && c();
    }), t.on("pause", () => {
      e || l();
    }), t.on("timeupdate", () => {
      if (!t.disableTimeupdate) {
        t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
        const r = M(t.audio.currentTime);
        t.template.ptime.innerHTML !== r && (t.template.ptime.innerHTML = r);
      }
    }), t.on("durationchange", () => {
      t.duration !== 1 && (t.template.dtime.innerHTML = M(t.duration));
    }), t.on("progress", () => {
      const r = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.duration : 0;
      t.bar.set("loaded", r, "width");
    });
    let n;
    t.on("error", () => {
      t.list.audios.length > 1 ? (t.notice("An audio error has occurred, player will skip forward in 2 seconds."), n = setTimeout(() => {
        t.skipForward(), e || t.play();
      }, 2e3)) : t.list.audios.length === 1 && t.notice("An audio error has occurred.");
    }), t.events.on("listswitch", () => {
      n && clearTimeout(n);
    }), t.on("ended", () => {
      t.options.loop === "none" ? t.options.order === "list" ? t.list.index < t.list.audios.length - 1 ? (t.list.switch((t.list.index + 1) % t.list.audios.length), t.play()) : (t.list.switch((t.list.index + 1) % t.list.audios.length), t.pause()) : t.options.order === "random" && (t.randomOrder.indexOf(t.list.index) < t.randomOrder.length - 1 ? (t.list.switch(m()), t.play()) : (t.list.switch(m()), t.pause())) : t.options.loop === "one" ? (t.list.switch(t.list.index), t.play()) : t.options.loop === "all" && (t.skipForward(), t.play());
    });
  }
  function c() {
    if (e && (e = !1, t.template.button.classList.remove("aplayer-play"), t.template.button.classList.add("aplayer-pause"), t.template.button.innerHTML = "", setTimeout(() => {
      t.template.button.innerHTML = C;
    }, 100), t.template.skipPlayButton.innerHTML = C), t.timer.enable(), t.options.mutex)
      for (let n = 0; n < L.length; n++)
        t !== L[n] && L[n].pause();
  }
  function l() {
    e || (e = !0, t.template.button.classList.remove("aplayer-pause"), t.template.button.classList.add("aplayer-play"), t.template.button.innerHTML = "", setTimeout(() => {
      t.template.button.innerHTML = B;
    }, 100), t.template.skipPlayButton.innerHTML = B), t.container.classList.remove("aplayer-loading"), t.timer.disable();
  }
  function d() {
    if (t.list.audios.length > 1) {
      if (t.options.order === "list")
        return t.list.index - 1 < 0 ? t.list.audios.length - 1 : t.list.index - 1;
      if (t.options.order === "random") {
        const n = t.randomOrder.indexOf(t.list.index);
        return n === 0 ? t.randomOrder[t.randomOrder.length - 1] : t.randomOrder[n - 1];
      }
    } else
      return 0;
  }
  function m() {
    if (t.list.audios.length > 1) {
      if (t.options.order === "list")
        return (t.list.index + 1) % t.list.audios.length;
      if (t.options.order === "random") {
        const n = t.randomOrder.indexOf(t.list.index);
        return n === t.randomOrder.length - 1 ? t.randomOrder[0] : t.randomOrder[n + 1];
      }
    } else
      return 0;
  }
  return t.init = (n) => {
    if (t.options = lt(n), t.container = t.options.container, t.mode = "normal", t.randomOrder = W(t.options.audio.length), t.container.classList.add("aplayer"), t.options.lrcType && !t.options.fixed && t.container.classList.add("aplayer-withlrc"), t.options.audio.length > 1 && t.container.classList.add("aplayer-withlist"), T && t.container.classList.add("aplayer-mobile"), t.container.offsetWidth <= 300 && t.container.classList.add("aplayer-arrow"), t.options.lrcType === 2 || t.options.lrcType === !0) {
      const h = t.container.getElementsByClassName("aplayer-lrc-content");
      for (let v = 0; v < h.length; v++)
        t.options.audio[v] && (t.options.audio[v].lrc = h[v].innerHTML);
    }
    t.template = vt(t.container, t.options, t.randomOrder, t.tplRenderers), t.options.fixed && (t.container.classList.add("aplayer-fixed"), t.template.body.style.width = t.template.body.offsetWidth - 18 + "px"), t.options.mini && (t.setMode("mini"), t.template.info.style.display = "block"), t.template.info.offsetWidth < 200 && t.template.time.classList.add("aplayer-time-narrow"), t.options.lrcType && (t.lrc = yt({
      container: t.template.lrc,
      async: t.options.lrcType === 3,
      player: t
    })), t.events = zt(), t.storage = wt(t), t.bar = gt(t.template), t.controller = bt(t), t.timer = Ot(t), t.list = Ct(t), s(), a(), t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0), t.options.autoplay && t.play(), L.push(t);
  }, t.setAudio = (n) => {
    o && (o.destroy(), o = null);
    let r = n.type;
    t.options.customAudioType && t.options.customAudioType[r] ? Object.prototype.toString.call(t.options.customAudioType[r]) === "[object Function]" ? t.options.customAudioType[r](t.audio, n, t) : console.error(`Illegal customType: ${r}`) : ((!r || r === "auto") && (/m3u8(#|\?|$)/i.exec(n.url) ? r = "hls" : r = "normal"), r === "hls" ? Hls.isSupported() ? (o = new Hls(), o.loadSource(n.url), o.attachMedia(t.audio)) : t.audio.canPlayType("application/x-mpegURL") || t.audio.canPlayType("application/vnd.apple.mpegURL") ? t.audio.src = n.url : t.notice("Error: HLS is not supported.") : r === "normal" && (t.audio.src = n.url)), t.seek(0), e || t.audio.play();
  }, t.destroy = () => {
    L.splice(L.indexOf(t), 1), t.pause(), t.container.innerHTML = "", t.audio.src = "", t.timer.destroy(), t.events.trigger("destroy");
  }, t.setMode = (n = "normal") => {
    t.mode = n, n === "mini" ? t.container.classList.add("aplayer-narrow") : n === "normal" && t.container.classList.remove("aplayer-narrow");
  }, t.notice = (n, r = 2e3, h = 0.8) => {
    t.template.notice.innerHTML = n, t.template.notice.style.opacity = h, i && clearTimeout(i), t.events.trigger("noticeshow", {
      text: n
    }), r && (i = setTimeout(() => {
      t.template.notice.style.opacity = 0, t.events.trigger("noticehide");
    }, r));
  }, t.theme = (n = t.list.audios[t.list.index].theme || t.options.theme, r = t.list.index, h = !0) => {
    h && t.list.audios[r] && (t.list.audios[r].theme = n), t.template.listCurs[r] && (t.template.listCurs[r].style.backgroundColor = n), r === t.list.index && (t.template.pic.style.backgroundColor = n, t.template.played.style.background = n, t.template.thumb.style.background = n, t.template.volume.style.background = n);
  }, t.seek = (n) => {
    n = Math.max(n, 0), n = Math.min(n, t.duration), t.audio.currentTime = n, t.bar.set("played", n / t.duration, "width"), t.template.ptime.innerHTML = M(n);
  }, t.play = () => {
    c();
    const n = t.audio.play();
    n && n.catch((r) => {
      console.warn(r), r.name === "NotAllowedError" && l();
    });
  }, t.pause = () => {
    l(), t.audio.pause();
  }, t.switchVolumeIcon = () => {
    t.volume() >= 0.95 ? t.template.volumeButton.innerHTML = et : t.volume() > 0 ? t.template.volumeButton.innerHTML = j : t.template.volumeButton.innerHTML = it;
  }, t.volume = (n, r) => (n = parseFloat(n), isNaN(n) || (n = Math.max(n, 0), n = Math.min(n, 1), t.bar.set("volume", n, "height"), r || t.storage.setVolume(n), t.audio.volume = n, t.audio.muted && (t.audio.muted = !1), t.switchVolumeIcon()), t.audio.muted ? 0 : t.audio.volume), t.on = (n, r) => {
    t.events.on(n, r);
  }, t.toggle = () => {
    t.template.button.classList.contains("aplayer-play") ? t.play() : t.template.button.classList.contains("aplayer-pause") && t.pause();
  }, t.skipBack = () => {
    t.list.switch(d());
  }, t.skipForward = () => {
    t.list.switch(m());
  }, t.use = (n) => (n(t), t), t;
};
function jt(t) {
  t.tplRenderers = ht;
  const e = t.init;
  t.init = (o) => {
    o.fixed = !0, e(o);
  };
}
export {
  jt as APlayerFixedModePlugin,
  $t as addToList,
  It as clearList,
  Rt as default,
  Wt as removeFromList
};
