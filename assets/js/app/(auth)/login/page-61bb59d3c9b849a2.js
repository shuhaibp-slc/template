(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [72], {
    8382: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 85784))
    },
    62831: (e, r, t) => {
      "use strict";
      t.d(r, {
        BT: () => d,
        Wu: () => c,
        ZB: () => o,
        Zp: () => l,
        aR: () => n
      });
      var a = t(95155),
        s = t(12115),
        i = t(39055);
      let l = s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        "data-slot": "card",
        className: (0, i.cn)("rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200", e),
        ...r
      }));
      l.displayName = "Card";
      let n = s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        "data-slot": "card-header",
        className: (0, i.cn)("flex flex-col space-y-1.5 p-6", e),
        ...r
      }));
      n.displayName = "CardHeader";
      let o = s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        className: (0, i.cn)("font-semibold leading-none tracking-tight", e),
        ...r
      }));
      o.displayName = "CardTitle";
      let d = s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        className: (0, i.cn)("text-sm text-muted-foreground", e),
        ...r
      }));
      d.displayName = "CardDescription";
      let c = s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        "data-slot": "card-content",
        className: (0, i.cn)("p-6 pt-0", e),
        ...r
      }));
      c.displayName = "CardContent", s.forwardRef(({
        className: e,
        ...r
      }, t) => (0, a.jsx)("div", {
        ref: t,
        "data-slot": "card-footer",
        className: (0, i.cn)("flex items-center p-6 pt-0", e),
        ...r
      })).displayName = "CardFooter"
    },
    63509: (e, r, t) => {
      "use strict";
      t.d(r, {
        X: () => i
      });
      var a = t(12115),
        s = t(66294);

      function i(e) {
        let [r, t] = a.useState(void 0);
        return (0, s.N)(() => {
          if (e) {
            t({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            let r = new ResizeObserver(r => {
              let a, s;
              if (!Array.isArray(r) || !r.length) return;
              let i = r[0];
              if ("borderBoxSize" in i) {
                let e = i.borderBoxSize,
                  r = Array.isArray(e) ? e[0] : e;
                a = r.inlineSize, s = r.blockSize
              } else a = e.offsetWidth, s = e.offsetHeight;
              t({
                width: a,
                height: s
              })
            });
            return r.observe(e, {
              box: "border-box"
            }), () => r.unobserve(e)
          }
          t(void 0)
        }, [e]), r
      }
    },
    67233: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => a
      });
      let a = (0, t(90425).A)("github", [
        ["path", {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
          key: "tonef"
        }],
        ["path", {
          d: "M9 18c-4.51 2-5-2-7-2",
          key: "9comsn"
        }]
      ])
    },
    83417: (e, r, t) => {
      "use strict";
      t.d(r, {
        Z: () => s
      });
      var a = t(12115);

      function s(e) {
        let r = a.useRef({
          value: e,
          previous: e
        });
        return a.useMemo(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e])
      }
    },
    84466: (e, r, t) => {
      "use strict";
      t.d(r, {
        w: () => l
      });
      var a = t(95155);
      t(12115);
      var s = t(89803),
        i = t(39055);

      function l({
        className: e,
        orientation: r = "horizontal",
        decorative: t = !0,
        ...l
      }) {
        return (0, a.jsx)(s.b, {
          "data-slot": "separator",
          decorative: t,
          orientation: r,
          className: (0, i.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
          ...l
        })
      }
    },
    85784: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        default: () => x
      });
      var a = t(95155),
        s = t(66609),
        i = t(98500),
        l = t.n(i),
        n = t(67233),
        o = t(35125),
        d = t(50259),
        c = t(47385),
        m = t(99686),
        u = t(84466),
        f = t(62831);

      function x() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("title", {
            children: "Sign In — Ember Dashboard"
          }), (0, a.jsxs)(f.Zp, {
            children: [(0, a.jsxs)(f.aR, {
              className: "text-center",
              children: [(0, a.jsx)(f.ZB, {
                className: "text-2xl",
                children: "Welcome back"
              }), (0, a.jsx)(f.BT, {
                children: "Sign in to your account"
              })]
            }), (0, a.jsxs)(f.Wu, {
              children: [(0, a.jsxs)("form", {
                onSubmit: function(e) {
                  e.preventDefault(), s.oR.info("Demo mode — no backend connected")
                },
                className: "space-y-4",
                children: [(0, a.jsxs)("div", {
                  className: "space-y-2",
                  children: [(0, a.jsx)(c.J, {
                    htmlFor: "email",
                    children: "Email"
                  }), (0, a.jsx)(d.p, {
                    id: "email",
                    type: "email",
                    placeholder: "name@example.com",
                    required: !0
                  })]
                }), (0, a.jsxs)("div", {
                  className: "space-y-2",
                  children: [(0, a.jsx)(c.J, {
                    htmlFor: "password",
                    children: "Password"
                  }), (0, a.jsx)(d.p, {
                    id: "password",
                    type: "password",
                    placeholder: "Enter your password",
                    required: !0
                  })]
                }), (0, a.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [(0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, a.jsx)(m.S, {
                      id: "remember"
                    }), (0, a.jsx)(c.J, {
                      htmlFor: "remember",
                      className: "font-normal",
                      children: "Remember me"
                    })]
                  }), (0, a.jsx)(l(), {
                    href: "/forgot-password",
                    className: "text-sm text-primary hover:underline",
                    children: "Forgot password?"
                  })]
                }), (0, a.jsx)(o.$, {
                  type: "submit",
                  className: "w-full",
                  children: "Sign in"
                })]
              }), (0, a.jsxs)("div", {
                className: "relative my-6",
                children: [(0, a.jsx)(u.w, {}), (0, a.jsx)("span", {
                  className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground",
                  children: "or continue with"
                })]
              }), (0, a.jsxs)("div", {
                className: "grid grid-cols-2 gap-3",
                children: [(0, a.jsxs)(o.$, {
                  variant: "outline",
                  type: "button",
                  children: [(0, a.jsxs)("svg", {
                    className: "size-4",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z",
                      fill: "#4285F4"
                    }), (0, a.jsx)("path", {
                      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                      fill: "#34A853"
                    }), (0, a.jsx)("path", {
                      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                      fill: "#FBBC05"
                    }), (0, a.jsx)("path", {
                      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                      fill: "#EA4335"
                    })]
                  }), "Google"]
                }), (0, a.jsxs)(o.$, {
                  variant: "outline",
                  type: "button",
                  children: [(0, a.jsx)(n.A, {
                    className: "size-4"
                  }), "GitHub"]
                })]
              }), (0, a.jsxs)("p", {
                className: "mt-6 text-center text-sm text-muted-foreground",
                children: ["Don't have an account?", " ", (0, a.jsx)(l(), {
                  href: "/register",
                  className: "font-medium text-primary hover:underline",
                  children: "Sign up"
                })]
              })]
            })]
          })]
        })
      }
    },
    89803: (e, r, t) => {
      "use strict";
      t.d(r, {
        b: () => c
      });
      var a = t(12115);
      t(47650);
      var s = t(42442),
        i = t(95155),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          let t = (0, s.TL)(`Primitive.${r}`),
            l = a.forwardRef((e, a) => {
              let {
                asChild: s,
                ...l
              } = e;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s ? t : r, {
                ...l,
                ref: a
              })
            });
          return l.displayName = `Primitive.${r}`, {
            ...e,
            [r]: l
          }
        }, {}),
        n = "horizontal",
        o = ["horizontal", "vertical"],
        d = a.forwardRef((e, r) => {
          var t;
          let {
            decorative: a,
            orientation: s = n,
            ...d
          } = e, c = (t = s, o.includes(t)) ? s : n;
          return (0, i.jsx)(l.div, {
            "data-orientation": c,
            ...a ? {
              role: "none"
            } : {
              "aria-orientation": "vertical" === c ? c : void 0,
              role: "separator"
            },
            ...d,
            ref: r
          })
        });
      d.displayName = "Separator";
      var c = d
    }
  },
  e => {
    e.O(0, [9055, 8500, 6609, 6264, 9184, 8441, 3794, 7358], () => e(e.s = 8382)), _N_E = e.O()
  }
]);