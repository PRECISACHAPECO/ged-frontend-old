(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5500,9024],{88773:function(e,r,n){"use strict";var a=n(85893),o=n(11163),l=n.n(o),t=n(67294),i=n(60664),s=n(49837),d=n(91359),c=n(79072),u=n(55343),m=n(67836),p=n(29630),h=n(74231),x=n(87536),f=n(47533),b=n(32631),j=n(86501),v=n(45061),Z=n(46749),g=n(89191),y=n(34175),C=n(82747),P=n(49540),w=n(40039);let D=e=>{let{paramFornecedorUnidadeID:r}=e,{user:n}=(0,t.useContext)(w.V),[o,D]=(0,t.useState)(!1),[z,E]=(0,t.useState)(""),k=r||l().query.id,S=l(),$=(0,Z.Lo)(S.pathname),_="/configuracoes/unidade",B=(0,t.useRef)(null),I=h.Ry().shape({nomeFantasia:h.Z_().required(""),razaoSocial:h.Z_().nullable(),cnpj:h.Z_().nullable().test("","",function(e){let{errorCnpj:r}=this.parent;return!r&&(0,C.zk)(e)}),errorCnpj:h.O7().notRequired(),responsavel:h.Z_().nullable(),email:h.Z_().nullable(),dataCadastro:h.Z_().nullable(),telefone1:h.Z_().nullable(),telefone2:h.Z_().nullable(),cep:h.Z_().nullable(),logradouro:h.Z_().nullable(),complemento:h.Z_().nullable(),numero:h.Z_().nullable(),bairro:h.Z_().nullable(),cidade:h.Z_().nullable(),uf:h.Z_().nullable(),status:h.Z_().nullable()}),{control:F,handleSubmit:L,formState:{errors:N},reset:R,watch:W}=(0,x.cI)({resolver:(0,f.X)(I)}),V=async e=>{if(9==e.length){let r=e.replace(/\D/g,"");i.h.get("https://viacep.com.br/ws/"+r+"/json/").then(e=>{e.data.localidade?(R({...W(),logradouro:e.data.logradouro,bairro:e.data.bairro,cidade:e.data.localidade,uf:e.data.uf}),j.ZP.success("Endere\xe7o encontrado!")):j.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},Q=async e=>{let r={...e,dataCadastro:(0,P.p6)(e.dataCadastro,"YYYY-MM-DD")};try{"new"===$?(await i.h.post("".concat(_,"/novo"),r),j.ZP.success(Z.OD.successNew),R(r)):"edit"===$&&(await i.h.put("".concat(_,"/").concat(k),r),j.ZP.success(Z.OD.successUpdate),console.log(r))}catch(n){n.response&&409===n.response.status?j.ZP.error(Z.OD.errorRepeated):console.log(n)}},M=async()=>{try{await i.h.delete("".concat(_,"/").concat(k)),S.push(_),j.ZP.success(Z.OD.successDelete)}catch(e){e.response&&409===e.response.status?(j.ZP.error(Z.OD.pendingDelete),D(!1)):console.log(e)}};return(0,t.useEffect)(()=>{let e=async()=>{try{let e=await i.h.get("".concat(_,"/").concat(k));R(e.data),E(e.data),console.log("vem do banco",e.data)}catch(r){console.log(r)}};e(),"new"===$&&B.current.focus()},[]),console.log("unidade"),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{children:(0,a.jsxs)("form",{onSubmit:L(Q),children:[(0,a.jsx)(g.Z,{btnCancel:1===n.papelID,btnSave:!0,handleSubmit:()=>L(Q),btnDelete:"edit"===$&&1===n.papelID,onclickDelete:()=>D(!0)}),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"nomeFantasia",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Nome Fantasia",onChange:n,placeholder:"Nome Fantasia",error:Boolean(N.nomeFantasia),"aria-describedby":"validation-schema-nomeFantasia",inputRef:B})}}),N.nomeFantasia&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-nomeFantasia",children:N.nomeFantasia.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"razaoSocial",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Raz\xe3o Social",onChange:n,placeholder:"Raz\xe3o Social",error:Boolean(N.razaoSocial),"aria-describedby":"validation-schema-razaoSocial"})}}),N.razaoSocial&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-razaoSocial",children:N.razaoSocial.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cnpj",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.PK)(null!=r?r:""),label:"CNPJ",onChange:n,placeholder:"CNPJ",error:Boolean(N.cnpj),"aria-describedby":"validation-schema-cnpj",inputProps:{maxLength:18,type:"tel",inputMode:"numeric"}})}}),N.cnpj&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-cnpj"})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"responsavel",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Respons\xe1vel",onChange:n,placeholder:"Respons\xe1vel",error:Boolean(N.responsavel),"aria-describedby":"validation-schema-responsavel"})}}),N.responsavel&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-responsavel",children:N.responsavel.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"email",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Email",onChange:n,placeholder:"Email",error:Boolean(N.email),"aria-describedby":"validation-schema-email"})}}),N.email&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:N.email.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"telefone1",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Bk)(null!=r?r:""),label:"Telefone 1",onChange:n,placeholder:"Telefone 1",error:Boolean(N.telefone1),"aria-describedby":"validation-schema-telefone1",inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}}),N.telefone1&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-telefone1",children:N.telefone1.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"telefone2",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Bk)(null!=r?r:""),label:"Telefone 2",onChange:n,placeholder:"Telefone 2",error:Boolean(N.telefone2),"aria-describedby":"validation-schema-telefone2",inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}}),N.telefone2&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-telefone2",children:N.telefone2.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cep",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.Tc)(null!=r?r:""),label:"CEP",onChange(e){n(e),V(e.target.value)},placeholder:"CEP",error:Boolean(N.cep),"aria-describedby":"validation-schema-cep",inputProps:{maxLength:9,type:"tel",inputMode:"numeric"}})}}),N.cep&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-cep",children:N.cep.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"logradouro",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Logradouro",onChange:n,placeholder:"Logradouro",error:Boolean(N.logradouro),"aria-describedby":"validation-schema-logradouro"})}}),N.logradouro&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-logradouro",children:N.logradouro.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"numero",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"N\xfamero",onChange:n,placeholder:"N\xfamero",error:Boolean(N.numero),"aria-describedby":"validation-schema-numero",inputProps:{type:"tel",inputMode:"numeric"}})}}),N.numero&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-numero",children:N.numero.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"complemento",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Complemento",onChange:n,placeholder:"Complemento",error:Boolean(N.complemento),"aria-describedby":"validation-schema-complemento"})}}),N.complemento&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-complemento",children:N.complemento.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"bairro",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:null!=r?r:"",label:"Bairro",onChange:n,placeholder:"Bairro",error:Boolean(N.bairro),"aria-describedby":"validation-schema-bairro"})}}),N.bairro&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-bairro",children:N.bairro.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"cidade",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{label:"Cidade",onChange:n,placeholder:"Cidade",error:Boolean(N.cidade),"aria-describedby":"validation-schema-cidade",value:null!=r?r:"",defaultValue:"aaaaa"})}}),N.cidade&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-cidade",children:N.cidade.message})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(u.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Qr,{name:"uf",control:F,render(e){let{field:{value:r,onChange:n}}=e;return(0,a.jsx)(m.Z,{value:(0,y.CL)(null!=r?r:""),label:"UF",onChange:n,placeholder:"UF",error:Boolean(N.uf),"aria-describedby":"validation-schema-uf",inputProps:{maxLength:2}})}}),N.uf&&(0,a.jsx)(b.Z,{sx:{color:"error.main"},id:"validation-schema-uf",children:N.uf.message})]})})]})})]})}),"edit"===$&&(0,a.jsxs)(p.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",(0,P.p6)(z.dataCadastro,"DD/MM/YYYY")]}),(0,a.jsx)(v.Z,{title:"Excluir dado",text:"Tem certeza que deseja excluir?",openModal:o,handleClose:()=>D(!1),handleSubmit:M,btnCancel:!0,btnConfirm:!0})]})};r.Z=D},45061:function(e,r,n){"use strict";var a=n(85893),o=n(75084),l=n(29620),t=n(77745),i=n(95398),s=n(76779),d=n(44642);n(21609);var c=n(55343),u=n(67836),m=n(29630),p=n(19604),h=n(67294),x=n(82747);let f=e=>{let{title:r,text:n,handleClose:f,openModal:b,handleSubmit:j,cnpj:v,inputEmail:Z,btnCancel:g,btnConfirm:y,btnCancelColor:C,btnConfirmColor:P}=e,[w,D]=(0,h.useState)(null),[z,E]=(0,h.useState)(!1);return console.log("dialog email: ",w),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z,{open:b,onClose:f,"aria-labelledby":"form-dialog-title",children:[(0,a.jsx)(t.Z,{id:"form-dialog-title",children:r}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(d.Z,{sx:{mb:3},children:n}),Z&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Z,{sx:{mt:2},fullWidth:!0,children:[(0,a.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==w?void 0:w.length)>0&&z,inputProps:{onChange(e){D(e.target.value),E(!(0,x.dI)(e.target.value))}}}),(null==w?void 0:w.length)>0&&z&&(0,a.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,a.jsx)(p.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,a.jsxs)(s.Z,{className:"dialog-actions-dense",children:[g&&(0,a.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,a.jsx)(o.Z,{variant:"contained",disabled:Z&&(null==w?void 0:w.length)>0&&z,color:P||"error",onClick:Z&&v?()=>{j(v,w),D(null),f()}:Z&&!v?()=>{j(w),D(null),f()}:()=>{j(),f()},children:"Confirmar"})]})]})})};r.Z=f},89191:function(e,r,n){"use strict";n.d(r,{Z:function(){return C}});var a=n(85893),o=n(11163),l=n.n(o),t=n(67294),i=n(91359),s=n(61953),d=n(75084),c=n(72389),u=n(41664),m=n.n(u),p=n(21609),h=n(46749),x=n(73812),f=n(86378),b=n(9942),j=n(60565);function v(e){let{disabled:r,dataReports:n,open:o,anchorEl:l,handleClick:i,handleClose:s}=e,{generateReport:d}=(0,t.useContext)(j.f);return(0,a.jsx)("div",{children:(0,a.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:l,open:o,onClose:s,TransitionComponent:b.Z,children:n.map(e=>(0,a.jsxs)(f.Z,{onClick(){s(),d(e)},children:[(0,a.jsx)("span",{children:e.identification}),(0,a.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,a.jsx)("span",{children:e.name})]},e.id))})})}var Z=n(40039),g=n(10160);let y=e=>{let{btnCancel:r,btnSave:n,btnSend:o,btnChangeStatus:u,handleSubmit:x,disabledSubmit:f,handleSend:b,disabledSend:y,handleChangeStatus:C,btnDelete:P,onclickDelete:w,btnPrint:D,disabled:z,dataReports:E}=e,k=l(),{user:S,routes:$}=(0,t.useContext)(Z.V),{generateReport:_}=(0,t.useContext)(j.f),[B,I]=(0,t.useState)(!1),[F,L]=(0,t.useState)(null),N=Boolean(F),R=e=>{L(e.currentTarget)},W=()=>{L(null)},V=(()=>{let e=k.pathname.split("/").slice(0,-1).join("/");return e||k.pathname})(),Q=()=>{window.scrollTo({top:0,behavior:"smooth"})},M=()=>{window.history.back()};return(0,t.useEffect)(()=>{let e=()=>{I(!1),window.scrollY>0?I(!0):I(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,a.jsx)(m(),{href:(0,h.g_)(k.pathname),children:(0,a.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,a.jsx)(p.Z,{icon:"material-symbols:arrow-back-rounded"})})}),P&&$.find(e=>e.rota===V&&e.excluir)&&(0,a.jsx)(d.Z,{type:"button",onClick:w,variant:"outlined",color:"error",size:"medium",startIcon:(0,a.jsx)(p.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),u&&(0,a.jsx)(d.Z,{type:"button",onClick:C,variant:"outlined",color:"primary",size:"medium",startIcon:(0,a.jsx)(p.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,a.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[D&&1===E.length&&(0,a.jsx)(d.Z,{id:"fade-button","aria-controls":N?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":N?"true":void 0,onClick:()=>_(E[0]),color:"primary",disabled:z,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),D&&E.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{id:"fade-button","aria-controls":N?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":N?"true":void 0,onClick:R,color:"primary",disabled:z,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,a.jsx)(v,{generateReport:_,dataReports:E,handleClick:R,handleClose:W,open:N,anchorEl:F})]}),n&&$.find(e=>e.rota===V&&e.editar)&&(0,a.jsx)(d.Z,{onClick:x,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:z||f,startIcon:(0,a.jsx)(p.Z,{icon:"material-symbols:save"}),children:"Salvar"}),o&&2==S.papelID&&(0,a.jsx)(d.Z,{onClick:b,type:"button",variant:"contained",size:"medium",color:"primary",disabled:z||y,sx:{ml:2},startIcon:(0,a.jsx)(p.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),(0,a.jsx)("div",{className:"\n                        ".concat(B?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:z||f,icon:"material-symbols:save",function:x},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:print",function:R},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"ion:arrow-up",function:Q},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:arrow-back-rounded",function:M}].map(e=>(1!==e.id||n&&$.find(e=>e.rota===V&&e.editar))&&(2!==e.id||D)?(0,a.jsx)(c.Z,{title:e.title,placement:"left",children:(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:(0,a.jsx)(p.Z,{icon:e.icon})})},e.id)},e.id):null)})]})]})})};var C=y},49540:function(e,r,n){"use strict";n.d(r,{X1:function(){return d},p6:function(){return i},q:function(){return s}});var a=n(30381),o=n.n(a),l=n(68214),t=n.n(l);function i(e,r){let n=o()(e),a=n.format(r);return a}function s(e){let r=t()(e).toString();return r}function d(e){return e.replace(/[^0-9]/g,"")}},46749:function(e,r,n){"use strict";n.d(r,{Lo:function(){return m},OD:function(){return u},OE:function(){return h},OL:function(){return c},WR:function(){return d},g_:function(){return p}});var a=n(85893),o=n(29630),l=n(41664),t=n.n(l),i=n(7071);n(67294),n(40039);var s=n(60664);n(50196);let d={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},c=(e,r)=>r.map((n,l)=>{let s=r[l].field;return{...n,flex:n.size,renderCell:n=>(0,a.jsx)(t(),{href:"".concat(e,"/").concat(n.row.id),children:(0,a.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===s){if("status"!=e.field)return n.row[e.field];{let o=d[n.row.status];return(0,a.jsx)(i.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let r=e.split("/"),n=r[r.length-1];return"novo"==n?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")},h=e=>{let r=e.route;s.h.post(r,e.params,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(r);window.open(n,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,r,n){"use strict";function a(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function o(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function l(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function t(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function i(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(r,{Bk:function(){return l},CL:function(){return i},PK:function(){return a},Tc:function(){return t},VL:function(){return o}})},82747:function(e,r,n){"use strict";function a(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),a=e.substring(r),o=0,l=r-7;for(let t=r;t>=1;t--)o+=n.charAt(r-t)*l--,l<2&&(l=9);let i=o%11<2?0:11-o%11;if(i!=a.charAt(0))return!1;r+=1,n=e.substring(0,r),o=0,l=r-7;for(let s=r;s>=1;s--)o+=n.charAt(r-s)*l--,l<2&&(l=9);return(i=o%11<2?0:11-o%11)==a.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let a=1;a<=9;a++)n+=parseInt(e.substring(a-1,a))*(11-a);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let o=1;o<=10;o++)n+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return l},sw:function(){return o},zk:function(){return a}})},42480:function(){},47533:function(e,r,n){"use strict";n.d(r,{X:function(){return i}});var a=n(87536),o=function(e,r,n){if(e&&"reportValidity"in e){var o=(0,a.U2)(n,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},l=function(e,r){var n=function(n){var a=r.fields[n];a&&a.ref&&"reportValidity"in a.ref?o(a.ref,n,e):a.refs&&a.refs.forEach(function(r){return o(r,n,e)})};for(var a in r.fields)n(a)},t=function(e,r){r.shouldUseNativeValidation&&l(e,r);var n={};for(var o in e){var t=(0,a.U2)(r.fields,o);(0,a.t8)(n,o,Object.assign(e[o],{ref:t&&t.ref}))}return n},i=function(e,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),function(o,i,s){try{return Promise.resolve(function(a,t){try{var d=(r.context,Promise.resolve(e["sync"===n.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(e){return s.shouldUseNativeValidation&&l({},s),{values:n.rawValues?o:e,errors:{}}}))}catch(c){return t(c)}return d&&d.then?d.then(void 0,t):d}(0,function(e){var r;if(!e.inner)throw e;return{values:{},errors:t((r=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(e.inner||[]).reduce(function(e,n){if(e[n.path]||(e[n.path]={message:n.message,type:n.type}),r){var o=e[n.path].types,l=o&&o[n.type];e[n.path]=(0,a.KN)(n.path,r,e,n.type,l?[].concat(l,n.message):n.message)}return e},{})),s)}}))}catch(d){return Promise.reject(d)}}}}}]);