"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1143],{91143:function(e,a,t){t.d(a,{Z:function(){return W}});var s=t(85893),o=t(67294),n=t(87536),i=t(21609);t(50196);var r=t(56531);t(29308);var l=t(81284),c=t(95309),d=t(29630),u=t(22841),x=t(75158);let m=e=>{let{title:a,values:t,name:o,changeCategory:n,register:i,isDisabled:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.ZP,{disablePadding:!0,children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:a})})}),t&&t.map((e,a)=>(0,s.jsx)(l.ZP,{disablePadding:!0,children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("input",{type:"hidden",name:"".concat(o,".[").concat(a,"].id"),defaultValue:e.id,...i("".concat(o,".[").concat(a,"].id"))}),(0,s.jsx)(u.Z,{control:(0,s.jsx)(x.Z,{name:"".concat(o,"[").concat(a,"].checked"),disabled:!!r,...i("".concat(o,"[").concat(a,"].checked")),defaultChecked:1==e.checked,onClick:a=>n?n(e.id,!!a.target.checked):null}),label:e.nome})]})},a))]})};var p=t(79139),h=t(49837),f=t(91359),g=t(79072),v=t(72389),j=t(80562),D=t(66136),b=function(e){return(0,s.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,s.jsx)("path",{d:"M16.88 9.1A4 4 0 0116 17H5a5 5 0 01-1-9.9V7a3 3 0 014.52-2.59A4.98 4.98 0 0117 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})})},I=function(e){return(0,s.jsx)("svg",{viewBox:"0 0 384 512",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,s.jsx)("path",{d:"M320 464c8.8 0 16-7.2 16-16v-32h48v32c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-32h48v32c0 8.8 7.16 16 16 16h256zm-64-304c-17.7 0-32-14.3-32-32V48H64c-8.84 0-16 7.16-16 16v128H0V64C0 28.65 28.65 0 64 0h165.5c17 0 33.2 6.743 45.2 18.75l90.6 90.55c12 12 18.7 28.2 18.7 45.2V192h-48v-32h-80zM88 224c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.16 16-16 16s-16-7.2-16-16V240c0-8.8 7.16-16 16-16h24zm24 56c0-13.3-10.7-24-24-24h-8v48h8c13.3 0 24-10.7 24-24zm48-40c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-24c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-8v96zm144-128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16h48z"})})};let Z=e=>{let{grupo:a,indexGrupo:t,handleFileSelect:n,handleRemoveAnexo:r}=e,[l,c]=(0,o.useState)(null);console.log("\uD83D\uDE80 ~ selectedItem:",l);let{settings:u}=(0,o.useContext)(D.J6),x=u.mode,m=(0,o.useRef)(null),p=e=>{m.current.click(),c(e)};return(0,o.useEffect)(()=>{m.current.value=""},[n]),(0,s.jsx)(h.Z,{sx:{mt:4},children:(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:a.nome}),(0,s.jsx)(d.Z,{variant:"body2",sx:{mb:2},children:a.descricao}),(0,s.jsx)(g.ZP,{container:!0,spacing:4,children:a.itens.map((e,a)=>{var o;return(0,s.jsx)(g.ZP,{item:!0,xs:12,md:3,children:(0,s.jsxs)("div",{className:"border  ".concat("dark"===x?"border-[#71717B]":"border-[#E1E1E6]"," rounded-lg flex flex-col relative z-10"),children:[(0,s.jsx)("div",{className:"flex items-center justify-center p-2 mt-1 ",children:(0,s.jsx)("p",{className:"font-medium",children:e.nome})}),(0,s.jsx)("div",{className:"flex justify-center items-center cursor-pointer p-1 h-[150px] w-full ",onClick(){e.anexo&&e.anexo.path&&e.anexo.exist?window.open(e.anexo.path,"_blank"):p(e)},children:(0,s.jsx)("div",{className:"flex p-2  justify-center items-center gap-2 rounded-lg w-full h-full m-3 border border-dashed hover:border-[#4A8B57] transition-colors ".concat("dark"===x?" border-[rgba(234, 234, 255, 0.10)]":"rgba(76, 78, 100, 0.12)"),children:(0,s.jsx)("div",{className:"flex items-center gap-3",children:e.anexo&&e.anexo.exist?(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"flex items-center gap-2",children:(0,s.jsx)(I,{className:"text-6xl fill-red-500"})})}):(0,s.jsxs)("div",{className:"flex flex-col items-center gap-1",children:[(0,s.jsx)(b,{className:"w-20 h-20 ".concat(e.anexo&&e.anexo.exist?"fill-[#666CFF]":"fill-current")}),(0,s.jsx)("h6",{className:"text-sm font-normal opacity-80",children:"Adicione um arquivo"})]})})})}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-1 p-2 py-3 pl-4",children:[(0,s.jsx)("p",{className:"text-xs opacity-70",children:e.descricao}),(0,s.jsx)(v.Z,{title:1==e.hasPending?"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio":"Remover este item",children:(0,s.jsx)(j.Z,{color:"error",onClick:()=>r(e),disabled:!(null===(o=e.anexo)||void 0===o?void 0:o.exist),children:(0,s.jsx)(i.Z,{icon:"tabler:trash-filled"})})})]}),(0,s.jsx)("input",{type:"file",ref:m,style:{display:"none"},onChange:e=>n(e,l)})]})},"".concat(t,"-").concat(a))})})]})})};var y=t(19604),S=t(61953),C=t(55343),F=t(11163),P=t.n(F),w=t(46749),E=t(60664),k=t(89191),N=t(60565),z=t(40039),A=t(47842);t(49540);var V=t(86501),M=t(11935),R=t(7071);t(13860),t(57548),t(45061);var T=t(34282);let B=()=>{let{user:e,loggedUnity:a}=(0,o.useContext)(z.V),[t,i]=(0,o.useState)(!1),[l,c]=(0,o.useState)(!1),[u,x]=(0,o.useState)(!1),[v,j]=(0,o.useState)([]),[b,I]=(0,o.useState)(null),[F,B]=(0,o.useState)([]),[W,_]=(0,o.useState)([]),[H,O]=(0,o.useState)([]),[U,L]=(0,o.useState)([]),[Q,q]=(0,o.useState)([]),[J,G]=(0,o.useState)([]),[K,X]=(0,o.useState)(""),[Y,$]=(0,o.useState)(!1),[ee,ea]=(0,o.useState)(null),[et,es]=(0,o.useState)(null),[eo,en]=(0,o.useState)(!1),[ei,er]=(0,o.useState)(!1),[el,ec]=(0,o.useState)(!0),[ed,eu]=(0,o.useState)({status:!1,errors:[]}),[ex,em]=(0,o.useState)(!1),[ep,eh]=(0,o.useState)([]),[ef,eg]=(0,o.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),{setTitle:ev,setStorageId:ej,getStorageId:eD}=(0,o.useContext)(N.f),eb=P(),{id:eI}=eb.query,eZ=(0,w.g_)(eb.pathname),ey=(0,w.Lo)(eb.pathname),{settings:eS}=(0,o.useContext)(D.J6),{watch:eC,register:eF,control:eP,getValues:ew,clearErrors:eE,setValue:ek,setError:eN,handleSubmit:ez,formState:{errors:eA}}=(0,n.cI)(),eV=e=>{var a;null==e||null===(a=e.blocos)||void 0===a||a.map((e,a)=>{var t;null==e||null===(t=e.itens)||void 0===t||t.map((e,t)=>{(null==e?void 0:e.resposta)&&ek("blocos[".concat(a,"].itens[").concat(t,"].resposta"),null==e?void 0:e.resposta)})}),ek()},eM=async()=>{try{await E.h.post("/formularios/fornecedor/verifyFormPending/".concat(eI),{parFormularioID:1}).then(e=>{ec(e.data) //! true/false
})}catch(e){console.log(e)}},eR=async t=>{let s={status:t,auth:{usuarioID:e.usuarioID,papelID:e.papelID,unidadeID:a.unidadeID}};try{c(!0),await E.h.post("".concat(eZ,"/changeFormStatus/").concat(eI),s).then(e=>{V.ZP.success(w.OD.successUpdate),c(!1)})}catch(o){console.log(o)}},eT=async()=>{let t={status:{edit:eo,status:K.status},auth:{usuarioID:e.usuarioID,papelID:e.papelID,unidadeID:a.unidadeID}};if(eo)try{c(!0),await E.h.post("".concat(eZ,"/updateFormStatus/").concat(eI),t).then(e=>{V.ZP.success(w.OD.successUpdate),c(!1)})}catch(s){console.log(s)}else V.ZP.error("N\xe3o h\xe1 dados a serem atualizados!")},eB=[{id:1,name:"Formul\xe1rio do fornecedor",component:"Fornecedor",route:"/relatorio/fornecedor/dadosFornecedor",papelID:e.papelID,identification:"01",params:{fornecedorID:eI}},{id:2,name:"Teste relat\xf3rio1",component:"Fornecedor",route:"/relatorio/fornecedor/dadosFornecedor/teste",papelID:e.papelID,identification:"02"},{id:3,name:"Teste relat\xf3rio2",component:"Fornecedor",route:"/relatorio/fornecedor/dadosFornecedor/teste2",papelID:e.papelID,identification:"03"}],eW=(e,a)=>{let t=[];null==e||e.map((e,s)=>{eH(e.categorias,a)&&t.push(e)}),G(t)},e_=(e,a)=>{let t=F.map(t=>t.id===e?{...t,checked:a}:t);B(t),eW(Q,t)},eH=(e,a)=>{let t=e.map(e=>e.categoriaID),s=a.filter(e=>e.checked).map(e=>e.id);if(t.length!==s.length)return!1;let o=[...t].sort(),n=[...s].sort();for(let i=0;i<o.length;i++)if(o[i]!==n[i])return!1;return!0},eO=()=>{console.log("\uD83D\uDE80 ~ loggedUnity.unidadeID:",a.unidadeID);try{i(!0),eI&&(console.log("\uD83D\uDE80 ~ id:",eI),E.h.post("".concat(eZ,"/").concat(eI),{unidadeLogadaID:a.unidadeID}).then(a=>{console.log("getData: ",a.data.grupoAnexo),j(a.data.fields),B(a.data.categorias),_(a.data.atividades),O(a.data.sistemasQualidade),q(a.data.blocos),eW(a.data.blocos,a.data.categorias),I(a.data.data),L(a.data.grupoAnexo),X(a.data.info),ea(a.data.unidade),eV(a.data);let t=w.WR[a.data.info.status];es(t),eg({status:2==e.papelID&&a.data.info.status<40,message:2==e.papelID?"Esse formul\xe1rio j\xe1 foi conclu\xeddo e enviado pra f\xe1brica, n\xe3o \xe9 mais poss\xedvel alterar as informa\xe7\xf5es!":"Somente o fornecedor pode alterar as informa\xe7\xf5es deste formul\xe1rio!",messageType:2==e.papelID?"warning":"info"}),i(!1)}))}catch(t){console.log(t)}},eU=()=>{eb.push("/formularios/fornecedor/"),V.ZP.error("Voc\xea n\xe3o tem permiss\xf5es para acessar esta p\xe1gina!")},eL=()=>{eJ(),$(!0),x(!0)},eQ=async e=>{e.conclusion=!0,await ez(eq)(e)},eq=async function(t){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===s.conclusion&&(t.status=e&&1==e.papelID?s.status:40,t.obsConclusao=s.obsConclusao);let o={forms:{...t,header:{...t.header}},auth:{usuarioID:e.usuarioID,papelID:e.papelID,unidadeID:a.unidadeID}};try{c(!0),await eK(),await E.h.put("".concat(eZ,"/").concat(eI),o).then(e=>{V.ZP.success(w.OD.successUpdate),c(!1)})}catch(n){console.log(n)}},eJ=()=>{eE();let e=!1,a=[];v.forEach((t,s)=>{let o=t.tabela?"header.".concat(t.tabela):"header.".concat(t.nomeColuna),n=ew(o);1!==t.obrigatorio||n||(eN(o,{type:"manual",message:"Campo obrigat\xf3rio"}),a.push(null==t?void 0:t.nomeCampo),e=!0)}),J.forEach((t,s)=>{t.itens.forEach((t,o)=>{let n=ew("blocos[".concat(s,"].itens[").concat(o,"].resposta"));(null==t?void 0:t.obrigatorio)!==1||n||(eN("blocos[".concat(s,"].itens[").concat(o,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),a.push(null==t?void 0:t.nome),e=!0)})}),eu({status:e,errors:a})};(0,o.useEffect)(()=>{ev("Formul\xe1rio do Fornecedor"),"edit"==ey?eO():eU(),eM()},[l]),(0,o.useEffect)(()=>{eJ()},[]),(0,o.useEffect)(()=>{ex&&V.ZP.success("Dados copiados com sucesso!")},[ex]);let eG=(e,a)=>{let t=e.target.files[0];console.log("\uD83D\uDE80 ~ selectedFile:",t);let s={...a,anexo:{exist:!0,path:null,file:t,nome:t.name,type:t.type,size:t.size,time:t.lastModified}},o=U.map(e=>e.grupoAnexoID==a.grupoanexoID?{...e,itens:e.itens.map(e=>e.grupoanexoitemID==s.grupoanexoitemID?(console.log("encontrou item"),s):e)}:e);L(o),V.ZP.success("Anexo adicionado, salve para concluir!")},eK=async()=>{let t=new FormData;t.append("usuarioID",e.usuarioID),t.append("unidadeID",a.unidadeID);let s=0;U.forEach((e,a)=>{e.itens.forEach((e,a)=>{e.anexo&&e.anexo.file&&(t.append("pdfFiles",e.anexo.file),t.append("titulo[".concat(s,"]"),e.anexo.nome),t.append("grupoanexoitemID[".concat(s,"]"),e.grupoanexoitemID),s++)})}),ep.forEach((e,a)=>{t.append("arrAnexoRemoved[".concat(a,"]"),e)}),await E.h.post("/formularios/fornecedor/saveAnexo/".concat(eI),t,{headers:{"Content-Type":"multipart/form-data"}})},eX=e=>{eh([...ep,e.grupoanexoitemID]);let a=U.map(a=>a.grupoAnexoID==e.grupoanexoID?{...a,itens:a.itens.map(a=>a.grupoanexoitemID==e.grupoanexoitemID?{...e,anexo:null}:a)}:a);L(a),V.ZP.success("Anexo pr\xe9-removido, salve para concluir!")};return(0,s.jsxs)(s.Fragment,{children:[t?(0,s.jsx)(A.Z,{}):v?(0,s.jsxs)("form",{onSubmit:ez(e=>{ef.status?eq(e,!1):eT()}),children:[J&&0===J.length&&(0,s.jsx)(y.Z,{severity:"warning",sx:{mb:2},children:"N\xe3o h\xe1 nenhum bloco dispon\xedvel para as categorias selecionadas!"}),!ef.status&&(0,s.jsx)(y.Z,{severity:ef.messageType,sx:{mb:2},children:ef.message}),(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(k.Z,{btnCancel:!0,btnSave:2==e.papelID&&K.status<40,btnSend:1==e.papelID&&K.status>=40||2==e.papelID&&K.status<40,disabledSend:0===J.length,disabledSubmit:0===J.length,disabledPrint:0===J.length,btnPrint:!0,generateReport:w.OE,dataReports:eB,handleSubmit:()=>ez(eq),handleSend:eL,title:"Fornecedor",btnStatus:!0,handleBtnStatus:()=>er(!0)}),(0,s.jsxs)(f.Z,{children:[ee&&(0,s.jsxs)(S.Z,{sx:{mb:4},children:[(0,s.jsx)("input",{type:"hidden",value:ee.unidadeID,name:"unidadeID",...eF("unidadeID")}),(0,s.jsxs)(g.ZP,{container:!0,spacing:4,children:[(0,s.jsxs)(g.ZP,{item:!0,xs:12,md:6,children:[(0,s.jsx)(d.Z,{variant:"caption",children:"F\xe1brica:"}),(0,s.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600},children:ee.nomeFantasia})]}),(0,s.jsx)(g.ZP,{item:!0,xs:12,md:6,children:et&&(0,s.jsx)(S.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,s.jsx)(R.Z,{size:"small",skin:"light",color:et.color,label:et.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})]}),(0,s.jsx)(r.Z,{register:eF,errors:eA,setValue:ek,watch:eC,fields:v,values:b,disabled:!ef.status,setCopiedDataContext:em}),(0,s.jsxs)(g.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(g.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Categorias",values:F,name:"categorias",changeCategory:e_,register:eF,disabled:!ef.status})}),(0,s.jsx)(g.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Atividades",values:W,name:"atividades",register:eF,disabled:!ef.status})}),(0,s.jsx)(g.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(m,{title:"Sistema de Qualidade",values:H,name:"sistemasQualidade",register:eF,disabled:!ef.status})})]})]})]}),J&&J.map((e,a)=>(0,s.jsx)(p.Z,{index:a,blockKey:"parFornecedorBlocoID",values:e,register:eF,setValue:ek,errors:eA,disabled:!ef.status},a)),U&&U.map((e,a)=>(0,s.jsx)(Z,{grupo:e,indexGrupo:a,handleFileSelect:eG,handleRemoveAnexo:eX},a)),(0,s.jsx)(h.Z,{sx:{mt:4},children:(0,s.jsx)(f.Z,{children:(0,s.jsx)(g.ZP,{container:!0,spacing:4,children:(0,s.jsx)(g.ZP,{item:!0,xs:12,md:12,children:(0,s.jsx)(C.Z,{fullWidth:!0,children:(0,s.jsx)(d.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"})})})})})})]}):null,(0,s.jsx)(M.Z,{openModal:Y,handleClose(){$(!1),x(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:K,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:eQ,listErrors:ed}),ei&&(0,s.jsx)(T.Z,{id:eI,parFormularioID:1,formStatus:K.status,hasFormPending:el,canChangeStatus:1==e.papelID&&!el&&K.status>30,openModal:ei,handleClose:()=>er(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(eI," do Fornecedor."),btnCancel:!0,btnConfirm:!0,handleSubmit:eR})]})};var W=B}}]);