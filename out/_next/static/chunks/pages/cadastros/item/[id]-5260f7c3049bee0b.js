(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{34928:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item/[id]",function(){return t(41814)}])},90492:function(e,o,t){"use strict";var n=t(85893),l=t(11163),a=t.n(l),s=t(67294),r=t(60664),u=t(49837),i=t(91359),c=t(79072),d=t(55343),m=t(67836),h=t(35966),f=t(22841),p=t(74231),x=t(87536),v=t(47533),Z=t(16056),b=t(86501),j=t(10825),g=t(46749),w=t(60033);let _=()=>{var e,o,t,l,_,C;let[D,y]=(0,s.useState)(!1),[P,O]=(0,s.useState)(null),[N,S]=(0,s.useState)(null),{id:E}=a().query,k=a(),F=(0,g.Lo)(k.pathname),I=(0,g.g_)(k.pathname),q=(0,s.useRef)(null),L=p.Ry().shape({nome:p.Z_().required("Campo obrigat\xf3rio")}),{control:R,handleSubmit:T,formState:{errors:V},register:X}=(0,x.cI)({resolver:(0,v.X)(L)}),B=async e=>{let o={...e,tipoFormularioID:N};try{"new"===F?(await r.h.post("".concat(I,"/novo"),o),k.push(I),b.ZP.success(g.OD.successNew),console.log(o)):"edit"===F&&(await r.h.put("".concat(I,"/").concat(E),o),b.ZP.success(g.OD.successUpdate),console.log("editado"))}catch(t){t.response&&409===t.response.status?b.ZP.error(g.OD.errorRepeated):console.log(t)}},W=async()=>{try{await r.h.delete("".concat(I,"/").concat(E)),k.push(I),b.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(b.ZP.error(g.OD.pendingDelete),y(!1)):console.log(e)}},z=async()=>{r.h.get("".concat(I,"/").concat(E),{headers:{"function-name":"getData"}}).then(e=>{O(e.data)})},M=async()=>{r.h.get("".concat(I,"/novo"),{headers:{"function-name":"getNovo"}}).then(e=>{O(e.data)})};return(0,s.useEffect)(()=>{"new"===F?(setTimeout(()=>{q.current.focus()},100),M()):"edit"===F&&z()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{children:(0,n.jsxs)("form",{onSubmit:T(B),children:[(0,n.jsx)(w.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(V).length>0,handleSubmit:()=>T(B),btnDelete:"edit"===F,onclickDelete:()=>y(!0)}),(0,n.jsx)(i.Z,{children:(0,n.jsxs)(c.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,md:8,children:(0,n.jsx)(d.Z,{fullWidth:!0,children:P&&(0,n.jsx)(m.Z,{label:"Nome",placeholder:"Nome",name:"nome",...X("nome"),defaultValue:null!==(t=null==P?void 0:null===(e=P.value)||void 0===e?void 0:e.nome)&&void 0!==t?t:"",error:Boolean(V.nome),"aria-describedby":"validation-schema-nome",inputRef:q})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,n.jsx)(d.Z,{fullWidth:!0,children:P&&(0,n.jsx)(h.Z,{options:null!==(l=null==P?void 0:P.formularios)&&void 0!==l?l:[],filterOptions:(e,o)=>e.filter(e=>e.nome.toLowerCase().includes(o.inputValue.toLowerCase())),getOptionLabel:e=>e.nome,onChange(e,o){S(null==o?void 0:o.parFormularioID)},defaultValue:null!==(_=null==P?void 0:P.tipoFormulario)&&void 0!==_?_:null,renderInput:e=>(0,n.jsx)(m.Z,{...e,label:"Formul\xe1rio",placeholder:"Formul\xe1rio",name:"formulario",...X("formulario",{required:!0}),defaultValue:null!==(C=null==P?void 0:P.tipoFormulario)&&void 0!==C?C:null,error:Boolean(V.formulario),"aria-describedby":"formulario-error"})})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,md:1,children:P&&(0,n.jsx)(f.Z,{label:"Status",control:(0,n.jsx)(Z.Z,{defaultChecked:"new"===F||(null==P?void 0:null===(o=P.value)||void 0===o?void 0:o.status)==1,name:"status",...X("status")})})})]})})]})}),(0,n.jsx)(j.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:D,handleClose:()=>y(!1),handleSubmit:W,btnCancelar:!0,btnConfirmar:!0})]})};o.Z=_},41814:function(e,o,t){"use strict";t.r(o);var n=t(85893),l=t(90492),a=t(60565),s=t(67294);let r=()=>{let{setTitle:e}=(0,s.useContext)(a.f);return(0,s.useEffect)(()=>{e("Item")},[]),(0,n.jsx)(l.Z,{})};o.default=r}},function(e){e.O(0,[536,491,646,774,888,179],function(){return e(e.s=34928)}),_N_E=e.O()}]);