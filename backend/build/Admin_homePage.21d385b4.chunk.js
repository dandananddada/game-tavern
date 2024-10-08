"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[3981],{96753:(D,C,n)=>{n.r(C),n.d(C,{HomePageCE:()=>j,default:()=>Le});var e=n(67294),i=n(16607),S=n(71590),T=n(40720),v=n(31988),E=n(6498),a=n(80621),x=n(64593),W=n(44012),O=n(16550),c=n(54863),d=n(96987),u=n(10574),R=n(12473),I=n(98),y=n(86896),A=n(99571),F=n(45697),r=n.n(F),p=n(16334),$=n(43234),K=n(2364);const B=({type:t,title:l,number:o,content:s,hasLine:m})=>{const{formatMessage:h}=(0,y.Z)();return e.createElement(i.x,null,e.createElement(d.k,null,e.createElement(i.x,{minWidth:(0,a.pxToRem)(30),marginRight:5},e.createElement(K.Z,{type:t,number:o})),e.createElement(u.Z,{variant:"delta",as:"h3"},h(l))),e.createElement(d.k,{alignItems:"flex-start"},e.createElement(d.k,{justifyContent:"center",minWidth:(0,a.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement($.Z,{type:t,minHeight:t===p.lW?(0,a.pxToRem)(85):(0,a.pxToRem)(65)})),e.createElement(i.x,{marginTop:2},t===p.lW&&s)))};B.defaultProps={content:void 0,number:void 0,type:p.VM,hasLine:!0},B.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([p.lW,p.hx,p.VM]),hasLine:r().bool};const U=B,z=(t,l)=>t===-1||l<t?p.hx:l>t?p.VM:p.lW,b=({sections:t,currentSectionKey:l})=>{const o=t.findIndex(s=>s.key===l);return e.createElement(i.x,null,t.map((s,m)=>e.createElement(U,{key:s.key,title:s.title,content:s.content,number:m+1,type:z(o,m),hasLine:m!==t.length-1})))};b.defaultProps={currentSectionKey:void 0},b.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const V=b,w=()=>{const{guidedTourState:t,setSkipped:l}=(0,a.useGuidedTour)(),{formatMessage:o}=(0,y.Z)(),{trackUsage:s}=(0,a.useTracking)(),m=Object.entries(A.Z).map(([g,f])=>({key:g,title:f.home.title,content:e.createElement(a.LinkButton,{onClick:()=>s(f.home.trackingEvent),to:f.home.cta.target,endIcon:e.createElement(I.Z,null)},o(f.home.cta.title))})),H=m.map(g=>({isDone:Object.entries(t[g.key]).every(([,f])=>f),...g})).find(g=>!g.isDone)?.key,Z=()=>{l(!0),s("didSkipGuidedtour")};return e.createElement(i.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(u.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(V,{sections:m,currentSectionKey:H})),e.createElement(d.k,{justifyContent:"flex-end"},e.createElement(R.z,{variant:"tertiary",onClick:Z},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},J=t=>Object.entries(t).every(([,l])=>Object.entries(l).every(([,o])=>o));var N=n(92686),Q=n(80902);const Y=n.p+"7e9af4fb7e723fcebf1f.svg";var X=n(36311),q=n(89776),_=n(76730),ee=n(4900);const te=n.p+"27d16aefee06412db90a.png",ne=n.p+"bb4d0d527bdfb161bc5a.svg",oe=n.p+"bb3108f7fd1e6179bde1.svg",ae=c.default.a`
  text-decoration: none;
`,le=(0,c.default)(i.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,re=(0,c.default)(d.k)`
  background: rgba(255, 255, 255, 0.3);
`,se=()=>{const{formatMessage:t}=(0,y.Z)(),{trackUsage:l}=(0,a.useTracking)();return e.createElement(ae,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{l("didClickOnTryStrapiCloudSection")}},e.createElement(d.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(le,{backgroundImage:te,hasRadius:!0,padding:3},e.createElement(re,{width:(0,a.pxToRem)(32),height:(0,a.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:oe,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(d.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(d.k,null,e.createElement(u.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(i.x,{src:ne,position:"absolute",top:0,right:0,as:"img"}))))},M=c.default.a`
  text-decoration: none;
`,ie=()=>{const{formatMessage:t}=(0,y.Z)(),{trackUsage:l}=(0,a.useTracking)(),o=s=>{l(s)};return e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(se,null),e.createElement(M,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(a.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(X.Z,null),iconBackground:"primary100"})),e.createElement(M,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(a.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(q.Z,null),iconBackground:"warning100"})),e.createElement(M,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(a.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(_.Z,null),iconBackground:"secondary100"})),e.createElement(M,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(a.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ee.Z,null),iconBackground:"alternative100"})))};var G=n(29430);const ce=(0,c.default)(u.Z)`
  word-break: break-word;
`,P=({hasCreatedContentType:t,onCreateCT:l})=>{const{formatMessage:o}=(0,y.Z)();return e.createElement("div",null,e.createElement(i.x,{paddingLeft:6,paddingBottom:10},e.createElement(d.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(u.Z,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ce,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(G.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(R.z,{size:"L",onClick:l,endIcon:e.createElement(I.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};P.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},P.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const de=P;var me=n(94101),pe=n(77190),ue=n(67008),ge=n(61193),fe=n(32765),he=n(13956),Ee=n(10778),ye=n(62577);const ke=(0,c.default)(pe.Z)`
  path {
    fill: #7289da !important;
  }
`,ve=(0,c.default)(ue.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,L=(0,c.default)(ge.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Ce=(0,c.default)(fe.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Se=(0,c.default)(he.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Me=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Ee.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ke,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ve,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Ce,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Se,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(L,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(L,null),alt:"career"}],Te=(0,c.default)(me.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,xe=(0,c.default)(v.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Be=()=>{const{formatMessage:t}=(0,y.Z)(),{communityEdition:l}=(0,a.useAppInfo)(),o=[...Me,{icon:e.createElement(L,null),link:l?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(i.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(i.x,{paddingBottom:7},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(u.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(G.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ye.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(xe,null,o.map(({icon:s,link:m,name:h})=>e.createElement(E.P,{col:6,s:12,key:h.id},e.createElement(Te,{size:"L",startIcon:s,variant:"tertiary",href:m,isExternal:!0},t(h))))))},be=(0,c.default)(i.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,j=()=>{const{collectionTypes:t,singleTypes:l,isLoading:o}=(0,N.G)(),{guidedTourState:s,isGuidedTourVisible:m,isSkipped:h}=(0,a.useGuidedTour)(),H=!J(s)&&m&&!h,{push:Z}=(0,O.k6)(),g=k=>{k.preventDefault(),Z("/plugins/content-type-builder/content-types/create-content-type")},f=(0,e.useMemo)(()=>{const k=He=>He.filter(Ze=>Ze.isDisplayed);return k(t).length>1||k(l).length>0},[t,l]);return o?e.createElement(a.LoadingIndicatorPage,null):e.createElement(S.A,null,e.createElement(W.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},k=>e.createElement(x.q,{title:k[0]})),e.createElement(T.o,null,e.createElement(be,null,e.createElement("img",{alt:"","aria-hidden":!0,src:Y})),e.createElement(i.x,{padding:10},e.createElement(v.r,null,e.createElement(E.P,{col:8,s:12},e.createElement(de,{onCreateCT:g,hasCreatedContentType:f}))),e.createElement(v.r,{gap:6},e.createElement(E.P,{col:8,s:12},H?e.createElement(w,null):e.createElement(ie,null)),e.createElement(E.P,{col:4,s:12},e.createElement(Be,null))))))};function Pe(){const t=(0,Q.c)(j,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const Le=Pe},71590:(D,C,n)=>{n.d(C,{A:()=>E});var e=n(85893),i=n(54863),S=n(16607);const T=(0,i.default)(S.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,v=(0,i.default)(S.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:x})=>(0,e.jsxs)(T,{hasSideNav:Boolean(a),children:[a,(0,e.jsx)(v,{paddingBottom:10,children:x})]})}}]);
