(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7722], {
    9081: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.maxBy = function(e, t) {
        if (0 === e.length) return;
        let r = e[0],
          n = t(r, 0, e);
        for (let a = 1; a < e.length; a++) {
          let i = e[a],
            o = t(i, a, e);
          o > n && (n = o, r = i)
        }
        return r
      }
    },
    12242: (e, t, r) => {
      "use strict";
      r.d(t, {
        t: () => l
      });
      var n = r(12115),
        a = r(95295),
        i = r(80598),
        o = ["item"],
        l = (0, n.forwardRef)((e, t) => n.createElement(i.P, {
          chartName: "ScatterChart",
          defaultTooltipEventType: "item",
          validateTooltipEventTypes: o,
          tooltipPayloadSearcher: a.uN,
          categoricalChartProps: e,
          ref: t
        }))
    },
    12945: (e, t, r) => {
      "use strict";
      r.d(t, {
        K: () => s
      });
      var n = r(12115),
        a = r(26028),
        i = r(10365),
        o = r(44531),
        l = r(43527);

      function c(e) {
        var t = (0, i.j)(),
          r = (0, n.useRef)(null);
        return (0, n.useLayoutEffect)(() => {
          null === r.current ? t((0, a.D4)(e)) : r.current !== e && t((0, a.ku)({
            prev: r.current,
            next: e
          })), r.current = e
        }, [e, t]), (0, n.useLayoutEffect)(() => () => {
          r.current && (t((0, a.Gc)(r.current)), r.current = null)
        }, [t]), null
      }
      var u = {
        zAxisId: 0,
        range: o.N8.range,
        scale: o.N8.scale,
        type: o.N8.type
      };

      function s(e) {
        var t = (0, l.e)(e, u);
        return n.createElement(c, {
          domain: t.domain,
          id: t.zAxisId,
          dataKey: t.dataKey,
          name: t.name,
          unit: t.unit,
          range: t.range,
          scale: t.scale,
          type: t.type,
          allowDuplicatedCategory: o.N8.allowDuplicatedCategory,
          allowDataOverflow: o.N8.allowDataOverflow,
          reversed: o.N8.reversed,
          includeHidden: o.N8.includeHidden
        })
      }
      s.displayName = "ZAxis"
    },
    17489: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(4882);
      t.toInteger = function(e) {
        let t = n.toFinite(e),
          r = t % 1;
        return r ? t - r : t
      }
    },
    24048: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(56340),
        a = r(34870),
        i = r(92146),
        o = r(50332),
        l = r(32951),
        c = r(42453),
        u = r(79700);
      t.omit = function(e, ...t) {
        var r;
        if (null == e) return {};
        let s = (r = e, (t = c.flatten(t)).some(e => Array.isArray(e) || l.isDeepKey(e)) ? function(e) {
          let t = {},
            r = [...a.keysIn(e), ...o.getSymbolsIn(e)];
          for (let a = 0; a < r.length; a++) {
            let i = r[a];
            t[i] = n.cloneDeepWith(e[i], e => {
              if (!u.isPlainObject(e)) return e
            })
          }
          return t
        }(r) : function(e) {
          let t = {},
            r = [...a.keysIn(e), ...o.getSymbolsIn(e)];
          for (let n = 0; n < r.length; n++) {
            let a = r[n];
            t[a] = e[a]
          }
          return t
        }(r));
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          switch (typeof r) {
            case "object":
              Array.isArray(r) || (r = Array.from(r));
              for (let e = 0; e < r.length; e++) {
                let t = r[e];
                i.unset(s, t)
              }
              break;
            case "string":
            case "symbol":
            case "number":
              i.unset(s, r)
          }
        }
        return s
      }
    },
    27407: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(50527),
        a = r(35679),
        i = r(73957);
      t.minBy = function(e, t) {
        if (null != e) return n.minBy(Array.from(e), i.iteratee(t ?? a.identity))
      }
    },
    31802: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(17489);
      t.times = function(e, t) {
        if ((e = n.toInteger(e)) < 1 || !Number.isSafeInteger(e)) return [];
        let r = Array(e);
        for (let n = 0; n < e; n++) r[n] = "function" == typeof t ? t(n) : n;
        return r
      }
    },
    34125: (e, t, r) => {
      e.exports = r(75721).maxBy
    },
    34512: (e, t, r) => {
      "use strict";
      r.d(t, {
        T: () => l
      });
      var n = r(95155),
        a = r(12115),
        i = r(39055);

      function o({
        className: e,
        ...t
      }) {
        return (0, n.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, i.cn)("bg-accent animate-pulse rounded-md", e),
          ...t
        })
      }

      function l({
        children: e,
        height: t = 320,
        className: r
      }) {
        let i = (0, a.useRef)(null),
          [l, c] = (0, a.useState)(!1);
        return (0, a.useEffect)(() => {
          let e = i.current;
          if (!e) return;
          let t = new IntersectionObserver(([e]) => {
            e.isIntersecting && (c(!0), t.disconnect())
          }, {
            rootMargin: "200px"
          });
          return t.observe(e), () => t.disconnect()
        }, []), (0, n.jsx)("div", {
          ref: i,
          className: r,
          children: l ? e : (0, n.jsx)(o, {
            className: "w-full rounded-lg",
            style: {
              height: t
            }
          })
        })
      }
    },
    34855: (e, t, r) => {
      "use strict";
      r.d(t, {
        Kc: () => l,
        M4: () => a,
        i0: () => i,
        nI: () => o,
        rw: () => n,
        tW: () => c
      });
      let n = [{
          subject: "Frontend",
          current: 88,
          previous: 72,
          fullMark: 100
        }, {
          subject: "Backend",
          current: 75,
          previous: 68,
          fullMark: 100
        }, {
          subject: "Design",
          current: 82,
          previous: 78,
          fullMark: 100
        }, {
          subject: "DevOps",
          current: 65,
          previous: 52,
          fullMark: 100
        }, {
          subject: "Testing",
          current: 70,
          previous: 58,
          fullMark: 100
        }, {
          subject: "Security",
          current: 58,
          previous: 45,
          fullMark: 100
        }],
        a = [{
          name: "Mobile",
          value: 42,
          fill: "var(--chart-1)"
        }, {
          name: "Desktop",
          value: 35,
          fill: "var(--chart-2)"
        }, {
          name: "Tablet",
          value: 15,
          fill: "var(--chart-3)"
        }, {
          name: "Other",
          value: 8,
          fill: "var(--chart-4)"
        }],
        i = [{
          name: "Engineering",
          size: 42e4,
          fill: "var(--chart-1)"
        }, {
          name: "Marketing",
          size: 28e4,
          fill: "var(--chart-2)"
        }, {
          name: "Sales",
          size: 24e4,
          fill: "var(--chart-3)"
        }, {
          name: "Operations",
          size: 18e4,
          fill: "var(--chart-4)"
        }, {
          name: "Design",
          size: 15e4,
          fill: "var(--chart-5)"
        }, {
          name: "Support",
          size: 12e4,
          fill: "var(--chart-1)"
        }, {
          name: "HR",
          size: 95e3,
          fill: "var(--chart-2)"
        }, {
          name: "Legal",
          size: 65e3,
          fill: "var(--chart-3)"
        }],
        o = [{
          x: 2400,
          y: 8200,
          z: 120
        }, {
          x: 4800,
          y: 14500,
          z: 200
        }, {
          x: 1800,
          y: 5800,
          z: 80
        }, {
          x: 6200,
          y: 21e3,
          z: 280
        }, {
          x: 3500,
          y: 11200,
          z: 150
        }, {
          x: 5100,
          y: 16800,
          z: 220
        }, {
          x: 2900,
          y: 9400,
          z: 130
        }, {
          x: 7500,
          y: 24600,
          z: 340
        }, {
          x: 4200,
          y: 13800,
          z: 180
        }, {
          x: 1500,
          y: 4200,
          z: 60
        }, {
          x: 5800,
          y: 18900,
          z: 250
        }, {
          x: 3200,
          y: 10500,
          z: 140
        }],
        l = [{
          x: 2800,
          y: 9800,
          z: 140
        }, {
          x: 5200,
          y: 17200,
          z: 230
        }, {
          x: 1600,
          y: 6200,
          z: 90
        }, {
          x: 6800,
          y: 23500,
          z: 310
        }, {
          x: 3800,
          y: 12800,
          z: 170
        }, {
          x: 4500,
          y: 15200,
          z: 200
        }, {
          x: 3100,
          y: 10800,
          z: 145
        }, {
          x: 7200,
          y: 25800,
          z: 360
        }, {
          x: 4900,
          y: 16100,
          z: 210
        }, {
          x: 2200,
          y: 7400,
          z: 100
        }, {
          x: 5600,
          y: 19400,
          z: 260
        }, {
          x: 3600,
          y: 12200,
          z: 160
        }],
        c = [{
          month: "Jan",
          revenue: 42e3,
          orders: 320,
          growth: 5.2
        }, {
          month: "Feb",
          revenue: 45e3,
          orders: 340,
          growth: 7.1
        }, {
          month: "Mar",
          revenue: 48500,
          orders: 365,
          growth: 7.8
        }, {
          month: "Apr",
          revenue: 46e3,
          orders: 350,
          growth: 3.1
        }, {
          month: "May",
          revenue: 52e3,
          orders: 390,
          growth: 13
        }, {
          month: "Jun",
          revenue: 54800,
          orders: 410,
          growth: 5.4
        }, {
          month: "Jul",
          revenue: 51200,
          orders: 385,
          growth: -6.6
        }, {
          month: "Aug",
          revenue: 56500,
          orders: 420,
          growth: 10.4
        }, {
          month: "Sep",
          revenue: 59800,
          orders: 445,
          growth: 5.8
        }, {
          month: "Oct",
          revenue: 62400,
          orders: 460,
          growth: 4.3
        }, {
          month: "Nov",
          revenue: 68200,
          orders: 510,
          growth: 9.3
        }, {
          month: "Dec",
          revenue: 72500,
          orders: 540,
          growth: 6.3
        }]
    },
    34870: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(53356),
        a = r(43040),
        i = r(94313),
        o = r(63408),
        l = r(31802);

      function c(e) {
        let t = [];
        for (let r in e) t.push(r);
        return t
      }
      t.keysIn = function(e) {
        if (null == e) return [];
        switch (typeof e) {
          case "object":
          case "function":
            if (i.isArrayLike(e)) {
              var t;
              let r, a, i;
              return t = e, a = new Set(r = l.times(t.length, e => `${e}`)), n.isBuffer(t) && (a.add("offset"), a.add("parent")), o.isTypedArray(t) && (a.add("buffer"), a.add("byteLength"), a.add("byteOffset")), i = c(t).filter(e => !a.has(e)), Array.isArray(t) ? [...r, ...i] : [...r.filter(e => Object.hasOwn(t, e)), ...i]
            }
            if (a.isPrototype(e)) return c(e).filter(e => "constructor" !== e);
            return c(e);
          default:
            return c(Object(e))
        }
      }
    },
    36607: (e, t, r) => {
      "use strict";
      r.d(t, {
        z: () => w
      });
      var n = r(29722),
        a = r(12115),
        i = r(21739),
        o = r(10365),
        l = r(2842),
        c = r(39252),
        u = (0, l.Mz)([(e, t) => (0, c.YF)(e, "angleAxis", t, !1)], e => {
          if (e) return e.map(e => e.coordinate)
        }),
        s = (0, l.Mz)([(e, t) => (0, c.YF)(e, "radiusAxis", t, !1)], e => {
          if (e) return e.map(e => e.coordinate)
        }),
        d = r(96173),
        p = r(23651),
        y = r(10483),
        f = r(51531),
        m = r(43527),
        v = ["gridType", "radialLines", "angleAxisId", "radiusAxisId", "cx", "cy", "innerRadius", "outerRadius", "polarAngles", "polarRadius", "zIndex"];

      function h() {
        return (h = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? g(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var O = e => {
          var {
            cx: t,
            cy: r,
            innerRadius: n,
            outerRadius: o,
            polarAngles: l,
            radialLines: c
          } = e;
          if (!l || !l.length || !c) return null;
          var u = b({
            stroke: "#ccc"
          }, (0, p.uZ)(e));
          return a.createElement("g", {
            className: "recharts-polar-grid-angle"
          }, l.map(e => {
            var l = (0, i.IZ)(t, r, n, e),
              c = (0, i.IZ)(t, r, o, e);
            return a.createElement("line", h({
              key: "line-".concat(e)
            }, u, {
              x1: l.x,
              y1: l.y,
              x2: c.x,
              y2: c.y
            }))
          }))
        },
        x = e => {
          var {
            cx: t,
            cy: r,
            radius: i
          } = e, o = b({
            stroke: "#ccc",
            fill: "none"
          }, (0, p.uZ)(e));
          return a.createElement("circle", h({}, o, {
            className: (0, n.$)("recharts-polar-grid-concentric-circle", e.className),
            cx: t,
            cy: r,
            r: i
          }))
        },
        E = e => {
          var t, r, o, l, {
              radius: c
            } = e,
            u = b({
              stroke: "#ccc",
              fill: "none"
            }, (0, p.uZ)(e));
          return a.createElement("path", h({}, u, {
            className: (0, n.$)("recharts-polar-grid-concentric-polygon", e.className),
            d: (t = e.cx, r = e.cy, o = e.polarAngles, l = "", o.forEach((e, n) => {
              var a = (0, i.IZ)(t, r, c, e);
              n ? l += "L ".concat(a.x, ",").concat(a.y) : l += "M ".concat(a.x, ",").concat(a.y)
            }), l += "Z")
          }))
        },
        j = e => {
          var {
            polarRadius: t,
            gridType: r
          } = e;
          if (!t || !t.length) return null;
          var n = Math.max(...t),
            i = e.fill && "none" !== e.fill;
          return a.createElement("g", {
            className: "recharts-polar-grid-concentric"
          }, i && "circle" === r && a.createElement(x, h({}, e, {
            radius: n
          })), i && "circle" !== r && a.createElement(E, h({}, e, {
            radius: n
          })), t.map((t, n) => "circle" === r ? a.createElement(x, h({
            key: n
          }, e, {
            fill: "none",
            radius: t
          })) : a.createElement(E, h({
            key: n
          }, e, {
            fill: "none",
            radius: t
          }))))
        },
        P = {
          angleAxisId: 0,
          radiusAxisId: 0,
          gridType: "polygon",
          radialLines: !0,
          zIndex: f.I.grid
        },
        w = e => {
          var t, r, n, i, l, c, p, f, g = (0, m.e)(e, P),
            {
              gridType: x,
              radialLines: E,
              angleAxisId: w,
              radiusAxisId: A,
              cx: S,
              cy: I,
              innerRadius: k,
              outerRadius: M,
              polarAngles: T,
              polarRadius: z,
              zIndex: D
            } = g,
            N = function(e, t) {
              if (null == e) return {};
              var r, n, a = function(e, t) {
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
                for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
              }
              return a
            }(g, v),
            K = (0, o.G)(d.D0),
            R = (0, o.G)(e => u(e, w)),
            C = (0, o.G)(e => s(e, A)),
            W = Array.isArray(T) ? T : R,
            L = Array.isArray(z) ? z : C;
          if (null == W || null == L) return null;
          var G = b({
              cx: null != (t = null != (r = null == K ? void 0 : K.cx) ? r : S) ? t : 0,
              cy: null != (n = null != (i = null == K ? void 0 : K.cy) ? i : I) ? n : 0,
              innerRadius: null != (l = null != (c = null == K ? void 0 : K.innerRadius) ? c : k) ? l : 0,
              outerRadius: null != (p = null != (f = null == K ? void 0 : K.outerRadius) ? f : M) ? p : 0,
              polarAngles: W,
              polarRadius: L,
              zIndex: D
            }, N),
            {
              outerRadius: B
            } = G;
          return B <= 0 ? null : a.createElement(y.g, {
            zIndex: G.zIndex
          }, a.createElement("g", {
            className: "recharts-polar-grid"
          }, a.createElement(j, h({
            gridType: x,
            radialLines: E
          }, G, {
            polarAngles: W,
            polarRadius: L
          })), a.createElement(O, h({
            gridType: x,
            radialLines: E
          }, G, {
            polarAngles: W,
            polarRadius: L
          }))))
        };
      w.displayName = "PolarGrid"
    },
    38173: (e, t, r) => {
      "use strict";
      r.d(t, {
        V_: () => en
      });
      var n = r(12115),
        a = r(79927),
        i = r.n(a),
        o = r(57258),
        l = r.n(o),
        c = r(11058),
        u = r(67816),
        s = r(94143),
        d = r(49804),
        p = r(39168),
        y = r(71615),
        f = r(92191),
        m = r(53157),
        v = r(65372),
        h = r(35885),
        g = r(19891),
        b = r(74624),
        O = r(96561),
        x = r(78929),
        E = r(98814),
        j = r(10365),
        P = r(99498),
        w = r(23651),
        A = r(43527),
        S = r(60244),
        I = r(33966),
        k = r(89933),
        M = r(40060),
        T = {
          begin: 0,
          duration: 1e3,
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          onAnimationEnd: () => {},
          onAnimationStart: () => {}
        };

      function z(e) {
        var t = (0, A.e)(e, T),
          {
            animationId: r,
            from: a,
            to: i,
            attributeName: o,
            isActive: l,
            canBegin: c,
            duration: u,
            easing: s,
            begin: d,
            onAnimationEnd: p,
            onAnimationStart: y,
            children: m
          } = t,
          v = (0, M.j)(),
          h = "auto" === l ? !k.m.isSsr && !v : l,
          g = (0, S.L)(r + o, t.animationManager),
          [b, O] = (0, n.useState)(() => h ? a : i),
          x = (0, n.useRef)(!1),
          E = (0, n.useCallback)(() => {
            O(a), y()
          }, [a, y]);
        return m(((0, n.useEffect)(() => {
          if (!h || !c) return f.lQ;
          x.current = !0;
          var e = g.subscribe(O);
          return g.start([E, d, i, u, p]), () => {
            g.stop(), e && e(), p()
          }
        }, [h, c, u, s, d, E, p, g, i, a]), h) ? c ? x.current ? {
          transition: (0, I.dl)([o], u, s),
          [o]: b
        } : {
          [o]: a
        } : {
          [o]: a
        } : {
          [o]: i
        })
      }
      var D = r(604),
        N = r(75450),
        K = ["width", "height", "className", "style", "children", "type"];

      function R() {
        return (R = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach(function(t) {
            L(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function L(e, t, r) {
        var n;
        return (t = "symbol" == typeof(n = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var G = "value",
        B = (e, t) => {
          if (e && t) return l()(e, t)
        },
        F = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "".concat(t, "children[").concat(e, "]")
        },
        Z = {
          chartName: "Treemap",
          defaultTooltipEventType: "item",
          validateTooltipEventTypes: ["item"],
          tooltipPayloadSearcher: B,
          eventEmitter: void 0
        },
        V = e => {
          var t, {
              depth: r,
              node: n,
              index: a,
              dataKey: i,
              nameKey: o,
              nestedActiveTooltipIndex: l
            } = e,
            c = 0 === r ? "" : F(a, l),
            {
              children: u
            } = n,
            s = r + 1,
            d = u && u.length ? u.map((e, t) => V({
              depth: s,
              node: e,
              index: t,
              dataKey: i,
              nameKey: o,
              nestedActiveTooltipIndex: c
            })) : null;
          if (d && d.length) t = d.reduce((e, t) => e + t.value, 0);
          else {
            var y = n[i],
              m = "number" == typeof y ? y : 0;
            t = (0, f.M8)(m) || m <= 0 ? 0 : m
          }
          return W(W({}, n), {}, {
            children: d,
            name: (0, p.kr)(n, o, ""),
            [G]: t,
            depth: r,
            index: a,
            tooltipIndex: c
          })
        },
        Y = (e, t, r) => {
          var n = t * t,
            a = e.area * e.area,
            {
              min: i,
              max: o
            } = e.reduce((e, t) => ({
              min: Math.min(e.min, t.area),
              max: Math.max(e.max, t.area)
            }), {
              min: 1 / 0,
              max: 0
            });
          return a ? Math.max(n * o * r / a, a / (n * i * r)) : 1 / 0
        },
        H = (e, t, r, n) => t === r.width ? ((e, t, r, n) => {
          var a, i = t ? Math.round(e.area / t) : 0;
          (n || i > r.height) && (i = r.height);
          for (var o = r.x, l = 0, c = e.length; l < c; l++) null != (a = e[l]) && (a.x = o, a.y = r.y, a.height = i, a.width = Math.min(i ? Math.round(a.area / i) : 0, r.x + r.width - o), o += a.width);
          return null != a && (a.width += r.x + r.width - o), W(W({}, r), {}, {
            y: r.y + i,
            height: r.height - i
          })
        })(e, t, r, n) : ((e, t, r, n) => {
          var a, i = t ? Math.round(e.area / t) : 0;
          (n || i > r.width) && (i = r.width);
          for (var o = r.y, l = 0, c = e.length; l < c; l++) null != (a = e[l]) && (a.x = r.x, a.y = o, a.width = i, a.height = Math.min(i ? Math.round(a.area / i) : 0, r.y + r.height - o), o += a.height);
          return a && (a.height += r.y + r.height - o), W(W({}, r), {}, {
            x: r.x + i,
            width: r.width - i
          })
        })(e, t, r, n),
        $ = (e, t) => {
          var {
            children: r
          } = e;
          if (r && r.length) {
            var n, a, i, o, l, c, u = {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
              },
              s = [],
              d = 1 / 0,
              p = Math.min(u.width, u.height),
              y = (a = (n = u.width * u.height / e[G]) < 0 ? 0 : n, r.map(e => {
                var t = e[G] * a;
                return W(W({}, e), {}, {
                  area: (0, f.M8)(t) || t <= 0 ? 0 : t
                })
              })),
              m = y.slice();
            for (s.area = 0; m.length > 0;)[i] = m, null != i && (s.push(i), s.area += i.area, (o = Y(s, p, t)) <= d ? (m.shift(), d = o) : (s.area -= null != (l = null == (c = s.pop()) ? void 0 : c.area) ? l : 0, p = Math.min((u = H(s, p, u, !1)).width, u.height), s.length = s.area = 0, d = 1 / 0));
            return s.length && (u = H(s, p, u, !0), s.length = s.area = 0), W(W({}, e), {}, {
              children: y.map(e => $(e, t))
            })
          }
          return e
        },
        J = W({
          aspectRatio: .5 * (1 + Math.sqrt(5)),
          dataKey: "value",
          nameKey: "name",
          type: "flat",
          isAnimationActive: "auto",
          isUpdateAnimationActive: "auto",
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "linear"
        }, N.zp),
        U = {
          isAnimationFinished: !1,
          formatRoot: null,
          currentRoot: void 0,
          nestIndex: [],
          prevAspectRatio: J.aspectRatio,
          prevDataKey: J.dataKey
        };

      function Q(e) {
        var {
          content: t,
          nodeProps: r,
          type: a,
          colorPanel: o,
          onMouseEnter: l,
          onMouseLeave: u,
          onClick: p
        } = e;
        if (n.isValidElement(t)) return n.createElement(c.W, {
          onMouseEnter: l,
          onMouseLeave: u,
          onClick: p
        }, n.cloneElement(t, r));
        if ("function" == typeof t) return n.createElement(c.W, {
          onMouseEnter: l,
          onMouseLeave: u,
          onClick: p
        }, t(r));
        var {
          x: f,
          y: v,
          width: h,
          height: g,
          index: b
        } = r, O = null;
        h > 10 && g > 10 && r.children && "nest" === a && (O = n.createElement(s.t, {
          points: [{
            x: f + 2,
            y: v + g / 2
          }, {
            x: f + 6,
            y: v + g / 2 + 3
          }, {
            x: f + 2,
            y: v + g / 2 + 6
          }]
        }));
        var x = null,
          E = (0, m.Pu)(r.name);
        h > 20 && g > 20 && E.width < h && E.height < g && (x = n.createElement("text", {
          x: f + 8,
          y: v + g / 2 + 7,
          fontSize: 14
        }, r.name));
        var j = o || y.dc;
        return n.createElement("g", null, n.createElement(d.M, R({
          fill: r.depth < 2 ? j[b % j.length] : "rgba(255,255,255,0)",
          stroke: "#fff"
        }, i()(r, ["children"]), {
          onMouseEnter: l,
          onMouseLeave: u,
          onClick: p,
          "data-recharts-item-index": r.tooltipIndex
        })), O, x)
      }

      function _(e) {
        var t = (0, j.j)(),
          r = {
            x: e.nodeProps.x + e.nodeProps.width / 2,
            y: e.nodeProps.y + e.nodeProps.height / 2
          };
        return n.createElement(Q, R({}, e, {
          onMouseEnter: () => {
            t((0, b.RD)({
              activeIndex: e.nodeProps.tooltipIndex,
              activeDataKey: e.dataKey,
              activeCoordinate: r,
              activeGraphicalItemId: e.id
            }))
          },
          onMouseLeave: () => {},
          onClick: () => {
            t((0, b.ML)({
              activeIndex: e.nodeProps.tooltipIndex,
              activeDataKey: e.dataKey,
              activeCoordinate: r,
              activeGraphicalItemId: e.id
            }))
          }
        }))
      }
      var X = n.memo(e => {
          var {
            dataKey: t,
            nameKey: r,
            stroke: a,
            fill: i,
            currentRoot: o,
            id: l
          } = e, c = {
            dataDefinedOnItem: o,
            getPosition: f.lQ,
            settings: {
              stroke: a,
              strokeWidth: void 0,
              fill: i,
              dataKey: t,
              nameKey: r,
              name: void 0,
              hide: !1,
              type: void 0,
              color: i,
              unit: "",
              graphicalItemId: l
            }
          };
          return n.createElement(O.r, {
            tooltipEntrySettings: c
          })
        }),
        q = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };

      function ee(e) {
        var {
          content: t,
          nodeProps: r,
          isLeaf: a,
          treemapProps: i,
          onNestClick: o
        } = e, {
          id: l,
          isAnimationActive: u,
          animationBegin: s,
          animationDuration: d,
          animationEasing: p,
          isUpdateAnimationActive: y,
          type: f,
          colorPanel: m,
          dataKey: v,
          onAnimationStart: h,
          onAnimationEnd: g,
          onMouseEnter: b,
          onClick: O,
          onMouseLeave: x
        } = i, {
          width: E,
          height: j,
          x: P,
          y: w
        } = r, A = -P - E, S = e => {
          (a || "nest" === f) && "function" == typeof b && b(r, e)
        }, I = e => {
          (a || "nest" === f) && "function" == typeof x && x(r, e)
        }, k = () => {
          "nest" === f && o(r), (a || "nest" === f) && "function" == typeof O && O(r)
        }, M = (0, n.useCallback)(() => {
          "function" == typeof g && g()
        }, [g]), T = (0, n.useCallback)(() => {
          "function" == typeof h && h()
        }, [h]);
        return n.createElement(z, {
          animationId: "treemap-".concat(r.tooltipIndex),
          from: "translate(".concat(A, "px, ").concat(0, "px)"),
          to: "translate(0, 0)",
          attributeName: "transform",
          begin: s,
          easing: p,
          isActive: u,
          duration: d,
          onAnimationStart: T,
          onAnimationEnd: M
        }, e => n.createElement(c.W, {
          onMouseEnter: S,
          onMouseLeave: I,
          onClick: k,
          style: W(W({}, e), {}, {
            transformOrigin: "".concat(P, " ").concat(w)
          })
        }, n.createElement(_, {
          id: l,
          content: t,
          dataKey: v,
          nodeProps: W(W({}, r), {}, {
            isAnimationActive: u,
            isUpdateAnimationActive: !y,
            width: E,
            height: j,
            x: P,
            y: w
          }),
          type: f,
          colorPanel: m
        })))
      }
      class et extends n.PureComponent {
        constructor() {
          super(...arguments), L(this, "state", W({}, U)), L(this, "handleClick", e => {
            var {
              onClick: t,
              type: r
            } = this.props;
            if ("nest" === r && e.children) {
              var {
                width: n,
                height: a,
                dataKey: i,
                nameKey: o,
                aspectRatio: l
              } = this.props, c = V({
                depth: 0,
                node: W(W({}, e), {}, {
                  x: 0,
                  y: 0,
                  width: n,
                  height: a
                }),
                index: 0,
                dataKey: i,
                nameKey: o,
                nestedActiveTooltipIndex: e.tooltipIndex
              }), u = $(c, l), {
                nestIndex: s
              } = this.state;
              s.push(e), this.setState({
                formatRoot: u,
                currentRoot: c,
                nestIndex: s
              })
            }
            t && t(e)
          }), L(this, "handleTouchMove", e => {
            var t = e.touches[0];
            if (null != t) {
              var r = document.elementFromPoint(t.clientX, t.clientY);
              if (r && r.getAttribute && null != this.state.formatRoot) {
                var n = r.getAttribute("data-recharts-item-index"),
                  a = B(this.state.formatRoot, n);
                if (null != a && "object" == typeof a && "x" in a && "y" in a && "width" in a && "height" in a && "number" == typeof a.x && "number" == typeof a.y && "number" == typeof a.width && "number" == typeof a.height) {
                  var {
                    dataKey: i,
                    dispatch: o
                  } = this.props, l = {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2
                  };
                  o((0, b.RD)({
                    activeIndex: n,
                    activeDataKey: i,
                    activeCoordinate: l,
                    activeGraphicalItemId: this.props.id
                  }))
                }
              }
            }
          })
        }
        static getDerivedStateFromProps(e, t) {
          if (e.data !== t.prevData || e.type !== t.prevType || e.width !== t.prevWidth || e.height !== t.prevHeight || e.dataKey !== t.prevDataKey || e.aspectRatio !== t.prevAspectRatio) {
            var r = V({
                depth: 0,
                node: {
                  children: e.data,
                  x: 0,
                  y: 0,
                  width: e.width,
                  height: e.height
                },
                index: 0,
                dataKey: e.dataKey,
                nameKey: e.nameKey
              }),
              n = $(r, e.aspectRatio);
            return W(W({}, t), {}, {
              formatRoot: n,
              currentRoot: r,
              nestIndex: [r],
              prevAspectRatio: e.aspectRatio,
              prevData: e.data,
              prevWidth: e.width,
              prevHeight: e.height,
              prevDataKey: e.dataKey,
              prevType: e.type
            })
          }
          return null
        }
        handleNestIndex(e, t) {
          var {
            nestIndex: r
          } = this.state, {
            width: n,
            height: a,
            dataKey: i,
            nameKey: o,
            aspectRatio: l
          } = this.props, c = $(V({
            depth: 0,
            node: W(W({}, e), {}, {
              x: 0,
              y: 0,
              width: n,
              height: a
            }),
            index: 0,
            dataKey: i,
            nameKey: o,
            nestedActiveTooltipIndex: e.tooltipIndex
          }), l);
          r = r.slice(0, t + 1), this.setState({
            formatRoot: c,
            currentRoot: e,
            nestIndex: r
          })
        }
        renderNode(e, t) {
          var {
            content: r,
            type: a
          } = this.props, i = W(W(W({}, (0, w.uZ)(this.props)), t), {}, {
            root: e
          }), o = !t.children || !t.children.length, {
            currentRoot: l
          } = this.state;
          return !((null == l ? void 0 : l.children) || []).filter(e => e.depth === t.depth && e.name === t.name).length && e.depth && "nest" === a ? null : n.createElement(c.W, {
            key: "recharts-treemap-node-".concat(i.x, "-").concat(i.y, "-").concat(i.name),
            className: "recharts-treemap-depth-".concat(t.depth)
          }, n.createElement(ee, {
            isLeaf: o,
            content: r,
            nodeProps: i,
            treemapProps: this.props,
            onNestClick: this.handleClick
          }), t.children && t.children.length ? t.children.map(e => this.renderNode(t, e)) : null)
        }
        renderAllNodes() {
          var {
            formatRoot: e
          } = this.state;
          return e ? this.renderNode(e, e) : null
        }
        renderNestIndex() {
          var {
            nameKey: e,
            nestIndexContent: t
          } = this.props, {
            nestIndex: r
          } = this.state;
          return n.createElement("div", {
            className: "recharts-treemap-nest-index-wrapper",
            style: {
              marginTop: "8px",
              textAlign: "center"
            }
          }, r.map((r, a) => {
            var i, o = l()(r, e, "root");
            return n.isValidElement(t) && (i = n.cloneElement(t, r, a)), i = "function" == typeof t ? t(r, a) : "string" == typeof o ? o : "root", n.createElement("div", {
              onClick: this.handleNestIndex.bind(this, r, a),
              key: "nest-index-".concat((0, f.NF)()),
              className: "recharts-treemap-nest-index-box",
              style: {
                cursor: "pointer",
                display: "inline-block",
                padding: "0 7px",
                background: "#000",
                color: "#fff",
                marginRight: "3px"
              }
            }, i)
          }))
        }
        render() {
          var e = this.props,
            {
              width: t,
              height: r,
              className: a,
              style: i,
              children: o,
              type: l
            } = e,
            c = function(e, t) {
              if (null == e) return {};
              var r, n, a = function(e, t) {
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
                for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
              }
              return a
            }(e, K),
            s = (0, w.uZ)(c);
          return n.createElement(n.Fragment, null, n.createElement(X, {
            dataKey: this.props.dataKey,
            nameKey: this.props.nameKey,
            stroke: this.props.stroke,
            fill: this.props.fill,
            currentRoot: this.state.currentRoot,
            id: this.props.id
          }), n.createElement(u.u, R({}, s, {
            width: t,
            height: "nest" === l ? r - 30 : r,
            onTouchMove: this.handleTouchMove
          }), this.renderAllNodes(), o), "nest" === l && this.renderNestIndex())
        }
      }

      function er(e) {
        var t = (0, j.j)(),
          r = (0, v.yi)(),
          a = (0, v.rY)();
        if (!(0, P.F)(r) || !(0, P.F)(a)) return null;
        var {
          id: i
        } = e;
        return n.createElement(D.x, {
          id: i,
          type: "treemap"
        }, i => n.createElement(et, R({}, e, {
          id: i,
          width: r,
          height: a,
          dispatch: t
        })))
      }

      function en(e) {
        var t, r = (0, A.e)(e, J),
          {
            className: a,
            style: i,
            width: o,
            height: l,
            throttleDelay: c,
            throttledEvents: u
          } = r,
          [s, d] = (0, n.useState)(null);
        return n.createElement(x.J, {
          preloadedState: {
            options: Z
          },
          reduxStoreName: null != (t = r.className) ? t : "Treemap"
        }, n.createElement(v.Ft, {
          margin: q
        }), n.createElement(E.M, {
          throttleDelay: c,
          throttledEvents: u
        }), n.createElement(g.A, {
          dispatchTouchEvents: !1,
          className: a,
          style: i,
          width: o,
          height: l,
          responsive: !1,
          ref: e => {
            null == s && null != e && d(e)
          },
          onMouseEnter: void 0,
          onMouseLeave: void 0,
          onClick: void 0,
          onMouseMove: void 0,
          onMouseDown: void 0,
          onMouseUp: void 0,
          onContextMenu: void 0,
          onDoubleClick: void 0,
          onTouchStart: void 0,
          onTouchMove: void 0,
          onTouchEnd: void 0
        }, n.createElement(h.$.Provider, {
          value: s
        }, n.createElement(er, r))))
      }
      L(et, "displayName", "Treemap")
    },
    39766: (e, t, r) => {
      e.exports = r(47725).last
    },
    42453: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(94313);
      t.flatten = function(e, t = 1) {
        let r = [],
          a = Math.floor(t);
        if (!n.isArrayLike(e)) return r;
        let i = (e, t) => {
          for (let n = 0; n < e.length; n++) {
            let o = e[n];
            t < a && (Array.isArray(o) || o?.[Symbol.isConcatSpreadable] || null !== o && "object" == typeof o && "[object Arguments]" === Object.prototype.toString.call(o)) ? Array.isArray(o) ? i(o, t + 1) : i(Array.from(o), t + 1) : r.push(o)
          }
        };
        return i(Array.from(e), 0), r
      }
    },
    43040: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.isPrototype = function(e) {
        let t = e?.constructor;
        return e === ("function" == typeof t ? t.prototype : Object.prototype)
      }
    },
    47725: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(53090),
        a = r(55980),
        i = r(94313);
      t.last = function(e) {
        if (i.isArrayLike(e)) return n.last(a.toArray(e))
      }
    },
    50332: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(22035);
      t.getSymbolsIn = function(e) {
        let t = [];
        for (; e;) t.push(...n.getSymbols(e)), e = Object.getPrototypeOf(e);
        return t
      }
    },
    50527: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.minBy = function(e, t) {
        if (0 === e.length) return;
        let r = e[0],
          n = t(r, 0, e);
        for (let a = 1; a < e.length; a++) {
          let i = e[a],
            o = t(i, a, e);
          o < n && (n = o, r = i)
        }
        return r
      }
    },
    53090: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.last = function(e) {
        return e[e.length - 1]
      }
    },
    53356: (e, t, r) => {
      "use strict";
      var n = r(49304).hp;
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.isBuffer = function(e) {
        return void 0 !== n && n.isBuffer(e)
      }
    },
    55980: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), t.toArray = function(e) {
        return Array.isArray(e) ? e : Array.from(e)
      }
    },
    63408: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(17475);
      t.isTypedArray = function(e) {
        return n.isTypedArray(e)
      }
    },
    64132: (e, t, r) => {
      "use strict";
      r.d(t, {
        V: () => d
      });
      var n = r(12115),
        a = r(95295),
        i = r(43527),
        o = r(24385);

      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var u = ["axis"],
        s = c(c({}, o.W), {}, {
          layout: "centric",
          startAngle: 90,
          endAngle: -270
        }),
        d = (0, n.forwardRef)((e, t) => {
          var r = (0, i.e)(e, s);
          return n.createElement(o.t, {
            chartName: "RadarChart",
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: u,
            tooltipPayloadSearcher: a.uN,
            categoricalChartProps: r,
            ref: t
          })
        })
    },
    65251: (e, t, r) => {
      "use strict";
      r.d(t, {
        Vd: () => ec,
        TZ: () => q
      });
      var n = r(12115),
        a = r(39766),
        i = r.n(a),
        o = r(29722),
        l = r(92191),
        c = r(21739),
        u = r(39168),
        s = r(94143),
        d = r(11058),
        p = r(85545),
        y = r(48661),
        f = r(46664),
        m = r(96561),
        v = r(2842),
        h = r(39252),
        g = r(96173),
        b = r(57346),
        O = r(65372),
        x = r(98858);

      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? E(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var P = (e, t) => (0, h.Qr)(e, "radiusAxis", t),
        w = (0, v.Mz)([P], e => {
          if (null != e) return {
            scale: e
          }
        }),
        A = (0, v.Mz)([g.Gl, P], (e, t) => {
          if (null != e && null != t) return j(j({}, e), {}, {
            scale: t
          })
        }),
        S = (e, t, r) => (0, g.Be)(e, r),
        I = (e, t, r) => (0, h.Qr)(e, "angleAxis", r),
        k = (0, v.Mz)([S, I], (e, t) => {
          if (null != e && null != t) return j(j({}, e), {}, {
            scale: t
          })
        }),
        M = (0, v.Mz)([S, I, g.D0], (e, t, r) => {
          if (null != r && null != t) return {
            scale: t,
            type: e.type,
            dataKey: e.dataKey,
            cx: r.cx,
            cy: r.cy
          }
        }),
        T = (0, v.Mz)([O.fz, A, (e, t, r, n) => (0, h.YF)(e, "radiusAxis", t, n), k, (e, t, r, n) => (0, h.YF)(e, "angleAxis", r, n)], (e, t, r, n, a) => (0, u._L)(e, "radiusAxis") ? (0, u.Hj)(t, r, !1) : (0, u.Hj)(n, a, !1)),
        z = (0, v.Mz)([x.nz, (e, t, r, n, a) => a], (e, t) => {
          if (null != e) {
            var r = e.find(e => "radar" === e.type && t === e.id);
            return null == r ? void 0 : r.dataKey
          }
        }),
        D = (0, v.Mz)([w, M, b.z3, z, T], (e, t, r, n, a) => {
          var {
            chartData: i,
            dataStartIndex: o,
            dataEndIndex: l
          } = r;
          if (null != e && null != t && null != i && null != a && null != n) return q({
            radiusAxis: e,
            angleAxis: t,
            displayedData: i.slice(o, l + 1),
            dataKey: n,
            bandSize: a
          })
        }),
        N = r(10365),
        K = r(64105),
        R = r(45970),
        C = r(45992),
        W = r(604),
        L = r(9629),
        G = r(23651),
        B = r(74211),
        F = r(55359),
        Z = r(43527),
        V = r(10483),
        Y = r(51531),
        H = ["id"];

      function $() {
        return ($ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? J(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Q(e, t) {
        return e && "none" !== e ? e : t
      }
      var _ = n.memo(e => {
        var {
          dataKey: t,
          stroke: r,
          strokeWidth: a,
          fill: i,
          name: o,
          hide: c,
          tooltipType: s,
          id: d
        } = e, p = {
          dataDefinedOnItem: void 0,
          getPosition: l.lQ,
          settings: {
            stroke: r,
            strokeWidth: a,
            fill: i,
            nameKey: void 0,
            dataKey: t,
            name: (0, u.uM)(o, t),
            hide: c,
            type: s,
            color: Q(r, i),
            unit: "",
            graphicalItemId: d
          }
        };
        return n.createElement(m.r, {
          tooltipEntrySettings: p
        })
      });

      function X(e) {
        var {
          points: t,
          props: r
        } = e, {
          dot: a,
          dataKey: i
        } = r, {
          id: o
        } = r, l = function(e, t) {
          if (null == e) return {};
          var r, n, a = function(e, t) {
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
            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
          }
          return a
        }(r, H), c = (0, G.uZ)(l);
        return n.createElement(y.n, {
          points: t,
          dot: a,
          className: "recharts-radar-dots",
          dotClassName: "recharts-radar-dot",
          dataKey: i,
          baseProps: c
        })
      }

      function q(e) {
        var {
          radiusAxis: t,
          angleAxis: r,
          displayedData: n,
          dataKey: a,
          bandSize: o
        } = e, {
          cx: s,
          cy: d
        } = r, p = !1, y = [], f = "number" !== r.type && null != o ? o : 0;
        n.forEach((e, n) => {
          var o, m, v = (0, u.kr)(e, r.dataKey, n),
            h = (0, u.kr)(e, a),
            g = (null != (o = r.scale.map(v)) ? o : 0) + f,
            b = Array.isArray(h) ? i()(h) : h,
            O = (0, l.uy)(b) ? 0 : null != (m = t.scale.map(b)) ? m : 0;
          Array.isArray(h) && h.length >= 2 && (p = !0), y.push(U(U({}, (0, c.IZ)(s, d, O, g)), {}, {
            name: v,
            value: h,
            cx: s,
            cy: d,
            radius: O,
            angle: g,
            payload: e
          }))
        });
        var m = [];
        return p && y.forEach(e => {
          if (Array.isArray(e.value)) {
            var r, n = e.value[0],
              a = (0, l.uy)(n) ? 0 : null != (r = t.scale.map(n)) ? r : 0;
            m.push(U(U({}, e), {}, {
              radius: a
            }, (0, c.IZ)(s, d, a, e.angle)))
          } else m.push(e)
        }), {
          points: y,
          isRange: p,
          baseLinePoints: m
        }
      }

      function ee(e) {
        var {
          showLabels: t,
          points: r,
          children: a
        } = e, i = r.map(e => {
          var t, r = {
            x: e.x,
            y: e.y,
            width: 0,
            lowerWidth: 0,
            upperWidth: 0,
            height: 0
          };
          return U(U({}, r), {}, {
            value: null != (t = e.value) ? t : "",
            payload: e.payload,
            parentViewBox: void 0,
            viewBox: r,
            fill: void 0
          })
        });
        return n.createElement(p.h8, {
          value: t ? i : void 0
        }, a)
      }

      function et(e) {
        var t, {
          points: r,
          baseLinePoints: a,
          props: i
        } = e;
        if (null == r) return null;
        var {
          shape: o,
          isRange: l,
          connectNulls: c
        } = i;
        return t = n.isValidElement(o) ? n.cloneElement(o, U(U({}, i), {}, {
          points: r
        })) : "function" == typeof o ? o(U(U({}, i), {}, {
          points: r
        })) : n.createElement(s.t, $({}, (0, F.a)(i), {
          onMouseEnter: e => {
            var {
              onMouseEnter: t
            } = i;
            t && t(i, e)
          },
          onMouseLeave: e => {
            var {
              onMouseLeave: t
            } = i;
            t && t(i, e)
          },
          points: r,
          baseLinePoints: l ? a : void 0,
          connectNulls: c
        })), n.createElement(d.W, {
          className: "recharts-radar-polygon"
        }, t, n.createElement(X, {
          props: i,
          points: r
        }))
      }
      var er = (e, t, r) => (n, a) => {
        var i = e && e[Math.floor(a * t)];
        return i ? U(U({}, n), {}, {
          x: (0, l.GW)(i.x, n.x, r),
          y: (0, l.GW)(i.y, n.y, r)
        }) : U(U({}, n), {}, {
          x: (0, l.GW)(n.cx, n.x, r),
          y: (0, l.GW)(n.cy, n.y, r)
        })
      };

      function en(e) {
        var {
          props: t,
          previousPointsRef: r,
          previousBaseLinePointsRef: a
        } = e, {
          points: i,
          baseLinePoints: o,
          isAnimationActive: l,
          animationBegin: c,
          animationDuration: u,
          animationEasing: s,
          onAnimationEnd: d,
          onAnimationStart: y
        } = t, f = r.current, m = a.current, v = f ? f.length / i.length : 1, h = m ? m.length / o.length : 1, g = (0, C.n)(t, "recharts-radar-"), [b, O] = (0, n.useState)(!1), x = (0, n.useCallback)(() => {
          "function" == typeof d && d(), O(!1)
        }, [d]), E = (0, n.useCallback)(() => {
          "function" == typeof y && y(), O(!0)
        }, [y]);
        return n.createElement(ee, {
          showLabels: !b,
          points: i
        }, n.createElement(B.J, {
          animationId: g,
          begin: c,
          duration: u,
          isActive: l,
          easing: s,
          key: "radar-".concat(g),
          onAnimationEnd: x,
          onAnimationStart: E
        }, e => {
          var l = 1 === e ? i : i.map(er(f, v, e)),
            c = 1 === e ? o : null == o ? void 0 : o.map(er(m, h, e));
          return e > 0 && (r.current = l, a.current = c), n.createElement(et, {
            points: l,
            baseLinePoints: c,
            props: t
          })
        }), n.createElement(p.qY, {
          label: t.label
        }), t.children)
      }

      function ea(e) {
        var t = (0, n.useRef)(void 0),
          r = (0, n.useRef)(void 0);
        return n.createElement(en, {
          props: e,
          previousPointsRef: t,
          previousBaseLinePointsRef: r
        })
      }
      var ei = {
        activeDot: !0,
        angleAxisId: 0,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
        dot: !1,
        hide: !1,
        isAnimationActive: "auto",
        label: !1,
        legendType: "rect",
        radiusAxisId: 0,
        zIndex: Y.I.area
      };

      function eo(e) {
        var {
          hide: t,
          className: r,
          points: a
        } = e;
        if (t) return null;
        var i = (0, o.$)("recharts-radar", r);
        return n.createElement(V.g, {
          zIndex: e.zIndex
        }, n.createElement(d.W, {
          className: i
        }, n.createElement(ea, e)), n.createElement(f.W, {
          points: a,
          mainColor: Q(e.stroke, e.fill),
          itemDataKey: e.dataKey,
          activeDot: e.activeDot
        }))
      }

      function el(e) {
        var t = (0, K.r)(),
          r = (0, N.G)(r => D(r, e.radiusAxisId, e.angleAxisId, t, e.id));
        return (null == r ? void 0 : r.points) == null ? null : n.createElement(eo, $({}, e, {
          points: null == r ? void 0 : r.points,
          baseLinePoints: null == r ? void 0 : r.baseLinePoints,
          isRange: null == r ? void 0 : r.isRange
        }))
      }

      function ec(e) {
        var t = (0, Z.e)(e, ei);
        return n.createElement(W.x, {
          id: t.id,
          type: "radar"
        }, e => n.createElement(n.Fragment, null, n.createElement(L.v, {
          type: "radar",
          id: e,
          data: void 0,
          dataKey: t.dataKey,
          hide: t.hide,
          angleAxisId: t.angleAxisId,
          radiusAxisId: t.radiusAxisId
        }), n.createElement(R._, {
          legendPayload: (e => {
            var {
              dataKey: t,
              name: r,
              stroke: n,
              fill: a,
              legendType: i,
              hide: o
            } = e;
            return [{
              inactive: o,
              dataKey: t,
              type: i,
              color: Q(n, a),
              value: (0, u.uM)(r, t),
              payload: e
            }]
          })(t)
        }), n.createElement(_, {
          dataKey: t.dataKey,
          stroke: t.stroke,
          strokeWidth: t.strokeWidth,
          fill: t.fill,
          name: t.name,
          hide: t.hide,
          tooltipType: t.tooltipType,
          id: e
        }), n.createElement(el, $({}, t, {
          id: e
        }))))
      }
      ec.displayName = "Radar"
    },
    68139: (e, t, r) => {
      e.exports = r(27407).minBy
    },
    68444: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => l
      });
      var n = r(12115),
        a = r(95295),
        i = r(80598),
        o = ["axis"],
        l = (0, n.forwardRef)((e, t) => n.createElement(i.P, {
          chartName: "ComposedChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: o,
          tooltipPayloadSearcher: a.uN,
          categoricalChartProps: e,
          ref: t
        }))
    },
    72563: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => K
      });
      var n = r(12115),
        a = r(34125),
        i = r.n(a),
        o = r(68139),
        l = r.n(o),
        c = r(29722),
        u = r(74254),
        s = r(85663),
        d = r(11058),
        p = r(21739),
        y = r(18387),
        f = r(34378),
        m = r(10365),
        v = r(39252),
        h = r(96173),
        g = r(75442),
        b = r(23651),
        O = r(43527),
        x = r(10483),
        E = r(65372),
        j = r(92191),
        P = r(87485),
        w = r(43665),
        A = ["type"],
        S = ["cx", "cy", "angle", "axisLine"],
        I = ["angle", "tickFormatter", "stroke", "tick"];

      function k() {
        return (k = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function z(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
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
          for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }

      function D(e) {
        var t = (0, m.j)(),
          r = (0, E.KD)(),
          a = (0, n.useMemo)(() => {
            var {
              type: t
            } = e, n = z(e, A), a = (0, P.a)(r, "radiusAxis", t);
            if (null != a) return T(T({}, n), {}, {
              type: a
            })
          }, [e, r]);
        return (0, n.useEffect)(() => null == a ? j.lQ : (t((0, f.zo)(a)), () => {
          t((0, f.Sb)(a))
        }), [t, a]), null
      }
      var N = e => {
        var t, r, a, o, f, {
            radiusAxisId: g
          } = e,
          O = (0, m.G)(h.D0),
          E = (0, m.G)(e => (0, v.Qr)(e, "radiusAxis", g)),
          j = (0, m.G)(e => (0, v.YF)(e, "radiusAxis", g, !1));
        if (null == O || !j || !j.length || null == E) return null;
        var P = T(T({}, e), {}, {
            scale: E
          }, O),
          {
            tick: A,
            axisLine: M
          } = P;
        return n.createElement(x.g, {
          zIndex: P.zIndex
        }, n.createElement(d.W, {
          className: (0, c.$)("recharts-polar-radius-axis", "radiusAxis", P.className)
        }, M && ((e, t) => {
          var {
            cx: r,
            cy: a,
            angle: i,
            axisLine: o
          } = e, l = z(e, S), c = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [1 / 0, -1 / 0]), u = (0, p.IZ)(r, a, c[0], i), s = (0, p.IZ)(r, a, c[1], i), d = T(T(T({}, (0, b.uZ)(l)), {}, {
            fill: "none"
          }, (0, b.uZ)(o)), {}, {
            x1: u.x,
            y1: u.y,
            x2: s.x,
            y2: s.y
          });
          return n.createElement("line", k({
            className: "recharts-polar-radius-axis-line"
          }, d))
        })(P, j), A && ((e, t) => {
          var {
            angle: r,
            tickFormatter: a,
            stroke: i,
            tick: o
          } = e, l = z(e, I), s = (e => {
            var t;
            switch (e) {
              case "left":
                t = "end";
                break;
              case "right":
                t = "start";
                break;
              default:
                t = "middle"
            }
            return t
          })(e.orientation), f = (0, b.uZ)(l), m = (0, b.ic)(o), v = t.map((t, l) => {
            var v, h = ((e, t, r, n) => {
                var {
                  coordinate: a
                } = e;
                return (0, p.IZ)(r, n, a, t)
              })(t, e.angle, e.cx, e.cy),
              g = T(T(T(T({
                textAnchor: s,
                transform: "rotate(".concat(90 - r, ", ").concat(h.x, ", ").concat(h.y, ")")
              }, f), {}, {
                stroke: "none",
                fill: i
              }, m), {}, {
                index: l
              }, h), {}, {
                payload: t
              });
            return n.createElement(d.W, k({
              className: (0, c.$)("recharts-polar-radius-axis-tick", (0, w.I)(o)),
              key: "tick-".concat(t.coordinate)
            }, (0, y.XC)(e, t, l)), (v = a ? a(t.value, l) : t.value, n.isValidElement(o) ? n.cloneElement(o, g) : "function" == typeof o ? o(g) : n.createElement(u.EY, k({}, g, {
              className: "recharts-polar-radius-axis-tick-value"
            }), v)))
          });
          return n.createElement(d.W, {
            className: "recharts-polar-radius-axis-ticks"
          }, v)
        })(P, j), n.createElement(s.$w, (t = P.angle, r = P.cx, a = P.cy, o = i()(j, e => e.coordinate || 0), {
          cx: r,
          cy: a,
          startAngle: t,
          endAngle: t,
          innerRadius: (null == (f = l()(j, e => e.coordinate || 0)) ? void 0 : f.coordinate) || 0,
          outerRadius: (null == o ? void 0 : o.coordinate) || 0,
          clockWise: !1
        }), n.createElement(s.mr, {
          label: P.label
        }), P.children)))
      };

      function K(e) {
        var t, r = (0, O.e)(e, g.j);
        return n.createElement(n.Fragment, null, n.createElement(D, {
          domain: r.domain,
          id: r.radiusAxisId,
          scale: r.scale,
          type: r.type,
          dataKey: r.dataKey,
          unit: void 0,
          name: r.name,
          allowDuplicatedCategory: r.allowDuplicatedCategory,
          allowDataOverflow: r.allowDataOverflow,
          reversed: r.reversed,
          includeHidden: r.includeHidden,
          allowDecimals: r.allowDecimals,
          niceTicks: null != (t = r.niceTicks) ? t : "auto",
          ticks: r.ticks,
          tickCount: r.tickCount,
          tick: r.tick
        }), n.createElement(N, r))
      }
      K.displayName = "PolarRadiusAxis"
    },
    75670: (e, t, r) => {
      "use strict";
      r.d(t, {
        Xl: () => ei,
        Jt: () => ee
      });
      var n = r(12115),
        a = r(29722),
        i = r(11058),
        o = r(85545),
        l = r(21966),
        c = r(37214),
        u = r(67389),
        s = r(92191),
        d = r(39168),
        p = r(18387),
        y = r(93972),
        f = r(46197),
        m = ["option", "isActive"];

      function v() {
        return (v = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function h(e) {
        var {
          option: t,
          isActive: r
        } = e, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = function(e, t) {
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
            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
          }
          return a
        }(e, m);
        return "string" == typeof t ? n.createElement(f.y, v({
          option: n.createElement(y.i, v({
            type: t
          }, a)),
          isActive: r,
          shapeType: "symbols"
        }, a)) : n.createElement(f.y, v({
          option: t,
          isActive: r,
          shapeType: "symbols"
        }, a))
      }
      var g = r(94051),
        b = r(96561),
        O = r(17753),
        x = r(36793),
        E = r(2842),
        j = r(57346),
        P = r(44531),
        w = (0, E.Mz)([P.ld, (e, t, r, n, a) => a], (e, t) => e.filter(e => "scatter" === e.type).find(e => e.id === t)),
        A = (0, E.Mz)([(e, t, r, n, a, i, o) => (0, j.k$)(e, void 0, void 0, o), (e, t, r, n, a, i, o) => (0, P.Gx)(e, "xAxis", t, o), (e, t, r, n, a, i, o) => (0, P.CR)(e, "xAxis", t, o), (e, t, r, n, a, i, o) => (0, P.Gx)(e, "yAxis", r, o), (e, t, r, n, a, i, o) => (0, P.CR)(e, "yAxis", r, o), (e, t, r, n) => (0, P.Y)(e, "zAxis", n, !1), w, (e, t, r, n, a, i) => i], (e, t, r, n, a, i, o, l) => {
          var c, {
            chartData: u,
            dataStartIndex: s,
            dataEndIndex: d
          } = e;
          if (null != o && null != (c = (null == o ? void 0 : o.data) != null && o.data.length > 0 ? o.data : null == u ? void 0 : u.slice(s, d + 1)) && null != t && null != n && null != r && null != a && (null == r ? void 0 : r.length) !== 0 && (null == a ? void 0 : a.length) !== 0) return ee({
            displayedData: c,
            xAxis: t,
            yAxis: n,
            zAxis: i,
            scatterSettings: o,
            xAxisTicks: r,
            yAxisTicks: a,
            cells: l
          })
        }),
        S = r(10365),
        I = r(64105),
        k = r(541),
        M = r(45970),
        T = r(71615),
        z = r(45992),
        D = r(43527),
        N = r(604),
        K = r(9629),
        R = r(23651),
        C = r(74211),
        W = r(65372),
        L = r(10483),
        G = r(51531),
        B = r(46574),
        F = ["id"],
        Z = ["onMouseEnter", "onClick", "onMouseLeave"],
        V = ["animationBegin", "animationDuration", "animationEasing", "hide", "isAnimationActive", "legendType", "lineJointType", "lineType", "shape", "xAxisId", "yAxisId", "zAxisId"];

      function Y(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
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
          for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }

      function H() {
        return (H = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var U = n.memo(e => {
        var {
          dataKey: t,
          points: r,
          stroke: a,
          strokeWidth: i,
          fill: o,
          name: l,
          hide: c,
          tooltipType: u,
          id: s
        } = e, p = {
          dataDefinedOnItem: null == r ? void 0 : r.map(e => e.tooltipPayload),
          getPosition: e => {
            var t;
            return null == r || null == (t = r[Number(e)]) ? void 0 : t.tooltipPosition
          },
          settings: {
            stroke: a,
            strokeWidth: i,
            fill: o,
            nameKey: void 0,
            dataKey: t,
            name: (0, d.uM)(l, t),
            hide: c,
            type: u,
            color: o,
            unit: "",
            graphicalItemId: s
          }
        };
        return n.createElement(b.r, {
          tooltipEntrySettings: p
        })
      });

      function Q(e) {
        var t, r, {
            points: a,
            props: o
          } = e,
          {
            line: l,
            lineType: u,
            lineJointType: d
          } = o;
        if (!l) return null;
        var p = (0, R.uZ)(o),
          y = (0, R.ic)(l);
        if ("joint" === u) t = a.map(e => {
          var t, r;
          return {
            x: null != (t = e.cx) ? t : null,
            y: null != (r = e.cy) ? r : null
          }
        });
        else if ("fitting" === u) {
          var {
            xmin: f,
            xmax: m,
            a: v,
            b: h
          } = (0, s.jG)(a);
          t = [{
            x: f,
            y: v * f + h
          }, {
            x: m,
            y: v * m + h
          }]
        }
        var g = J(J(J({}, p), {}, {
          fill: "none",
          stroke: p && p.fill
        }, y), {}, {
          points: t
        });
        return r = n.isValidElement(l) ? n.cloneElement(l, g) : "function" == typeof l ? l(g) : n.createElement(c.Ip, H({}, g, {
          type: d
        })), n.createElement(i.W, {
          className: "recharts-scatter-line",
          key: "recharts-scatter-line"
        }, r)
      }

      function _(e) {
        var {
          showLabels: t,
          points: r,
          children: a
        } = e, i = (0, W.sk)(), l = (0, n.useMemo)(() => null == r ? void 0 : r.map(e => {
          var t, r, n = {
            x: null != (t = e.x) ? t : 0,
            y: null != (r = e.y) ? r : 0,
            width: e.width,
            height: e.height,
            lowerWidth: e.width,
            upperWidth: e.width
          };
          return J(J({}, n), {}, {
            value: void 0,
            payload: e.payload,
            viewBox: n,
            parentViewBox: i,
            fill: void 0
          })
        }), [i, r]);
        return n.createElement(o.h8, {
          value: t ? l : void 0
        }, a)
      }

      function X(e) {
        var {
          points: t,
          allOtherScatterProps: r
        } = e, {
          shape: a,
          activeShape: o,
          dataKey: l
        } = r, {
          id: c
        } = r, u = Y(r, F), s = (0, S.G)(k.A2), {
          onMouseEnter: d,
          onClick: y,
          onMouseLeave: f
        } = r, m = Y(r, Z), v = (0, g.Cj)(d, l, c), b = (0, g.Pg)(f), O = (0, g.Ub)(y, l, c);
        if (!(0, p.EI)(t)) return null;
        var x = (0, R.uZ)(u);
        return n.createElement(n.Fragment, null, n.createElement(Q, {
          points: t,
          props: u
        }), t.map((e, t) => {
          var r = null != o && !1 !== o,
            l = r && s === String(t),
            u = r && l ? o : a,
            d = J(J(J({}, x), e), {}, {
              index: t,
              [T.yU]: String(c)
            });
          return n.createElement(L.g, {
            key: "symbol-".concat(null == e ? void 0 : e.cx, "-").concat(null == e ? void 0 : e.cy, "-").concat(null == e ? void 0 : e.size, "-").concat(t),
            zIndex: l ? G.I.activeDot : void 0
          }, n.createElement(i.W, H({
            className: "recharts-scatter-symbol"
          }, (0, p.XC)(m, e, t), {
            onMouseEnter: v(e, t),
            onMouseLeave: b(e, t),
            onClick: O(e, t)
          }), n.createElement(h, H({
            option: u,
            isActive: l
          }, d))))
        }))
      }

      function q(e) {
        var {
          previousPointsRef: t,
          props: r
        } = e, {
          points: a,
          isAnimationActive: l,
          animationBegin: c,
          animationDuration: u,
          animationEasing: d
        } = r, p = t.current, y = (0, z.n)(r, "recharts-scatter-"), [f, m] = (0, n.useState)(!1), v = (0, n.useCallback)(() => {
          m(!1)
        }, []), h = (0, n.useCallback)(() => {
          m(!0)
        }, []), g = !f;
        return n.createElement(_, {
          showLabels: g,
          points: a
        }, r.children, n.createElement(C.J, {
          animationId: y,
          begin: c,
          duration: u,
          isActive: l,
          easing: d,
          onAnimationEnd: v,
          onAnimationStart: h,
          key: y
        }, e => {
          var o = 1 === e ? a : null == a ? void 0 : a.map((t, r) => {
            var n = p && p[r];
            return n ? J(J({}, t), {}, {
              cx: null == t.cx ? void 0 : (0, s.GW)(n.cx, t.cx, e),
              cy: null == t.cy ? void 0 : (0, s.GW)(n.cy, t.cy, e),
              size: (0, s.GW)(n.size, t.size, e)
            }) : J(J({}, t), {}, {
              size: (0, s.GW)(0, t.size, e)
            })
          });
          return e > 0 && (t.current = o), n.createElement(i.W, null, n.createElement(X, {
            points: o,
            allOtherScatterProps: r,
            showLabels: g
          }))
        }), n.createElement(o.qY, {
          label: r.label
        }))
      }

      function ee(e) {
        var {
          displayedData: t,
          xAxis: r,
          yAxis: n,
          zAxis: a,
          scatterSettings: i,
          xAxisTicks: o,
          yAxisTicks: l,
          cells: c
        } = e, u = (0, s.uy)(r.dataKey) ? i.dataKey : r.dataKey, p = (0, s.uy)(n.dataKey) ? i.dataKey : n.dataKey, y = a && a.dataKey, f = a ? a.range : P.N8.range, m = f && f[0], v = r.scale.bandwidth ? r.scale.bandwidth() : 0, h = n.scale.bandwidth ? n.scale.bandwidth() : 0;
        return t.map((e, t) => {
          var f = (0, d.kr)(e, u),
            g = (0, d.kr)(e, p),
            b = !(0, s.uy)(y) && (0, d.kr)(e, y) || "-",
            O = [{
              name: (0, s.uy)(r.dataKey) ? i.name : r.name || String(r.dataKey),
              unit: r.unit || "",
              value: f,
              payload: e,
              dataKey: u,
              type: i.tooltipType,
              graphicalItemId: i.id
            }, {
              name: (0, s.uy)(n.dataKey) ? i.name : n.name || String(n.dataKey),
              unit: n.unit || "",
              value: g,
              payload: e,
              dataKey: p,
              type: i.tooltipType,
              graphicalItemId: i.id
            }];
          "-" !== b && null != a && O.push({
            name: a.name || a.dataKey,
            unit: a.unit || "",
            value: b,
            payload: e,
            dataKey: y,
            type: i.tooltipType,
            graphicalItemId: i.id
          });
          var x = (0, d.nb)({
              axis: r,
              ticks: o,
              bandSize: v,
              entry: e,
              index: t,
              dataKey: u
            }),
            E = (0, d.nb)({
              axis: n,
              ticks: l,
              bandSize: h,
              entry: e,
              index: t,
              dataKey: p
            }),
            j = "-" !== b && null != a ? a.scale.map(b) : m,
            P = null == j ? 0 : Math.sqrt(Math.max(j, 0) / Math.PI);
          return J(J({}, e), {}, {
            cx: x,
            cy: E,
            x: null == x ? void 0 : x - P,
            y: null == E ? void 0 : E - P,
            width: 2 * P,
            height: 2 * P,
            size: j,
            node: {
              x: f,
              y: g,
              z: b
            },
            tooltipPayload: O,
            tooltipPosition: {
              x: x,
              y: E
            },
            payload: e
          }, c && c[t] && c[t].props)
        })
      }
      var et = (e, t, r) => ({
        x: e.cx,
        y: e.cy,
        value: "x" === r ? Number(e.node.x) : Number(e.node.y),
        errorVal: (0, d.kr)(e, t)
      });

      function er(e) {
        var {
          hide: t,
          points: r,
          className: o,
          needClip: l,
          xAxisId: c,
          yAxisId: u,
          id: s
        } = e, d = (0, n.useRef)(null);
        if (t) return null;
        var p = (0, a.$)("recharts-scatter", o);
        return n.createElement(L.g, {
          zIndex: e.zIndex
        }, n.createElement(i.W, {
          className: p,
          clipPath: l ? "url(#clipPath-".concat(s, ")") : void 0,
          id: s
        }, l && n.createElement("defs", null, n.createElement(x.Q, {
          clipPathId: s,
          xAxisId: c,
          yAxisId: u
        })), n.createElement(O.zk, {
          xAxisId: c,
          yAxisId: u,
          data: r,
          dataPointFormatter: et,
          errorBarOffset: 0
        }, n.createElement(i.W, {
          key: "recharts-scatter-symbols"
        }, n.createElement(q, {
          props: e,
          previousPointsRef: d
        })))))
      }
      var en = {
        xAxisId: 0,
        yAxisId: 0,
        zAxisId: 0,
        label: !1,
        line: !1,
        legendType: "circle",
        lineType: "joint",
        lineJointType: "linear",
        shape: "circle",
        hide: !1,
        isAnimationActive: "auto",
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: "linear",
        zIndex: G.I.scatter
      };

      function ea(e) {
        var t = (0, D.e)(e, en),
          {
            animationBegin: r,
            animationDuration: a,
            animationEasing: i,
            hide: o,
            isAnimationActive: c,
            legendType: s,
            lineJointType: d,
            lineType: p,
            shape: y,
            xAxisId: f,
            yAxisId: m,
            zAxisId: v
          } = t,
          h = Y(t, V),
          {
            needClip: g
          } = (0, x.l)(f, m),
          b = (0, n.useMemo)(() => (0, l.aS)(e.children, u.f), [e.children]),
          O = (0, I.r)(),
          E = (0, S.G)(t => A(t, f, m, v, e.id, b, O));
        return null == g || null == E ? null : n.createElement(n.Fragment, null, n.createElement(U, {
          dataKey: e.dataKey,
          points: E,
          stroke: e.stroke,
          strokeWidth: e.strokeWidth,
          fill: e.fill,
          name: e.name,
          hide: e.hide,
          tooltipType: e.tooltipType,
          id: e.id
        }), n.createElement(er, H({}, h, {
          xAxisId: f,
          yAxisId: m,
          zAxisId: v,
          lineType: p,
          lineJointType: d,
          legendType: s,
          shape: y,
          hide: o,
          isAnimationActive: c,
          animationBegin: r,
          animationDuration: a,
          animationEasing: i,
          points: E,
          needClip: g
        })))
      }
      var ei = n.memo(function(e) {
        var t = (0, D.e)(e, en),
          r = (0, I.r)();
        return n.createElement(N.x, {
          id: t.id,
          type: "scatter"
        }, e => n.createElement(n.Fragment, null, n.createElement(M.A, {
          legendPayload: (e => {
            var {
              dataKey: t,
              name: r,
              fill: n,
              legendType: a,
              hide: i
            } = e;
            return [{
              inactive: i,
              dataKey: t,
              type: a,
              color: n,
              value: (0, d.uM)(r, t),
              payload: e
            }]
          })(t)
        }), n.createElement(K.p, {
          type: "scatter",
          id: e,
          data: t.data,
          xAxisId: t.xAxisId,
          yAxisId: t.yAxisId,
          zAxisId: t.zAxisId,
          dataKey: t.dataKey,
          hide: t.hide,
          name: t.name,
          tooltipType: t.tooltipType,
          isPanorama: r
        }), n.createElement(ea, H({}, t, {
          id: e
        }))))
      }, B.P);
      ei.displayName = "Scatter"
    },
    75721: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(9081),
        a = r(35679),
        i = r(73957);
      t.maxBy = function(e, t) {
        if (null != e) return n.maxBy(Array.from(e), i.iteratee(t ?? a.identity))
      }
    },
    79927: (e, t, r) => {
      e.exports = r(24048).omit
    },
    92146: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
      let n = r(74751),
        a = r(73550),
        i = r(32951),
        o = r(71542),
        l = r(38786);

      function c(e, t) {
        let r = 1 === t.length ? e : n.get(e, t.slice(0, -1)),
          i = t[t.length - 1];
        if (r?.[i] === void 0) return !0;
        if (a.isUnsafeProperty(i)) return !1;
        try {
          return delete r[i], !0
        } catch {
          return !1
        }
      }
      t.unset = function(e, t) {
        if (null == e) return !0;
        switch (typeof t) {
          case "symbol":
          case "number":
          case "object":
            if (Array.isArray(t)) return c(e, t);
            if ("number" == typeof t ? t = o.toKey(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), a.isUnsafeProperty(t)) return !1;
            if (e?.[t] === void 0) return !0;
            try {
              return delete e[t], !0
            } catch {
              return !1
            }
          case "string":
            if (e?.[t] === void 0 && i.isDeepKey(t)) return c(e, l.toPath(t));
            if (a.isUnsafeProperty(t)) return !1;
            try {
              return delete e[t], !0
            } catch {
              return !1
            }
        }
      }
    },
    96647: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => N
      });
      var n = r(12115),
        a = r(47650),
        i = r(30125),
        o = r(29722),
        l = r(67816),
        c = r(93972),
        u = r(18387),
        s = r(43527);

      function d() {
        return (d = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      var f = {
        align: "center",
        iconSize: 14,
        inactiveColor: "#ccc",
        layout: "horizontal",
        verticalAlign: "middle",
        labelStyle: {}
      };

      function m(e) {
        var {
          data: t,
          iconType: r,
          inactiveColor: a
        } = e, i = 32 / 6, o = 32 / 3, l = t.inactive ? a : t.color, u = null != r ? r : t.type;
        if ("none" === u) return null;
        if ("plainline" === u) return n.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: l,
          strokeDasharray: function(e) {
            if ("object" == typeof e && null !== e && "strokeDasharray" in e) return String(e.strokeDasharray)
          }(t.payload),
          x1: 0,
          y1: 16,
          x2: 32,
          y2: 16,
          className: "recharts-legend-icon"
        });
        if ("line" === u) return n.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: l,
          d: "M0,".concat(16, "h").concat(o, "\n            A").concat(i, ",").concat(i, ",0,1,1,").concat(2 * o, ",").concat(16, "\n            H").concat(32, "M").concat(2 * o, ",").concat(16, "\n            A").concat(i, ",").concat(i, ",0,1,1,").concat(o, ",").concat(16),
          className: "recharts-legend-icon"
        });
        if ("rect" === u) return n.createElement("path", {
          stroke: "none",
          fill: l,
          d: "M0,".concat(4, "h").concat(32, "v").concat(24, "h").concat(-32, "z"),
          className: "recharts-legend-icon"
        });
        if (n.isValidElement(t.legendIcon)) {
          var s = y({}, t);
          return delete s.legendIcon, n.cloneElement(t.legendIcon, s)
        }
        return n.createElement(c.i, {
          fill: l,
          cx: 16,
          cy: 16,
          size: 32,
          sizeType: "diameter",
          type: u
        })
      }

      function v(e) {
        var {
          payload: t,
          iconSize: r,
          layout: a,
          formatter: i,
          inactiveColor: c,
          iconType: s,
          labelStyle: p
        } = e, f = {
          x: 0,
          y: 0,
          width: 32,
          height: 32
        }, v = {
          display: "horizontal" === a ? "inline-block" : "block",
          marginRight: 10
        }, h = {
          display: "inline-block",
          verticalAlign: "middle",
          marginRight: 4
        };
        return t.map((t, a) => {
          var g = t.formatter || i,
            b = (0, o.$)({
              "recharts-legend-item": !0,
              ["legend-item-".concat(a)]: !0,
              inactive: t.inactive
            });
          if ("none" === t.type) return null;
          var O = "object" == typeof p ? y({}, p) : {};
          O.color = t.inactive ? c : O.color || t.color;
          var x = g ? g(t.value, t, a) : t.value;
          return n.createElement("li", d({
            className: b,
            style: v,
            key: "legend-item-".concat(a)
          }, (0, u.XC)(e, t, a)), n.createElement(l.u, {
            width: r,
            height: r,
            viewBox: f,
            style: h,
            "aria-label": "".concat(x, " legend icon")
          }, n.createElement(m, {
            data: t,
            iconType: s,
            inactiveColor: c
          })), n.createElement("span", {
            className: "recharts-legend-item-text",
            style: O
          }, x))
        })
      }
      var h = e => {
          var t = (0, s.e)(e, f),
            {
              payload: r,
              layout: a,
              align: i
            } = t;
          return r && r.length ? n.createElement("ul", {
            className: "recharts-default-legend",
            style: {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === a ? i : "left"
            }
          }, n.createElement(v, d({}, t, {
            payload: r
          }))) : null
        },
        g = r(1760),
        b = r(10365),
        O = r(33313),
        x = r(2644),
        E = r(65372),
        j = r(51124),
        P = r(46574),
        w = ["contextPayload"];

      function A() {
        return (A = Object.assign ? Object.assign.bind() : function(e) {
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

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach(function(t) {
            var n, a, i;
            n = e, a = t, i = r[t], (a = function(e) {
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
            }(a)) in n ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function k(e) {
        return e.value
      }

      function M(e) {
        var {
          contextPayload: t
        } = e, r = function(e, t) {
          if (null == e) return {};
          var r, n, a = function(e, t) {
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
            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (a[r] = e[r])
          }
          return a
        }(e, w), a = (0, g.s)(t, e.payloadUniqBy, k), i = I(I({}, r), {}, {
          payload: a
        });
        return n.isValidElement(e.content) ? n.cloneElement(e.content, i) : "function" == typeof e.content ? n.createElement(e.content, i) : n.createElement(h, i)
      }

      function T(e) {
        var t = (0, b.j)();
        return (0, n.useEffect)(() => {
          t((0, j.h1)(e))
        }, [t, e]), null
      }

      function z(e) {
        var t = (0, b.j)();
        return (0, n.useEffect)(() => (t((0, j.hx)(e)), () => {
          t((0, j.hx)({
            width: 0,
            height: 0
          }))
        }), [t, e]), null
      }
      var D = {
          align: "center",
          iconSize: 14,
          inactiveColor: "#ccc",
          itemSorter: "value",
          layout: "horizontal",
          verticalAlign: "bottom"
        },
        N = n.memo(function(e) {
          var t, r = (0, s.e)(e, D),
            o = (0, b.G)(O.g0),
            l = (0, i.M)(),
            c = (0, E.Kp)(),
            {
              width: u,
              height: d,
              wrapperStyle: p,
              portal: y
            } = r,
            [f, m] = (0, x.V)([o]),
            v = (0, E.yi)(),
            h = (0, E.rY)();
          if (null == v || null == h) return null;
          var g = v - ((null == c ? void 0 : c.left) || 0) - ((null == c ? void 0 : c.right) || 0),
            j = (t = r.layout, "vertical" === t && null != d ? {
              height: d
            } : "horizontal" === t ? {
              width: u || g
            } : null),
            P = y ? p : I(I({
              position: "absolute",
              width: (null == j ? void 0 : j.width) || u || "auto",
              height: (null == j ? void 0 : j.height) || d || "auto"
            }, function(e, t, r, n, a, i) {
              var o, l, {
                layout: c,
                align: u,
                verticalAlign: s
              } = t;
              return e && (void 0 !== e.left && null !== e.left || void 0 !== e.right && null !== e.right) || (o = "center" === u && "vertical" === c ? {
                left: ((n || 0) - i.width) / 2
              } : "right" === u ? {
                right: r && r.right || 0
              } : {
                left: r && r.left || 0
              }), e && (void 0 !== e.top && null !== e.top || void 0 !== e.bottom && null !== e.bottom) || (l = "middle" === s ? {
                top: ((a || 0) - i.height) / 2
              } : "bottom" === s ? {
                bottom: r && r.bottom || 0
              } : {
                top: r && r.top || 0
              }), I(I({}, o), l)
            }(p, r, c, v, h, f)), p),
            w = null != y ? y : l;
          if (null == w || null == o) return null;
          var S = n.createElement("div", {
            className: "recharts-legend-wrapper",
            style: P,
            ref: m
          }, n.createElement(T, {
            layout: r.layout,
            align: r.align,
            verticalAlign: r.verticalAlign,
            itemSorter: r.itemSorter
          }), !y && n.createElement(z, {
            width: f.width,
            height: f.height
          }), n.createElement(M, A({}, r, j, {
            margin: c,
            chartWidth: v,
            chartHeight: h,
            contextPayload: o
          })));
          return (0, a.createPortal)(S, w)
        }, P.P);
      N.displayName = "Legend"
    }
  }
]);