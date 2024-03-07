const T = /mobile/i.test(window.navigator.userAgent);
function L(t) {
  const e = (n) => n < 10 ? "0" + n : "" + n, i = Math.floor(t / 3600), s = Math.floor((t - i * 3600) / 60), o = Math.floor(t - i * 3600 - s * 60);
  return (i > 0 ? [i, s, o] : [s, o]).map(e).join(":");
}
function N(t) {
  let e = t.offsetLeft, i = t.offsetParent;
  const s = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; i !== null; )
      e += i.offsetLeft, i = i.offsetParent;
  else
    for (; i !== null && i !== t; )
      e += i.offsetLeft, i = i.offsetParent;
  return e - s;
}
function $(t, e) {
  let i = t.offsetTop, s = t.offsetParent, o = 0;
  for (; s !== null; )
    i += s.offsetTop, s = s.offsetParent;
  return o = document.body.scrollTop + document.documentElement.scrollTop, e ? i : i - o;
}
const m = {
  dragStart: T ? "touchstart" : "mousedown",
  dragMove: T ? "touchmove" : "mousemove",
  dragEnd: T ? "touchend" : "mouseup"
};
function V(t) {
  function e(i) {
    for (let s = i.length - 1; s >= 0; s--) {
      const o = Math.floor(Math.random() * (s + 1)), n = i[o];
      i[o] = i[s], i[s] = n;
    }
    return i;
  }
  return e([...Array(t)].map(function(i, s) {
    return s;
  }));
}
const Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', _ = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', lt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', rt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', ct = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', dt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
function X(t) {
  return Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((e) => ({
    ...e,
    name: e.name || e.title || "Audio name",
    artist: e.artist || e.author || "Audio artist",
    cover: e.cover || e.pic,
    type: e.type || "normal"
  }));
}
const ht = (t) => {
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
  return t = Object.assign(e, t), t.audio = X(t.audio), t.audio.length <= 1 && t.loop === "one" && (t.loop = "all"), t;
};
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function J(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var P = Object.create(window), mt = /["&'<>]/;
P.$escape = function(t) {
  return pt(G(t));
};
P.$each = function(t, e) {
  if (Array.isArray(t))
    for (var i = 0, s = t.length; i < s; i++)
      e(t[i], i);
  else
    for (var o in t)
      e(t[o], o);
};
function G(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = G(t.call(t)) : t = JSON.stringify(t)), t;
}
function pt(t) {
  var e = "" + t, i = mt.exec(e);
  if (!i)
    return t;
  var s = "", o = void 0, n = void 0, l = void 0;
  for (o = i.index, n = 0; o < e.length; o++) {
    switch (e.charCodeAt(o)) {
      case 34:
        l = "&#34;";
        break;
      case 38:
        l = "&#38;";
        break;
      case 39:
        l = "&#39;";
        break;
      case 60:
        l = "&#60;";
        break;
      case 62:
        l = "&#62;";
        break;
      default:
        continue;
    }
    n !== o && (s += e.substring(n, o)), n = o + 1, s += l;
  }
  return n !== o ? s + e.substring(n, o) : s;
}
var ft = P, vt = ft;
const y = /* @__PURE__ */ J(vt);
function C(t) {
  t = t || {};
  let e = "", i = y.$each, s = t.audio, o = y.$escape, n = t.theme, l = t.index;
  return i(s, function(a, r) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += o(a.theme || n), e += '"></span> <span class="aplayer-list-index">', e += o(r + l), e += '</span><span class="aplayer-list-title">', e += o(a.name), e += '</span><span class="aplayer-list-author">', e += o(a.artist), e += "</span></li> ";
  }), e;
}
const f = y.$escape;
function A() {
  return [
    (t, e) => {
      e('<div class="aplayer-body"><div class="aplayer-pic" style="');
    },
    (t, e) => {
      e('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
    },
    (t, e) => {
      e('</button></div></div><div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("> "), e(C({
        theme: t.theme,
        audio: t.audio,
        index: 1
      })), e(" </ol></div> ");
    }
  ];
}
function gt() {
  return [
    (t, e) => {
      e(' <div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("> "), e(C({
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
}
function wt(t, e, i) {
  let s = "", o = function(n) {
    return s += n, s;
  };
  return i[0](t, o), e && (s += "background-image:url(&quot;", s += f(e), s += "&quot;);"), s += "background-color: ", s += f(t.theme), s += '"><div class="aplayer-button aplayer-play">', s += B, i[1](t, o), s += f(t.theme), s += '"><span class="aplayer-thumb" style="background: ', s += f(t.theme), s += '"><span class="aplayer-loading-icon">', s += ct, s += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', s += R, s += ' </span><span class="aplayer-icon aplayer-icon-play"> ', s += B, s += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', s += R, s += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', s += U, s += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', s += f(t.theme), s += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', t.order === "list" ? s += D : t.order === "random" && (s += Y), s += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', t.loop === "one" ? s += _ : t.loop === "all" ? s += S : t.loop === "none" && (s += z), s += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', s += lt, s += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', s += dt, s += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', s += rt, i[2](t, o), s;
}
function bt(t, e, i, s) {
  let o = "";
  e.audio.length && (e.order === "random" ? o = e.audio[i[0]].cover : o = e.audio[0].cover), t.innerHTML = wt(e, o, s);
  const n = (l) => t.querySelector(l);
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
const Lt = (t) => {
  const e = { ...t };
  function i(o, n, l) {
    n = Math.max(n, 0), n = Math.min(n, 1), e[o].style[l] = n * 100 + "%";
  }
  function s(o, n) {
    return parseFloat(e[o].style[n]) / 100;
  }
  return { get: s, set: i };
}, Mt = (t) => {
  const e = t.options.storageName, i = JSON.parse(localStorage.getItem(e)) || {};
  return i.volume || (i.volume = t.options.volume), {
    getVolume() {
      return i.volume;
    },
    setVolume(s) {
      i.volume = s, localStorage.setItem(e, JSON.stringify(i));
    }
  };
};
function j(t) {
  t = t || {};
  let e = "", i = y.$each, s = t.lyrics, o = y.$escape;
  return i(s, function(n, l) {
    e += " <p ", l === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += o(n[1]), e += "</p> ";
  }), e;
}
const xt = (t) => {
  const e = t.container, i = t.player, s = t.async;
  let o = [], n = 0, l = [];
  function a() {
    i.events.trigger("lrcshow"), i.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function r() {
    i.events.trigger("lrchide"), i.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function h() {
    i.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? a() : r();
  }
  function u(c = i.audio.currentTime) {
    if (n > l.length - 1 || c < l[n][0] || !l[n + 1] || c >= l[n + 1][0])
      for (let d = 0; d < l.length; d++)
        c >= l[d][0] && (!l[d + 1] || c < l[d + 1][0]) && (n = d, e.style.transform = `translateY(${-n * 16}px)`, e.style.webkitTransform = `translateY(${-n * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[d].classList.add("aplayer-lrc-current"));
  }
  function M(c) {
    if (!o[c])
      if (!s)
        i.list.audios[c].lrc ? o[c] = v(i.list.audios[c].lrc) : o[c] = [["00:00", "Not available"]];
      else {
        o[c] = [["00:00", "Loading"]];
        const d = new XMLHttpRequest();
        d.onreadystatechange = () => {
          c === i.list.index && d.readyState === 4 && (d.status >= 200 && d.status < 300 || d.status === 304 ? o[c] = v(d.responseText) : (i.notice(`LRC file request fails: status ${d.status}`), o[c] = [["00:00", "Not available"]]), e.innerHTML = j({
            lyrics: o[c]
          }), u(0), l = o[c]);
        };
        const g = i.list.audios[c].lrc;
        d.open("get", g, !0), d.send(null);
      }
    e.innerHTML = j({
      lyrics: o[c]
    }), l = o[c];
  }
  function v(c) {
    if (c) {
      c = c.replace(/([^\]^\n])\[/g, (p, w) => w + `
[`);
      const d = c.split(`
`);
      let g = [];
      const Z = d.length;
      for (let p = 0; p < Z; p++) {
        const w = d[p].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), F = d[p].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (w) {
          const tt = w.length;
          for (let O = 0; O < tt; O++) {
            const x = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(w[O]), et = x[1] * 60, it = parseInt(x[2]), st = x[4] ? parseInt(x[4]) / ((x[4] + "").length === 2 ? 100 : 1e3) : 0, ot = et + it + st;
            g.push([ot, F]);
          }
        }
      }
      return g = g.filter((p) => p[1]), g.sort((p, w) => p[0] - w[0]), g;
    } else
      return [];
  }
  function E(c) {
    o.splice(c, 1);
  }
  function H() {
    o = [], e.innerHTML = "";
  }
  return {
    show: a,
    hide: r,
    toggle: h,
    update: u,
    switch: M,
    parse: v,
    remove: E,
    clear: H
  };
}, Tt = (t) => {
  yt(t), kt(t), Bt(t), Et(t), Ht(t), T || qt(t), Ot(t), St(t), zt(t);
};
function yt(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function kt(t) {
  const e = (s) => {
    let o = ((s.clientX || s.changedTouches[0].clientX) - N(t.template.barWrap)) / t.template.barWrap.clientWidth;
    o = Math.max(o, 0), o = Math.min(o, 1), t.bar.set("played", o, "width"), t.lrc && t.lrc.update(o * t.duration), t.template.ptime.innerHTML = L(o * t.duration);
  }, i = (s) => {
    document.removeEventListener(m.dragEnd, i), document.removeEventListener(m.dragMove, e);
    let o = ((s.clientX || s.changedTouches[0].clientX) - N(t.template.barWrap)) / t.template.barWrap.clientWidth;
    o = Math.max(o, 0), o = Math.min(o, 1), t.bar.set("played", o, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(m.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(m.dragMove, e), document.addEventListener(m.dragEnd, i);
  });
}
function qt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (s) => {
    let o = 1 - ((s.clientY || s.changedTouches[0].clientY) - $(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    o = Math.max(o, 0), o = Math.min(o, 1), t.volume(o);
  }, i = (s) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(m.dragEnd, i), document.removeEventListener(m.dragMove, e);
    let o = 1 - ((s.clientY || s.changedTouches[0].clientY) - $(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    o = Math.max(o, 0), o = Math.min(o, 1), t.volume(o);
  };
  t.template.volumeBarWrap.addEventListener(m.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(m.dragMove, e), document.addEventListener(m.dragEnd, i);
  });
}
function Bt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = Y) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = D);
  });
}
function Et(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = z) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = S) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = _) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = z) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = S);
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
function St(t) {
  t.template.skipBackButton.addEventListener("click", () => {
    t.skipBack();
  }), t.template.skipForwardButton.addEventListener("click", () => {
    t.skipForward();
  }), t.template.skipPlayButton.addEventListener("click", () => {
    t.toggle();
  });
}
function zt(t) {
  t.template.lrcButton.addEventListener("click", () => {
    t.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (t.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.show()) : (t.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.hide());
  });
}
const At = (t) => {
  let e = 0, i = 0, s = !1, o = !1, n = setInterval(() => {
    o && (i = t.audio.currentTime, !s && i === e && !t.audio.paused && (t.container.classList.add("aplayer-loading"), s = !0), s && i > e && !t.audio.paused && (t.container.classList.remove("aplayer-loading"), s = !1), e = i);
  }, 100);
  return {
    enable() {
      o = !0;
    },
    disable() {
      o = !1;
    },
    destroy() {
      o = !1, n && clearInterval(n);
    }
  };
}, It = [
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
], Pt = () => {
  const t = {};
  function e(o, n) {
    s(o) && typeof n == "function" && (t[o] || (t[o] = []), t[o].push(n));
  }
  function i(o, n) {
    if (t[o] && t[o].length)
      for (let l = 0; l < t[o].length; l++)
        t[o][l](n);
  }
  function s(o) {
    return It.indexOf(o) !== -1 ? "player" : k.indexOf(o) !== -1 ? "audio" : (console.error(`Unknown event name: ${o}`), null);
  }
  return { on: e, trigger: i, type: s };
};
var K = { exports: {} };
(function(t, e) {
  (function(i, s) {
    t.exports = s();
  })(ut, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var i = function(a, r) {
        return a.nodeName === "HTML" ? -r : a.getBoundingClientRect().top + r;
      }, s = function(a) {
        return a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
      }, o = function(a, r, h, u) {
        return h > u ? r : a + (r - a) * s(h / u);
      }, n = function(a, r, h, u) {
        r = r || 500, u = u || window;
        var M = u.scrollTop || window.pageYOffset;
        if (typeof a == "number")
          var v = parseInt(a);
        else
          var v = i(a, M);
        var E = Date.now(), H = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(d) {
          window.setTimeout(d, 15);
        }, c = function() {
          var d = Date.now() - E;
          u !== window ? u.scrollTop = o(M, v, d, r) : window.scroll(0, o(M, v, d, r)), d > r ? typeof h == "function" && h(a) : H(c);
        };
        c();
      }, l = function(a) {
        if (!a.defaultPrevented) {
          a.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var r = document.getElementById(this.hash.substring(1));
          if (!r)
            return;
          n(r, 500, function(h) {
            location.replace("#" + h.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var a = document.querySelectorAll('a[href^="#"]:not([href="#"])'), r, h = a.length; r = a[--h]; )
          r.addEventListener("click", l, !1);
      }), n;
    }
  });
})(K);
var Ct = K.exports;
const Nt = /* @__PURE__ */ J(Ct);
function Yt(t, e) {
  t.events.trigger("listadd", {
    audios: e
  }), e = X(e);
  const i = !(t.list.audios.length > 1), s = t.list.audios.length === 0;
  t.template.listOl.innerHTML += C({
    theme: t.options.theme,
    audio: e,
    index: t.list.audios.length + 1
  }), t.list.audios = t.list.audios.concat(e), i && t.list.audios.length > 1 && t.container.classList.add("aplayer-withlist"), t.randomOrder = V(t.list.audios.length), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur"), t.template.listCurs[t.list.audios.length - 1].style.backgroundColor = e.theme || t.options.theme, s && (t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0));
}
function Ut(t, e) {
  if (t.events.trigger("listremove", {
    index: e
  }), t.list.audios[e])
    if (t.list.audios.length > 1) {
      const i = t.container.querySelectorAll(".aplayer-list li");
      i[e].remove(), t.list.audios.splice(e, 1), t.lrc && t.lrc.remove(e), e === t.list.index && (t.list.audios[e] ? t.list.switch(e) : t.list.switch(e - 1)), t.list.index > e && t.list.index--;
      for (let s = e; s < i.length; s++)
        i[s].getElementsByClassName("aplayer-list-index")[0].textContent = s;
      t.list.audios.length === 1 && t.container.classList.remove("aplayer-withlist"), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur");
    } else
      $t(t);
}
function $t(t) {
  t.events.trigger("listclear"), t.list.index = 0, t.container.classList.remove("aplayer-withlist"), t.pause(), t.list.audios = [], t.lrc && t.lrc.clear(), t.audio.src = "", t.template.listOl.innerHTML = "", t.template.pic.style.backgroundImage = "", t.theme(t.options.theme, t.list.index, !1), t.template.title.innerHTML = "No audio", t.template.author.innerHTML = "", t.bar.set("loaded", 0, "width"), t.template.dtime.innerHTML = L(0);
}
const Wt = (t) => {
  let e = 0, i = t.options.audio;
  t.template.list.addEventListener("click", (a) => {
    let r;
    a.target.tagName.toUpperCase() === "LI" ? r = a.target : r = a.target.parentElement;
    const h = parseInt(r.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
    h !== e ? (l(h), t.play()) : t.toggle();
  });
  function s() {
    t.events.trigger("listshow"), t.template.list.classList.remove("aplayer-list-hide"), t.template.listOl.scrollTop = e * 33;
  }
  function o() {
    t.events.trigger("listhide"), t.template.list.classList.add("aplayer-list-hide");
  }
  function n() {
    t.template.list.classList.contains("aplayer-list-hide") ? s() : o();
  }
  function l(a) {
    if (t.events.trigger("listswitch", {
      index: a
    }), typeof a < "u" && i[a]) {
      e = a;
      const r = i[e];
      t.template.pic.style.backgroundImage = r.cover ? `url('${r.cover}')` : "", t.theme(i[e].theme || t.options.theme, e, !1), t.template.title.innerHTML = r.name, t.template.author.innerHTML = r.artist ? " - " + r.artist : "";
      const h = t.container.getElementsByClassName("aplayer-list-light")[0];
      h && h.classList.remove("aplayer-list-light"), t.container.querySelectorAll(".aplayer-list li")[e].classList.add("aplayer-list-light"), Nt(e * 33, 500, null, t.template.listOl), t.setAudio(r), t.lrc && t.lrc.switch(e), t.lrc && t.lrc.update(0), t.duration !== 1 && (t.template.dtime.innerHTML = L(t.duration));
    }
  }
  return {
    get index() {
      return e;
    },
    set index(a) {
      e = a;
    },
    get audios() {
      return i;
    },
    set audios(a) {
      i = a;
    },
    show: s,
    hide: o,
    toggle: n,
    switch: l
  };
}, b = [];
let q = A;
function Rt(t) {
  q = t;
}
function jt(t) {
  t.audio = document.createElement("audio"), t.audio.preload = t.options.preload;
  for (let e = 0; e < k.length; e++)
    t.audio.addEventListener(k[e], (i) => {
      t.events.trigger(k[e], i);
    });
  t.volume(t.storage.getVolume(), !0);
}
function Vt(t) {
  t.on("play", () => {
    t.paused && Q(t);
  }), t.on("pause", () => {
    t.paused || I(t);
  }), t.on("timeupdate", () => {
    if (!t.disableTimeupdate) {
      t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
      const i = L(t.audio.currentTime);
      t.template.ptime.innerHTML !== i && (t.template.ptime.innerHTML = i);
    }
  }), t.on("durationchange", () => {
    t.duration !== 1 && (t.template.dtime.innerHTML = L(t.duration));
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
    for (let e = 0; e < b.length; e++)
      t !== b[e] && b[e].pause();
}
function I(t) {
  t.paused || (t.paused = !0, t.template.button.classList.remove("aplayer-pause"), t.template.button.classList.add("aplayer-play"), t.template.button.innerHTML = "", setTimeout(() => {
    t.template.button.innerHTML = B;
  }, 100), t.template.skipPlayButton.innerHTML = B), t.container.classList.remove("aplayer-loading"), t.timer.disable();
}
class _t {
  /**
   * APlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  constructor(e) {
    e.fixed = !1;
    const i = q();
    if (q != A && (e.fixed = !0, q = A), this.options = ht(e), this.container = this.options.container, this.paused = !0, this.playedPromise = Promise.resolve(), this.mode = "normal", this.randomOrder = V(this.options.audio.length), this.container.classList.add("aplayer"), this.options.lrcType && !this.options.fixed && this.container.classList.add("aplayer-withlrc"), this.options.audio.length > 1 && this.container.classList.add("aplayer-withlist"), T && this.container.classList.add("aplayer-mobile"), this.arrow = this.container.offsetWidth <= 300, this.arrow && this.container.classList.add("aplayer-arrow"), this.container = this.options.container, this.options.lrcType === 2 || this.options.lrcType === !0) {
      const s = this.container.getElementsByClassName("aplayer-lrc-content");
      for (let o = 0; o < s.length; o++)
        this.options.audio[o] && (this.options.audio[o].lrc = s[o].innerHTML);
    }
    this.template = bt(this.container, this.options, this.randomOrder, i), this.options.fixed && (this.container.classList.add("aplayer-fixed"), this.template.body.style.width = this.template.body.offsetWidth - 18 + "px"), this.options.mini && (this.setMode("mini"), this.template.info.style.display = "block"), this.template.info.offsetWidth < 200 && this.template.time.classList.add("aplayer-time-narrow"), this.options.lrcType && (this.lrc = xt({
      container: this.template.lrc,
      async: this.options.lrcType === 3,
      player: this
    })), this.events = Pt(), this.storage = Mt(this), this.bar = Lt(this.template), this.controller = Tt(this), this.timer = At(this), this.list = Wt(this), jt(this), Vt(this), this.options.order === "random" ? this.list.switch(this.randomOrder[0]) : this.list.switch(0), this.options.autoplay && this.play(), b.push(this);
  }
  setAudio(e) {
    this.hls && (this.hls.destroy(), this.hls = null);
    let i = e.type;
    this.options.customAudioType && this.options.customAudioType[i] ? Object.prototype.toString.call(this.options.customAudioType[i]) === "[object Function]" ? this.options.customAudioType[i](this.audio, e, this) : console.error(`Illegal customType: ${i}`) : ((!i || i === "auto") && (/m3u8(#|\?|$)/i.exec(e.url) ? i = "hls" : i = "normal"), i === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(e.url), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL") ? this.audio.src = e.url : this.notice("Error: HLS is not supported.") : i === "normal" && (this.audio.src = e.url)), this.seek(0), this.paused || this.audio.play();
  }
  theme(e = this.list.audios[this.list.index].theme || this.options.theme, i = this.list.index, s = !0) {
    s && this.list.audios[i] && (this.list.audios[i].theme = e), this.template.listCurs[i] && (this.template.listCurs[i].style.backgroundColor = e), i === this.list.index && (this.template.pic.style.backgroundColor = e, this.template.played.style.background = e, this.template.thumb.style.background = e, this.template.volume.style.background = e);
  }
  seek(e) {
    e = Math.max(e, 0), e = Math.min(e, this.duration), this.audio.currentTime = e, this.bar.set("played", e / this.duration, "width"), this.template.ptime.innerHTML = L(e);
  }
  get duration() {
    return isNaN(this.audio.duration) ? 0 : this.audio.duration;
  }
  play() {
    Q(this);
    const e = this.audio.play();
    e && e.catch((i) => {
      console.warn(i), i.name === "NotAllowedError" && I(this);
    });
  }
  pause() {
    I(this), this.audio.pause();
  }
  switchVolumeIcon() {
    this.volume() >= 0.95 ? this.template.volumeButton.innerHTML = nt : this.volume() > 0 ? this.template.volumeButton.innerHTML = U : this.template.volumeButton.innerHTML = at;
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
  /**
   * destroy this player
   */
  destroy() {
    b.splice(b.indexOf(this), 1), this.pause(), this.container.innerHTML = "", this.audio.src = "", this.timer.destroy(), this.events.trigger("destroy");
  }
  setMode(e = "normal") {
    this.mode = e, e === "mini" ? this.container.classList.add("aplayer-narrow") : e === "normal" && this.container.classList.remove("aplayer-narrow");
  }
  notice(e, i = 2e3, s = 0.8) {
    this.template.notice.innerHTML = e, this.template.notice.style.opacity = s, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("noticeshow", {
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
const Dt = () => {
  Rt(gt);
};
export {
  Yt as addToList,
  $t as clearList,
  _t as default,
  Dt as enableFixedModeOnce,
  Ut as removeFromList
};
