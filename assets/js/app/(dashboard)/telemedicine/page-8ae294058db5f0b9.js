(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1427], {
    28671: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 85483))
    },
    85483: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => q
      });
      var l = t(95155),
        a = t(12115),
        i = t(62831),
        n = t(55078),
        r = t(35125),
        c = t(74666),
        d = t(99656),
        o = t(36877),
        x = t(47385),
        m = t(50259),
        h = t(81746),
        u = t(66609),
        j = t(39055),
        p = t(1728),
        f = t(31962),
        g = t(88200),
        N = t(67389),
        b = t(65671),
        v = t(45005),
        y = t(57420),
        w = t(52484),
        S = t(84980),
        C = t(94290),
        D = t(41444),
        P = t(73035),
        A = t(20232);
      let k = [{
          title: "Active Sessions",
          value: "3",
          icon: v.A,
          color: "text-chart-1",
          bg: "bg-chart-1/10"
        }, {
          title: "Scheduled Today",
          value: "12",
          icon: y.A,
          color: "text-chart-2",
          bg: "bg-chart-2/10"
        }, {
          title: "Completed",
          value: "8",
          icon: w.A,
          color: "text-chart-3",
          bg: "bg-chart-3/10"
        }, {
          title: "Avg Duration",
          value: "18 min",
          icon: S.A,
          color: "text-chart-4",
          bg: "bg-chart-4/10"
        }],
        T = [{
          patient: "Sarah Johnson",
          initials: "SJ",
          doctor: "Dr. Williams",
          duration: "12:34",
          type: "Follow-up",
          status: "In Progress"
        }, {
          patient: "James Chen",
          initials: "JC",
          doctor: "Dr. Patel",
          duration: "08:17",
          type: "Consultation",
          status: "In Progress"
        }, {
          patient: "Maria Garcia",
          initials: "MG",
          doctor: "Dr. Brooks",
          duration: "03:45",
          type: "Urgent",
          status: "In Progress"
        }],
        E = [{
          patient: "Robert Kim",
          initials: "RK",
          doctor: "Dr. Williams",
          time: "11:00 AM",
          type: "follow-up",
          status: "confirmed"
        }, {
          patient: "Emily Davis",
          initials: "ED",
          doctor: "Dr. Brooks",
          time: "11:30 AM",
          type: "consultation",
          status: "confirmed"
        }, {
          patient: "David Thompson",
          initials: "DT",
          doctor: "Dr. Patel",
          time: "12:00 PM",
          type: "urgent",
          status: "confirmed"
        }, {
          patient: "Lisa Patel",
          initials: "LP",
          doctor: "Dr. Kim",
          time: "1:30 PM",
          type: "follow-up",
          status: "waiting"
        }, {
          patient: "Michael Brown",
          initials: "MB",
          doctor: "Dr. Chen",
          time: "2:00 PM",
          type: "consultation",
          status: "confirmed"
        }, {
          patient: "Anna Nguyen",
          initials: "AN",
          doctor: "Dr. Martinez",
          time: "3:00 PM",
          type: "follow-up",
          status: "waiting"
        }],
        M = [{
          name: "Excellent",
          value: 65,
          fill: "var(--chart-1)"
        }, {
          name: "Good",
          value: 25,
          fill: "var(--chart-2)"
        }, {
          name: "Fair",
          value: 8,
          fill: "var(--chart-4)"
        }, {
          name: "Poor",
          value: 2,
          fill: "var(--chart-5)"
        }],
        R = [{
          label: "Patient Satisfaction",
          value: "4.8 / 5",
          icon: C.A,
          progress: 96
        }, {
          label: "No-show Rate",
          value: "3%",
          icon: D.A,
          progress: 3
        }, {
          label: "Technical Issues",
          value: "1%",
          icon: P.A,
          progress: 1
        }],
        F = {
          "follow-up": "secondary",
          consultation: "default",
          urgent: "destructive"
        },
        J = {
          "follow-up": "Follow-up",
          consultation: "Consultation",
          urgent: "Urgent"
        },
        B = {
          confirmed: "success",
          waiting: "warning"
        },
        W = {
          confirmed: "Confirmed",
          waiting: "Waiting Room"
        };

      function Z({
        active: e,
        payload: s
      }) {
        return e && s?.length ? (0, l.jsxs)("div", {
          className: "rounded-lg border border-border bg-popover px-3 py-2 shadow-xl",
          children: [(0, l.jsx)("p", {
            className: "text-sm font-semibold",
            children: s[0].name
          }), (0, l.jsxs)("p", {
            className: "text-xs text-muted-foreground",
            children: [s[0].value, "%"]
          })]
        }) : null
      }

      function q() {
        let [e, s] = (0, a.useState)(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)("div", {
            className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [(0, l.jsxs)("div", {
              children: [(0, l.jsx)("h1", {
                className: "text-2xl font-bold tracking-tight",
                children: "Telemedicine"
              }), (0, l.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: "Manage virtual consultations, video sessions, and scheduling."
              })]
            }), (0, l.jsxs)(r.$, {
              size: "sm",
              onClick: () => s(!0),
              children: [(0, l.jsx)(v.A, {
                className: "mr-2 h-4 w-4"
              }), "Start New Session"]
            })]
          }), (0, l.jsx)("div", {
            className: "grid grid-cols-2 gap-4 xl:grid-cols-4",
            children: k.map(e => {
              let s = e.icon;
              return (0, l.jsx)(i.Zp, {
                children: (0, l.jsx)(i.Wu, {
                  className: "p-5",
                  children: (0, l.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0, l.jsxs)("div", {
                      className: "space-y-2",
                      children: [(0, l.jsx)("p", {
                        className: "text-xs font-medium text-muted-foreground",
                        children: e.title
                      }), (0, l.jsx)("p", {
                        className: "text-2xl font-bold tracking-tight",
                        children: e.value
                      })]
                    }), (0, l.jsx)("div", {
                      className: (0, j.cn)("flex h-10 w-10 items-center justify-center rounded-xl", e.bg),
                      children: (0, l.jsx)(s, {
                        className: (0, j.cn)("h-5 w-5", e.color)
                      })
                    })]
                  })
                })
              }, e.title)
            })
          }), (0, l.jsxs)("div", {
            className: "mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12",
            children: [(0, l.jsxs)("div", {
              className: "space-y-6 xl:col-span-8",
              children: [(0, l.jsxs)("div", {
                children: [(0, l.jsx)("h2", {
                  className: "mb-4 text-base font-semibold",
                  children: "Active Sessions"
                }), (0, l.jsx)("div", {
                  className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                  children: T.map((e, s) => (0, l.jsx)(i.Zp, {
                    className: "border-chart-1/20 bg-chart-1/5",
                    children: (0, l.jsxs)(i.Wu, {
                      className: "p-4",
                      children: [(0, l.jsxs)("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [(0, l.jsxs)(n.E, {
                          variant: "default",
                          className: "text-[10px]",
                          children: [(0, l.jsx)("div", {
                            className: "mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-current"
                          }), "Live"]
                        }), (0, l.jsx)("span", {
                          className: "font-mono text-xs font-semibold text-muted-foreground",
                          children: e.duration
                        })]
                      }), (0, l.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, l.jsx)(c.eu, {
                          className: "h-10 w-10",
                          children: (0, l.jsx)(c.q5, {
                            className: "text-xs font-bold",
                            children: e.initials
                          })
                        }), (0, l.jsxs)("div", {
                          className: "flex-1",
                          children: [(0, l.jsx)("p", {
                            className: "text-sm font-semibold",
                            children: e.patient
                          }), (0, l.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: e.doctor
                          }), (0, l.jsx)("p", {
                            className: "text-[10px] text-muted-foreground",
                            children: e.type
                          })]
                        })]
                      }), (0, l.jsxs)(r.$, {
                        size: "sm",
                        className: "mt-3 w-full",
                        variant: "default",
                        onClick: () => u.oR.info("Joining video session..."),
                        children: [(0, l.jsx)(A.A, {
                          className: "mr-2 h-3.5 w-3.5"
                        }), "Join"]
                      })]
                    })
                  }, s))
                })]
              }), (0, l.jsxs)(i.Zp, {
                children: [(0, l.jsxs)(i.aR, {
                  className: "pb-4",
                  children: [(0, l.jsx)(i.ZB, {
                    className: "text-base font-semibold",
                    children: "Upcoming Sessions"
                  }), (0, l.jsx)(i.BT, {
                    children: "Scheduled consultations for today"
                  })]
                }), (0, l.jsx)(i.Wu, {
                  children: (0, l.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, l.jsxs)("table", {
                      className: "w-full",
                      children: [(0, l.jsx)("thead", {
                        children: (0, l.jsxs)("tr", {
                          className: "border-b border-border",
                          children: [(0, l.jsx)("th", {
                            className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                            children: "Patient"
                          }), (0, l.jsx)("th", {
                            className: "hidden pb-3 text-start text-xs font-medium text-muted-foreground sm:table-cell",
                            children: "Doctor"
                          }), (0, l.jsx)("th", {
                            className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                            children: "Time"
                          }), (0, l.jsx)("th", {
                            className: "pb-3 text-center text-xs font-medium text-muted-foreground",
                            children: "Type"
                          }), (0, l.jsx)("th", {
                            className: "pb-3 text-end text-xs font-medium text-muted-foreground",
                            children: "Status"
                          })]
                        })
                      }), (0, l.jsx)("tbody", {
                        children: E.map((e, s) => (0, l.jsxs)("tr", {
                          className: "border-b border-border/50 last:border-0 transition-colors hover:bg-muted/30",
                          children: [(0, l.jsx)("td", {
                            className: "py-3",
                            children: (0, l.jsxs)("div", {
                              className: "flex items-center gap-2.5",
                              children: [(0, l.jsx)(c.eu, {
                                className: "h-7 w-7",
                                children: (0, l.jsx)(c.q5, {
                                  className: "text-[10px] font-bold",
                                  children: e.initials
                                })
                              }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("span", {
                                  className: "text-sm font-medium",
                                  children: e.patient
                                }), (0, l.jsx)("p", {
                                  className: "text-xs text-muted-foreground sm:hidden",
                                  children: e.doctor
                                })]
                              })]
                            })
                          }), (0, l.jsx)("td", {
                            className: "hidden py-3 text-sm text-muted-foreground sm:table-cell",
                            children: e.doctor
                          }), (0, l.jsx)("td", {
                            className: "py-3",
                            children: (0, l.jsxs)("div", {
                              className: "flex items-center gap-1.5",
                              children: [(0, l.jsx)(S.A, {
                                className: "h-3.5 w-3.5 text-muted-foreground"
                              }), (0, l.jsx)("span", {
                                className: "text-sm font-medium",
                                children: e.time
                              })]
                            })
                          }), (0, l.jsx)("td", {
                            className: "py-3 text-center",
                            children: (0, l.jsx)(n.E, {
                              variant: F[e.type],
                              className: "text-[10px]",
                              children: J[e.type]
                            })
                          }), (0, l.jsx)("td", {
                            className: "py-3 text-end",
                            children: (0, l.jsx)(n.E, {
                              variant: B[e.status],
                              className: "text-[10px]",
                              children: W[e.status]
                            })
                          })]
                        }, s))
                      })]
                    })
                  })
                })]
              })]
            }), (0, l.jsxs)("div", {
              className: "space-y-4 xl:col-span-4",
              children: [(0, l.jsxs)(i.Zp, {
                children: [(0, l.jsxs)(i.aR, {
                  className: "pb-2",
                  children: [(0, l.jsx)(i.ZB, {
                    className: "text-base font-semibold",
                    children: "Session Quality"
                  }), (0, l.jsx)(i.BT, {
                    children: "Video call quality distribution"
                  })]
                }), (0, l.jsx)(i.Wu, {
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [(0, l.jsxs)("div", {
                      className: "relative h-44 w-44",
                      children: [(0, l.jsx)(p.u, {
                        width: "100%",
                        height: "100%",
                        children: (0, l.jsxs)(f.r, {
                          children: [(0, l.jsx)(g.Fq, {
                            data: M,
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 50,
                            outerRadius: 75,
                            paddingAngle: 3,
                            dataKey: "value",
                            strokeWidth: 0,
                            children: M.map((e, s) => (0, l.jsx)(N.f, {
                              fill: e.fill
                            }, s))
                          }), (0, l.jsx)(b.m, {
                            content: (0, l.jsx)(Z, {})
                          })]
                        })
                      }), (0, l.jsxs)("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center",
                        children: [(0, l.jsx)("span", {
                          className: "text-lg font-bold",
                          children: "90%"
                        }), (0, l.jsx)("span", {
                          className: "text-[10px] text-muted-foreground",
                          children: "Excellent + Good"
                        })]
                      })]
                    }), (0, l.jsx)("div", {
                      className: "w-full space-y-3",
                      children: M.map(e => (0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [(0, l.jsx)("div", {
                            className: "h-2.5 w-2.5 rounded-full",
                            style: {
                              backgroundColor: e.fill
                            }
                          }), (0, l.jsx)("span", {
                            className: "text-xs text-muted-foreground",
                            children: e.name
                          })]
                        }), (0, l.jsxs)("span", {
                          className: "text-xs font-semibold",
                          children: [e.value, "%"]
                        })]
                      }, e.name))
                    })]
                  })
                })]
              }), (0, l.jsxs)(i.Zp, {
                children: [(0, l.jsxs)(i.aR, {
                  className: "pb-4",
                  children: [(0, l.jsx)(i.ZB, {
                    className: "text-base font-semibold",
                    children: "Quick Stats"
                  }), (0, l.jsx)(i.BT, {
                    children: "Performance indicators"
                  })]
                }), (0, l.jsx)(i.Wu, {
                  className: "space-y-5",
                  children: R.map(e => {
                    let s = e.icon;
                    return (0, l.jsxs)("div", {
                      className: "space-y-2",
                      children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [(0, l.jsx)(s, {
                            className: "h-4 w-4 text-muted-foreground"
                          }), (0, l.jsx)("span", {
                            className: "text-xs font-medium",
                            children: e.label
                          })]
                        }), (0, l.jsx)("span", {
                          className: "text-sm font-bold",
                          children: e.value
                        })]
                      }), (0, l.jsx)(d.k, {
                        value: e.progress,
                        indicatorClassName: "Patient Satisfaction" === e.label ? "bg-chart-1" : "No-show Rate" === e.label ? "bg-chart-4" : "bg-chart-3"
                      })]
                    }, e.label)
                  })
                })]
              })]
            })]
          }), (0, l.jsx)(o.lG, {
            open: e,
            onOpenChange: s,
            children: (0, l.jsxs)(o.Cf, {
              className: "sm:max-w-[480px]",
              children: [(0, l.jsxs)(o.c7, {
                children: [(0, l.jsx)(o.L3, {
                  children: "Start New Session"
                }), (0, l.jsx)(o.rr, {
                  children: "Set up a new telemedicine consultation."
                })]
              }), (0, l.jsxs)("form", {
                onSubmit: e => {
                  e.preventDefault(), u.oR.success("Telemedicine session started"), s(!1)
                },
                className: "grid gap-4 py-4",
                children: [(0, l.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, l.jsx)(x.J, {
                    htmlFor: "tele-patient",
                    children: "Patient Name"
                  }), (0, l.jsx)(m.p, {
                    id: "tele-patient",
                    placeholder: "Enter patient name"
                  })]
                }), (0, l.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, l.jsx)(x.J, {
                    htmlFor: "tele-doctor",
                    children: "Doctor"
                  }), (0, l.jsxs)(h.l6, {
                    children: [(0, l.jsx)(h.bq, {
                      id: "tele-doctor",
                      children: (0, l.jsx)(h.yv, {
                        placeholder: "Select doctor"
                      })
                    }), (0, l.jsxs)(h.gC, {
                      children: [(0, l.jsx)(h.eb, {
                        value: "wilson",
                        children: "Dr. Wilson"
                      }), (0, l.jsx)(h.eb, {
                        value: "patel",
                        children: "Dr. Patel"
                      }), (0, l.jsx)(h.eb, {
                        value: "chang",
                        children: "Dr. Chang"
                      }), (0, l.jsx)(h.eb, {
                        value: "garcia",
                        children: "Dr. Garcia"
                      })]
                    })]
                  })]
                }), (0, l.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, l.jsx)(x.J, {
                    htmlFor: "tele-type",
                    children: "Session Type"
                  }), (0, l.jsxs)(h.l6, {
                    children: [(0, l.jsx)(h.bq, {
                      id: "tele-type",
                      children: (0, l.jsx)(h.yv, {
                        placeholder: "Select type"
                      })
                    }), (0, l.jsxs)(h.gC, {
                      children: [(0, l.jsx)(h.eb, {
                        value: "consultation",
                        children: "Consultation"
                      }), (0, l.jsx)(h.eb, {
                        value: "follow-up",
                        children: "Follow-up"
                      }), (0, l.jsx)(h.eb, {
                        value: "urgent",
                        children: "Urgent"
                      })]
                    })]
                  })]
                }), (0, l.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, l.jsx)(x.J, {
                    htmlFor: "tele-time",
                    children: "Scheduled Time"
                  }), (0, l.jsx)(m.p, {
                    id: "tele-time",
                    type: "time"
                  })]
                }), (0, l.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, l.jsx)(x.J, {
                    htmlFor: "tele-notes",
                    children: "Notes"
                  }), (0, l.jsx)(m.p, {
                    id: "tele-notes",
                    placeholder: "Optional session notes"
                  })]
                }), (0, l.jsxs)(o.Es, {
                  children: [(0, l.jsx)(r.$, {
                    type: "button",
                    variant: "outline",
                    onClick: () => s(!1),
                    children: "Cancel"
                  }), (0, l.jsx)(r.$, {
                    type: "submit",
                    children: "Start Session"
                  })]
                })]
              })]
            })
          })]
        })
      }
    }
  },
  e => {
    e.O(0, [9055, 6609, 6264, 7618, 6895, 9883, 3960, 6877, 227, 2363, 6197, 6270, 1842, 8441, 3794, 7358], () => e(e.s = 28671)), _N_E = e.O()
  }
]);