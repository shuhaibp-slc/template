"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7417], {
    41656: (t, e, a) => {
      a.d(e, {
        q7: () => N,
        bL: () => D,
        RG: () => j
      });
      var r = a(12115),
        n = a(70379),
        o = a(76094),
        i = a(47527),
        s = a(68599),
        l = a(89971);
      a(47650);
      var u = a(42442),
        d = a(95155),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
          let a = (0, u.TL)(`Primitive.${e}`),
            n = r.forwardRef((t, r) => {
              let {
                asChild: n,
                ...o
              } = t;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(n ? a : e, {
                ...o,
                ref: r
              })
            });
          return n.displayName = `Primitive.${e}`, {
            ...t,
            [e]: n
          }
        }, {}),
        f = a(17347),
        v = a(98979),
        p = a(1933),
        b = "rovingFocusGroup.onEntryFocus",
        g = {
          bubbles: !1,
          cancelable: !0
        },
        m = "RovingFocusGroup",
        [h, w, x] = (0, o.N)(m),
        [y, j] = (0, s.A)(m, [x]),
        [R, T] = y(m),
        k = r.forwardRef((t, e) => (0, d.jsx)(h.Provider, {
          scope: t.__scopeRovingFocusGroup,
          children: (0, d.jsx)(h.Slot, {
            scope: t.__scopeRovingFocusGroup,
            children: (0, d.jsx)(C, {
              ...t,
              ref: e
            })
          })
        }));
      k.displayName = m;
      var C = r.forwardRef((t, e) => {
          let {
            __scopeRovingFocusGroup: a,
            orientation: o,
            loop: s = !1,
            dir: l,
            currentTabStopId: u,
            defaultCurrentTabStopId: h,
            onCurrentTabStopIdChange: x,
            onEntryFocus: y,
            preventScrollOnEntryFocus: j = !1,
            ...T
          } = t, k = r.useRef(null), C = (0, i.s)(e, k), F = (0, p.jH)(l), [I, K] = (0, v.i)({
            prop: u,
            defaultProp: h ?? null,
            onChange: x,
            caller: m
          }), [D, N] = r.useState(!1), E = (0, f.c)(y), L = w(a), S = r.useRef(!1), [_, z] = r.useState(0);
          return r.useEffect(() => {
            let t = k.current;
            if (t) return t.addEventListener(b, E), () => t.removeEventListener(b, E)
          }, [E]), (0, d.jsx)(R, {
            scope: a,
            orientation: o,
            dir: F,
            loop: s,
            currentTabStopId: I,
            onItemFocus: r.useCallback(t => K(t), [K]),
            onItemShiftTab: r.useCallback(() => N(!0), []),
            onFocusableItemAdd: r.useCallback(() => z(t => t + 1), []),
            onFocusableItemRemove: r.useCallback(() => z(t => t - 1), []),
            children: (0, d.jsx)(c.div, {
              tabIndex: D || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...T,
              ref: C,
              style: {
                outline: "none",
                ...t.style
              },
              onMouseDown: (0, n.mK)(t.onMouseDown, () => {
                S.current = !0
              }),
              onFocus: (0, n.mK)(t.onFocus, t => {
                let e = !S.current;
                if (t.target === t.currentTarget && e && !D) {
                  let e = new CustomEvent(b, g);
                  if (t.currentTarget.dispatchEvent(e), !e.defaultPrevented) {
                    let t = L().filter(t => t.focusable);
                    A([t.find(t => t.active), t.find(t => t.id === I), ...t].filter(Boolean).map(t => t.ref.current), j)
                  }
                }
                S.current = !1
              }),
              onBlur: (0, n.mK)(t.onBlur, () => N(!1))
            })
          })
        }),
        F = "RovingFocusGroupItem",
        I = r.forwardRef((t, e) => {
          let {
            __scopeRovingFocusGroup: a,
            focusable: o = !0,
            active: i = !1,
            tabStopId: s,
            children: u,
            ...f
          } = t, v = (0, l.B)(), p = s || v, b = T(F, a), g = b.currentTabStopId === p, m = w(a), {
            onFocusableItemAdd: x,
            onFocusableItemRemove: y,
            currentTabStopId: j
          } = b;
          return r.useEffect(() => {
            if (o) return x(), () => y()
          }, [o, x, y]), (0, d.jsx)(h.ItemSlot, {
            scope: a,
            id: p,
            focusable: o,
            active: i,
            children: (0, d.jsx)(c.span, {
              tabIndex: g ? 0 : -1,
              "data-orientation": b.orientation,
              ...f,
              ref: e,
              onMouseDown: (0, n.mK)(t.onMouseDown, t => {
                o ? b.onItemFocus(p) : t.preventDefault()
              }),
              onFocus: (0, n.mK)(t.onFocus, () => b.onItemFocus(p)),
              onKeyDown: (0, n.mK)(t.onKeyDown, t => {
                if ("Tab" === t.key && t.shiftKey) return void b.onItemShiftTab();
                if (t.target !== t.currentTarget) return;
                let e = function(t, e, a) {
                  var r;
                  let n = (r = t.key, "rtl" !== a ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                  if (!("vertical" === e && ["ArrowLeft", "ArrowRight"].includes(n)) && !("horizontal" === e && ["ArrowUp", "ArrowDown"].includes(n))) return K[n]
                }(t, b.orientation, b.dir);
                if (void 0 !== e) {
                  if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                  t.preventDefault();
                  let n = m().filter(t => t.focusable).map(t => t.ref.current);
                  if ("last" === e) n.reverse();
                  else if ("prev" === e || "next" === e) {
                    var a, r;
                    "prev" === e && n.reverse();
                    let o = n.indexOf(t.currentTarget);
                    n = b.loop ? (a = n, r = o + 1, a.map((t, e) => a[(r + e) % a.length])) : n.slice(o + 1)
                  }
                  setTimeout(() => A(n))
                }
              }),
              children: "function" == typeof u ? u({
                isCurrentTabStop: g,
                hasTabStop: null != j
              }) : u
            })
          })
        });
      I.displayName = F;
      var K = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function A(t, e = !1) {
        let a = document.activeElement;
        for (let r of t)
          if (r === a || (r.focus({
              preventScroll: e
            }), document.activeElement !== a)) return
      }
      var D = k,
        N = I
    },
    61584: (t, e, a) => {
      a.r(e), a.d(e, {
        Content: () => N,
        List: () => A,
        Root: () => K,
        Tabs: () => x,
        TabsContent: () => C,
        TabsList: () => j,
        TabsTrigger: () => T,
        Trigger: () => D,
        createTabsScope: () => g
      });
      var r = a(12115),
        n = a(70379),
        o = a(68599),
        i = a(41656),
        s = a(83935);
      a(47650);
      var l = a(42442),
        u = a(95155),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
          let a = (0, l.TL)(`Primitive.${e}`),
            n = r.forwardRef((t, r) => {
              let {
                asChild: n,
                ...o
              } = t;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(n ? a : e, {
                ...o,
                ref: r
              })
            });
          return n.displayName = `Primitive.${e}`, {
            ...t,
            [e]: n
          }
        }, {}),
        c = a(1933),
        f = a(98979),
        v = a(89971),
        p = "Tabs",
        [b, g] = (0, o.A)(p, [i.RG]),
        m = (0, i.RG)(),
        [h, w] = b(p),
        x = r.forwardRef((t, e) => {
          let {
            __scopeTabs: a,
            value: r,
            onValueChange: n,
            defaultValue: o,
            orientation: i = "horizontal",
            dir: s,
            activationMode: l = "automatic",
            ...b
          } = t, g = (0, c.jH)(s), [m, w] = (0, f.i)({
            prop: r,
            onChange: n,
            defaultProp: o ?? "",
            caller: p
          });
          return (0, u.jsx)(h, {
            scope: a,
            baseId: (0, v.B)(),
            value: m,
            onValueChange: w,
            orientation: i,
            dir: g,
            activationMode: l,
            children: (0, u.jsx)(d.div, {
              dir: g,
              "data-orientation": i,
              ...b,
              ref: e
            })
          })
        });
      x.displayName = p;
      var y = "TabsList",
        j = r.forwardRef((t, e) => {
          let {
            __scopeTabs: a,
            loop: r = !0,
            ...n
          } = t, o = w(y, a), s = m(a);
          return (0, u.jsx)(i.bL, {
            asChild: !0,
            ...s,
            orientation: o.orientation,
            dir: o.dir,
            loop: r,
            children: (0, u.jsx)(d.div, {
              role: "tablist",
              "aria-orientation": o.orientation,
              ...n,
              ref: e
            })
          })
        });
      j.displayName = y;
      var R = "TabsTrigger",
        T = r.forwardRef((t, e) => {
          let {
            __scopeTabs: a,
            value: r,
            disabled: o = !1,
            ...s
          } = t, l = w(R, a), c = m(a), f = F(l.baseId, r), v = I(l.baseId, r), p = r === l.value;
          return (0, u.jsx)(i.q7, {
            asChild: !0,
            ...c,
            focusable: !o,
            active: p,
            children: (0, u.jsx)(d.button, {
              type: "button",
              role: "tab",
              "aria-selected": p,
              "aria-controls": v,
              "data-state": p ? "active" : "inactive",
              "data-disabled": o ? "" : void 0,
              disabled: o,
              id: f,
              ...s,
              ref: e,
              onMouseDown: (0, n.mK)(t.onMouseDown, t => {
                o || 0 !== t.button || !1 !== t.ctrlKey ? t.preventDefault() : l.onValueChange(r)
              }),
              onKeyDown: (0, n.mK)(t.onKeyDown, t => {
                [" ", "Enter"].includes(t.key) && l.onValueChange(r)
              }),
              onFocus: (0, n.mK)(t.onFocus, () => {
                let t = "manual" !== l.activationMode;
                p || o || !t || l.onValueChange(r)
              })
            })
          })
        });
      T.displayName = R;
      var k = "TabsContent",
        C = r.forwardRef((t, e) => {
          let {
            __scopeTabs: a,
            value: n,
            forceMount: o,
            children: i,
            ...l
          } = t, c = w(k, a), f = F(c.baseId, n), v = I(c.baseId, n), p = n === c.value, b = r.useRef(p);
          return r.useEffect(() => {
            let t = requestAnimationFrame(() => b.current = !1);
            return () => cancelAnimationFrame(t)
          }, []), (0, u.jsx)(s.C, {
            present: o || p,
            children: ({
              present: a
            }) => (0, u.jsx)(d.div, {
              "data-state": p ? "active" : "inactive",
              "data-orientation": c.orientation,
              role: "tabpanel",
              "aria-labelledby": f,
              hidden: !a,
              id: v,
              tabIndex: 0,
              ...l,
              ref: e,
              style: {
                ...t.style,
                animationDuration: b.current ? "0s" : void 0
              },
              children: a && i
            })
          })
        });

      function F(t, e) {
        return `${t}-trigger-${e}`
      }

      function I(t, e) {
        return `${t}-content-${e}`
      }
      C.displayName = k;
      var K = x,
        A = j,
        D = T,
        N = C
    },
    97417: (t, e, a) => {
      a.d(e, {
        Xi: () => d,
        av: () => c,
        j7: () => u,
        tU: () => s
      });
      var r = a(95155);
      a(12115);
      var n = a(18460),
        o = a(61584),
        i = a(39055);

      function s({
        className: t,
        orientation: e = "horizontal",
        ...a
      }) {
        return (0, r.jsx)(o.Root, {
          "data-slot": "tabs",
          "data-orientation": e,
          orientation: e,
          className: (0, i.cn)("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", t),
          ...a
        })
      }
      let l = (0, n.F)("rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col", {
        variants: {
          variant: {
            default: "bg-muted",
            line: "gap-1 bg-transparent"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      });

      function u({
        className: t,
        variant: e = "default",
        ...a
      }) {
        return (0, r.jsx)(o.List, {
          "data-slot": "tabs-list",
          "data-variant": e,
          className: (0, i.cn)(l({
            variant: e
          }), t),
          ...a
        })
      }

      function d({
        className: t,
        ...e
      }) {
        return (0, r.jsx)(o.Trigger, {
          "data-slot": "tabs-trigger",
          className: (0, i.cn)("focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground", "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:ltr:after:-right-1 group-data-[orientation=vertical]/tabs:rtl:after:-left-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", t),
          ...e
        })
      }

      function c({
        className: t,
        ...e
      }) {
        return (0, r.jsx)(o.Content, {
          "data-slot": "tabs-content",
          className: (0, i.cn)("flex-1 outline-none", t),
          ...e
        })
      }
    }
  }
]);