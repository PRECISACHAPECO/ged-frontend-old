(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3172],{86191:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/tipo-veiculo/novo",function(){return s(29553)}])},62094:function(e,t,s){"use strict";var n=s(85893),a=s(11163),o=s.n(a),r=s(67294),c=s(60664),l=s(49837),i=s(91359),u=s(79072),d=s(55343),h=s(67836),m=s(22841),x=s(74231),p=s(87536),Z=s(47533),f=s(32631),j=s(16056),b=s(86501),g=s(28315),_=s(46749),w=s(89191);let P=()=>{let[e,t]=(0,r.useState)(!1),{id:s}=o().query,a=o(),P=(0,_.Lo)(a.pathname),v=(0,_.g_)(a.pathname),y=x.Ry().shape({nome:x.Z_().required("Campo obrigat\xf3rio")}),{control:C,handleSubmit:D,formState:{errors:E},reset:N}=(0,p.cI)({resolver:(0,Z.X)(y)}),O=async e=>{try{"new"===P?(await c.h.post("".concat(v,"/novo"),e),a.push(v),b.ZP.success(_.OD.successNew),N(e)):"edit"===P&&(await c.h.put("".concat(v,"/").concat(s),e),b.ZP.success(_.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?b.ZP.error(_.OD.errorRepeated):console.log(t)}},S=async()=>{try{await c.h.delete("".concat(v,"/").concat(s)),a.push(v),b.ZP.success(_.OD.successDelete)}catch(e){e.response&&409===e.response.status?(b.ZP.error(_.OD.pendingDelete),t(!1)):console.log(e)}};return(0,r.useEffect)(()=>{let e=async()=>{try{let e=await c.h.get("".concat(v,"/").concat(s));N(e.data)}catch(t){console.log(t)}};e()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{children:(0,n.jsxs)("form",{onSubmit:D(O),children:[(0,n.jsx)(w.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(E).length>0,handleSubmit:()=>D(O),btnDelete:"edit"===P,onclickDelete:()=>t(!0)}),(0,n.jsx)(i.Z,{children:(0,n.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,md:11,children:(0,n.jsxs)(d.Z,{fullWidth:!0,children:[(0,n.jsx)(p.Qr,{name:"nome",control:C,render(e){let{field:{value:t,onChange:s}}=e;return(0,n.jsx)(h.Z,{value:null!=t?t:"",label:"Nome",onChange:s,placeholder:"Nome",error:Boolean(E.nome),"aria-describedby":"validation-schema-nome"})}}),E.nome&&(0,n.jsx)(f.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:E.nome.message})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,md:1,children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(p.Qr,{name:"status",control:C,rules:{required:!1},render(e){let{field:{value:t,onChange:s}}=e;return(0,n.jsx)(m.Z,{checked:"new"===P||null!=t&&t,onChange:s,inputProps:{"aria-label":"controlled"},label:"Status",labelPlacement:"top",sx:{mr:8},control:(0,n.jsx)(j.Z,{})})}}),E.status&&(0,n.jsx)(f.Z,{sx:{color:"error.main"},id:"validation-schema-status",children:E.status.message})]})})]})})]})}),(0,n.jsx)(g.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>t(!1),handleSubmit:S,btnCancel:!0,btnConfirm:!0})]})};t.Z=P},29553:function(e,t,s){"use strict";s.r(t);var n=s(85893),a=s(60565),o=s(67294),r=s(62094);let c=()=>{let{setTitle:e}=(0,o.useContext)(a.f);return(0,o.useEffect)(()=>{e("Sistema de Qualidade")},[]),(0,n.jsx)(r.Z,{})};t.default=c}},function(e){e.O(0,[7536,9491,8365,9774,2888,179],function(){return e(e.s=86191)}),_N_E=e.O()}]);