(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8721],{53239:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/cargo/[id]",function(){return n(10125)}])},39015:function(e,r,n){"use strict";var t=n(85893),s=n(11163),o=n.n(s),l=n(67294),a=n(60664),i=n(49837),c=n(91359),u=n(79072),d=n(55343),h=n(67836),m=n(22841),x=n(75158),f=n(74231),p=n(87536),b=n(47533),g=n(32631),j=n(86501),Z=n(45061),v=n(46749),y=n(89191),C=n(60565);let w=()=>{let[e,r]=(0,l.useState)(!1),{id:n}=o().query,s=o(),w=(0,v.Lo)(s.pathname),P=(0,v.g_)(s.pathname),_=(0,l.useRef)(null),{title:k}=(0,l.useContext)(C.f),E=f.Ry().shape({nome:f.Z_().required("Campo obrigat\xf3rio")}),{control:D,handleSubmit:S,formState:{errors:N},reset:O}=(0,p.cI)({resolver:(0,b.X)(E)}),I=async e=>{try{"new"===w?(await a.h.post("".concat(P,"/novo"),e),s.push(P),j.ZP.success(v.OD.successNew),O(e)):"edit"===w&&(await a.h.put("".concat(P,"/").concat(n),e),j.ZP.success(v.OD.successUpdate),console.log("editado"))}catch(r){r.response&&409===r.response.status?j.ZP.error(v.OD.errorRepeated):console.log(r)}},q=async()=>{try{await a.h.delete("".concat(P,"/").concat(n)),s.push(P),j.ZP.success(v.OD.successDelete)}catch(e){e.response&&409===e.response.status?(j.ZP.error(v.OD.pendingDelete),r(!1)):console.log(e)}};return(0,l.useEffect)(()=>{if("new"===w)_.current.focus();else{let e=async()=>{try{let e=await a.h.get("".concat(P,"/").concat(n));O(e.data)}catch(r){console.log(r)}};e()}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{children:(0,t.jsxs)("form",{onSubmit:S(I),children:[(0,t.jsx)(y.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(N).length>0,handleSubmit:()=>S(I),btnDelete:"edit"===w,onclickDelete:()=>r(!0)}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(u.ZP,{item:!0,xs:12,md:11,children:(0,t.jsxs)(d.Z,{fullWidth:!0,children:[(0,t.jsx)(p.Qr,{name:"nome",control:D,render(e){let{field:{value:r,onChange:n}}=e;return(0,t.jsx)(h.Z,{value:null!=r?r:"",label:"Nome",onChange:n,placeholder:"Nome",error:Boolean(N.nome),"aria-describedby":"validation-schema-nome",inputRef:_})}}),N.nome&&(0,t.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:N.nome.message})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:12,md:1,children:(0,t.jsx)(d.Z,{children:(0,t.jsx)(p.Qr,{name:"status",control:D,rules:{required:!1},render(e){let{field:{value:r,onChange:n}}=e;return(0,t.jsx)(m.Z,{control:(0,t.jsx)(x.Z,{checked:"new"===w||null!=r&&r,onChange:n}),label:"Status",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,t.jsx)(Z.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+k,openModal:e,handleClose:()=>r(!1),handleSubmit:q,btnCancel:!0,btnConfirm:!0})]})};r.Z=w},45061:function(e,r,n){"use strict";var t=n(85893),s=n(75084),o=n(29620),l=n(77745),a=n(95398),i=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),h=n(55343),m=n(67836),x=n(67294),f=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:r,text:n,handleClose:p,openModal:b,handleSubmit:g,cnpj:j,gruposAnexo:Z,inputEmail:v,btnCancel:y,btnConfirm:C,grupoAnexosFornecedor:w,btnCancelColor:P,btnConfirmColor:_,closeAfterSave:k,listErrors:E}=e,[D,S]=(0,x.useState)(null),[N,O]=(0,x.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{open:b,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&p()},children:[(0,t.jsx)(l.Z,{id:"form-dialog-title",children:r}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(c.Z,{sx:{mb:3},children:[n,E&&E.status&&(0,t.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,t.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,r)=>(0,t.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,t.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==D?void 0:D.length)>0&&N,inputProps:{onChange(e){S(e.target.value),O(!(0,f.dI)(e.target.value))}}}),(null==D?void 0:D.length)>0&&N&&(0,t.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,t.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,t.jsxs)(i.Z,{className:"dialog-actions-dense",children:[y&&(0,t.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),C&&(0,t.jsx)(s.Z,{variant:"contained",disabled:v&&(null==D?void 0:D.length)>0&&N||E&&E.status,color:_||"error",onClick:v&&j?()=>{g(j,Z,D),S(null),k&&p()}:v&&!j?()=>{g(D),S(null),k&&p()}:()=>{g(),k&&p()},children:"Confirmar"})]})]})})};r.Z=p},82747:function(e,r,n){"use strict";function t(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),t=e.substring(r),s=0,o=r-7;for(let l=r;l>=1;l--)s+=n.charAt(r-l)*o--,o<2&&(o=9);let a=s%11<2?0:11-s%11;if(a!=t.charAt(0))return!1;r+=1,n=e.substring(0,r),s=0,o=r-7;for(let i=r;i>=1;i--)s+=n.charAt(r-i)*o--,o<2&&(o=9);return(a=s%11<2?0:11-s%11)==t.charAt(1)}function s(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let t=1;t<=9;t++)n+=parseInt(e.substring(t-1,t))*(11-t);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return o},sw:function(){return s},zk:function(){return t}})},10125:function(e,r,n){"use strict";n.r(r);var t=n(85893),s=n(60565),o=n(67294),l=n(39015);let a=()=>{let{setTitle:e}=(0,o.useContext)(s.f);return(0,o.useEffect)(()=>{e("Cargo")},[]),(0,t.jsx)(l.Z,{})};r.default=a}},function(e){e.O(0,[2064,7536,9491,3548,9774,2888,179],function(){return e(e.s=53239)}),_N_E=e.O()}]);