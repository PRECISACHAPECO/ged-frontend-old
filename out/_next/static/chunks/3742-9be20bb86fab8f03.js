"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3742],{53742:function(e,t,o){o.d(t,{Z:function(){return T}});var a=o(85893),n=o(67294),s=o(87536),l=o(21609),r=o(56531),i=o(79072),c=o(55343),u=o(35966),d=o(67836),m=o(61953),p=o(72389),x=o(80562),h=o(34175);let b=e=>{var t,o;let{field:n,data:s,indexData:r,indexField:b,numFields:v,removeProduct:g,register:f,setValue:C,errors:j}=e;return(0,a.jsxs)(i.ZP,{item:!0,xs:12,md:12/v,children:[(0,a.jsx)("input",{type:"hidden",name:"produtos[".concat(r,"].recebimentompProdutoID"),defaultValue:null==s?void 0:s.recebimentompProdutoID,...f("produtos[".concat(r,"].recebimentompProdutoID"))}),n&&"int"===n.tipo&&n.tabela&&(0,a.jsx)(c.Z,{fullWidth:!0,children:(0,a.jsx)(u.Z,{options:n.options,value:null==s?void 0:s[n.tabela],getOptionLabel:e=>e.nome,name:"produtos[".concat(r,"].").concat(n.tabela),...f("produtos[".concat(r,"].").concat(n.tabela)),onChange(e,t){C("produtos[".concat(r,"].").concat(n.tabela),t||null)},renderInput(e){var t,o;return(0,a.jsx)(d.Z,{...e,label:n.nomeCampo,placeholder:n.nomeCampo,error:null!=j&&null!==(t=j.produtos)&&void 0!==t&&null!==(o=t[r])&&void 0!==o&&!!o[n.tabela]})}},r)}),n&&"string"===n.tipo&&(0,a.jsxs)(m.Z,{display:"flex",children:[(0,a.jsx)(m.Z,{flexBasis:"80%",children:(0,a.jsx)(c.Z,{fullWidth:!0,children:(0,a.jsx)(d.Z,{defaultValue:null==s?void 0:s[n.nomeColuna],label:n.nomeCampo,placeholder:n.nomeCampo,name:"produtos[".concat(r,"].").concat(n.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=j&&null!==(t=j.produtos)&&void 0!==t&&null!==(o=t[r])&&void 0!==o&&!!o[n.nomeColuna],...f("produtos[".concat(r,"].").concat(n.nomeColuna)),onChange(e){"cnpj"===n.nomeColuna?e.target.value=(0,h.PK)(e.target.value):"cep"===n.nomeColuna?(e.target.value=(0,h.Tc)(e.target.value),getAddressByCep(e.target.value)):"telefone"===n.nomeColuna?e.target.value=(0,h.Bk)(e.target.value):"estado"===n.nomeColuna?e.target.value=(0,h.CL)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"===n.nomeColuna?{maxLength:18}:"cep"===n.nomeColuna?{maxLength:9}:"telefone"===n.nomeColuna?{maxLength:15}:"estado"===n.nomeColuna?{maxLength:2}:{}})})}),b==v-1&&(0,a.jsx)(m.Z,{flexBasis:"20%",textAlign:"center",children:(0,a.jsx)(p.Z,{title:"Remover este item",children:(0,a.jsx)(x.Z,{color:"error",onClick(){g(s,r)},sx:{marginTop:2,opacity:1,cursor:"pointer"},children:(0,a.jsx)(l.Z,{icon:"tabler:trash-filled"})})})})]})]},b)};var v=o(79139),g=o(34282),f=o(7071),C=o(19604),j=o(49837),D=o(91359),Z=o(29630),P=o(75084),S=o(11163),I=o.n(S),y=o(46749),E=o(60664),F=o(89191),w=o(60565),O=o(40039),R=o(47842),k=o(86501),V=o(66136),L=o(11935);o(13860),o(57548);let M=()=>{var e;let{user:t,loggedUnity:o}=(0,n.useContext)(O.V),{setTitle:u}=(0,n.useContext)(w.f),[p,x]=(0,n.useState)(!1),[h,S]=(0,n.useState)(!1),[M,T]=(0,n.useState)(!1),[B,W]=(0,n.useState)(!0),[_,z]=(0,n.useState)(null),[N,U]=(0,n.useState)(!1),[A,K]=(0,n.useState)([]),[q,H]=(0,n.useState)(null),[J,G]=(0,n.useState)([]),[Q,X]=(0,n.useState)([]),[Y,$]=(0,n.useState)([]),[ee,et]=(0,n.useState)([]),[eo,ea]=(0,n.useState)(""),[en,es]=(0,n.useState)(!1),[el,er]=(0,n.useState)({status:!1,errors:[]}),[ei,ec]=(0,n.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),eu=I(),{id:ed}=eu.query,em=(0,y.g_)(eu.pathname),ep=(0,y.Lo)(eu.pathname),{settings:ex}=(0,n.useContext)(V.J6),{trigger:eh,reset:eb,register:ev,getValues:eg,setValue:ef,handleSubmit:eC,clearErrors:ej,setError:eD,formState:{errors:eZ}}=(0,s.cI)();console.log("errors: ",eZ),console.log("listErrors: ",el);let eP=async e=>{let a={status:e,auth:{usuarioID:t.usuarioID,papelID:t.papelID,unidadeID:o.unidadeID}};try{S(!0),await E.h.post("".concat(em,"/changeFormStatus/").concat(ed),a).then(e=>{k.ZP.success(y.OD.successUpdate),S(!1)})}catch(n){console.log(n)}},eS=()=>{let e=[...Q],t=J.map((e,t)=>e.tabela?{[e.tabela]:{id:"",nome:""}}:{[e.nomeColuna]:""});e.push(t),X(e)},eI=[{id:1,name:"recebimentoMP",identification:"01",route:"relatorio/recebimentoMP",params:{recebimentompID:ed,unidadeID:o.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"/relatorio/recepcao"}],ey=async()=>{try{await E.h.post("".concat(em,"/verifyFormPending/").concat(ed),{parFormularioID:2}).then(e=>{W(e.data) //! true/false
})}catch(e){console.log(e)}},eE=()=>{x(!0),E.h.post("".concat(em,"/getData/").concat(ed),{type:ep,unidadeID:o.unidadeID}).then(e=>{console.log("getData: ",e.data),K(e.data.fields),H(e.data.data),G(e.data.fieldsProducts),X(e.data.dataProducts),et(e.data.blocos),ea(e.data.info),ew(e.data),z(y.WR[e.data.info.status]),ec({status:e.data.info.status<40,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),ey(),x(!1)})},eF=(e,t)=>{if(1==Q.length){k.ZP.error("Voc\xea deve ter ao menos um produto!");return}let o=[...Q];if(o.splice(t,1),X(o),(null==e?void 0:e.recebimentompProdutoID)>0){let a=[...Y,{recebimentompProdutoID:e.recebimentompProdutoID}];console.log("\uD83D\uDE80 ~ newRemovedProducts:",a),$(a)}eb({...eg(),produtos:o}),eh(),k.ZP.success("Produto pr\xe9-removido. Salve para concluir!")},ew=e=>{var t,o;e.fields.map(t=>{var o,a,n;"int"==t.tipo?ef("header.".concat(t.tabela),(null===(o=e.data)||void 0===o?void 0:o[t.tabela])?null===(a=e.data)||void 0===a?void 0:a[t.tabela]:null):ef("header.".concat(t.nomeColuna),null===(n=e.data)||void 0===n?void 0:n[t.nomeColuna])}),e.dataProducts.map((t,o)=>{e.fieldsProducts.map((e,a)=>{"int"==e.tipo?ef("produtos[".concat(o,"].").concat(e.tabela),(null==t?void 0:t[e.tabela])?null==t?void 0:t[e.tabela]:null):ef("produtos[".concat(o,"].").concat(e.nomeColuna),null==t?void 0:t[e.nomeColuna])})}),e.blocos.map((e,t)=>{e.itens.map((e,o)=>{(null==e?void 0:e.resposta)&&ef("blocos[".concat(t,"].itens[").concat(o,"].resposta"),null==e?void 0:e.resposta)})}),ef("obs",null===(t=e.info)||void 0===t?void 0:t.obs),ef("status",null===(o=e.info)||void 0===o?void 0:o.status)},eO=()=>{ej();let e=!1,t=[];A.forEach((o,a)=>{let n=o.tabela?"header.".concat(o.tabela):"header.".concat(o.nomeColuna),s=eg(n);1!==o.obrigatorio||s||(eD(n,{type:"manual",message:"Campo obrigat\xf3rio"}),t.push(null==o?void 0:o.nomeCampo),e=!0)}),Q.forEach((o,a)=>{J.forEach((o,a)=>{let n="produtos[".concat(a,"].").concat(o.tabela),s=eg(n);1!==o.obrigatorio||s||(eD(n,{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==o?void 0:o.nomeCampo),e=!0)})}),ee.forEach((o,a)=>{o.itens.forEach((o,n)=>{let s=eg("blocos[".concat(a,"].itens[").concat(n,"].resposta"));(null==o?void 0:o.obrigatorio)!==1||s||(eD("blocos[".concat(a,"].itens[").concat(n,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==o?void 0:o.nome),e=!0)})}),console.log("\uD83D\uDE80 ~ arrErrors:",t),er({status:e,errors:t})},eR=()=>{eO(),es(!0),T(!0)},ek=async e=>{e.conclusion=!0,console.log("\uD83D\uDE80 ~ conclusionForm: ",e),await eC(eV)(e)},eV=async function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===a.conclusion&&a.status>10&&(e.status=a.status,e.obsConclusao=a.obsConclusao);let n={forms:{...e,header:{...e.header},produtos:[...e.produtos],removedProducts:Y},auth:{usuarioID:t.usuarioID,papelID:t.papelID,unidadeID:o.unidadeID}};console.log("onSubmit: ",n);try{S(!0),"edit"==ep?await E.h.put("".concat(em,"/").concat(ed),n).then(e=>{k.ZP.success(y.OD.successUpdate),S(!1)}):"new"==ep?await E.h.post("".concat(em,"/insertData"),n).then(e=>{let t=e.data;eu.push("".concat(em,"/").concat(t)),k.ZP.success(y.OD.successNew),S(!1)}):(k.ZP.error(y.OD.error),S(!1))}catch(s){console.log(s)}};return(0,n.useEffect)(()=>{console.log("useEffect 1"),u("Recebimento de MP"),eE()},[h]),(0,n.useEffect)(()=>{eO()},[]),(0,a.jsx)(a.Fragment,{children:p?(0,a.jsx)(R.Z,{}):(0,a.jsxs)("form",{onSubmit:eC(eV),children:[!ei.status&&(0,a.jsx)(C.Z,{severity:ei.messageType,sx:{mb:2},children:ei.message}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(F.Z,{btnCancel:!0,btnSave:eo.status<40,btnSend:!0,btnPrint:!0,generateReport:y.OE,dataReports:eI,handleSubmit:()=>eC(eV),handleSend:eR,title:"Recebimento MP",btnStatus:!0,handleBtnStatus:()=>U(!0)}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(m.Z,{sx:{mb:4},children:(0,a.jsx)(m.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,a.jsx)(f.Z,{size:"small",skin:"light",color:null==_?void 0:_.color,label:null==_?void 0:_.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})}),(0,a.jsx)(r.Z,{register:ev,errors:eZ,setValue:ef,fields:A,values:q,isDisabled:!ei.status})]})]}),(0,a.jsx)(j.Z,{sx:{mt:4},children:(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(Z.Z,{color:"primary",variant:"subtitle1",sx:{fontWeight:700,mb:5},children:"PRODUTOS"}),J&&Q&&Q.map((e,t)=>(0,a.jsx)(i.ZP,{container:!0,spacing:4,sx:{mb:3},children:J.map((o,n)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(b,{field:o,data:e,indexData:t,indexField:n,numFields:J.length,removeProduct:eF,register:ev,setValue:ef,errors:eZ})}))},t)),(0,a.jsx)(P.Z,{variant:"outlined",color:"primary",sx:{mt:1},startIcon:(0,a.jsx)(l.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){eS()},children:"Inserir produto"})]})}),ee&&ee.map((e,t)=>(0,a.jsx)(v.Z,{index:t,blockKey:"parRecebimentompBlocoID",values:e,register:ev,setValue:ef,errors:eZ,isDisabled:!ei.status},t)),eo&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(j.Z,{sx:{mt:4},children:(0,a.jsx)(D.Z,{children:(0,a.jsx)(i.ZP,{container:!0,spacing:4,children:(0,a.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,a.jsxs)(c.Z,{fullWidth:!0,children:[(0,a.jsx)(Z.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,a.jsx)(d.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",disabled:!ei.status,placeholder:"Observa\xe7\xe3o (opcional)",defaultValue:null!==(e=eo.obs)&&void 0!==e?e:"",name:"obs",...ev("obs")})]})})})})})}),N&&(0,a.jsx)(g.Z,{id:ed,parFormularioID:2,formStatus:eo.status,hasFormPending:B,canChangeStatus:eo.status>30&&!B,openModal:N,handleClose:()=>U(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(ed," de Recebimento de MP."),btnCancel:!0,btnConfirm:!0,handleSubmit:eP}),(0,a.jsx)(L.Z,{openModal:en,handleClose(){es(!1),T(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:eo,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:ek,listErrors:el})]})})};var T=M}}]);