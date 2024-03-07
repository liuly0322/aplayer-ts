const x = /mobile/i.test(window.navigator.userAgent);
function b(t) {
  const e = (o) => o < 10 ? "0" + o : "" + o, i = Math.floor(t / 3600), a = Math.floor((t - i * 3600) / 60), s = Math.floor(t - i * 3600 - a * 60);
  return (i > 0 ? [i, a, s] : [a, s]).map(e).join(":");
}
function N(t) {
  let e = t.offsetLeft, i = t.offsetParent;
  const a = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; i !== null; )
      e += i.offsetLeft, i = i.offsetParent;
  else
    for (; i !== null && i !== t; )
      e += i.offsetLeft, i = i.offsetParent;
  return e - a;
}
function j(t, e) {
  let i = t.offsetTop, a = t.offsetParent, s = 0;
  for (; a !== null; )
    i += a.offsetTop, a = a.offsetParent;
  return s = document.body.scrollTop + document.documentElement.scrollTop, e ? i : i - s;
}
const u = {
  dragStart: x ? "touchstart" : "mousedown",
  dragMove: x ? "touchmove" : "mousemove",
  dragEnd: x ? "touchend" : "mouseup"
};
function V(t) {
  function e(i) {
    for (let a = i.length - 1; a >= 0; a--) {
      const s = Math.floor(Math.random() * (a + 1)), o = i[s];
      i[s] = i[a], i[a] = o;
    }
    return i;
  }
  return e([...Array(t)].map(function(i, a) {
    return a;
  }));
}
const Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', ot = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', lt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', rt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', ct = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', X = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', ht = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
function _(t) {
  return Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((e) => ({
    ...e,
    name: e.name || e.title || "Audio name",
    artist: e.artist || e.author || "Audio artist",
    cover: e.cover || e.pic,
    type: e.type || "normal"
  }));
}
const dt = (t) => {
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
  return t = Object.assign(e, t), t.audio = _(t.audio), t.audio.length <= 1 && t.loop === "one" && (t.loop = "all"), t;
};
var pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function J(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var I = Object.create(window), ut = /["&'<>]/;
I.$escape = function(t) {
  return mt(G(t));
};
I.$each = function(t, e) {
  if (Array.isArray(t))
    for (var i = 0, a = t.length; i < a; i++)
      e(t[i], i);
  else
    for (var s in t)
      e(t[s], s);
};
function G(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = G(t.call(t)) : t = JSON.stringify(t)), t;
}
function mt(t) {
  var e = "" + t, i = ut.exec(e);
  if (!i)
    return t;
  var a = "", s = void 0, o = void 0, n = void 0;
  for (s = i.index, o = 0; s < e.length; s++) {
    switch (e.charCodeAt(s)) {
      case 34:
        n = "&#34;";
        break;
      case 38:
        n = "&#38;";
        break;
      case 39:
        n = "&#39;";
        break;
      case 60:
        n = "&#60;";
        break;
      case 62:
        n = "&#62;";
        break;
      default:
        continue;
    }
    o !== s && (a += e.substring(o, s)), o = s + 1, a += n;
  }
  return o !== s ? a + e.substring(o, s) : a;
}
var vt = I, ft = vt;
const T = /* @__PURE__ */ J(ft);
function C(t) {
  t = t || {};
  var e = "", i = T.$each, a = t.audio, s = T.$escape, o = t.theme, n = t.index;
  return i(a, function(l, h) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += s(l.theme || o), e += '"></span> <span class="aplayer-list-index">', e += s(h + n), e += '</span><span class="aplayer-list-title">', e += s(l.name), e += '</span><span class="aplayer-list-author">', e += s(l.artist), e += "</span></li> ";
  }), e;
}
const v = T.$escape;
function P() {
  return {
    injectPointA: (t, e, i) => {
      i('<div class="aplayer-body"><div class="aplayer-pic" style="');
    },
    injectPointB: (t, e, i) => {
      i('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
    },
    injectPointC: (t, e, i) => {
      i('</button></div></div><div class="aplayer-list'), t.listFolded && i(" aplayer-list-hide"), i('" '), t.listMaxHeight && (i(' style="max-height: '), i(v(t.listMaxHeight)), i('" ')), i("><ol "), t.listMaxHeight && (i(' style="max-height: '), i(v(t.listMaxHeight)), i('" ')), i("> "), i(C({
        theme: t.theme,
        audio: t.audio,
        index: 1
      })), i(" </ol></div> ");
    }
  };
}
function gt() {
  return {
    injectPointA: (t, e, i) => {
      i(' <div class="aplayer-list'), t.listFolded && i(" aplayer-list-hide"), i('" '), t.listMaxHeight && (i(' style="max-height: '), i(v(t.listMaxHeight)), i('" ')), i("><ol "), t.listMaxHeight && (i(' style="max-height: '), i(v(t.listMaxHeight)), i('" ')), i("> "), i(C({
        theme: t.theme,
        audio: t.audio,
        index: 1
      })), i(' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="');
    },
    injectPointB: (t, e, i) => {
      i('</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
    },
    injectPointC: (t, e, i) => {
      i('</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ');
    }
  };
}
function wt(t) {
  t = t || {};
  var e = "", i = t.options, a = t.cover, s = function(o) {
    return e += o, e;
  };
  return t.injectPointA(i, a, s), a && (e += "background-image:url(&quot;", e += v(a), e += "&quot;);"), e += "background-color: ", e += v(i.theme), e += '"><div class="aplayer-button aplayer-play">', e += q, t.injectPointB(i, a, s), e += v(i.theme), e += '"><span class="aplayer-thumb" style="background: ', e += v(i.theme), e += '"><span class="aplayer-loading-icon">', e += ct, e += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', e += R, e += ' </span><span class="aplayer-icon aplayer-icon-play"> ', e += q, e += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', e += R, e += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', e += U, e += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', e += v(i.theme), e += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', i.order === "list" ? e += X : i.order === "random" && (e += Y), e += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', i.loop === "one" ? e += D : i.loop === "all" ? e += A : i.loop === "none" && (e += S), e += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', e += lt, e += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', e += ht, e += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', e += rt, t.injectPointC(i, a, s), e;
}
function yt(t, e, i, a) {
  let s = "";
  e.audio.length && (e.order === "random" ? s = e.audio[i[0]].cover : s = e.audio[0].cover), t.innerHTML = wt({
    options: e,
    cover: s,
    ...a
  });
  const o = (n) => t.querySelector(n);
  return {
    lrc: o(".aplayer-lrc-contents"),
    lrcWrap: o(".aplayer-lrc"),
    ptime: o(".aplayer-ptime"),
    info: o(".aplayer-info"),
    time: o(".aplayer-time"),
    barWrap: o(".aplayer-bar-wrap"),
    button: o(".aplayer-button"),
    body: o(".aplayer-body"),
    list: o(".aplayer-list"),
    listOl: o(".aplayer-list ol"),
    listCurs: t.querySelectorAll(".aplayer-list-cur"),
    played: o(".aplayer-played"),
    loaded: o(".aplayer-loaded"),
    thumb: o(".aplayer-thumb"),
    volume: o(".aplayer-volume"),
    volumeBar: o(".aplayer-volume-bar"),
    volumeButton: o(".aplayer-time button"),
    volumeBarWrap: o(".aplayer-volume-bar-wrap"),
    loop: o(".aplayer-icon-loop"),
    order: o(".aplayer-icon-order"),
    menu: o(".aplayer-icon-menu"),
    pic: o(".aplayer-pic"),
    title: o(".aplayer-title"),
    author: o(".aplayer-author"),
    dtime: o(".aplayer-dtime"),
    notice: o(".aplayer-notice"),
    miniSwitcher: o(".aplayer-miniswitcher"),
    skipBackButton: o(".aplayer-icon-back"),
    skipForwardButton: o(".aplayer-icon-forward"),
    skipPlayButton: o(".aplayer-icon-play"),
    lrcButton: o(".aplayer-icon-lrc")
  };
}
const bt = (t) => {
  const e = { ...t };
  function i(s, o, n) {
    o = Math.max(o, 0), o = Math.min(o, 1), e[s].style[n] = o * 100 + "%";
  }
  function a(s, o) {
    return parseFloat(e[s].style[o]) / 100;
  }
  return { get: a, set: i };
}, Lt = (t) => {
  const e = t.options.storageName, i = JSON.parse(localStorage.getItem(e)) || {};
  return i.volume || (i.volume = t.options.volume), {
    getVolume() {
      return i.volume;
    },
    setVolume(a) {
      i.volume = a, localStorage.setItem(e, JSON.stringify(i));
    }
  };
};
function $(t) {
  t = t || {};
  var e = "", i = T.$each, a = t.lyrics, s = T.$escape;
  return i(a, function(o, n) {
    e += " <p ", n === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += s(o[1]), e += "</p> ";
  }), e;
}
const Mt = (t) => {
  const e = t.container, i = t.player, a = t.async;
  let s = [], o = 0, n = [];
  function l() {
    i.events.trigger("lrcshow"), i.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function h() {
    i.events.trigger("lrchide"), i.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function d() {
    i.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? l() : h();
  }
  function p(r = i.audio.currentTime) {
    if (o > n.length - 1 || r < n[o][0] || !n[o + 1] || r >= n[o + 1][0])
      for (let c = 0; c < n.length; c++)
        r >= n[c][0] && (!n[c + 1] || r < n[c + 1][0]) && (o = c, e.style.transform = `translateY(${-o * 16}px)`, e.style.webkitTransform = `translateY(${-o * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[c].classList.add("aplayer-lrc-current"));
  }
  function L(r) {
    if (!s[r])
      if (!a)
        i.list.audios[r].lrc ? s[r] = f(i.list.audios[r].lrc) : s[r] = [["00:00", "Not available"]];
      else {
        s[r] = [["00:00", "Loading"]];
        const c = new XMLHttpRequest();
        c.onreadystatechange = () => {
          r === i.list.index && c.readyState === 4 && (c.status >= 200 && c.status < 300 || c.status === 304 ? s[r] = f(c.responseText) : (i.notice(`LRC file request fails: status ${c.status}`), s[r] = [["00:00", "Not available"]]), e.innerHTML = $({
            lyrics: s[r]
          }), p(0), n = s[r]);
        };
        const g = i.list.audios[r].lrc;
        c.open("get", g, !0), c.send(null);
      }
    e.innerHTML = $({
      lyrics: s[r]
    }), n = s[r];
  }
  function f(r) {
    if (r) {
      r = r.replace(/([^\]^\n])\[/g, (m, w) => w + `
[`);
      const c = r.split(`
`);
      let g = [];
      const Z = c.length;
      for (let m = 0; m < Z; m++) {
        const w = c[m].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), F = c[m].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (w) {
          const tt = w.length;
          for (let O = 0; O < tt; O++) {
            const M = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(w[O]), et = M[1] * 60, it = parseInt(M[2]), st = M[4] ? parseInt(M[4]) / ((M[4] + "").length === 2 ? 100 : 1e3) : 0, at = et + it + st;
            g.push([at, F]);
          }
        }
      }
      return g = g.filter((m) => m[1]), g.sort((m, w) => m[0] - w[0]), g;
    } else
      return [];
  }
  function E(r) {
    s.splice(r, 1);
  }
  function H() {
    s = [], e.innerHTML = "";
  }
  return {
    show: l,
    hide: h,
    toggle: d,
    update: p,
    switch: L,
    parse: f,
    remove: E,
    clear: H
  };
};
class xt {
  constructor(e) {
    Tt(e), kt(e), qt(e), Et(e), Ht(e), x || Bt(e), Ot(e), At(e), St(e);
  }
}
function Tt(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function kt(t) {
  const e = (a) => {
    let s = ((a.clientX || a.changedTouches[0].clientX) - N(t.template.barWrap)) / t.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), t.bar.set("played", s, "width"), t.lrc && t.lrc.update(s * t.duration), t.template.ptime.innerHTML = b(s * t.duration);
  }, i = (a) => {
    document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, e);
    let s = ((a.clientX || a.changedTouches[0].clientX) - N(t.template.barWrap)) / t.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), t.bar.set("played", s, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(u.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(u.dragMove, e), document.addEventListener(u.dragEnd, i);
  });
}
function Bt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (a) => {
    let s = 1 - ((a.clientY || a.changedTouches[0].clientY) - j(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), t.volume(s);
  }, i = (a) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, e);
    let s = 1 - ((a.clientY || a.changedTouches[0].clientY) - j(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), t.volume(s);
  };
  t.template.volumeBarWrap.addEventListener(u.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(u.dragMove, e), document.addEventListener(u.dragEnd, i);
  });
}
function qt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = Y) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = X);
  });
}
function Et(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = A) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = D) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = A);
  });
}
function Ht(t) {
  t.template.menu.addEventListener("click", () => {
    t.list.toggle();
  });
}
function Ot(t) {
  t.template.miniSwitcher.addEventListener("click", () => {
    t.setMode(t.mode === "mini" ? "normal" : "mini");
  });
}
function At(t) {
  t.template.skipBackButton.addEventListener("click", () => {
    t.skipBack();
  }), t.template.skipForwardButton.addEventListener("click", () => {
    t.skipForward();
  }), t.template.skipPlayButton.addEventListener("click", () => {
    t.toggle();
  });
}
function St(t) {
  t.template.lrcButton.addEventListener("click", () => {
    t.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (t.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.show()) : (t.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.hide());
  });
}
const Pt = (t) => {
  let e = 0, i = 0, a = !1, s = !1, o = setInterval(() => {
    s && (i = t.audio.currentTime, !a && i === e && !t.audio.paused && (t.container.classList.add("aplayer-loading"), a = !0), a && i > e && !t.audio.paused && (t.container.classList.remove("aplayer-loading"), a = !1), e = i);
  }, 100);
  return {
    enable() {
      s = !0;
    },
    disable() {
      s = !1;
    },
    destroy() {
      s = !1, o && clearInterval(o);
    }
  };
}, zt = [
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
], k = [
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
], It = () => {
  const t = {};
  function e(s, o) {
    a(s) && typeof o == "function" && (t[s] || (t[s] = []), t[s].push(o));
  }
  function i(s, o) {
    if (t[s] && t[s].length)
      for (let n = 0; n < t[s].length; n++)
        t[s][n](o);
  }
  function a(s) {
    return zt.indexOf(s) !== -1 ? "player" : k.indexOf(s) !== -1 ? "audio" : (console.error(`Unknown event name: ${s}`), null);
  }
  return { on: e, trigger: i, type: a };
};
var K = { exports: {} };
(function(t, e) {
  (function(i, a) {
    t.exports = a();
  })(pt, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var i = function(l, h) {
        return l.nodeName === "HTML" ? -h : l.getBoundingClientRect().top + h;
      }, a = function(l) {
        return l < 0.5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1;
      }, s = function(l, h, d, p) {
        return d > p ? h : l + (h - l) * a(d / p);
      }, o = function(l, h, d, p) {
        h = h || 500, p = p || window;
        var L = p.scrollTop || window.pageYOffset;
        if (typeof l == "number")
          var f = parseInt(l);
        else
          var f = i(l, L);
        var E = Date.now(), H = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(c) {
          window.setTimeout(c, 15);
        }, r = function() {
          var c = Date.now() - E;
          p !== window ? p.scrollTop = s(L, f, c, h) : window.scroll(0, s(L, f, c, h)), c > h ? typeof d == "function" && d(l) : H(r);
        };
        r();
      }, n = function(l) {
        if (!l.defaultPrevented) {
          l.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var h = document.getElementById(this.hash.substring(1));
          if (!h)
            return;
          o(h, 500, function(d) {
            location.replace("#" + d.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var l = document.querySelectorAll('a[href^="#"]:not([href="#"])'), h, d = l.length; h = l[--d]; )
          h.addEventListener("click", n, !1);
      }), o;
    }
  });
})(K);
var Ct = K.exports;
const Nt = /* @__PURE__ */ J(Ct);
class jt {
  constructor(e) {
    this.player = e, this.index = 0, this.audios = this.player.options.audio, this.bindEvents();
  }
  bindEvents() {
    this.player.template.list.addEventListener("click", (e) => {
      let i;
      e.target.tagName.toUpperCase() === "LI" ? i = e.target : i = e.target.parentElement;
      const a = parseInt(i.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
      a !== this.index ? (this.switch(a), this.player.play()) : this.player.toggle();
    });
  }
  show() {
    this.player.events.trigger("listshow"), this.player.template.list.classList.remove("aplayer-list-hide"), this.player.template.listOl.scrollTop = this.index * 33;
  }
  hide() {
    this.player.events.trigger("listhide"), this.player.template.list.classList.add("aplayer-list-hide");
  }
  toggle() {
    this.player.template.list.classList.contains("aplayer-list-hide") ? this.show() : this.hide();
  }
  add(e) {
    this.player.events.trigger("listadd", {
      audios: e
    }), e = _(e);
    const i = !(this.audios.length > 1), a = this.audios.length === 0;
    this.player.template.listOl.innerHTML += C({
      theme: this.player.options.theme,
      audio: e,
      index: this.audios.length + 1
    }), this.audios = this.audios.concat(e), i && this.audios.length > 1 && this.player.container.classList.add("aplayer-withlist"), this.player.randomOrder = V(this.audios.length), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur"), this.player.template.listCurs[this.audios.length - 1].style.backgroundColor = e.theme || this.player.options.theme, a && (this.player.options.order === "random" ? this.switch(this.player.randomOrder[0]) : this.switch(0));
  }
  remove(e) {
    if (this.player.events.trigger("listremove", {
      index: e
    }), this.audios[e])
      if (this.audios.length > 1) {
        const i = this.player.container.querySelectorAll(".aplayer-list li");
        i[e].remove(), this.audios.splice(e, 1), this.player.lrc && this.player.lrc.remove(e), e === this.index && (this.audios[e] ? this.switch(e) : this.switch(e - 1)), this.index > e && this.index--;
        for (let a = e; a < i.length; a++)
          i[a].getElementsByClassName("aplayer-list-index")[0].textContent = a;
        this.audios.length === 1 && this.player.container.classList.remove("aplayer-withlist"), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur");
      } else
        this.clear();
  }
  switch(e) {
    if (this.player.events.trigger("listswitch", {
      index: e
    }), typeof e < "u" && this.audios[e]) {
      this.index = e;
      const i = this.audios[this.index];
      this.player.template.pic.style.backgroundImage = i.cover ? `url('${i.cover}')` : "", this.player.theme(this.audios[this.index].theme || this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = i.name, this.player.template.author.innerHTML = i.artist ? " - " + i.artist : "";
      const a = this.player.container.getElementsByClassName("aplayer-list-light")[0];
      a && a.classList.remove("aplayer-list-light"), this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"), Nt(this.index * 33, 500, null, this.player.template.listOl), this.player.setAudio(i), this.player.lrc && this.player.lrc.switch(this.index), this.player.lrc && this.player.lrc.update(0), this.player.duration !== 1 && (this.player.template.dtime.innerHTML = b(this.player.duration));
    }
  }
  clear() {
    this.player.events.trigger("listclear"), this.index = 0, this.player.container.classList.remove("aplayer-withlist"), this.player.pause(), this.audios = [], this.player.lrc && this.player.lrc.clear(), this.player.audio.src = "", this.player.template.listOl.innerHTML = "", this.player.template.pic.style.backgroundImage = "", this.player.theme(this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = "No audio", this.player.template.author.innerHTML = "", this.player.bar.set("loaded", 0, "width"), this.player.template.dtime.innerHTML = b(0);
  }
}
const y = [];
let B = P;
function Wt(t) {
  B = t;
}
function Rt(t) {
  t.audio = document.createElement("audio"), t.audio.preload = t.options.preload;
  for (let e = 0; e < k.length; e++)
    t.audio.addEventListener(k[e], (i) => {
      t.events.trigger(k[e], i);
    });
  t.volume(t.storage.getVolume(), !0);
}
function $t(t) {
  t.on("play", () => {
    t.paused && Q(t);
  }), t.on("pause", () => {
    t.paused || z(t);
  }), t.on("timeupdate", () => {
    if (!t.disableTimeupdate) {
      t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
      const i = b(t.audio.currentTime);
      t.template.ptime.innerHTML !== i && (t.template.ptime.innerHTML = i);
    }
  }), t.on("durationchange", () => {
    t.duration !== 1 && (t.template.dtime.innerHTML = b(t.duration));
  }), t.on("progress", () => {
    const i = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.duration : 0;
    t.bar.set("loaded", i, "width");
  });
  let e;
  t.on("error", () => {
    t.list.audios.length > 1 ? (t.notice("An audio error has occurred, player will skip forward in 2 seconds."), e = setTimeout(() => {
      t.skipForward(), t.paused || t.play();
    }, 2e3)) : t.list.audios.length === 1 && t.notice("An audio error has occurred.");
  }), t.events.on("listswitch", () => {
    e && clearTimeout(e);
  }), t.on("ended", () => {
    t.options.loop === "none" ? t.options.order === "list" ? t.list.index < t.list.audios.length - 1 ? (t.list.switch((t.list.index + 1) % t.list.audios.length), t.play()) : (t.list.switch((t.list.index + 1) % t.list.audios.length), t.pause()) : t.options.order === "random" && (t.randomOrder.indexOf(t.list.index) < t.randomOrder.length - 1 ? (t.list.switch(t.nextIndex()), t.play()) : (t.list.switch(t.nextIndex()), t.pause())) : t.options.loop === "one" ? (t.list.switch(t.list.index), t.play()) : t.options.loop === "all" && (t.skipForward(), t.play());
  });
}
function Q(t) {
  if (t.paused && (t.paused = !1, t.template.button.classList.remove("aplayer-play"), t.template.button.classList.add("aplayer-pause"), t.template.button.innerHTML = "", setTimeout(() => {
    t.template.button.innerHTML = W;
  }, 100), t.template.skipPlayButton.innerHTML = W), t.timer.enable(), t.options.mutex)
    for (let e = 0; e < y.length; e++)
      t !== y[e] && y[e].pause();
}
function z(t) {
  t.paused || (t.paused = !0, t.template.button.classList.remove("aplayer-pause"), t.template.button.classList.add("aplayer-play"), t.template.button.innerHTML = "", setTimeout(() => {
    t.template.button.innerHTML = q;
  }, 100), t.template.skipPlayButton.innerHTML = q), t.container.classList.remove("aplayer-loading"), t.timer.disable();
}
class Vt {
  /**
   * APlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  constructor(e) {
    e.fixed = !1;
    const i = B();
    if (B != P && (e.fixed = !0, B = P), this.options = dt(e), this.container = this.options.container, this.paused = !0, this.playedPromise = Promise.resolve(), this.mode = "normal", this.randomOrder = V(this.options.audio.length), this.container.classList.add("aplayer"), this.options.lrcType && !this.options.fixed && this.container.classList.add("aplayer-withlrc"), this.options.audio.length > 1 && this.container.classList.add("aplayer-withlist"), x && this.container.classList.add("aplayer-mobile"), this.arrow = this.container.offsetWidth <= 300, this.arrow && this.container.classList.add("aplayer-arrow"), this.container = this.options.container, this.options.lrcType === 2 || this.options.lrcType === !0) {
      const a = this.container.getElementsByClassName("aplayer-lrc-content");
      for (let s = 0; s < a.length; s++)
        this.options.audio[s] && (this.options.audio[s].lrc = a[s].innerHTML);
    }
    this.template = yt(this.container, this.options, this.randomOrder, i), this.options.fixed && (this.container.classList.add("aplayer-fixed"), this.template.body.style.width = this.template.body.offsetWidth - 18 + "px"), this.options.mini && (this.setMode("mini"), this.template.info.style.display = "block"), this.template.info.offsetWidth < 200 && this.template.time.classList.add("aplayer-time-narrow"), this.options.lrcType && (this.lrc = new Mt({
      container: this.template.lrc,
      async: this.options.lrcType === 3,
      player: this
    })), this.storage = Lt(this), this.timer = Pt(this), this.events = It(), this.bar = bt(this.template), this.controller = new xt(this), this.list = new jt(this), Rt(this), $t(this), this.options.order === "random" ? this.list.switch(this.randomOrder[0]) : this.list.switch(0), this.options.autoplay && this.play(), y.push(this);
  }
  setAudio(e) {
    this.hls && (this.hls.destroy(), this.hls = null);
    let i = e.type;
    this.options.customAudioType && this.options.customAudioType[i] ? Object.prototype.toString.call(this.options.customAudioType[i]) === "[object Function]" ? this.options.customAudioType[i](this.audio, e, this) : console.error(`Illegal customType: ${i}`) : ((!i || i === "auto") && (/m3u8(#|\?|$)/i.exec(e.url) ? i = "hls" : i = "normal"), i === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(e.url), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL") ? this.audio.src = e.url : this.notice("Error: HLS is not supported.") : i === "normal" && (this.audio.src = e.url)), this.seek(0), this.paused || this.audio.play();
  }
  theme(e = this.list.audios[this.list.index].theme || this.options.theme, i = this.list.index, a = !0) {
    a && this.list.audios[i] && (this.list.audios[i].theme = e), this.template.listCurs[i] && (this.template.listCurs[i].style.backgroundColor = e), i === this.list.index && (this.template.pic.style.backgroundColor = e, this.template.played.style.background = e, this.template.thumb.style.background = e, this.template.volume.style.background = e);
  }
  seek(e) {
    e = Math.max(e, 0), e = Math.min(e, this.duration), this.audio.currentTime = e, this.bar.set("played", e / this.duration, "width"), this.template.ptime.innerHTML = b(e);
  }
  get duration() {
    return isNaN(this.audio.duration) ? 0 : this.audio.duration;
  }
  play() {
    Q(this);
    const e = this.audio.play();
    e && e.catch((i) => {
      console.warn(i), i.name === "NotAllowedError" && z(this);
    });
  }
  pause() {
    z(this), this.audio.pause();
  }
  switchVolumeIcon() {
    this.volume() >= 0.95 ? this.template.volumeButton.innerHTML = ot : this.volume() > 0 ? this.template.volumeButton.innerHTML = U : this.template.volumeButton.innerHTML = nt;
  }
  /**
   * Set volume
   */
  volume(e, i) {
    return e = parseFloat(e), isNaN(e) || (e = Math.max(e, 0), e = Math.min(e, 1), this.bar.set("volume", e, "height"), i || this.storage.setVolume(e), this.audio.volume = e, this.audio.muted && (this.audio.muted = !1), this.switchVolumeIcon()), this.audio.muted ? 0 : this.audio.volume;
  }
  /**
   * bind events
   */
  on(e, i) {
    this.events.on(e, i);
  }
  /**
   * toggle between play and pause
   */
  toggle() {
    this.template.button.classList.contains("aplayer-play") ? this.play() : this.template.button.classList.contains("aplayer-pause") && this.pause();
  }
  // abandoned
  switchAudio(e) {
    this.list.switch(e);
  }
  // abandoned
  addAudio(e) {
    this.list.add(e);
  }
  // abandoned
  removeAudio(e) {
    this.list.remove(e);
  }
  /**
   * destroy this player
   */
  destroy() {
    y.splice(y.indexOf(this), 1), this.pause(), this.container.innerHTML = "", this.audio.src = "", this.timer.destroy(), this.events.trigger("destroy");
  }
  setMode(e = "normal") {
    this.mode = e, e === "mini" ? this.container.classList.add("aplayer-narrow") : e === "normal" && this.container.classList.remove("aplayer-narrow");
  }
  notice(e, i = 2e3, a = 0.8) {
    this.template.notice.innerHTML = e, this.template.notice.style.opacity = a, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("noticeshow", {
      text: e
    }), i && (this.noticeTime = setTimeout(() => {
      this.template.notice.style.opacity = 0, this.events.trigger("noticehide");
    }, i));
  }
  prevIndex() {
    if (this.list.audios.length > 1) {
      if (this.options.order === "list")
        return this.list.index - 1 < 0 ? this.list.audios.length - 1 : this.list.index - 1;
      if (this.options.order === "random") {
        const e = this.randomOrder.indexOf(this.list.index);
        return e === 0 ? this.randomOrder[this.randomOrder.length - 1] : this.randomOrder[e - 1];
      }
    } else
      return 0;
  }
  nextIndex() {
    if (this.list.audios.length > 1) {
      if (this.options.order === "list")
        return (this.list.index + 1) % this.list.audios.length;
      if (this.options.order === "random") {
        const e = this.randomOrder.indexOf(this.list.index);
        return e === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[e + 1];
      }
    } else
      return 0;
  }
  skipBack() {
    this.list.switch(this.prevIndex());
  }
  skipForward() {
    this.list.switch(this.nextIndex());
  }
}
const Yt = () => {
  Wt(gt);
};
export {
  Vt as default,
  Yt as enableFixedModeOnce
};
