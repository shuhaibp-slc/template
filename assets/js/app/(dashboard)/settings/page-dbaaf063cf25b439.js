(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1670], {
    47170: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, {
        default: () => R
      });
      var s = r(95155),
        l = r(12115),
        t = r(62831),
        i = r(35125),
        c = r(50259),
        o = r(47385),
        n = r(62419),
        d = r(87125),
        m = r(84466),
        u = r(97417),
        h = r(27655),
        x = r(91231),
        p = r(50406),
        f = r(24658),
        b = r(51900),
        j = r(36999),
        y = r(92972),
        g = r(92451),
        v = r(39055),
        N = r(66609),
        k = r(61778),
        C = r(91264);
      let S = [{
          key: "coral",
          label: "Coral",
          hue: 30,
          chroma: .18
        }, {
          key: "teal",
          label: "Teal",
          hue: 175,
          chroma: .14
        }, {
          key: "blue",
          label: "Blue",
          hue: 230,
          chroma: .19
        }, {
          key: "violet",
          label: "Violet",
          hue: 280,
          chroma: .17
        }, {
          key: "sage",
          label: "Sage",
          hue: 145,
          chroma: .1
        }, {
          key: "amber",
          label: "Amber",
          hue: 60,
          chroma: .18
        }],
        w = "ember-color-preset";

      function P(e) {
        let a = document.documentElement.style,
          r = e.chroma < .05,
          s = `oklch(${r?.205:.62} ${e.chroma} ${e.hue})`;
        a.setProperty("--primary", s), a.setProperty("--primary-foreground", r ? "oklch(0.985 0 0)" : "oklch(1 0 0)"), a.setProperty("--sidebar-primary", s), r || a.setProperty("--chart-1", s), a.setProperty("--ring", r ? `oklch(0.708 ${e.chroma} ${e.hue})` : s)
      }
      let A = [{
          value: "compact",
          label: "Compact",
          icon: x.A
        }, {
          value: "comfortable",
          label: "Comfortable",
          icon: p.A
        }, {
          value: "spacious",
          label: "Spacious",
          icon: f.A
        }],
        B = "ember-density",
        $ = {
          compact: "density-compact",
          comfortable: "density-comfortable",
          spacious: "density-spacious"
        };

      function J(e) {
        let a = document.documentElement;
        Object.values($).forEach(e => a.classList.remove(e)), a.classList.add($[e])
      }

      function E() {
        return (0, s.jsxs)(t.Zp, {
          children: [(0, s.jsxs)(t.aR, {
            children: [(0, s.jsx)(t.ZB, {
              className: "text-base font-semibold",
              children: "Profile"
            }), (0, s.jsx)(t.BT, {
              children: "Update your personal information"
            })]
          }), (0, s.jsx)(t.Wu, {
            children: (0, s.jsxs)("form", {
              className: "space-y-6",
              onSubmit: e => {
                e.preventDefault(), N.oR.info("Demo mode — changes not saved")
              },
              children: [(0, s.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [(0, s.jsx)("div", {
                  className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary",
                  children: "AS"
                }), (0, s.jsxs)("div", {
                  children: [(0, s.jsx)(i.$, {
                    variant: "outline",
                    size: "sm",
                    children: "Change avatar"
                  }), (0, s.jsx)("p", {
                    className: "mt-1 text-xs text-muted-foreground",
                    children: "JPG, PNG or GIF. Max 2MB."
                  })]
                })]
              }), (0, s.jsx)(m.w, {}), (0, s.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [(0, s.jsxs)("div", {
                  className: "space-y-2",
                  children: [(0, s.jsx)(o.J, {
                    htmlFor: "firstName",
                    children: "First name"
                  }), (0, s.jsx)(c.p, {
                    id: "firstName",
                    defaultValue: "Aigars"
                  })]
                }), (0, s.jsxs)("div", {
                  className: "space-y-2",
                  children: [(0, s.jsx)(o.J, {
                    htmlFor: "lastName",
                    children: "Last name"
                  }), (0, s.jsx)(c.p, {
                    id: "lastName",
                    defaultValue: "Silkalns"
                  })]
                })]
              }), (0, s.jsxs)("div", {
                className: "space-y-2",
                children: [(0, s.jsx)(o.J, {
                  htmlFor: "email",
                  children: "Email"
                }), (0, s.jsx)(c.p, {
                  id: "email",
                  type: "email",
                  defaultValue: "aigars@colorlib.com"
                })]
              }), (0, s.jsxs)("div", {
                className: "space-y-2",
                children: [(0, s.jsx)(o.J, {
                  htmlFor: "bio",
                  children: "Bio"
                }), (0, s.jsx)(n.T, {
                  id: "bio",
                  placeholder: "Tell us about yourself...",
                  defaultValue: "Founder at Colorlib. Building beautiful web templates.",
                  className: "min-h-[100px]"
                })]
              }), (0, s.jsx)("div", {
                className: "flex justify-end",
                children: (0, s.jsx)(i.$, {
                  type: "submit",
                  children: "Save Changes"
                })
              })]
            })
          })]
        })
      }

      function F() {
        return (0, s.jsxs)(t.Zp, {
          children: [(0, s.jsxs)(t.aR, {
            children: [(0, s.jsx)(t.ZB, {
              className: "text-base font-semibold",
              children: "Preferences"
            }), (0, s.jsx)(t.BT, {
              children: "Manage your notification and communication preferences"
            })]
          }), (0, s.jsx)(t.Wu, {
            className: "space-y-6",
            children: [{
              id: "email-orders",
              label: "Order notifications",
              description: "Receive emails for new orders and status changes",
              defaultChecked: !0
            }, {
              id: "email-marketing",
              label: "Marketing emails",
              description: "Receive product updates and promotional content",
              defaultChecked: !1
            }, {
              id: "email-security",
              label: "Security alerts",
              description: "Get notified about suspicious account activity",
              defaultChecked: !0
            }, {
              id: "push-orders",
              label: "Push notifications",
              description: "Receive push notifications for real-time order updates",
              defaultChecked: !0
            }, {
              id: "weekly-digest",
              label: "Weekly digest",
              description: "Get a summary of your weekly performance",
              defaultChecked: !1
            }].map(e => (0, s.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, s.jsxs)("div", {
                className: "space-y-0.5",
                children: [(0, s.jsx)(o.J, {
                  htmlFor: e.id,
                  className: "text-sm font-medium",
                  children: e.label
                }), (0, s.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: e.description
                })]
              }), (0, s.jsx)(d.d, {
                id: e.id,
                defaultChecked: e.defaultChecked
              })]
            }, e.id))
          })]
        })
      }

      function I() {
        let {
          theme: e,
          setTheme: a
        } = (0, h.D)(), {
          locale: r,
          setLocale: i
        } = (0, k.Y)(), [c, n] = (0, l.useState)(() => localStorage.getItem(w) || "coral");
        (0, l.useEffect)(() => {
          let e = localStorage.getItem(w);
          P(S.find(a => a.key === (e ?? "coral")) ?? S[0])
        }, []);
        let [d, u] = (0, l.useState)(() => localStorage.getItem(B) || "comfortable");
        (0, l.useEffect)(() => {
          J(localStorage.getItem(B) ?? "comfortable")
        }, []);
        let x = [{
          value: "light",
          label: "Light",
          icon: b.A
        }, {
          value: "dark",
          label: "Dark",
          icon: j.A
        }, {
          value: "system",
          label: "System",
          icon: y.A
        }];
        return (0, s.jsxs)(t.Zp, {
          children: [(0, s.jsxs)(t.aR, {
            children: [(0, s.jsx)(t.ZB, {
              className: "text-base font-semibold",
              children: "Appearance"
            }), (0, s.jsx)(t.BT, {
              children: "Customize the look and feel of the dashboard"
            })]
          }), (0, s.jsxs)(t.Wu, {
            className: "space-y-8",
            children: [(0, s.jsxs)("div", {
              className: "space-y-4",
              children: [(0, s.jsx)(o.J, {
                children: "Theme"
              }), (0, s.jsx)("div", {
                className: "grid grid-cols-3 gap-3",
                children: x.map(r => {
                  let l = r.icon;
                  return (0, s.jsxs)("button", {
                    onClick: () => a(r.value),
                    className: (0, v.cn)("flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all", e === r.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"),
                    children: [(0, s.jsx)(l, {
                      className: (0, v.cn)("h-6 w-6", e === r.value ? "text-primary" : "text-muted-foreground")
                    }), (0, s.jsx)("span", {
                      className: (0, v.cn)("text-sm font-medium", e === r.value ? "text-primary" : "text-muted-foreground"),
                      children: r.label
                    })]
                  }, r.value)
                })
              })]
            }), (0, s.jsx)(m.w, {}), (0, s.jsxs)("div", {
              className: "space-y-4",
              children: [(0, s.jsx)(o.J, {
                children: "Color Scheme"
              }), (0, s.jsx)("div", {
                className: "grid grid-cols-3 gap-3",
                children: S.map(e => (0, s.jsxs)("button", {
                  onClick: () => {
                    n(e.key), localStorage.setItem(w, e.key), P(e)
                  },
                  className: (0, v.cn)("flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all", c === e.key ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"),
                  children: [(0, s.jsx)("span", {
                    className: "inline-block h-5 w-5 rounded-full",
                    style: {
                      backgroundColor: e.chroma < .05 ? `oklch(0.205 ${e.chroma} ${e.hue})` : `oklch(0.55 ${e.chroma} ${e.hue})`
                    }
                  }), (0, s.jsx)("span", {
                    className: (0, v.cn)("text-sm font-medium", c === e.key ? "text-primary" : "text-muted-foreground"),
                    children: e.label
                  })]
                }, e.key))
              })]
            }), (0, s.jsx)(m.w, {}), (0, s.jsxs)("div", {
              className: "space-y-4",
              children: [(0, s.jsx)(o.J, {
                children: "Density"
              }), (0, s.jsx)("div", {
                className: "grid grid-cols-3 gap-3",
                children: A.map(e => {
                  let a = e.icon;
                  return (0, s.jsxs)("button", {
                    onClick: () => {
                      var a;
                      u(a = e.value), localStorage.setItem(B, a), J(a)
                    },
                    className: (0, v.cn)("flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all", d === e.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"),
                    children: [(0, s.jsx)(a, {
                      className: (0, v.cn)("h-6 w-6", d === e.value ? "text-primary" : "text-muted-foreground")
                    }), (0, s.jsx)("span", {
                      className: (0, v.cn)("text-sm font-medium", d === e.value ? "text-primary" : "text-muted-foreground"),
                      children: e.label
                    })]
                  }, e.value)
                })
              })]
            }), (0, s.jsx)(m.w, {}), (0, s.jsxs)("div", {
              className: "space-y-4",
              children: [(0, s.jsx)(o.J, {
                children: "Language"
              }), (0, s.jsx)("div", {
                className: "grid grid-cols-3 gap-3",
                children: C.IB.map(e => (0, s.jsxs)("button", {
                  onClick: () => i(e.code),
                  className: (0, v.cn)("flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all", r === e.code ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"),
                  children: [(0, s.jsx)(g.A, {
                    className: (0, v.cn)("h-6 w-6", r === e.code ? "text-primary" : "text-muted-foreground")
                  }), (0, s.jsx)("span", {
                    className: (0, v.cn)("text-sm font-medium", r === e.code ? "text-primary" : "text-muted-foreground"),
                    children: e.label
                  })]
                }, e.code))
              })]
            })]
          })]
        })
      }

      function R() {
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: "mb-6",
            children: [(0, s.jsx)("h1", {
              className: "text-2xl font-bold tracking-tight",
              children: "Settings"
            }), (0, s.jsx)("p", {
              className: "mt-1 text-sm text-muted-foreground",
              children: "Manage your account settings and preferences."
            })]
          }), (0, s.jsxs)(u.tU, {
            defaultValue: "profile",
            children: [(0, s.jsxs)(u.j7, {
              children: [(0, s.jsx)(u.Xi, {
                value: "profile",
                children: "Profile"
              }), (0, s.jsx)(u.Xi, {
                value: "preferences",
                children: "Preferences"
              }), (0, s.jsx)(u.Xi, {
                value: "appearance",
                children: "Appearance"
              })]
            }), (0, s.jsx)(u.av, {
              value: "profile",
              children: (0, s.jsx)(E, {})
            }), (0, s.jsx)(u.av, {
              value: "preferences",
              children: (0, s.jsx)(F, {})
            }), (0, s.jsx)(u.av, {
              value: "appearance",
              children: (0, s.jsx)(I, {})
            })]
          })]
        })
      }
    },
    86020: (e, a, r) => {
      Promise.resolve().then(r.bind(r, 47170))
    }
  },
  e => {
    e.O(0, [9055, 6609, 6264, 7618, 7417, 5854, 7048, 8441, 3794, 7358], () => e(e.s = 86020)), _N_E = e.O()
  }
]);