"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4597],{75158:function(e,t,o){o.d(t,{Z:function(){return S}});var r=o(63366),n=o(87462),i=o(67294),s=o(86010),a=o(94780),l=o(41796),c=o(37743),d=o(54235),u=o(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=o(36622),v=o(78884),Z=o(67074),f=o(1588),j=o(34867);function g(e){return(0,j.Z)("MuiCheckbox",e)}let b=(0,f.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),D=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],k=e=>{let{classes:t,indeterminate:o,color:r}=e,i={root:["root",o&&"indeterminate",`color${(0,h.Z)(r)}`]},s=(0,a.Z)(i,g,t);return(0,n.Z)({},t,s)},y=(0,Z.ZP)(c.Z,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,h.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,u.jsx)(x,{}),P=(0,u.jsx)(m,{}),w=(0,u.jsx)(p,{}),I=i.forwardRef(function(e,t){var o,a;let l=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:m=P,indeterminate:x=!1,indeterminateIcon:p=w,inputProps:h,size:Z="medium",className:f}=l,j=(0,r.Z)(l,D),g=x?p:m,b=x?p:c,I=(0,n.Z)({},l,{color:d,indeterminate:x,size:Z}),S=k(I);return(0,u.jsx)(y,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":x},h),icon:i.cloneElement(g,{fontSize:null!=(o=g.props.fontSize)?o:Z}),checkedIcon:i.cloneElement(b,{fontSize:null!=(a=b.props.fontSize)?a:Z}),ownerState:I,ref:t,className:(0,s.Z)(S.root,f)},j,{classes:S}))});var S=I},74597:function(e,t,o){o.d(t,{Z:function(){return E}});var r=o(85893),n=o(11163),i=o.n(n),s=o(67294),a=o(60565),l=o(40039),c=o(60664),d=o(49837),u=o(91359),m=o(79072),x=o(29630),p=o(75084),h=o(21609),v=o(87536),Z=o(86501),f=o(45061),j=o(46749),g=o(89191),b=o(84220),D=o(29308),k=o(61953),y=o(22841),C=o(75158);let P=e=>{let{xs:t,md:o,title:n,index:i,name:s,typePage:a,value:l,register:c}=e;return(0,r.jsx)(m.ZP,{item:!0,xs:t,md:o,children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)(x.Z,{variant:"caption",children:i&&0!=i?"":n}),(0,r.jsx)(y.Z,{control:(0,r.jsx)(C.Z,{sx:{ml:4},...c(s),defaultChecked:l||"new"==a})})]})})};var w=o(72389),I=o(80562);let S=e=>{let{xs:t,md:o,title:n,removeItem:i,item:s,pending:a,index:l,textSuccess:c,textError:d}=e;return c=c||"Remover este item",d=d||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,r.jsx)(m.ZP,{item:!0,xs:t,md:o,children:(0,r.jsxs)(k.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(x.Z,{variant:"caption",children:l&&0!=l?"":n}),(0,r.jsx)(w.Z,{title:1==a?d:c,children:(0,r.jsx)(I.Z,{color:"error",onClick(){1!=a&&i(s,l)},sx:{opacity:1==a?.5:1,cursor:1==a?"default":"pointer"},children:(0,r.jsx)(h.Z,{icon:"tabler:trash-filled"})})})]})})},z=()=>{var e,t,o,n;let{id:k}=i().query,y=i(),[C,w]=(0,s.useState)(null),[I,z]=(0,s.useState)(!1),E=(0,j.Lo)(y.pathname),O=(0,j.g_)(y.pathname),{title:M}=(0,s.useContext)(a.f),{loggedUnity:R}=(0,s.useContext)(l.V),[q,N]=(0,s.useState)(!1),[$,F]=(0,s.useState)([]),{trigger:V,handleSubmit:H,setValue:_,reset:B,formState:{errors:L},register:T}=(0,v.cI)(),A=async()=>{try{let e="new"===E?"".concat(O,"/new/getData"):"".concat(O,"/getData/").concat(k);console.log("\uD83D\uDE80 ~ route:",e),await c.h.post(e,{unidadeID:R.unidadeID}).then(e=>{w(e.data),B(e.data),console.log("\uD83D\uDE80 ~ getData:",e.data)})}catch(t){console.log(t)}},U=()=>{let e={...C};e.items.push({nome:"",descricao:"",status:!0,obrigatorio:!0}),w(e)},G=(e,t)=>{if(1===C.items.length){Z.ZP.error("\xc9 necess\xe1rio ter pelo menos um item!");return}e.id&&F([...$,e.id]);let o=[...C.items];o.splice(t,1),w({...C,items:o}),_("items",o)},J=async e=>{e.removedItems=$,e.unidade=R.unidadeID;try{"new"===E?await c.h.post("".concat(O,"/new/insertData"),e).then(e=>{y.push("".concat(O,"/").concat(e.data)),Z.ZP.success(j.OD.successNew)}):"edit"===E&&(await c.h.post("".concat(O,"/updateData/").concat(k),e),Z.ZP.success(j.OD.successUpdate)),N(!q)}catch(t){t.response&&409===t.response.status?Z.ZP.error(j.OD.errorRepeated):console.log(t)}},K=async()=>{try{await c.h.delete("".concat(O,"/deleteData/").concat(k)),y.push(O),Z.ZP.success(j.OD.successDelete)}catch(e){e.response&&409===e.response.status?(Z.ZP.error(j.OD.pendingDelete),z(!1)):console.log(e)}};return(0,s.useEffect)(()=>{A(),"new"===E&&setTimeout(()=>{V()},300)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{onSubmit:H(J),children:[(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(g.Z,{btnCancel:!0,btnSave:!0,btnDelete:"edit"===E,onclickDelete:()=>z(!0)}),C&&(0,r.jsx)(u.Z,{children:(0,r.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(D.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,register:T,errors:null==L?void 0:null===(e=L.fields)||void 0===e?void 0:e.nome}),(0,r.jsx)(P,{xs:12,md:1,title:"Ativo",name:"fields.status",value:C.fields.status,typePage:E,register:T}),(0,r.jsx)(b.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null!==(n=null==C?void 0:C.formulario.fields)&&void 0!==n?n:null,multiple:!0,limitTags:5,required:!0,options:C.formulario.options,register:T,setValue:_,errors:null==L?void 0:null===(t=L.formulario)||void 0===t?void 0:t.fields})]})})]}),(0,r.jsx)(d.Z,{sx:{mt:4},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(x.Z,{sx:{mb:5},children:"Itens"}),(0,r.jsx)(m.ZP,{container:!0,spacing:3,children:C&&(null==C?void 0:null===(o=C.items)||void 0===o?void 0:o.map((e,t)=>{var o,n,i,s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.Z,{xs:12,md:3,title:"Nome",name:"items[".concat(t,"].nome"),required:!0,register:T,errors:null==L?void 0:null===(o=L.items)||void 0===o?void 0:null===(n=o[t])||void 0===n?void 0:n.nome}),(0,r.jsx)(D.Z,{xs:12,md:6,title:"Descri\xe7\xe3o",name:"items[".concat(t,"].descricao"),required:!1,register:T,errors:null==L?void 0:null===(i=L.items)||void 0===i?void 0:null===(s=i[t])||void 0===s?void 0:s.descricao}),(0,r.jsx)(P,{xs:12,md:1,title:"Obrigat\xf3rio",index:t,name:"items[".concat(t,"].obrigatorio"),value:e.obrigatorio,typePage:E,register:T}),(0,r.jsx)(P,{xs:12,md:1,title:"Status",index:t,name:"items[".concat(t,"].status"),value:e.status,typePage:E,register:T}),(0,r.jsx)(S,{xs:12,md:1,title:"Remover",index:t,removeItem:G,item:e,pending:e.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois possui anexo vinculado a ele"})]})}))}),(0,r.jsx)(p.Z,{variant:"outlined",color:"primary",sx:{mt:4},startIcon:(0,r.jsx)(h.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){U()},children:"Inserir item"})]})})]}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+M,openModal:I,handleClose:()=>z(!1),handleSubmit:K,btnCancel:!0,btnConfirm:!0})]})};var E=z}}]);