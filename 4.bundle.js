(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){var t=function(){return JSON.parse(localStorage.getItem("winnerResults"))||[]},e=function(){var e=t();return e.length>9&&e.shift(),e};return{setResult:function(t){var n=e();n.push(t),localStorage.setItem("winnerResults",JSON.stringify(n))},getResult:t,resetList:function(){localStorage.removeItem("winnerResults")}}}},76:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(15),o=n(58);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,u=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,u=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,68))}));e.default=function(){var t=Object(o.a)(),e=t.getResult,n=t.resetList,l=i(Object(r.useState)([]),2),s=l[0],f=l[1];Object(r.useEffect)((function(){var t=e();t&&m(t)}),[]);var m=function(t){var e=t.sort((function(t,e){return t.time<e.time?-1:1}));f(e)};return a.a.createElement(a.a.Fragment,null,s.length>0?a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)}," ",a.a.createElement(c,{results:s,resetWinners:function(){n(),f([])}})," "):a.a.createElement(u.a,null))}}}]);