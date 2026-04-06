(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5890], {
    8436: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 73102))
    },
    18460: (e, r, t) => {
      "use strict";
      t.d(r, {
        F: () => s
      });
      var n = t(29722);
      let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        i = n.$,
        s = (e, r) => t => {
          var n;
          if ((null == r ? void 0 : r.variants) == null) return i(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
          let {
            variants: s,
            defaultVariants: l
          } = r, o = Object.keys(s).map(e => {
            let r = null == t ? void 0 : t[e],
              n = null == l ? void 0 : l[e];
            if (null === r) return null;
            let i = a(r) || a(n);
            return s[e][i]
          }), d = t && Object.entries(t).reduce((e, r) => {
            let [t, n] = r;
            return void 0 === n || (e[t] = n), e
          }, {});
          return i(e, o, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, r) => {
            let {
              class: t,
              className: n,
              ...a
            } = r;
            return Object.entries(a).every(e => {
              let [r, t] = e;
              return Array.isArray(t) ? t.includes({
                ...l,
                ...d
              } [r]) : ({
                ...l,
                ...d
              })[r] === t
            }) ? [...e, t, n] : e
          }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
        }
    },
    35125: (e, r, t) => {
      "use strict";
      t.d(r, {
        $: () => o
      });
      var n = t(95155);
      t(12115);
      var a = t(18460),
        i = t(42442),
        s = t(39055);
      let l = (0, a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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

      function o({
        className: e,
        variant: r = "default",
        size: t = "default",
        asChild: a = !1,
        ...o
      }) {
        let d = a ? i.bL : "button";
        return (0, n.jsx)(d, {
          "data-slot": "button",
          "data-variant": r,
          "data-size": t,
          className: (0, s.cn)(l({
            variant: r,
            size: t,
            className: e
          })),
          ...o
        })
      }
    },
    42442: (e, r, t) => {
      "use strict";
      t.d(r, {
        Dc: () => d,
        TL: () => s,
        bL: () => l
      });
      var n = t(12115),
        a = t(47527),
        i = t(95155);

      function s(e) {
        var r;
        let t, s = (r = e, (t = n.forwardRef((e, r) => {
            let {
              children: t,
              ...i
            } = e;
            if (n.isValidElement(t)) {
              var s;
              let e, l, o = (s = t, (l = (e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? s.ref : (l = (e = Object.getOwnPropertyDescriptor(s, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
                d = function(e, r) {
                  let t = {
                    ...r
                  };
                  for (let n in r) {
                    let a = e[n],
                      i = r[n];
                    /^on[A-Z]/.test(n) ? a && i ? t[n] = (...e) => {
                      let r = i(...e);
                      return a(...e), r
                    } : a && (t[n] = a) : "style" === n ? t[n] = {
                      ...a,
                      ...i
                    } : "className" === n && (t[n] = [a, i].filter(Boolean).join(" "))
                  }
                  return {
                    ...e,
                    ...t
                  }
                }(i, t.props);
              return t.type !== n.Fragment && (d.ref = r ? (0, a.t)(r, o) : o), n.cloneElement(t, d)
            }
            return n.Children.count(t) > 1 ? n.Children.only(null) : null
          })).displayName = `${r}.SlotClone`, t),
          l = n.forwardRef((e, r) => {
            let {
              children: t,
              ...a
            } = e, l = n.Children.toArray(t), o = l.find(c);
            if (o) {
              let e = o.props.children,
                t = l.map(r => r !== o ? r : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
              return (0, i.jsx)(s, {
                ...a,
                ref: r,
                children: n.isValidElement(e) ? n.cloneElement(e, void 0, t) : null
              })
            }
            return (0, i.jsx)(s, {
              ...a,
              ref: r,
              children: t
            })
          });
        return l.displayName = `${e}.Slot`, l
      }
      var l = s("Slot"),
        o = Symbol("radix.slottable");

      function d(e) {
        let r = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return r.displayName = `${e}.Slottable`, r.__radixId = o, r
      }

      function c(e) {
        return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === o
      }
    },
    47385: (e, r, t) => {
      "use strict";
      t.d(r, {
        J: () => s
      });
      var n = t(95155);
      t(12115);
      var a = t(91760),
        i = t(39055);

      function s({
        className: e,
        ...r
      }) {
        return (0, n.jsx)(a.Root, {
          "data-slot": "label",
          className: (0, i.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
          ...r
        })
      }
    },
    47527: (e, r, t) => {
      "use strict";
      t.d(r, {
        s: () => s,
        t: () => i
      });
      var n = t(12115);

      function a(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function i(...e) {
        return r => {
          let t = !1,
            n = e.map(e => {
              let n = a(e, r);
              return t || "function" != typeof n || (t = !0), n
            });
          if (t) return () => {
            for (let r = 0; r < n.length; r++) {
              let t = n[r];
              "function" == typeof t ? t() : a(e[r], null)
            }
          }
        }
      }

      function s(...e) {
        return n.useCallback(i(...e), e)
      }
    },
    50259: (e, r, t) => {
      "use strict";
      t.d(r, {
        p: () => i
      });
      var n = t(95155);
      t(12115);
      var a = t(39055);

      function i({
        className: e,
        type: r,
        ...t
      }) {
        return (0, n.jsx)("input", {
          type: r,
          "data-slot": "input",
          className: (0, a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
          ...t
        })
      }
    },
    62831: (e, r, t) => {
      "use strict";
      t.d(r, {
        BT: () => d,
        Wu: () => c,
        ZB: () => o,
        Zp: () => s,
        aR: () => l
      });
      var n = t(95155),
        a = t(12115),
        i = t(39055);
      let s = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        "data-slot": "card",
        className: (0, i.cn)("rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200", e),
        ...r
      }));
      s.displayName = "Card";
      let l = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        "data-slot": "card-header",
        className: (0, i.cn)("flex flex-col space-y-1.5 p-6", e),
        ...r
      }));
      l.displayName = "CardHeader";
      let o = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        className: (0, i.cn)("font-semibold leading-none tracking-tight", e),
        ...r
      }));
      o.displayName = "CardTitle";
      let d = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        className: (0, i.cn)("text-sm text-muted-foreground", e),
        ...r
      }));
      d.displayName = "CardDescription";
      let c = a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        "data-slot": "card-content",
        className: (0, i.cn)("p-6 pt-0", e),
        ...r
      }));
      c.displayName = "CardContent", a.forwardRef(({
        className: e,
        ...r
      }, t) => (0, n.jsx)("div", {
        ref: t,
        "data-slot": "card-footer",
        className: (0, i.cn)("flex items-center p-6 pt-0", e),
        ...r
      })).displayName = "CardFooter"
    },
    73102: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        default: () => f
      });
      var n = t(95155),
        a = t(66609),
        i = t(98500),
        s = t.n(i),
        l = t(80723),
        o = t(35125),
        d = t(50259),
        c = t(47385),
        u = t(62831);

      function f() {
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("title", {
            children: "Reset Password — Ember Dashboard"
          }), (0, n.jsxs)(u.Zp, {
            children: [(0, n.jsxs)(u.aR, {
              className: "text-center",
              children: [(0, n.jsx)(u.ZB, {
                className: "text-2xl",
                children: "Reset your password"
              }), (0, n.jsx)(u.BT, {
                children: "Enter your email and we'll send you a reset link"
              })]
            }), (0, n.jsxs)(u.Wu, {
              children: [(0, n.jsxs)("form", {
                onSubmit: function(e) {
                  e.preventDefault(), a.oR.info("Demo mode — no backend connected")
                },
                className: "space-y-4",
                children: [(0, n.jsxs)("div", {
                  className: "space-y-2",
                  children: [(0, n.jsx)(c.J, {
                    htmlFor: "email",
                    children: "Email"
                  }), (0, n.jsx)(d.p, {
                    id: "email",
                    type: "email",
                    placeholder: "name@example.com",
                    required: !0
                  })]
                }), (0, n.jsx)(o.$, {
                  type: "submit",
                  className: "w-full",
                  children: "Send reset link"
                })]
              }), (0, n.jsx)("div", {
                className: "mt-6 text-center",
                children: (0, n.jsxs)(s(), {
                  href: "/login",
                  className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                  children: [(0, n.jsx)(l.A, {
                    className: "size-4"
                  }), "Back to sign in"]
                })
              })]
            })]
          })]
        })
      }
    },
    80723: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("arrow-left", [
        ["path", {
          d: "m12 19-7-7 7-7",
          key: "1l729n"
        }],
        ["path", {
          d: "M19 12H5",
          key: "x3x0zl"
        }]
      ])
    },
    90425: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => o
      });
      var n = t(12115);
      let a = (...e) => e.filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r).join(" ").trim(),
        i = e => {
          let r = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) => t ? t.toUpperCase() : r.toLowerCase());
          return r.charAt(0).toUpperCase() + r.slice(1)
        };
      var s = {
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
      let l = (0, n.forwardRef)(({
          color: e = "currentColor",
          size: r = 24,
          strokeWidth: t = 2,
          absoluteStrokeWidth: i,
          className: l = "",
          children: o,
          iconNode: d,
          ...c
        }, u) => (0, n.createElement)("svg", {
          ref: u,
          ...s,
          width: r,
          height: r,
          stroke: e,
          strokeWidth: i ? 24 * Number(t) / Number(r) : t,
          className: a("lucide", l),
          ...!o && !(e => {
            for (let r in e)
              if (r.startsWith("aria-") || "role" === r || "title" === r) return !0;
            return !1
          })(c) && {
            "aria-hidden": "true"
          },
          ...c
        }, [...d.map(([e, r]) => (0, n.createElement)(e, r)), ...Array.isArray(o) ? o : [o]])),
        o = (e, r) => {
          let t = (0, n.forwardRef)(({
            className: t,
            ...s
          }, o) => (0, n.createElement)(l, {
            ref: o,
            iconNode: r,
            className: a(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, t),
            ...s
          }));
          return t.displayName = i(e), t
        }
    },
    91760: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        Label: () => l,
        Root: () => o
      });
      var n = t(12115);
      t(47650);
      var a = t(42442),
        i = t(95155),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          let t = (0, a.TL)(`Primitive.${r}`),
            s = n.forwardRef((e, n) => {
              let {
                asChild: a,
                ...s
              } = e;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a ? t : r, {
                ...s,
                ref: n
              })
            });
          return s.displayName = `Primitive.${r}`, {
            ...e,
            [r]: s
          }
        }, {}),
        l = n.forwardRef((e, r) => (0, i.jsx)(s.label, {
          ...e,
          ref: r,
          onMouseDown: r => {
            r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault())
          }
        }));
      l.displayName = "Label";
      var o = l
    }
  },
  e => {
    e.O(0, [9055, 8500, 6609, 8441, 3794, 7358], () => e(e.s = 8436)), _N_E = e.O()
  }
]);