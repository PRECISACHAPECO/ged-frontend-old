(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8207],{64876:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/[id]",function(){return n(98480)}])},89191:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(85893),o=n(11163),s=n.n(o),c=n(67294),i=n(91359),r=n(61953),l=n(75084),d=n(41664),m=n.n(d),u=n(21609),x=n(46749),h=n(73812),b=n(86378),p=n(9942);function j(e){let{disabled:t,generateReport:n,dataReports:o,open:s,anchorEl:c,handleClick:i,handleClose:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:c,open:s,onClose:r,TransitionComponent:p.Z,children:o.map(e=>(0,a.jsxs)(b.Z,{onClick(){r(),n(e)},children:[(0,a.jsx)("span",{children:e.identification}),(0,a.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,a.jsx)("span",{children:e.name})]},e.id))})})}var Z=n(40039),f=n(10160);let g=e=>{let{btnCancel:t,btnSave:n,handleSubmit:o,btnDelete:d,onclickDelete:h,btnPrint:b,disabled:p,generateReport:g,dataReports:v}=e,k=s(),{routes:I}=(0,c.useContext)(Z.V),[P,y]=(0,c.useState)(!1),[D,C]=(0,c.useState)(null),S=Boolean(D),w=e=>{C(e.currentTarget)},O=()=>{C(null)},F=(()=>{let e=k.pathname.split("/").slice(0,-1).join("/");return e||k.pathname})();return(0,c.useEffect)(()=>{let e=()=>{window.scrollY>0?y(!0):y(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),console.log("Header: ",n,F),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,a.jsx)(m(),{href:(0,x.g_)(k.pathname),children:(0,a.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,a.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"})})}),d&&I.find(e=>e.rota===F&&e.excluir)&&(0,a.jsx)(l.Z,{type:"button",onClick:h,variant:"outlined",color:"error",size:"medium",startIcon:(0,a.jsx)(u.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,a.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[b&&1===v.length&&(0,a.jsx)(l.Z,{id:"fade-button","aria-controls":S?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":S?"true":void 0,onClick:()=>g(v[0]),color:"primary",disabled:p,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),b&&v.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{id:"fade-button","aria-controls":S?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":S?"true":void 0,onClick:w,color:"primary",disabled:p,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(u.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,a.jsx)(j,{generateReport:g,dataReports:v,handleClick:w,handleClose:O,open:S,anchorEl:D})]}),n&&I.find(e=>e.rota===F&&e.editar)&&(0,a.jsx)(l.Z,{onClick:o,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:p,startIcon:(0,a.jsx)(u.Z,{icon:"material-symbols:save"}),children:"Salvar"}),P&&(0,a.jsx)("div",{className:"\n                                ".concat(P?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,a.jsx)(f.Z,{color:"primary",size:"large",onClick:o,type:"submit",variant:"contained",disabled:p,children:(0,a.jsx)(u.Z,{icon:"material-symbols:save"})})})]})]})})};var v=g},47842:function(e,t,n){"use strict";var a=n(85893),o=n(70754),s=n(61953);let c=()=>(0,a.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,a.jsx)(o.Z,{})});t.Z=c},46749:function(e,t,n){"use strict";n.d(t,{Lo:function(){return u},OD:function(){return m},OE:function(){return h},OL:function(){return d},g_:function(){return x}});var a=n(85893),o=n(29630),s=n(41664),c=n.n(s),i=n(7071);n(67294),n(40039);var r=n(60664);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.map((s,r)=>{let d=t[r].field;return{...s,flex:s.size,renderCell:s=>(0,a.jsx)(c(),{href:"".concat(e,"/").concat(s.row.id),children:(0,a.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===d){if("status"!=e.field)return s.row[e.field];{let o=l[s.row.status];return n?o.title:(0,a.jsx)(i.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}})},m={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},u=e=>{let t=e.split("/"),n=t[t.length-1];return"novo"==n?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},h=e=>{let t=e.route;r.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},98480:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var a=n(85893),o=n(11163),s=n.n(o),c=n(67294),i=n(87536),r=n(49837),l=n(91359),d=n(85214),m=n(79072),u=n(81284),x=n(95309),h=n(29630),b=n(75158),p=n(67836),j=n(55343),Z=n(19604),f=n(22841),g=n(35966),v=n(75084),k=n(46749),I=n(60664),P=n(89191),y=n(60565),D=n(40039),C=n(86501),S=n(47842),w=n(21609),O=n(29620),F=n(77745),B=n(95398),V=n(76779),W=n(44642),q=n(61953),E=n(22416),R=n(16056);let M=e=>{let{openModal:t,setOpenModalConfirmScore:n,itemScore:o,setItemScore:s,getBlocks:c}=e,r=()=>{n(!1)},{handleSubmit:l,register:d}=(0,i.cI)({}),u=e=>{let t={alternativaID:null==o?void 0:o.alternativaID,pontuacao:(null==e?void 0:e.pontuacao)?1:0,parFornecedorBlocoItemID:null==o?void 0:o.parFornecedorBlocoItemID,alternatives:null==o?void 0:o.alternatives.map((t,n)=>({alternativaItemID:null==t?void 0:t.alternativaItemID,score:e[null==t?void 0:t.nome]}))};I.h.post("/formularios/fornecedor/saveItemScore",{data:t}).then(e=>{n(!1),c(),C.Am.success("Pontua\xe7\xe3o salva com sucesso!")})};return(0,a.jsx)(a.Fragment,{children:(null==o?void 0:o.alternatives)&&(0,a.jsx)(O.Z,{open:t,onClose:r,"aria-labelledby":"form-dialog-title",children:(0,a.jsxs)("form",{onSubmit:l(u),children:[(0,a.jsx)(F.Z,{id:"form-dialog-title",children:"Pontua\xe7\xe3o das respostas"}),(0,a.jsxs)(B.Z,{children:[(0,a.jsx)(W.Z,{sx:{mb:3},children:"Defina a pontua\xe7\xe3o para cada alternativa"}),(0,a.jsx)(q.Z,{sx:{mb:4},children:(0,a.jsx)(E.Z,{row:!0,children:(0,a.jsx)(f.Z,{label:"Habilitar pontua\xe7\xe3o",control:(0,a.jsx)(R.Z,{name:"pontuacao",...d("pontuacao"),checked:(null==o?void 0:o.pontuacao)==1,onChange(e){s({...o,pontuacao:e.target.checked?1:0})}})})})}),o&&(null==o?void 0:o.alternatives.map((e,t)=>(0,a.jsx)(m.ZP,{md:12,sx:{mb:4},children:(0,a.jsx)("grid",{item:!0,md:12,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{disabled:1!=o.pontuacao,id:"outlined-basic",label:null==e?void 0:e.nome,...d("".concat(null==e?void 0:e.nome)),name:"".concat(null==e?void 0:e.nome),defaultValue:null==e?void 0:e.score,variant:"outlined",size:"small",type:"number",title:0!=o.pontuacao||"Habilite a pontua\xe7\xe3o para preencher"})})})},t)))]}),(0,a.jsxs)(V.Z,{className:"dialog-actions-dense",children:[(0,a.jsx)(v.Z,{variant:"outlined",color:"primary",onClick:r,children:"Cancelar"}),(0,a.jsx)(v.Z,{variant:"contained",color:"primary",onClick:l(u),children:"Confirmar"})]})]})})})},_=()=>{let{user:e,loggedUnity:t}=(0,c.useContext)(D.V),[n,o]=(0,c.useState)(),[O,F]=(0,c.useState)([]),[B,V]=(0,c.useState)(),[W,q]=(0,c.useState)(),[E,R]=(0,c.useState)(!1),[_,N]=(0,c.useState)(),z=s(),A=(0,k.g_)(z.pathname),{setTitle:L}=(0,c.useContext)(y.f),{setValue:H,register:T,handleSubmit:U,formState:{errors:G}}=(0,i.cI)(),X=async e=>{let n={header:e.headers,blocks:e.blocks,orientacoes:e.orientacoes};try{await I.h.put("".concat(A,"/fornecedor/").concat(t.unidadeID),n).then(e=>{C.ZP.success(k.OD.successUpdate)})}catch(a){console.log(a)}},Y=e=>{let t=[...B];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),V(t)},J=e=>{N(null),I.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{N(e.data)}),N&&R(!0)},K=()=>{let e=[...B];e.push({dados:{ordem:e.length+1,nome:"",status:1},atividades:[...B[0].atividades.map(e=>({...e,checked:0}))],categorias:[...B[0].categorias.map(e=>({...e,checked:0}))],itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),V(e)},Q=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),V(e.data)})},$=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),o(e.data)})},ee=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),F(e.data)})},et=()=>{I.h.get("".concat(A,"/fornecedor/").concat(t.unidadeID),{headers:{"function-name":"getOrientacoes"}}).then(e=>{console.log("getOrientacoes: ",e.data),q(e.data.obs)})};return(0,c.useEffect)(()=>{L("Formul\xe1rio do Fornecedor"),$(),ee(),Q(),et()},[]),console.log("blocks: ",B),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:U(X),children:[n&&(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(P.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>U(X)}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,a.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(m.ZP,{item:!0,md:4,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),n.map((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...T("headers.[".concat(t,"].parFornecedorID"))}),(0,a.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"headers.[".concat(t,"].mostra"),...T("headers.[".concat(t,"].mostra")),defaultChecked:1==n[t].mostra})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"headers.[".concat(t,"].obrigatorio"),...T("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==n[t].obrigatorio})})]})},t)}))]})})})]}),!B&&(0,a.jsx)(S.Z,{}),B&&B.map((e,t)=>(0,a.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parFornecedorBlocoID"),defaultValue:e.dados.parFornecedorBlocoID,...T("blocks.[".concat(t,"].parFornecedorBlocoID"))}),(0,a.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,a.jsx)(p.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...T("blocks.[".concat(t,"].sequencia"))})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...T("blocks.[".concat(t,"].nome"))})})}),(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,a.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].status"),...T("blocks.[".concat(t,"].status")),defaultChecked:1==B[t].dados.status})]}),(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,a.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].obs"),...T("blocks.[".concat(t,"].obs")),defaultChecked:1==B[t].dados.obs})]})]}),(0,a.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:2},children:(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(Z.Z,{severity:"info",children:"Esse bloco ser\xe1 habilitado se satisfazer as condi\xe7\xf5es abaixo:"})})}),(0,a.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:3,children:[(0,a.jsx)(u.ZP,{disablePadding:!0,children:(0,a.jsx)(x.Z,{children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco quando \xe9:"})})}),e.categorias&&e.categorias.map((e,n)=>(0,a.jsx)(u.ZP,{disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].categorias[").concat(n,"].categoriaID"),defaultValue:e.categoriaID,...T("blocks.[".concat(t,"].categorias[").concat(n,"].categoriaID"))}),(0,a.jsx)(f.Z,{control:(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].categorias[").concat(n,"].checked"),...T("blocks.[".concat(t,"].categorias[").concat(n,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},n))]}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"-- E --"})}),(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:4,children:[(0,a.jsx)(u.ZP,{disablePadding:!0,children:(0,a.jsx)(x.Z,{children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco se atividade for:"})})}),e.atividades&&e.atividades.map((e,n)=>(0,a.jsx)(u.ZP,{disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].atividades[").concat(n,"].atividadeID"),defaultValue:e.atividadeID,...T("blocks.[".concat(t,"].atividades[").concat(n,"].atividadeID"))}),(0,a.jsx)(f.Z,{control:(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].atividades[").concat(n,"].checked"),...T("blocks.[".concat(t,"].atividades[").concat(n,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},n))]})]}),(0,a.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,n)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(n,"].parFornecedorBlocoItemID"),defaultValue:e.parFornecedorBlocoItemID,...T("blocks.[".concat(t,"].itens.[").concat(n,"].parFornecedorBlocoItemID"))}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(n,"].sequencia"),defaultValue:e.ordem,...T("blocks.[".concat(t,"].itens.[").concat(n,"].sequencia"))})})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:5,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:""!==B[t].itens[n].nome&&(0,a.jsx)(g.Z,{options:O.itens,defaultValue:B[t].itens[n],id:"autocomplete-outlined",getOptionLabel:e=>e.nome||"",onChange(e,a){H("blocks.[".concat(t,"].itens.[").concat(n,"].itemID"),null==a?void 0:a.itemID)},renderInput:e=>(0,a.jsx)(p.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(n,"].nome"),label:"Item",placeholder:"Item",...T("blocks.[".concat(t,"].itens.[").concat(n,"].nome"))})})})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(g.Z,{options:O.alternativas,defaultValue:B[t].itens[n],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,a){H("blocks.[".concat(t,"].itens.[").concat(n,"].alternativaID"),null==a?void 0:a.alternativaID)},renderInput:e=>(0,a.jsx)(p.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(n,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...T("blocks.[".concat(t,"].itens.[").concat(n,"].alternativa"))})})})}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Ativo":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].status"),...T("blocks.[".concat(t,"].itens.[").concat(n,"].status")),defaultChecked:1==e.status})]}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Obs":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].obs"),disabled:0==e.status,...T("blocks.[".concat(t,"].itens.[").concat(n,"].obs")),defaultChecked:1==e.obs})]}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Obrigat\xf3rio":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].obrigatorio"),...T("blocks.[".concat(t,"].itens.[").concat(n,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Pontua\xe7\xe3o":""}),(0,a.jsx)(v.Z,{style:0===e.pontuacao?{opacity:.3}:{},title:e.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!e.parFornecedorBlocoID,onClick:()=>J(e),children:(0,a.jsx)(w.Z,{icon:"ic:baseline-assessment"})})]})]})),E&&_&&(0,a.jsx)(M,{openModal:E,setOpenModalConfirmScore:R,itemScore:_,setItemScore:N,getBlocks:Q}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,a.jsx)(w.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){Y(t)},children:"Inserir Item"})})]})]})},t)),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,a.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,a.jsx)(w.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){K()},children:"Inserir Bloco"})}),(0,a.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(m.ZP,{container:!0,spacing:4,children:(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(p.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=W?W:"",...T("orientacoes")})})})})})]})})},N=()=>{let{user:e,loggedUnity:t}=(0,c.useContext)(D.V),[n,o]=(0,c.useState)(),[Z,f]=(0,c.useState)(),[S,O]=(0,c.useState)([]),[F,B]=(0,c.useState)(),[V,W]=(0,c.useState)(),q=s(),E=(0,k.g_)(q.pathname),{setTitle:R}=(0,c.useContext)(y.f),{setValue:M,register:_,handleSubmit:N,formState:{errors:z}}=(0,i.cI)(),A=async e=>{let n={header:e.headers,products:e.products,blocks:e.blocks};console.log("onSubmit: ",n);try{await I.h.put("".concat(E,"/recebimentoMp/").concat(t.unidadeID),n).then(e=>{C.ZP.success(k.OD.successUpdate)})}catch(a){console.log(a)}},L=e=>{let t=[...F];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),B(t)},H=()=>{let e=[...F];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),B(e)};return(0,c.useEffect)(()=>{R("Formul\xe1rio do Recebimento de MP"),console.log("=> ",E),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),o(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getProducts"}}).then(e=>{console.log("getProducts: ",e.data),f(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),B(e.data)}),I.h.get("".concat(E,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),O(e.data)})},[]),console.log("errors: ",z),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:N(A),children:[n&&(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(P.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N(A)}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,a.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(m.ZP,{item:!0,md:4,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),n.map((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,..._("headers.[".concat(t,"].parRecebimentompID"))}),(0,a.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"headers.[".concat(t,"].mostra"),..._("headers.[".concat(t,"].mostra")),defaultChecked:1==n[t].mostra})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"headers.[".concat(t,"].obrigatorio"),..._("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==n[t].obrigatorio})})]})},t)}))]})})})]}),Z&&(0,a.jsx)(r.Z,{sx:{mt:4},children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,a.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(m.ZP,{item:!0,md:4,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),Z.map((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentoMpProdutoID,..._("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,a.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"products.[".concat(t,"].mostra"),..._("products.[".concat(t,"].mostra")),defaultChecked:1==Z[t].mostra})}),(0,a.jsx)(m.ZP,{item:!0,md:3,children:(0,a.jsx)(b.Z,{name:"products.[".concat(t,"].obrigatorio"),..._("products.[".concat(t,"].obrigatorio")),defaultChecked:1==Z[t].obrigatorio})})]})},t)}))]})})})}),F&&F.map((e,t)=>{var n,o,s,c;return(0,a.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(t+1)}),(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parRecebimentompBlocoID"),defaultValue:e.dados.parRecebimentompBlocoID,..._("blocks.[".concat(t,"].parRecebimentompBlocoID"))}),(0,a.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,a.jsx)(p.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,..._("blocks.[".concat(t,"].sequencia"),{required:!0}),error:null!=z&&null!==(n=z.blocks)&&void 0!==n&&null!==(o=n[t])&&void 0!==o&&!!o.sequencia})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,..._("blocks.[".concat(t,"].nome"),{required:!0}),error:null!=z&&null!==(s=z.blocks)&&void 0!==s&&null!==(c=s[t])&&void 0!==c&&!!c.nome})})}),(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,a.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].status"),..._("blocks.[".concat(t,"].status")),defaultChecked:1==F[t].dados.status})]}),(0,a.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,a.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"].obs"),..._("blocks.[".concat(t,"].obs")),defaultChecked:1==F[t].dados.obs})]})]}),(0,a.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,n)=>{var o,s,c,i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(n,"].parRecebimentompBlocoItemID"),defaultValue:e.parRecebimentompBlocoItemID,..._("blocks.[".concat(t,"].itens.[").concat(n,"].parRecebimentompBlocoItemID"))}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(n,"].sequencia"),defaultValue:e.ordem,..._("blocks.[".concat(t,"].itens.[").concat(n,"].sequencia"),{required:!0}),error:null!=z&&null!==(o=z.blocks)&&void 0!==o&&null!==(s=o[t])&&void 0!==s&&null!==(c=s.itens)&&void 0!==c&&null!==(i=c[n])&&void 0!==i&&!!i.sequencia})})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:""!==F[t].itens[n].nome&&(0,a.jsx)(g.Z,{options:S.itens,defaultValue:F[t].itens[n].item,getOptionLabel:e=>e.nome||"",name:"blocks.[".concat(t,"].itens.[").concat(n,"].item"),..._("blocks.[".concat(t,"].itens.[").concat(n,"].item")),onChange(e,a){console.log("===> ",a),M("blocks.[".concat(t,"].itens.[").concat(n,"].item"),a||"")},renderInput:e=>(0,a.jsx)(p.Z,{...e,label:"Item",placeholder:"Item"})})})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(g.Z,{options:S.alternativas,defaultValue:F[t].itens[n],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,a){M("blocks.[".concat(t,"].itens.[").concat(n,"].alternativaID"),null==a?void 0:a.alternativaID)},renderInput:e=>(0,a.jsx)(p.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(n,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",..._("blocks.[".concat(t,"].itens.[").concat(n,"].alternativa"))})})})}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Ativo":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].status"),..._("blocks.[".concat(t,"].itens.[").concat(n,"].status")),defaultChecked:1==e.status})]}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Obs":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].obs"),disabled:0==e.status,..._("blocks.[".concat(t,"].itens.[").concat(n,"].obs")),defaultChecked:1==e.obs})]}),(0,a.jsxs)(m.ZP,{item:!0,md:1,children:[(0,a.jsx)(h.Z,{variant:"body2",children:0==n?"Obrigat\xf3rio":""}),(0,a.jsx)(b.Z,{name:"blocks.[".concat(t,"][").concat(n,"].obrigatorio"),..._("blocks.[".concat(t,"].itens.[").concat(n,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]})]})}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,a.jsx)(w.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){L(t)},children:"Inserir Item"})})]})]})},t)}),(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,a.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,a.jsx)(w.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){H()},children:"Inserir Bloco"})}),(0,a.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(m.ZP,{container:!0,spacing:4,children:(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(p.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=V?V:"",..._("orientacoes")})})})})})]})})},z=()=>{let e=s().query.id;return(0,a.jsxs)(a.Fragment,{children:[1==e&&(0,a.jsx)(_,{}),2==e&&(0,a.jsx)(N,{}),!e&&(0,a.jsx)("div",{children:"Formul\xe1rio n\xe3o encontrado"})]})};var A=z}},function(e){e.O(0,[7536,7453,9774,2888,179],function(){return e(e.s=64876)}),_N_E=e.O()}]);