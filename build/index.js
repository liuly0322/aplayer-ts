var V = setTimeout;
function tt() {
}
function et(e, t) {
  return function() {
    e.apply(t, arguments);
  };
}
function c(e) {
  if (!(this instanceof c))
    throw new TypeError("Promises must be constructed via new");
  if (typeof e != "function")
    throw new TypeError("not a function");
  this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], D(e, this);
}
function U(e, t) {
  for (; e._state === 3; )
    e = e._value;
  if (e._state === 0) {
    e._deferreds.push(t);
    return;
  }
  e._handled = !0, c._immediateFn(function() {
    var i = e._state === 1 ? t.onFulfilled : t.onRejected;
    if (i === null) {
      (e._state === 1 ? E : b)(t.promise, e._value);
      return;
    }
    var s;
    try {
      s = i(e._value);
    } catch (n) {
      b(t.promise, n);
      return;
    }
    E(t.promise, s);
  });
}
function E(e, t) {
  try {
    if (t === e)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (t && (typeof t == "object" || typeof t == "function")) {
      var i = t.then;
      if (t instanceof c) {
        e._state = 3, e._value = t, S(e);
        return;
      } else if (typeof i == "function") {
        D(et(i, t), e);
        return;
      }
    }
    e._state = 1, e._value = t, S(e);
  } catch (s) {
    b(e, s);
  }
}
function b(e, t) {
  e._state = 2, e._value = t, S(e);
}
function S(e) {
  e._state === 2 && e._deferreds.length === 0 && c._immediateFn(function() {
    e._handled || c._unhandledRejectionFn(e._value);
  });
  for (var t = 0, i = e._deferreds.length; t < i; t++)
    U(e, e._deferreds[t]);
  e._deferreds = null;
}
function it(e, t, i) {
  this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.promise = i;
}
function D(e, t) {
  var i = !1;
  try {
    e(
      function(s) {
        i || (i = !0, E(t, s));
      },
      function(s) {
        i || (i = !0, b(t, s));
      }
    );
  } catch (s) {
    if (i)
      return;
    i = !0, b(t, s);
  }
}
c.prototype.catch = function(e) {
  return this.then(null, e);
};
c.prototype.then = function(e, t) {
  var i = new this.constructor(tt);
  return U(this, new it(e, t, i)), i;
};
c.prototype.finally = function(e) {
  var t = this.constructor;
  return this.then(
    function(i) {
      return t.resolve(e()).then(function() {
        return i;
      });
    },
    function(i) {
      return t.resolve(e()).then(function() {
        return t.reject(i);
      });
    }
  );
};
c.all = function(e) {
  return new c(function(t, i) {
    if (!e || typeof e.length > "u")
      throw new TypeError("Promise.all accepts an array");
    var s = Array.prototype.slice.call(e);
    if (s.length === 0)
      return t([]);
    var n = s.length;
    function o(a, l) {
      try {
        if (l && (typeof l == "object" || typeof l == "function")) {
          var d = l.then;
          if (typeof d == "function") {
            d.call(
              l,
              function(h) {
                o(a, h);
              },
              i
            );
            return;
          }
        }
        s[a] = l, --n === 0 && t(s);
      } catch (h) {
        i(h);
      }
    }
    for (var r = 0; r < s.length; r++)
      o(r, s[r]);
  });
};
c.resolve = function(e) {
  return e && typeof e == "object" && e.constructor === c ? e : new c(function(t) {
    t(e);
  });
};
c.reject = function(e) {
  return new c(function(t, i) {
    i(e);
  });
};
c.race = function(e) {
  return new c(function(t, i) {
    for (var s = 0, n = e.length; s < n; s++)
      e[s].then(t, i);
  });
};
c._immediateFn = typeof setImmediate == "function" && function(e) {
  setImmediate(e);
} || function(e) {
  V(e, 0);
};
c._unhandledRejectionFn = function(t) {
  typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", t);
};
const w = /mobile/i.test(window.navigator.userAgent);
function v(e) {
  const t = (o) => o < 10 ? "0" + o : "" + o, i = Math.floor(e / 3600), s = Math.floor((e - i * 3600) / 60), n = Math.floor(e - i * 3600 - s * 60);
  return (i > 0 ? [i, s, n] : [s, n]).map(t).join(":");
}
function I(e) {
  let t = e.offsetLeft, i = e.offsetParent;
  const s = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; i !== null; )
      t += i.offsetLeft, i = i.offsetParent;
  else
    for (; i !== null && i !== e; )
      t += i.offsetLeft, i = i.offsetParent;
  return t - s;
}
function P(e, t) {
  let i = e.offsetTop, s = e.offsetParent, n = 0;
  for (; s !== null; )
    i += s.offsetTop, s = s.offsetParent;
  return n = document.body.scrollTop + document.documentElement.scrollTop, t ? i : i - n;
}
const _ = {
  set: (e, t) => {
    localStorage.setItem(e, t);
  },
  get: (e) => localStorage.getItem(e)
}, u = {
  dragStart: w ? "touchstart" : "mousedown",
  dragMove: w ? "touchmove" : "mousemove",
  dragEnd: w ? "touchend" : "mouseup"
};
function X(e) {
  function t(i) {
    for (let s = i.length - 1; s >= 0; s--) {
      const n = Math.floor(Math.random() * (s + 1)), o = i[n];
      i[n] = i[s], i[s] = o;
    }
    return i;
  }
  return t([...Array(e)].map(function(i, s) {
    return s;
  }));
}
const B = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', st = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>', ot = (e) => {
  const t = {
    container: e.element || document.getElementsByClassName("aplayer")[0],
    mini: e.narrow || e.fixed || !1,
    fixed: !1,
    autoplay: !1,
    mutex: !0,
    lrcType: e.showlrc || e.lrc || 0,
    preload: "auto",
    theme: "#b7daff",
    loop: "all",
    order: "list",
    volume: 0.7,
    listFolded: e.fixed,
    listMaxHeight: e.listmaxheight || "250px",
    audio: e.music || [],
    storageName: "aplayer-setting"
  };
  for (const i in t)
    t.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = t[i]);
  return Object.prototype.toString.call(e.audio) !== "[object Array]" && (e.audio = [e.audio]), e.audio.map((i) => (i.name = i.name || i.title || "Audio name", i.artist = i.artist || i.author || "Audio artist", i.cover = i.cover || i.pic, i.type = i.type || "normal", i)), e.audio.length <= 1 && e.loop === "one" && (e.loop = "all"), e;
};
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function J(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C = Object.create(window), rt = /["&'<>]/;
C.$escape = function(e) {
  return lt(G(e));
};
C.$each = function(e, t) {
  if (Array.isArray(e))
    for (var i = 0, s = e.length; i < s; i++)
      t(e[i], i);
  else
    for (var n in e)
      t(e[n], n);
};
function G(e) {
  return typeof e != "string" && (e == null ? e = "" : typeof e == "function" ? e = G(e.call(e)) : e = JSON.stringify(e)), e;
}
function lt(e) {
  var t = "" + e, i = rt.exec(t);
  if (!i)
    return e;
  var s = "", n = void 0, o = void 0, r = void 0;
  for (n = i.index, o = 0; n < t.length; n++) {
    switch (t.charCodeAt(n)) {
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
    o !== n && (s += t.substring(o, n)), o = n + 1, s += r;
  }
  return o !== n ? s + t.substring(o, n) : s;
}
var ct = C, ht = ct;
const L = /* @__PURE__ */ J(ht);
function K(e) {
  e = e || {};
  var t = "", i = L.$each, s = e.audio;
  e.$value, e.$index;
  var n = L.$escape, o = e.theme, r = e.index;
  return i(s, function(a, l) {
    t += ' <li><span class="aplayer-list-cur" style="background-color: ', t += n(a.theme || o), t += '"></span> <span class="aplayer-list-index">', t += n(l + r), t += '</span><span class="aplayer-list-title">', t += n(a.name), t += '</span><span class="aplayer-list-author">', t += n(a.artist), t += "</span></li> ";
  }), t;
}
function dt(e) {
  e = e || {};
  var t = "", i = e.options, s = e.cover, n = L.$escape;
  e.icons;
  var o = function(a) {
    return t += a, t;
  }, r = e.getObject;
  return e.theme, e.audio, e.index, i.fixed ? (t += ' <div class="aplayer-list', i.listFolded && (t += " aplayer-list-hide"), t += '" ', i.listMaxHeight && (t += ' style="max-height: ', t += n(i.listMaxHeight), t += '" '), t += "><ol ", i.listMaxHeight && (t += ' style="max-height: ', t += n(i.listMaxHeight), t += '" '), t += "> ", o(require("./list-item.art")(r({
    theme: i.theme,
    audio: i.audio,
    index: 1
  }))), t += ' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="', s && (t += "background-image:url(&quot;", t += n(s), t += "&quot;);"), t += "background-color: ", t += n(i.theme), t += '"><div class="aplayer-button aplayer-play">', t += p, t += '</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ', t += n(i.theme), t += '"><span class="aplayer-thumb" style="background: ', t += n(i.theme), t += '"><span class="aplayer-loading-icon">', t += W, t += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', t += x, t += ' </span><span class="aplayer-icon aplayer-icon-play"> ', t += p, t += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', t += x, t += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', t += H, t += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', t += n(i.theme), t += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', i.order === "list" ? t += A : i.order === "random" && (t += B), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', i.loop === "one" ? t += O : i.loop === "all" ? t += M : i.loop === "none" && (t += q), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', t += j, t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', t += $, t += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', t += R, t += '</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ') : (t += ' <div class="aplayer-body"><div class="aplayer-pic" style="', s && (t += "background-image:url(&quot;", t += n(s), t += "&quot;);"), t += "background-color: ", t += n(i.theme), t += '"><div class="aplayer-button aplayer-play">', t += p, t += '</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ', t += n(i.theme), t += '"><span class="aplayer-thumb" style="background: ', t += n(i.theme), t += '"><span class="aplayer-loading-icon">', t += W, t += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', t += x, t += ' </span><span class="aplayer-icon aplayer-icon-play"> ', t += p, t += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', t += x, t += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', t += H, t += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', t += n(i.theme), t += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', i.order === "list" ? t += A : i.order === "random" && (t += B), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', i.loop === "one" ? t += O : i.loop === "all" ? t += M : i.loop === "none" && (t += q), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', t += j, t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', t += $, t += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', t += R, t += '</button></div></div><div class="aplayer-list', i.listFolded && (t += " aplayer-list-hide"), t += '" ', i.listMaxHeight && (t += ' style="max-height: ', t += n(i.listMaxHeight), t += '" '), t += "><ol ", i.listMaxHeight && (t += ' style="max-height: ', t += n(i.listMaxHeight), t += '" '), t += "> ", o(K(r({
    theme: i.theme,
    audio: i.audio,
    index: 1
  }))), t += " </ol></div> "), t;
}
class ut {
  constructor(t) {
    this.container = t.container, this.options = t.options, this.randomOrder = t.randomOrder, this.init();
  }
  init() {
    let t = "";
    this.options.audio.length && (this.options.order === "random" ? t = this.options.audio[this.randomOrder[0]].cover : t = this.options.audio[0].cover), this.container.innerHTML = dt({
      options: this.options,
      cover: t,
      getObject: (i) => i
    }), this.lrc = this.container.querySelector(".aplayer-lrc-contents"), this.lrcWrap = this.container.querySelector(".aplayer-lrc"), this.ptime = this.container.querySelector(".aplayer-ptime"), this.info = this.container.querySelector(".aplayer-info"), this.time = this.container.querySelector(".aplayer-time"), this.barWrap = this.container.querySelector(".aplayer-bar-wrap"), this.button = this.container.querySelector(".aplayer-button"), this.body = this.container.querySelector(".aplayer-body"), this.list = this.container.querySelector(".aplayer-list"), this.listOl = this.container.querySelector(".aplayer-list ol"), this.listCurs = this.container.querySelectorAll(".aplayer-list-cur"), this.played = this.container.querySelector(".aplayer-played"), this.loaded = this.container.querySelector(".aplayer-loaded"), this.thumb = this.container.querySelector(".aplayer-thumb"), this.volume = this.container.querySelector(".aplayer-volume"), this.volumeBar = this.container.querySelector(".aplayer-volume-bar"), this.volumeButton = this.container.querySelector(".aplayer-time button"), this.volumeBarWrap = this.container.querySelector(".aplayer-volume-bar-wrap"), this.loop = this.container.querySelector(".aplayer-icon-loop"), this.order = this.container.querySelector(".aplayer-icon-order"), this.menu = this.container.querySelector(".aplayer-icon-menu"), this.pic = this.container.querySelector(".aplayer-pic"), this.title = this.container.querySelector(".aplayer-title"), this.author = this.container.querySelector(".aplayer-author"), this.dtime = this.container.querySelector(".aplayer-dtime"), this.notice = this.container.querySelector(".aplayer-notice"), this.miniSwitcher = this.container.querySelector(".aplayer-miniswitcher"), this.skipBackButton = this.container.querySelector(".aplayer-icon-back"), this.skipForwardButton = this.container.querySelector(".aplayer-icon-forward"), this.skipPlayButton = this.container.querySelector(".aplayer-icon-play"), this.lrcButton = this.container.querySelector(".aplayer-icon-lrc");
  }
}
class pt {
  constructor(t) {
    this.elements = {}, this.elements.volume = t.volume, this.elements.played = t.played, this.elements.loaded = t.loaded;
  }
  /**
   * Update progress
   *
   * @param {String} type - Point out which bar it is
   * @param {Number} percentage
   * @param {String} direction - Point out the direction of this bar, Should be height or width
   */
  set(t, i, s) {
    i = Math.max(i, 0), i = Math.min(i, 1), this.elements[t].style[s] = i * 100 + "%";
  }
  get(t, i) {
    return parseFloat(this.elements[t].style[i]) / 100;
  }
}
class mt {
  constructor(t) {
    this.storageName = t.options.storageName, this.data = JSON.parse(_.get(this.storageName)), this.data || (this.data = {}), this.data.volume = this.data.volume || t.options.volume;
  }
  get(t) {
    return this.data[t];
  }
  set(t, i) {
    this.data[t] = i, _.set(this.storageName, JSON.stringify(this.data));
  }
}
function Y(e) {
  e = e || {};
  var t = "", i = L.$each, s = e.lyrics;
  e.$value, e.$index;
  var n = L.$escape;
  return i(s, function(o, r) {
    t += " <p ", r === 0 && (t += ' class="aplayer-lrc-current" '), t += ">", t += n(o[1]), t += "</p> ";
  }), t;
}
class vt {
  constructor(t) {
    this.container = t.container, this.async = t.async, this.player = t.player, this.parsed = [], this.index = 0, this.current = [];
  }
  show() {
    this.player.events.trigger("lrcshow"), this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide");
  }
  hide() {
    this.player.events.trigger("lrchide"), this.player.template.lrcWrap.classList.add("aplayer-lrc-hide");
  }
  toggle() {
    this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? this.show() : this.hide();
  }
  update(t = this.player.audio.currentTime) {
    if (this.index > this.current.length - 1 || t < this.current[this.index][0] || !this.current[this.index + 1] || t >= this.current[this.index + 1][0])
      for (let i = 0; i < this.current.length; i++)
        t >= this.current[i][0] && (!this.current[i + 1] || t < this.current[i + 1][0]) && (this.index = i, this.container.style.transform = `translateY(${-this.index * 16}px)`, this.container.style.webkitTransform = `translateY(${-this.index * 16}px)`, this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), this.container.getElementsByTagName("p")[i].classList.add("aplayer-lrc-current"));
  }
  switch(t) {
    if (!this.parsed[t])
      if (!this.async)
        this.player.list.audios[t].lrc ? this.parsed[t] = this.parse(this.player.list.audios[t].lrc) : this.parsed[t] = [["00:00", "Not available"]];
      else {
        this.parsed[t] = [["00:00", "Loading"]];
        const i = new XMLHttpRequest();
        i.onreadystatechange = () => {
          t === this.player.list.index && i.readyState === 4 && (i.status >= 200 && i.status < 300 || i.status === 304 ? this.parsed[t] = this.parse(i.responseText) : (this.player.notice(`LRC file request fails: status ${i.status}`), this.parsed[t] = [["00:00", "Not available"]]), this.container.innerHTML = Y({
            lyrics: this.parsed[t]
          }), this.update(0), this.current = this.parsed[t]);
        };
        const s = this.player.list.audios[t].lrc;
        i.open("get", s, !0), i.send(null);
      }
    this.container.innerHTML = Y({
      lyrics: this.parsed[t]
    }), this.current = this.parsed[t];
  }
  /**
   * Parse lrc, suppose multiple time tag
   *
   * @param {String} lrc_s - Format:
   * [mm:ss]lyric
   * [mm:ss.xx]lyric
   * [mm:ss.xxx]lyric
   * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
   * [mm:ss.xx]<mm:ss.xx>lyric
   *
   * @return {String} [[time, text], [time, text], [time, text], ...]
   */
  parse(t) {
    if (t) {
      t = t.replace(/([^\]^\n])\[/g, (o, r) => r + `
[`);
      const i = t.split(`
`);
      let s = [];
      const n = i.length;
      for (let o = 0; o < n; o++) {
        const r = i[o].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), a = i[o].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (r) {
          const l = r.length;
          for (let d = 0; d < l; d++) {
            const h = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[d]), f = h[1] * 60, y = parseInt(h[2]), T = h[4] ? parseInt(h[4]) / ((h[4] + "").length === 2 ? 100 : 1e3) : 0, k = f + y + T;
            s.push([k, a]);
          }
        }
      }
      return s = s.filter((o) => o[1]), s.sort((o, r) => o[0] - r[0]), s;
    } else
      return [];
  }
  remove(t) {
    this.parsed.splice(t, 1);
  }
  clear() {
    this.parsed = [], this.container.innerHTML = "";
  }
}
class ft {
  constructor(t) {
    yt(t), gt(t), bt(t), Lt(t), xt(t), w || wt(t), Mt(t), qt(t), Tt(t);
  }
}
function yt(e) {
  e.template.pic.addEventListener("click", () => {
    e.toggle();
  });
}
function gt(e) {
  const t = (s) => {
    let n = ((s.clientX || s.changedTouches[0].clientX) - I(e.template.barWrap)) / e.template.barWrap.clientWidth;
    n = Math.max(n, 0), n = Math.min(n, 1), e.bar.set("played", n, "width"), e.lrc && e.lrc.update(n * e.duration), e.template.ptime.innerHTML = v(n * e.duration);
  }, i = (s) => {
    document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, t);
    let n = ((s.clientX || s.changedTouches[0].clientX) - I(e.template.barWrap)) / e.template.barWrap.clientWidth;
    n = Math.max(n, 0), n = Math.min(n, 1), e.bar.set("played", n, "width"), e.seek(e.bar.get("played", "width") * e.duration), e.disableTimeupdate = !1;
  };
  e.template.barWrap.addEventListener(u.dragStart, () => {
    e.disableTimeupdate = !0, document.addEventListener(u.dragMove, t), document.addEventListener(u.dragEnd, i);
  });
}
function wt(e) {
  e.template.volumeButton.addEventListener("click", () => {
    e.audio.muted ? (e.audio.muted = !1, e.switchVolumeIcon(), e.bar.set("volume", e.volume(), "height")) : (e.audio.muted = !0, e.switchVolumeIcon(), e.bar.set("volume", 0, "height"));
  });
  const t = (s) => {
    let n = 1 - ((s.clientY || s.changedTouches[0].clientY) - P(e.template.volumeBar, e.options.fixed)) / e.template.volumeBar.clientHeight;
    n = Math.max(n, 0), n = Math.min(n, 1), e.volume(n);
  }, i = (s) => {
    e.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, t);
    let n = 1 - ((s.clientY || s.changedTouches[0].clientY) - P(e.template.volumeBar, e.options.fixed)) / e.template.volumeBar.clientHeight;
    n = Math.max(n, 0), n = Math.min(n, 1), e.volume(n);
  };
  e.template.volumeBarWrap.addEventListener(u.dragStart, () => {
    e.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(u.dragMove, t), document.addEventListener(u.dragEnd, i);
  });
}
function bt(e) {
  e.template.order.addEventListener("click", () => {
    e.options.order === "list" ? (e.options.order = "random", e.template.order.innerHTML = B) : e.options.order === "random" && (e.options.order = "list", e.template.order.innerHTML = A);
  });
}
function Lt(e) {
  e.template.loop.addEventListener("click", () => {
    e.list.audios.length > 1 ? e.options.loop === "one" ? (e.options.loop = "none", e.template.loop.innerHTML = q) : e.options.loop === "none" ? (e.options.loop = "all", e.template.loop.innerHTML = M) : e.options.loop === "all" && (e.options.loop = "one", e.template.loop.innerHTML = O) : e.options.loop === "one" || e.options.loop === "all" ? (e.options.loop = "none", e.template.loop.innerHTML = q) : e.options.loop === "none" && (e.options.loop = "all", e.template.loop.innerHTML = M);
  });
}
function xt(e) {
  e.template.menu.addEventListener("click", () => {
    e.list.toggle();
  });
}
function Mt(e) {
  e.template.miniSwitcher.addEventListener("click", () => {
    e.setMode(e.mode === "mini" ? "normal" : "mini");
  });
}
function qt(e) {
  e.template.skipBackButton.addEventListener("click", () => {
    e.skipBack();
  }), e.template.skipForwardButton.addEventListener("click", () => {
    e.skipForward();
  }), e.template.skipPlayButton.addEventListener("click", () => {
    e.toggle();
  });
}
function Tt(e) {
  e.template.lrcButton.addEventListener("click", () => {
    e.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (e.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), e.lrc && e.lrc.show()) : (e.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), e.lrc && e.lrc.hide());
  });
}
class kt {
  constructor(t) {
    this.player = t, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
      window.setTimeout(i, 1e3 / 60);
    }, this.types = ["loading"], this.init();
  }
  init() {
    this.types.forEach((t) => {
      this[`init${t}Checker`]();
    });
  }
  initloadingChecker() {
    let t = 0, i = 0, s = !1;
    this.loadingChecker = setInterval(() => {
      this.enableloadingChecker && (i = this.player.audio.currentTime, !s && i === t && !this.player.audio.paused && (this.player.container.classList.add("aplayer-loading"), s = !0), s && i > t && !this.player.audio.paused && (this.player.container.classList.remove("aplayer-loading"), s = !1), t = i);
    }, 100);
  }
  enable(t) {
    this[`enable${t}Checker`] = !0, t === "fps" && this.initfpsChecker();
  }
  disable(t) {
    this[`enable${t}Checker`] = !1;
  }
  destroy() {
    this.types.forEach((t) => {
      this[`enable${t}Checker`] = !1, this[`${t}Checker`] && clearInterval(this[`${t}Checker`]);
    });
  }
}
class Et {
  constructor() {
    this.events = {}, this.audioEvents = [
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
    ], this.playerEvents = [
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
    ];
  }
  on(t, i) {
    this.type(t) && typeof i == "function" && (this.events[t] || (this.events[t] = []), this.events[t].push(i));
  }
  trigger(t, i) {
    if (this.events[t] && this.events[t].length)
      for (let s = 0; s < this.events[t].length; s++)
        this.events[t][s](i);
  }
  type(t) {
    return this.playerEvents.indexOf(t) !== -1 ? "player" : this.audioEvents.indexOf(t) !== -1 ? "audio" : (console.error(`Unknown event name: ${t}`), null);
  }
}
var Q = { exports: {} };
(function(e, t) {
  (function(i, s) {
    e.exports = s();
  })(at, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var i = function(a, l) {
        return a.nodeName === "HTML" ? -l : a.getBoundingClientRect().top + l;
      }, s = function(a) {
        return a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
      }, n = function(a, l, d, h) {
        return d > h ? l : a + (l - a) * s(d / h);
      }, o = function(a, l, d, h) {
        l = l || 500, h = h || window;
        var f = h.scrollTop || window.pageYOffset;
        if (typeof a == "number")
          var y = parseInt(a);
        else
          var y = i(a, f);
        var T = Date.now(), k = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(g) {
          window.setTimeout(g, 15);
        }, F = function() {
          var g = Date.now() - T;
          h !== window ? h.scrollTop = n(f, y, g, l) : window.scroll(0, n(f, y, g, l)), g > l ? typeof d == "function" && d(a) : k(F);
        };
        F();
      }, r = function(a) {
        if (!a.defaultPrevented) {
          a.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var l = document.getElementById(this.hash.substring(1));
          if (!l)
            return;
          o(l, 500, function(d) {
            location.replace("#" + d.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var a = document.querySelectorAll('a[href^="#"]:not([href="#"])'), l, d = a.length; l = a[--d]; )
          l.addEventListener("click", r, !1);
      }), o;
    }
  });
})(Q);
var St = Q.exports;
const Bt = /* @__PURE__ */ J(St);
class Ht {
  constructor(t) {
    this.player = t, this.index = 0, this.audios = this.player.options.audio, this.bindEvents();
  }
  bindEvents() {
    this.player.template.list.addEventListener("click", (t) => {
      let i;
      t.target.tagName.toUpperCase() === "LI" ? i = t.target : i = t.target.parentElement;
      const s = parseInt(i.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
      s !== this.index ? (this.switch(s), this.player.play()) : this.player.toggle();
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
  add(t) {
    this.player.events.trigger("listadd", {
      audios: t
    }), Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((n) => (n.name = n.name || n.title || "Audio name", n.artist = n.artist || n.author || "Audio artist", n.cover = n.cover || n.pic, n.type = n.type || "normal", n));
    const i = !(this.audios.length > 1), s = this.audios.length === 0;
    this.player.template.listOl.innerHTML += K({
      theme: this.player.options.theme,
      audio: t,
      index: this.audios.length + 1
    }), this.audios = this.audios.concat(t), i && this.audios.length > 1 && this.player.container.classList.add("aplayer-withlist"), this.player.randomOrder = X(this.audios.length), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur"), this.player.template.listCurs[this.audios.length - 1].style.backgroundColor = t.theme || this.player.options.theme, s && (this.player.options.order === "random" ? this.switch(this.player.randomOrder[0]) : this.switch(0));
  }
  remove(t) {
    if (this.player.events.trigger("listremove", {
      index: t
    }), this.audios[t])
      if (this.audios.length > 1) {
        const i = this.player.container.querySelectorAll(".aplayer-list li");
        i[t].remove(), this.audios.splice(t, 1), this.player.lrc && this.player.lrc.remove(t), t === this.index && (this.audios[t] ? this.switch(t) : this.switch(t - 1)), this.index > t && this.index--;
        for (let s = t; s < i.length; s++)
          i[s].getElementsByClassName("aplayer-list-index")[0].textContent = s;
        this.audios.length === 1 && this.player.container.classList.remove("aplayer-withlist"), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur");
      } else
        this.clear();
  }
  switch(t) {
    if (this.player.events.trigger("listswitch", {
      index: t
    }), typeof t < "u" && this.audios[t]) {
      this.index = t;
      const i = this.audios[this.index];
      this.player.template.pic.style.backgroundImage = i.cover ? `url('${i.cover}')` : "", this.player.theme(this.audios[this.index].theme || this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = i.name, this.player.template.author.innerHTML = i.artist ? " - " + i.artist : "";
      const s = this.player.container.getElementsByClassName("aplayer-list-light")[0];
      s && s.classList.remove("aplayer-list-light"), this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"), Bt(this.index * 33, 500, null, this.player.template.listOl), this.player.setAudio(i), this.player.lrc && this.player.lrc.switch(this.index), this.player.lrc && this.player.lrc.update(0), this.player.duration !== 1 && (this.player.template.dtime.innerHTML = v(this.player.duration));
    }
  }
  clear() {
    this.player.events.trigger("listclear"), this.index = 0, this.player.container.classList.remove("aplayer-withlist"), this.player.pause(), this.audios = [], this.player.lrc && this.player.lrc.clear(), this.player.audio.src = "", this.player.template.listOl.innerHTML = "", this.player.template.pic.style.backgroundImage = "", this.player.theme(this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = "No audio", this.player.template.author.innerHTML = "", this.player.bar.set("loaded", 0, "width"), this.player.template.dtime.innerHTML = v(0);
  }
}
const m = [];
function Ot(e) {
  e.audio = document.createElement("audio"), e.audio.preload = e.options.preload;
  for (let t = 0; t < e.events.audioEvents.length; t++)
    e.audio.addEventListener(e.events.audioEvents[t], (i) => {
      e.events.trigger(e.events.audioEvents[t], i);
    });
  e.volume(e.storage.get("volume"), !0);
}
function At(e) {
  e.on("play", () => {
    e.paused && Z(e);
  }), e.on("pause", () => {
    e.paused || z(e);
  }), e.on("timeupdate", () => {
    if (!e.disableTimeupdate) {
      e.bar.set("played", e.audio.currentTime / e.duration, "width"), e.lrc && e.lrc.update();
      const i = v(e.audio.currentTime);
      e.template.ptime.innerHTML !== i && (e.template.ptime.innerHTML = i);
    }
  }), e.on("durationchange", () => {
    e.duration !== 1 && (e.template.dtime.innerHTML = v(e.duration));
  }), e.on("progress", () => {
    const i = e.audio.buffered.length ? e.audio.buffered.end(e.audio.buffered.length - 1) / e.duration : 0;
    e.bar.set("loaded", i, "width");
  });
  let t;
  e.on("error", () => {
    e.list.audios.length > 1 ? (e.notice("An audio error has occurred, player will skip forward in 2 seconds."), t = setTimeout(() => {
      e.skipForward(), e.paused || e.play();
    }, 2e3)) : e.list.audios.length === 1 && e.notice("An audio error has occurred.");
  }), e.events.on("listswitch", () => {
    t && clearTimeout(t);
  }), e.on("ended", () => {
    e.options.loop === "none" ? e.options.order === "list" ? e.list.index < e.list.audios.length - 1 ? (e.list.switch((e.list.index + 1) % e.list.audios.length), e.play()) : (e.list.switch((e.list.index + 1) % e.list.audios.length), e.pause()) : e.options.order === "random" && (e.randomOrder.indexOf(e.list.index) < e.randomOrder.length - 1 ? (e.list.switch(e.nextIndex()), e.play()) : (e.list.switch(e.nextIndex()), e.pause())) : e.options.loop === "one" ? (e.list.switch(e.list.index), e.play()) : e.options.loop === "all" && (e.skipForward(), e.play());
  });
}
function Z(e) {
  if (e.paused && (e.paused = !1, e.template.button.classList.remove("aplayer-play"), e.template.button.classList.add("aplayer-pause"), e.template.button.innerHTML = "", setTimeout(() => {
    e.template.button.innerHTML = N;
  }, 100), e.template.skipPlayButton.innerHTML = N), e.timer.enable("loading"), e.options.mutex)
    for (let t = 0; t < m.length; t++)
      e !== m[t] && m[t].pause();
}
function z(e) {
  e.paused || (e.paused = !0, e.template.button.classList.remove("aplayer-pause"), e.template.button.classList.add("aplayer-play"), e.template.button.innerHTML = "", setTimeout(() => {
    e.template.button.innerHTML = p;
  }, 100), e.template.skipPlayButton.innerHTML = p), e.container.classList.remove("aplayer-loading"), e.timer.disable("loading");
}
class zt {
  /**
   * APlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  constructor(t) {
    if (this.options = ot(t), this.container = this.options.container, this.paused = !0, this.playedPromise = c.resolve(), this.mode = "normal", this.randomOrder = X(this.options.audio.length), this.container.classList.add("aplayer"), this.options.lrcType && !this.options.fixed && this.container.classList.add("aplayer-withlrc"), this.options.audio.length > 1 && this.container.classList.add("aplayer-withlist"), w && this.container.classList.add("aplayer-mobile"), this.arrow = this.container.offsetWidth <= 300, this.arrow && this.container.classList.add("aplayer-arrow"), this.container = this.options.container, this.options.lrcType === 2 || this.options.lrcType === !0) {
      const i = this.container.getElementsByClassName("aplayer-lrc-content");
      for (let s = 0; s < i.length; s++)
        this.options.audio[s] && (this.options.audio[s].lrc = i[s].innerHTML);
    }
    this.template = new ut({
      container: this.container,
      options: this.options,
      randomOrder: this.randomOrder
    }), this.options.fixed && (this.container.classList.add("aplayer-fixed"), this.template.body.style.width = this.template.body.offsetWidth - 18 + "px"), this.options.mini && (this.setMode("mini"), this.template.info.style.display = "block"), this.template.info.offsetWidth < 200 && this.template.time.classList.add("aplayer-time-narrow"), this.options.lrcType && (this.lrc = new vt({
      container: this.template.lrc,
      async: this.options.lrcType === 3,
      player: this
    })), this.events = new Et(), this.storage = new mt(this), this.bar = new pt(this.template), this.controller = new ft(this), this.timer = new kt(this), this.list = new Ht(this), Ot(this), At(this), this.options.order === "random" ? this.list.switch(this.randomOrder[0]) : this.list.switch(0), this.options.autoplay && this.play(), m.push(this);
  }
  setAudio(t) {
    this.hls && (this.hls.destroy(), this.hls = null);
    let i = t.type;
    this.options.customAudioType && this.options.customAudioType[i] ? Object.prototype.toString.call(this.options.customAudioType[i]) === "[object Function]" ? this.options.customAudioType[i](this.audio, t, this) : console.error(`Illegal customType: ${i}`) : ((!i || i === "auto") && (/m3u8(#|\?|$)/i.exec(t.url) ? i = "hls" : i = "normal"), i === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(t.url), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL") ? this.audio.src = t.url : this.notice("Error: HLS is not supported.") : i === "normal" && (this.audio.src = t.url)), this.seek(0), this.paused || this.audio.play();
  }
  theme(t = this.list.audios[this.list.index].theme || this.options.theme, i = this.list.index, s = !0) {
    s && this.list.audios[i] && (this.list.audios[i].theme = t), this.template.listCurs[i] && (this.template.listCurs[i].style.backgroundColor = t), i === this.list.index && (this.template.pic.style.backgroundColor = t, this.template.played.style.background = t, this.template.thumb.style.background = t, this.template.volume.style.background = t);
  }
  seek(t) {
    t = Math.max(t, 0), t = Math.min(t, this.duration), this.audio.currentTime = t, this.bar.set("played", t / this.duration, "width"), this.template.ptime.innerHTML = v(t);
  }
  get duration() {
    return isNaN(this.audio.duration) ? 0 : this.audio.duration;
  }
  play() {
    Z(this);
    const t = this.audio.play();
    t && t.catch((i) => {
      console.warn(i), i.name === "NotAllowedError" && z(this);
    });
  }
  pause() {
    z(this), this.audio.pause();
  }
  switchVolumeIcon() {
    this.volume() >= 0.95 ? this.template.volumeButton.innerHTML = st : this.volume() > 0 ? this.template.volumeButton.innerHTML = H : this.template.volumeButton.innerHTML = nt;
  }
  /**
   * Set volume
   */
  volume(t, i) {
    return t = parseFloat(t), isNaN(t) || (t = Math.max(t, 0), t = Math.min(t, 1), this.bar.set("volume", t, "height"), i || this.storage.set("volume", t), this.audio.volume = t, this.audio.muted && (this.audio.muted = !1), this.switchVolumeIcon()), this.audio.muted ? 0 : this.audio.volume;
  }
  /**
   * bind events
   */
  on(t, i) {
    this.events.on(t, i);
  }
  /**
   * toggle between play and pause
   */
  toggle() {
    this.template.button.classList.contains("aplayer-play") ? this.play() : this.template.button.classList.contains("aplayer-pause") && this.pause();
  }
  // abandoned
  switchAudio(t) {
    this.list.switch(t);
  }
  // abandoned
  addAudio(t) {
    this.list.add(t);
  }
  // abandoned
  removeAudio(t) {
    this.list.remove(t);
  }
  /**
   * destroy this player
   */
  destroy() {
    m.splice(m.indexOf(this), 1), this.pause(), this.container.innerHTML = "", this.audio.src = "", this.timer.destroy(), this.events.trigger("destroy");
  }
  setMode(t = "normal") {
    this.mode = t, t === "mini" ? this.container.classList.add("aplayer-narrow") : t === "normal" && this.container.classList.remove("aplayer-narrow");
  }
  notice(t, i = 2e3, s = 0.8) {
    this.template.notice.innerHTML = t, this.template.notice.style.opacity = s, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("noticeshow", {
      text: t
    }), i && (this.noticeTime = setTimeout(() => {
      this.template.notice.style.opacity = 0, this.events.trigger("noticehide");
    }, i));
  }
  prevIndex() {
    if (this.list.audios.length > 1) {
      if (this.options.order === "list")
        return this.list.index - 1 < 0 ? this.list.audios.length - 1 : this.list.index - 1;
      if (this.options.order === "random") {
        const t = this.randomOrder.indexOf(this.list.index);
        return t === 0 ? this.randomOrder[this.randomOrder.length - 1] : this.randomOrder[t - 1];
      }
    } else
      return 0;
  }
  nextIndex() {
    if (this.list.audios.length > 1) {
      if (this.options.order === "list")
        return (this.list.index + 1) % this.list.audios.length;
      if (this.options.order === "random") {
        const t = this.randomOrder.indexOf(this.list.index);
        return t === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[t + 1];
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
export {
  zt as default
};
