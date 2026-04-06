(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [317], {
    1174: (e, t, r) => {
      "use strict";
      r.d(t, {
        $M: () => s,
        Tr: () => i,
        X0: () => d,
        aI: () => n
      });
      let a = [{
        id: "notif-1",
        title: "New order received",
        description: "Emma Wilson placed order ORD-7891 for $299.00",
        type: "order",
        read: !1,
        time: "2 min ago"
      }, {
        id: "notif-2",
        title: "Payment processed",
        description: "Payment of $1,499.00 from Sofia Garcia confirmed",
        type: "payment",
        read: !1,
        time: "15 min ago"
      }, {
        id: "notif-3",
        title: "New customer signup",
        description: "James Chen created an account",
        type: "customer",
        read: !1,
        time: "1 hour ago"
      }, {
        id: "notif-4",
        title: "Order shipped",
        description: "ORD-7889 has been shipped to Sofia Garcia",
        type: "order",
        read: !0,
        time: "2 hours ago"
      }, {
        id: "notif-5",
        title: "System update",
        description: "Dashboard v2.1 has been deployed successfully",
        type: "system",
        read: !0,
        time: "3 hours ago"
      }, {
        id: "notif-6",
        title: "Payment failed",
        description: "Payment attempt for ORD-7888 from Alex Thompson failed",
        type: "payment",
        read: !1,
        time: "4 hours ago"
      }, {
        id: "notif-7",
        title: "New review",
        description: 'Maria Santos left a 5-star review: "Excellent product!"',
        type: "customer",
        read: !0,
        time: "5 hours ago"
      }, {
        id: "notif-8",
        title: "Subscription renewed",
        description: "Team Plan for James Chen renewed for another month",
        type: "payment",
        read: !0,
        time: "6 hours ago"
      }, {
        id: "notif-9",
        title: "Server maintenance",
        description: "Scheduled maintenance window: Feb 20, 2:00 AM - 4:00 AM UTC",
        type: "system",
        read: !0,
        time: "1 day ago"
      }, {
        id: "notif-10",
        title: "New order received",
        description: "David Kim placed order ORD-7886 for $599.00",
        type: "order",
        read: !0,
        time: "2 days ago"
      }, {
        id: "notif-11",
        title: "Bulk export complete",
        description: "Your customer data export is ready for download",
        type: "system",
        read: !0,
        time: "2 days ago"
      }, {
        id: "notif-12",
        title: "Refund processed",
        description: "Refund of $599.00 issued for ORD-7886",
        type: "payment",
        read: !0,
        time: "3 days ago"
      }];

      function i(e) {
        return "unread" === e ? a.filter(e => !e.read) : "read" === e ? a.filter(e => e.read) : [...a]
      }

      function s() {
        return a.filter(e => !e.read).length
      }

      function n(e) {
        let t = a.findIndex(t => t.id === e); - 1 !== t && (a[t] = {
          ...a[t],
          read: !0
        })
      }

      function d() {
        a = a.map(e => ({
          ...e,
          read: !0
        }))
      }
    },
    7810: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("users", [
        ["path", {
          d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
          key: "1yyitq"
        }],
        ["path", {
          d: "M16 3.128a4 4 0 0 1 0 7.744",
          key: "16gr8j"
        }],
        ["path", {
          d: "M22 21v-2a4 4 0 0 0-3-3.87",
          key: "kshegd"
        }],
        ["circle", {
          cx: "9",
          cy: "7",
          r: "4",
          key: "nufk8"
        }]
      ])
    },
    18460: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => n
      });
      var a = r(29722);
      let i = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        s = a.$,
        n = (e, t) => r => {
          var a;
          if ((null == t ? void 0 : t.variants) == null) return s(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
          let {
            variants: n,
            defaultVariants: d
          } = t, o = Object.keys(n).map(e => {
            let t = null == r ? void 0 : r[e],
              a = null == d ? void 0 : d[e];
            if (null === t) return null;
            let s = i(t) || i(a);
            return n[e][s]
          }), l = r && Object.entries(r).reduce((e, t) => {
            let [r, a] = t;
            return void 0 === a || (e[r] = a), e
          }, {});
          return s(e, o, null == t || null == (a = t.compoundVariants) ? void 0 : a.reduce((e, t) => {
            let {
              class: r,
              className: a,
              ...i
            } = t;
            return Object.entries(i).every(e => {
              let [t, r] = e;
              return Array.isArray(r) ? r.includes({
                ...d,
                ...l
              } [t]) : ({
                ...d,
                ...l
              })[t] === r
            }) ? [...e, r, a] : e
          }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    },
    26349: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => y
      });
      var a = r(95155),
        i = r(12115),
        s = r(62831),
        n = r(35125),
        d = r(55078),
        o = r(67899),
        l = r(79372),
        c = r(7810),
        u = r(89363),
        m = r(83687),
        f = r(61767),
        p = r(1174),
        g = r(39055);
      let h = ["all", "unread", "read"],
        x = {
          order: {
            icon: o.A,
            color: "text-chart-1",
            bg: "bg-chart-1/10"
          },
          payment: {
            icon: l.A,
            color: "text-chart-2",
            bg: "bg-chart-2/10"
          },
          customer: {
            icon: c.A,
            color: "text-chart-3",
            bg: "bg-chart-3/10"
          },
          system: {
            icon: u.A,
            color: "text-chart-4",
            bg: "bg-chart-4/10"
          }
        };

      function y() {
        let [e, t] = (0, i.useState)("all"), [, r] = (0, i.useState)(0), o = () => r(e => e + 1), l = (0, p.Tr)(e), c = (0, p.$M)();
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [(0, a.jsxs)("div", {
              children: [(0, a.jsx)("h1", {
                className: "text-2xl font-bold tracking-tight",
                children: "Notifications"
              }), (0, a.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: "Stay up to date with your latest alerts and messages."
              })]
            }), c > 0 && (0, a.jsxs)(n.$, {
              variant: "outline",
              size: "sm",
              className: "gap-1.5",
              onClick: () => {
                (0, p.X0)(), o()
              },
              children: [(0, a.jsx)(m.A, {
                className: "h-4 w-4"
              }), "Mark all as read"]
            })]
          }), (0, a.jsxs)(s.Zp, {
            children: [(0, a.jsxs)(s.aR, {
              className: "flex flex-row items-center justify-between",
              children: [(0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0, a.jsx)(s.ZB, {
                  className: "text-base font-semibold",
                  children: "All Notifications"
                }), c > 0 && (0, a.jsxs)(d.E, {
                  variant: "default",
                  className: "text-[11px]",
                  children: [c, " unread"]
                })]
              }), (0, a.jsx)("div", {
                className: "flex items-center gap-1 rounded-lg bg-muted p-0.5",
                children: h.map(r => (0, a.jsx)("button", {
                  onClick: () => t(r),
                  className: (0, g.cn)("rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-all", e === r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                  children: r
                }, r))
              })]
            }), (0, a.jsx)(s.Wu, {
              children: 0 === l.length ? (0, a.jsxs)("div", {
                className: "flex flex-col items-center justify-center py-12 text-center",
                children: [(0, a.jsx)("div", {
                  className: "rounded-full bg-muted p-4",
                  children: (0, a.jsx)(f.A, {
                    className: "h-8 w-8 text-muted-foreground"
                  })
                }), (0, a.jsx)("h2", {
                  className: "mt-4 text-lg font-semibold",
                  children: "No notifications"
                }), (0, a.jsx)("p", {
                  className: "mt-1 text-sm text-muted-foreground",
                  children: "unread" === e ? "All caught up!" : "No notifications to show."
                })]
              }) : (0, a.jsx)("div", {
                className: "space-y-0",
                children: l.map(e => {
                  let {
                    icon: t,
                    color: r,
                    bg: i
                  } = x[e.type];
                  return (0, a.jsxs)("div", {
                    className: (0, g.cn)("group flex cursor-pointer gap-3 rounded-lg px-3 py-4 transition-colors hover:bg-muted/30", !e.read && "bg-primary/[0.03]"),
                    onClick: () => {
                      e.read || ((0, p.aI)(e.id), o())
                    },
                    children: [(0, a.jsx)("div", {
                      className: (0, g.cn)("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", i),
                      children: (0, a.jsx)(t, {
                        className: (0, g.cn)("h-4 w-4", r)
                      })
                    }), (0, a.jsxs)("div", {
                      className: "flex-1 space-y-0.5",
                      children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, a.jsx)("p", {
                          className: (0, g.cn)("text-sm font-medium leading-snug", !e.read && "font-semibold"),
                          children: e.title
                        }), !e.read && (0, a.jsx)("span", {
                          className: "h-2 w-2 rounded-full bg-primary"
                        })]
                      }), (0, a.jsx)("p", {
                        className: "text-xs text-muted-foreground leading-snug",
                        children: e.description
                      }), (0, a.jsx)("p", {
                        className: "text-[11px] text-muted-foreground/60",
                        children: e.time
                      })]
                    })]
                  }, e.id)
                })
              })
            })]
          })]
        })
      }
    },
    35125: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => o
      });
      var a = r(95155);
      r(12115);
      var i = r(18460),
        s = r(42442),
        n = r(39055);
      let d = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
        variant: t = "default",
        size: r = "default",
        asChild: i = !1,
        ...o
      }) {
        let l = i ? s.bL : "button";
        return (0, a.jsx)(l, {
          "data-slot": "button",
          "data-variant": t,
          "data-size": r,
          className: (0, n.cn)(d({
            variant: t,
            size: r,
            className: e
          })),
          ...o
        })
      }
    },
    42442: (e, t, r) => {
      "use strict";
      r.d(t, {
        Dc: () => l,
        TL: () => n,
        bL: () => d
      });
      var a = r(12115),
        i = r(47527),
        s = r(95155);

      function n(e) {
        var t;
        let r, n = (t = e, (r = a.forwardRef((e, t) => {
            let {
              children: r,
              ...s
            } = e;
            if (a.isValidElement(r)) {
              var n;
              let e, d, o = (n = r, (d = (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? n.ref : (d = (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? n.props.ref : n.props.ref || n.ref),
                l = function(e, t) {
                  let r = {
                    ...t
                  };
                  for (let a in t) {
                    let i = e[a],
                      s = t[a];
                    /^on[A-Z]/.test(a) ? i && s ? r[a] = (...e) => {
                      let t = s(...e);
                      return i(...e), t
                    } : i && (r[a] = i) : "style" === a ? r[a] = {
                      ...i,
                      ...s
                    } : "className" === a && (r[a] = [i, s].filter(Boolean).join(" "))
                  }
                  return {
                    ...e,
                    ...r
                  }
                }(s, r.props);
              return r.type !== a.Fragment && (l.ref = t ? (0, i.t)(t, o) : o), a.cloneElement(r, l)
            }
            return a.Children.count(r) > 1 ? a.Children.only(null) : null
          })).displayName = `${t}.SlotClone`, r),
          d = a.forwardRef((e, t) => {
            let {
              children: r,
              ...i
            } = e, d = a.Children.toArray(r), o = d.find(c);
            if (o) {
              let e = o.props.children,
                r = d.map(t => t !== o ? t : a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null);
              return (0, s.jsx)(n, {
                ...i,
                ref: t,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null
              })
            }
            return (0, s.jsx)(n, {
              ...i,
              ref: t,
              children: r
            })
          });
        return d.displayName = `${e}.Slot`, d
      }
      var d = n("Slot"),
        o = Symbol("radix.slottable");

      function l(e) {
        let t = ({
          children: e
        }) => (0, s.jsx)(s.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = o, t
      }

      function c(e) {
        return a.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === o
      }
    },
    47527: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => n,
        t: () => s
      });
      var a = r(12115);

      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function s(...e) {
        return t => {
          let r = !1,
            a = e.map(e => {
              let a = i(e, t);
              return r || "function" != typeof a || (r = !0), a
            });
          if (r) return () => {
            for (let t = 0; t < a.length; t++) {
              let r = a[t];
              "function" == typeof r ? r() : i(e[t], null)
            }
          }
        }
      }

      function n(...e) {
        return a.useCallback(s(...e), e)
      }
    },
    55078: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => d
      });
      var a = r(95155);
      r(12115);
      var i = r(18460),
        s = r(39055);
      let n = (0, i.F)("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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

      function d({
        className: e,
        variant: t,
        ...r
      }) {
        return (0, a.jsx)("div", {
          className: (0, s.cn)(n({
            variant: t
          }), e),
          ...r
        })
      }
    },
    61767: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("bell", [
        ["path", {
          d: "M10.268 21a2 2 0 0 0 3.464 0",
          key: "vwvbt9"
        }],
        ["path", {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }]
      ])
    },
    62831: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => l,
        Wu: () => c,
        ZB: () => o,
        Zp: () => n,
        aR: () => d
      });
      var a = r(95155),
        i = r(12115),
        s = r(39055);
      let n = i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        "data-slot": "card",
        className: (0, s.cn)("rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200", e),
        ...t
      }));
      n.displayName = "Card";
      let d = i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        "data-slot": "card-header",
        className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e),
        ...t
      }));
      d.displayName = "CardHeader";
      let o = i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        className: (0, s.cn)("font-semibold leading-none tracking-tight", e),
        ...t
      }));
      o.displayName = "CardTitle";
      let l = i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        className: (0, s.cn)("text-sm text-muted-foreground", e),
        ...t
      }));
      l.displayName = "CardDescription";
      let c = i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        "data-slot": "card-content",
        className: (0, s.cn)("p-6 pt-0", e),
        ...t
      }));
      c.displayName = "CardContent", i.forwardRef(({
        className: e,
        ...t
      }, r) => (0, a.jsx)("div", {
        ref: r,
        "data-slot": "card-footer",
        className: (0, s.cn)("flex items-center p-6 pt-0", e),
        ...t
      })).displayName = "CardFooter"
    },
    67899: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("shopping-cart", [
        ["circle", {
          cx: "8",
          cy: "21",
          r: "1",
          key: "jimo8o"
        }],
        ["circle", {
          cx: "19",
          cy: "21",
          r: "1",
          key: "13723u"
        }],
        ["path", {
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          key: "9zh506"
        }]
      ])
    },
    79372: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("credit-card", [
        ["rect", {
          width: "20",
          height: "14",
          x: "2",
          y: "5",
          rx: "2",
          key: "ynyp8z"
        }],
        ["line", {
          x1: "2",
          x2: "22",
          y1: "10",
          y2: "10",
          key: "1b3vmo"
        }]
      ])
    },
    83687: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("check-check", [
        ["path", {
          d: "M18 6 7 17l-5-5",
          key: "116fxf"
        }],
        ["path", {
          d: "m22 10-7.5 7.5L13 16",
          key: "ke71qq"
        }]
      ])
    },
    84717: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 26349))
    },
    89363: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = (0, r(90425).A)("settings", [
        ["path", {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw"
        }],
        ["circle", {
          cx: "12",
          cy: "12",
          r: "3",
          key: "1v7zrd"
        }]
      ])
    },
    90425: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var a = r(12115);
      let i = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim(),
        s = e => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
          return t.charAt(0).toUpperCase() + t.slice(1)
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
      let d = (0, a.forwardRef)(({
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: r = 2,
          absoluteStrokeWidth: s,
          className: d = "",
          children: o,
          iconNode: l,
          ...c
        }, u) => (0, a.createElement)("svg", {
          ref: u,
          ...n,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: s ? 24 * Number(r) / Number(t) : r,
          className: i("lucide", d),
          ...!o && !(e => {
            for (let t in e)
              if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
            return !1
          })(c) && {
            "aria-hidden": "true"
          },
          ...c
        }, [...l.map(([e, t]) => (0, a.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
        o = (e, t) => {
          let r = (0, a.forwardRef)(({
            className: r,
            ...n
          }, o) => (0, a.createElement)(d, {
            ref: o,
            iconNode: t,
            className: i(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, r),
            ...n
          }));
          return r.displayName = s(e), r
        }
    }
  },
  e => {
    e.O(0, [9055, 8441, 3794, 7358], () => e(e.s = 84717)), _N_E = e.O()
  }
]);