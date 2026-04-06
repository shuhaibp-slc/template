(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6337], {
    16746: (e, t, a) => {
      "use strict";
      a.d(t, {
        b: () => o
      });
      var r = a(12115),
        s = a(95295),
        i = a(80598),
        n = ["axis"],
        o = (0, r.forwardRef)((e, t) => r.createElement(i.P, {
          chartName: "LineChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: n,
          tooltipPayloadSearcher: s.uN,
          categoricalChartProps: e,
          ref: t
        }))
    },
    18460: (e, t, a) => {
      "use strict";
      a.d(t, {
        F: () => n
      });
      var r = a(29722);
      let s = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        i = r.$,
        n = (e, t) => a => {
          var r;
          if ((null == t ? void 0 : t.variants) == null) return i(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
          let {
            variants: n,
            defaultVariants: o
          } = t, l = Object.keys(n).map(e => {
            let t = null == a ? void 0 : a[e],
              r = null == o ? void 0 : o[e];
            if (null === t) return null;
            let i = s(t) || s(r);
            return n[e][i]
          }), d = a && Object.entries(a).reduce((e, t) => {
            let [a, r] = t;
            return void 0 === r || (e[a] = r), e
          }, {});
          return i(e, l, null == t || null == (r = t.compoundVariants) ? void 0 : r.reduce((e, t) => {
            let {
              class: a,
              className: r,
              ...s
            } = t;
            return Object.entries(s).every(e => {
              let [t, a] = e;
              return Array.isArray(a) ? a.includes({
                ...o,
                ...d
              } [t]) : ({
                ...o,
                ...d
              })[t] === a
            }) ? [...e, a, r] : e
          }, []), null == a ? void 0 : a.class, null == a ? void 0 : a.className)
        }
    },
    48035: (e, t, a) => {
      "use strict";
      a.d(t, {
        E: () => o
      });
      var r = a(12115),
        s = a(95295),
        i = a(80598),
        n = ["axis", "item"],
        o = (0, r.forwardRef)((e, t) => r.createElement(i.P, {
          chartName: "BarChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: n,
          tooltipPayloadSearcher: s.uN,
          categoricalChartProps: e,
          ref: t
        }))
    },
    49261: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => R
      });
      var r = a(95155),
        s = a(12115),
        i = a(62831),
        n = a(55078),
        o = a(39055),
        l = a(1728),
        d = a(16746),
        c = a(28408),
        m = a(32539),
        x = a(59656),
        u = a(65671),
        p = a(75319),
        h = a(4176),
        f = a(16966),
        v = a(89039),
        g = a(48035),
        y = a(43304);
      let b = [{
          label: "Patients Today",
          value: "48",
          change: "+12%",
          positive: !0,
          accent: "var(--chart-1)"
        }, {
          label: "Appointments",
          value: "24",
          change: "-3%",
          positive: !1,
          accent: "var(--chart-2)"
        }, {
          label: "Bed Occupancy",
          value: "78%",
          change: "+5%",
          positive: !0,
          accent: "var(--chart-3)"
        }, {
          label: "Revenue",
          value: "$42.5K",
          change: "+8%",
          positive: !0,
          accent: "var(--chart-4)"
        }],
        j = Array.from({
          length: 24
        }, (e, t) => {
          let a = t.toString().padStart(2, "0") + ":00";
          return {
            hour: a,
            hr: Math.round(72 + 8 * Math.sin((t - 6) * Math.PI / 12) + (Math.random() - .5) * 10),
            bp: Math.round(125 + 8 * Math.sin((t - 10) * Math.PI / 12) + (Math.random() - .5) * 12),
            spo2: Math.round((97 - 1.5 * (t < 6) + (Math.random() - .5) * 2) * 10) / 10
          }
        }),
        N = [{
          name: "ICU",
          value: 85,
          fill: "var(--chart-1)"
        }, {
          name: "General",
          value: 72,
          fill: "var(--chart-2)"
        }, {
          name: "Emergency",
          value: 91,
          fill: "var(--chart-3)"
        }],
        k = [{
          name: "Emergency",
          patients: 35
        }, {
          name: "Cardiology",
          patients: 28
        }, {
          name: "Pediatrics",
          patients: 22
        }, {
          name: "Orthopedics",
          patients: 18
        }, {
          name: "Neurology",
          patients: 15
        }],
        S = [{
          id: 1,
          patient: "Sarah Johnson",
          initials: "SJ",
          time: "09:00",
          dept: "Cardiology",
          color: "var(--chart-1)"
        }, {
          id: 2,
          patient: "Michael Chen",
          initials: "MC",
          time: "09:30",
          dept: "Neurology",
          color: "var(--chart-2)"
        }, {
          id: 3,
          patient: "Emily Davis",
          initials: "ED",
          time: "10:00",
          dept: "Pediatrics",
          color: "var(--chart-3)"
        }, {
          id: 4,
          patient: "James Wilson",
          initials: "JW",
          time: "10:30",
          dept: "Orthopedics",
          color: "var(--chart-4)"
        }, {
          id: 5,
          patient: "Maria Rodriguez",
          initials: "MR",
          time: "11:00",
          dept: "Emergency",
          color: "var(--chart-5)"
        }, {
          id: 6,
          patient: "Robert Taylor",
          initials: "RT",
          time: "11:30",
          dept: "Cardiology",
          color: "var(--chart-1)"
        }],
        w = {
          Cardiology: "var(--chart-1)",
          Neurology: "var(--chart-2)",
          Pediatrics: "var(--chart-3)",
          Orthopedics: "var(--chart-4)",
          Emergency: "var(--chart-5)"
        },
        E = [{
          time: "08:00",
          patient: "Anna Brooks",
          doctor: "Dr. Williams",
          department: "Cardiology",
          type: "In-person",
          status: "Completed"
        }, {
          time: "08:30",
          patient: "David Kim",
          doctor: "Dr. Patel",
          department: "Neurology",
          type: "Telehealth",
          status: "Completed"
        }, {
          time: "09:00",
          patient: "Sarah Johnson",
          doctor: "Dr. Williams",
          department: "Cardiology",
          type: "In-person",
          status: "Completed"
        }, {
          time: "09:30",
          patient: "Michael Chen",
          doctor: "Dr. Patel",
          department: "Neurology",
          type: "In-person",
          status: "In Progress"
        }, {
          time: "10:00",
          patient: "Emily Davis",
          doctor: "Dr. Garcia",
          department: "Pediatrics",
          type: "Telehealth",
          status: "In Progress"
        }, {
          time: "10:30",
          patient: "James Wilson",
          doctor: "Dr. Kim",
          department: "Orthopedics",
          type: "In-person",
          status: "Scheduled"
        }, {
          time: "11:00",
          patient: "Maria Rodriguez",
          doctor: "Dr. Thompson",
          department: "Emergency",
          type: "In-person",
          status: "Scheduled"
        }, {
          time: "11:30",
          patient: "Robert Taylor",
          doctor: "Dr. Williams",
          department: "Cardiology",
          type: "Telehealth",
          status: "Scheduled"
        }],
        C = {
          Completed: "success",
          "In Progress": "warning",
          Scheduled: "secondary"
        },
        P = {
          "In-person": "default",
          Telehealth: "outline"
        };

      function D({
        active: e,
        payload: t,
        label: a
      }) {
        if (!e || !t?.length) return null;
        let s = {
          "Heart Rate": "bpm",
          "BP Systolic": "mmHg",
          SpO2: "%"
        };
        return (0, r.jsxs)("div", {
          className: "rounded-lg border border-border bg-popover px-3 py-2 shadow-xl",
          children: [(0, r.jsx)("p", {
            className: "mb-1 text-xs font-medium text-muted-foreground",
            children: a
          }), t.map((e, t) => (0, r.jsxs)("p", {
            className: "text-sm font-semibold font-mono",
            style: {
              color: e.color
            },
            children: [e.name, ": ", e.value, " ", s[e.name] || ""]
          }, t))]
        })
      }

      function W({
        active: e,
        payload: t
      }) {
        return e && t?.length ? (0, r.jsxs)("div", {
          className: "rounded-lg border border-border bg-popover px-3 py-2 shadow-xl",
          children: [(0, r.jsx)("p", {
            className: "text-sm font-semibold",
            children: t[0].name
          }), (0, r.jsxs)("p", {
            className: "text-xs text-muted-foreground",
            children: [t[0].value, " patients"]
          })]
        }) : null
      }

      function R() {
        let [e, t] = (0, s.useState)(!1);
        return (0, s.useEffect)(() => {
          requestAnimationFrame(() => t(!0))
        }, []), (0, r.jsxs)("div", {
          className: (0, o.cn)("transition-opacity duration-300 ease-out", e ? "opacity-100" : "opacity-0"),
          children: [(0, r.jsx)("div", {
            className: "mb-6 grid grid-cols-2 gap-3 md:grid-cols-4",
            children: b.map(e => (0, r.jsx)("div", {
              className: "flex items-center gap-3 rounded-lg border border-border bg-card py-2 px-4",
              style: {
                borderLeftWidth: 4,
                borderLeftColor: e.accent
              },
              children: (0, r.jsxs)("div", {
                className: "flex-1 min-w-0",
                children: [(0, r.jsx)("p", {
                  className: "text-xs text-muted-foreground truncate",
                  children: e.label
                }), (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [(0, r.jsx)("span", {
                    className: "text-lg font-bold",
                    children: e.value
                  }), (0, r.jsx)(n.E, {
                    variant: e.positive ? "success" : "destructive",
                    className: "text-[10px] px-1.5 py-0",
                    children: e.change
                  })]
                })]
              })
            }, e.label))
          }), (0, r.jsxs)(i.Zp, {
            className: "mb-6",
            children: [(0, r.jsxs)(i.aR, {
              className: "pb-2",
              children: [(0, r.jsx)(i.ZB, {
                className: "text-base font-semibold",
                children: "24h Patient Vitals Monitor"
              }), (0, r.jsx)("p", {
                className: "text-xs text-muted-foreground",
                children: "Hourly average heart rate, blood pressure, and SpO2 across all monitored patients"
              })]
            }), (0, r.jsx)(i.Wu, {
              className: "pt-4",
              children: (0, r.jsx)(l.u, {
                width: "100%",
                height: 280,
                children: (0, r.jsxs)(d.b, {
                  data: j,
                  children: [(0, r.jsx)(c.d, {
                    strokeDasharray: "3 3",
                    vertical: !1,
                    stroke: "var(--border)",
                    strokeOpacity: .5
                  }), (0, r.jsx)(m.W, {
                    dataKey: "hour",
                    axisLine: !1,
                    tickLine: !1,
                    tick: {
                      fill: "var(--muted-foreground)",
                      fontSize: 11
                    },
                    dy: 8,
                    interval: 2
                  }), (0, r.jsx)(x.h, {
                    yAxisId: "hr",
                    axisLine: !1,
                    tickLine: !1,
                    tick: {
                      fill: "var(--muted-foreground)",
                      fontSize: 11
                    },
                    dx: -8,
                    domain: [55, 145],
                    label: {
                      value: "bpm / mmHg",
                      angle: -90,
                      position: "insideLeft",
                      offset: 10,
                      style: {
                        fill: "var(--muted-foreground)",
                        fontSize: 10
                      }
                    }
                  }), (0, r.jsx)(x.h, {
                    yAxisId: "spo2",
                    orientation: "right",
                    axisLine: !1,
                    tickLine: !1,
                    tick: {
                      fill: "var(--muted-foreground)",
                      fontSize: 11
                    },
                    dx: 8,
                    domain: [92, 100],
                    label: {
                      value: "SpO2 %",
                      angle: 90,
                      position: "insideRight",
                      offset: 10,
                      style: {
                        fill: "var(--muted-foreground)",
                        fontSize: 10
                      }
                    }
                  }), (0, r.jsx)(u.m, {
                    content: (0, r.jsx)(D, {})
                  }), (0, r.jsx)(p.N1, {
                    yAxisId: "hr",
                    type: "monotone",
                    dataKey: "hr",
                    name: "Heart Rate",
                    stroke: "var(--chart-1)",
                    strokeWidth: 2,
                    dot: !1,
                    activeDot: {
                      r: 4,
                      strokeWidth: 2,
                      fill: "var(--background)"
                    }
                  }), (0, r.jsx)(p.N1, {
                    yAxisId: "hr",
                    type: "monotone",
                    dataKey: "bp",
                    name: "BP Systolic",
                    stroke: "var(--chart-2)",
                    strokeWidth: 2,
                    strokeDasharray: "5 5",
                    dot: !1,
                    activeDot: {
                      r: 4,
                      strokeWidth: 2,
                      fill: "var(--background)"
                    }
                  }), (0, r.jsx)(p.N1, {
                    yAxisId: "spo2",
                    type: "monotone",
                    dataKey: "spo2",
                    name: "SpO2",
                    stroke: "var(--chart-3)",
                    strokeWidth: 2,
                    dot: !1,
                    activeDot: {
                      r: 4,
                      strokeWidth: 2,
                      fill: "var(--background)"
                    }
                  })]
                })
              })
            })]
          }), (0, r.jsxs)("div", {
            className: "mb-6 grid grid-cols-1 gap-4 md:grid-cols-3",
            children: [(0, r.jsxs)(i.Zp, {
              children: [(0, r.jsxs)(i.aR, {
                className: "pb-2",
                children: [(0, r.jsx)(i.ZB, {
                  className: "text-base font-semibold",
                  children: "Bed Occupancy"
                }), (0, r.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Occupancy rate by ward"
                })]
              }), (0, r.jsxs)(i.Wu, {
                children: [(0, r.jsxs)("div", {
                  className: "relative",
                  children: [(0, r.jsx)(l.u, {
                    width: "100%",
                    height: 220,
                    children: (0, r.jsxs)(h.D, {
                      cx: "50%",
                      cy: "50%",
                      innerRadius: "30%",
                      outerRadius: "90%",
                      barSize: 14,
                      data: N,
                      startAngle: 90,
                      endAngle: -270,
                      children: [(0, r.jsx)(f.r, {
                        type: "number",
                        domain: [0, 100],
                        angleAxisId: 0,
                        tick: !1
                      }), (0, r.jsx)(v.ZB, {
                        background: {
                          fill: "var(--muted)"
                        },
                        dataKey: "value",
                        angleAxisId: 0,
                        cornerRadius: 4
                      })]
                    })
                  }), (0, r.jsxs)("div", {
                    className: "absolute inset-0 flex flex-col items-center justify-center",
                    children: [(0, r.jsx)("span", {
                      className: "text-2xl font-bold",
                      children: "78%"
                    }), (0, r.jsx)("span", {
                      className: "text-[10px] text-muted-foreground",
                      children: "Aggregate"
                    })]
                  })]
                }), (0, r.jsx)("div", {
                  className: "mt-2 space-y-1.5",
                  children: N.map(e => (0, r.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, r.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [(0, r.jsx)("div", {
                        className: "h-2.5 w-2.5 rounded-full",
                        style: {
                          backgroundColor: e.fill
                        }
                      }), (0, r.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: e.name
                      })]
                    }), (0, r.jsxs)("span", {
                      className: "text-xs font-semibold font-mono",
                      children: [e.value, "%"]
                    })]
                  }, e.name))
                })]
              })]
            }), (0, r.jsxs)(i.Zp, {
              children: [(0, r.jsxs)(i.aR, {
                className: "pb-2",
                children: [(0, r.jsx)(i.ZB, {
                  className: "text-base font-semibold",
                  children: "Dept Workload"
                }), (0, r.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Active patients by department"
                })]
              }), (0, r.jsx)(i.Wu, {
                className: "pt-4",
                children: (0, r.jsx)(l.u, {
                  width: "100%",
                  height: 260,
                  children: (0, r.jsxs)(g.E, {
                    data: k,
                    layout: "vertical",
                    margin: {
                      top: 0,
                      right: 20,
                      bottom: 0,
                      left: 0
                    },
                    children: [(0, r.jsx)(c.d, {
                      strokeDasharray: "3 3",
                      horizontal: !1,
                      stroke: "var(--border)",
                      strokeOpacity: .5
                    }), (0, r.jsx)(m.W, {
                      type: "number",
                      axisLine: !1,
                      tickLine: !1,
                      tick: {
                        fill: "var(--muted-foreground)",
                        fontSize: 11
                      }
                    }), (0, r.jsx)(x.h, {
                      type: "category",
                      dataKey: "name",
                      axisLine: !1,
                      tickLine: !1,
                      tick: {
                        fill: "var(--muted-foreground)",
                        fontSize: 11
                      },
                      width: 85
                    }), (0, r.jsx)(u.m, {
                      content: (0, r.jsx)(W, {})
                    }), (0, r.jsx)(y.yP, {
                      dataKey: "patients",
                      fill: "var(--chart-1)",
                      radius: [0, 4, 4, 0],
                      barSize: 20
                    })]
                  })
                })
              })]
            }), (0, r.jsxs)(i.Zp, {
              children: [(0, r.jsxs)(i.aR, {
                className: "pb-2",
                children: [(0, r.jsx)(i.ZB, {
                  className: "text-base font-semibold",
                  children: "Upcoming"
                }), (0, r.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Next appointments today"
                })]
              }), (0, r.jsx)(i.Wu, {
                children: (0, r.jsx)("div", {
                  className: "space-y-2",
                  children: S.map(e => (0, r.jsxs)("div", {
                    className: "flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/30",
                    children: [(0, r.jsx)("div", {
                      className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                      style: {
                        backgroundColor: e.color
                      },
                      children: e.initials
                    }), (0, r.jsxs)("div", {
                      className: "flex-1 min-w-0",
                      children: [(0, r.jsx)("p", {
                        className: "text-sm font-medium truncate",
                        children: e.patient
                      }), (0, r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, r.jsx)("span", {
                          className: "text-xs font-mono text-muted-foreground",
                          children: e.time
                        }), (0, r.jsx)(n.E, {
                          variant: "outline",
                          className: "text-[10px] px-1.5 py-0",
                          children: e.dept
                        })]
                      })]
                    })]
                  }, e.id))
                })
              })]
            })]
          }), (0, r.jsxs)(i.Zp, {
            children: [(0, r.jsxs)(i.aR, {
              className: "pb-4",
              children: [(0, r.jsx)(i.ZB, {
                className: "text-base font-semibold",
                children: "Today's Schedule"
              }), (0, r.jsx)("p", {
                className: "text-xs text-muted-foreground",
                children: "All appointments and consultations for today"
              })]
            }), (0, r.jsx)(i.Wu, {
              children: (0, r.jsx)("div", {
                className: "overflow-x-auto",
                children: (0, r.jsxs)("table", {
                  className: "w-full",
                  children: [(0, r.jsx)("thead", {
                    children: (0, r.jsxs)("tr", {
                      className: "border-b border-border",
                      children: [(0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Time"
                      }), (0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Patient"
                      }), (0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Doctor"
                      }), (0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Department"
                      }), (0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Type"
                      }), (0, r.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Status"
                      })]
                    })
                  }), (0, r.jsx)("tbody", {
                    children: E.map((e, t) => (0, r.jsxs)("tr", {
                      className: "border-b border-border/50 last:border-0 transition-colors hover:bg-muted/30",
                      style: {
                        borderLeftWidth: 3,
                        borderLeftColor: w[e.department] || "var(--border)"
                      },
                      children: [(0, r.jsx)("td", {
                        className: "py-3 pl-3 text-sm font-mono text-muted-foreground",
                        children: e.time
                      }), (0, r.jsx)("td", {
                        className: "py-3 text-sm font-medium",
                        children: e.patient
                      }), (0, r.jsx)("td", {
                        className: "py-3 text-sm text-muted-foreground",
                        children: e.doctor
                      }), (0, r.jsx)("td", {
                        className: "py-3",
                        children: (0, r.jsx)(n.E, {
                          variant: "outline",
                          className: "text-[10px]",
                          children: e.department
                        })
                      }), (0, r.jsx)("td", {
                        className: "py-3",
                        children: (0, r.jsx)(n.E, {
                          variant: P[e.type],
                          className: "text-[10px]",
                          children: e.type
                        })
                      }), (0, r.jsx)("td", {
                        className: "py-3",
                        children: (0, r.jsx)(n.E, {
                          variant: C[e.status],
                          className: "text-[10px]",
                          children: e.status
                        })
                      })]
                    }, t))
                  })]
                })
              })
            })]
          })]
        })
      }
    },
    55078: (e, t, a) => {
      "use strict";
      a.d(t, {
        E: () => o
      });
      var r = a(95155);
      a(12115);
      var s = a(18460),
        i = a(39055);
      let n = (0, s.F)("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
        variant: t,
        ...a
      }) {
        return (0, r.jsx)("div", {
          className: (0, i.cn)(n({
            variant: t
          }), e),
          ...a
        })
      }
    },
    68609: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 49261))
    }
  },
  e => {
    e.O(0, [9055, 227, 2363, 6197, 459, 3304, 5319, 9864, 8441, 3794, 7358], () => e(e.s = 68609)), _N_E = e.O()
  }
]);