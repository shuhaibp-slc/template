"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2061], {
    7686: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("heart", [
        ["path", {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0"
        }]
      ])
    },
    18460: (e, r, t) => {
      t.d(r, {
        F: () => i
      });
      var n = t(29722);
      let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        l = n.$,
        i = (e, r) => t => {
          var n;
          if ((null == r ? void 0 : r.variants) == null) return l(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
          let {
            variants: i,
            defaultVariants: o
          } = r, c = Object.keys(i).map(e => {
            let r = null == t ? void 0 : t[e],
              n = null == o ? void 0 : o[e];
            if (null === r) return null;
            let l = a(r) || a(n);
            return i[e][l]
          }), u = t && Object.entries(t).reduce((e, r) => {
            let [t, n] = r;
            return void 0 === n || (e[t] = n), e
          }, {});
          return l(e, c, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, r) => {
            let {
              class: t,
              className: n,
              ...a
            } = r;
            return Object.entries(a).every(e => {
              let [r, t] = e;
              return Array.isArray(t) ? t.includes({
                ...o,
                ...u
              } [r]) : ({
                ...o,
                ...u
              })[r] === t
            }) ? [...e, t, n] : e
          }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
        }
    },
    21454: (e, r, t) => {
      t.d(r, {
        x: () => a
      });
      var n = t(23651);

      function a(e) {
        var r = (0, n.ic)(e);
        if (null != r) {
          var {
            r: t,
            strokeWidth: a
          } = r, l = Number(t), i = Number(a);
          return (Number.isNaN(l) || l < 0) && (l = 3), (Number.isNaN(i) || i < 0) && (i = 2), {
            r: l,
            strokeWidth: i
          }
        }
        return {
          r: 3,
          strokeWidth: 2
        }
      }
    },
    41585: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("triangle-alert", [
        ["path", {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
          key: "wmoenq"
        }],
        ["path", {
          d: "M12 9v4",
          key: "juzpu7"
        }],
        ["path", {
          d: "M12 17h.01",
          key: "p32p05"
        }]
      ])
    },
    44071: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("trending-up", [
        ["path", {
          d: "M16 7h6v6",
          key: "box55l"
        }],
        ["path", {
          d: "m22 7-8.5 8.5-5-5L2 17",
          key: "1t1m79"
        }]
      ])
    },
    46664: (e, r, t) => {
      t.d(r, {
        W: () => b
      });
      var n = t(12115),
        a = t(18387),
        l = t(72858),
        i = t(11058),
        o = t(10365),
        c = t(541),
        u = t(57747),
        s = t(92191),
        d = t(23651),
        f = t(10483),
        p = t(51531);

      function v(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? v(Object(t), !0).forEach(function(r) {
            var n, a, l;
            n = e, a = r, l = t[r], (a = function(e) {
              var r = function(e, r) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, r || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof r ? r : r + ""
            }(a)) in n ? Object.defineProperty(n, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = l
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }
      var y = e => {
        var r, {
          point: t,
          childIndex: o,
          mainColor: c,
          activeDot: u,
          dataKey: s,
          clipPath: f
        } = e;
        if (!1 === u || null == t.x || null == t.y) return null;
        var p = m(m(m({}, {
          index: o,
          dataKey: s,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: null != c ? c : "none",
          strokeWidth: 2,
          stroke: "#fff",
          payload: t.payload,
          value: t.value
        }), (0, d.ic)(u)), (0, a._U)(u));
        return r = (0, n.isValidElement)(u) ? (0, n.cloneElement)(u, p) : "function" == typeof u ? u(p) : n.createElement(l.c, p), n.createElement(i.W, {
          className: "recharts-active-dot",
          clipPath: f
        }, r)
      };

      function b(e) {
        var {
          points: r,
          mainColor: t,
          activeDot: a,
          itemDataKey: l,
          clipPath: i,
          zIndex: d = p.I.activeDot
        } = e, v = (0, o.G)(c.A2), m = (0, u.EI)();
        if (null == r || null == m) return null;
        var b = r.find(e => m.includes(e.payload));
        return (0, s.uy)(b) ? null : n.createElement(f.g, {
          zIndex: d
        }, n.createElement(y, {
          point: b,
          childIndex: Number(v),
          mainColor: t,
          dataKey: l,
          activeDot: a,
          clipPath: i
        }))
      }
    },
    48661: (e, r, t) => {
      t.d(r, {
        n: () => y
      });
      var n = t(12115),
        a = t(29722),
        l = t(72858),
        i = t(11058),
        o = t(21966),
        c = t(55359),
        u = t(10483),
        s = t(51531),
        d = ["points"];

      function f(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? f(Object(t), !0).forEach(function(r) {
            var n, a, l;
            n = e, a = r, l = t[r], (a = function(e) {
              var r = function(e, r) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, r || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof r ? r : r + ""
            }(a)) in n ? Object.defineProperty(n, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = l
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function v() {
        return (v = Object.assign ? Object.assign.bind() : function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }).apply(null, arguments)
      }

      function m(e) {
        var {
          option: r,
          dotProps: t,
          className: i
        } = e;
        if ((0, n.isValidElement)(r)) return (0, n.cloneElement)(r, t);
        if ("function" == typeof r) return r(t);
        var o = (0, a.$)(i, "boolean" != typeof r ? r.className : ""),
          c = null != t ? t : {},
          {
            points: u
          } = c,
          s = function(e, r) {
            if (null == e) return {};
            var t, n, a = function(e, r) {
              if (null == e) return {};
              var t = {};
              for (var n in e)
                if (({}).hasOwnProperty.call(e, n)) {
                  if (-1 !== r.indexOf(n)) continue;
                  t[n] = e[n]
                } return t
            }(e, r);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (n = 0; n < l.length; n++) t = l[n], -1 === r.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (a[t] = e[t])
            }
            return a
          }(c, d);
        return n.createElement(l.c, v({}, s, {
          className: o
        }))
      }

      function y(e) {
        var {
          points: r,
          dot: t,
          className: a,
          dotClassName: l,
          dataKey: d,
          baseProps: f,
          needClip: y,
          clipPathId: b,
          zIndex: h = s.I.scatter
        } = e;
        if (null == r || !t && 1 !== r.length) return null;
        var g = (0, o.y$)(t),
          O = (0, c.y)(t),
          w = r.map((e, a) => {
            var i, o, c = p(p(p({
              r: 3
            }, f), O), {}, {
              index: a,
              cx: null != (i = e.x) ? i : void 0,
              cy: null != (o = e.y) ? o : void 0,
              dataKey: d,
              value: e.value,
              payload: e.payload,
              points: r
            });
            return n.createElement(m, {
              key: "dot-".concat(a),
              option: t,
              dotProps: c,
              className: l
            })
          }),
          j = {};
        return y && null != b && (j.clipPath = "url(#clipPath-".concat(g ? "" : "dots-").concat(b, ")")), n.createElement(u.g, {
          zIndex: h
        }, n.createElement(i.W, v({
          className: a
        }, j), w))
      }
    },
    50061: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("droplets", [
        ["path", {
          d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
          key: "1ptgy4"
        }],
        ["path", {
          d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
          key: "1sl1rz"
        }]
      ])
    },
    55078: (e, r, t) => {
      t.d(r, {
        E: () => o
      });
      var n = t(95155);
      t(12115);
      var a = t(18460),
        l = t(39055);
      let i = (0, a.F)("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
          variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-sm",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm",
            success: "border-transparent bg-success text-success-foreground shadow-sm",
            warning: "border-transparent bg-warning text-warning-foreground shadow-sm",
            outline: "text-foreground"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      });

      function o({
        className: e,
        variant: r,
        ...t
      }) {
        return (0, n.jsx)("div", {
          className: (0, l.cn)(i({
            variant: r
          }), e),
          ...t
        })
      }
    },
    67514: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("trending-down", [
        ["path", {
          d: "M16 17h6v-6",
          key: "t6n2it"
        }],
        ["path", {
          d: "m22 17-8.5-8.5-5 5L2 7",
          key: "x473p"
        }]
      ])
    },
    72858: (e, r, t) => {
      t.d(r, {
        c: () => u
      });
      var n = t(12115),
        a = t(29722),
        l = t(18387),
        i = t(23651),
        o = t(92191);

      function c() {
        return (c = Object.assign ? Object.assign.bind() : function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }).apply(null, arguments)
      }
      var u = e => {
        var {
          cx: r,
          cy: t,
          r: u,
          className: s
        } = e, d = (0, a.$)("recharts-dot", s);
        return (0, o.Et)(r) && (0, o.Et)(t) && (0, o.Et)(u) ? n.createElement("circle", c({}, (0, i.uZ)(e), (0, l._U)(e), {
          className: d,
          cx: r,
          cy: t,
          r: u
        })) : null
      }
    },
    74526: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("thermometer", [
        ["path", {
          d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
          key: "17jzev"
        }]
      ])
    },
    74666: (e, r, t) => {
      t.d(r, {
        eu: () => i,
        q5: () => o
      });
      var n = t(95155),
        a = t(12115),
        l = t(39055);
      let i = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        className: (0, l.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", e),
        ...r
      }));
      i.displayName = "Avatar", a.forwardRef(({
        className: e,
        alt: r = "",
        ...t
      }, a) => (0, n.jsx)("img", {
        ref: a,
        alt: r,
        className: (0, l.cn)("aspect-square h-full w-full object-cover", e),
        ...t
      })).displayName = "AvatarImage";
      let o = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        className: (0, l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium", e),
        ...r
      }));
      o.displayName = "AvatarFallback"
    },
    76592: (e, r, t) => {
      t.d(r, {
        B: () => l,
        W: () => a
      });
      var n = t(26028);

      function a(e, r) {
        var t, a;
        return null != (t = null == (a = e.graphicalItems.cartesianItems.find(e => e.id === r)) ? void 0 : a.xAxisId) ? t : n.W3
      }

      function l(e, r) {
        var t, a;
        return null != (t = null == (a = e.graphicalItems.cartesianItems.find(e => e.id === r)) ? void 0 : a.yAxisId) ? t : n.W3
      }
    },
    90425: (e, r, t) => {
      t.d(r, {
        A: () => c
      });
      var n = t(12115);
      let a = (...e) => e.filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r).join(" ").trim(),
        l = e => {
          let r = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) => t ? t.toUpperCase() : r.toLowerCase());
          return r.charAt(0).toUpperCase() + r.slice(1)
        };
      var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };
      let o = (0, n.forwardRef)(({
          color: e = "currentColor",
          size: r = 24,
          strokeWidth: t = 2,
          absoluteStrokeWidth: l,
          className: o = "",
          children: c,
          iconNode: u,
          ...s
        }, d) => (0, n.createElement)("svg", {
          ref: d,
          ...i,
          width: r,
          height: r,
          stroke: e,
          strokeWidth: l ? 24 * Number(t) / Number(r) : t,
          className: a("lucide", o),
          ...!c && !(e => {
            for (let r in e)
              if (r.startsWith("aria-") || "role" === r || "title" === r) return !0;
            return !1
          })(s) && {
            "aria-hidden": "true"
          },
          ...s
        }, [...u.map(([e, r]) => (0, n.createElement)(e, r)), ...Array.isArray(c) ? c : [c]])),
        c = (e, r) => {
          let t = (0, n.forwardRef)(({
            className: t,
            ...i
          }, c) => (0, n.createElement)(o, {
            ref: c,
            iconNode: r,
            className: a(`lucide-${l(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, t),
            ...i
          }));
          return t.displayName = l(e), t
        }
    },
    90639: (e, r, t) => {
      t.d(r, {
        Q: () => o
      });
      var n = t(12115),
        a = t(95295),
        l = t(80598),
        i = ["axis"],
        o = (0, n.forwardRef)((e, r) => n.createElement(l.P, {
          chartName: "AreaChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: i,
          tooltipPayloadSearcher: a.uN,
          categoricalChartProps: e,
          ref: r
        }))
    },
    93219: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("activity", [
        ["path", {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
          key: "169zse"
        }]
      ])
    }
  }
]);