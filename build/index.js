const k = /mobile/i.test(window.navigator.userAgent);
function M(t) {
  const e = (n) => n < 10 ? "0" + n : "" + n, s = Math.floor(t / 3600), i = Math.floor((t - s * 3600) / 60), a = Math.floor(t - s * 3600 - i * 60);
  return (s > 0 ? [s, i, a] : [i, a]).map(e).join(":");
}
function I(t) {
  let e = t.offsetLeft, s = t.offsetParent;
  const i = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; s !== null; )
      e += s.offsetLeft, s = s.offsetParent;
  else
    for (; s !== null && s !== t; )
      e += s.offsetLeft, s = s.offsetParent;
  return e - i;
}
function P(t, e) {
  let s = t.offsetTop, i = t.offsetParent, a = 0;
  for (; i !== null; )
    s += i.offsetTop, i = i.offsetParent;
  return a = document.body.scrollTop + document.documentElement.scrollTop, e ? s : s - a;
}
const v = {
  dragStart: k ? "touchstart" : "mousedown",
  dragMove: k ? "touchmove" : "mousemove",
  dragEnd: k ? "touchend" : "mouseup"
};
function $(t) {
  function e(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const a = Math.floor(Math.random() * (i + 1)), n = s[a];
      s[a] = s[i], s[i] = n;
    }
    return s;
  }
  return e([...Array(t)].map(function(s, i) {
    return i;
  }));
}
const R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', _ = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', st = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', ot = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', lt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
function U(t) {
  return Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((e) => ({
    ...e,
    name: e.name || e.title || "Audio name",
    artist: e.artist || e.author || "Audio artist",
    cover: e.cover || e.pic,
    type: e.type || "normal"
  }));
}
const rt = (t) => {
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
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var z = Object.create(window), dt = /["&'<>]/;
z.$escape = function(t) {
  return ut(V(t));
};
z.$each = function(t, e) {
  if (Array.isArray(t))
    for (var s = 0, i = t.length; s < i; s++)
      e(t[s], s);
  else
    for (var a in t)
      e(t[a], a);
};
function V(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = V(t.call(t)) : t = JSON.stringify(t)), t;
}
function ut(t) {
  var e = "" + t, s = dt.exec(e);
  if (!s)
    return t;
  var i = "", a = void 0, n = void 0, r = void 0;
  for (a = s.index, n = 0; a < e.length; a++) {
    switch (e.charCodeAt(a)) {
      case 34:
        r = "&#34;";
        break;
      case 38:
        r = "&#38;";
        break;
      case 39:
        r = "&#39;";
        break;
      case 60:
        r = "&#60;";
        break;
      case 62:
        r = "&#62;";
        break;
      default:
        continue;
    }
    n !== a && (i += e.substring(n, a)), n = a + 1, i += r;
  }
  return n !== a ? i + e.substring(n, a) : i;
}
var mt = z, pt = mt;
const q = /* @__PURE__ */ D(pt);
function A(t) {
  t = t || {};
  let e = "", s = q.$each, i = t.audio, a = q.$escape, n = t.theme, r = t.index;
  return s(i, function(c, l) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += a(c.theme || n), e += '"></span> <span class="aplayer-list-index">', e += a(l + r), e += '</span><span class="aplayer-list-title">', e += a(c.name), e += '</span><span class="aplayer-list-author">', e += a(c.artist), e += "</span></li> ";
  }), e;
}
const y = q.$escape, ht = [
  (t, e) => {
    e('<div class="aplayer-body"><div class="aplayer-pic" style="');
  },
  (t, e) => {
    e('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
  },
  (t, e) => {
    e('</button></div></div><div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(y(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(y(t.listMaxHeight)), e('" ')), e("> "), e(A({
      theme: t.theme,
      audio: t.audio,
      index: 1
    })), e(" </ol></div> ");
  }
], ft = [
  (t, e) => {
    e(' <div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(y(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(y(t.listMaxHeight)), e('" ')), e("> "), e(A({
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
function vt(t, e, s) {
  let i = "", a = function(n) {
    return i += n, i;
  };
  return s[0](t, a), e && (i += "background-image:url(&quot;", i += y(e), i += "&quot;);"), i += "background-color: ", i += y(t.theme), i += '"><div class="aplayer-button aplayer-play">', i += B, s[1](t, a), i += y(t.theme), i += '"><span class="aplayer-thumb" style="background: ', i += y(t.theme), i += '"><span class="aplayer-loading-icon">', i += nt, i += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', i += N, i += ' </span><span class="aplayer-icon aplayer-icon-play"> ', i += B, i += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', i += N, i += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', i += _, i += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', i += y(t.theme), i += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', t.order === "list" ? i += Y : t.order === "random" && (i += R), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', t.loop === "one" ? i += j : t.loop === "all" ? i += O : t.loop === "none" && (i += S), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', i += at, i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', i += lt, i += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', i += ot, s[2](t, a), i;
}
function gt(t, e, s, i) {
  let a = "";
  e.audio.length && (e.order === "random" ? a = e.audio[s[0]].cover : a = e.audio[0].cover), t.innerHTML = vt(e, a, i);
  const n = (r) => t.querySelector(r);
  return {
    lrc: n(".aplayer-lrc-contents"),
    lrcWrap: n(".aplayer-lrc"),
    ptime: n(".aplayer-ptime"),
    info: n(".aplayer-info"),
    time: n(".aplayer-time"),
    barWrap: n(".aplayer-bar-wrap"),
    button: n(".aplayer-button"),
    body: n(".aplayer-body"),
    list: n(".aplayer-list"),
    listOl: n(".aplayer-list ol"),
    listCurs: t.querySelectorAll(".aplayer-list-cur"),
    played: n(".aplayer-played"),
    loaded: n(".aplayer-loaded"),
    thumb: n(".aplayer-thumb"),
    volume: n(".aplayer-volume"),
    volumeBar: n(".aplayer-volume-bar"),
    volumeButton: n(".aplayer-time button"),
    volumeBarWrap: n(".aplayer-volume-bar-wrap"),
    loop: n(".aplayer-icon-loop"),
    order: n(".aplayer-icon-order"),
    menu: n(".aplayer-icon-menu"),
    pic: n(".aplayer-pic"),
    title: n(".aplayer-title"),
    author: n(".aplayer-author"),
    dtime: n(".aplayer-dtime"),
    notice: n(".aplayer-notice"),
    miniSwitcher: n(".aplayer-miniswitcher"),
    skipBackButton: n(".aplayer-icon-back"),
    skipForwardButton: n(".aplayer-icon-forward"),
    skipPlayButton: n(".aplayer-icon-play"),
    lrcButton: n(".aplayer-icon-lrc")
  };
}
const wt = (t) => {
  const e = { ...t };
  function s(a, n, r) {
    n = Math.max(n, 0), n = Math.min(n, 1), e[a].style[r] = n * 100 + "%";
  }
  function i(a, n) {
    return parseFloat(e[a].style[n]) / 100;
  }
  return { get: i, set: s };
};
function W(t) {
  t = t || {};
  let e = "", s = q.$each, i = t.lyrics, a = q.$escape;
  return s(i, function(n, r) {
    e += " <p ", r === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += a(n[1]), e += "</p> ";
  }), e;
}
const yt = (t) => {
  const e = t.container, s = t.player, i = t.async;
  let a = [], n = 0, r = [];
  function c() {
    s.events.trigger("lrcshow"), s.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function l() {
    s.events.trigger("lrchide"), s.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function d() {
    s.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? c() : l();
  }
  function h(m = s.audio.currentTime) {
    if (n > r.length - 1 || m < r[n][0] || !r[n + 1] || m >= r[n + 1][0])
      for (let o = 0; o < r.length; o++)
        m >= r[o][0] && (!r[o + 1] || m < r[o + 1][0]) && (n = o, e.style.transform = `translateY(${-n * 16}px)`, e.style.webkitTransform = `translateY(${-n * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[o].classList.add("aplayer-lrc-current"));
  }
  function b(m) {
    if (!a[m])
      if (!i)
        s.list.audios[m].lrc ? a[m] = g(s.list.audios[m].lrc) : a[m] = [["00:00", "Not available"]];
      else {
        a[m] = [["00:00", "Loading"]];
        const o = new XMLHttpRequest();
        o.onreadystatechange = () => {
          m === s.list.index && o.readyState === 4 && (o.status >= 200 && o.status < 300 || o.status === 304 ? a[m] = g(o.responseText) : (s.notice(`LRC file request fails: status ${o.status}`), a[m] = [["00:00", "Not available"]]), e.innerHTML = W({
            lyrics: a[m]
          }), h(0), r = a[m]);
        };
        const u = s.list.audios[m].lrc;
        o.open("get", u, !0), o.send(null);
      }
    e.innerHTML = W({
      lyrics: a[m]
    }), r = a[m];
  }
  function g(m) {
    if (m) {
      m = m.replace(/([^\]^\n])\[/g, (p, w) => w + `
[`);
      const o = m.split(`
`);
      let u = [];
      const f = o.length;
      for (let p = 0; p < f; p++) {
        const w = o[p].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), K = o[p].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (w) {
          const Q = w.length;
          for (let H = 0; H < Q; H++) {
            const T = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(w[H]), Z = T[1] * 60, F = parseInt(T[2]), tt = T[4] ? parseInt(T[4]) / ((T[4] + "").length === 2 ? 100 : 1e3) : 0, et = Z + F + tt;
            u.push([et, K]);
          }
        }
      }
      return u = u.filter((p) => p[1]), u.sort((p, w) => p[0] - w[0]), u;
    } else
      return [];
  }
  function L(m) {
    a.splice(m, 1);
  }
  function x() {
    a = [], e.innerHTML = "";
  }
  return {
    show: c,
    hide: l,
    toggle: d,
    update: h,
    switch: b,
    remove: L,
    clear: x
  };
}, bt = (t) => {
  Lt(t), Mt(t), Tt(t), kt(t), qt(t), k || xt(t), Et(t), Bt(t), Ht(t);
};
function Lt(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function Mt(t) {
  const e = (i) => {
    let a = ((i.clientX || i.changedTouches[0].clientX) - I(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.lrc && t.lrc.update(a * t.duration), t.template.ptime.innerHTML = M(a * t.duration);
  }, s = (i) => {
    document.removeEventListener(v.dragEnd, s), document.removeEventListener(v.dragMove, e);
    let a = ((i.clientX || i.changedTouches[0].clientX) - I(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(v.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(v.dragMove, e), document.addEventListener(v.dragEnd, s);
  });
}
function xt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (i) => {
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - P(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  }, s = (i) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(v.dragEnd, s), document.removeEventListener(v.dragMove, e);
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - P(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  };
  t.template.volumeBarWrap.addEventListener(v.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(v.dragMove, e), document.addEventListener(v.dragEnd, s);
  });
}
function Tt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = R) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = Y);
  });
}
function kt(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = O) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = j) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = O);
  });
}
function qt(t) {
  t.template.menu.addEventListener("click", () => {
    t.list.toggle();
  });
}
function Et(t) {
  t.template.miniSwitcher.addEventListener("click", () => {
    t.setMode(t.mode === "mini" ? "normal" : "mini");
  });
}
function Bt(t) {
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
  let e = 0, s = 0, i = !1, a = !1, n = setInterval(() => {
    a && (s = t.audio.currentTime, !i && s === e && !t.audio.paused && (t.container.classList.add("aplayer-loading"), i = !0), i && s > e && !t.audio.paused && (t.container.classList.remove("aplayer-loading"), i = !1), e = s);
  }, 100);
  return {
    enable() {
      a = !0;
    },
    disable() {
      a = !1;
    },
    destroy() {
      a = !1, n && clearInterval(n);
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
], X = [
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
];
function zt(t) {
  if (St.indexOf(t) !== -1)
    return "player";
  if (X.indexOf(t) !== -1)
    return "audio";
}
const At = () => {
  const t = {};
  return {
    on: function(e, s) {
      zt(e) && typeof s == "function" && (t[e] || (t[e] = []), t[e].push(s));
    },
    trigger: function(e, s) {
      var i;
      (i = t[e]) == null || i.forEach((a) => a(s));
    }
  };
};
var J = { exports: {} };
(function(t, e) {
  (function(s, i) {
    t.exports = i();
  })(ct, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var s = function(c, l) {
        return c.nodeName === "HTML" ? -l : c.getBoundingClientRect().top + l;
      }, i = function(c) {
        return c < 0.5 ? 4 * c * c * c : (c - 1) * (2 * c - 2) * (2 * c - 2) + 1;
      }, a = function(c, l, d, h) {
        return d > h ? l : c + (l - c) * i(d / h);
      }, n = function(c, l, d, h) {
        l = l || 500, h = h || window;
        var b = h.scrollTop || window.pageYOffset;
        if (typeof c == "number")
          var g = parseInt(c);
        else
          var g = s(c, b);
        var L = Date.now(), x = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(o) {
          window.setTimeout(o, 15);
        }, m = function() {
          var o = Date.now() - L;
          h !== window ? h.scrollTop = a(b, g, o, l) : window.scroll(0, a(b, g, o, l)), o > l ? typeof d == "function" && d(c) : x(m);
        };
        m();
      }, r = function(c) {
        if (!c.defaultPrevented) {
          c.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var l = document.getElementById(this.hash.substring(1));
          if (!l)
            return;
          n(l, 500, function(d) {
            location.replace("#" + d.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var c = document.querySelectorAll('a[href^="#"]:not([href="#"])'), l, d = c.length; l = c[--d]; )
          l.addEventListener("click", r, !1);
      }), n;
    }
  });
})(J);
var It = J.exports;
const Pt = /* @__PURE__ */ D(It);
function Ct(t, e) {
  t.events.trigger("listadd", {
    audios: e
  }), e = U(e);
  const s = !(t.list.audios.length > 1), i = t.list.audios.length === 0;
  t.template.listOl.innerHTML += A({
    theme: t.options.theme,
    audio: e,
    index: t.list.audios.length + 1
  }), t.list.audios = t.list.audios.concat(e), s && t.list.audios.length > 1 && t.container.classList.add("aplayer-withlist"), t.randomOrder = $(t.list.audios.length), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur"), t.template.listCurs[t.list.audios.length - 1].style.backgroundColor = e.theme || t.options.theme, i && (t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0));
}
function Nt(t, e) {
  if (t.events.trigger("listremove", {
    index: e
  }), t.list.audios[e])
    if (t.list.audios.length > 1) {
      const s = t.container.querySelectorAll(".aplayer-list li");
      s[e].remove(), t.list.audios.splice(e, 1), t.lrc && t.lrc.remove(e), e === t.list.index && (t.list.audios[e] ? t.list.switch(e) : t.list.switch(e - 1)), t.list.index > e && t.list.index--;
      for (let i = e; i < s.length; i++)
        s[i].getElementsByClassName("aplayer-list-index")[0].textContent = i;
      t.list.audios.length === 1 && t.container.classList.remove("aplayer-withlist"), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur");
    } else
      G(t);
}
function G(t) {
  t.events.trigger("listclear"), t.list.index = 0, t.container.classList.remove("aplayer-withlist"), t.pause(), t.list.audios = [], t.lrc && t.lrc.clear(), t.audio.src = "", t.template.listOl.innerHTML = "", t.template.pic.style.backgroundImage = "", t.theme(t.options.theme, t.list.index, !1), t.template.title.innerHTML = "No audio", t.template.author.innerHTML = "", t.bar.set("loaded", 0, "width"), t.template.dtime.innerHTML = M(0);
}
const Wt = (t) => {
  let e = 0, s = t.options.audio;
  t.template.list.addEventListener("click", (c) => {
    let l;
    c.target.tagName.toUpperCase() === "LI" ? l = c.target : l = c.target.parentElement;
    const d = parseInt(l.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
    d !== e ? (r(d), t.play()) : t.toggle();
  });
  function i() {
    t.events.trigger("listshow"), t.template.list.classList.remove("aplayer-list-hide"), t.template.listOl.scrollTop = e * 33;
  }
  function a() {
    t.events.trigger("listhide"), t.template.list.classList.add("aplayer-list-hide");
  }
  function n() {
    t.template.list.classList.contains("aplayer-list-hide") ? i() : a();
  }
  function r(c) {
    if (t.events.trigger("listswitch", {
      index: c
    }), typeof c < "u" && s[c]) {
      e = c;
      const l = s[e];
      t.template.pic.style.backgroundImage = l.cover ? `url('${l.cover}')` : "", t.theme(s[e].theme || t.options.theme, e, !1), t.template.title.innerHTML = l.name, t.template.author.innerHTML = l.artist ? " - " + l.artist : "";
      const d = t.container.getElementsByClassName("aplayer-list-light")[0];
      d && d.classList.remove("aplayer-list-light"), t.container.querySelectorAll(".aplayer-list li")[e].classList.add("aplayer-list-light"), Pt(e * 33, 500, null, t.template.listOl), t.setAudio(l), t.lrc && t.lrc.switch(e), t.lrc && t.lrc.update(0), t.duration !== 1 && (t.template.dtime.innerHTML = M(t.duration));
    }
  }
  return {
    get index() {
      return e;
    },
    set index(c) {
      e = c;
    },
    get audios() {
      return s;
    },
    set audios(c) {
      s = c;
    },
    show: i,
    hide: a,
    toggle: n,
    switch: r
  };
}, E = [], $t = () => {
  const t = {
    tplRenderers: ht,
    afterInitHooks: [],
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
  const t = $t();
  let e, s = !0, i = null, a = Ot(t), n, r, c, l, d;
  function h() {
    t.audio = document.createElement("audio"), t.audio.preload = r.preload, X.forEach((o) => {
      t.audio.addEventListener(o, (u) => {
        t.events.trigger(o, u);
      });
    }), t.volume(e.get(), !0);
  }
  function b() {
    t.on("play", () => {
      s && g();
    }), t.on("pause", () => {
      s || L();
    }), t.on("timeupdate", () => {
      if (!t.disableTimeupdate) {
        t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
        const u = M(t.audio.currentTime);
        l.ptime.innerHTML !== u && (l.ptime.innerHTML = u);
      }
    }), t.on("durationchange", () => {
      t.duration !== 1 && (l.dtime.innerHTML = M(t.duration));
    }), t.on("progress", () => {
      const u = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.duration : 0;
      t.bar.set("loaded", u, "width");
    });
    let o;
    t.on("error", () => {
      d.audios.length > 1 ? (t.notice("An audio error has occurred, player will skip forward in 2 seconds."), o = setTimeout(() => {
        t.skipForward(), s || t.play();
      }, 2e3)) : d.audios.length === 1 && t.notice("An audio error has occurred.");
    }), t.events.on("listswitch", () => {
      o && clearTimeout(o);
    }), t.on("ended", () => {
      r.loop === "none" ? r.order === "list" ? d.index < d.audios.length - 1 ? (d.switch((d.index + 1) % d.audios.length), t.play()) : (d.switch((d.index + 1) % d.audios.length), t.pause()) : r.order === "random" && (t.randomOrder.indexOf(d.index) < t.randomOrder.length - 1 ? (d.switch(m()), t.play()) : (d.switch(m()), t.pause())) : r.loop === "one" ? (d.switch(d.index), t.play()) : r.loop === "all" && (t.skipForward(), t.play());
    });
  }
  function g() {
    s && (s = !1, l.button.classList.remove("aplayer-play"), l.button.classList.add("aplayer-pause"), l.button.innerHTML = "", setTimeout(() => {
      l.button.innerHTML = C;
    }, 100), l.skipPlayButton.innerHTML = C), a.enable(), r.mutex && E.filter((o) => o !== t).forEach((o) => {
      o.pause();
    });
  }
  function L() {
    s || (s = !0, l.button.classList.remove("aplayer-pause"), l.button.classList.add("aplayer-play"), l.button.innerHTML = "", setTimeout(() => {
      l.button.innerHTML = B;
    }, 100), l.skipPlayButton.innerHTML = B), c.classList.remove("aplayer-loading"), a.disable();
  }
  function x() {
    if (d.audios.length > 1) {
      if (r.order === "list")
        return d.index - 1 < 0 ? d.audios.length - 1 : d.index - 1;
      if (r.order === "random") {
        const o = t.randomOrder.indexOf(d.index);
        return o === 0 ? t.randomOrder[t.randomOrder.length - 1] : t.randomOrder[o - 1];
      }
    } else
      return 0;
  }
  function m() {
    if (d.audios.length > 1) {
      if (r.order === "list")
        return (d.index + 1) % d.audios.length;
      if (r.order === "random") {
        const o = t.randomOrder.indexOf(d.index);
        return o === t.randomOrder.length - 1 ? t.randomOrder[0] : t.randomOrder[o + 1];
      }
    } else
      return 0;
  }
  return t.init = (o) => {
    if (r = rt(o), t.options = r, c = r.container, t.container = c, c.classList.add("aplayer"), r.lrcType && !r.fixed && c.classList.add("aplayer-withlrc"), r.audio.length > 1 && c.classList.add("aplayer-withlist"), k && c.classList.add("aplayer-mobile"), c.offsetWidth <= 300 && c.classList.add("aplayer-arrow"), r.lrcType === 2 || r.lrcType === !0) {
      const f = c.getElementsByClassName("aplayer-lrc-content");
      for (let p = 0; p < f.length; p++)
        r.audio[p] && (r.audio[p].lrc = f[p].innerHTML);
    }
    return t.randomOrder = $(r.audio.length), l = gt(c, r, t.randomOrder, t.tplRenderers), t.template = l, t.mode = "normal", r.fixed && (c.classList.add("aplayer-fixed"), l.body.style.width = l.body.offsetWidth - 18 + "px"), r.mini && (t.setMode("mini"), l.info.style.display = "block"), l.info.offsetWidth < 200 && l.time.classList.add("aplayer-time-narrow"), r.lrcType && (t.lrc = yt({
      container: l.lrc,
      async: r.lrcType === 3,
      player: t
    })), e = (() => {
      const f = r.storageName, p = JSON.parse(localStorage.getItem(f)) || {};
      return p.volume || (p.volume = r.volume), {
        get() {
          return p.volume;
        },
        set(w) {
          p.volume = w, localStorage.setItem(f, JSON.stringify(p));
        }
      };
    })(), t.events = At(), t.bar = wt(l), t.controller = bt(t), d = Wt(t), t.list = d, h(), b(), r.order === "random" ? d.switch(t.randomOrder[0]) : d.switch(0), r.autoplay && t.play(), E.push(t), t.afterInitHooks.forEach((f) => {
      f(t);
    }), t;
  }, t.setAudio = (o) => {
    i && (i.destroy(), i = null);
    let u = o.type;
    r.customAudioType && r.customAudioType[u] ? Object.prototype.toString.call(r.customAudioType[u]) === "[object Function]" ? r.customAudioType[u](t.audio, o, t) : console.error(`Illegal customType: ${u}`) : ((!u || u === "auto") && (/m3u8(#|\?|$)/i.exec(o.url) ? u = "hls" : u = "normal"), u === "hls" ? Hls.isSupported() ? (i = new Hls(), i.loadSource(o.url), i.attachMedia(t.audio)) : t.audio.canPlayType("application/x-mpegURL") || t.audio.canPlayType("application/vnd.apple.mpegURL") ? t.audio.src = o.url : t.notice("Error: HLS is not supported.") : u === "normal" && (t.audio.src = o.url)), t.seek(0), s || t.audio.play();
  }, t.destroy = () => {
    E.splice(E.indexOf(t), 1), t.pause(), c.innerHTML = "", t.audio.src = "", a.destroy(), t.events.trigger("destroy");
  }, t.setMode = (o = "normal") => {
    t.mode = o, o === "mini" ? c.classList.add("aplayer-narrow") : o === "normal" && c.classList.remove("aplayer-narrow");
  }, t.notice = (o, u = 2e3, f = 0.8) => {
    l.notice.innerHTML = o, l.notice.style.opacity = f, n && clearTimeout(n), t.events.trigger("noticeshow", {
      text: o
    }), u && (n = setTimeout(() => {
      l.notice.style.opacity = 0, t.events.trigger("noticehide");
    }, u));
  }, t.theme = (o = d.audios[d.index].theme || r.theme, u = d.index, f = !0) => {
    f && d.audios[u] && (d.audios[u].theme = o), l.listCurs[u] && (l.listCurs[u].style.backgroundColor = o), u === d.index && (l.pic.style.backgroundColor = o, l.played.style.background = o, l.thumb.style.background = o, l.volume.style.background = o);
  }, t.seek = (o) => {
    o = Math.max(o, 0), o = Math.min(o, t.duration), t.audio.currentTime = o, t.bar.set("played", o / t.duration, "width"), l.ptime.innerHTML = M(o);
  }, t.play = () => {
    g();
    const o = t.audio.play();
    o && o.catch((u) => {
      console.warn(u), u.name === "NotAllowedError" && L();
    });
  }, t.pause = () => {
    L(), t.audio.pause();
  }, t.switchVolumeIcon = () => {
    t.volume() >= 0.95 ? l.volumeButton.innerHTML = it : t.volume() > 0 ? l.volumeButton.innerHTML = _ : l.volumeButton.innerHTML = st;
  }, t.volume = (o, u) => (o = parseFloat(o), isNaN(o) || (o = Math.max(o, 0), o = Math.min(o, 1), t.bar.set("volume", o, "height"), u || e.set(o), t.audio.volume = o, t.audio.muted && (t.audio.muted = !1), t.switchVolumeIcon()), t.audio.muted ? 0 : t.audio.volume), t.on = (o, u) => {
    t.events.on(o, u);
  }, t.toggle = () => {
    l.button.classList.contains("aplayer-play") ? t.play() : l.button.classList.contains("aplayer-pause") && t.pause();
  }, t.skipBack = () => {
    d.switch(x());
  }, t.skipForward = () => {
    d.switch(m());
  }, t.use = (o) => (o(t), t), t;
};
function _t(t) {
  t.tplRenderers = ft;
  const e = t.init;
  t.init = (s) => (s.fixed = !0, e(s));
}
function jt(t) {
  t.afterInitHooks.push(() => {
    t.list.add = (e) => {
      Ct(t, e);
    };
  });
}
function Yt(t) {
  t.afterInitHooks.push(() => {
    t.list.remove = (e) => {
      Nt(t, e);
    };
  });
}
function Ut(t) {
  t.afterInitHooks.push(() => {
    t.list.clear = () => {
      G(t);
    };
  });
}
export {
  _t as APlayerFixedModePlugin,
  jt as addMusicPlugin,
  Ut as clearMusicPlugin,
  Rt as default,
  Yt as removeMusicPlugin
};
