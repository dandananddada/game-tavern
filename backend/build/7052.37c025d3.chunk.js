(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[7052],{44174:a=>{function i(n,t,r,s){for(var d=-1,e=n==null?0:n.length;++d<e;){var o=n[d];t(s,o,r(o),n)}return s}a.exports=i},47443:(a,i,n)=>{var t=n(42118);function r(s,d){var e=s==null?0:s.length;return!!e&&t(s,d,0)>-1}a.exports=r},1196:a=>{function i(n,t,r){for(var s=-1,d=n==null?0:n.length;++s<d;)if(r(t,n[s]))return!0;return!1}a.exports=i},48983:(a,i,n)=>{var t=n(40371),r=t("length");a.exports=r},81119:(a,i,n)=>{var t=n(89881);function r(s,d,e,o){return t(s,function(l,f,c){d(o,l,e(l),c)}),o}a.exports=r},41848:a=>{function i(n,t,r,s){for(var d=n.length,e=r+(s?1:-1);s?e--:++e<d;)if(t(n[e],e,n))return e;return-1}a.exports=i},42118:(a,i,n)=>{var t=n(41848),r=n(62722),s=n(42351);function d(e,o,l){return o===o?s(e,o,l):t(e,r,l)}a.exports=d},62722:a=>{function i(n){return n!==n}a.exports=i},45652:(a,i,n)=>{var t=n(88668),r=n(47443),s=n(1196),d=n(74757),e=n(23593),o=n(21814),l=200;function f(c,g,j){var p=-1,u=r,O=c.length,h=!0,v=[],x=v;if(j)h=!1,u=s;else if(O>=l){var m=g?null:e(c);if(m)return o(m);h=!1,u=d,x=new t}else x=g?[]:v;n:for(;++p<O;){var E=c[p],C=g?g(E):E;if(E=j||E!==0?E:0,h&&C===C){for(var D=x.length;D--;)if(x[D]===C)continue n;g&&x.push(C),v.push(E)}else u(x,C,j)||(x!==v&&x.push(C),v.push(E))}return v}a.exports=f},9872:(a,i,n)=>{var t=n(44174),r=n(81119),s=n(67206),d=n(1469);function e(o,l){return function(f,c){var g=d(f)?t:r,j=l?l():{};return g(f,o,s(c,2),j)}}a.exports=e},23593:(a,i,n)=>{var t=n(58525),r=n(50308),s=n(21814),d=1/0,e=t&&1/s(new t([,-0]))[1]==d?function(o){return new t(o)}:r;a.exports=e},42351:a=>{function i(n,t,r){for(var s=r-1,d=n.length;++s<d;)if(n[s]===t)return s;return-1}a.exports=i},88016:(a,i,n)=>{var t=n(48983),r=n(62689),s=n(21903);function d(e){return r(e)?s(e):t(e)}a.exports=d},21903:a=>{var i="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",s=n+t+r,d="\\ufe0e\\ufe0f",e="["+i+"]",o="["+s+"]",l="\\ud83c[\\udffb-\\udfff]",f="(?:"+o+"|"+l+")",c="[^"+i+"]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",p="\\u200d",u=f+"?",O="["+d+"]?",h="(?:"+p+"(?:"+[c,g,j].join("|")+")"+O+u+")*",v=O+u+h,x="(?:"+[c+o+"?",o,g,j,e].join("|")+")",m=RegExp(l+"(?="+l+")|"+x+v,"g");function E(C){for(var D=m.lastIndex=0;m.test(C);)++D;return D}a.exports=E},7739:(a,i,n)=>{var t=n(89465),r=n(9872),s=Object.prototype,d=s.hasOwnProperty,e=r(function(o,l,f){d.call(o,f)?o[f].push(l):t(o,f,[l])});a.exports=e},47037:(a,i,n)=>{var t=n(44239),r=n(1469),s=n(37005),d="[object String]";function e(o){return typeof o=="string"||!r(o)&&s(o)&&t(o)==d}a.exports=e},50308:a=>{function i(){}a.exports=i},84238:(a,i,n)=>{var t=n(280),r=n(64160),s=n(98612),d=n(47037),e=n(88016),o="[object Map]",l="[object Set]";function f(c){if(c==null)return 0;if(s(c))return d(c)?e(c):c.length;var g=r(c);return g==o||g==l?c.size:t(c).length}a.exports=f},7334:(a,i,n)=>{var t=n(79833);function r(s){return t(s).toLowerCase()}a.exports=r},44908:(a,i,n)=>{var t=n(45652);function r(s){return s&&s.length?t(s):[]}a.exports=r},53768:(a,i,n)=>{"use strict";n.d(i,{O:()=>r});var t=n(60914);const r=t.Wx},71590:(a,i,n)=>{"use strict";n.d(i,{A:()=>o});var t=n(85893),r=n(54863),s=n(16607);const d=(0,r.default)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,e=(0,r.default)(s.x)`
  overflow-x: hidden;
`,o=({sideNav:l,children:f})=>(0,t.jsxs)(d,{hasSideNav:Boolean(l),children:[l,(0,t.jsx)(e,{paddingBottom:10,children:f})]})},29824:(a,i,n)=>{"use strict";n.d(i,{r:()=>j});var t=n(85893),r=n(67294),s=n(62577),d=n(73727),e=n(54863),o=n(66362),l=n(10574),f=n(16607);const c=e.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:p})=>p?"none":void 0};
  color: ${({disabled:p,theme:u})=>p?u.colors.neutral600:u.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${l.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:p})=>p.colors.primary500};
  }

  &:active {
    color: ${({theme:p})=>p.colors.primary700};
  }

  ${o.BF};
`,g=(0,e.default)(f.x)`
  display: flex;
`,j=r.forwardRef(({children:p,href:u,to:O,disabled:h=!1,startIcon:v,endIcon:x,...m},E)=>{const C=u?"_blank":void 0,D=u?"noreferrer noopener":void 0;return(0,t.jsxs)(c,{as:O&&!h?d.NavLink:"a",target:C,rel:D,to:h?void 0:O,href:h?"#":u,disabled:h,ref:E,...m,children:[v&&(0,t.jsx)(g,{as:"span","aria-hidden":!0,paddingRight:2,children:v}),(0,t.jsx)(l.Z,{children:p}),x&&!u&&(0,t.jsx)(g,{as:"span","aria-hidden":!0,paddingLeft:2,children:x}),u&&(0,t.jsx)(g,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,t.jsx)(s.Z,{})})]})})},56233:(a,i,n)=>{"use strict";n.d(i,{m:()=>o});var t=n(85893),r=n(54863),s=n(31988);const d=`${232/16}rem`,e=(0,r.default)(s.r)`
  width: ${d};
  background: ${({theme:l})=>l.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
  z-index: 1;
`,o=({ariaLabel:l,...f})=>(0,t.jsx)(e,{"aria-label":l,as:"nav",...f})},71603:(a,i,n)=>{"use strict";n.d(i,{p:()=>v});var t=n(85893),r=n(67294),s=n(90272),d=n(54863),e=n(40840),o=n(92058);const l=x=>{const m=(0,r.useRef)();return(0,r.useEffect)(()=>{m.current=x}),m.current};var f=n(26910),c=n(16607),g=n(49185),j=n(35987),p=n(96987),u=n(10574),O=n(96208);const h=(0,d.default)(f.i)`
  width: ${24/16}rem;
  background-color: ${({theme:x})=>x.colors.neutral200};
`,v=({as:x="h2",label:m,searchLabel:E="",searchable:C=!1,onChange:D=()=>{},value:I="",onClear:L=()=>{},onSubmit:P=()=>{},id:T})=>{const[B,A]=(0,r.useState)(!1),y=l(B),W=(0,o.M)(T),R=(0,r.useRef)(void 0),S=(0,r.useRef)(void 0);(0,r.useEffect)(()=>{B&&R.current&&R.current.focus(),y&&!B&&S.current&&S.current.focus()},[B,y]);const U=()=>{A(M=>!M)},K=M=>{L(M),R.current.focus()},_=M=>{M.relatedTarget?.id!==W&&A(!1)},$=M=>{M.key===e.y.ESCAPE&&A(!1)};return B?(0,t.jsxs)(c.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,t.jsx)(g.U,{children:(0,t.jsx)(j.w,{name:"searchbar",value:I,onChange:D,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:$,ref:R,onBlur:_,onClear:K,onSubmit:P,clearLabel:"Clear",size:"S",children:E})}),(0,t.jsx)(c.x,{paddingLeft:2,paddingTop:4,children:(0,t.jsx)(h,{})})]}):(0,t.jsxs)(c.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,t.jsxs)(p.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,t.jsx)(u.Z,{variant:"beta",as:x,children:m}),C&&(0,t.jsx)(O.h,{ref:S,onClick:U,label:E,icon:(0,t.jsx)(s.Z,{})})]}),(0,t.jsx)(c.x,{paddingTop:4,children:(0,t.jsx)(h,{})})]})}},36636:(a,i,n)=>{"use strict";n.d(i,{E:()=>p});var t=n(85893),r=n(67294),s=n(59233),d=n(54863),e=n(16607),o=n(10574),l=n(96987),f=n(53342);const c=(0,d.default)(e.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${o.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,g=(0,d.default)(s.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:O})=>O?u.colors.primary600:u.colors.neutral600};
  }
`,j=d.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,p=r.forwardRef(({children:u,icon:O=null,withBullet:h=!1,as:v=f.f,isSubSectionChild:x=!1,...m},E)=>(0,t.jsxs)(c,{as:v,icon:O,background:"neutral100",paddingLeft:x?9:7,paddingBottom:2,paddingTop:2,ref:E,...m,children:[(0,t.jsxs)(l.k,{children:[O?(0,t.jsx)(j,{children:O}):(0,t.jsx)(g,{}),(0,t.jsx)(e.x,{paddingLeft:2,children:(0,t.jsx)(o.Z,{as:"span",children:u})})]}),h&&(0,t.jsx)(e.x,{as:l.k,paddingRight:4,children:(0,t.jsx)(g,{$active:!0})})]}))},21660:(a,i,n)=>{"use strict";n.d(i,{D:()=>O});var t=n(85893),r=n(67294),s=n(54863),d=n(58471),e=n(96987),o=n(16607),l=n(10574);const f=(0,s.default)(e.k)`
  border: none;
  padding: 0;
  background: transparent;
`,c=s.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:h})=>h?"0deg":"180deg"});
`,g=({collapsable:h=!1,label:v,onClick:x=()=>{},ariaExpanded:m,ariaControls:E})=>h?(0,t.jsxs)(f,{as:"button",onClick:x,"aria-expanded":m,"aria-controls":E,textAlign:"left",children:[(0,t.jsx)(o.x,{paddingRight:1,children:(0,t.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:v})}),h&&(0,t.jsx)(c,{rotated:m,children:(0,t.jsx)(d.Z,{"aria-hidden":!0})})]}):(0,t.jsx)(f,{children:(0,t.jsx)(o.x,{paddingRight:1,children:(0,t.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:v})})});var j=n(92058),p=n(18787);const u=(0,s.default)(o.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:h})=>h.colors.neutral500};
    }
  }
`,O=({collapsable:h=!1,label:v,badgeLabel:x,children:m,id:E})=>{const[C,D]=(0,r.useState)(!0),I=(0,j.M)(E),L=()=>{D(P=>!P)};return(0,t.jsxs)(e.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,t.jsxs)(o.x,{position:"relative",paddingRight:x?6:0,children:[(0,t.jsx)(g,{onClick:L,ariaExpanded:C,ariaControls:I,collapsable:h,label:v}),x&&(0,t.jsx)(p.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:x})]})}),(!h||C)&&(0,t.jsx)("ol",{id:I,children:r.Children.map(m,(P,T)=>(0,t.jsx)("li",{children:P},T))})]})}},61499:(a,i,n)=>{"use strict";n.d(i,{Z:()=>e});var t=n(85893),r=n(67294),s=n(16607),d=n(96987);const e=({children:o,spacing:l=2,horizontal:f=!1,...c})=>(0,t.jsx)(s.x,{paddingTop:2,paddingBottom:4,children:(0,t.jsx)(d.k,{as:"ol",gap:l,direction:f?"row":"column",alignItems:f?"center":"stretch",...c,children:r.Children.map(o,(g,j)=>(0,t.jsx)("li",{children:g},j))})})}}]);
