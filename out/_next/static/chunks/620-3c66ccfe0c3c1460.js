"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{19550:function(e,r,o){var t=o(62097),a=o(5026);let n=()=>{let e=(0,t.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,a.E)(e.palette.primary.main,.12)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,a.E)(e.palette.secondary.main,.12)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,a.E)(e.palette.success.main,.12)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,a.E)(e.palette.error.main,.12)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,a.E)(e.palette.warning.main,.12)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,a.E)(e.palette.info.main,.12)}}};r.Z=n},16620:function(e,r,o){o.d(r,{Z:function(){return S}});var t=o(85893),a=o(11163),n=o.n(a),s=o(67294),l=o(60664),i=o(49837),c=o(91359),d=o(79072),u=o(55343),m=o(67836),p=o(22841),x=o(74231),h=o(87536),g=o(47533),b=o(32631),j=o(16056),f=o(86501),Z=o(75084),y=o(1890),C=o(77745),v=o(95398),k=o(76779),w=o(44642),D=o(21609);let L=e=>{let{title:r,text:o,handleClose:a,openModal:n,handleSubmit:s,btnCancelar:l,btnConfirmar:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(y.Z,{open:n,onClose:a,"aria-labelledby":"form-dialog-title",children:[(0,t.jsx)(C.Z,{id:"form-dialog-title",children:r}),(0,t.jsx)(v.Z,{children:(0,t.jsx)(w.Z,{sx:{mb:3},children:o})}),(0,t.jsxs)(k.Z,{className:"dialog-actions-dense",children:[l&&(0,t.jsx)(Z.Z,{variant:"outlined",color:"primary",startIcon:(0,t.jsx)(D.Z,{icon:"material-symbols:cancel"}),onClick:a,children:"Cancelar"}),i&&(0,t.jsx)(Z.Z,{variant:"outlined",color:"error",startIcon:(0,t.jsx)(D.Z,{icon:"line-md:circle-to-confirm-circle-transition"}),onClick:s,children:"Confirmar"})]})]})})};var E=o(20102),P=o(61953),z=o(41664),F=o.n(z);let N=e=>{let{btnCancel:r,btnSave:o,handleSubmit:a,btnDelete:s,onclickDelete:l}=e,i=n();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)(P.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,t.jsx)(F(),{href:(0,E.g_)(i.pathname),children:(0,t.jsx)(Z.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,t.jsx)(D.Z,{icon:"material-symbols:arrow-back-rounded"})})}),s&&(0,t.jsx)(Z.Z,{type:"button",onClick:l,variant:"outlined",color:"error",size:"medium",startIcon:(0,t.jsx)(D.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,t.jsx)(P.Z,{sx:{display:"flex",gap:"8px"},children:o&&(0,t.jsx)(Z.Z,{onClick:a,type:"submit",variant:"outlined",size:"medium",color:"primary",startIcon:(0,t.jsx)(D.Z,{icon:"material-symbols:save"}),children:"Salvar"})})]})})},O=()=>{let[e,r]=(0,s.useState)(!1),{id:o}=n().query,a=n(),Z=(0,E.Lo)(a.pathname),y=(0,E.g_)(a.pathname),C=x.Ry().shape({nome:x.Z_().required("Campo obrigat\xf3rio")}),{control:v,handleSubmit:k,formState:{errors:w},reset:D}=(0,h.cI)({resolver:(0,g.X)(C)}),P=async e=>{try{"new"===Z?(await l.h.post("".concat(y,"/novo"),e),a.push(y),f.ZP.success(E.OD.successNew),D(e)):"edit"===Z&&(await l.h.put("".concat(y,"/").concat(o),e),f.ZP.success(E.OD.successUpdate),console.log("editado"))}catch(r){r.response&&409===r.response.status?f.ZP.error(E.OD.errorRepeated):console.log(r)}},z=async()=>{try{await l.h.delete("".concat(y,"/").concat(o)),a.push(y),f.ZP.success(E.OD.successDelete)}catch(e){e.response&&409===e.response.status?(f.ZP.error(E.OD.pendingDelete),r(!1)):console.log(e)}},F=()=>r(!0),O=()=>r(!1);return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await l.h.get("".concat(y,"/").concat(o));D(e.data)}catch(r){console.log(r)}};e()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{children:(0,t.jsxs)("form",{onSubmit:k(P),children:[(0,t.jsx)(N,{btnCancel:!0,btnSave:!0,handleSubmit:()=>k(P),btnDelete:"edit"===Z,onclickDelete:F}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(d.ZP,{item:!0,xs:12,md:11,children:(0,t.jsxs)(u.Z,{fullWidth:!0,children:[(0,t.jsx)(h.Qr,{name:"nome",control:v,render(e){let{field:{value:r,onChange:o}}=e;return(0,t.jsx)(m.Z,{value:null!=r?r:"",label:"Nome",onChange:o,placeholder:"Nome",error:Boolean(w.nome),"aria-describedby":"validation-schema-nome"})}}),w.nome&&(0,t.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:w.nome.message})]})}),(0,t.jsx)(d.ZP,{item:!0,xs:12,md:1,children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(h.Qr,{name:"status",control:v,rules:{required:!1},render(e){let{field:{value:r,onChange:o}}=e;return(0,t.jsx)(p.Z,{checked:"1"==r,onChange:o,inputProps:{"aria-label":"controlled"},label:"Status",labelPlacement:"top",sx:{mr:8},control:(0,t.jsx)(j.Z,{})})}}),w.status&&(0,t.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-status",children:w.status.message})]})})]})})]})}),(0,t.jsx)(L,{text:"Tem certeza que deseja excluir?",title:"Excluir atividade",openModal:e,handleClose:O,handleSubmit:z,btnCancelar:!0,btnConfirmar:!0})]})};var S=O},60664:function(e,r,o){o.d(r,{h:function(){return a}});var t=o(50196);let a=t.ZP.create({baseURL:"https://demo.gedagro.com.br/api/"})},20102:function(e,r,o){o.d(r,{g_:function(){return h},OL:function(){return m},Lo:function(){return x},OD:function(){return p}});var t=o(85893),a=o(29630),n=o(41664),s=o.n(n),l=o(21448),i=o(86010),c=o(19550);let d=e=>{let{sx:r,skin:o,color:a,rounded:n}=e,s=(0,c.Z)(),d={primary:{...s.primaryLight},secondary:{...s.secondaryLight},success:{...s.successLight},error:{...s.errorLight},warning:{...s.warningLight},info:{...s.infoLight}},u={...e};return u.rounded=void 0,(0,t.jsx)(l.Z,{...u,variant:"filled",className:(0,i.Z)({"MuiChip-rounded":n,"MuiChip-light":"light"===o}),sx:"light"===o&&a?Object.assign(d[a],r):r})},u={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"}},m=(e,r)=>r.map((o,n)=>{let l=r[n].field;return{...o,flex:o.size,renderCell:o=>(0,t.jsx)(a.Z,{variant:"body2",sx:{color:"text.primary"},children:(0,t.jsx)(s(),{href:"".concat(e,"/").concat(o.row.id),children:r&&r.map((e,r)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let a=u[o.row.status];return(0,t.jsx)(d,{size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),p={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},x=e=>{let r=e.split("/"),o=r[r.length-1];return"novo"==o?"new":"edit"},h=e=>{let r=e.split("/");return r.pop(),r.join("/")}}}]);