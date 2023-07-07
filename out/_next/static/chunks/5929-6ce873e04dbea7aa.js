"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5929],{75158:function(e,t,r){r.d(t,{Z:function(){return S}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),l=r(94780),s=r(41796),c=r(37743),d=r(54235),u=r(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=r(36622),x=r(78884),v=r(67074),b=r(1588),j=r(34867);function Z(e){return(0,j.Z)("MuiCheckbox",e)}let y=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=e=>{let{classes:t,indeterminate:r,color:n}=e,i={root:["root",r&&"indeterminate",`color${(0,f.Z)(n)}`]},a=(0,l.Z)(i,Z,t);return(0,o.Z)({},t,a)},k=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,f.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),w=(0,u.jsx)(p,{}),z=(0,u.jsx)(m,{}),I=(0,u.jsx)(h,{}),P=i.forwardRef(function(e,t){var r,l;let s=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=w,color:d="primary",icon:m=z,indeterminate:p=!1,indeterminateIcon:h=I,inputProps:f,size:v="medium",className:b}=s,j=(0,n.Z)(s,g),Z=p?h:m,y=p?h:c,P=(0,o.Z)({},s,{color:d,indeterminate:p,size:v}),S=C(P);return(0,u.jsx)(k,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":p},f),icon:i.cloneElement(Z,{fontSize:null!=(r=Z.props.fontSize)?r:v}),checkedIcon:i.cloneElement(y,{fontSize:null!=(l=y.props.fontSize)?l:v}),ownerState:P,ref:t,className:(0,a.Z)(S.root,b)},j,{classes:S}))});var S=P},65929:function(e,t,r){var n=r(85893),o=r(11163),i=r.n(o),a=r(67294),l=r(60664),s=r(49837),c=r(91359),d=r(79072),u=r(55343),m=r(67836),p=r(22841),h=r(75158),f=r(74231),x=r(87536),v=r(47533),b=r(32631),j=r(86501),Z=r(45061),y=r(46749),g=r(89191),C=r(60565);let k=()=>{let[e,t]=(0,a.useState)(!1),{id:r}=i().query,o=i(),k=(0,y.Lo)(o.pathname),w=(0,y.g_)(o.pathname),z=(0,a.useRef)(null),{title:I}=(0,a.useContext)(C.f),P=f.Ry().shape({nome:f.Z_().required("Campo obrigat\xf3rio")}),{control:S,handleSubmit:E,formState:{errors:V},reset:N}=(0,x.cI)({resolver:(0,v.X)(P)}),O=async e=>{try{"new"===k?(await l.h.post("".concat(w,"/novo"),e),o.push(w),j.ZP.success(y.OD.successNew),N(e)):"edit"===k&&(await l.h.put("".concat(w,"/").concat(r),e),j.ZP.success(y.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?j.ZP.error(y.OD.errorRepeated):console.log(t)}},D=async()=>{try{await l.h.delete("".concat(w,"/").concat(r)),o.push(w),j.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(j.ZP.error(y.OD.pendingDelete),t(!1)):console.log(e)}};return(0,a.useEffect)(()=>{if(r){if("new"===k)z.current.focus();else{let e=async()=>{try{let e=await l.h.get("".concat(w,"/").concat(r));N(e.data)}catch(t){console.log(t)}};e()}}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsxs)("form",{onSubmit:E(O),children:[(0,n.jsx)(g.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(V).length>0,handleSubmit:()=>E(O),btnDelete:"edit"===k,onclickDelete:()=>t(!0)}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(d.ZP,{item:!0,xs:12,md:11,children:(0,n.jsxs)(u.Z,{fullWidth:!0,children:[(0,n.jsx)(x.Qr,{name:"nome",control:S,render(e){let{field:{value:t,onChange:r}}=e;return(0,n.jsx)(m.Z,{value:null!=t?t:"",label:"Nome",onChange:r,placeholder:"Nome",error:Boolean(V.nome),"aria-describedby":"validation-schema-nome",inputRef:z})}}),V.nome&&(0,n.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:V.nome.message})]})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(x.Qr,{name:"status",control:S,rules:{required:!1},render(e){let{field:{value:t,onChange:r}}=e;return(0,n.jsx)(p.Z,{control:(0,n.jsx)(h.Z,{checked:"new"===k||null!=t&&t,onChange:r}),label:"Ativo",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,n.jsx)(Z.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+I,openModal:e,handleClose:()=>t(!1),handleSubmit:D,btnCancel:!0,btnConfirm:!0})]})};t.Z=k},45061:function(e,t,r){var n=r(85893),o=r(75084),i=r(29620),a=r(77745),l=r(95398),s=r(76779),c=r(44642);r(21609);var d=r(19604),u=r(29630),m=r(55343),p=r(67836),h=r(67294),f=r(82747);let x=e=>{let{title:t,text:r,handleClose:x,openModal:v,handleSubmit:b,cnpj:j,inputEmail:Z,btnCancel:y,btnConfirm:g,btnCancelColor:C,btnConfirmColor:k,closeAfterSave:w,listErrors:z}=e,[I,P]=(0,h.useState)(null),[S,E]=(0,h.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&x()},children:[(0,n.jsx)(a.Z,{id:"form-dialog-title",children:t}),(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{sx:{mb:3},children:[r,z&&z.status&&(0,n.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,n.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:z.errors.map((e,t)=>(0,n.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),Z&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(p.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==I?void 0:I.length)>0&&S,inputProps:{onChange(e){P(e.target.value),E(!(0,f.dI)(e.target.value))}}}),(null==I?void 0:I.length)>0&&S&&(0,n.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(s.Z,{className:"dialog-actions-dense",children:[y&&(0,n.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:x,children:"Cancelar"}),g&&(0,n.jsx)(o.Z,{variant:"contained",disabled:Z&&(null==I?void 0:I.length)>0&&S||z&&z.status,color:k||"error",onClick:Z&&j?()=>{b(j,I),P(null),w&&x()}:Z&&!j?()=>{b(I),P(null),w&&x()}:()=>{b(),w&&x()},children:"Confirmar"})]})]})})};t.Z=x},89191:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(85893),o=r(11163),i=r.n(o),a=r(67294),l=r(91359),s=r(61953),c=r(75084),d=r(72389),u=r(41664),m=r.n(u),p=r(21609),h=r(46749),f=r(73812),x=r(86378),v=r(9942);function b(e){let{disabled:t,dataReports:r,open:o,anchorEl:i,handleClick:a,handleClose:l,generateReport:s}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(f.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:o,onClose:l,TransitionComponent:v.Z,children:r.map(e=>(0,n.jsxs)(x.Z,{onClick(){l(),s(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}r(60565);var j=r(40039),Z=r(10160);let y=e=>{let{btnCancel:t,btnSave:r,btnSend:o,btnStatus:u,handleSubmit:f,disabledSubmit:x,handleSend:v,disabledSend:y,handleBtnStatus:g,btnDelete:C,onclickDelete:k,btnPrint:w,disabledPrint:z,disabled:I,dataReports:P,generateReport:S}=e,E=i(),{user:V,routes:N}=(0,a.useContext)(j.V),[O,D]=(0,a.useState)(!1),[F,M]=(0,a.useState)(null),R=Boolean(F),$=e=>{M(e.currentTarget)},_=()=>{M(null)},q=(()=>{let e=E.pathname.split("/").slice(0,-1).join("/");return e||E.pathname})(),B=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=()=>{window.history.back()};return(0,a.useEffect)(()=>{let e=()=>{D(!1),window.scrollY>0?D(!0):D(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,n.jsx)(m(),{href:(0,h.g_)(E.pathname),children:(0,n.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(p.Z,{icon:"material-symbols:arrow-back-rounded"})})}),C&&N.find(e=>e.rota===q&&e.excluir)&&(0,n.jsx)(c.Z,{type:"button",onClick:k,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),u&&(0,n.jsx)(c.Z,{type:"button",onClick:g,variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(p.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,n.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[w&&1===P.length&&(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":R?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:()=>S(P[0]),color:"primary",disabled:I||z,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),w&&P.length>1&&(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":R?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:$,color:"primary",disabled:I||z,variant:"outlined",size:"medium",type:"button",sx:{mr:0},startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(b,{generateReport:S,dataReports:P,handleClick:$,handleClose:_,open:R,anchorEl:F})]}),r&&N.find(e=>e.rota===q&&e.editar)&&(0,n.jsx)(c.Z,{onClick:f,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:I||x,startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:save"}),children:"Salvar"}),o&&(0,n.jsx)(c.Z,{onClick:v,type:"button",variant:"contained",size:"medium",color:"primary",disabled:I||y,startIcon:(0,n.jsx)(p.Z,{icon:"carbon:send-filled"}),children:"Concluir Formul\xe1rio"}),(0,n.jsx)("div",{className:"\n                        ".concat(O?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:I||x,icon:"material-symbols:save",function:f},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:I||z,icon:"material-symbols:print",function:$},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"ion:arrow-up",function:B},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:arrow-back-rounded",function:L}].map(e=>(1!==e.id||r&&N.find(e=>e.rota===q&&e.editar))&&(2!==e.id||w)?(0,n.jsx)(d.Z,{title:e.title,placement:"left",children:(0,n.jsx)("div",{children:(0,n.jsx)(Z.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:(0,n.jsx)(p.Z,{icon:e.icon})})},e.id)},e.id):null)})]})]})})};var g=y},82747:function(e,t,r){function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),o=0,i=t-7;for(let a=t;a>=1;a--)o+=r.charAt(t-a)*i--,i<2&&(i=9);let l=o%11<2?0:11-o%11;if(l!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),o=0,i=t-7;for(let s=t;s>=1;s--)o+=r.charAt(t-s)*i--,i<2&&(i=9);return(l=o%11<2?0:11-o%11)==n.charAt(1)}function o(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let o=1;o<=10;o++)r+=parseInt(e.substring(o-1,o))*(12-o);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return i},sw:function(){return o},zk:function(){return n}})},47533:function(e,t,r){r.d(t,{X:function(){return l}});var n=r(87536),o=function(e,t,r){if(e&&"reportValidity"in e){var o=(0,n.U2)(r,t);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},i=function(e,t){var r=function(r){var n=t.fields[r];n&&n.ref&&"reportValidity"in n.ref?o(n.ref,r,e):n.refs&&n.refs.forEach(function(t){return o(t,r,e)})};for(var n in t.fields)r(n)},a=function(e,t){t.shouldUseNativeValidation&&i(e,t);var r={};for(var o in e){var a=(0,n.U2)(t.fields,o);(0,n.t8)(r,o,Object.assign(e[o],{ref:a&&a.ref}))}return r},l=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(o,l,s){try{return Promise.resolve(function(n,a){try{var c=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},t,{context:l}))).then(function(e){return s.shouldUseNativeValidation&&i({},s),{values:r.rawValues?o:e,errors:{}}}))}catch(d){return a(d)}return c&&c.then?c.then(void 0,a):c}(0,function(e){var t;if(!e.inner)throw e;return{values:{},errors:a((t=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(e.inner||[]).reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var o=e[r.path].types,i=o&&o[r.type];e[r.path]=(0,n.KN)(r.path,t,e,r.type,i?[].concat(i,r.message):r.message)}return e},{})),s)}}))}catch(c){return Promise.reject(c)}}}}}]);