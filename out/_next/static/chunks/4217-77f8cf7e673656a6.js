"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4217],{84217:function(e,r,n){var t=n(85893),o=n(11163),l=n.n(o),i=n(67294),s=n(60565),a=n(60664),c=n(49837),d=n(91359),u=n(79072),m=n(55343),p=n(67836),x=n(22841),h=n(75158),f=n(74231),b=n(87536),j=n(47533),g=n(32631),v=n(86501),Z=n(45061),y=n(46749),w=n(89191);let C=()=>{let[e,r]=(0,i.useState)(!1),{id:n}=l().query,o=l(),C=(0,y.Lo)(o.pathname),k=(0,y.g_)(o.pathname),D=(0,i.useRef)(null),{title:E}=(0,i.useContext)(s.f),I=f.Ry().shape({nome:f.Z_().required("Campo obrigat\xf3rio")}),{control:z,handleSubmit:P,register:S,formState:{errors:O},reset:R}=(0,b.cI)({resolver:(0,j.X)(I)}),A=async e=>{try{"new"===C?(await a.h.post("".concat(k,"/novo"),e),o.push(k),v.ZP.success(y.OD.successNew),R(e)):"edit"===C&&(await a.h.put("".concat(k,"/").concat(n),e),v.ZP.success(y.OD.successUpdate),console.log("editado"))}catch(r){r.response&&409===r.response.status?v.ZP.error(y.OD.errorRepeated):console.log(r)}},N=async()=>{try{await a.h.delete("".concat(k,"/").concat(n)),o.push(k),v.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(v.ZP.error(y.OD.pendingDelete),r(!1)):console.log(e)}};return(0,i.useEffect)(()=>{if("new"===C)D.current.focus();else{let e=async()=>{try{let e=await a.h.get("".concat(k,"/").concat(n));R(e.data)}catch(r){console.log(r)}};e()}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{children:(0,t.jsxs)("form",{onSubmit:P(A),children:[(0,t.jsx)(w.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(O).length>0,handleSubmit:()=>P(A),btnDelete:"edit"===C,onclickDelete:()=>r(!0)}),(0,t.jsx)(d.Z,{children:(0,t.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(u.ZP,{item:!0,xs:12,md:11,children:(0,t.jsxs)(m.Z,{fullWidth:!0,children:[(0,t.jsx)(b.Qr,{name:"nome",control:z,render(e){let{field:{value:r,onChange:n}}=e;return(0,t.jsx)(p.Z,{value:null!=r?r:"",label:"Nome",onChange:n,placeholder:"Nome",error:Boolean(O.nome),"aria-describedby":"validation-schema-nome",inputRef:D})}}),O.nome&&(0,t.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:O.nome.message})]})}),(0,t.jsx)(u.ZP,{item:!0,xs:12,md:1,children:(0,t.jsx)(m.Z,{children:(0,t.jsx)(b.Qr,{name:"status",control:z,rules:{required:!1},render(e){let{field:{value:r,onChange:n}}=e;return(0,t.jsx)(x.Z,{control:(0,t.jsx)(h.Z,{checked:"new"===C||null!=r&&r,onChange:n}),label:"Ativo",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,t.jsx)(Z.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+E,openModal:e,handleClose:()=>r(!1),handleSubmit:N,btnCancel:!0,btnConfirm:!0})]})};r.Z=C},45061:function(e,r,n){var t=n(85893),o=n(75084),l=n(29620),i=n(77745),s=n(95398),a=n(76779),c=n(44642);n(21609);var d=n(55343),u=n(67836),m=n(29630),p=n(19604),x=n(67294),h=n(82747);let f=e=>{let{title:r,text:n,handleClose:f,openModal:b,handleSubmit:j,cnpj:g,inputEmail:v,btnCancel:Z,btnConfirm:y,btnCancelColor:w,btnConfirmColor:C}=e,[k,D]=(0,x.useState)(null),[E,I]=(0,x.useState)(!1);return console.log("dialog email: ",k),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.Z,{open:b,onClose:f,"aria-labelledby":"form-dialog-title",children:[(0,t.jsx)(i.Z,{id:"form-dialog-title",children:r}),(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(c.Z,{sx:{mb:3},children:n}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.Z,{sx:{mt:2},fullWidth:!0,children:[(0,t.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&E,inputProps:{onChange(e){D(e.target.value),I(!(0,h.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&E&&(0,t.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,t.jsx)(p.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,t.jsxs)(a.Z,{className:"dialog-actions-dense",children:[Z&&(0,t.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,t.jsx)(o.Z,{variant:"contained",disabled:v&&(null==k?void 0:k.length)>0&&E,color:C||"error",onClick:v&&g?()=>{j(g,k),D(null),f()}:v&&!g?()=>{j(k),D(null),f()}:()=>{j(),f()},children:"Confirmar"})]})]})})};r.Z=f},89191:function(e,r,n){n.d(r,{Z:function(){return Z}});var t=n(85893),o=n(11163),l=n.n(o),i=n(67294),s=n(91359),a=n(61953),c=n(75084),d=n(41664),u=n.n(d),m=n(21609),p=n(46749),x=n(73812),h=n(86378),f=n(9942);function b(e){let{disabled:r,generateReport:n,dataReports:o,open:l,anchorEl:i,handleClick:s,handleClose:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:l,onClose:a,TransitionComponent:f.Z,children:o.map(e=>(0,t.jsxs)(h.Z,{onClick(){a(),n(e)},children:[(0,t.jsx)("span",{children:e.identification}),(0,t.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,t.jsx)("span",{children:e.name})]},e.id))})})}var j=n(40039),g=n(10160);let v=e=>{let{btnCancel:r,btnSave:n,btnSend:o,btnChangeStatus:d,handleSubmit:x,handleSend:h,handleChangeStatus:f,btnDelete:v,onclickDelete:Z,btnPrint:y,disabled:w,generateReport:C,dataReports:k}=e,D=l(),{user:E,routes:I}=(0,i.useContext)(j.V),[z,P]=(0,i.useState)(!1),[S,O]=(0,i.useState)(null),R=Boolean(S),A=e=>{O(e.currentTarget)},N=()=>{O(null)},_=(()=>{let e=D.pathname.split("/").slice(0,-1).join("/");return e||D.pathname})();return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>0?P(!0):P(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,t.jsx)(u(),{href:(0,p.g_)(D.pathname),children:(0,t.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,t.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),v&&I.find(e=>e.rota===_&&e.excluir)&&(0,t.jsx)(c.Z,{type:"button",onClick:Z,variant:"outlined",color:"error",size:"medium",startIcon:(0,t.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),d&&(0,t.jsx)(c.Z,{type:"button",onClick:f,variant:"outlined",color:"primary",size:"medium",startIcon:(0,t.jsx)(m.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,t.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[y&&1===k.length&&(0,t.jsx)(c.Z,{id:"fade-button","aria-controls":R?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:()=>C(k[0]),color:"primary",disabled:w,variant:"outlined",size:"medium",type:"button",startIcon:(0,t.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),y&&k.length>1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{id:"fade-button","aria-controls":R?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:A,color:"primary",disabled:w,variant:"outlined",size:"medium",type:"button",startIcon:(0,t.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,t.jsx)(b,{generateReport:C,dataReports:k,handleClick:A,handleClose:N,open:R,anchorEl:S})]}),n&&I.find(e=>e.rota===_&&e.editar)&&(0,t.jsx)(c.Z,{onClick:x,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:w,startIcon:(0,t.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),o&&2==E.papelID&&(0,t.jsx)(c.Z,{onClick:h,type:"button",variant:"contained",size:"medium",color:"primary",disabled:w,sx:{ml:2},startIcon:(0,t.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),z&&n&&I.find(e=>e.rota===_&&e.editar)&&(0,t.jsx)("div",{className:"\n                                ".concat(z?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,t.jsx)(g.Z,{color:"primary",size:"large",onClick:x,type:"submit",variant:"contained",disabled:w,children:(0,t.jsx)(m.Z,{icon:"material-symbols:save"})})})]})]})})};var Z=v},46749:function(e,r,n){n.d(r,{Lo:function(){return m},OD:function(){return u},OE:function(){return x},OL:function(){return d},WR:function(){return c},g_:function(){return p}});var t=n(85893),o=n(29630),l=n(41664),i=n.n(l),s=n(7071);n(67294),n(40039);var a=n(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,r)=>r.map((n,l)=>{let a=r[l].field;return{...n,flex:n.size,renderCell:n=>(0,t.jsx)(i(),{href:"".concat(e,"/").concat(n.row.id),children:(0,t.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===a){if("status"!=e.field)return n.row[e.field];{let o=c[n.row.status];return(0,t.jsx)(s.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let r=e.split("/"),n=r[r.length-1];return"novo"==n?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")},x=e=>{let r=e.route;console.log("fun\xe7\xe3o report"),a.h.post(r,null,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(r),t=window.open(n,"_blank");t||(window.location.href=n)}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},82747:function(e,r,n){function t(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),t=e.substring(r),o=0,l=r-7;for(let i=r;i>=1;i--)o+=n.charAt(r-i)*l--,l<2&&(l=9);let s=o%11<2?0:11-o%11;if(s!=t.charAt(0))return!1;r+=1,n=e.substring(0,r),o=0,l=r-7;for(let a=r;a>=1;a--)o+=n.charAt(r-a)*l--,l<2&&(l=9);return(s=o%11<2?0:11-o%11)==t.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let t=1;t<=9;t++)n+=parseInt(e.substring(t-1,t))*(11-t);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let o=1;o<=10;o++)n+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return l},sw:function(){return o},zk:function(){return t}})}}]);