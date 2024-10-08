"use strict";(self.webpackChunkgame_tavern=self.webpackChunkgame_tavern||[]).push([[5905],{3500:(oe,O,n)=>{n.r(O),n.d(O,{default:()=>rt});var e=n(67294),C=n(90731),m=n(96987),B=n(12473),J=n(34726),g=n(16607),l=n(80621),R=n(83598),S=n(18226),M=n(2382),X=n(97695),K=n(27361),r=n.n(K),f=n(18721),T=n.n(f),b=n(18446),v=n.n(b),j=n(11700),z=n.n(j),F=n(86896),G=n(16550),Q=n(5923),ge=n(3547),fe=n(29299),_=n(69398),Z=n(10574),ke=n(38454),Be=n(45697),o=n.n(Be),H=n(27523),he=n(47558),x=n(90635),$=n(54863);const ye=$.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,l.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,l.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:s})=>a?`background-color: ${s.colors.primary200};`:t?`background-color: ${s.colors.primary200};`:`background: ${s.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ae({customRowComponent:t,component:a,isFromDynamicZone:s,isNestedInDZComponent:i,firstLoopComponentUid:p}){const{modifiedData:d}=(0,H.Z)(),{schema:{attributes:h}}=r()(d,["components",a],{schema:{attributes:[]}});return e.createElement(ye,{isChildOfDynamicZone:s,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(ve,{customRowComponent:t,items:h,targetUid:a,firstLoopComponentUid:p||a,editTarget:"components",isFromDynamicZone:s,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:p?a:null})))}ae.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ae.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ee=ae;var je=n(35771),Ie=n(85200),be=n(25237);function le({isActive:t,icon:a}){return e.createElement(m.k,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%"},e.createElement(Ie.J,{as:be.c[a]||be.c.cube,height:5,width:5}))}le.defaultProps={isActive:!1,icon:"Cube"},le.propTypes={isActive:o().bool,icon:o().string};const xe=(0,$.default)(g.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,l.pxToRem)(8)};

  svg {
    width: ${(0,l.pxToRem)(10)};
    height: ${(0,l.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Pe=(0,$.default)(m.k)`
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${xe} {
      display: block;
    }

    ${Z.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`;function re({component:t,dzName:a,index:s,isActive:i,isInDevelopmentMode:p,onClick:d}){const{modifiedData:h,removeComponentFromDynamicZone:I}=(0,H.Z)(),{schema:{icon:L,displayName:D}}=r()(h,["components",t],{schema:{}}),y=c=>{c.stopPropagation(),I(a,s)};return e.createElement(Pe,{alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:d,role:"tab",tabIndex:i?0:-1,cursor:"pointer","aria-selected":i,"aria-controls":`dz-${a}-panel-${s}`,id:`dz-${a}-tab-${s}`},e.createElement(le,{icon:L,isActive:i}),e.createElement(g.x,{marginTop:1,maxWidth:"100%"},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},D)),p&&e.createElement(xe,{as:"button",onClick:y},e.createElement(je.Z,null)))}re.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},re.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Fe=re,Ae=(0,$.default)(R.Z)`
  width: ${(0,l.pxToRem)(32)};
  height: ${(0,l.pxToRem)(32)};
  padding: ${(0,l.pxToRem)(9)};
  border-radius: ${(0,l.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,we=(0,$.default)(g.x)`
  height: ${(0,l.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,$.default)(m.k)`
  width: 100%;
  overflow-x: auto;
`,Se=(0,$.default)(g.x)`
  padding-top: ${(0,l.pxToRem)(90)};
`,Ue=(0,$.default)(m.k)`
  flex-shrink: 0;
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function se({customRowComponent:t,components:a,addComponent:s,name:i,targetUid:p}){const{isInDevelopmentMode:d}=(0,H.Z)(),[h,I]=(0,e.useState)(0),{formatMessage:L}=(0,F.Z)(),D=c=>{h!==c&&I(c)},y=()=>{s(i)};return e.createElement(ye,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(we,{paddingLeft:8},e.createElement(Oe,{gap:2},d&&e.createElement("button",{type:"button",onClick:y},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Ae,null),e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},L({id:(0,x.Z)("button.component.add"),formatMessage:"Add a component"})))),e.createElement(m.k,{role:"tablist",gap:2},a.map((c,u)=>e.createElement(Fe,{key:c,dzName:i,index:u,component:c,isActive:h===u,isInDevelopmentMode:d,onClick:()=>D(u)}))))),e.createElement(Se,null,a.map((c,u)=>{const E={customRowComponent:t,component:c};return e.createElement(g.x,{id:`dz-${i}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${i}-tab-${u}`,key:c,style:{display:h===u?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ee,{...E,isFromDynamicZone:!0,targetUid:p,key:c}))))}))))}se.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},se.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const We=se,ze=(0,$.default)(g.x)`
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
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Ne=(0,$.default)(g.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ce=({children:t,icon:a,color:s,...i})=>e.createElement(Ne,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i},e.createElement(m.k,null,e.createElement(ze,{color:s,"aria-hidden":!0,background:`${s}200`},a),e.createElement(g.x,{paddingLeft:3},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:`${s}600`},t))));Ce.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Ve=Ce,Ke=(0,$.default)(g.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;function ie({addComponentToDZ:t,customRowComponent:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:p,isMain:d,isNestedInDZComponent:h,isSub:I,items:L,secondLoopComponentUid:D,targetUid:y}){const{formatMessage:c}=(0,F.Z)(),{trackUsage:u}=(0,l.useTracking)(),{isInDevelopmentMode:E,modifiedData:N,isInContentTypeView:A}=(0,H.Z)(),{onOpenModalAddField:U}=(0,he.Z)(),P=()=>{u("hasClickedCTBAddFieldBanner"),U({forTarget:s,targetUid:y})};return y?L.length===0&&d?e.createElement(Q.i,{colCount:2,rowCount:2},e.createElement(ge.h,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{action:e.createElement(B.z,{onClick:P,size:"L",startIcon:e.createElement(R.Z,null),variant:"secondary"},c({id:(0,x.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:A?{id:(0,x.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,x.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ke,null,e.createElement(g.x,{paddingLeft:6,paddingRight:d?6:0,...d&&{style:{overflowX:"auto"}}},e.createElement("table",null,d&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,L.map(w=>{const{type:V}=w,Y=a;return e.createElement(e.Fragment,{key:w.name},e.createElement(Y,{...w,isNestedInDZComponent:h,targetUid:y,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:p,secondLoopComponentUid:D}),V==="component"&&e.createElement(Ee,{...w,customRowComponent:a,targetUid:y,isNestedInDZComponent:p,editTarget:s,firstLoopComponentUid:i}),V==="dynamiczone"&&e.createElement(We,{...w,customRowComponent:a,addComponent:t,targetUid:y}))})))),d&&E&&e.createElement(ke.c,{icon:e.createElement(R.Z,null),onClick:P},c({id:(0,x.Z)(`form.button.add.field.to.${N.contentType?N.contentType.schema.kind:s||"collectionType"}`),defaultMessage:"Add another field"})),I&&E&&e.createElement(Ve,{icon:e.createElement(R.Z,null),onClick:P,color:p?"primary":"neutral"},c({id:(0,x.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(Q.i,{colCount:2,rowCount:2},e.createElement(ge.h,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{colSpan:2,content:{id:(0,x.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ie.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ie.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const ve=ie;var Te=n(96208),He=n(54425),Je=n(46759);const Xe=(0,$.default)(g.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Ge=$.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Ze=t=>e.createElement(Xe,null,e.createElement(Ge,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ze.propTypes={color:o().string.isRequired};const Qe=Ze;var Ye=n(71243);const ce=({content:t})=>z()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const qe=ce,_e=(0,$.default)(g.x)`
  position: relative;
`,de=({type:t,customField:a,repeatable:s})=>{const{formatMessage:i}=(0,F.Z)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),a?e.createElement(Z.Z,null,i({id:(0,x.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(Z.Z,null,i({id:(0,x.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",s&&i({id:(0,x.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const et=de;function me({configurable:t,customField:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:p,name:d,onClick:h,relation:I,repeatable:L,secondLoopComponentUid:D,target:y,targetUid:c,type:u}){const{contentTypes:E,isInDevelopmentMode:N,removeAttribute:A}=(0,H.Z)(),{formatMessage:U}=(0,F.Z)(),P=u==="relation"&&I.includes("morph"),w=["integer","biginteger","float","decimal"].includes(u)?"number":u,V=r()(E,[y],{}),Y=r()(V,["schema","displayName"],""),q=r()(V,"plugin"),ue=y?"relation":w,ee=()=>{P||t!==!1&&h(s,D||i||c,d,u,a)};let W;return D&&i?W=2:i?W=1:W=0,e.createElement(_e,{as:"tr",...(0,l.onRowClick)({fn:ee,condition:N&&t&&!P})},e.createElement("td",{style:{position:"relative"}},W!==0&&e.createElement(Qe,{color:p?"primary200":"neutral150"}),e.createElement(m.k,{paddingLeft:2,gap:4},e.createElement(Ye.Z,{type:ue,customField:a}),e.createElement(Z.Z,{fontWeight:"bold"},d))),e.createElement("td",null,y?e.createElement(Z.Z,null,U({id:(0,x.Z)(`modelPage.attribute.${P?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${U({id:(0,x.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(et,{type:u,customField:a,repeatable:L})),e.createElement("td",null,N?e.createElement(m.k,{justifyContent:"flex-end",...l.stopPropagation},t?e.createElement(m.k,{gap:1},!P&&e.createElement(Te.h,{onClick:ee,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:e.createElement(M.Z,null)}),e.createElement(Te.h,{onClick:te=>{te.stopPropagation(),A(s,d,D||i||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:e.createElement(He.Z,null)})):e.createElement(Je.Z,null)):e.createElement(g.x,{height:(0,l.pxToRem)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const tt=(0,e.memo)(me),nt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var ot=n(24784);const at={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},pe=({disabled:t,isTemporary:a,isInContentTypeView:s,contentTypeKind:i,targetUid:p})=>{const{formatMessage:d}=(0,F.Z)(),{push:h}=(0,G.k6)(),{collectionTypesConfigurations:I,componentsConfigurations:L,singleTypesConfigurations:D}=at,y=d({id:"content-type-builder.form.button.configure-view"});let c=I;const u=()=>(a||h(s?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return s&&i==="singleType"&&(c=D),s||(c=L),e.createElement(l.CheckPermissions,{permissions:c},e.createElement(B.z,{startIcon:e.createElement(ot.Z,null),variant:"tertiary",onClick:u,disabled:a||t},y))};pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},pe.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const lt=(0,e.memo)(pe),rt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:s,isInContentTypeView:i,submitData:p}=(0,H.Z)(),{formatMessage:d}=(0,F.Z)(),{trackUsage:h}=(0,l.useTracking)(),I=(0,G.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:L,onOpenModalAddField:D,onOpenModalEditField:y,onOpenModalEditSchema:c,onOpenModalEditCustomField:u}=(0,he.Z)(),E=i?"contentType":"component",N=[E,"schema","attributes"],A=r()(a,[E,"uid"]),U=r()(a,[E,"isTemporary"],!1),P=r()(a,[E,"schema","kind"],null),w=r()(a,N,[]),V=T()(t,[E,"plugin"]),Y=!v()(a,t),q=i?"contentType":"component",ue=k=>{L({dynamicZoneTarget:k,targetUid:A})},ee=async(k,$e,Re,Me,De)=>{const Le=nt(Me);De?u({forTarget:k,targetUid:$e,attributeName:Re,attributeType:Le,customFieldUid:De}):y({forTarget:k,targetUid:$e,attributeName:Re,attributeType:Le,step:Me==="component"?"2":null})};let W=r()(a,[E,"schema","displayName"],"");const te=r()(a,[E,"schema","kind"],""),ne=I?.params.currentUID==="create-content-type";!W&&ne&&(W=d({id:(0,x.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const k=te||E;k==="collectionType"&&h("willEditNameOfContentType"),k==="singleType"&&h("willEditNameOfSingleType"),c({modalType:E,forTarget:E,targetUid:A,kind:k})};return e.createElement(e.Fragment,null,e.createElement(G.NL,{message:k=>k.hash==="#back"?!1:d({id:(0,x.Z)("prompt.unsaved")}),when:Y}),e.createElement(C.T,{id:"title",primaryAction:s&&e.createElement(m.k,{gap:2},!ne&&e.createElement(B.z,{startIcon:e.createElement(R.Z,null),variant:"secondary",onClick:()=>{D({forTarget:q,targetUid:A})}},d({id:(0,x.Z)("button.attributes.add.another")})),e.createElement(B.z,{startIcon:e.createElement(S.Z,null),onClick:()=>p(),type:"submit",disabled:v()(a,t)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:s&&!V&&!ne&&e.createElement(B.z,{startIcon:e.createElement(M.Z,null),variant:"tertiary",onClick:st},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:z()(W),subtitle:d({id:(0,x.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(l.Link,{startIcon:e.createElement(X.Z,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),e.createElement(J.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{gap:2},e.createElement(lt,{key:"link-to-cm-settings-view",targetUid:A,isTemporary:U,isInContentTypeView:i,contentTypeKind:P,disabled:ne}))),e.createElement(g.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(ve,{items:w,customRowComponent:k=>e.createElement(tt,{...k,onClick:ee}),addComponentToDZ:ue,targetUid:A,editTarget:q,isMain:!0})))))}},34726:(oe,O,n)=>{n.d(O,{D:()=>m});var e=n(85893),C=n(16607);const m=({children:B})=>(0,e.jsx)(C.x,{paddingLeft:10,paddingRight:10,children:B})},90731:(oe,O,n)=>{n.d(O,{T:()=>M});var e=n(85893),C=n(67294),m=n(54863);const B=r=>{const f=(0,C.useRef)(null),[T,b]=(0,C.useState)(!0),v=([j])=>{b(j.isIntersecting)};return(0,C.useEffect)(()=>{const j=f.current,z=new IntersectionObserver(v,r);return j&&z.observe(f.current),()=>{j&&z.disconnect()}},[f,r]),[f,T]};var J=n(79698);const g=(r,f)=>{const T=(0,J.W)(f);(0,C.useLayoutEffect)(()=>{const b=new ResizeObserver(T);return Array.isArray(r)?r.forEach(v=>{v.current&&b.observe(v.current)}):r.current&&b.observe(r.current),()=>{b.disconnect()}},[r,T])};var l=n(16607),R=n(96987),S=n(10574);const M=r=>{const f=(0,C.useRef)(null),[T,b]=(0,C.useState)(null),[v,j]=B({root:null,rootMargin:"0px",threshold:0});return g(v,()=>{v.current&&b(v.current.getBoundingClientRect())}),(0,C.useEffect)(()=>{f.current&&b(f.current.getBoundingClientRect())},[f]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:T?.height},ref:v,children:j&&(0,e.jsx)(K,{ref:f,...r})}),!j&&(0,e.jsx)(K,{...r,sticky:!0,width:T?.width})]})};M.displayName="HeaderLayout";const X=(0,m.default)(l.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,K=C.forwardRef(({navigationAction:r,primaryAction:f,secondaryAction:T,subtitle:b,title:v,sticky:j,width:z,...F},G)=>{const Q=typeof b=="string";return j?(0,e.jsx)(X,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{children:[r&&(0,e.jsx)(l.x,{paddingRight:3,children:r}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(S.Z,{variant:"beta",as:"h1",...F,children:v}),Q?(0,e.jsx)(S.Z,{variant:"pi",textColor:"neutral600",children:b}):b]}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),(0,e.jsx)(R.k,{children:f?(0,e.jsx)(l.x,{paddingLeft:2,children:f}):void 0})]})}):(0,e.jsxs)(l.x,{ref:G,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(l.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{minWidth:0,children:[(0,e.jsx)(S.Z,{as:"h1",variant:"alpha",...F,children:v}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),f]}),Q?(0,e.jsx)(S.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},38454:(oe,O,n)=>{n.d(O,{c:()=>S});var e=n(85893),C=n(54863),m=n(16607),B=n(26910),J=n(96987),g=n(10574);const l=(0,C.default)(m.x)`
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
    fill: ${({theme:M})=>M.colors.primary600};
  }
`,R=(0,C.default)(m.x)`
  border-radius: 0 0 ${({theme:M})=>M.borderRadius} ${({theme:M})=>M.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,S=({children:M,icon:X,...K})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(B.i,{}),(0,e.jsx)(R,{as:"button",background:"primary100",padding:5,...K,children:(0,e.jsxs)(J.k,{children:[(0,e.jsx)(l,{"aria-hidden":!0,background:"primary200",children:X}),(0,e.jsx)(m.x,{paddingLeft:3,children:(0,e.jsx)(g.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:M})})]})})]})}}]);
