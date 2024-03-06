var tt = setTimeout;
function et() {
}
function it(e, t) {
  return function() {
    e.apply(t, arguments);
  };
}
function c(e) {
  if (!(this instanceof c))
    throw new TypeError("Promises must be constructed via new");
  if (typeof e != "function")
    throw new TypeError("not a function");
  this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], X(e, this);
}
function D(e, t) {
  for (; e._state === 3; )
    e = e._value;
  if (e._state === 0) {
    e._deferreds.push(t);
    return;
  }
  e._handled = !0, c._immediateFn(function() {
    var i = e._state === 1 ? t.onFulfilled : t.onRejected;
    if (i === null) {
      (e._state === 1 ? B : b)(t.promise, e._value);
      return;
    }
    var n;
    try {
      n = i(e._value);
    } catch (s) {
      b(t.promise, s);
      return;
    }
    B(t.promise, n);
  });
}
function B(e, t) {
  try {
    if (t === e)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (t && (typeof t == "object" || typeof t == "function")) {
      var i = t.then;
      if (t instanceof c) {
        e._state = 3, e._value = t, H(e);
        return;
      } else if (typeof i == "function") {
        X(it(i, t), e);
        return;
      }
    }
    e._state = 1, e._value = t, H(e);
  } catch (n) {
    b(e, n);
  }
}
function b(e, t) {
  e._state = 2, e._value = t, H(e);
}
function H(e) {
  e._state === 2 && e._deferreds.length === 0 && c._immediateFn(function() {
    e._handled || c._unhandledRejectionFn(e._value);
  });
  for (var t = 0, i = e._deferreds.length; t < i; t++)
    D(e, e._deferreds[t]);
  e._deferreds = null;
}
function st(e, t, i) {
  this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.promise = i;
}
function X(e, t) {
  var i = !1;
  try {
    e(
      function(n) {
        i || (i = !0, B(t, n));
      },
      function(n) {
        i || (i = !0, b(t, n));
      }
    );
  } catch (n) {
    if (i)
      return;
    i = !0, b(t, n);
  }
}
c.prototype.catch = function(e) {
  return this.then(null, e);
};
c.prototype.then = function(e, t) {
  var i = new this.constructor(et);
  return D(this, new st(e, t, i)), i;
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
    var n = Array.prototype.slice.call(e);
    if (n.length === 0)
      return t([]);
    var s = n.length;
    function a(o, l) {
      try {
        if (l && (typeof l == "object" || typeof l == "function")) {
          var d = l.then;
          if (typeof d == "function") {
            d.call(
              l,
              function(h) {
                a(o, h);
              },
              i
            );
            return;
          }
        }
        n[o] = l, --s === 0 && t(n);
      } catch (h) {
        i(h);
      }
    }
    for (var r = 0; r < n.length; r++)
      a(r, n[r]);
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
    for (var n = 0, s = e.length; n < s; n++)
      e[n].then(t, i);
  });
};
c._immediateFn = typeof setImmediate == "function" && function(e) {
  setImmediate(e);
} || function(e) {
  tt(e, 0);
};
c._unhandledRejectionFn = function(t) {
  typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", t);
};
const w = /mobile/i.test(window.navigator.userAgent);
function v(e) {
  const t = (a) => a < 10 ? "0" + a : "" + a, i = Math.floor(e / 3600), n = Math.floor((e - i * 3600) / 60), s = Math.floor(e - i * 3600 - n * 60);
  return (i > 0 ? [i, n, s] : [n, s]).map(t).join(":");
}
function P(e) {
  let t = e.offsetLeft, i = e.offsetParent;
  const n = document.body.scrollLeft + document.documentElement.scrollLeft;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
    for (; i !== null; )
      t += i.offsetLeft, i = i.offsetParent;
  else
    for (; i !== null && i !== e; )
      t += i.offsetLeft, i = i.offsetParent;
  return t - n;
}
function _(e, t) {
  let i = e.offsetTop, n = e.offsetParent, s = 0;
  for (; n !== null; )
    i += n.offsetTop, n = n.offsetParent;
  return s = document.body.scrollTop + document.documentElement.scrollTop, t ? i : i - s;
}
const N = {
  set: (e, t) => {
    localStorage.setItem(e, t);
  },
  get: (e) => localStorage.getItem(e)
}, u = {
  dragStart: w ? "touchstart" : "mousedown",
  dragMove: w ? "touchmove" : "mousemove",
  dragEnd: w ? "touchend" : "mouseup"
};
function J(e) {
  function t(i) {
    for (let n = i.length - 1; n >= 0; n--) {
      const s = Math.floor(Math.random() * (n + 1)), a = i[s];
      i[s] = i[n], i[n] = a;
    }
    return i;
  }
  return t([...Array(e)].map(function(i, n) {
    return n;
  }));
}
const O = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', nt = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>', at = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>', ot = (e) => {
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
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function G(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var F = Object.create(window), lt = /["&'<>]/;
F.$escape = function(e) {
  return ct(K(e));
};
F.$each = function(e, t) {
  if (Array.isArray(e))
    for (var i = 0, n = e.length; i < n; i++)
      t(e[i], i);
  else
    for (var s in e)
      t(e[s], s);
};
function K(e) {
  return typeof e != "string" && (e == null ? e = "" : typeof e == "function" ? e = K(e.call(e)) : e = JSON.stringify(e)), e;
}
function ct(e) {
  var t = "" + e, i = lt.exec(t);
  if (!i)
    return e;
  var n = "", s = void 0, a = void 0, r = void 0;
  for (s = i.index, a = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    a !== s && (n += t.substring(a, s)), a = s + 1, n += r;
  }
  return a !== s ? n + t.substring(a, s) : n;
}
var ht = F, dt = ht;
const L = /* @__PURE__ */ G(dt);
function Q(e) {
  e = e || {};
  var t = "", i = L.$each, n = e.audio;
  e.$value, e.$index;
  var s = L.$escape, a = e.theme, r = e.index;
  return i(n, function(o, l) {
    t += ' <li><span class="aplayer-list-cur" style="background-color: ', t += s(o.theme || a), t += '"></span> <span class="aplayer-list-index">', t += s(l + r), t += '</span><span class="aplayer-list-title">', t += s(o.name), t += '</span><span class="aplayer-list-author">', t += s(o.artist), t += "</span></li> ";
  }), t;
}
function ut(e) {
  e = e || {};
  var t = "", i = e.options, n = e.cover, s = L.$escape;
  e.icons;
  var a = function(o) {
    return t += o, t;
  }, r = e.getObject;
  return e.theme, e.audio, e.index, i.fixed ? (t += ' <div class="aplayer-list', i.listFolded && (t += " aplayer-list-hide"), t += '" ', i.listMaxHeight && (t += ' style="max-height: ', t += s(i.listMaxHeight), t += '" '), t += "><ol ", i.listMaxHeight && (t += ' style="max-height: ', t += s(i.listMaxHeight), t += '" '), t += "> ", a(require("./list-item.art")(r({
    theme: i.theme,
    audio: i.audio,
    index: 1
  }))), t += ' </ol></div><div class="aplayer-body"><div class="aplayer-pic" style="', n && (t += "background-image:url(&quot;", t += s(n), t += "&quot;);"), t += "background-color: ", t += s(i.theme), t += '"><div class="aplayer-button aplayer-play">', t += p, t += '</div></div><div class="aplayer-info" style="display:none"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ', t += s(i.theme), t += '"><span class="aplayer-thumb" style="background: ', t += s(i.theme), t += '"><span class="aplayer-loading-icon">', t += $, t += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', t += x, t += ' </span><span class="aplayer-icon aplayer-icon-play"> ', t += p, t += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', t += x, t += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', t += A, t += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', t += s(i.theme), t += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', i.order === "list" ? t += z : i.order === "random" && (t += O), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', i.loop === "one" ? t += S : i.loop === "all" ? t += T : i.loop === "none" && (t += k), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', t += R, t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', t += Y, t += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', t += W, t += '</button></div></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div> ') : (t += ' <div class="aplayer-body"><div class="aplayer-pic" style="', n && (t += "background-image:url(&quot;", t += s(n), t += "&quot;);"), t += "background-color: ", t += s(i.theme), t += '"><div class="aplayer-button aplayer-play">', t += p, t += '</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ', t += s(i.theme), t += '"><span class="aplayer-thumb" style="background: ', t += s(i.theme), t += '"><span class="aplayer-loading-icon">', t += $, t += '</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ', t += x, t += ' </span><span class="aplayer-icon aplayer-icon-play"> ', t += p, t += ' </span><span class="aplayer-icon aplayer-icon-forward"> ', t += x, t += ' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ', t += A, t += ' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ', t += s(i.theme), t += '"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ', i.order === "list" ? t += z : i.order === "random" && (t += O), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ', i.loop === "one" ? t += S : i.loop === "all" ? t += T : i.loop === "none" && (t += k), t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ', t += R, t += ' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ', t += Y, t += ' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">', t += W, t += '</button></div></div><div class="aplayer-list', i.listFolded && (t += " aplayer-list-hide"), t += '" ', i.listMaxHeight && (t += ' style="max-height: ', t += s(i.listMaxHeight), t += '" '), t += "><ol ", i.listMaxHeight && (t += ' style="max-height: ', t += s(i.listMaxHeight), t += '" '), t += "> ", a(Q(r({
    theme: i.theme,
    audio: i.audio,
    index: 1
  }))), t += " </ol></div> "), t;
}
function pt(e, t, i) {
  let n = "";
  t.audio.length && (t.order === "random" ? n = t.audio[i[0]].cover : n = t.audio[0].cover), e.innerHTML = ut({
    options: t,
    cover: n,
    getObject: (a) => a
  });
  const s = (a) => e.querySelector(a);
  return {
    lrc: s(".aplayer-lrc-contents"),
    lrcWrap: s(".aplayer-lrc"),
    ptime: s(".aplayer-ptime"),
    info: s(".aplayer-info"),
    time: s(".aplayer-time"),
    barWrap: s(".aplayer-bar-wrap"),
    button: s(".aplayer-button"),
    body: s(".aplayer-body"),
    list: s(".aplayer-list"),
    listOl: s(".aplayer-list ol"),
    listCurs: e.querySelectorAll(".aplayer-list-cur"),
    played: s(".aplayer-played"),
    loaded: s(".aplayer-loaded"),
    thumb: s(".aplayer-thumb"),
    volume: s(".aplayer-volume"),
    volumeBar: s(".aplayer-volume-bar"),
    volumeButton: s(".aplayer-time button"),
    volumeBarWrap: s(".aplayer-volume-bar-wrap"),
    loop: s(".aplayer-icon-loop"),
    order: s(".aplayer-icon-order"),
    menu: s(".aplayer-icon-menu"),
    pic: s(".aplayer-pic"),
    title: s(".aplayer-title"),
    author: s(".aplayer-author"),
    dtime: s(".aplayer-dtime"),
    notice: s(".aplayer-notice"),
    miniSwitcher: s(".aplayer-miniswitcher"),
    skipBackButton: s(".aplayer-icon-back"),
    skipForwardButton: s(".aplayer-icon-forward"),
    skipPlayButton: s(".aplayer-icon-play"),
    lrcButton: s(".aplayer-icon-lrc")
  };
}
class mt {
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
  set(t, i, n) {
    i = Math.max(i, 0), i = Math.min(i, 1), this.elements[t].style[n] = i * 100 + "%";
  }
  get(t, i) {
    return parseFloat(this.elements[t].style[i]) / 100;
  }
}
class vt {
  constructor(t) {
    this.storageName = t.options.storageName, this.data = JSON.parse(N.get(this.storageName)), this.data || (this.data = {}), this.data.volume = this.data.volume || t.options.volume;
  }
  get(t) {
    return this.data[t];
  }
  set(t, i) {
    this.data[t] = i, N.set(this.storageName, JSON.stringify(this.data));
  }
}
function U(e) {
  e = e || {};
  var t = "", i = L.$each, n = e.lyrics;
  e.$value, e.$index;
  var s = L.$escape;
  return i(n, function(a, r) {
    t += " <p ", r === 0 && (t += ' class="aplayer-lrc-current" '), t += ">", t += s(a[1]), t += "</p> ";
  }), t;
}
class ft {
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
          t === this.player.list.index && i.readyState === 4 && (i.status >= 200 && i.status < 300 || i.status === 304 ? this.parsed[t] = this.parse(i.responseText) : (this.player.notice(`LRC file request fails: status ${i.status}`), this.parsed[t] = [["00:00", "Not available"]]), this.container.innerHTML = U({
            lyrics: this.parsed[t]
          }), this.update(0), this.current = this.parsed[t]);
        };
        const n = this.player.list.audios[t].lrc;
        i.open("get", n, !0), i.send(null);
      }
    this.container.innerHTML = U({
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
      t = t.replace(/([^\]^\n])\[/g, (a, r) => r + `
[`);
      const i = t.split(`
`);
      let n = [];
      const s = i.length;
      for (let a = 0; a < s; a++) {
        const r = i[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), o = i[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (r) {
          const l = r.length;
          for (let d = 0; d < l; d++) {
            const h = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[d]), f = h[1] * 60, y = parseInt(h[2]), q = h[4] ? parseInt(h[4]) / ((h[4] + "").length === 2 ? 100 : 1e3) : 0, E = f + y + q;
            n.push([E, o]);
          }
        }
      }
      return n = n.filter((a) => a[1]), n.sort((a, r) => a[0] - r[0]), n;
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
class yt {
  constructor(t) {
    gt(t), wt(t), Lt(t), xt(t), Mt(t), w || bt(t), Tt(t), kt(t), qt(t);
  }
}
function gt(e) {
  e.template.pic.addEventListener("click", () => {
    e.toggle();
  });
}
function wt(e) {
  const t = (n) => {
    let s = ((n.clientX || n.changedTouches[0].clientX) - P(e.template.barWrap)) / e.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), e.bar.set("played", s, "width"), e.lrc && e.lrc.update(s * e.duration), e.template.ptime.innerHTML = v(s * e.duration);
  }, i = (n) => {
    document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, t);
    let s = ((n.clientX || n.changedTouches[0].clientX) - P(e.template.barWrap)) / e.template.barWrap.clientWidth;
    s = Math.max(s, 0), s = Math.min(s, 1), e.bar.set("played", s, "width"), e.seek(e.bar.get("played", "width") * e.duration), e.disableTimeupdate = !1;
  };
  e.template.barWrap.addEventListener(u.dragStart, () => {
    e.disableTimeupdate = !0, document.addEventListener(u.dragMove, t), document.addEventListener(u.dragEnd, i);
  });
}
function bt(e) {
  e.template.volumeButton.addEventListener("click", () => {
    e.audio.muted ? (e.audio.muted = !1, e.switchVolumeIcon(), e.bar.set("volume", e.volume(), "height")) : (e.audio.muted = !0, e.switchVolumeIcon(), e.bar.set("volume", 0, "height"));
  });
  const t = (n) => {
    let s = 1 - ((n.clientY || n.changedTouches[0].clientY) - _(e.template.volumeBar, e.options.fixed)) / e.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), e.volume(s);
  }, i = (n) => {
    e.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(u.dragEnd, i), document.removeEventListener(u.dragMove, t);
    let s = 1 - ((n.clientY || n.changedTouches[0].clientY) - _(e.template.volumeBar, e.options.fixed)) / e.template.volumeBar.clientHeight;
    s = Math.max(s, 0), s = Math.min(s, 1), e.volume(s);
  };
  e.template.volumeBarWrap.addEventListener(u.dragStart, () => {
    e.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(u.dragMove, t), document.addEventListener(u.dragEnd, i);
  });
}
function Lt(e) {
  e.template.order.addEventListener("click", () => {
    e.options.order === "list" ? (e.options.order = "random", e.template.order.innerHTML = O) : e.options.order === "random" && (e.options.order = "list", e.template.order.innerHTML = z);
  });
}
function xt(e) {
  e.template.loop.addEventListener("click", () => {
    e.list.audios.length > 1 ? e.options.loop === "one" ? (e.options.loop = "none", e.template.loop.innerHTML = k) : e.options.loop === "none" ? (e.options.loop = "all", e.template.loop.innerHTML = T) : e.options.loop === "all" && (e.options.loop = "one", e.template.loop.innerHTML = S) : e.options.loop === "one" || e.options.loop === "all" ? (e.options.loop = "none", e.template.loop.innerHTML = k) : e.options.loop === "none" && (e.options.loop = "all", e.template.loop.innerHTML = T);
  });
}
function Mt(e) {
  e.template.menu.addEventListener("click", () => {
    e.list.toggle();
  });
}
function Tt(e) {
  e.template.miniSwitcher.addEventListener("click", () => {
    e.setMode(e.mode === "mini" ? "normal" : "mini");
  });
}
function kt(e) {
  e.template.skipBackButton.addEventListener("click", () => {
    e.skipBack();
  }), e.template.skipForwardButton.addEventListener("click", () => {
    e.skipForward();
  }), e.template.skipPlayButton.addEventListener("click", () => {
    e.toggle();
  });
}
function qt(e) {
  e.template.lrcButton.addEventListener("click", () => {
    e.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (e.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), e.lrc && e.lrc.show()) : (e.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), e.lrc && e.lrc.hide());
  });
}
class Et {
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
    let t = 0, i = 0, n = !1;
    this.loadingChecker = setInterval(() => {
      this.enableloadingChecker && (i = this.player.audio.currentTime, !n && i === t && !this.player.audio.paused && (this.player.container.classList.add("aplayer-loading"), n = !0), n && i > t && !this.player.audio.paused && (this.player.container.classList.remove("aplayer-loading"), n = !1), t = i);
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
const Bt = [
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
], M = [
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
class Ht {
  constructor() {
    this.events = {};
  }
  on(t, i) {
    this.type(t) && typeof i == "function" && (this.events[t] || (this.events[t] = []), this.events[t].push(i));
  }
  trigger(t, i) {
    if (this.events[t] && this.events[t].length)
      for (let n = 0; n < this.events[t].length; n++)
        this.events[t][n](i);
  }
  type(t) {
    return Bt.indexOf(t) !== -1 ? "player" : M.indexOf(t) !== -1 ? "audio" : (console.error(`Unknown event name: ${t}`), null);
  }
}
var Z = { exports: {} };
(function(e, t) {
  (function(i, n) {
    e.exports = n();
  })(rt, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var i = function(o, l) {
        return o.nodeName === "HTML" ? -l : o.getBoundingClientRect().top + l;
      }, n = function(o) {
        return o < 0.5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1;
      }, s = function(o, l, d, h) {
        return d > h ? l : o + (l - o) * n(d / h);
      }, a = function(o, l, d, h) {
        l = l || 500, h = h || window;
        var f = h.scrollTop || window.pageYOffset;
        if (typeof o == "number")
          var y = parseInt(o);
        else
          var y = i(o, f);
        var q = Date.now(), E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(g) {
          window.setTimeout(g, 15);
        }, I = function() {
          var g = Date.now() - q;
          h !== window ? h.scrollTop = s(f, y, g, l) : window.scroll(0, s(f, y, g, l)), g > l ? typeof d == "function" && d(o) : E(I);
        };
        I();
      }, r = function(o) {
        if (!o.defaultPrevented) {
          o.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var l = document.getElementById(this.hash.substring(1));
          if (!l)
            return;
          a(l, 500, function(d) {
            location.replace("#" + d.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var o = document.querySelectorAll('a[href^="#"]:not([href="#"])'), l, d = o.length; l = o[--d]; )
          l.addEventListener("click", r, !1);
      }), a;
    }
  });
})(Z);
var Ot = Z.exports;
const At = /* @__PURE__ */ G(Ot);
class St {
  constructor(t) {
    this.player = t, this.index = 0, this.audios = this.player.options.audio, this.bindEvents();
  }
  bindEvents() {
    this.player.template.list.addEventListener("click", (t) => {
      let i;
      t.target.tagName.toUpperCase() === "LI" ? i = t.target : i = t.target.parentElement;
      const n = parseInt(i.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
      n !== this.index ? (this.switch(n), this.player.play()) : this.player.toggle();
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
    }), Object.prototype.toString.call(t) !== "[object Array]" && (t = [t]), t.map((s) => (s.name = s.name || s.title || "Audio name", s.artist = s.artist || s.author || "Audio artist", s.cover = s.cover || s.pic, s.type = s.type || "normal", s));
    const i = !(this.audios.length > 1), n = this.audios.length === 0;
    this.player.template.listOl.innerHTML += Q({
      theme: this.player.options.theme,
      audio: t,
      index: this.audios.length + 1
    }), this.audios = this.audios.concat(t), i && this.audios.length > 1 && this.player.container.classList.add("aplayer-withlist"), this.player.randomOrder = J(this.audios.length), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur"), this.player.template.listCurs[this.audios.length - 1].style.backgroundColor = t.theme || this.player.options.theme, n && (this.player.options.order === "random" ? this.switch(this.player.randomOrder[0]) : this.switch(0));
  }
  remove(t) {
    if (this.player.events.trigger("listremove", {
      index: t
    }), this.audios[t])
      if (this.audios.length > 1) {
        const i = this.player.container.querySelectorAll(".aplayer-list li");
        i[t].remove(), this.audios.splice(t, 1), this.player.lrc && this.player.lrc.remove(t), t === this.index && (this.audios[t] ? this.switch(t) : this.switch(t - 1)), this.index > t && this.index--;
        for (let n = t; n < i.length; n++)
          i[n].getElementsByClassName("aplayer-list-index")[0].textContent = n;
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
      const n = this.player.container.getElementsByClassName("aplayer-list-light")[0];
      n && n.classList.remove("aplayer-list-light"), this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"), At(this.index * 33, 500, null, this.player.template.listOl), this.player.setAudio(i), this.player.lrc && this.player.lrc.switch(this.index), this.player.lrc && this.player.lrc.update(0), this.player.duration !== 1 && (this.player.template.dtime.innerHTML = v(this.player.duration));
    }
  }
  clear() {
    this.player.events.trigger("listclear"), this.index = 0, this.player.container.classList.remove("aplayer-withlist"), this.player.pause(), this.audios = [], this.player.lrc && this.player.lrc.clear(), this.player.audio.src = "", this.player.template.listOl.innerHTML = "", this.player.template.pic.style.backgroundImage = "", this.player.theme(this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = "No audio", this.player.template.author.innerHTML = "", this.player.bar.set("loaded", 0, "width"), this.player.template.dtime.innerHTML = v(0);
  }
}
const m = [];
function zt(e) {
  e.audio = document.createElement("audio"), e.audio.preload = e.options.preload;
  for (let t = 0; t < M.length; t++)
    e.audio.addEventListener(M[t], (i) => {
      e.events.trigger(M[t], i);
    });
  e.volume(e.storage.get("volume"), !0);
}
function Ct(e) {
  e.on("play", () => {
    e.paused && V(e);
  }), e.on("pause", () => {
    e.paused || C(e);
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
function V(e) {
  if (e.paused && (e.paused = !1, e.template.button.classList.remove("aplayer-play"), e.template.button.classList.add("aplayer-pause"), e.template.button.innerHTML = "", setTimeout(() => {
    e.template.button.innerHTML = j;
  }, 100), e.template.skipPlayButton.innerHTML = j), e.timer.enable("loading"), e.options.mutex)
    for (let t = 0; t < m.length; t++)
      e !== m[t] && m[t].pause();
}
function C(e) {
  e.paused || (e.paused = !0, e.template.button.classList.remove("aplayer-pause"), e.template.button.classList.add("aplayer-play"), e.template.button.innerHTML = "", setTimeout(() => {
    e.template.button.innerHTML = p;
  }, 100), e.template.skipPlayButton.innerHTML = p), e.container.classList.remove("aplayer-loading"), e.timer.disable("loading");
}
class Ft {
  /**
   * APlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  constructor(t) {
    if (this.options = ot(t), this.container = this.options.container, this.paused = !0, this.playedPromise = c.resolve(), this.mode = "normal", this.randomOrder = J(this.options.audio.length), this.container.classList.add("aplayer"), this.options.lrcType && !this.options.fixed && this.container.classList.add("aplayer-withlrc"), this.options.audio.length > 1 && this.container.classList.add("aplayer-withlist"), w && this.container.classList.add("aplayer-mobile"), this.arrow = this.container.offsetWidth <= 300, this.arrow && this.container.classList.add("aplayer-arrow"), this.container = this.options.container, this.options.lrcType === 2 || this.options.lrcType === !0) {
      const i = this.container.getElementsByClassName("aplayer-lrc-content");
      for (let n = 0; n < i.length; n++)
        this.options.audio[n] && (this.options.audio[n].lrc = i[n].innerHTML);
    }
    this.template = pt(this.container, this.options, this.randomOrder), this.options.fixed && (this.container.classList.add("aplayer-fixed"), this.template.body.style.width = this.template.body.offsetWidth - 18 + "px"), this.options.mini && (this.setMode("mini"), this.template.info.style.display = "block"), this.template.info.offsetWidth < 200 && this.template.time.classList.add("aplayer-time-narrow"), this.options.lrcType && (this.lrc = new ft({
      container: this.template.lrc,
      async: this.options.lrcType === 3,
      player: this
    })), this.events = new Ht(), this.storage = new vt(this), this.bar = new mt(this.template), this.controller = new yt(this), this.timer = new Et(this), this.list = new St(this), zt(this), Ct(this), this.options.order === "random" ? this.list.switch(this.randomOrder[0]) : this.list.switch(0), this.options.autoplay && this.play(), m.push(this);
  }
  setAudio(t) {
    this.hls && (this.hls.destroy(), this.hls = null);
    let i = t.type;
    this.options.customAudioType && this.options.customAudioType[i] ? Object.prototype.toString.call(this.options.customAudioType[i]) === "[object Function]" ? this.options.customAudioType[i](this.audio, t, this) : console.error(`Illegal customType: ${i}`) : ((!i || i === "auto") && (/m3u8(#|\?|$)/i.exec(t.url) ? i = "hls" : i = "normal"), i === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(t.url), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL") ? this.audio.src = t.url : this.notice("Error: HLS is not supported.") : i === "normal" && (this.audio.src = t.url)), this.seek(0), this.paused || this.audio.play();
  }
  theme(t = this.list.audios[this.list.index].theme || this.options.theme, i = this.list.index, n = !0) {
    n && this.list.audios[i] && (this.list.audios[i].theme = t), this.template.listCurs[i] && (this.template.listCurs[i].style.backgroundColor = t), i === this.list.index && (this.template.pic.style.backgroundColor = t, this.template.played.style.background = t, this.template.thumb.style.background = t, this.template.volume.style.background = t);
  }
  seek(t) {
    t = Math.max(t, 0), t = Math.min(t, this.duration), this.audio.currentTime = t, this.bar.set("played", t / this.duration, "width"), this.template.ptime.innerHTML = v(t);
  }
  get duration() {
    return isNaN(this.audio.duration) ? 0 : this.audio.duration;
  }
  play() {
    V(this);
    const t = this.audio.play();
    t && t.catch((i) => {
      console.warn(i), i.name === "NotAllowedError" && C(this);
    });
  }
  pause() {
    C(this), this.audio.pause();
  }
  switchVolumeIcon() {
    this.volume() >= 0.95 ? this.template.volumeButton.innerHTML = nt : this.volume() > 0 ? this.template.volumeButton.innerHTML = A : this.template.volumeButton.innerHTML = at;
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
  notice(t, i = 2e3, n = 0.8) {
    this.template.notice.innerHTML = t, this.template.notice.style.opacity = n, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("noticeshow", {
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
  Ft as default
};
