(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8207],{64876:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/[id]",function(){return a(98480)}])},89191:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var o=a(85893),n=a(11163),s=a.n(n),i=a(67294),c=a(91359),r=a(61953),l=a(75084),d=a(41664),m=a.n(d),u=a(21609),x=a(46749),h=a(73812),p=a(86378),b=a(9942);function j(e){let{disabled:t,generateReport:a,dataReports:n,open:s,anchorEl:i,handleClick:c,handleClose:r}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(h.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:s,onClose:r,TransitionComponent:b.Z,children:n.map(e=>(0,o.jsxs)(p.Z,{onClick(){r(),a(e)},children:[(0,o.jsx)("span",{children:e.identification}),(0,o.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,o.jsx)("span",{children:e.name})]},e.id))})})}var Z=a(40039),f=a(10160);let g=e=>{let{btnCancel:t,btnSave:a,btnSend:n,btnChangeStatus:d,handleSubmit:h,handleSend:p,handleChangeStatus:b,btnDelete:g,onclickDelete:v,btnPrint:k,disabled:I,generateReport:P,dataReports:y}=e,D=s(),{user:C,routes:S}=(0,i.useContext)(Z.V),[O,F]=(0,i.useState)(!1),[B,w]=(0,i.useState)(null),V=Boolean(B),W=e=>{w(e.currentTarget)},q=()=>{w(null)},E=(()=>{let e=D.pathname.split("/").slice(0,-1).join("/");return e||D.pathname})();return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>0?F(!0):F(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,o.jsx)(m(),{href:(0,x.g_)(D.pathname),children:(0,o.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"})})}),g&&S.find(e=>e.rota===E&&e.excluir)&&(0,o.jsx)(l.Z,{type:"button",onClick:v,variant:"outlined",color:"error",size:"medium",startIcon:(0,o.jsx)(u.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),d&&(0,o.jsx)(l.Z,{type:"button",onClick:b,variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(u.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[k&&1===y.length&&(0,o.jsx)(l.Z,{id:"fade-button","aria-controls":V?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":V?"true":void 0,onClick:()=>P(y[0]),color:"primary",disabled:I,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),k&&y.length>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{id:"fade-button","aria-controls":V?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":V?"true":void 0,onClick:W,color:"primary",disabled:I,variant:"outlined",size:"medium",type:"button",startIcon:(0,o.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,o.jsx)(j,{generateReport:P,dataReports:y,handleClick:W,handleClose:q,open:V,anchorEl:B})]}),a&&S.find(e=>e.rota===E&&e.editar)&&(0,o.jsx)(l.Z,{onClick:h,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:I,startIcon:(0,o.jsx)(u.Z,{icon:"material-symbols:save"}),children:"Salvar"}),n&&2==C.papelID&&(0,o.jsx)(l.Z,{onClick:p,type:"button",variant:"contained",size:"medium",color:"primary",disabled:I,sx:{ml:2},startIcon:(0,o.jsx)(u.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),O&&a&&S.find(e=>e.rota===E&&e.editar)&&(0,o.jsx)("div",{className:"\n                                ".concat(O?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,o.jsx)(f.Z,{color:"primary",size:"large",onClick:h,type:"submit",variant:"contained",disabled:I,children:(0,o.jsx)(u.Z,{icon:"material-symbols:save"})})})]})]})})};var v=g},47842:function(e,t,a){"use strict";var o=a(85893),n=a(70754),s=a(61953);let i=()=>(0,o.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});t.Z=i},46749:function(e,t,a){"use strict";a.d(t,{Lo:function(){return u},OD:function(){return m},OE:function(){return h},OL:function(){return d},WR:function(){return l},g_:function(){return x}});var o=a(85893),n=a(29630),s=a(41664),i=a.n(s),c=a(7071);a(67294),a(40039);var r=a(60664);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((a,s)=>{let r=t[s].field;return{...a,flex:a.size,renderCell:a=>(0,o.jsx)(i(),{href:"".concat(e,"/").concat(a.row.id),children:(0,o.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===r){if("status"!=e.field)return a.row[e.field];{let n=l[a.row.status];return(0,o.jsx)(c.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),m={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},u=e=>{let t=e.split("/"),a=t[t.length-1];return"novo"==a?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},h=e=>{let t=e.route;console.log("fun\xe7\xe3o report"),r.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"});URL.createObjectURL(t)}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},98480:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var o=a(85893),n=a(11163),s=a.n(n),i=a(67294),c=a(87536),r=a(49837),l=a(91359),d=a(85214),m=a(79072),u=a(81284),x=a(95309),h=a(29630),p=a(75158),b=a(67836),j=a(55343),Z=a(19604),f=a(22841),g=a(35966),v=a(75084),k=a(46749),I=a(60664),P=a(89191),y=a(60565),D=a(40039),C=a(86501),S=a(47842),O=a(21609),F=a(29620),B=a(77745),w=a(95398),V=a(76779),W=a(44642),q=a(61953),E=a(22416),R=a(16056);let M=e=>{let{openModal:t,setOpenModalConfirmScore:a,itemScore:n,setItemScore:s,getBlocks:i}=e,r=()=>{a(!1)},{handleSubmit:l,register:d}=(0,c.cI)({}),u=e=>{let t={alternativaID:null==n?void 0:n.alternativaID,pontuacao:(null==e?void 0:e.pontuacao)?1:0,parFornecedorBlocoItemID:null==n?void 0:n.parFornecedorBlocoItemID,alternatives:null==n?void 0:n.alternatives.map((t,a)=>({alternativaItemID:null==t?void 0:t.alternativaItemID,score:e[null==t?void 0:t.nome]}))};I.h.post("/formularios/fornecedor/saveItemScore",{data:t}).then(e=>{a(!1),i(),C.Am.success("Pontua\xe7\xe3o salva com sucesso!")})};return(0,o.jsx)(o.Fragment,{children:(null==n?void 0:n.alternatives)&&(0,o.jsx)(F.Z,{open:t,onClose:r,"aria-labelledby":"form-dialog-title",children:(0,o.jsxs)("form",{onSubmit:l(u),children:[(0,o.jsx)(B.Z,{id:"form-dialog-title",children:"Pontua\xe7\xe3o das respostas"}),(0,o.jsxs)(w.Z,{children:[(0,o.jsx)(W.Z,{sx:{mb:3},children:"Defina a pontua\xe7\xe3o para cada alternativa"}),(0,o.jsx)(q.Z,{sx:{mb:4},children:(0,o.jsx)(E.Z,{row:!0,children:(0,o.jsx)(f.Z,{label:"Habilitar pontua\xe7\xe3o",control:(0,o.jsx)(R.Z,{name:"pontuacao",...d("pontuacao"),checked:(null==n?void 0:n.pontuacao)==1,onChange(e){s({...n,pontuacao:e.target.checked?1:0})}})})})}),n&&(null==n?void 0:n.alternatives.map((e,t)=>(0,o.jsx)(m.ZP,{md:12,sx:{mb:4},children:(0,o.jsx)("grid",{item:!0,md:12,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(b.Z,{disabled:1!=n.pontuacao,id:"outlined-basic",label:null==e?void 0:e.nome,...d("".concat(null==e?void 0:e.nome)),name:"".concat(null==e?void 0:e.nome),defaultValue:null==e?void 0:e.score,variant:"outlined",size:"small",type:"number",title:0!=n.pontuacao||"Habilite a pontua\xe7\xe3o para preencher"})})})},t)))]}),(0,o.jsxs)(V.Z,{className:"dialog-actions-dense",children:[(0,o.jsx)(v.Z,{variant:"outlined",color:"primary",onClick:r,children:"Cancelar"}),(0,o.jsx)(v.Z,{variant:"contained",color:"primary",onClick:l(u),children:"Confirmar"})]})]})})})},z=()=>{let{user:e,loggedUnity:t}=(0,i.useContext)(D.V),[a,n]=(0,i.useState)(),[F,B]=(0,i.useState)([]),[w,V]=(0,i.useState)(),[W,q]=(0,i.useState)(),[E,R]=(0,i.useState)(!1),[z,N]=(0,i.useState)(),_=s(),A=(0,k.g_)(_.pathname),{setTitle:L}=(0,i.useContext)(y.f),{setValue:H,register:T,handleSubmit:U,formState:{errors:G}}=(0,c.cI)(),X=async e=>{let a={header:e.headers,blocks:e.blocks,orientacoes:e.orientacoes};try{await I.h.put("".concat(A,"/fornecedor/").concat(t.unidadeID),a).then(e=>{C.ZP.success(k.OD.successUpdate)})}catch(o){console.log(o)}},Y=e=>{let t=[...w];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),V(t)},J=e=>{N(null),I.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{N(e.data)}),N&&R(!0)},K=()=>{let e=[...w];e.push({dados:{ordem:e.length+1,nome:"",status:1},atividades:[...w[0].atividades.map(e=>({...e,checked:0}))],categorias:[...w[0].categorias.map(e=>({...e,checked:0}))],itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),V(e)},Q=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),V(e.data)})},$=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),n(e.data)})},ee=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),B(e.data)})},et=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getOrientacoes"}}).then(e=>{console.log("getOrientacoes: ",e.data),q(e.data.obs)})};return(0,i.useEffect)(()=>{L("Formul\xe1rio do Fornecedor"),$(),ee(),Q(),et()},[]),console.log("blocks: ",w),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:U(X),children:[a&&(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(P.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>U(X)}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,o.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(m.ZP,{item:!0,md:4,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),a.map((e,t)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...T("headers.[".concat(t,"].parFornecedorID"))}),(0,o.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...T("headers.[".concat(t,"].mostra")),defaultChecked:1==a[t].mostra})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...T("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==a[t].obrigatorio})})]})},t)}))]})})})]}),!w&&(0,o.jsx)(S.Z,{}),w&&w.map((e,t)=>(0,o.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,o.jsxs)(l.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parFornecedorBlocoID"),defaultValue:e.dados.parFornecedorBlocoID,...T("blocks.[".concat(t,"].parFornecedorBlocoID"))}),(0,o.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,o.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,o.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...T("blocks.[".concat(t,"].sequencia"))})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...T("blocks.[".concat(t,"].nome"))})})}),(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,o.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...T("blocks.[".concat(t,"].status")),defaultChecked:1==w[t].dados.status})]}),(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,o.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...T("blocks.[".concat(t,"].obs")),defaultChecked:1==w[t].dados.obs})]})]}),(0,o.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:2},children:(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(Z.Z,{severity:"info",children:"Esse bloco ser\xe1 habilitado se satisfazer as condi\xe7\xf5es abaixo:"})})}),(0,o.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:3,children:[(0,o.jsx)(u.ZP,{disablePadding:!0,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco quando \xe9:"})})}),e.categorias&&e.categorias.map((e,a)=>(0,o.jsx)(u.ZP,{disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].categorias[").concat(a,"].categoriaID"),defaultValue:e.categoriaID,...T("blocks.[".concat(t,"].categorias[").concat(a,"].categoriaID"))}),(0,o.jsx)(f.Z,{control:(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].categorias[").concat(a,"].checked"),...T("blocks.[".concat(t,"].categorias[").concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"-- E --"})}),(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:4,children:[(0,o.jsx)(u.ZP,{disablePadding:!0,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco se atividade for:"})})}),e.atividades&&e.atividades.map((e,a)=>(0,o.jsx)(u.ZP,{disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].atividades[").concat(a,"].atividadeID"),defaultValue:e.atividadeID,...T("blocks.[".concat(t,"].atividades[").concat(a,"].atividadeID"))}),(0,o.jsx)(f.Z,{control:(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].atividades[").concat(a,"].checked"),...T("blocks.[".concat(t,"].atividades[").concat(a,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},a))]})]}),(0,o.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,a)=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(a,"].parFornecedorBlocoItemID"),defaultValue:e.parFornecedorBlocoItemID,...T("blocks.[".concat(t,"].itens.[").concat(a,"].parFornecedorBlocoItemID"))}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"right"},children:(0,o.jsx)(j.Z,{children:(0,o.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(a,"].sequencia"),defaultValue:e.ordem,...T("blocks.[".concat(t,"].itens.[").concat(a,"].sequencia"))})})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:5,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:""!==w[t].itens[a].nome&&(0,o.jsx)(g.Z,{options:F.itens,defaultValue:w[t].itens[a],id:"autocomplete-outlined",getOptionLabel:e=>e.nome||"",onChange(e,o){H("blocks.[".concat(t,"].itens.[").concat(a,"].itemID"),null==o?void 0:o.itemID)},renderInput:e=>(0,o.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(a,"].nome"),label:"Item",placeholder:"Item",...T("blocks.[".concat(t,"].itens.[").concat(a,"].nome"))})})})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(g.Z,{options:F.alternativas,defaultValue:w[t].itens[a],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,o){H("blocks.[".concat(t,"].itens.[").concat(a,"].alternativaID"),null==o?void 0:o.alternativaID)},renderInput:e=>(0,o.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(a,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...T("blocks.[".concat(t,"].itens.[").concat(a,"].alternativa"))})})})}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Ativo":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].status"),...T("blocks.[".concat(t,"].itens.[").concat(a,"].status")),defaultChecked:1==e.status})]}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Obs":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].obs"),disabled:0==e.status,...T("blocks.[".concat(t,"].itens.[").concat(a,"].obs")),defaultChecked:1==e.obs})]}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Obrigat\xf3rio":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].obrigatorio"),...T("blocks.[".concat(t,"].itens.[").concat(a,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Pontua\xe7\xe3o":""}),(0,o.jsx)(v.Z,{style:0===e.pontuacao?{opacity:.3}:{},title:e.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!e.parFornecedorBlocoID,onClick:()=>J(e),children:(0,o.jsx)(O.Z,{icon:"ic:baseline-assessment"})})]})]})),E&&z&&(0,o.jsx)(M,{openModal:E,setOpenModalConfirmScore:R,itemScore:z,setItemScore:N,getBlocks:Q}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,o.jsx)(O.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){Y(t)},children:"Inserir Item"})})]})]})},t)),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,o.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,o.jsx)(O.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){K()},children:"Inserir Bloco"})}),(0,o.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(m.ZP,{container:!0,spacing:4,children:(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=W?W:"",...T("orientacoes")})})})})})]})})},N=()=>{let{user:e,loggedUnity:t}=(0,i.useContext)(D.V),[a,n]=(0,i.useState)(),[Z,f]=(0,i.useState)(),[S,F]=(0,i.useState)([]),[B,w]=(0,i.useState)(),[V,W]=(0,i.useState)(),q=s(),E=(0,k.g_)(q.pathname),{setTitle:R}=(0,i.useContext)(y.f),{setValue:M,register:z,handleSubmit:N,formState:{errors:_}}=(0,c.cI)(),A=async e=>{let a={header:e.headers,products:e.products,blocks:e.blocks};console.log("onSubmit: ",a);try{await I.h.put("".concat(E,"/recebimentoMp/").concat(t.unidadeID),a).then(e=>{C.ZP.success(k.OD.successUpdate)})}catch(o){console.log(o)}},L=e=>{let t=[...B];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),w(t)},H=()=>{let e=[...B];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),w(e)};return(0,i.useEffect)(()=>{R("Formul\xe1rio do Recebimento de MP"),console.log("=> ",E),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),n(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getProducts"}}).then(e=>{console.log("getProducts: ",e.data),f(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),w(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),F(e.data)})},[]),console.log("errors: ",_),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:N(A),children:[a&&(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(P.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N(A)}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,o.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(m.ZP,{item:!0,md:4,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),a.map((e,t)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,...z("headers.[".concat(t,"].parRecebimentompID"))}),(0,o.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...z("headers.[".concat(t,"].mostra")),defaultChecked:1==a[t].mostra})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...z("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==a[t].obrigatorio})})]})},t)}))]})})})]}),Z&&(0,o.jsx)(r.Z,{sx:{mt:4},children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,o.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(m.ZP,{item:!0,md:4,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),Z.map((e,t)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentoMpProdutoID,...z("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,o.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"products.[".concat(t,"].mostra"),...z("products.[".concat(t,"].mostra")),defaultChecked:1==Z[t].mostra})}),(0,o.jsx)(m.ZP,{item:!0,md:3,children:(0,o.jsx)(p.Z,{name:"products.[".concat(t,"].obrigatorio"),...z("products.[".concat(t,"].obrigatorio")),defaultChecked:1==Z[t].obrigatorio})})]})},t)}))]})})})}),B&&B.map((e,t)=>{var a,n,s,i;return(0,o.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(t+1)}),(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parRecebimentompBlocoID"),defaultValue:e.dados.parRecebimentompBlocoID,...z("blocks.[".concat(t,"].parRecebimentompBlocoID"))}),(0,o.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,o.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,o.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...z("blocks.[".concat(t,"].sequencia"),{required:!0}),error:null!=_&&null!==(a=_.blocks)&&void 0!==a&&null!==(n=a[t])&&void 0!==n&&!!n.sequencia})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...z("blocks.[".concat(t,"].nome"),{required:!0}),error:null!=_&&null!==(s=_.blocks)&&void 0!==s&&null!==(i=s[t])&&void 0!==i&&!!i.nome})})}),(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,o.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...z("blocks.[".concat(t,"].status")),defaultChecked:1==B[t].dados.status})]}),(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,o.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...z("blocks.[".concat(t,"].obs")),defaultChecked:1==B[t].dados.obs})]})]}),(0,o.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,a)=>{var n,s,i,c;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(a,"].parRecebimentompBlocoItemID"),defaultValue:e.parRecebimentompBlocoItemID,...z("blocks.[".concat(t,"].itens.[").concat(a,"].parRecebimentompBlocoItemID"))}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(a,"].sequencia"),defaultValue:e.ordem,...z("blocks.[".concat(t,"].itens.[").concat(a,"].sequencia"),{required:!0}),error:null!=_&&null!==(n=_.blocks)&&void 0!==n&&null!==(s=n[t])&&void 0!==s&&null!==(i=s.itens)&&void 0!==i&&null!==(c=i[a])&&void 0!==c&&!!c.sequencia})})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:""!==B[t].itens[a].nome&&(0,o.jsx)(g.Z,{options:S.itens,defaultValue:B[t].itens[a].item,getOptionLabel:e=>e.nome||"",name:"blocks.[".concat(t,"].itens.[").concat(a,"].item"),...z("blocks.[".concat(t,"].itens.[").concat(a,"].item")),onChange(e,o){console.log("===> ",o),M("blocks.[".concat(t,"].itens.[").concat(a,"].item"),o||"")},renderInput:e=>(0,o.jsx)(b.Z,{...e,label:"Item",placeholder:"Item"})})})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(g.Z,{options:S.alternativas,defaultValue:B[t].itens[a],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,o){M("blocks.[".concat(t,"].itens.[").concat(a,"].alternativaID"),null==o?void 0:o.alternativaID)},renderInput:e=>(0,o.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(a,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...z("blocks.[".concat(t,"].itens.[").concat(a,"].alternativa"))})})})}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Ativo":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].status"),...z("blocks.[".concat(t,"].itens.[").concat(a,"].status")),defaultChecked:1==e.status})]}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Obs":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].obs"),disabled:0==e.status,...z("blocks.[".concat(t,"].itens.[").concat(a,"].obs")),defaultChecked:1==e.obs})]}),(0,o.jsxs)(m.ZP,{item:!0,md:1,children:[(0,o.jsx)(h.Z,{variant:"body2",children:0==a?"Obrigat\xf3rio":""}),(0,o.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(a,"].obrigatorio"),...z("blocks.[".concat(t,"].itens.[").concat(a,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]})]})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,o.jsx)(O.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){L(t)},children:"Inserir Item"})})]})]})},t)}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,o.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,o.jsx)(O.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){H()},children:"Inserir Bloco"})}),(0,o.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(m.ZP,{container:!0,spacing:4,children:(0,o.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=V?V:"",...z("orientacoes")})})})})})]})})},_=()=>{let e=s().query.id;return(0,o.jsxs)(o.Fragment,{children:[1==e&&(0,o.jsx)(z,{}),2==e&&(0,o.jsx)(N,{}),!e&&(0,o.jsx)("div",{children:"Formul\xe1rio n\xe3o encontrado"})]})};var A=_}},function(e){e.O(0,[7536,1527,9774,2888,179],function(){return e(e.s=64876)}),_N_E=e.O()}]);