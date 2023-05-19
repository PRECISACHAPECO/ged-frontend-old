"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5871],{75158:function(e,a,t){t.d(a,{Z:function(){return S}});var n=t(63366),o=t(87462),r=t(67294),i=t(86010),s=t(94780),l=t(41796),c=t(37743),d=t(54235),u=t(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=t(36622),f=t(78884),v=t(67074),j=t(1588),b=t(34867);function Z(e){return(0,b.Z)("MuiCheckbox",e)}let g=(0,j.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=e=>{let{classes:a,indeterminate:t,color:n}=e,r={root:["root",t&&"indeterminate",`color${(0,h.Z)(n)}`]},i=(0,s.Z)(r,Z,a);return(0,o.Z)({},a,i)},D=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,a){let{ownerState:t}=e;return[a.root,t.indeterminate&&a.indeterminate,"default"!==t.color&&a[`color${(0,h.Z)(t.color)}`]]}})(({theme:e,ownerState:a})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===a.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===a.color?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),I=(0,u.jsx)(m,{}),P=(0,u.jsx)(p,{}),k=(0,u.jsx)(x,{}),w=r.forwardRef(function(e,a){var t,s;let l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=I,color:d="primary",icon:p=P,indeterminate:m=!1,indeterminateIcon:x=k,inputProps:h,size:v="medium",className:j}=l,b=(0,n.Z)(l,C),Z=m?x:p,g=m?x:c,w=(0,o.Z)({},l,{color:d,indeterminate:m,size:v}),S=y(w);return(0,u.jsx)(D,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},h),icon:r.cloneElement(Z,{fontSize:null!=(t=Z.props.fontSize)?t:v}),checkedIcon:r.cloneElement(g,{fontSize:null!=(s=g.props.fontSize)?s:v}),ownerState:w,ref:a,className:(0,i.Z)(S.root,j)},b,{classes:S}))});var S=w},89191:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(85893),o=t(11163),r=t.n(o),i=t(67294),s=t(91359),l=t(61953),c=t(75084),d=t(41664),u=t.n(d),p=t(21609),m=t(46749),x=t(73812),h=t(86378),f=t(9942);function v(e){let{disabled:a,generateReport:t,dataReports:o,open:r,anchorEl:i,handleClick:s,handleClose:l}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:r,onClose:l,TransitionComponent:f.Z,children:o.map(e=>(0,n.jsxs)(h.Z,{onClick(){l(),t(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}var j=t(40039),b=t(10160);let Z=e=>{let{btnCancel:a,btnSave:t,handleSubmit:o,btnDelete:d,onclickDelete:x,btnPrint:h,disabled:f,generateReport:Z,dataReports:g}=e,C=r(),{routes:y}=(0,i.useContext)(j.V),[D,I]=(0,i.useState)(!1),[P,k]=(0,i.useState)(null),w=Boolean(P),S=e=>{k(e.currentTarget)},$=()=>{k(null)},F=(()=>{let e=C.pathname.split("/").slice(0,-1).join("/");return e||C.pathname})();return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>0?I(!0):I(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),console.log("Header: ",t,F),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[a&&(0,n.jsx)(u(),{href:(0,m.g_)(C.pathname),children:(0,n.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(p.Z,{icon:"material-symbols:arrow-back-rounded"})})}),d&&y.find(e=>e.rota===F&&e.excluir)&&(0,n.jsx)(c.Z,{type:"button",onClick:x,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,n.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[h&&1===g.length&&(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":w?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":w?"true":void 0,onClick:()=>Z(g[0]),color:"primary",disabled:f,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),h&&g.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{id:"fade-button","aria-controls":w?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":w?"true":void 0,onClick:S,color:"primary",disabled:f,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(v,{generateReport:Z,dataReports:g,handleClick:S,handleClose:$,open:w,anchorEl:P})]}),t&&y.find(e=>e.rota===F&&e.editar)&&(0,n.jsx)(c.Z,{onClick:o,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:f,startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:save"}),children:"Salvar"}),D&&(0,n.jsx)("div",{className:"\n                                ".concat(D?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,n.jsx)(b.Z,{color:"primary",size:"large",onClick:o,type:"submit",variant:"contained",disabled:f,children:(0,n.jsx)(p.Z,{icon:"material-symbols:save"})})})]})]})})};var g=Z},5871:function(e,a,t){var n=t(85893),o=t(67294),r=t(87536),i=t(21609),s=t(49837),l=t(91359),c=t(79072),d=t(29630),u=t(55343),p=t(67836),m=t(81284),x=t(95309),h=t(22841),f=t(35966),v=t(75084),j=t(11163),b=t.n(j),Z=t(46749),g=t(60664),C=t(89191),y=t(60565),D=t(40039),I=t(47842),P=t(86501),k=t(75158),w=t(66136),S=t(34175),$=t(26829),F=t(50720),z=t(54623),E=t(13860),V=t.n(E);t(57548);let L=()=>{var e,a,t;let{user:j,loggedUnity:E}=(0,o.useContext)(D.V),{setTitle:L}=(0,o.useContext)(y.f),[O,M]=(0,o.useState)(!0),[R,A]=(0,o.useState)([]),[B,Q]=(0,o.useState)(null),[_,N]=(0,o.useState)([]),[W,Y]=(0,o.useState)([]),[H,T]=(0,o.useState)([]),[U,q]=(0,o.useState)(""),[G,K]=(0,o.useState)([]),[J,X]=(0,o.useState)(null),[ee,ea]=(0,o.useState)(!1),et=b(),{id:en}=et.query,eo=(0,Z.g_)(et.pathname),er=(0,Z.Lo)(et.pathname),{settings:ei}=(0,o.useContext)(w.J6);ei.mode;let es=B&&R.reduce((e,a)=>(e[a.nomeColuna]=B[a.nomeColuna],e),{}),{register:el,control:ec,setValue:ed,handleSubmit:eu,formState:{errors:ep}}=(0,r.cI)();console.log("errors: ",ep);let em=async e=>{console.log("onSubmit: ",e);try{if("new"===er){let a=await g.h.post("".concat(eo,"/novo"),e);et.replace("".concat(eo,"/").concat(a.data.id)),P.ZP.success(Z.OD.successNew)}else await g.h.put("".concat(eo,"/").concat(en),e).then(e=>{P.ZP.success(Z.OD.successUpdate)})}catch(t){console.log(t)}},ex=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");g.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(ed("header.logradouro",e.data.logradouro),ed("header.bairro",e.data.bairro),ed("header.cidade",e.data.localidade),ed("header.estado",e.data.uf),P.ZP.success("Endere\xe7o encontrado!")):P.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},eh=[{id:1,name:"Fornecedor",identification:"01",route:"relatorio/fornecedor",params:{fornecedorID:en,unidadeID:E.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"/relatorio/recepcao"},{id:3,name:"Ficha de Matr\xedcula",identification:"03",route:"/"},{id:4,name:"Ficha de Nacionalidade",identification:"04",route:"/"}],ef=async()=>{console.log("\uD83D\uDE80 getFabricas: ",j.cnpj),M(!0),await g.h.post("".concat(eo,"/getFabricas"),{cnpj:j.cnpj}).then(e=>{K(e.data),M(!1)})},ev=async()=>{console.log("\uD83D\uDE80 ~ file: FormFornecedor.jsx:164 ~ getFormStructure ~ value:",J),M(!0),await g.h.post("".concat(eo,"/getFormStructure"),{unidadeID:J.unidadeID}).then(e=>{A(e.data.fields),N(e.data.atividades),Y(e.data.sistemasQualidade),T(e.data.blocos),ea(!0),M(!1)})};return(0,o.useEffect)(()=>{L("Formul\xe1rio do Fornecedor"),"new"==er?2==j.papelID?ef():(et.push("/formularios/fornecedor/"),P.ZP.error("Voc\xea n\xe3o tem permiss\xf5es para acessar esta p\xe1gina!")):(e=>{g.h.get("".concat(eo,"/").concat(e)).then(e=>{console.log("getData: ",e.data),A(e.data.fields),N(e.data.atividades),Y(e.data.sistemasQualidade),T(e.data.blocos),Q(e.data.data),q(e.data.info),M(!1)})})(en)},[]),(0,n.jsx)(n.Fragment,{children:O?(0,n.jsx)(I.Z,{}):B||ee?(0,n.jsxs)("form",{onSubmit:eu(em),children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(C.Z,{btnCancel:!0,btnSave:!0,btnPrint:!0,generateReport:Z.OE,dataReports:eh,handleSubmit:()=>eu(em),title:"Fornecedor"}),(0,n.jsxs)(l.Z,{children:[J&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"hidden",value:J.unidadeID,name:"unidadeID",...el("unidadeID")}),(0,n.jsx)(c.ZP,{container:!0,spacing:4,children:(0,n.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,n.jsx)(d.Z,{variant:"caption",children:"F\xe1brica:"}),(0,n.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:J.nomeFantasia})]})})]}),(0,n.jsx)(c.ZP,{container:!0,spacing:4,sx:{mt:4},children:R&&R.map((e,a)=>{var t;return(0,n.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,n.jsxs)(u.Z,{fullWidth:!0,children:[e&&"date"==e.tipo&&(0,n.jsx)(F._,{dateAdapter:$.y,children:(0,n.jsx)(z.M,{label:"Selecione uma data",locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:V()(new Date),renderInput:a=>(0,n.jsx)(p.Z,{...a,variant:"outlined",name:"header.".concat(e.nomeColuna),...el("header.".concat(e.nomeColuna),{required:!!e.obrigatorio})})})}),e&&"string"==e.tipo&&(0,n.jsx)(p.Z,{defaultValue:es?es[e.nomeColuna]:"",label:e.nomeCampo,placeholder:e.nomeCampo,name:"header.".concat(e.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=ep&&null!==(t=ep.header)&&void 0!==t&&!!t[e.nomeColuna],...el("header.".concat(e.nomeColuna),{required:!!e.obrigatorio}),onChange(a){"cnpj"==e.nomeColuna?a.target.value=(0,S.PK)(a.target.value):"cep"==e.nomeColuna?(a.target.value=(0,S.Tc)(a.target.value),ex(a.target.value)):"telefone"==e.nomeColuna?a.target.value=(0,S.Bk)(a.target.value):"estado"==e.nomeColuna?a.target.value=(0,S.CL)(a.target.value):a.target.value=a.target.value},inputProps:"cnpj"==e.nomeColuna?{maxLength:18}:"cep"==e.nomeColuna?{maxLength:9}:"telefone"==e.nomeColuna?{maxLength:15}:"estado"==e.nomeColuna?{maxLength:2}:{}})]})},a)})}),(0,n.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,n.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,n.jsx)(m.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Atividades"})})}),_&&_.map((e,a)=>(0,n.jsx)(m.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"atividades.[".concat(a,"].atividadeID"),defaultValue:e.atividadeID,...el("atividades.[".concat(a,"].atividadeID"))}),(0,n.jsx)(h.Z,{control:(0,n.jsx)(k.Z,{name:"atividades[".concat(a,"].checked"),...el("atividades[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]}),(0,n.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,n.jsx)(m.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Sistemas de Qualidade"})})}),W&&W.map((e,a)=>(0,n.jsx)(m.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"sistemasQualidade.[".concat(a,"].sistemaQualidadeID"),defaultValue:e.sistemaQualidadeID,...el("sistemasQualidade.[".concat(a,"].sistemaQualidadeID"))}),(0,n.jsx)(h.Z,{control:(0,n.jsx)(k.Z,{name:"sistemasQualidade[".concat(a,"].checked"),...el("sistemasQualidade[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]})]})]})]}),H&&H.map((t,o)=>(0,n.jsx)(s.Z,{sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsxs)(c.ZP,{container:!0,children:[(0,n.jsx)("input",{type:"hidden",name:"blocos[".concat(o,"].parFornecedorBlocoID"),defaultValue:t.parFornecedorBlocoID,...el("blocos[".concat(o,"].parFornecedorBlocoID"))}),(0,n.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:t.nome})}),t.itens&&t.itens.map((t,r)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,n.jsx)("input",{type:"hidden",name:"blocos[".concat(o,"].itens[").concat(r,"].itemID"),defaultValue:t.itemID,...el("blocos[".concat(o,"].itens[").concat(r,"].itemID"))}),(0,n.jsxs)(c.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,n.jsx)(i.Z,{icon:"line-md:circle-to-confirm-circle-transition",style:{color:t.resposta?"green":"gray",fontSize:"20px"}}),t.ordem+" - "+t.nome]}),(0,n.jsxs)(c.ZP,{item:!0,xs:12,md:3,children:[(0,n.jsx)("input",{type:"hidden",name:"blocos[".concat(o,"].itens[").concat(r,"].tipoAlternativa"),defaultValue:t.alternativa,...el("blocos[".concat(o,"].itens[").concat(r,"].tipoAlternativa"))}),(0,n.jsxs)(u.Z,{fullWidth:!0,children:[t.alternativas&&t.alternativas.length>1&&(0,n.jsx)(f.Z,{options:t.alternativas,defaultValue:t.resposta?{nome:null==t?void 0:t.resposta}:{nome:""},id:"autocomplete-outlined",getOptionLabel:e=>e.nome,onChange(e,a){ed("blocos[".concat(o,"].itens[").concat(r,"].respostaID"),null==a?void 0:a.alternativaID)},renderInput:e=>(0,n.jsx)(p.Z,{...e,name:"blocos[".concat(o,"].itens[").concat(r,"].resposta"),label:"Selecione uma resposta",placeholder:"Selecione uma resposta",...el("blocos[".concat(o,"].itens[").concat(r,"].resposta"))})}),0==t.alternativas.length&&"Data"==t.alternativa&&(0,n.jsx)(F._,{dateAdapter:$.y,children:(0,n.jsx)(z.M,{label:"Selecione uma data",locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:t.resposta?V()(new Date(t.resposta)):"",onChange(e){ed("blocos[".concat(o,"].itens[").concat(r,"].resposta"),e)},renderInput:e=>(0,n.jsx)(p.Z,{...e,variant:"outlined",name:"blocos[".concat(o,"].itens[").concat(r,"].resposta"),...el("blocos[".concat(o,"].itens[").concat(r,"].resposta"))})})}),0==t.alternativas.length&&"Dissertativa"==t.alternativa&&(0,n.jsx)(p.Z,{multiline:!0,label:"Descreva a resposta",placeholder:"Descreva a resposta",name:"blocos[".concat(o,"].itens[").concat(r,"].resposta"),defaultValue:null!==(e=t.resposta)&&void 0!==e?e:"",...el("blocos[".concat(o,"].itens[").concat(r,"].resposta"))})]})]}),t&&1==t.obs&&(0,n.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,n.jsx)(u.Z,{fullWidth:!0,children:(0,n.jsx)(p.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",name:"blocos[".concat(o,"].itens[").concat(r,"].observacao"),defaultValue:null!==(a=t.observacao)&&void 0!==a?a:"",...el("blocos[".concat(o,"].itens[").concat(r,"].observacao"))})})})]},r)}))]})})},o)),(0,n.jsx)(s.Z,{sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(c.ZP,{container:!0,spacing:4,children:(0,n.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,n.jsxs)(u.Z,{fullWidth:!0,children:[(0,n.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,n.jsx)(p.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",placeholder:"Observa\xe7\xe3o (opcional)",name:"obs",defaultValue:null!==(t=U.obs)&&void 0!==t?t:"",...el("obs")})]})})})})})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(f.Z,{options:G,id:"autocomplete-outlined",getOptionLabel:e=>e.nomeFantasia,onChange(e,a){X(a||null)},renderInput:e=>(0,n.jsx)(p.Z,{...e,name:"fabrica",label:"Selecione uma f\xe1brica",placeholder:"Selecione uma f\xe1brica",...el("fabrica")})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(v.Z,{variant:"contained",color:"primary",size:"large",disabled:!J,startIcon:(0,n.jsx)(i.Z,{icon:"eva:arrow-right-fill"}),onClick:()=>ev(),children:"Avan\xe7ar"})})]})})})};a.Z=L},47842:function(e,a,t){var n=t(85893),o=t(70754),r=t(61953);let i=()=>(0,n.jsx)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(o.Z,{})});a.Z=i},46749:function(e,a,t){t.d(a,{Lo:function(){return p},OD:function(){return u},OE:function(){return x},OL:function(){return d},g_:function(){return m}});var n=t(85893),o=t(29630),r=t(41664),i=t.n(r),s=t(7071);t(67294),t(40039);var l=t(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=function(e,a){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.map((r,l)=>{let d=a[l].field;return{...r,flex:r.size,renderCell:r=>(0,n.jsx)(i(),{href:"".concat(e,"/").concat(r.row.id),children:(0,n.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:a&&a.map((e,a)=>{if(e.field===d){if("status"!=e.field)return r.row[e.field];{let o=c[r.row.status];return t?o.title:(0,n.jsx)(s.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},a)}}})})})}})},u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let a=e.split("/"),t=a[a.length-1];return"novo"==t?"new":"edit"},m=e=>{let a=e.split("/");return a.pop(),a.join("/")},x=e=>{let a=e.route;l.h.post(a,e.params,{responseType:"arraybuffer"}).then(e=>{let a=new Blob([e.data],{type:"application/pdf"}),t=URL.createObjectURL(a);window.open(t,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,a,t){function n(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function o(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function r(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function i(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}t.d(a,{Bk:function(){return r},CL:function(){return s},PK:function(){return n},Tc:function(){return i},VL:function(){return o}})}}]);