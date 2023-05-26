"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8794],{45061:function(e,a,t){var o=t(85893),n=t(75084),s=t(29620),r=t(77745),l=t(95398),i=t(76779),d=t(44642);t(21609);var c=t(55343),u=t(67836),m=t(29630),x=t(19604),p=t(67294),h=t(82747);let f=e=>{let{title:a,text:t,handleClose:f,openModal:b,handleSubmit:g,cnpj:j,inputEmail:v,btnCancel:Z,btnConfirm:D,btnCancelColor:y,btnConfirmColor:I}=e,[C,S]=(0,p.useState)(null),[P,w]=(0,p.useState)(!1);return console.log("dialog email: ",C),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{open:b,onClose:f,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(r.Z,{id:"form-dialog-title",children:a}),(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(d.Z,{sx:{mb:3},children:t}),v&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.Z,{sx:{mt:2},fullWidth:!0,children:[(0,o.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==C?void 0:C.length)>0&&P,inputProps:{onChange(e){S(e.target.value),w(!(0,h.dI)(e.target.value))}}}),(null==C?void 0:C.length)>0&&P&&(0,o.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,o.jsx)(x.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,o.jsxs)(i.Z,{className:"dialog-actions-dense",children:[Z&&(0,o.jsx)(n.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),D&&(0,o.jsx)(n.Z,{variant:"contained",disabled:v&&(null==C?void 0:C.length)>0&&P,color:I||"error",onClick:v&&j?()=>{g(j,C),S(null),f()}:v&&!j?()=>{g(C),S(null),f()}:()=>{g(),f()},children:"Confirmar"})]})]})})};a.Z=f},89191:function(e,a,t){t.d(a,{Z:function(){return Z}});var o=t(85893),n=t(11163),s=t.n(n),r=t(67294),l=t(91359),i=t(61953),d=t(75084),c=t(41664),u=t.n(c),m=t(21609),x=t(46749),p=t(73812),h=t(86378),f=t(9942);function b(e){let{disabled:a,generateReport:t,dataReports:n,open:s,anchorEl:r,handleClick:l,handleClose:i}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(p.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:r,open:s,onClose:i,TransitionComponent:f.Z,children:n.map(e=>(0,o.jsxs)(h.Z,{onClick(){i(),t(e)},children:[(0,o.jsx)("span",{children:e.identification}),(0,o.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,o.jsx)("span",{children:e.name})]},e.id))})})}var g=t(40039),j=t(10160);let v=e=>{let{btnCancel:a,btnSave:t,btnSend:n,btnChangeStatus:c,handleSubmit:p,disabledSubmit:h,handleSend:f,disabledSend:v,handleChangeStatus:Z,btnDelete:D,onclickDelete:y,btnPrint:I,disabled:C,generateReport:S,dataReports:P}=e,w=s(),{user:F,routes:k}=(0,r.useContext)(g.V),[E,A]=(0,r.useState)(!1),[z,$]=(0,r.useState)(null),W=Boolean(z),O=e=>{$(e.currentTarget)},R=()=>{$(null)},V=(()=>{let e=w.pathname.split("/").slice(0,-1).join("/");return e||w.pathname})();return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>0?A(!0):A(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsxs)(i.Z,{sx:{display:"flex",gap:"8px"},children:[a&&(0,o.jsx)(u(),{href:(0,x.g_)(w.pathname),children:(0,o.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),D&&k.find(e=>e.rota===V&&e.excluir)&&(0,o.jsx)(d.Z,{type:"button",onClick:y,variant:"outlined",color:"error",size:"medium",startIcon:(0,o.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),c&&(0,o.jsx)(d.Z,{type:"button",onClick:Z,variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(m.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,o.jsxs)(i.Z,{sx:{display:"flex",gap:"8px"},children:[I&&1===P.length&&(0,o.jsx)(d.Z,{id:"fade-button","aria-controls":W?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":W?"true":void 0,onClick:()=>S(P[0]),color:"primary",disabled:C,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),I&&P.length>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{id:"fade-button","aria-controls":W?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":W?"true":void 0,onClick:O,color:"primary",disabled:C,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,o.jsx)(b,{generateReport:S,dataReports:P,handleClick:O,handleClose:R,open:W,anchorEl:z})]}),t&&k.find(e=>e.rota===V&&e.editar)&&(0,o.jsx)(d.Z,{onClick:p,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:C||h,startIcon:(0,o.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),n&&2==F.papelID&&(0,o.jsx)(d.Z,{onClick:f,type:"button",variant:"contained",size:"medium",color:"primary",disabled:C||v,sx:{ml:2},startIcon:(0,o.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),E&&t&&k.find(e=>e.rota===V&&e.editar)&&(0,o.jsx)("div",{className:"\n                                ".concat(E?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,o.jsx)(j.Z,{color:"primary",size:"large",onClick:p,type:"submit",variant:"contained",disabled:C||h,children:(0,o.jsx)(m.Z,{icon:"material-symbols:save"})})})]})]})})};var Z=v},18794:function(e,a,t){t.d(a,{Z:function(){return et}});var o=t(85893),n=t(67294),s=t(87536),r=t(21609),l=t(19604),i=t(49837),d=t(91359),c=t(79072),u=t(29630),m=t(61953),x=t(55343),p=t(35966),h=t(67836),f=t(81284),b=t(95309),g=t(22841),j=t(41470),v=t(15497),Z=t(11163),D=t.n(Z),y=t(46749),I=t(60664),C=t(89191),S=t(60565),P=t(40039),w=t(47842),F=t(86501),k=t(75158),E=t(66136),A=t(34175),z=t(7071),$=t(26829),W=t(50720),O=t(54623),R=t(13860),V=t.n(R);t(57548);var L=t(45061),M=t(75084),T=t(29620),N=t(77745),_=t(95398),Q=t(76779),U=t(44642),Y=t(67074),B=t(17494),q=t(87413),G=t(72162),H=t(9601),K=t(51221),J=t(36599);let X=(0,Y.ZP)(J.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"}}}),ee=e=>{var a;let{id:t,parFormularioID:s,formStatus:i,hasFormPending:d,title:c,text:f,handleClose:b,openModal:g,handleSubmit:j,btnCancel:v,btnConfirm:Z,btnConfirmColor:D}=e,[C,S]=(0,n.useState)(!1),{user:w,loggedUnity:F}=(0,n.useContext)(P.V),[k,E]=(0,n.useState)(null),[A,$]=(0,n.useState)(!1);console.log("selectedStatus: ",k);let W=async()=>{try{await I.h.post("/formularios/fornecedor/getMovementHistory/".concat(t),{parFormularioID:s}).then(e=>{console.log("\uD83D\uDE80 ~ response:",e.data),S(e.data)})}catch(e){console.log(e)}},O=[];for(let R in y.WR)parseInt(R)>=10&&30>=parseInt(R)&&parseInt(R)!=i&&O.push({id:parseInt(R),nome:y.WR[R].title});return(0,n.useEffect)(()=>{console.log("entrou no useeffect..."),W()},[A]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(T.Z,{open:g,onClose:b,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(N.Z,{id:"form-dialog-title",children:c}),(0,o.jsxs)(_.Z,{children:[(0,o.jsx)(U.Z,{sx:{mb:3},children:f}),w&&1==w.papelID&&!d&&i>30&&(0,o.jsx)(m.Z,{children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(p.Z,{options:O,defaultValue:O.find(e=>e.id===k),id:"autocomplete-outlined",getOptionLabel:e=>e.nome,onChange(e,a){E(null==a?void 0:a.id)},renderInput:e=>(0,o.jsx)(h.Z,{...e,name:"formulario.status",label:"Alterar Status do Formul\xe1rio",placeholder:"Alterar Status do Formul\xe1rio"})})})}),w&&1==w.papelID&&d&&(0,o.jsx)(l.Z,{severity:"warning",sx:{mb:4},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"}),(0,o.jsx)(m.Z,{children:(0,o.jsx)(X,{children:C&&C.length>0&&C.map((e,a)=>(0,o.jsxs)(q.Z,{children:[(0,o.jsxs)(H.Z,{children:[(0,o.jsx)(B.Z,{color:y.WR[e.statusAtual].color}),(0,o.jsx)(K.Z,{})]}),(0,o.jsxs)(G.Z,{sx:{"& svg":{verticalAlign:"bottom",mx:4}},children:[(0,o.jsxs)(m.Z,{sx:{mb:2,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsxs)(u.Z,{variant:"body2",sx:{mr:2,fontWeight:600,color:"text.primary"},children:[e.data+" - "+e.hora+" ",0==a&&(0,o.jsx)(z.Z,{size:"small",skin:"light",color:y.WR[e.statusAtual].color,label:"Atual",sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,o.jsx)(u.Z,{variant:"caption",children:e.usuario})]}),(0,o.jsxs)(u.Z,{variant:"body2",sx:{color:"text.primary"},children:[(0,o.jsx)("span",{children:y.WR[e.statusAnterior].title}),(0,o.jsx)(r.Z,{icon:"mdi:arrow-right",fontSize:20}),(0,o.jsx)("span",{children:y.WR[e.statusAtual].title})]}),(0,o.jsx)(u.Z,{variant:"caption",children:e.unidade})]})]}))})})]}),(0,o.jsxs)(Q.Z,{className:"dialog-actions-dense",children:[v&&(0,o.jsx)(M.Z,{variant:"outlined",color:"primary",onClick:b,children:"Fechar"}),Z&&w&&1==w.papelID&&!d&&(0,o.jsx)(M.Z,{variant:"contained",color:"primary",onClick:()=>$(!0),disabled:!k,children:"Confirmar"})]})]}),(0,o.jsx)(L.Z,{openModal:A,handleClose:()=>$(!1),title:"Confirmar Altera\xe7\xe3o",text:'Deseja realmente alterar o status do formul\xe1rio para "'.concat(null===(a=y.WR[k])||void 0===a?void 0:a.title,'" ? O mesmo ficar\xe1 dispon\xedvel para a edi\xe7\xe3o do Fornecedor novamente.'),btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",handleSubmit(){j(k),$(!1),E(null)}})]})},ea=()=>{var e,a,t;let{user:Z,loggedUnity:R}=(0,n.useContext)(P.V),{setTitle:M}=(0,n.useContext)(S.f),[T,N]=(0,n.useState)(!1),[_,Q]=(0,n.useState)(!1),[U,Y]=(0,n.useState)([]),[B,q]=(0,n.useState)(null),[G,H]=(0,n.useState)([]),[K,J]=(0,n.useState)([]),[X,ea]=(0,n.useState)([]),[et,eo]=(0,n.useState)([]),[en,es]=(0,n.useState)([]),[er,el]=(0,n.useState)(""),[ei,ed]=(0,n.useState)(!1),[ec,eu]=(0,n.useState)(null),[em,ex]=(0,n.useState)(null),[ep,eh]=(0,n.useState)(!1),[ef,eb]=(0,n.useState)(!1),[eg,ej]=(0,n.useState)(!0),[ev,eZ]=(0,n.useState)(null),[eD,ey]=(0,n.useState)(0),[eI,eC]=(0,n.useState)({status:!1,message:"Voce nao tem permissoes mais garoto...",messageType:"info"}),eS=D(),{id:eP}=eS.query,ew=(0,y.g_)(eS.pathname),eF=(0,y.Lo)(eS.pathname),{settings:ek}=(0,n.useContext)(E.J6);ek.mode;let eE=B&&U.reduce((e,a)=>{if(a.tabela){var t,o;e[a.tabela]={id:null===(t=B[a.tabela])||void 0===t?void 0:t.id,nome:null===(o=B[a.tabela])||void 0===o?void 0:o.nome}}else e[a.nomeColuna]=B[a.nomeColuna];return e},{}),{watch:eA,register:ez,control:e$,setValue:eW,handleSubmit:eO,formState:{errors:eR}}=(0,s.cI)();U.map((e,a)=>{eW("header.".concat(e.tabela),null==eE?void 0:eE[e.tabela])}),console.log("errors: ",eR),console.log("controlRegistroEstabelecimento > watchRegistroEstabelecimento > ",ev);let eV=async()=>{try{await I.h.post("/formularios/fornecedor/verifyFormPending/".concat(eP),{parFormularioID:1}).then(e=>{ej(e.data) //! true/false
})}catch(e){console.log(e)}},eL=async e=>{console.log("reOpenFormStatus: ",e);let a={status:e,auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:R.unidadeID}};try{Q(!0),await I.h.post("".concat(ew,"/reOpenFormStatus/").concat(eP),a).then(e=>{F.ZP.success(y.OD.successUpdate),Q(!1)})}catch(t){console.log(t)}},eM=async()=>{let e={status:{edit:ep,status:er.status},auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:R.unidadeID}};if(ep){console.log("updateFormStatus: ",e);try{Q(!0),await I.h.post("".concat(ew,"/updateFormStatus/").concat(eP),e).then(e=>{F.ZP.success(y.OD.successUpdate),Q(!1)})}catch(a){console.log(a)}}else F.ZP.error("N\xe3o h\xe1 dados a serem atualizados!")},eT=e=>{let a=e.target.value,t={...er,status:a};el(t)},eN=async()=>{let e={usuarioID:Z.usuarioID,unidadeID:R.unidadeID,papelID:Z.papelID};try{Q(!0),await I.h.post("".concat(ew,"/conclusionAndSendForm/").concat(eP),e).then(e=>{201===e.status?F.ZP.error("Erro ao concluir o formul\xe1rio!"):202===e.status?(F.ZP.error("Erro ao realizar o envio de email para ".concat(Z.email)),F.ZP.success("Formul\xe1rio conclu\xeddo com sucesso!"),eq()):F.ZP.success("Formul\xe1rio conclu\xeddo com sucesso!"),ed(!1),Q(!1)})}catch(a){console.log(a)}},e_=e=>{if(9==e.length){let a=e.replace(/[^0-9]/g,"");I.h.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(e=>{e.data.localidade?(eW("header.logradouro",e.data.logradouro),eW("header.bairro",e.data.bairro),eW("header.cidade",e.data.localidade),eW("header.estado",e.data.uf),F.ZP.success("Endere\xe7o encontrado!")):F.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},eQ=[{id:1,name:"Fornecedor",identification:"01",route:"relatorio/fornecedor",params:{fornecedorID:eP,unidadeID:R.unidadeID}},{id:2,name:"Recep\xe7\xe3o",identification:"02",route:"relatorio/recepcao"},{id:3,name:"Ficha de Matr\xedcula",identification:"03",route:"/"},{id:4,name:"Ficha de Nacionalidade",identification:"04",route:"/"}],eU=(e,a)=>{let t=[];e.map((e,o)=>{eB(e.categorias,a)&&t.push(e)}),es(t)},eY=(e,a)=>{let t=G.map(t=>t.categoriaID===e?{...t,checked:a}:t);H(t),eU(et,t)},eB=(e,a)=>{let t=e.map(e=>e.categoriaID),o=a.filter(e=>e.checked).map(e=>e.categoriaID);if(t.length!==o.length)return!1;let n=[...t].sort(),s=[...o].sort();for(let r=0;r<n.length;r++)if(n[r]!==s[r])return!1;return!0},eq=()=>{try{N(!0),I.h.get("".concat(ew,"/").concat(eP)).then(e=>{var a;console.log("getData: ",e.data),Y(e.data.fields),H(e.data.categorias),J(e.data.atividades),ea(e.data.sistemasQualidade),eo(e.data.blocos),eU(e.data.blocos,e.data.categorias),q(e.data.data),el(e.data.info),eu(e.data.unidade);let t=y.WR[e.data.info.status];ex(t),eC({status:2==Z.papelID&&e.data.info.status<40,message:2==Z.papelID?"Esse formul\xe1rio j\xe1 foi conclu\xeddo e enviado pra f\xe1brica, n\xe3o \xe9 mais poss\xedvel alterar as informa\xe7\xf5es!":"Somente o fornecedor pode alterar as informa\xe7\xf5es deste formul\xe1rio!",messageType:2==Z.papelID?"warning":"info"}),eZ(null===(a=e.data.data)||void 0===a?void 0:a.registroestabelecimento),N(!1)})}catch(e){console.log(e)}},eG=()=>{eS.push("/formularios/fornecedor/"),F.ZP.error("Voc\xea n\xe3o tem permiss\xf5es para acessar esta p\xe1gina!")},eH=async()=>{console.log("handleSendForm....."),eO(eK)(!0)},eK=async(e,a)=>{a?(eJ(e),ed(!0)):(eJ(e),ed(!1))},eJ=async e=>{console.log("submitData");let a={forms:e,auth:{usuarioID:Z.usuarioID,papelID:Z.papelID,unidadeID:R.unidadeID}};console.log("submit data: ",a);try{Q(!0),await I.h.put("".concat(ew,"/").concat(eP),a).then(e=>{F.ZP.success(y.OD.successUpdate),Q(!1)})}catch(t){console.log(t)}};return(0,n.useEffect)(()=>{M("Formul\xe1rio do Fornecedor"),"edit"==eF?eq():eG(),eV()},[_]),(0,o.jsxs)(o.Fragment,{children:[T&&(0,o.jsx)(w.Z,{}),B&&(0,o.jsxs)("form",{onSubmit:eO(e=>{eI.status?eK(e,!1):eM()}),children:[en&&0===en.length&&(0,o.jsx)(l.Z,{severity:"warning",sx:{mb:4},children:"N\xe3o h\xe1 nenhum bloco dispon\xedvel para as categorias selecionadas!"}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(C.Z,{btnCancel:!0,btnChangeStatus:!0,btnSave:eI.status||1==Z.papelID&&er.status>=40,btnSend:2==Z.papelID&&er.status<40,btnPrint:!0,generateReport:y.OE,dataReports:eQ,handleSubmit:e=>eO(eK),disabledSubmit:0===en.length,disabledSend:0===en.length,handleSend:eH,handleChangeStatus:()=>eb(!0),title:"Fornecedor"}),(0,o.jsxs)(d.Z,{children:[!eI.status&&(0,o.jsx)(l.Z,{severity:eI.messageType,sx:{mb:4},children:eI.message}),ec&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",value:ec.unidadeID,name:"unidadeID",...ez("unidadeID")}),(0,o.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:6,children:[(0,o.jsx)(u.Z,{variant:"caption",children:"F\xe1brica:"}),(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:ec.nomeFantasia})]}),(0,o.jsx)(c.ZP,{item:!0,xs:12,md:6,children:em&&(0,o.jsx)(m.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,o.jsx)(z.Z,{size:"small",skin:"light",color:em.color,label:em.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})]}),(0,o.jsx)(c.ZP,{container:!0,spacing:4,sx:{mt:4},children:U&&U.map((e,a)=>{var t,n;return(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsxs)(x.Z,{fullWidth:!0,children:[e&&"int"===e.tipo&&e.tabela&&(0,o.jsx)(p.Z,{disabled:!eI.status,options:e.options,getOptionSelected:(e,a)=>e.id===a.id,defaultValue:(null==eE?void 0:null===(t=eE[e.tabela])||void 0===t?void 0:t.id)?eE[e.tabela]:null,getOptionLabel:e=>e.nome,name:"header.".concat(e.tabela),...ez("header.".concat(e.tabela),{required:!!e.obrigatorio}),onChange(a,t){eW("header.".concat(e.tabela),t||""),"registroestabelecimento"==e.tabela&&eZ(eA("header.registroestabelecimento"))},renderInput(a){var t;return(0,o.jsx)(h.Z,{...a,label:e.nomeCampo,placeholder:e.nomeCampo,error:null!=eR&&null!==(t=eR.header)&&void 0!==t&&!!t[e.tabela]})}}),e&&"date"==e.tipo&&(0,o.jsx)(W._,{dateAdapter:$.y,children:(0,o.jsx)(O.M,{label:"Selecione uma data",disabled:!eI.status,locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:V()(new Date),renderInput:a=>(0,o.jsx)(h.Z,{...a,variant:"outlined",name:"header.".concat(e.nomeColuna),...ez("header.".concat(e.nomeColuna),{required:!!e.obrigatorio&&eI.status})})})}),e&&"string"==e.tipo&&("numeroRegistro"!=e.nomeColuna||(null==ev?void 0:ev.id)>1)&&(0,o.jsx)(h.Z,{defaultValue:eE?eE[e.nomeColuna]:"",label:e.nomeCampo,disabled:!eI.status,placeholder:e.nomeCampo,name:"header.".concat(e.nomeColuna),"aria-describedby":"validation-schema-nome",error:null!=eR&&null!==(n=eR.header)&&void 0!==n&&!!n[e.nomeColuna],...ez("header.".concat(e.nomeColuna),{required:!!e.obrigatorio&&eI.status}),onChange(a){"cnpj"==e.nomeColuna?a.target.value=(0,A.PK)(a.target.value):"cep"==e.nomeColuna?(a.target.value=(0,A.Tc)(a.target.value),e_(a.target.value)):"telefone"==e.nomeColuna?a.target.value=(0,A.Bk)(a.target.value):"estado"==e.nomeColuna?a.target.value=(0,A.CL)(a.target.value):a.target.value=a.target.value},inputProps:"cnpj"==e.nomeColuna?{maxLength:18}:"cep"==e.nomeColuna?{maxLength:9}:"telefone"==e.nomeColuna?{maxLength:15}:"estado"==e.nomeColuna?{maxLength:2}:{}})]})},a)})}),(0,o.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsx)(b.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Categorias"})})}),G&&G.map((e,a)=>(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"categorias.[".concat(a,"].categoriaID"),defaultValue:e.categoriaID,...ez("categorias.[".concat(a,"].categoriaID"))}),(0,o.jsx)(g.Z,{control:(0,o.jsx)(k.Z,{name:"categorias[".concat(a,"].checked"),disabled:!eI.status,...ez("categorias[".concat(a,"].checked")),defaultChecked:1==e.checked,onClick:a=>eY(e.categoriaID,a.target.checked)}),label:e.nome})]})},a))]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsx)(b.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Atividades"})})}),K&&K.map((e,a)=>(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"atividades.[".concat(a,"].atividadeID"),defaultValue:e.atividadeID,...ez("atividades.[".concat(a,"].atividadeID"))}),(0,o.jsx)(g.Z,{control:(0,o.jsx)(k.Z,{name:"atividades[".concat(a,"].checked"),disabled:!eI.status,...ez("atividades[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsx)(b.Z,{children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Sistemas de Qualidade"})})}),X&&X.map((e,a)=>(0,o.jsx)(f.ZP,{disablePadding:!0,children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"sistemasQualidade.[".concat(a,"].sistemaQualidadeID"),defaultValue:e.sistemaQualidadeID,...ez("sistemasQualidade.[".concat(a,"].sistemaQualidadeID"))}),(0,o.jsx)(g.Z,{control:(0,o.jsx)(k.Z,{name:"sistemasQualidade[".concat(a,"].checked"),disabled:!eI.status,...ez("sistemasQualidade[".concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]})]})]})]}),en&&en.map((t,n)=>(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsx)(d.Z,{children:(0,o.jsxs)(c.ZP,{container:!0,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].parFornecedorBlocoID"),defaultValue:t.parFornecedorBlocoID,...ez("blocos[".concat(n,"].parFornecedorBlocoID"))}),(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:t.nome})}),t.itens&&t.itens.map((t,s)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.ZP,{container:!0,spacing:4,sx:{mb:4},children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(s,"].itemID"),defaultValue:t.itemID,...ez("blocos[".concat(n,"].itens[").concat(s,"].itemID"))}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,o.jsx)(r.Z,{icon:"line-md:circle-to-confirm-circle-transition",style:{color:t.resposta?"green":"gray",fontSize:"20px"}}),t.ordem+" - "+t.nome]}),(0,o.jsxs)(c.ZP,{item:!0,xs:12,md:3,children:[(0,o.jsx)("input",{type:"hidden",name:"blocos[".concat(n,"].itens[").concat(s,"].tipoAlternativa"),defaultValue:t.alternativa,...ez("blocos[".concat(n,"].itens[").concat(s,"].tipoAlternativa"))}),(0,o.jsxs)(x.Z,{fullWidth:!0,children:[t.alternativas&&t.alternativas.length>1&&(0,o.jsx)(p.Z,{options:t.alternativas,defaultValue:t.resposta?{nome:null==t?void 0:t.resposta}:{nome:""},id:"autocomplete-outlined",getOptionLabel:e=>e.nome,disabled:!eI.status,onChange(e,a){eW("blocos[".concat(n,"].itens[").concat(s,"].respostaID"),null==a?void 0:a.alternativaID)},renderInput:e=>(0,o.jsx)(h.Z,{...e,name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),label:"Selecione uma resposta",placeholder:"Selecione uma resposta",...ez("blocos[".concat(n,"].itens[").concat(s,"].resposta"))})}),0==t.alternativas.length&&"Data"==t.alternativa&&(0,o.jsx)(W._,{dateAdapter:$.y,children:(0,o.jsx)(O.M,{label:"Selecione uma data",locale:V().locale("pt-br"),format:"DD/MM/YYYY",disabled:!eI.status,defaultValue:t.resposta?V()(new Date(t.resposta)):"",onChange(e){eW("blocos[".concat(n,"].itens[").concat(s,"].resposta"),e)},renderInput:e=>(0,o.jsx)(h.Z,{...e,variant:"outlined",name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),...ez("blocos[".concat(n,"].itens[").concat(s,"].resposta"))})})}),0==t.alternativas.length&&"Dissertativa"==t.alternativa&&(0,o.jsx)(h.Z,{multiline:!0,label:"Descreva a resposta",disabled:!eI.status,placeholder:"Descreva a resposta",name:"blocos[".concat(n,"].itens[").concat(s,"].resposta"),defaultValue:null!==(e=t.resposta)&&void 0!==e?e:"",...ez("blocos[".concat(n,"].itens[").concat(s,"].resposta"))})]})]}),t&&1==t.obs&&(0,o.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(h.Z,{label:"Observa\xe7\xe3o",placeholder:"Observa\xe7\xe3o",disabled:!eI.status,name:"blocos[".concat(n,"].itens[").concat(s,"].observacao"),defaultValue:null!==(a=t.observacao)&&void 0!==a?a:"",...ez("blocos[".concat(n,"].itens[").concat(s,"].observacao"))})})})]},s)}))]})})},n)),(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsx)(d.Z,{children:(0,o.jsx)(c.ZP,{container:!0,spacing:4,children:(0,o.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(x.Z,{fullWidth:!0,children:[(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(h.Z,{multiline:!0,rows:4,label:"Observa\xe7\xe3o (opcional)",disabled:!eI.status,placeholder:"Observa\xe7\xe3o (opcional)",name:"obs",defaultValue:null!==(t=er.obs)&&void 0!==t?t:"",...ez("obs")})]})})})})}),Z&&1==Z.papelID&&er.status>=40&&(0,o.jsx)(i.Z,{sx:{mt:4},children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Status do Formul\xe1rio"}),eg&&(0,o.jsx)(l.Z,{severity:"warning",sx:{mb:4},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"}),(0,o.jsx)(m.Z,{display:"flex",gap:8,children:(0,o.jsxs)(j.Z,{row:!0,"aria-label":"colored",name:"colored",value:er.status,onChange:eT,children:[(0,o.jsx)(g.Z,{value:70,disabled:eg,name:"status",...ez("status"),onChange:()=>eh(!0),control:(0,o.jsx)(v.Z,{color:"success"}),label:"Aprovado"}),(0,o.jsx)(g.Z,{value:60,disabled:eg,name:"status",...ez("status"),onChange:()=>eh(!0),label:"Aprovado parcial",control:(0,o.jsx)(v.Z,{color:"warning"})}),(0,o.jsx)(g.Z,{value:50,disabled:eg,name:"status",...ez("status"),onChange:()=>eh(!0),label:"Reprovado",control:(0,o.jsx)(v.Z,{color:"error"})})]})})]})})]}),(0,o.jsx)(L.Z,{openModal:ei,handleClose:()=>ed(!1),title:"Concluir e Enviar Formul\xe1rio",text:"Deseja realmente concluir e enviar? Ap\xf3s a conclus\xe3o, voc\xea n\xe3o poder\xe1 mais alterar esse formul\xe1rio. Um e-mail ser\xe1 enviado e agora basta aguardar a an\xe1lise do ".concat(null==ec?void 0:ec.nomeFantasia,". Ap\xf3s a conclus\xe3o voc\xea ser\xe1 alertado no email ").concat(Z.email),btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",handleSubmit:eN}),ef&&(0,o.jsx)(ee,{id:eP,parFormularioID:1,formStatus:er.status,hasFormPending:eg,openModal:ef,handleClose:()=>eb(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(eP," do Fornecedor."),btnCancel:!0,btnConfirm:!0,handleSubmit:eL})]})};var et=ea},47842:function(e,a,t){var o=t(85893),n=t(70754),s=t(61953);let r=()=>(0,o.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});a.Z=r},46749:function(e,a,t){t.d(a,{Lo:function(){return m},OD:function(){return u},OE:function(){return p},OL:function(){return c},WR:function(){return d},g_:function(){return x}});var o=t(85893),n=t(29630),s=t(41664),r=t.n(s),l=t(7071);t(67294),t(40039);var i=t(60664);t(50196);let d={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},c=(e,a)=>a.map((t,s)=>{let i=a[s].field;return{...t,flex:t.size,renderCell:t=>(0,o.jsx)(r(),{href:"".concat(e,"/").concat(t.row.id),children:(0,o.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:a&&a.map((e,a)=>{if(e.field===i){if("status"!=e.field)return t.row[e.field];{let n=d[t.row.status];return(0,o.jsx)(l.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},a)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let a=e.split("/"),t=a[a.length-1];return"novo"==t?"new":"edit"},x=e=>{let a=e.split("/");return a.pop(),a.join("/")},p=e=>{let a=e.route;i.h.get(a,e.params,{responseType:"arraybuffer"}).then(e=>{let a=new Blob([e.data],{type:"application/pdf"}),t=URL.createObjectURL(a);window.open(t,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,a,t){function o(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function n(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function s(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function r(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function l(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}t.d(a,{Bk:function(){return s},CL:function(){return l},PK:function(){return o},Tc:function(){return r},VL:function(){return n}})},82747:function(e,a,t){function o(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let a=e.length-2,t=e.substring(0,a),o=e.substring(a),n=0,s=a-7;for(let r=a;r>=1;r--)n+=t.charAt(a-r)*s--,s<2&&(s=9);let l=n%11<2?0:11-n%11;if(l!=o.charAt(0))return!1;a+=1,t=e.substring(0,a),n=0,s=a-7;for(let i=a;i>=1;i--)n+=t.charAt(a-i)*s--,s<2&&(s=9);return(l=n%11<2?0:11-n%11)==o.charAt(1)}function n(e){let a;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let o=1;o<=9;o++)t+=parseInt(e.substring(o-1,o))*(11-o);if((10==(a=10*t%11)||11===a)&&(a=0),a!==parseInt(e.substring(9,10)))return!1;t=0;for(let n=1;n<=10;n++)t+=parseInt(e.substring(n-1,n))*(12-n);return(10==(a=10*t%11)||11===a)&&(a=0),a===parseInt(e.substring(10,11))}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(a,{dI:function(){return s},sw:function(){return n},zk:function(){return o}})}}]);