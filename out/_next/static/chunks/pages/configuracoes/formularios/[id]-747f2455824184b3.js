(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8207],{75158:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var n=o(63366),a=o(87462),i=o(67294),c=o(86010),s=o(94780),r=o(41796),l=o(37743),d=o(54235),m=o(85893),u=(0,d.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=o(36622),b=o(78884),j=o(67074),Z=o(1588),f=o(34867);function v(e){return(0,f.Z)("MuiCheckbox",e)}let g=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],I=e=>{let{classes:t,indeterminate:o,color:n}=e,i={root:["root",o&&"indeterminate",`color${(0,p.Z)(n)}`]},c=(0,s.Z)(i,v,t);return(0,a.Z)({},t,c)},P=(0,j.ZP)(l.Z,{shouldForwardProp:e=>(0,j.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,p.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,r.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),y=(0,m.jsx)(x,{}),C=(0,m.jsx)(u,{}),D=(0,m.jsx)(h,{}),S=i.forwardRef(function(e,t){var o,s;let r=(0,b.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=y,color:d="primary",icon:u=C,indeterminate:x=!1,indeterminateIcon:h=D,inputProps:p,size:j="medium",className:Z}=r,f=(0,n.Z)(r,k),v=x?h:u,g=x?h:l,S=(0,a.Z)({},r,{color:d,indeterminate:x,size:j}),w=I(S);return(0,m.jsx)(P,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":x},p),icon:i.cloneElement(v,{fontSize:null!=(o=v.props.fontSize)?o:j}),checkedIcon:i.cloneElement(g,{fontSize:null!=(s=g.props.fontSize)?s:j}),ownerState:S,ref:t,className:(0,c.Z)(w.root,Z)},f,{classes:w}))});var w=S},64876:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/[id]",function(){return o(98480)}])},89191:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var n=o(85893),a=o(11163),i=o.n(a),c=o(67294),s=o(91359),r=o(61953),l=o(75084),d=o(72389),m=o(41664),u=o.n(m),x=o(21609),h=o(46749),p=o(73812),b=o(86378),j=o(9942),Z=o(60565);function f(e){let{disabled:t,dataReports:o,open:a,anchorEl:i,handleClick:s,handleClose:r}=e,{generateReport:l}=(0,c.useContext)(Z.f);return(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:i,open:a,onClose:r,TransitionComponent:j.Z,children:o.map(e=>(0,n.jsxs)(b.Z,{onClick(){r(),l(e)},children:[(0,n.jsx)("span",{children:e.identification}),(0,n.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,n.jsx)("span",{children:e.name})]},e.id))})})}var v=o(40039),g=o(10160);let k=e=>{let{btnCancel:t,btnSave:o,btnSend:a,btnChangeStatus:m,handleSubmit:p,disabledSubmit:b,handleSend:j,disabledSend:k,handleChangeStatus:I,btnDelete:P,onclickDelete:y,btnPrint:C,disabled:D,dataReports:S}=e,w=i(),{user:B,routes:F}=(0,c.useContext)(v.V),{generateReport:O}=(0,c.useContext)(Z.f),[z,V]=(0,c.useState)(!1),[E,R]=(0,c.useState)(null),M=Boolean(E),q=e=>{R(e.currentTarget)},W=()=>{R(null)},N=(()=>{let e=w.pathname.split("/").slice(0,-1).join("/");return e||w.pathname})(),_=()=>{window.scrollTo({top:0,behavior:"smooth"})},A=()=>{window.history.back()};return(0,c.useEffect)(()=>{let e=()=>{V(!1),window.scrollY>0?V(!0):V(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,n.jsx)(u(),{href:(0,h.g_)(w.pathname),children:(0,n.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,n.jsx)(x.Z,{icon:"material-symbols:arrow-back-rounded"})})}),P&&F.find(e=>e.rota===N&&e.excluir)&&(0,n.jsx)(l.Z,{type:"button",onClick:y,variant:"outlined",color:"error",size:"medium",startIcon:(0,n.jsx)(x.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"}),m&&(0,n.jsx)(l.Z,{type:"button",onClick:I,variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(x.Z,{icon:"fluent:status-12-filled"}),children:"Status"})]}),(0,n.jsxs)(r.Z,{sx:{display:"flex",gap:"8px"},children:[C&&1===S.length&&(0,n.jsx)(l.Z,{id:"fade-button","aria-controls":M?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":M?"true":void 0,onClick:()=>O(S[0]),color:"primary",disabled:D,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(x.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),C&&S.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{id:"fade-button","aria-controls":M?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":M?"true":void 0,onClick:q,color:"primary",disabled:D,variant:"outlined",size:"medium",type:"button",startIcon:(0,n.jsx)(x.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,n.jsx)(f,{generateReport:O,dataReports:S,handleClick:q,handleClose:W,open:M,anchorEl:E})]}),o&&F.find(e=>e.rota===N&&e.editar)&&(0,n.jsx)(l.Z,{onClick:p,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:D||b,startIcon:(0,n.jsx)(x.Z,{icon:"material-symbols:save"}),children:"Salvar"}),a&&2==B.papelID&&(0,n.jsx)(l.Z,{onClick:j,type:"button",variant:"contained",size:"medium",color:"primary",disabled:D||k,sx:{ml:2},startIcon:(0,n.jsx)(x.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),(0,n.jsx)("div",{className:"\n                        ".concat(z?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:D||b,icon:"material-symbols:save",function:p},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:print",function:q},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"ion:arrow-up",function:_},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:"material-symbols:arrow-back-rounded",function:A}].map(e=>(1!==e.id||o&&F.find(e=>e.rota===N&&e.editar))&&(2!==e.id||C)?(0,n.jsx)(d.Z,{title:e.title,placement:"left",children:(0,n.jsx)("div",{children:(0,n.jsx)(g.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:(0,n.jsx)(x.Z,{icon:e.icon})})},e.id)},e.id):null)})]})]})})};var I=k},47842:function(e,t,o){"use strict";var n=o(85893),a=o(70754),i=o(61953);let c=()=>(0,n.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(a.Z,{})});t.Z=c},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return u},OD:function(){return m},OE:function(){return h},OL:function(){return d},WR:function(){return l},g_:function(){return x}});var n=o(85893),a=o(29630),i=o(41664),c=o.n(i),s=o(7071);o(67294),o(40039);var r=o(60664);o(50196);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((o,i)=>{let r=t[i].field;return{...o,flex:o.size,renderCell:o=>(0,n.jsx)(c(),{href:"".concat(e,"/").concat(o.row.id),children:(0,n.jsx)(a.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===r){if("status"!=e.field)return o.row[e.field];{let a=l[o.row.status];return(0,n.jsx)(s.Z,{size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),m={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},u=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},h=e=>{let t=e.route;r.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(t);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},98480:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return H}});var n=o(85893),a=o(11163),i=o.n(a),c=o(67294),s=o(87536),r=o(49837),l=o(91359),d=o(85214),m=o(79072),u=o(81284),x=o(95309),h=o(29630),p=o(75158),b=o(67836),j=o(55343),Z=o(19604),f=o(22841),v=o(35966),g=o(75084),k=o(72389),I=o(80562),P=o(46749),y=o(60664),C=o(89191),D=o(60565),S=o(40039),w=o(86501),B=o(47842),F=o(21609),O=o(29620),z=o(77745),V=o(95398),E=o(76779),R=o(44642),M=o(61953),q=o(22416),W=o(16056);let N=e=>{let{openModal:t,setOpenModalConfirmScore:o,itemScore:a,setItemScore:i,getBlocks:c}=e,r=()=>{o(!1)},{handleSubmit:l,register:d}=(0,s.cI)({}),u=e=>{let t={alternativaID:null==a?void 0:a.alternativaID,pontuacao:(null==e?void 0:e.pontuacao)?1:0,parFornecedorBlocoItemID:null==a?void 0:a.parFornecedorBlocoItemID,alternatives:null==a?void 0:a.alternatives.map((t,o)=>({alternativaItemID:null==t?void 0:t.alternativaItemID,score:e[null==t?void 0:t.nome]}))};y.h.post("/formularios/fornecedor/saveItemScore",{data:t}).then(e=>{o(!1),c(),w.Am.success("Pontua\xe7\xe3o salva com sucesso!")})};return(0,n.jsx)(n.Fragment,{children:(null==a?void 0:a.alternatives)&&(0,n.jsx)(O.Z,{open:t,onClose:r,"aria-labelledby":"form-dialog-title",children:(0,n.jsxs)("form",{onSubmit:l(u),children:[(0,n.jsx)(z.Z,{id:"form-dialog-title",children:"Pontua\xe7\xe3o das respostas"}),(0,n.jsxs)(V.Z,{children:[(0,n.jsx)(R.Z,{sx:{mb:3},children:"Defina a pontua\xe7\xe3o para cada alternativa"}),(0,n.jsx)(M.Z,{sx:{mb:4},children:(0,n.jsx)(q.Z,{row:!0,children:(0,n.jsx)(f.Z,{label:"Habilitar pontua\xe7\xe3o",control:(0,n.jsx)(W.Z,{name:"pontuacao",...d("pontuacao"),checked:(null==a?void 0:a.pontuacao)==1,onChange(e){i({...a,pontuacao:e.target.checked?1:0})}})})})}),a&&(null==a?void 0:a.alternatives.map((e,t)=>(0,n.jsx)(m.ZP,{md:12,sx:{mb:4},children:(0,n.jsx)("grid",{item:!0,md:12,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{disabled:1!=a.pontuacao,id:"outlined-basic",label:null==e?void 0:e.nome,...d("".concat(null==e?void 0:e.nome)),name:"".concat(null==e?void 0:e.nome),defaultValue:null==e?void 0:e.score,variant:"outlined",size:"small",type:"number",title:0!=a.pontuacao||"Habilite a pontua\xe7\xe3o para preencher"})})})},t)))]}),(0,n.jsxs)(E.Z,{className:"dialog-actions-dense",children:[(0,n.jsx)(g.Z,{variant:"outlined",color:"primary",onClick:r,children:"Cancelar"}),(0,n.jsx)(g.Z,{variant:"contained",color:"primary",onClick:l(u),children:"Confirmar"})]})]})})})},_=()=>{var e;let{user:t,loggedUnity:o}=(0,c.useContext)(S.V),[a,O]=(0,c.useState)(),[z,V]=(0,c.useState)([]),[E,R]=(0,c.useState)(),[M,q]=(0,c.useState)(),[W,_]=(0,c.useState)(!1),[A,L]=(0,c.useState)(),H=i(),T=(0,P.g_)(H.pathname),{setTitle:$}=(0,c.useContext)(D.f),{setValue:U,register:G,handleSubmit:X,formState:{errors:Y}}=(0,s.cI)(),J=async e=>{let t={header:e.headers,blocks:e.blocks,orientacoes:e.orientacoes};try{console.log("onSubmit: ",t),await y.h.put("".concat(T,"/fornecedor/").concat(o.unidadeID),t).then(e=>{w.ZP.success(P.OD.successUpdate)})}catch(n){console.log(n)}},K=e=>{let t=[...E];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),R(t)},Q=(e,t,o)=>{e.removed=!0,U("blocks.[".concat(t,"].itens.[").concat(o,"].removed"),!0),document.getElementById("item-".concat(t,"-").concat(o)).style.display="none",w.ZP.success("Item pr\xe9 removido, salve para concluir!"),console.log("\uD83D\uDE80 item:",e)},ee=e=>{L(null),y.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{L(e.data)}),L&&_(!0)},et=()=>{let e=[...E];e.push({dados:{ordem:e.length+1,nome:"",status:1},atividades:[...E[0].atividades.map(e=>({...e,checked:0}))],categorias:[...E[0].categorias.map(e=>({...e,checked:0}))],itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),R(e)},eo=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),R(e.data)})},en=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),O(e.data)})},ea=()=>{y.h.get("".concat(T,"/fornecedor/").concat(o.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),V(e.data)})};return(0,c.useEffect)(()=>{$("Formul\xe1rio do Fornecedor"),en(),ea(),eo()},[]),console.log("blocks: ",E),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:X(J),children:[a&&(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(C.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>X(J)}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),a.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...G("headers.[".concat(t,"].parFornecedorID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...G("headers.[".concat(t,"].mostra")),defaultChecked:1==a[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...G("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==a[t].obrigatorio})})]})},t)}))]})})})]}),!E&&(0,n.jsx)(B.Z,{}),E&&E.map((e,t)=>(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parFornecedorBlocoID"),defaultValue:e.dados.parFornecedorBlocoID,...G("blocks.[".concat(t,"].parFornecedorBlocoID"))}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...G("blocks.[".concat(t,"].sequencia"))})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...G("blocks.[".concat(t,"].nome"))})})}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...G("blocks.[".concat(t,"].status")),defaultChecked:1==E[t].dados.status})]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...G("blocks.[".concat(t,"].obs")),defaultChecked:1==E[t].dados.obs})]})]}),(0,n.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:2},children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(Z.Z,{severity:"info",children:"Esse bloco ser\xe1 habilitado para o Fornecedor se satisfazer as condi\xe7\xf5es abaixo:"})})}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:3,children:[(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco quando \xe9:"})})}),e.categorias&&e.categorias.map((e,o)=>(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].categorias[").concat(o,"].categoriaID"),defaultValue:e.categoriaID,...G("blocks.[".concat(t,"].categorias[").concat(o,"].categoriaID"))}),(0,n.jsx)(f.Z,{control:(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].categorias[").concat(o,"].checked"),...G("blocks.[".concat(t,"].categorias[").concat(o,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},o))]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:4,children:[(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostrar esse bloco se atividade for:"})})}),e.atividades&&e.atividades.map((e,o)=>(0,n.jsx)(u.ZP,{disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].atividades[").concat(o,"].atividadeID"),defaultValue:e.atividadeID,...G("blocks.[".concat(t,"].atividades[").concat(o,"].atividadeID"))}),(0,n.jsx)(f.Z,{control:(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].atividades[").concat(o,"].checked"),...G("blocks.[".concat(t,"].atividades[").concat(o,"].checked")),defaultChecked:1==e.checked}),label:e.nome})]})},o))]})]}),e.itens&&e.itens.map((e,o)=>(0,n.jsxs)(m.ZP,{id:"item-".concat(t,"-").concat(o),container:!0,spacing:4,sx:{mt:4},children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(o,"].parFornecedorBlocoItemID"),defaultValue:e.parFornecedorBlocoItemID,...G("blocks.[".concat(t,"].itens.[").concat(o,"].parFornecedorBlocoItemID"))}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"right"},children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),defaultValue:e.ordem,...G("blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"))})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:""!==E[t].itens[o].nome&&(0,n.jsx)(v.Z,{options:z.itens,defaultValue:E[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.nome||"",disabled:1==e.hasPending,onChange(e,n){U("blocks.[".concat(t,"].itens.[").concat(o,"].itemID"),null==n?void 0:n.itemID)},renderInput:a=>(0,n.jsx)(b.Z,{...a,name:"blocks.[".concat(t,"].itens.[").concat(o,"].nome"),label:e.itemID?"Item [".concat(e.itemID,"]"):"Item",placeholder:e.itemID?"Item [".concat(e.itemID,"]"):"Item",...G("blocks.[".concat(t,"].itens.[").concat(o,"].nome"))})})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(v.Z,{options:z.alternativas,defaultValue:E[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",disabled:1==e.hasPending,onChange(e,n){U("blocks.[".concat(t,"].itens.[").concat(o,"].alternativaID"),null==n?void 0:n.alternativaID)},renderInput:e=>(0,n.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...G("blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"))})})})}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Ativo":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].status"),...G("blocks.[".concat(t,"].itens.[").concat(o,"].status")),defaultChecked:1==e.status})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obs":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obs"),disabled:0==e.status,...G("blocks.[".concat(t,"].itens.[").concat(o,"].obs")),defaultChecked:1==e.obs})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obrigat\xf3rio":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obrigatorio"),...G("blocks.[".concat(t,"].itens.[").concat(o,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Pontua\xe7\xe3o":""}),(0,n.jsx)(g.Z,{style:0===e.pontuacao?{opacity:.3}:{},title:e.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!e.parFornecedorBlocoID,onClick:()=>ee(e),children:(0,n.jsx)(F.Z,{icon:"ic:baseline-assessment"})})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Remover":""}),(0,n.jsx)(k.Z,{title:1==e.hasPending?"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio":"Remover este item",children:(0,n.jsx)(I.Z,{color:"error",onClick(){1==e.hasPending||Q(e,t,o)},sx:{opacity:1==e.hasPending?.5:1,cursor:1==e.hasPending?"default":"pointer"},children:(0,n.jsx)(F.Z,{icon:"tabler:trash-filled"})})})]})]},o)),W&&A&&(0,n.jsx)(N,{openModal:W,setOpenModalConfirmScore:_,itemScore:A,setItemScore:L,getBlocks:eo}),(0,n.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(g.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(F.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){K(t)},children:"Inserir Item"})})})]})},t)),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,n.jsx)(g.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(F.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){et()},children:"Inserir Bloco"})}),(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(m.ZP,{container:!0,spacing:4,children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!==(e=null==M?void 0:M.obs)&&void 0!==e?e:"",...G("orientacoes")})})})})})]})})},A=()=>{let{user:e,loggedUnity:t}=(0,c.useContext)(S.V),[o,a]=(0,c.useState)(),[Z,f]=(0,c.useState)(),[k,I]=(0,c.useState)([]),[B,O]=(0,c.useState)(),[z,V]=(0,c.useState)(),E=i(),R=(0,P.g_)(E.pathname),{setTitle:M}=(0,c.useContext)(D.f),{setValue:q,register:W,handleSubmit:N,formState:{errors:_}}=(0,s.cI)(),A=async e=>{let o={header:e.headers,products:e.products,blocks:e.blocks};console.log("onSubmit: ",o);try{await y.h.put("".concat(R,"/recebimentoMp/").concat(t.unidadeID),o).then(e=>{w.ZP.success(P.OD.successUpdate)})}catch(n){console.log(n)}},L=e=>{let t=[...B];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),O(t)},H=()=>{let e=[...B];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),O(e)};return(0,c.useEffect)(()=>{M("Formul\xe1rio do Recebimento de MP"),console.log("=> ",R),y.h.get("".concat(R,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getHeader"}}).then(e=>{console.log("getHeader: ",e.data),a(e.data)}),y.h.get("".concat(R,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getProducts"}}).then(e=>{console.log("getProducts: ",e.data),f(e.data)}),y.h.get("".concat(R,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getBlocks"}}).then(e=>{console.log("getBlocks: ",e.data),O(e.data)}),y.h.get("".concat(R,"/recebimentoMp/").concat(t.unidadeID),{headers:{"function-name":"getOptionsItens"}}).then(e=>{console.log("getOptionsItens: ",e.data),I(e.data)})},[]),console.log("errors: ",_),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:N(A),children:[o&&(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(C.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N(A)}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),o.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"headers.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,...W("headers.[".concat(t,"].parRecebimentompID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].mostra"),...W("headers.[".concat(t,"].mostra")),defaultChecked:1==o[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"headers.[".concat(t,"].obrigatorio"),...W("headers.[".concat(t,"].obrigatorio")),defaultChecked:1==o[t].obrigatorio})})]})},t)}))]})})})]}),Z&&(0,n.jsx)(r.Z,{sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{component:"nav","aria-label":"main mailbox",children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(m.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})})]})}),Z.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.ZP,{divider:!0,disablePadding:!0,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentoMpProdutoID,...W("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,n.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"products.[".concat(t,"].mostra"),...W("products.[".concat(t,"].mostra")),defaultChecked:1==Z[t].mostra})}),(0,n.jsx)(m.ZP,{item:!0,md:3,children:(0,n.jsx)(p.Z,{name:"products.[".concat(t,"].obrigatorio"),...W("products.[".concat(t,"].obrigatorio")),defaultChecked:1==Z[t].obrigatorio})})]})},t)}))]})})})}),B&&B.map((e,t)=>{var o,a,i,c;return(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(h.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(t+1)}),(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].parRecebimentompBlocoID"),defaultValue:e.dados.parRecebimentompBlocoID,...W("blocks.[".concat(t,"].parRecebimentompBlocoID"))}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].sequencia"),defaultValue:e.dados.ordem,...W("blocks.[".concat(t,"].sequencia"),{required:!0}),error:null!=_&&null!==(o=_.blocks)&&void 0!==o&&null!==(a=o[t])&&void 0!==a&&!!a.sequencia})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Nome do Bloco",placeholder:"Nome do Bloco",name:"blocks.[".concat(t,"].nome"),defaultValue:e.dados.nome,...W("blocks.[".concat(t,"].nome"),{required:!0}),error:null!=_&&null!==(i=_.blocks)&&void 0!==i&&null!==(c=i[t])&&void 0!==c&&!!c.nome})})}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Ativo"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].status"),...W("blocks.[".concat(t,"].status")),defaultChecked:1==B[t].dados.status})]}),(0,n.jsxs)(m.ZP,{item:!0,xs:12,md:2,children:[(0,n.jsx)(h.Z,{variant:"body2",children:"Observa\xe7\xe3o"}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"].obs"),...W("blocks.[".concat(t,"].obs")),defaultChecked:1==B[t].dados.obs})]})]}),(0,n.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:[e.itens&&e.itens.map((e,o)=>{var a,i,c,s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"hidden",name:"blocks.[".concat(t,"].itens.[").concat(o,"].parRecebimentompBlocoItemID"),defaultValue:e.parRecebimentompBlocoItemID,...W("blocks.[".concat(t,"].itens.[").concat(o,"].parRecebimentompBlocoItemID"))}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(b.Z,{label:"Sequ\xeancia",placeholder:"Sequ\xeancia",name:"blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),defaultValue:e.ordem,...W("blocks.[".concat(t,"].itens.[").concat(o,"].sequencia"),{required:!0}),error:null!=_&&null!==(a=_.blocks)&&void 0!==a&&null!==(i=a[t])&&void 0!==i&&null!==(c=i.itens)&&void 0!==c&&null!==(s=c[o])&&void 0!==s&&!!s.sequencia})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:""!==B[t].itens[o].nome&&(0,n.jsx)(v.Z,{options:k.itens,defaultValue:B[t].itens[o].item,getOptionLabel:e=>e.nome||"",name:"blocks.[".concat(t,"].itens.[").concat(o,"].item"),...W("blocks.[".concat(t,"].itens.[").concat(o,"].item")),onChange(e,n){console.log("===> ",n),q("blocks.[".concat(t,"].itens.[").concat(o,"].item"),n||"")},renderInput:e=>(0,n.jsx)(b.Z,{...e,label:"Item",placeholder:"Item"})})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,n.jsx)(j.Z,{fullWidth:!0,children:(0,n.jsx)(v.Z,{options:k.alternativas,defaultValue:B[t].itens[o],id:"autocomplete-outlined",getOptionLabel:e=>e.alternativa||"",onChange(e,n){q("blocks.[".concat(t,"].itens.[").concat(o,"].alternativaID"),null==n?void 0:n.alternativaID)},renderInput:e=>(0,n.jsx)(b.Z,{...e,name:"blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"),label:"Alternativa",placeholder:"Alternativa",...W("blocks.[".concat(t,"].itens.[").concat(o,"].alternativa"))})})})}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Ativo":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].status"),...W("blocks.[".concat(t,"].itens.[").concat(o,"].status")),defaultChecked:1==e.status})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obs":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obs"),disabled:0==e.status,...W("blocks.[".concat(t,"].itens.[").concat(o,"].obs")),defaultChecked:1==e.obs})]}),(0,n.jsxs)(m.ZP,{item:!0,md:1,children:[(0,n.jsx)(h.Z,{variant:"body2",children:0==o?"Obrigat\xf3rio":""}),(0,n.jsx)(p.Z,{name:"blocks.[".concat(t,"][").concat(o,"].obrigatorio"),...W("blocks.[".concat(t,"].itens.[").concat(o,"].obrigatorio")),defaultChecked:1==e.obrigatorio})]})]})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(g.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(F.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){L(t)},children:"Inserir Item"})})]})]})},t)}),(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,n.jsx)(g.Z,{variant:"outlined",color:"primary",startIcon:(0,n.jsx)(F.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){H()},children:"Inserir Bloco"})}),(0,n.jsx)(r.Z,{md:12,sx:{mt:4},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(m.ZP,{container:!0,spacing:4,children:(0,n.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,n.jsx)(b.Z,{label:"Orienta\xe7\xf5es",placeholder:"Orienta\xe7\xf5es",rows:4,multiline:!0,fullWidth:!0,name:"orientacoes",defaultValue:null!=z?z:"",...W("orientacoes")})})})})})]})})},L=()=>{let e=i().query.id;return(0,n.jsxs)(n.Fragment,{children:[1==e&&(0,n.jsx)(_,{}),2==e&&(0,n.jsx)(A,{}),!e&&(0,n.jsx)("div",{children:"Formul\xe1rio n\xe3o encontrado"})]})};var H=L}},function(e){e.O(0,[6668,7536,9774,2888,179],function(){return e(e.s=64876)}),_N_E=e.O()}]);