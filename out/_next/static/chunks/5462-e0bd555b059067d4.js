"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5462],{47842:function(e,a,o){var t=o(85893),n=o(70754),l=o(61953);let r=()=>(0,t.jsx)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,t.jsx)(n.Z,{})});a.Z=r},55462:function(e,a,o){var t=o(85893),n=o(67294),l=o(87536),r=o(21609),s=o(49837),i=o(91359),c=o(79072),d=o(55343),u=o(35966),m=o(67836),p=o(29630),x=o(61953),h=o(72389),v=o(80562),b=o(75084),g=o(41470),j=o(22841),Z=o(15497),f=o(11163),C=o.n(f),D=o(46749),P=o(60664),I=o(89191),S=o(60565),y=o(40039),V=o(47842),L=o(86501),w=o(66136),O=o(34175),E=o(26829),R=o(50720),W=o(54623),q=o(13860),M=o.n(q);o(57548);let k=()=>{var e,a,o,f;let{user:q,loggedUnity:k}=(0,n.useContext)(y.V),{setTitle:Y}=(0,n.useContext)(S.f),[A,B]=(0,n.useState)(!1),[_,F]=(0,n.useState)(!1),[T,N]=(0,n.useState)([]),[K,U]=(0,n.useState)(null),[z,J]=(0,n.useState)([]),[G,H]=(0,n.useState)([]),[Q,X]=(0,n.useState)([]),[$,ee]=(0,n.useState)([]),[ea,eo]=(0,n.useState)(""),et=C(),{id:en}=et.query,el=(0,D.g_)(et.pathname),er=(0,D.Lo)(et.pathname),{settings:es}=(0,n.useContext)(w.J6);es.mode;let{watch:ei,trigger:ec,reset:ed,register:eu,control:em,setValue:ep,handleSubmit:ex,remove:eh,formState:{errors:ev}}=(0,l.cI)();console.log("errors: ",ev),console.log("isLoading: ",A);let eb=(e,a)=>{let o=[...G];if(o.splice(a,1),H(o),(null==e?void 0:e.recebimentompProdutoID)>0){let t=[...Q,{recebimentompProdutoID:e.recebimentompProdutoID}];console.log("\uD83D\uDE80 ~ newRemovedProducts:",t),X(t)}ed({produtos:o}),ec()},eg=e=>{let a=e.target.value,o={...ea,status:a};eo(o),ep("header.status",a)},ej=async e=>{console.log("onSubmit: ",e);try{F(!0),"edit"==er?await P.h.put("".concat(el,"/").concat(en),{data:e,removedProducts:Q,unidadeID:k.unidadeID}).then(e=>{L.ZP.success(D.OD.successUpdate),F(!1)}):"new"==er?await P.h.post("".concat(el,"/insertData"),{data:e,unidadeID:k.unidadeID}).then(e=>{let a=e.data;et.push("".concat(el,"/").concat(a)),L.ZP.success(D.OD.successNew),F(!1)}):(L.ZP.error(D.OD.error),F(!1))}catch(a){console.log(a)}},eZ=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");P.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(ep("header.logradouro",e.data.logradouro),ep("header.bairro",e.data.bairro),ep("header.cidade",e.data.localidade),ep("header.estado",e.data.uf),L.ZP.success("Endere\xe7o encontrado!")):L.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},ef=()=>{let e=[...G],a=z.map((e,a)=>e.tabela?{[e.tabela]:{id:"",nome:""}}:{[e.nomeColuna]:""});e.push(a),H(e)},eC=[{id:1,name:"recebimentoMP",identification:"01",route:"relatorio/recebimentoMP",params:{recebimentompID:en,unidadeID:k.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"/relatorio/recepcao"}],eD=()=>{B(!0),P.h.post("".concat(el,"/getData/").concat(en),{type:er,unidadeID:k.unidadeID}).then(e=>{console.log("getData: ",e.data),N(e.data.fields),U(e.data.data),J(e.data.fieldsProducts),H(e.data.dataProducts),ee(e.data.blocos),eo(e.data.info),B(!1)})};return(0,n.useEffect)(()=>{console.log("useEffect 1"),Y("Recebimento de MP"),eD()},[_]),(0,n.useEffect)(()=>{K&&(console.log("useEffect 2"),T.map((e,a)=>{ep("header.".concat(e.tabela),null==K?void 0:K[e.tabela])}),G.map((e,a)=>{z.map((o,t)=>{var n;(null==e?void 0:null===(n=e[o.tabela])||void 0===n?void 0:n.id)&&ep("produtos[".concat(a,"].").concat(o.tabela),null==e?void 0:e[o.tabela])})}),$.map((e,a)=>{e.itens.map((e,o)=>{(null==e?void 0:e.resposta)&&ep("blocos[".concat(a,"].itens[").concat(o,"].resposta"),null==e?void 0:e.resposta)})}),ep("obs",null==ea?void 0:ea.obs),ep("status",null==ea?void 0:ea.status))},[K,_]),(0,t.jsx)(t.Fragment,{children:A?(0,t.jsx)(V.Z,{}):(0,t.jsxs)("form",{onSubmit:ex(ej),children:[(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(I.Z,{btnCancel:!0,btnSave:!0,btnPrint:!0,generateReport:D.OE,dataReports:eC,handleSubmit:()=>ex(ej),title:"Fornecedor"}),(0,t.jsx)(i.Z,{children:(0,t.jsx)(c.ZP,{container:!0,spacing:4,children:T&&T.map((a,o)=>{var n,l;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,t.jsxs)(d.Z,{fullWidth:!0,children:[a&&"int"===a.tipo&&a.tabela&&(0,t.jsx)(u.Z,{options:a.options,getOptionSelected:(e,a)=>e.id===a.id,defaultValue:(null==K?void 0:null===(n=K[a.tabela])||void 0===n?void 0:n.id)?null==K?void 0:K[a.tabela]:null,getOptionLabel:e=>e.nome,name:"header.".concat(a.tabela),...eu("header.".concat(a.tabela),{required:!!a.obrigatorio}),onChange(e,o){console.log("\uD83D\uDE80 ~ newValue:",o),ep("header.".concat(a.tabela),o||null)},renderInput(e){var o;return(0,t.jsx)(m.Z,{...e,label:a.nomeCampo,placeholder:a.nomeCampo,error:null!=ev&&null!==(o=ev.header)&&void 0!==o&&!!o[a.tabela]})}}),a&&"date"==a.tipo&&(0,t.jsx)(R._,{dateAdapter:E.y,children:(0,t.jsx)(W.M,{label:"Selecione uma data",locale:M().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:M()(new Date),renderInput:e=>(0,t.jsx)(m.Z,{...e,variant:"outlined",name:"header.".concat(a.nomeColuna),...eu("header.".concat(a.nomeColuna),{required:!!a.obrigatorio})})})}),a&&"string"==a.tipo&&(0,t.jsx)(m.Z,{defaultValue:null!==(e=null==K?void 0:K[a.nomeColuna])&&void 0!==e?e:"",label:a.nomeCampo,placeholder:a.nomeCampo,name:"header.".concat(a.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=ev&&null!==(l=ev.header)&&void 0!==l&&!!l[a.nomeColuna],...eu("header.".concat(a.nomeColuna),{required:!!a.obrigatorio}),onChange(e){"cnpj"==a.nomeColuna?e.target.value=(0,O.PK)(e.target.value):"cep"==a.nomeColuna?(e.target.value=(0,O.Tc)(e.target.value),eZ(e.target.value)):"telefone"==a.nomeColuna?e.target.value=(0,O.Bk)(e.target.value):"estado"==a.nomeColuna?e.target.value=(0,O.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"==a.nomeColuna?{maxLength:18}:"cep"==a.nomeColuna?{maxLength:9}:"telefone"==a.nomeColuna?{maxLength:15}:"estado"==a.nomeColuna?{maxLength:2}:{}})]})},o)})})})})]}),(0,t.jsx)(s.Z,{sx:{mt:4},children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:5},children:"PRODUTOS"}),z&&G&&G.map((e,a)=>(0,t.jsx)(c.ZP,{id:"productLine-".concat(a),container:!0,spacing:4,sx:{mb:3},children:z.map((o,n)=>{var l,s,i;return(0,t.jsxs)(c.ZP,{item:!0,xs:12,md:12/z.length,children:[(0,t.jsx)("input",{type:"hidden",name:"produtos[".concat(a,"].recebimentompProdutoID"),defaultValue:null==e?void 0:e.recebimentompProdutoID,...eu("produtos[".concat(a,"].recebimentompProdutoID"))}),o&&"int"===o.tipo&&o.tabela&&(0,t.jsx)(d.Z,{fullWidth:!0,children:(0,t.jsx)(u.Z,{options:o.options,defaultValue:(null==e?void 0:null===(l=e[o.tabela])||void 0===l?void 0:l.id)?null==e?void 0:e[o.tabela]:null,getOptionLabel:e=>e.nome,name:"produtos[".concat(a,"].").concat(o.tabela),...eu("produtos[".concat(a,"].").concat(o.tabela),{required:(null==o?void 0:o.obrigatorio)==1}),onChange(e,t){ep("produtos[".concat(a,"].").concat(o.tabela),t||null)},renderInput(e){var n,l;return(0,t.jsx)(m.Z,{...e,label:o.nomeCampo,placeholder:o.nomeCampo,error:null!=ev&&null!==(n=ev.produtos)&&void 0!==n&&null!==(l=n[a])&&void 0!==l&&!!l[o.tabela]})}})}),o&&"string"===o.tipo&&(0,t.jsxs)(x.Z,{display:"flex",children:[(0,t.jsx)(x.Z,{flexBasis:"80%",children:(0,t.jsx)(d.Z,{fullWidth:!0,children:(0,t.jsx)(m.Z,{defaultValue:null==e?void 0:e[o.nomeColuna],label:o.nomeCampo,placeholder:o.nomeCampo,name:"produtos[".concat(a,"].").concat(o.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=ev&&null!==(s=ev.produtos)&&void 0!==s&&null!==(i=s[a])&&void 0!==i&&!!i[o.nomeColuna],...eu("produtos[".concat(a,"].").concat(o.nomeColuna),{required:(null==o?void 0:o.obrigatorio)==1}),onChange(e){"cnpj"===o.nomeColuna?e.target.value=(0,O.PK)(e.target.value):"cep"===o.nomeColuna?(e.target.value=(0,O.Tc)(e.target.value),eZ(e.target.value)):"telefone"===o.nomeColuna?e.target.value=(0,O.Bk)(e.target.value):"estado"===o.nomeColuna?e.target.value=(0,O.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"===o.nomeColuna?{maxLength:18}:"cep"===o.nomeColuna?{maxLength:9}:"telefone"===o.nomeColuna?{maxLength:15}:"estado"===o.nomeColuna?{maxLength:2}:{}})})}),n==z.length-1&&(0,t.jsx)(x.Z,{flexBasis:"20%",textAlign:"center",children:(0,t.jsx)(h.Z,{title:"Remover este item",children:(0,t.jsx)(v.Z,{color:"error",onClick(){eb(e,a)},sx:{marginTop:2,opacity:1,cursor:"pointer"},children:(0,t.jsx)(r.Z,{icon:"tabler:trash-filled"})})})})]})]},n)})},a)),(0,t.jsx)(b.Z,{variant:"outlined",color:"primary",sx:{mt:1},startIcon:(0,t.jsx)(r.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){ef()},children:"Inserir produto"})]})}),$&&$.map((e,n)=>(0,t.jsx)(s.Z,{sx:{mt:4},children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)(c.ZP,{container:!0,children:[(0,t.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].parRecebimentompBlocoID"),defaultValue:e.parRecebimentompBlocoID,...eu("blocos[".concat(n,"].parRecebimentompBlocoID"))}),(0,t.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600},children:e.nome})}),e.itens&&e.itens.map((e,l)=>{var s,i,p;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,t.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(l,"].itemID"),defaultValue:e.itemID,...eu("blocos[".concat(n,"].itens[").concat(l,"].itemID"))}),(0,t.jsxs)(c.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)(r.Z,{icon:"line-md:circle-to-confirm-circle-transition",style:{color:e.resposta?"green":"grey",fontSize:"20px"}})}),(0,t.jsx)(x.Z,{children:e.ordem+" - "+e.nome})]}),(0,t.jsxs)(c.ZP,{item:!0,xs:12,md:3,children:[(0,t.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(l,"].tipoAlternativa"),defaultValue:e.alternativa,...eu("blocos[".concat(n,"].itens[").concat(l,"].tipoAlternativa"))}),(0,t.jsxs)(d.Z,{fullWidth:!0,children:[e&&e.alternativas&&e.alternativas.length>1&&(0,t.jsx)(u.Z,{options:e.alternativas,getOptionLabel:e=>e.nome,defaultValue:e.resposta?e.resposta:{nome:""},name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),...eu("blocos[".concat(n,"].itens[").concat(l,"].resposta"),{required:(null==e?void 0:e.obrigatorio)==1}),onChange(e,a){console.log("\uD83D\uDE80 ~ newValue:",a),ep("blocos[".concat(n,"].itens[").concat(l,"].resposta"),a?{id:a.alternativaID,nome:a.nome}:"")},renderInput(e){var a,o,r;return(0,t.jsx)(m.Z,{...e,label:"Selecione uma resposta",placeholder:"Selecione uma resposta",error:null!==(r=null==ev?void 0:null===(a=ev.blocos)||void 0===a?void 0:null===(o=a[n])||void 0===o?void 0:o.itens[l])&&void 0!==r&&!!r.resposta})}}),0==e.alternativas.length&&"Data"==e.alternativa&&(0,t.jsx)(R._,{dateAdapter:E.y,children:(0,t.jsx)(W.M,{label:"Selecione uma data",locale:M().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:e.resposta?M()(new Date(e.resposta)):"",onChange(e){ep("blocos[".concat(n,"].itens[").concat(l,"].resposta"),e||"")},renderInput:a=>(0,t.jsx)(m.Z,{...a,variant:"outlined",name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),...eu("blocos[".concat(n,"].itens[").concat(l,"].resposta"),{required:!!e.obrigatorio})})})}),0==e.alternativas.length&&"Dissertativa"==e.alternativa&&(0,t.jsx)(m.Z,{multiline:!0,label:"Descreva a resposta",placeholder:"Descreva a resposta",name:"blocos[".concat(n,"].itens[").concat(l,"].resposta"),defaultValue:null!==(a=e.resposta)&&void 0!==a?a:"",...eu("blocos[".concat(n,"].itens[").concat(l,"].resposta"),{required:(null==e?void 0:e.obrigatorio)==1}),error:null!==(p=null==ev?void 0:null===(s=ev.blocos)||void 0===s?void 0:null===(i=s[n])||void 0===i?void 0:i.itens[l])&&void 0!==p&&!!p.resposta})]})]}),e&&1==e.obs&&(0,t.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,t.jsx)(d.Z,{fullWidth:!0,children:(0,t.jsx)(m.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",name:"blocos[".concat(n,"].itens[").concat(l,"].observacao"),defaultValue:null!==(o=e.observacao)&&void 0!==o?o:"",...eu("blocos[".concat(n,"].itens[").concat(l,"].observacao"))})})})]},l)})})]})})},n)),ea&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{sx:{mt:4},children:(0,t.jsx)(i.Z,{children:(0,t.jsx)(c.ZP,{container:!0,spacing:4,children:(0,t.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(d.Z,{fullWidth:!0,children:[(0,t.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,t.jsx)(m.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",placeholder:"Observa\xe7\xe3o (opcional)",defaultValue:null!==(f=ea.obs)&&void 0!==f?f:"",name:"obs",...eu("obs")})]})})})})}),(0,t.jsx)(s.Z,{sx:{mt:4},children:(0,t.jsx)(i.Z,{children:(0,t.jsx)(c.ZP,{container:!0,spacing:4,children:(0,t.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(d.Z,{fullWidth:!0,children:[(0,t.jsx)(p.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Resultado"}),ea&&(0,t.jsx)(x.Z,{display:"flex",gap:8,children:(0,t.jsxs)(g.Z,{row:!0,"aria-label":"colored",name:"colored",value:ea.status,onChange:eg,children:[(0,t.jsx)(j.Z,{value:70,name:"status",...eu("status"),control:(0,t.jsx)(Z.Z,{color:"success"}),label:"Aprovado"}),(0,t.jsx)(j.Z,{value:60,name:"status",...eu("status"),label:"Aprovado parcial",control:(0,t.jsx)(Z.Z,{color:"warning"})}),(0,t.jsx)(j.Z,{value:50,name:"status",...eu("status"),label:"Reprovado",control:(0,t.jsx)(Z.Z,{color:"error"})})]})})]})})})})})]})]})})};a.Z=k}}]);