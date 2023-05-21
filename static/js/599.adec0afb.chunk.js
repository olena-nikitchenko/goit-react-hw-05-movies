"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[599],{6713:function(n,e,t){t.d(e,{E9:function(){return o},Me:function(){return d},bI:function(){return c},jC:function(){return f},np:function(){return h}});var r=t(5861),a=t(7757),u=t.n(a),i=t(1243);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={},i.Z.defaults.params.api_key="53263a417bdf2aa4ac46d1a4836d7bf0",i.Z.defaults.params.language="en-US"},8894:function(n,e,t){t.d(e,{O:function(){return i}});t(2791);var r=t(7689),a=t(1087),u=t(184),i=function(n){var e=n.movies,t=(0,r.TH)();return(0,u.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},2599:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,u,i,o=t(5861),s=t(9439),c=t(7757),p=t.n(c),f=t(1087),l=t(2791),d=t(7596),x=t(168),h=t(6444),m=t(9128),v=h.ZP.div(r||(r=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=h.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 800px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=(0,h.ZP)(m.G4C)(u||(u=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n  fill: #274cdd;\n"]))),w=h.ZP.input(i||(i=(0,x.Z)(["\n  width: 100%;\n  padding: 8px 32px 8px 8px;\n  border-radius: 2px;\n  font: inherit;\n  border-color: #274cdd;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=t(184);function y(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,s.Z)(t,2),a=r[0],u=r[1];return(0,Z.jsx)(v,{children:(0,Z.jsxs)(g,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a),u("")):d.Am.error("Sorry, movie not found. Please try again.")},children:[(0,Z.jsx)(b,{onClick:function(){""!==a.trim()?(e(a),u("")):d.Am.error("Sorry, movie not found. Please try again.")}}),(0,Z.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:a,onChange:function(n){u(n.currentTarget.value.toLowerCase())}})]})})}var k=t(6713),j=t(7793),S=t(8894);function C(){var n=(0,l.useState)("idle"),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),u=(0,s.Z)(a,2),i=u[0],c=u[1],x=(0,f.lr)(),h=(0,s.Z)(x,2),m=h[0],v=h[1],g=m.get("query");return(0,l.useEffect)((function(){if(g){var n=new AbortController;return function(){e.apply(this,arguments)}(),function(){n.abort()}}function e(){return(e=(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r("pending"),e.prev=1,e.next=4,(0,k.bI)(g,{signal:n.signal});case 4:t=e.sent,c(t),r("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),d.Am.error("Something went wrong. Please, reload the page."),r("rejected");case 13:return e.prev=13,r("resolved"),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})))).apply(this,arguments)}}),[g]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(y,{value:g,onSubmit:function(n){v(""!==n?{query:n}:{})}}),"pending"===t&&(0,Z.jsx)(j.a,{}),i.length>0&&(0,Z.jsx)(S.O,{movies:i})]})}}}]);
//# sourceMappingURL=599.adec0afb.chunk.js.map