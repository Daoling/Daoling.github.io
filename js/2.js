/*___meta___touch/js/amd/amd_common/i2app.a6aa28f2.js*/
"use strict";
!function() {
    function a() {
        for (var a, c = document.querySelectorAll("[data-com=i2app]"), d = 0, e = c.length; e > d; d++)
            a = c[d], a.addEventListener("click", function(c) {
            c.preventDefault(), b(a)
        })
    }
    function b(a) {
        var b = a.getAttribute("href"), e = a.dataset.pos, f = a.dataset.param && JSON.parse(a.dataset.param), g = c(e, f);
        g ? (d ? d.src = g : (d = document.createElement("iframe"), d.src = g, d.style.display = "none", document.body.appendChild(d)), setTimeout(function() {
            location.href = b
        }, 500)) : location.href = b
    }
    function c(a, b) {
        var c = /^\/deal\/(\d+)\.html$/, d = /^\/$/, h = "";
        switch (a) {
        case"banner":
            ~location.href.indexOf(e) && (h = f + "/?lch=" + g[a]);
            break;
        case"footer":
            h = f + "/?lch=" + g[a];
            break;
        case"float_layer":
            d.test(location.pathname) ? (a = "index_" + a, h = f + "?lch=" + g[a]) : c.test(location.pathname) && (a = "deal_" + a, h = f + "/deal?did=" + location.pathname.match(c)[1] + "&lch=" + g[a]);
            break;
        case"mingdian":
            h = f + "/todayspecial/list?id=" + b.id + "&lch=" + g[a]
        }
        return b && b.stid && (h += "&stid=" + b.stid), h
    }
    var d, e = "i.meituan.com", f = "imeituan://www.meituan.com", g = {
        banner: "ibanner",
        footer: "ift",
        index_float_layer: "ibdownindex",
        deal_float_layer: "ibdowndeal",
        mingdian: "imingdian"
    };
    if ("function" == typeof define)
        define([], function() {
            return function(a) {
                return ~window.navigator.userAgent.indexOf("MicroMessenger")?!1 : (a.addEventListener("click", function(c) {
                    c.preventDefault(), b(a)
                }), void 0)
            }
        });
    else {
        if (~window.navigator.userAgent.indexOf("MicroMessenger"))
            return !1;
        a()
    }
}();
