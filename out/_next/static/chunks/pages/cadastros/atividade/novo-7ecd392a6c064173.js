(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8195],{18953:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/atividade/novo",function(){return n(21424)}])},97415:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),o=n(67294),i=n(75442),l=n(49837),c=n(91359),u=n(79072),d=n(87536),h=n(86501),f=n(45061),m=n(46749),x=n(89191),p=n(60565),g=n(29308),v=n(67569);let b=()=>{var e;let[t,n]=(0,o.useState)(!1),[s,b]=(0,o.useState)(null),{id:Z}=a().query,j=a(),w=(0,m.Lo)(j.pathname),y=(0,m.g_)(j.pathname),{title:D}=(0,o.useContext)(p.f),{trigger:C,handleSubmit:_,reset:E,formState:{errors:P},register:k}=(0,d.cI)(),S=async e=>{try{"new"===w?await i.h.post("".concat(y,"/new/insertData"),e).then(e=>{j.push("".concat(y,"/").concat(e.data)),h.ZP.success(m.OD.successNew)}):"edit"===w&&(await i.h.post("".concat(y,"/updateData/").concat(Z),e),h.ZP.success(m.OD.successUpdate))}catch(t){t.response&&409===t.response.status?h.ZP.error(m.OD.errorRepeated):console.log(t)}},N=async()=>{try{await i.h.delete("".concat(y,"/").concat(Z)),j.push(y),h.ZP.success(m.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(m.OD.pendingDelete),n(!1)):console.log(e)}},I=async()=>{"new"==w&&b({fields:{nome:"",status:1}});try{let e="new"===w?"".concat(y,"/new/getData"):"".concat(y,"/getData/").concat(Z);await i.h.post(e,{id:Z}).then(e=>{b(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),E(e.data)})}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{I(),"new"===w&&setTimeout(()=>{C()},300)},[]),(0,r.jsxs)(r.Fragment,{children:[s&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("form",{onSubmit:_(S),children:[(0,r.jsx)(x.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>_(S),btnDelete:"edit"===w,onclickDelete:()=>n(!0)}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(g.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,register:k,errors:null==P?void 0:null===(e=P.fields)||void 0===e?void 0:e.nome}),(0,r.jsx)(v.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==s?void 0:s.fields.status,typePage:w,register:k})]})})]})}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+D,openModal:t,handleClose:()=>n(!1),handleSubmit:N,btnCancel:!0,btnConfirm:!0})]})};t.Z=b},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),o=n(77745),i=n(95398),l=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),h=n(55343),f=n(67836),m=n(67294),x=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:v,cnpj:b,gruposAnexo:Z,inputEmail:j,btnCancel:w,btnConfirm:y,grupoAnexosFornecedor:D,btnCancelColor:C,btnConfirmColor:_,closeAfterSave:E,listErrors:P}=e,[k,S]=(0,m.useState)(null),[N,I]=(0,m.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,P&&P.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:P.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&N,inputProps:{onChange(e){S(e.target.value),I(!(0,x.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&N&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(l.Z,{className:"dialog-actions-dense",children:[w&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),y&&(0,r.jsx)(s.Z,{variant:"contained",disabled:j&&(null==k?void 0:k.length)>0&&N||P&&P.status,color:_||"error",onClick:j&&b?()=>{v(b,Z,k),S(null),E&&p()}:j&&!b?()=>{v(k),S(null),E&&p()}:()=>{v(),E&&p()},children:"Confirmar"})]})]})})};t.Z=p},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*a--,a<2&&(a=9);let i=s%11<2?0:11-s%11;if(i!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let l=t;l>=1;l--)s+=n.charAt(t-l)*a--,a<2&&(a=9);return(i=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},21424:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(97415),a=n(60565),o=n(67294);let i=()=>{let{setTitle:e}=(0,o.useContext)(a.f);return(0,o.useEffect)(()=>{e("Atividade")},[]),(0,r.jsx)(s.Z,{})};t.default=i}},function(e){e.O(0,[2064,7536,3548,9774,2888,179],function(){return e(e.s=18953)}),_N_E=e.O()}]);