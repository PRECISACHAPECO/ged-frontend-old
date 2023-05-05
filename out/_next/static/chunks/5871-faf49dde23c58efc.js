"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5871],{75158:function(e,a,t){t.d(a,{Z:function(){return S}});var o=t(63366),n=t(87462),r=t(67294),i=t(86010),l=t(94780),s=t(41796),c=t(37743),d=t(58175),u=t(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=t(36622),v=t(78884),f=t(67074),b=t(1588),j=t(34867);function Z(e){return(0,j.Z)("MuiCheckbox",e)}let g=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=e=>{let{classes:a,indeterminate:t,color:o}=e,r={root:["root",t&&"indeterminate",`color${(0,h.Z)(o)}`]},i=(0,l.Z)(r,Z,a);return(0,n.Z)({},a,i)},D=(0,f.ZP)(c.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,a){let{ownerState:t}=e;return[a.root,t.indeterminate&&a.indeterminate,"default"!==t.color&&a[`color${(0,h.Z)(t.color)}`]]}})(({theme:e,ownerState:a})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===a.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===a.color?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),k=(0,u.jsx)(m,{}),P=(0,u.jsx)(p,{}),I=(0,u.jsx)(x,{}),w=r.forwardRef(function(e,a){var t,l;let s=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=k,color:d="primary",icon:p=P,indeterminate:m=!1,indeterminateIcon:x=I,inputProps:h,size:f="medium",className:b}=s,j=(0,o.Z)(s,C),Z=m?x:p,g=m?x:c,w=(0,n.Z)({},s,{color:d,indeterminate:m,size:f}),S=y(w);return(0,u.jsx)(D,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":m},h),icon:r.cloneElement(Z,{fontSize:null!=(t=Z.props.fontSize)?t:f}),checkedIcon:r.cloneElement(g,{fontSize:null!=(l=g.props.fontSize)?l:f}),ownerState:w,ref:a,className:(0,i.Z)(S.root,b)},j,{classes:S}))});var S=w},89191:function(e,a,t){t.d(a,{Z:function(){return Z}});var o=t(85893),n=t(11163),r=t.n(n),i=t(67294),l=t(91359),s=t(61953),c=t(75084),d=t(41664),u=t.n(d),p=t(21609),m=t(46749),x=t(73812),h=t(86378),v=t(9942);function f(e){let{disabled:a,generateReport:t,dataReports:n,open:r,anchorEl:i,handleClick:l,handleClose:s}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:r,onClose:s,TransitionComponent:v.Z,children:n.map(e=>(0,o.jsxs)(h.Z,{onClick(){s(),t(e)},children:[(0,o.jsx)("span",{children:e.identification}),(0,o.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,o.jsx)("span",{children:e.name})]},e.id))})})}var b=t(40039);let j=e=>{let{btnCancel:a,btnSave:t,handleSubmit:n,btnDelete:d,onclickDelete:x,btnPrint:h,disabled:v,generateReport:j,dataReports:Z}=e,g=r(),{routes:C}=(0,i.useContext)(b.V),y=g.pathname.split("/").slice(0,-1).join("/"),[D,k]=(0,i.useState)(null),P=Boolean(D),I=e=>{k(e.currentTarget)},w=()=>{k(null)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[a&&(0,o.jsx)(u(),{href:(0,m.g_)(g.pathname),children:(0,o.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(p.Z,{icon:"material-symbols:arrow-back-rounded"})})}),d&&C.find(e=>e.rota===y&&e.excluir)&&(0,o.jsx)(c.Z,{type:"button",onClick:x,variant:"outlined",color:"error",size:"medium",startIcon:(0,o.jsx)(p.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,o.jsxs)(s.Z,{sx:{display:"flex",gap:"8px"},children:[h&&1===Z.length&&(0,o.jsx)(c.Z,{id:"fade-button","aria-controls":P?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":P?"true":void 0,onClick:()=>j(Z[0]),color:"primary",disabled:v,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),h&&Z.length>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{id:"fade-button","aria-controls":P?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":P?"true":void 0,onClick:I,color:"primary",disabled:v,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,o.jsx)(f,{generateReport:j,dataReports:Z,handleClick:I,handleClose:w,open:P,anchorEl:D})]}),t&&C.find(e=>e.rota===y&&e.editar)&&(0,o.jsx)(c.Z,{onClick:n,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:v,startIcon:(0,o.jsx)(p.Z,{icon:"material-symbols:save"}),children:"Salvar"})]})]})})};var Z=j},5871:function(e,a,t){var o=t(85893),n=t(67294),r=t(87536),i=t(21609),l=t(49837),s=t(91359),c=t(79072),d=t(55343),u=t(67836),p=t(81284),m=t(95309),x=t(29630),h=t(22841),v=t(14398),f=t(11163),b=t.n(f),j=t(46749),Z=t(60664),g=t(89191),C=t(60565),y=t(40039),D=t(47842),k=t(86501),P=t(75158),I=t(66136),w=t(34175),S=t(26829),$=t(50720),z=t(54623),E=t(27484),V=t.n(E);t(57548);let F=()=>{var e,a,t,f;let{user:E,loggedUnity:F}=(0,n.useContext)(y.V),{setTitle:M}=(0,n.useContext)(C.f),[O,L]=(0,n.useState)(!0),[R,B]=(0,n.useState)([]),[A,_]=(0,n.useState)(null),[Q,W]=(0,n.useState)([]),[Y,N]=(0,n.useState)([]),[T,U]=(0,n.useState)([]),[H,q]=(0,n.useState)(""),G=b(),{id:K}=G.query,J=(0,j.g_)(G.pathname),{settings:X}=(0,n.useContext)(I.J6);X.mode;let ee=A&&R.reduce((e,a)=>(e[a.nomeColuna]=A[a.nomeColuna],e),{}),{register:ea,control:et,setValue:eo,handleSubmit:en,formState:{errors:er}}=(0,r.cI)();console.log("errors: ",er);let ei=async e=>{console.log("onSubmit: ",e);try{await Z.h.put("".concat(J,"/").concat(K),e).then(e=>{k.ZP.success(j.OD.successUpdate)})}catch(a){console.log(a)}},el=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");Z.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(eo("header.logradouro",e.data.logradouro),eo("header.bairro",e.data.bairro),eo("header.cidade",e.data.localidade),eo("header.estado",e.data.uf),k.ZP.success("Endere\xe7o encontrado!")):k.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},es=[{id:1,name:"Fornecedor",identification:"01",route:"relatorio/fornecedor",params:{fornecedorID:K,unidadeID:F.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"/relatorio/recepcao"},{id:3,name:"Ficha de Matr\xedcula",identification:"03",route:"/"},{id:4,name:"Ficha de Nacionalidade",identification:"04",route:"/"}];return(0,n.useEffect)(()=>{M("Formul\xe1rio do Fornecedor"),Z.h.get("".concat(J,"/").concat(F.unidadeID),{headers:{"function-name":"getData"}}).then(e=>{console.log("getData: ",e.data),B(e.data.fields),_(e.data.data),W(e.data.atividades),N(e.data.sistemasQualidade),U(e.data.blocos),q(e.data.info),L(!1)})},[ei]),(0,o.jsx)(o.Fragment,{children:O?(0,o.jsx)(D.Z,{}):(0,o.jsxs)("form",{onSubmit:en(ei),children:[(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(g.Z,{btnCancel:!0,btnSave:!0,btnPrint:!0,generateReport:j.OE,dataReports:es,handleSubmit:()=>en(ei),title:"Fornecedor"}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(c.ZP,{container:!0,spacing:4,children:R&&R.map((a,t)=>{var n;return(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsxs)(d.Z,{fullWidth:!0,children:[a&&"date"==a.tipo&&(0,o.jsx)($._,{dateAdapter:S.y,children:(0,o.jsx)(z.M,{label:"Selecione uma data",locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:V()(new Date),renderInput:e=>(0,o.jsx)(u.Z,{...e,variant:"outlined",name:"header.".concat(a.nomeColuna),...ea("header.".concat(a.nomeColuna),{required:!!a.obrigatorio})})})}),a&&"string"==a.tipo&&(0,o.jsx)(u.Z,{defaultValue:null!==(e=ee[a.nomeColuna])&&void 0!==e?e:"",label:a.nomeCampo,placeholder:a.nomeCampo,name:"header.".concat(a.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=er&&null!==(n=er.header)&&void 0!==n&&!!n[a.nomeColuna],...ea("header.".concat(a.nomeColuna),{required:!!a.obrigatorio}),onChange(e){"cnpj"==a.nomeColuna?e.target.value=(0,w.PK)(e.target.value):"cep"==a.nomeColuna?(e.target.value=(0,w.Tc)(e.target.value),el(e.target.value)):"telefone"==a.nomeColuna?e.target.value=(0,w.Bk)(e.target.value):"estado"==a.nomeColuna?e.target.value=(0,w.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"==a.nomeColuna?{maxLength:18}:"cep"==a.nomeColuna?{maxLength:9}:"telefone"==a.nomeColuna?{maxLength:15}:"estado"==a.nomeColuna?{maxLength:2}:{}})]})},t)})}),(0,o.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(p.ZP,{disablePadding:!0,children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(x.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Atividades"})})}),Q&&Q.map((e,a)=>(0,o.jsx)(p.ZP,{disablePadding:!0,children:(0,o.jsxs)(m.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"atividades.[".concat(a,"].atividadeID"),defaultValue:e.atividadeID,...ea("atividades.[".concat(a,"].atividadeID"))}),(0,o.jsx)(h.Z,{control:(0,o.jsx)(P.Z,{name:"atividades[".concat(a,"].checked"),...ea("atividades[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(p.ZP,{disablePadding:!0,children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(x.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Sistemas de Qualidade"})})}),Y&&Y.map((e,a)=>(0,o.jsx)(p.ZP,{disablePadding:!0,children:(0,o.jsxs)(m.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"sistemasQualidade.[".concat(a,"].sistemaQualidadeID"),defaultValue:e.sistemaQualidadeID,...ea("sistemasQualidade.[".concat(a,"].sistemaQualidadeID"))}),(0,o.jsx)(h.Z,{control:(0,o.jsx)(P.Z,{name:"sistemasQualidade[".concat(a,"].checked"),...ea("sistemasQualidade[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]})]})]})]}),T&&T.map((e,n)=>(0,o.jsx)(l.Z,{sx:{mt:4},children:(0,o.jsx)(s.Z,{children:(0,o.jsxs)(c.ZP,{container:!0,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].parFornecedorBlocoID"),defaultValue:e.parFornecedorBlocoID,...ea("blocos[".concat(n,"].parFornecedorBlocoID"))}),(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(x.Z,{variant:"subtitle1",sx:{fontWeight:600},children:e.nome})}),e.itens&&e.itens.map((e,r)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(r,"].itemID"),defaultValue:e.itemID,...ea("blocos[".concat(n,"].itens[").concat(r,"].itemID"))}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,o.jsx)(i.Z,{icon:"line-md:circle-to-confirm-circle-transition",style:{color:e.resposta?"green":"gray",fontSize:"20px"}}),e.ordem+" - "+e.nome]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:3,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(r,"].tipoAlternativa"),defaultValue:e.alternativa,...ea("blocos[".concat(n,"].itens[").concat(r,"].tipoAlternativa"))}),(0,o.jsxs)(d.Z,{fullWidth:!0,children:[e.alternativas&&e.alternativas.length>1&&(0,o.jsx)(v.Z,{options:e.alternativas,defaultValue:e.resposta?{nome:null==e?void 0:e.resposta}:{nome:""},id:"autocomplete-outlined",getOptionLabel:e=>e.nome,onChange(e,a){eo("blocos[".concat(n,"].itens[").concat(r,"].respostaID"),null==a?void 0:a.alternativaID)},renderInput:e=>(0,o.jsx)(u.Z,{...e,name:"blocos[".concat(n,"].itens[").concat(r,"].resposta"),label:"Selecione uma resposta",placeholder:"Selecione uma resposta",...ea("blocos[".concat(n,"].itens[").concat(r,"].resposta"))})}),0==e.alternativas.length&&"Data"==e.alternativa&&(0,o.jsx)($._,{dateAdapter:S.y,children:(0,o.jsx)(z.M,{label:"Selecione uma data",locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:e.resposta?V()(new Date(e.resposta)):"",onChange(e){eo("blocos[".concat(n,"].itens[").concat(r,"].resposta"),e)},renderInput:e=>(0,o.jsx)(u.Z,{...e,variant:"outlined",name:"blocos[".concat(n,"].itens[").concat(r,"].resposta"),...ea("blocos[".concat(n,"].itens[").concat(r,"].resposta"))})})}),0==e.alternativas.length&&"Dissertativa"==e.alternativa&&(0,o.jsx)(u.Z,{multiline:!0,label:"Descreva a resposta",placeholder:"Descreva a resposta",name:"blocos[".concat(n,"].itens[").concat(r,"].resposta"),defaultValue:null!==(a=e.resposta)&&void 0!==a?a:"",...ea("blocos[".concat(n,"].itens[").concat(r,"].resposta"))})]})]}),e&&1==e.obs&&(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(d.Z,{fullWidth:!0,children:(0,o.jsx)(u.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",name:"blocos[".concat(n,"].itens[").concat(r,"].observacao"),defaultValue:null!==(t=e.observacao)&&void 0!==t?t:"",...ea("blocos[".concat(n,"].itens[").concat(r,"].observacao"))})})})]},r)}))]})})},n)),(0,o.jsx)(l.Z,{sx:{mt:4},children:(0,o.jsx)(s.Z,{children:(0,o.jsx)(c.ZP,{container:!0,spacing:4,children:(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(d.Z,{fullWidth:!0,children:[(0,o.jsx)(x.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(u.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",placeholder:"Observa\xe7\xe3o (opcional)",name:"obs",defaultValue:null!==(f=H.obs)&&void 0!==f?f:"",...ea("obs")})]})})})})})]})})};a.Z=F},47842:function(e,a,t){var o=t(85893),n=t(70754),r=t(61953);let i=()=>(0,o.jsx)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});a.Z=i},46749:function(e,a,t){t.d(a,{Lo:function(){return p},OD:function(){return u},OE:function(){return x},OL:function(){return d},g_:function(){return m}});var o=t(85893),n=t(29630),r=t(41664),i=t.n(r),l=t(7071);t(67294),t(40039);var s=t(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,a)=>a.map((t,r)=>{let s=a[r].field;return{...t,flex:t.size,renderCell:t=>(0,o.jsx)(i(),{href:"".concat(e,"/").concat(t.row.id),children:(0,o.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:a&&a.map((e,a)=>{if(e.field===s){if("status"!=e.field)return t.row[e.field];{let n=c[t.row.status];return(0,o.jsx)(l.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},a)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let a=e.split("/"),t=a[a.length-1];return"novo"==t?"new":"edit"},m=e=>{let a=e.split("/");return a.pop(),a.join("/")},x=e=>{let a=e.route;s.h.post(a,e.params,{responseType:"arraybuffer"}).then(e=>{let a=new Blob([e.data],{type:"application/pdf"}),t=URL.createObjectURL(a);window.open(t,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,a,t){function o(e){return console.log("mask>: ",e),e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function n(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function r(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function i(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}t.d(a,{Bk:function(){return n},CL:function(){return i},PK:function(){return o},Tc:function(){return r}})}}]);