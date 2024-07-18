/*! For license information please see main.78e11225.js.LICENSE.txt */
(() => {
  var e = {
      5513: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => oe });
        var r = (function () {
            function e(e) {
              var t = this;
              (this._insertTag = function (e) {
                var n;
                (n =
                  0 === t.tags.length
                    ? t.insertionPoint
                      ? t.insertionPoint.nextSibling
                      : t.prepend
                        ? t.container.firstChild
                        : t.before
                    : t.tags[t.tags.length - 1].nextSibling),
                  t.container.insertBefore(e, n),
                  t.tags.push(e);
              }),
                (this.isSpeedy = void 0 === e.speedy || e.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = e.nonce),
                (this.key = e.key),
                (this.container = e.container),
                (this.prepend = e.prepend),
                (this.insertionPoint = e.insertionPoint),
                (this.before = null);
            }
            var t = e.prototype;
            return (
              (t.hydrate = function (e) {
                e.forEach(this._insertTag);
              }),
              (t.insert = function (e) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                  this._insertTag(
                    (function (e) {
                      var t = document.createElement('style');
                      return (
                        t.setAttribute('data-emotion', e.key),
                        void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                        t.appendChild(document.createTextNode('')),
                        t.setAttribute('data-s', ''),
                        t
                      );
                    })(this),
                  );
                var t = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                  var n = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                  })(t);
                  try {
                    n.insertRule(e, n.cssRules.length);
                  } catch (r) {
                    0;
                  }
                } else t.appendChild(document.createTextNode(e));
                this.ctr++;
              }),
              (t.flush = function () {
                this.tags.forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
                  (this.tags = []),
                  (this.ctr = 0);
              }),
              e
            );
          })(),
          o = Math.abs,
          a = String.fromCharCode,
          i = Object.assign;
        function l(e) {
          return e.trim();
        }
        function s(e, t, n) {
          return e.replace(t, n);
        }
        function u(e, t) {
          return e.indexOf(t);
        }
        function c(e, t) {
          return 0 | e.charCodeAt(t);
        }
        function f(e, t, n) {
          return e.slice(t, n);
        }
        function d(e) {
          return e.length;
        }
        function p(e) {
          return e.length;
        }
        function h(e, t) {
          return t.push(e), e;
        }
        var m = 1,
          g = 1,
          y = 0,
          v = 0,
          b = 0,
          x = '';
        function w(e, t, n, r, o, a, i) {
          return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: o,
            children: a,
            line: m,
            column: g,
            length: i,
            return: '',
          };
        }
        function k(e, t) {
          return i(w('', null, null, '', null, null, 0), e, { length: -e.length }, t);
        }
        function S() {
          return (b = v > 0 ? c(x, --v) : 0), g--, 10 === b && ((g = 1), m--), b;
        }
        function C() {
          return (b = v < y ? c(x, v++) : 0), g++, 10 === b && ((g = 1), m++), b;
        }
        function E() {
          return c(x, v);
        }
        function P() {
          return v;
        }
        function _(e, t) {
          return f(x, e, t);
        }
        function A(e) {
          switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function T(e) {
          return (m = g = 1), (y = d((x = e))), (v = 0), [];
        }
        function R(e) {
          return (x = ''), e;
        }
        function N(e) {
          return l(_(v - 1, z(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
        }
        function M(e) {
          for (; (b = E()) && b < 33; ) C();
          return A(e) > 2 || A(b) > 3 ? '' : ' ';
        }
        function O(e, t) {
          for (; --t && C() && !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97)); );
          return _(e, P() + (t < 6 && 32 == E() && 32 == C()));
        }
        function z(e) {
          for (; C(); )
            switch (b) {
              case e:
                return v;
              case 34:
              case 39:
                34 !== e && 39 !== e && z(b);
                break;
              case 40:
                41 === e && z(e);
                break;
              case 92:
                C();
            }
          return v;
        }
        function L(e, t) {
          for (; C() && e + b !== 57 && (e + b !== 84 || 47 !== E()); );
          return '/*' + _(t, v - 1) + '*' + a(47 === e ? e : C());
        }
        function j(e) {
          for (; !A(E()); ) C();
          return _(e, v);
        }
        var I = '-ms-',
          U = '-moz-',
          F = '-webkit-',
          B = 'comm',
          D = 'rule',
          W = 'decl',
          $ = '@keyframes';
        function H(e, t) {
          for (var n = '', r = p(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
          return n;
        }
        function K(e, t, n, r) {
          switch (e.type) {
            case '@layer':
              if (e.children.length) break;
            case '@import':
            case W:
              return (e.return = e.return || e.value);
            case B:
              return '';
            case $:
              return (e.return = e.value + '{' + H(e.children, r) + '}');
            case D:
              e.value = e.props.join(',');
          }
          return d((n = H(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
        }
        function V(e) {
          return R(q('', null, null, null, [''], (e = T(e)), 0, [0], e));
        }
        function q(e, t, n, r, o, i, l, f, p) {
          for (
            var m = 0,
              g = 0,
              y = l,
              v = 0,
              b = 0,
              x = 0,
              w = 1,
              k = 1,
              _ = 1,
              A = 0,
              T = '',
              R = o,
              z = i,
              I = r,
              U = T;
            k;

          )
            switch (((x = A), (A = C()))) {
              case 40:
                if (108 != x && 58 == c(U, y - 1)) {
                  -1 != u((U += s(N(A), '&', '&\f')), '&\f') && (_ = -1);
                  break;
                }
              case 34:
              case 39:
              case 91:
                U += N(A);
                break;
              case 9:
              case 10:
              case 13:
              case 32:
                U += M(x);
                break;
              case 92:
                U += O(P() - 1, 7);
                continue;
              case 47:
                switch (E()) {
                  case 42:
                  case 47:
                    h(Y(L(C(), P()), t, n), p);
                    break;
                  default:
                    U += '/';
                }
                break;
              case 123 * w:
                f[m++] = d(U) * _;
              case 125 * w:
              case 59:
              case 0:
                switch (A) {
                  case 0:
                  case 125:
                    k = 0;
                  case 59 + g:
                    -1 == _ && (U = s(U, /\f/g, '')),
                      b > 0 &&
                        d(U) - y &&
                        h(b > 32 ? G(U + ';', r, n, y - 1) : G(s(U, ' ', '') + ';', r, n, y - 2), p);
                    break;
                  case 59:
                    U += ';';
                  default:
                    if ((h((I = Q(U, t, n, m, g, o, f, T, (R = []), (z = []), y)), i), 123 === A))
                      if (0 === g) q(U, t, I, I, R, i, y, f, z);
                      else
                        switch (99 === v && 110 === c(U, 3) ? 100 : v) {
                          case 100:
                          case 108:
                          case 109:
                          case 115:
                            q(
                              e,
                              I,
                              I,
                              r && h(Q(e, I, I, 0, 0, o, f, T, o, (R = []), y), z),
                              o,
                              z,
                              y,
                              f,
                              r ? R : z,
                            );
                            break;
                          default:
                            q(U, I, I, I, [''], z, 0, f, z);
                        }
                }
                (m = g = b = 0), (w = _ = 1), (T = U = ''), (y = l);
                break;
              case 58:
                (y = 1 + d(U)), (b = x);
              default:
                if (w < 1)
                  if (123 == A) --w;
                  else if (125 == A && 0 == w++ && 125 == S()) continue;
                switch (((U += a(A)), A * w)) {
                  case 38:
                    _ = g > 0 ? 1 : ((U += '\f'), -1);
                    break;
                  case 44:
                    (f[m++] = (d(U) - 1) * _), (_ = 1);
                    break;
                  case 64:
                    45 === E() && (U += N(C())), (v = E()), (g = y = d((T = U += j(P())))), A++;
                    break;
                  case 45:
                    45 === x && 2 == d(U) && (w = 0);
                }
            }
          return i;
        }
        function Q(e, t, n, r, a, i, u, c, d, h, m) {
          for (var g = a - 1, y = 0 === a ? i : [''], v = p(y), b = 0, x = 0, k = 0; b < r; ++b)
            for (var S = 0, C = f(e, g + 1, (g = o((x = u[b])))), E = e; S < v; ++S)
              (E = l(x > 0 ? y[S] + ' ' + C : s(C, /&\f/g, y[S]))) && (d[k++] = E);
          return w(e, t, n, 0 === a ? D : c, d, h, m);
        }
        function Y(e, t, n) {
          return w(e, t, n, B, a(b), f(e, 2, -2), 0);
        }
        function G(e, t, n, r) {
          return w(e, t, n, W, f(e, 0, r), f(e, r + 1, -1), r);
        }
        var X = function (e, t, n) {
            for (var r = 0, o = 0; (r = o), (o = E()), 38 === r && 12 === o && (t[n] = 1), !A(o); ) C();
            return _(e, v);
          },
          J = function (e, t) {
            return R(
              (function (e, t) {
                var n = -1,
                  r = 44;
                do {
                  switch (A(r)) {
                    case 0:
                      38 === r && 12 === E() && (t[n] = 1), (e[n] += X(v - 1, t, n));
                      break;
                    case 2:
                      e[n] += N(r);
                      break;
                    case 4:
                      if (44 === r) {
                        (e[++n] = 58 === E() ? '&\f' : ''), (t[n] = e[n].length);
                        break;
                      }
                    default:
                      e[n] += a(r);
                  }
                } while ((r = C()));
                return e;
              })(T(e), t),
            );
          },
          Z = new WeakMap(),
          ee = function (e) {
            if ('rule' === e.type && e.parent && !(e.length < 1)) {
              for (
                var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                'rule' !== n.type;

              )
                if (!(n = n.parent)) return;
              if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Z.get(n)) && !r) {
                Z.set(e, !0);
                for (var o = [], a = J(t, o), i = n.props, l = 0, s = 0; l < a.length; l++)
                  for (var u = 0; u < i.length; u++, s++)
                    e.props[s] = o[l] ? a[l].replace(/&\f/g, i[u]) : i[u] + ' ' + a[l];
              }
            }
          },
          te = function (e) {
            if ('decl' === e.type) {
              var t = e.value;
              108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && ((e.return = ''), (e.value = ''));
            }
          };
        function ne(e, t) {
          switch (
            (function (e, t) {
              return 45 ^ c(e, 0)
                ? (((((((t << 2) ^ c(e, 0)) << 2) ^ c(e, 1)) << 2) ^ c(e, 2)) << 2) ^ c(e, 3)
                : 0;
            })(e, t)
          ) {
            case 5103:
              return F + 'print-' + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return F + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return F + e + U + e + I + e + e;
            case 6828:
            case 4268:
              return F + e + I + e + e;
            case 6165:
              return F + e + I + 'flex-' + e + e;
            case 5187:
              return F + e + s(e, /(\w+).+(:[^]+)/, F + 'box-$1$2' + I + 'flex-$1$2') + e;
            case 5443:
              return F + e + I + 'flex-item-' + s(e, /flex-|-self/, '') + e;
            case 4675:
              return F + e + I + 'flex-line-pack' + s(e, /align-content|flex-|-self/, '') + e;
            case 5548:
              return F + e + I + s(e, 'shrink', 'negative') + e;
            case 5292:
              return F + e + I + s(e, 'basis', 'preferred-size') + e;
            case 6060:
              return F + 'box-' + s(e, '-grow', '') + F + e + I + s(e, 'grow', 'positive') + e;
            case 4554:
              return F + s(e, /([^-])(transform)/g, '$1' + F + '$2') + e;
            case 6187:
              return s(s(s(e, /(zoom-|grab)/, F + '$1'), /(image-set)/, F + '$1'), e, '') + e;
            case 5495:
            case 3959:
              return s(e, /(image-set\([^]*)/, F + '$1$`$1');
            case 4968:
              return (
                s(
                  s(e, /(.+:)(flex-)?(.*)/, F + 'box-pack:$3' + I + 'flex-pack:$3'),
                  /s.+-b[^;]+/,
                  'justify',
                ) +
                F +
                e +
                e
              );
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return s(e, /(.+)-inline(.+)/, F + '$1$2') + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (d(e) - 1 - t > 6)
                switch (c(e, t + 1)) {
                  case 109:
                    if (45 !== c(e, t + 4)) break;
                  case 102:
                    return (
                      s(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        '$1' + F + '$2-$3$1' + U + (108 == c(e, t + 3) ? '$3' : '$2-$3'),
                      ) + e
                    );
                  case 115:
                    return ~u(e, 'stretch') ? ne(s(e, 'stretch', 'fill-available'), t) + e : e;
                }
              break;
            case 4949:
              if (115 !== c(e, t + 1)) break;
            case 6444:
              switch (c(e, d(e) - 3 - (~u(e, '!important') && 10))) {
                case 107:
                  return s(e, ':', ':' + F) + e;
                case 101:
                  return (
                    s(
                      e,
                      /(.+:)([^;!]+)(;|!.+)?/,
                      '$1' +
                        F +
                        (45 === c(e, 14) ? 'inline-' : '') +
                        'box$3$1' +
                        F +
                        '$2$3$1' +
                        I +
                        '$2box$3',
                    ) + e
                  );
              }
              break;
            case 5936:
              switch (c(e, t + 11)) {
                case 114:
                  return F + e + I + s(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
                case 108:
                  return F + e + I + s(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
                case 45:
                  return F + e + I + s(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
              }
              return F + e + I + e + e;
          }
          return e;
        }
        var re = [
            function (e, t, n, r) {
              if (e.length > -1 && !e.return)
                switch (e.type) {
                  case W:
                    e.return = ne(e.value, e.length);
                    break;
                  case $:
                    return H([k(e, { value: s(e.value, '@', '@' + F) })], r);
                  case D:
                    if (e.length)
                      return (function (e, t) {
                        return e.map(t).join('');
                      })(e.props, function (t) {
                        switch (
                          (function (e, t) {
                            return (e = t.exec(e)) ? e[0] : e;
                          })(t, /(::plac\w+|:read-\w+)/)
                        ) {
                          case ':read-only':
                          case ':read-write':
                            return H([k(e, { props: [s(t, /:(read-\w+)/, ':-moz-$1')] })], r);
                          case '::placeholder':
                            return H(
                              [
                                k(e, { props: [s(t, /:(plac\w+)/, ':' + F + 'input-$1')] }),
                                k(e, { props: [s(t, /:(plac\w+)/, ':-moz-$1')] }),
                                k(e, { props: [s(t, /:(plac\w+)/, I + 'input-$1')] }),
                              ],
                              r,
                            );
                        }
                        return '';
                      });
                }
            },
          ],
          oe = function (e) {
            var t = e.key;
            if ('css' === t) {
              var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
              Array.prototype.forEach.call(n, function (e) {
                -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                  (document.head.appendChild(e), e.setAttribute('data-s', ''));
              });
            }
            var o = e.stylisPlugins || re;
            var a,
              i,
              l = {},
              s = [];
            (a = e.container || document.head),
              Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
                function (e) {
                  for (var t = e.getAttribute('data-emotion').split(' '), n = 1; n < t.length; n++)
                    l[t[n]] = !0;
                  s.push(e);
                },
              );
            var u,
              c,
              f = [
                K,
                ((c = function (e) {
                  u.insert(e);
                }),
                function (e) {
                  e.root || ((e = e.return) && c(e));
                }),
              ],
              d = (function (e) {
                var t = p(e);
                return function (n, r, o, a) {
                  for (var i = '', l = 0; l < t; l++) i += e[l](n, r, o, a) || '';
                  return i;
                };
              })([ee, te].concat(o, f));
            i = function (e, t, n, r) {
              (u = n), H(V(e ? e + '{' + t.styles + '}' : t.styles), d), r && (h.inserted[t.name] = !0);
            };
            var h = {
              key: t,
              sheet: new r({
                key: t,
                container: a,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
                insertionPoint: e.insertionPoint,
              }),
              nonce: e.nonce,
              inserted: l,
              registered: {},
              insert: i,
            };
            return h.sheet.hydrate(s), h;
          };
      },
      918: (e, t, n) => {
        'use strict';
        function r(e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        }
        n.d(t, { A: () => r });
      },
      5756: (e, t, n) => {
        'use strict';
        n.d(t, { C: () => l, T: () => u, i: () => a, w: () => s });
        var r = n(5043),
          o = n(5513),
          a = (n(2830), n(9436), !0),
          i = r.createContext('undefined' !== typeof HTMLElement ? (0, o.A)({ key: 'css' }) : null);
        var l = i.Provider,
          s = function (e) {
            return (0, r.forwardRef)(function (t, n) {
              var o = (0, r.useContext)(i);
              return e(t, o, n);
            });
          };
        a ||
          (s = function (e) {
            return function (t) {
              var n = (0, r.useContext)(i);
              return null === n
                ? ((n = (0, o.A)({ key: 'css' })), r.createElement(i.Provider, { value: n }, e(t, n)))
                : e(t, n);
            };
          });
        var u = r.createContext({});
      },
      3290: (e, t, n) => {
        'use strict';
        n.d(t, { AH: () => u, i7: () => c, mL: () => s });
        var r = n(5756),
          o = n(5043),
          a = n(1722),
          i = n(9436),
          l = n(2830),
          s =
            (n(5513),
            n(219),
            (0, r.w)(function (e, t) {
              var n = e.styles,
                s = (0, l.J)([n], void 0, o.useContext(r.T));
              if (!r.i) {
                for (var u, c = s.name, f = s.styles, d = s.next; void 0 !== d; )
                  (c += ' ' + d.name), (f += d.styles), (d = d.next);
                var p = !0 === t.compat,
                  h = t.insert('', { name: c, styles: f }, t.sheet, p);
                return p
                  ? null
                  : o.createElement(
                      'style',
                      (((u = {})['data-emotion'] = t.key + '-global ' + c),
                      (u.dangerouslySetInnerHTML = { __html: h }),
                      (u.nonce = t.sheet.nonce),
                      u),
                    );
              }
              var m = o.useRef();
              return (
                (0, i.i)(
                  function () {
                    var e = t.key + '-global',
                      n = new t.sheet.constructor({
                        key: e,
                        nonce: t.sheet.nonce,
                        container: t.sheet.container,
                        speedy: t.sheet.isSpeedy,
                      }),
                      r = !1,
                      o = document.querySelector('style[data-emotion="' + e + ' ' + s.name + '"]');
                    return (
                      t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                      null !== o && ((r = !0), o.setAttribute('data-emotion', e), n.hydrate([o])),
                      (m.current = [n, r]),
                      function () {
                        n.flush();
                      }
                    );
                  },
                  [t],
                ),
                (0, i.i)(
                  function () {
                    var e = m.current,
                      n = e[0];
                    if (e[1]) e[1] = !1;
                    else {
                      if ((void 0 !== s.next && (0, a.sk)(t, s.next, !0), n.tags.length)) {
                        var r = n.tags[n.tags.length - 1].nextElementSibling;
                        (n.before = r), n.flush();
                      }
                      t.insert('', s, n, !1);
                    }
                  },
                  [t, s.name],
                ),
                null
              );
            }));
        function u() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return (0, l.J)(t);
        }
        var c = function () {
          var e = u.apply(void 0, arguments),
            t = 'animation-' + e.name;
          return {
            name: t,
            styles: '@keyframes ' + t + '{' + e.styles + '}',
            anim: 1,
            toString: function () {
              return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
            },
          };
        };
      },
      2830: (e, t, n) => {
        'use strict';
        n.d(t, { J: () => h });
        var r = {
            animationIterationCount: 1,
            aspectRatio: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
          },
          o = n(918),
          a = /[A-Z]|^ms/g,
          i = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
          l = function (e) {
            return 45 === e.charCodeAt(1);
          },
          s = function (e) {
            return null != e && 'boolean' !== typeof e;
          },
          u = (0, o.A)(function (e) {
            return l(e) ? e : e.replace(a, '-$&').toLowerCase();
          }),
          c = function (e, t) {
            switch (e) {
              case 'animation':
              case 'animationName':
                if ('string' === typeof t)
                  return t.replace(i, function (e, t, n) {
                    return (d = { name: t, styles: n, next: d }), t;
                  });
            }
            return 1 === r[e] || l(e) || 'number' !== typeof t || 0 === t ? t : t + 'px';
          };
        function f(e, t, n) {
          if (null == n) return '';
          if (void 0 !== n.__emotion_styles) return n;
          switch (typeof n) {
            case 'boolean':
              return '';
            case 'object':
              if (1 === n.anim) return (d = { name: n.name, styles: n.styles, next: d }), n.name;
              if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r)
                  for (; void 0 !== r; ) (d = { name: r.name, styles: r.styles, next: d }), (r = r.next);
                return n.styles + ';';
              }
              return (function (e, t, n) {
                var r = '';
                if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += f(e, t, n[o]) + ';';
                else
                  for (var a in n) {
                    var i = n[a];
                    if ('object' !== typeof i)
                      null != t && void 0 !== t[i]
                        ? (r += a + '{' + t[i] + '}')
                        : s(i) && (r += u(a) + ':' + c(a, i) + ';');
                    else if (
                      !Array.isArray(i) ||
                      'string' !== typeof i[0] ||
                      (null != t && void 0 !== t[i[0]])
                    ) {
                      var l = f(e, t, i);
                      switch (a) {
                        case 'animation':
                        case 'animationName':
                          r += u(a) + ':' + l + ';';
                          break;
                        default:
                          r += a + '{' + l + '}';
                      }
                    } else for (var d = 0; d < i.length; d++) s(i[d]) && (r += u(a) + ':' + c(a, i[d]) + ';');
                  }
                return r;
              })(e, t, n);
            case 'function':
              if (void 0 !== e) {
                var o = d,
                  a = n(e);
                return (d = o), f(e, t, a);
              }
          }
          if (null == t) return n;
          var i = t[n];
          return void 0 !== i ? i : n;
        }
        var d,
          p = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
        var h = function (e, t, n) {
          if (1 === e.length && 'object' === typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
            return e[0];
          var r = !0,
            o = '';
          d = void 0;
          var a = e[0];
          null == a || void 0 === a.raw ? ((r = !1), (o += f(n, t, a))) : (o += a[0]);
          for (var i = 1; i < e.length; i++) (o += f(n, t, e[i])), r && (o += a[i]);
          p.lastIndex = 0;
          for (var l, s = ''; null !== (l = p.exec(o)); ) s += '-' + l[1];
          var u =
            (function (e) {
              for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) + ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (o) {
                case 3:
                  n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                  n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^ (n >>> 15)) >>>
                0
              ).toString(36);
            })(o) + s;
          return { name: u, styles: o, next: d };
        };
      },
      9436: (e, t, n) => {
        'use strict';
        var r;
        n.d(t, { i: () => l, s: () => i });
        var o = n(5043),
          a = !!(r || (r = n.t(o, 2))).useInsertionEffect && (r || (r = n.t(o, 2))).useInsertionEffect,
          i =
            a ||
            function (e) {
              return e();
            },
          l = a || o.useLayoutEffect;
      },
      1722: (e, t, n) => {
        'use strict';
        n.d(t, { Rk: () => r, SF: () => o, sk: () => a });
        function r(e, t, n) {
          var r = '';
          return (
            n.split(' ').forEach(function (n) {
              void 0 !== e[n] ? t.push(e[n] + ';') : (r += n + ' ');
            }),
            r
          );
        }
        var o = function (e, t, n) {
            var r = e.key + '-' + t.name;
            !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
          },
          a = function (e, t, n) {
            o(e, t, n);
            var r = e.key + '-' + t.name;
            if (void 0 === e.inserted[t.name]) {
              var a = t;
              do {
                e.insert(t === a ? '.' + r : '', a, e.sheet, !0), (a = a.next);
              } while (void 0 !== a);
            }
          };
      },
      7713: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            GlobalStyles: () => S,
            StyledEngineProvider: () => k,
            ThemeContext: () => s.T,
            css: () => v.AH,
            default: () => C,
            internal_processStyles: () => E,
            keyframes: () => v.i7,
          });
        var r = n(8168),
          o = n(5043),
          a = n(918),
          i =
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
          l = (0, a.A)(function (e) {
            return i.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
          }),
          s = n(5756),
          u = n(1722),
          c = n(2830),
          f = n(9436),
          d = l,
          p = function (e) {
            return 'theme' !== e;
          },
          h = function (e) {
            return 'string' === typeof e && e.charCodeAt(0) > 96 ? d : p;
          },
          m = function (e, t, n) {
            var r;
            if (t) {
              var o = t.shouldForwardProp;
              r =
                e.__emotion_forwardProp && o
                  ? function (t) {
                      return e.__emotion_forwardProp(t) && o(t);
                    }
                  : o;
            }
            return 'function' !== typeof r && n && (r = e.__emotion_forwardProp), r;
          },
          g = function (e) {
            var t = e.cache,
              n = e.serialized,
              r = e.isStringTag;
            return (
              (0, u.SF)(t, n, r),
              (0, f.s)(function () {
                return (0, u.sk)(t, n, r);
              }),
              null
            );
          },
          y = function e(t, n) {
            var a,
              i,
              l = t.__emotion_real === t,
              f = (l && t.__emotion_base) || t;
            void 0 !== n && ((a = n.label), (i = n.target));
            var d = m(t, n, l),
              p = d || h(f),
              y = !p('as');
            return function () {
              var v = arguments,
                b = l && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
              if ((void 0 !== a && b.push('label:' + a + ';'), null == v[0] || void 0 === v[0].raw))
                b.push.apply(b, v);
              else {
                0, b.push(v[0][0]);
                for (var x = v.length, w = 1; w < x; w++) b.push(v[w], v[0][w]);
              }
              var k = (0, s.w)(function (e, t, n) {
                var r = (y && e.as) || f,
                  a = '',
                  l = [],
                  m = e;
                if (null == e.theme) {
                  for (var v in ((m = {}), e)) m[v] = e[v];
                  m.theme = o.useContext(s.T);
                }
                'string' === typeof e.className
                  ? (a = (0, u.Rk)(t.registered, l, e.className))
                  : null != e.className && (a = e.className + ' ');
                var x = (0, c.J)(b.concat(l), t.registered, m);
                (a += t.key + '-' + x.name), void 0 !== i && (a += ' ' + i);
                var w = y && void 0 === d ? h(r) : p,
                  k = {};
                for (var S in e) (y && 'as' === S) || (w(S) && (k[S] = e[S]));
                return (
                  (k.className = a),
                  (k.ref = n),
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(g, { cache: t, serialized: x, isStringTag: 'string' === typeof r }),
                    o.createElement(r, k),
                  )
                );
              });
              return (
                (k.displayName =
                  void 0 !== a
                    ? a
                    : 'Styled(' + ('string' === typeof f ? f : f.displayName || f.name || 'Component') + ')'),
                (k.defaultProps = t.defaultProps),
                (k.__emotion_real = k),
                (k.__emotion_base = f),
                (k.__emotion_styles = b),
                (k.__emotion_forwardProp = d),
                Object.defineProperty(k, 'toString', {
                  value: function () {
                    return '.' + i;
                  },
                }),
                (k.withComponent = function (t, o) {
                  return e(t, (0, r.A)({}, n, o, { shouldForwardProp: m(k, o, !0) })).apply(void 0, b);
                }),
                k
              );
            };
          }.bind();
        [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ].forEach(function (e) {
          y[e] = y(e);
        });
        var v = n(3290),
          b = n(5513),
          x = n(579);
        let w;
        function k(e) {
          const { injectFirst: t, children: n } = e;
          return t && w ? (0, x.jsx)(s.C, { value: w, children: n }) : n;
        }
        function S(e) {
          const { styles: t, defaultTheme: n = {} } = e,
            r =
              'function' === typeof t
                ? (e) => {
                    return t(void 0 === (r = e) || null === r || 0 === Object.keys(r).length ? n : e);
                    var r;
                  }
                : t;
          return (0, x.jsx)(v.mL, { styles: r });
        }
        function C(e, t) {
          return y(e, t);
        }
        'object' === typeof document && (w = (0, b.A)({ key: 'css', prepend: !0 }));
        const E = (e, t) => {
          Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
        };
      },
      7266: (e, t, n) => {
        'use strict';
        var r = n(4994);
        (t.X4 = p),
          (t.e$ = h),
          (t.eM = function (e, t) {
            const n = d(e),
              r = d(t);
            return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
          }),
          (t.a = m);
        var o = r(n(7245)),
          a = r(n(1098));
        function i(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          return (0, a.default)(e, t, n);
        }
        function l(e) {
          e = e.slice(1);
          const t = new RegExp('.{1,'.concat(e.length >= 6 ? 2 : 1, '}'), 'g');
          let n = e.match(t);
          return (
            n && 1 === n[0].length && (n = n.map((e) => e + e)),
            n
              ? 'rgb'
                  .concat(4 === n.length ? 'a' : '', '(')
                  .concat(
                    n
                      .map((e, t) =>
                        t < 3 ? parseInt(e, 16) : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3,
                      )
                      .join(', '),
                    ')',
                  )
              : ''
          );
        }
        function s(e) {
          if (e.type) return e;
          if ('#' === e.charAt(0)) return s(l(e));
          const t = e.indexOf('('),
            n = e.substring(0, t);
          if (-1 === ['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n))
            throw new Error((0, o.default)(9, e));
          let r,
            a = e.substring(t + 1, e.length - 1);
          if ('color' === n) {
            if (
              ((a = a.split(' ')),
              (r = a.shift()),
              4 === a.length && '/' === a[3].charAt(0) && (a[3] = a[3].slice(1)),
              -1 === ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(r))
            )
              throw new Error((0, o.default)(10, r));
          } else a = a.split(',');
          return (a = a.map((e) => parseFloat(e))), { type: n, values: a, colorSpace: r };
        }
        const u = (e) => {
          const t = s(e);
          return t.values
            .slice(0, 3)
            .map((e, n) => (-1 !== t.type.indexOf('hsl') && 0 !== n ? ''.concat(e, '%') : e))
            .join(' ');
        };
        function c(e) {
          const { type: t, colorSpace: n } = e;
          let { values: r } = e;
          return (
            -1 !== t.indexOf('rgb')
              ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
              : -1 !== t.indexOf('hsl') && ((r[1] = ''.concat(r[1], '%')), (r[2] = ''.concat(r[2], '%'))),
            (r = -1 !== t.indexOf('color') ? ''.concat(n, ' ').concat(r.join(' ')) : ''.concat(r.join(', '))),
            ''.concat(t, '(').concat(r, ')')
          );
        }
        function f(e) {
          e = s(e);
          const { values: t } = e,
            n = t[0],
            r = t[1] / 100,
            o = t[2] / 100,
            a = r * Math.min(o, 1 - o),
            i = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
              return o - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
            };
          let l = 'rgb';
          const u = [Math.round(255 * i(0)), Math.round(255 * i(8)), Math.round(255 * i(4))];
          return 'hsla' === e.type && ((l += 'a'), u.push(t[3])), c({ type: l, values: u });
        }
        function d(e) {
          let t = 'hsl' === (e = s(e)).type || 'hsla' === e.type ? s(f(e)).values : e.values;
          return (
            (t = t.map(
              (t) => (
                'color' !== e.type && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
              ),
            )),
            Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
          );
        }
        function p(e, t) {
          return (
            (e = s(e)),
            (t = i(t)),
            ('rgb' !== e.type && 'hsl' !== e.type) || (e.type += 'a'),
            'color' === e.type ? (e.values[3] = '/'.concat(t)) : (e.values[3] = t),
            c(e)
          );
        }
        function h(e, t) {
          if (((e = s(e)), (t = i(t)), -1 !== e.type.indexOf('hsl'))) e.values[2] *= 1 - t;
          else if (-1 !== e.type.indexOf('rgb') || -1 !== e.type.indexOf('color'))
            for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
          return c(e);
        }
        function m(e, t) {
          if (((e = s(e)), (t = i(t)), -1 !== e.type.indexOf('hsl'))) e.values[2] += (100 - e.values[2]) * t;
          else if (-1 !== e.type.indexOf('rgb'))
            for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
          else if (-1 !== e.type.indexOf('color'))
            for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
          return c(e);
        }
        function g(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
          return d(e) > 0.5 ? h(e, t) : m(e, t);
        }
      },
      8052: (e, t, n) => {
        'use strict';
        var r = n(4994);
        t.Ay = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              themeId: t,
              defaultTheme: n = m,
              rootShouldForwardProp: r = h,
              slotShouldForwardProp: s = h,
            } = e,
            c = (e) =>
              (0, u.default)(
                (0, o.default)({}, e, { theme: y((0, o.default)({}, e, { defaultTheme: n, themeId: t })) }),
              );
          return (
            (c.__mui_systemSx = !0),
            function (e) {
              let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (0, i.internal_processStyles)(e, (e) => e.filter((e) => !(null != e && e.__mui_systemSx)));
              const {
                  name: f,
                  slot: p,
                  skipVariantsResolver: m,
                  skipSx: x,
                  overridesResolver: w = v(g(p)),
                } = u,
                k = (0, a.default)(u, d),
                S = void 0 !== m ? m : (p && 'Root' !== p && 'root' !== p) || !1,
                C = x || !1;
              let E = h;
              'Root' === p || 'root' === p
                ? (E = r)
                : p
                  ? (E = s)
                  : (function (e) {
                      return 'string' === typeof e && e.charCodeAt(0) > 96;
                    })(e) && (E = void 0);
              const P = (0, i.default)(e, (0, o.default)({ shouldForwardProp: E, label: undefined }, k)),
                _ = (e) =>
                  ('function' === typeof e && e.__emotion_real !== e) || (0, l.isPlainObject)(e)
                    ? (r) =>
                        b(
                          e,
                          (0, o.default)({}, r, {
                            theme: y({ theme: r.theme, defaultTheme: n, themeId: t }),
                          }),
                        )
                    : e,
                A = function (r) {
                  let a = _(r);
                  for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                    l[s - 1] = arguments[s];
                  const u = l ? l.map(_) : [];
                  f &&
                    w &&
                    u.push((e) => {
                      const r = y((0, o.default)({}, e, { defaultTheme: n, themeId: t }));
                      if (!r.components || !r.components[f] || !r.components[f].styleOverrides) return null;
                      const a = r.components[f].styleOverrides,
                        i = {};
                      return (
                        Object.entries(a).forEach((t) => {
                          let [n, a] = t;
                          i[n] = b(a, (0, o.default)({}, e, { theme: r }));
                        }),
                        w(e, i)
                      );
                    }),
                    f &&
                      !S &&
                      u.push((e) => {
                        var r;
                        const a = y((0, o.default)({}, e, { defaultTheme: n, themeId: t }));
                        return b(
                          {
                            variants:
                              null == a || null == (r = a.components) || null == (r = r[f])
                                ? void 0
                                : r.variants,
                          },
                          (0, o.default)({}, e, { theme: a }),
                        );
                      }),
                    C || u.push(c);
                  const d = u.length - l.length;
                  if (Array.isArray(r) && d > 0) {
                    const e = new Array(d).fill('');
                    (a = [...r, ...e]), (a.raw = [...r.raw, ...e]);
                  }
                  const p = P(a, ...u);
                  return e.muiName && (p.muiName = e.muiName), p;
                };
              return P.withConfig && (A.withConfig = P.withConfig), A;
            }
          );
        };
        var o = r(n(4634)),
          a = r(n(4893)),
          i = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
            var n = p(t);
            if (n && n.has(e)) return n.get(e);
            var r = { __proto__: null },
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
              }
            return (r.default = e), n && n.set(e, r), r;
          })(n(7713)),
          l = n(4534),
          s = (r(n(578)), r(n(2046)), r(n(4989))),
          u = r(n(3234));
        const c = ['ownerState'],
          f = ['variants'],
          d = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
        function p(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (p = function (e) {
            return e ? n : t;
          })(e);
        }
        function h(e) {
          return 'ownerState' !== e && 'theme' !== e && 'sx' !== e && 'as' !== e;
        }
        const m = (0, s.default)(),
          g = (e) => (e ? e.charAt(0).toLowerCase() + e.slice(1) : e);
        function y(e) {
          let { defaultTheme: t, theme: n, themeId: r } = e;
          return (o = n), 0 === Object.keys(o).length ? t : n[r] || n;
          var o;
        }
        function v(e) {
          return e ? (t, n) => n[e] : null;
        }
        function b(e, t) {
          let { ownerState: n } = t,
            r = (0, a.default)(t, c);
          const i = 'function' === typeof e ? e((0, o.default)({ ownerState: n }, r)) : e;
          if (Array.isArray(i)) return i.flatMap((e) => b(e, (0, o.default)({ ownerState: n }, r)));
          if (i && 'object' === typeof i && Array.isArray(i.variants)) {
            const { variants: e = [] } = i;
            let t = (0, a.default)(i, f);
            return (
              e.forEach((e) => {
                let a = !0;
                'function' === typeof e.props
                  ? (a = e.props((0, o.default)({ ownerState: n }, r, n)))
                  : Object.keys(e.props).forEach((t) => {
                      (null == n ? void 0 : n[t]) !== e.props[t] && r[t] !== e.props[t] && (a = !1);
                    }),
                  a &&
                    (Array.isArray(t) || (t = [t]),
                    t.push(
                      'function' === typeof e.style
                        ? e.style((0, o.default)({ ownerState: n }, r, n))
                        : e.style,
                    ));
              }),
              t
            );
          }
          return i;
        }
      },
      9751: (e, t, n) => {
        'use strict';
        n.d(t, { EU: () => i, NI: () => a, vf: () => l, zu: () => r });
        const r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
          o = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => '@media (min-width:'.concat(r[e], 'px)') };
        function a(e, t, n) {
          const a = e.theme || {};
          if (Array.isArray(t)) {
            const e = a.breakpoints || o;
            return t.reduce((r, o, a) => ((r[e.up(e.keys[a])] = n(t[a])), r), {});
          }
          if ('object' === typeof t) {
            const e = a.breakpoints || o;
            return Object.keys(t).reduce((o, a) => {
              if (-1 !== Object.keys(e.values || r).indexOf(a)) {
                o[e.up(a)] = n(t[a], a);
              } else {
                const e = a;
                o[e] = t[e];
              }
              return o;
            }, {});
          }
          return n(t);
        }
        function i() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          var t;
          return (null == (t = e.keys) ? void 0 : t.reduce((t, n) => ((t[e.up(n)] = {}), t), {})) || {};
        }
        function l(e, t) {
          return e.reduce((e, t) => {
            const n = e[t];
            return (!n || 0 === Object.keys(n).length) && delete e[t], e;
          }, t);
        }
      },
      9703: (e, t, n) => {
        'use strict';
        function r(e, t) {
          const n = this;
          if (n.vars && 'function' === typeof n.getColorSchemeSelector) {
            const r = n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)');
            return { [r]: t };
          }
          return n.palette.mode === e ? t : {};
        }
        n.d(t, { A: () => r });
      },
      4853: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => l });
        var r = n(8587),
          o = n(8168);
        const a = ['values', 'unit', 'step'],
          i = (e) => {
            const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
            return (
              t.sort((e, t) => e.val - t.val), t.reduce((e, t) => (0, o.A)({}, e, { [t.key]: t.val }), {})
            );
          };
        function l(e) {
          const {
              values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
              unit: n = 'px',
              step: l = 5,
            } = e,
            s = (0, r.A)(e, a),
            u = i(t),
            c = Object.keys(u);
          function f(e) {
            const r = 'number' === typeof t[e] ? t[e] : e;
            return '@media (min-width:'.concat(r).concat(n, ')');
          }
          function d(e) {
            const r = 'number' === typeof t[e] ? t[e] : e;
            return '@media (max-width:'.concat(r - l / 100).concat(n, ')');
          }
          function p(e, r) {
            const o = c.indexOf(r);
            return (
              '@media (min-width:'.concat('number' === typeof t[e] ? t[e] : e).concat(n, ') and ') +
              '(max-width:'
                .concat((-1 !== o && 'number' === typeof t[c[o]] ? t[c[o]] : r) - l / 100)
                .concat(n, ')')
            );
          }
          return (0, o.A)(
            {
              keys: c,
              values: u,
              up: f,
              down: d,
              between: p,
              only: function (e) {
                return c.indexOf(e) + 1 < c.length ? p(e, c[c.indexOf(e) + 1]) : f(e);
              },
              not: function (e) {
                const t = c.indexOf(e);
                return 0 === t
                  ? f(c[1])
                  : t === c.length - 1
                    ? d(c[t])
                    : p(e, c[c.indexOf(e) + 1]).replace('@media', '@media not all and');
              },
              unit: n,
            },
            s,
          );
        }
      },
      8280: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => p });
        var r = n(8168),
          o = n(8587),
          a = n(3216),
          i = n(4853);
        const l = { borderRadius: 4 };
        var s = n(8604);
        var u = n(8812),
          c = n(7758),
          f = n(9703);
        const d = ['breakpoints', 'palette', 'spacing', 'shape'];
        const p = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { breakpoints: t = {}, palette: n = {}, spacing: p, shape: h = {} } = e,
            m = (0, o.A)(e, d),
            g = (0, i.A)(t),
            y = (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
              if (e.mui) return e;
              const t = (0, s.LX)({ spacing: e }),
                n = function () {
                  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                  return (0 === n.length ? [1] : n)
                    .map((e) => {
                      const n = t(e);
                      return 'number' === typeof n ? ''.concat(n, 'px') : n;
                    })
                    .join(' ');
                };
              return (n.mui = !0), n;
            })(p);
          let v = (0, a.A)(
            {
              breakpoints: g,
              direction: 'ltr',
              components: {},
              palette: (0, r.A)({ mode: 'light' }, n),
              spacing: y,
              shape: (0, r.A)({}, l, h),
            },
            m,
          );
          v.applyStyles = f.A;
          for (var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), w = 1; w < b; w++)
            x[w - 1] = arguments[w];
          return (
            (v = x.reduce((e, t) => (0, a.A)(e, t), v)),
            (v.unstable_sxConfig = (0, r.A)({}, c.A, null == m ? void 0 : m.unstable_sxConfig)),
            (v.unstable_sx = function (e) {
              return (0, u.A)({ sx: e, theme: this });
            }),
            v
          );
        };
      },
      4989: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            default: () => r.A,
            private_createBreakpoints: () => o.A,
            unstable_applyStyles: () => a.A,
          });
        var r = n(8280),
          o = n(4853),
          a = n(9703);
      },
      3815: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => o });
        var r = n(3216);
        const o = function (e, t) {
          return t ? (0, r.A)(e, t, { clone: !1 }) : e;
        };
      },
      8604: (e, t, n) => {
        'use strict';
        n.d(t, { LX: () => h, MA: () => p, _W: () => m, Lc: () => v, Ms: () => b });
        var r = n(9751),
          o = n(7162),
          a = n(3815);
        const i = { m: 'margin', p: 'padding' },
          l = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
          s = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
          u = (function (e) {
            const t = {};
            return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n]);
          })((e) => {
            if (e.length > 2) {
              if (!s[e]) return [e];
              e = s[e];
            }
            const [t, n] = e.split(''),
              r = i[t],
              o = l[n] || '';
            return Array.isArray(o) ? o.map((e) => r + e) : [r + o];
          }),
          c = [
            'm',
            'mt',
            'mr',
            'mb',
            'ml',
            'mx',
            'my',
            'margin',
            'marginTop',
            'marginRight',
            'marginBottom',
            'marginLeft',
            'marginX',
            'marginY',
            'marginInline',
            'marginInlineStart',
            'marginInlineEnd',
            'marginBlock',
            'marginBlockStart',
            'marginBlockEnd',
          ],
          f = [
            'p',
            'pt',
            'pr',
            'pb',
            'pl',
            'px',
            'py',
            'padding',
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft',
            'paddingX',
            'paddingY',
            'paddingInline',
            'paddingInlineStart',
            'paddingInlineEnd',
            'paddingBlock',
            'paddingBlockStart',
            'paddingBlockEnd',
          ],
          d = [...c, ...f];
        function p(e, t, n, r) {
          var a;
          const i = null != (a = (0, o.Yn)(e, t, !1)) ? a : n;
          return 'number' === typeof i
            ? (e) => ('string' === typeof e ? e : i * e)
            : Array.isArray(i)
              ? (e) => ('string' === typeof e ? e : i[e])
              : 'function' === typeof i
                ? i
                : () => {};
        }
        function h(e) {
          return p(e, 'spacing', 8);
        }
        function m(e, t) {
          if ('string' === typeof t || null == t) return t;
          const n = e(Math.abs(t));
          return t >= 0 ? n : 'number' === typeof n ? -n : '-'.concat(n);
        }
        function g(e, t, n, o) {
          if (-1 === t.indexOf(n)) return null;
          const a = (function (e, t) {
              return (n) => e.reduce((e, r) => ((e[r] = m(t, n)), e), {});
            })(u(n), o),
            i = e[n];
          return (0, r.NI)(e, i, a);
        }
        function y(e, t) {
          const n = h(e.theme);
          return Object.keys(e)
            .map((r) => g(e, t, r, n))
            .reduce(a.A, {});
        }
        function v(e) {
          return y(e, c);
        }
        function b(e) {
          return y(e, f);
        }
        function x(e) {
          return y(e, d);
        }
        (v.propTypes = {}),
          (v.filterProps = c),
          (b.propTypes = {}),
          (b.filterProps = f),
          (x.propTypes = {}),
          (x.filterProps = d);
      },
      7162: (e, t, n) => {
        'use strict';
        n.d(t, { Ay: () => l, BO: () => i, Yn: () => a });
        var r = n(410),
          o = n(9751);
        function a(e, t) {
          let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || 'string' !== typeof t) return null;
          if (e && e.vars && n) {
            const n = 'vars.'
              .concat(t)
              .split('.')
              .reduce((e, t) => (e && e[t] ? e[t] : null), e);
            if (null != n) return n;
          }
          return t.split('.').reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
        }
        function i(e, t, n) {
          let r,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
          return (
            (r = 'function' === typeof e ? e(n) : Array.isArray(e) ? e[n] || o : a(e, n) || o),
            t && (r = t(r, o, e)),
            r
          );
        }
        const l = function (e) {
          const { prop: t, cssProperty: n = e.prop, themeKey: l, transform: s } = e,
            u = (e) => {
              if (null == e[t]) return null;
              const u = e[t],
                c = a(e.theme, l) || {};
              return (0, o.NI)(e, u, (e) => {
                let o = i(c, s, e);
                return (
                  e === o &&
                    'string' === typeof e &&
                    (o = i(c, s, ''.concat(t).concat('default' === e ? '' : (0, r.A)(e)), e)),
                  !1 === n ? o : { [n]: o }
                );
              });
            };
          return (u.propTypes = {}), (u.filterProps = [t]), u;
        };
      },
      7758: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => z });
        var r = n(8604),
          o = n(7162),
          a = n(3815);
        const i = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = t.reduce(
              (e, t) => (
                t.filterProps.forEach((n) => {
                  e[n] = t;
                }),
                e
              ),
              {},
            ),
            o = (e) => Object.keys(e).reduce((t, n) => (r[n] ? (0, a.A)(t, r[n](e)) : t), {});
          return (o.propTypes = {}), (o.filterProps = t.reduce((e, t) => e.concat(t.filterProps), [])), o;
        };
        var l = n(9751);
        function s(e) {
          return 'number' !== typeof e ? e : ''.concat(e, 'px solid');
        }
        function u(e, t) {
          return (0, o.Ay)({ prop: e, themeKey: 'borders', transform: t });
        }
        const c = u('border', s),
          f = u('borderTop', s),
          d = u('borderRight', s),
          p = u('borderBottom', s),
          h = u('borderLeft', s),
          m = u('borderColor'),
          g = u('borderTopColor'),
          y = u('borderRightColor'),
          v = u('borderBottomColor'),
          b = u('borderLeftColor'),
          x = u('outline', s),
          w = u('outlineColor'),
          k = (e) => {
            if (void 0 !== e.borderRadius && null !== e.borderRadius) {
              const t = (0, r.MA)(e.theme, 'shape.borderRadius', 4, 'borderRadius'),
                n = (e) => ({ borderRadius: (0, r._W)(t, e) });
              return (0, l.NI)(e, e.borderRadius, n);
            }
            return null;
          };
        (k.propTypes = {}), (k.filterProps = ['borderRadius']);
        i(c, f, d, p, h, m, g, y, v, b, k, x, w);
        const S = (e) => {
          if (void 0 !== e.gap && null !== e.gap) {
            const t = (0, r.MA)(e.theme, 'spacing', 8, 'gap'),
              n = (e) => ({ gap: (0, r._W)(t, e) });
            return (0, l.NI)(e, e.gap, n);
          }
          return null;
        };
        (S.propTypes = {}), (S.filterProps = ['gap']);
        const C = (e) => {
          if (void 0 !== e.columnGap && null !== e.columnGap) {
            const t = (0, r.MA)(e.theme, 'spacing', 8, 'columnGap'),
              n = (e) => ({ columnGap: (0, r._W)(t, e) });
            return (0, l.NI)(e, e.columnGap, n);
          }
          return null;
        };
        (C.propTypes = {}), (C.filterProps = ['columnGap']);
        const E = (e) => {
          if (void 0 !== e.rowGap && null !== e.rowGap) {
            const t = (0, r.MA)(e.theme, 'spacing', 8, 'rowGap'),
              n = (e) => ({ rowGap: (0, r._W)(t, e) });
            return (0, l.NI)(e, e.rowGap, n);
          }
          return null;
        };
        (E.propTypes = {}), (E.filterProps = ['rowGap']);
        i(
          S,
          C,
          E,
          (0, o.Ay)({ prop: 'gridColumn' }),
          (0, o.Ay)({ prop: 'gridRow' }),
          (0, o.Ay)({ prop: 'gridAutoFlow' }),
          (0, o.Ay)({ prop: 'gridAutoColumns' }),
          (0, o.Ay)({ prop: 'gridAutoRows' }),
          (0, o.Ay)({ prop: 'gridTemplateColumns' }),
          (0, o.Ay)({ prop: 'gridTemplateRows' }),
          (0, o.Ay)({ prop: 'gridTemplateAreas' }),
          (0, o.Ay)({ prop: 'gridArea' }),
        );
        function P(e, t) {
          return 'grey' === t ? t : e;
        }
        i(
          (0, o.Ay)({ prop: 'color', themeKey: 'palette', transform: P }),
          (0, o.Ay)({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: P }),
          (0, o.Ay)({ prop: 'backgroundColor', themeKey: 'palette', transform: P }),
        );
        function _(e) {
          return e <= 1 && 0 !== e ? ''.concat(100 * e, '%') : e;
        }
        const A = (0, o.Ay)({ prop: 'width', transform: _ }),
          T = (e) => {
            if (void 0 !== e.maxWidth && null !== e.maxWidth) {
              const t = (t) => {
                var n, r;
                const o =
                  (null == (n = e.theme) || null == (n = n.breakpoints) || null == (n = n.values)
                    ? void 0
                    : n[t]) || l.zu[t];
                return o
                  ? 'px' !== (null == (r = e.theme) || null == (r = r.breakpoints) ? void 0 : r.unit)
                    ? { maxWidth: ''.concat(o).concat(e.theme.breakpoints.unit) }
                    : { maxWidth: o }
                  : { maxWidth: _(t) };
              };
              return (0, l.NI)(e, e.maxWidth, t);
            }
            return null;
          };
        T.filterProps = ['maxWidth'];
        const R = (0, o.Ay)({ prop: 'minWidth', transform: _ }),
          N = (0, o.Ay)({ prop: 'height', transform: _ }),
          M = (0, o.Ay)({ prop: 'maxHeight', transform: _ }),
          O = (0, o.Ay)({ prop: 'minHeight', transform: _ }),
          z =
            ((0, o.Ay)({ prop: 'size', cssProperty: 'width', transform: _ }),
            (0, o.Ay)({ prop: 'size', cssProperty: 'height', transform: _ }),
            i(A, T, R, N, M, O, (0, o.Ay)({ prop: 'boxSizing' })),
            {
              border: { themeKey: 'borders', transform: s },
              borderTop: { themeKey: 'borders', transform: s },
              borderRight: { themeKey: 'borders', transform: s },
              borderBottom: { themeKey: 'borders', transform: s },
              borderLeft: { themeKey: 'borders', transform: s },
              borderColor: { themeKey: 'palette' },
              borderTopColor: { themeKey: 'palette' },
              borderRightColor: { themeKey: 'palette' },
              borderBottomColor: { themeKey: 'palette' },
              borderLeftColor: { themeKey: 'palette' },
              outline: { themeKey: 'borders', transform: s },
              outlineColor: { themeKey: 'palette' },
              borderRadius: { themeKey: 'shape.borderRadius', style: k },
              color: { themeKey: 'palette', transform: P },
              bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: P },
              backgroundColor: { themeKey: 'palette', transform: P },
              p: { style: r.Ms },
              pt: { style: r.Ms },
              pr: { style: r.Ms },
              pb: { style: r.Ms },
              pl: { style: r.Ms },
              px: { style: r.Ms },
              py: { style: r.Ms },
              padding: { style: r.Ms },
              paddingTop: { style: r.Ms },
              paddingRight: { style: r.Ms },
              paddingBottom: { style: r.Ms },
              paddingLeft: { style: r.Ms },
              paddingX: { style: r.Ms },
              paddingY: { style: r.Ms },
              paddingInline: { style: r.Ms },
              paddingInlineStart: { style: r.Ms },
              paddingInlineEnd: { style: r.Ms },
              paddingBlock: { style: r.Ms },
              paddingBlockStart: { style: r.Ms },
              paddingBlockEnd: { style: r.Ms },
              m: { style: r.Lc },
              mt: { style: r.Lc },
              mr: { style: r.Lc },
              mb: { style: r.Lc },
              ml: { style: r.Lc },
              mx: { style: r.Lc },
              my: { style: r.Lc },
              margin: { style: r.Lc },
              marginTop: { style: r.Lc },
              marginRight: { style: r.Lc },
              marginBottom: { style: r.Lc },
              marginLeft: { style: r.Lc },
              marginX: { style: r.Lc },
              marginY: { style: r.Lc },
              marginInline: { style: r.Lc },
              marginInlineStart: { style: r.Lc },
              marginInlineEnd: { style: r.Lc },
              marginBlock: { style: r.Lc },
              marginBlockStart: { style: r.Lc },
              marginBlockEnd: { style: r.Lc },
              displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
              display: {},
              overflow: {},
              textOverflow: {},
              visibility: {},
              whiteSpace: {},
              flexBasis: {},
              flexDirection: {},
              flexWrap: {},
              justifyContent: {},
              alignItems: {},
              alignContent: {},
              order: {},
              flex: {},
              flexGrow: {},
              flexShrink: {},
              alignSelf: {},
              justifyItems: {},
              justifySelf: {},
              gap: { style: S },
              rowGap: { style: E },
              columnGap: { style: C },
              gridColumn: {},
              gridRow: {},
              gridAutoFlow: {},
              gridAutoColumns: {},
              gridAutoRows: {},
              gridTemplateColumns: {},
              gridTemplateRows: {},
              gridTemplateAreas: {},
              gridArea: {},
              position: {},
              zIndex: { themeKey: 'zIndex' },
              top: {},
              right: {},
              bottom: {},
              left: {},
              boxShadow: { themeKey: 'shadows' },
              width: { transform: _ },
              maxWidth: { style: T },
              minWidth: { transform: _ },
              height: { transform: _ },
              maxHeight: { transform: _ },
              minHeight: { transform: _ },
              boxSizing: {},
              fontFamily: { themeKey: 'typography' },
              fontSize: { themeKey: 'typography' },
              fontStyle: { themeKey: 'typography' },
              fontWeight: { themeKey: 'typography' },
              letterSpacing: {},
              textTransform: {},
              lineHeight: {},
              textAlign: {},
              typography: { cssProperty: !1, themeKey: 'typography' },
            });
      },
      8698: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => u });
        var r = n(8168),
          o = n(8587),
          a = n(3216),
          i = n(7758);
        const l = ['sx'],
          s = (e) => {
            var t, n;
            const r = { systemProps: {}, otherProps: {} },
              o = null != (t = null == e || null == (n = e.theme) ? void 0 : n.unstable_sxConfig) ? t : i.A;
            return (
              Object.keys(e).forEach((t) => {
                o[t] ? (r.systemProps[t] = e[t]) : (r.otherProps[t] = e[t]);
              }),
              r
            );
          };
        function u(e) {
          const { sx: t } = e,
            n = (0, o.A)(e, l),
            { systemProps: i, otherProps: u } = s(n);
          let c;
          return (
            (c = Array.isArray(t)
              ? [i, ...t]
              : 'function' === typeof t
                ? function () {
                    const e = t(...arguments);
                    return (0, a.Q)(e) ? (0, r.A)({}, i, e) : i;
                  }
                : (0, r.A)({}, i, t)),
            (0, r.A)({}, u, { sx: c })
          );
        }
      },
      3234: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            default: () => r.A,
            extendSxProp: () => o.A,
            unstable_createStyleFunctionSx: () => r.k,
            unstable_defaultSxConfig: () => a.A,
          });
        var r = n(8812),
          o = n(8698),
          a = n(7758);
      },
      8812: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => c, k: () => s });
        var r = n(410),
          o = n(3815),
          a = n(7162),
          i = n(9751),
          l = n(7758);
        function s() {
          function e(e, t, n, o) {
            const l = { [e]: t, theme: n },
              s = o[e];
            if (!s) return { [e]: t };
            const { cssProperty: u = e, themeKey: c, transform: f, style: d } = s;
            if (null == t) return null;
            if ('typography' === c && 'inherit' === t) return { [e]: t };
            const p = (0, a.Yn)(n, c) || {};
            if (d) return d(l);
            return (0, i.NI)(l, t, (t) => {
              let n = (0, a.BO)(p, f, t);
              return (
                t === n &&
                  'string' === typeof t &&
                  (n = (0, a.BO)(p, f, ''.concat(e).concat('default' === t ? '' : (0, r.A)(t)), t)),
                !1 === u ? n : { [u]: n }
              );
            });
          }
          return function t(n) {
            var r;
            const { sx: a, theme: s = {} } = n || {};
            if (!a) return null;
            const u = null != (r = s.unstable_sxConfig) ? r : l.A;
            function c(n) {
              let r = n;
              if ('function' === typeof n) r = n(s);
              else if ('object' !== typeof n) return n;
              if (!r) return null;
              const a = (0, i.EU)(s.breakpoints),
                l = Object.keys(a);
              let c = a;
              return (
                Object.keys(r).forEach((n) => {
                  const a = ((l = r[n]), (f = s), 'function' === typeof l ? l(f) : l);
                  var l, f;
                  if (null !== a && void 0 !== a)
                    if ('object' === typeof a)
                      if (u[n]) c = (0, o.A)(c, e(n, a, s, u));
                      else {
                        const e = (0, i.NI)({ theme: s }, a, (e) => ({ [n]: e }));
                        !(function () {
                          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                          const r = t.reduce((e, t) => e.concat(Object.keys(t)), []),
                            o = new Set(r);
                          return t.every((e) => o.size === Object.keys(e).length);
                        })(e, a)
                          ? (c = (0, o.A)(c, e))
                          : (c[n] = t({ sx: a, theme: s }));
                      }
                    else c = (0, o.A)(c, e(n, a, s, u));
                }),
                (0, i.vf)(l, c)
              );
            }
            return Array.isArray(a) ? a.map(c) : c(a);
          };
        }
        const u = s();
        u.filterProps = ['sx'];
        const c = u;
      },
      410: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => o });
        var r = n(6632);
        function o(e) {
          if ('string' !== typeof e) throw new Error((0, r.A)(7));
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
      },
      578: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => r.A });
        var r = n(410);
      },
      1098: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => r });
        const r = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_SAFE_INTEGER;
          return Math.max(t, Math.min(e, n));
        };
      },
      3216: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => i, Q: () => o });
        var r = n(8168);
        function o(e) {
          if ('object' !== typeof e || null === e) return !1;
          const t = Object.getPrototypeOf(e);
          return (
            (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        }
        function a(e) {
          if (!o(e)) return e;
          const t = {};
          return (
            Object.keys(e).forEach((n) => {
              t[n] = a(e[n]);
            }),
            t
          );
        }
        function i(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { clone: !0 };
          const l = n.clone ? (0, r.A)({}, e) : e;
          return (
            o(e) &&
              o(t) &&
              Object.keys(t).forEach((r) => {
                o(t[r]) && Object.prototype.hasOwnProperty.call(e, r) && o(e[r])
                  ? (l[r] = i(e[r], t[r], n))
                  : n.clone
                    ? (l[r] = o(t[r]) ? a(t[r]) : t[r])
                    : (l[r] = t[r]);
              }),
            l
          );
        }
      },
      4534: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => r.A, isPlainObject: () => r.Q });
        var r = n(3216);
      },
      6632: (e, t, n) => {
        'use strict';
        function r(e) {
          let t = 'https://mui.com/production-error/?code=' + e;
          for (let n = 1; n < arguments.length; n += 1) t += '&args[]=' + encodeURIComponent(arguments[n]);
          return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
        }
        n.d(t, { A: () => r });
      },
      7245: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => r.A });
        var r = n(6632);
      },
      2046: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => s, getFunctionName: () => a });
        var r = n(9565);
        const o = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
        function a(e) {
          const t = ''.concat(e).match(o);
          return (t && t[1]) || '';
        }
        function i(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return e.displayName || e.name || a(e) || t;
        }
        function l(e, t, n) {
          const r = i(t);
          return e.displayName || ('' !== r ? ''.concat(n, '(').concat(r, ')') : n);
        }
        function s(e) {
          if (null != e) {
            if ('string' === typeof e) return e;
            if ('function' === typeof e) return i(e, 'Component');
            if ('object' === typeof e)
              switch (e.$$typeof) {
                case r.ForwardRef:
                  return l(e, e.render, 'ForwardRef');
                case r.Memo:
                  return l(e, e.type, 'memo');
                default:
                  return;
              }
          }
        }
      },
      8609: (e, t) => {
        'use strict';
        var n,
          r = Symbol.for('react.element'),
          o = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          i = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          c = Symbol.for('react.server_context'),
          f = Symbol.for('react.forward_ref'),
          d = Symbol.for('react.suspense'),
          p = Symbol.for('react.suspense_list'),
          h = Symbol.for('react.memo'),
          m = Symbol.for('react.lazy'),
          g = Symbol.for('react.offscreen');
        function y(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case l:
                  case i:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case u:
                      case f:
                      case m:
                      case h:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for('react.module.reference')), (t.ForwardRef = f), (t.Memo = h);
      },
      9565: (e, t, n) => {
        'use strict';
        e.exports = n(8609);
      },
      219: (e, t, n) => {
        'use strict';
        var r = n(3763),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
          i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
          l = {};
        function s(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ('string' !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var i = c(n);
            f && (i = i.concat(f(n)));
            for (var l = s(t), m = s(n), g = 0; g < i.length; ++g) {
              var y = i[g];
              if (!a[y] && (!r || !r[y]) && (!m || !m[y]) && (!l || !l[y])) {
                var v = d(n, y);
                try {
                  u(t, y, v);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      4983: (e, t) => {
        'use strict';
        var n = 'function' === typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          o = n ? Symbol.for('react.portal') : 60106,
          a = n ? Symbol.for('react.fragment') : 60107,
          i = n ? Symbol.for('react.strict_mode') : 60108,
          l = n ? Symbol.for('react.profiler') : 60114,
          s = n ? Symbol.for('react.provider') : 60109,
          u = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          f = n ? Symbol.for('react.concurrent_mode') : 60111,
          d = n ? Symbol.for('react.forward_ref') : 60112,
          p = n ? Symbol.for('react.suspense') : 60113,
          h = n ? Symbol.for('react.suspense_list') : 60120,
          m = n ? Symbol.for('react.memo') : 60115,
          g = n ? Symbol.for('react.lazy') : 60116,
          y = n ? Symbol.for('react.block') : 60121,
          v = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          x = n ? Symbol.for('react.scope') : 60119;
        function w(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case a:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case d:
                      case g:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function k(e) {
          return w(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = a),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || w(e) === c;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return 'object' === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === g;
          }),
          (t.isMemo = function (e) {
            return w(e) === m;
          }),
          (t.isPortal = function (e) {
            return w(e) === o;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === i;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' === typeof e ||
              'function' === typeof e ||
              e === a ||
              e === f ||
              e === l ||
              e === i ||
              e === p ||
              e === h ||
              ('object' === typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === d ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === x ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = w);
      },
      3763: (e, t, n) => {
        'use strict';
        e.exports = n(4983);
      },
      2730: (e, t, n) => {
        'use strict';
        var r = n(5043),
          o = n(8853);
        function a(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return !!f.call(h, e) || (!f.call(p, e) && (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          S = Symbol.for('react.fragment'),
          C = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          P = Symbol.for('react.provider'),
          _ = Symbol.for('react.context'),
          A = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          R = Symbol.for('react.suspense_list'),
          N = Symbol.for('react.memo'),
          M = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var O = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'), Symbol.for('react.cache'), Symbol.for('react.tracing_marker');
        var z = Symbol.iterator;
        function L(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (z && e[z]) || e['@@iterator'])
              ? e
              : null;
        }
        var j,
          I = Object.assign;
        function U(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || '';
            }
          return '\n' + j + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return '';
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var o = u.stack.split('\n'), a = r.stack.split('\n'), i = o.length - 1, l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = '\n' + o[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? U(e) : '';
        }
        function D(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U('Lazy');
            case 13:
              return U('Suspense');
            case 19:
              return U('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return '';
          }
        }
        function W(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case S:
              return 'Fragment';
            case k:
              return 'Portal';
            case E:
              return 'Profiler';
            case C:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case R:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || 'Context') + '.Consumer';
              case P:
                return (e._context.displayName || 'Context') + '.Provider';
              case A:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                  e
                );
              case N:
                return null !== (t = e.displayName || null) ? t : W(e.type) || 'Memo';
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(t);
            case 8:
              return t === C ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function K(e) {
          var t = e.type;
          return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = K(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if ('undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0)))
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, H(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + H(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ae(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function le(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? le(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
              ? ('' + t).trim()
              : t + 'px';
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ye = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ve(e, t) {
          if (t) {
            if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if ('object' !== typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(a(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ce = null;
        function Ee(e) {
          if ((e = xo(e))) {
            if ('function' !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ce ? Ce.push(e) : (Ce = [e])) : (Se = e);
        }
        function _e() {
          if (Se) {
            var e = Se,
              t = Ce;
            if (((Ce = Se = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ae(e, t) {
          return e(t);
        }
        function Te() {}
        var Re = !1;
        function Ne(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Ae(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== Ce) && (Te(), _e());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var ze = {};
            Object.defineProperty(ze, 'passive', {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener('test', ze, ze),
              window.removeEventListener('test', ze, ze);
          } catch (ce) {
            Oe = !1;
          }
        function Le(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Ie = null,
          Ue = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (je = !0), (Ie = e);
            },
          };
        function De(e, t, n, r, o, a, i, l, s) {
          (je = !1), (Ie = null), Le.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function Ke(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return He(o), e;
                    if (i === r) return He(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = o.unstable_scheduleCallback,
          Qe = o.unstable_cancelCallback,
          Ye = o.unstable_shouldYield,
          Ge = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          kt,
          St,
          Ct,
          Et,
          Pt = !1,
          _t = [],
          At = null,
          Tt = null,
          Rt = null,
          Nt = new Map(),
          Mt = new Map(),
          Ot = [],
          zt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function Lt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              At = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Tt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Rt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Nt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Mt.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = xo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function It(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = xo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Bt() {
          (Pt = !1),
            null !== At && Ut(At) && (At = null),
            null !== Tt && Ut(Tt) && (Tt = null),
            null !== Rt && Ut(Rt) && (Rt = null),
            Nt.forEach(Ft),
            Mt.forEach(Ft);
        }
        function Dt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt || ((Pt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Dt(t, e);
          }
          if (0 < _t.length) {
            Dt(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== At && Dt(At, e),
              null !== Tt && Dt(Tt, e),
              null !== Rt && Dt(Rt, e),
              Nt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; ) It(n), null === n.blockedOn && Ot.shift();
        }
        var $t = x.ReactCurrentBatchConfig,
          Ht = !0;
        function Kt(e, t, n, r) {
          var o = bt,
            a = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = a);
          }
        }
        function Vt(e, t, n, r) {
          var o = bt,
            a = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var o = Yt(e, t, n, r);
            if (null === o) Hr(e, t, r, Qt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (At = jt(At, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Tt = jt(Tt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (Rt = jt(Rt, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var a = o.pointerId;
                    return Nt.set(a, jt(Nt.get(a) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (a = o.pointerId), Mt.set(a, jt(Mt.get(a) || null, e, t, n, r, o)), !0;
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== o; ) {
                var a = xo(o);
                if ((null !== a && wt(a), null === (a = Yt(e, t, n, r)) && Hr(e, t, r, Qt, n), a === o))
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = bo((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = 'value' in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          fn = I({}, un, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((an = e.screenX - sn.screenX), (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(I({}, pn, { dataTransfer: 0 })),
          gn = on(I({}, fn, { relatedTarget: 0 })),
          yn = on(I({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          vn = I({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = on(vn),
          xn = on(I({}, un, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          kn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Sn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return Cn;
        }
        var Pn = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? kn[e.keyCode] || 'Unidentified'
                  : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          _n = on(Pn),
          An = on(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Tn = on(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          Rn = on(I({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Nn = I({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = on(Nn),
          On = [9, 13, 27, 32],
          zn = c && 'CompositionEvent' in window,
          Ln = null;
        c && 'documentMode' in document && (Ln = document.documentMode);
        var jn = c && 'TextEvent' in window && !Ln,
          In = c && (!zn || (Ln && 8 < Ln && 11 >= Ln)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== On.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Dn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Wn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!$n[e.type] : 'textarea' === t;
        }
        function Kn(e, t, n, r) {
          Pe(r),
            0 < (t = Vr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          qn = null;
        function Qn(e) {
          Ur(e, 0);
        }
        function Yn(e) {
          if (q(wo(e))) return e;
        }
        function Gn(e, t) {
          if ('change' === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent('onpropertychange', nr), (qn = Vn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Yn(qn)) {
            var t = [];
            Kn(t, qn, e, we(e)), Ne(Qn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Vn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Yn(qn);
        }
        function ar(e, t) {
          if ('click' === e) return Yn(t);
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Yn(t);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function xr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ('selectionStart' in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Vr(yr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var kr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          Sr = {},
          Cr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Cr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          'TransitionEvent' in window || delete kr.transitionend.transition);
        var Pr = Er('animationend'),
          _r = Er('animationiteration'),
          Ar = Er('animationstart'),
          Tr = Er('transitionend'),
          Rr = new Map(),
          Nr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Mr(e, t) {
          Rr.set(e, t), s(t, [e]);
        }
        for (var Or = 0; Or < Nr.length; Or++) {
          var zr = Nr[Or];
          Mr(zr.toLowerCase(), 'on' + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Mr(Pr, 'onAnimationEnd'),
          Mr(_r, 'onAnimationIteration'),
          Mr(Ar, 'onAnimationStart'),
          Mr('dblclick', 'onDoubleClick'),
          Mr('focusin', 'onFocus'),
          Mr('focusout', 'onBlur'),
          Mr(Tr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
          ),
          s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          s('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
          s('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
          s('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
        var Lr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          jr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Lr));
        function Ir(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((De.apply(this, arguments), je)) {
                if (!je) throw Error(a(198));
                var c = Ie;
                (je = !1), (Ie = null), Ue || ((Ue = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
                  Ir(o, l, u), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ir(o, l, u), (a = s);
                }
            }
          }
          if (Ue) throw ((e = Fe), (Ue = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + '__bubble';
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Dr = '_reactListening' + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Dr]) {
            (e[Dr] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t && (jr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Dr] || ((t[Dr] = !0), Br('selectionchange', !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var o = Kt;
              break;
            case 4:
              o = Vt;
              break;
            default:
              o = qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Oe || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o || (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = a,
              o = we(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = _n;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = gn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = gn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Tn;
                    break;
                  case Pr:
                  case _r:
                  case Ar:
                    s = yn;
                    break;
                  case Tr:
                    s = Rn;
                    break;
                  case 'scroll':
                    s = dn;
                    break;
                  case 'wheel':
                    s = Mn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = An;
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== d && null != (m = Me(h, d)) && c.push(Kr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((l = new s(l, u, null, n, o)), i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (s || l) &&
                  ((l =
                    o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                  s
                    ? ((s = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) &&
                        (u !== (f = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = An), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                  (f = null == s ? l : wo(s)),
                  (p = null == u ? l : wo(u)),
                  ((l = new c(m, h + 'leave', s, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + 'enter', u, n, o)).target = p), (c.relatedTarget = f), (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(i, l, s, c, !1), null !== u && null !== f && Qr(i, f, u, c, !0);
              }
              if (
                'select' === (s = (l = r ? wo(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
              )
                var g = Gn;
              else if (Hn(l))
                if (Xn) g = ir;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (s = l.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Kn(i, g, n, o)
                  : (y && y(e, l, r),
                    'focusout' === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (y = r ? wo(r) : window),
                e)
              ) {
                case 'focusin':
                  (Hn(y) || 'true' === y.contentEditable) && ((gr = y), (yr = r), (vr = null));
                  break;
                case 'focusout':
                  vr = yr = gr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), xr(i, n, o);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  xr(i, n, o);
              }
              var v;
              if (zn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Bn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (In &&
                  'ko' !== n.locale &&
                  (Wn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Wn && (v = en())
                    : ((Jt = 'value' in (Xt = o) ? Xt.value : Xt.textContent), (Wn = !0))),
                0 < (y = Vr(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Dn(n)) && (b.data = v))),
                (v = jn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Dn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case 'textInput':
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return 'compositionend' === e || (!zn && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return In && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, 'onBeforeInput')).length &&
                  ((o = new xn('onBeforeInput', 'beforeinput', null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Ur(i, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Me(e, n)) && r.unshift(Kr(e, a, o)),
              null != (a = Me(e, t)) && r.push(Kr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Me(n, a)) && i.unshift(Kr(n, s, l))
                : o || (null != (s = Me(n, a)) && i.push(Kr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e).replace(Yr, '\n').replace(Gr, '');
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ao = 'function' === typeof Promise ? Promise : void 0,
          io =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo);
                  }
                : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function so(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Wt(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = o;
          } while (n);
          Wt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = '__reactFiber$' + fo,
          ho = '__reactProps$' + fo,
          mo = '__reactContainer$' + fo,
          go = '__reactEvents$' + fo,
          yo = '__reactListeners$' + fo,
          vo = '__reactHandles$' + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xo(e) {
          return !(e = e[po] || e[mo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var So = [],
          Co = -1;
        function Eo(e) {
          return { current: e };
        }
        function Po(e) {
          0 > Co || ((e.current = So[Co]), (So[Co] = null), Co--);
        }
        function _o(e, t) {
          Co++, (So[Co] = e.current), (e.current = t);
        }
        var Ao = {},
          To = Eo(Ao),
          Ro = Eo(!1),
          No = Ao;
        function Mo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ao;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Oo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function zo() {
          Po(Ro), Po(To);
        }
        function Lo(e, t, n) {
          if (To.current !== Ao) throw Error(a(168));
          _o(To, t), _o(Ro, n);
        }
        function jo(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext())) if (!(o in t)) throw Error(a(108, $(e) || 'Unknown', o));
          return I({}, n, r);
        }
        function Io(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ao),
            (No = To.current),
            _o(To, e),
            _o(Ro, Ro.current),
            !0
          );
        }
        function Uo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = jo(e, t, No)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Po(Ro),
              Po(To),
              _o(To, e))
            : Po(Ro),
            _o(Ro, n);
        }
        var Fo = null,
          Bo = !1,
          Do = !1;
        function Wo(e) {
          null === Fo ? (Fo = [e]) : Fo.push(e);
        }
        function $o() {
          if (!Do && null !== Fo) {
            Do = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fo = null), (Bo = !1);
            } catch (o) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), qe(Ze, $o), o);
            } finally {
              (bt = t), (Do = !1);
            }
          }
          return null;
        }
        var Ho = [],
          Ko = 0,
          Vo = null,
          qo = 0,
          Qo = [],
          Yo = 0,
          Go = null,
          Xo = 1,
          Jo = '';
        function Zo(e, t) {
          (Ho[Ko++] = qo), (Ho[Ko++] = Vo), (Vo = e), (qo = t);
        }
        function ea(e, t, n) {
          (Qo[Yo++] = Xo), (Qo[Yo++] = Jo), (Qo[Yo++] = Go), (Go = e);
          var r = Xo;
          e = Jo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Jo = a + e);
          } else (Xo = (1 << a) | (n << o) | r), (Jo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Vo; ) (Vo = Ho[--Ko]), (Ho[Ko] = null), (qo = Ho[--Ko]), (Ho[Ko] = null);
          for (; e === Go; )
            (Go = Qo[--Yo]),
              (Qo[Yo] = null),
              (Jo = Qo[--Yo]),
              (Qo[Yo] = null),
              (Xo = Qo[--Yo]),
              (Qo[Yo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Nu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Go ? { id: Xo, overflow: Jo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Nu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && sa(e, t) ? la(r, n) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function fa(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          ra = e;
        }
        function da(e) {
          if (e !== ra) return !1;
          if (!aa) return fa(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = uo(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = x.ReactCurrentBatchConfig;
        function ya(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = '' + e;
              return null !== t && null !== t.ref && 'function' === typeof t.ref && t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function va(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ('object' === typeof a && null !== a && a.$$typeof === M && ba(a) === t.type))
                ? (((r = o(t, n.props)).ref = ya(e, t, n)), (r.return = e), r)
                : (((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = ya(e, t, n)), (r.return = e), r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Iu('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = ya(e, null, t)),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Uu(t, e.mode, n)).return = e), t;
                case M:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t)) return ((t = Lu(t, e.mode, n, null)).return = e), t;
              va(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== o ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? u(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case M:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== o ? null : f(e, t, n, r, null);
              va(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case k:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || L(r)) return f(t, (e = e.get(n) || null), r, o, null);
              va(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (var u = null, c = null, f = a, m = (a = 0), g = null; null !== f && m < l.length; m++) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var y = p(o, f, l[m], s);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              e && f && null === y.alternate && t(o, f),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (f = g);
            }
            if (m === l.length) return n(o, f), aa && Zo(o, m), u;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(o, l[m], s)) &&
                  ((a = i(f, a, m)), null === c ? (u = f) : (c.sibling = f), (c = f));
              return aa && Zo(o, m), u;
            }
            for (f = r(o, f); m < l.length; m++)
              null !== (g = h(f, o, m, l[m], s)) &&
                (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          function g(o, l, s, u) {
            var c = L(s);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), m = l, g = (l = 0), y = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (v.done) return n(o, m), aa && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = d(o, v.value, u)) &&
                  ((l = i(v, l, g)), null === f ? (c = v) : (f.sibling = v), (f = v));
              return aa && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = s.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e && null !== v.alternate && m.delete(null === v.key ? g : v.key),
                (l = i(v, l, g)),
                null === f ? (c = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              c
            );
          }
          return function e(r, a, i, s) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((a = o(c, i.props.children)).return = r), (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u && null !== u && u.$$typeof === M && ba(u) === c.type)
                        ) {
                          n(r, c.sibling), ((a = o(c, i.props)).ref = ya(r, c, i)), (a.return = r), (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((a = Lu(i.props.children, r.mode, s, i.key)).return = r), (r = a))
                      : (((s = zu(i.type, i.key, i.props, null, r.mode, s)).ref = ya(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling), ((a = o(a, i.children || [])).return = r), (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Uu(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case M:
                  return e(r, a, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, a, i, s);
              if (L(i)) return g(r, a, i, s);
              va(r, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Iu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var wa = xa(!0),
          ka = xa(!1),
          Sa = Eo(null),
          Ca = null,
          Ea = null,
          Pa = null;
        function _a() {
          Pa = Ea = Ca = null;
        }
        function Aa(e) {
          var t = Sa.current;
          Po(Sa), (e._currentValue = t);
        }
        function Ta(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ra(e, t) {
          (Ca = e),
            (Pa = Ea = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function Na(e) {
          var t = e._currentValue;
          if (Pa !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === Ea)) {
              if (null === Ca) throw Error(a(308));
              (Ea = e), (Ca.dependencies = { lanes: 0, firstContext: e });
            } else Ea = Ea.next = e;
          return t;
        }
        var Ma = null;
        function Oa(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function za(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o ? ((n.next = n), Oa(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var ja = !1;
        function Ia(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ua(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fa(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Ba(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & As))) {
            var o = r.pending;
            return null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), La(e, n);
          }
          return (
            null === (o = r.interleaved) ? ((t.next = t), Oa(r)) : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function Da(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Wa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
        }
        function $a(e, t, n, r) {
          var o = e.updateQueue;
          ja = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null === (d = 'function' === typeof (h = m.payload) ? h.call(p, f, d) : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      ja = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next), (d.next = null), (o.lastBaseUpdate = d), (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (js |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' !== typeof o)) throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ka = {},
          Va = Eo(Ka),
          qa = Eo(Ka),
          Qa = Eo(Ka);
        function Ya(e) {
          if (e === Ka) throw Error(a(174));
          return e;
        }
        function Ga(e, t) {
          switch ((_o(Qa, t), _o(qa, e), _o(Va, Ka), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Po(Va), _o(Va, t);
        }
        function Xa() {
          Po(Va), Po(qa), Po(Qa);
        }
        function Ja(e) {
          Ya(Qa.current);
          var t = Ya(Va.current),
            n = se(t, e.type);
          t !== n && (_o(qa, e), _o(Va, n));
        }
        function Za(e) {
          qa.current === e && (Po(Va), Po(qa));
        }
        var ei = Eo(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var oi = x.ReactCurrentDispatcher,
          ai = x.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          si = null,
          ui = null,
          ci = !1,
          fi = !1,
          di = 0,
          pi = 0;
        function hi() {
          throw Error(a(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, o, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (oi.current = null === e || null === e.memoizedState ? Zi : el),
            (e = n(r, o)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (di = 0), 25 <= i)) throw Error(a(301));
              (i += 1), (ui = si = null), (t.updateQueue = null), (oi.current = tl), (e = n(r, o));
            } while (fi);
          }
          if (
            ((oi.current = Ji),
            (t = null !== si && null !== si.next),
            (ii = 0),
            (ui = si = li = null),
            (ci = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function yi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function vi() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e), ui;
        }
        function bi() {
          if (null === si) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = si.next;
          var t = null === ui ? li.memoizedState : ui.next;
          if (null !== t) (ui = t), (si = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (si = e).memoizedState,
              baseState: si.baseState,
              baseQueue: si.baseQueue,
              queue: si.queue,
              next: null,
            }),
              null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e);
          }
          return ui;
        }
        function xi(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function wi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = si,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((ii & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d), (li.lanes |= f), (js |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (li.lanes |= i), (js |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (bl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Si() {}
        function Ci(e, t) {
          var n = li,
            r = bi(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (bl = !0)),
            (r = r.queue),
            ji(_i.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || i || (null !== ui && 1 & ui.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Ni(9, Pi.bind(null, n, r, o, t), void 0, null), null === Ts))
              throw Error(a(349));
            0 !== (30 & ii) || Ei(n, t, o);
          }
          return o;
        }
        function Ei(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (li.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Pi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ai(t) && Ti(e);
        }
        function _i(e, t, n) {
          return n(function () {
            Ai(t) && Ti(e);
          });
        }
        function Ai(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ti(e) {
          var t = La(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ri(e) {
          var t = vi();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Qi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Ni(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (li.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Mi() {
          return bi().memoizedState;
        }
        function Oi(e, t, n, r) {
          var o = vi();
          (li.flags |= e), (o.memoizedState = Ni(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function zi(e, t, n, r) {
          var o = bi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== si) {
            var i = si.memoizedState;
            if (((a = i.destroy), null !== r && mi(r, i.deps)))
              return void (o.memoizedState = Ni(t, n, a, r));
          }
          (li.flags |= e), (o.memoizedState = Ni(1 | t, n, a, r));
        }
        function Li(e, t) {
          return Oi(8390656, 8, e, t);
        }
        function ji(e, t) {
          return zi(2048, 8, e, t);
        }
        function Ii(e, t) {
          return zi(4, 2, e, t);
        }
        function Ui(e, t) {
          return zi(4, 4, e, t);
        }
        function Fi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Bi(e, t, n) {
          return (n = null !== n && void 0 !== n ? n.concat([e]) : null), zi(4, 4, Fi.bind(null, t, e), n);
        }
        function Di() {}
        function Wi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function $i(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Hi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bl = !0)), (e.memoizedState = n))
            : (lr(n, t) || ((n = mt()), (li.lanes |= n), (js |= n), (e.baseState = !0)), t);
        }
        function Ki(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ai.transition = r);
          }
        }
        function Vi() {
          return bi().memoizedState;
        }
        function qi(e, t, n) {
          var r = tu(e);
          if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Yi(e)))
            Gi(t, n);
          else if (null !== (n = za(e, t, n, r))) {
            nu(n, e, r, eu()), Xi(n, t, r);
          }
        }
        function Qi(e, t, n) {
          var r = tu(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (Yi(e)) Gi(t, o);
          else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((o.next = o), Oa(t)) : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = za(e, t, o, r)) && (nu(n, e, r, (o = eu())), Xi(n, t, r));
          }
        }
        function Yi(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function Gi(e, t) {
          fi = ci = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var Ji = {
            readContext: Na,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Na,
            useCallback: function (e, t) {
              return (vi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Na,
            useEffect: Li,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Oi(4194308, 4, Fi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Oi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Oi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vi();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = vi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qi.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vi().memoizedState = e);
            },
            useState: Ri,
            useDebugValue: Di,
            useDeferredValue: function (e) {
              return (vi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ri(!1),
                t = e[0];
              return (e = Ki.bind(null, e[1])), (vi().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                o = vi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ts)) throw Error(a(349));
                0 !== (30 & ii) || Ei(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Li(_i.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ni(9, Pi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vi(),
                t = Ts.identifierPrefix;
              if (aa) {
                var n = Jo;
                (t = ':' + t + 'R' + (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = pi++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Na,
            useCallback: Wi,
            useContext: Na,
            useEffect: ji,
            useImperativeHandle: Bi,
            useInsertionEffect: Ii,
            useLayoutEffect: Ui,
            useMemo: $i,
            useReducer: wi,
            useRef: Mi,
            useState: function () {
              return wi(xi);
            },
            useDebugValue: Di,
            useDeferredValue: function (e) {
              return Hi(bi(), si.memoizedState, e);
            },
            useTransition: function () {
              return [wi(xi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ci,
            useId: Vi,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Na,
            useCallback: Wi,
            useContext: Na,
            useEffect: ji,
            useImperativeHandle: Bi,
            useInsertionEffect: Ii,
            useLayoutEffect: Ui,
            useMemo: $i,
            useReducer: ki,
            useRef: Mi,
            useState: function () {
              return ki(xi);
            },
            useDebugValue: Di,
            useDeferredValue: function (e) {
              var t = bi();
              return null === si ? (t.memoizedState = e) : Hi(t, si.memoizedState, e);
            },
            useTransition: function () {
              return [ki(xi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ci,
            useId: Vi,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ol = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Fa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ba(e, a, o)) && (nu(t, e, o, r), Da(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ba(e, a, o)) && (nu(t, e, o, r), Da(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              o = Fa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Ba(e, o, r)) && (nu(t, e, r, n), Da(t, e, r));
          },
        };
        function al(e, t, n, r, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(o, a);
        }
        function il(e, t, n) {
          var r = !1,
            o = Ao,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Na(a))
              : ((o = Oo(t) ? No : To.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Mo(e, o) : Ao)),
            (t = new t(n, a)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ol),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ol.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ia(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = Na(a))
            : ((a = Oo(t) ? No : To.current), (o.context = Mo(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (rl(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount && o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && ol.enqueueReplaceState(o, o.state, null),
              $a(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function ul(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += D(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function cl(e, t, n) {
          return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = 'function' === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Ks = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t), 'function' !== typeof r && (null === Vs ? (Vs = new Set([this])) : Vs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t))
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate ? (n.tag = 17) : (((t = Fa(-1, 1)).tag = 2), Ba(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var vl = x.ReactCurrentOwner,
          bl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? ka(t, null, n, r) : wa(t, e.child, n, r);
        }
        function wl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ra(t, o),
            (r = gi(e, t, n, r, a, o)),
            (n = yi()),
            null === e || bl
              ? (aa && n && ta(t), (t.flags |= 1), xl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Hl(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return 'function' !== typeof a ||
              Mu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zu(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = a), Sl(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Hl(e, t, o);
          }
          return (t.flags |= 1), ((e = Ou(a, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Sl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Hl(e, t, o);
              0 !== (131072 & e.flags) && (bl = !0);
            }
          }
          return Pl(e, t, n, r, o);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), _o(Os, Ms), (Ms |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  _o(Os, Ms),
                  (Ms |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                _o(Os, Ms),
                (Ms |= r);
            }
          else
            null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), _o(Os, Ms), (Ms |= r);
          return xl(e, t, o, n), t.child;
        }
        function El(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pl(e, t, n, r, o) {
          var a = Oo(n) ? No : To.current;
          return (
            (a = Mo(t, a)),
            Ra(t, o),
            (n = gi(e, t, n, r, a, o)),
            (r = yi()),
            null === e || bl
              ? (aa && r && ta(t), (t.flags |= 1), xl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Hl(e, t, o))
          );
        }
        function _l(e, t, n, r, o) {
          if (Oo(n)) {
            var a = !0;
            Io(t);
          } else a = !1;
          if ((Ra(t, o), null === t.stateNode)) $l(e, t), il(t, n, r), sl(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            'object' === typeof u && null !== u ? (u = Na(u)) : (u = Mo(t, (u = Oo(n) ? No : To.current)));
            var c = n.getDerivedStateFromProps,
              f = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && ll(t, i, r, u)),
              (ja = !1);
            var d = t.memoizedState;
            (i.state = d),
              $a(t, r, i, o),
              (s = t.memoizedState),
              l !== r || d !== s || Ro.current || ja
                ? ('function' === typeof c && (rl(t, n, c, r), (s = t.memoizedState)),
                  (l = ja || al(t, n, l, r, d, s, u))
                    ? (f ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount && i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (i = t.stateNode),
              Ua(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Na(s))
                : (s = Mo(t, (s = Oo(n) ? No : To.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && ll(t, i, r, s)),
              (ja = !1),
              (d = t.memoizedState),
              (i.state = d),
              $a(t, r, i, o);
            var h = t.memoizedState;
            l !== f || d !== h || Ro.current || ja
              ? ('function' === typeof p && (rl(t, n, p, r), (h = t.memoizedState)),
                (u = ja || al(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Al(e, t, n, r, a, o);
        }
        function Al(e, t, n, r, o, a) {
          El(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Uo(t, n, !1), Hl(e, t, a);
          (r = t.stateNode), (vl.current = t);
          var l = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = wa(t, e.child, null, a)), (t.child = wa(t, null, l, a)))
              : xl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Uo(t, n, !0),
            t.child
          );
        }
        function Tl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Lo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Lo(0, t.context, !1),
            Ga(e, t.containerInfo);
        }
        function Rl(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var Nl,
          Ml,
          Ol,
          zl,
          Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
        function jl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Il(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ei.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r ? ((l = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
            _o(ei, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = ju(s, o, 0, null)),
                      (e = Lu(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = jl(n)),
                      (t.memoizedState = Ll),
                      e)
                    : Ul(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = cl(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = ju({ mode: 'visible', children: r.children }, o, 0, null)),
                      ((i = Lu(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && wa(t, e.child, null, l),
                      (t.child.memoizedState = jl(l)),
                      (t.memoizedState = Ll),
                      i);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var s = r.dgst;
                return (r = s), Fl(e, t, l, (r = cl((i = Error(a(419))), r, void 0)));
              }
              if (((s = 0 !== (l & e.childLanes)), bl || s)) {
                if (null !== (r = Ts)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), La(e, o), nu(r, e, o, -1));
                }
                return mu(), Fl(e, t, l, (r = cl(Error(a(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128), (t.child = e.child), (t = _u.bind(null, e)), (o._reactRetry = t), null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Qo[Yo++] = Xo),
                    (Qo[Yo++] = Jo),
                    (Qo[Yo++] = Go),
                    (Xo = e.id),
                    (Jo = e.overflow),
                    (Go = t)),
                  (t = Ul(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = Ou(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r ? (l = Ou(r, l)) : ((l = Lu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? jl(n)
                  : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ll),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Ou(l, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Ul(e, t) {
          return ((t = ju({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && ma(r),
            wa(t, e.child, null, n),
            ((e = Ul(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ta(e.return, t, n);
        }
        function Dl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xl(e, t, r.children, n), 0 !== (2 & (r = ei.current)))) (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_o(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (o = n), (n = n.sibling);
                null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                  Dl(t, !1, o, n, a);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ti(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Dl(t, !0, n, null, a);
                break;
              case 'together':
                Dl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (js |= t.lanes), 0 === (n & t.childLanes)))
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              (e = e.sibling), ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Vl(t), null;
            case 1:
            case 17:
              return Oo(t.type) && zo(), Vl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xa(),
                Po(Ro),
                Po(To),
                ri(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== ia && (iu(ia), (ia = null)))),
                Ml(e, t),
                Vl(t),
                null
              );
            case 5:
              Za(t);
              var o = Ya(Qa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ol(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Vl(t), null;
                }
                if (((e = Ya(Va.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Fr('cancel', r), Fr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Fr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Lr.length; o++) Fr(Lr[o], r);
                      break;
                    case 'source':
                      Fr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Fr('error', r), Fr('load', r);
                      break;
                    case 'details':
                      Fr('toggle', r);
                      break;
                    case 'input':
                      G(r, i), Fr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Fr('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, i), Fr('invalid', r);
                  }
                  for (var s in (ve(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e),
                            (o = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e),
                            (o = ['children', '' + u]))
                        : l.hasOwnProperty(s) && null != u && 'onScroll' === s && Fr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      V(r), Z(r, i, !0);
                      break;
                    case 'textarea':
                      V(r), ie(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            'select' === n &&
                              ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Nl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case 'dialog':
                        Fr('cancel', e), Fr('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Fr('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Lr.length; o++) Fr(Lr[o], e);
                        o = r;
                        break;
                      case 'source':
                        Fr('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Fr('error', e), Fr('load', e), (o = r);
                        break;
                      case 'details':
                        Fr('toggle', e), (o = r);
                        break;
                      case 'input':
                        G(e, r), (o = Y(e, r)), Fr('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = I({}, r, { value: void 0 })),
                          Fr('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), Fr('invalid', e);
                    }
                    for (i in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        'style' === i
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : 'children' === i
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && de(e, c)
                                : 'number' === typeof c && de(e, '' + c)
                              : 'suppressContentEditableWarning' !== i &&
                                'suppressHydrationWarning' !== i &&
                                'autoFocus' !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c && 'onScroll' === i && Fr('scroll', e)
                                  : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case 'input':
                        V(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        V(e), ie(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + H(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Vl(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(a(166));
                if (((n = Ya(Qa.current)), Ya(Va.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t),
                    (t.stateNode = r);
              }
              return Vl(t), null;
            case 13:
              if (
                (Po(ei),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                    i[po] = t;
                  } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Vl(t), (i = !1);
                } else null !== ia && (iu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current) ? 0 === zs && (zs = 3) : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vl(t),
                  null);
            case 4:
              return Xa(), Ml(e, t), null === e && Wr(t.stateNode.containerInfo), Vl(t), null;
            case 10:
              return Aa(t.type._context), Vl(t), null;
            case 19:
              if ((Po(ei), null === (i = t.memoizedState))) return Vl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ti(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return _o(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128), (r = !0), Kl(i, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail && 'hidden' === i.tailMode && !s.alternate && !aa)
                    )
                      return Vl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Kl(i, !1), (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s), (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ei.current),
                  _o(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ms) && (Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return Oo(t.type) && zo(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
              return (
                Xa(),
                Po(Ro),
                Po(To),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 5:
              return Za(t), null;
            case 13:
              if ((Po(ei), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Po(ei), null;
            case 4:
              return Xa(), null;
            case 10:
              return Aa(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Nl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ml = function () {}),
          (Ol = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ya(Va.current);
              var a,
                i = null;
              switch (n) {
                case 'input':
                  (o = Y(e, o)), (r = Y(e, r)), (i = []);
                  break;
                case 'select':
                  (o = I({}, o, { value: void 0 })), (r = I({}, r, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  'function' !== typeof o.onClick && 'function' === typeof r.onClick && (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var s = o[c];
                    for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                      for (a in u) u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : 'children' === c
                        ? ('string' !== typeof u && 'number' !== typeof u) || (i = i || []).push(c, '' + u)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && 'onScroll' === c && Fr('scroll', e), i || s === u || (i = []))
                            : (i = i || []).push(c, u));
              }
              n && (i = i || []).push('style', n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Gl = !1,
          Xl = 'function' === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && es(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function as(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), as(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po], delete t[ho], delete t[go], delete t[yo], delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; ) ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Gl || Zl(n, t);
            case 6:
              var r = cs,
                o = fs;
              (cs = null),
                ds(e, t, n),
                (fs = o),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n),
                    Wt(e))
                  : so(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (o = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Gl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag), void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && es(n, t, i), (o = o.next);
                } while (o !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (!Gl && (Zl(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (l) {
                  Cu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode ? ((Gl = (r = Gl) || null !== n.memoizedState), ds(e, t, n), (Gl = r)) : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Au.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(a(160));
                ps(i, l, o), (cs = null), (fs = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Cu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), ys(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Cu(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), ys(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if ((ms(t, e), ys(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  de(o, '');
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s && 'radio' === i.type && null != i.name && X(o, i), be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      'style' === f
                        ? ge(o, d)
                        : 'dangerouslySetInnerHTML' === f
                          ? fe(o, d)
                          : 'children' === f
                            ? de(o, d)
                            : b(o, f, d, c);
                    }
                    switch (s) {
                      case 'input':
                        J(o, i);
                        break;
                      case 'textarea':
                        ae(o, i);
                        break;
                      case 'select':
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    o[ho] = i;
                  } catch (g) {
                    Cu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 3:
              if ((ms(t, e), ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), ys(e);
              break;
            case 13:
              ms(t, e),
                ys(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i || (null !== o.alternate && null !== o.alternate.memoizedState) || (Ds = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Gl = (c = Gl) || f), ms(t, e), (Gl = c)) : ms(t, e),
                ys(e),
                8192 & r)
              ) {
                if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)))
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Cu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : ws(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? 'function' === typeof (i = o.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', l)));
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), ys(e), 4 & r && hs(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ''), (r.flags &= -33)), us(e, ls(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Cu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vs(e, t, n) {
          (Jl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Yl;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Gl;
                l = Yl;
                var u = Gl;
                if (((Yl = i), (Gl = s) && !u))
                  for (Jl = o; null !== Jl; )
                    (s = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(o)
                        : null !== s
                          ? ((s.return = i), (Jl = s))
                          : ks(o);
                for (; null !== a; ) (Jl = a), bs(a, t, n), (a = a.sibling);
                (Jl = o), (Yl = l), (Gl = u);
              }
              xs(e);
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Jl = a)) : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o = t.elementType === t.type ? n.memoizedProps : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                        }
                      var i = t.updateQueue;
                      null !== i && Ha(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ha(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Wt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Gl || (512 & t.flags && os(t));
              } catch (p) {
                Cu(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Cu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Cu(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Cu(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Cu(t, i, s);
                  }
              }
            } catch (s) {
              Cu(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Ss,
          Cs = Math.ceil,
          Es = x.ReactCurrentDispatcher,
          Ps = x.ReactCurrentOwner,
          _s = x.ReactCurrentBatchConfig,
          As = 0,
          Ts = null,
          Rs = null,
          Ns = 0,
          Ms = 0,
          Os = Eo(0),
          zs = 0,
          Ls = null,
          js = 0,
          Is = 0,
          Us = 0,
          Fs = null,
          Bs = null,
          Ds = 0,
          Ws = 1 / 0,
          $s = null,
          Hs = !1,
          Ks = null,
          Vs = null,
          qs = !1,
          Qs = null,
          Ys = 0,
          Gs = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & As) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & As) && 0 !== Ns
              ? Ns & -Ns
              : null !== ga.transition
                ? (0 === Zs && (Zs = mt()), Zs)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Xs = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & As) && e === Ts) ||
              (e === Ts && (0 === (2 & As) && (Is |= n), 4 === zs && lu(e, Ns)),
              ru(e, r),
              1 === n && 0 === As && 0 === (1 & t.mode) && ((Ws = Xe() + 500), Bo && $o()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ts ? Ns : 0);
          if (0 === r) null !== n && Qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Bo = !0), Wo(e);
                  })(su.bind(null, e))
                : Wo(su.bind(null, e)),
                io(function () {
                  0 === (6 & As) && $o();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tu(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & As))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ts ? Ns : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var o = As;
            As |= 2;
            var i = hu();
            for ((Ts === e && Ns === t) || (($s = null), (Ws = Xe() + 500), du(e, t)); ; )
              try {
                vu();
                break;
              } catch (s) {
                pu(e, s);
              }
            _a(), (Es.current = i), (As = o), null !== Rs ? (t = 0) : ((Ts = null), (Ns = 0), (t = zs));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = ht(e)) && ((r = o), (t = au(e, o))), 1 === t))
              throw ((n = Ls), du(e, 0), lu(e, r), ru(e, Xe()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = gu(e, r)) && 0 !== (i = ht(e)) && ((r = i), (t = au(e, i))), 1 === t))
              )
                throw ((n = Ls), du(e, 0), lu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  wu(e, Bs, $s);
                  break;
                case 3:
                  if ((lu(e, r), (130023424 & r) === r && 10 < (t = Ds + 500 - Xe()))) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(wu.bind(null, e, Bs, $s), t);
                    break;
                  }
                  wu(e, Bs, $s);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(wu.bind(null, e, Bs, $s), r);
                    break;
                  }
                  wu(e, Bs, $s);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function lu(e, t) {
          for (
            t &= ~Us, t &= ~Is, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & As)) throw Error(a(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Ls), du(e, 0), lu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate), (e.finishedLanes = t), wu(e, Bs, $s), ru(e, Xe()), null
          );
        }
        function uu(e, t) {
          var n = As;
          As |= 1;
          try {
            return e(t);
          } finally {
            0 === (As = n) && ((Ws = Xe() + 500), Bo && $o());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & As) && ku();
          var t = As;
          As |= 1;
          var n = _s.transition,
            r = bt;
          try {
            if (((_s.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_s.transition = n), 0 === (6 & (As = t)) && $o();
          }
        }
        function fu() {
          (Ms = Os.current), Po(Os);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Rs))
            for (n = Rs.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && zo();
                  break;
                case 3:
                  Xa(), Po(Ro), Po(To), ri();
                  break;
                case 5:
                  Za(r);
                  break;
                case 4:
                  Xa();
                  break;
                case 13:
                case 19:
                  Po(ei);
                  break;
                case 10:
                  Aa(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ts = e),
            (Rs = e = Ou(e.current, null)),
            (Ns = Ms = t),
            (zs = 0),
            (Ls = null),
            (Us = Is = js = 0),
            (Bs = Fs = null),
            null !== Ma)
          ) {
            for (t = 0; t < Ma.length; t++)
              if (null !== (r = (n = Ma[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Ma = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Rs;
            try {
              if ((_a(), (oi.current = Ji), ci)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ci = !1;
              }
              if (
                ((ii = 0),
                (ui = si = li = null),
                (fi = !1),
                (di = 0),
                (Ps.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (Ls = t), (Rs = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ns),
                  (s.flags |= 32768),
                  null !== u && 'object' === typeof u && 'function' === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257), yl(h, l, s, 0, t), 1 & h.mode && ml(i, c, t), (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & s.mode) {
                  var y = gl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256), yl(y, l, s, 0, t), ma(ul(u, s));
                    break e;
                  }
                }
                (i = u = ul(u, s)), 4 !== zs && (zs = 2), null === Fs ? (Fs = [i]) : Fs.push(i), (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Wa(i, pl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Vs || !Vs.has(b))))
                      ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t), Wa(i, hl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (x) {
              (t = x), Rs === n && null !== n && (Rs = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Es.current;
          return (Es.current = Ji), null === e ? Ji : e;
        }
        function mu() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Ts || (0 === (268435455 & js) && 0 === (268435455 & Is)) || lu(Ts, Ns);
        }
        function gu(e, t) {
          var n = As;
          As |= 2;
          var r = hu();
          for ((Ts === e && Ns === t) || (($s = null), du(e, t)); ; )
            try {
              yu();
              break;
            } catch (o) {
              pu(e, o);
            }
          if ((_a(), (As = n), (Es.current = r), null !== Rs)) throw Error(a(261));
          return (Ts = null), (Ns = 0), zs;
        }
        function yu() {
          for (; null !== Rs; ) bu(Rs);
        }
        function vu() {
          for (; null !== Rs && !Ye(); ) bu(Rs);
        }
        function bu(e) {
          var t = Ss(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps), null === t ? xu(e) : (Rs = t), (Ps.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Ms))) return void (Rs = n);
            } else {
              if (null !== (n = Ql(n, t))) return (n.flags &= 32767), void (Rs = n);
              if (null === e) return (zs = 6), void (Rs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Rs = t);
            Rs = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            o = _s.transition;
          try {
            (_s.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Qs);
                if (0 !== (6 & As)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ts && ((Rs = Ts = null), (Ns = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Tu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = _s.transition), (_s.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = As;
                  (As |= 4),
                    (Ps.current = null),
                    (function (e, t) {
                      if (((eo = Ht), pr((e = dr())))) {
                        if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                              n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n || (0 !== o && 3 !== d.nodeType) || (s = l + o),
                                    d !== i || (0 !== r && 3 !== d.nodeType) || (u = l + r),
                                    3 === d.nodeType && (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (to = { focusedElem: e, selectionRange: n }, Ht = !1, Jl = t; null !== Jl; )
                        if (((e = (t = Jl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? g : nl(t.type, g),
                                          y,
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Cu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(to),
                    (Ht = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    vs(n, e, o),
                    Ge(),
                    (As = s),
                    (bt = l),
                    (_s.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Qs = e), (Ys = o)),
                  (i = e.pendingLanes),
                  0 === i && (Vs = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Hs) throw ((Hs = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i) ? (e === Xs ? Gs++ : ((Gs = 0), (Xs = e))) : (Gs = 0),
                  $o();
              })(e, t, n, r);
          } finally {
            (_s.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Qs) {
            var e = xt(Ys),
              t = _s.transition,
              n = bt;
            try {
              if (((_s.transition = null), (bt = 16 > e ? 16 : e), null === Qs)) var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & As))) throw Error(a(331));
                var o = As;
                for (As |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((as(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Jl = v);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var x = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x) (x.return = l), (Jl = x);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Cu(s, s.return, k);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Jl = w);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (((As = o), $o(), at && 'function' === typeof at.onPostCommitFiberRoot))
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_s.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Ba(e, (t = pl(0, (t = ul(n, t)), 1)), 1)), (t = eu()), null !== e && (yt(e, 1, t), ru(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === Vs || !Vs.has(r)))
                ) {
                  (t = Ba(t, (e = hl(t, (e = ul(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (yt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ts === e &&
              (Ns & n) === n &&
              (4 === zs || (3 === zs && (130023424 & Ns) === Ns && 500 > Xe() - Ds) ? du(e, 0) : (Us |= n)),
            ru(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode) ? (t = 1) : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = La(e, t)) && (yt(e, t, n), ru(e, n));
        }
        function _u(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function Au(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Tu(e, t) {
          return qe(e, t);
        }
        function Ru(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nu(e, t, n, r) {
          return new Ru(e, t, n, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), 'function' === typeof e)) Mu(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Lu(n.children, o, i, t);
              case C:
                (l = 8), (o |= 8);
                break;
              case E:
                return ((e = Nu(12, n, t, 2 | o)).elementType = E), (e.lanes = i), e;
              case T:
                return ((e = Nu(13, n, t, o)).elementType = T), (e.lanes = i), e;
              case R:
                return ((e = Nu(19, n, t, o)).elementType = R), (e.lanes = i), e;
              case O:
                return ju(n, o, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case A:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return ((t = Nu(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function Lu(e, t, n, r) {
          return ((e = Nu(7, e, r, t)).lanes = n), e;
        }
        function ju(e, t, n, r) {
          return ((e = Nu(22, e, r, t)).elementType = O), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
        }
        function Iu(e, t, n) {
          return ((e = Nu(6, e, null, t)).lanes = n), e;
        }
        function Uu(e, t, n) {
          return (
            ((t = Nu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Fu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Nu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ia(a),
            e
          );
        }
        function Du(e) {
          if (!e) return Ao;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oo(n)) return jo(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, a, 0, l, s)).context = Du(null)),
            (n = e.current),
            ((a = Fa((r = eu()), (o = tu(n)))).callback = void 0 !== t && null !== t ? t : null),
            Ba(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ru(e, r),
            e
          );
        }
        function $u(e, t, n, r) {
          var o = t.current,
            a = eu(),
            i = tu(o);
          return (
            (n = Du(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ba(o, t, i)) && (nu(e, o, i, a), Da(e, o, i)),
            i
          );
        }
        function Hu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Ku(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Vu(e, t) {
          Ku(e, t), (e = e.alternate) && Ku(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ro.current) bl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Tl(t), ha();
                        break;
                      case 5:
                        Ja(t);
                        break;
                      case 1:
                        Oo(t.type) && Io(t);
                        break;
                      case 4:
                        Ga(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        _o(Sa, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_o(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Il(e, t, n)
                              : (_o(ei, 1 & ei.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        _o(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          _o(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              bl = 0 !== (131072 & e.flags);
            }
          else (bl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var o = Mo(t, To.current);
              Ra(t, n), (o = gi(null, t, r, e, o, n));
              var i = yi();
              return (
                (t.flags |= 1),
                'object' === typeof o && null !== o && 'function' === typeof o.render && void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oo(r) ? ((i = !0), Io(t)) : (i = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    Ia(t),
                    (o.updater = ol),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Al(null, t, r, !0, i, n)))
                  : ((t.tag = 0), aa && i && ta(t), xl(null, t, o, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === A) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  o)
                ) {
                  case 0:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type), (o = t.pendingProps), Pl(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 1:
              return (
                (r = t.type), (o = t.pendingProps), _l(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 3:
              e: {
                if ((Tl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps), (o = (i = t.memoizedState).element), Ua(e, t), $a(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Rl(e, t, r, n, (o = ul(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Rl(e, t, r, n, (o = ul(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = ka(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ja(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o) ? (l = null) : null !== i && no(r, i) && (t.flags |= 32),
                El(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Il(e, t, n);
            case 4:
              return (
                Ga(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wa(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type), (o = t.pendingProps), wl(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  _o(Sa, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Ro.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Fa(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f ? (u.next = u) : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ta(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ta(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ra(t, n),
                (r = r((o = Na(o)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (o = nl((r = t.type), t.pendingProps)), kl(e, t, r, (o = nl(r.type, o)), n);
            case 15:
              return Sl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : nl(r, o)),
                $l(e, t),
                (t.tag = 1),
                Oo(r) ? ((e = !0), Io(t)) : (e = !1),
                Ra(t, n),
                il(t, r, o),
                sl(t, r, o, n),
                Al(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Ju() {}
        function Zu(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var e = Hu(i);
                l.call(e);
              };
            }
            $u(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Hu(i);
                    a.call(e);
                  };
                }
                var i = Wu(t, r, e, 0, null, !1, 0, '', Ju);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var e = Hu(s);
                  l.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, '', Ju);
              return (
                (e._reactRootContainer = s),
                (e[mo] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  $u(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return Hu(i);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            $u(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  $u(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Ot.length && 0 !== t && t < Ot[n].priority; n++);
              Ot.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n && (vt(t, 1 | n), ru(t, Xe()), 0 === (6 & As) && ((Ws = Xe() + 500), $o()));
                }
                break;
              case 13:
                cu(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Vu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Vu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = La(e, t);
              if (null !== n) nu(n, e, t, eu());
              Vu(e, t);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      q(r), J(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ae(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ae = uu),
          (Te = cu);
        var ec = { usingClientEntryPoint: !1, Events: [xo, wo, ko, Pe, _e, uu] },
          tc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (ot = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Gu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: k,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(a(299));
            var n = !1,
              r = '',
              o = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = '',
              l = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = '18.3.1-next-f1338f8080-20240426');
      },
      4391: (e, t, n) => {
        'use strict';
        var r = n(7950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      7950: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(2730));
      },
      1153: (e, t, n) => {
        'use strict';
        var r = n(5043),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return { $$typeof: o, type: e, key: u, ref: c, props: a, _owner: l.current };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      4202: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (v.prototype = y.prototype);
        var x = (b.prototype = new v());
        (x.constructor = b), m(x, y.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
              k.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps) for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return { $$typeof: n, type: e, key: i, ref: l, props: a, _owner: S.current };
        }
        function P(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function A(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, o, a, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = '' === a ? '.' + A(s, 0) : a),
              w(i)
                ? ((o = ''),
                  null != e && (o = e.replace(_, '$&/') + '/'),
                  T(i, t, o, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (P(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o + (!i.key || (s && s.key === i.key) ? '' : ('' + i.key).replace(_, '$&/') + '/') + e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + A((l = e[u]), u);
              s += T(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                  ? e
                  : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += T((l = l.value), t, o, (c = a + A(l, u++)), i);
          else if ('object' === l)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            );
          return s;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          O = { transition: null },
          z = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: O, ReactCurrentOwner: S };
        function L() {
          throw Error('act(...) is not supported in production builds of React.');
        }
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e)) throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.act = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: N };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = L),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = '18.3.1');
      },
      5043: (e, t, n) => {
        'use strict';
        e.exports = n(4202);
      },
      579: (e, t, n) => {
        'use strict';
        e.exports = n(1153);
      },
      7234: (e, t) => {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = 'function' === typeof setTimeout ? setTimeout : null,
          v = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), O(k);
            else {
              var t = r(c);
              null !== t && z(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), v(P), (P = -1)), (h = !0);
          var a = p;
          try {
            for (x(n), d = r(u); null !== d && (!(d.expirationTime > n) || (e && !T())); ) {
              var i = d.callback;
              if ('function' === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()), 'function' === typeof l ? (d.callback = l) : d === r(u) && o(u), x(n);
              } else o(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && z(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          C = !1,
          E = null,
          P = -1,
          _ = 5,
          A = -1;
        function T() {
          return !(t.unstable_now() - A < _);
        }
        function R() {
          if (null !== E) {
            var e = t.unstable_now();
            A = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((C = !1), (E = null));
            }
          } else C = !1;
        }
        if ('function' === typeof b)
          S = function () {
            b(R);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var N = new MessageChannel(),
            M = N.port2;
          (N.port1.onmessage = R),
            (S = function () {
              M.postMessage(null);
            });
        } else
          S = function () {
            y(R, 0);
          };
        function O(e) {
          (E = e), C || ((C = !0), S());
        }
        function z(e, n) {
          P = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), O(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) && e === r(c) && (g ? (v(P), (P = -1)) : (g = !0), z(w, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), O(k))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      8853: (e, t, n) => {
        'use strict';
        e.exports = n(7234);
      },
      504: (e, t, n) => {
        !(function (e) {
          'use strict';
          var t = function (e) {
              var t,
                n = new Float64Array(16);
              if (e) for (t = 0; t < e.length; t++) n[t] = e[t];
              return n;
            },
            r = function () {
              throw new Error('no PRNG');
            },
            o = new Uint8Array(16),
            a = new Uint8Array(32);
          a[0] = 9;
          var i = t(),
            l = t([1]),
            s = t([56129, 1]),
            u = t([
              30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119,
              27886, 20995,
            ]),
            c = t([
              61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239,
              55772, 9222,
            ]),
            f = t([
              54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502,
              52590, 14035, 8553,
            ]),
            d = t([
              26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
              26214, 26214, 26214,
            ]),
            p = t([
              41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417,
              9344, 11139,
            ]);
          function h(e, t, n, r) {
            (e[t] = (n >> 24) & 255),
              (e[t + 1] = (n >> 16) & 255),
              (e[t + 2] = (n >> 8) & 255),
              (e[t + 3] = 255 & n),
              (e[t + 4] = (r >> 24) & 255),
              (e[t + 5] = (r >> 16) & 255),
              (e[t + 6] = (r >> 8) & 255),
              (e[t + 7] = 255 & r);
          }
          function m(e, t, n, r, o) {
            var a,
              i = 0;
            for (a = 0; a < o; a++) i |= e[t + a] ^ n[r + a];
            return (1 & ((i - 1) >>> 8)) - 1;
          }
          function g(e, t, n, r) {
            return m(e, t, n, r, 16);
          }
          function y(e, t, n, r) {
            return m(e, t, n, r, 32);
          }
          function v(e, t, n, r) {
            !(function (e, t, n, r) {
              for (
                var o,
                  a = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                  i = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                  l = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                  s = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                  u = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                  c = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                  f = (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
                  d = (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
                  p = (255 & t[8]) | ((255 & t[9]) << 8) | ((255 & t[10]) << 16) | ((255 & t[11]) << 24),
                  h = (255 & t[12]) | ((255 & t[13]) << 8) | ((255 & t[14]) << 16) | ((255 & t[15]) << 24),
                  m = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                  g = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
                  y = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
                  v = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
                  b = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
                  x = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                  w = a,
                  k = i,
                  S = l,
                  C = s,
                  E = u,
                  P = c,
                  _ = f,
                  A = d,
                  T = p,
                  R = h,
                  N = m,
                  M = g,
                  O = y,
                  z = v,
                  L = b,
                  j = x,
                  I = 0;
                I < 20;
                I += 2
              )
                (w ^=
                  ((o =
                    ((O ^=
                      ((o =
                        ((T ^=
                          ((o = ((E ^= ((o = (w + O) | 0) << 7) | (o >>> 25)) + w) | 0) << 9) | (o >>> 23)) +
                          E) |
                        0) <<
                        13) |
                      (o >>> 19)) +
                      T) |
                    0) <<
                    18) |
                  (o >>> 14)),
                  (P ^=
                    ((o =
                      ((k ^=
                        ((o =
                          ((z ^=
                            ((o = ((R ^= ((o = (P + k) | 0) << 7) | (o >>> 25)) + P) | 0) << 9) |
                            (o >>> 23)) +
                            R) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        z) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (N ^=
                    ((o =
                      ((_ ^=
                        ((o =
                          ((S ^=
                            ((o = ((L ^= ((o = (N + _) | 0) << 7) | (o >>> 25)) + N) | 0) << 9) |
                            (o >>> 23)) +
                            L) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        S) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (j ^=
                    ((o =
                      ((M ^=
                        ((o =
                          ((A ^=
                            ((o = ((C ^= ((o = (j + M) | 0) << 7) | (o >>> 25)) + j) | 0) << 9) |
                            (o >>> 23)) +
                            C) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        A) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (w ^=
                    ((o =
                      ((C ^=
                        ((o =
                          ((S ^=
                            ((o = ((k ^= ((o = (w + C) | 0) << 7) | (o >>> 25)) + w) | 0) << 9) |
                            (o >>> 23)) +
                            k) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        S) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (P ^=
                    ((o =
                      ((E ^=
                        ((o =
                          ((A ^=
                            ((o = ((_ ^= ((o = (P + E) | 0) << 7) | (o >>> 25)) + P) | 0) << 9) |
                            (o >>> 23)) +
                            _) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        A) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (N ^=
                    ((o =
                      ((R ^=
                        ((o =
                          ((T ^=
                            ((o = ((M ^= ((o = (N + R) | 0) << 7) | (o >>> 25)) + N) | 0) << 9) |
                            (o >>> 23)) +
                            M) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        T) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (j ^=
                    ((o =
                      ((L ^=
                        ((o =
                          ((z ^=
                            ((o = ((O ^= ((o = (j + L) | 0) << 7) | (o >>> 25)) + j) | 0) << 9) |
                            (o >>> 23)) +
                            O) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        z) |
                      0) <<
                      18) |
                    (o >>> 14));
              (w = (w + a) | 0),
                (k = (k + i) | 0),
                (S = (S + l) | 0),
                (C = (C + s) | 0),
                (E = (E + u) | 0),
                (P = (P + c) | 0),
                (_ = (_ + f) | 0),
                (A = (A + d) | 0),
                (T = (T + p) | 0),
                (R = (R + h) | 0),
                (N = (N + m) | 0),
                (M = (M + g) | 0),
                (O = (O + y) | 0),
                (z = (z + v) | 0),
                (L = (L + b) | 0),
                (j = (j + x) | 0),
                (e[0] = (w >>> 0) & 255),
                (e[1] = (w >>> 8) & 255),
                (e[2] = (w >>> 16) & 255),
                (e[3] = (w >>> 24) & 255),
                (e[4] = (k >>> 0) & 255),
                (e[5] = (k >>> 8) & 255),
                (e[6] = (k >>> 16) & 255),
                (e[7] = (k >>> 24) & 255),
                (e[8] = (S >>> 0) & 255),
                (e[9] = (S >>> 8) & 255),
                (e[10] = (S >>> 16) & 255),
                (e[11] = (S >>> 24) & 255),
                (e[12] = (C >>> 0) & 255),
                (e[13] = (C >>> 8) & 255),
                (e[14] = (C >>> 16) & 255),
                (e[15] = (C >>> 24) & 255),
                (e[16] = (E >>> 0) & 255),
                (e[17] = (E >>> 8) & 255),
                (e[18] = (E >>> 16) & 255),
                (e[19] = (E >>> 24) & 255),
                (e[20] = (P >>> 0) & 255),
                (e[21] = (P >>> 8) & 255),
                (e[22] = (P >>> 16) & 255),
                (e[23] = (P >>> 24) & 255),
                (e[24] = (_ >>> 0) & 255),
                (e[25] = (_ >>> 8) & 255),
                (e[26] = (_ >>> 16) & 255),
                (e[27] = (_ >>> 24) & 255),
                (e[28] = (A >>> 0) & 255),
                (e[29] = (A >>> 8) & 255),
                (e[30] = (A >>> 16) & 255),
                (e[31] = (A >>> 24) & 255),
                (e[32] = (T >>> 0) & 255),
                (e[33] = (T >>> 8) & 255),
                (e[34] = (T >>> 16) & 255),
                (e[35] = (T >>> 24) & 255),
                (e[36] = (R >>> 0) & 255),
                (e[37] = (R >>> 8) & 255),
                (e[38] = (R >>> 16) & 255),
                (e[39] = (R >>> 24) & 255),
                (e[40] = (N >>> 0) & 255),
                (e[41] = (N >>> 8) & 255),
                (e[42] = (N >>> 16) & 255),
                (e[43] = (N >>> 24) & 255),
                (e[44] = (M >>> 0) & 255),
                (e[45] = (M >>> 8) & 255),
                (e[46] = (M >>> 16) & 255),
                (e[47] = (M >>> 24) & 255),
                (e[48] = (O >>> 0) & 255),
                (e[49] = (O >>> 8) & 255),
                (e[50] = (O >>> 16) & 255),
                (e[51] = (O >>> 24) & 255),
                (e[52] = (z >>> 0) & 255),
                (e[53] = (z >>> 8) & 255),
                (e[54] = (z >>> 16) & 255),
                (e[55] = (z >>> 24) & 255),
                (e[56] = (L >>> 0) & 255),
                (e[57] = (L >>> 8) & 255),
                (e[58] = (L >>> 16) & 255),
                (e[59] = (L >>> 24) & 255),
                (e[60] = (j >>> 0) & 255),
                (e[61] = (j >>> 8) & 255),
                (e[62] = (j >>> 16) & 255),
                (e[63] = (j >>> 24) & 255);
            })(e, t, n, r);
          }
          function b(e, t, n, r) {
            !(function (e, t, n, r) {
              for (
                var o,
                  a = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                  i = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                  l = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                  s = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                  u = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                  c = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                  f = (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
                  d = (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
                  p = (255 & t[8]) | ((255 & t[9]) << 8) | ((255 & t[10]) << 16) | ((255 & t[11]) << 24),
                  h = (255 & t[12]) | ((255 & t[13]) << 8) | ((255 & t[14]) << 16) | ((255 & t[15]) << 24),
                  m = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                  g = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
                  y = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
                  v = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
                  b = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
                  x = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                  w = 0;
                w < 20;
                w += 2
              )
                (a ^=
                  ((o =
                    ((y ^=
                      ((o =
                        ((p ^=
                          ((o = ((u ^= ((o = (a + y) | 0) << 7) | (o >>> 25)) + a) | 0) << 9) | (o >>> 23)) +
                          u) |
                        0) <<
                        13) |
                      (o >>> 19)) +
                      p) |
                    0) <<
                    18) |
                  (o >>> 14)),
                  (c ^=
                    ((o =
                      ((i ^=
                        ((o =
                          ((v ^=
                            ((o = ((h ^= ((o = (c + i) | 0) << 7) | (o >>> 25)) + c) | 0) << 9) |
                            (o >>> 23)) +
                            h) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        v) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (m ^=
                    ((o =
                      ((f ^=
                        ((o =
                          ((l ^=
                            ((o = ((b ^= ((o = (m + f) | 0) << 7) | (o >>> 25)) + m) | 0) << 9) |
                            (o >>> 23)) +
                            b) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        l) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (x ^=
                    ((o =
                      ((g ^=
                        ((o =
                          ((d ^=
                            ((o = ((s ^= ((o = (x + g) | 0) << 7) | (o >>> 25)) + x) | 0) << 9) |
                            (o >>> 23)) +
                            s) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        d) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (a ^=
                    ((o =
                      ((s ^=
                        ((o =
                          ((l ^=
                            ((o = ((i ^= ((o = (a + s) | 0) << 7) | (o >>> 25)) + a) | 0) << 9) |
                            (o >>> 23)) +
                            i) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        l) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (c ^=
                    ((o =
                      ((u ^=
                        ((o =
                          ((d ^=
                            ((o = ((f ^= ((o = (c + u) | 0) << 7) | (o >>> 25)) + c) | 0) << 9) |
                            (o >>> 23)) +
                            f) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        d) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (m ^=
                    ((o =
                      ((h ^=
                        ((o =
                          ((p ^=
                            ((o = ((g ^= ((o = (m + h) | 0) << 7) | (o >>> 25)) + m) | 0) << 9) |
                            (o >>> 23)) +
                            g) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        p) |
                      0) <<
                      18) |
                    (o >>> 14)),
                  (x ^=
                    ((o =
                      ((b ^=
                        ((o =
                          ((v ^=
                            ((o = ((y ^= ((o = (x + b) | 0) << 7) | (o >>> 25)) + x) | 0) << 9) |
                            (o >>> 23)) +
                            y) |
                          0) <<
                          13) |
                        (o >>> 19)) +
                        v) |
                      0) <<
                      18) |
                    (o >>> 14));
              (e[0] = (a >>> 0) & 255),
                (e[1] = (a >>> 8) & 255),
                (e[2] = (a >>> 16) & 255),
                (e[3] = (a >>> 24) & 255),
                (e[4] = (c >>> 0) & 255),
                (e[5] = (c >>> 8) & 255),
                (e[6] = (c >>> 16) & 255),
                (e[7] = (c >>> 24) & 255),
                (e[8] = (m >>> 0) & 255),
                (e[9] = (m >>> 8) & 255),
                (e[10] = (m >>> 16) & 255),
                (e[11] = (m >>> 24) & 255),
                (e[12] = (x >>> 0) & 255),
                (e[13] = (x >>> 8) & 255),
                (e[14] = (x >>> 16) & 255),
                (e[15] = (x >>> 24) & 255),
                (e[16] = (f >>> 0) & 255),
                (e[17] = (f >>> 8) & 255),
                (e[18] = (f >>> 16) & 255),
                (e[19] = (f >>> 24) & 255),
                (e[20] = (d >>> 0) & 255),
                (e[21] = (d >>> 8) & 255),
                (e[22] = (d >>> 16) & 255),
                (e[23] = (d >>> 24) & 255),
                (e[24] = (p >>> 0) & 255),
                (e[25] = (p >>> 8) & 255),
                (e[26] = (p >>> 16) & 255),
                (e[27] = (p >>> 24) & 255),
                (e[28] = (h >>> 0) & 255),
                (e[29] = (h >>> 8) & 255),
                (e[30] = (h >>> 16) & 255),
                (e[31] = (h >>> 24) & 255);
            })(e, t, n, r);
          }
          var x = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
          function w(e, t, n, r, o, a, i) {
            var l,
              s,
              u = new Uint8Array(16),
              c = new Uint8Array(64);
            for (s = 0; s < 16; s++) u[s] = 0;
            for (s = 0; s < 8; s++) u[s] = a[s];
            for (; o >= 64; ) {
              for (v(c, u, i, x), s = 0; s < 64; s++) e[t + s] = n[r + s] ^ c[s];
              for (l = 1, s = 8; s < 16; s++) (l = (l + (255 & u[s])) | 0), (u[s] = 255 & l), (l >>>= 8);
              (o -= 64), (t += 64), (r += 64);
            }
            if (o > 0) for (v(c, u, i, x), s = 0; s < o; s++) e[t + s] = n[r + s] ^ c[s];
            return 0;
          }
          function k(e, t, n, r, o) {
            var a,
              i,
              l = new Uint8Array(16),
              s = new Uint8Array(64);
            for (i = 0; i < 16; i++) l[i] = 0;
            for (i = 0; i < 8; i++) l[i] = r[i];
            for (; n >= 64; ) {
              for (v(s, l, o, x), i = 0; i < 64; i++) e[t + i] = s[i];
              for (a = 1, i = 8; i < 16; i++) (a = (a + (255 & l[i])) | 0), (l[i] = 255 & a), (a >>>= 8);
              (n -= 64), (t += 64);
            }
            if (n > 0) for (v(s, l, o, x), i = 0; i < n; i++) e[t + i] = s[i];
            return 0;
          }
          function S(e, t, n, r, o) {
            var a = new Uint8Array(32);
            b(a, r, o, x);
            for (var i = new Uint8Array(8), l = 0; l < 8; l++) i[l] = r[l + 16];
            return k(e, t, n, i, a);
          }
          function C(e, t, n, r, o, a, i) {
            var l = new Uint8Array(32);
            b(l, a, i, x);
            for (var s = new Uint8Array(8), u = 0; u < 8; u++) s[u] = a[u + 16];
            return w(e, t, n, r, o, s, l);
          }
          var E = function (e) {
            var t, n, r, o, a, i, l, s;
            (this.buffer = new Uint8Array(16)),
              (this.r = new Uint16Array(10)),
              (this.h = new Uint16Array(10)),
              (this.pad = new Uint16Array(8)),
              (this.leftover = 0),
              (this.fin = 0),
              (t = (255 & e[0]) | ((255 & e[1]) << 8)),
              (this.r[0] = 8191 & t),
              (n = (255 & e[2]) | ((255 & e[3]) << 8)),
              (this.r[1] = 8191 & ((t >>> 13) | (n << 3))),
              (r = (255 & e[4]) | ((255 & e[5]) << 8)),
              (this.r[2] = 7939 & ((n >>> 10) | (r << 6))),
              (o = (255 & e[6]) | ((255 & e[7]) << 8)),
              (this.r[3] = 8191 & ((r >>> 7) | (o << 9))),
              (a = (255 & e[8]) | ((255 & e[9]) << 8)),
              (this.r[4] = 255 & ((o >>> 4) | (a << 12))),
              (this.r[5] = (a >>> 1) & 8190),
              (i = (255 & e[10]) | ((255 & e[11]) << 8)),
              (this.r[6] = 8191 & ((a >>> 14) | (i << 2))),
              (l = (255 & e[12]) | ((255 & e[13]) << 8)),
              (this.r[7] = 8065 & ((i >>> 11) | (l << 5))),
              (s = (255 & e[14]) | ((255 & e[15]) << 8)),
              (this.r[8] = 8191 & ((l >>> 8) | (s << 8))),
              (this.r[9] = (s >>> 5) & 127),
              (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
              (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
              (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
              (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
              (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
              (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
              (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
              (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8));
          };
          function P(e, t, n, r, o, a) {
            var i = new E(a);
            return i.update(n, r, o), i.finish(e, t), 0;
          }
          function _(e, t, n, r, o, a) {
            var i = new Uint8Array(16);
            return P(i, 0, n, r, o, a), g(e, t, i, 0);
          }
          function A(e, t, n, r, o) {
            var a;
            if (n < 32) return -1;
            for (C(e, 0, t, 0, n, r, o), P(e, 16, e, 32, n - 32, e), a = 0; a < 16; a++) e[a] = 0;
            return 0;
          }
          function T(e, t, n, r, o) {
            var a,
              i = new Uint8Array(32);
            if (n < 32) return -1;
            if ((S(i, 0, 32, r, o), 0 !== _(t, 16, t, 32, n - 32, i))) return -1;
            for (C(e, 0, t, 0, n, r, o), a = 0; a < 32; a++) e[a] = 0;
            return 0;
          }
          function R(e, t) {
            var n;
            for (n = 0; n < 16; n++) e[n] = 0 | t[n];
          }
          function N(e) {
            var t,
              n,
              r = 1;
            for (t = 0; t < 16; t++)
              (n = e[t] + r + 65535), (r = Math.floor(n / 65536)), (e[t] = n - 65536 * r);
            e[0] += r - 1 + 37 * (r - 1);
          }
          function M(e, t, n) {
            for (var r, o = ~(n - 1), a = 0; a < 16; a++) (r = o & (e[a] ^ t[a])), (e[a] ^= r), (t[a] ^= r);
          }
          function O(e, n) {
            var r,
              o,
              a,
              i = t(),
              l = t();
            for (r = 0; r < 16; r++) l[r] = n[r];
            for (N(l), N(l), N(l), o = 0; o < 2; o++) {
              for (i[0] = l[0] - 65517, r = 1; r < 15; r++)
                (i[r] = l[r] - 65535 - ((i[r - 1] >> 16) & 1)), (i[r - 1] &= 65535);
              (i[15] = l[15] - 32767 - ((i[14] >> 16) & 1)),
                (a = (i[15] >> 16) & 1),
                (i[14] &= 65535),
                M(l, i, 1 - a);
            }
            for (r = 0; r < 16; r++) (e[2 * r] = 255 & l[r]), (e[2 * r + 1] = l[r] >> 8);
          }
          function z(e, t) {
            var n = new Uint8Array(32),
              r = new Uint8Array(32);
            return O(n, e), O(r, t), y(n, 0, r, 0);
          }
          function L(e) {
            var t = new Uint8Array(32);
            return O(t, e), 1 & t[0];
          }
          function j(e, t) {
            var n;
            for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
            e[15] &= 32767;
          }
          function I(e, t, n) {
            for (var r = 0; r < 16; r++) e[r] = t[r] + n[r];
          }
          function U(e, t, n) {
            for (var r = 0; r < 16; r++) e[r] = t[r] - n[r];
          }
          function F(e, t, n) {
            var r,
              o,
              a = 0,
              i = 0,
              l = 0,
              s = 0,
              u = 0,
              c = 0,
              f = 0,
              d = 0,
              p = 0,
              h = 0,
              m = 0,
              g = 0,
              y = 0,
              v = 0,
              b = 0,
              x = 0,
              w = 0,
              k = 0,
              S = 0,
              C = 0,
              E = 0,
              P = 0,
              _ = 0,
              A = 0,
              T = 0,
              R = 0,
              N = 0,
              M = 0,
              O = 0,
              z = 0,
              L = 0,
              j = n[0],
              I = n[1],
              U = n[2],
              F = n[3],
              B = n[4],
              D = n[5],
              W = n[6],
              $ = n[7],
              H = n[8],
              K = n[9],
              V = n[10],
              q = n[11],
              Q = n[12],
              Y = n[13],
              G = n[14],
              X = n[15];
            (a += (r = t[0]) * j),
              (i += r * I),
              (l += r * U),
              (s += r * F),
              (u += r * B),
              (c += r * D),
              (f += r * W),
              (d += r * $),
              (p += r * H),
              (h += r * K),
              (m += r * V),
              (g += r * q),
              (y += r * Q),
              (v += r * Y),
              (b += r * G),
              (x += r * X),
              (i += (r = t[1]) * j),
              (l += r * I),
              (s += r * U),
              (u += r * F),
              (c += r * B),
              (f += r * D),
              (d += r * W),
              (p += r * $),
              (h += r * H),
              (m += r * K),
              (g += r * V),
              (y += r * q),
              (v += r * Q),
              (b += r * Y),
              (x += r * G),
              (w += r * X),
              (l += (r = t[2]) * j),
              (s += r * I),
              (u += r * U),
              (c += r * F),
              (f += r * B),
              (d += r * D),
              (p += r * W),
              (h += r * $),
              (m += r * H),
              (g += r * K),
              (y += r * V),
              (v += r * q),
              (b += r * Q),
              (x += r * Y),
              (w += r * G),
              (k += r * X),
              (s += (r = t[3]) * j),
              (u += r * I),
              (c += r * U),
              (f += r * F),
              (d += r * B),
              (p += r * D),
              (h += r * W),
              (m += r * $),
              (g += r * H),
              (y += r * K),
              (v += r * V),
              (b += r * q),
              (x += r * Q),
              (w += r * Y),
              (k += r * G),
              (S += r * X),
              (u += (r = t[4]) * j),
              (c += r * I),
              (f += r * U),
              (d += r * F),
              (p += r * B),
              (h += r * D),
              (m += r * W),
              (g += r * $),
              (y += r * H),
              (v += r * K),
              (b += r * V),
              (x += r * q),
              (w += r * Q),
              (k += r * Y),
              (S += r * G),
              (C += r * X),
              (c += (r = t[5]) * j),
              (f += r * I),
              (d += r * U),
              (p += r * F),
              (h += r * B),
              (m += r * D),
              (g += r * W),
              (y += r * $),
              (v += r * H),
              (b += r * K),
              (x += r * V),
              (w += r * q),
              (k += r * Q),
              (S += r * Y),
              (C += r * G),
              (E += r * X),
              (f += (r = t[6]) * j),
              (d += r * I),
              (p += r * U),
              (h += r * F),
              (m += r * B),
              (g += r * D),
              (y += r * W),
              (v += r * $),
              (b += r * H),
              (x += r * K),
              (w += r * V),
              (k += r * q),
              (S += r * Q),
              (C += r * Y),
              (E += r * G),
              (P += r * X),
              (d += (r = t[7]) * j),
              (p += r * I),
              (h += r * U),
              (m += r * F),
              (g += r * B),
              (y += r * D),
              (v += r * W),
              (b += r * $),
              (x += r * H),
              (w += r * K),
              (k += r * V),
              (S += r * q),
              (C += r * Q),
              (E += r * Y),
              (P += r * G),
              (_ += r * X),
              (p += (r = t[8]) * j),
              (h += r * I),
              (m += r * U),
              (g += r * F),
              (y += r * B),
              (v += r * D),
              (b += r * W),
              (x += r * $),
              (w += r * H),
              (k += r * K),
              (S += r * V),
              (C += r * q),
              (E += r * Q),
              (P += r * Y),
              (_ += r * G),
              (A += r * X),
              (h += (r = t[9]) * j),
              (m += r * I),
              (g += r * U),
              (y += r * F),
              (v += r * B),
              (b += r * D),
              (x += r * W),
              (w += r * $),
              (k += r * H),
              (S += r * K),
              (C += r * V),
              (E += r * q),
              (P += r * Q),
              (_ += r * Y),
              (A += r * G),
              (T += r * X),
              (m += (r = t[10]) * j),
              (g += r * I),
              (y += r * U),
              (v += r * F),
              (b += r * B),
              (x += r * D),
              (w += r * W),
              (k += r * $),
              (S += r * H),
              (C += r * K),
              (E += r * V),
              (P += r * q),
              (_ += r * Q),
              (A += r * Y),
              (T += r * G),
              (R += r * X),
              (g += (r = t[11]) * j),
              (y += r * I),
              (v += r * U),
              (b += r * F),
              (x += r * B),
              (w += r * D),
              (k += r * W),
              (S += r * $),
              (C += r * H),
              (E += r * K),
              (P += r * V),
              (_ += r * q),
              (A += r * Q),
              (T += r * Y),
              (R += r * G),
              (N += r * X),
              (y += (r = t[12]) * j),
              (v += r * I),
              (b += r * U),
              (x += r * F),
              (w += r * B),
              (k += r * D),
              (S += r * W),
              (C += r * $),
              (E += r * H),
              (P += r * K),
              (_ += r * V),
              (A += r * q),
              (T += r * Q),
              (R += r * Y),
              (N += r * G),
              (M += r * X),
              (v += (r = t[13]) * j),
              (b += r * I),
              (x += r * U),
              (w += r * F),
              (k += r * B),
              (S += r * D),
              (C += r * W),
              (E += r * $),
              (P += r * H),
              (_ += r * K),
              (A += r * V),
              (T += r * q),
              (R += r * Q),
              (N += r * Y),
              (M += r * G),
              (O += r * X),
              (b += (r = t[14]) * j),
              (x += r * I),
              (w += r * U),
              (k += r * F),
              (S += r * B),
              (C += r * D),
              (E += r * W),
              (P += r * $),
              (_ += r * H),
              (A += r * K),
              (T += r * V),
              (R += r * q),
              (N += r * Q),
              (M += r * Y),
              (O += r * G),
              (z += r * X),
              (x += (r = t[15]) * j),
              (i += 38 * (k += r * U)),
              (l += 38 * (S += r * F)),
              (s += 38 * (C += r * B)),
              (u += 38 * (E += r * D)),
              (c += 38 * (P += r * W)),
              (f += 38 * (_ += r * $)),
              (d += 38 * (A += r * H)),
              (p += 38 * (T += r * K)),
              (h += 38 * (R += r * V)),
              (m += 38 * (N += r * q)),
              (g += 38 * (M += r * Q)),
              (y += 38 * (O += r * Y)),
              (v += 38 * (z += r * G)),
              (b += 38 * (L += r * X)),
              (a = (r = (a += 38 * (w += r * I)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (i = (r = i + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (x = (r = x + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (a = (r = (a += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (i = (r = i + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (x = (r = x + o + 65535) - 65536 * (o = Math.floor(r / 65536))),
              (a += o - 1 + 37 * (o - 1)),
              (e[0] = a),
              (e[1] = i),
              (e[2] = l),
              (e[3] = s),
              (e[4] = u),
              (e[5] = c),
              (e[6] = f),
              (e[7] = d),
              (e[8] = p),
              (e[9] = h),
              (e[10] = m),
              (e[11] = g),
              (e[12] = y),
              (e[13] = v),
              (e[14] = b),
              (e[15] = x);
          }
          function B(e, t) {
            F(e, t, t);
          }
          function D(e, n) {
            var r,
              o = t();
            for (r = 0; r < 16; r++) o[r] = n[r];
            for (r = 253; r >= 0; r--) B(o, o), 2 !== r && 4 !== r && F(o, o, n);
            for (r = 0; r < 16; r++) e[r] = o[r];
          }
          function W(e, n) {
            var r,
              o = t();
            for (r = 0; r < 16; r++) o[r] = n[r];
            for (r = 250; r >= 0; r--) B(o, o), 1 !== r && F(o, o, n);
            for (r = 0; r < 16; r++) e[r] = o[r];
          }
          function $(e, n, r) {
            var o,
              a,
              i = new Uint8Array(32),
              l = new Float64Array(80),
              u = t(),
              c = t(),
              f = t(),
              d = t(),
              p = t(),
              h = t();
            for (a = 0; a < 31; a++) i[a] = n[a];
            for (i[31] = (127 & n[31]) | 64, i[0] &= 248, j(l, r), a = 0; a < 16; a++)
              (c[a] = l[a]), (d[a] = u[a] = f[a] = 0);
            for (u[0] = d[0] = 1, a = 254; a >= 0; --a)
              M(u, c, (o = (i[a >>> 3] >>> (7 & a)) & 1)),
                M(f, d, o),
                I(p, u, f),
                U(u, u, f),
                I(f, c, d),
                U(c, c, d),
                B(d, p),
                B(h, u),
                F(u, f, u),
                F(f, c, p),
                I(p, u, f),
                U(u, u, f),
                B(c, u),
                U(f, d, h),
                F(u, f, s),
                I(u, u, d),
                F(f, f, u),
                F(u, d, h),
                F(d, c, l),
                B(c, p),
                M(u, c, o),
                M(f, d, o);
            for (a = 0; a < 16; a++)
              (l[a + 16] = u[a]), (l[a + 32] = f[a]), (l[a + 48] = c[a]), (l[a + 64] = d[a]);
            var m = l.subarray(32),
              g = l.subarray(16);
            return D(m, m), F(g, g, m), O(e, g), 0;
          }
          function H(e, t) {
            return $(e, t, a);
          }
          function K(e, t) {
            return r(t, 32), H(e, t);
          }
          function V(e, t, n) {
            var r = new Uint8Array(32);
            return $(r, n, t), b(e, o, r, x);
          }
          (E.prototype.blocks = function (e, t, n) {
            for (
              var r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                f,
                d,
                p,
                h,
                m,
                g,
                y,
                v,
                b,
                x,
                w,
                k = this.fin ? 0 : 2048,
                S = this.h[0],
                C = this.h[1],
                E = this.h[2],
                P = this.h[3],
                _ = this.h[4],
                A = this.h[5],
                T = this.h[6],
                R = this.h[7],
                N = this.h[8],
                M = this.h[9],
                O = this.r[0],
                z = this.r[1],
                L = this.r[2],
                j = this.r[3],
                I = this.r[4],
                U = this.r[5],
                F = this.r[6],
                B = this.r[7],
                D = this.r[8],
                W = this.r[9];
              n >= 16;

            )
              (d = f = 0),
                (d += (S += 8191 & (r = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))) * O),
                (d +=
                  (C += 8191 & ((r >>> 13) | ((o = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3))) *
                  (5 * W)),
                (d +=
                  (E += 8191 & ((o >>> 10) | ((a = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6))) *
                  (5 * D)),
                (d +=
                  (P += 8191 & ((a >>> 7) | ((i = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9))) *
                  (5 * B)),
                (f =
                  (d +=
                    (_ += 8191 & ((i >>> 4) | ((l = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) << 12))) *
                    (5 * F)) >>> 13),
                (d &= 8191),
                (d += (A += (l >>> 1) & 8191) * (5 * U)),
                (d +=
                  (T += 8191 & ((l >>> 14) | ((s = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) << 2))) *
                  (5 * I)),
                (d +=
                  (R += 8191 & ((s >>> 11) | ((u = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) << 5))) *
                  (5 * j)),
                (d +=
                  (N += 8191 & ((u >>> 8) | ((c = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) << 8))) *
                  (5 * L)),
                (p = f += (d += (M += (c >>> 5) | k) * (5 * z)) >>> 13),
                (p += S * z),
                (p += C * O),
                (p += E * (5 * W)),
                (p += P * (5 * D)),
                (f = (p += _ * (5 * B)) >>> 13),
                (p &= 8191),
                (p += A * (5 * F)),
                (p += T * (5 * U)),
                (p += R * (5 * I)),
                (p += N * (5 * j)),
                (f += (p += M * (5 * L)) >>> 13),
                (p &= 8191),
                (h = f),
                (h += S * L),
                (h += C * z),
                (h += E * O),
                (h += P * (5 * W)),
                (f = (h += _ * (5 * D)) >>> 13),
                (h &= 8191),
                (h += A * (5 * B)),
                (h += T * (5 * F)),
                (h += R * (5 * U)),
                (h += N * (5 * I)),
                (m = f += (h += M * (5 * j)) >>> 13),
                (m += S * j),
                (m += C * L),
                (m += E * z),
                (m += P * O),
                (f = (m += _ * (5 * W)) >>> 13),
                (m &= 8191),
                (m += A * (5 * D)),
                (m += T * (5 * B)),
                (m += R * (5 * F)),
                (m += N * (5 * U)),
                (g = f += (m += M * (5 * I)) >>> 13),
                (g += S * I),
                (g += C * j),
                (g += E * L),
                (g += P * z),
                (f = (g += _ * O) >>> 13),
                (g &= 8191),
                (g += A * (5 * W)),
                (g += T * (5 * D)),
                (g += R * (5 * B)),
                (g += N * (5 * F)),
                (y = f += (g += M * (5 * U)) >>> 13),
                (y += S * U),
                (y += C * I),
                (y += E * j),
                (y += P * L),
                (f = (y += _ * z) >>> 13),
                (y &= 8191),
                (y += A * O),
                (y += T * (5 * W)),
                (y += R * (5 * D)),
                (y += N * (5 * B)),
                (v = f += (y += M * (5 * F)) >>> 13),
                (v += S * F),
                (v += C * U),
                (v += E * I),
                (v += P * j),
                (f = (v += _ * L) >>> 13),
                (v &= 8191),
                (v += A * z),
                (v += T * O),
                (v += R * (5 * W)),
                (v += N * (5 * D)),
                (b = f += (v += M * (5 * B)) >>> 13),
                (b += S * B),
                (b += C * F),
                (b += E * U),
                (b += P * I),
                (f = (b += _ * j) >>> 13),
                (b &= 8191),
                (b += A * L),
                (b += T * z),
                (b += R * O),
                (b += N * (5 * W)),
                (x = f += (b += M * (5 * D)) >>> 13),
                (x += S * D),
                (x += C * B),
                (x += E * F),
                (x += P * U),
                (f = (x += _ * I) >>> 13),
                (x &= 8191),
                (x += A * j),
                (x += T * L),
                (x += R * z),
                (x += N * O),
                (w = f += (x += M * (5 * W)) >>> 13),
                (w += S * W),
                (w += C * D),
                (w += E * B),
                (w += P * F),
                (f = (w += _ * U) >>> 13),
                (w &= 8191),
                (w += A * I),
                (w += T * j),
                (w += R * L),
                (w += N * z),
                (S = d = 8191 & (f = ((f = (((f += (w += M * O) >>> 13) << 2) + f) | 0) + (d &= 8191)) | 0)),
                (C = p += f >>>= 13),
                (E = h &= 8191),
                (P = m &= 8191),
                (_ = g &= 8191),
                (A = y &= 8191),
                (T = v &= 8191),
                (R = b &= 8191),
                (N = x &= 8191),
                (M = w &= 8191),
                (t += 16),
                (n -= 16);
            (this.h[0] = S),
              (this.h[1] = C),
              (this.h[2] = E),
              (this.h[3] = P),
              (this.h[4] = _),
              (this.h[5] = A),
              (this.h[6] = T),
              (this.h[7] = R),
              (this.h[8] = N),
              (this.h[9] = M);
          }),
            (E.prototype.finish = function (e, t) {
              var n,
                r,
                o,
                a,
                i = new Uint16Array(10);
              if (this.leftover) {
                for (a = this.leftover, this.buffer[a++] = 1; a < 16; a++) this.buffer[a] = 0;
                (this.fin = 1), this.blocks(this.buffer, 0, 16);
              }
              for (n = this.h[1] >>> 13, this.h[1] &= 8191, a = 2; a < 10; a++)
                (this.h[a] += n), (n = this.h[a] >>> 13), (this.h[a] &= 8191);
              for (
                this.h[0] += 5 * n,
                  n = this.h[0] >>> 13,
                  this.h[0] &= 8191,
                  this.h[1] += n,
                  n = this.h[1] >>> 13,
                  this.h[1] &= 8191,
                  this.h[2] += n,
                  i[0] = this.h[0] + 5,
                  n = i[0] >>> 13,
                  i[0] &= 8191,
                  a = 1;
                a < 10;
                a++
              )
                (i[a] = this.h[a] + n), (n = i[a] >>> 13), (i[a] &= 8191);
              for (i[9] -= 8192, r = (1 ^ n) - 1, a = 0; a < 10; a++) i[a] &= r;
              for (r = ~r, a = 0; a < 10; a++) this.h[a] = (this.h[a] & r) | i[a];
              for (
                this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                  this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                  this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                  this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                  this.h[4] = 65535 & ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                  this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                  this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                  this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                  o = this.h[0] + this.pad[0],
                  this.h[0] = 65535 & o,
                  a = 1;
                a < 8;
                a++
              )
                (o = (((this.h[a] + this.pad[a]) | 0) + (o >>> 16)) | 0), (this.h[a] = 65535 & o);
              (e[t + 0] = (this.h[0] >>> 0) & 255),
                (e[t + 1] = (this.h[0] >>> 8) & 255),
                (e[t + 2] = (this.h[1] >>> 0) & 255),
                (e[t + 3] = (this.h[1] >>> 8) & 255),
                (e[t + 4] = (this.h[2] >>> 0) & 255),
                (e[t + 5] = (this.h[2] >>> 8) & 255),
                (e[t + 6] = (this.h[3] >>> 0) & 255),
                (e[t + 7] = (this.h[3] >>> 8) & 255),
                (e[t + 8] = (this.h[4] >>> 0) & 255),
                (e[t + 9] = (this.h[4] >>> 8) & 255),
                (e[t + 10] = (this.h[5] >>> 0) & 255),
                (e[t + 11] = (this.h[5] >>> 8) & 255),
                (e[t + 12] = (this.h[6] >>> 0) & 255),
                (e[t + 13] = (this.h[6] >>> 8) & 255),
                (e[t + 14] = (this.h[7] >>> 0) & 255),
                (e[t + 15] = (this.h[7] >>> 8) & 255);
            }),
            (E.prototype.update = function (e, t, n) {
              var r, o;
              if (this.leftover) {
                for ((o = 16 - this.leftover) > n && (o = n), r = 0; r < o; r++)
                  this.buffer[this.leftover + r] = e[t + r];
                if (((n -= o), (t += o), (this.leftover += o), this.leftover < 16)) return;
                this.blocks(this.buffer, 0, 16), (this.leftover = 0);
              }
              if ((n >= 16 && ((o = n - (n % 16)), this.blocks(e, t, o), (t += o), (n -= o)), n)) {
                for (r = 0; r < n; r++) this.buffer[this.leftover + r] = e[t + r];
                this.leftover += n;
              }
            });
          var q = A,
            Q = T;
          var Y = [
            1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548,
            961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560,
            3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
            1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868,
            3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933,
            770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
            2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
            3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936,
            666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
            1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
            2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
            3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
            430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
            958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
            1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
            2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427,
            3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
            116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
            685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
            1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
          ];
          function G(e, t, n, r) {
            for (
              var o,
                a,
                i,
                l,
                s,
                u,
                c,
                f,
                d,
                p,
                h,
                m,
                g,
                y,
                v,
                b,
                x,
                w,
                k,
                S,
                C,
                E,
                P,
                _,
                A,
                T,
                R = new Int32Array(16),
                N = new Int32Array(16),
                M = e[0],
                O = e[1],
                z = e[2],
                L = e[3],
                j = e[4],
                I = e[5],
                U = e[6],
                F = e[7],
                B = t[0],
                D = t[1],
                W = t[2],
                $ = t[3],
                H = t[4],
                K = t[5],
                V = t[6],
                q = t[7],
                Q = 0;
              r >= 128;

            ) {
              for (k = 0; k < 16; k++)
                (S = 8 * k + Q),
                  (R[k] = (n[S + 0] << 24) | (n[S + 1] << 16) | (n[S + 2] << 8) | n[S + 3]),
                  (N[k] = (n[S + 4] << 24) | (n[S + 5] << 16) | (n[S + 6] << 8) | n[S + 7]);
              for (k = 0; k < 80; k++)
                if (
                  ((o = M),
                  (a = O),
                  (i = z),
                  (l = L),
                  (s = j),
                  (u = I),
                  (c = U),
                  F,
                  (d = B),
                  (p = D),
                  (h = W),
                  (m = $),
                  (g = H),
                  (y = K),
                  (v = V),
                  q,
                  (P = 65535 & (E = q)),
                  (_ = E >>> 16),
                  (A = 65535 & (C = F)),
                  (T = C >>> 16),
                  (P +=
                    65535 &
                    (E = ((H >>> 14) | (j << 18)) ^ ((H >>> 18) | (j << 14)) ^ ((j >>> 9) | (H << 23)))),
                  (_ += E >>> 16),
                  (A +=
                    65535 &
                    (C = ((j >>> 14) | (H << 18)) ^ ((j >>> 18) | (H << 14)) ^ ((H >>> 9) | (j << 23)))),
                  (T += C >>> 16),
                  (P += 65535 & (E = (H & K) ^ (~H & V))),
                  (_ += E >>> 16),
                  (A += 65535 & (C = (j & I) ^ (~j & U))),
                  (T += C >>> 16),
                  (C = Y[2 * k]),
                  (P += 65535 & (E = Y[2 * k + 1])),
                  (_ += E >>> 16),
                  (A += 65535 & C),
                  (T += C >>> 16),
                  (C = R[k % 16]),
                  (_ += (E = N[k % 16]) >>> 16),
                  (A += 65535 & C),
                  (T += C >>> 16),
                  (A += (_ += (P += 65535 & E) >>> 16) >>> 16),
                  (P = 65535 & (E = w = (65535 & P) | (_ << 16))),
                  (_ = E >>> 16),
                  (A = 65535 & (C = x = (65535 & A) | ((T += A >>> 16) << 16))),
                  (T = C >>> 16),
                  (P +=
                    65535 &
                    (E = ((B >>> 28) | (M << 4)) ^ ((M >>> 2) | (B << 30)) ^ ((M >>> 7) | (B << 25)))),
                  (_ += E >>> 16),
                  (A +=
                    65535 &
                    (C = ((M >>> 28) | (B << 4)) ^ ((B >>> 2) | (M << 30)) ^ ((B >>> 7) | (M << 25)))),
                  (T += C >>> 16),
                  (_ += (E = (B & D) ^ (B & W) ^ (D & W)) >>> 16),
                  (A += 65535 & (C = (M & O) ^ (M & z) ^ (O & z))),
                  (T += C >>> 16),
                  (f = (65535 & (A += (_ += (P += 65535 & E) >>> 16) >>> 16)) | ((T += A >>> 16) << 16)),
                  (b = (65535 & P) | (_ << 16)),
                  (P = 65535 & (E = m)),
                  (_ = E >>> 16),
                  (A = 65535 & (C = l)),
                  (T = C >>> 16),
                  (_ += (E = w) >>> 16),
                  (A += 65535 & (C = x)),
                  (T += C >>> 16),
                  (O = o),
                  (z = a),
                  (L = i),
                  (j = l = (65535 & (A += (_ += (P += 65535 & E) >>> 16) >>> 16)) | ((T += A >>> 16) << 16)),
                  (I = s),
                  (U = u),
                  (F = c),
                  (M = f),
                  (D = d),
                  (W = p),
                  ($ = h),
                  (H = m = (65535 & P) | (_ << 16)),
                  (K = g),
                  (V = y),
                  (q = v),
                  (B = b),
                  k % 16 === 15)
                )
                  for (S = 0; S < 16; S++)
                    (C = R[S]),
                      (P = 65535 & (E = N[S])),
                      (_ = E >>> 16),
                      (A = 65535 & C),
                      (T = C >>> 16),
                      (C = R[(S + 9) % 16]),
                      (P += 65535 & (E = N[(S + 9) % 16])),
                      (_ += E >>> 16),
                      (A += 65535 & C),
                      (T += C >>> 16),
                      (x = R[(S + 1) % 16]),
                      (P +=
                        65535 &
                        (E =
                          (((w = N[(S + 1) % 16]) >>> 1) | (x << 31)) ^
                          ((w >>> 8) | (x << 24)) ^
                          ((w >>> 7) | (x << 25)))),
                      (_ += E >>> 16),
                      (A += 65535 & (C = ((x >>> 1) | (w << 31)) ^ ((x >>> 8) | (w << 24)) ^ (x >>> 7))),
                      (T += C >>> 16),
                      (x = R[(S + 14) % 16]),
                      (_ +=
                        (E =
                          (((w = N[(S + 14) % 16]) >>> 19) | (x << 13)) ^
                          ((x >>> 29) | (w << 3)) ^
                          ((w >>> 6) | (x << 26))) >>> 16),
                      (A += 65535 & (C = ((x >>> 19) | (w << 13)) ^ ((w >>> 29) | (x << 3)) ^ (x >>> 6))),
                      (T += C >>> 16),
                      (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                      (R[S] = (65535 & A) | (T << 16)),
                      (N[S] = (65535 & P) | (_ << 16));
              (P = 65535 & (E = B)),
                (_ = E >>> 16),
                (A = 65535 & (C = M)),
                (T = C >>> 16),
                (C = e[0]),
                (_ += (E = t[0]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[0] = M = (65535 & A) | (T << 16)),
                (t[0] = B = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = D)),
                (_ = E >>> 16),
                (A = 65535 & (C = O)),
                (T = C >>> 16),
                (C = e[1]),
                (_ += (E = t[1]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[1] = O = (65535 & A) | (T << 16)),
                (t[1] = D = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = W)),
                (_ = E >>> 16),
                (A = 65535 & (C = z)),
                (T = C >>> 16),
                (C = e[2]),
                (_ += (E = t[2]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[2] = z = (65535 & A) | (T << 16)),
                (t[2] = W = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = $)),
                (_ = E >>> 16),
                (A = 65535 & (C = L)),
                (T = C >>> 16),
                (C = e[3]),
                (_ += (E = t[3]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[3] = L = (65535 & A) | (T << 16)),
                (t[3] = $ = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = H)),
                (_ = E >>> 16),
                (A = 65535 & (C = j)),
                (T = C >>> 16),
                (C = e[4]),
                (_ += (E = t[4]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[4] = j = (65535 & A) | (T << 16)),
                (t[4] = H = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = K)),
                (_ = E >>> 16),
                (A = 65535 & (C = I)),
                (T = C >>> 16),
                (C = e[5]),
                (_ += (E = t[5]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[5] = I = (65535 & A) | (T << 16)),
                (t[5] = K = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = V)),
                (_ = E >>> 16),
                (A = 65535 & (C = U)),
                (T = C >>> 16),
                (C = e[6]),
                (_ += (E = t[6]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[6] = U = (65535 & A) | (T << 16)),
                (t[6] = V = (65535 & P) | (_ << 16)),
                (P = 65535 & (E = q)),
                (_ = E >>> 16),
                (A = 65535 & (C = F)),
                (T = C >>> 16),
                (C = e[7]),
                (_ += (E = t[7]) >>> 16),
                (A += 65535 & C),
                (T += C >>> 16),
                (T += (A += (_ += (P += 65535 & E) >>> 16) >>> 16) >>> 16),
                (e[7] = F = (65535 & A) | (T << 16)),
                (t[7] = q = (65535 & P) | (_ << 16)),
                (Q += 128),
                (r -= 128);
            }
            return r;
          }
          function X(e, t, n) {
            var r,
              o = new Int32Array(8),
              a = new Int32Array(8),
              i = new Uint8Array(256),
              l = n;
            for (
              o[0] = 1779033703,
                o[1] = 3144134277,
                o[2] = 1013904242,
                o[3] = 2773480762,
                o[4] = 1359893119,
                o[5] = 2600822924,
                o[6] = 528734635,
                o[7] = 1541459225,
                a[0] = 4089235720,
                a[1] = 2227873595,
                a[2] = 4271175723,
                a[3] = 1595750129,
                a[4] = 2917565137,
                a[5] = 725511199,
                a[6] = 4215389547,
                a[7] = 327033209,
                G(o, a, t, n),
                n %= 128,
                r = 0;
              r < n;
              r++
            )
              i[r] = t[l - n + r];
            for (
              i[n] = 128,
                i[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0,
                h(i, n - 8, (l / 536870912) | 0, l << 3),
                G(o, a, i, n),
                r = 0;
              r < 8;
              r++
            )
              h(e, 8 * r, o[r], a[r]);
            return 0;
          }
          function J(e, n) {
            var r = t(),
              o = t(),
              a = t(),
              i = t(),
              l = t(),
              s = t(),
              u = t(),
              f = t(),
              d = t();
            U(r, e[1], e[0]),
              U(d, n[1], n[0]),
              F(r, r, d),
              I(o, e[0], e[1]),
              I(d, n[0], n[1]),
              F(o, o, d),
              F(a, e[3], n[3]),
              F(a, a, c),
              F(i, e[2], n[2]),
              I(i, i, i),
              U(l, o, r),
              U(s, i, a),
              I(u, i, a),
              I(f, o, r),
              F(e[0], l, s),
              F(e[1], f, u),
              F(e[2], u, s),
              F(e[3], l, f);
          }
          function Z(e, t, n) {
            var r;
            for (r = 0; r < 4; r++) M(e[r], t[r], n);
          }
          function ee(e, n) {
            var r = t(),
              o = t(),
              a = t();
            D(a, n[2]), F(r, n[0], a), F(o, n[1], a), O(e, o), (e[31] ^= L(r) << 7);
          }
          function te(e, t, n) {
            var r, o;
            for (R(e[0], i), R(e[1], l), R(e[2], l), R(e[3], i), o = 255; o >= 0; --o)
              Z(e, t, (r = (n[(o / 8) | 0] >> (7 & o)) & 1)), J(t, e), J(e, e), Z(e, t, r);
          }
          function ne(e, n) {
            var r = [t(), t(), t(), t()];
            R(r[0], f), R(r[1], d), R(r[2], l), F(r[3], f, d), te(e, r, n);
          }
          function re(e, n, o) {
            var a,
              i = new Uint8Array(64),
              l = [t(), t(), t(), t()];
            for (
              o || r(n, 32), X(i, n, 32), i[0] &= 248, i[31] &= 127, i[31] |= 64, ne(l, i), ee(e, l), a = 0;
              a < 32;
              a++
            )
              n[a + 32] = e[a];
            return 0;
          }
          var oe = new Float64Array([
            237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 16,
          ]);
          function ae(e, t) {
            var n, r, o, a;
            for (r = 63; r >= 32; --r) {
              for (n = 0, o = r - 32, a = r - 12; o < a; ++o)
                (t[o] += n - 16 * t[r] * oe[o - (r - 32)]),
                  (n = Math.floor((t[o] + 128) / 256)),
                  (t[o] -= 256 * n);
              (t[o] += n), (t[r] = 0);
            }
            for (n = 0, o = 0; o < 32; o++)
              (t[o] += n - (t[31] >> 4) * oe[o]), (n = t[o] >> 8), (t[o] &= 255);
            for (o = 0; o < 32; o++) t[o] -= n * oe[o];
            for (r = 0; r < 32; r++) (t[r + 1] += t[r] >> 8), (e[r] = 255 & t[r]);
          }
          function ie(e) {
            var t,
              n = new Float64Array(64);
            for (t = 0; t < 64; t++) n[t] = e[t];
            for (t = 0; t < 64; t++) e[t] = 0;
            ae(e, n);
          }
          function le(e, n, r, o) {
            var a,
              i,
              l = new Uint8Array(64),
              s = new Uint8Array(64),
              u = new Uint8Array(64),
              c = new Float64Array(64),
              f = [t(), t(), t(), t()];
            X(l, o, 32), (l[0] &= 248), (l[31] &= 127), (l[31] |= 64);
            var d = r + 64;
            for (a = 0; a < r; a++) e[64 + a] = n[a];
            for (a = 0; a < 32; a++) e[32 + a] = l[32 + a];
            for (X(u, e.subarray(32), r + 32), ie(u), ne(f, u), ee(e, f), a = 32; a < 64; a++) e[a] = o[a];
            for (X(s, e, r + 64), ie(s), a = 0; a < 64; a++) c[a] = 0;
            for (a = 0; a < 32; a++) c[a] = u[a];
            for (a = 0; a < 32; a++) for (i = 0; i < 32; i++) c[a + i] += s[a] * l[i];
            return ae(e.subarray(32), c), d;
          }
          function se(e, n, r, o) {
            var a,
              s = new Uint8Array(32),
              c = new Uint8Array(64),
              f = [t(), t(), t(), t()],
              d = [t(), t(), t(), t()];
            if (r < 64) return -1;
            if (
              (function (e, n) {
                var r = t(),
                  o = t(),
                  a = t(),
                  s = t(),
                  c = t(),
                  f = t(),
                  d = t();
                return (
                  R(e[2], l),
                  j(e[1], n),
                  B(a, e[1]),
                  F(s, a, u),
                  U(a, a, e[2]),
                  I(s, e[2], s),
                  B(c, s),
                  B(f, c),
                  F(d, f, c),
                  F(r, d, a),
                  F(r, r, s),
                  W(r, r),
                  F(r, r, a),
                  F(r, r, s),
                  F(r, r, s),
                  F(e[0], r, s),
                  B(o, e[0]),
                  F(o, o, s),
                  z(o, a) && F(e[0], e[0], p),
                  B(o, e[0]),
                  F(o, o, s),
                  z(o, a) ? -1 : (L(e[0]) === n[31] >> 7 && U(e[0], i, e[0]), F(e[3], e[0], e[1]), 0)
                );
              })(d, o)
            )
              return -1;
            for (a = 0; a < r; a++) e[a] = n[a];
            for (a = 0; a < 32; a++) e[a + 32] = o[a];
            if (
              (X(c, e, r),
              ie(c),
              te(f, d, c),
              ne(d, n.subarray(32)),
              J(f, d),
              ee(s, f),
              (r -= 64),
              y(n, 0, s, 0))
            ) {
              for (a = 0; a < r; a++) e[a] = 0;
              return -1;
            }
            for (a = 0; a < r; a++) e[a] = n[a + 64];
            return r;
          }
          var ue = 16,
            ce = 64,
            fe = 32,
            de = 64;
          function pe(e, t) {
            if (32 !== e.length) throw new Error('bad key size');
            if (24 !== t.length) throw new Error('bad nonce size');
          }
          function he() {
            for (var e = 0; e < arguments.length; e++)
              if (!(arguments[e] instanceof Uint8Array))
                throw new TypeError('unexpected type, use Uint8Array');
          }
          function me(e) {
            for (var t = 0; t < e.length; t++) e[t] = 0;
          }
          (e.lowlevel = {
            crypto_core_hsalsa20: b,
            crypto_stream_xor: C,
            crypto_stream: S,
            crypto_stream_salsa20_xor: w,
            crypto_stream_salsa20: k,
            crypto_onetimeauth: P,
            crypto_onetimeauth_verify: _,
            crypto_verify_16: g,
            crypto_verify_32: y,
            crypto_secretbox: A,
            crypto_secretbox_open: T,
            crypto_scalarmult: $,
            crypto_scalarmult_base: H,
            crypto_box_beforenm: V,
            crypto_box_afternm: q,
            crypto_box: function (e, t, n, r, o, a) {
              var i = new Uint8Array(32);
              return V(i, o, a), q(e, t, n, r, i);
            },
            crypto_box_open: function (e, t, n, r, o, a) {
              var i = new Uint8Array(32);
              return V(i, o, a), Q(e, t, n, r, i);
            },
            crypto_box_keypair: K,
            crypto_hash: X,
            crypto_sign: le,
            crypto_sign_keypair: re,
            crypto_sign_open: se,
            crypto_secretbox_KEYBYTES: 32,
            crypto_secretbox_NONCEBYTES: 24,
            crypto_secretbox_ZEROBYTES: 32,
            crypto_secretbox_BOXZEROBYTES: ue,
            crypto_scalarmult_BYTES: 32,
            crypto_scalarmult_SCALARBYTES: 32,
            crypto_box_PUBLICKEYBYTES: 32,
            crypto_box_SECRETKEYBYTES: 32,
            crypto_box_BEFORENMBYTES: 32,
            crypto_box_NONCEBYTES: 24,
            crypto_box_ZEROBYTES: 32,
            crypto_box_BOXZEROBYTES: 16,
            crypto_sign_BYTES: ce,
            crypto_sign_PUBLICKEYBYTES: fe,
            crypto_sign_SECRETKEYBYTES: de,
            crypto_sign_SEEDBYTES: 32,
            crypto_hash_BYTES: 64,
            gf: t,
            D: u,
            L: oe,
            pack25519: O,
            unpack25519: j,
            M: F,
            A: I,
            S: B,
            Z: U,
            pow2523: W,
            add: J,
            set25519: R,
            modL: ae,
            scalarmult: te,
            scalarbase: ne,
          }),
            (e.randomBytes = function (e) {
              var t = new Uint8Array(e);
              return r(t, e), t;
            }),
            (e.secretbox = function (e, t, n) {
              he(e, t, n), pe(n, t);
              for (
                var r = new Uint8Array(32 + e.length), o = new Uint8Array(r.length), a = 0;
                a < e.length;
                a++
              )
                r[a + 32] = e[a];
              return A(o, r, r.length, t, n), o.subarray(ue);
            }),
            (e.secretbox.open = function (e, t, n) {
              he(e, t, n), pe(n, t);
              for (
                var r = new Uint8Array(ue + e.length), o = new Uint8Array(r.length), a = 0;
                a < e.length;
                a++
              )
                r[a + ue] = e[a];
              return r.length < 32 || 0 !== T(o, r, r.length, t, n) ? null : o.subarray(32);
            }),
            (e.secretbox.keyLength = 32),
            (e.secretbox.nonceLength = 24),
            (e.secretbox.overheadLength = ue),
            (e.scalarMult = function (e, t) {
              if ((he(e, t), 32 !== e.length)) throw new Error('bad n size');
              if (32 !== t.length) throw new Error('bad p size');
              var n = new Uint8Array(32);
              return $(n, e, t), n;
            }),
            (e.scalarMult.base = function (e) {
              if ((he(e), 32 !== e.length)) throw new Error('bad n size');
              var t = new Uint8Array(32);
              return H(t, e), t;
            }),
            (e.scalarMult.scalarLength = 32),
            (e.scalarMult.groupElementLength = 32),
            (e.box = function (t, n, r, o) {
              var a = e.box.before(r, o);
              return e.secretbox(t, n, a);
            }),
            (e.box.before = function (e, t) {
              he(e, t),
                (function (e, t) {
                  if (32 !== e.length) throw new Error('bad public key size');
                  if (32 !== t.length) throw new Error('bad secret key size');
                })(e, t);
              var n = new Uint8Array(32);
              return V(n, e, t), n;
            }),
            (e.box.after = e.secretbox),
            (e.box.open = function (t, n, r, o) {
              var a = e.box.before(r, o);
              return e.secretbox.open(t, n, a);
            }),
            (e.box.open.after = e.secretbox.open),
            (e.box.keyPair = function () {
              var e = new Uint8Array(32),
                t = new Uint8Array(32);
              return K(e, t), { publicKey: e, secretKey: t };
            }),
            (e.box.keyPair.fromSecretKey = function (e) {
              if ((he(e), 32 !== e.length)) throw new Error('bad secret key size');
              var t = new Uint8Array(32);
              return H(t, e), { publicKey: t, secretKey: new Uint8Array(e) };
            }),
            (e.box.publicKeyLength = 32),
            (e.box.secretKeyLength = 32),
            (e.box.sharedKeyLength = 32),
            (e.box.nonceLength = 24),
            (e.box.overheadLength = e.secretbox.overheadLength),
            (e.sign = function (e, t) {
              if ((he(e, t), t.length !== de)) throw new Error('bad secret key size');
              var n = new Uint8Array(ce + e.length);
              return le(n, e, e.length, t), n;
            }),
            (e.sign.open = function (e, t) {
              if ((he(e, t), t.length !== fe)) throw new Error('bad public key size');
              var n = new Uint8Array(e.length),
                r = se(n, e, e.length, t);
              if (r < 0) return null;
              for (var o = new Uint8Array(r), a = 0; a < o.length; a++) o[a] = n[a];
              return o;
            }),
            (e.sign.detached = function (t, n) {
              for (var r = e.sign(t, n), o = new Uint8Array(ce), a = 0; a < o.length; a++) o[a] = r[a];
              return o;
            }),
            (e.sign.detached.verify = function (e, t, n) {
              if ((he(e, t, n), t.length !== ce)) throw new Error('bad signature size');
              if (n.length !== fe) throw new Error('bad public key size');
              var r,
                o = new Uint8Array(ce + e.length),
                a = new Uint8Array(ce + e.length);
              for (r = 0; r < ce; r++) o[r] = t[r];
              for (r = 0; r < e.length; r++) o[r + ce] = e[r];
              return se(a, o, o.length, n) >= 0;
            }),
            (e.sign.keyPair = function () {
              var e = new Uint8Array(fe),
                t = new Uint8Array(de);
              return re(e, t), { publicKey: e, secretKey: t };
            }),
            (e.sign.keyPair.fromSecretKey = function (e) {
              if ((he(e), e.length !== de)) throw new Error('bad secret key size');
              for (var t = new Uint8Array(fe), n = 0; n < t.length; n++) t[n] = e[32 + n];
              return { publicKey: t, secretKey: new Uint8Array(e) };
            }),
            (e.sign.keyPair.fromSeed = function (e) {
              if ((he(e), 32 !== e.length)) throw new Error('bad seed size');
              for (var t = new Uint8Array(fe), n = new Uint8Array(de), r = 0; r < 32; r++) n[r] = e[r];
              return re(t, n, !0), { publicKey: t, secretKey: n };
            }),
            (e.sign.publicKeyLength = fe),
            (e.sign.secretKeyLength = de),
            (e.sign.seedLength = 32),
            (e.sign.signatureLength = ce),
            (e.hash = function (e) {
              he(e);
              var t = new Uint8Array(64);
              return X(t, e, e.length), t;
            }),
            (e.hash.hashLength = 64),
            (e.verify = function (e, t) {
              return (
                he(e, t),
                0 !== e.length && 0 !== t.length && e.length === t.length && 0 === m(e, 0, t, 0, e.length)
              );
            }),
            (e.setPRNG = function (e) {
              r = e;
            }),
            (function () {
              var t = 'undefined' !== typeof self ? self.crypto || self.msCrypto : null;
              if (t && t.getRandomValues) {
                e.setPRNG(function (e, n) {
                  var r,
                    o = new Uint8Array(n);
                  for (r = 0; r < n; r += 65536) t.getRandomValues(o.subarray(r, r + Math.min(n - r, 65536)));
                  for (r = 0; r < n; r++) e[r] = o[r];
                  me(o);
                });
              } else
                (t = n(1281)) &&
                  t.randomBytes &&
                  e.setPRNG(function (e, n) {
                    var r,
                      o = t.randomBytes(n);
                    for (r = 0; r < n; r++) e[r] = o[r];
                    me(o);
                  });
            })();
        })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
      },
      1281: () => {},
      4634: (e) => {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      4994: (e) => {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4893: (e) => {
        (e.exports = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
              if (t.includes(r)) continue;
              n[r] = e[r];
            }
          return n;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8168: (e, t, n) => {
        'use strict';
        function r() {
          return (
            (r = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            r.apply(null, arguments)
          );
        }
        n.d(t, { A: () => r });
      },
      8587: (e, t, n) => {
        'use strict';
        function r(e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
              if (t.includes(r)) continue;
              n[r] = e[r];
            }
          return n;
        }
        n.d(t, { A: () => r });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ('object' === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && 'function' === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & o && r; 'object' == typeof l && !~e.indexOf(l); l = t(l))
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      'use strict';
      var e = n(5043),
        t = n.t(e, 2),
        r = n(4391),
        o = n(579);
      const a = {
          usersData: { fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null },
          setUsersData: () => null,
        },
        i = (0, e.createContext)(a),
        l = (t) => {
          let { children: n } = t;
          const [r, a] = (0, e.useState)({
            fromPublicKey: null,
            fromNickName: null,
            toPublicKey: null,
            toNickName: null,
          });
          return (0, o.jsx)(i.Provider, { value: { usersData: r, setUsersData: a }, children: n });
        },
        s = { chatHistory: [], setChatHistory: () => null },
        u = (0, e.createContext)(s),
        c = (t) => {
          let { children: n } = t;
          const [r, a] = (0, e.useState)([]);
          return (0, o.jsx)(u.Provider, { value: { chatHistory: r, setChatHistory: a }, children: n });
        },
        f = {
          connectWebSocket: () => null,
          connectionStatus: null,
          setConnectionStatus: () => null,
          sendWebSocketMessage: () => null,
          createUser: () => null,
          closeConnection: () => null,
          tryPairing: () => null,
          setRequestError: () => null,
          requestError: null,
        },
        d = (0, e.createContext)(f),
        p = (t) => {
          let { children: n } = t;
          const { usersData: r, setUsersData: a } = (0, e.useContext)(i),
            [l, s] = (0, e.useState)('offline'),
            [c, f] = (0, e.useState)(null),
            p = (0, e.useRef)(null),
            h = (0, e.useRef)(null),
            m = (0, e.useRef)(),
            { handleMessage: g } = (() => {
              const { setChatHistory: t } = (0, e.useContext)(u),
                { usersData: n, setUsersData: r } = (0, e.useContext)(i),
                o = (0, e.useRef)();
              return (
                (0, e.useEffect)(() => {
                  n && (o.current = n);
                }, [n]),
                {
                  handleMessage: (e, n, a, i) => {
                    const l = e.data,
                      s = JSON.parse(l);
                    if (
                      (console.log('mensaje recibido del servidor: ', s),
                      s.hasOwnProperty('userCreated') && o.current)
                    ) {
                      const e = s.userCreated.userName,
                        t = s.userCreated.nickName;
                      n('userRegistered'), r({ ...o.current, fromPublicKey: e, fromNickName: t });
                    }
                    if (s.hasOwnProperty('requestConnection') && o.current) {
                      const e = s.requestConnection.userName,
                        t = s.requestConnection.nickName;
                      r({ ...o.current, toPublicKey: e, toNickName: t }), n('requestReceived');
                    }
                    if (s.hasOwnProperty('chatConfirmed') && o.current) {
                      const e = s.chatConfirmed.to,
                        t = s.chatConfirmed.toNickName;
                      r({ ...o.current, toPublicKey: e, toNickName: t }), n('chating');
                    }
                    if (
                      (s.hasOwnProperty('error') &&
                        o.current &&
                        (console.log(a),
                        r({ ...o.current, toPublicKey: null, toNickName: null }),
                        'errorUserDoesntExistOrReject' === s.error
                          ? i({
                              title: 'Error finding user',
                              message: "User doesn't exist or rejected your request",
                              CTA: 'Click OK to continue',
                            })
                          : 'errorUserIsTheSame' === s.error
                            ? i({
                                title: 'User searched  is the same as you',
                                message: 'Enter a valid public key different to your public key',
                                CTA: 'Click OK to continue',
                              })
                            : 'requesterIsOffline' === s.error
                              ? i({
                                  title: 'Requester is disconnected',
                                  message: 'Enter a valid public key of an online user or wait for a request',
                                  CTA: 'Click OK to continue',
                                })
                              : 'canceledRequest' === s.error &&
                                'requestReceived' === a &&
                                i({
                                  title: 'Requester cancel the request',
                                  message: 'Enter a valid public key of an online user or wait for a request',
                                  CTA: 'Click OK to continue',
                                })),
                      s.hasOwnProperty('closing') &&
                        'otherUserHasClosed' === s.closing &&
                        (r({ fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null }),
                        n('otherUserHasClosed')),
                      s.hasOwnProperty('sentMessaje'))
                    ) {
                      const e = s.sentMessaje.message;
                      console.log(e);
                      const n = new Date(),
                        r = n.getMinutes() <= 10 ? '0' + String(n.getMinutes()) : String(n.getMinutes());
                      t((t) => [
                        {
                          type: 'messageReceived',
                          message: e,
                          time: ''.concat(String(n.getHours()), ':').concat(r),
                        },
                        ...t,
                      ]);
                    }
                  },
                }
              );
            })();
          (0, e.useEffect)(() => {
            m.current = l;
          }, [l]),
            (0, e.useEffect)(() => {
              h.current = r;
            }, [r]);
          const y = () => {
              console.log('connected'), s('online');
            },
            v = () => {
              console.log('closed'),
                'theUserHasClosed' === m.current
                  ? (window.location.href = '/home')
                  : (a({ fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null }),
                    s('serverError')),
                (p.current = void 0);
            },
            b = (e) => {
              console.error('Error de conexi\xf3n:', e);
            },
            x = {
              connectWebSocket: () =>
                !p.current &&
                ((p.current = new WebSocket('wss://www.internal-server-projects.xyz:4000/')),
                p.current.addEventListener('open', y),
                p.current.addEventListener('message', (e) => g(e, s, m.current, f)),
                p.current.addEventListener('close', v),
                p.current.addEventListener('error', b),
                !0),
              connectionStatus: l,
              setConnectionStatus: s,
              sendWebSocketMessage: (e) => {
                p.current &&
                  p.current.readyState === WebSocket.OPEN &&
                  (console.log('Envio mensaje', e), p.current.send(JSON.stringify(e)));
              },
              createUser: (e) => {
                p.current &&
                  p.current.readyState === WebSocket.OPEN &&
                  p.current.send(JSON.stringify({ createUserData: e }));
              },
              closeConnection: () => {
                p.current && p.current.close();
              },
              tryPairing: (e, t) => {
                p.current &&
                  p.current.readyState === WebSocket.OPEN &&
                  (p.current.send(JSON.stringify({ tryPairing: { publicKeyUser1: e, publicKeyUser2: t } })),
                  h.current && a({ ...h.current, toPublicKey: t }));
              },
              setRequestError: f,
              requestError: c,
            };
          return (0, o.jsx)(d.Provider, { value: x, children: n });
        },
        h = { showPopUp: !1, popUpData: null, setShowPopUp: () => null, setPopUpData: () => null },
        m = (0, e.createContext)(h),
        g = (t) => {
          let { children: n } = t;
          const {
              connectionStatus: r,
              setConnectionStatus: a,
              sendWebSocketMessage: l,
              requestError: s,
              setRequestError: u,
            } = (0, e.useContext)(d),
            { usersData: c, setUsersData: f } = (0, e.useContext)(i),
            [p, h] = (0, e.useState)(!1),
            [g, y] = (0, e.useState)(null),
            v = (0, e.useRef)(c),
            b = (0, e.useRef)(),
            x = (0, e.useRef)();
          (0, e.useEffect)(() => {
            v.current = c;
          }, [c]),
            (0, e.useEffect)(() => {
              (x.current = s), null !== x.current && a('requestError');
            }, [s]),
            (0, e.useEffect)(() => {
              if (
                ((b.current = r),
                console.log(b.current),
                'nickNameError' === r &&
                  (h(!0),
                  y({
                    title: 'Nick name error',
                    message: 'Nick name should have only alphanumeric characters and at least one character',
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: 'OK',
                    handlerAccept: R,
                    handlerTimeOut: N,
                  })),
                'serverError' === r &&
                  (h(!0),
                  y({
                    title: 'Closing',
                    message: 'Error interacting with server',
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: 'OK',
                    handlerAccept: z,
                    handlerTimeOut: L,
                  })),
                'disconnectionByInactivity' === r &&
                  (h(!0),
                  y({
                    title: 'The connection is shutting down',
                    message: 'Due to inactivity of more than 1 minute, the connection is going to be closed',
                    CTAtext: 'If you want to stay connected, please press the button',
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: "I'M HERE",
                    handlerAccept: w,
                    handlerTimeOut: k,
                  })),
                'requestReceived' === r)
              ) {
                if (!v.current.toNickName) throw new Error('To nick name is undefined');
                const e = v.current.toNickName.slice(0, 28) + '...';
                h(!0),
                  y({
                    title: 'An user wants talk to you',
                    message: ''.concat(e, ' asks you to talk in a private room'),
                    CTAtext: 'If you want talk with '.concat(e, ', please press accept'),
                    type: 'twoButtons',
                    seconds: 30,
                    acceptButtonText: 'START CHAT',
                    rejectButtonText: 'REJECT',
                    handlerAccept: _,
                    handlerReject: A,
                    handlerTimeOut: T,
                  });
              }
              if ('requestError' === r) {
                if (!x.current) throw new Error('Request error is undefined');
                h(!0),
                  y({
                    title: ''.concat(x.current.title),
                    message: ''.concat(x.current.message),
                    CTAtext: ''.concat(x.current.CTA),
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: 'OK',
                    handlerAccept: S,
                    handlerTimeOut: C,
                  });
              }
              'requestSent' === r &&
                (h(!0),
                y({
                  title: 'Request sent',
                  message: 'Waiting for response of the other user',
                  type: 'oneButtonCancel',
                  seconds: 30,
                  rejectButtonText: 'CANCEL',
                  handlerReject: E,
                  handlerTimeOut: P,
                })),
                'userInsertedAnEmptyEntry' === r &&
                  (h(!0),
                  y({
                    title: 'Inserted a empty entry',
                    message: 'Please insert a valid public key',
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: 'OK',
                    handlerAccept: M,
                    handlerTimeOut: O,
                  })),
                'otherUserHasClosed' === r &&
                  (h(!0),
                  y({
                    title: 'Closing',
                    message: 'The other user has close his/her chat',
                    type: 'oneButtonAccept',
                    seconds: 30,
                    acceptButtonText: 'OK',
                    handlerAccept: j,
                    handlerTimeOut: I,
                  }));
            }, [r]);
          const w = () => {
              const e = window.location.pathname.split('/'),
                t = e[e.length - 1];
              'findingPair' === t ? (a('userRegistered'), h(!1)) : 'chatRoom' === t && (a('chating'), h(!1));
            },
            k = () => {
              window.location.href = './home';
            },
            S = () => {
              a('userRegistered'), u(null), h(!1);
            },
            C = () => {
              'requestError' === b.current && (a('userRegistered'), u(null), h(!1));
            },
            E = () => {
              const e = {
                cancelRequestSent: { user1: v.current.fromPublicKey, user2: v.current.toPublicKey },
              };
              f({ ...c, toPublicKey: null, toNickName: null }), l(e), a('userRegistered'), h(!1);
            },
            P = () => {
              if ('requestSent' === b.current) {
                const e = {
                  cancelRequestSent: { user1: v.current.fromPublicKey, user2: v.current.toPublicKey },
                };
                f({ ...c, toPublicKey: null, toNickName: null }),
                  l(e),
                  u({
                    title: 'Error finding user',
                    message: "User doesn't exist or rejected your request",
                    CTA: 'Click OK to continue',
                  }),
                  h(!1);
              }
            },
            _ = () => {
              if (!v.current) throw new Error('User data is undefined');
              const e = {
                confirmedRequest: { user1: v.current.toPublicKey, user2: v.current.fromPublicKey },
              };
              l(e), h(!1);
            },
            A = () => {
              const e = { rejectedRequest: { user1: v.current.toPublicKey, user2: v.current.fromPublicKey } };
              l(e), a('userRegistered'), f({ ...c, toPublicKey: null, toNickName: null }), h(!1);
            },
            T = () => {
              'requestReceived' === b.current &&
                (f({ ...c, toPublicKey: null, toNickName: null }), a('userRegistered'), h(!1));
            },
            R = () => {
              a('offline'), h(!1);
            },
            N = () => {
              'nickNameError' === b.current && (a('offline'), h(!1));
            },
            M = () => {
              a('userRegistered'), h(!1);
            },
            O = () => {
              'userInsertedAnEmptyEntry' === b.current && (a('userRegistered'), h(!1));
            },
            z = () => {
              window.location.href = './home';
            },
            L = () => {
              window.location.href = './home';
            },
            j = () => {
              window.location.href = './home';
            },
            I = () => {
              window.location.href = './home';
            };
          return (0, o.jsx)(m.Provider, {
            value: { showPopUp: p, popUpData: g, setShowPopUp: h, setPopUpData: y },
            children: n,
          });
        },
        y = { secondsFromLastActivity: 0, setSecondsFromLastActivity: () => null },
        v = (0, e.createContext)(y),
        b = (t) => {
          let { children: n } = t;
          const { connectionStatus: r, setConnectionStatus: a } = (0, e.useContext)(d),
            [i, l] = (0, e.useState)(0);
          return (
            (0, e.useEffect)(() => {
              'userRegistered' === r && i >= 600 && a('disconnectionByInactivity'),
                'chating' === r && i >= 600 && a('disconnectionByInactivity');
            }, [i]),
            (0, e.useEffect)(() => {
              l(0);
            }, [r]),
            (0, e.useEffect)(() => {
              const e = () => {
                  l(0);
                },
                t = () => {
                  l(0);
                },
                n = (e) => {
                  l(0);
                },
                r = () => {
                  l(0);
                },
                o = () => {
                  l(0);
                },
                a = setInterval(() => {
                  l((e) => e + 1);
                }, 1e3);
              return (
                window.addEventListener('click', e),
                window.addEventListener('contextmenu', t),
                window.addEventListener('mousemove', n),
                window.addEventListener('scroll', r),
                window.addEventListener('keydown', o),
                () => {
                  clearInterval(a),
                    window.removeEventListener('click', e),
                    window.removeEventListener('contextmenu', t),
                    window.removeEventListener('mousemove', n),
                    window.removeEventListener('scroll', r),
                    window.removeEventListener('keydown', o);
                }
              );
            }, []),
            (0, o.jsx)(v.Provider, {
              value: { secondsFromLastActivity: i, setSecondsFromLastActivity: l },
              children: n,
            })
          );
        };
      var x,
        w = n(7950),
        k = n.t(w, 2);
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          S.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(x || (x = {}));
      const C = 'popstate';
      function E(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
      }
      function P(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function _(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function A(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          S(
            { pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' },
            'string' === typeof t ? R(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) },
          )
        );
      }
      function T(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function R(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      function N(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: o = document.defaultView, v5Compat: a = !1 } = r,
          i = o.history,
          l = x.Pop,
          s = null,
          u = c();
        function c() {
          return (i.state || { idx: null }).idx;
        }
        function f() {
          l = x.Pop;
          let e = c(),
            t = null == e ? null : e - u;
          (u = e), s && s({ action: l, location: p.location, delta: t });
        }
        function d(e) {
          let t = 'null' !== o.location.origin ? o.location.origin : o.location.href,
            n = 'string' === typeof e ? e : T(e);
          return (
            (n = n.replace(/ $/, '%20')),
            E(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
            new URL(n, t)
          );
        }
        null == u && ((u = 0), i.replaceState(S({}, i.state, { idx: u }), ''));
        let p = {
          get action() {
            return l;
          },
          get location() {
            return e(o, i);
          },
          listen(e) {
            if (s) throw new Error('A history only accepts one active listener');
            return (
              o.addEventListener(C, f),
              (s = e),
              () => {
                o.removeEventListener(C, f), (s = null);
              }
            );
          },
          createHref: (e) => t(o, e),
          createURL: d,
          encodeLocation(e) {
            let t = d(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = x.Push;
            let r = A(p.location, e, t);
            n && n(r, e), (u = c() + 1);
            let f = _(r, u),
              d = p.createHref(r);
            try {
              i.pushState(f, '', d);
            } catch (h) {
              if (h instanceof DOMException && 'DataCloneError' === h.name) throw h;
              o.location.assign(d);
            }
            a && s && s({ action: l, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            l = x.Replace;
            let r = A(p.location, e, t);
            n && n(r, e), (u = c());
            let o = _(r, u),
              f = p.createHref(r);
            i.replaceState(o, '', f), a && s && s({ action: l, location: p.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return p;
      }
      var M;
      !(function (e) {
        (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
      })(M || (M = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function O(e, t, n) {
        return void 0 === n && (n = '/'), z(e, t, n, !1);
      }
      function z(e, t, n, r) {
        let o = Q(('string' === typeof t ? R(t) : t).pathname || '/', n);
        if (null == o) return null;
        let a = L(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(a);
        let i = null;
        for (let l = 0; null == i && l < a.length; ++l) {
          let e = q(o);
          i = K(a[l], e, r);
        }
        return i;
      }
      function L(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || '' : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith('/') &&
            (E(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = Z([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (E(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            L(e.children, t, s, l)),
            (null != e.path || e.index) && t.push({ path: l, score: H(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?')) for (let r of j(e.path)) o(e, t, r);
            else o(e, t);
          }),
          t
        );
      }
      function j(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith('?'),
          a = n.replace(/\?$/, '');
        if (0 === r.length) return o ? [a, ''] : [a];
        let i = j(r.join('/')),
          l = [];
        return (
          l.push(...i.map((e) => ('' === e ? a : [a, e].join('/')))),
          o && l.push(...i),
          l.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const I = /^:[\w-]+$/,
        U = 3,
        F = 2,
        B = 1,
        D = 10,
        W = -2,
        $ = (e) => '*' === e;
      function H(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some($) && (r += W),
          t && (r += F),
          n.filter((e) => !$(e)).reduce((e, t) => e + (I.test(t) ? U : '' === t ? B : D), r)
        );
      }
      function K(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          o = {},
          a = '/',
          i = [];
        for (let l = 0; l < r.length; ++l) {
          let e = r[l],
            s = l === r.length - 1,
            u = '/' === a ? t : t.slice(a.length) || '/',
            c = V({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, u),
            f = e.route;
          if (
            (!c &&
              s &&
              n &&
              !r[r.length - 1].route.index &&
              (c = V({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)),
            !c)
          )
            return null;
          Object.assign(o, c.params),
            i.push({
              params: o,
              pathname: Z([a, c.pathname]),
              pathnameBase: ee(Z([a, c.pathnameBase])),
              route: f,
            }),
            '/' !== c.pathnameBase && (a = Z([a, c.pathnameBase]));
        }
        return i;
      }
      function V(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            P(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            );
            let r = [],
              o =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }), n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    ),
                  );
            e.endsWith('*')
              ? (r.push({ paramName: '*' }), (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
                ? (o += '\\/*$')
                : '' !== e && '/' !== e && (o += '(?:(?=\\/|$))');
            let a = new RegExp(o, t ? void 0 : 'i');
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          o = t.match(n);
        if (!o) return null;
        let a = o[0],
          i = a.replace(/(.)\/+$/, '$1'),
          l = o.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: o } = t;
            if ('*' === r) {
              let e = l[n] || '';
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const s = l[n];
            return (e[r] = o && !s ? void 0 : (s || '').replace(/%2F/g, '/')), e;
          }, {}),
          pathname: a,
          pathnameBase: i,
          pattern: e,
        };
      }
      function q(e) {
        try {
          return e
            .split('/')
            .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
            .join('/');
        } catch (t) {
          return (
            P(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          );
        }
      }
      function Q(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function Y(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function G(e) {
        return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      }
      function X(e, t) {
        let n = G(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function J(e, t, n, r) {
        let o;
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (o = R(e))
            : ((o = S({}, e)),
              E(!o.pathname || !o.pathname.includes('?'), Y('?', 'pathname', 'search', o)),
              E(!o.pathname || !o.pathname.includes('#'), Y('#', 'pathname', 'hash', o)),
              E(!o.search || !o.search.includes('#'), Y('#', 'search', 'hash', o)));
        let a,
          i = '' === e || '' === o.pathname,
          l = i ? '/' : o.pathname;
        if (null == l) a = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith('..')) {
            let t = l.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            o.pathname = t.join('/');
          }
          a = e >= 0 ? t[e] : '/';
        }
        let s = (function (e, t) {
            void 0 === t && (t = '/');
            let { pathname: n, search: r = '', hash: o = '' } = 'string' === typeof e ? R(e) : e,
              a = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: a, search: te(r), hash: ne(o) };
          })(o, a),
          u = l && '/' !== l && l.endsWith('/'),
          c = (i || '.' === l) && n.endsWith('/');
        return s.pathname.endsWith('/') || (!u && !c) || (s.pathname += '/'), s;
      }
      const Z = (e) => e.join('/').replace(/\/\/+/g, '/'),
        ee = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        te = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        ne = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function re(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const oe = ['post', 'put', 'patch', 'delete'],
        ae = (new Set(oe), ['get', ...oe]);
      new Set(ae), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ie.apply(this, arguments)
        );
      }
      const le = e.createContext(null);
      const se = e.createContext(null);
      const ue = e.createContext(null);
      const ce = e.createContext(null);
      const fe = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const de = e.createContext(null);
      function pe() {
        return null != e.useContext(ce);
      }
      function he() {
        return pe() || E(!1), e.useContext(ce).location;
      }
      function me(t) {
        e.useContext(ue).static || e.useLayoutEffect(t);
      }
      function ge() {
        let { isDataRoute: t } = e.useContext(fe);
        return t
          ? (function () {
              let { router: t } = Ee(Se.UseNavigateStable),
                n = _e(Ce.UseNavigateStable),
                r = e.useRef(!1);
              return (
                me(() => {
                  r.current = !0;
                }),
                e.useCallback(
                  function (e, o) {
                    void 0 === o && (o = {}),
                      r.current &&
                        ('number' === typeof e ? t.navigate(e) : t.navigate(e, ie({ fromRouteId: n }, o)));
                  },
                  [t, n],
                )
              );
            })()
          : (function () {
              pe() || E(!1);
              let t = e.useContext(le),
                { basename: n, future: r, navigator: o } = e.useContext(ue),
                { matches: a } = e.useContext(fe),
                { pathname: i } = he(),
                l = JSON.stringify(X(a, r.v7_relativeSplatPath)),
                s = e.useRef(!1);
              return (
                me(() => {
                  s.current = !0;
                }),
                e.useCallback(
                  function (e, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ('number' === typeof e) return void o.go(e);
                    let a = J(e, JSON.parse(l), i, 'path' === r.relative);
                    null == t && '/' !== n && (a.pathname = '/' === a.pathname ? n : Z([n, a.pathname])),
                      (r.replace ? o.replace : o.push)(a, r.state, r);
                  },
                  [n, o, l, i, t],
                )
              );
            })();
      }
      function ye(t, n, r, o) {
        pe() || E(!1);
        let { navigator: a } = e.useContext(ue),
          { matches: i } = e.useContext(fe),
          l = i[i.length - 1],
          s = l ? l.params : {},
          u = (l && l.pathname, l ? l.pathnameBase : '/');
        l && l.route;
        let c,
          f = he();
        if (n) {
          var d;
          let e = 'string' === typeof n ? R(n) : n;
          '/' === u || (null == (d = e.pathname) ? void 0 : d.startsWith(u)) || E(!1), (c = e);
        } else c = f;
        let p = c.pathname || '/',
          h = p;
        if ('/' !== u) {
          let e = u.replace(/^\//, '').split('/');
          h = '/' + p.replace(/^\//, '').split('/').slice(e.length).join('/');
        }
        let m = O(t, { pathname: h });
        let g = ke(
          m &&
            m.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: Z([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? u
                    : Z([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]),
              }),
            ),
          i,
          r,
          o,
        );
        return n && g
          ? e.createElement(
              ce.Provider,
              {
                value: {
                  location: ie({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, c),
                  navigationType: x.Pop,
                },
              },
              g,
            )
          : g;
      }
      function ve() {
        let t = (function () {
            var t;
            let n = e.useContext(de),
              r = Pe(Ce.UseRouteError),
              o = _e(Ce.UseRouteError);
            if (void 0 !== n) return n;
            return null == (t = r.errors) ? void 0 : t[o];
          })(),
          n = re(t) ? t.status + ' ' + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          o = 'rgba(200,200,200, 0.5)',
          a = { padding: '0.5rem', backgroundColor: o };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement('h2', null, 'Unexpected Application Error!'),
          e.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? e.createElement('pre', { style: a }, r) : null,
          null,
        );
      }
      const be = e.createElement(ve, null);
      class xe extends e.Component {
        constructor(e) {
          super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location || ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error('React Router caught the following error during render', e, t);
        }
        render() {
          return void 0 !== this.state.error
            ? e.createElement(
                fe.Provider,
                { value: this.props.routeContext },
                e.createElement(de.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
        }
      }
      function we(t) {
        let { routeContext: n, match: r, children: o } = t,
          a = e.useContext(le);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(fe.Provider, { value: n }, o)
        );
      }
      function ke(t, n, r, o) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), void 0 === o && (o = null), null == t)) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          t = r.matches;
        }
        let l = t,
          s = null == (a = r) ? void 0 : a.errors;
        if (null != s) {
          let e = l.findIndex((e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]));
          e >= 0 || E(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (r && o && o.v7_partialHydration)
          for (let e = 0; e < l.length; e++) {
            let t = l[e];
            if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
              let { loaderData: e, errors: n } = r,
                o = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || o) {
                (u = !0), (l = c >= 0 ? l.slice(0, c + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((t, o, a) => {
          let i,
            f = !1,
            d = null,
            p = null;
          var h;
          r &&
            ((i = s && o.route.id ? s[o.route.id] : void 0),
            (d = o.route.errorElement || be),
            u &&
              (c < 0 && 0 === a
                ? ((h = 'route-fallback'), !1 || Ae[h] || (Ae[h] = !0), (f = !0), (p = null))
                : c === a && ((f = !0), (p = o.route.hydrateFallbackElement || null))));
          let m = n.concat(l.slice(0, a + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? d
                  : f
                    ? p
                    : o.route.Component
                      ? e.createElement(o.route.Component, null)
                      : o.route.element
                        ? o.route.element
                        : t),
                e.createElement(we, {
                  match: o,
                  routeContext: { outlet: t, matches: m, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a)
            ? e.createElement(xe, {
                location: r.location,
                revalidation: r.revalidation,
                component: d,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var Se = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(Se || {}),
        Ce = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(Ce || {});
      function Ee(t) {
        let n = e.useContext(le);
        return n || E(!1), n;
      }
      function Pe(t) {
        let n = e.useContext(se);
        return n || E(!1), n;
      }
      function _e(t) {
        let n = (function (t) {
            let n = e.useContext(fe);
            return n || E(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || E(!1), r.route.id;
      }
      const Ae = {};
      t.startTransition;
      function Te(t) {
        let { to: n, replace: r, state: o, relative: a } = t;
        pe() || E(!1);
        let { future: i, static: l } = e.useContext(ue),
          { matches: s } = e.useContext(fe),
          { pathname: u } = he(),
          c = ge(),
          f = J(n, X(s, i.v7_relativeSplatPath), u, 'path' === a),
          d = JSON.stringify(f);
        return (
          e.useEffect(() => c(JSON.parse(d), { replace: r, state: o, relative: a }), [c, d, a, r, o]), null
        );
      }
      function Re(e) {
        E(!1);
      }
      function Ne(t) {
        let {
          basename: n = '/',
          children: r = null,
          location: o,
          navigationType: a = x.Pop,
          navigator: i,
          static: l = !1,
          future: s,
        } = t;
        pe() && E(!1);
        let u = n.replace(/^\/*/, '/'),
          c = e.useMemo(
            () => ({ basename: u, navigator: i, static: l, future: ie({ v7_relativeSplatPath: !1 }, s) }),
            [u, s, i, l],
          );
        'string' === typeof o && (o = R(o));
        let { pathname: f = '/', search: d = '', hash: p = '', state: h = null, key: m = 'default' } = o,
          g = e.useMemo(() => {
            let e = Q(f, u);
            return null == e
              ? null
              : { location: { pathname: e, search: d, hash: p, state: h, key: m }, navigationType: a };
          }, [u, f, d, p, h, m, a]);
        return null == g
          ? null
          : e.createElement(
              ue.Provider,
              { value: c },
              e.createElement(ce.Provider, { children: r, value: g }),
            );
      }
      function Me(e) {
        let { children: t, location: n } = e;
        return ye(Oe(t), n);
      }
      new Promise(() => {});
      e.Component;
      function Oe(t, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          e.Children.forEach(t, (t, o) => {
            if (!e.isValidElement(t)) return;
            let a = [...n, o];
            if (t.type === e.Fragment) return void r.push.apply(r, Oe(t.props.children, a));
            t.type !== Re && E(!1), t.props.index && t.props.children && E(!1);
            let i = {
              id: t.props.id || a.join('-'),
              caseSensitive: t.props.caseSensitive,
              element: t.props.element,
              Component: t.props.Component,
              index: t.props.index,
              path: t.props.path,
              loader: t.props.loader,
              action: t.props.action,
              errorElement: t.props.errorElement,
              ErrorBoundary: t.props.ErrorBoundary,
              hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
              shouldRevalidate: t.props.shouldRevalidate,
              handle: t.props.handle,
              lazy: t.props.lazy,
            };
            t.props.children && (i.children = Oe(t.props.children, a)), r.push(i);
          }),
          r
        );
      }
      new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      try {
        window.__reactRouterVersion = '6';
      } catch (Jr) {}
      new Map();
      const ze = t.startTransition;
      k.flushSync, t.useId;
      function Le(t) {
        let { basename: n, children: r, future: o, window: a } = t,
          i = e.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: a, v5Compat: !0 }) && (l = {}),
            N(
              function (e, t) {
                let { pathname: n, search: r, hash: o } = e.location;
                return A(
                  '',
                  { pathname: n, search: r, hash: o },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default',
                );
              },
              function (e, t) {
                return 'string' === typeof t ? t : T(t);
              },
              null,
              l,
            )));
        let s = i.current,
          [u, c] = e.useState({ action: s.action, location: s.location }),
          { v7_startTransition: f } = o || {},
          d = e.useCallback(
            (e) => {
              f && ze ? ze(() => c(e)) : c(e);
            },
            [c, f],
          );
        return (
          e.useLayoutEffect(() => s.listen(d), [s, d]),
          e.createElement(Ne, {
            basename: n,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s,
            future: o,
          })
        );
      }
      'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        window.document.createElement;
      var je, Ie;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(je || (je = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(Ie || (Ie = {}));
      const Ue = 'undefined' !== typeof window ? e.useLayoutEffect : e.useEffect;
      var Fe = n(8168);
      function Be(e, t) {
        const n = (0, Fe.A)({}, t);
        return (
          Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/)) n[r] = (0, Fe.A)({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
              const o = e[r] || {},
                a = t[r];
              (n[r] = {}),
                a && Object.keys(a)
                  ? o && Object.keys(o)
                    ? ((n[r] = (0, Fe.A)({}, a)),
                      Object.keys(o).forEach((e) => {
                        n[r][e] = Be(o[e], a[e]);
                      }))
                    : (n[r] = a)
                  : (n[r] = o);
            } else void 0 === n[r] && (n[r] = e[r]);
          }),
          n
        );
      }
      var De = n(5756);
      const We = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const n = e.useContext(De.T);
        return n && ((r = n), 0 !== Object.keys(r).length) ? n : t;
        var r;
      };
      function $e(t, n, r, o, a) {
        const [i, l] = e.useState(() => (a && r ? r(t).matches : o ? o(t).matches : n));
        return (
          Ue(() => {
            let e = !0;
            if (!r) return;
            const n = r(t),
              o = () => {
                e && l(n.matches);
              };
            return (
              o(),
              n.addListener(o),
              () => {
                (e = !1), n.removeListener(o);
              }
            );
          }, [t, r]),
          i
        );
      }
      const He = t.useSyncExternalStore;
      function Ke(t, n, r, o, a) {
        const i = e.useCallback(() => n, [n]),
          l = e.useMemo(() => {
            if (a && r) return () => r(t).matches;
            if (null !== o) {
              const { matches: e } = o(t);
              return () => e;
            }
            return i;
          }, [i, t, o, a, r]),
          [s, u] = e.useMemo(() => {
            if (null === r) return [i, () => () => {}];
            const e = r(t);
            return [
              () => e.matches,
              (t) => (
                e.addListener(t),
                () => {
                  e.removeListener(t);
                }
              ),
            ];
          }, [i, r, t]);
        return He(u, s, l);
      }
      function Ve(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = We(),
          r = 'undefined' !== typeof window && 'undefined' !== typeof window.matchMedia,
          {
            defaultMatches: o = !1,
            matchMedia: a = r ? window.matchMedia : null,
            ssrMatchMedia: i = null,
            noSsr: l = !1,
          } = (function (e) {
            const { theme: t, name: n, props: r } = e;
            return t && t.components && t.components[n] && t.components[n].defaultProps
              ? Be(t.components[n].defaultProps, r)
              : r;
          })({ name: 'MuiUseMediaQuery', props: t, theme: n });
        let s = 'function' === typeof e ? e(n) : e;
        s = s.replace(/^@media( ?)/m, '');
        return (void 0 !== He ? Ke : $e)(s, o, a, i, l);
      }
      var qe = n(8587);
      function Qe(e) {
        var t,
          n,
          r = '';
        if ('string' == typeof e || 'number' == typeof e) r += e;
        else if ('object' == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Qe(e[t])) && (r && (r += ' '), (r += n));
          } else for (n in e) e[n] && (r && (r += ' '), (r += n));
        return r;
      }
      const Ye = function () {
        for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
          (e = arguments[n]) && (t = Qe(e)) && (r && (r += ' '), (r += t));
        return r;
      };
      var Ge = n(7713),
        Xe = n(8812),
        Je = n(8698),
        Ze = n(8280);
      const et = (0, Ze.A)();
      const tt = function () {
          return We(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et);
        },
        nt = ['className', 'component'];
      const rt = (e) => e,
        ot = (() => {
          let e = rt;
          return {
            configure(t) {
              e = t;
            },
            generate: (t) => e(t),
            reset() {
              e = rt;
            },
          };
        })();
      var at = n(6632),
        it = n(3216),
        lt = n(7758);
      var st = n(7266);
      const ut = { black: '#000', white: '#fff' },
        ct = {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          A100: '#f5f5f5',
          A200: '#eeeeee',
          A400: '#bdbdbd',
          A700: '#616161',
        },
        ft = {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
          A100: '#ea80fc',
          A200: '#e040fb',
          A400: '#d500f9',
          A700: '#aa00ff',
        },
        dt = {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          A100: '#ff8a80',
          A200: '#ff5252',
          A400: '#ff1744',
          A700: '#d50000',
        },
        pt = {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
          A100: '#ffd180',
          A200: '#ffab40',
          A400: '#ff9100',
          A700: '#ff6d00',
        },
        ht = {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
          A100: '#82b1ff',
          A200: '#448aff',
          A400: '#2979ff',
          A700: '#2962ff',
        },
        mt = {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
          A100: '#80d8ff',
          A200: '#40c4ff',
          A400: '#00b0ff',
          A700: '#0091ea',
        },
        gt = {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          A100: '#b9f6ca',
          A200: '#69f0ae',
          A400: '#00e676',
          A700: '#00c853',
        },
        yt = ['mode', 'contrastThreshold', 'tonalOffset'],
        vt = {
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: { paper: ut.white, default: ut.white },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        bt = {
          text: {
            primary: ut.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
          },
          divider: 'rgba(255, 255, 255, 0.12)',
          background: { paper: '#121212', default: '#121212' },
          action: {
            active: ut.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      function xt(e, t, n, r) {
        const o = r.light || r,
          a = r.dark || 1.5 * r;
        e[t] ||
          (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : 'light' === t
              ? (e.light = (0, st.a)(e.main, o))
              : 'dark' === t && (e.dark = (0, st.e$)(e.main, a)));
      }
      function wt(e) {
        const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
          o = (0, qe.A)(e, yt),
          a =
            e.primary ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: ht[200], light: ht[50], dark: ht[400] }
                : { main: ht[700], light: ht[400], dark: ht[800] };
            })(t),
          i =
            e.secondary ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: ft[200], light: ft[50], dark: ft[400] }
                : { main: ft[500], light: ft[300], dark: ft[700] };
            })(t),
          l =
            e.error ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: dt[500], light: dt[300], dark: dt[700] }
                : { main: dt[700], light: dt[400], dark: dt[800] };
            })(t),
          s =
            e.info ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: mt[400], light: mt[300], dark: mt[700] }
                : { main: mt[700], light: mt[500], dark: mt[900] };
            })(t),
          u =
            e.success ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: gt[400], light: gt[300], dark: gt[700] }
                : { main: gt[800], light: gt[500], dark: gt[900] };
            })(t),
          c =
            e.warning ||
            (function () {
              return 'dark' === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'light')
                ? { main: pt[400], light: pt[300], dark: pt[700] }
                : { main: '#ed6c02', light: pt[500], dark: pt[900] };
            })(t);
        function f(e) {
          return (0, st.eM)(e, bt.text.primary) >= n ? bt.text.primary : vt.text.primary;
        }
        const d = (e) => {
            let { color: t, name: n, mainShade: o = 500, lightShade: a = 300, darkShade: i = 700 } = e;
            if (((t = (0, Fe.A)({}, t)), !t.main && t[o] && (t.main = t[o]), !t.hasOwnProperty('main')))
              throw new Error((0, at.A)(11, n ? ' ('.concat(n, ')') : '', o));
            if ('string' !== typeof t.main)
              throw new Error((0, at.A)(12, n ? ' ('.concat(n, ')') : '', JSON.stringify(t.main)));
            return (
              xt(t, 'light', a, r), xt(t, 'dark', i, r), t.contrastText || (t.contrastText = f(t.main)), t
            );
          },
          p = { dark: bt, light: vt };
        return (0, it.A)(
          (0, Fe.A)(
            {
              common: (0, Fe.A)({}, ut),
              mode: t,
              primary: d({ color: a, name: 'primary' }),
              secondary: d({
                color: i,
                name: 'secondary',
                mainShade: 'A400',
                lightShade: 'A200',
                darkShade: 'A700',
              }),
              error: d({ color: l, name: 'error' }),
              warning: d({ color: c, name: 'warning' }),
              info: d({ color: s, name: 'info' }),
              success: d({ color: u, name: 'success' }),
              grey: ct,
              contrastThreshold: n,
              getContrastText: f,
              augmentColor: d,
              tonalOffset: r,
            },
            p[t],
          ),
          o,
        );
      }
      const kt = [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ];
      const St = { textTransform: 'uppercase' },
        Ct = '"Roboto", "Helvetica", "Arial", sans-serif';
      function Et(e, t) {
        const n = 'function' === typeof t ? t(e) : t,
          {
            fontFamily: r = Ct,
            fontSize: o = 14,
            fontWeightLight: a = 300,
            fontWeightRegular: i = 400,
            fontWeightMedium: l = 500,
            fontWeightBold: s = 700,
            htmlFontSize: u = 16,
            allVariants: c,
            pxToRem: f,
          } = n,
          d = (0, qe.A)(n, kt);
        const p = o / 14,
          h = f || ((e) => ''.concat((e / u) * p, 'rem')),
          m = (e, t, n, o, a) => {
            return (0, Fe.A)(
              { fontFamily: r, fontWeight: e, fontSize: h(t), lineHeight: n },
              r === Ct ? { letterSpacing: ''.concat(((i = o / t), Math.round(1e5 * i) / 1e5), 'em') } : {},
              a,
              c,
            );
            var i;
          },
          g = {
            h1: m(a, 96, 1.167, -1.5),
            h2: m(a, 60, 1.2, -0.5),
            h3: m(i, 48, 1.167, 0),
            h4: m(i, 34, 1.235, 0.25),
            h5: m(i, 24, 1.334, 0),
            h6: m(l, 20, 1.6, 0.15),
            subtitle1: m(i, 16, 1.75, 0.15),
            subtitle2: m(l, 14, 1.57, 0.1),
            body1: m(i, 16, 1.5, 0.15),
            body2: m(i, 14, 1.43, 0.15),
            button: m(l, 14, 1.75, 0.4, St),
            caption: m(i, 12, 1.66, 0.4),
            overline: m(i, 12, 2.66, 1, St),
            inherit: {
              fontFamily: 'inherit',
              fontWeight: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit',
              letterSpacing: 'inherit',
            },
          };
        return (0, it.A)(
          (0, Fe.A)(
            {
              htmlFontSize: u,
              pxToRem: h,
              fontFamily: r,
              fontSize: o,
              fontWeightLight: a,
              fontWeightRegular: i,
              fontWeightMedium: l,
              fontWeightBold: s,
            },
            g,
          ),
          d,
          { clone: !1 },
        );
      }
      function Pt() {
        return [
          ''
            .concat(arguments.length <= 0 ? void 0 : arguments[0], 'px ')
            .concat(arguments.length <= 1 ? void 0 : arguments[1], 'px ')
            .concat(arguments.length <= 2 ? void 0 : arguments[2], 'px ')
            .concat(arguments.length <= 3 ? void 0 : arguments[3], 'px rgba(0,0,0,')
            .concat(0.2, ')'),
          ''
            .concat(arguments.length <= 4 ? void 0 : arguments[4], 'px ')
            .concat(arguments.length <= 5 ? void 0 : arguments[5], 'px ')
            .concat(arguments.length <= 6 ? void 0 : arguments[6], 'px ')
            .concat(arguments.length <= 7 ? void 0 : arguments[7], 'px rgba(0,0,0,')
            .concat(0.14, ')'),
          ''
            .concat(arguments.length <= 8 ? void 0 : arguments[8], 'px ')
            .concat(arguments.length <= 9 ? void 0 : arguments[9], 'px ')
            .concat(arguments.length <= 10 ? void 0 : arguments[10], 'px ')
            .concat(arguments.length <= 11 ? void 0 : arguments[11], 'px rgba(0,0,0,')
            .concat(0.12, ')'),
        ].join(',');
      }
      const _t = [
          'none',
          Pt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          Pt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          Pt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          Pt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          Pt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          Pt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          Pt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          Pt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          Pt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          Pt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          Pt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          Pt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          Pt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          Pt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          Pt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          Pt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          Pt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          Pt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          Pt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          Pt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          Pt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          Pt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          Pt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          Pt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        At = ['duration', 'easing', 'delay'],
        Tt = {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        Rt = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function Nt(e) {
        return ''.concat(Math.round(e), 'ms');
      }
      function Mt(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
      }
      function Ot(e) {
        const t = (0, Fe.A)({}, Tt, e.easing),
          n = (0, Fe.A)({}, Rt, e.duration);
        return (0, Fe.A)(
          {
            getAutoHeightDuration: Mt,
            create: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ['all'],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const { duration: o = n.standard, easing: a = t.easeInOut, delay: i = 0 } = r;
              (0, qe.A)(r, At);
              return (Array.isArray(e) ? e : [e])
                .map((e) =>
                  ''
                    .concat(e, ' ')
                    .concat('string' === typeof o ? o : Nt(o), ' ')
                    .concat(a, ' ')
                    .concat('string' === typeof i ? i : Nt(i)),
                )
                .join(',');
            },
          },
          e,
          { easing: t, duration: n },
        );
      }
      const zt = {
          mobileStepper: 1e3,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        Lt = ['breakpoints', 'mixins', 'spacing', 'palette', 'transitions', 'typography', 'shape'];
      function jt() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { mixins: t = {}, palette: n = {}, transitions: r = {}, typography: o = {} } = e,
          a = (0, qe.A)(e, Lt);
        if (e.vars) throw new Error((0, at.A)(18));
        const i = wt(n),
          l = (0, Ze.A)(e);
        let s = (0, it.A)(l, {
          mixins:
            ((u = l.breakpoints),
            (c = t),
            (0, Fe.A)(
              {
                toolbar: {
                  minHeight: 56,
                  [u.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
                  [u.up('sm')]: { minHeight: 64 },
                },
              },
              c,
            )),
          palette: i,
          shadows: _t.slice(),
          typography: Et(i, o),
          transitions: Ot(r),
          zIndex: (0, Fe.A)({}, zt),
        });
        var u, c;
        s = (0, it.A)(s, a);
        for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
          d[p - 1] = arguments[p];
        return (
          (s = d.reduce((e, t) => (0, it.A)(e, t), s)),
          (s.unstable_sxConfig = (0, Fe.A)({}, lt.A, null == a ? void 0 : a.unstable_sxConfig)),
          (s.unstable_sx = function (e) {
            return (0, Xe.A)({ sx: e, theme: this });
          }),
          s
        );
      }
      const It = jt,
        Ut = '$$material',
        Ft = {
          active: 'active',
          checked: 'checked',
          completed: 'completed',
          disabled: 'disabled',
          error: 'error',
          expanded: 'expanded',
          focused: 'focused',
          focusVisible: 'focusVisible',
          open: 'open',
          readOnly: 'readOnly',
          required: 'required',
          selected: 'selected',
        };
      function Bt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Mui';
        const r = Ft[t];
        return r ? ''.concat(n, '-').concat(r) : ''.concat(ot.generate(e), '-').concat(t);
      }
      function Dt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Mui';
        const r = {};
        return (
          t.forEach((t) => {
            r[t] = Bt(e, t, n);
          }),
          r
        );
      }
      const Wt = Dt('MuiBox', ['root']),
        $t = (function () {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              themeId: n,
              defaultTheme: r,
              defaultClassName: a = 'MuiBox-root',
              generateClassName: i,
            } = t,
            l = (0, Ge.default)('div', {
              shouldForwardProp: (e) => 'theme' !== e && 'sx' !== e && 'as' !== e,
            })(Xe.A);
          return e.forwardRef(function (e, t) {
            const s = tt(r),
              u = (0, Je.A)(e),
              { className: c, component: f = 'div' } = u,
              d = (0, qe.A)(u, nt);
            return (0, o.jsx)(
              l,
              (0, Fe.A)({ as: f, ref: t, className: Ye(c, i ? i(a) : a), theme: (n && s[n]) || s }, d),
            );
          });
        })({ themeId: Ut, defaultTheme: It(), defaultClassName: Wt.root, generateClassName: ot.generate }),
        Ht = $t;
      function Kt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        const r = {};
        return (
          Object.keys(e).forEach((o) => {
            r[o] = e[o]
              .reduce((e, r) => {
                if (r) {
                  const o = t(r);
                  '' !== o && e.push(o), n && n[r] && e.push(n[r]);
                }
                return e;
              }, [])
              .join(' ');
          }),
          r
        );
      }
      var Vt = n(8052);
      const qt = It();
      const Qt = function (e) {
          return 'ownerState' !== e && 'theme' !== e && 'sx' !== e && 'as' !== e;
        },
        Yt = (e) => Qt(e) && 'classes' !== e,
        Gt = (0, Vt.Ay)({ themeId: Ut, defaultTheme: qt, rootShouldForwardProp: Yt }),
        Xt = e.createContext(void 0);
      function Jt(t) {
        let { props: n, name: r } = t;
        return (function (e) {
          const { theme: t, name: n, props: r } = e;
          if (!t || !t.components || !t.components[n]) return r;
          const o = t.components[n];
          return o.defaultProps ? Be(o.defaultProps, r) : o.styleOverrides || o.variants ? r : Be(o, r);
        })({ props: n, name: r, theme: { components: e.useContext(Xt) } });
      }
      function Zt(e) {
        return Jt(e);
      }
      const en = n(410).A;
      function tn(e) {
        return Bt('MuiTypography', e);
      }
      Dt('MuiTypography', [
        'root',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'inherit',
        'button',
        'caption',
        'overline',
        'alignLeft',
        'alignRight',
        'alignCenter',
        'alignJustify',
        'noWrap',
        'gutterBottom',
        'paragraph',
      ]);
      const nn = [
          'align',
          'className',
          'component',
          'gutterBottom',
          'noWrap',
          'paragraph',
          'variant',
          'variantMapping',
        ],
        rn = Gt('span', {
          name: 'MuiTypography',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.variant && t[n.variant],
              'inherit' !== n.align && t['align'.concat(en(n.align))],
              n.noWrap && t.noWrap,
              n.gutterBottom && t.gutterBottom,
              n.paragraph && t.paragraph,
            ];
          },
        })((e) => {
          let { theme: t, ownerState: n } = e;
          return (0, Fe.A)(
            { margin: 0 },
            'inherit' === n.variant && { font: 'inherit' },
            'inherit' !== n.variant && t.typography[n.variant],
            'inherit' !== n.align && { textAlign: n.align },
            n.noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
            n.gutterBottom && { marginBottom: '0.35em' },
            n.paragraph && { marginBottom: 16 },
          );
        }),
        on = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body2: 'p',
          inherit: 'p',
        },
        an = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main',
        },
        ln = e.forwardRef(function (e, t) {
          const n = Zt({ props: e, name: 'MuiTypography' }),
            r = ((e) => an[e] || e)(n.color),
            a = (0, Je.A)((0, Fe.A)({}, n, { color: r })),
            {
              align: i = 'inherit',
              className: l,
              component: s,
              gutterBottom: u = !1,
              noWrap: c = !1,
              paragraph: f = !1,
              variant: d = 'body1',
              variantMapping: p = on,
            } = a,
            h = (0, qe.A)(a, nn),
            m = (0, Fe.A)({}, a, {
              align: i,
              color: r,
              className: l,
              component: s,
              gutterBottom: u,
              noWrap: c,
              paragraph: f,
              variant: d,
              variantMapping: p,
            }),
            g = s || (f ? 'p' : p[d] || on[d]) || 'span',
            y = ((e) => {
              const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: a, classes: i } = e;
              return Kt(
                {
                  root: [
                    'root',
                    a,
                    'inherit' !== e.align && 'align'.concat(en(t)),
                    n && 'gutterBottom',
                    r && 'noWrap',
                    o && 'paragraph',
                  ],
                },
                tn,
                i,
              );
            })(m);
          return (0, o.jsx)(rn, (0, Fe.A)({ as: g, ref: t, ownerState: m, className: Ye(y.root, l) }, h));
        });
      var sn = n(504),
        un = n.n(sn);
      const cn = () => {
        const t = ge(),
          [n, r] = (0, e.useState)(!1),
          {
            connectionStatus: o,
            setConnectionStatus: a,
            connectWebSocket: i,
            createUser: l,
          } = (0, e.useContext)(d),
          s = (0, e.useRef)();
        (0, e.useEffect)(() => {
          'online' === o && l(s.current),
            'userRegistered' === o && (r(!1), t('/findingPair')),
            'serverError' === o && r(!1);
        }, [o]);
        return {
          startSession: (e) => {
            e.preventDefault();
            const t = e.currentTarget.elements.nickNameInput.value;
            '' !== t
              ? (((e) => {
                  const t = e.replace(/['"]/g, ''),
                    n = un().box.keyPair(),
                    r = n.publicKey,
                    o = (n.secretKey, String(r));
                  s.current = {
                    publicKey: o,
                    nickName: t,
                    password: null,
                    to: null,
                    requestStatus: null,
                    stateTimeStamp: Date.now(),
                    lastMessageTime: null,
                  };
                })(t),
                r(!0),
                i())
              : a('nickNameError');
          },
          isLoading: n,
          onFocusHandler: (e) => {
            e.currentTarget.form.elements.nickNameInput.removeAttribute('placeholder');
          },
          onBlurHandler: (e) => {
            e.currentTarget.form.elements.nickNameInput.setAttribute('placeholder', 'Insert a nick name');
          },
        };
      };
      const fn = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return e.useMemo(
          () =>
            n.every((e) => null == e)
              ? null
              : (e) => {
                  n.forEach((t) => {
                    !(function (e, t) {
                      'function' === typeof e ? e(t) : e && (e.current = t);
                    })(t, e);
                  });
                },
          n,
        );
      };
      const dn = function (t) {
          const n = e.useRef(t);
          return (
            Ue(() => {
              n.current = t;
            }),
            e.useRef(function () {
              return (0, n.current)(...arguments);
            }).current
          );
        },
        pn = {};
      const hn = [];
      class mn {
        constructor() {
          (this.currentId = null),
            (this.clear = () => {
              null !== this.currentId && (clearTimeout(this.currentId), (this.currentId = null));
            }),
            (this.disposeEffect = () => this.clear);
        }
        static create() {
          return new mn();
        }
        start(e, t) {
          this.clear(),
            (this.currentId = setTimeout(() => {
              (this.currentId = null), t();
            }, e));
        }
      }
      function gn() {
        const t = (function (t, n) {
          const r = e.useRef(pn);
          return r.current === pn && (r.current = t(n)), r;
        })(mn.create).current;
        var n;
        return (n = t.disposeEffect), e.useEffect(n, hn), t;
      }
      let yn = !0,
        vn = !1;
      const bn = new mn(),
        xn = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          'datetime-local': !0,
        };
      function wn(e) {
        e.metaKey || e.altKey || e.ctrlKey || (yn = !0);
      }
      function kn() {
        yn = !1;
      }
      function Sn() {
        'hidden' === this.visibilityState && vn && (yn = !0);
      }
      function Cn(e) {
        const { target: t } = e;
        try {
          return t.matches(':focus-visible');
        } catch (n) {}
        return (
          yn ||
          (function (e) {
            const { type: t, tagName: n } = e;
            return (
              !('INPUT' !== n || !xn[t] || e.readOnly) ||
              ('TEXTAREA' === n && !e.readOnly) ||
              !!e.isContentEditable
            );
          })(t)
        );
      }
      const En = function () {
        const t = e.useCallback((e) => {
            var t;
            null != e &&
              ((t = e.ownerDocument).addEventListener('keydown', wn, !0),
              t.addEventListener('mousedown', kn, !0),
              t.addEventListener('pointerdown', kn, !0),
              t.addEventListener('touchstart', kn, !0),
              t.addEventListener('visibilitychange', Sn, !0));
          }, []),
          n = e.useRef(!1);
        return {
          isFocusVisibleRef: n,
          onFocus: function (e) {
            return !!Cn(e) && ((n.current = !0), !0);
          },
          onBlur: function () {
            return (
              !!n.current &&
              ((vn = !0),
              bn.start(100, () => {
                vn = !1;
              }),
              (n.current = !1),
              !0)
            );
          },
          ref: t,
        };
      };
      function Pn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      function _n(e, t) {
        return (
          (_n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          _n(e, t)
        );
      }
      const An = e.createContext(null);
      function Tn(t, n) {
        var r = Object.create(null);
        return (
          t &&
            e.Children.map(t, function (e) {
              return e;
            }).forEach(function (t) {
              r[t.key] = (function (t) {
                return n && (0, e.isValidElement)(t) ? n(t) : t;
              })(t);
            }),
          r
        );
      }
      function Rn(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function Nn(t, n, r) {
        var o = Tn(t.children),
          a = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              o = Object.create(null),
              a = [];
            for (var i in e) i in t ? a.length && ((o[i] = a), (a = [])) : a.push(i);
            var l = {};
            for (var s in t) {
              if (o[s])
                for (r = 0; r < o[s].length; r++) {
                  var u = o[s][r];
                  l[o[s][r]] = n(u);
                }
              l[s] = n(s);
            }
            for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
            return l;
          })(n, o);
        return (
          Object.keys(a).forEach(function (i) {
            var l = a[i];
            if ((0, e.isValidElement)(l)) {
              var s = i in n,
                u = i in o,
                c = n[i],
                f = (0, e.isValidElement)(c) && !c.props.in;
              !u || (s && !f)
                ? u || !s || f
                  ? u &&
                    s &&
                    (0, e.isValidElement)(c) &&
                    (a[i] = (0, e.cloneElement)(l, {
                      onExited: r.bind(null, l),
                      in: c.props.in,
                      exit: Rn(l, 'exit', t),
                      enter: Rn(l, 'enter', t),
                    }))
                  : (a[i] = (0, e.cloneElement)(l, { in: !1 }))
                : (a[i] = (0, e.cloneElement)(l, {
                    onExited: r.bind(null, l),
                    in: !0,
                    exit: Rn(l, 'exit', t),
                    enter: Rn(l, 'enter', t),
                  }));
            }
          }),
          a
        );
      }
      var Mn =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        On = (function (t) {
          var n, r;
          function o(e, n) {
            var r,
              o = (r = t.call(this, e, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e;
                })(r),
              );
            return (r.state = { contextValue: { isMounting: !0 }, handleExited: o, firstRender: !0 }), r;
          }
          (r = t), ((n = o).prototype = Object.create(r.prototype)), (n.prototype.constructor = n), _n(n, r);
          var a = o.prototype;
          return (
            (a.componentDidMount = function () {
              (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (a.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (o.getDerivedStateFromProps = function (t, n) {
              var r,
                o,
                a = n.children,
                i = n.handleExited;
              return {
                children: n.firstRender
                  ? ((r = t),
                    (o = i),
                    Tn(r.children, function (t) {
                      return (0, e.cloneElement)(t, {
                        onExited: o.bind(null, t),
                        in: !0,
                        appear: Rn(t, 'appear', r),
                        enter: Rn(t, 'enter', r),
                        exit: Rn(t, 'exit', r),
                      });
                    }))
                  : Nn(t, a, i),
                firstRender: !1,
              };
            }),
            (a.handleExited = function (e, t) {
              var n = Tn(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = (0, Fe.A)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (a.render = function () {
              var t = this.props,
                n = t.component,
                r = t.childFactory,
                o = (0, qe.A)(t, ['component', 'childFactory']),
                a = this.state.contextValue,
                i = Mn(this.state.children).map(r);
              return (
                delete o.appear,
                delete o.enter,
                delete o.exit,
                null === n
                  ? e.createElement(An.Provider, { value: a }, i)
                  : e.createElement(An.Provider, { value: a }, e.createElement(n, o, i))
              );
            }),
            o
          );
        })(e.Component);
      (On.propTypes = {}),
        (On.defaultProps = {
          component: 'div',
          childFactory: function (e) {
            return e;
          },
        });
      const zn = On;
      var Ln = n(3290);
      const jn = function (t) {
        const {
            className: n,
            classes: r,
            pulsate: a = !1,
            rippleX: i,
            rippleY: l,
            rippleSize: s,
            in: u,
            onExited: c,
            timeout: f,
          } = t,
          [d, p] = e.useState(!1),
          h = Ye(n, r.ripple, r.rippleVisible, a && r.ripplePulsate),
          m = { width: s, height: s, top: -s / 2 + l, left: -s / 2 + i },
          g = Ye(r.child, d && r.childLeaving, a && r.childPulsate);
        return (
          u || d || p(!0),
          e.useEffect(() => {
            if (!u && null != c) {
              const e = setTimeout(c, f);
              return () => {
                clearTimeout(e);
              };
            }
          }, [c, u, f]),
          (0, o.jsx)('span', { className: h, style: m, children: (0, o.jsx)('span', { className: g }) })
        );
      };
      const In = Dt('MuiTouchRipple', [
        'root',
        'ripple',
        'rippleVisible',
        'ripplePulsate',
        'child',
        'childLeaving',
        'childPulsate',
      ]);
      var Un, Fn, Bn, Dn;
      const Wn = ['center', 'classes', 'className'];
      let $n, Hn, Kn, Vn;
      const qn = (0, Ln.i7)(
          $n ||
            ($n =
              Un ||
              (Un = Pn([
                '\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n',
              ]))),
        ),
        Qn = (0, Ln.i7)(
          Hn ||
            (Hn = Fn || (Fn = Pn(['\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n']))),
        ),
        Yn = (0, Ln.i7)(
          Kn ||
            (Kn =
              Bn ||
              (Bn = Pn([
                '\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n',
              ]))),
        ),
        Gn = Gt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: 'inherit',
        }),
        Xn = Gt(jn, { name: 'MuiTouchRipple', slot: 'Ripple' })(
          Vn ||
            (Vn =
              Dn ||
              (Dn = Pn([
                '\n  opacity: 0;\n  position: absolute;\n\n  &.',
                ' {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ',
                ';\n    animation-duration: ',
                'ms;\n    animation-timing-function: ',
                ';\n  }\n\n  &.',
                ' {\n    animation-duration: ',
                'ms;\n  }\n\n  & .',
                ' {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .',
                ' {\n    opacity: 0;\n    animation-name: ',
                ';\n    animation-duration: ',
                'ms;\n    animation-timing-function: ',
                ';\n  }\n\n  & .',
                ' {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ',
                ';\n    animation-duration: 2500ms;\n    animation-timing-function: ',
                ';\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n',
              ]))),
          In.rippleVisible,
          qn,
          550,
          (e) => {
            let { theme: t } = e;
            return t.transitions.easing.easeInOut;
          },
          In.ripplePulsate,
          (e) => {
            let { theme: t } = e;
            return t.transitions.duration.shorter;
          },
          In.child,
          In.childLeaving,
          Qn,
          550,
          (e) => {
            let { theme: t } = e;
            return t.transitions.easing.easeInOut;
          },
          In.childPulsate,
          Yn,
          (e) => {
            let { theme: t } = e;
            return t.transitions.easing.easeInOut;
          },
        ),
        Jn = e.forwardRef(function (t, n) {
          const r = Zt({ props: t, name: 'MuiTouchRipple' }),
            { center: a = !1, classes: i = {}, className: l } = r,
            s = (0, qe.A)(r, Wn),
            [u, c] = e.useState([]),
            f = e.useRef(0),
            d = e.useRef(null);
          e.useEffect(() => {
            d.current && (d.current(), (d.current = null));
          }, [u]);
          const p = e.useRef(!1),
            h = gn(),
            m = e.useRef(null),
            g = e.useRef(null),
            y = e.useCallback(
              (e) => {
                const { pulsate: t, rippleX: n, rippleY: r, rippleSize: a, cb: l } = e;
                c((e) => [
                  ...e,
                  (0, o.jsx)(
                    Xn,
                    {
                      classes: {
                        ripple: Ye(i.ripple, In.ripple),
                        rippleVisible: Ye(i.rippleVisible, In.rippleVisible),
                        ripplePulsate: Ye(i.ripplePulsate, In.ripplePulsate),
                        child: Ye(i.child, In.child),
                        childLeaving: Ye(i.childLeaving, In.childLeaving),
                        childPulsate: Ye(i.childPulsate, In.childPulsate),
                      },
                      timeout: 550,
                      pulsate: t,
                      rippleX: n,
                      rippleY: r,
                      rippleSize: a,
                    },
                    f.current,
                  ),
                ]),
                  (f.current += 1),
                  (d.current = l);
              },
              [i],
            ),
            v = e.useCallback(
              function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
                const { pulsate: r = !1, center: o = a || t.pulsate, fakeElement: i = !1 } = t;
                if ('mousedown' === (null == e ? void 0 : e.type) && p.current) return void (p.current = !1);
                'touchstart' === (null == e ? void 0 : e.type) && (p.current = !0);
                const l = i ? null : g.current,
                  s = l ? l.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
                let u, c, f;
                if (o || void 0 === e || (0 === e.clientX && 0 === e.clientY) || (!e.clientX && !e.touches))
                  (u = Math.round(s.width / 2)), (c = Math.round(s.height / 2));
                else {
                  const { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
                  (u = Math.round(t - s.left)), (c = Math.round(n - s.top));
                }
                if (o) (f = Math.sqrt((2 * s.width ** 2 + s.height ** 2) / 3)), f % 2 === 0 && (f += 1);
                else {
                  const e = 2 * Math.max(Math.abs((l ? l.clientWidth : 0) - u), u) + 2,
                    t = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - c), c) + 2;
                  f = Math.sqrt(e ** 2 + t ** 2);
                }
                null != e && e.touches
                  ? null === m.current &&
                    ((m.current = () => {
                      y({ pulsate: r, rippleX: u, rippleY: c, rippleSize: f, cb: n });
                    }),
                    h.start(80, () => {
                      m.current && (m.current(), (m.current = null));
                    }))
                  : y({ pulsate: r, rippleX: u, rippleY: c, rippleSize: f, cb: n });
              },
              [a, y, h],
            ),
            b = e.useCallback(() => {
              v({}, { pulsate: !0 });
            }, [v]),
            x = e.useCallback(
              (e, t) => {
                if ((h.clear(), 'touchend' === (null == e ? void 0 : e.type) && m.current))
                  return (
                    m.current(),
                    (m.current = null),
                    void h.start(0, () => {
                      x(e, t);
                    })
                  );
                (m.current = null), c((e) => (e.length > 0 ? e.slice(1) : e)), (d.current = t);
              },
              [h],
            );
          return (
            e.useImperativeHandle(n, () => ({ pulsate: b, start: v, stop: x }), [b, v, x]),
            (0, o.jsx)(
              Gn,
              (0, Fe.A)({ className: Ye(In.root, i.root, l), ref: g }, s, {
                children: (0, o.jsx)(zn, { component: null, exit: !0, children: u }),
              }),
            )
          );
        });
      function Zn(e) {
        return Bt('MuiButtonBase', e);
      }
      const er = Dt('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
        tr = [
          'action',
          'centerRipple',
          'children',
          'className',
          'component',
          'disabled',
          'disableRipple',
          'disableTouchRipple',
          'focusRipple',
          'focusVisibleClassName',
          'LinkComponent',
          'onBlur',
          'onClick',
          'onContextMenu',
          'onDragLeave',
          'onFocus',
          'onFocusVisible',
          'onKeyDown',
          'onKeyUp',
          'onMouseDown',
          'onMouseLeave',
          'onMouseUp',
          'onTouchEnd',
          'onTouchMove',
          'onTouchStart',
          'tabIndex',
          'TouchRippleProps',
          'touchRippleRef',
          'type',
        ],
        nr = Gt('button', { name: 'MuiButtonBase', slot: 'Root', overridesResolver: (e, t) => t.root })({
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxSizing: 'border-box',
          WebkitTapHighlightColor: 'transparent',
          backgroundColor: 'transparent',
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: 'pointer',
          userSelect: 'none',
          verticalAlign: 'middle',
          MozAppearance: 'none',
          WebkitAppearance: 'none',
          textDecoration: 'none',
          color: 'inherit',
          '&::-moz-focus-inner': { borderStyle: 'none' },
          ['&.'.concat(er.disabled)]: { pointerEvents: 'none', cursor: 'default' },
          '@media print': { colorAdjust: 'exact' },
        }),
        rr = e.forwardRef(function (t, n) {
          const r = Zt({ props: t, name: 'MuiButtonBase' }),
            {
              action: a,
              centerRipple: i = !1,
              children: l,
              className: s,
              component: u = 'button',
              disabled: c = !1,
              disableRipple: f = !1,
              disableTouchRipple: d = !1,
              focusRipple: p = !1,
              LinkComponent: h = 'a',
              onBlur: m,
              onClick: g,
              onContextMenu: y,
              onDragLeave: v,
              onFocus: b,
              onFocusVisible: x,
              onKeyDown: w,
              onKeyUp: k,
              onMouseDown: S,
              onMouseLeave: C,
              onMouseUp: E,
              onTouchEnd: P,
              onTouchMove: _,
              onTouchStart: A,
              tabIndex: T = 0,
              TouchRippleProps: R,
              touchRippleRef: N,
              type: M,
            } = r,
            O = (0, qe.A)(r, tr),
            z = e.useRef(null),
            L = e.useRef(null),
            j = fn(L, N),
            { isFocusVisibleRef: I, onFocus: U, onBlur: F, ref: B } = En(),
            [D, W] = e.useState(!1);
          c && D && W(!1),
            e.useImperativeHandle(
              a,
              () => ({
                focusVisible: () => {
                  W(!0), z.current.focus();
                },
              }),
              [],
            );
          const [$, H] = e.useState(!1);
          e.useEffect(() => {
            H(!0);
          }, []);
          const K = $ && !f && !c;
          function V(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
            return dn((r) => {
              t && t(r);
              return !n && L.current && L.current[e](r), !0;
            });
          }
          e.useEffect(() => {
            D && p && !f && $ && L.current.pulsate();
          }, [f, p, D, $]);
          const q = V('start', S),
            Q = V('stop', y),
            Y = V('stop', v),
            G = V('stop', E),
            X = V('stop', (e) => {
              D && e.preventDefault(), C && C(e);
            }),
            J = V('start', A),
            Z = V('stop', P),
            ee = V('stop', _),
            te = V(
              'stop',
              (e) => {
                F(e), !1 === I.current && W(!1), m && m(e);
              },
              !1,
            ),
            ne = dn((e) => {
              z.current || (z.current = e.currentTarget),
                U(e),
                !0 === I.current && (W(!0), x && x(e)),
                b && b(e);
            }),
            re = () => {
              const e = z.current;
              return u && 'button' !== u && !('A' === e.tagName && e.href);
            },
            oe = e.useRef(!1),
            ae = dn((e) => {
              p &&
                !oe.current &&
                D &&
                L.current &&
                ' ' === e.key &&
                ((oe.current = !0),
                L.current.stop(e, () => {
                  L.current.start(e);
                })),
                e.target === e.currentTarget && re() && ' ' === e.key && e.preventDefault(),
                w && w(e),
                e.target === e.currentTarget &&
                  re() &&
                  'Enter' === e.key &&
                  !c &&
                  (e.preventDefault(), g && g(e));
            }),
            ie = dn((e) => {
              p &&
                ' ' === e.key &&
                L.current &&
                D &&
                !e.defaultPrevented &&
                ((oe.current = !1),
                L.current.stop(e, () => {
                  L.current.pulsate(e);
                })),
                k && k(e),
                g && e.target === e.currentTarget && re() && ' ' === e.key && !e.defaultPrevented && g(e);
            });
          let le = u;
          'button' === le && (O.href || O.to) && (le = h);
          const se = {};
          'button' === le
            ? ((se.type = void 0 === M ? 'button' : M), (se.disabled = c))
            : (O.href || O.to || (se.role = 'button'), c && (se['aria-disabled'] = c));
          const ue = fn(n, B, z);
          const ce = (0, Fe.A)({}, r, {
              centerRipple: i,
              component: u,
              disabled: c,
              disableRipple: f,
              disableTouchRipple: d,
              focusRipple: p,
              tabIndex: T,
              focusVisible: D,
            }),
            fe = ((e) => {
              const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e,
                a = Kt({ root: ['root', t && 'disabled', n && 'focusVisible'] }, Zn, o);
              return n && r && (a.root += ' '.concat(r)), a;
            })(ce);
          return (0, o.jsxs)(
            nr,
            (0, Fe.A)(
              {
                as: le,
                className: Ye(fe.root, s),
                ownerState: ce,
                onBlur: te,
                onClick: g,
                onContextMenu: Q,
                onFocus: ne,
                onKeyDown: ae,
                onKeyUp: ie,
                onMouseDown: q,
                onMouseLeave: X,
                onMouseUp: G,
                onDragLeave: Y,
                onTouchEnd: Z,
                onTouchMove: ee,
                onTouchStart: J,
                ref: ue,
                tabIndex: c ? -1 : T,
                type: M,
              },
              se,
              O,
              { children: [l, K ? (0, o.jsx)(Jn, (0, Fe.A)({ ref: j, center: i }, R)) : null] },
            ),
          );
        }),
        or = rr;
      function ar(e) {
        return Bt('MuiButton', e);
      }
      const ir = Dt('MuiButton', [
        'root',
        'text',
        'textInherit',
        'textPrimary',
        'textSecondary',
        'textSuccess',
        'textError',
        'textInfo',
        'textWarning',
        'outlined',
        'outlinedInherit',
        'outlinedPrimary',
        'outlinedSecondary',
        'outlinedSuccess',
        'outlinedError',
        'outlinedInfo',
        'outlinedWarning',
        'contained',
        'containedInherit',
        'containedPrimary',
        'containedSecondary',
        'containedSuccess',
        'containedError',
        'containedInfo',
        'containedWarning',
        'disableElevation',
        'focusVisible',
        'disabled',
        'colorInherit',
        'colorPrimary',
        'colorSecondary',
        'colorSuccess',
        'colorError',
        'colorInfo',
        'colorWarning',
        'textSizeSmall',
        'textSizeMedium',
        'textSizeLarge',
        'outlinedSizeSmall',
        'outlinedSizeMedium',
        'outlinedSizeLarge',
        'containedSizeSmall',
        'containedSizeMedium',
        'containedSizeLarge',
        'sizeMedium',
        'sizeSmall',
        'sizeLarge',
        'fullWidth',
        'startIcon',
        'endIcon',
        'icon',
        'iconSizeSmall',
        'iconSizeMedium',
        'iconSizeLarge',
      ]);
      const lr = e.createContext({});
      const sr = e.createContext(void 0),
        ur = [
          'children',
          'color',
          'component',
          'className',
          'disabled',
          'disableElevation',
          'disableFocusRipple',
          'endIcon',
          'focusVisibleClassName',
          'fullWidth',
          'size',
          'startIcon',
          'type',
          'variant',
        ],
        cr = (e) =>
          (0, Fe.A)(
            {},
            'small' === e.size && { '& > *:nth-of-type(1)': { fontSize: 18 } },
            'medium' === e.size && { '& > *:nth-of-type(1)': { fontSize: 20 } },
            'large' === e.size && { '& > *:nth-of-type(1)': { fontSize: 22 } },
          ),
        fr = Gt(or, {
          shouldForwardProp: (e) => Yt(e) || 'classes' === e,
          name: 'MuiButton',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.variant],
              t[''.concat(n.variant).concat(en(n.color))],
              t['size'.concat(en(n.size))],
              t[''.concat(n.variant, 'Size').concat(en(n.size))],
              'inherit' === n.color && t.colorInherit,
              n.disableElevation && t.disableElevation,
              n.fullWidth && t.fullWidth,
            ];
          },
        })(
          (e) => {
            let { theme: t, ownerState: n } = e;
            var r, o;
            const a = 'light' === t.palette.mode ? t.palette.grey[300] : t.palette.grey[800],
              i = 'light' === t.palette.mode ? t.palette.grey.A100 : t.palette.grey[700];
            return (0, Fe.A)(
              {},
              t.typography.button,
              {
                minWidth: 64,
                padding: '6px 16px',
                borderRadius: (t.vars || t).shape.borderRadius,
                transition: t.transitions.create(
                  ['background-color', 'box-shadow', 'border-color', 'color'],
                  { duration: t.transitions.duration.short },
                ),
                '&:hover': (0, Fe.A)(
                  {
                    textDecoration: 'none',
                    backgroundColor: t.vars
                      ? 'rgba('
                          .concat(t.vars.palette.text.primaryChannel, ' / ')
                          .concat(t.vars.palette.action.hoverOpacity, ')')
                      : (0, st.X4)(t.palette.text.primary, t.palette.action.hoverOpacity),
                    '@media (hover: none)': { backgroundColor: 'transparent' },
                  },
                  'text' === n.variant &&
                    'inherit' !== n.color && {
                      backgroundColor: t.vars
                        ? 'rgba('
                            .concat(t.vars.palette[n.color].mainChannel, ' / ')
                            .concat(t.vars.palette.action.hoverOpacity, ')')
                        : (0, st.X4)(t.palette[n.color].main, t.palette.action.hoverOpacity),
                      '@media (hover: none)': { backgroundColor: 'transparent' },
                    },
                  'outlined' === n.variant &&
                    'inherit' !== n.color && {
                      border: '1px solid '.concat((t.vars || t).palette[n.color].main),
                      backgroundColor: t.vars
                        ? 'rgba('
                            .concat(t.vars.palette[n.color].mainChannel, ' / ')
                            .concat(t.vars.palette.action.hoverOpacity, ')')
                        : (0, st.X4)(t.palette[n.color].main, t.palette.action.hoverOpacity),
                      '@media (hover: none)': { backgroundColor: 'transparent' },
                    },
                  'contained' === n.variant && {
                    backgroundColor: t.vars ? t.vars.palette.Button.inheritContainedHoverBg : i,
                    boxShadow: (t.vars || t).shadows[4],
                    '@media (hover: none)': {
                      boxShadow: (t.vars || t).shadows[2],
                      backgroundColor: (t.vars || t).palette.grey[300],
                    },
                  },
                  'contained' === n.variant &&
                    'inherit' !== n.color && {
                      backgroundColor: (t.vars || t).palette[n.color].dark,
                      '@media (hover: none)': { backgroundColor: (t.vars || t).palette[n.color].main },
                    },
                ),
                '&:active': (0, Fe.A)(
                  {},
                  'contained' === n.variant && { boxShadow: (t.vars || t).shadows[8] },
                ),
                ['&.'.concat(ir.focusVisible)]: (0, Fe.A)(
                  {},
                  'contained' === n.variant && { boxShadow: (t.vars || t).shadows[6] },
                ),
                ['&.'.concat(ir.disabled)]: (0, Fe.A)(
                  { color: (t.vars || t).palette.action.disabled },
                  'outlined' === n.variant && {
                    border: '1px solid '.concat((t.vars || t).palette.action.disabledBackground),
                  },
                  'contained' === n.variant && {
                    color: (t.vars || t).palette.action.disabled,
                    boxShadow: (t.vars || t).shadows[0],
                    backgroundColor: (t.vars || t).palette.action.disabledBackground,
                  },
                ),
              },
              'text' === n.variant && { padding: '6px 8px' },
              'text' === n.variant && 'inherit' !== n.color && { color: (t.vars || t).palette[n.color].main },
              'outlined' === n.variant && { padding: '5px 15px', border: '1px solid currentColor' },
              'outlined' === n.variant &&
                'inherit' !== n.color && {
                  color: (t.vars || t).palette[n.color].main,
                  border: t.vars
                    ? '1px solid rgba('.concat(t.vars.palette[n.color].mainChannel, ' / 0.5)')
                    : '1px solid '.concat((0, st.X4)(t.palette[n.color].main, 0.5)),
                },
              'contained' === n.variant && {
                color: t.vars
                  ? t.vars.palette.text.primary
                  : null == (r = (o = t.palette).getContrastText)
                    ? void 0
                    : r.call(o, t.palette.grey[300]),
                backgroundColor: t.vars ? t.vars.palette.Button.inheritContainedBg : a,
                boxShadow: (t.vars || t).shadows[2],
              },
              'contained' === n.variant &&
                'inherit' !== n.color && {
                  color: (t.vars || t).palette[n.color].contrastText,
                  backgroundColor: (t.vars || t).palette[n.color].main,
                },
              'inherit' === n.color && { color: 'inherit', borderColor: 'currentColor' },
              'small' === n.size &&
                'text' === n.variant && { padding: '4px 5px', fontSize: t.typography.pxToRem(13) },
              'large' === n.size &&
                'text' === n.variant && { padding: '8px 11px', fontSize: t.typography.pxToRem(15) },
              'small' === n.size &&
                'outlined' === n.variant && { padding: '3px 9px', fontSize: t.typography.pxToRem(13) },
              'large' === n.size &&
                'outlined' === n.variant && { padding: '7px 21px', fontSize: t.typography.pxToRem(15) },
              'small' === n.size &&
                'contained' === n.variant && { padding: '4px 10px', fontSize: t.typography.pxToRem(13) },
              'large' === n.size &&
                'contained' === n.variant && { padding: '8px 22px', fontSize: t.typography.pxToRem(15) },
              n.fullWidth && { width: '100%' },
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              t.disableElevation && {
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none' },
                ['&.'.concat(ir.focusVisible)]: { boxShadow: 'none' },
                '&:active': { boxShadow: 'none' },
                ['&.'.concat(ir.disabled)]: { boxShadow: 'none' },
              }
            );
          },
        ),
        dr = Gt('span', {
          name: 'MuiButton',
          slot: 'StartIcon',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.startIcon, t['iconSize'.concat(en(n.size))]];
          },
        })((e) => {
          let { ownerState: t } = e;
          return (0, Fe.A)(
            { display: 'inherit', marginRight: 8, marginLeft: -4 },
            'small' === t.size && { marginLeft: -2 },
            cr(t),
          );
        }),
        pr = Gt('span', {
          name: 'MuiButton',
          slot: 'EndIcon',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.endIcon, t['iconSize'.concat(en(n.size))]];
          },
        })((e) => {
          let { ownerState: t } = e;
          return (0, Fe.A)(
            { display: 'inherit', marginRight: -4, marginLeft: 8 },
            'small' === t.size && { marginRight: -2 },
            cr(t),
          );
        }),
        hr = e.forwardRef(function (t, n) {
          const r = e.useContext(lr),
            a = e.useContext(sr),
            i = Zt({ props: Be(r, t), name: 'MuiButton' }),
            {
              children: l,
              color: s = 'primary',
              component: u = 'button',
              className: c,
              disabled: f = !1,
              disableElevation: d = !1,
              disableFocusRipple: p = !1,
              endIcon: h,
              focusVisibleClassName: m,
              fullWidth: g = !1,
              size: y = 'medium',
              startIcon: v,
              type: b,
              variant: x = 'text',
            } = i,
            w = (0, qe.A)(i, ur),
            k = (0, Fe.A)({}, i, {
              color: s,
              component: u,
              disabled: f,
              disableElevation: d,
              disableFocusRipple: p,
              fullWidth: g,
              size: y,
              type: b,
              variant: x,
            }),
            S = ((e) => {
              const { color: t, disableElevation: n, fullWidth: r, size: o, variant: a, classes: i } = e,
                l = Kt(
                  {
                    root: [
                      'root',
                      a,
                      ''.concat(a).concat(en(t)),
                      'size'.concat(en(o)),
                      ''.concat(a, 'Size').concat(en(o)),
                      'color'.concat(en(t)),
                      n && 'disableElevation',
                      r && 'fullWidth',
                    ],
                    label: ['label'],
                    startIcon: ['icon', 'startIcon', 'iconSize'.concat(en(o))],
                    endIcon: ['icon', 'endIcon', 'iconSize'.concat(en(o))],
                  },
                  ar,
                  i,
                );
              return (0, Fe.A)({}, i, l);
            })(k),
            C = v && (0, o.jsx)(dr, { className: S.startIcon, ownerState: k, children: v }),
            E = h && (0, o.jsx)(pr, { className: S.endIcon, ownerState: k, children: h }),
            P = a || '';
          return (0, o.jsxs)(
            fr,
            (0, Fe.A)(
              {
                ownerState: k,
                className: Ye(r.className, S.root, c, P),
                component: u,
                disabled: f,
                focusRipple: !p,
                focusVisibleClassName: Ye(S.focusVisible, m),
                ref: n,
                type: b,
              },
              w,
              { classes: S, children: [C, l, E] },
            ),
          );
        });
      function mr(e) {
        return Bt('MuiCircularProgress', e);
      }
      Dt('MuiCircularProgress', [
        'root',
        'determinate',
        'indeterminate',
        'colorPrimary',
        'colorSecondary',
        'svg',
        'circle',
        'circleDeterminate',
        'circleIndeterminate',
        'circleDisableShrink',
      ]);
      var gr, yr, vr, br;
      const xr = ['className', 'color', 'disableShrink', 'size', 'style', 'thickness', 'value', 'variant'];
      let wr, kr, Sr, Cr;
      const Er = 44,
        Pr = (0, Ln.i7)(
          wr ||
            (wr =
              gr ||
              (gr = Pn([
                '\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n',
              ]))),
        ),
        _r = (0, Ln.i7)(
          kr ||
            (kr =
              yr ||
              (yr = Pn([
                '\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n',
              ]))),
        ),
        Ar = Gt('span', {
          name: 'MuiCircularProgress',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, t[n.variant], t['color'.concat(en(n.color))]];
          },
        })(
          (e) => {
            let { ownerState: t, theme: n } = e;
            return (0, Fe.A)(
              { display: 'inline-block' },
              'determinate' === t.variant && { transition: n.transitions.create('transform') },
              'inherit' !== t.color && { color: (n.vars || n).palette[t.color].main },
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              'indeterminate' === t.variant &&
              (0, Ln.AH)(
                Sr || (Sr = vr || (vr = Pn(['\n      animation: ', ' 1.4s linear infinite;\n    ']))),
                Pr,
              )
            );
          },
        ),
        Tr = Gt('svg', { name: 'MuiCircularProgress', slot: 'Svg', overridesResolver: (e, t) => t.svg })({
          display: 'block',
        }),
        Rr = Gt('circle', {
          name: 'MuiCircularProgress',
          slot: 'Circle',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.circle, t['circle'.concat(en(n.variant))], n.disableShrink && t.circleDisableShrink];
          },
        })(
          (e) => {
            let { ownerState: t, theme: n } = e;
            return (0, Fe.A)(
              { stroke: 'currentColor' },
              'determinate' === t.variant && { transition: n.transitions.create('stroke-dashoffset') },
              'indeterminate' === t.variant && { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              'indeterminate' === t.variant &&
              !t.disableShrink &&
              (0, Ln.AH)(
                Cr || (Cr = br || (br = Pn(['\n      animation: ', ' 1.4s ease-in-out infinite;\n    ']))),
                _r,
              )
            );
          },
        ),
        Nr = e.forwardRef(function (e, t) {
          const n = Zt({ props: e, name: 'MuiCircularProgress' }),
            {
              className: r,
              color: a = 'primary',
              disableShrink: i = !1,
              size: l = 40,
              style: s,
              thickness: u = 3.6,
              value: c = 0,
              variant: f = 'indeterminate',
            } = n,
            d = (0, qe.A)(n, xr),
            p = (0, Fe.A)({}, n, { color: a, disableShrink: i, size: l, thickness: u, value: c, variant: f }),
            h = ((e) => {
              const { classes: t, variant: n, color: r, disableShrink: o } = e;
              return Kt(
                {
                  root: ['root', n, 'color'.concat(en(r))],
                  svg: ['svg'],
                  circle: ['circle', 'circle'.concat(en(n)), o && 'circleDisableShrink'],
                },
                mr,
                t,
              );
            })(p),
            m = {},
            g = {},
            y = {};
          if ('determinate' === f) {
            const e = 2 * Math.PI * ((Er - u) / 2);
            (m.strokeDasharray = e.toFixed(3)),
              (y['aria-valuenow'] = Math.round(c)),
              (m.strokeDashoffset = ''.concat((((100 - c) / 100) * e).toFixed(3), 'px')),
              (g.transform = 'rotate(-90deg)');
          }
          return (0, o.jsx)(
            Ar,
            (0, Fe.A)(
              {
                className: Ye(h.root, r),
                style: (0, Fe.A)({ width: l, height: l }, g, s),
                ownerState: p,
                ref: t,
                role: 'progressbar',
              },
              y,
              d,
              {
                children: (0, o.jsx)(Tr, {
                  className: h.svg,
                  ownerState: p,
                  viewBox: ''.concat(22, ' ').concat(22, ' ').concat(Er, ' ').concat(Er),
                  children: (0, o.jsx)(Rr, {
                    className: h.circle,
                    style: m,
                    ownerState: p,
                    cx: Er,
                    cy: Er,
                    r: (Er - u) / 2,
                    fill: 'none',
                    strokeWidth: u,
                  }),
                }),
              },
            ),
          );
        }),
        Mr = () => {
          const { onFocusHandler: e, onBlurHandler: t, isLoading: n, startSession: r } = cn();
          return n
            ? (0, o.jsx)(Nr, {
                sx: {
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  top: 'calc(50% - 20px)',
                  left: 'calc(50% - 20px)',
                  margin: 'auto',
                },
              })
            : (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(Ht, {
                    sx: { display: 'flex', justifyContent: 'center', marginTop: '80px' },
                    children: (0, o.jsx)('img', {
                      style: { width: '160px' },
                      src: 'https://i.postimg.cc/bNy9QWtG/logo.jpg',
                    }),
                  }),
                  (0, o.jsx)(Ht, {
                    sx: { display: 'flex', justifyContent: 'center', padding: '20px', marginTop: '25px' },
                    children: (0, o.jsx)(ln, {
                      sx: {
                        fontFamily: 'Inter',
                        fontSize: '17px',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: '450px',
                      },
                      children:
                        'Secret chat is a private chat encrypted end to end with private and public keys SHA256',
                    }),
                  }),
                  (0, o.jsx)(Ht, {
                    sx: {
                      display: 'flex',
                      position: 'relative',
                      justifyContent: 'center',
                      borderRadius: '7px',
                      width: 'fit-content',
                      height: 'fit-content',
                      margin: '25px auto 20px auto',
                    },
                    children: (0, o.jsxs)('form', {
                      className: 'formLogin',
                      onSubmit: r,
                      children: [
                        (0, o.jsx)('input', {
                          className: 'nickNameInputLogin',
                          name: 'nickNameInput',
                          type: 'text',
                          placeholder: 'Insert a nick name',
                          autoComplete: 'off',
                          autoCapitalize: 'none',
                          onFocus: e,
                          onBlur: t,
                        }),
                        (0, o.jsx)(hr, {
                          sx: {
                            width: '100%',
                            height: '60px',
                            fontFamily: 'Inter',
                            fontSize: '22px',
                            textTransform: 'none',
                            background: '#0f4478',
                            color: '#f8bf5e',
                            border: '1px solid transparent',
                            borderRadius: '10px',
                            boxShadow: '1px 2px 5px 0px #0f4478',
                            cursor: 'pointer',
                            '&:hover': { background: '#3D007A', color: '#f8bf5e' },
                          },
                          type: 'submit',
                          children: 'Start session',
                        }),
                      ],
                    }),
                  }),
                ],
              });
        },
        Or = () => (0, o.jsx)(Mr, {}),
        zr = () => {
          const {
              setConnectionStatus: t,
              connectionStatus: n,
              tryPairing: r,
              closeConnection: o,
            } = (0, e.useContext)(d),
            { usersData: a } = (0, e.useContext)(i),
            [l, s] = (0, e.useState)('Copy my public key'),
            { setShowPopUp: u } = (0, e.useContext)(m),
            c = ge();
          (0, e.useEffect)(() => {
            'chating' === n && (u(!1), c('/chatRoom'));
          }, [n]);
          return {
            onFocusHandler: (e) => {
              e.target.removeAttribute('placeholder');
            },
            onBlurHandler: (e) => {
              e.target.setAttribute('placeholder', 'Insert a public key of your peer');
            },
            tryPairingHandler: (e) => {
              e.preventDefault();
              const n = e.target.elements.findingPairInput.value;
              '' !== n && a.fromPublicKey
                ? (t('requestSent'), r(a.fromPublicKey, n))
                : t('userInsertedAnEmptyEntry');
            },
            closeConnectionHandler: () => {
              t('theUserHasClosed'), o();
            },
            copyToClipboard: async () => {
              if (!a.fromPublicKey) throw new Error('Public key is undefined');
              await navigator.clipboard.writeText(a.fromPublicKey), s('Copied!');
              const e = setTimeout(() => {
                s('Copy my public key'), clearTimeout(e);
              }, 1500);
            },
            copyPublicKeyText: l,
          };
        };
      var Lr = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        jr = e.createContext && e.createContext(Lr),
        Ir = function () {
          return (
            (Ir =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Ir.apply(this, arguments)
          );
        },
        Ur = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function Fr(t) {
        return (
          t &&
          t.map(function (t, n) {
            return e.createElement(t.tag, Ir({ key: n }, t.attr), Fr(t.child));
          })
        );
      }
      function Br(t) {
        return function (n) {
          return e.createElement(Dr, Ir({ attr: Ir({}, t.attr) }, n), Fr(t.child));
        };
      }
      function Dr(t) {
        var n = function (n) {
          var r,
            o = t.attr,
            a = t.size,
            i = t.title,
            l = Ur(t, ['attr', 'size', 'title']),
            s = a || n.size || '1em';
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + ' ' : '') + t.className),
            e.createElement(
              'svg',
              Ir({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, o, l, {
                className: r,
                style: Ir(Ir({ color: t.color || n.color }, n.style), t.style),
                height: s,
                width: s,
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              i && e.createElement('title', null, i),
              t.children,
            )
          );
        };
        return void 0 !== jr
          ? e.createElement(jr.Consumer, null, function (e) {
              return n(e);
            })
          : n(Lr);
      }
      function Wr(e) {
        return Br({
          tag: 'svg',
          attr: { viewBox: '0 0 1024 1024', fill: 'currentColor', fillRule: 'evenodd' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z',
              },
            },
          ],
        })(e);
      }
      function $r(e) {
        return Br({
          tag: 'svg',
          attr: { viewBox: '0 0 1024 1024' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
              },
            },
          ],
        })(e);
      }
      const Hr = () => {
          const {
            onFocusHandler: e,
            onBlurHandler: t,
            tryPairingHandler: n,
            copyToClipboard: r,
            copyPublicKeyText: a,
          } = zr();
          return (0, o.jsx)(Ht, {
            sx: {
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              borderRadius: '7px',
              width: 'fit-content',
              height: 'fit-content',
              margin: '15px auto 20px auto',
            },
            children: (0, o.jsxs)('form', {
              className: 'formFindingPair',
              onSubmit: n,
              children: [
                (0, o.jsx)('input', {
                  className: 'nickNameInputFindingPair',
                  type: 'text',
                  name: 'findingPairInput',
                  placeholder: 'Insert a public key of your peer',
                  autoComplete: 'off',
                  onFocus: e,
                  onBlur: t,
                }),
                (0, o.jsx)(hr, {
                  sx: {
                    width: '100%',
                    height: '60px',
                    marginBottom: '8px',
                    fontFamily: 'Inter',
                    fontSize: '22px',
                    background: '#0f4478',
                    color: '#f8bf5e',
                    border: '1px solid transparent',
                    borderRadius: '10px',
                    boxShadow: '1px 2px 5px 0px #0f4478',
                    fontWeight: '500',
                    cursor: 'pointer',
                  },
                  type: 'submit',
                  children: 'Start chat',
                }),
                (0, o.jsxs)(Ht, {
                  sx: { margin: 'auto', cursor: 'pointer' },
                  onClick: r,
                  children: [
                    (0, o.jsx)($r, { className: 'copyIcon' }),
                    (0, o.jsx)(ln, {
                      sx: {
                        display: 'inline',
                        margin: 'auto',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: 'black',
                      },
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Kr = () => {
          const { closeConnectionHandler: e } = zr();
          return (0, o.jsxs)(Ht, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              width: '100vw',
              minHeight: '100vh',
              paddingTop: '20px',
              alignItems: 'center',
            },
            children: [
              (0, o.jsx)(Ht, {
                sx: { marginTop: '10px', cursor: 'pointer' },
                children: (0, o.jsx)(Wr, { className: 'closeConnectionButtonFindingPair', onClick: e }),
              }),
              (0, o.jsx)(Ht, {
                sx: { marginTop: '20px', display: 'flex', justifyContent: 'center' },
                children: (0, o.jsx)('img', {
                  className: 'findingPairLogoImage',
                  src: 'https://i.postimg.cc/bNy9QWtG/logo.jpg',
                }),
              }),
              (0, o.jsxs)(Ht, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                  padding: '20px',
                  marginTop: '15px',
                },
                children: [
                  (0, o.jsx)(ln, {
                    sx: {
                      fontFamily: 'Inter',
                      fontSize: '17px',
                      fontWeight: '700',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '550px',
                      margin: '2px 0',
                    },
                    children:
                      'Share your public key by whatsapp or similar with the person you want and wait for his/her invitation',
                  }),
                  (0, o.jsx)(ln, {
                    sx: {
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: '900',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '550px',
                      margin: '2px 0',
                    },
                    children: 'or',
                  }),
                  (0, o.jsx)(ln, {
                    sx: {
                      fontFamily: 'Inter',
                      fontSize: '17px',
                      fontWeight: '700',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '550px',
                      margin: '2px 0',
                    },
                    children:
                      'Insert the public key which you received of the person who you want have a private talk and send his/her an invitation',
                  }),
                ],
              }),
              (0, o.jsx)(Hr, {}),
            ],
          });
        };
      function Vr(e) {
        return Br({
          tag: 'svg',
          attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
          child: [{ tag: 'circle', attr: { cx: '8', cy: '8', r: '8' } }],
        })(e);
      }
      function qr(e) {
        return Br({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [{ tag: 'path', attr: { d: 'M48 448l416-192L48 64v149.333L346 256 48 298.667z' } }],
        })(e);
      }
      const Qr = (e) => {
          let { message: t, type: n, time: r } = e;
          return (0, o.jsx)(Ht, {
            sx: { display: 'block', width: '100%', height: 'fit-content', marginTop: '15px' },
            children: (0, o.jsx)(Ht, {
              sx: {
                display: 'flex',
                width: '100%',
                height: '100%',
                paddingLeft: '15px',
                justifyContent: 'messageReceived' === n ? 'left' : 'right',
              },
              children: (0, o.jsxs)(Ht, {
                sx: {
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'right',
                  width: 'fit-content',
                  height: 'fit-content',
                  padding: '6px 17px 15px 8px',
                  boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)',
                  borderRadius: '10px',
                  backgroundColor: 'messageReceived' === n ? '#b9b9b9' : '#7BACDD',
                },
                children: [
                  (0, o.jsx)(ln, {
                    sx: {
                      display: 'inline-block',
                      fontSize: '14px',
                      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                      height: 'auto',
                      overflowWrap: 'anywhere',
                      width: 'fit-content',
                      maxWidth: 'min(70vw, 650px)',
                      userSelect: 'text',
                    },
                    children: t,
                  }),
                  (0, o.jsx)(ln, {
                    sx: {
                      position: 'absolute',
                      height: 'fit-content',
                      width: 'fit-content',
                      bottom: '1px',
                      right: '5px',
                      fontSize: '11px',
                    },
                    children: r,
                  }),
                ],
              }),
            }),
          });
        },
        Yr = () => {
          const { usersData: t } = (0, e.useContext)(i),
            { chatHistory: n } = (0, e.useContext)(u),
            { closeConnectionHandler: r, sendMessageHandler: a } = (() => {
              const {
                  setConnectionStatus: t,
                  closeConnection: n,
                  sendWebSocketMessage: r,
                } = (0, e.useContext)(d),
                { usersData: o } = (0, e.useContext)(i),
                { setChatHistory: a, chatHistory: l } = (0, e.useContext)(u);
              return {
                closeConnectionHandler: () => {
                  t('theUserHasClosed'), n();
                },
                sendMessageHandler: (e) => {
                  e.preventDefault();
                  const t = e.currentTarget.elements.chatInput;
                  t.focus();
                  let n = t.value;
                  if (n.length > 0) {
                    n = n[0].toUpperCase() + n.slice(1);
                    const e = new Date(),
                      i = e.getMinutes() <= 10 ? '0' + String(e.getMinutes()) : String(e.getMinutes()),
                      s = { sendMessage: { from: o.fromPublicKey, to: o.toPublicKey, message: n } };
                    l.length > 0
                      ? a([
                          {
                            type: 'messageSent',
                            message: n,
                            time: ''.concat(String(e.getHours()), ':').concat(i),
                          },
                          ...l,
                        ])
                      : a([
                          {
                            type: 'messageSent',
                            message: n,
                            time: ''.concat(String(e.getHours()), ':').concat(i),
                          },
                        ]),
                      r(s),
                      (t.value = '');
                  }
                },
              };
            })();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(Ht, {
                sx: {
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100vh',
                  backgroundColor: 'black',
                  opacity: '0.5',
                },
                children: (0, o.jsx)(Ht, {
                  sx: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '130px',
                    backgroundColor: 'green',
                    opacity: '0.5',
                  },
                }),
              }),
              (0, o.jsxs)(Ht, {
                sx: {
                  margin: '35px 0 35px 0',
                  width: '70%',
                  maxWidth: '1700px',
                  minHeight: 'calc(100vh - 70px)',
                  backgroundColor: '#e9e9e9',
                  borderRadius: '5px',
                  border: 'none',
                  zIndex: '1',
                },
                children: [
                  (0, o.jsxs)(Ht, {
                    sx: {
                      display: 'grid',
                      position: 'fixed',
                      margin: 'auto',
                      borderTopLeftRadius: '5px',
                      borderTopRightRadius: '5px',
                      gridTemplateColumns: '1fr 60px',
                      gridTemplateRows: '45px',
                      gridTemplateAreas: '"nickName closeButton"',
                      padding: '7px 8px 7px 18px',
                      width: '70%',
                      maxWidth: '1375px',
                      backgroundColor: '#e9e9e9',
                      color: 'black',
                      height: '60px',
                      flex: '0 0',
                      border: '1px solid #cfcfcf',
                    },
                    children: [
                      (0, o.jsx)(ln, {
                        sx: {
                          display: 'block',
                          position: 'relative',
                          width: '95%',
                          height: '100%',
                          top: '6px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontFamily: 'Inter',
                          fontSize: '24px',
                          fontWeight: '500',
                          color: 'black',
                        },
                        children: t.toNickName,
                      }),
                      (0, o.jsx)(Wr, { className: 'closeButtonInHeader', onClick: r }),
                    ],
                  }),
                  (0, o.jsx)(Ht, {
                    sx: {
                      display: 'flex',
                      flexDirection: 'column-reverse',
                      justifyContent: 'baseline',
                      width: '100%',
                      height: 'calc(100vh - 192px)',
                      marginTop: '60px',
                      paddingBottom: '5px',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      backgroundImage: 'url(/chatBackground.jpg)',
                    },
                    children: n.map(
                      (e, t) =>
                        e.type &&
                        e.message &&
                        e.time &&
                        (0, o.jsx)(Qr, { type: e.type, message: e.message, time: e.time }, t),
                    ),
                  }),
                  (0, o.jsx)(Ht, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      maxWidth: '1375px',
                      borderBottomLeftRadius: '5px',
                      borderBottomRightRadius: '5px',
                      height: '62px',
                      flex: '0 0',
                      backgroundColor: '#e9e9e9',
                    },
                    children: (0, o.jsxs)('form', {
                      className: 'formChatSendMessageBar',
                      onSubmit: a,
                      children: [
                        (0, o.jsx)('input', {
                          className: 'inputChatSendMessageBar',
                          placeholder: 'Escriba un mensaje aqu\xed',
                          name: 'chatInput',
                          autoComplete: 'off',
                        }),
                        (0, o.jsxs)(hr, {
                          sx: {
                            gridArea: 'submit',
                            position: 'relative',
                            border: 'none',
                            backgroundColor: '#e9e9e9',
                          },
                          type: 'submit',
                          children: [
                            (0, o.jsx)(Vr, { className: 'submitCircleChatSendMessageBar' }),
                            (0, o.jsx)(qr, { className: 'submitArrowIconChatSendMessageBar' }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Gr = (t) => {
          let {
            title: n,
            message: r,
            type: a,
            CTAtext: i,
            acceptButtonText: l,
            rejectButtonText: s,
            seconds: u,
            handlerAccept: c,
            handlerReject: f,
            handlerTimeOut: d,
          } = t;
          return (
            (0, e.useEffect)(() => {
              const e = setTimeout(() => {
                console.log(n), d();
              }, 1e3 * u);
              return () => clearTimeout(e);
            }, []),
            (0, o.jsx)('div', {
              className: 'popUpContainer',
              children: (0, o.jsx)('div', {
                className: 'popUpElement',
                children: (0, o.jsxs)('div', {
                  className:
                    'oneButtonAccept' === a
                      ? 'popUpGridOneButtonAccept'
                      : 'oneButtonCancel' === a
                        ? 'popUpGridOneButtonCancel'
                        : 'noButtons' === a
                          ? 'popUpGridNoButtons'
                          : 'twoButtons' === a
                            ? 'popUpGridTwoButton'
                            : '',
                  children: [
                    (0, o.jsx)('img', {
                      src: 'https://i.postimg.cc/76bz30BG/logo-Miniatura.jpg',
                      className: 'logoPopUp',
                    }),
                    (0, o.jsx)('h2', { className: 'tituloPopUp', children: n }),
                    void 0 !== r && (0, o.jsx)('p', { className: 'messagePopUp', children: r }),
                    void 0 !== i && (0, o.jsx)('p', { className: 'CTA', children: i }),
                    'oneButtonAccept' === a
                      ? (0, o.jsx)('button', {
                          className: 'button2PopUp buttonPopUp',
                          onClick: c,
                          autoFocus: !0,
                          children: l,
                        })
                      : 'oneButtonCancel' === a
                        ? (0, o.jsx)('button', {
                            className: 'button1PopUp buttonPopUp',
                            onClick: f,
                            autoFocus: !0,
                            children: s,
                          })
                        : 'twoButtons' === a
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)('button', {
                                  className: 'button1PopUp buttonPopUp',
                                  onClick: f,
                                  children: s,
                                }),
                                (0, o.jsx)('button', {
                                  className: 'button2PopUp buttonPopUp',
                                  onClick: c,
                                  autoFocus: !0,
                                  children: l,
                                }),
                              ],
                            })
                          : 'noButtons' === a && (0, o.jsx)(o.Fragment, {}),
                  ],
                }),
              }),
            })
          );
        },
        Xr = () => {
          const { connectionStatus: t } = (0, e.useContext)(d),
            { showPopUp: n, popUpData: r } = (0, e.useContext)(m);
          return Ve('(min-width: 1200px)')
            ? (0, o.jsxs)(Ht, {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' },
                children: [
                  n &&
                    r &&
                    (0, o.jsx)(
                      Gr,
                      {
                        title: r.title,
                        message: r.message,
                        type: r.type,
                        seconds: r.seconds,
                        CTAtext: null === r || void 0 === r ? void 0 : r.CTAtext,
                        acceptButtonText: null === r || void 0 === r ? void 0 : r.acceptButtonText,
                        rejectButtonText: null === r || void 0 === r ? void 0 : r.rejectButtonText,
                        handlerAccept: null === r || void 0 === r ? void 0 : r.handlerAccept,
                        handlerReject: null === r || void 0 === r ? void 0 : r.handlerReject,
                        handlerTimeOut: null === r || void 0 === r ? void 0 : r.handlerTimeOut,
                      },
                      Math.random(),
                    ),
                  (0, o.jsx)(Le, {
                    children: (0, o.jsxs)(Me, {
                      children: [
                        (0, o.jsx)(Re, { path: '*', element: (0, o.jsx)(Te, { to: '/home' }) }),
                        (0, o.jsx)(Re, { path: '/home', element: (0, o.jsx)(Or, {}) }),
                        (0, o.jsx)(Re, {
                          path: '/findingPair',
                          element: 'offline' === t ? (0, o.jsx)(Te, { to: '/home' }) : (0, o.jsx)(Kr, {}),
                        }),
                        (0, o.jsx)(Re, {
                          path: '/chatRoom',
                          element: 'offline' === t ? (0, o.jsx)(Te, { to: '/home' }) : (0, o.jsx)(Yr, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, o.jsxs)(Ht, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 20px',
                  height: '100vh',
                  width: '100vw',
                },
                children: [
                  (0, o.jsx)(ln, {
                    sx: { fontSize: '22px', fontWeight: '600', lineHeight: '28px' },
                    children: 'Only available on desktop',
                  }),
                  (0, o.jsx)(ln, {
                    sx: { fontSize: '18px', fontWeight: '600', lineHeight: '22px' },
                    children: 'Please use a desktop to use this app',
                  }),
                  (0, o.jsx)(ln, {
                    sx: { fontSize: '14px', marginTop: '15px' },
                    children: 'Soon It will be available a mobile version developped in React Native',
                  }),
                ],
              });
        };
      r.createRoot(document.getElementById('root')).render(
        (0, o.jsx)(e.StrictMode, {
          children: (0, o.jsx)(l, {
            children: (0, o.jsx)(c, {
              children: (0, o.jsx)(p, {
                children: (0, o.jsx)(g, { children: (0, o.jsx)(b, { children: (0, o.jsx)(Xr, {}) }) }),
              }),
            }),
          }),
        }),
      );
    })();
})();
//# sourceMappingURL=main.78e11225.js.map
