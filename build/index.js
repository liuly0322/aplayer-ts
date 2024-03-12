const M = /mobile/i.test(window.navigator.userAgent);
function y(t) {
  const e = (l) => l < 10 ? "0" + l : "" + l, s = Math.floor(t / 3600), i = Math.floor((t - s * 3600) / 60), a = Math.floor(t - s * 3600 - i * 60);
  return (s > 0 ? [s, i, a] : [i, a]).map(e).join(":");
}
function A(t) {
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
function N(t, e) {
  let s = t.offsetTop, i = t.offsetParent, a = 0;
  for (; i !== null; )
    s += i.offsetTop, i = i.offsetParent;
  return a = document.body.scrollTop + document.documentElement.scrollTop, e ? s : s - a;
}
const p = {
  dragStart: M ? "touchstart" : "mousedown",
  dragMove: M ? "touchmove" : "mousemove",
  dragEnd: M ? "touchend" : "mouseup"
};
function _(t) {
  function e(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const a = Math.floor(Math.random() * (i + 1)), l = s[a];
      s[a] = s[i], s[i] = l;
    }
    return s;
  }
  return e([...Array(t)].map(function(s, i) {
    return i;
  }));
}
const j = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', tt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', et = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', st = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', ot = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
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
function nt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var P = Object.create(window), rt = /["&'<>]/;
P.$escape = function(t) {
  return ct(X(t));
};
P.$each = function(t, e) {
  if (Array.isArray(t))
    for (var s = 0, i = t.length; s < i; s++)
      e(t[s], s);
  else
    for (var a in t)
      e(t[a], a);
};
function X(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = X(t.call(t)) : t = JSON.stringify(t)), t;
}
function ct(t) {
  var e = "" + t, s = rt.exec(e);
  if (!s)
    return t;
  var i = "", a = void 0, l = void 0, n = void 0;
  for (a = s.index, l = 0; a < e.length; a++) {
    switch (e.charCodeAt(a)) {
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
    l !== a && (i += e.substring(l, a)), l = a + 1, i += n;
  }
  return l !== a ? i + e.substring(l, a) : i;
}
var dt = P, ut = dt;
const x = /* @__PURE__ */ nt(ut);
function I(t) {
  t = t || {};
  let e = "", s = x.$each, i = t.audio, a = x.$escape, l = t.theme, n = t.index;
  return s(i, function(u, c) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += a(u.theme || l), e += '"></span> <span class="aplayer-list-index">', e += a(c + n), e += '</span><span class="aplayer-list-title">', e += a(u.name), e += '</span><span class="aplayer-list-author">', e += a(u.artist), e += "</span></li> ";
  }), e;
}
const f = x.$escape, mt = [
  (t, e) => {
    e('<div class="aplayer-body"><div class="aplayer-pic" style="');
  },
  (t, e) => {
    e('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
  },
  (t, e) => {
    e('</button></div></div><div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("> "), e(I({
      theme: t.theme,
      audio: t.audio,
      index: 1
    })), e(" </ol></div> ");
  }
], ht = [
  (t, e) => {
    e(' <div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(f(t.listMaxHeight)), e('" ')), e("> "), e(I({
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
function pt(t, e, s) {
  let i = "", a = function(l) {
    return i += l, i;
  };
  return s[0](t, a), e && (i += "background-image:url(&quot;", i += f(e), i += "&quot;);"), i += "background-color: ", i += f(t.theme), i += '"><div class="aplayer-button aplayer-play">', i += B, s[1](t, a), i += f(t.theme), i += '"><span class="aplayer-thumb" style="background: ', i += f(t.theme), i += '"><span class="aplayer-loading-icon">', i += at, i += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', i += W, i += ' </span><span class="aplayer-icon aplayer-icon-play"> ', i += B, i += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', i += W, i += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', i += R, i += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', i += f(t.theme), i += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', t.order === "list" ? i += V : t.order === "random" && (i += j), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', t.loop === "one" ? i += Y : t.loop === "all" ? i += z : t.loop === "none" && (i += S), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', i += it, i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', i += ot, i += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', i += st, s[2](t, a), i;
}
function vt(t, e, s, i) {
  let a = "";
  e.audio.length && (e.order === "random" ? a = e.audio[s[0]].cover : a = e.audio[0].cover), t.innerHTML = pt(e, a, i);
  const l = (n) => t.querySelector(n);
  return {
    lrc: l(".aplayer-lrc-contents"),
    lrcWrap: l(".aplayer-lrc"),
    ptime: l(".aplayer-ptime"),
    info: l(".aplayer-info"),
    time: l(".aplayer-time"),
    barWrap: l(".aplayer-bar-wrap"),
    button: l(".aplayer-button"),
    body: l(".aplayer-body"),
    list: l(".aplayer-list"),
    listOl: l(".aplayer-list ol"),
    listCurs: t.querySelectorAll(".aplayer-list-cur"),
    played: l(".aplayer-played"),
    loaded: l(".aplayer-loaded"),
    thumb: l(".aplayer-thumb"),
    volume: l(".aplayer-volume"),
    volumeBar: l(".aplayer-volume-bar"),
    volumeButton: l(".aplayer-time button"),
    volumeBarWrap: l(".aplayer-volume-bar-wrap"),
    loop: l(".aplayer-icon-loop"),
    order: l(".aplayer-icon-order"),
    menu: l(".aplayer-icon-menu"),
    pic: l(".aplayer-pic"),
    title: l(".aplayer-title"),
    author: l(".aplayer-author"),
    dtime: l(".aplayer-dtime"),
    notice: l(".aplayer-notice"),
    miniSwitcher: l(".aplayer-miniswitcher"),
    skipBackButton: l(".aplayer-icon-back"),
    skipForwardButton: l(".aplayer-icon-forward"),
    skipPlayButton: l(".aplayer-icon-play"),
    lrcButton: l(".aplayer-icon-lrc")
  };
}
const ft = (t) => {
  const e = { ...t };
  function s(a, l, n) {
    l = Math.max(l, 0), l = Math.min(l, 1), e[a].style[n] = l * 100 + "%";
  }
  function i(a, l) {
    return parseFloat(e[a].style[l]) / 100;
  }
  return { get: i, set: s };
};
function $(t) {
  t = t || {};
  let e = "", s = x.$each, i = t.lyrics, a = x.$escape;
  return s(i, function(l, n) {
    e += " <p ", n === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += a(l[1]), e += "</p> ";
  }), e;
}
const gt = (t) => {
  const e = t.container, s = t.player, i = t.async;
  let a = [], l = 0, n = [];
  function u() {
    s.events.trigger("lrcshow"), s.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function c() {
    s.events.trigger("lrchide"), s.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function d() {
    s.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? u() : c();
  }
  function g(m = s.audio.currentTime) {
    if (l > n.length - 1 || m < n[l][0] || !n[l + 1] || m >= n[l + 1][0])
      for (let h = 0; h < n.length; h++)
        m >= n[h][0] && (!n[h + 1] || m < n[h + 1][0]) && (l = h, e.style.transform = `translateY(${-l * 16}px)`, e.style.webkitTransform = `translateY(${-l * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[h].classList.add("aplayer-lrc-current"));
  }
  function E(m) {
    if (!a[m])
      if (!i)
        s.list.audios[m].lrc ? a[m] = T(s.list.audios[m].lrc) : a[m] = [["00:00", "Not available"]];
      else {
        a[m] = [["00:00", "Loading"]];
        const h = new XMLHttpRequest();
        h.onreadystatechange = () => {
          m === s.list.index && h.readyState === 4 && (h.status >= 200 && h.status < 300 || h.status === 304 ? a[m] = T(h.responseText) : (s.notice(`LRC file request fails: status ${h.status}`), a[m] = [["00:00", "Not available"]]), e.innerHTML = $({
            lyrics: a[m]
          }), g(0), n = a[m]);
        };
        const v = s.list.audios[m].lrc;
        h.open("get", v, !0), h.send(null);
      }
    e.innerHTML = $({
      lyrics: a[m]
    }), n = a[m];
  }
  function T(m) {
    if (m) {
      m = m.replace(/([^\]^\n])\[/g, (o, r) => r + `
[`);
      const h = m.split(`
`);
      let v = [];
      const b = h.length;
      for (let o = 0; o < b; o++) {
        const r = h[o].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), w = h[o].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (r) {
          const G = r.length;
          for (let O = 0; O < G; O++) {
            const L = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[O]), K = L[1] * 60, Q = parseInt(L[2]), Z = L[4] ? parseInt(L[4]) / ((L[4] + "").length === 2 ? 100 : 1e3) : 0, F = K + Q + Z;
            v.push([F, w]);
          }
        }
      }
      return v = v.filter((o) => o[1]), v.sort((o, r) => o[0] - r[0]), v;
    } else
      return [];
  }
  function H(m) {
    a.splice(m, 1);
  }
  function q() {
    a = [], e.innerHTML = "";
  }
  return {
    show: u,
    hide: c,
    toggle: d,
    update: g,
    switch: E,
    remove: H,
    clear: q
  };
}, wt = (t) => {
  yt(t), bt(t), Mt(t), xt(t), Tt(t), M || Lt(t), kt(t), Bt(t), Et(t);
};
function yt(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function bt(t) {
  const e = (i) => {
    let a = ((i.clientX || i.changedTouches[0].clientX) - A(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.lrc && t.lrc.update(a * t.duration), t.template.ptime.innerHTML = y(a * t.duration);
  }, s = (i) => {
    document.removeEventListener(p.dragEnd, s), document.removeEventListener(p.dragMove, e);
    let a = ((i.clientX || i.changedTouches[0].clientX) - A(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(p.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(p.dragMove, e), document.addEventListener(p.dragEnd, s);
  });
}
function Lt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (i) => {
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - N(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  }, s = (i) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(p.dragEnd, s), document.removeEventListener(p.dragMove, e);
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - N(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  };
  t.template.volumeBarWrap.addEventListener(p.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(p.dragMove, e), document.addEventListener(p.dragEnd, s);
  });
}
function Mt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = j) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = V);
  });
}
function xt(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = z) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = Y) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = z);
  });
}
function Tt(t) {
  t.template.menu.addEventListener("click", () => {
    t.list.toggle();
  });
}
function kt(t) {
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
function Et(t) {
  t.template.lrcButton.addEventListener("click", () => {
    t.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (t.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.show()) : (t.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.hide());
  });
}
const Ht = (t) => {
  let e = 0, s = 0, i = !1, a = !1, l = setInterval(() => {
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
      a = !1, l && clearInterval(l);
    }
  };
}, qt = [
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
], D = [
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
function Ot(t) {
  if (qt.indexOf(t) !== -1)
    return "player";
  if (D.indexOf(t) !== -1)
    return "audio";
}
const zt = () => {
  const t = {};
  return {
    on: function(e, s) {
      Ot(e) && typeof s == "function" && (t[e] || (t[e] = []), t[e].push(s));
    },
    trigger: function(e, s) {
      var i;
      (i = t[e]) == null || i.forEach((a) => a(s));
    }
  };
};
function St(t, e) {
  t.events.trigger("listadd", {
    audios: e
  }), e = U(e);
  const s = !(t.list.audios.length > 1), i = t.list.audios.length === 0;
  t.template.listOl.innerHTML += I({
    theme: t.options.theme,
    audio: e,
    index: t.list.audios.length + 1
  }), t.list.audios = t.list.audios.concat(e), s && t.list.audios.length > 1 && t.container.classList.add("aplayer-withlist"), t.randomOrder = _(t.list.audios.length), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur"), t.template.listCurs[t.list.audios.length - 1].style.backgroundColor = e.theme || t.options.theme, i && (t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0));
}
function Pt(t, e) {
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
      J(t);
}
function J(t) {
  t.events.trigger("listclear"), t.list.index = 0, t.container.classList.remove("aplayer-withlist"), t.pause(), t.list.audios = [], t.lrc && t.lrc.clear(), t.audio.src = "", t.template.listOl.innerHTML = "", t.template.pic.style.backgroundImage = "", t.theme(t.options.theme, t.list.index, !1), t.template.title.innerHTML = "No audio", t.template.author.innerHTML = "", t.bar.set("loaded", 0, "width"), t.template.dtime.innerHTML = y(0);
}
const It = (t) => {
  let e = 0, s = t.options.audio;
  t.template.list.addEventListener("click", (u) => {
    let c;
    u.target.tagName.toUpperCase() === "LI" ? c = u.target : c = u.target.parentElement;
    const d = parseInt(c.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
    d !== e ? (n(d), t.play()) : t.toggle();
  });
  function i() {
    t.events.trigger("listshow"), t.template.list.classList.remove("aplayer-list-hide"), t.template.listOl.scrollTop = e * 33;
  }
  function a() {
    t.events.trigger("listhide"), t.template.list.classList.add("aplayer-list-hide");
  }
  function l() {
    t.template.list.classList.contains("aplayer-list-hide") ? i() : a();
  }
  function n(u) {
    if (t.events.trigger("listswitch", {
      index: u
    }), typeof u < "u" && s[u]) {
      e = u;
      const c = s[e];
      t.template.pic.style.backgroundImage = c.cover ? `url('${c.cover}')` : "", t.theme(s[e].theme || t.options.theme, e, !1), t.template.title.innerHTML = c.name, t.template.author.innerHTML = c.artist ? " - " + c.artist : "";
      const d = t.container.getElementsByClassName("aplayer-list-light")[0];
      d && d.classList.remove("aplayer-list-light");
      const g = t.container.querySelectorAll(".aplayer-list li")[e];
      g.classList.add("aplayer-list-light"), g.scrollIntoView({ behavior: "smooth" }), t.setAudio(c), t.lrc && t.lrc.switch(e), t.lrc && t.lrc.update(0), t.duration !== 1 && (t.template.dtime.innerHTML = y(t.duration));
    }
  }
  return {
    get index() {
      return e;
    },
    set index(u) {
      e = u;
    },
    get audios() {
      return s;
    },
    set audios(u) {
      s = u;
    },
    show: i,
    hide: a,
    toggle: l,
    switch: n
  };
}, k = [], At = () => {
  const t = {
    tplRenderers: mt,
    hlsHandler: () => {
    },
    events: zt(),
    mode: "normal",
    afterInitHooks: [],
    get duration() {
      return isNaN(t.audio.duration) ? 0 : t.audio.duration;
    }
    // you may check other public attributes below
    // the origin code init them in the constructor (the current init function)
    // disableTimeupdate: null,
    // randomOrder: null,
    // bar: null,
    // list: null,
    // audio: null,
    // container: null,
    // lrc: null,
    // options: null,
    // template: null,
  };
  return t;
}, Nt = () => {
  const t = At();
  let e, s = !0, i = null, a = Ht(t), l, n, u, c, d;
  function g() {
    if (n.lrcType === 2 || n.lrcType === !0) {
      const o = u.getElementsByClassName("aplayer-lrc-content");
      for (let r = 0; r < o.length; r++)
        n.audio[r] && (n.audio[r].lrc = o[r].innerHTML);
    }
    n.lrcType && (t.lrc = gt({
      container: c.lrc,
      async: n.lrcType === 3,
      player: t
    }));
  }
  function E() {
    u.classList.add("aplayer"), n.lrcType && !n.fixed && u.classList.add("aplayer-withlrc"), n.audio.length > 1 && u.classList.add("aplayer-withlist"), M && u.classList.add("aplayer-mobile"), u.offsetWidth <= 300 && u.classList.add("aplayer-arrow"), n.fixed && (u.classList.add("aplayer-fixed"), c.body.style.width = c.body.offsetWidth - 18 + "px"), n.mini && (t.setMode("mini"), c.info.style.display = "block"), c.info.offsetWidth < 200 && c.time.classList.add("aplayer-time-narrow");
  }
  function T() {
    const o = n.storageName, r = JSON.parse(localStorage.getItem(o)) || {};
    return r.volume || (r.volume = n.volume), {
      get() {
        return r.volume;
      },
      set(w) {
        r.volume = w, localStorage.setItem(o, JSON.stringify(r));
      }
    };
  }
  function H() {
    t.audio = document.createElement("audio"), t.audio.preload = n.preload, D.forEach((o) => {
      t.audio.addEventListener(o, (r) => {
        t.events.trigger(o, r);
      });
    }), t.volume(e.get(), !0);
  }
  function q() {
    t.on("play", () => {
      s && m();
    }), t.on("pause", () => {
      s || h();
    }), t.on("timeupdate", () => {
      if (!t.disableTimeupdate) {
        t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
        const r = y(t.audio.currentTime);
        c.ptime.innerHTML !== r && (c.ptime.innerHTML = r);
      }
    }), t.on("durationchange", () => {
      t.duration !== 1 && (c.dtime.innerHTML = y(t.duration));
    }), t.on("progress", () => {
      const r = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.duration : 0;
      t.bar.set("loaded", r, "width");
    });
    let o;
    t.on("error", () => {
      d.audios.length > 1 ? (t.notice("An audio error has occurred, player will skip forward in 2 seconds."), o = setTimeout(() => {
        t.skipForward(), s || t.play();
      }, 2e3)) : d.audios.length === 1 && t.notice("An audio error has occurred.");
    }), t.events.on("listswitch", () => {
      o && clearTimeout(o);
    }), t.on("ended", () => {
      n.loop === "none" ? n.order === "list" ? d.index < d.audios.length - 1 ? (d.switch((d.index + 1) % d.audios.length), t.play()) : (d.switch((d.index + 1) % d.audios.length), t.pause()) : n.order === "random" && (t.randomOrder.indexOf(d.index) < t.randomOrder.length - 1 ? (d.switch(b()), t.play()) : (d.switch(b()), t.pause())) : n.loop === "one" ? (d.switch(d.index), t.play()) : n.loop === "all" && (t.skipForward(), t.play());
    });
  }
  function m() {
    s && (s = !1, c.button.classList.remove("aplayer-play"), c.button.classList.add("aplayer-pause"), c.button.innerHTML = "", setTimeout(() => {
      c.button.innerHTML = C;
    }, 100), c.skipPlayButton.innerHTML = C), a.enable(), n.mutex && k.filter((o) => o !== t).forEach((o) => {
      o.pause();
    });
  }
  function h() {
    s || (s = !0, c.button.classList.remove("aplayer-pause"), c.button.classList.add("aplayer-play"), c.button.innerHTML = "", setTimeout(() => {
      c.button.innerHTML = B;
    }, 100), c.skipPlayButton.innerHTML = B), u.classList.remove("aplayer-loading"), a.disable();
  }
  function v() {
    if (d.audios.length > 1) {
      if (n.order === "list")
        return d.index - 1 < 0 ? d.audios.length - 1 : d.index - 1;
      if (n.order === "random") {
        const o = t.randomOrder.indexOf(d.index);
        return o === 0 ? t.randomOrder[t.randomOrder.length - 1] : t.randomOrder[o - 1];
      }
    } else
      return 0;
  }
  function b() {
    if (d.audios.length > 1) {
      if (n.order === "list")
        return (d.index + 1) % d.audios.length;
      if (n.order === "random") {
        const o = t.randomOrder.indexOf(d.index);
        return o === t.randomOrder.length - 1 ? t.randomOrder[0] : t.randomOrder[o + 1];
      }
    } else
      return 0;
  }
  return t.init = (o) => (n = lt(o), t.options = n, u = n.container, t.container = u, c = vt(u, n, t.randomOrder, t.tplRenderers), t.template = c, t.controller = wt(t), E(), t.randomOrder = _(n.audio.length), e = T(), g(), t.bar = ft(c), d = It(t), t.list = d, H(), q(), n.order === "random" ? d.switch(t.randomOrder[0]) : d.switch(0), n.autoplay && t.play(), k.push(t), t.afterInitHooks.forEach((r) => {
    r(t);
  }), t), t.setAudio = (o) => {
    i && (i.destroy(), i = null);
    let r = o.type;
    n.customAudioType && n.customAudioType[r] ? Object.prototype.toString.call(n.customAudioType[r]) === "[object Function]" ? n.customAudioType[r](t.audio, o, t) : console.error(`Illegal customType: ${r}`) : ((!r || r === "auto") && (/m3u8(#|\?|$)/i.exec(o.url) ? r = "hls" : r = "normal"), r === "hls" ? i = t.hlsHandler(o) : r === "normal" && (t.audio.src = o.url)), t.seek(0), s || t.audio.play();
  }, t.destroy = () => {
    k.splice(k.indexOf(t), 1), t.pause(), u.innerHTML = "", t.audio.src = "", a.destroy(), t.events.trigger("destroy");
  }, t.setMode = (o = "normal") => {
    t.mode = o, o === "mini" ? u.classList.add("aplayer-narrow") : o === "normal" && u.classList.remove("aplayer-narrow");
  }, t.notice = (o, r = 2e3, w = 0.8) => {
    c.notice.innerHTML = o, c.notice.style.opacity = w, l && clearTimeout(l), t.events.trigger("noticeshow", {
      text: o
    }), r && (l = setTimeout(() => {
      c.notice.style.opacity = 0, t.events.trigger("noticehide");
    }, r));
  }, t.theme = (o = d.audios[d.index].theme || n.theme, r = d.index, w = !0) => {
    w && d.audios[r] && (d.audios[r].theme = o), c.listCurs[r] && (c.listCurs[r].style.backgroundColor = o), r === d.index && (c.pic.style.backgroundColor = o, c.played.style.background = o, c.thumb.style.background = o, c.volume.style.background = o);
  }, t.seek = (o) => {
    o = Math.max(o, 0), o = Math.min(o, t.duration), t.audio.currentTime = o, t.bar.set("played", o / t.duration, "width"), c.ptime.innerHTML = y(o);
  }, t.play = () => {
    m();
    const o = t.audio.play();
    o && o.catch((r) => {
      console.warn(r), r.name === "NotAllowedError" && h();
    });
  }, t.pause = () => {
    h(), t.audio.pause();
  }, t.switchVolumeIcon = () => {
    t.volume() >= 0.95 ? c.volumeButton.innerHTML = tt : t.volume() > 0 ? c.volumeButton.innerHTML = R : c.volumeButton.innerHTML = et;
  }, t.volume = (o, r) => (o = parseFloat(o), isNaN(o) || (o = Math.max(o, 0), o = Math.min(o, 1), t.bar.set("volume", o, "height"), r || e.set(o), t.audio.volume = o, t.audio.muted && (t.audio.muted = !1), t.switchVolumeIcon()), t.audio.muted ? 0 : t.audio.volume), t.on = (o, r) => {
    t.events.on(o, r);
  }, t.toggle = () => {
    c.button.classList.contains("aplayer-play") ? t.play() : c.button.classList.contains("aplayer-pause") && t.pause();
  }, t.skipBack = () => {
    d.switch(v());
  }, t.skipForward = () => {
    d.switch(b());
  }, t.use = (o) => (o(t), t), t;
};
function Ct(t) {
  t.tplRenderers = ht;
  const e = t.init;
  t.init = (s) => (s.fixed = !0, e(s));
}
function Wt(t) {
  t.afterInitHooks.push(() => {
    t.list.add = (e) => {
      St(t, e);
    };
  });
}
function $t(t) {
  t.afterInitHooks.push(() => {
    t.list.remove = (e) => {
      Pt(t, e);
    };
  });
}
function _t(t) {
  t.afterInitHooks.push(() => {
    t.list.clear = () => {
      J(t);
    };
  });
}
function jt(t) {
  t.hlsHandler = (e) => {
    if (Hls.isSupported()) {
      const s = new Hls();
      return s.loadSource(e.url), s.attachMedia(t.audio), s;
    } else
      t.audio.canPlayType("application/x-mpegURL") || t.audio.canPlayType("application/vnd.apple.mpegURL") ? t.audio.src = e.url : t.notice("Error: HLS is not supported.");
  };
}
export {
  Ct as APlayerFixedModePlugin,
  jt as APlayerHlsPlugin,
  Wt as addMusicPlugin,
  _t as clearMusicPlugin,
  Nt as default,
  $t as removeMusicPlugin
};
