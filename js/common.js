(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6aLt":function(e,t,n){},"81VE":function(e,t,n){"use strict";n.r(t),function(e){var t=n("RIqP"),r=n.n(t),o=(n("vCTA"),n("GtYm")),i=r()(document.querySelectorAll(".s-garden__background")),a=e.qs(".s-garden__button"),u=e.qs(".garden-age"),s=e.qs(".trees-count"),c=e.qs(".apples-count"),l=e.qs(".fallen-apples"),d=e.qs(".spoiled-apples");function f(){u&&(u.innerHTML=garden.getAge()),s&&(s.innerHTML=garden.getTreesCount()),c&&(c.innerHTML=garden.getApplesCount()),l&&(l.innerHTML=garden.getFallenApplesCount()),d&&(d.innerHTML=garden.getSpoiledApplesCount())}window.addEventListener("DOMContentLoaded",(function(){var e=new o.a;window.garden=e,f(),a&&(a.addEventListener("mouseenter",(function(){return i.map((function(e){return e.classList.add("is-blured")}))})),a.addEventListener("mouseleave",(function(){return i.map((function(e){return e.classList.remove("is-blured")}))})),a.addEventListener("click",(function(){e.passDay(),f()})))}))}.call(this,n("qbau"))},GtYm:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u}));var r=n("lwsE"),o=n.n(r),i=n("W8MJ"),a=n.n(i),u=function(){function t(){o()(this,t),this.age=e.getRandomInt(1e3,4101),this.daysFromStart=0,this.trees=this.createTrees()}return a()(t,[{key:"getAge",value:function(){return this.age}},{key:"getTreesList",value:function(){return this.trees}},{key:"getTreesCount",value:function(){return this.trees.length}},{key:"getApplesList",value:function(){return this.trees.flatMap((function(e){return e.apples}))}},{key:"getApplesCount",value:function(){return this.trees.flatMap((function(e){return e.apples})).filter((function(e){return e.age<30})).length}},{key:"getFallenApplesCount",value:function(){return this.trees.flatMap((function(e){return e.apples})).filter((function(e){return e.age>29&&e.age<31})).length}},{key:"getSpoiledApplesCount",value:function(){return this.trees.flatMap((function(e){return e.apples})).filter((function(e){return e.age>30})).length}},{key:"passDay",value:function(){var e=this;this.age++,this.daysFromStart++,this.trees.map((function(t){t.getOlder(),t.apples.map((function(e){return e.getOlder()})),e.daysFromStart%30==0&&t.createApple(0)}))}},{key:"createTrees",value:function(){for(var t=[],n=0;n<e.getRandomInt(1,101);)t.push(new s({age:e.getRandomInt(1,31)})),n++;return t}}]),t}(),s=function(){function t(e){o()(this,t),this.age=e.age,this.apples=this.createApples()}return a()(t,[{key:"createApples",value:function(){for(var t=[],n=0;n<e.getRandomInt(1,101);)t.push(new c({age:e.getRandomInt(1,31)})),n++;return t}},{key:"createApple",value:function(e){this.apples.push(new c({age:e}))}},{key:"getOlder",value:function(){this.age++}}]),t}(),c=function(){function e(t){o()(this,e),this.age=t.age,this.location=t.age>29?"На земле":"На дереве",this.spoiled=t.age>30}return a()(e,[{key:"getOlder",value:function(){this.age++,this.setLocation(),this.setSpoiled()}},{key:"setLocation",value:function(){this.location=this.age>29?"На земле":"На дереве"}},{key:"setSpoiled",value:function(){this.spoiled=this.age>30}}]),e}()}).call(this,n("qbau"))},H9OD:function(e,t){e.exports=function(e){var t=!1,n=void 0;if(e&&e.filename&&(t=e.filename),!t)return!1;var r,o=new XMLHttpRequest;"undefined"!=typeof XDomainRequest&&(o=new XDomainRequest),void 0===n&&(n=void 0!==window.baseUrl?window.baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),r=(n+"/"+t).replace(/([^:]\/)\/+/g,"$1"),o.open("GET",r,!0),o.onprogress=function(){},o.onload=function(){if(!o.responseText||"<svg"!==o.responseText.substr(0,4))throw Error("Invalid SVG Response");if(!(o.status<200||o.status>=300)){var e,t=document.createElement("div");t.innerHTML=o.responseText,e=function(){document.body.insertBefore(t,document.body.childNodes[0])},"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e)}},o.send()}},L4xk:function(e,t,n){var r={filename:n.p+"/assets/img/sprite.svg"};n("H9OD")(r)},RoaF:function(e,t,n){var r=n("LboF"),o=n("6aLt");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(e.i,o,i),o.locals?o.locals:{});e.exports=a},qbau:function(e,t,n){"use strict";n.r(t),n.d(t,"siblings",(function(){return i})),n.d(t,"nodeIndex",(function(){return a})),n.d(t,"qs",(function(){return u})),n.d(t,"qsa",(function(){return s})),n.d(t,"each",(function(){return c})),n.d(t,"delegate",(function(){return l})),n.d(t,"dispatch",(function(){return d})),n.d(t,"getRandomInt",(function(){return f}));var r=n("RIqP"),o=n.n(r),i=function(e){return o()(e.parentElement.children).filter((function(t){return t!==e}))},a=function(e){return o()(e.parentNode.children).indexOf(e)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.from(t.querySelectorAll(e))},c=function(e,t){var n=s(e);if(n.length<=0)return!1;n.forEach((function(e,n){t(e,n)}))},l=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"click";document.addEventListener(r,(function(r){var o=r.target.closest(e);o?t(r,o):n&&n(r)}),!1)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{el:document,name:"",detail:null},t=e.el,n=e.name,r=e.detail;if(!n)throw new Error("Event name not set");r?t.dispatchEvent(new CustomEvent(n,{detail:r})):t.dispatchEvent(new Event(n))},f=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},vCTA:function(e,t,n){"use strict";n("RoaF"),n("L4xk"),n("s+lh"),n("v1EE")}}]);