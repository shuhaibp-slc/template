"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7646], {
    7484: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("wind", [
        ["path", {
          d: "M12.8 19.6A2 2 0 1 0 14 16H2",
          key: "148xed"
        }],
        ["path", {
          d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
          key: "1u4tom"
        }],
        ["path", {
          d: "M9.8 4.4A2 2 0 1 1 11 8H2",
          key: "75valh"
        }]
      ])
    },
    7686: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("heart", [
        ["path", {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0"
        }]
      ])
    },
    17243: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("image", [
        ["rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
          key: "1m3agn"
        }],
        ["circle", {
          cx: "9",
          cy: "9",
          r: "2",
          key: "af1f0g"
        }],
        ["path", {
          d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
          key: "1xmnt7"
        }]
      ])
    },
    18460: (e, a, t) => {
      t.d(a, {
        F: () => n
      });
      var r = t(29722);
      let d = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        s = r.$,
        n = (e, a) => t => {
          var r;
          if ((null == a ? void 0 : a.variants) == null) return s(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
          let {
            variants: n,
            defaultVariants: i
          } = a, l = Object.keys(n).map(e => {
            let a = null == t ? void 0 : t[e],
              r = null == i ? void 0 : i[e];
            if (null === a) return null;
            let s = d(a) || d(r);
            return n[e][s]
          }), o = t && Object.entries(t).reduce((e, a) => {
            let [t, r] = a;
            return void 0 === r || (e[t] = r), e
          }, {});
          return s(e, l, null == a || null == (r = a.compoundVariants) ? void 0 : r.reduce((e, a) => {
            let {
              class: t,
              className: r,
              ...d
            } = a;
            return Object.entries(d).every(e => {
              let [a, t] = e;
              return Array.isArray(t) ? t.includes({
                ...i,
                ...o
              } [a]) : ({
                ...i,
                ...o
              })[a] === t
            }) ? [...e, t, r] : e
          }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
        }
    },
    21283: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("stethoscope", [
        ["path", {
          d: "M11 2v2",
          key: "1539x4"
        }],
        ["path", {
          d: "M5 2v2",
          key: "1yf1q8"
        }],
        ["path", {
          d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
          key: "rb5t3r"
        }],
        ["path", {
          d: "M8 15a6 6 0 0 0 12 0v-3",
          key: "x18d4x"
        }],
        ["circle", {
          cx: "20",
          cy: "10",
          r: "2",
          key: "ts1r5v"
        }]
      ])
    },
    25221: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("flask-conical", [
        ["path", {
          d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
          key: "18mbvz"
        }],
        ["path", {
          d: "M6.453 15h11.094",
          key: "3shlmq"
        }],
        ["path", {
          d: "M8.5 2h7",
          key: "csnxdl"
        }]
      ])
    },
    35125: (e, a, t) => {
      t.d(a, {
        $: () => l
      });
      var r = t(95155);
      t(12115);
      var d = t(18460),
        s = t(42442),
        n = t(39055);
      let i = (0, d.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      });

      function l({
        className: e,
        variant: a = "default",
        size: t = "default",
        asChild: d = !1,
        ...l
      }) {
        let o = d ? s.bL : "button";
        return (0, r.jsx)(o, {
          "data-slot": "button",
          "data-variant": a,
          "data-size": t,
          className: (0, n.cn)(i({
            variant: a,
            size: t,
            className: e
          })),
          ...l
        })
      }
    },
    41585: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("triangle-alert", [
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
    42869: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("user", [
        ["path", {
          d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
          key: "975kel"
        }],
        ["circle", {
          cx: "12",
          cy: "7",
          r: "4",
          key: "17ys0d"
        }]
      ])
    },
    48368: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("file-text", [
        ["path", {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }],
        ["path", {
          d: "M14 2v5a1 1 0 0 0 1 1h5",
          key: "wfsgrz"
        }],
        ["path", {
          d: "M10 9H8",
          key: "b1mrlr"
        }],
        ["path", {
          d: "M16 13H8",
          key: "t4e002"
        }],
        ["path", {
          d: "M16 17H8",
          key: "z1uh3a"
        }]
      ])
    },
    55078: (e, a, t) => {
      t.d(a, {
        E: () => i
      });
      var r = t(95155);
      t(12115);
      var d = t(18460),
        s = t(39055);
      let n = (0, d.F)("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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

      function i({
        className: e,
        variant: a,
        ...t
      }) {
        return (0, r.jsx)("div", {
          className: (0, s.cn)(n({
            variant: a
          }), e),
          ...t
        })
      }
    },
    57420: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("calendar", [
        ["path", {
          d: "M8 2v4",
          key: "1cmpym"
        }],
        ["path", {
          d: "M16 2v4",
          key: "4m81vk"
        }],
        ["rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "4",
          rx: "2",
          key: "1hopcy"
        }],
        ["path", {
          d: "M3 10h18",
          key: "8toen8"
        }]
      ])
    },
    61878: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("search", [
        ["path", {
          d: "m21 21-4.34-4.34",
          key: "14j7rj"
        }],
        ["circle", {
          cx: "11",
          cy: "11",
          r: "8",
          key: "4ej97u"
        }]
      ])
    },
    62831: (e, a, t) => {
      t.d(a, {
        BT: () => o,
        Wu: () => c,
        ZB: () => l,
        Zp: () => n,
        aR: () => i
      });
      var r = t(95155),
        d = t(12115),
        s = t(39055);
      let n = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        "data-slot": "card",
        className: (0, s.cn)("rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200", e),
        ...a
      }));
      n.displayName = "Card";
      let i = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        "data-slot": "card-header",
        className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e),
        ...a
      }));
      i.displayName = "CardHeader";
      let l = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        className: (0, s.cn)("font-semibold leading-none tracking-tight", e),
        ...a
      }));
      l.displayName = "CardTitle";
      let o = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        className: (0, s.cn)("text-sm text-muted-foreground", e),
        ...a
      }));
      o.displayName = "CardDescription";
      let c = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        "data-slot": "card-content",
        className: (0, s.cn)("p-6 pt-0", e),
        ...a
      }));
      c.displayName = "CardContent", d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        "data-slot": "card-footer",
        className: (0, s.cn)("flex items-center p-6 pt-0", e),
        ...a
      })).displayName = "CardFooter"
    },
    64479: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("sliders-horizontal", [
        ["path", {
          d: "M10 5H3",
          key: "1qgfaw"
        }],
        ["path", {
          d: "M12 19H3",
          key: "yhmn1j"
        }],
        ["path", {
          d: "M14 3v4",
          key: "1sua03"
        }],
        ["path", {
          d: "M16 17v4",
          key: "1q0r14"
        }],
        ["path", {
          d: "M21 12h-9",
          key: "1o4lsq"
        }],
        ["path", {
          d: "M21 19h-5",
          key: "1rlt1p"
        }],
        ["path", {
          d: "M21 5h-7",
          key: "1oszz2"
        }],
        ["path", {
          d: "M8 10v4",
          key: "tgpxqk"
        }],
        ["path", {
          d: "M8 12H3",
          key: "a7s4jb"
        }]
      ])
    },
    65213: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("pill", [
        ["path", {
          d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
          key: "wa1lgi"
        }],
        ["path", {
          d: "m8.5 8.5 7 7",
          key: "rvfmvr"
        }]
      ])
    },
    74526: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("thermometer", [
        ["path", {
          d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
          key: "17jzev"
        }]
      ])
    },
    74666: (e, a, t) => {
      t.d(a, {
        eu: () => n,
        q5: () => i
      });
      var r = t(95155),
        d = t(12115),
        s = t(39055);
      let n = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        className: (0, s.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", e),
        ...a
      }));
      n.displayName = "Avatar", d.forwardRef(({
        className: e,
        alt: a = "",
        ...t
      }, d) => (0, r.jsx)("img", {
        ref: d,
        alt: a,
        className: (0, s.cn)("aspect-square h-full w-full object-cover", e),
        ...t
      })).displayName = "AvatarImage";
      let i = d.forwardRef(({
        className: e,
        ...a
      }, t) => (0, r.jsx)("div", {
        ref: t,
        className: (0, s.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium", e),
        ...a
      }));
      i.displayName = "AvatarFallback"
    },
    88444: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("sticky-note", [
        ["path", {
          d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
          key: "1dfntj"
        }],
        ["path", {
          d: "M15 3v5a1 1 0 0 0 1 1h5",
          key: "6s6qgf"
        }]
      ])
    },
    90425: (e, a, t) => {
      t.d(a, {
        A: () => l
      });
      var r = t(12115);
      let d = (...e) => e.filter((e, a, t) => !!e && "" !== e.trim() && t.indexOf(e) === a).join(" ").trim(),
        s = e => {
          let a = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, a, t) => t ? t.toUpperCase() : a.toLowerCase());
          return a.charAt(0).toUpperCase() + a.slice(1)
        };
      var n = {
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
      let i = (0, r.forwardRef)(({
          color: e = "currentColor",
          size: a = 24,
          strokeWidth: t = 2,
          absoluteStrokeWidth: s,
          className: i = "",
          children: l,
          iconNode: o,
          ...c
        }, u) => (0, r.createElement)("svg", {
          ref: u,
          ...n,
          width: a,
          height: a,
          stroke: e,
          strokeWidth: s ? 24 * Number(t) / Number(a) : t,
          className: d("lucide", i),
          ...!l && !(e => {
            for (let a in e)
              if (a.startsWith("aria-") || "role" === a || "title" === a) return !0;
            return !1
          })(c) && {
            "aria-hidden": "true"
          },
          ...c
        }, [...o.map(([e, a]) => (0, r.createElement)(e, a)), ...Array.isArray(l) ? l : [l]])),
        l = (e, a) => {
          let t = (0, r.forwardRef)(({
            className: t,
            ...n
          }, l) => (0, r.createElement)(i, {
            ref: l,
            iconNode: a,
            className: d(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, t),
            ...n
          }));
          return t.displayName = s(e), t
        }
    },
    93219: (e, a, t) => {
      t.d(a, {
        A: () => r
      });
      let r = (0, t(90425).A)("activity", [
        ["path", {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
          key: "169zse"
        }]
      ])
    }
  }
]);