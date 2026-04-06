(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7232], {
    39132: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => A
      });
      var i = t(95155),
        a = t(12115),
        l = t(62831),
        r = t(55078),
        n = t(35125),
        c = t(74666),
        d = t(36877),
        o = t(47385),
        m = t(50259),
        x = t(81746),
        h = t(66609),
        u = t(39055),
        p = t(65213),
        g = t(91958),
        j = t(84980),
        f = t(51914),
        b = t(44071),
        N = t(62032);
      let v = [{
          title: "Active Prescriptions",
          value: "342",
          change: 12,
          icon: p.A,
          color: "text-chart-1",
          bg: "bg-chart-1/10"
        }, {
          title: "Refill Requests",
          value: "18",
          change: 5,
          icon: g.A,
          color: "text-chart-2",
          bg: "bg-chart-2/10"
        }, {
          title: "Expiring Soon",
          value: "7",
          change: -2,
          icon: j.A,
          color: "text-chart-4",
          bg: "bg-chart-4/10"
        }],
        y = [{
          patient: "Sarah Johnson",
          initials: "SJ",
          medication: "Lisinopril",
          dosage: "10mg",
          frequency: "Once daily",
          prescriber: "Dr. Williams",
          startDate: "Jan 15, 2026",
          refills: 3,
          status: "active"
        }, {
          patient: "James Chen",
          initials: "JC",
          medication: "Metformin",
          dosage: "500mg",
          frequency: "Twice daily",
          prescriber: "Dr. Patel",
          startDate: "Feb 3, 2026",
          refills: 5,
          status: "active"
        }, {
          patient: "Maria Garcia",
          initials: "MG",
          medication: "Amoxicillin",
          dosage: "500mg",
          frequency: "Three times daily",
          prescriber: "Dr. Martinez",
          startDate: "Feb 20, 2026",
          refills: 0,
          status: "active"
        }, {
          patient: "Robert Kim",
          initials: "RK",
          medication: "Atorvastatin",
          dosage: "40mg",
          frequency: "Once daily",
          prescriber: "Dr. Williams",
          startDate: "Dec 8, 2025",
          refills: 1,
          status: "pending-refill"
        }, {
          patient: "Emily Davis",
          initials: "ED",
          medication: "Sertraline",
          dosage: "100mg",
          frequency: "Once daily",
          prescriber: "Dr. Brooks",
          startDate: "Nov 12, 2025",
          refills: 0,
          status: "expired"
        }, {
          patient: "David Thompson",
          initials: "DT",
          medication: "Omeprazole",
          dosage: "20mg",
          frequency: "Once daily before meal",
          prescriber: "Dr. Chen",
          startDate: "Jan 28, 2026",
          refills: 4,
          status: "active"
        }, {
          patient: "Lisa Patel",
          initials: "LP",
          medication: "Amlodipine",
          dosage: "5mg",
          frequency: "Once daily",
          prescriber: "Dr. Kim",
          startDate: "Feb 10, 2026",
          refills: 2,
          status: "pending-refill"
        }, {
          patient: "Michael Brown",
          initials: "MB",
          medication: "Levothyroxine",
          dosage: "75mcg",
          frequency: "Once daily, empty stomach",
          prescriber: "Dr. Patel",
          startDate: "Oct 5, 2025",
          refills: 1,
          status: "active"
        }],
        w = [{
          severity: "Moderate",
          drug1: "Lisinopril",
          drug2: "Potassium supplements",
          patient: "Sarah Johnson",
          description: "Concurrent use may increase the risk of hyperkalemia. Monitor serum potassium levels closely, especially during initiation or dosage changes."
        }, {
          severity: "Major",
          drug1: "Sertraline",
          drug2: "Tramadol",
          patient: "Emily Davis",
          description: "Combined use increases the risk of serotonin syndrome. Signs include agitation, confusion, tachycardia, and hyperthermia. Consider alternative pain management."
        }],
        D = [{
          patient: "Robert Kim",
          initials: "RK",
          medication: "Atorvastatin 40mg",
          requestDate: "Feb 24, 2026",
          urgency: "routine",
          lastFilled: "Dec 8, 2025"
        }, {
          patient: "Lisa Patel",
          initials: "LP",
          medication: "Amlodipine 5mg",
          requestDate: "Feb 25, 2026",
          urgency: "urgent",
          lastFilled: "Feb 10, 2026"
        }, {
          patient: "Thomas Wright",
          initials: "TW",
          medication: "Metoprolol 50mg",
          requestDate: "Feb 23, 2026",
          urgency: "routine",
          lastFilled: "Jan 20, 2026"
        }, {
          patient: "Anna Nguyen",
          initials: "AN",
          medication: "Fluoxetine 20mg",
          requestDate: "Feb 26, 2026",
          urgency: "urgent",
          lastFilled: "Jan 28, 2026"
        }],
        q = {
          active: "success",
          "pending-refill": "warning",
          expired: "destructive"
        },
        C = {
          active: "Active",
          "pending-refill": "Pending Refill",
          expired: "Expired"
        },
        F = {
          urgent: "destructive",
          routine: "secondary"
        };

      function A() {
        let [e, s] = (0, a.useState)(!1), [t, g] = (0, a.useState)(""), [j, A] = (0, a.useState)(""), [P, R] = (0, a.useState)(""), [k, S] = (0, a.useState)(""), [J, E] = (0, a.useState)("3");
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [(0, i.jsxs)("div", {
              children: [(0, i.jsx)("h1", {
                className: "text-2xl font-bold tracking-tight",
                children: "Prescriptions"
              }), (0, i.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: "Manage medications, refills, and drug interactions."
              })]
            }), (0, i.jsxs)(n.$, {
              size: "sm",
              onClick: () => s(!0),
              children: [(0, i.jsx)(f.A, {
                className: "mr-2 h-4 w-4"
              }), "New Prescription"]
            })]
          }), (0, i.jsx)("div", {
            className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
            children: v.map(e => {
              let s = e.icon,
                t = e.change > 0;
              return (0, i.jsx)(l.Zp, {
                children: (0, i.jsx)(l.Wu, {
                  className: "p-5",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0, i.jsxs)("div", {
                      className: "space-y-2",
                      children: [(0, i.jsx)("p", {
                        className: "text-xs font-medium text-muted-foreground",
                        children: e.title
                      }), (0, i.jsx)("p", {
                        className: "text-2xl font-bold tracking-tight",
                        children: e.value
                      }), (0, i.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [(0, i.jsx)(b.A, {
                          className: (0, u.cn)("h-3.5 w-3.5", t ? "text-success" : "text-destructive")
                        }), (0, i.jsxs)("span", {
                          className: (0, u.cn)("text-xs font-semibold", t ? "text-success" : "text-destructive"),
                          children: [t ? "+" : "", e.change, " from last week"]
                        })]
                      })]
                    }), (0, i.jsx)("div", {
                      className: (0, u.cn)("flex h-10 w-10 items-center justify-center rounded-xl", e.bg),
                      children: (0, i.jsx)(s, {
                        className: (0, u.cn)("h-5 w-5", e.color)
                      })
                    })]
                  })
                })
              }, e.title)
            })
          }), (0, i.jsxs)(l.Zp, {
            className: "mt-6",
            children: [(0, i.jsxs)(l.aR, {
              className: "pb-4",
              children: [(0, i.jsx)(l.ZB, {
                className: "text-base font-semibold",
                children: "Active Prescriptions"
              }), (0, i.jsx)(l.BT, {
                children: "All current patient prescriptions"
              })]
            }), (0, i.jsx)(l.Wu, {
              children: (0, i.jsx)("div", {
                className: "overflow-x-auto",
                children: (0, i.jsxs)("table", {
                  className: "w-full",
                  children: [(0, i.jsx)("thead", {
                    children: (0, i.jsxs)("tr", {
                      className: "border-b border-border",
                      children: [(0, i.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Patient"
                      }), (0, i.jsx)("th", {
                        className: "pb-3 text-start text-xs font-medium text-muted-foreground",
                        children: "Medication"
                      }), (0, i.jsx)("th", {
                        className: "hidden pb-3 text-start text-xs font-medium text-muted-foreground sm:table-cell",
                        children: "Dosage"
                      }), (0, i.jsx)("th", {
                        className: "hidden pb-3 text-start text-xs font-medium text-muted-foreground md:table-cell",
                        children: "Frequency"
                      }), (0, i.jsx)("th", {
                        className: "hidden pb-3 text-start text-xs font-medium text-muted-foreground lg:table-cell",
                        children: "Prescriber"
                      }), (0, i.jsx)("th", {
                        className: "hidden pb-3 text-start text-xs font-medium text-muted-foreground lg:table-cell",
                        children: "Start Date"
                      }), (0, i.jsx)("th", {
                        className: "hidden pb-3 text-end text-xs font-medium text-muted-foreground sm:table-cell",
                        children: "Refills"
                      }), (0, i.jsx)("th", {
                        className: "pb-3 text-end text-xs font-medium text-muted-foreground",
                        children: "Status"
                      })]
                    })
                  }), (0, i.jsx)("tbody", {
                    children: y.map(e => (0, i.jsxs)("tr", {
                      className: "border-b border-border/50 last:border-0 transition-colors hover:bg-muted/30",
                      children: [(0, i.jsx)("td", {
                        className: "py-3",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center gap-2.5",
                          children: [(0, i.jsx)(c.eu, {
                            className: "h-7 w-7",
                            children: (0, i.jsx)(c.q5, {
                              className: "text-[10px] font-bold",
                              children: e.initials
                            })
                          }), (0, i.jsx)("span", {
                            className: "text-sm font-medium",
                            children: e.patient
                          })]
                        })
                      }), (0, i.jsx)("td", {
                        className: "py-3",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [(0, i.jsx)(p.A, {
                            className: "h-3.5 w-3.5 text-muted-foreground"
                          }), (0, i.jsx)("span", {
                            className: "text-sm",
                            children: e.medication
                          })]
                        })
                      }), (0, i.jsx)("td", {
                        className: "hidden py-3 text-sm sm:table-cell",
                        children: e.dosage
                      }), (0, i.jsx)("td", {
                        className: "hidden py-3 text-sm text-muted-foreground md:table-cell",
                        children: e.frequency
                      }), (0, i.jsx)("td", {
                        className: "hidden py-3 text-sm text-muted-foreground lg:table-cell",
                        children: e.prescriber
                      }), (0, i.jsx)("td", {
                        className: "hidden py-3 text-sm text-muted-foreground lg:table-cell",
                        children: e.startDate
                      }), (0, i.jsx)("td", {
                        className: "hidden py-3 text-end text-sm font-semibold sm:table-cell",
                        children: e.refills
                      }), (0, i.jsx)("td", {
                        className: "py-3 text-end",
                        children: (0, i.jsx)(r.E, {
                          variant: q[e.status],
                          className: "text-[10px]",
                          children: C[e.status]
                        })
                      })]
                    }, `${e.patient}-${e.medication}`))
                  })]
                })
              })
            })]
          }), (0, i.jsxs)("div", {
            className: "mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12",
            children: [(0, i.jsxs)("div", {
              className: "space-y-4 xl:col-span-7",
              children: [(0, i.jsx)("h2", {
                className: "text-base font-semibold",
                children: "Drug Interaction Alerts"
              }), w.map((e, s) => (0, i.jsx)(l.Zp, {
                className: "border-warning/40 bg-warning/5",
                children: (0, i.jsx)(l.Wu, {
                  className: "p-4",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-start gap-3",
                    children: [(0, i.jsx)("div", {
                      className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warning/10",
                      children: (0, i.jsx)(N.A, {
                        className: "h-5 w-5 text-warning"
                      })
                    }), (0, i.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [(0, i.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, i.jsx)(r.E, {
                          variant: "Major" === e.severity ? "destructive" : "warning",
                          className: "text-[10px]",
                          children: e.severity
                        }), (0, i.jsxs)("span", {
                          className: "text-sm font-semibold",
                          children: [e.drug1, " + ", e.drug2]
                        })]
                      }), (0, i.jsxs)("p", {
                        className: "text-xs text-muted-foreground",
                        children: ["Patient: ", e.patient]
                      }), (0, i.jsx)("p", {
                        className: "text-sm leading-relaxed text-muted-foreground",
                        children: e.description
                      })]
                    })]
                  })
                })
              }, s))]
            }), (0, i.jsxs)(l.Zp, {
              className: "xl:col-span-5",
              children: [(0, i.jsxs)(l.aR, {
                className: "pb-4",
                children: [(0, i.jsx)(l.ZB, {
                  className: "text-base font-semibold",
                  children: "Pending Refill Requests"
                }), (0, i.jsx)(l.BT, {
                  children: "Requests awaiting approval"
                })]
              }), (0, i.jsx)(l.Wu, {
                className: "space-y-3",
                children: D.map((e, s) => (0, i.jsxs)("div", {
                  className: "flex items-center justify-between rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/30",
                  children: [(0, i.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, i.jsx)(c.eu, {
                      className: "h-8 w-8",
                      children: (0, i.jsx)(c.q5, {
                        className: "text-[10px] font-bold",
                        children: e.initials
                      })
                    }), (0, i.jsxs)("div", {
                      children: [(0, i.jsx)("p", {
                        className: "text-sm font-medium",
                        children: e.patient
                      }), (0, i.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.medication
                      }), (0, i.jsxs)("p", {
                        className: "text-[10px] text-muted-foreground",
                        children: ["Requested: ", e.requestDate, " \xb7 Last filled: ", e.lastFilled]
                      })]
                    })]
                  }), (0, i.jsxs)("div", {
                    className: "flex flex-col items-end gap-2",
                    children: [(0, i.jsx)(r.E, {
                      variant: F[e.urgency],
                      className: "text-[10px] capitalize",
                      children: e.urgency
                    }), (0, i.jsxs)("div", {
                      className: "flex gap-1.5",
                      children: [(0, i.jsx)(n.$, {
                        variant: "outline",
                        size: "sm",
                        className: "h-7 text-xs",
                        onClick: () => h.oR.error(`Refill denied for ${e.medication}`),
                        children: "Deny"
                      }), (0, i.jsx)(n.$, {
                        size: "sm",
                        className: "h-7 text-xs",
                        onClick: () => h.oR.success(`Refill approved for ${e.medication}`),
                        children: "Approve"
                      })]
                    })]
                  })]
                }, s))
              })]
            })]
          }), (0, i.jsx)(d.lG, {
            open: e,
            onOpenChange: s,
            children: (0, i.jsxs)(d.Cf, {
              className: "sm:max-w-[480px]",
              children: [(0, i.jsxs)(d.c7, {
                children: [(0, i.jsx)(d.L3, {
                  children: "New Prescription"
                }), (0, i.jsx)(d.rr, {
                  children: "Fill in the details below to create a new prescription."
                })]
              }), (0, i.jsxs)("div", {
                className: "grid gap-4 py-4",
                children: [(0, i.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, i.jsx)(o.J, {
                    htmlFor: "patient-name",
                    children: "Patient Name"
                  }), (0, i.jsx)(m.p, {
                    id: "patient-name",
                    placeholder: "e.g. Sarah Johnson",
                    value: t,
                    onChange: e => g(e.target.value)
                  })]
                }), (0, i.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, i.jsx)(o.J, {
                    htmlFor: "medication",
                    children: "Medication"
                  }), (0, i.jsx)(m.p, {
                    id: "medication",
                    placeholder: "e.g. Lisinopril",
                    value: j,
                    onChange: e => A(e.target.value)
                  })]
                }), (0, i.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [(0, i.jsxs)("div", {
                    className: "grid gap-2",
                    children: [(0, i.jsx)(o.J, {
                      htmlFor: "dosage",
                      children: "Dosage"
                    }), (0, i.jsx)(m.p, {
                      id: "dosage",
                      placeholder: "e.g. 500mg",
                      value: P,
                      onChange: e => R(e.target.value)
                    })]
                  }), (0, i.jsxs)("div", {
                    className: "grid gap-2",
                    children: [(0, i.jsx)(o.J, {
                      htmlFor: "refills",
                      children: "Number of Refills"
                    }), (0, i.jsx)(m.p, {
                      id: "refills",
                      type: "number",
                      min: "0",
                      value: J,
                      onChange: e => E(e.target.value)
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: "grid gap-2",
                  children: [(0, i.jsx)(o.J, {
                    htmlFor: "frequency",
                    children: "Frequency"
                  }), (0, i.jsxs)(x.l6, {
                    value: k,
                    onValueChange: S,
                    children: [(0, i.jsx)(x.bq, {
                      id: "frequency",
                      children: (0, i.jsx)(x.yv, {
                        placeholder: "Select frequency"
                      })
                    }), (0, i.jsxs)(x.gC, {
                      children: [(0, i.jsx)(x.eb, {
                        value: "Once daily",
                        children: "Once daily"
                      }), (0, i.jsx)(x.eb, {
                        value: "Twice daily",
                        children: "Twice daily"
                      }), (0, i.jsx)(x.eb, {
                        value: "Three times daily",
                        children: "Three times daily"
                      }), (0, i.jsx)(x.eb, {
                        value: "Every 8 hours",
                        children: "Every 8 hours"
                      }), (0, i.jsx)(x.eb, {
                        value: "As needed",
                        children: "As needed"
                      })]
                    })]
                  })]
                })]
              }), (0, i.jsxs)(d.Es, {
                children: [(0, i.jsx)(n.$, {
                  variant: "outline",
                  onClick: () => s(!1),
                  children: "Cancel"
                }), (0, i.jsx)(n.$, {
                  onClick: () => {
                    h.oR.success("Prescription created successfully"), s(!1), g(""), A(""), R(""), S(""), E("3")
                  },
                  children: "Create Prescription"
                })]
              })]
            })
          })]
        })
      }
    },
    70034: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 39132))
    }
  },
  e => {
    e.O(0, [9055, 6609, 6264, 7618, 6895, 9883, 3960, 6877, 396, 8441, 3794, 7358], () => e(e.s = 70034)), _N_E = e.O()
  }
]);