"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7415],{75158:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),l=r(94780),s=r(41796),c=r(37743),d=r(54235),u=r(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=r(36622),x=r(78884),v=r(67074),b=r(1588),j=r(34867);function y(e){return(0,j.Z)("MuiCheckbox",e)}let Z=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=e=>{let{classes:t,indeterminate:r,color:n}=e,a={root:["root",r&&"indeterminate",`color${(0,f.Z)(n)}`]},i=(0,l.Z)(a,y,t);return(0,o.Z)({},t,i)},w=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,f.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${Z.checked}, &.${Z.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),k=(0,u.jsx)(m,{}),z=(0,u.jsx)(p,{}),E=(0,u.jsx)(h,{}),I=a.forwardRef(function(e,t){var r,l;let s=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=k,color:d="primary",icon:p=z,indeterminate:m=!1,indeterminateIcon:h=E,inputProps:f,size:v="medium",className:b}=s,j=(0,n.Z)(s,g),y=m?h:p,Z=m?h:c,I=(0,o.Z)({},s,{color:d,indeterminate:m,size:v}),P=C(I);return(0,u.jsx)(w,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},f),icon:a.cloneElement(y,{fontSize:null!=(r=y.props.fontSize)?r:v}),checkedIcon:a.cloneElement(Z,{fontSize:null!=(l=Z.props.fontSize)?l:v}),ownerState:I,ref:t,className:(0,i.Z)(P.root,b)},j,{classes:P}))});var P=I},97415:function(e,t,r){var n=r(85893),o=r(11163),a=r.n(o),i=r(67294),l=r(60664),s=r(49837),c=r(91359),d=r(79072),u=r(55343),p=r(67836),m=r(22841),h=r(75158),f=r(74231),x=r(87536),v=r(47533),b=r(86501),j=r(45061),y=r(46749),Z=r(89191),g=r(60565);let C=()=>{let[e,t]=(0,i.useState)(!1),{id:r}=a().query,o=a(),C=(0,y.Lo)(o.pathname),w=(0,y.g_)(o.pathname),k=(0,i.useRef)(null),{title:z}=(0,i.useContext)(g.f),E=f.Ry().shape({nome:f.Z_().required("Campo obrigat\xf3rio")}),{control:I,handleSubmit:P,register:S,formState:{errors:D},reset:O}=(0,x.cI)({resolver:(0,v.X)(E)}),V=async e=>{try{"new"===C?(await l.h.post("".concat(w,"/novo"),e),o.push(w),b.ZP.success(y.OD.successNew),O(e)):"edit"===C&&(await l.h.put("".concat(w,"/").concat(r),e),b.ZP.success(y.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?b.ZP.error(y.OD.errorRepeated):console.log(t)}},N=async()=>{try{await l.h.delete("".concat(w,"/").concat(r)),o.push(w),b.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(b.ZP.error(y.OD.pendingDelete),t(!1)):console.log(e)}};return(0,i.useEffect)(()=>{let e=async()=>{try{let e=await l.h.get("".concat(w,"/").concat(r));O(e.data)}catch(t){console.log(t)}};e(),"new"===C&&k.current.focus()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsxs)("form",{onSubmit:P(V),children:[(0,n.jsx)(Z.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(D).length>0,handleSubmit:()=>P(V),btnDelete:"edit"===C,onclickDelete:()=>t(!0)}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(d.ZP,{item:!0,xs:12,md:11,children:(0,n.jsx)(u.Z,{fullWidth:!0,children:(0,n.jsx)(x.Qr,{name:"nome",control:I,render(e){let{field:{value:t,onChange:r}}=e;return(0,n.jsx)(p.Z,{value:null!=t?t:"",label:"Nome",onChange:r,placeholder:"Nome",error:Boolean(D.nome),"aria-describedby":"validation-schema-nome",inputRef:k,rules:{required:!0}})}})})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(x.Qr,{name:"status",control:I,rules:{required:!1},render(e){let{field:{value:t,onChange:r}}=e;return(0,n.jsx)(m.Z,{control:(0,n.jsx)(h.Z,{checked:"new"===C||null!=t&&t,onChange:r}),label:"Ativo",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,n.jsx)(j.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+z,openModal:e,handleClose:()=>t(!1),handleSubmit:N,btnCancel:!0,btnConfirm:!0})]})};t.Z=C},45061:function(e,t,r){var n=r(85893),o=r(75084),a=r(29620),i=r(77745),l=r(95398),s=r(76779),c=r(44642);r(21609);var d=r(55343),u=r(67836),p=r(29630),m=r(19604),h=r(67294),f=r(82747);let x=e=>{let{title:t,text:r,handleClose:x,openModal:v,handleSubmit:b,cnpj:j,inputEmail:y,btnCancel:Z,btnConfirm:g,btnCancelColor:C,btnConfirmColor:w}=e,[k,z]=(0,h.useState)(null),[E,I]=(0,h.useState)(!1);return console.log("dialog email: ",k),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{open:v,onClose:x,"aria-labelledby":"form-dialog-title",children:[(0,n.jsx)(i.Z,{id:"form-dialog-title",children:t}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{sx:{mb:3},children:r}),y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&E,inputProps:{onChange(e){z(e.target.value),I(!(0,f.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&E&&(0,n.jsx)(p.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(m.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(s.Z,{className:"dialog-actions-dense",children:[Z&&(0,n.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:x,children:"Cancelar"}),g&&(0,n.jsx)(o.Z,{variant:"contained",disabled:y&&(null==k?void 0:k.length)>0&&E,color:w||"error",onClick:y&&j?()=>{b(j,k),z(null),x()}:y&&!j?()=>{b(k),z(null),x()}:()=>{b(),x()},children:"Confirmar"})]})]})})};t.Z=x},89191:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(85893),o=r(11163),a=r.n(o),i=r(67294),l=r(91359),s=r(61953),c=r(75084),d=r(72389),u=r(41664),p=r.n(u),m=r(21609),h=r(46749),f=r(73812),x=r(86378),v=r(9942),b=r(60565);function j(e){let{disabled:t,dataReports:r,open:o,anchorEl:a,handleClick:l,handleClose:s}=e,{generateReport:c}=(0,i.useContext)(b.f);return(0,n.jsx)("div",{children:(0,n.jsx)(f.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:a,open:o,onClose:s,TransitionComponent:v.Z,children:r.map(e=>(0,n.jsxs)(x.Z,{onClick(){s(),c(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}var y=r(40039),Z=r(10160);let g=e=>{let{btnCancel:t,btnSave:r,btnSend:o,btnChangeStatus:u,handleSubmit:f,disabledSubmit:x,handleSend:v,disabledSend:g,handleChangeStatus:C,btnDelete:w,onclickDelete:k,btnPrint:z,disabled:E,dataReports:I}=e,P=a(),{user:S,routes:D}=(0,i.useContext)(y.V),{generateReport:O}=(0,i.useContext)(b.f),[V,N]=(0,i.useState)(!1),[R,F]=(0,i.useState)(null),M=Boolean(R),L=e=>{F(e.currentTarget)},U=()=>{F(null)},$=(()=>{let e=P.pathname.split("/").slice(0,-1).join("/");return e||P.pathname})(),A=()=>{window.scrollTo({top:0,behavior:"smooth"})},_=()=>{window.history.back()};return(0,i.useEffect)(()=>{let e=()=>{N(!1),window.scrollY>0?N(!0):N(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,n.jsx)(p(),{href:(0,h.g_)(P.pathname),children:(0,n.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),w&&D.find(e=>e.rota===$&&e.excluir)&&(0,n.jsx)(c.Z,{type:"button",onClick:k,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),u&&(0,n.jsx)(c.Z,{type:"button",onClick:C,variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(m.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,n.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[z&&1===I.length&&(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":M?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":M?"true":void 0,onClick:()=>O(I[0]),color:"primary",disabled:E,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),z&&I.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":M?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":M?"true":void 0,onClick:L,color:"primary",disabled:E,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(j,{generateReport:O,dataReports:I,handleClick:L,handleClose:U,open:M,anchorEl:R})]}),r&&D.find(e=>e.rota===$&&e.editar)&&(0,n.jsx)(c.Z,{onClick:f,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:E||x,startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),o&&2==S.papelID&&(0,n.jsx)(c.Z,{onClick:v,type:"button",variant:"contained",size:"medium",color:"primary",disabled:E||g,sx:{ml:2},startIcon:(0,n.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),(0,n.jsx)("div",{className:"\n                        ".concat(V?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:E||x,icon:"material-symbols:save",function:f},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:print",function:L},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"ion:arrow-up",function:A},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:arrow-back-rounded",function:_}].map(e=>(1!==e.id||r&&D.find(e=>e.rota===$&&e.editar))&&(2!==e.id||z)?(0,n.jsx)(d.Z,{title:e.title,placement:"left",children:(0,n.jsx)("div",{children:(0,n.jsx)(Z.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:(0,n.jsx)(m.Z,{icon:e.icon})})},e.id)},e.id):null)})]})]})})};var C=g},46749:function(e,t,r){r.d(t,{Lo:function(){return p},OD:function(){return u},OE:function(){return h},OL:function(){return d},WR:function(){return c},g_:function(){return m}});var n=r(85893),o=r(29630),a=r(41664),i=r.n(a),l=r(7071);r(67294),r(40039);var s=r(60664);r(50196);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((r,a)=>{let s=t[a].field;return{...r,flex:r.size,renderCell:r=>(0,n.jsx)(i(),{href:"".concat(e,"/").concat(r.row.id),children:(0,n.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===s){if("status"!=e.field)return r.row[e.field];{let o=c[r.row.status];return(0,n.jsx)(l.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let t=e.split("/"),r=t[t.length-1];return"novo"==r?"new":"edit"},m=e=>{let t=e.split("/");return t.pop(),t.join("/")},h=e=>{let t=e.route;s.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),r=URL.createObjectURL(t);window.open(r,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},82747:function(e,t,r){function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),o=0,a=t-7;for(let i=t;i>=1;i--)o+=r.charAt(t-i)*a--,a<2&&(a=9);let l=o%11<2?0:11-o%11;if(l!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),o=0,a=t-7;for(let s=t;s>=1;s--)o+=r.charAt(t-s)*a--,a<2&&(a=9);return(l=o%11<2?0:11-o%11)==n.charAt(1)}function o(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let o=1;o<=10;o++)r+=parseInt(e.substring(o-1,o))*(12-o);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return a},sw:function(){return o},zk:function(){return n}})},47533:function(e,t,r){r.d(t,{X:function(){return l}});var n=r(87536),o=function(e,t,r){if(e&&"reportValidity"in e){var o=(0,n.U2)(r,t);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},a=function(e,t){var r=function(r){var n=t.fields[r];n&&n.ref&&"reportValidity"in n.ref?o(n.ref,r,e):n.refs&&n.refs.forEach(function(t){return o(t,r,e)})};for(var n in t.fields)r(n)},i=function(e,t){t.shouldUseNativeValidation&&a(e,t);var r={};for(var o in e){var i=(0,n.U2)(t.fields,o);(0,n.t8)(r,o,Object.assign(e[o],{ref:i&&i.ref}))}return r},l=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(o,l,s){try{return Promise.resolve(function(n,i){try{var c=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},t,{context:l}))).then(function(e){return s.shouldUseNativeValidation&&a({},s),{values:r.rawValues?o:e,errors:{}}}))}catch(d){return i(d)}return c&&c.then?c.then(void 0,i):c}(0,function(e){var t;if(!e.inner)throw e;return{values:{},errors:i((t=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(e.inner||[]).reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var o=e[r.path].types,a=o&&o[r.type];e[r.path]=(0,n.KN)(r.path,t,e,r.type,a?[].concat(a,r.message):r.message)}return e},{})),s)}}))}catch(c){return Promise.reject(c)}}}}}]);