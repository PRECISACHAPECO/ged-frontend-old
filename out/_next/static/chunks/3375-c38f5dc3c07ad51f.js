(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3375],{45061:function(e,a,t){"use strict";var o=t(85893),n=t(75084),s=t(29620),l=t(77745),r=t(95398),i=t(76779),d=t(44642);t(21609);var c=t(55343),u=t(67836),m=t(29630),x=t(19604),p=t(67294),h=t(82747);let b=e=>{let{title:a,text:t,handleClose:b,openModal:g,handleSubmit:v,cnpj:f,inputEmail:j,btnCancel:Z,btnConfirm:I,btnCancelColor:D,btnConfirmColor:C}=e,[y,S]=(0,p.useState)(null),[P,F]=(0,p.useState)(!1);return console.log("dialog email: ",y),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{open:g,onClose:b,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(l.Z,{id:"form-dialog-title",children:a}),(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(d.Z,{sx:{mb:3},children:t}),j&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.Z,{sx:{mt:2},fullWidth:!0,children:[(0,o.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&P,inputProps:{onChange(e){S(e.target.value),F(!(0,h.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&P&&(0,o.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,o.jsx)(x.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,o.jsxs)(i.Z,{className:"dialog-actions-dense",children:[Z&&(0,o.jsx)(n.Z,{variant:"outlined",color:"primary",onClick:b,children:"Cancelar"}),I&&(0,o.jsx)(n.Z,{variant:"contained",disabled:j&&(null==y?void 0:y.length)>0&&P,color:C||"error",onClick:j&&f?()=>{v(f,y),S(null),b()}:j&&!f?()=>{v(y),S(null),b()}:()=>{v(),b()},children:"Confirmar"})]})]})})};a.Z=b},18794:function(e,a,t){"use strict";t.d(a,{Z:function(){return et}});var o=t(85893),n=t(67294),s=t(87536),l=t(21609),r=t(19604),i=t(49837),d=t(91359),c=t(79072),u=t(29630),m=t(61953),x=t(55343),p=t(35966),h=t(67836),b=t(81284),g=t(95309),v=t(22841),f=t(41470),j=t(15497),Z=t(11163),I=t.n(Z),D=t(46749),C=t(60664),y=t(89191),S=t(60565),P=t(40039),F=t(47842);t(49540);var k=t(86501),w=t(75158),W=t(66136),A=t(34175),V=t(7071),O=t(26829),E=t(50720),R=t(54623),L=t(13860),z=t.n(L);t(57548);var M=t(45061),q=t(75084),Q=t(29620),T=t(77745),N=t(95398),_=t(76779),B=t(44642),U=t(67074),Y=t(17494),$=t(87413),H=t(72162),J=t(9601),K=t(51221),X=t(36599);let G=(0,U.ZP)(X.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"}}}),ee=e=>{var a;let{id:t,parFormularioID:s,formStatus:i,hasFormPending:d,title:c,text:b,handleClose:g,openModal:v,handleSubmit:f,btnCancel:j,btnConfirm:Z,btnConfirmColor:I}=e,[y,S]=(0,n.useState)(!1),{user:F,loggedUnity:k}=(0,n.useContext)(P.V),[w,W]=(0,n.useState)(null),[A,O]=(0,n.useState)(!1);console.log("selectedStatus: ",w);let E=async()=>{try{await C.h.post("/formularios/fornecedor/getMovementHistory/".concat(t),{parFormularioID:s}).then(e=>{console.log("\uD83D\uDE80 ~ response:",e.data),S(e.data)})}catch(e){console.log(e)}},R=[];for(let L in D.WR)parseInt(L)>=10&&30>=parseInt(L)&&parseInt(L)!=i&&R.push({id:parseInt(L),nome:D.WR[L].title});return(0,n.useEffect)(()=>{console.log("entrou no useeffect..."),E()},[A]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(Q.Z,{open:v,onClose:g,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(T.Z,{id:"form-dialog-title",children:c}),(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(B.Z,{sx:{mb:3},children:b}),F&&1==F.papelID&&!d&&i>30&&(0,o.jsx)(m.Z,{children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(p.Z,{options:R,defaultValue:R.find(e=>e.id===w),id:"autocomplete-outlined",getOptionLabel:e=>e.nome,onChange(e,a){W(null==a?void 0:a.id)},renderInput:e=>(0,o.jsx)(h.Z,{...e,name:"formulario.status",label:"Alterar Status do Formul\xe1rio",placeholder:"Alterar Status do Formul\xe1rio"})})})}),F&&1==F.papelID&&d&&(0,o.jsx)(r.Z,{severity:"warning",sx:{mb:4},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"}),(0,o.jsx)(m.Z,{children:(0,o.jsx)(G,{children:y&&y.length>0&&y.map((e,a)=>(0,o.jsxs)($.Z,{children:[(0,o.jsxs)(J.Z,{children:[(0,o.jsx)(Y.Z,{color:D.WR[e.statusAtual].color}),(0,o.jsx)(K.Z,{})]}),(0,o.jsxs)(H.Z,{sx:{"& svg":{verticalAlign:"bottom",mx:4}},children:[(0,o.jsxs)(m.Z,{sx:{mb:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsxs)(u.Z,{variant:"body2",sx:{mr:2,fontWeight:600,color:"text.primary"},children:[e.data+" - "+e.hora+" ",0==a&&(0,o.jsx)(V.Z,{size:"small",skin:"light",color:D.WR[e.statusAtual].color,label:"Atual",sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,o.jsx)(u.Z,{variant:"caption",children:e.usuario})]}),(0,o.jsxs)(m.Z,{sx:{mb:2,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsxs)(u.Z,{variant:"body2",sx:{color:"text.primary"},children:[(0,o.jsx)("span",{children:D.WR[e.statusAnterior].title}),(0,o.jsx)(l.Z,{icon:"mdi:arrow-right",fontSize:20,style:{display:"inline-block"}}),(0,o.jsx)("span",{children:D.WR[e.statusAtual].title})]}),(0,o.jsx)(u.Z,{variant:"caption",children:e.unidade})]})]})]}))})})]}),(0,o.jsxs)(_.Z,{className:"dialog-actions-dense",children:[j&&(0,o.jsx)(q.Z,{variant:"outlined",color:"primary",onClick:g,children:"Fechar"}),Z&&F&&1==F.papelID&&!d&&(0,o.jsx)(q.Z,{variant:"contained",color:"primary",onClick:()=>O(!0),disabled:!w,children:"Confirmar"})]})]}),(0,o.jsx)(M.Z,{openModal:A,handleClose:()=>O(!1),title:"Confirmar Altera\xe7\xe3o",text:'Deseja realmente alterar o status do formul\xe1rio para "'.concat(null===(a=D.WR[w])||void 0===a?void 0:a.title,'" ? O mesmo ficar\xe1 dispon\xedvel para a edi\xe7\xe3o do Fornecedor novamente.'),btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",handleSubmit(){f(w),O(!1),W(null)}})]})},ea=()=>{var e,a,t;let{user:Z,loggedUnity:L}=(0,n.useContext)(P.V),{setTitle:q}=(0,n.useContext)(S.f),[Q,T]=(0,n.useState)(!1),[N,_]=(0,n.useState)(!1),[B,U]=(0,n.useState)([]),[Y,$]=(0,n.useState)(null),[H,J]=(0,n.useState)([]),[K,X]=(0,n.useState)([]),[G,ea]=(0,n.useState)([]),[et,eo]=(0,n.useState)([]),[en,es]=(0,n.useState)([]),[el,er]=(0,n.useState)(""),[ei,ed]=(0,n.useState)(!1),[ec,eu]=(0,n.useState)(null),[em,ex]=(0,n.useState)(null),[ep,eh]=(0,n.useState)(!1),[eb,eg]=(0,n.useState)(!1),[ev,ef]=(0,n.useState)(!0),[ej,eZ]=(0,n.useState)(null),[eI,eD]=(0,n.useState)(0),[eC,ey]=(0,n.useState)([]),[eS,eP]=(0,n.useState)({status:!1,message:"Voce nao tem permissoes mais garoto...",messageType:"info"}),eF=I(),{id:ek}=eF.query,ew=(0,D.g_)(eF.pathname),eW=(0,D.Lo)(eF.pathname),{settings:eA}=(0,n.useContext)(W.J6);eA.mode;let eV=Y&&B.reduce((e,a)=>{if(a.tabela){var t,o;e[a.tabela]={id:null===(t=Y[a.tabela])||void 0===t?void 0:t.id,nome:null===(o=Y[a.tabela])||void 0===o?void 0:o.nome}}else{let n=L[a.nomeColuna];e[a.nomeColuna]=Y[a.nomeColuna]?Y[a.nomeColuna]:n||null}return e},{}),{watch:eO,register:eE,control:eR,setValue:eL,handleSubmit:ez,formState:{errors:eM}}=(0,s.cI)(),eq=(e,a)=>{e.map((e,a)=>{e.tabela?eL("header.".concat(e.tabela),null==eV?void 0:eV[e.tabela]):"date"==e.tipo||eL("header.".concat(e.nomeColuna),null==eV?void 0:eV[e.nomeColuna])}),a.map((e,a)=>{e.itens.map((e,t)=>{eL("blocos[".concat(a,"].itens[").concat(t,"].respostaID"),null==e?void 0:e.respostaID),eL("blocos[".concat(a,"].itens[").concat(t,"].resposta"),null==e?void 0:e.resposta)})})},eQ=(e,a)=>!1,eT=async()=>{try{await C.h.post("/formularios/fornecedor/verifyFormPending/".concat(ek),{parFormularioID:1}).then(e=>{ef(e.data) //! true/false
})}catch(e){console.log(e)}},eN=async e=>{let a={status:e,auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:L.unidadeID}};try{_(!0),await C.h.post("".concat(ew,"/reOpenFormStatus/").concat(ek),a).then(e=>{k.ZP.success(D.OD.successUpdate),_(!1)})}catch(t){console.log(t)}},e_=async()=>{let e={status:{edit:ep,status:el.status},auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:L.unidadeID}};if(ep){console.log("updateFormStatus: ",e);try{_(!0),await C.h.post("".concat(ew,"/updateFormStatus/").concat(ek),e).then(e=>{k.ZP.success(D.OD.successUpdate),_(!1)})}catch(a){console.log(a)}}else k.ZP.error("N\xe3o h\xe1 dados a serem atualizados!")},eB=e=>{let a=e.target.value,t={...el,status:a};er(t)},eU=async()=>{let e={usuarioID:Z.usuarioID,unidadeID:L.unidadeID,papelID:Z.papelID};try{_(!0),await C.h.post("".concat(ew,"/conclusionAndSendForm/").concat(ek),e).then(e=>{201===e.status?k.ZP.error("Erro ao concluir o formul\xe1rio!"):202===e.status?(k.ZP.error("Erro ao realizar o envio de email para ".concat(Z.email)),k.ZP.success("Formul\xe1rio conclu\xeddo com sucesso!"),eX()):k.ZP.success("Formul\xe1rio conclu\xeddo com sucesso!"),ed(!1),_(!1)})}catch(a){console.log(a)}},eY=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");C.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(eL("header.logradouro",e.data.logradouro),eL("header.bairro",e.data.bairro),eL("header.cidade",e.data.localidade),eL("header.estado",e.data.uf),k.ZP.success("Endere\xe7o encontrado!")):k.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},e$=[{id:1,name:"Formul\xe1rio do fornecedor",component:"Fornecedor",papelID:Z.papelID,identification:"01",params:{fornecedorID:ek}},{id:2,name:"Recep\xe7\xe3o",component:"Fornecedor",papelID:Z.papelID,identification:"02"}],eH=(e,a)=>{let t=[];e.map((e,o)=>{eK(e.categorias,a)&&t.push(e)}),es(t)},eJ=(e,a)=>{let t=H.map(t=>t.categoriaID===e?{...t,checked:a}:t);J(t),eH(et,t)},eK=(e,a)=>{let t=e.map(e=>e.categoriaID),o=a.filter(e=>e.checked).map(e=>e.categoriaID);if(t.length!==o.length)return!1;let n=[...t].sort(),s=[...o].sort();for(let l=0;l<n.length;l++)if(n[l]!==s[l])return!1;return!0},eX=()=>{try{T(!0),C.h.get("".concat(ew,"/").concat(ek)).then(e=>{var a;console.log("getData: ",e.data),U(e.data.fields),J(e.data.categorias),X(e.data.atividades),ea(e.data.sistemasQualidade),eo(e.data.blocos),eH(e.data.blocos,e.data.categorias),$(e.data.data),er(e.data.info),eu(e.data.unidade),eq(e.data.fields,e.data.blocos);let t=D.WR[e.data.info.status];ex(t),eP({status:2==Z.papelID&&e.data.info.status<40,message:2==Z.papelID?"Esse formul\xe1rio j\xe1 foi conclu\xeddo e enviado pra f\xe1brica, n\xe3o \xe9 mais poss\xedvel alterar as informa\xe7\xf5es!":"Somente o fornecedor pode alterar as informa\xe7\xf5es deste formul\xe1rio!",messageType:2==Z.papelID?"warning":"info"}),eZ(null===(a=e.data.data)||void 0===a?void 0:a.registroestabelecimento),T(!1)})}catch(e){console.log(e)}},eG=()=>{eF.push("/formularios/fornecedor/"),k.ZP.error("Voc\xea n\xe3o tem permiss\xf5es para acessar esta p\xe1gina!")},e0=async()=>{console.log("handleSendForm....."),ez(e1)(!0)},e1=async(e,a)=>{a?(e2(e),ed(!0)):(e2(e),ed(!1))},e2=async e=>{let a={forms:{...e,header:{...e.header}},auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:L.unidadeID}};console.log("submit data: ",a.forms.header);try{_(!0),await C.h.put("".concat(ew,"/").concat(ek),a).then(e=>{k.ZP.success(D.OD.successUpdate),_(!1)})}catch(t){console.log(t)}};return(0,n.useEffect)(()=>{q("Formul\xe1rio do Fornecedor"),"edit"==eW?eX():eG(),eT()},[N]),(0,o.jsxs)(o.Fragment,{children:[Q&&(0,o.jsx)(F.Z,{}),Y&&(0,o.jsxs)("form",{onSubmit:ez(e=>{eS.status?e1(e,!1):e_()}),children:[en&&0===en.length&&(0,o.jsx)(r.Z,{severity:"warning",sx:{mb:2},children:"N\xe3o h\xe1 nenhum bloco dispon\xedvel para as categorias selecionadas!"}),!eS.status&&(0,o.jsx)(r.Z,{severity:eS.messageType,sx:{mb:2},children:eS.message}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(y.Z,{btnCancel:!0,btnChangeStatus:!0,btnSave:eS.status||1==Z.papelID&&el.status>=40,btnSend:2==Z.papelID&&el.status<40,btnPrint:!0,dataReports:e$,handleSubmit:e=>ez(e1),disabledSubmit:0===en.length,disabledSend:0===en.length,handleSend:e0,handleChangeStatus:()=>eg(!0),title:"Fornecedor"}),(0,o.jsxs)(d.Z,{children:[ec&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",value:ec.unidadeID,name:"unidadeID",...eE("unidadeID")}),(0,o.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:6,children:[(0,o.jsx)(u.Z,{variant:"caption",children:"F\xe1brica:"}),(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:ec.nomeFantasia})]}),(0,o.jsx)(c.ZP,{item:!0,xs:12,md:6,children:em&&(0,o.jsx)(m.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,o.jsx)(V.Z,{size:"small",skin:"light",color:em.color,label:em.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})]}),(0,o.jsx)(c.ZP,{container:!0,spacing:4,sx:{mt:4},children:B&&B.map((e,a)=>{var t,n;return(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsxs)(x.Z,{fullWidth:!0,children:[e&&"int"===e.tipo&&e.tabela&&(0,o.jsx)(p.Z,{disabled:!eS.status,options:e.options,getOptionSelected:(e,a)=>e.id===a.id,defaultValue:(null==eV?void 0:null===(t=eV[e.tabela])||void 0===t?void 0:t.id)?eV[e.tabela]:null,getOptionLabel:e=>e.nome,name:"header.".concat(e.tabela),...eE("header.".concat(e.tabela),{required:!!e.obrigatorio}),onChange(a,t){eL("header.".concat(e.tabela),t||""),"registroestabelecimento"==e.tabela&&eZ(eO("header.registroestabelecimento"))},renderInput(a){var t;return(0,o.jsx)(h.Z,{...a,label:e.nomeCampo,placeholder:e.nomeCampo,error:null!=eM&&null!==(t=eM.header)&&void 0!==t&&!!t[e.tabela]})}}),e&&"date"==e.tipo&&(0,o.jsx)(h.Z,{type:"date",label:"Selecione uma data",defaultValue:(null==eV?void 0:eV[e.nomeColuna])?new Date(null==eV?void 0:eV[e.nomeColuna]).toISOString().split("T")[0]:"",name:"header.".concat(e.nomeColuna),...eE("header.".concat(e.nomeColuna),{required:e.obrigatorio&&eS.status}),variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0}}),e&&"string"==e.tipo&&("numeroRegistro"!=e.nomeColuna||(null==ej?void 0:ej.id)>1)&&(0,o.jsx)(h.Z,{defaultValue:eV?eV[e.nomeColuna]:"",label:e.nomeCampo,disabled:!eS.status,placeholder:e.nomeCampo,name:"header.".concat(e.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=eM&&null!==(n=eM.header)&&void 0!==n&&!!n[e.nomeColuna],...eE("header.".concat(e.nomeColuna),{required:!!e.obrigatorio&&eS.status}),onChange(a){"cnpj"==e.nomeColuna?a.target.value=(0,A.PK)(a.target.value):"cep"==e.nomeColuna?(a.target.value=(0,A.Tc)(a.target.value),eY(a.target.value)):"telefone"==e.nomeColuna?a.target.value=(0,A.Bk)(a.target.value):"estado"==e.nomeColuna?a.target.value=(0,A.CL)(a.target.value):a.target.value=a.target.value},inputProps:"cnpj"==e.nomeColuna?{maxLength:18}:"cep"==e.nomeColuna?{maxLength:9}:"telefone"==e.nomeColuna?{maxLength:15}:"estado"==e.nomeColuna?{maxLength:2}:{}})]})},a)})}),(0,o.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsx)(g.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Categorias"})})}),H&&H.map((e,a)=>(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"categorias.[".concat(a,"].categoriaID"),defaultValue:e.categoriaID,...eE("categorias.[".concat(a,"].categoriaID"))}),(0,o.jsx)(v.Z,{control:(0,o.jsx)(w.Z,{name:"categorias[".concat(a,"].checked"),disabled:!eS.status,...eE("categorias[".concat(a,"].checked")),defaultChecked:1==e.checked,onClick:a=>eJ(e.categoriaID,a.target.checked)}),label:e.nome})]})},a))]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsx)(g.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Atividades"})})}),K&&K.map((e,a)=>(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"atividades.[".concat(a,"].atividadeID"),defaultValue:e.atividadeID,...eE("atividades.[".concat(a,"].atividadeID"))}),(0,o.jsx)(v.Z,{control:(0,o.jsx)(w.Z,{name:"atividades[".concat(a,"].checked"),disabled:!eS.status,...eE("atividades[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsx)(g.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Sistemas de Qualidade"})})}),G&&G.map((e,a)=>(0,o.jsx)(b.ZP,{disablePadding:!0,children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"sistemasQualidade.[".concat(a,"].sistemaQualidadeID"),defaultValue:e.sistemaQualidadeID,...eE("sistemasQualidade.[".concat(a,"].sistemaQualidadeID"))}),(0,o.jsx)(v.Z,{control:(0,o.jsx)(w.Z,{name:"sistemasQualidade[".concat(a,"].checked"),disabled:!eS.status,...eE("sistemasQualidade[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]})]})]})]}),en&&en.map((t,n)=>(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsx)(d.Z,{children:(0,o.jsxs)(c.ZP,{container:!0,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].parFornecedorBlocoID"),defaultValue:t.parFornecedorBlocoID,...eE("blocos[".concat(n,"].parFornecedorBlocoID"))}),(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:t.nome})}),t.itens&&t.itens.map((t,s)=>{var r,i,d;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(s,"].itemID"),defaultValue:t.itemID,...eE("blocos[".concat(n,"].itens[").concat(s,"].itemID"))}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,o.jsx)(m.Z,{children:(0,o.jsx)(l.Z,{icon:eQ(n,s)?"line-md:confirm-circle-twotone":"line-md:confirm-circle",style:{color:eQ(n,s)?"green":"gray",marginTop:"8px"}})}),(0,o.jsx)(m.Z,{children:t.ordem+" - "+t.nome})]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:3,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(s,"].tipoAlternativa"),defaultValue:t.alternativa,...eE("blocos[".concat(n,"].itens[").concat(s,"].tipoAlternativa"))}),(0,o.jsxs)(x.Z,{fullWidth:!0,children:[t.alternativas&&t.alternativas.length>1&&(0,o.jsx)(p.Z,{options:t.alternativas,defaultValue:t.resposta?{nome:null==t?void 0:t.resposta}:{nome:""},id:"autocomplete-outlined",getOptionLabel:e=>e.nome,disabled:!eS.status,onChange(e,a){eL("blocos[".concat(n,"].itens[").concat(s,"].respostaID"),null==a?void 0:a.alternativaID)},renderInput(e){var a,l,r;return(0,o.jsx)(h.Z,{...e,name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),label:"Selecione uma resposta",placeholder:"Selecione uma resposta",...eE("blocos[".concat(n,"].itens[").concat(s,"].resposta"),{required:1==t.obrigatorio}),error:null!==(r=null==eM?void 0:null===(a=eM.blocos)||void 0===a?void 0:null===(l=a[n])||void 0===l?void 0:l.itens[s])&&void 0!==r&&!!r.resposta})}}),0==t.alternativas.length&&"Data"==t.alternativa&&(0,o.jsx)(E._,{dateAdapter:O.y,children:(0,o.jsx)(R.M,{label:"Selecione uma data",disabled:!eS.status,locale:z().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:z()(new Date),name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),...eE("blocos[".concat(n,"].itens[").concat(s,"].resposta"),{required:1==t.obrigatorio}),onChange(e){eL("blocos[".concat(n,"].itens[").concat(s,"].resposta"),e||null)},renderInput(e){var a,t,l;return(0,o.jsx)(h.Z,{...e,variant:"outlined",error:null!==(l=null==eM?void 0:null===(a=eM.blocos)||void 0===a?void 0:null===(t=a[n])||void 0===t?void 0:t.itens[s])&&void 0!==l&&!!l.resposta})},required:!0})}),0==t.alternativas.length&&"Dissertativa"==t.alternativa&&(0,o.jsx)(h.Z,{multiline:!0,defaultValue:null!==(e=t.resposta)&&void 0!==e?e:"",label:"Descreva a resposta",disabled:!eS.status,placeholder:"Descreva a resposta",name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),...eE("blocos[".concat(n,"].itens[").concat(s,"].resposta"),{required:1==t.obrigatorio}),error:null!==(d=null==eM?void 0:null===(r=eM.blocos)||void 0===r?void 0:null===(i=r[n])||void 0===i?void 0:i.itens[s])&&void 0!==d&&!!d.resposta})]})]}),t&&1==t.obs&&(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(h.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",disabled:!eS.status,name:"blocos[".concat(n,"].itens[").concat(s,"].observacao"),defaultValue:null!==(a=t.observacao)&&void 0!==a?a:"",...eE("blocos[".concat(n,"].itens[").concat(s,"].observacao"))})})})]},s)})})]})})},n)),(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsx)(d.Z,{children:(0,o.jsx)(c.ZP,{container:!0,spacing:4,children:(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(x.Z,{fullWidth:!0,children:[(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(h.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",disabled:!eS.status,placeholder:"Observa\xe7\xe3o (opcional)",name:"obs",defaultValue:null!==(t=el.obs)&&void 0!==t?t:"",...eE("obs")})]})})})})}),Z&&1==Z.papelID&&el.status>=40&&(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Status do Formul\xe1rio"}),ev&&(0,o.jsx)(r.Z,{severity:"warning",sx:{mb:4},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"}),(0,o.jsx)(m.Z,{display:"flex",gap:8,children:(0,o.jsxs)(f.Z,{row:!0,"aria-label":"colored",name:"colored",value:el.status,onChange:eB,children:[(0,o.jsx)(v.Z,{value:70,disabled:ev,name:"status",...eE("status"),onChange:()=>eh(!0),control:(0,o.jsx)(j.Z,{color:"success"}),label:"Aprovado"}),(0,o.jsx)(v.Z,{value:60,disabled:ev,name:"status",...eE("status"),onChange:()=>eh(!0),label:"Aprovado parcial",control:(0,o.jsx)(j.Z,{color:"warning"})}),(0,o.jsx)(v.Z,{value:50,disabled:ev,name:"status",...eE("status"),onChange:()=>eh(!0),label:"Reprovado",control:(0,o.jsx)(j.Z,{color:"error"})})]})})]})})]}),(0,o.jsx)(M.Z,{openModal:ei,handleClose:()=>ed(!1),title:"Concluir e Enviar Formul\xe1rio",text:"Deseja realmente concluir e enviar? Ap\xf3s a conclus\xe3o, voc\xea n\xe3o poder\xe1 mais alterar esse formul\xe1rio. Um e-mail ser\xe1 enviado e agora basta aguardar a an\xe1lise do ".concat(null==ec?void 0:ec.nomeFantasia,". Ap\xf3s a conclus\xe3o voc\xea ser\xe1 alertado no email ").concat(Z.email),btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",handleSubmit:eU}),eb&&(0,o.jsx)(ee,{id:ek,parFormularioID:1,formStatus:el.status,hasFormPending:ev,openModal:eb,handleClose:()=>eg(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(ek," do Fornecedor."),btnCancel:!0,btnConfirm:!0,handleSubmit:eN})]})};var et=ea},47842:function(e,a,t){"use strict";var o=t(85893),n=t(70754),s=t(61953);let l=()=>(0,o.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});a.Z=l},49540:function(e,a,t){"use strict";t.d(a,{X1:function(){return d},p6:function(){return r},q:function(){return i}});var o=t(30381),n=t.n(o),s=t(68214),l=t.n(s);function r(e,a){let t=n()(e),o=t.format(a);return o}function i(e){let a=l()(e).toString();return a}function d(e){return e.replace(/[^0-9]/g,"")}},82747:function(e,a,t){"use strict";function o(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let a=e.length-2,t=e.substring(0,a),o=e.substring(a),n=0,s=a-7;for(let l=a;l>=1;l--)n+=t.charAt(a-l)*s--,s<2&&(s=9);let r=n%11<2?0:11-n%11;if(r!=o.charAt(0))return!1;a+=1,t=e.substring(0,a),n=0,s=a-7;for(let i=a;i>=1;i--)n+=t.charAt(a-i)*s--,s<2&&(s=9);return(r=n%11<2?0:11-n%11)==o.charAt(1)}function n(e){let a;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let o=1;o<=9;o++)t+=parseInt(e.substring(o-1,o))*(11-o);if((10==(a=10*t%11)||11===a)&&(a=0),a!==parseInt(e.substring(9,10)))return!1;t=0;for(let n=1;n<=10;n++)t+=parseInt(e.substring(n-1,n))*(12-n);return(10==(a=10*t%11)||11===a)&&(a=0),a===parseInt(e.substring(10,11))}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(a,{dI:function(){return s},sw:function(){return n},zk:function(){return o}})},42480:function(){}}]);