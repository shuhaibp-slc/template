"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3533], {
    1433: (e, r, t) => {
      t.r(r), t.d(r, {
        Anchor: () => Z,
        Arrow: () => H,
        Close: () => Y,
        Content: () => V,
        Popover: () => C,
        PopoverAnchor: () => N,
        PopoverArrow: () => G,
        PopoverClose: () => W,
        PopoverContent: () => I,
        PopoverPortal: () => F,
        PopoverTrigger: () => z,
        Portal: () => J,
        Root: () => U,
        Trigger: () => q,
        createPopoverScope: () => w
      });
      var n = t(12115),
        a = t(70379),
        o = t(47527),
        i = t(68599),
        l = t(22138),
        s = t(32007),
        d = t(16313),
        c = t(89971),
        u = t(49883),
        p = t(5494),
        f = t(83935);
      t(47650);
      var h = t(42442),
        v = t(95155),
        m = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          let t = (0, h.TL)(`Primitive.${r}`),
            a = n.forwardRef((e, n) => {
              let {
                asChild: a,
                ...o
              } = e;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, v.jsx)(a ? t : r, {
                ...o,
                ref: n
              })
            });
          return a.displayName = `Primitive.${r}`, {
            ...e,
            [r]: a
          }
        }, {}),
        g = t(98979),
        y = t(22954),
        x = t(5174),
        b = "Popover",
        [k, w] = (0, i.A)(b, [u.Bk]),
        A = (0, u.Bk)(),
        [j, P] = k(b),
        C = e => {
          let {
            __scopePopover: r,
            children: t,
            open: a,
            defaultOpen: o,
            onOpenChange: i,
            modal: l = !1
          } = e, s = A(r), d = n.useRef(null), [p, f] = n.useState(!1), [h, m] = (0, g.i)({
            prop: a,
            defaultProp: o ?? !1,
            onChange: i,
            caller: b
          });
          return (0, v.jsx)(u.bL, {
            ...s,
            children: (0, v.jsx)(j, {
              scope: r,
              contentId: (0, c.B)(),
              triggerRef: d,
              open: h,
              onOpenChange: m,
              onOpenToggle: n.useCallback(() => m(e => !e), [m]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: n.useCallback(() => f(!0), []),
              onCustomAnchorRemove: n.useCallback(() => f(!1), []),
              modal: l,
              children: t
            })
          })
        };
      C.displayName = b;
      var O = "PopoverAnchor",
        N = n.forwardRef((e, r) => {
          let {
            __scopePopover: t,
            ...a
          } = e, o = P(O, t), i = A(t), {
            onCustomAnchorAdd: l,
            onCustomAnchorRemove: s
          } = o;
          return n.useEffect(() => (l(), () => s()), [l, s]), (0, v.jsx)(u.Mz, {
            ...i,
            ...a,
            ref: r
          })
        });
      N.displayName = O;
      var E = "PopoverTrigger",
        z = n.forwardRef((e, r) => {
          let {
            __scopePopover: t,
            ...n
          } = e, i = P(E, t), l = A(t), s = (0, o.s)(r, i.triggerRef), d = (0, v.jsx)(m.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": K(i.open),
            ...n,
            ref: s,
            onClick: (0, a.mK)(e.onClick, i.onOpenToggle)
          });
          return i.hasCustomAnchor ? d : (0, v.jsx)(u.Mz, {
            asChild: !0,
            ...l,
            children: d
          })
        });
      z.displayName = E;
      var M = "PopoverPortal",
        [R, D] = k(M, {
          forceMount: void 0
        }),
        F = e => {
          let {
            __scopePopover: r,
            forceMount: t,
            children: n,
            container: a
          } = e, o = P(M, r);
          return (0, v.jsx)(R, {
            scope: r,
            forceMount: t,
            children: (0, v.jsx)(f.C, {
              present: t || o.open,
              children: (0, v.jsx)(p.Portal, {
                asChild: !0,
                container: a,
                children: n
              })
            })
          })
        };
      F.displayName = M;
      var S = "PopoverContent",
        I = n.forwardRef((e, r) => {
          let t = D(S, e.__scopePopover),
            {
              forceMount: n = t.forceMount,
              ...a
            } = e,
            o = P(S, e.__scopePopover);
          return (0, v.jsx)(f.C, {
            present: n || o.open,
            children: o.modal ? (0, v.jsx)(_, {
              ...a,
              ref: r
            }) : (0, v.jsx)(L, {
              ...a,
              ref: r
            })
          })
        });
      I.displayName = S;
      var T = (0, h.TL)("PopoverContent.RemoveScroll"),
        _ = n.forwardRef((e, r) => {
          let t = P(S, e.__scopePopover),
            i = n.useRef(null),
            l = (0, o.s)(r, i),
            s = n.useRef(!1);
          return n.useEffect(() => {
            let e = i.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, v.jsx)(x.A, {
            as: T,
            allowPinchZoom: !0,
            children: (0, v.jsx)($, {
              ...e,
              ref: l,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, a.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, a.mK)(e.onPointerDownOutside, e => {
                let r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey;
                s.current = 2 === r.button || t
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, a.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        L = n.forwardRef((e, r) => {
          let t = P(S, e.__scopePopover),
            a = n.useRef(!1),
            o = n.useRef(!1);
          return (0, v.jsx)($, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
              e.onCloseAutoFocus?.(r), r.defaultPrevented || (a.current || t.triggerRef.current?.focus(), r.preventDefault()), a.current = !1, o.current = !1
            },
            onInteractOutside: r => {
              e.onInteractOutside?.(r), r.defaultPrevented || (a.current = !0, "pointerdown" === r.detail.originalEvent.type && (o.current = !0));
              let n = r.target;
              t.triggerRef.current?.contains(n) && r.preventDefault(), "focusin" === r.detail.originalEvent.type && o.current && r.preventDefault()
            }
          })
        }),
        $ = n.forwardRef((e, r) => {
          let {
            __scopePopover: t,
            trapFocus: n,
            onOpenAutoFocus: a,
            onCloseAutoFocus: o,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: c,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: h,
            ...m
          } = e, g = P(S, t), y = A(t);
          return (0, s.Oh)(), (0, v.jsx)(d.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: a,
            onUnmountAutoFocus: o,
            children: (0, v.jsx)(l.qW, {
              asChild: !0,
              disableOutsidePointerEvents: i,
              onInteractOutside: h,
              onEscapeKeyDown: c,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => g.onOpenChange(!1),
              children: (0, v.jsx)(u.UC, {
                "data-state": K(g.open),
                role: "dialog",
                id: g.contentId,
                ...y,
                ...m,
                ref: r,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        B = "PopoverClose",
        W = n.forwardRef((e, r) => {
          let {
            __scopePopover: t,
            ...n
          } = e, o = P(B, t);
          return (0, v.jsx)(m.button, {
            type: "button",
            ...n,
            ref: r,
            onClick: (0, a.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      W.displayName = B;
      var G = n.forwardRef((e, r) => {
        let {
          __scopePopover: t,
          ...n
        } = e, a = A(t);
        return (0, v.jsx)(u.i3, {
          ...a,
          ...n,
          ref: r
        })
      });

      function K(e) {
        return e ? "open" : "closed"
      }
      G.displayName = "PopoverArrow";
      var U = C,
        Z = N,
        q = z,
        J = F,
        V = I,
        Y = W,
        H = G
    },
    7810: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("users", [
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
    7915: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("eye", [
        ["path", {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0"
        }],
        ["circle", {
          cx: "12",
          cy: "12",
          r: "3",
          key: "1v7zrd"
        }]
      ])
    },
    16746: (e, r, t) => {
      t.d(r, {
        b: () => l
      });
      var n = t(12115),
        a = t(95295),
        o = t(80598),
        i = ["axis"],
        l = (0, n.forwardRef)((e, r) => n.createElement(o.P, {
          chartName: "LineChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: i,
          tooltipPayloadSearcher: a.uN,
          categoricalChartProps: e,
          ref: r
        }))
    },
    17347: (e, r, t) => {
      t.d(r, {
        c: () => a
      });
      var n = t(12115);

      function a(e) {
        let r = n.useRef(e);
        return n.useEffect(() => {
          r.current = e
        }), n.useMemo(() => (...e) => r.current?.(...e), [])
      }
    },
    18460: (e, r, t) => {
      t.d(r, {
        F: () => i
      });
      var n = t(29722);
      let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        o = n.$,
        i = (e, r) => t => {
          var n;
          if ((null == r ? void 0 : r.variants) == null) return o(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
          let {
            variants: i,
            defaultVariants: l
          } = r, s = Object.keys(i).map(e => {
            let r = null == t ? void 0 : t[e],
              n = null == l ? void 0 : l[e];
            if (null === r) return null;
            let o = a(r) || a(n);
            return i[e][o]
          }), d = t && Object.entries(t).reduce((e, r) => {
            let [t, n] = r;
            return void 0 === n || (e[t] = n), e
          }, {});
          return o(e, s, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, r) => {
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
    23317: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("mouse-pointer", [
        ["path", {
          d: "M12.586 12.586 19 19",
          key: "ea5xo7"
        }],
        ["path", {
          d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
          key: "277e5u"
        }]
      ])
    },
    27557: (e, r, t) => {
      t.d(r, {
        U: () => f
      });
      var n = t(95155),
        a = t(12115),
        o = t(72140),
        i = t(39055),
        l = t(97796),
        s = t(35125);
      let d = [{
        label: "Last 7 days",
        days: 7
      }, {
        label: "Last 30 days",
        days: 30
      }, {
        label: "Last 90 days",
        days: 90
      }, {
        label: "Last year",
        days: 365
      }, {
        label: "All time",
        days: null
      }];

      function c(e) {
        return e.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        })
      }

      function u(e) {
        let r = e.getFullYear(),
          t = String(e.getMonth() + 1).padStart(2, "0"),
          n = String(e.getDate()).padStart(2, "0");
        return `${r}-${t}-${n}`
      }

      function p(e) {
        let [r, t, n] = e.split("-").map(Number);
        return new Date(r, t - 1, n)
      }

      function f({
        value: e,
        onChange: r,
        className: t
      }) {
        let [f, h] = (0, a.useState)(!1), v = (0, a.useCallback)(e => {
          let t, n = new Date;
          r({
            from: null !== e ? ((t = new Date).setDate(t.getDate() - e), t) : new Date(2020, 0, 1),
            to: n
          }), h(!1)
        }, [r]), m = (0, a.useCallback)(t => {
          if (!t.target.value) return;
          let n = p(t.target.value);
          n <= e.to && r({
            from: n,
            to: e.to
          })
        }, [r, e.to]), g = (0, a.useCallback)(t => {
          if (!t.target.value) return;
          let n = p(t.target.value);
          n >= e.from && r({
            from: e.from,
            to: n
          })
        }, [r, e.from]), y = `${c(e.from)} \u2013 ${c(e.to)}`;
        return (0, n.jsxs)(l.AM, {
          open: f,
          onOpenChange: h,
          children: [(0, n.jsx)(l.Wv, {
            asChild: !0,
            children: (0, n.jsxs)(s.$, {
              variant: "outline",
              size: "sm",
              className: (0, i.cn)("justify-start gap-2 font-normal text-muted-foreground", t),
              children: [(0, n.jsx)(o.A, {
                className: "size-4 shrink-0"
              }), (0, n.jsx)("span", {
                className: "truncate",
                children: y
              })]
            })
          }), (0, n.jsxs)(l.hl, {
            align: "end",
            className: "w-80 p-0",
            children: [(0, n.jsxs)("div", {
              className: "border-b border-border p-4",
              children: [(0, n.jsx)("p", {
                className: "mb-3 text-xs font-medium text-muted-foreground",
                children: "Custom range"
              }), (0, n.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0, n.jsxs)("div", {
                  className: "flex-1",
                  children: [(0, n.jsx)("label", {
                    className: "mb-1 block text-[11px] text-muted-foreground",
                    children: "From"
                  }), (0, n.jsx)("input", {
                    type: "date",
                    value: u(e.from),
                    max: u(e.to),
                    onChange: m,
                    className: "h-8 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                  })]
                }), (0, n.jsx)("span", {
                  className: "mt-4 text-xs text-muted-foreground",
                  children: "–"
                }), (0, n.jsxs)("div", {
                  className: "flex-1",
                  children: [(0, n.jsx)("label", {
                    className: "mb-1 block text-[11px] text-muted-foreground",
                    children: "To"
                  }), (0, n.jsx)("input", {
                    type: "date",
                    value: u(e.to),
                    min: u(e.from),
                    max: u(new Date),
                    onChange: g,
                    className: "h-8 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                  })]
                })]
              })]
            }), (0, n.jsx)("div", {
              className: "flex flex-col gap-0.5 p-2",
              children: d.map(e => (0, n.jsx)("button", {
                onClick: () => v(e.days),
                className: "rounded-md px-3 py-1.5 text-start text-sm text-foreground transition-colors hover:bg-accent",
                children: e.label
              }, e.label))
            })]
          })]
        })
      }
    },
    28408: (e, r, t) => {
      t.d(r, {
        d: () => S
      });
      var n = t(12115),
        a = t(43077),
        o = t(92191),
        i = t(39168),
        l = t(87384),
        s = t(32848),
        d = t(65372),
        c = t(44531),
        u = t(10365),
        p = t(64105),
        f = t(43527),
        h = t(23651),
        v = t(99498),
        m = t(10483),
        g = t(51531),
        y = ["x1", "y1", "x2", "y2", "key"],
        x = ["offset"],
        b = ["xAxisId", "yAxisId"],
        k = ["xAxisId", "yAxisId"];

      function w(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function A(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? w(Object(t), !0).forEach(function(r) {
            var n, a, o;
            n = e, a = r, o = t[r], (a = function(e) {
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
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function j() {
        return (j = Object.assign ? Object.assign.bind() : function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }).apply(null, arguments)
      }

      function P(e, r) {
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
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) t = o[n], -1 === r.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (a[t] = e[t])
        }
        return a
      }
      var C = e => {
        var {
          fill: r
        } = e;
        if (!r || "none" === r) return null;
        var {
          fillOpacity: t,
          x: a,
          y: o,
          width: i,
          height: l,
          ry: s
        } = e;
        return n.createElement("rect", {
          x: a,
          y: o,
          ry: s,
          width: i,
          height: l,
          stroke: "none",
          fill: r,
          fillOpacity: t,
          className: "recharts-cartesian-grid-bg"
        })
      };

      function O(e) {
        var {
          option: r,
          lineItemProps: t
        } = e;
        if (n.isValidElement(r)) a = n.cloneElement(r, t);
        else if ("function" == typeof r) a = r(t);
        else {
          var a, o, {
              x1: i,
              y1: l,
              x2: s,
              y2: d,
              key: c
            } = t,
            u = P(t, y),
            p = null != (o = (0, h.uZ)(u)) ? o : {},
            {
              offset: f
            } = p,
            v = P(p, x);
          a = n.createElement("line", j({}, v, {
            x1: i,
            y1: l,
            x2: s,
            y2: d,
            fill: "none",
            key: c
          }))
        }
        return a
      }

      function N(e) {
        var {
          x: r,
          width: t,
          horizontal: a = !0,
          horizontalPoints: o
        } = e;
        if (!a || !o || !o.length) return null;
        var {
          xAxisId: i,
          yAxisId: l
        } = e, s = P(e, b), d = o.map((e, o) => {
          var i = A(A({}, s), {}, {
            x1: r,
            y1: e,
            x2: r + t,
            y2: e,
            key: "line-".concat(o),
            index: o
          });
          return n.createElement(O, {
            key: "line-".concat(o),
            option: a,
            lineItemProps: i
          })
        });
        return n.createElement("g", {
          className: "recharts-cartesian-grid-horizontal"
        }, d)
      }

      function E(e) {
        var {
          y: r,
          height: t,
          vertical: a = !0,
          verticalPoints: o
        } = e;
        if (!a || !o || !o.length) return null;
        var {
          xAxisId: i,
          yAxisId: l
        } = e, s = P(e, k), d = o.map((e, o) => {
          var i = A(A({}, s), {}, {
            x1: e,
            y1: r,
            x2: e,
            y2: r + t,
            key: "line-".concat(o),
            index: o
          });
          return n.createElement(O, {
            option: a,
            lineItemProps: i,
            key: "line-".concat(o)
          })
        });
        return n.createElement("g", {
          className: "recharts-cartesian-grid-vertical"
        }, d)
      }

      function z(e) {
        var {
          horizontalFill: r,
          fillOpacity: t,
          x: a,
          y: o,
          width: i,
          height: l,
          horizontalPoints: s,
          horizontal: d = !0
        } = e;
        if (!d || !r || !r.length || null == s) return null;
        var c = s.map(e => Math.round(e + o - o)).sort((e, r) => e - r);
        o !== c[0] && c.unshift(0);
        var u = c.map((e, s) => {
          var d = c[s + 1],
            u = null == d ? o + l - e : d - e;
          if (u <= 0) return null;
          var p = s % r.length;
          return n.createElement("rect", {
            key: "react-".concat(s),
            y: e,
            x: a,
            height: u,
            width: i,
            stroke: "none",
            fill: r[p],
            fillOpacity: t,
            className: "recharts-cartesian-grid-bg"
          })
        });
        return n.createElement("g", {
          className: "recharts-cartesian-gridstripes-horizontal"
        }, u)
      }

      function M(e) {
        var {
          vertical: r = !0,
          verticalFill: t,
          fillOpacity: a,
          x: o,
          y: i,
          width: l,
          height: s,
          verticalPoints: d
        } = e;
        if (!r || !t || !t.length) return null;
        var c = d.map(e => Math.round(e + o - o)).sort((e, r) => e - r);
        o !== c[0] && c.unshift(0);
        var u = c.map((e, r) => {
          var d = c[r + 1],
            u = null == d ? o + l - e : d - e;
          if (u <= 0) return null;
          var p = r % t.length;
          return n.createElement("rect", {
            key: "react-".concat(r),
            x: e,
            y: i,
            width: u,
            height: s,
            stroke: "none",
            fill: t[p],
            fillOpacity: a,
            className: "recharts-cartesian-grid-bg"
          })
        });
        return n.createElement("g", {
          className: "recharts-cartesian-gridstripes-vertical"
        }, u)
      }
      var R = (e, r) => {
          var {
            xAxis: t,
            width: n,
            height: a,
            offset: o
          } = e;
          return (0, i.PW)((0, l.f)(A(A(A({}, s.F), t), {}, {
            ticks: (0, i.Rh)(t, !0),
            viewBox: {
              x: 0,
              y: 0,
              width: n,
              height: a
            }
          })), o.left, o.left + o.width, r)
        },
        D = (e, r) => {
          var {
            yAxis: t,
            width: n,
            height: a,
            offset: o
          } = e;
          return (0, i.PW)((0, l.f)(A(A(A({}, s.F), t), {}, {
            ticks: (0, i.Rh)(t, !0),
            viewBox: {
              x: 0,
              y: 0,
              width: n,
              height: a
            }
          })), o.top, o.top + o.height, r)
        },
        F = {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
          xAxisId: 0,
          yAxisId: 0,
          syncWithTicks: !1,
          zIndex: g.I.grid
        };

      function S(e) {
        var r = (0, d.yi)(),
          t = (0, d.rY)(),
          i = (0, d.W7)(),
          l = A(A({}, (0, f.e)(e, F)), {}, {
            x: (0, o.Et)(e.x) ? e.x : i.left,
            y: (0, o.Et)(e.y) ? e.y : i.top,
            width: (0, o.Et)(e.width) ? e.width : i.width,
            height: (0, o.Et)(e.height) ? e.height : i.height
          }),
          {
            xAxisId: s,
            yAxisId: h,
            x: g,
            y,
            width: x,
            height: b,
            syncWithTicks: k,
            horizontalValues: w,
            verticalValues: P
          } = l,
          O = (0, p.r)(),
          S = (0, u.G)(e => (0, c.ZB)(e, "xAxis", s, O)),
          I = (0, u.G)(e => (0, c.ZB)(e, "yAxis", h, O));
        if (!(0, v.F)(x) || !(0, v.F)(b) || !(0, o.Et)(g) || !(0, o.Et)(y)) return null;
        var T = l.verticalCoordinatesGenerator || R,
          _ = l.horizontalCoordinatesGenerator || D,
          {
            horizontalPoints: L,
            verticalPoints: $
          } = l;
        if ((!L || !L.length) && "function" == typeof _) {
          var B = w && w.length,
            W = _({
              yAxis: I ? A(A({}, I), {}, {
                ticks: B ? w : I.ticks
              }) : void 0,
              width: null != r ? r : x,
              height: null != t ? t : b,
              offset: i
            }, !!B || k);
          (0, a.R)(Array.isArray(W), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof W, "]")), Array.isArray(W) && (L = W)
        }
        if ((!$ || !$.length) && "function" == typeof T) {
          var G = P && P.length,
            K = T({
              xAxis: S ? A(A({}, S), {}, {
                ticks: G ? P : S.ticks
              }) : void 0,
              width: null != r ? r : x,
              height: null != t ? t : b,
              offset: i
            }, !!G || k);
          (0, a.R)(Array.isArray(K), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof K, "]")), Array.isArray(K) && ($ = K)
        }
        return n.createElement(m.g, {
          zIndex: l.zIndex
        }, n.createElement("g", {
          className: "recharts-cartesian-grid"
        }, n.createElement(C, {
          fill: l.fill,
          fillOpacity: l.fillOpacity,
          x: l.x,
          y: l.y,
          width: l.width,
          height: l.height,
          ry: l.ry
        }), n.createElement(z, j({}, l, {
          horizontalPoints: L
        })), n.createElement(M, j({}, l, {
          verticalPoints: $
        })), n.createElement(N, j({}, l, {
          offset: i,
          horizontalPoints: L,
          xAxis: S,
          yAxis: I
        })), n.createElement(E, j({}, l, {
          offset: i,
          verticalPoints: $,
          xAxis: S,
          yAxis: I
        }))))
      }
      S.displayName = "CartesianGrid"
    },
    35125: (e, r, t) => {
      t.d(r, {
        $: () => s
      });
      var n = t(95155);
      t(12115);
      var a = t(18460),
        o = t(42442),
        i = t(39055);
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

      function s({
        className: e,
        variant: r = "default",
        size: t = "default",
        asChild: a = !1,
        ...s
      }) {
        let d = a ? o.bL : "button";
        return (0, n.jsx)(d, {
          "data-slot": "button",
          "data-variant": r,
          "data-size": t,
          className: (0, i.cn)(l({
            variant: r,
            size: t,
            className: e
          })),
          ...s
        })
      }
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
    44138: (e, r, t) => {
      t.d(r, {
        xl: () => n
      });
      let n = [{
        month: "Jan",
        revenue: 18400,
        orders: 245,
        profit: 6200
      }, {
        month: "Feb",
        revenue: 22100,
        orders: 312,
        profit: 8100
      }, {
        month: "Mar",
        revenue: 19800,
        orders: 278,
        profit: 7200
      }, {
        month: "Apr",
        revenue: 28300,
        orders: 389,
        profit: 11400
      }, {
        month: "May",
        revenue: 32100,
        orders: 421,
        profit: 13200
      }, {
        month: "Jun",
        revenue: 29500,
        orders: 385,
        profit: 11800
      }, {
        month: "Jul",
        revenue: 35800,
        orders: 467,
        profit: 15600
      }, {
        month: "Aug",
        revenue: 38200,
        orders: 498,
        profit: 16800
      }, {
        month: "Sep",
        revenue: 41500,
        orders: 534,
        profit: 18200
      }, {
        month: "Oct",
        revenue: 39800,
        orders: 512,
        profit: 17100
      }, {
        month: "Nov",
        revenue: 44200,
        orders: 578,
        profit: 19800
      }, {
        month: "Dec",
        revenue: 48295,
        orders: 612,
        profit: 22100
      }]
    },
    48035: (e, r, t) => {
      t.d(r, {
        E: () => l
      });
      var n = t(12115),
        a = t(95295),
        o = t(80598),
        i = ["axis", "item"],
        l = (0, n.forwardRef)((e, r) => n.createElement(o.P, {
          chartName: "BarChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: i,
          tooltipPayloadSearcher: a.uN,
          categoricalChartProps: e,
          ref: r
        }))
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
    72140: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("calendar-days", [
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
        }],
        ["path", {
          d: "M8 14h.01",
          key: "6423bh"
        }],
        ["path", {
          d: "M12 14h.01",
          key: "1etili"
        }],
        ["path", {
          d: "M16 14h.01",
          key: "1gbofw"
        }],
        ["path", {
          d: "M8 18h.01",
          key: "lrp35t"
        }],
        ["path", {
          d: "M12 18h.01",
          key: "mhygvu"
        }],
        ["path", {
          d: "M16 18h.01",
          key: "kzsmim"
        }]
      ])
    },
    84980: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      let n = (0, t(90425).A)("clock", [
        ["path", {
          d: "M12 6v6l4 2",
          key: "mmk7yg"
        }],
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }]
      ])
    },
    89971: (e, r, t) => {
      t.d(r, {
        B: () => s
      });
      var n, a = t(12115),
        o = t(66294),
        i = (n || (n = t.t(a, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;

      function s(e) {
        let [r, t] = a.useState(i());
        return (0, o.N)(() => {
          e || t(e => e ?? String(l++))
        }, [e]), e || (r ? `radix-${r}` : "")
      }
    },
    90425: (e, r, t) => {
      t.d(r, {
        A: () => s
      });
      var n = t(12115);
      let a = (...e) => e.filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r).join(" ").trim(),
        o = e => {
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
      let l = (0, n.forwardRef)(({
          color: e = "currentColor",
          size: r = 24,
          strokeWidth: t = 2,
          absoluteStrokeWidth: o,
          className: l = "",
          children: s,
          iconNode: d,
          ...c
        }, u) => (0, n.createElement)("svg", {
          ref: u,
          ...i,
          width: r,
          height: r,
          stroke: e,
          strokeWidth: o ? 24 * Number(t) / Number(r) : t,
          className: a("lucide", l),
          ...!s && !(e => {
            for (let r in e)
              if (r.startsWith("aria-") || "role" === r || "title" === r) return !0;
            return !1
          })(c) && {
            "aria-hidden": "true"
          },
          ...c
        }, [...d.map(([e, r]) => (0, n.createElement)(e, r)), ...Array.isArray(s) ? s : [s]])),
        s = (e, r) => {
          let t = (0, n.forwardRef)(({
            className: t,
            ...i
          }, s) => (0, n.createElement)(l, {
            ref: s,
            iconNode: r,
            className: a(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, t),
            ...i
          }));
          return t.displayName = o(e), t
        }
    },
    97796: (e, r, t) => {
      t.d(r, {
        AM: () => i,
        Wv: () => l,
        hl: () => s
      });
      var n = t(95155);
      t(12115);
      var a = t(1433),
        o = t(39055);

      function i({
        ...e
      }) {
        return (0, n.jsx)(a.Root, {
          "data-slot": "popover",
          ...e
        })
      }

      function l({
        ...e
      }) {
        return (0, n.jsx)(a.Trigger, {
          "data-slot": "popover-trigger",
          ...e
        })
      }

      function s({
        className: e,
        align: r = "center",
        sideOffset: t = 4,
        ...i
      }) {
        return (0, n.jsx)(a.Portal, {
          children: (0, n.jsx)(a.Content, {
            "data-slot": "popover-content",
            align: r,
            sideOffset: t,
            className: (0, o.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", e),
            ...i
          })
        })
      }
    }
  }
]);