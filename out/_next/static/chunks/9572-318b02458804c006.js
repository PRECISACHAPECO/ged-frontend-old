"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9572],{29572:function(e,a,t){t.d(a,{Z:function(){return W}});var s=t(85893),o=t(67294),n=t(87536);t(21609);var i=t(56531),l=t(81284),r=t(95309),c=t(29630),d=t(22841),u=t(75158);let m=e=>{let{title:a,values:t,name:o,changeCategory:n,register:i,isDisabled:m}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.ZP,{disablePadding:!0,children:(0,s.jsx)(r.Z,{children:(0,s.jsx)(c.Z,{variant:"subtitle1",sx:{fontWeight:600},children:a})})}),t&&t.map((e,a)=>(0,s.jsx)(l.ZP,{disablePadding:!0,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("input",{type:"hidden",name:"".concat(o,".[").concat(a,"].id"),defaultValue:e.id,...i("".concat(o,".[").concat(a,"].id"))}),(0,s.jsx)(d.Z,{control:(0,s.jsx)(u.Z,{name:"".concat(o,"[").concat(a,"].checked"),disabled:!!m,...i("".concat(o,"[").concat(a,"].checked")),defaultChecked:1==e.checked,onClick:a=>n?n(e.id,!!a.target.checked):null}),label:e.nome})]})},a))]})};var x=t(79139),p=t(19604),h=t(49837),g=t(91359),f=t(61953),b=t(79072),D=t(55343),j=t(67836),Z=t(11163),S=t.n(Z),v=t(46749),I=t(60664),C=t(89191),y=t(60565),F=t(40039),P=t(47842);t(49540);var E=t(86501),k=t(66136),w=t(11935),O=t(7071);t(13860),t(57548),t(45061);var V=t(34282);let N=()=>{var e;let{user:a,loggedUnity:t}=(0,o.useContext)(F.V),{setTitle:l}=(0,o.useContext)(y.f),[r,d]=(0,o.useState)(!1),[u,Z]=(0,o.useState)(!1),[N,W]=(0,o.useState)(!1),[_,R]=(0,o.useState)([]),[T,z]=(0,o.useState)(null),[M,Q]=(0,o.useState)([]),[U,B]=(0,o.useState)([]),[L,q]=(0,o.useState)([]),[A,H]=(0,o.useState)([]),[J,K]=(0,o.useState)([]),[G,X]=(0,o.useState)(""),[Y,$]=(0,o.useState)(!1),[ee,ea]=(0,o.useState)(null),[et,es]=(0,o.useState)(null),[eo,en]=(0,o.useState)(!1),[ei,el]=(0,o.useState)(!1),[er,ec]=(0,o.useState)(!0),[ed,eu]=(0,o.useState)(0),[em,ex]=(0,o.useState)([]),[ep,eh]=(0,o.useState)({}),[eg,ef]=(0,o.useState)({status:!1,errors:[]}),[eb,eD]=(0,o.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),ej=S(),{id:eZ}=ej.query,eS=(0,v.g_)(ej.pathname),ev=(0,v.Lo)(ej.pathname),{settings:eI}=(0,o.useContext)(k.J6);eI.mode;let{watch:eC,register:ey,control:eF,getValues:eP,clearErrors:eE,setValue:ek,setError:ew,handleSubmit:eO,formState:{errors:eV}}=(0,n.cI)();console.log("canEdit: ",eb);let eN=e=>{e.blocos.map((e,a)=>{e.itens.map((e,t)=>{console.log("\uD83D\uDE80 ~ item:",e),(null==e?void 0:e.resposta)&&ek("blocos[".concat(a,"].itens[").concat(t,"].resposta"),null==e?void 0:e.resposta)})})},eW=async()=>{try{await I.h.post("/formularios/fornecedor/verifyFormPending/".concat(eZ),{parFormularioID:1}).then(e=>{ec(e.data) //! true/false
})}catch(e){console.log(e)}},e_=async e=>{let s={status:e,auth:{usuarioID:a.usuarioID,papelID:a.papelID,unidadeID:t.unidadeID}};try{Z(!0),await I.h.post("".concat(eS,"/changeFormStatus/").concat(eZ),s).then(e=>{E.ZP.success(v.OD.successUpdate),Z(!1)})}catch(o){console.log(o)}},eR=async()=>{let e={status:{edit:eo,status:G.status},auth:{usuarioID:a.usuarioID,papelID:a.papelID,unidadeID:t.unidadeID}};if(eo){console.log("updateFormStatus: ",e);try{Z(!0),await I.h.post("".concat(eS,"/updateFormStatus/").concat(eZ),e).then(e=>{E.ZP.success(v.OD.successUpdate),Z(!1)})}catch(s){console.log(s)}}else E.ZP.error("N\xe3o h\xe1 dados a serem atualizados!")},eT=[{id:1,name:"Formul\xe1rio do fornecedor",component:"Fornecedor",papelID:a.papelID,identification:"01",params:{fornecedorID:eZ}},{id:2,name:"Recep\xe7\xe3o",component:"Fornecedor",papelID:a.papelID,identification:"02"}],ez=(e,a)=>{let t=[];e.map((e,s)=>{eQ(e.categorias,a)&&t.push(e)}),K(t)},eM=(e,a)=>{console.log("\uD83D\uDE80 ~ changeCategory:",e,a);let t=M.map(t=>t.id===e?{...t,checked:a}:t);console.log("\uD83D\uDE80 ~ arrNewCategory:",t),Q(t),ez(A,t)},eQ=(e,a)=>{let t=e.map(e=>e.categoriaID),s=a.filter(e=>e.checked).map(e=>e.id);if(t.length!==s.length)return!1;let o=[...t].sort(),n=[...s].sort();for(let i=0;i<o.length;i++)if(o[i]!==n[i])return!1;return!0},eU=()=>{try{d(!0),I.h.get("".concat(eS,"/").concat(eZ)).then(e=>{console.log("getData: ",e.data),R(e.data.fields),Q(e.data.categorias),B(e.data.atividades),q(e.data.sistemasQualidade),H(e.data.blocos),ez(e.data.blocos,e.data.categorias),z(e.data.data),X(e.data.info),ea(e.data.unidade),eN(e.data);let t=v.WR[e.data.info.status];es(t),eD({status:2==a.papelID&&e.data.info.status<40,message:2==a.papelID?"Esse formul\xe1rio j\xe1 foi conclu\xeddo e enviado pra f\xe1brica, n\xe3o \xe9 mais poss\xedvel alterar as informa\xe7\xf5es!":"Somente o fornecedor pode alterar as informa\xe7\xf5es deste formul\xe1rio!",messageType:2==a.papelID?"warning":"info"}),d(!1)})}catch(e){console.log(e)}},eB=()=>{ej.push("/formularios/fornecedor/"),E.ZP.error("Voc\xea n\xe3o tem permiss\xf5es para acessar esta p\xe1gina!")},eL=()=>{eH(),$(!0),W(!0)},eq=async e=>{e.conclusion=!0,console.log("\uD83D\uDE80 ~ conclusionForm: ",e),await eO(eA)(e)},eA=async function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===s.conclusion&&(e.status=a&&1==a.papelID?s.status:40,e.obsConclusao=s.obsConclusao);let o={forms:{...e,header:{...e.header}},auth:{usuarioID:a.usuarioID,papelID:a.papelID,unidadeID:t.unidadeID}};console.log("onSubmit: ",o);try{Z(!0),await I.h.put("".concat(eS,"/").concat(eZ),o).then(e=>{E.ZP.success(v.OD.successUpdate),Z(!1)})}catch(n){console.log(n)}},eH=()=>{eE();let e=!1,a=[];_.forEach((t,s)=>{let o=t.tabela?"header.".concat(t.tabela):"header.".concat(t.nomeColuna),n=eP(o);1!==t.obrigatorio||n||(ew(o,{type:"manual",message:"Campo obrigat\xf3rio"}),a.push(null==t?void 0:t.nomeCampo),e=!0)}),J.forEach((t,s)=>{t.itens.forEach((t,o)=>{let n=eP("blocos[".concat(s,"].itens[").concat(o,"].resposta"));(null==t?void 0:t.obrigatorio)!==1||n||(ew("blocos[".concat(s,"].itens[").concat(o,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),a.push(null==t?void 0:t.nome),e=!0)})}),console.log("\uD83D\uDE80 ~ arrErrors:",a),ef({status:e,errors:a})};return console.log("erros",eV),(0,o.useEffect)(()=>{l("Formul\xe1rio do Fornecedor"),"edit"==ev?eU():eB(),eW()},[u]),(0,o.useEffect)(()=>{eH()},[]),(0,s.jsxs)(s.Fragment,{children:[r?(0,s.jsx)(P.Z,{}):T?(0,s.jsxs)("form",{onSubmit:eO(e=>{eb.status?eA(e,!1):eR()}),children:[J&&0===J.length&&(0,s.jsx)(p.Z,{severity:"warning",sx:{mb:2},children:"N\xe3o h\xe1 nenhum bloco dispon\xedvel para as categorias selecionadas!"}),!eb.status&&(0,s.jsx)(p.Z,{severity:eb.messageType,sx:{mb:2},children:eb.message}),(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(C.Z,{btnCancel:!0,btnSave:2==a.papelID&&G.status<40,btnSend:1==a.papelID&&G.status>=40||2==a.papelID&&G.status<40,disabledSend:0===J.length,disabledSubmit:0===J.length,btnPrint:!0,generateReport:v.OE,dataReports:eT,handleSubmit:()=>eO(eA),handleSend:eL,title:"Fornecedor",btnStatus:!0,handleBtnStatus:()=>el(!0)}),(0,s.jsxs)(g.Z,{children:[ee&&(0,s.jsxs)(f.Z,{sx:{mb:4},children:[(0,s.jsx)("input",{type:"hidden",value:ee.unidadeID,name:"unidadeID",...ey("unidadeID")}),(0,s.jsxs)(b.ZP,{container:!0,spacing:4,children:[(0,s.jsxs)(b.ZP,{item:!0,xs:12,md:6,children:[(0,s.jsx)(c.Z,{variant:"caption",children:"F\xe1brica:"}),(0,s.jsx)(c.Z,{variant:"subtitle1",sx:{fontWeight:600},children:ee.nomeFantasia})]}),(0,s.jsx)(b.ZP,{item:!0,xs:12,md:6,children:et&&(0,s.jsx)(f.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,s.jsx)(O.Z,{size:"small",skin:"light",color:et.color,label:et.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})]}),(0,s.jsx)(i.Z,{register:ey,errors:eV,setValue:ek,watch:eC,fields:_,values:T,isDisabled:!eb.status}),(0,s.jsxs)(b.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(b.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Categorias",values:M,name:"categorias",changeCategory:eM,register:ey,isDisabled:!eb.status})}),(0,s.jsx)(b.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Atividades",values:U,name:"atividades",register:ey,isDisabled:!eb.status})}),(0,s.jsx)(b.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Sistema de Qualidade",values:L,name:"sistemasQualidade",register:ey,isDisabled:!eb.status})})]})]})]}),J&&J.map((e,a)=>(0,s.jsx)(x.Z,{index:a,blockKey:"parFornecedorBlocoID",values:e,register:ey,setValue:ek,errors:eV,isDisabled:!eb.status},a)),(0,s.jsx)(h.Z,{sx:{mt:4},children:(0,s.jsx)(g.Z,{children:(0,s.jsx)(b.ZP,{container:!0,spacing:4,children:(0,s.jsx)(b.ZP,{item:!0,xs:12,md:12,children:(0,s.jsxs)(D.Z,{fullWidth:!0,children:[(0,s.jsx)(c.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,s.jsx)(j.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",disabled:!eb.status,placeholder:"Observa\xe7\xe3o (opcional)",name:"obs",defaultValue:null!==(e=G.obs)&&void 0!==e?e:"",...ey("obs")})]})})})})})]}):null,(0,s.jsx)(w.Z,{openModal:Y,handleClose(){$(!1),W(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:G,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:eq,listErrors:eg}),ei&&(0,s.jsx)(V.Z,{id:eZ,parFormularioID:1,formStatus:G.status,hasFormPending:er,canChangeStatus:1==a.papelID&&!er&&G.status>30,openModal:ei,handleClose:()=>el(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(eZ," do Fornecedor."),btnCancel:!0,btnConfirm:!0,handleSubmit:e_})]})};var W=N}}]);