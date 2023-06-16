"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{75158:function(e,r,t){t.d(r,{Z:function(){return z}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(94780),l=t(41796),c=t(37743),d=t(54235),u=t(85893),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(36622),v=t(78884),x=t(67074),b=t(1588),Z=t(34867);function g(e){return(0,Z.Z)("MuiCheckbox",e)}let j=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=e=>{let{classes:r,indeterminate:t,color:n}=e,a={root:["root",t&&"indeterminate",`color${(0,p.Z)(n)}`]},i=(0,s.Z)(a,g,r);return(0,o.Z)({},r,i)},k=(0,x.ZP)(c.Z,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r[`color${(0,p.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),P=(0,u.jsx)(m,{}),w=(0,u.jsx)(h,{}),S=(0,u.jsx)(f,{}),V=a.forwardRef(function(e,r){var t,s;let l=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=P,color:d="primary",icon:h=w,indeterminate:m=!1,indeterminateIcon:f=S,inputProps:p,size:x="medium",className:b}=l,Z=(0,n.Z)(l,y),g=m?f:h,j=m?f:c,V=(0,o.Z)({},l,{color:d,indeterminate:m,size:x}),z=C(V);return(0,u.jsx)(k,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},p),icon:a.cloneElement(g,{fontSize:null!=(t=g.props.fontSize)?t:x}),checkedIcon:a.cloneElement(j,{fontSize:null!=(s=j.props.fontSize)?s:x}),ownerState:V,ref:r,className:(0,i.Z)(z.root,b)},Z,{classes:z}))});var z=V},39015:function(e,r,t){var n=t(85893),o=t(11163),a=t.n(o),i=t(67294),s=t(60664),l=t(49837),c=t(91359),d=t(79072),u=t(55343),h=t(67836),m=t(22841),f=t(75158),p=t(74231),v=t(87536),x=t(47533),b=t(32631),Z=t(86501),g=t(45061),j=t(46749),y=t(89191),C=t(60565);let k=()=>{let[e,r]=(0,i.useState)(!1),{id:t}=a().query,o=a(),k=(0,j.Lo)(o.pathname),P=(0,j.g_)(o.pathname),w=(0,i.useRef)(null),{title:S}=(0,i.useContext)(C.f),V=p.Ry().shape({nome:p.Z_().required("Campo obrigat\xf3rio")}),{control:z,handleSubmit:I,formState:{errors:N},reset:O}=(0,v.cI)({resolver:(0,x.X)(V)}),E=async e=>{try{"new"===k?(await s.h.post("".concat(P,"/novo"),e),o.push(P),Z.ZP.success(j.OD.successNew),O(e)):"edit"===k&&(await s.h.put("".concat(P,"/").concat(t),e),Z.ZP.success(j.OD.successUpdate),console.log("editado"))}catch(r){r.response&&409===r.response.status?Z.ZP.error(j.OD.errorRepeated):console.log(r)}},D=async()=>{try{await s.h.delete("".concat(P,"/").concat(t)),o.push(P),Z.ZP.success(j.OD.successDelete)}catch(e){e.response&&409===e.response.status?(Z.ZP.error(j.OD.pendingDelete),r(!1)):console.log(e)}};return(0,i.useEffect)(()=>{if("new"===k)w.current.focus();else{let e=async()=>{try{let e=await s.h.get("".concat(P,"/").concat(t));O(e.data)}catch(r){console.log(r)}};e()}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{children:(0,n.jsxs)("form",{onSubmit:I(E),children:[(0,n.jsx)(y.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(N).length>0,handleSubmit:()=>I(E),btnDelete:"edit"===k,onclickDelete:()=>r(!0)}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(d.ZP,{item:!0,xs:12,md:11,children:(0,n.jsxs)(u.Z,{fullWidth:!0,children:[(0,n.jsx)(v.Qr,{name:"nome",control:z,render(e){let{field:{value:r,onChange:t}}=e;return(0,n.jsx)(h.Z,{value:null!=r?r:"",label:"Nome",onChange:t,placeholder:"Nome",error:Boolean(N.nome),"aria-describedby":"validation-schema-nome",inputRef:w})}}),N.nome&&(0,n.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:N.nome.message})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(v.Qr,{name:"status",control:z,rules:{required:!1},render(e){let{field:{value:r,onChange:t}}=e;return(0,n.jsx)(m.Z,{control:(0,n.jsx)(f.Z,{checked:"new"===k||null!=r&&r,onChange:t}),label:"Status",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,n.jsx)(g.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S,openModal:e,handleClose:()=>r(!1),handleSubmit:D,btnCancel:!0,btnConfirm:!0})]})};r.Z=k},45061:function(e,r,t){var n=t(85893),o=t(75084),a=t(29620),i=t(77745),s=t(95398),l=t(76779),c=t(44642);t(21609);var d=t(19604),u=t(29630),h=t(55343),m=t(67836),f=t(67294),p=t(82747);let v=e=>{let{title:r,text:t,handleClose:v,openModal:x,handleSubmit:b,cnpj:Z,inputEmail:g,btnCancel:j,btnConfirm:y,btnCancelColor:C,btnConfirmColor:k,closeAfterSave:P,listErrors:w}=e,[S,V]=(0,f.useState)(null),[z,I]=(0,f.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{open:x,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&v()},children:[(0,n.jsx)(i.Z,{id:"form-dialog-title",children:r}),(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(c.Z,{sx:{mb:3},children:[t,w&&w.status&&(0,n.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,n.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:w.errors.map((e,r)=>(0,n.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),g&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==S?void 0:S.length)>0&&z,inputProps:{onChange(e){V(e.target.value),I(!(0,p.dI)(e.target.value))}}}),(null==S?void 0:S.length)>0&&z&&(0,n.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(l.Z,{className:"dialog-actions-dense",children:[j&&(0,n.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:v,children:"Cancelar"}),y&&(0,n.jsx)(o.Z,{variant:"contained",disabled:g&&(null==S?void 0:S.length)>0&&z||w&&w.status,color:k||"error",onClick:g&&Z?()=>{b(Z,S),V(null),P&&v()}:g&&!Z?()=>{b(S),V(null),P&&v()}:()=>{b(),P&&v()},children:"Confirmar"})]})]})})};r.Z=v},82747:function(e,r,t){function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,t=e.substring(0,r),n=e.substring(r),o=0,a=r-7;for(let i=r;i>=1;i--)o+=t.charAt(r-i)*a--,a<2&&(a=9);let s=o%11<2?0:11-o%11;if(s!=n.charAt(0))return!1;r+=1,t=e.substring(0,r),o=0,a=r-7;for(let l=r;l>=1;l--)o+=t.charAt(r-l)*a--,a<2&&(a=9);return(s=o%11<2?0:11-o%11)==n.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let n=1;n<=9;n++)t+=parseInt(e.substring(n-1,n))*(11-n);if((10==(r=10*t%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;t=0;for(let o=1;o<=10;o++)t+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*t%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(r,{dI:function(){return a},sw:function(){return o},zk:function(){return n}})},47533:function(e,r,t){t.d(r,{X:function(){return s}});var n=t(87536),o=function(e,r,t){if(e&&"reportValidity"in e){var o=(0,n.U2)(t,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},a=function(e,r){var t=function(t){var n=r.fields[t];n&&n.ref&&"reportValidity"in n.ref?o(n.ref,t,e):n.refs&&n.refs.forEach(function(r){return o(r,t,e)})};for(var n in r.fields)t(n)},i=function(e,r){r.shouldUseNativeValidation&&a(e,r);var t={};for(var o in e){var i=(0,n.U2)(r.fields,o);(0,n.t8)(t,o,Object.assign(e[o],{ref:i&&i.ref}))}return t},s=function(e,r,t){return void 0===r&&(r={}),void 0===t&&(t={}),function(o,s,l){try{return Promise.resolve(function(n,i){try{var c=(r.context,Promise.resolve(e["sync"===t.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:s}))).then(function(e){return l.shouldUseNativeValidation&&a({},l),{values:t.rawValues?o:e,errors:{}}}))}catch(d){return i(d)}return c&&c.then?c.then(void 0,i):c}(0,function(e){var r;if(!e.inner)throw e;return{values:{},errors:i((r=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var o=e[t.path].types,a=o&&o[t.type];e[t.path]=(0,n.KN)(t.path,r,e,t.type,a?[].concat(a,t.message):t.message)}return e},{})),l)}}))}catch(c){return Promise.reject(c)}}}}}]);