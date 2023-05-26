"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4217],{84217:function(e,r,t){var n=t(85893),o=t(11163),s=t.n(o),i=t(67294),a=t(60565),l=t(60664),c=t(49837),d=t(91359),u=t(79072),m=t(55343),p=t(67836),x=t(22841),h=t(75158),f=t(74231),b=t(87536),j=t(47533),g=t(32631),v=t(86501),Z=t(45061),y=t(46749),C=t(89191);let w=()=>{let[e,r]=(0,i.useState)(!1),{id:t}=s().query,o=s(),w=(0,y.Lo)(o.pathname),k=(0,y.g_)(o.pathname),D=(0,i.useRef)(null),{title:E}=(0,i.useContext)(a.f),I=f.Ry().shape({nome:f.Z_().required("Campo obrigat\xf3rio")}),{control:z,handleSubmit:P,register:S,formState:{errors:O},reset:R}=(0,b.cI)({resolver:(0,j.X)(I)}),A=async e=>{try{"new"===w?(await l.h.post("".concat(k,"/novo"),e),o.push(k),v.ZP.success(y.OD.successNew),R(e)):"edit"===w&&(await l.h.put("".concat(k,"/").concat(t),e),v.ZP.success(y.OD.successUpdate),console.log("editado"))}catch(r){r.response&&409===r.response.status?v.ZP.error(y.OD.errorRepeated):console.log(r)}},N=async()=>{try{await l.h.delete("".concat(k,"/").concat(t)),o.push(k),v.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(v.ZP.error(y.OD.pendingDelete),r(!1)):console.log(e)}};return(0,i.useEffect)(()=>{if("new"===w)D.current.focus();else{let e=async()=>{try{let e=await l.h.get("".concat(k,"/").concat(t));R(e.data)}catch(r){console.log(r)}};e()}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{children:(0,n.jsxs)("form",{onSubmit:P(A),children:[(0,n.jsx)(C.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(O).length>0,handleSubmit:()=>P(A),btnDelete:"edit"===w,onclickDelete:()=>r(!0)}),(0,n.jsx)(d.Z,{children:(0,n.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,md:11,children:(0,n.jsxs)(m.Z,{fullWidth:!0,children:[(0,n.jsx)(b.Qr,{name:"nome",control:z,render(e){let{field:{value:r,onChange:t}}=e;return(0,n.jsx)(p.Z,{value:null!=r?r:"",label:"Nome",onChange:t,placeholder:"Nome",error:Boolean(O.nome),"aria-describedby":"validation-schema-nome",inputRef:D})}}),O.nome&&(0,n.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:O.nome.message})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(b.Qr,{name:"status",control:z,rules:{required:!1},render(e){let{field:{value:r,onChange:t}}=e;return(0,n.jsx)(x.Z,{control:(0,n.jsx)(h.Z,{checked:"new"===w||null!=r&&r,onChange:t}),label:"Ativo",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,n.jsx)(Z.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+E,openModal:e,handleClose:()=>r(!1),handleSubmit:N,btnCancel:!0,btnConfirm:!0})]})};r.Z=w},45061:function(e,r,t){var n=t(85893),o=t(75084),s=t(29620),i=t(77745),a=t(95398),l=t(76779),c=t(44642);t(21609);var d=t(55343),u=t(67836),m=t(29630),p=t(19604),x=t(67294),h=t(82747);let f=e=>{let{title:r,text:t,handleClose:f,openModal:b,handleSubmit:j,cnpj:g,inputEmail:v,btnCancel:Z,btnConfirm:y,btnCancelColor:C,btnConfirmColor:w}=e,[k,D]=(0,x.useState)(null),[E,I]=(0,x.useState)(!1);return console.log("dialog email: ",k),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{open:b,onClose:f,"aria-labelledby":"form-dialog-title",children:[(0,n.jsx)(i.Z,{id:"form-dialog-title",children:r}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(c.Z,{sx:{mb:3},children:t}),v&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&E,inputProps:{onChange(e){D(e.target.value),I(!(0,h.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&E&&(0,n.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(p.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(l.Z,{className:"dialog-actions-dense",children:[Z&&(0,n.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,n.jsx)(o.Z,{variant:"contained",disabled:v&&(null==k?void 0:k.length)>0&&E,color:w||"error",onClick:v&&g?()=>{j(g,k),D(null),f()}:v&&!g?()=>{j(k),D(null),f()}:()=>{j(),f()},children:"Confirmar"})]})]})})};r.Z=f},89191:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(85893),o=t(11163),s=t.n(o),i=t(67294),a=t(91359),l=t(61953),c=t(75084),d=t(41664),u=t.n(d),m=t(21609),p=t(46749),x=t(73812),h=t(86378),f=t(9942);function b(e){let{disabled:r,generateReport:t,dataReports:o,open:s,anchorEl:i,handleClick:a,handleClose:l}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:s,onClose:l,TransitionComponent:f.Z,children:o.map(e=>(0,n.jsxs)(h.Z,{onClick(){l(),t(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}var j=t(40039),g=t(10160);let v=e=>{let{btnCancel:r,btnSave:t,btnSend:o,btnChangeStatus:d,handleSubmit:x,disabledSubmit:h,handleSend:f,disabledSend:v,handleChangeStatus:Z,btnDelete:y,onclickDelete:C,btnPrint:w,disabled:k,generateReport:D,dataReports:E}=e,I=s(),{user:z,routes:P}=(0,i.useContext)(j.V),[S,O]=(0,i.useState)(!1),[R,A]=(0,i.useState)(null),N=Boolean(R),_=e=>{A(e.currentTarget)},F=()=>{A(null)},L=(()=>{let e=I.pathname.split("/").slice(0,-1).join("/");return e||I.pathname})();return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>0?O(!0):O(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,n.jsx)(u(),{href:(0,p.g_)(I.pathname),children:(0,n.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),y&&P.find(e=>e.rota===L&&e.excluir)&&(0,n.jsx)(c.Z,{type:"button",onClick:C,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),d&&(0,n.jsx)(c.Z,{type:"button",onClick:Z,variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(m.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,n.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[w&&1===E.length&&(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":N?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":N?"true":void 0,onClick:()=>D(E[0]),color:"primary",disabled:k,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),w&&E.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":N?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":N?"true":void 0,onClick:_,color:"primary",disabled:k,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(b,{generateReport:D,dataReports:E,handleClick:_,handleClose:F,open:N,anchorEl:R})]}),t&&P.find(e=>e.rota===L&&e.editar)&&(0,n.jsx)(c.Z,{onClick:x,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:k||h,startIcon:(0,n.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),o&&2==z.papelID&&(0,n.jsx)(c.Z,{onClick:f,type:"button",variant:"contained",size:"medium",color:"primary",disabled:k||v,sx:{ml:2},startIcon:(0,n.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),S&&t&&P.find(e=>e.rota===L&&e.editar)&&(0,n.jsx)("div",{className:"\n                                ".concat(S?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,n.jsx)(g.Z,{color:"primary",size:"large",onClick:x,type:"submit",variant:"contained",disabled:k||h,children:(0,n.jsx)(m.Z,{icon:"material-symbols:save"})})})]})]})})};var Z=v},46749:function(e,r,t){t.d(r,{Lo:function(){return m},OD:function(){return u},OE:function(){return x},OL:function(){return d},WR:function(){return c},g_:function(){return p}});var n=t(85893),o=t(29630),s=t(41664),i=t.n(s),a=t(7071);t(67294),t(40039);var l=t(60664);t(50196);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,r)=>r.map((t,s)=>{let l=r[s].field;return{...t,flex:t.size,renderCell:t=>(0,n.jsx)(i(),{href:"".concat(e,"/").concat(t.row.id),children:(0,n.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===l){if("status"!=e.field)return t.row[e.field];{let o=c[t.row.status];return(0,n.jsx)(a.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let r=e.split("/"),t=r[r.length-1];return"novo"==t?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")},x=e=>{let r=e.route;l.h.post(r,e.params,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),t=URL.createObjectURL(r);window.open(t,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},82747:function(e,r,t){function n(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,t=e.substring(0,r),n=e.substring(r),o=0,s=r-7;for(let i=r;i>=1;i--)o+=t.charAt(r-i)*s--,s<2&&(s=9);let a=o%11<2?0:11-o%11;if(a!=n.charAt(0))return!1;r+=1,t=e.substring(0,r),o=0,s=r-7;for(let l=r;l>=1;l--)o+=t.charAt(r-l)*s--,s<2&&(s=9);return(a=o%11<2?0:11-o%11)==n.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let n=1;n<=9;n++)t+=parseInt(e.substring(n-1,n))*(11-n);if((10==(r=10*t%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;t=0;for(let o=1;o<=10;o++)t+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*t%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(r,{dI:function(){return s},sw:function(){return o},zk:function(){return n}})}}]);