(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8207],{64876:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/[id]",function(){return o(98480)}])},89191:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var n=o(85893),a=o(11163),i=o.n(a),s=o(67294),c=o(91359),r=o(61953),l=o(75084),d=o(41664),m=o.n(d),u=o(21609),x=o(46749),h=o(73812),p=o(86378),b=o(9942);function j(e){let{disabled:t,generateReport:o,dataReports:a,open:i,anchorEl:s,handleClick:c,handleClose:r}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(h.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:s,open:i,onClose:r,TransitionComponent:b.Z,children:a.map(e=>(0,n.jsxs)(p.Z,{onClick(){r(),o(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}var Z=o(40039),f=o(10160);let g=e=>{let{btnCancel:t,btnSave:o,btnSend:a,btnChangeStatus:d,handleSubmit:h,disabledSubmit:p,handleSend:b,disabledSend:g,handleChangeStatus:v,btnDelete:k,onclickDelete:I,btnPrint:P,disabled:y,generateReport:D,dataReports:C}=e,S=i(),{user:F,routes:w}=(0,s.useContext)(Z.V),[B,O]=(0,s.useState)(!1),[E,V]=(0,s.useState)(null),q=Boolean(E),W=e=>{V(e.currentTarget)},R=()=>{V(null)},M=(()=>{let e=S.pathname.split("/").slice(0,-1).join("/");return e||S.pathname})();return(0,s.useEffect)(()=>{let e=()=>{window.scrollY>0?O(!0):O(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,n.jsx)(m(),{href:(0,x.g_)(S.pathname),children:(0,n.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"})})}),k&&w.find(e=>e.rota===M&&e.excluir)&&(0,n.jsx)(l.Z,{type:"button",onClick:I,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(u.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),d&&(0,n.jsx)(l.Z,{type:"button",onClick:v,variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(u.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,n.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[P&&1===C.length&&(0,n.jsx)(l.Z,{id:"fade-button","aria-controls":q?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":q?"true":void 0,onClick:()=>D(C[0]),color:"primary",disabled:y,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),P&&C.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{id:"fade-button","aria-controls":q?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":q?"true":void 0,onClick:W,color:"primary",disabled:y,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(j,{generateReport:D,dataReports:C,handleClick:W,handleClose:R,open:q,anchorEl:E})]}),o&&w.find(e=>e.rota===M&&e.editar)&&(0,n.jsx)(l.Z,{onClick:h,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:y||p,startIcon:(0,n.jsx)(u.Z,{icon:"material-symbols:save"}),children:"Salvar"}),a&&2==F.papelID&&(0,n.jsx)(l.Z,{onClick:b,type:"button",variant:"contained",size:"medium",color:"primary",disabled:y||g,sx:{ml:2},startIcon:(0,n.jsx)(u.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),B&&o&&w.find(e=>e.rota===M&&e.editar)&&(0,n.jsx)("div",{className:"\n                                ".concat(B?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,n.jsx)(f.Z,{color:"primary",size:"large",onClick:h,type:"submit",variant:"contained",disabled:y||p,children:(0,n.jsx)(u.Z,{icon:"material-symbols:save"})})})]})]})})};var v=g},47842:function(e,t,o){"use strict";var n=o(85893),a=o(70754),i=o(61953);let s=()=>(0,n.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(a.Z,{})});t.Z=s},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return u},OD:function(){return m},OE:function(){return h},OL:function(){return d},WR:function(){return l},g_:function(){return x}});var n=o(85893),a=o(29630),i=o(41664),s=o.n(i),c=o(7071);o(67294),o(40039);var r=o(60664);o(50196);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((o,i)=>{let r=t[i].field;return{...o,flex:o.size,renderCell:o=>(0,n.jsx)(s(),{href:"".concat(e,"/").concat(o.row.id),children:(0,n.jsx)(a.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===r){if("status"!=e.field)return o.row[e.field];{let a=l[o.row.status];return(0,n.jsx)(c.Z,{size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),m={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},u=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},h=e=>{let t=e.route;r.h.get(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(t);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},98480:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return H}});var n=o(85893),a=o(11163),i=o.n(a),s=o(67294),c=o(87536),r=o(49837),l=o(91359),d=o(85214),m=o(79072),u=o(81284),x=o(95309),h=o(29630),p=o(75158),b=o(67836),j=o(55343),Z=o(19604),f=o(22841),g=o(35966),v=o(75084),k=o(72389),I=o(80562),P=o(46749),y=o(60664),D=o(89191),C=o(60565),S=o(40039),F=o(86501),w=o(47842),B=o(21609),O=o(29620),E=o(77745),V=o(95398),q=o(76779),W=o(44642),R=o(61953),M=o(22416),z=o(16056);let _=e=>{let{openModal:t,setOpenModalConfirmScore:o,itemScore:a,setItemScore:i,getBlocks:s}=e,r=()=>{o(!1)},{handleSubmit:l,register:d}=(0,c.cI)({}),u=e=>{let t={alternativaID:null==a?void 0:a.alternativaID,pontuacao:(null==e?void 0:e.pontuacao)?1:0,parFornecedorBlocoItemID:null==a?void 0:a.parFornecedorBlocoItemID,alternatives:null==a?void 0:a.alternatives.map((t,o)=>({alternativaItemID:null==t?void 0:t.alternativaItemID,score:e[null==t?void 0:t.nome]}))};y.h.post("/formularios/fornecedor/saveItemScore",{data:t}).then(e=>{o(!1),s(),F.Am.success("Pontua\xe7\xe3o salva com sucesso!")})};return(0,n.jsx)(n.Fragment,{children:(null==a?void 0:a.alternatives)&&(0,n.jsx)(O.Z,{open:t,onClose:r,"aria-labelledby":"form-dialog-title",children:(0,n.jsxs)("form",{onSubmit:l(u),children:[(0,n.jsx)(E.Z,{id:"form-dialog-title",children:"Pontua\xe7\xe3o das respostas"}),(0,n.jsxs)(V.Z,{children:[(0,n.jsx)(W.Z,{sx:{mb:3},children:"Defina a pontua\xe7\xe3o para cada alternativa"}),(0,n.jsx)(R.Z,{sx:{mb:4},children:(0,n.jsx)(M.Z,{row:!0,children:(0,n.jsx)(f.Z,{label:"Habilitar pontua\xe7\xe3o",control:(0,n.jsx)(z.Z,{name:"pontuacao",...d("pontuacao"),checked:(null==a?void 0:a.pontuacao)==1,onChange(e){i({...a,pontuacao:e.target.checked?1:0})}})})})}),a&&(null==a?void 0:a.alternatives.map((e,t)=>(0,n.jsx)(m.ZP,{md:12,sx:{mb:4},children:(0,n.jsx)("grid",{item:!0,md:12,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{disabled:1!=a.pontuacao,id:"outlined-basic",label:null==e?void 0:e.nome,...d("".concat(null==e?void 0:e.nome)),name:"".concat(null==e?void 0:e.nome),defaultValue:null==e?void 0:e.score,variant:"outlined",size:"small",type:"number",title:0!=a.pontuacao||"Habilite a pontua\xe7\xe3o para preencher"})})})},t)))]}),(0,n.jsxs)(q.Z,{className:"dialog-actions-dense",children:[(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",onClick:r,children:"Cancelar"}),(0,n.jsx)(v.Z,{variant:"contained",color:"primary",onClick:l(u),children:"Confirmar"})]})]})})})},N=()=>{var e;let{user:t,loggedUnity:o}=(0,s.useContext)(S.V),[a,O]=(0,s.useState)(),[E,V]=(0,s.useState)([]),[q,W]=(0,s.useState)(),[R,M]=(0,s.useState)(),[z,N]=(0,s.useState)(!1),[A,L]=(0,s.useState)(),H=i(),T=(0,P.g_)(H.pathname),{setTitle:U}=(0,s.useContext)(C.f),{setValue:G,register:X,handleSubmit:Y,formState:{errors:J}}=(0,c.cI)(),K=async e=>{let t={header:e.headers,blocks:e.blocks,orientacoes:e.orientacoes};try{console.log("onSubmit: ",t),await y.h.put("".concat(T,"/fornecedor/").concat(o.unidadeID),t).then(e=>{F.ZP.success(P.OD.successUpdate)})}catch(n){console.log(n)}},Q=e=>{let t=[...q];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),W(t)},$=(e,t,o)=>{e.removed=!0,G("blocks.[".concat(t,"].itens.[").concat(o,"].removed"),!0),document.getElementById("item-".concat(t,"-").concat(o)).style.display="none",F.ZP.success("Item pr\xe9 removido, salve para concluir!"),console.log("\uD83D\uDE80 item:",e)},ee=e=>{L(null),y.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{L(e.data)}),L&&N(!0)},et=()=>{let e=[...q];e.push({dados:{ordem:e.length+1,nome:"",status:1},atividades:[...q[0].atividades.map(e=>({...e,checked:0}))],categorias:[...q[0].categorias.map(e=>({...e,checked:0}))],itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),W(e)},eo=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),W(e.data)})},en=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),O(e.data)})},ea=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),V(e.data)})};return(0,s.useEffect)(()=>{U("Formul\xe1rio do Fornecedor"),en(),ea(),eo()},[]),console.log("blocks: ",q),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:Y(K),children:[a&&(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(D.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>Y(K)}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),a.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...X("headers.[".concat(t,"].parFornecedorID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...X("headers.[".concat(t,"].mostra")),defaultChecked:1==a[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...X("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==a[t].obrigatorio})})]})},t)}))]})})})]}),!q&&(0,n.jsx)(w.Z,{}),q&&q.map((e,t)=>(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parFornecedorBlocoID"),defaultValue:e.dados.parFornecedorBlocoID,...X("blocks.[".concat(t,"].parFornecedorBlocoID"))}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...X("blocks.[".concat(t,"].sequencia"))})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...X("blocks.[".concat(t,"].nome"))})})}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...X("blocks.[".concat(t,"].status")),defaultChecked:1==q[t].dados.status})]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...X("blocks.[".concat(t,"].obs")),defaultChecked:1==q[t].dados.obs})]})]}),(0,n.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:2},children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(Z.Z,{severity:"info",children:"Esse bloco ser\xe1 habilitado para o Fornecedor se satisfazer as condi\xe7\xf5es abaixo:"})})}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:3,children:[(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco quando \xe9:"})})}),e.categorias&&e.categorias.map((e,o)=>(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].categorias[").concat(o,"].categoriaID"),defaultValue:e.categoriaID,...X("blocks.[".concat(t,"].categorias[").concat(o,"].categoriaID"))}),(0,n.jsx)(f.Z,{control:(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].categorias[").concat(o,"].checked"),...X("blocks.[".concat(t,"].categorias[").concat(o,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},o))]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:4,children:[(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco se atividade for:"})})}),e.atividades&&e.atividades.map((e,o)=>(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].atividades[").concat(o,"].atividadeID"),defaultValue:e.atividadeID,...X("blocks.[".concat(t,"].atividades[").concat(o,"].atividadeID"))}),(0,n.jsx)(f.Z,{control:(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].atividades[").concat(o,"].checked"),...X("blocks.[".concat(t,"].atividades[").concat(o,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},o))]})]}),e.itens&&e.itens.map((e,o)=>(0,n.jsxs)(m.ZP,{id:"item-".concat(t,"-").concat(o),container:!0,spacing:4,sx:{mt:4},children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(o,"].parFornecedorBlocoItemID"),defaultValue:e.parFornecedorBlocoItemID,...X("blocks.[".concat(t,"].itens.[").concat(o,"].parFornecedorBlocoItemID"))}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"right"},children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),defaultValue:e.ordem,...X("blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"))})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:""!==q[t].itens[o].nome&&(0,n.jsx)(g.Z,{options:E.itens,defaultValue:q[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.nome||"",disabled:1==e.hasPending,onChange(e,n){G("blocks.[".concat(t,"].itens.[").concat(o,"].itemID"),null==n?void 0:n.itemID)},renderInput:a=>(0,n.jsx)(b.Z,{...a,name:"blocks.[".concat(t,"].itens.[").concat(o,"].nome"),label:e.itemID?"Item [".concat(e.itemID,"]"):"Item",placeholder:e.itemID?"Item [".concat(e.itemID,"]"):"Item",...X("blocks.[".concat(t,"].itens.[").concat(o,"].nome"))})})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(g.Z,{options:E.alternativas,defaultValue:q[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",disabled:1==e.hasPending,onChange(e,n){G("blocks.[".concat(t,"].itens.[").concat(o,"].alternativaID"),null==n?void 0:n.alternativaID)},renderInput:e=>(0,n.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...X("blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"))})})})}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Ativo":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].status"),...X("blocks.[".concat(t,"].itens.[").concat(o,"].status")),defaultChecked:1==e.status})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obs":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obs"),disabled:0==e.status,...X("blocks.[".concat(t,"].itens.[").concat(o,"].obs")),defaultChecked:1==e.obs})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obrigat\xf3rio":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obrigatorio"),...X("blocks.[".concat(t,"].itens.[").concat(o,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Pontua\xe7\xe3o":""}),(0,n.jsx)(v.Z,{style:0===e.pontuacao?{opacity:.3}:{},title:e.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!e.parFornecedorBlocoID,onClick:()=>ee(e),children:(0,n.jsx)(B.Z,{icon:"ic:baseline-assessment"})})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Remover":""}),(0,n.jsx)(k.Z,{title:1==e.hasPending?"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio":"Remover este item",children:(0,n.jsx)(I.Z,{color:"error",onClick(){1==e.hasPending||$(e,t,o)},sx:{opacity:1==e.hasPending?.5:1,cursor:1==e.hasPending?"default":"pointer"},children:(0,n.jsx)(B.Z,{icon:"tabler:trash-filled"})})})]})]},o)),z&&A&&(0,n.jsx)(_,{openModal:z,setOpenModalConfirmScore:N,itemScore:A,setItemScore:L,getBlocks:eo}),(0,n.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(B.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){Q(t)},children:"Inserir Item"})})})]})},t)),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(B.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){et()},children:"Inserir Bloco"})}),(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(m.ZP,{container:!0,spacing:4,children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!==(e=null==R?void 0:R.obs)&&void 0!==e?e:"",...X("orientacoes")})})})})})]})})},A=()=>{let{user:e,loggedUnity:t}=(0,s.useContext)(S.V),[o,a]=(0,s.useState)(),[Z,f]=(0,s.useState)(),[k,I]=(0,s.useState)([]),[w,O]=(0,s.useState)(),[E,V]=(0,s.useState)(),q=i(),W=(0,P.g_)(q.pathname),{setTitle:R}=(0,s.useContext)(C.f),{setValue:M,register:z,handleSubmit:_,formState:{errors:N}}=(0,c.cI)(),A=async e=>{let o={header:e.headers,products:e.products,blocks:e.blocks};console.log("onSubmit: ",o);try{await y.h.put("".concat(W,"/recebimentoMp/").concat(t.unidadeID),o).then(e=>{F.ZP.success(P.OD.successUpdate)})}catch(n){console.log(n)}},L=e=>{let t=[...w];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),O(t)},H=()=>{let e=[...w];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),O(e)};return(0,s.useEffect)(()=>{R("Formul\xe1rio do Recebimento de MP"),console.log("=> ",W),y.h.get("".concat(W,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),a(e.data)}),y.h.get("".concat(W,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getProducts"}}).then(e=>{console.log("getProducts: ",e.data),f(e.data)}),y.h.get("".concat(W,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),O(e.data)}),y.h.get("".concat(W,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),I(e.data)})},[]),console.log("errors: ",N),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:_(A),children:[o&&(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(D.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>_(A)}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),o.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,...z("headers.[".concat(t,"].parRecebimentompID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...z("headers.[".concat(t,"].mostra")),defaultChecked:1==o[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...z("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==o[t].obrigatorio})})]})},t)}))]})})})]}),Z&&(0,n.jsx)(r.Z,{sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),Z.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentoMpProdutoID,...z("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"products.[".concat(t,"].mostra"),...z("products.[".concat(t,"].mostra")),defaultChecked:1==Z[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"products.[".concat(t,"].obrigatorio"),...z("products.[".concat(t,"].obrigatorio")),defaultChecked:1==Z[t].obrigatorio})})]})},t)}))]})})})}),w&&w.map((e,t)=>{var o,a,i,s;return(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(t+1)}),(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parRecebimentompBlocoID"),defaultValue:e.dados.parRecebimentompBlocoID,...z("blocks.[".concat(t,"].parRecebimentompBlocoID"))}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...z("blocks.[".concat(t,"].sequencia"),{required:!0}),error:null!=N&&null!==(o=N.blocks)&&void 0!==o&&null!==(a=o[t])&&void 0!==a&&!!a.sequencia})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...z("blocks.[".concat(t,"].nome"),{required:!0}),error:null!=N&&null!==(i=N.blocks)&&void 0!==i&&null!==(s=i[t])&&void 0!==s&&!!s.nome})})}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...z("blocks.[".concat(t,"].status")),defaultChecked:1==w[t].dados.status})]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...z("blocks.[".concat(t,"].obs")),defaultChecked:1==w[t].dados.obs})]})]}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,o)=>{var a,i,s,c;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(o,"].parRecebimentompBlocoItemID"),defaultValue:e.parRecebimentompBlocoItemID,...z("blocks.[".concat(t,"].itens.[").concat(o,"].parRecebimentompBlocoItemID"))}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),defaultValue:e.ordem,...z("blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),{required:!0}),error:null!=N&&null!==(a=N.blocks)&&void 0!==a&&null!==(i=a[t])&&void 0!==i&&null!==(s=i.itens)&&void 0!==s&&null!==(c=s[o])&&void 0!==c&&!!c.sequencia})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:""!==w[t].itens[o].nome&&(0,n.jsx)(g.Z,{options:k.itens,defaultValue:w[t].itens[o].item,getOptionLabel:e=>e.nome||"",name:"blocks.[".concat(t,"].itens.[").concat(o,"].item"),...z("blocks.[".concat(t,"].itens.[").concat(o,"].item")),onChange(e,n){console.log("===> ",n),M("blocks.[".concat(t,"].itens.[").concat(o,"].item"),n||"")},renderInput:e=>(0,n.jsx)(b.Z,{...e,label:"Item",placeholder:"Item"})})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(g.Z,{options:k.alternativas,defaultValue:w[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,n){M("blocks.[".concat(t,"].itens.[").concat(o,"].alternativaID"),null==n?void 0:n.alternativaID)},renderInput:e=>(0,n.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...z("blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"))})})})}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Ativo":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].status"),...z("blocks.[".concat(t,"].itens.[").concat(o,"].status")),defaultChecked:1==e.status})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obs":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obs"),disabled:0==e.status,...z("blocks.[".concat(t,"].itens.[").concat(o,"].obs")),defaultChecked:1==e.obs})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obrigat\xf3rio":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obrigatorio"),...z("blocks.[".concat(t,"].itens.[").concat(o,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]})]})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(B.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){L(t)},children:"Inserir Item"})})]})]})},t)}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(B.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){H()},children:"Inserir Bloco"})}),(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(m.ZP,{container:!0,spacing:4,children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=E?E:"",...z("orientacoes")})})})})})]})})},L=()=>{let e=i().query.id;return(0,n.jsxs)(n.Fragment,{children:[1==e&&(0,n.jsx)(N,{}),2==e&&(0,n.jsx)(A,{}),!e&&(0,n.jsx)("div",{children:"Formul\xe1rio n\xe3o encontrado"})]})};var H=L}},function(e){e.O(0,[7536,2064,9774,2888,179],function(){return e(e.s=64876)}),_N_E=e.O()}]);