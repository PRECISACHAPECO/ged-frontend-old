"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{45061:function(e,r,n){var i=n(85893),t=n(75084),a=n(29620),l=n(77745),o=n(95398),s=n(76779),d=n(44642);n(21609);var c=n(19604),u=n(29630),p=n(55343),m=n(67836),x=n(67294),f=n(82747);let h=e=>{let{title:r,text:n,handleClose:h,openModal:b,handleSubmit:v,cnpj:j,inputEmail:g,btnCancel:y,btnConfirm:Z,btnCancelColor:C,btnConfirmColor:$,closeAfterSave:k,listErrors:w}=e,[I,z]=(0,x.useState)(null),[E,S]=(0,x.useState)(!1);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{open:b,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&h()},children:[(0,i.jsx)(l.Z,{id:"form-dialog-title",children:r}),(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(d.Z,{sx:{mb:3},children:[n,w&&w.status&&(0,i.jsxs)(c.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,i.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:w.errors.map((e,r)=>(0,i.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(p.Z,{sx:{mt:2},fullWidth:!0,children:[(0,i.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==I?void 0:I.length)>0&&E,inputProps:{onChange(e){z(e.target.value),S(!(0,f.dI)(e.target.value))}}}),(null==I?void 0:I.length)>0&&E&&(0,i.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,i.jsx)(c.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,i.jsxs)(s.Z,{className:"dialog-actions-dense",children:[y&&(0,i.jsx)(t.Z,{variant:"outlined",color:"primary",onClick:h,children:"Cancelar"}),Z&&(0,i.jsx)(t.Z,{variant:"contained",disabled:g&&(null==I?void 0:I.length)>0&&E||w&&w.status,color:$||"error",onClick:g&&j?()=>{v(j,I),z(null),k&&h()}:g&&!j?()=>{v(I),z(null),k&&h()}:()=>{v(),k&&h()},children:"Confirmar"})]})]})})};r.Z=h},89191:function(e,r,n){n.d(r,{Z:function(){return Z}});var i=n(85893),t=n(11163),a=n.n(t),l=n(67294),o=n(91359),s=n(61953),d=n(75084),c=n(72389),u=n(41664),p=n.n(u),m=n(21609),x=n(46749),f=n(73812),h=n(86378),b=n(9942);function v(e){let{disabled:r,dataReports:n,open:t,anchorEl:a,handleClick:l,handleClose:o,generateReport:s}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(f.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:a,open:t,onClose:o,TransitionComponent:b.Z,children:n.map(e=>(0,i.jsxs)(h.Z,{onClick(){o(),s(e)},children:[(0,i.jsx)("span",{children:e.identification}),(0,i.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,i.jsx)("span",{children:e.name})]},e.id))})})}n(60565);var j=n(40039),g=n(10160);let y=e=>{let{btnCancel:r,btnSave:n,btnSend:t,btnStatus:u,handleSubmit:f,disabledSubmit:h,handleSend:b,disabledSend:y,handleBtnStatus:Z,btnDelete:C,onclickDelete:$,btnPrint:k,disabledPrint:w,disabled:I,dataReports:z,generateReport:E}=e,S=a(),{user:F,routes:A}=(0,l.useContext)(j.V),[D,L]=(0,l.useState)(!1),[P,V]=(0,l.useState)(null),_=Boolean(P),N=e=>{V(e.currentTarget)},T=()=>{V(null)},B=(()=>{let e=S.pathname.split("/").slice(0,-1).join("/");return e||S.pathname})(),K=()=>{window.scrollTo({top:0,behavior:"smooth"})},R=()=>{window.history.back()};return(0,l.useEffect)(()=>{let e=()=>{L(!1),window.scrollY>0?L(!0):L(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,i.jsx)(p(),{href:(0,x.g_)(S.pathname),children:(0,i.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,i.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),C&&A.find(e=>e.rota===B&&e.excluir)&&(0,i.jsx)(d.Z,{type:"button",onClick:$,variant:"outlined",color:"error",size:"medium",startIcon:(0,i.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),u&&(0,i.jsx)(d.Z,{type:"button",onClick:Z,variant:"outlined",color:"primary",size:"medium",startIcon:(0,i.jsx)(m.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,i.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[k&&1===z.length&&(0,i.jsx)(d.Z,{id:"fade-button","aria-controls":_?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":_?"true":void 0,onClick:()=>E(z[0]),color:"primary",disabled:I||w,variant:"outlined",size:"medium",type:"button",startIcon:(0,i.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),k&&z.length>1&&(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(d.Z,{id:"fade-button","aria-controls":_?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":_?"true":void 0,onClick:N,color:"primary",disabled:I||w,variant:"outlined",size:"medium",type:"button",sx:{mr:0},startIcon:(0,i.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,i.jsx)(v,{generateReport:E,dataReports:z,handleClick:N,handleClose:T,open:_,anchorEl:P})]}),n&&A.find(e=>e.rota===B&&e.editar)&&(0,i.jsx)(d.Z,{onClick:f,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:I||h,startIcon:(0,i.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),t&&(0,i.jsx)(d.Z,{onClick:b,type:"button",variant:"contained",size:"medium",color:"primary",disabled:I||y,startIcon:(0,i.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Concluir Formul\xe1rio"}),(0,i.jsx)("div",{className:"\n                        ".concat(D?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:I||h,icon:"material-symbols:save",function:f},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:I||w,icon:"material-symbols:print",function:N},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"ion:arrow-up",function:K},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:arrow-back-rounded",function:R}].map(e=>(1!==e.id||n&&A.find(e=>e.rota===B&&e.editar))&&(2!==e.id||k)?(0,i.jsx)(c.Z,{title:e.title,placement:"left",children:(0,i.jsx)("div",{children:(0,i.jsx)(g.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:(0,i.jsx)(m.Z,{icon:e.icon})})},e.id)},e.id):null)})]})]})})};var Z=y},34175:function(e,r,n){function i(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function t(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function a(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function l(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function o(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(r,{Bk:function(){return a},CL:function(){return o},PK:function(){return i},Tc:function(){return l},VL:function(){return t}})},82747:function(e,r,n){function i(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),i=e.substring(r),t=0,a=r-7;for(let l=r;l>=1;l--)t+=n.charAt(r-l)*a--,a<2&&(a=9);let o=t%11<2?0:11-t%11;if(o!=i.charAt(0))return!1;r+=1,n=e.substring(0,r),t=0,a=r-7;for(let s=r;s>=1;s--)t+=n.charAt(r-s)*a--,a<2&&(a=9);return(o=t%11<2?0:11-t%11)==i.charAt(1)}function t(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let i=1;i<=9;i++)n+=parseInt(e.substring(i-1,i))*(11-i);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let t=1;t<=10;t++)n+=parseInt(e.substring(t-1,t))*(12-t);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return a},sw:function(){return t},zk:function(){return i}})}}]);