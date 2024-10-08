"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[8936],{36318:(fe,y,t)=>{t.r(y),t.d(y,{default:()=>Q});var e=t(67294),i=t(80621),u=t(86706),P=t(36364),x=t(12473),m=t(96987),O=t(74863),E=t(10574),V=t(18226),d=t(41054),N=t(36968),X=t.n(N),Z=t(86896),z=t(88767),B=t(16550),Y=t(92686),j=t(79194),J=t(75021),k=t(11984),g=t(43390),c=t(38705),G=t(68997),H=t(85230),n=t(86978),U=t(52258),C=t(3848),$=t(66578);function K(){const{formatMessage:s}=(0,Z.Z)(),{post:b}=(0,i.useFetchClient)(),{push:q}=(0,B.k6)(),{formatAPIError:_}=(0,i.useAPIErrorHandler)(),w=(0,u.useDispatch)(),S=(0,i.useNotification)(),{collectionTypes:ee,singleTypes:te,isLoading:oe}=(0,Y.G)(),{isLoading:M,meta:v,workflows:T}=(0,U.n)(),{clientState:{currentWorkflow:{data:l,isDirty:se}}}=(0,u.useSelector)(o=>o?.[n.sN]??C.E),[L,f]=e.useState(!1),{isLoading:I,getFeature:ne}=(0,J.q)(),[ae,le]=e.useState(null),[W,h]=e.useState({}),a=ne("review-workflows"),D=T.flatMap(o=>o.contentTypes),{mutateAsync:re,isLoading:A}=(0,z.useMutation)(async({workflow:o})=>{const{data:{data:r}}=await b("/admin/review-workflows/workflows",{data:o});return r},{onSuccess(){S({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}})}}),F=async()=>{h({});try{const o=await re({workflow:l});return q(`/settings/review-workflows/${o.id}`),o}catch(o){return o.response.data?.error?.name==="ValidationError"&&o.response.data?.error?.details?.errors?.length>0&&le(o.response.data?.error?.details?.errors.reduce((r,R)=>(X()(r,R.path,R.message),r),{})),S({type:"warning",message:_(o)}),null}},ie=async()=>{await F()},ce=()=>{h({})},p=(0,d.useFormik)({enableReinitialize:!0,initialErrors:ae,initialValues:l,async onSubmit(){const o=l.contentTypes.some(r=>D.includes(r));a?.[n.Ef]&&v?.workflowCount>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)?f("stage"):o?h(r=>({...r,hasReassignedContentTypes:!0})):F()},validate(o){return(0,$.V)({values:o,formatMessage:s})}});return(0,j.v)(n.sN,C.I),e.useEffect(()=>{w((0,k.Js)()),w((0,k.CI)({name:""}))},[w]),e.useEffect(()=>{!M&&!I&&(a?.[n.Ef]&&v?.workflowsTotal>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)&&f("stage"))},[I,M,a,v?.workflowsTotal,l.stages.length]),e.createElement(e.Fragment,null,e.createElement(g.lx,null),e.createElement(d.FormikProvider,{value:p},e.createElement(d.Form,{onSubmit:p.handleSubmit},e.createElement(g.h4,{navigationAction:e.createElement(g.eJ,{href:"/settings/review-workflows"}),primaryAction:e.createElement(x.z,{startIcon:e.createElement(V.Z,null),type:"submit",size:"M",disabled:!se,isLoading:A},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:s({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l?.stages?.length??0})}),e.createElement(g.fC,null,e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},oe?e.createElement(O.a,null,s({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})):e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(H.Y,{contentTypes:{collectionTypes:ee,singleTypes:te},workflows:T}),e.createElement(G.U,{stages:p.values?.stages})))))),e.createElement(i.ConfirmDialog.Root,{isConfirmButtonLoading:A,isOpen:Object.keys(W).length>0,onToggleDialog:ce,onConfirm:ie},e.createElement(i.ConfirmDialog.Body,null,e.createElement(m.k,{direction:"column",gap:5},W.hasReassignedContentTypes&&e.createElement(E.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:D.filter(o=>l.contentTypes.includes(o)).length})),e.createElement(E.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(c.fC,{isOpen:L==="workflow",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(c.fC,{isOpen:L==="stage",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function Q(){const s=(0,u.useSelector)(P._);return e.createElement(i.CheckPagePermissions,{permissions:s.settings["review-workflows"].create},e.createElement(K,null))}}}]);
