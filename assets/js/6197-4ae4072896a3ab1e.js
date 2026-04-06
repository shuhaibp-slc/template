(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6197], {
    46197: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => I
      });
      var n, o, i, a, l, c = r(12115),
        u = r(70841),
        s = r.n(u),
        f = r(49804),
        p = r(29722),
        b = r(43527),
        y = r(74211),
        m = r(45992),
        v = r(92191),
        O = r(33966),
        g = r(55359),
        h = r(75726);

      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? j(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof t ? t : t + ""
            }(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function d() {
        return (d = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function w(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }
      var T = (e, t, r, c, u) => {
          var s = r - c;
          return (0, h.Y)(n || (n = w(["M ", ",", ""])), e, t) + (0, h.Y)(o || (o = w(["L ", ",", ""])), e + r, t) + (0, h.Y)(i || (i = w(["L ", ",", ""])), e + r - s / 2, t + u) + (0, h.Y)(a || (a = w(["L ", ",", ""])), e + r - s / 2 - c, t + u) + (0, h.Y)(l || (l = w(["L ", ",", " Z"])), e, t)
        },
        E = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease"
        },
        S = e => {
          var t = (0, b.e)(e, E),
            {
              x: r,
              y: n,
              upperWidth: o,
              lowerWidth: i,
              height: a,
              className: l
            } = t,
            {
              animationEasing: u,
              animationDuration: s,
              animationBegin: f,
              isUpdateAnimationActive: h
            } = t,
            j = (0, c.useRef)(null),
            [w, S] = (0, c.useState)(-1),
            D = (0, c.useRef)(o),
            M = (0, c.useRef)(i),
            k = (0, c.useRef)(a),
            x = (0, c.useRef)(r),
            N = (0, c.useRef)(n),
            W = (0, m.n)(e, "trapezoid-");
          if ((0, c.useEffect)(() => {
              if (j.current && j.current.getTotalLength) try {
                var e = j.current.getTotalLength();
                e && S(e)
              } catch (e) {}
            }, []), r !== +r || n !== +n || o !== +o || i !== +i || a !== +a || 0 === o && 0 === i || 0 === a) return null;
          var z = (0, p.$)("recharts-trapezoid", l);
          if (!h) return c.createElement("g", null, c.createElement("path", d({}, (0, g.a)(t), {
            className: z,
            d: T(r, n, o, i, a)
          })));
          var A = D.current,
            I = M.current,
            q = k.current,
            C = x.current,
            L = N.current,
            R = "0px ".concat(-1 === w ? 1 : w, "px"),
            G = "".concat(w, "px ").concat(w, "px"),
            Y = (0, O.dl)(["strokeDasharray"], s, u);
          return c.createElement(y.J, {
            animationId: W,
            key: W,
            canBegin: w > 0,
            duration: s,
            easing: u,
            isActive: h,
            begin: f
          }, e => {
            var l = (0, v.GW)(A, o, e),
              u = (0, v.GW)(I, i, e),
              s = (0, v.GW)(q, a, e),
              f = (0, v.GW)(C, r, e),
              p = (0, v.GW)(L, n, e);
            j.current && (D.current = l, M.current = u, k.current = s, x.current = f, N.current = p);
            var b = e > 0 ? {
              transition: Y,
              strokeDasharray: G
            } : {
              strokeDasharray: R
            };
            return c.createElement("path", d({}, (0, g.a)(t), {
              className: z,
              d: T(f, p, l, u, s),
              ref: j,
              style: P(P({}, b), t.style)
            }))
          })
        },
        D = r(25281),
        M = r(11058),
        k = r(93972),
        x = r(37214),
        N = ["option", "shapeType", "activeClassName", "inActiveClassName"];

      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof t ? t : t + ""
            }(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e) {
        var {
          shapeType: t,
          elementProps: r
        } = e;
        switch (t) {
          case "rectangle":
            return c.createElement(f.M, r);
          case "trapezoid":
            return c.createElement(S, r);
          case "sector":
            return c.createElement(D.h, r);
          case "symbols":
            if ("symbols" === t) return c.createElement(k.i, r);
            break;
          case "curve":
            return c.createElement(x.Ip, r);
          default:
            return null
        }
      }

      function I(e) {
        var t, {
            option: r,
            shapeType: n,
            activeClassName: o = "recharts-active-shape",
            inActiveClassName: i = "recharts-shape"
          } = e,
          a = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if (({}).hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n]
                } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, N);
        if ((0, c.isValidElement)(r)) t = (0, c.cloneElement)(r, z(z({}, a), (0, c.isValidElement)(r) ? r.props : r));
        else if ("function" == typeof r) t = r(a, a.index);
        else if (s()(r) && "boolean" != typeof r) {
          var l = z(z({}, a), r);
          t = c.createElement(A, {
            shapeType: n,
            elementProps: l
          })
        } else t = c.createElement(A, {
          shapeType: n,
          elementProps: a
        });
        return a.isActive ? c.createElement(M.W, {
          className: o
        }, t) : c.createElement(M.W, {
          className: i
        }, t)
      }
    },
    70841: (e, t, r) => {
      e.exports = r(79700).isPlainObject
    },
    79700: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.isPlainObject = function(e) {
        if ("object" != typeof e || null == e) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        if ("[object Object]" !== Object.prototype.toString.call(e)) {
          let t = e[Symbol.toStringTag];
          return null != t && !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable && e.toString() === `[object ${t}]`
        }
        let t = e;
        for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
      }
    },
    93972: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => x
      });
      var n = r(12115);
      let o = Math.cos,
        i = Math.sin,
        a = Math.sqrt,
        l = Math.PI,
        c = 2 * l,
        u = {
          draw(e, t) {
            let r = a(t / l);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, c)
          }
        },
        s = a(1 / 3),
        f = 2 * s,
        p = i(l / 10) / i(7 * l / 10),
        b = i(c / 10) * p,
        y = -o(c / 10) * p,
        m = a(3),
        v = a(3) / 2,
        O = 1 / a(12),
        g = (O / 2 + 1) * 3;
      var h = r(74592),
        j = r(85802);
      a(3), a(3);
      var P = r(29722),
        d = r(92191),
        w = r(55359),
        T = ["type", "size", "sizeType"];

      function E() {
        return (E = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof t ? t : t + ""
            }(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var M = {
          symbolCircle: u,
          symbolCross: {
            draw(e, t) {
              let r = a(t / 5) / 2;
              e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath()
            }
          },
          symbolDiamond: {
            draw(e, t) {
              let r = a(t / f),
                n = r * s;
              e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath()
            }
          },
          symbolSquare: {
            draw(e, t) {
              let r = a(t),
                n = -r / 2;
              e.rect(n, n, r, r)
            }
          },
          symbolStar: {
            draw(e, t) {
              let r = a(.8908130915292852 * t),
                n = b * r,
                l = y * r;
              e.moveTo(0, -r), e.lineTo(n, l);
              for (let t = 1; t < 5; ++t) {
                let a = c * t / 5,
                  u = o(a),
                  s = i(a);
                e.lineTo(s * r, -u * r), e.lineTo(u * n - s * l, s * n + u * l)
              }
              e.closePath()
            }
          },
          symbolTriangle: {
            draw(e, t) {
              let r = -a(t / (3 * m));
              e.moveTo(0, 2 * r), e.lineTo(-m * r, -r), e.lineTo(m * r, -r), e.closePath()
            }
          },
          symbolWye: {
            draw(e, t) {
              let r = a(t / g),
                n = r / 2,
                o = r * O,
                i = r * O + r,
                l = -n;
              e.moveTo(n, o), e.lineTo(n, i), e.lineTo(l, i), e.lineTo(-.5 * n - v * o, v * n + -.5 * o), e.lineTo(-.5 * n - v * i, v * n + -.5 * i), e.lineTo(-.5 * l - v * i, v * l + -.5 * i), e.lineTo(-.5 * n + v * o, -.5 * o - v * n), e.lineTo(-.5 * n + v * i, -.5 * i - v * n), e.lineTo(-.5 * l + v * i, -.5 * i - v * l), e.closePath()
            }
          }
        },
        k = Math.PI / 180,
        x = e => {
          var {
            type: t = "circle",
            size: r = 64,
            sizeType: o = "area"
          } = e, i = D(D({}, function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if (({}).hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n]
                } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, T)), {}, {
            type: t,
            size: r,
            sizeType: o
          }), a = "circle";
          "string" == typeof t && (a = t);
          var {
            className: l,
            cx: c,
            cy: s
          } = i, f = (0, w.a)(i);
          return (0, d.Et)(c) && (0, d.Et)(s) && (0, d.Et)(r) ? n.createElement("path", E({}, f, {
            className: (0, P.$)("recharts-symbols", l),
            transform: "translate(".concat(c, ", ").concat(s, ")"),
            d: (() => {
              var e, t = (e = a, M["symbol".concat((0, d.Zb)(e))] || u),
                n = (function(e, t) {
                  let r = null,
                    n = (0, j.i)(o);

                  function o() {
                    let o;
                    if (r || (r = o = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), o) return r = null, o + "" || null
                  }
                  return e = "function" == typeof e ? e : (0, h.A)(e || u), t = "function" == typeof t ? t : (0, h.A)(void 0 === t ? 64 : +t), o.type = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : (0, h.A)(t), o) : e
                  }, o.size = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : (0, h.A)(+e), o) : t
                  }, o.context = function(e) {
                    return arguments.length ? (r = null == e ? null : e, o) : r
                  }, o
                })().type(t).size(((e, t, r) => {
                  if ("area" === t) return e;
                  switch (r) {
                    case "cross":
                      return 5 * e * e / 9;
                    case "diamond":
                      return .5 * e * e / Math.sqrt(3);
                    case "square":
                      return e * e;
                    case "star":
                      var n = 18 * k;
                      return 1.25 * e * e * (Math.tan(n) - Math.tan(2 * n) * Math.tan(n) ** 2);
                    case "triangle":
                      return Math.sqrt(3) * e * e / 4;
                    case "wye":
                      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
                    default:
                      return Math.PI * e * e / 4
                  }
                })(r, o, a))();
              if (null !== n) return n
            })()
          })) : null
        };
      x.registerSymbol = (e, t) => {
        M["symbol".concat((0, d.Zb)(e))] = t
      }
    }
  }
]);