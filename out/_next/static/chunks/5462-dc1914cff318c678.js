"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5462],{47842:function(e,a,t){var o=t(85893),n=t(70754),l=t(61953);let s=()=>(0,o.jsx)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});a.Z=s},55462:function(e,a,t){var o=t(85893),n=t(67294),l=t(87536),s=t(21609),r=t(49837),c=t(91359),i=t(79072),d=t(55343),u=t(35966),m=t(67836),p=t(29630),x=t(61953),h=t(72389),v=t(80562),b=t(75084),g=t(41470),j=t(22841),Z=t(15497),f=t(11163),C=t.n(f),D=t(46749),P=t(60664),I=t(89191),S=t(60565),y=t(40039),V=t(47842),L=t(86501),w=t(66136),O=t(34175),E=t(26829),R=t(50720),W=t(54623),M=t(13860),k=t.n(M);t(57548);let Y=()=>{var e,a,t,f;let{user:M,loggedUnity:Y}=(0,n.useContext)(y.V),{setTitle:A}=(0,n.useContext)(S.f),[B,_]=(0,n.useState)(!1),[F,T]=(0,n.useState)(!1),[N,K]=(0,n.useState)(!1),[U,q]=(0,n.useState)([]),[z,J]=(0,n.useState)(null),[G,H]=(0,n.useState)([]),[Q,X]=(0,n.useState)([]),[$,ee]=(0,n.useState)([]),[ea,et]=(0,n.useState)([]),[eo,en]=(0,n.useState)(""),el=C(),{id:es}=el.query,er=(0,D.g_)(el.pathname),ec=(0,D.Lo)(el.pathname),{settings:ei}=(0,n.useContext)(w.J6);ei.mode;let{watch:ed,trigger:eu,reset:em,register:ep,control:ex,setValue:eh,handleSubmit:ev,remove:eb,formState:{errors:eg}}=(0,l.cI)();console.log("errors: ",eg),console.log("isLoading: ",B);let ej=(e,a)=>{let t=[...Q];if(t.splice(a,1),X(t),(null==e?void 0:e.recebimentompProdutoID)>0){let o=[...$,{recebimentompProdutoID:e.recebimentompProdutoID}];console.log("\uD83D\uDE80 ~ newRemovedProducts:",o),ee(o)}em({produtos:t})},eZ=e=>{let a=e.target.value,t={...eo,status:a};en(t),eh("header.status",a)},ef=async e=>{console.log("onSubmit: ",e);try{T(!0),"edit"==ec?await P.h.put("".concat(er,"/").concat(es),{data:e,removedProducts:$,unidadeID:Y.unidadeID}).then(e=>{L.ZP.success(D.OD.successUpdate),T(!1)}):"new"==ec?await P.h.post("".concat(er,"/insertData"),{data:e,unidadeID:Y.unidadeID}).then(e=>{let a=e.data;el.push("".concat(er,"/").concat(a)),L.ZP.success(D.OD.successNew),T(!1)}):(L.ZP.error(D.OD.error),T(!1))}catch(a){console.log(a)}},eC=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");P.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(eh("header.logradouro",e.data.logradouro),eh("header.bairro",e.data.bairro),eh("header.cidade",e.data.localidade),eh("header.estado",e.data.uf),L.ZP.success("Endere\xe7o encontrado!")):L.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},eD=()=>{let e=[...Q],a=G.map((e,a)=>e.tabela?{[e.tabela]:{id:"",nome:""}}:{[e.nomeColuna]:""});e.push(a),X(e)},eP=[{id:1,name:"recebimentoMP",identification:"01",route:"relatorio/recebimentoMP",params:{recebimentompID:es,unidadeID:Y.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"/relatorio/recepcao"}],eI=()=>{_(!0),P.h.post("".concat(er,"/getData/").concat(es),{type:ec,unidadeID:Y.unidadeID}).then(e=>{console.log("getData: ",e.data),q(e.data.fields),J(e.data.data),H(e.data.fieldsProducts),X(e.data.dataProducts),et(e.data.blocos),en(e.data.info),_(!1)})};return(0,n.useEffect)(()=>{console.log("useEffect 1"),A("Recebimento de MP"),eI()},[F]),(0,n.useEffect)(()=>{z&&(console.log("useEffect 2"),U.map((e,a)=>{eh("header.".concat(e.tabela),null==z?void 0:z[e.tabela])}),Q.map((e,a)=>{G.map((t,o)=>{var n;(null==e?void 0:null===(n=e[t.tabela])||void 0===n?void 0:n.id)&&eh("produtos[".concat(a,"].").concat(t.tabela),null==e?void 0:e[t.tabela])})}),ea.map((e,a)=>{e.itens.map((e,t)=>{(null==e?void 0:e.resposta)&&eh("blocos[".concat(a,"].itens[").concat(t,"].resposta"),null==e?void 0:e.resposta)})}),eh("obs",null==eo?void 0:eo.obs),eh("status",null==eo?void 0:eo.status))},[z,F]),(0,o.jsx)(o.Fragment,{children:B?(0,o.jsx)(V.Z,{}):(0,o.jsxs)("form",{onSubmit:ev(ef),children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(I.Z,{btnCancel:!0,btnSave:!0,btnPrint:!0,generateReport:D.OE,dataReports:eP,handleSubmit:()=>ev(ef),title:"Fornecedor"}),(0,o.jsx)(c.Z,{children:(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:U&&U.map((a,t)=>{var n,l;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,o.jsxs)(d.Z,{fullWidth:!0,children:[a&&"int"===a.tipo&&a.tabela&&(0,o.jsx)(u.Z,{options:a.options,getOptionSelected:(e,a)=>e.id===a.id,defaultValue:(null==z?void 0:null===(n=z[a.tabela])||void 0===n?void 0:n.id)?null==z?void 0:z[a.tabela]:null,getOptionLabel:e=>e.nome,name:"header.".concat(a.tabela),...ep("header.".concat(a.tabela)),onChange(e,t){console.log("\uD83D\uDE80 ~ newValue:",t),eh("header.".concat(a.tabela),t||null)},renderInput(e){var t;return(0,o.jsx)(m.Z,{...e,label:a.nomeCampo,placeholder:a.nomeCampo,error:null!=eg&&null!==(t=eg.header)&&void 0!==t&&!!t[a.tabela]})}}),a&&"date"==a.tipo&&(0,o.jsx)(R._,{dateAdapter:E.y,children:(0,o.jsx)(W.M,{label:"Selecione uma data",locale:k().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:k()(new Date),renderInput:e=>(0,o.jsx)(m.Z,{...e,variant:"outlined",name:"header.".concat(a.nomeColuna),...ep("header.".concat(a.nomeColuna))})})}),a&&"string"==a.tipo&&(0,o.jsx)(m.Z,{defaultValue:null!==(e=null==z?void 0:z[a.nomeColuna])&&void 0!==e?e:"",label:a.nomeCampo,placeholder:a.nomeCampo,name:"header.".concat(a.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=eg&&null!==(l=eg.header)&&void 0!==l&&!!l[a.nomeColuna],...ep("header.".concat(a.nomeColuna)),onChange(e){"cnpj"==a.nomeColuna?e.target.value=(0,O.PK)(e.target.value):"cep"==a.nomeColuna?(e.target.value=(0,O.Tc)(e.target.value),eC(e.target.value)):"telefone"==a.nomeColuna?e.target.value=(0,O.Bk)(e.target.value):"estado"==a.nomeColuna?e.target.value=(0,O.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"==a.nomeColuna?{maxLength:18}:"cep"==a.nomeColuna?{maxLength:9}:"telefone"==a.nomeColuna?{maxLength:15}:"estado"==a.nomeColuna?{maxLength:2}:{}})]})},t)})})})})]}),(0,o.jsx)(r.Z,{sx:{mt:4},children:(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:5},children:"PRODUTOS"}),G&&Q&&Q.map((e,a)=>(0,o.jsx)(i.ZP,{id:"productLine-".concat(a),container:!0,spacing:4,sx:{mb:3},children:G.map((t,n)=>{var l,r,c;return(0,o.jsxs)(i.ZP,{item:!0,xs:12,md:12/G.length,children:[(0,o.jsx)("input",{type:"hidden",name:"produtos[".concat(a,"].recebimentompProdutoID"),defaultValue:null==e?void 0:e.recebimentompProdutoID,...ep("produtos[".concat(a,"].recebimentompProdutoID"))}),t&&"int"===t.tipo&&t.tabela&&(0,o.jsx)(d.Z,{fullWidth:!0,children:(0,o.jsx)(u.Z,{options:t.options,defaultValue:(null==e?void 0:null===(l=e[t.tabela])||void 0===l?void 0:l.id)?null==e?void 0:e[t.tabela]:null,getOptionLabel:e=>e.nome,name:"produtos[".concat(a,"].").concat(t.tabela),...ep("produtos[".concat(a,"].").concat(t.tabela)),onChange(e,o){eh("produtos[".concat(a,"].").concat(t.tabela),o||null)},renderInput(e){var n,l;return(0,o.jsx)(m.Z,{...e,label:t.nomeCampo,placeholder:t.nomeCampo,error:null!=eg&&null!==(n=eg.produtos)&&void 0!==n&&null!==(l=n[a])&&void 0!==l&&!!l[t.tabela]})}})}),t&&"string"===t.tipo&&(0,o.jsxs)(x.Z,{display:"flex",children:[(0,o.jsx)(x.Z,{flexBasis:"80%",children:(0,o.jsx)(d.Z,{fullWidth:!0,children:(0,o.jsx)(m.Z,{defaultValue:null==e?void 0:e[t.nomeColuna],label:t.nomeCampo,placeholder:t.nomeCampo,name:"produtos[".concat(a,"].").concat(t.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=eg&&null!==(r=eg.produtos)&&void 0!==r&&null!==(c=r[a])&&void 0!==c&&!!c[t.nomeColuna],...ep("produtos[".concat(a,"].").concat(t.nomeColuna)),onChange(e){"cnpj"===t.nomeColuna?e.target.value=(0,O.PK)(e.target.value):"cep"===t.nomeColuna?(e.target.value=(0,O.Tc)(e.target.value),eC(e.target.value)):"telefone"===t.nomeColuna?e.target.value=(0,O.Bk)(e.target.value):"estado"===t.nomeColuna?e.target.value=(0,O.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"===t.nomeColuna?{maxLength:18}:"cep"===t.nomeColuna?{maxLength:9}:"telefone"===t.nomeColuna?{maxLength:15}:"estado"===t.nomeColuna?{maxLength:2}:{}})})}),n==G.length-1&&(0,o.jsx)(x.Z,{flexBasis:"20%",textAlign:"center",children:(0,o.jsx)(h.Z,{title:"Remover este item",children:(0,o.jsx)(v.Z,{color:"error",onClick(){ej(e,a)},sx:{marginTop:2,opacity:1,cursor:"pointer"},children:(0,o.jsx)(s.Z,{icon:"tabler:trash-filled"})})})})]})]},n)})},a)),(0,o.jsx)(b.Z,{variant:"outlined",color:"primary",sx:{mt:1},startIcon:(0,o.jsx)(s.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){eD()},children:"Inserir produto"})]})}),ea&&ea.map((e,n)=>(0,o.jsx)(r.Z,{sx:{mt:4},children:(0,o.jsx)(c.Z,{children:(0,o.jsxs)(i.ZP,{container:!0,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].parRecebimentompBlocoID"),defaultValue:e.parRecebimentompBlocoID,...ep("blocos[".concat(n,"].parRecebimentompBlocoID"))}),(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600},children:e.nome})}),e.itens&&e.itens.map((e,l)=>{var r,c,p;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(l,"].itemID"),defaultValue:e.itemID,...ep("blocos[".concat(n,"].itens[").concat(l,"].itemID"))}),(0,o.jsxs)(i.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,o.jsx)(x.Z,{children:(0,o.jsx)(s.Z,{icon:"line-md:circle-to-confirm-circle-transition",style:{color:e.resposta?"green":"grey",fontSize:"20px"}})}),(0,o.jsx)(x.Z,{children:e.ordem+" - "+e.nome})]}),(0,o.jsxs)(i.ZP,{item:!0,xs:12,md:3,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(l,"].tipoAlternativa"),defaultValue:e.alternativa,...ep("blocos[".concat(n,"].itens[").concat(l,"].tipoAlternativa"))}),(0,o.jsxs)(d.Z,{fullWidth:!0,children:[e&&e.alternativas&&e.alternativas.length>1&&(0,o.jsx)(u.Z,{options:e.alternativas,getOptionLabel:e=>e.nome,defaultValue:e.resposta?e.resposta:{nome:""},name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),...ep("blocos[".concat(n,"].itens[").concat(l,"].resposta")),onChange(e,a){console.log("\uD83D\uDE80 ~ newValue:",a),eh("blocos[".concat(n,"].itens[").concat(l,"].resposta"),a?{id:a.alternativaID,nome:a.nome}:"")},renderInput(e){var a,t,s;return(0,o.jsx)(m.Z,{...e,label:"Selecione uma resposta",placeholder:"Selecione uma resposta",error:null!==(s=null==eg?void 0:null===(a=eg.blocos)||void 0===a?void 0:null===(t=a[n])||void 0===t?void 0:t.itens[l])&&void 0!==s&&!!s.resposta})}}),0==e.alternativas.length&&"Data"==e.alternativa&&(0,o.jsx)(R._,{dateAdapter:E.y,children:(0,o.jsx)(W.M,{label:"Selecione uma data",locale:k().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:e.resposta?k()(new Date(e.resposta)):"",onChange(e){eh("blocos[".concat(n,"].itens[").concat(l,"].resposta"),e||"")},renderInput:e=>(0,o.jsx)(m.Z,{...e,variant:"outlined",name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),...ep("blocos[".concat(n,"].itens[").concat(l,"].resposta"))})})}),0==e.alternativas.length&&"Dissertativa"==e.alternativa&&(0,o.jsx)(m.Z,{multiline:!0,label:"Descreva a resposta",placeholder:"Descreva a resposta",name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),defaultValue:null!==(a=e.resposta)&&void 0!==a?a:"",...ep("blocos[".concat(n,"].itens[").concat(l,"].resposta")),error:null!==(p=null==eg?void 0:null===(r=eg.blocos)||void 0===r?void 0:null===(c=r[n])||void 0===c?void 0:c.itens[l])&&void 0!==p&&!!p.resposta})]})]}),e&&1==e.obs&&(0,o.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(d.Z,{fullWidth:!0,children:(0,o.jsx)(m.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",name:"blocos[".concat(n,"].itens[").concat(l,"].observacao"),defaultValue:null!==(t=e.observacao)&&void 0!==t?t:"",...ep("blocos[".concat(n,"].itens[").concat(l,"].observacao"))})})})]},l)})})]})})},n)),eo&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{sx:{mt:4},children:(0,o.jsx)(c.Z,{children:(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(d.Z,{fullWidth:!0,children:[(0,o.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(m.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",placeholder:"Observa\xe7\xe3o (opcional)",defaultValue:null!==(f=eo.obs)&&void 0!==f?f:"",name:"obs",...ep("obs")})]})})})})}),(0,o.jsx)(r.Z,{sx:{mt:4},children:(0,o.jsx)(c.Z,{children:(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(d.Z,{fullWidth:!0,children:[(0,o.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Resultado"}),eo&&(0,o.jsx)(x.Z,{display:"flex",gap:8,children:(0,o.jsxs)(g.Z,{row:!0,"aria-label":"colored",name:"colored",value:eo.status,onChange:eZ,children:[(0,o.jsx)(j.Z,{value:70,name:"status",...ep("status"),control:(0,o.jsx)(Z.Z,{color:"success"}),label:"Aprovado"}),(0,o.jsx)(j.Z,{value:60,name:"status",...ep("status"),label:"Aprovado parcial",control:(0,o.jsx)(Z.Z,{color:"warning"})}),(0,o.jsx)(j.Z,{value:50,name:"status",...ep("status"),label:"Reprovado",control:(0,o.jsx)(Z.Z,{color:"error"})})]})})]})})})})})]})]})})};a.Z=Y}}]);