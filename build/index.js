const T = function() {
  try {
    return /mobile/i.test(window.navigator.userAgent);
  } catch (t) {
    return console.error(t), !1;
  }
}();
function b(t) {
  const e = (l) => l < 10 ? "0" + l : "" + l, s = Math.floor(t / 3600), i = Math.floor((t - s * 3600) / 60), a = Math.floor(t - s * 3600 - i * 60);
  return (s > 0 ? [s, i, a] : [i, a]).map(e).join(":");
}
function P(t) {
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
function A(t, e) {
  let s = t.offsetTop, i = t.offsetParent, a = 0;
  for (; i !== null; )
    s += i.offsetTop, i = i.offsetParent;
  return a = document.body.scrollTop + document.documentElement.scrollTop, e ? s : s - a;
}
const f = {
  dragStart: T ? "touchstart" : "mousedown",
  dragMove: T ? "touchmove" : "mousemove",
  dragEnd: T ? "touchend" : "mouseup"
};
function $(t) {
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
const Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', F = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', _ = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', tt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', et = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', st = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
function V(t) {
  return Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((e) => ({
    ...e,
    name: e.name || e.title || "Audio name",
    artist: e.artist || e.author || "Audio artist",
    cover: e.cover || e.pic,
    type: e.type || "normal"
  }));
}
const ot = (t) => {
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
  return t = Object.assign(e, t), t.audio = V(t.audio), t.audio.length <= 1 && t.loop === "one" && (t.loop = "all"), t;
}, L = {};
L.$escape = function(t) {
  return lt(j(t));
};
L.$each = function(t, e) {
  if (Array.isArray(t))
    for (var s = 0, i = t.length; s < i; s++)
      e(t[s], s);
  else
    for (var a in t)
      e(t[a], a);
};
function j(t) {
  return typeof t != "string" && (t == null ? t = "" : typeof t == "function" ? t = j(t.call(t)) : t = JSON.stringify(t)), t;
}
function lt(t) {
  return t.replace(/[<>&'"]/g, (e) => `&${{
    "<": "lt",
    ">": "gt",
    "&": "amp",
    "'": "apos",
    '"': "quot"
  }[e]};`);
}
function I(t) {
  t = t || {};
  let e = "", s = L.$each, i = t.audio, a = L.$escape, l = t.theme, n = t.index;
  return s(i, function(m, r) {
    e += ' <li><span class="aplayer-list-cur" style="background-color: ', e += a(m.theme || l), e += '"></span> <span class="aplayer-list-index">', e += a(r + n), e += '</span><span class="aplayer-list-title">', e += a(m.name), e += '</span><span class="aplayer-list-author">', e += a(m.artist), e += "</span></li> ";
  }), e;
}
const g = L.$escape, nt = [
  (t, e) => {
    e('<div class="aplayer-body"><div class="aplayer-pic" style="');
  },
  (t, e) => {
    e('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ');
  },
  (t, e) => {
    e('</button></div></div><div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(g(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(g(t.listMaxHeight)), e('" ')), e("> "), e(I({
      theme: t.theme,
      audio: t.audio,
      index: 1
    })), e(" </ol></div> ");
  }
], rt = [
  (t, e) => {
    e(' <div class="aplayer-list'), t.listFolded && e(" aplayer-list-hide"), e('" '), t.listMaxHeight && (e(' style="max-height: '), e(g(t.listMaxHeight)), e('" ')), e("><ol "), t.listMaxHeight && (e(' style="max-height: '), e(g(t.listMaxHeight)), e('" ')), e("> "), e(I({
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
function ct(t, e, s) {
  let i = "", a = function(l) {
    return i += l, i;
  };
  return s[0](t, a), e && (i += "background-image:url(&quot;", i += g(e), i += "&quot;);"), i += "background-color: ", i += g(t.theme), i += '"><div class="aplayer-button aplayer-play">', i += H, s[1](t, a), i += g(t.theme), i += '"><span class="aplayer-thumb" style="background: ', i += g(t.theme), i += '"><span class="aplayer-loading-icon">', i += st, i += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', i += C, i += ' </span><span class="aplayer-icon aplayer-icon-play"> ', i += H, i += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', i += C, i += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', i += _, i += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', i += g(t.theme), i += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', t.order === "list" ? i += U : t.order === "random" && (i += Y), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', t.loop === "one" ? i += R : t.loop === "all" ? i += z : t.loop === "none" && (i += S), i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', i += et, i += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', i += at, i += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', i += it, s[2](t, a), i;
}
function dt(t, e, s, i) {
  let a = "";
  e.audio.length && (e.order === "random" ? a = e.audio[s[0]].cover : a = e.audio[0].cover), t.innerHTML = ct(e, a, i);
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
const ut = (t) => {
  const e = { ...t };
  function s(a, l, n) {
    l = Math.max(l, 0), l = Math.min(l, 1), e[a].style[n] = l * 100 + "%";
  }
  function i(a, l) {
    return parseFloat(e[a].style[l]) / 100;
  }
  return { get: i, set: s };
};
function W(t) {
  t = t || {};
  let e = "", s = L.$each, i = t.lyrics, a = L.$escape;
  return s(i, function(l, n) {
    e += " <p ", n === 0 && (e += ' class="aplayer-lrc-current" '), e += ">", e += a(l[1]), e += "</p> ";
  }), e;
}
const mt = (t) => {
  const e = t.container, s = t.player, i = t.async;
  let a = [], l = 0, n = [];
  function m() {
    s.events.trigger("lrcshow"), s.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  function r() {
    s.events.trigger("lrchide"), s.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  function d() {
    s.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? m() : r();
  }
  function h(u = s.audio.currentTime) {
    if (l > n.length - 1 || u < n[l][0] || !n[l + 1] || u >= n[l + 1][0])
      for (let p = 0; p < n.length; p++)
        u >= n[p][0] && (!n[p + 1] || u < n[p + 1][0]) && (l = p, e.style.transform = `translateY(${-l * 16}px)`, e.style.webkitTransform = `translateY(${-l * 16}px)`, e.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), e.getElementsByTagName("p")[p].classList.add("aplayer-lrc-current"));
  }
  function w(u) {
    if (!a[u])
      if (!i)
        s.list.audios[u].lrc ? a[u] = k(s.list.audios[u].lrc) : a[u] = [["00:00", "Not available"]];
      else {
        a[u] = [["00:00", "Loading"]];
        const p = new XMLHttpRequest();
        p.onreadystatechange = () => {
          u === s.list.index && p.readyState === 4 && (p.status >= 200 && p.status < 300 || p.status === 304 ? a[u] = k(p.responseText) : (s.notice(`LRC file request fails: status ${p.status}`), a[u] = [["00:00", "Not available"]]), e.innerHTML = W({
            lyrics: a[u]
          }), h(0), n = a[u]);
        };
        const v = s.list.audios[u].lrc;
        p.open("get", v, !0), p.send(null);
      }
    e.innerHTML = W({
      lyrics: a[u]
    }), n = a[u];
  }
  function k(u) {
    if (u) {
      u = u.replace(/([^\]^\n])\[/g, (o, c) => c + `
[`);
      const p = u.split(`
`);
      let v = [];
      const M = p.length;
      for (let o = 0; o < M; o++) {
        const c = p[o].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), y = p[o].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (c) {
          const D = c.length;
          for (let O = 0; O < D; O++) {
            const x = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(c[O]), G = x[1] * 60, K = parseInt(x[2]), Q = x[4] ? parseInt(x[4]) / ((x[4] + "").length === 2 ? 100 : 1e3) : 0, Z = G + K + Q;
            v.push([Z, y]);
          }
        }
      }
      return v = v.filter((o) => o[1]), v.sort((o, c) => o[0] - c[0]), v;
    } else
      return [];
  }
  function q(u) {
    a.splice(u, 1);
  }
  function E() {
    a = [], e.innerHTML = "";
  }
  return {
    show: m,
    hide: r,
    toggle: d,
    update: h,
    switch: w,
    remove: q,
    clear: E
  };
}, pt = (t) => {
  ht(t), ft(t), gt(t), wt(t), yt(t), T || vt(t), Lt(t), bt(t), Mt(t);
};
function ht(t) {
  t.template.pic.addEventListener("click", () => {
    t.toggle();
  });
}
function ft(t) {
  const e = (i) => {
    let a = ((i.clientX || i.changedTouches[0].clientX) - P(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.lrc && t.lrc.update(a * t.duration), t.template.ptime.innerHTML = b(a * t.duration);
  }, s = (i) => {
    document.removeEventListener(f.dragEnd, s), document.removeEventListener(f.dragMove, e);
    let a = ((i.clientX || i.changedTouches[0].clientX) - P(t.template.barWrap)) / t.template.barWrap.clientWidth;
    a = Math.max(a, 0), a = Math.min(a, 1), t.bar.set("played", a, "width"), t.seek(t.bar.get("played", "width") * t.duration), t.disableTimeupdate = !1;
  };
  t.template.barWrap.addEventListener(f.dragStart, () => {
    t.disableTimeupdate = !0, document.addEventListener(f.dragMove, e), document.addEventListener(f.dragEnd, s);
  });
}
function vt(t) {
  t.template.volumeButton.addEventListener("click", () => {
    t.audio.muted ? (t.audio.muted = !1, t.switchVolumeIcon(), t.bar.set("volume", t.volume(), "height")) : (t.audio.muted = !0, t.switchVolumeIcon(), t.bar.set("volume", 0, "height"));
  });
  const e = (i) => {
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - A(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  }, s = (i) => {
    t.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(f.dragEnd, s), document.removeEventListener(f.dragMove, e);
    let a = 1 - ((i.clientY || i.changedTouches[0].clientY) - A(t.template.volumeBar, t.options.fixed)) / t.template.volumeBar.clientHeight;
    a = Math.max(a, 0), a = Math.min(a, 1), t.volume(a);
  };
  t.template.volumeBarWrap.addEventListener(f.dragStart, () => {
    t.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(f.dragMove, e), document.addEventListener(f.dragEnd, s);
  });
}
function gt(t) {
  t.template.order.addEventListener("click", () => {
    t.options.order === "list" ? (t.options.order = "random", t.template.order.innerHTML = Y) : t.options.order === "random" && (t.options.order = "list", t.template.order.innerHTML = U);
  });
}
function wt(t) {
  t.template.loop.addEventListener("click", () => {
    t.list.audios.length > 1 ? t.options.loop === "one" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" ? (t.options.loop = "all", t.template.loop.innerHTML = z) : t.options.loop === "all" && (t.options.loop = "one", t.template.loop.innerHTML = R) : t.options.loop === "one" || t.options.loop === "all" ? (t.options.loop = "none", t.template.loop.innerHTML = S) : t.options.loop === "none" && (t.options.loop = "all", t.template.loop.innerHTML = z);
  });
}
function yt(t) {
  t.template.menu.addEventListener("click", () => {
    t.list.toggle();
  });
}
function Lt(t) {
  t.template.miniSwitcher.addEventListener("click", () => {
    t.setMode(t.mode === "mini" ? "normal" : "mini");
  });
}
function bt(t) {
  t.template.skipBackButton.addEventListener("click", () => {
    t.skipBack();
  }), t.template.skipForwardButton.addEventListener("click", () => {
    t.skipForward();
  }), t.template.skipPlayButton.addEventListener("click", () => {
    t.toggle();
  });
}
function Mt(t) {
  t.template.lrcButton.addEventListener("click", () => {
    t.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (t.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.show()) : (t.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), t.lrc && t.lrc.hide());
  });
}
const xt = (t) => {
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
}, Tt = [
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
function kt(t) {
  if (Tt.indexOf(t) !== -1)
    return "player";
  if (X.indexOf(t) !== -1)
    return "audio";
}
const Bt = () => {
  const t = {};
  return {
    on: function(e, s) {
      kt(e) && typeof s == "function" && (t[e] || (t[e] = []), t[e].push(s));
    },
    trigger: function(e, s) {
      var i;
      (i = t[e]) == null || i.forEach((a) => a(s));
    }
  };
};
function Ht(t, e) {
  t.events.trigger("listadd", {
    audios: e
  }), e = V(e);
  const s = !(t.list.audios.length > 1), i = t.list.audios.length === 0;
  t.template.listOl.innerHTML += I({
    theme: t.options.theme,
    audio: e,
    index: t.list.audios.length + 1
  }), t.list.audios = t.list.audios.concat(e), s && t.list.audios.length > 1 && t.container.classList.add("aplayer-withlist"), t.randomOrder = $(t.list.audios.length), t.template.listCurs = t.container.querySelectorAll(".aplayer-list-cur"), t.template.listCurs[t.list.audios.length - 1].style.backgroundColor = e.theme || t.options.theme, i && (t.options.order === "random" ? t.list.switch(t.randomOrder[0]) : t.list.switch(0));
}
function qt(t, e) {
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
  t.events.trigger("listclear"), t.list.index = 0, t.container.classList.remove("aplayer-withlist"), t.pause(), t.list.audios = [], t.lrc && t.lrc.clear(), t.audio.src = "", t.template.listOl.innerHTML = "", t.template.pic.style.backgroundImage = "", t.theme(t.options.theme, t.list.index, !1), t.template.title.innerHTML = "No audio", t.template.author.innerHTML = "", t.bar.set("loaded", 0, "width"), t.template.dtime.innerHTML = b(0);
}
const Et = (t) => {
  let e = 0, s = t.options.audio;
  t.template.list.addEventListener("click", (r) => {
    let d;
    r.target.tagName.toUpperCase() === "LI" ? d = r.target : d = r.target.parentElement;
    const h = parseInt(d.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
    h !== e ? (m(h), t.play()) : t.toggle();
  });
  function i() {
    t.events.trigger("listshow"), t.template.list.classList.remove("aplayer-list-hide");
    const r = n();
    t.template.listOl.scrollTop = r.offsetTop;
  }
  function a() {
    t.events.trigger("listhide"), t.template.list.classList.add("aplayer-list-hide");
  }
  function l() {
    t.template.list.classList.contains("aplayer-list-hide") ? i() : a();
  }
  function n() {
    return t.container.querySelectorAll(".aplayer-list li")[e];
  }
  function m(r) {
    if (t.events.trigger("listswitch", {
      index: r
    }), typeof r < "u" && s[r]) {
      e = r;
      const d = s[e];
      t.template.pic.style.backgroundImage = d.cover ? `url('${d.cover}')` : "", t.theme(s[e].theme || t.options.theme, e, !1), t.template.title.innerHTML = d.name, t.template.author.innerHTML = d.artist ? " - " + d.artist : "";
      const h = t.container.getElementsByClassName("aplayer-list-light")[0];
      h && h.classList.remove("aplayer-list-light");
      const w = n();
      w.classList.add("aplayer-list-light"), w.parentNode.scrollTo({
        top: w.offsetTop,
        left: 0,
        behavior: "smooth"
      }), t.setAudio(d), t.lrc && t.lrc.switch(e), t.lrc && t.lrc.update(0), t.duration !== 1 && (t.template.dtime.innerHTML = b(t.duration));
    }
  }
  return {
    get index() {
      return e;
    },
    set index(r) {
      e = r;
    },
    get audios() {
      return s;
    },
    set audios(r) {
      s = r;
    },
    show: i,
    hide: a,
    toggle: l,
    switch: m
  };
}, B = [], Ot = () => {
  const t = {
    tplRenderers: nt,
    hlsHandler: () => {
    },
    events: Bt(),
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
}, zt = () => {
  const t = Ot();
  let e, s = !0, i = null, a = xt(t), l, n, m, r, d;
  function h() {
    if (n.lrcType === 2 || n.lrcType === !0) {
      const o = m.getElementsByClassName("aplayer-lrc-content");
      for (let c = 0; c < o.length; c++)
        n.audio[c] && (n.audio[c].lrc = o[c].innerHTML);
    }
    n.lrcType && (t.lrc = mt({
      container: r.lrc,
      async: n.lrcType === 3,
      player: t
    }));
  }
  function w() {
    m.classList.add("aplayer"), n.lrcType && !n.fixed && m.classList.add("aplayer-withlrc"), n.audio.length > 1 && m.classList.add("aplayer-withlist"), T && m.classList.add("aplayer-mobile"), m.offsetWidth <= 300 && m.classList.add("aplayer-arrow"), n.fixed && (m.classList.add("aplayer-fixed"), r.body.style.width = r.body.offsetWidth - 18 + "px"), n.mini && (t.setMode("mini"), r.info.style.display = "block"), r.info.offsetWidth < 200 && r.time.classList.add("aplayer-time-narrow"), r.listOl.style.position = "relative";
  }
  function k() {
    const o = n.storageName, c = JSON.parse(localStorage.getItem(o)) || {};
    return c.volume || (c.volume = n.volume), {
      get() {
        return c.volume;
      },
      set(y) {
        c.volume = y, localStorage.setItem(o, JSON.stringify(c));
      }
    };
  }
  function q() {
    t.audio = document.createElement("audio"), t.audio.preload = n.preload, X.forEach((o) => {
      t.audio.addEventListener(o, (c) => {
        t.events.trigger(o, c);
      });
    }), t.volume(e.get(), !0);
  }
  function E() {
    t.on("play", () => {
      s && u();
    }), t.on("pause", () => {
      s || p();
    }), t.on("timeupdate", () => {
      if (!t.disableTimeupdate) {
        t.bar.set("played", t.audio.currentTime / t.duration, "width"), t.lrc && t.lrc.update();
        const c = b(t.audio.currentTime);
        r.ptime.innerHTML !== c && (r.ptime.innerHTML = c);
      }
    }), t.on("durationchange", () => {
      t.duration !== 1 && (r.dtime.innerHTML = b(t.duration));
    }), t.on("progress", () => {
      const c = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.duration : 0;
      t.bar.set("loaded", c, "width");
    });
    let o;
    t.on("error", () => {
      d.audios.length > 1 ? (t.notice("An audio error has occurred, player will skip forward in 2 seconds."), o = setTimeout(() => {
        t.skipForward(), s || t.play();
      }, 2e3)) : d.audios.length === 1 && t.notice("An audio error has occurred.");
    }), t.events.on("listswitch", () => {
      o && clearTimeout(o);
    }), t.on("ended", () => {
      n.loop === "none" ? n.order === "list" ? d.index < d.audios.length - 1 ? (d.switch((d.index + 1) % d.audios.length), t.play()) : (d.switch((d.index + 1) % d.audios.length), t.pause()) : n.order === "random" && (t.randomOrder.indexOf(d.index) < t.randomOrder.length - 1 ? (d.switch(M()), t.play()) : (d.switch(M()), t.pause())) : n.loop === "one" ? (d.switch(d.index), t.play()) : n.loop === "all" && (t.skipForward(), t.play());
    });
  }
  function u() {
    s && (s = !1, r.button.classList.remove("aplayer-play"), r.button.classList.add("aplayer-pause"), r.button.innerHTML = "", setTimeout(() => {
      r.button.innerHTML = N;
    }, 100), r.skipPlayButton.innerHTML = N), a.enable(), n.mutex && B.filter((o) => o !== t).forEach((o) => {
      o.pause();
    });
  }
  function p() {
    s || (s = !0, r.button.classList.remove("aplayer-pause"), r.button.classList.add("aplayer-play"), r.button.innerHTML = "", setTimeout(() => {
      r.button.innerHTML = H;
    }, 100), r.skipPlayButton.innerHTML = H), m.classList.remove("aplayer-loading"), a.disable();
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
  function M() {
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
  return t.init = (o) => (n = ot(o), t.options = n, m = n.container, t.container = m, r = dt(m, n, t.randomOrder, t.tplRenderers), t.template = r, t.controller = pt(t), w(), t.randomOrder = $(n.audio.length), e = k(), h(), t.bar = ut(r), d = Et(t), t.list = d, q(), E(), n.order === "random" ? d.switch(t.randomOrder[0]) : d.switch(0), n.autoplay && t.play(), B.push(t), t.afterInitHooks.forEach((c) => {
    c(t);
  }), t), t.setAudio = (o) => {
    i && (i.destroy(), i = null);
    let c = o.type;
    n.customAudioType && n.customAudioType[c] ? Object.prototype.toString.call(n.customAudioType[c]) === "[object Function]" ? n.customAudioType[c](t.audio, o, t) : console.error(`Illegal customType: ${c}`) : ((!c || c === "auto") && (/m3u8(#|\?|$)/i.exec(o.url) ? c = "hls" : c = "normal"), c === "hls" ? i = t.hlsHandler(o) : c === "normal" && (t.audio.src = o.url)), t.seek(0), s || t.audio.play();
  }, t.destroy = () => {
    B.splice(B.indexOf(t), 1), t.pause(), m.innerHTML = "", t.audio.src = "", a.destroy(), t.events.trigger("destroy");
  }, t.setMode = (o = "normal") => {
    t.mode = o, o === "mini" ? m.classList.add("aplayer-narrow") : o === "normal" && m.classList.remove("aplayer-narrow");
  }, t.notice = (o, c = 2e3, y = 0.8) => {
    r.notice.innerHTML = o, r.notice.style.opacity = y, l && clearTimeout(l), t.events.trigger("noticeshow", {
      text: o
    }), c && (l = setTimeout(() => {
      r.notice.style.opacity = 0, t.events.trigger("noticehide");
    }, c));
  }, t.theme = (o = d.audios[d.index].theme || n.theme, c = d.index, y = !0) => {
    y && d.audios[c] && (d.audios[c].theme = o), r.listCurs[c] && (r.listCurs[c].style.backgroundColor = o), c === d.index && (r.pic.style.backgroundColor = o, r.played.style.background = o, r.thumb.style.background = o, r.volume.style.background = o);
  }, t.seek = (o) => {
    o = Math.max(o, 0), o = Math.min(o, t.duration), t.audio.currentTime = o, t.bar.set("played", o / t.duration, "width"), r.ptime.innerHTML = b(o);
  }, t.play = () => {
    u();
    const o = t.audio.play();
    o && o.catch((c) => {
      console.warn(c), c.name === "NotAllowedError" && p();
    });
  }, t.pause = () => {
    p(), t.audio.pause();
  }, t.switchVolumeIcon = () => {
    t.volume() >= 0.95 ? r.volumeButton.innerHTML = F : t.volume() > 0 ? r.volumeButton.innerHTML = _ : r.volumeButton.innerHTML = tt;
  }, t.volume = (o, c) => (o = parseFloat(o), isNaN(o) || (o = Math.max(o, 0), o = Math.min(o, 1), t.bar.set("volume", o, "height"), c || e.set(o), t.audio.volume = o, t.audio.muted && (t.audio.muted = !1), t.switchVolumeIcon()), t.audio.muted ? 0 : t.audio.volume), t.on = (o, c) => {
    t.events.on(o, c);
  }, t.toggle = () => {
    r.button.classList.contains("aplayer-play") ? t.play() : r.button.classList.contains("aplayer-pause") && t.pause();
  }, t.skipBack = () => {
    d.switch(v());
  }, t.skipForward = () => {
    d.switch(M());
  }, t.use = (o) => (o(t), t), t;
};
function St(t) {
  t.tplRenderers = rt;
  const e = t.init;
  t.init = (s) => (s.fixed = !0, e(s));
}
function It(t) {
  t.afterInitHooks.push(() => {
    t.list.add = (e) => {
      Ht(t, e);
    };
  });
}
function Pt(t) {
  t.afterInitHooks.push(() => {
    t.list.remove = (e) => {
      qt(t, e);
    };
  });
}
function At(t) {
  t.afterInitHooks.push(() => {
    t.list.clear = () => {
      J(t);
    };
  });
}
function Nt(t) {
  t.hlsHandler = (e) => {
    if (Hls.isSupported()) {
      const s = new Hls();
      return s.loadSource(e.url), s.attachMedia(t.audio), s;
    } else
      t.audio.canPlayType("application/x-mpegURL") || t.audio.canPlayType("application/vnd.apple.mpegURL") ? t.audio.src = e.url : t.notice("Error: HLS is not supported.");
  };
}
export {
  St as APlayerFixedModePlugin,
  Nt as APlayerHlsPlugin,
  It as addMusicPlugin,
  At as clearMusicPlugin,
  zt as default,
  Pt as removeMusicPlugin
};
