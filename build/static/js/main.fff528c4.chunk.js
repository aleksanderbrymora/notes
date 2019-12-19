(this.webpackJsonptrap = this.webpackJsonptrap || []).push([
  [0],
  {
    124: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(44),
        o = a.n(s),
        l = a(10),
        i = a(15),
        c = (a(57), a(4)),
        u = a(5),
        m = a(7),
        h = a(6),
        p = a(8),
        d = r.a.createContext(null),
        f = function(e) {
          return function(t) {
            return r.a.createElement(d.Consumer, null, function(a) {
              return r.a.createElement(
                e,
                Object.assign({}, t, { firebase: a })
              );
            });
          };
        },
        b = d,
        E = a(22),
        g = a.n(E),
        v =
          (a(58),
          a(60),
          {
            apiKey: "AIzaSyAkzU0nhZD6uRCHaMfTCXkcDyexkuSRErQ",
            authDomain: "notes-d5887.firebaseapp.com",
            databaseURL: "https://notes-d5887.firebaseio.com",
            projectId: "notes-d5887",
            storageBucket: "notes-d5887.appspot.com",
            messagingSenderId: "651876624694",
            appId: "1:651876624694:web:04c501c12f1c8f524b2b97",
            measurementId: "G-DN7T1WBZHF"
          }),
        O = function e() {
          var t = this;
          Object(c.a)(this, e),
            (this.doCreateUserWithEmailAndPassword = function(e, a) {
              return t.auth.createUserWithEmailAndPassword(e, a);
            }),
            (this.doSignInWithEmailAndPassword = function(e, a) {
              return t.auth.signInWithEmailAndPassword(e, a);
            }),
            (this.doSignOut = function() {
              return t.auth.signOut();
            }),
            (this.doPasswordReset = function(e) {
              return t.auth.sendPasswordResetEmail(e);
            }),
            (this.doPasswordUpdate = function(e) {
              return t.auth.currentUser.updatePassword(e);
            }),
            (this.user = function(e) {
              return t.db.ref("users/".concat(e));
            }),
            g.a.initializeApp(v),
            (this.auth = g.a.auth()),
            (this.db = g.a.database());
        },
        w = f(function(e) {
          var t = e.firebase;
          return r.a.createElement(
            "button",
            { type: "button", onClick: t.doSignOut },
            "Sign out"
          );
        }),
        j = "/home",
        C = r.a.createContext(null),
        S = function(e) {
          var t = (function(t) {
            function a(e) {
              var t;
              return (
                Object(c.a)(this, a),
                ((t = Object(m.a)(this, Object(h.a)(a).call(this, e))).state = {
                  authUser: JSON.parse(localStorage.getItem("authUser"))
                }),
                t
              );
            }
            return (
              Object(p.a)(a, t),
              Object(u.a)(a, [
                {
                  key: "componentDidMount",
                  value: function() {
                    var e = this;
                    this.listener = this.props.firebase.auth.onAuthStateChanged(
                      function(t) {
                        t
                          ? (e.setState({ authUser: t }),
                            localStorage.setItem(
                              "authUser",
                              JSON.stringify({ id: t.uid, email: t.email })
                            ))
                          : (e.setState({ authUser: null }),
                            localStorage.removeItem("authUser"));
                      }
                    );
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    this.listener();
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      C.Provider,
                      { value: this.state.authUser },
                      r.a.createElement(e, this.props)
                    );
                  }
                }
              ]),
              a
            );
          })(r.a.Component);
          return f(t);
        },
        y = a(17),
        N = function(e) {
          return function(t) {
            var a = (function(a) {
              function n() {
                return (
                  Object(c.a)(this, n),
                  Object(m.a)(this, Object(h.a)(n).apply(this, arguments))
                );
              }
              return (
                Object(p.a)(n, a),
                Object(u.a)(n, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      var t = this;
                      this.listener = this.props.firebase.auth.onAuthStateChanged(
                        function(a) {
                          e(a) || t.props.history.push("/signin");
                        }
                      );
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function() {
                      this.listener();
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      var a = this;
                      return r.a.createElement(C.Consumer, null, function(n) {
                        return e(n) ? r.a.createElement(t, a.props) : null;
                      });
                    }
                  }
                ]),
                n
              );
            })(r.a.Component);
            return Object(y.a)(i.e, f)(a);
          };
        },
        P = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(m.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "basic-nav" },
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(l.b, { to: j }, "Home")
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(l.b, { to: "/account" }, "Account")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "user-nav" },
                      r.a.createElement("li", null, r.a.createElement(w, null))
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        k = function() {
          return r.a.createElement(
            "ul",
            null,
            r.a.createElement(
              "div",
              { className: "basic-nav" },
              r.a.createElement(
                "li",
                null,
                r.a.createElement(l.b, { to: "/" }, "Discover the app")
              )
            ),
            r.a.createElement(
              "div",
              { className: "user-nav" },
              r.a.createElement(
                "li",
                null,
                r.a.createElement(l.b, { to: "/signin" }, "Sign In")
              )
            )
          );
        },
        U = function() {
          return r.a.createElement(
            "div",
            { className: "navigation" },
            r.a.createElement("h1", null, "NotAble"),
            r.a.createElement(C.Consumer, null, function(e) {
              return e
                ? r.a.createElement(P, null)
                : r.a.createElement(k, null);
            })
          );
        },
        I = function() {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement("h1", null, "App")
          );
        },
        A = a(13),
        D = a(9),
        F = {
          username: "",
          email: "",
          passwordOne: "",
          passwordTwo: "",
          error: null
        },
        x = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).onSubmit = function(e) {
                var t = a.state,
                  n = t.username,
                  r = t.email,
                  s = t.passwordOne;
                a.props.firebase
                  .doCreateUserWithEmailAndPassword(r, s)
                  .then(function(e) {
                    return a.props.firebase
                      .user(e.user.uid)
                      .set({ username: n, email: r });
                  })
                  .then(function(e) {
                    a.setState(Object(D.a)({}, F)), a.props.history.push(j);
                  })
                  .catch(function(e) {
                    a.setState({ error: e });
                  }),
                  e.preventDefault();
              }),
              (a.onChange = function(e) {
                return a.setState(
                  Object(A.a)({}, e.target.name, e.target.value)
                );
              }),
              (a.state = Object(D.a)({}, F)),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.username,
                    a = e.email,
                    n = e.passwordOne,
                    s = e.passwordTwo,
                    o = e.error,
                    l = n !== s || "" === n || "" === a || "" === t;
                  return r.a.createElement(
                    "div",
                    { className: "form-input" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit },
                      r.a.createElement("input", {
                        name: "username",
                        value: t,
                        onChange: this.onChange,
                        type: "text",
                        placeholder: "Full Name"
                      }),
                      r.a.createElement("input", {
                        name: "email",
                        value: a,
                        onChange: this.onChange,
                        type: "text",
                        placeholder: "Email Address"
                      }),
                      r.a.createElement("input", {
                        name: "passwordOne",
                        value: n,
                        onChange: this.onChange,
                        type: "password",
                        placeholder: "Password"
                      }),
                      r.a.createElement("input", {
                        name: "passwordTwo",
                        value: s,
                        onChange: this.onChange,
                        type: "password",
                        placeholder: "Confirm Password"
                      }),
                      r.a.createElement(
                        "button",
                        { disabled: l, type: "submit" },
                        "Sign Up"
                      ),
                      o && r.a.createElement("p", null, o.message)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        T = Object(y.a)(i.e, f)(x),
        W = function() {
          return r.a.createElement(
            "p",
            { className: "misc" },
            "Don't have an account? ",
            r.a.createElement(l.b, { to: "/signup" }, "Sign Up")
          );
        },
        M = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("h1", null, "Sign Up"),
            r.a.createElement(T, null)
          );
        },
        R = { email: "", error: null },
        H = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).onSubmit = function(e) {
                var t = a.state.email;
                a.props.firebase
                  .doPasswordReset(t)
                  .then(function() {
                    a.setState(Object(D.a)({}, R));
                  })
                  .catch(function(e) {
                    a.setState({ error: e });
                  }),
                  e.preventDefault();
              }),
              (a.onChange = function(e) {
                a.setState(Object(A.a)({}, e.target.name, e.target.value));
              }),
              (a.state = Object(D.a)({}, R)),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.email,
                    a = e.error,
                    n = "" === t;
                  return r.a.createElement(
                    "div",
                    { className: "form-input" },
                    r.a.createElement("h5", null, "Forgot your password?"),
                    r.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit },
                      r.a.createElement("input", {
                        name: "email",
                        value: this.state.email,
                        onChange: this.onChange,
                        type: "text",
                        placeholder: "Email Address"
                      }),
                      r.a.createElement(
                        "button",
                        { disabled: n, type: "submit" },
                        "Reset My Password"
                      ),
                      a && r.a.createElement("p", null, a.message)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        B = function() {
          return r.a.createElement(
            "p",
            { className: "misc" },
            r.a.createElement(l.b, { to: "/pw-forget" }, "Forgot Password?")
          );
        },
        J = f(H),
        z = function() {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement("h1", null, "Forgot Password"),
            r.a.createElement(J, null)
          );
        },
        L = { email: "", password: "", error: null },
        Z = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).onSubmit = function(e) {
                var t = a.state,
                  n = t.email,
                  r = t.password;
                a.props.firebase
                  .doSignInWithEmailAndPassword(n, r)
                  .then(function() {
                    a.setState(Object(D.a)({}, L)), a.props.history.push(j);
                  })
                  .catch(function(e) {
                    return a.setState({ error: e });
                  }),
                  e.preventDefault();
              }),
              (a.onChange = function(e) {
                return a.setState(
                  Object(A.a)({}, e.target.name, e.target.value)
                );
              }),
              (a.state = Object(D.a)({}, L)),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.email,
                    a = e.password,
                    n = e.error,
                    s = "" === a || "" === t;
                  return r.a.createElement(
                    "div",
                    { className: "form-input" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit },
                      r.a.createElement("input", {
                        autoFocus: !0,
                        name: "email",
                        value: t,
                        onChange: this.onChange,
                        type: "text",
                        placeholder: "Email Address"
                      }),
                      r.a.createElement("input", {
                        name: "password",
                        value: a,
                        onChange: this.onChange,
                        type: "password",
                        placeholder: "Password"
                      }),
                      r.a.createElement(
                        "button",
                        { disabled: s, type: "submit" },
                        "Sign In"
                      ),
                      n && r.a.createElement("p", null, n.message)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        _ = Object(y.a)(i.e, f)(Z),
        G = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("h1", null, "Sing In"),
            r.a.createElement(_, null),
            r.a.createElement(B, null),
            r.a.createElement(W, null)
          );
        },
        K = a(49),
        Q = a.n(K),
        X = a(50),
        Y = a.n(X),
        $ = a(51),
        q = a.n($),
        V = { isFetchDone: !1, title: "", input: "", parsed: "" },
        ee = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).onChangeTitle = function(e) {
                return a.setState({ title: e.target.value });
              }),
              (a.onChangeInput = function(e) {
                var t = new q.a().render(e.target.value);
                a.setState({ parsed: t, input: e.target.value });
              }),
              (a.state = Object(D.a)({}, V)),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  return Q.a.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this.setState({ isFetchDone: !0 });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.isFetchDone
                    ? r.a.createElement(
                        "div",
                        { className: "page" },
                        r.a.createElement(
                          "div",
                          { className: "left" },
                          r.a.createElement("input", {
                            placeholder: "Title",
                            autoFocus: !0,
                            name: "title",
                            value: this.state.title,
                            className: "title",
                            onChange: this.onChangeTitle
                          }),
                          r.a.createElement("textarea", {
                            placeholder: "Your note...",
                            name: "input",
                            value: this.state.input,
                            className: "user-input",
                            onChange: this.onChangeInput
                          })
                        ),
                        r.a.createElement(
                          "div",
                          { className: "right" },
                          r.a.createElement("h1", null, this.state.title),
                          r.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                              __html: this.state.parsed
                            }
                          })
                        )
                      )
                    : r.a.createElement("img", {
                        src: Y.a,
                        className: "loader",
                        alt: "loading"
                      });
                }
              }
            ]),
            t
          );
        })(n.Component),
        te = N(function(e) {
          return !!e;
        })(ee),
        ae = { passwordOne: "", passwordTwo: "", error: null },
        ne = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).onSubmit = function(e) {
                var t = a.state.passwordOne;
                a.props.firebase
                  .doPasswordUpdate(t)
                  .then(function() {
                    a.setState(Object(D.a)({}, ae));
                  })
                  .catch(function(e) {
                    a.setState({ error: e });
                  }),
                  e.preventDefault();
              }),
              (a.onChange = function(e) {
                a.setState(Object(A.a)({}, e.target.name, e.target.value));
              }),
              (a.state = Object(D.a)({}, ae)),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.passwordOne,
                    a = e.passwordTwo,
                    n = e.error,
                    s = t !== a || "" === t;
                  return r.a.createElement(
                    "div",
                    { className: "form-input" },
                    r.a.createElement(
                      "h5",
                      null,
                      "Want to change your password?"
                    ),
                    r.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit },
                      r.a.createElement("input", {
                        name: "passwordOne",
                        value: t,
                        onChange: this.onChange,
                        type: "password",
                        placeholder: "New Password"
                      }),
                      r.a.createElement("input", {
                        name: "passwordTwo",
                        value: a,
                        onChange: this.onChange,
                        type: "password",
                        placeholder: "Confirm New Password"
                      }),
                      r.a.createElement(
                        "button",
                        { disabled: s, type: "submit" },
                        "Reset My Password"
                      ),
                      n && r.a.createElement("p", null, n.message)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        re = f(ne),
        se = N(function(e) {
          return !!e;
        })(function() {
          return r.a.createElement(C.Consumer, null, function(e) {
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement("h1", null, "Hi ", e.email.split("@")[0], "!"),
              r.a.createElement("hr", null),
              r.a.createElement(
                "h3",
                { id: "manage-account-title" },
                "Manage your account"
              ),
              r.a.createElement(J, null),
              r.a.createElement(re, null)
            );
          });
        }),
        oe = S(function() {
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(U, { className: "navigation" }),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(i.a, { exact: !0, path: "/", component: I }),
                r.a.createElement(i.a, {
                  className: "form-input",
                  path: "/signup",
                  component: M
                }),
                r.a.createElement(i.a, {
                  className: "form-input",
                  path: "/signin",
                  component: G
                }),
                r.a.createElement(i.a, {
                  className: "form-input",
                  path: "/pw-forget",
                  component: z
                }),
                r.a.createElement(i.a, { path: j, component: te }),
                r.a.createElement(i.a, { path: "/account", component: se })
              )
            )
          );
        });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        r.a.createElement(
          b.Provider,
          { value: new O() },
          r.a.createElement(oe, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    50: function(e, t, a) {
      e.exports = a.p + "static/media/loader.dde0ed76.gif";
    },
    52: function(e, t, a) {
      e.exports = a(124);
    },
    57: function(e, t, a) {}
  },
  [[52, 1, 2]]
]);
//# sourceMappingURL=main.fff528c4.chunk.js.map
