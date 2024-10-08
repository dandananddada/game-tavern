"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[5516],{63109:(K,D,n)=>{n.d(D,{Z:()=>S});var e=n(67294);const S=(T,O)=>{const[h,y]=(0,e.useState)(T);return(0,e.useEffect)(()=>{const p=setTimeout(()=>{y(T)},O);return()=>{clearTimeout(p)}},[T,O]),h}},8681:(K,D,n)=>{n.r(D),n.d(D,{MarketPlacePage:()=>me,default:()=>vt});var e=n(67294),I=n(71590),S=n(40720),T=n(34726),O=n(98948),h=n(96987),y=n(91788),p=n(16607),ve=n(35987),F=n(94955),g=n(80621),Ee=n(64593),v=n(86896),Me=n(86706),ye=n(63109);const ke=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=(0,e.useState)(a),o=()=>i(!0),r=()=>i(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",o),window.addEventListener("offline",r),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",r)}),[]),s};var be=n(36364),x=n(85200),Re=n(94573),Y=n(62577);const Ce=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.ContentBox,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Re.Z,null),iconBackground:"alternative100",endAction:e.createElement(x.J,{as:Y.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=n(96724),w=n(12473),Te=n(35771),xe=n(52933),Ne=n(45697),t=n.n(Ne),N=n(54863),De=n(59604),X=n(59586),_=n(40933);const ee=({message:a,value:s,onChange:i,possibleFilters:o,onClear:r,customizeContent:d})=>{const l=(c,m)=>`${c} (${m})`;return e.createElement(X.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:i,onClear:r,value:s,customizeContent:d,multi:!0},Object.entries(o).map(([c,m])=>e.createElement(_.W,{"data-testid":`${c}-${m}`,key:c,value:c},l(c,m))))};ee.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const te=ee,ae=({source:a,onToggle:s,query:i,npmPackageType:o,possibleCategories:r,possibleCollections:d,handleSelectChange:l,handleSelectClear:c})=>{const{formatMessage:m}=(0,v.Z)();return e.createElement(De.J2,{source:a,onDismiss:s,padding:3,spacing:4},e.createElement(Oe,{direction:"column",alignItems:"stretch",gap:1},e.createElement(te,{message:m({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:f=>{l({collections:f})},onClear:()=>c("collections"),possibleFilters:d,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:f.length})}),o==="plugin"&&e.createElement(te,{message:m({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:f=>{l({categories:f})},onClear:()=>c("categories"),possibleFilters:r,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:f.length}),name:"categories"})))};ae.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Ie=ae,Oe=(0,N.default)(h.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,V=({name:a,handleRemove:s})=>e.createElement(p.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(Te.Z,null),onClick:s},a)),Le=(0,N.default)(w.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,ne=({possibleCollections:a,possibleCategories:s,npmPackageType:i,query:o,handleSelectClear:r,handleSelectChange:d})=>{const[l,c]=(0,e.useState)(!1),m=(0,e.useRef)(),{formatMessage:f}=(0,v.Z)(),P=()=>c(u=>!u),E=(u,M)=>{const R={[M]:o[M].filter(L=>L!==u)};d(R)};return e.createElement(e.Fragment,null,e.createElement(p.x,{paddingTop:1,paddingBottom:1},e.createElement(Le,{variant:"tertiary",ref:m,"data-testid":"filters-button",startIcon:e.createElement(xe.Z,null),onClick:P,size:"S"},f({id:"app.utils.filters",defaultMessage:"Filters"})),l&&e.createElement(Ie,{onToggle:P,source:m,query:o,handleSelectClear:r,handleSelectChange:d,possibleCollections:a,possibleCategories:s,npmPackageType:i})),o.collections?.map(u=>e.createElement(V,{name:u,key:u,handleRemove:()=>E(u,"collections")})),i==="plugin"&&o.categories?.map(u=>e.createElement(V,{name:u,key:u,handleRemove:()=>E(u,"categories")})))};V.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},ne.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Ze=ne;var Be=n(74863),$e=n(31988),Ae=n(6498),b=n(10574),je=n(94355);const Fe=N.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:a})=>a.spaces[4]};
`,we=(0,N.default)(p.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ve=()=>e.createElement(Fe,null,Array(12).fill(null).map((a,s)=>e.createElement(we,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),se=({content:a})=>e.createElement(p.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Ve,null),e.createElement(p.x,{position:"absolute",top:11,width:"100%"},e.createElement(h.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(x.J,{as:je.Z,color:"",width:"160px",height:"88px"}),e.createElement(p.x,{paddingTop:6},e.createElement(b.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));se.propTypes={content:t().string.isRequired};const ze=se;var z=n(81315),re=n(94101),Ue=n(54211),Ge=n(23450),Qe=n.n(Ge),We=n(61473),He=n(18226),ie=n(43838),Je=n(81249),oe=n.n(Je);const Z=({description:a,installMessage:s,disabled:i,handleCopy:o,pluginName:r})=>e.createElement(z.u,{"data-testid":`tooltip-${r}`,description:a},e.createElement(p.x,null,e.createElement(w.z,{size:"S",startIcon:e.createElement(ie.Z,null),variant:"secondary",disabled:i,onClick:o},s))),U=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:i,pluginName:o})=>{const{formatMessage:r}=(0,v.Z)(),d=oe().validRange(a),l=oe().satisfies(s,d),c=r({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement(Z,{installMessage:c,pluginName:o,description:r({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!l)return e.createElement(Z,{installMessage:c,pluginName:o,description:r({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement(w.z,{size:"S",startIcon:e.createElement(ie.Z,null),variant:"secondary",onClick:i},c)};Z.defaultProps={disabled:!1,handleCopy:null},Z.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},U.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},U.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const qe=U,G=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:o,strapiPeerDepVersion:r,pluginName:d})=>{const l=(0,g.useNotification)(),{formatMessage:c}=(0,v.Z)(),{trackUsage:m}=(0,g.useTracking)(),{copy:f}=(0,g.useClipboard)(),P=async()=>{await f(i)&&(m("willInstallPlugin"),l({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return a?e.createElement(p.x,{paddingLeft:4},e.createElement(x.J,{as:He.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(b.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(qe,{strapiAppVersion:o,strapiPeerDepVersion:r,handleCopy:P,pluginName:d}):null};G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const Ke=G;var Ye=n(26910),Xe=n(10778),_e=n(82500),et=n(95998);const tt=(0,N.default)(Ye.i)`
  width: ${(0,g.pxToRem)(12)};
  transform: rotate(90deg);
`,Q=({githubStars:a,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:o}=(0,v.Z)();return e.createElement(h.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(x.J,{as:Xe.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement(x.J,{as:_e.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:i})},e.createElement(b.Z,{variant:"pi",textColor:"neutral800"},a)),e.createElement(tt,{unsetMargin:!1,background:"neutral200"})),e.createElement(x.J,{as:et.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(b.Z,{variant:"pi",textColor:"neutral800"},s)))};Q.defaultProps={githubStars:0,npmDownloads:0},Q.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const at=Q,nt=(0,N.default)(b.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,W=({npmPackage:a,isInstalled:s,useYarn:i,isInDevelopmentMode:o,npmPackageType:r,strapiAppVersion:d})=>{const{attributes:l}=a,{formatMessage:c}=(0,v.Z)(),{trackUsage:m}=(0,g.useTracking)(),f=i?`yarn add ${l.npmPackageName}`:`npm install ${l.npmPackageName}`,P=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),E=`https://market.strapi.io/${Qe().plural(r)}/${l.slug}`;return e.createElement(h.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(p.x,null,e.createElement(h.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(p.x,{as:"img",src:l.logo.url,alt:`${l.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(at,{githubStars:l.githubStars,npmDownloads:l.npmDownloads,npmPackageType:r})),e.createElement(p.x,{paddingTop:4},e.createElement(b.Z,{as:"h3",variant:"delta"},e.createElement(h.k,{alignItems:"center"},l.name,l.validated&&!l.madeByStrapi&&e.createElement(z.u,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(h.k,null,e.createElement(x.J,{as:Ue.Z,marginLeft:2,color:"success600"}))),l.madeByStrapi&&e.createElement(z.u,{description:P},e.createElement(h.k,null,e.createElement(p.x,{as:"img",src:We,alt:P,marginLeft:1,width:6,height:"auto"})))))),e.createElement(p.x,{paddingTop:2},e.createElement(nt,{as:"p",variant:"omega",textColor:"neutral600"},l.description))),e.createElement(h.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(re.Q,{size:"S",href:E,isExternal:!0,endIcon:e.createElement(Y.Z,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:l.name}),variant:"tertiary",onClick:()=>m("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Ke,{isInstalled:s,isInDevelopmentMode:o,commandToCopy:f,strapiAppVersion:d,strapiPeerDepVersion:l.strapiVersion,pluginName:l.name})))};W.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},W.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const st=W,H=({status:a,npmPackages:s,installedPackageNames:i,useYarn:o,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:l,debouncedSearch:c})=>{const{formatMessage:m}=(0,v.Z)();if(a==="error")return e.createElement(h.k,{paddingTop:8},e.createElement(g.AnErrorOccurred,null));if(a==="loading")return e.createElement(h.k,{justifyContent:"center",paddingTop:8},e.createElement(Be.a,null,"Loading content..."));const f=m({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:c});return s.length===0?e.createElement(ze,{content:f}):e.createElement($e.r,{gap:4,"data-testid":"marketplace-results"},s.map(P=>e.createElement(Ae.P,{col:4,s:6,xs:12,style:{height:"100%"},key:P.id},e.createElement(st,{npmPackage:P,isInstalled:i.includes(P.attributes.npmPackageName),useYarn:o,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:l}))))};H.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},H.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const le=H,ce=({pagination:a})=>e.createElement(p.x,{paddingTop:4},e.createElement(h.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.PageSizeURLQuery,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.PaginationURLQuery,{pagination:a})));ce.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const rt=ce,it=n.p+"9d5d788027e86620c234.svg";var ot=n(90731),lt=n(59071);const J=({isOnline:a,npmPackageType:s})=>{const{formatMessage:i}=(0,v.Z)(),{trackUsage:o}=(0,g.useTracking)(),r=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(ot.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(re.Q,{startIcon:e.createElement(lt.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>o(r),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},de=J;J.defaultProps={npmPackageType:"plugin"},J.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};const ct=()=>{const{formatMessage:a}=(0,v.Z)();return e.createElement(I.A,null,e.createElement(S.o,null,e.createElement(de,{isOnline:!1}),e.createElement(h.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.pxToRem)(120)},e.createElement(p.x,{paddingBottom:2},e.createElement(b.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(p.x,{paddingBottom:6},e.createElement(b.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:it,alt:"offline",style:{width:"88px",height:"88px"}}))))},dt=(0,N.default)(p.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,ge=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:i}=(0,v.Z)(),o={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(dt,null,e.createElement(X.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>i(o[a].selected),onChange:r=>{s({sort:r})},label:i({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(o).map(([r,d])=>e.createElement(_.W,{key:r,value:r},i(d.option)))))};ge.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const gt=ge;var ut=n(334),pt=n(80129),B=n.n(pt),ue=n(88767);const pe="https://market-api.strapi.io",mt=(a,s={})=>{const i=(0,g.useNotification)();return(0,ue.useQuery)(["marketplace","plugins",s],async()=>{try{const o=B().stringify(B().parse(s)),r=await fetch(`${pe}/plugins?${o}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},ft=(a,s={})=>{const i=(0,g.useNotification)();return(0,ue.useQuery)(["marketplace","providers",s],async()=>{try{const o=B().stringify(B().parse(s)),r=await fetch(`${pe}/providers?${o}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Pt({npmPackageType:a,debouncedSearch:s,query:i,tabQuery:o}){const{notifyStatus:r}=(0,ut.G)(),{formatMessage:d}=(0,v.Z)(),l=d({id:"global.marketplace",defaultMessage:"Marketplace"}),c=()=>{r(d({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:l}))},m={page:i?.page||1,pageSize:i?.pageSize||24},{data:f,status:P}=mt(c,{...o.plugin,pagination:m,search:s}),{data:E,status:u}=ft(c,{...o.provider,pagination:m,search:s}),M=a==="plugin"?f:E,R=a==="plugin"?P:u,[L,$]=(0,e.useState)({}),[A,j]=(0,e.useState)({});(0,e.useEffect)(()=>{R==="success"&&$(M.meta.collections),P==="success"&&j(f.meta.categories)},[f?.meta.categories,P,M?.meta.collections,R]);const{pagination:q}=R==="success"?M.meta:{};return{pluginsResponse:f,providersResponse:E,pluginsStatus:P,providersStatus:u,possibleCollections:L,possibleCategories:A,pagination:q}}const ht=Pt,me=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.useTracking)(),i=(0,e.useRef)(s),o=(0,g.useNotification)(),[{query:r},d]=(0,g.useQueryParams)(),l=(0,ye.Z)(r?.search,500)||"",{autoReload:c,dependencies:m,useYarn:f,strapiVersion:P}=(0,g.useAppInfo)(),E=ke(),u=r?.npmPackageType||"plugin",[M,R]=(0,e.useState)({plugin:u==="plugin"?{...r}:{},provider:u==="provider"?{...r}:{}});(0,g.useFocusWhenNavigate)(),(0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{c||o({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[o,c]);const{pluginsResponse:L,providersResponse:$,pluginsStatus:A,providersStatus:j,possibleCollections:q,possibleCategories:Et,pagination:fe}=ht({npmPackageType:u,debouncedSearch:l,query:r,tabQuery:M});if(!E)return e.createElement(ct,null);const Mt=C=>{const k=C===0?"plugin":"provider",kt=M[k]&&Object.keys(M[k]).length;d(kt?{...M[k],search:r?.search||"",npmPackageType:k,page:1}:{npmPackageType:k,collections:[],categories:[],sort:"name:asc",page:1,search:r?.search||""})},Pe=C=>{d({...C,page:1}),R(k=>({...k,[u]:{...k[u],...C}}))},yt=C=>{d({[C]:[],page:null},"remove"),R(k=>({...k,[u]:{}}))},he=Object.keys(m);return e.createElement(I.A,null,e.createElement(S.o,null,e.createElement(Ee.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(de,{isOnline:E,npmPackageType:u}),e.createElement(T.D,null,e.createElement(O.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(u),onTabChange:Mt},e.createElement(h.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(y.m,null,e.createElement(y.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",A==="success"?`(${L.meta.pagination.total})`:"..."),e.createElement(y.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",j==="success"?`(${$.meta.pagination.total})`:"...")),e.createElement(p.x,{width:"25%"},e.createElement(ve.w,{name:"searchbar",onClear:()=>d({search:"",page:1}),value:r?.search,onChange:C=>d({search:C.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(h.k,{paddingBottom:4,gap:2},e.createElement(gt,{sortQuery:r?.sort||"name:asc",handleSelectChange:Pe}),e.createElement(Ze,{npmPackageType:u,possibleCollections:q,possibleCategories:Et,query:r||{},handleSelectChange:Pe,handleSelectClear:yt})),e.createElement(F.n,null,e.createElement(F.x,null,e.createElement(le,{npmPackages:L?.data,status:A,installedPackageNames:he,useYarn:f,isInDevelopmentMode:c,npmPackageType:"plugin",strapiAppVersion:P,debouncedSearch:l})),e.createElement(F.x,null,e.createElement(le,{npmPackages:$?.data,status:j,installedPackageNames:he,useYarn:f,isInDevelopmentMode:c,npmPackageType:"provider",debouncedSearch:l})))),fe&&e.createElement(rt,{pagination:fe}),e.createElement(p.x,{paddingTop:8},e.createElement(Ce,null)))))},vt=()=>{const a=(0,Me.useSelector)(be._);return e.createElement(g.CheckPagePermissions,{permissions:a.marketplace.main},e.createElement(me,null))}},71590:(K,D,n)=>{n.d(D,{A:()=>h});var e=n(85893),I=n(54863),S=n(16607);const T=(0,I.default)(S.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:y})=>y?"auto 1fr":"1fr"};
`,O=(0,I.default)(S.x)`
  overflow-x: hidden;
`,h=({sideNav:y,children:p})=>(0,e.jsxs)(T,{hasSideNav:Boolean(y),children:[y,(0,e.jsx)(O,{paddingBottom:10,children:p})]})}}]);