(() => {
  var e,
    r = {
      547: () => {},
      566: () => {},
      988: () => {
        window.addEventListener("load", function () {
          var e = document.querySelector("#primary-menu");
          document
            .querySelector("#primary-menu-toggle")
            .addEventListener("click", function (r) {
              r.preventDefault(), e.classList.toggle("hidden");
            });
        });
      },
    },
    t = {};
  function n(e) {
    var o = t[e];
    if (void 0 !== o) return o.exports;
    var i = (t[e] = { exports: {} });
    return r[e](i, i.exports, n), i.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (r, t, o, i) => {
      if (!t) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, o, i] = e[u], l = !0, s = 0; s < t.length; s++)
            (!1 & i || a >= i) && Object.keys(n.O).every((e) => n.O[e](t[s]))
              ? t.splice(s--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(u--, 1);
            var v = o();
            void 0 !== v && (r = v);
          }
        }
        return r;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [t, o, i];
    }),
    (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e = { 847: 0, 992: 0, 252: 0 };
      n.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var o,
            i,
            [a, l, s] = t,
            v = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) var u = s(n);
          }
          for (r && r(t); v < a.length; v++)
            (i = a[v]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(u);
        },
        t = (self.webpackChunktailpress = self.webpackChunktailpress || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    n.O(void 0, [992, 252], () => n(988)),
    n.O(void 0, [992, 252], () => n(547));
  var o = n.O(void 0, [992, 252], () => n(566));
  o = n.O(o);
})();
