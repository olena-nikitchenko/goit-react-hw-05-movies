"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[401],{6713:function(n,e,t){t.d(e,{E9:function(){return s},Me:function(){return f},bI:function(){return u},jC:function(){return p},np:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={},o.Z.defaults.params.api_key="53263a417bdf2aa4ac46d1a4836d7bf0",o.Z.defaults.params.language="en-US"},401:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,o,s,c,u,l,p,d,f,h,x=t(5861),m=t(9439),v=t(7757),g=t.n(v),Z=t(7689),b=t(2791),w=t(7793),j=t(7596),y=t(6713),k=t(168),P=t(9128),C=t(1087),_=t(6444),U=t(184),z=(0,_.ZP)(C.rU)(r||(r=(0,k.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #274cdd;\n  }\n"]))),A=function(n){var e=n.to,t=n.children;return(0,U.jsxs)(z,{to:e,children:[(0,U.jsx)(P.jTe,{size:"24"}),t]})},S=_.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 40px;\n"]))),O=_.ZP.div(i||(i=(0,k.Z)([""]))),D=_.ZP.img(o||(o=(0,k.Z)(["\n  width: 360px;\n  margin-right: 30px;\n"]))),E=_.ZP.h2(s||(s=(0,k.Z)(["\n  margin-bottom: 16px;\n\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 1.15;\n  color: #031c68;\n"]))),G=_.ZP.ul(c||(c=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n"]))),I=_.ZP.li(u||(u=(0,k.Z)(["\n  &:not(:last-child)::after {\n    content: ',';\n    margin-right: 5px;\n  }\n"]))),L=_.ZP.li(l||(l=(0,k.Z)(["\n  margin-bottom: 16px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.67;\n"]))),M=_.ZP.h3(p||(p=(0,k.Z)(["\n  margin-bottom: 16px;\n\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n\n  color: #031c68;\n"]))),R=_.ZP.h2(d||(d=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 24px;\n\n  color: #031c68;\n"]))),T=_.ZP.nav(f||(f=(0,k.Z)(["\n  padding-bottom: 15px;\n  margin-bottom: 30px;\n  text-align: center;\n  border-bottom: 1px solid #abb3db;\n"]))),q=(0,_.ZP)(C.OL)(h||(h=(0,k.Z)(["\n  display: inline-block;\n  font-size: 18px;\n  padding: 8px 16px;\n  text-decoration: none;\n  font-weight: 500;\n  color: inherit;\n\n  &.active {\n    color: #274cdd;\n  }\n\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"])));function F(n){var e,t,r,a,i,o,s=n.movieCardDetails,c=(0,Z.TH)(),u=null!==(e=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,U.jsxs)("main",{children:[(0,U.jsx)(A,{to:u,children:"Go back"}),(0,U.jsxs)(S,{children:[(0,U.jsx)(D,{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path)||0,alt:""}),(0,U.jsxs)(O,{children:[(0,U.jsx)(E,{children:s.original_title.toUpperCase()+" ("+s.release_date.slice(0,4)+")"}),(0,U.jsxs)(L,{children:["User score: ",Math.round(10*s.vote_average),"%"]}),(0,U.jsx)(M,{children:"Overview"}),(0,U.jsx)(L,{children:s.overview?s.overview:"An excellent film and worthy of your attention!"}),(0,U.jsx)(M,{children:"Genres"}),(0,U.jsx)(G,{children:s.genres.map((function(n){var e=n.id,t=n.name;return(0,U.jsx)(I,{children:t},e)}))})]})]}),(0,U.jsxs)(T,{children:[(0,U.jsx)(R,{children:"Additional information"}),(0,U.jsx)(q,{to:"cast",state:{from:null!==(r=null===(a=c.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"},children:"Cast"}),(0,U.jsx)(q,{to:"reviews",state:{from:null!==(i=null===(o=c.state)||void 0===o?void 0:o.from)&&void 0!==i?i:"/"},children:"Reviews"})]}),(0,U.jsx)(b.Suspense,{fallback:(0,U.jsx)(w.a,{}),children:(0,U.jsx)(Z.j3,{})})]})}function H(){var n=(0,Z.UO)().itemId,e=(0,b.useState)("idle"),t=(0,m.Z)(e,2),r=t[0],a=t[1],i=(0,b.useState)(null),o=(0,m.Z)(i,2),s=o[0],c=o[1];return(0,b.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,x.Z)(g().mark((function t(){var r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a("pending"),t.prev=1,t.next=4,(0,y.jC)(n,{signal:e.signal});case 4:if(r=t.sent,0!==Object.keys(r).length){t.next=9;break}return j.Am.error("Not found"),a("rejected"),t.abrupt("return");case 9:c(r),a("resolved"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),j.Am.error("Something went wrong. Please, reload the page."),a("rejected");case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[n]),(0,U.jsxs)(U.Fragment,{children:["pending"===r&&(0,U.jsx)(w.a,{}),"resolved"===r&&(0,U.jsx)(F,{movieCardDetails:s})]})}}}]);
//# sourceMappingURL=401.7ec07403.chunk.js.map