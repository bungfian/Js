var nopage, jenis, nomerhal, lblname1;
halamanblogger();
function loophalaman(a) {
  var b = "";
  nomerkiri = parseInt(numshowpage / 2);
  nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1);
  mulai = nomerhal - nomerkiri;
  1 > mulai && (mulai = 1);
  maksimal = parseInt(a / postperpage) + 1;
  maksimal - 1 == a / postperpage && --maksimal;
  akhir = mulai + numshowpage - 1;
  akhir > maksimal && (akhir = maksimal);
  b += "<span class='showpageOf'>Page " + nomerhal + " of " + maksimal + "</span>";
  a = parseInt(nomerhal) - 1;
  1 < nomerhal && (b = 2 == nomerhal ? "page" == jenis ? b + ('<span class="showpage"><a href="' + home_page + '">' + upPageWord + "</a></span>") : b + ('<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">' + upPageWord + "</a></span>") : "page" == jenis ? b + ('<span class="showpageNum"><a href="#" onclick="redirectpage(' + a + ');return false">' + upPageWord + "</a></span>") : b + ('<span class="showpageNum"><a href="#" onclick="redirectlabel(' + 
  a + ');return false">' + upPageWord + "</a></span>"));
  1 < mulai && (b = "page" == jenis ? b + ('<span class="showpageNum"><a href="' + home_page + '">1</a></span>') : b + ('<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>'));
  2 < mulai && (b += " ... ");
  for (a = mulai;a <= akhir;a++) {
    b = nomerhal == a ? b + ('<span class="showpagePoint">' + a + "</span>") : 1 == a ? "page" == jenis ? b + ('<span class="showpageNum"><a href="' + home_page + '">1</a></span>') : b + ('<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>') : "page" == jenis ? b + ('<span class="showpageNum"><a href="#" onclick="redirectpage(' + a + ');return false">' + a + "</a></span>") : b + ('<span class="showpageNum"><a href="#" onclick="redirectlabel(' + 
    a + ');return false">' + a + "</a></span>");
  }
  akhir < maksimal - 1 && (b += "...");
  akhir < maksimal && (b = "page" == jenis ? b + ('<span class="showpageNum"><a href="#" onclick="redirectpage(' + maksimal + ');return false">' + maksimal + "</a></span>") : b + ('<span class="showpageNum"><a href="#" onclick="redirectlabel(' + maksimal + ');return false">' + maksimal + "</a></span>"));
  a = parseInt(nomerhal) + 1;
  nomerhal < maksimal && (b = "page" == jenis ? b + ('<span class="showpageNum"><a href="#" onclick="redirectpage(' + a + ');return false">' + downPageWord + "</a></span>") : b + ('<span class="showpageNum"><a href="#" onclick="redirectlabel(' + a + ');return false">' + downPageWord + "</a></span>"));
  a = document.getElementsByName("pageArea");
  for (var g = document.getElementById("blog-pager"), f = 0;f < a.length;f++) {
    a[f].innerHTML = b;
  }
  a && 0 < a.length && (b = "");
  g && (g.innerHTML = b);
}
function hitungtotaldata(a) {
  a = parseInt(a.feed.openSearch$totalResults.$t, 10);
  loophalaman(a);
}
function halamanblogger() {
  var a = urlactivepage;
  -1 != a.indexOf("/search/label/") && (lblname1 = -1 != a.indexOf("?updated-max") ? a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max")) : a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max")));
  -1 == a.indexOf("?q=") && -1 == a.indexOf(".html") && (-1 == a.indexOf("/search/label/") ? (jenis = "page", nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata">\x3c/script>')) : (jenis = "label", -1 == a.indexOf("&max-results=") && (postperpage = 20), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? 
  urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" >\x3c/script>')));
}
function redirectpage(a) {
  jsonstart = (a - 1) * postperpage;
  nopage = a;
  a = document.getElementsByTagName("head")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
  a.appendChild(b);
}
function redirectlabel(a) {
  jsonstart = (a - 1) * postperpage;
  nopage = a;
  a = document.getElementsByTagName("head")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
  a.appendChild(b);
}
function finddatepost(a) {
  post = a.feed.entry[0];
  a = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
  a = encodeURIComponent(a);
  location.href = "page" == jenis ? "/search?updated-max=" + a + "&max-results=" + postperpage + "#PageNo=" + nopage : "/search/label/" + lblname1 + "?updated-max=" + a + "&max-results=" + postperpage + "#PageNo=" + nopage;
}
;var hljs = new function() {
  function a(a) {
    return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
  }
  function b(a) {
    for (a = a.firstChild;a;a = a.nextSibling) {
      if ("CODE" == a.nodeName) {
        return a;
      }
      if (3 != a.nodeType || !a.nodeValue.match(/\s+/)) {
        break;
      }
    }
  }
  function g(a, b) {
    return Array.prototype.map.call(a.childNodes, function(a) {
      return 3 == a.nodeType ? b ? a.nodeValue.replace(/\n/g, "") : a.nodeValue : "BR" == a.nodeName ? "\n" : g(a, b);
    }).join("");
  }
  function f(a) {
    a = (a.className + " " + a.parentNode.className).split(/\s+/);
    a = a.map(function(a) {
      return a.replace(/^language-/, "");
    });
    for (var b = 0;b < a.length;b++) {
      if (u[a[b]] || "no-highlight" == a[b]) {
        return a[b];
      }
    }
  }
  function d(a) {
    var b = [];
    (function t(a, c) {
      for (var d = a.firstChild;d;d = d.nextSibling) {
        3 == d.nodeType ? c += d.nodeValue.length : "BR" == d.nodeName ? c += 1 : 1 == d.nodeType && (b.push({event:"start", offset:c, node:d}), c = t(d, c), b.push({event:"stop", offset:c, node:d}));
      }
      return c;
    })(a, 0);
    return b;
  }
  function c(b, c, d) {
    function t(b) {
      return "<" + b.nodeName + Array.prototype.map.call(b.attributes, function(b) {
        return " " + b.nodeName + '="' + a(b.value) + '"';
      }).join("") + ">";
    }
    for (var f = 0, e = "", g = [];b.length || c.length;) {
      var k = (b.length && c.length ? b[0].offset != c[0].offset ? b[0].offset < c[0].offset ? b : c : "start" == c[0].event ? b : c : b.length ? b : c).splice(0, 1)[0], e = e + a(d.substr(f, k.offset - f)), f = k.offset;
      if ("start" == k.event) {
        e += t(k.node), g.push(k.node);
      } else {
        if ("stop" == k.event) {
          var h, q = g.length;
          do {
            q--, h = g[q], e += "</" + h.nodeName.toLowerCase() + ">";
          } while (h != k.node);
          for (g.splice(q, 1);q < g.length;) {
            e += t(g[q]), q++;
          }
        }
      }
    }
    return e + a(d.substr(f));
  }
  function e(a) {
    function b(t, c) {
      return RegExp(t, "m" + (a.cI ? "i" : "") + (c ? "g" : ""));
    }
    function c(a, d) {
      if (!a.compiled) {
        a.compiled = !0;
        var e = [];
        if (a.k) {
          var f = function(a, b) {
            b.split(" ").forEach(function(b) {
              b = b.split("|");
              g[b[0]] = [a, b[1] ? Number(b[1]) : 1];
              e.push(b[0]);
            });
          }, g = {};
          a.lR = b(a.l || hljs.IR, !0);
          if ("string" == typeof a.k) {
            f("keyword", a.k);
          } else {
            for (var h in a.k) {
              a.k.hasOwnProperty(h) && f(h, a.k[h]);
            }
          }
          a.k = g;
        }
        d && (a.bWK && (a.b = "\\b(" + e.join("|") + ")\\s"), a.bR = b(a.b ? a.b : "\\B|\\b"), a.e || a.eW || (a.e = "\\B|\\b"), a.e && (a.eR = b(a.e)), a.tE = a.e || "", a.eW && d.tE && (a.tE += (a.e ? "|" : "") + d.tE));
        a.i && (a.iR = b(a.i));
        void 0 === a.r && (a.r = 1);
        a.c || (a.c = []);
        for (f = 0;f < a.c.length;f++) {
          "self" == a.c[f] && (a.c[f] = a), c(a.c[f], a);
        }
        a.starts && c(a.starts, d);
        h = [];
        for (f = 0;f < a.c.length;f++) {
          h.push(a.c[f].b);
        }
        a.tE && h.push(a.tE);
        a.i && h.push(a.i);
        a.t = h.length ? b(h.join("|"), !0) : {exec:function(a) {
          return null;
        }};
      }
    }
    c(a);
  }
  function r(b, c) {
    function d(a, b) {
      if (a.e && a.eR.test(b)) {
        return a;
      }
      if (a.eW) {
        return d(a.parent, b);
      }
    }
    function f() {
      var b;
      if (void 0 !== k.sL) {
        k.sL && !u[k.sL] ? b = a(p) : (b = k.sL ? r(k.sL, p) : h(p), 0 < k.r && (v += b.keyword_count, l += b.r), b = '<span class="' + b.language + '">' + b.value + "</span>");
      } else {
        if (b = a(p), k.k) {
          var c = "", d = 0;
          k.lR.lastIndex = 0;
          for (var e = k.lR.exec(b);e;) {
            var c = c + b.substr(d, e.index - d), d = k, g = e, g = n.cI ? g[0].toLowerCase() : g[0];
            (d = d.k.hasOwnProperty(g) && d.k[g]) ? (v += d[1], c += '<span class="' + d[0] + '">' + e[0] + "</span>") : c += e[0];
            d = k.lR.lastIndex;
            e = k.lR.exec(b);
          }
          b = c + b.substr(d);
        }
      }
      return b;
    }
    function g(b, c) {
      var d = b.cN ? '<span class="' + b.cN + '">' : "";
      b.rB ? (m += d, p = "") : b.eB ? (m += a(c) + d, p = "") : (m += d, p = c);
      k = Object.create(b, {parent:{value:k}});
      l += b.r;
    }
    function q(b, c) {
      p += b;
      if (void 0 === c) {
        return m += f(), 0;
      }
      var e;
      a: {
        e = k;
        for (var h = 0;h < e.c.length;h++) {
          var y = e.c[h].bR.exec(c);
          if (y && 0 == y.index) {
            e = e.c[h];
            break a;
          }
        }
        e = void 0;
      }
      if (e) {
        return m += f(), g(e, c), e.rB ? 0 : c.length;
      }
      if (e = d(k, c)) {
        e.rE || e.eE || (p += c);
        m += f();
        do {
          k.cN && (m += "</span>"), k = k.parent;
        } while (k != e.parent);
        e.eE && (m += a(c));
        p = "";
        e.starts && g(e.starts, "");
        return e.rE ? 0 : c.length;
      }
      if (k.i && k.iR.test(c)) {
        throw "Illegal";
      }
      p += c;
      return c.length || 1;
    }
    var n = u[b];
    e(n);
    var k = n, p = "", l = 0, v = 0, m = "";
    try {
      for (var w, z, x = 0;;) {
        k.t.lastIndex = x;
        w = k.t.exec(c);
        if (!w) {
          break;
        }
        z = q(c.substr(x, w.index - x), w[0]);
        x = w.index + z;
      }
      q(c.substr(x));
      return {r:l, keyword_count:v, value:m, language:b};
    } catch (A) {
      if ("Illegal" == A) {
        return {r:0, keyword_count:0, value:a(c)};
      }
      throw A;
    }
  }
  function h(b) {
    var c = {keyword_count:0, r:0, value:a(b)}, d = c, e;
    for (e in u) {
      if (u.hasOwnProperty(e)) {
        var f = r(e, b);
        f.language = e;
        f.keyword_count + f.r > d.keyword_count + d.r && (d = f);
        f.keyword_count + f.r > c.keyword_count + c.r && (d = c, c = f);
      }
    }
    d.language && (c.second_best = d);
    return c;
  }
  function q(a, b, c) {
    b && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, c, d, e) {
      return c.replace(/\t/g, b);
    }));
    c && (a = a.replace(/\n/g, "<br>"));
    return a;
  }
  function n(a, b, e) {
    var t = g(a, e), n = f(a);
    if ("no-highlight" != n) {
      var l = n ? r(n, t) : h(t), n = l.language, u = d(a);
      if (u.length) {
        var k = document.createElement("pre");
        k.innerHTML = l.value;
        l.value = c(u, d(k), t);
      }
      l.value = q(l.value, b, e);
      b = a.className;
      b.match("(\\s|^)(language-)?" + n + "(\\s|$)") || (b = b ? b + " " + n : n);
      a.innerHTML = l.value;
      a.className = b;
      a.result = {language:n, kw:l.keyword_count, re:l.r};
      l.second_best && (a.second_best = {language:l.second_best.language, kw:l.second_best.keyword_count, re:l.second_best.r});
    }
  }
  function l() {
    l.called || (l.called = !0, Array.prototype.map.call(document.getElementsByTagName("pre"), b).filter(Boolean).forEach(function(a) {
      n(a, hljs.tabReplace);
    }));
  }
  var u = {};
  this.LANGUAGES = u;
  this.highlight = r;
  this.highlightAuto = h;
  this.fixMarkup = q;
  this.highlightBlock = n;
  this.initHighlighting = l;
  this.initHighlightingOnLoad = function() {
    window.addEventListener("DOMContentLoaded", l, !1);
    window.addEventListener("load", l, !1);
  };
  this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
  this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
  this.NR = "\\b\\d+(\\.\\d+)?";
  this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  this.BNR = "\\b(0b[01]+)";
  this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  this.BE = {b:"\\\\[\\s\\S]", r:0};
  this.ASM = {cN:"string", b:"'", e:"'", i:"\\n", c:[this.BE], r:0};
  this.QSM = {cN:"string", b:'"', e:'"', i:"\\n", c:[this.BE], r:0};
  this.CLCM = {cN:"comment", b:"//", e:"$"};
  this.CBLCLM = {cN:"comment", b:"/\\*", e:"\\*/"};
  this.HCM = {cN:"comment", b:"#", e:"$"};
  this.NM = {cN:"number", b:this.NR, r:0};
  this.CNM = {cN:"number", b:this.CNR, r:0};
  this.BNM = {cN:"number", b:this.BNR, r:0};
  this.inherit = function(a, b) {
    var c = {}, d;
    for (d in a) {
      c[d] = a[d];
    }
    if (b) {
      for (d in b) {
        c[d] = b[d];
      }
    }
    return c;
  };
};
hljs.LANGUAGES.bash = function(a) {
  var b = {cN:"variable", b:"\\$[a-zA-Z0-9_#]+"}, g = {cN:"variable", b:"\\${([^}]|\\\\})+}"}, f = {cN:"string", b:'"', e:'"', i:"\\n", c:[a.BE, b, g], r:0}, d = {cN:"string", b:"'", e:"'", c:[{b:"''"}], r:0}, c = {cN:"test_condition", b:"", e:"", c:[f, d, b, g], k:{literal:"true false"}, r:0};
  return {k:{keyword:"if then else elif fi for break continue while in do done echo exit return set declare", literal:"true false"}, c:[{cN:"shebang", b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)", r:10}, b, g, a.HCM, f, d, a.inherit(c, {b:"\\[ ", e:" \\]", r:0}), a.inherit(c, {b:"\\[\\[ ", e:" \\]\\]"})]};
}(hljs);
hljs.LANGUAGES.cs = function(a) {
  return {k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield", 
  c:[{cN:"comment", b:"///", e:"$", rB:!0, c:[{cN:"xmlDocTag", b:"///|\x3c!--|--\x3e"}, {cN:"xmlDocTag", b:"</?", e:">"}]}, a.CLCM, a.CBLCLM, {cN:"preprocessor", b:"#", e:"$", k:"if else elif endif define undef warning error line region endregion pragma checksum"}, {cN:"string", b:'@"', e:'"', c:[{b:'""'}]}, a.ASM, a.QSM, a.CNM]};
}(hljs);
hljs.LANGUAGES.ruby = function(a) {
  var b = {keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"}, g = {cN:"yardoctag", b:"@[A-Za-z]+"}, f = [{cN:"comment", b:"#", e:"$", c:[g]}, {cN:"comment", b:"^\\=begin", e:"^\\=end", c:[g], r:10}, {cN:"comment", b:"^__END__", e:"\\n$"}], g = {cN:"subst", b:"#\\{", e:"}", l:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", k:b}, d = [a.BE, 
  g], c = [{cN:"string", b:"'", e:"'", c:d, r:0}, {cN:"string", b:'"', e:'"', c:d, r:0}, {cN:"string", b:"%[qw]?\\(", e:"\\)", c:d}, {cN:"string", b:"%[qw]?\\[", e:"\\]", c:d}, {cN:"string", b:"%[qw]?{", e:"}", c:d}, {cN:"string", b:"%[qw]?<", e:">", c:d, r:10}, {cN:"string", b:"%[qw]?/", e:"/", c:d, r:10}, {cN:"string", b:"%[qw]?%", e:"%", c:d, r:10}, {cN:"string", b:"%[qw]?-", e:"-", c:d, r:10}, {cN:"string", b:"%[qw]?\\|", e:"\\|", c:d, r:10}], d = {cN:"function", bWK:!0, e:" |$|;", k:"def", c:[{cN:"title", 
  b:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", l:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", k:b}, {cN:"params", b:"\\(", e:"\\)", l:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", k:b}].concat(f)};
  a = f.concat(c.concat([{cN:"class", bWK:!0, e:"$|;", k:"class module", c:[{cN:"title", b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?", r:0}, {cN:"inheritance", b:"<\\s*", c:[{cN:"parent", b:"(" + a.IR + "::)?" + a.IR}]}].concat(f)}, d, {cN:"constant", b:"(::)?(\\b[A-Z]\\w*(::)?)+", r:0}, {cN:"symbol", b:":", c:c.concat([{b:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}]), r:0}, {cN:"symbol", b:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?:", r:0}, {cN:"number", b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", 
  r:0}, {cN:"number", b:"\\?\\w"}, {cN:"variable", b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {b:"(" + a.RSR + ")\\s*", c:f.concat([{cN:"regexp", b:"/", e:"/[a-z]*", i:"\\n", c:[a.BE, g]}]), r:0}]));
  g.c = a;
  d.c[1].c = a;
  return {l:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", k:b, c:a};
}(hljs);
hljs.LANGUAGES.diff = function(a) {
  return {c:[{cN:"chunk", b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$", r:10}, {cN:"chunk", b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$", r:10}, {cN:"chunk", b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$", r:10}, {cN:"header", b:"Index: ", e:"$"}, {cN:"header", b:"=====", e:"=====$"}, {cN:"header", b:"^\\-\\-\\-", e:"$"}, {cN:"header", b:"^\\*{3} ", e:"$"}, {cN:"header", b:"^\\+\\+\\+", e:"$"}, {cN:"header", b:"\\*{5}", e:"\\*{5}$"}, {cN:"addition", b:"^\\+", e:"$"}, {cN:"deletion", b:"^\\-", e:"$"}, {cN:"change", 
  b:"^\\!", e:"$"}]};
}(hljs);
hljs.LANGUAGES.javascript = function(a) {
  return {k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const", literal:"true false null undefined NaN Infinity"}, c:[a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {b:"(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*", k:"return throw case", c:[a.CLCM, a.CBLCLM, {cN:"regexp", b:"/", e:"/[gim]*", i:"\\n", c:[{b:"\\\\/"}]}, {b:"<", e:">;", sL:"xml"}], r:0}, {cN:"function", bWK:!0, e:"{", 
  k:"function", c:[{cN:"title", b:"[A-Za-z$_][0-9A-Za-z$_]*"}, {cN:"params", b:"\\(", e:"\\)", c:[a.CLCM, a.CBLCLM], i:"[\"'\\(]"}], i:"\\[|%"}]};
}(hljs);
hljs.LANGUAGES.css = function(a) {
  var b = {cN:"function", b:a.IR + "\\(", e:"\\)", c:[a.NM, a.ASM, a.QSM]};
  return {cI:!0, i:"[=/|']", c:[a.CBLCLM, {cN:"id", b:"\\#[A-Za-z0-9_-]+"}, {cN:"class", b:"\\.[A-Za-z0-9_-]+", r:0}, {cN:"attr_selector", b:"\\[", e:"\\]", i:"$"}, {cN:"pseudo", b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"}, {cN:"at_rule", b:"@(font-face|page)", l:"[a-z-]+", k:"font-face page"}, {cN:"at_rule", b:"@", e:"[{;]", eE:!0, k:"import page media charset", c:[b, a.ASM, a.QSM, a.NM]}, {cN:"tag", b:a.IR, r:0}, {cN:"rules", b:"{", e:"}", i:"[^\\s]", r:0, c:[a.CBLCLM, {cN:"rule", b:"[^\\s]", 
  rB:!0, e:";", eW:!0, c:[{cN:"attribute", b:"[A-Z\\_\\.\\-]+", e:":", eE:!0, i:"[^\\s]", starts:{cN:"value", eW:!0, eE:!0, c:[b, a.NM, a.QSM, a.ASM, a.CBLCLM, {cN:"hexcolor", b:"\\#[0-9A-F]+"}, {cN:"important", b:"!important"}]}}]}]}]};
}(hljs);
hljs.LANGUAGES.xml = function(a) {
  a = {eW:!0, c:[{cN:"attribute", b:"[A-Za-z0-9\\._:-]+", r:0}, {b:'="', rB:!0, e:'"', c:[{cN:"value", b:'"', eW:!0}]}, {b:"='", rB:!0, e:"'", c:[{cN:"value", b:"'", eW:!0}]}, {b:"=", c:[{cN:"value", b:"[^\\s/>]+"}]}]};
  return {cI:!0, c:[{cN:"pi", b:"<\\?", e:"\\?>", r:10}, {cN:"doctype", b:"<!DOCTYPE", e:">", r:10, c:[{b:"\\[", e:"\\]"}]}, {cN:"comment", b:"\x3c!--", e:"--\x3e", r:10}, {cN:"cdata", b:"<\\!\\[CDATA\\[", e:"\\]\\]>", r:10}, {cN:"tag", b:"<style(?=\\s|>|$)", e:">", k:{title:"style"}, c:[a], starts:{e:"</style>", rE:!0, sL:"css"}}, {cN:"tag", b:"<script(?=\\s|>|$)", e:">", k:{title:"script"}, c:[a], starts:{e:"\x3c/script>", rE:!0, sL:"javascript"}}, {b:"<%", e:"%>", sL:"vbscript"}, {cN:"tag", b:"</?", 
  e:"/?>", c:[{cN:"title", b:"[^ />]+"}, a]}]};
}(hljs);
hljs.LANGUAGES.http = function(a) {
  return {i:"\\S", c:[{cN:"status", b:"^HTTP/[0-9\\.]+", e:"$", c:[{cN:"number", b:"\\b\\d{3}\\b"}]}, {cN:"request", b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$", rB:!0, e:"$", c:[{cN:"string", b:" ", e:" ", eB:!0, eE:!0}]}, {cN:"attribute", b:"^\\w", e:": ", eE:!0, i:"\\n|\\s|=", starts:{cN:"string", e:"$"}}, {b:"\\n\\n", starts:{sL:"", eW:!0}}]};
}(hljs);
hljs.LANGUAGES.java = function(a) {
  return {k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws", c:[{cN:"javadoc", b:"/\\*\\*", e:"\\*/", c:[{cN:"javadoctag", b:"@[A-Za-z]+"}], r:10}, a.CLCM, a.CBLCLM, a.ASM, a.QSM, {cN:"class", bWK:!0, e:"{", k:"class interface", i:":", 
  c:[{bWK:!0, k:"extends implements", r:10}, {cN:"title", b:a.UIR}]}, a.CNM, {cN:"annotation", b:"@[A-Za-z]+"}]};
}(hljs);
hljs.LANGUAGES.php = function(a) {
  var b = {cN:"variable", b:"\\$+[a-zA-Z_\u007f-\u00ff][a-zA-Z0-9_\u007f-\u00ff]*"}, g = [a.inherit(a.ASM, {i:null}), a.inherit(a.QSM, {i:null}), {cN:"string", b:'b"', e:'"', c:[a.BE]}, {cN:"string", b:"b'", e:"'", c:[a.BE]}], f = [a.BNM, a.CNM], d = {cN:"title", b:a.UIR};
  return {cI:!0, k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler", 
  c:[a.CLCM, a.HCM, {cN:"comment", b:"/\\*", e:"\\*/", c:[{cN:"phpdoc", b:"\\s@[A-Za-z]+"}]}, {cN:"comment", eB:!0, b:"__halt_compiler.+?;", eW:!0}, {cN:"string", b:"<<<['\"]?\\w+['\"]?$", e:"^\\w+;", c:[a.BE]}, {cN:"preprocessor", b:"<\\?php", r:10}, {cN:"preprocessor", b:"\\?>"}, b, {cN:"function", bWK:!0, e:"{", k:"function", i:"\\$|\\[|%", c:[d, {cN:"params", b:"\\(", e:"\\)", c:["self", b, a.CBLCLM].concat(g).concat(f)}]}, {cN:"class", bWK:!0, e:"{", k:"class", i:"[:\\(\\$]", c:[{bWK:!0, eW:!0, 
  k:"extends", c:[d]}, d]}, {b:"=>"}].concat(g).concat(f)};
}(hljs);
hljs.LANGUAGES.python = function(a) {
  var b = {cN:"prompt", b:"^(>>>|\\.\\.\\.) "}, g = [{cN:"string", b:"(u|b)?r?'''", e:"'''", c:[b], r:10}, {cN:"string", b:'(u|b)?r?"""', e:'"""', c:[b], r:10}, {cN:"string", b:"(u|r|ur)'", e:"'", c:[a.BE], r:10}, {cN:"string", b:'(u|r|ur)"', e:'"', c:[a.BE], r:10}, {cN:"string", b:"(b|br)'", e:"'", c:[a.BE]}, {cN:"string", b:'(b|br)"', e:'"', c:[a.BE]}].concat([a.ASM, a.QSM]), f = {cN:"title", b:a.UIR}, d = {cN:"params", b:"\\(", e:"\\)", c:["self", a.CNM, b].concat(g)}, f = {bWK:!0, e:":", i:"[${=;\\n]", 
  c:[f, d], r:10};
  return {k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10", built_in:"None True False Ellipsis NotImplemented"}, i:"(</|->|\\?)", c:g.concat([b, a.HCM, a.inherit(f, {cN:"function", k:"def"}), a.inherit(f, {cN:"class", k:"class"}), a.CNM, {cN:"decorator", b:"@", e:"$"}, {b:"\\b(print|exec)\\("}])};
}(hljs);
hljs.LANGUAGES.sql = function(a) {
  return {cI:!0, c:[{cN:"operator", b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)", e:";", eW:!0, k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number", 
  aggregate:"count sum min max avg"}, c:[{cN:"string", b:"'", e:"'", c:[a.BE, {b:"''"}], r:0}, {cN:"string", b:'"', e:'"', c:[a.BE, {b:'""'}], r:0}, {cN:"string", b:"`", e:"`", c:[a.BE]}, a.CNM]}, a.CBLCLM, {cN:"comment", b:"--", e:"$"}]};
}(hljs);
hljs.LANGUAGES.ini = function(a) {
  return {cI:!0, i:"[^\\s]", c:[{cN:"comment", b:";", e:"$"}, {cN:"title", b:"^\\[", e:"\\]"}, {cN:"setting", b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*", e:"$", c:[{cN:"value", eW:!0, k:"on off true false yes no", c:[a.QSM, a.NM]}]}]};
}(hljs);
hljs.LANGUAGES.perl = function(a) {
  var b = {cN:"subst", b:"[$@]\\{", e:"\\}", k:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", 
  r:10}, g = {cN:"variable", b:"\\$\\d"}, f = {cN:"variable", b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"}, d = [a.BE, b, g, f], c = {b:"->", c:[{b:a.IR}, {b:"{", e:"}"}]}, e = {cN:"comment", b:"^(__END__|__DATA__)", e:"\\n$", r:5};
  a = [g, f, a.HCM, e, {cN:"comment", b:"^\\=\\w", e:"\\=cut", eW:!0}, c, {cN:"string", b:"q[qwxr]?\\s*\\(", e:"\\)", c:d, r:5}, {cN:"string", b:"q[qwxr]?\\s*\\[", e:"\\]", c:d, r:5}, {cN:"string", b:"q[qwxr]?\\s*\\{", e:"\\}", c:d, r:5}, {cN:"string", b:"q[qwxr]?\\s*\\|", e:"\\|", c:d, r:5}, {cN:"string", b:"q[qwxr]?\\s*\\<", e:"\\>", c:d, r:5}, {cN:"string", b:"qw\\s+q", e:"q", c:d, r:5}, {cN:"string", b:"'", e:"'", c:[a.BE], r:0}, {cN:"string", b:'"', e:'"', c:d, r:0}, {cN:"string", b:"`", e:"`", 
  c:[a.BE]}, {cN:"string", b:"{\\w+}", r:0}, {cN:"string", b:"-?\\w+\\s*\\=\\>", r:0}, {cN:"number", b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r:0}, {b:"(" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*", k:"split return print reverse grep", r:0, c:[a.HCM, e, {cN:"regexp", b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r:10}, {cN:"regexp", b:"(m|qr)?/", e:"/[a-z]*", c:[a.BE], r:0}]}, {cN:"sub", bWK:!0, e:"(\\s*\\(.*?\\))?[;{]", k:"sub", r:5}, {cN:"operator", 
  b:"-\\w\\b", r:0}];
  b.c = a;
  c.c[1].c = a;
  return {k:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", 
  c:a};
}(hljs);
hljs.LANGUAGES.json = function(a) {
  var b = {literal:"true false null"}, g = [a.QSM, a.CNM], f = {cN:"value", e:",", eW:!0, eE:!0, c:g, k:b}, d = {b:"{", e:"}", c:[{cN:"attribute", b:'\\s*"', e:'"\\s*:\\s*', eB:!0, eE:!0, c:[a.BE], i:"\\n", starts:f}], i:"\\S"};
  a = {b:"\\[", e:"\\]", c:[a.inherit(f, {cN:null})], i:"\\S"};
  g.splice(g.length, 0, d, a);
  return {c:g, k:b, i:"\\S"};
}(hljs);
hljs.LANGUAGES.cpp = function(a) {
  var b = {keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex", 
  built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};
  return {k:b, i:"</", c:[a.CLCM, a.CBLCLM, a.QSM, {cN:"string", b:"'\\\\?.", e:"'", i:"."}, {cN:"number", b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"}, a.CNM, {cN:"preprocessor", b:"#", e:"$"}, {cN:"stl_container", b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<", e:">", k:b, r:10, c:["self"]}]};
}(hljs);
(function(a, b, g, f) {
  var d = a(b);
  a.fn.lazyload = function(c) {
    function e() {
      var b = 0;
      r.each(function() {
        var c = a(this);
        if (!(h.skip_invisible && !c.is(":visible") || a.abovethetop(this, h) || a.leftofbegin(this, h))) {
          if (!a.belowthefold(this, h) && !a.rightoffold(this, h)) {
            c.trigger("appear"), b = 0;
          } else {
            if (++b > h.failure_limit) {
              return !1;
            }
          }
        }
      });
    }
    var r = this, h = {threshold:0, failure_limit:0, event:"scroll", effect:"show", container:b, data_attribute:"original", skip_invisible:!0, appear:null, load:null};
    c && (f !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), f !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(h, c));
    c = h.container === f || h.container === b ? d : a(h.container);
    0 === h.event.indexOf("scroll") && c.bind(h.event, function(a) {
      return e();
    });
    this.each(function() {
      var b = this, c = a(b);
      b.loaded = !1;
      c.one("appear", function() {
        this.loaded || (h.appear && h.appear.call(b, r.length, h), a("<img />").bind("load", function() {
          c.hide().attr("src", c.data(h.data_attribute))[h.effect](h.effect_speed);
          b.loaded = !0;
          var d = a.grep(r, function(a) {
            return !a.loaded;
          });
          r = a(d);
          h.load && h.load.call(b, r.length, h);
        }).attr("src", c.data(h.data_attribute)));
      });
      0 !== h.event.indexOf("scroll") && c.bind(h.event, function(a) {
        b.loaded || c.trigger("appear");
      });
    });
    d.bind("resize", function(a) {
      e();
    });
    /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && d.bind("pageshow", function(b) {
      b.originalEvent && b.originalEvent.persisted && r.each(function() {
        a(this).trigger("appear");
      });
    });
    a(g).ready(function() {
      e();
    });
    return this;
  };
  a.belowthefold = function(c, e) {
    return (e.container === f || e.container === b ? d.height() + d.scrollTop() : a(e.container).offset().top + a(e.container).height()) <= a(c).offset().top - e.threshold;
  };
  a.rightoffold = function(c, e) {
    return (e.container === f || e.container === b ? d.width() + d.scrollLeft() : a(e.container).offset().left + a(e.container).width()) <= a(c).offset().left - e.threshold;
  };
  a.abovethetop = function(c, e) {
    return (e.container === f || e.container === b ? d.scrollTop() : a(e.container).offset().top) >= a(c).offset().top + e.threshold + a(c).height();
  };
  a.leftofbegin = function(c, e) {
    return (e.container === f || e.container === b ? d.scrollLeft() : a(e.container).offset().left) >= a(c).offset().left + e.threshold + a(c).width();
  };
  a.inviewport = function(b, d) {
    return !a.rightoffold(b, d) && !a.leftofbegin(b, d) && !a.belowthefold(b, d) && !a.abovethetop(b, d);
  };
  a.extend(a.expr[":"], {"below-the-fold":function(b) {
    return a.belowthefold(b, {threshold:0});
  }, "above-the-top":function(b) {
    return !a.belowthefold(b, {threshold:0});
  }, "right-of-screen":function(b) {
    return a.rightoffold(b, {threshold:0});
  }, "left-of-screen":function(b) {
    return !a.rightoffold(b, {threshold:0});
  }, "in-viewport":function(b) {
    return a.inviewport(b, {threshold:0});
  }, "above-the-fold":function(b) {
    return !a.belowthefold(b, {threshold:0});
  }, "right-of-fold":function(b) {
    return a.rightoffold(b, {threshold:0});
  }, "left-of-fold":function(b) {
    return !a.rightoffold(b, {threshold:0});
  }});
})(jQuery, window, document);
