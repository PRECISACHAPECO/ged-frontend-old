(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{18953:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/atividade/novo",function(){return n(21424)}])},97415:function(e,t,n){"use strict";var s=n(85893),r=n(11163),a=n.n(r),c=n(67294),o=n(60664),l=n(49837),i=n(91359),u=n(79072),d=n(55343),h=n(67836),m=n(22841),p=n(74231),x=n(87536),f=n(47533),Z=n(16056),b=n(86501),j=n(10825),w=n(46749),_=n(60033);let g=()=>{let[e,t]=(0,c.useState)(!1),{id:n}=a().query,r=a(),g=(0,w.Lo)(r.pathname),P=(0,w.g_)(r.pathname),v=(0,c.useRef)(null),y=p.Ry().shape({nome:p.Z_().required("Campo obrigat\xf3rio")}),{control:C,handleSubmit:D,formState:{errors:E},reset:N}=(0,x.cI)({resolver:(0,f.X)(y)}),O=async e=>{try{"new"===g?(await o.h.post("".concat(P,"/novo"),e),r.push(P),b.ZP.success(w.OD.successNew),N(e)):"edit"===g&&(await o.h.put("".concat(P,"/").concat(n),e),b.ZP.success(w.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?b.ZP.error(w.OD.errorRepeated):console.log(t)}},k=async()=>{try{await o.h.delete("".concat(P,"/").concat(n)),r.push(P),b.ZP.success(w.OD.successDelete)}catch(e){e.response&&409===e.response.status?(b.ZP.error(w.OD.pendingDelete),t(!1)):console.log(e)}};return(0,c.useEffect)(()=>{let e=async()=>{try{let e=await o.h.get("".concat(P,"/").concat(n));N(e.data)}catch(t){console.log(t)}};e(),"new"===g&&v.current.focus()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{children:(0,s.jsxs)("form",{onSubmit:D(O),children:[(0,s.jsx)(_.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(E).length>0,handleSubmit:()=>D(O),btnDelete:"edit"===g,onclickDelete:()=>t(!0)}),(0,s.jsx)(i.Z,{children:(0,s.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(u.ZP,{item:!0,xs:12,md:11,children:(0,s.jsx)(d.Z,{fullWidth:!0,children:(0,s.jsx)(x.Qr,{name:"nome",control:C,render(e){let{field:{value:t,onChange:n}}=e;return(0,s.jsx)(h.Z,{value:null!=t?t:"",label:"Nome",onChange:n,placeholder:"Nome",error:Boolean(E.nome),"aria-describedby":"validation-schema-nome",inputRef:v,rules:{required:!0}})}})})}),(0,s.jsx)(u.ZP,{item:!0,xs:12,md:1,children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(x.Qr,{name:"status",control:C,rules:{required:!1},render(e){let{field:{value:t,onChange:n}}=e;return(0,s.jsx)(m.Z,{checked:"new"===g||null!=t&&t,onChange:n,inputProps:{"aria-label":"controlled"},label:"Status",labelPlacement:"top",sx:{mr:8},control:(0,s.jsx)(Z.Z,{})})}})})})]})})]})}),(0,s.jsx)(j.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>t(!1),handleSubmit:k,btnCancelar:!0,btnConfirmar:!0})]})};t.Z=g},21424:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(97415),a=n(60565),c=n(67294);let o=()=>{let{setTitle:e}=(0,c.useContext)(a.f);return(0,c.useEffect)(()=>{e("Atividade")},[]),(0,s.jsx)(r.Z,{})};t.default=o}},function(e){e.O(0,[536,491,646,774,888,179],function(){return e(e.s=18953)}),_N_E=e.O()}]);