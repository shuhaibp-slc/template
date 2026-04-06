"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4106], {
    7810: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("users", [
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
    7915: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("eye", [
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
    11951: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("award", [
        ["path", {
          d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
          key: "1yiouv"
        }],
        ["circle", {
          cx: "12",
          cy: "8",
          r: "6",
          key: "1vp47v"
        }]
      ])
    },
    18460: (e, t, a) => {
      a.d(t, {
        F: () => s
      });
      var r = a(29722);
      let i = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        n = r.$,
        s = (e, t) => a => {
          var r;
          if ((null == t ? void 0 : t.variants) == null) return n(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
          let {
            variants: s,
            defaultVariants: l
          } = t, d = Object.keys(s).map(e => {
            let t = null == a ? void 0 : a[e],
              r = null == l ? void 0 : l[e];
            if (null === t) return null;
            let n = i(t) || i(r);
            return s[e][n]
          }), o = a && Object.entries(a).reduce((e, t) => {
            let [a, r] = t;
            return void 0 === r || (e[a] = r), e
          }, {});
          return n(e, d, null == t || null == (r = t.compoundVariants) ? void 0 : r.reduce((e, t) => {
            let {
              class: a,
              className: r,
              ...i
            } = t;
            return Object.entries(i).every(e => {
              let [t, a] = e;
              return Array.isArray(a) ? a.includes({
                ...l,
                ...o
              } [t]) : ({
                ...l,
                ...o
              })[t] === a
            }) ? [...e, a, r] : e
          }, []), null == a ? void 0 : a.class, null == a ? void 0 : a.className)
        }
    },
    21362: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("chevron-right", [
        ["path", {
          d: "m9 18 6-6-6-6",
          key: "mthhwq"
        }]
      ])
    },
    24538: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("map-pin", [
        ["path", {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z"
        }],
        ["circle", {
          cx: "12",
          cy: "10",
          r: "3",
          key: "ilqhr7"
        }]
      ])
    },
    32135: (e, t, a) => {
      a.d(t, {
        Ft: () => d,
        LX: () => p,
        jK: () => o,
        m3: () => c,
        ps: () => u
      });
      let r = {
          id: "me",
          firstName: "Aigars",
          lastName: "Silkalns",
          initials: "AS",
          email: "aigars@apex.dev",
          role: "Admin",
          department: "Engineering",
          location: "Riga, Latvia",
          phone: "+371 2000 0000",
          bio: "Founder at Colorlib. Building beautiful web templates and admin dashboards. Passionate about clean UI, open-source, and making the web more accessible. Over 6 years of experience shipping production-grade frontend applications with React, TypeScript, and modern CSS.",
          joinDate: "2020-03-15",
          website: "colorlib.com"
        },
        i = [{
          label: "Projects",
          value: "12",
          iconType: "projects"
        }, {
          label: "Tasks Completed",
          value: "148",
          iconType: "tasks"
        }, {
          label: "Team Members",
          value: "8",
          iconType: "team"
        }, {
          label: "Experience",
          value: "6 yrs",
          iconType: "experience"
        }],
        n = [{
          name: "React",
          level: 95,
          color: "bg-chart-1"
        }, {
          name: "TypeScript",
          level: 90,
          color: "bg-chart-2"
        }, {
          name: "UI Design",
          level: 85,
          color: "bg-chart-3"
        }, {
          name: "Node.js",
          level: 80,
          color: "bg-chart-4"
        }, {
          name: "DevOps",
          level: 65,
          color: "bg-chart-5"
        }],
        s = [{
          id: "pa-1",
          type: "deploy",
          title: "Deployed v2.4.0 to production",
          description: "Includes Chat app, Email inbox, and File manager pages",
          time: "35 min ago",
          date: "2026-02-22"
        }, {
          id: "pa-2",
          type: "review",
          title: "Reviewed PR #247 — Design token updates",
          description: "Sarah Chen's OKLCh color improvements for dark mode",
          time: "2 hours ago",
          date: "2026-02-22"
        }, {
          id: "pa-3",
          type: "task",
          title: "Completed: File Manager page",
          description: "Grid/list views, folder navigation, upload dialog",
          time: "4 hours ago",
          date: "2026-02-22"
        }, {
          id: "pa-4",
          type: "commit",
          title: "Fixed hydration mismatch in Chat and Mail",
          description: "Replaced dynamic timestamps with fixed ISO strings",
          time: "5 hours ago",
          date: "2026-02-22"
        }, {
          id: "pa-5",
          type: "comment",
          title: "Commented on issue #312",
          description: "Suggested using TanStack Virtual for large table scroll performance",
          time: "Yesterday at 3:15 PM",
          date: "2026-02-21"
        }, {
          id: "pa-6",
          type: "commit",
          title: "Merged PR #245 — Advanced form components",
          description: "8 new UI primitives including Calendar, DatePicker, and Combobox",
          time: "Yesterday at 11:00 AM",
          date: "2026-02-21"
        }, {
          id: "pa-7",
          type: "deploy",
          title: "Deployed v2.3.8 hotfix",
          description: "Fixed density settings regression on stat cards",
          time: "Feb 20 at 4:30 PM",
          date: "2026-02-20"
        }, {
          id: "pa-8",
          type: "task",
          title: "Completed: Email inbox page",
          description: "Folder navigation, compose dialog, bulk actions",
          time: "Feb 20 at 10:00 AM",
          date: "2026-02-20"
        }, {
          id: "pa-9",
          type: "meeting",
          title: "Sprint 14 planning meeting",
          description: "Prioritized Phase 4 app pages and virtual scroll work",
          time: "Feb 18 at 9:00 AM",
          date: "2026-02-18"
        }, {
          id: "pa-10",
          type: "review",
          title: "Reviewed PR #235 — TanStack Table migration",
          description: "Marcus Johnson's migration of Orders, Products, and Customers tables",
          time: "Feb 17 at 2:00 PM",
          date: "2026-02-17"
        }],
        l = [{
          id: "contact-1",
          name: "Sarah Chen",
          initials: "SC",
          role: "Lead Designer",
          department: "Design",
          status: "online",
          mutualProjects: 5
        }, {
          id: "contact-2",
          name: "Marcus Johnson",
          initials: "MJ",
          role: "Frontend Dev",
          department: "Engineering",
          status: "online",
          mutualProjects: 8
        }, {
          id: "contact-3",
          name: "Priya Sharma",
          initials: "PS",
          role: "Product Manager",
          department: "Product",
          status: "away",
          mutualProjects: 6
        }, {
          id: "contact-4",
          name: "Alex Rivera",
          initials: "AR",
          role: "Backend Dev",
          department: "Engineering",
          status: "online",
          mutualProjects: 7
        }, {
          id: "contact-5",
          name: "Emma Taylor",
          initials: "ET",
          role: "QA Engineer",
          department: "Quality",
          status: "offline",
          mutualProjects: 4
        }, {
          id: "contact-6",
          name: "David Park",
          initials: "DP",
          role: "DevOps Engineer",
          department: "Infrastructure",
          status: "away",
          mutualProjects: 3
        }, {
          id: "contact-7",
          name: "Olivia Brown",
          initials: "OB",
          role: "Data Analyst",
          department: "Analytics",
          status: "offline",
          mutualProjects: 2
        }, {
          id: "contact-8",
          name: "Liam Murphy",
          initials: "LM",
          role: "Tech Lead",
          department: "Engineering",
          status: "offline",
          mutualProjects: 9
        }];

      function d() {
        return {
          ...r
        }
      }

      function o() {
        return [...i]
      }

      function c() {
        return [...n]
      }

      function u() {
        return [...s]
      }

      function p() {
        return [...l]
      }
    },
    35125: (e, t, a) => {
      a.d(t, {
        $: () => d
      });
      var r = a(95155);
      a(12115);
      var i = a(18460),
        n = a(42442),
        s = a(39055);
      let l = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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

      function d({
        className: e,
        variant: t = "default",
        size: a = "default",
        asChild: i = !1,
        ...d
      }) {
        let o = i ? n.bL : "button";
        return (0, r.jsx)(o, {
          "data-slot": "button",
          "data-variant": t,
          "data-size": a,
          className: (0, s.cn)(l({
            variant: t,
            size: a,
            className: e
          })),
          ...d
        })
      }
    },
    35205: (e, t, a) => {
      a.d(t, {
        z: () => g
      });
      var r = a(95155),
        i = a(12115),
        n = a(98500),
        s = a.n(n),
        l = a(21362),
        d = a(42442),
        o = a(39055);

      function c({
        ...e
      }) {
        return (0, r.jsx)("nav", {
          "aria-label": "breadcrumb",
          "data-slot": "breadcrumb",
          ...e
        })
      }

      function u({
        className: e,
        ...t
      }) {
        return (0, r.jsx)("ol", {
          "data-slot": "breadcrumb-list",
          className: (0, o.cn)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", e),
          ...t
        })
      }

      function p({
        className: e,
        ...t
      }) {
        return (0, r.jsx)("li", {
          "data-slot": "breadcrumb-item",
          className: (0, o.cn)("inline-flex items-center gap-1.5", e),
          ...t
        })
      }

      function m({
        asChild: e,
        className: t,
        ...a
      }) {
        let i = e ? d.bL : "a";
        return (0, r.jsx)(i, {
          "data-slot": "breadcrumb-link",
          className: (0, o.cn)("hover:text-foreground transition-colors", t),
          ...a
        })
      }

      function h({
        className: e,
        ...t
      }) {
        return (0, r.jsx)("span", {
          "data-slot": "breadcrumb-page",
          role: "link",
          "aria-disabled": "true",
          "aria-current": "page",
          className: (0, o.cn)("text-foreground font-normal", e),
          ...t
        })
      }

      function f({
        children: e,
        className: t,
        ...a
      }) {
        return (0, r.jsx)("li", {
          "data-slot": "breadcrumb-separator",
          role: "presentation",
          "aria-hidden": "true",
          className: (0, o.cn)("[&>svg]:size-3.5", t),
          ...a,
          children: e ?? (0, r.jsx)(l.A, {})
        })
      }

      function g({
        title: e,
        description: t,
        breadcrumbs: a,
        children: n
      }) {
        return (0, r.jsxs)("div", {
          className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
          children: [(0, r.jsxs)("div", {
            className: "space-y-1",
            children: [a && a.length > 0 && (0, r.jsx)(c, {
              children: (0, r.jsx)(u, {
                children: a.map((e, t) => {
                  let n = t === a.length - 1;
                  return (0, r.jsxs)(i.Fragment, {
                    children: [(0, r.jsx)(p, {
                      children: n ? (0, r.jsx)(h, {
                        children: e.label
                      }) : (0, r.jsx)(m, {
                        asChild: !0,
                        children: (0, r.jsx)(s(), {
                          href: e.href ?? "#",
                          children: e.label
                        })
                      })
                    }), !n && (0, r.jsx)(f, {})]
                  }, e.label)
                })
              })
            }), (0, r.jsx)("h1", {
              className: "text-2xl font-bold tracking-tight text-foreground",
              children: e
            }), t && (0, r.jsx)("p", {
              className: "text-sm text-muted-foreground",
              children: t
            })]
          }), n && (0, r.jsx)("div", {
            className: "flex items-center gap-2 shrink-0",
            children: n
          })]
        })
      }
    },
    42129: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("folder-open", [
        ["path", {
          d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
          key: "usdka0"
        }]
      ])
    },
    49235: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("git-commit-horizontal", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "3",
          key: "1v7zrd"
        }],
        ["line", {
          x1: "3",
          x2: "9",
          y1: "12",
          y2: "12",
          key: "1dyftd"
        }],
        ["line", {
          x1: "15",
          x2: "21",
          y1: "12",
          y2: "12",
          key: "oup4p8"
        }]
      ])
    },
    50259: (e, t, a) => {
      a.d(t, {
        p: () => n
      });
      var r = a(95155);
      a(12115);
      var i = a(39055);

      function n({
        className: e,
        type: t,
        ...a
      }) {
        return (0, r.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, i.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
          ...a
        })
      }
    },
    52484: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("circle-check-big", [
        ["path", {
          d: "M21.801 10A10 10 0 1 1 17 3.335",
          key: "yps3ct"
        }],
        ["path", {
          d: "m9 11 3 3L22 4",
          key: "1pflzl"
        }]
      ])
    },
    53810: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("share-2", [
        ["circle", {
          cx: "18",
          cy: "5",
          r: "3",
          key: "gq8acd"
        }],
        ["circle", {
          cx: "6",
          cy: "12",
          r: "3",
          key: "w7nqdw"
        }],
        ["circle", {
          cx: "18",
          cy: "19",
          r: "3",
          key: "1xt0gg"
        }],
        ["line", {
          x1: "8.59",
          x2: "15.42",
          y1: "13.51",
          y2: "17.49",
          key: "47mynk"
        }],
        ["line", {
          x1: "15.41",
          x2: "8.59",
          y1: "6.51",
          y2: "10.49",
          key: "1n3mei"
        }]
      ])
    },
    55078: (e, t, a) => {
      a.d(t, {
        E: () => l
      });
      var r = a(95155);
      a(12115);
      var i = a(18460),
        n = a(39055);
      let s = (0, i.F)("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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

      function l({
        className: e,
        variant: t,
        ...a
      }) {
        return (0, r.jsx)("div", {
          className: (0, n.cn)(s({
            variant: t
          }), e),
          ...a
        })
      }
    },
    57420: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("calendar", [
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
    61878: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("search", [
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
    62831: (e, t, a) => {
      a.d(t, {
        BT: () => o,
        Wu: () => c,
        ZB: () => d,
        Zp: () => s,
        aR: () => l
      });
      var r = a(95155),
        i = a(12115),
        n = a(39055);
      let s = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        "data-slot": "card",
        className: (0, n.cn)("rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200", e),
        ...t
      }));
      s.displayName = "Card";
      let l = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        "data-slot": "card-header",
        className: (0, n.cn)("flex flex-col space-y-1.5 p-6", e),
        ...t
      }));
      l.displayName = "CardHeader";
      let d = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        className: (0, n.cn)("font-semibold leading-none tracking-tight", e),
        ...t
      }));
      d.displayName = "CardTitle";
      let o = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        className: (0, n.cn)("text-sm text-muted-foreground", e),
        ...t
      }));
      o.displayName = "CardDescription";
      let c = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        "data-slot": "card-content",
        className: (0, n.cn)("p-6 pt-0", e),
        ...t
      }));
      c.displayName = "CardContent", i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        "data-slot": "card-footer",
        className: (0, n.cn)("flex items-center p-6 pt-0", e),
        ...t
      })).displayName = "CardFooter"
    },
    65266: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("rocket", [
        ["path", {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
          key: "m3kijz"
        }],
        ["path", {
          d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
          key: "1fmvmk"
        }],
        ["path", {
          d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
          key: "1f8sc4"
        }],
        ["path", {
          d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
          key: "qeys4"
        }]
      ])
    },
    72140: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("calendar-days", [
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
    74666: (e, t, a) => {
      a.d(t, {
        eu: () => s,
        q5: () => l
      });
      var r = a(95155),
        i = a(12115),
        n = a(39055);
      let s = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        className: (0, n.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", e),
        ...t
      }));
      s.displayName = "Avatar", i.forwardRef(({
        className: e,
        alt: t = "",
        ...a
      }, i) => (0, r.jsx)("img", {
        ref: i,
        alt: t,
        className: (0, n.cn)("aspect-square h-full w-full object-cover", e),
        ...a
      })).displayName = "AvatarImage";
      let l = i.forwardRef(({
        className: e,
        ...t
      }, a) => (0, r.jsx)("div", {
        ref: a,
        className: (0, n.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium", e),
        ...t
      }));
      l.displayName = "AvatarFallback"
    },
    84466: (e, t, a) => {
      a.d(t, {
        w: () => s
      });
      var r = a(95155);
      a(12115);
      var i = a(89803),
        n = a(39055);

      function s({
        className: e,
        orientation: t = "horizontal",
        decorative: a = !0,
        ...s
      }) {
        return (0, r.jsx)(i.b, {
          "data-slot": "separator",
          decorative: a,
          orientation: t,
          className: (0, n.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
          ...s
        })
      }
    },
    85118: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("phone", [
        ["path", {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
          key: "9njp5v"
        }]
      ])
    },
    89363: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("settings", [
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
    89803: (e, t, a) => {
      a.d(t, {
        b: () => c
      });
      var r = a(12115);
      a(47650);
      var i = a(42442),
        n = a(95155),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          let a = (0, i.TL)(`Primitive.${t}`),
            s = r.forwardRef((e, r) => {
              let {
                asChild: i,
                ...s
              } = e;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(i ? a : t, {
                ...s,
                ref: r
              })
            });
          return s.displayName = `Primitive.${t}`, {
            ...e,
            [t]: s
          }
        }, {}),
        l = "horizontal",
        d = ["horizontal", "vertical"],
        o = r.forwardRef((e, t) => {
          var a;
          let {
            decorative: r,
            orientation: i = l,
            ...o
          } = e, c = (a = i, d.includes(a)) ? i : l;
          return (0, n.jsx)(s.div, {
            "data-orientation": c,
            ...r ? {
              role: "none"
            } : {
              "aria-orientation": "vertical" === c ? c : void 0,
              role: "separator"
            },
            ...o,
            ref: t
          })
        });
      o.displayName = "Separator";
      var c = o
    },
    89974: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("briefcase", [
        ["path", {
          d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
          key: "jecpp"
        }],
        ["rect", {
          width: "20",
          height: "14",
          x: "2",
          y: "6",
          rx: "2",
          key: "i6l2r4"
        }]
      ])
    },
    90425: (e, t, a) => {
      a.d(t, {
        A: () => d
      });
      var r = a(12115);
      let i = (...e) => e.filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t).join(" ").trim(),
        n = e => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) => a ? a.toUpperCase() : t.toLowerCase());
          return t.charAt(0).toUpperCase() + t.slice(1)
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
      let l = (0, r.forwardRef)(({
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: n,
          className: l = "",
          children: d,
          iconNode: o,
          ...c
        }, u) => (0, r.createElement)("svg", {
          ref: u,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: n ? 24 * Number(a) / Number(t) : a,
          className: i("lucide", l),
          ...!d && !(e => {
            for (let t in e)
              if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
            return !1
          })(c) && {
            "aria-hidden": "true"
          },
          ...c
        }, [...o.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(d) ? d : [d]])),
        d = (e, t) => {
          let a = (0, r.forwardRef)(({
            className: a,
            ...s
          }, d) => (0, r.createElement)(l, {
            ref: d,
            iconNode: t,
            className: i(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, a),
            ...s
          }));
          return a.displayName = n(e), a
        }
    },
    92289: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("mail", [
        ["path", {
          d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
          key: "132q7q"
        }],
        ["rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2",
          key: "izxlao"
        }]
      ])
    },
    92451: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("globe", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["path", {
          d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
          key: "13o1zl"
        }],
        ["path", {
          d: "M2 12h20",
          key: "9i4pu4"
        }]
      ])
    },
    92564: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("message-circle", [
        ["path", {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s"
        }]
      ])
    },
    96035: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = (0, a(90425).A)("message-square", [
        ["path", {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p"
        }]
      ])
    },
    99656: (e, t, a) => {
      a.d(t, {
        k: () => s
      });
      var r = a(95155),
        i = a(12115),
        n = a(39055);
      let s = i.forwardRef(({
        className: e,
        value: t = 0,
        indicatorClassName: a,
        ...i
      }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, n.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/15", e),
        ...i,
        children: (0, r.jsx)("div", {
          className: (0, n.cn)("h-full rounded-full bg-primary transition-all duration-500 ease-out", a),
          style: {
            width: `${Math.min(100,Math.max(0,t))}%`
          }
        })
      }));
      s.displayName = "Progress"
    }
  }
]);