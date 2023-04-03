"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{19550:function(e,r,a){var l=a(62097),o=a(5026);let n=()=>{let e=(0,l.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,o.E)(e.palette.primary.main,.12)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,o.E)(e.palette.secondary.main,.12)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,o.E)(e.palette.success.main,.12)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,o.E)(e.palette.error.main,.12)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,o.E)(e.palette.warning.main,.12)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,o.E)(e.palette.info.main,.12)}}};r.Z=n},91342:function(e,r,a){a.d(r,{Z:function(){return k}});var l=a(85893),o=a(11163),n=a.n(o),i=a(67294),t=a(60664),s=a(49837),c=a(91359),d=a(79072),u=a(55343),m=a(67836),h=a(29630),x=a(74231),p=a(87536),j=a(47533),g=a(32631),f=a(86501),Z=a(47143),b=a(20102),v=a(60033);function y(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}var C=a(30381),P=a.n(C);function D(e,r){let a=P()(e),l=a.format(r);return l}let w=()=>{let[e,r]=(0,i.useState)(!1),[a,o]=(0,i.useState)(""),{id:C}=n().query,P=n(),w=(0,b.Lo)(P.pathname),k=(0,b.g_)(P.pathname),_=x.Ry().shape({nomeFantasia:x.Z_().required(""),razaoSocial:x.Z_().nullable(),cnpj:x.Z_().nullable().test("","",function(e){let{errorCnpj:r}=this.parent;return!r&&function(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,a=e.substring(0,r),l=e.substring(r),o=0,n=r-7;for(let i=r;i>=1;i--)o+=a.charAt(r-i)*n--,n<2&&(n=9);let t=o%11<2?0:11-o%11;if(t!=l.charAt(0))return!1;r+=1,a=e.substring(0,r),o=0,n=r-7;for(let s=r;s>=1;s--)o+=a.charAt(r-s)*n--,n<2&&(n=9);return(t=o%11<2?0:11-o%11)==l.charAt(1)}(e)}),errorCnpj:x.O7().notRequired(),responsavel:x.Z_().nullable(),email:x.Z_().nullable(),dataCadastro:x.Z_().nullable(),telefone1:x.Z_().nullable(),telefone2:x.Z_().nullable(),cep:x.Z_().nullable(),logradouro:x.Z_().nullable(),complemento:x.Z_().nullable(),numero:x.Z_().nullable(),bairro:x.Z_().nullable(),cidade:x.Z_().nullable(),uf:x.Z_().nullable(),status:x.Z_().nullable()}),{control:L,handleSubmit:E,formState:{errors:z},reset:F,watch:S}=(0,p.cI)({resolver:(0,j.X)(_)}),$=async e=>{if(9==e.length){let r=e.replace(/\D/g,"");t.h.get("https://viacep.com.br/ws/"+r+"/json/").then(e=>{F({...S(),logradouro:e.data.logradouro,bairro:e.data.bairro,cidade:e.data.localidade,uf:e.data.uf})})}},B=async e=>{let r={...e,dataCadastro:D(e.dataCadastro,"YYYY-MM-DD")};try{"new"===w?(await t.h.post("".concat(k,"/novo"),r),P.push(k),f.ZP.success(b.OD.successNew),F(r)):"edit"===w&&(await t.h.put("".concat(k,"/").concat(C),r),f.ZP.success(b.OD.successUpdate),console.log("editado"),console.log(r))}catch(a){a.response&&409===a.response.status?f.ZP.error(b.OD.errorRepeated):console.log(a)}},N=async()=>{try{await t.h.delete("".concat(k,"/").concat(C)),P.push(k),f.ZP.success(b.OD.successDelete)}catch(e){e.response&&409===e.response.status?(f.ZP.error(b.OD.pendingDelete),r(!1)):console.log(e)}};return(0,i.useEffect)(()=>{let e=async()=>{try{let e=await t.h.get("".concat(k,"/").concat(C));F(e.data),o(e.data)}catch(r){console.log(r)}};e()},[]),(0,l.jsxs)(l.Fragment,{children:[JSON.stringify(z),(0,l.jsx)(s.Z,{children:(0,l.jsxs)("form",{onSubmit:E(B),children:[(0,l.jsx)(v.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>E(B),btnDelete:"edit"===w,onclickDelete:()=>r(!0)}),(0,l.jsx)(c.Z,{children:(0,l.jsxs)(d.ZP,{container:!0,spacing:4,children:[(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"nomeFantasia",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Nome Fantasia",onChange:a,placeholder:"Nome Fantasia",error:Boolean(z.nomeFantasia),"aria-describedby":"validation-schema-nome"})}}),z.nomeFantasia&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:z.nomeFantasia.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"razaoSocial",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Raz\xe3o Social",onChange:a,placeholder:"Nome",error:Boolean(z.razaoSocial),"aria-describedby":"validation-schema-razaoSocial"})}}),z.razaoSocial&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-razaoSocial",children:z.razaoSocial.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cnpj",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(null!=r?r:"").replace(/\D/g,"").replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2"),label:"CNPJ",onChange:a,placeholder:"CNPJ",error:Boolean(z.cnpj),"aria-describedby":"validation-schema-cnpj",inputProps:{maxLength:18}})}}),z.cnpj&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-cnpj"})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"responsavel",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Respons\xe1vel",onChange:a,placeholder:"Respons\xe1vel",error:Boolean(z.responsavel),"aria-describedby":"validation-schema-responsavel"})}}),z.responsavel&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-responsavel",children:z.responsavel.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"email",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Email",onChange:a,placeholder:"Email",error:Boolean(z.email),"aria-describedby":"validation-schema-email"})}}),z.email&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:z.email.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"telefone1",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:y(null!=r?r:""),label:"Telefone 1",onChange:a,placeholder:"Telefone 1",error:Boolean(z.telefone1),"aria-describedby":"validation-schema-telefone1",inputProps:{maxLength:16}})}}),z.telefone1&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-telefone1",children:z.telefone1.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"telefone2",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:y(null!=r?r:""),label:"Telefone 2",onChange:a,placeholder:"Telefone 2",error:Boolean(z.telefone2),"aria-describedby":"validation-schema-telefone2",inputProps:{maxLength:16}})}}),z.telefone2&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-telefone2",children:z.telefone2.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cep",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(null!=r?r:"").replace(/\D/g,"").replace(/^(\d{5})(\d)/,"$1-$2"),label:"CEP",onChange(e){a(e),$(e.target.value)},placeholder:"CEP",error:Boolean(z.cep),"aria-describedby":"validation-schema-cep",inputProps:{maxLength:9}})}}),z.cep&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-cep",children:z.cep.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"logradouro",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Logradouro",onChange:a,placeholder:"Logradouro",error:Boolean(z.logradouro),"aria-describedby":"validation-schema-logradouro"})}}),z.logradouro&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-logradouro",children:z.logradouro.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"complemento",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Complemento",onChange:a,placeholder:"Complemento",error:Boolean(z.complemento),"aria-describedby":"validation-schema-complemento"})}}),z.complemento&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-complemento",children:z.complemento.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"numero",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"N\xfamero",onChange:a,placeholder:"N\xfamero",error:Boolean(z.numero),"aria-describedby":"validation-schema-numero"})}}),z.numero&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-numero",children:z.numero.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"bairro",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Bairro",onChange:a,placeholder:"Bairro",error:Boolean(z.bairro),"aria-describedby":"validation-schema-bairro"})}}),z.bairro&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-bairro",children:z.bairro.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cidade",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{label:"Cidade",onChange:a,placeholder:"Cidade",error:Boolean(z.cidade),"aria-describedby":"validation-schema-cidade",value:null!=r?r:"",defaultValue:"aaaaa"})}}),z.cidade&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-cidade",children:z.cidade.message})]})}),(0,l.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"uf",control:L,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(null!=r?r:"").toUpperCase().replace(/[^A-Z]/g,""),label:"UF",onChange:a,placeholder:"UF",error:Boolean(z.uf),"aria-describedby":"validation-schema-uf",inputProps:{maxLength:2}})}}),z.uf&&(0,l.jsx)(g.Z,{sx:{color:"error.main"},id:"validation-schema-uf",children:z.uf.message})]})})]})})]})}),"edit"===w&&(0,l.jsxs)(h.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",D(a.dataCadastro,"DD/MM/YYYY")]}),(0,l.jsx)(Z.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>r(!1),handleSubmit:N,btnCancelar:!0,btnConfirmar:!0})]})};var k=w},47143:function(e,r,a){var l=a(85893),o=a(75084),n=a(1890),i=a(77745),t=a(95398),s=a(76779),c=a(44642),d=a(21609);let u=e=>{let{title:r,text:a,handleClose:u,openModal:m,handleSubmit:h,btnCancelar:x,btnConfirmar:p}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(n.Z,{open:m,onClose:u,"aria-labelledby":"form-dialog-title",children:[(0,l.jsx)(i.Z,{id:"form-dialog-title",children:r}),(0,l.jsx)(t.Z,{children:(0,l.jsx)(c.Z,{sx:{mb:3},children:a})}),(0,l.jsxs)(s.Z,{className:"dialog-actions-dense",children:[x&&(0,l.jsx)(o.Z,{variant:"outlined",color:"primary",startIcon:(0,l.jsx)(d.Z,{icon:"material-symbols:cancel"}),onClick:u,children:"Cancelar"}),p&&(0,l.jsx)(o.Z,{variant:"outlined",color:"error",startIcon:(0,l.jsx)(d.Z,{icon:"line-md:circle-to-confirm-circle-transition"}),onClick:h,children:"Confirmar"})]})]})})};r.Z=u},60033:function(e,r,a){var l=a(85893),o=a(11163),n=a.n(o),i=a(91359),t=a(61953),s=a(75084),c=a(41664),d=a.n(c),u=a(21609),m=a(20102);let h=e=>{let{btnCancel:r,btnSave:a,handleSubmit:o,btnDelete:c,onclickDelete:h}=e,x=n();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsxs)(t.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,l.jsx)(d(),{href:(0,m.g_)(x.pathname),children:(0,l.jsx)(s.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,l.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"})})}),c&&(0,l.jsx)(s.Z,{type:"button",onClick:h,variant:"outlined",color:"error",size:"medium",startIcon:(0,l.jsx)(u.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,l.jsx)(t.Z,{sx:{display:"flex",gap:"8px"},children:a&&(0,l.jsx)(s.Z,{onClick:o,type:"submit",variant:"outlined",size:"medium",color:"primary",startIcon:(0,l.jsx)(u.Z,{icon:"material-symbols:save"}),children:"Salvar"})})]})})};r.Z=h},20102:function(e,r,a){a.d(r,{g_:function(){return p},OL:function(){return m},Lo:function(){return x},OD:function(){return h}});var l=a(85893),o=a(29630),n=a(41664),i=a.n(n),t=a(21448),s=a(86010),c=a(19550);let d=e=>{let{sx:r,skin:a,color:o,rounded:n}=e,i=(0,c.Z)(),d={primary:{...i.primaryLight},secondary:{...i.secondaryLight},success:{...i.successLight},error:{...i.errorLight},warning:{...i.warningLight},info:{...i.infoLight}},u={...e};return u.rounded=void 0,(0,l.jsx)(t.Z,{...u,variant:"filled",className:(0,s.Z)({"MuiChip-rounded":n,"MuiChip-light":"light"===a}),sx:"light"===a&&o?Object.assign(d[o],r):r})},u={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"}},m=(e,r)=>r.map((a,n)=>{let t=r[n].field;return{...a,flex:a.size,renderCell:a=>(0,l.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:(0,l.jsx)(i(),{href:"".concat(e,"/").concat(a.row.id),children:r&&r.map((e,r)=>{if(e.field===t){if("status"!=e.field)return a.row[e.field];{let o=u[a.row.status];return(0,l.jsx)(d,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),h={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},x=e=>{let r=e.split("/"),a=r[r.length-1];return"novo"==a?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")}}}]);