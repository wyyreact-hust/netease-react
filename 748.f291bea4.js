(self.webpackChunkreact_netease_music=self.webpackChunkreact_netease_music||[]).push([[748],{3295:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var c=t(1679),a=t(5893),l=(t(7294),t(4184)),o=t.n(l);const r="src-components-PlayIcon-style-module__root--3MYPr";const n=function(e){var s=e.className;return(0,a.jsx)("div",{className:o()(r,s),children:(0,a.jsx)(c.J,{icon:"play"})})}},4748:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>P});var c=t(8673),a=t(3038),l=t.n(a),o=t(5893),r=t(7294),n=t(4184),i=t.n(n),u=t(1679),d=t(9713),v=t.n(d),m=t(3295),p=t(2771),y=t(5749),f=t(4275);const b={colors:"'~styles/colors.module.css'",borderColor:"#f5f5f5",tipsHoverColor:"#7c7c7c",nameHoverColor:"#1e1e1e",item:"src-pages-Discovery-LatestMusic-Content-style-module__item--b9gNs",index:"src-pages-Discovery-LatestMusic-Content-style-module__index--2cvlJ",musicInfo:"src-pages-Discovery-LatestMusic-Content-style-module__musicInfo--1SSoC",name:"src-pages-Discovery-LatestMusic-Content-style-module__name--35HEc",pic:"src-pages-Discovery-LatestMusic-Content-style-module__pic--OVWMy",playIcon:"src-pages-Discovery-LatestMusic-Content-style-module__playIcon--1H7kR",artists:"src-pages-Discovery-LatestMusic-Content-style-module__artists--2vy8G",album:"src-pages-Discovery-LatestMusic-Content-style-module__album--R5pmc",duration:"src-pages-Discovery-LatestMusic-Content-style-module__duration--xrE65"};function _(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);s&&(c=c.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,c)}return t}function j(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?_(Object(t),!0).forEach((function(s){v()(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var x=r.useContext;const h=function(e){var s=e.data,t=e.onDoubleClick,c=x(f.bp),a=x(f.vY),l=x(f.Hm),r=function(e){var c,l=null==s?void 0:s[e];a({type:f.aO.PLAY,payload:{musicId:null==l?void 0:l.id,music:(0,y.lk)(j(j({},l),{},{duration:(null==l?void 0:l.duration)/1e3,picUrl:(null==l?void 0:l.picUrl)||(null==l||null===(c=l.album)||void 0===c?void 0:c.blurPicUrl)}))}}),t()};return(0,o.jsx)("div",{className:b.root,children:null==s?void 0:s.map((function(e,s){var t,a=e.id,n=e.name,d=e.artists,v=e.album,y=e.duration,f=e.picUrl,_=c.musicId===a;return(0,o.jsxs)("div",{className:b.item,onDoubleClick:function(){return r(s)},children:[(0,o.jsx)("div",{className:i()(b.index,_&&"active"),children:_?(0,o.jsx)(u.J,{icon:(null===(t=l.state)||void 0===t?void 0:t.paused)?"volume-off":"volume-up",iconSize:15}):(0,o.jsx)("span",{children:s+1})}),(0,o.jsxs)("div",{className:b.musicInfo,children:[(0,o.jsxs)("div",{className:b.pic,children:[(0,o.jsx)("img",{src:"".concat(f||(null==v?void 0:v.blurPicUrl),"?param=60y60"),className:"cover",loading:"lazy"}),(0,o.jsx)(m.Z,{className:b.playIcon})]}),(0,o.jsx)("div",{className:i()(b.name,_&&"active"),children:n})]}),(0,o.jsx)("div",{className:b.artists,children:d.map((function(e){return e.name})).join(" / ")}),(0,o.jsx)("div",{className:b.album,children:null==v?void 0:v.name}),(0,o.jsx)("div",{className:b.duration,children:(0,p.mr)(y/1e3)})]},a)}))})};var g=t(4324),N=t(4135);const C={colors:"'~styles/colors.module.css'",nameColor:"#5d5d5d",nameHoverColor:"#1e1e1e",red:"#c7332f",root:"src-pages-Discovery-LatestMusic-style-module__root--1q5ud",header:"src-pages-Discovery-LatestMusic-style-module__header--tahrH",playAll:"src-pages-Discovery-LatestMusic-style-module__playAll--f4mY6",tabs:"src-pages-Discovery-LatestMusic-style-module__tabs--2SnqN",tab:"src-pages-Discovery-LatestMusic-style-module__tab--2xNDU",active:"src-pages-Discovery-LatestMusic-style-module__active--3hfnB"};var L=r.useEffect,D=r.useState,O=r.useContext,M=[{label:"全部",type:g.z.ALL},{label:"华语",type:g.z.CHINESE},{label:"欧美",type:g.z.EU_USA},{label:"韩国",type:g.z.KOREAN},{label:"日本",type:g.z.JAPANESE}];const P=function(){var e=O(f.vY),s=D(g.z.ALL),t=l()(s,2),a=t[0],r=t[1],n=(0,N.Z)(g.Z.getTopSongs),u=l()(n,2),d=u[0],v=u[1];L((function(){v(a)}),[]);var m=function(s){var t,c;(e({type:f.aO.SET_PLAY_LIST,payload:{playList:d.value}}),s)&&e({type:f.aO.PLAY,payload:{musicId:null===(t=d.value)||void 0===t?void 0:t[0].id,music:null===(c=d.value)||void 0===c?void 0:c[0]}})};return(0,o.jsxs)("div",{className:C.root,children:[(0,o.jsxs)("div",{className:C.header,children:[(0,o.jsx)("div",{className:C.tabs,children:M.map((function(e){var s=e.label,t=e.type;return(0,o.jsx)("div",{className:i()(C.tab,t===a&&C.active),onClick:function(){return function(e){r(e),v(e)}(t)},children:s},t)}))}),(0,o.jsx)("div",{className:C.operations,children:(0,o.jsx)("div",{className:C.playAll,onClick:function(){return m(!0)},children:"播放全部"})})]}),(0,o.jsx)("div",{className:C.content,children:d.loading?(0,o.jsx)(c.$,{className:"spinner"}):(0,o.jsx)(h,{data:d.value,onDoubleClick:function(){return m(!1)}})})]})}}}]);