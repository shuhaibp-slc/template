(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9268], {
    52680: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => A
      });
      var r = s(95155),
        a = s(62831),
        n = s(55078),
        i = s(74666),
        l = s(39055),
        d = s(44071),
        c = s(67514),
        o = s(7686),
        m = s(93219),
        u = s(74526),
        x = s(50061),
        p = s(41585),
        h = s(1728),
        g = s(90639),
        b = s(32539),
        j = s(59656),
        v = s(65671),
        f = s(53459);

      function N(e, t) {
        let s = [],
          r = e;
        for (let a = 0; a < 20; a++) r = e + (Math.sin(.8 * a) * t + .6 * t * Math.cos(1.3 * a)) + (a % 3 == 0 ? .4 * t : 0) * (a % 2 == 0 ? 1 : -1), s.push({
          t: a,
          hr: Math.round(r)
        });
        return s
      }
      let w = [{
          name: "Margaret Chen",
          initials: "MC",
          room: "201",
          status: "Stable",
          heartRate: 72,
          bloodPressure: "120/80",
          temperature: 98.6,
          spO2: 98,
          hrTrend: "down",
          bpTrend: "down",
          tempTrend: "down",
          spO2Trend: "up",
          chartData: N(72, 3)
        }, {
          name: "James Sullivan",
          initials: "JS",
          room: "305",
          status: "Warning",
          heartRate: 98,
          bloodPressure: "145/92",
          temperature: 99.8,
          spO2: 94,
          hrTrend: "up",
          bpTrend: "up",
          tempTrend: "up",
          spO2Trend: "down",
          chartData: N(98, 5)
        }, {
          name: "Elena Rodriguez",
          initials: "ER",
          room: "102",
          status: "Stable",
          heartRate: 68,
          bloodPressure: "118/76",
          temperature: 98.4,
          spO2: 99,
          hrTrend: "down",
          bpTrend: "down",
          tempTrend: "down",
          spO2Trend: "up",
          chartData: N(68, 2)
        }, {
          name: "Robert Kim",
          initials: "RK",
          room: "412",
          status: "Critical",
          heartRate: 112,
          bloodPressure: "160/100",
          temperature: 101.2,
          spO2: 91,
          hrTrend: "up",
          bpTrend: "up",
          tempTrend: "up",
          spO2Trend: "down",
          chartData: N(112, 8)
        }, {
          name: "Aisha Patel",
          initials: "AP",
          room: "208",
          status: "Stable",
          heartRate: 76,
          bloodPressure: "122/78",
          temperature: 98.2,
          spO2: 97,
          hrTrend: "up",
          bpTrend: "down",
          tempTrend: "down",
          spO2Trend: "up",
          chartData: N(76, 3)
        }, {
          name: "Thomas Bergstrom",
          initials: "TB",
          room: "315",
          status: "Warning",
          heartRate: 88,
          bloodPressure: "138/88",
          temperature: 100.1,
          spO2: 93,
          hrTrend: "up",
          bpTrend: "up",
          tempTrend: "up",
          spO2Trend: "down",
          chartData: N(88, 6)
        }],
        T = [{
          patient: "Robert Kim",
          message: "Heart rate above 110 bpm",
          time: "2 min ago",
          severity: "Critical"
        }, {
          patient: "James Sullivan",
          message: "Blood pressure elevated",
          time: "15 min ago",
          severity: "Warning"
        }, {
          patient: "Thomas Bergstrom",
          message: "SpO2 dropped below 94%",
          time: "28 min ago",
          severity: "Warning"
        }, {
          patient: "Robert Kim",
          message: "Temperature above 101\xb0F",
          time: "35 min ago",
          severity: "Critical"
        }],
        y = {
          Stable: "success",
          Warning: "warning",
          Critical: "destructive"
        };

      function O({
        active: e,
        payload: t
      }) {
        return e && t?.length ? (0, r.jsx)("div", {
          className: "rounded-lg border border-border bg-popover px-3 py-1.5 shadow-xl",
          children: (0, r.jsxs)("p", {
            className: "text-sm font-semibold",
            style: {
              color: t[0].color
            },
            children: [t[0].value, " bpm"]
          })
        }) : null
      }

      function R({
        vital: e
      }) {
        let t = e.icon,
          s = "up" === e.trend ? d.A : c.A;
        return (0, r.jsxs)("div", {
          className: "flex items-center justify-between py-1.5",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0, r.jsx)(t, {
              className: (0, l.cn)("h-3.5 w-3.5", e.color)
            }), (0, r.jsx)("span", {
              className: "text-xs text-muted-foreground",
              children: e.label
            })]
          }), (0, r.jsxs)("div", {
            className: "flex items-center gap-1.5",
            children: [(0, r.jsxs)("span", {
              className: "text-sm font-semibold",
              children: [e.value, (0, r.jsx)("span", {
                className: "ml-0.5 text-[10px] font-normal text-muted-foreground",
                children: e.unit
              })]
            }), (0, r.jsx)(s, {
              className: (0, l.cn)("h-3 w-3", "up" === e.trend ? "text-destructive/70" : "text-success/70")
            })]
          })]
        })
      }

      function C({
        patient: e
      }) {
        let t = [{
            icon: o.A,
            label: "Heart Rate",
            value: String(e.heartRate),
            unit: "bpm",
            trend: e.hrTrend,
            color: "text-destructive"
          }, {
            icon: m.A,
            label: "Blood Pressure",
            value: e.bloodPressure,
            unit: "mmHg",
            trend: e.bpTrend,
            color: "text-chart-1"
          }, {
            icon: u.A,
            label: "Temperature",
            value: String(e.temperature),
            unit: "\xb0F",
            trend: e.tempTrend,
            color: "text-chart-3"
          }, {
            icon: x.A,
            label: "SpO2",
            value: String(e.spO2),
            unit: "%",
            trend: e.spO2Trend,
            color: "text-chart-2"
          }],
          s = function(e) {
            switch (e) {
              case "Warning":
                return "var(--warning)";
              case "Critical":
                return "var(--destructive)";
              default:
                return "var(--chart-1)"
            }
          }(e.status);
        return (0, r.jsxs)(a.Zp, {
          className: (0, l.cn)("transition-all duration-200", function(e) {
            switch (e) {
              case "Warning":
                return "border-l-4 border-l-warning";
              case "Critical":
                return "border-l-4 border-l-destructive bg-destructive/[0.03]";
              default:
                return ""
            }
          }(e.status)),
          children: [(0, r.jsx)(a.aR, {
            className: "pb-2",
            children: (0, r.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, r.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [(0, r.jsx)(i.eu, {
                  className: "h-9 w-9",
                  children: (0, r.jsx)(i.q5, {
                    className: "text-xs font-bold",
                    children: e.initials
                  })
                }), (0, r.jsxs)("div", {
                  children: [(0, r.jsx)(a.ZB, {
                    className: "text-sm font-semibold",
                    children: e.name
                  }), (0, r.jsxs)("p", {
                    className: "text-xs text-muted-foreground",
                    children: ["Room ", e.room]
                  })]
                })]
              }), (0, r.jsx)(n.E, {
                variant: y[e.status],
                className: "text-[10px]",
                children: e.status
              })]
            })
          }), (0, r.jsxs)(a.Wu, {
            className: "space-y-1 pt-0",
            children: [(0, r.jsx)("div", {
              className: "divide-y divide-border/50",
              children: t.map(e => (0, r.jsx)(R, {
                vital: e
              }, e.label))
            }), (0, r.jsx)("div", {
              className: "pt-2",
              children: (0, r.jsx)(h.u, {
                width: "100%",
                height: 60,
                children: (0, r.jsxs)(g.Q, {
                  data: e.chartData,
                  margin: {
                    top: 4,
                    right: 0,
                    bottom: 0,
                    left: 0
                  },
                  children: [(0, r.jsx)("defs", {
                    children: (0, r.jsxs)("linearGradient", {
                      id: `hr-fill-${e.initials}`,
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "1",
                      children: [(0, r.jsx)("stop", {
                        offset: "0%",
                        stopColor: s,
                        stopOpacity: .2
                      }), (0, r.jsx)("stop", {
                        offset: "100%",
                        stopColor: s,
                        stopOpacity: 0
                      })]
                    })
                  }), (0, r.jsx)(b.W, {
                    dataKey: "t",
                    hide: !0
                  }), (0, r.jsx)(j.h, {
                    hide: !0,
                    domain: ["dataMin - 5", "dataMax + 5"]
                  }), (0, r.jsx)(v.m, {
                    content: (0, r.jsx)(O, {})
                  }), (0, r.jsx)(f.Gk, {
                    type: "monotone",
                    dataKey: "hr",
                    stroke: s,
                    strokeWidth: 1.5,
                    fill: `url(#hr-fill-${e.initials})`,
                    dot: !1,
                    activeDot: {
                      r: 3,
                      strokeWidth: 1.5,
                      fill: "var(--background)"
                    }
                  })]
                })
              })
            })]
          })]
        })
      }

      function A() {
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("h1", {
                className: "text-2xl font-bold tracking-tight",
                children: "Vitals Monitor"
              }), (0, r.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: "Real-time patient monitoring"
              })]
            }), (0, r.jsxs)(n.E, {
              variant: "secondary",
              className: "w-fit gap-1.5 px-3 py-1 text-xs",
              children: [(0, r.jsx)(m.A, {
                className: "h-3.5 w-3.5"
              }), "12 Active Monitors"]
            })]
          }), (0, r.jsx)("div", {
            className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
            children: w.map(e => (0, r.jsx)(C, {
              patient: e
            }, e.name))
          }), (0, r.jsx)("div", {
            className: "mt-6",
            children: (0, r.jsxs)(a.Zp, {
              children: [(0, r.jsx)(a.aR, {
                className: "pb-3",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [(0, r.jsx)(p.A, {
                    className: "h-4 w-4 text-warning"
                  }), (0, r.jsx)(a.ZB, {
                    className: "text-base font-semibold",
                    children: "Active Alerts"
                  }), (0, r.jsx)(n.E, {
                    variant: "secondary",
                    className: "ml-auto text-[10px]",
                    children: T.length
                  })]
                })
              }), (0, r.jsx)(a.Wu, {
                className: "space-y-3",
                children: T.map((e, t) => (0, r.jsxs)("div", {
                  className: (0, l.cn)("flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between", "Critical" === e.severity ? "border-destructive/30 bg-destructive/[0.04]" : "border-warning/30 bg-warning/[0.04]"),
                  children: [(0, r.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, r.jsx)(p.A, {
                      className: (0, l.cn)("h-4 w-4 shrink-0", "Critical" === e.severity ? "text-destructive" : "text-warning")
                    }), (0, r.jsxs)("div", {
                      className: "min-w-0",
                      children: [(0, r.jsxs)("p", {
                        className: "text-sm font-medium",
                        children: [e.patient, (0, r.jsx)("span", {
                          className: "mx-1.5 text-muted-foreground",
                          children: "—"
                        }), (0, r.jsx)("span", {
                          className: "font-normal text-muted-foreground",
                          children: e.message
                        })]
                      }), (0, r.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.time
                      })]
                    })]
                  }), (0, r.jsx)(n.E, {
                    variant: "Critical" === e.severity ? "destructive" : "warning",
                    className: "w-fit text-[10px]",
                    children: e.severity
                  })]
                }, t))
              })]
            })
          })]
        })
      }
    },
    57782: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 52680))
    }
  },
  e => {
    e.O(0, [9055, 227, 2363, 459, 3459, 2061, 8441, 3794, 7358], () => e(e.s = 57782)), _N_E = e.O()
  }
]);