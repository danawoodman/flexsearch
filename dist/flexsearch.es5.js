/*
 FlexSearch v0.3.51
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function J(g){var k=0;return function(){return k<g.length?{done:!1,value:g[k++]}:{done:!0}}}function K(g){var k="undefined"!=typeof Symbol&&Symbol.iterator&&g[Symbol.iterator];return k?k.call(g):{next:J(g)}}var Q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,R="function"==typeof Object.defineProperties?Object.defineProperty:function(g,k,e){g!=Array.prototype&&g!=Object.prototype&&(g[k]=e.value)};
function S(g,k){if(k){var e=Q;g=g.split(".");for(var h=0;h<g.length-1;h++){var l=g[h];l in e||(e[l]={});e=e[l]}g=g[g.length-1];h=e[g];k=k(h);k!=h&&null!=k&&R(e,g,{configurable:!0,writable:!0,value:k})}}
S("Promise",function(g){function k(d){this.b=0;this.i=void 0;this.a=[];var c=this.c();try{d(c.resolve,c.reject)}catch(z){c.reject(z)}}function e(){this.a=null}function h(d){return d instanceof k?d:new k(function(c){c(d)})}if(g)return g;e.prototype.b=function(d){if(null==this.a){this.a=[];var c=this;this.c(function(){c.i()})}this.a.push(d)};var l=Q.setTimeout;e.prototype.c=function(d){l(d,0)};e.prototype.i=function(){for(;this.a&&this.a.length;){var d=this.a;this.a=[];for(var c=0;c<d.length;++c){var e=
d[c];d[c]=null;try{e()}catch(D){this.f(D)}}}this.a=null};e.prototype.f=function(d){this.c(function(){throw d;})};k.prototype.c=function(){function d(d){return function(k){e||(e=!0,d.call(c,k))}}var c=this,e=!1;return{resolve:d(this.F),reject:d(this.f)}};k.prototype.F=function(d){if(d===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof k)this.G(d);else{a:switch(typeof d){case "object":var c=null!=d;break a;case "function":c=!0;break a;default:c=!1}c?this.D(d):this.j(d)}};
k.prototype.D=function(d){var c=void 0;try{c=d.then}catch(z){this.f(z);return}"function"==typeof c?this.H(c,d):this.j(d)};k.prototype.f=function(c){this.m(2,c)};k.prototype.j=function(c){this.m(1,c)};k.prototype.m=function(c,e){if(0!=this.b)throw Error("Cannot settle("+c+", "+e+"): Promise already settled in state"+this.b);this.b=c;this.i=e;this.u()};k.prototype.u=function(){if(null!=this.a){for(var d=0;d<this.a.length;++d)c.b(this.a[d]);this.a=null}};var c=new e;k.prototype.G=function(c){var d=this.c();
c.A(d.resolve,d.reject)};k.prototype.H=function(c,e){var d=this.c();try{c.call(e,d.resolve,d.reject)}catch(D){d.reject(D)}};k.prototype.then=function(c,e){function d(c,d){return"function"==typeof c?function(d){try{g(c(d))}catch(w){h(w)}}:d}var g,h,B=new k(function(c,d){g=c;h=d});this.A(d(c,g),d(e,h));return B};k.prototype.catch=function(c){return this.then(void 0,c)};k.prototype.A=function(d,e){function k(){switch(g.b){case 1:d(g.i);break;case 2:e(g.i);break;default:throw Error("Unexpected state: "+
g.b);}}var g=this;null==this.a?c.b(k):this.a.push(k)};k.resolve=h;k.reject=function(c){return new k(function(d,e){e(c)})};k.race=function(c){return new k(function(d,e){for(var k=K(c),g=k.next();!g.done;g=k.next())h(g.value).A(d,e)})};k.all=function(c){var d=K(c),e=d.next();return e.done?h([]):new k(function(c,k){function g(d){return function(e){l[d]=e;C--;0==C&&c(l)}}var l=[],C=0;do l.push(void 0),C++,h(e.value).A(g(l.length-1),k),e=d.next();while(!e.done)})};return k});
(function(g,k,e){var h;(h=e.define)&&h.amd?h([],function(){return k}):(h=e.modules)?h[g.toLowerCase()]=k:"object"===typeof exports?module.exports=k:e[g]=k})("FlexSearch",function W(g){function e(b){C(b)&&((b=L[b])||console.warn("Preset not found: "+b));b||(b=t);this.id=b.id||X++;this.init(b);l(this,"index",function(){return this.a});l(this,"length",function(){return Object.keys(this.a).length})}function h(b,a,f,c){this.v!==this.h&&(this.l=this.l.concat(f),this.v++,c&&this.l.length>=c&&(this.v=this.h),
this.B&&this.v===this.h&&(this.cache&&this.o.set(a,this.l),this.B(this.l),this.l=[]));return this}function l(b,a,f){Object.defineProperty(b,a,{get:f})}function c(b){return new RegExp(b,"g")}function d(b,a){for(var f=0;f<a.length;f+=2)b=b.replace(a[f],a[f+1]);return b}function B(b,a,f,c,d,e,g){if(a[f])return a[f];d=d?(9-(g||6))*e+(g||6)*d:e;a[f]=d;d>=g&&(b=b[9-(d+.5>>0)],b=b[f]||(b[f]=[]),b[b.length]=c);return d}function z(b,a){if(b)for(var f=Object.keys(b),c=0,d=f.length;c<d;c++){var e=f[c],g=b[e];
if(g)for(var x=0,h=g.length;x<h;x++)if(g[x]===a){1===h?delete b[e]:g.splice(x,1);break}else"object"===typeof g[x]&&z(g[x],a)}}function D(b){for(var a="",f="",c="",d=0;d<b.length;d++){var e=b[d];if(e!==f)if(d&&"h"===e){if(c="a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c,("a"===f||"e"===f||"i"===f||"o"===f||"u"===f||"y"===f)&&c||" "===f)a+=e}else a+=e;c=d===b.length-1?"":b[d+1];f=e}return a}function T(b,a){b=b.length-a.length;return 0>b?1:b?-1:0}function V(b,a){b=b.length-a.length;return 0>b?
-1:b?1:0}function U(b,a,f){var c=[],d=b.length;if(1<d){b.sort(V);for(var e=y(),g=b[0],x=g.length,h=0;h<x;)e["@"+g[h++]]=1;for(var l,E=0,r=0;++r<d;){var q=!1,u=r===d-1;var n=[];g=b[r];x=g.length;for(h=0;h<x;){l=g[h++];var m="@"+l;if(e[m]){var p=e[m];if(p===r){if(u){if(c[E++]=l,a&&E===a)return c}else e[m]=r+1;q=!0}else f&&(m=n[p]||(n[p]=[]),m[m.length]=l)}}if(!q&&!f)break}if(f&&(E=c.length,(r=n.length)&&(!a||E<a)))for(;r--;)if(l=n[r])for(h=0,x=l.length;h<x;h++)if(c[E++]=l[h],a&&E===a)return c}else d&&
(c=b[0],a&&c.length>a&&(c=c.slice(0,a)));return c}function C(b){return"string"===typeof b}function G(b){return"function"===typeof b}function w(b){return"undefined"===typeof b}function M(b){for(var a=Array(b),f=0;f<b;f++)a[f]=y();return a}function y(){return Object.create(null)}function Y(){var b,a;self.onmessage=function(f){if(f=f.data)if(f.search){var c=a.search(f.content,f.threshold?{limit:f.limit,threshold:f.threshold}:f.limit);self.postMessage({id:b,content:f.content,limit:f.limit,result:c})}else f.add?
a.add(f.id,f.content):f.update?a.update(f.id,f.content):f.remove?a.remove(f.id):f.clear?a.clear():f.info?(f=a.info(),f.worker=b,console.log(f)):f.register&&(b=f.id,f.options.cache=!1,f.options.async=!1,f.options.worker=!1,a=(new Function(f.register.substring(f.register.indexOf("{")+1,f.register.lastIndexOf("}"))))(),a=new a(f.options))}}function Z(b,a,f,c){b=g("flexsearch","id"+b,Y,function(a){(a=a.data)&&a.result&&c(a.id,a.content,a.result,a.limit)},a);var d=W.toString();f.id=a;b.postMessage({register:d,
options:f,id:a});return b}var t={encode:"icase",g:"forward",w:!1,cache:!1,async:!1,h:!1,threshold:0,depth:0},L={memory:{encode:"extra",g:"strict",threshold:7},speed:{encode:"icase",g:"strict",threshold:7,depth:2},match:{encode:"extra",g:"full"},score:{encode:"extra",g:"strict",threshold:5,depth:4},balance:{encode:"balance",g:"strict",threshold:6,depth:3},fastest:{encode:"icase",g:"strict",threshold:9,depth:1}},I=[],X=0,N=c("\\W+"),O={},P={};e.create=function(b){return new e(b)};e.registerMatcher=
function(b){for(var a in b)b.hasOwnProperty(a)&&I.push(c(a),b[a]);return this};e.registerEncoder=function(b,a){F[b]=a.bind(F);return this};e.registerLanguage=function(b,a){O[b]=a.filter;P[b]=a.stemmer;return this};e.encode=function(b,a){return F[b](a)};e.prototype.init=function(b){this.i=[];b||(b=t);var a=b.preset,f=a?L[a]:{};f||console.warn("Preset not found: "+a);if(a=b.worker)if("undefined"===typeof Worker)b.worker=!1,this.f=null;else{var d=parseInt(a,10)||4;this.u=-1;this.v=0;this.l=[];this.B=
null;this.f=Array(d);for(var e=0;e<d;e++)this.f[e]=Z(this.id,e,b,h.bind(this))}this.g=b.tokenize||f.g||this.g||t.g;this.async="undefined"===typeof Promise||w(a=b.async)?this.async||t.async:a;this.h=w(a=b.worker)?this.h||t.h:a;this.threshold=w(a=b.threshold)?f.threshold||this.threshold||t.threshold:a;this.depth=w(a=b.depth)?f.depth||this.depth||t.depth:a;this.w=w(a=b.suggest)?this.w||t.w:a;this.j=(a=w(a=b.encode)?f.encode:a)&&F[a]&&F[a].bind(F)||(G(a)?a:this.j||!1);(a=b.matcher)&&this.addMatcher(a);
if(a=b.filter){a=O[a]||a;f=this.j;d=y();if(a)for(e=0;e<a.length;e++){var g=f?f(a[e]):a[e];d[g]=String.fromCharCode(65E3-a.length+e)}this.filter=d}if(a=b.stemmer){f=P[a]||a;d=this.j;e=[];if(f)for(var l in f)f.hasOwnProperty(l)&&(g=d?d(l):l,e.push(c("(?=.{"+(g.length+3)+",})"+g+"$"),d?d(f[l]):f[l]));this.stemmer=e}this.b=M(10-(this.threshold||0));this.c=y();this.a=y();this.m=!0;this.o=(this.cache=a=w(a=b.cache)?this.cache||t.cache:a)?new aa(a):!1;return this};e.prototype.encode=function(b){b&&I.length&&
(b=d(b,I));b&&this.i.length&&(b=d(b,this.i));b&&this.j&&(b=this.j(b));b&&this.stemmer&&(b=d(b,this.stemmer));return b};e.prototype.addMatcher=function(b){var a=this.i,f;for(f in b)b.hasOwnProperty(f)&&a.push(c(f),b[f]);return this};e.prototype.add=function(b,a,f,c,d){if(a&&C(a)&&(b||0===b)){var e="@"+b;if(this.a[e]&&!c)return this.update(b,a);if(this.h)return++this.u>=this.f.length&&(this.u=0),this.f[this.u].postMessage({add:!0,id:b,content:a}),this.a[e]=""+this.u,f&&f(),this;if(!d){if(this.async&&
"function"!==typeof importScripts){var g=this;e=new Promise(function(f){setTimeout(function(){g.add(b,a,null,c,!0);g=null;f()})});if(f)e.then(f);else return e;return this}if(f)return this.add(b,a,null,c,!0),f(),this}a=this.encode(a);if(!a.length)return this;f=this.g;d=G(f)?f(a):a.split(N);var h=y();h._ctx=y();for(var A=this.threshold,l=this.depth,H=this.b,r=d.length,q=0;q<r;q++){var u=d[q];if(u){var n=u.length,m=(r-q)/r,p="";switch(f){case "reverse":case "both":for(var v=n-1;1<=v;v--)p=u[v]+p,B(H,
h,p,b,(n-v)/n,m,A);p="";case "forward":for(v=0;v<n;v++)p+=u[v],B(H,h,p,b,1,m,A);break;case "full":for(v=0;v<n;v++)for(var w=(n-v)/n,t=n;t>v;t--)p=u.substring(v,t),B(H,h,p,b,w,m,A);break;default:if(n=B(H,h,u,b,1,m,A),l&&1<r&&n>=A)for(n=h._ctx[u]||(h._ctx[u]=y()),u=this.c[u]||(this.c[u]=M(10-(A||0))),m=q-l,p=q+l+1,0>m&&(m=0),p>r&&(p=r);m<p;m++)m!==q&&B(u,n,d[m],b,0,10-(m<q?q-m:m-q),A)}}}this.a[e]=1;this.m=!1}return this};e.prototype.update=function(b,a,f){this.a["@"+b]&&C(a)&&(this.remove(b),this.add(b,
a,f,!0));return this};e.prototype.remove=function(b,a,f){var c="@"+b;if(this.a[c]){if(this.h)return this.f[this.a[c]].postMessage({remove:!0,id:b}),delete this.a[c],a&&a(),this;if(!f){if(this.async&&"function"!==typeof importScripts){var d=this;c=new Promise(function(a){setTimeout(function(){d.remove(b,null,!0);d=null;a()})});if(a)c.then(a);else return c;return this}if(a)return this.remove(b,null,!0),a(),this}for(a=0;a<10-(this.threshold||0);a++)z(this.b[a],b);this.depth&&z(this.c,b);delete this.a[c];
this.m=!1}return this};e.prototype.search=function(b,a,c,d){var f=b,e=[];if("object"===typeof b){(c=b.callback||a)&&(f.callback=null);a=b.limit;var g=b.threshold;b=b.query}g||(g=this.threshold||0);G(a)?(c=a,a=1E3):a||0===a||(a=1E3);if(this.h)for(this.B=c,this.v=0,this.l=[],e=0;e<this.h;e++)this.f[e].postMessage({search:!0,limit:a,threshold:g,content:b});else{if(!d){if(this.async&&"function"!==typeof importScripts){var h=this;b=new Promise(function(b){setTimeout(function(){b(h.search(f,a,null,!0));
h=null})});if(c)b.then(c);else return b;return this}if(c)return c(this.search(f,a,null,!0)),this}if(!b||!C(b))return e;f=b;if(this.cache)if(this.m){if(c=this.o.get(b))return c}else this.o.clear(),this.m=!0;f=this.encode(f);if(!f.length)return e;c=this.g;c=G(c)?c(f):f.split(N);d=c.length;var l=!0,A=[],t=y();if(1<d)if(this.depth){var r=!0;var q=c[0];t[q]=1}else c.sort(T);var u;if(!r||(u=this.c)[q])for(var n=r?1:0;n<d;n++){var m=c[n];if(m){if(!t[m]){var p=[],v=!1,w=0;if(q=r?u[q]:this.b)for(var B=void 0,
z=0;z<10-g;z++)if(B=q[z][m])p[w++]=B,v=!0;if(v)A[A.length]=1<w?p.concat.apply([],p):p[0];else if(!this.w){l=!1;break}t[m]=1}q=m}}else l=!1;l&&(e=U(A,a,this.w));this.cache&&this.o.set(b,e);return e}};e.prototype.info=function(){if(this.h)for(var b=0;b<this.h;b++)this.f[b].postMessage({info:!0,id:this.id});else{for(var a,c=0,d=0,e=0,g=0;g<10-(this.threshold||0);g++){b=Object.keys(this.b[g]);for(var h=0;h<b.length;h++)a=this.b[g][b[h]].length,c+=1*a+2*b[h].length+4,d+=a,e+=2*b[h].length}b=Object.keys(this.a);
a=b.length;for(g=0;g<a;g++)c+=2*b[g].length+2;return{id:this.id,memory:c,items:a,sequences:d,chars:e,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:I.length+(this.i?this.i.length:0),worker:this.h,threshold:this.threshold,depth:this.depth,contextual:this.depth&&"strict"===this.g}}};e.prototype.clear=function(){return this.destroy().init()};e.prototype.destroy=function(){this.cache&&(this.o.clear(),this.o=null);this.b=this.c=this.a=null;return this};e.prototype.export=function(){return JSON.stringify([this.b,
this.c,this.a])};e.prototype.import=function(b){b=JSON.parse(b);this.b=b[0];this.c=b[1];this.a=b[2]};var F={icase:function(b){return b.toLowerCase()},simple:function(){var b=[c("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",c("[\u00e8\u00e9\u00ea\u00eb]"),"e",c("[\u00ec\u00ed\u00ee\u00ef]"),"i",c("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",c("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",c("[\u00fd\u0177\u00ff]"),"y",c("\u00f1"),"n",c("\u00e7"),"c",c("\u00df"),"s",c(" & ")," and ",c("[-/]")," ",c("[^a-z0-9 ]"),
"",c("\\s+")," "];return function(a){a=d(a.toLowerCase(),b);return" "===a?"":a}}(),advanced:function(){var b=[c("ae"),"a",c("ai"),"ei",c("ay"),"ei",c("ey"),"ei",c("oe"),"o",c("ue"),"u",c("ie"),"i",c("sz"),"s",c("zs"),"s",c("sh"),"s",c("ck"),"k",c("cc"),"k",c("dt"),"t",c("ph"),"f",c("pf"),"f",c("ou"),"o",c("uo"),"u"];return function(a,c){if(!a)return a;a=this.simple(a);2<a.length&&(a=d(a,b));c||1<a.length&&(a=D(a));return a}}(),extra:function(){var b=[c("p"),"b",c("z"),"s",c("[cgq]"),"k",c("n"),"m",
c("d"),"t",c("[vw]"),"f",c("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=a.split(" ");for(var c=0;c<a.length;c++){var e=a[c];1<e.length&&(a[c]=e[0]+d(e.substring(1),b))}a=a.join(" ");a=D(a)}return a}}(),balance:function(){var b=[c("[-/]")," ",c("[^a-z0-9 ]"),"",c("\\s+")," "];return function(a){return D(d(a.toLowerCase(),b))}}()},aa=function(){function b(a){this.clear();this.C=!0!==a&&a}b.prototype.clear=function(){this.cache=y();this.count=y();this.index=
y();this.s=[]};b.prototype.set=function(a,b){if(this.C&&w(this.cache[a])){var c=this.s.length;if(c===this.C){c--;var e=this.s[c];delete this.cache[e];delete this.count[e];delete this.index[e]}this.index[a]=c;this.s[c]=a;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};b.prototype.get=function(a){var b=this.cache[a];if(this.C&&b){var c=++this.count[a],e=this.index,d=e[a];if(0<d){for(var g=this.s,h=d;this.count[g[--d]]<=c&&-1!==d;);d++;if(d!==h){for(c=h;c>d;c--)h=g[c-1],g[c]=h,e[h]=
c;g[d]=a;e[a]=d}}}return b};return b}();return e}(function(){var g={},k="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(e,h,l,c,d){l=k?URL.createObjectURL(new Blob(["("+l.toString()+")()"],{type:"text/javascript"})):e+".es5.js";e+="-"+h;g[e]||(g[e]=[]);g[e][d]=new Worker(l);g[e][d].onmessage=c;console.log("Register Worker: "+e+"@"+d);return g[e][d]}}()),this);
