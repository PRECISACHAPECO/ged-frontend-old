"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8462],{91359:function(e,r,n){n.d(r,{Z:function(){return j}});var a=n(87462),o=n(63366),l=n(67294),t=n(86010),i=n(94780),s=n(67074),d=n(78884),c=n(1588),u=n(34867);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var p=n(85893);let h=["className","component"],x=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},m,r)},f=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=l.forwardRef(function(e,r){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:l,component:i="div"}=n,s=(0,o.Z)(n,h),c=(0,a.Z)({},n,{component:i}),u=x(c);return(0,p.jsx)(f,(0,a.Z)({as:i,className:(0,t.Z)(u.root,l),ownerState:c,ref:r},s))});var j=Z},49837:function(e,r,n){n.d(r,{Z:function(){return v}});var a=n(87462),o=n(63366),l=n(67294),t=n(86010),i=n(94780),s=n(67074),d=n(78884),c=n(70918),u=n(1588),m=n(34867);function p(e){return(0,m.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var h=n(85893);let x=["className","raised"],f=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},p,r)},Z=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),j=l.forwardRef(function(e,r){let n=(0,d.Z)({props:e,name:"MuiCard"}),{className:l,raised:i=!1}=n,s=(0,o.Z)(n,x),c=(0,a.Z)({},n,{raised:i}),u=f(c);return(0,h.jsx)(Z,(0,a.Z)({className:(0,t.Z)(u.root,l),elevation:i?8:void 0,ref:r,ownerState:c},s))});var v=j},98462:function(e,r,n){n.d(r,{Z:function(){return E}});var a=n(85893),o=n(11163),l=n.n(o),t=n(67294),i=n(60664),s=n(49837),d=n(91359),c=n(79072),u=n(55343),m=n(67836),p=n(29630),h=n(74231),x=n(87536),f=n(47533),Z=n(32631),j=n(86501),v=n(45061),b=n(46749),g=n(89191),y=n(34175),C=n(82747),P=n(30381),w=n.n(P);function D(e,r){let n=w()(e),a=n.format(r);return a}var $=n(40039);let z=e=>{let{paramFornecedorUnidadeID:r}=e,{user:n}=(0,t.useContext)($.V),[o,P]=(0,t.useState)(!1),[w,z]=(0,t.useState)(""),E=r||l().query.id,k=l(),_=(0,b.Lo)(k.pathname),B="/configuracoes/unidade",S=(0,t.useRef)(null),M=h.Ry().shape({nomeFantasia:h.Z_().required(""),razaoSocial:h.Z_().nullable(),cnpj:h.Z_().nullable().test("","",function(e){let{errorCnpj:r}=this.parent;return!r&&(0,C.zk)(e)}),errorCnpj:h.O7().notRequired(),responsavel:h.Z_().nullable(),email:h.Z_().nullable(),dataCadastro:h.Z_().nullable(),telefone1:h.Z_().nullable(),telefone2:h.Z_().nullable(),cep:h.Z_().nullable(),logradouro:h.Z_().nullable(),complemento:h.Z_().nullable(),numero:h.Z_().nullable(),bairro:h.Z_().nullable(),cidade:h.Z_().nullable(),uf:h.Z_().nullable(),status:h.Z_().nullable()}),{control:N,handleSubmit:R,formState:{errors:L},reset:I,watch:F}=(0,x.cI)({resolver:(0,f.X)(M)}),Q=async e=>{if(9==e.length){let r=e.replace(/\D/g,"");i.h.get("https://viacep.com.br/ws/"+r+"/json/").then(e=>{e.data.localidade?(I({...F(),logradouro:e.data.logradouro,bairro:e.data.bairro,cidade:e.data.localidade,uf:e.data.uf}),j.ZP.success("Endere\xe7o encontrado!")):j.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},W=async e=>{let r={...e,dataCadastro:D(e.dataCadastro,"YYYY-MM-DD")};try{"new"===_?(await i.h.post("".concat(B,"/novo"),r),j.ZP.success(b.OD.successNew),I(r)):"edit"===_&&(await i.h.put("".concat(B,"/").concat(E),r),j.ZP.success(b.OD.successUpdate),console.log("editado"),console.log(r))}catch(n){n.response&&409===n.response.status?j.ZP.error(b.OD.errorRepeated):console.log(n)}},O=async()=>{try{await i.h.delete("".concat(B,"/").concat(E)),k.push(B),j.ZP.success(b.OD.successDelete)}catch(e){e.response&&409===e.response.status?(j.ZP.error(b.OD.pendingDelete),P(!1)):console.log(e)}};return(0,t.useEffect)(()=>{let e=async()=>{try{let e=await i.h.get("".concat(B,"/").concat(E));I(e.data),z(e.data),console.log(e.data)}catch(r){console.log(r)}};e(),"new"===_&&S.current.focus()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{children:(0,a.jsxs)("form",{onSubmit:R(W),children:[(0,a.jsx)(g.Z,{btnCancel:1===n.papelID,btnSave:!0,handleSubmit:()=>R(W),btnDelete:"edit"===_&&1===n.papelID,onclickDelete:()=>P(!0)}),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"nomeFantasia",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Nome Fantasia",onChange:n,placeholder:"Nome Fantasia",error:Boolean(L.nomeFantasia),"aria-describedby":"validation-schema-nomeFantasia",inputRef:S})}}),L.nomeFantasia&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-nomeFantasia",children:L.nomeFantasia.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"razaoSocial",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Raz\xe3o Social",onChange:n,placeholder:"Raz\xe3o Social",error:Boolean(L.razaoSocial),"aria-describedby":"validation-schema-razaoSocial"})}}),L.razaoSocial&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-razaoSocial",children:L.razaoSocial.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cnpj",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.PK)(null!=r?r:""),label:"CNPJ",onChange:n,placeholder:"CNPJ",error:Boolean(L.cnpj),"aria-describedby":"validation-schema-cnpj",inputProps:{maxLength:18,type:"tel",inputMode:"numeric"}})}}),L.cnpj&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cnpj"})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"responsavel",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Respons\xe1vel",onChange:n,placeholder:"Respons\xe1vel",error:Boolean(L.responsavel),"aria-describedby":"validation-schema-responsavel"})}}),L.responsavel&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-responsavel",children:L.responsavel.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"email",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Email",onChange:n,placeholder:"Email",error:Boolean(L.email),"aria-describedby":"validation-schema-email"})}}),L.email&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:L.email.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"telefone1",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Bk)(null!=r?r:""),label:"Telefone 1",onChange:n,placeholder:"Telefone 1",error:Boolean(L.telefone1),"aria-describedby":"validation-schema-telefone1",inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}}),L.telefone1&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-telefone1",children:L.telefone1.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"telefone2",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Bk)(null!=r?r:""),label:"Telefone 2",onChange:n,placeholder:"Telefone 2",error:Boolean(L.telefone2),"aria-describedby":"validation-schema-telefone2",inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}}),L.telefone2&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-telefone2",children:L.telefone2.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cep",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Tc)(null!=r?r:""),label:"CEP",onChange(e){n(e),Q(e.target.value)},placeholder:"CEP",error:Boolean(L.cep),"aria-describedby":"validation-schema-cep",inputProps:{maxLength:9,type:"tel",inputMode:"numeric"}})}}),L.cep&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cep",children:L.cep.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"logradouro",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Logradouro",onChange:n,placeholder:"Logradouro",error:Boolean(L.logradouro),"aria-describedby":"validation-schema-logradouro"})}}),L.logradouro&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-logradouro",children:L.logradouro.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"numero",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"N\xfamero",onChange:n,placeholder:"N\xfamero",error:Boolean(L.numero),"aria-describedby":"validation-schema-numero",inputProps:{type:"tel",inputMode:"numeric"}})}}),L.numero&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-numero",children:L.numero.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"complemento",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Complemento",onChange:n,placeholder:"Complemento",error:Boolean(L.complemento),"aria-describedby":"validation-schema-complemento"})}}),L.complemento&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-complemento",children:L.complemento.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"bairro",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Bairro",onChange:n,placeholder:"Bairro",error:Boolean(L.bairro),"aria-describedby":"validation-schema-bairro"})}}),L.bairro&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-bairro",children:L.bairro.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cidade",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{label:"Cidade",onChange:n,placeholder:"Cidade",error:Boolean(L.cidade),"aria-describedby":"validation-schema-cidade",value:null!=r?r:"",defaultValue:"aaaaa"})}}),L.cidade&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cidade",children:L.cidade.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"uf",control:N,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.CL)(null!=r?r:""),label:"UF",onChange:n,placeholder:"UF",error:Boolean(L.uf),"aria-describedby":"validation-schema-uf",inputProps:{maxLength:2}})}}),L.uf&&(0,a.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-uf",children:L.uf.message})]})})]})})]})}),"edit"===_&&(0,a.jsxs)(p.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",D(w.dataCadastro,"DD/MM/YYYY")]}),(0,a.jsx)(v.Z,{title:"Excluir dado",text:"Tem certeza que deseja excluir?",openModal:o,handleClose:()=>P(!1),handleSubmit:O,btnCancel:!0,btnConfirm:!0})]})};var E=z},45061:function(e,r,n){var a=n(85893),o=n(75084),l=n(29620),t=n(77745),i=n(95398),s=n(76779),d=n(44642);n(21609);let c=e=>{let{title:r,text:n,handleClose:c,openModal:u,handleSubmit:m,btnCancel:p,btnConfirm:h,btnCancelColor:x,btnConfirmColor:f}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z,{open:u,onClose:c,"aria-labelledby":"form-dialog-title",children:[(0,a.jsx)(t.Z,{id:"form-dialog-title",children:r}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(d.Z,{sx:{mb:3},children:n})}),(0,a.jsxs)(s.Z,{className:"dialog-actions-dense",children:[p&&(0,a.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:c,children:"Cancelar"}),h&&(0,a.jsx)(o.Z,{variant:"contained",color:f||"error",onClick:m,children:"Confirmar"})]})]})})};r.Z=c},89191:function(e,r,n){n.d(r,{Z:function(){return g}});var a=n(85893),o=n(11163),l=n.n(o),t=n(67294),i=n(91359),s=n(61953),d=n(75084),c=n(41664),u=n.n(c),m=n(21609),p=n(46749),h=n(73812),x=n(86378),f=n(9942);function Z(e){let{disabled:r,generateReport:n,dataReports:o,open:l,anchorEl:t,handleClick:i,handleClose:s}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:t,open:l,onClose:s,TransitionComponent:f.Z,children:o.map(e=>(0,a.jsxs)(x.Z,{onClick(){s(),n(e)},children:[(0,a.jsx)("span",{children:e.identification}),(0,a.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,a.jsx)("span",{children:e.name})]},e.id))})})}var j=n(40039),v=n(10160);let b=e=>{let{btnCancel:r,btnSave:n,handleSubmit:o,btnDelete:c,onclickDelete:h,btnPrint:x,disabled:f,generateReport:b,dataReports:g}=e,y=l(),{routes:C}=(0,t.useContext)(j.V),[P,w]=(0,t.useState)(!1),[D,$]=(0,t.useState)(null),z=Boolean(D),E=e=>{$(e.currentTarget)},k=()=>{$(null)},_=(()=>{let e=y.pathname.split("/").slice(0,-1).join("/");return e||y.pathname})();return(0,t.useEffect)(()=>{let e=()=>{window.scrollY>0?w(!0):w(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),console.log("Header: ",n,_),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,a.jsx)(u(),{href:(0,p.g_)(y.pathname),children:(0,a.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,a.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),c&&C.find(e=>e.rota===_&&e.excluir)&&(0,a.jsx)(d.Z,{type:"button",onClick:h,variant:"outlined",color:"error",size:"medium",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,a.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[x&&1===g.length&&(0,a.jsx)(d.Z,{id:"fade-button","aria-controls":z?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":z?"true":void 0,onClick:()=>b(g[0]),color:"primary",disabled:f,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),x&&g.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{id:"fade-button","aria-controls":z?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":z?"true":void 0,onClick:E,color:"primary",disabled:f,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,a.jsx)(Z,{generateReport:b,dataReports:g,handleClick:E,handleClose:k,open:z,anchorEl:D})]}),n&&C.find(e=>e.rota===_&&e.editar)&&(0,a.jsx)(d.Z,{onClick:o,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:f,startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),P&&(0,a.jsx)("div",{className:"\n                                ".concat(P?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,a.jsx)(v.Z,{color:"primary",size:"large",onClick:o,type:"submit",variant:"contained",disabled:f,children:(0,a.jsx)(m.Z,{icon:"material-symbols:save"})})})]})]})})};var g=b},46749:function(e,r,n){n.d(r,{Lo:function(){return m},OD:function(){return u},OE:function(){return h},OL:function(){return c},g_:function(){return p}});var a=n(85893),o=n(29630),l=n(41664),t=n.n(l),i=n(7071);n(67294),n(40039);var s=n(60664);let d={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},c=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.map((l,s)=>{let c=r[s].field;return{...l,flex:l.size,renderCell:l=>(0,a.jsx)(t(),{href:"".concat(e,"/").concat(l.row.id),children:(0,a.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===c){if("status"!=e.field)return l.row[e.field];{let o=d[l.row.status];return n?o.title:(0,a.jsx)(i.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}})},u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let r=e.split("/"),n=r[r.length-1];return"novo"==n?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")},h=e=>{let r=e.route;s.h.post(r,e.params,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(r);window.open(n,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,r,n){function a(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function o(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function l(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function t(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function i(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(r,{Bk:function(){return l},CL:function(){return i},PK:function(){return a},Tc:function(){return t},VL:function(){return o}})},82747:function(e,r,n){function a(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),a=e.substring(r),o=0,l=r-7;for(let t=r;t>=1;t--)o+=n.charAt(r-t)*l--,l<2&&(l=9);let i=o%11<2?0:11-o%11;if(i!=a.charAt(0))return!1;r+=1,n=e.substring(0,r),o=0,l=r-7;for(let s=r;s>=1;s--)o+=n.charAt(r-s)*l--,l<2&&(l=9);return(i=o%11<2?0:11-o%11)==a.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let a=1;a<=9;a++)n+=parseInt(e.substring(a-1,a))*(11-a);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let o=1;o<=10;o++)n+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return l},sw:function(){return o},zk:function(){return a}})},47533:function(e,r,n){n.d(r,{X:function(){return i}});var a=n(87536),o=function(e,r,n){if(e&&"reportValidity"in e){var o=(0,a.U2)(n,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},l=function(e,r){var n=function(n){var a=r.fields[n];a&&a.ref&&"reportValidity"in a.ref?o(a.ref,n,e):a.refs&&a.refs.forEach(function(r){return o(r,n,e)})};for(var a in r.fields)n(a)},t=function(e,r){r.shouldUseNativeValidation&&l(e,r);var n={};for(var o in e){var t=(0,a.U2)(r.fields,o);(0,a.t8)(n,o,Object.assign(e[o],{ref:t&&t.ref}))}return n},i=function(e,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),function(o,i,s){try{return Promise.resolve(function(a,t){try{var d=(r.context,Promise.resolve(e["sync"===n.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(e){return s.shouldUseNativeValidation&&l({},s),{values:n.rawValues?o:e,errors:{}}}))}catch(c){return t(c)}return d&&d.then?d.then(void 0,t):d}(0,function(e){var r;if(!e.inner)throw e;return{values:{},errors:t((r=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(e.inner||[]).reduce(function(e,n){if(e[n.path]||(e[n.path]={message:n.message,type:n.type}),r){var o=e[n.path].types,l=o&&o[n.type];e[n.path]=(0,a.KN)(n.path,r,e,n.type,l?[].concat(l,n.message):n.message)}return e},{})),s)}}))}catch(d){return Promise.reject(d)}}}}}]);