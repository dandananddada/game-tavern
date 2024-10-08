"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[4121],{38402:(Z,g,t)=>{t.r(g),t.d(g,{default:()=>ue});var e=t(67294),s=t(80621),c=t(86706),u=t(36364),h=t(334),L=t(71590),S=t(40720),D=t(90731),P=t(55040),l=t(10574),p=t(12473),k=t(34726),U=t(16607),_=t(5923),ee=t(38454),te=t(3547),F=t(29299),i=t(69398),K=t(12803),ne=t(22304),ae=t(35752),w=t(96987),E=t(85893),V=t(54863);const j=V.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=V.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${j} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${j}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:m,onLabel:f="On",offLabel:d="Off",selected:C,visibleLabels:a=!1,...v},b)=>(0,E.jsx)(se,{ref:b,role:"switch","aria-checked":C,"aria-label":o,onClick:m,visibleLabels:a,type:"button",...v,children:(0,E.jsxs)(w.k,{children:[(0,E.jsxs)(j,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),a&&(0,E.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:C?"success600":"danger600",children:C?f:d})]})}));var N=t(96208),le=t(96912),B=t(83598),z=t(54425),re=t(2382),ie=t(94355),de=t(86896),$=t(88767),H=t(16550);const ce=()=>{const[o,m]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),C=(0,c.useSelector)(u._),{formatMessage:a}=(0,de.Z)(),{formatAPIError:v}=(0,s.useAPIErrorHandler)(),b=(0,s.useNotification)();(0,s.useFocusWhenNavigate)();const{push:me}=(0,H.k6)(),{pathname:G}=(0,H.TH)(),{isLoading:ge,allowedActions:{canCreate:O,canUpdate:Q,canDelete:Y}}=(0,s.useRBAC)(C.settings.webhooks),{get:he,post:Ee,put:fe}=(0,s.useFetchClient)(),{notifyStatus:X}=(0,h.G)(),ve="webhooks",{isLoading:be,data:x,error:W,refetch:J}=(0,$.useQuery)(ve,async()=>{const{data:{data:n}}=await he("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(W){b({type:"warning",message:v(W)});return}x&&X(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[x,W,b,a,X,v]);const q=(0,$.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(n){b({type:"warning",message:v(n)}),m(!1)},onSuccess(){d([]),m(!1),J()}}),xe=(0,$.useMutation)(async({isEnabled:n,id:r})=>{const{id:T,...R}=x.find(Te=>Te.id===r)??{},ye={...R,isEnabled:n};await fe(`/admin/webhooks/${r}`,ye)},{onError(n){b({type:"warning",message:v(n)})},onSuccess(){J()}}),Ce=()=>q.mutate(),Me=n=>d(n?x.map(r=>r.id):[]),pe=(n,r)=>d(n?T=>[...T,r]:T=>T.filter(R=>R!==r)),A=n=>me(`${G}/${n}`),I=ge||be,y=x?.length??0,M=f.length;return e.createElement(L.A,null,e.createElement(s.SettingsPageTitle,{name:"Webhooks"}),e.createElement(S.o,{"aria-busy":I},e.createElement(D.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!I&&e.createElement(s.LinkButton,{startIcon:e.createElement(B.Z,null),variant:"default",to:`${G}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),M>0&&Y&&e.createElement(P.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:M})),e.createElement(p.z,{onClick:()=>m(!0),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(k.D,null,I?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.LoadingIndicatorPage,null)):y>0?e.createElement(_.i,{colCount:5,rowCount:y+1,footer:e.createElement(ee.c,{onClick:()=>O?A("create"):{},icon:e.createElement(B.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(F.Tr,null,e.createElement(i.Th,null,e.createElement(K.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:M>0&&M<y,value:M===y,onValueChange:Me})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,x.map(n=>e.createElement(F.Tr,{key:n.id,...(0,s.onRowClick)({fn:()=>A(n.id),condition:Q})},e.createElement(i.Td,{...s.stopPropagation},e.createElement(K.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:f?.includes(n.id),onValueChange:r=>pe(r,n.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},n.url)),e.createElement(i.Td,null,e.createElement(w.k,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:r=>{r.stopPropagation(),xe.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(w.k,{gap:1},Q&&e.createElement(N.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),Y&&e.createElement(N.h,{onClick:r=>{r.stopPropagation(),d([n.id]),m(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(z.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(p.z,{variant:"secondary",startIcon:e.createElement(B.Z,null),onClick:()=>O?A("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.ConfirmDialog,{isOpen:o,onToggleDialog:()=>m(n=>!n),onConfirm:Ce,isConfirmButtonLoading:q.isLoading}))},ue=()=>{const o=(0,c.useSelector)(u._);return e.createElement(s.CheckPagePermissions,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},55040:(Z,g,t)=>{t.d(g,{Z:()=>c});var e=t(85893),s=t(96987);const c=({startActions:u,endActions:h})=>!u&&!h?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:u}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:h})]})},38454:(Z,g,t)=>{t.d(g,{c:()=>P});var e=t(85893),s=t(54863),c=t(16607),u=t(26910),h=t(96987),L=t(10574);const S=(0,s.default)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,D=(0,s.default)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,P=({children:l,icon:p,...k})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(u.i,{}),(0,e.jsx)(D,{as:"button",background:"primary100",padding:5,...k,children:(0,e.jsxs)(h.k,{children:[(0,e.jsx)(S,{"aria-hidden":!0,background:"primary200",children:p}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(L.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
