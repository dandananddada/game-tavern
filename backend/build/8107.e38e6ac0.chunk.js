"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[8107],{21289:(S,i,e)=>{e.d(i,{I:()=>t,U:()=>a});const t="strapi_stage",a="strapi_assignee"},56996:(S,i,e)=>{e.r(i),e.d(i,{InformationBoxEE:()=>V});var t=e(67294),a=e(80621),r=e(50236),m=e(78048),s=e(96987),c=e(60914),d=e(53768),l=e(86896),o=e(88767),w=e(86706),u=e(21892),E=e(54920),h=e(36364),n=e(21289);function N(){const{initialData:O,layout:{uid:I},isSingleType:P,onChange:j}=(0,a.useCMEditViewDataManager)(),Q=(0,w.useSelector)(h._),{formatMessage:f}=(0,l.Z)(),{formatAPIError:X}=(0,a.useAPIErrorHandler)(),Y=(0,a.useNotification)(),{put:z}=(0,a.useFetchClient)(),{allowedActions:{canReadUsers:L},isLoading:k}=(0,a.useRBAC)({readUsers:Q.settings.users.read}),{users:K,isLoading:U,isError:D}=(0,E.R)({},{enabled:!k&&L}),W=O?.[n.U]??null,C=async({value:v})=>{A.mutate({entityId:O.id,assigneeId:parseInt(v,10),uid:I})},A=(0,o.useMutation)(async({entityId:v,assigneeId:b,uid:T})=>{const R=P?"single-types":"collection-types",{data:{data:M}}=await z(`/admin/content-manager/${R}/${T}/${v}/assignee`,{data:{id:b}});return j({target:{name:n.U,value:M[n.U]}},!0),M},{onSuccess(){Y({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return t.createElement(m.g,{name:n.U,id:n.U},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(c.hQ,{clearLabel:f({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:D&&L&&f({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||A.error&&X(A.error),disabled:!k&&!U&&K.length===0,name:n.U,id:n.U,value:W?W.id:null,onChange:v=>C({value:v}),onClear:()=>C({value:null}),placeholder:f({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:f({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:U||k||A.isLoading},K.map(v=>t.createElement(d.O,{key:v.id,value:v.id,textValue:(0,u.Gf)(v,f)},(0,u.Gf)(v,f))))))}var B=e(90090),$=e(10574),F=e(74863),x=e(61456),Z=e(75021),y=e(38705),p=e(86978),g=e(52258),G=e(5318);function H(){const{initialData:O,layout:{uid:I},isSingleType:P,onChange:j}=(0,a.useCMEditViewDataManager)(),{put:Q}=(0,a.useFetchClient)(),{formatMessage:f}=(0,l.Z)(),{formatAPIError:X}=(0,a.useAPIErrorHandler)(),Y=(0,a.useNotification)(),{meta:z,workflows:[L],isLoading:k}=(0,g.n)({filters:{contentTypes:I}}),{getFeature:K}=(0,Z.q)(),[U,D]=t.useState(!1),W=K("review-workflows"),C=O?.[n.I]??null,A=(0,o.useMutation)(async({entityId:T,stageId:R,uid:M})=>{const J=P?"single-types":"collection-types",{data:{data:q}}=await Q(`/admin/content-manager/${J}/${M}/${T}/stage`,{data:{id:R}});return j({target:{name:n.I,value:q[n.I]}},!0),q},{onSuccess(){Y({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),v=async({value:T})=>{try{W?.[p.Ef]&&parseInt(W[p.Ef],10)<z.workflowCount?D("workflow"):W?.[p._X]&&parseInt(W[p._X],10)<L.stages.length?D("stage"):A.mutateAsync({entityId:O.id,stageId:T,uid:I})}catch{}},{themeColorName:b}=C?.color?(0,G.k)(C?.color):{};return t.createElement(t.Fragment,null,t.createElement(m.g,{name:n.I,id:n.I},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(B.q4,{error:A.error&&X(A.error)||null,name:n.I,id:n.I,value:C?.id,onChange:T=>v({value:T}),label:f({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:t.createElement(s.k,{as:"span",height:2,background:C?.color,borderColor:b==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>t.createElement(s.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement($.Z,{textColor:"neutral800",ellipsis:!0},C?.name),k?t.createElement(F.a,{small:!0,style:{display:"flex"}}):null)},L?L.stages.map(({id:T,color:R,name:M})=>{const{themeColorName:J}=(0,G.k)(R);return t.createElement(B.ag,{key:T,startIcon:t.createElement(s.k,{height:2,background:R,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:T,textValue:M},M)}):[]),t.createElement(x.c,null))),t.createElement(y.fC,{isOpen:U==="workflow",onClose:()=>D(!1)},t.createElement(y.Dx,null,f({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(y.uT,null,f({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),t.createElement(y.fC,{isOpen:U==="stage",onClose:()=>D(!1)},t.createElement(y.Dx,null,f({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),t.createElement(y.uT,null,f({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function V(){const{isCreatingEntry:O,layout:{options:I}}=(0,a.useCMEditViewDataManager)(),P=I?.reviewWorkflows??!1;return t.createElement(r.d.Root,null,t.createElement(r.d.Title,null),P&&!O&&t.createElement(t.Fragment,null,t.createElement(H,null),t.createElement(N,null)),t.createElement(r.d.Body,null))}},75021:(S,i,e)=>{e.d(i,{q:()=>m});var t=e(67294),a=e(80621),r=e(88767);function m({enabled:s}={enabled:!0}){const{get:c}=(0,a.useFetchClient)(),{data:d,isError:l,isLoading:o}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await c("/admin/license-limit-information");return E},{enabled:s}),w=t.useMemo(()=>d??{},[d]),u=t.useCallback(E=>(w?.features??[]).find(n=>n.name===E)?.options??{},[w?.features]);return{license:w,getFeature:u,isError:l,isLoading:o}}},38705:(S,i,e)=>{e.d(i,{uT:()=>x,fC:()=>p,Dx:()=>F});var t=e(67294),a=e(10574),r=e(96987),m=e(74622),s=e(71543),c=e(16607),d=e(96208),l=e(94101),o=e(35771),w=e(45697),u=e.n(w),E=e(86896),h=e(54863);const n=e.p+"0cd5f8915b265d5b1856.png",N="limits-title",B="https://strapi.io/pricing-cloud",$="https://strapi.io/contact-sales";function F({children:g}){return t.createElement(a.Z,{variant:"alpha",id:N},g)}F.propTypes={children:u().node.isRequired};function x({children:g}){return t.createElement(a.Z,{variant:"omega"},g)}x.propTypes={children:u().node.isRequired};function Z(){const{formatMessage:g}=(0,E.Z)();return t.createElement(r.k,{gap:2,paddingTop:4},t.createElement(l.Q,{variant:"default",isExternal:!0,href:B},g({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(l.Q,{variant:"tertiary",isExternal:!0,href:$},g({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const y=h.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:g})=>`-${g.spaces[7]}`};
  margin-top: ${({theme:g})=>`-${g.spaces[7]}`};
  width: 360px;
`;function p({children:g,isOpen:G,onClose:H}){const{formatMessage:V}=(0,E.Z)();return G?t.createElement(m.P,{labelledBy:N},t.createElement(s.f,null,t.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},g,t.createElement(Z,null)),t.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(y,{src:n,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(c.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(d.h,{icon:t.createElement(o.Z,null),"aria-label":V({id:"global.close",defaultMessage:"Close"}),onClick:H})))))):null}p.defaultProps={isOpen:!1},p.propTypes={children:u().node.isRequired,isOpen:u().bool,onClose:u().func.isRequired}},86978:(S,i,e)=>{e.d(i,{$k:()=>l,Ef:()=>h,FT:()=>u,Nj:()=>d,Ot:()=>c,VS:()=>o,_X:()=>n,gu:()=>r,lv:()=>w,qZ:()=>m,sN:()=>a,uL:()=>E,x4:()=>s});var t=e(12255);const a="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOW",s="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",c="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",l="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",w={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},u=t.W.colors.primary600,E={STAGE:"stage"},h="numberOfWorkflows",n="stagesPerWorkflow"},52258:(S,i,e)=>{e.d(i,{n:()=>r});var t=e(80621),a=e(88767);function r(m={}){const{get:s}=(0,t.useFetchClient)(),{id:c="",...d}=m,l={populate:"stages"},{data:o,isLoading:w,status:u,refetch:E}=(0,a.useQuery)(["review-workflows","workflows",c],async()=>(await s(`/admin/review-workflows/workflows/${c}`,{params:{...l,...d}})).data);let h=[];return c&&o?.data?h=[o.data]:Array.isArray(o?.data)&&(h=o.data),{meta:o?.meta??{},workflows:h,isLoading:w,status:u,refetch:E}}},5318:(S,i,e)=>{e.d(i,{k:()=>r,s:()=>m});var t=e(12255),a=e(86978);function r(s){if(!s)return null;const d=Object.entries(t.W.colors).filter(([,l])=>l.toUpperCase()===s.toUpperCase()).reduce((l,[o])=>(a.lv?.[o]&&(l=o),l),null);return d?{themeColorName:d,name:a.lv[d]}:null}function m(){return Object.entries(a.lv).map(([s,c])=>({hex:t.W.colors[s].toUpperCase(),name:c}))}}}]);