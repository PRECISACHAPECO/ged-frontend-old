(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9184],{9164:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/transportador/[id]",function(){return n(61536)}])},76904:function(e,t,n){"use strict";var s=n(85893),r=n(11163),a=n.n(r),o=n(67294),c=n(60664),l=n(49837),u=n(91359),i=n(79072),d=n(55343),h=n(67836),p=n(22841),m=n(74231),x=n(87536),f=n(47533),Z=n(16056),b=n(86501),j=n(28315),g=n(40039),_=n(46749),w=n(89191);let D=()=>{let[e,t]=(0,o.useState)(!1),{id:n}=a().query,r=a(),{user:D}=(0,o.useContext)(g.V),P=(0,_.Lo)(r.pathname),C=(0,_.g_)(r.pathname),y=(0,o.useRef)(null);console.log("unid ",D.unidadeID);let E=m.Ry().shape({nome:m.Z_().required("Campo obrigat\xf3rio")}),{control:N,handleSubmit:O,formState:{errors:k},reset:v}=(0,x.cI)({resolver:(0,f.X)(E)}),S=async e=>{try{"new"===P?(await c.h.post("".concat(C,"/novo"),{data:e,unidadeID:D.unidadeID}),r.push(C),b.ZP.success(_.OD.successNew),v(e)):"edit"===P&&(await c.h.put("".concat(C,"/").concat(n),e),b.ZP.success(_.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?b.ZP.error(_.OD.errorRepeated):console.log(t)}},q=async()=>{try{await c.h.delete("".concat(C,"/").concat(n)),r.push(C),b.ZP.success(_.OD.successDelete)}catch(e){e.response&&409===e.response.status?(b.ZP.error(_.OD.pendingDelete),t(!1)):console.log(e)}};return(0,o.useEffect)(()=>{let e=async()=>{try{let e=await c.h.get("".concat(C,"/").concat(n));v(e.data)}catch(t){console.log(t)}};e()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{children:(0,s.jsxs)("form",{onSubmit:O(S),children:[(0,s.jsx)(w.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(k).length>0,handleSubmit:()=>O(S),btnDelete:"edit"===P,onclickDelete:()=>t(!0)}),(0,s.jsx)(u.Z,{children:(0,s.jsxs)(i.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,md:11,children:(0,s.jsx)(d.Z,{fullWidth:!0,children:(0,s.jsx)(x.Qr,{name:"nome",control:N,render(e){let{field:{value:t,onChange:n}}=e;return(0,s.jsx)(h.Z,{value:null!=t?t:"",label:"Nome",onChange:n,placeholder:"Nome",error:Boolean(k.nome),"aria-describedby":"validation-schema-nome",inputRef:y,rules:{required:!0}})}})})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,md:1,children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(x.Qr,{name:"status",control:N,rules:{required:!1},render(e){let{field:{value:t,onChange:n}}=e;return(0,s.jsx)(p.Z,{checked:"new"===P||null!=t&&t,onChange:n,inputProps:{"aria-label":"controlled"},label:"Status",labelPlacement:"top",sx:{mr:8},control:(0,s.jsx)(Z.Z,{})})}})})})]})})]})}),(0,s.jsx)(j.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>t(!1),handleSubmit:q,btnCancel:!0,btnConfirm:!0})]})};t.Z=D},61536:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(76904),a=n(60565),o=n(67294);let c=()=>{let{setTitle:e}=(0,o.useContext)(a.f);return(0,o.useEffect)(()=>{e("Transportador")},[]),(0,s.jsx)(r.Z,{})};t.default=c}},function(e){e.O(0,[7536,9491,8365,9774,2888,179],function(){return e(e.s=9164)}),_N_E=e.O()}]);