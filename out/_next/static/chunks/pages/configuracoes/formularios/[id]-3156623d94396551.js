(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8207],{64876:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/[id]",function(){return o(98480)}])},47842:function(e,t,o){"use strict";var i=o(85893),n=o(70754),s=o(61953);let a=e=>{let{text:t}=e;return(0,i.jsxs)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=a},98480:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var i=o(85893),n=o(11163),s=o.n(n),a=o(67294),r=o(87536),l=o(49837),d=o(91359),c=o(85214),m=o(79072),u=o(29630),x=o(61953),v=o(75084),p=o(46749),h=o(75442),b=o(89191),j=o(60565),g=o(40039),Z=o(86501),I=o(47842),f=o(21609),k=o(29620),D=o(77745),P=o(95398),S=o(76779),y=o(44642),F=o(22416),C=o(22841),B=o(16056),q=o(55343),R=o(67836);let E=e=>{let{openModal:t,setOpenModalConfirmScore:o,itemScore:n,setItemScore:s}=e,a=()=>{o(!1)},{handleSubmit:l,register:d}=(0,r.cI)({}),c=e=>{let t={alternativaID:null==n?void 0:n.alternativaID,pontuacao:(null==e?void 0:e.pontuacao)?1:0,parFornecedorBlocoItemID:null==n?void 0:n.parFornecedorBlocoItemID,alternatives:null==n?void 0:n.alternatives.map((t,o)=>({alternativaItemID:null==t?void 0:t.alternativaItemID,score:e[null==t?void 0:t.nome]}))};h.h.post("/formularios/fornecedor/saveItemScore",{data:t}).then(e=>{o(!1),Z.Am.success("Pontua\xe7\xe3o salva com sucesso!")})};return(0,i.jsx)(i.Fragment,{children:(null==n?void 0:n.alternatives)&&(0,i.jsx)(k.Z,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",children:(0,i.jsxs)("form",{onSubmit:l(c),children:[(0,i.jsx)(D.Z,{id:"form-dialog-title",children:"Pontua\xe7\xe3o das respostas"}),(0,i.jsxs)(P.Z,{children:[(0,i.jsx)(y.Z,{sx:{mb:3},children:"Defina a pontua\xe7\xe3o para cada alternativa"}),(0,i.jsx)(x.Z,{sx:{mb:4},children:(0,i.jsx)(F.Z,{row:!0,children:(0,i.jsx)(C.Z,{label:"Habilitar pontua\xe7\xe3o",control:(0,i.jsx)(B.Z,{name:"pontuacao",...d("pontuacao"),checked:(null==n?void 0:n.pontuacao)==1,onChange(e){s({...n,pontuacao:e.target.checked?1:0})}})})})}),n&&(null==n?void 0:n.alternatives.map((e,t)=>(0,i.jsx)(m.ZP,{md:12,sx:{mb:4},children:(0,i.jsx)("grid",{item:!0,md:12,children:(0,i.jsx)(q.Z,{fullWidth:!0,children:(0,i.jsx)(R.Z,{disabled:1!=n.pontuacao,id:"outlined-basic",label:null==e?void 0:e.nome,...d("".concat(null==e?void 0:e.nome)),name:"".concat(null==e?void 0:e.nome),defaultValue:null==e?void 0:e.score,variant:"outlined",size:"small",type:"number",title:0!=n.pontuacao||"Habilite a pontua\xe7\xe3o para preencher"})})})},t)))]}),(0,i.jsxs)(S.Z,{className:"dialog-actions-dense",children:[(0,i.jsx)(v.Z,{variant:"outlined",color:"primary",onClick:a,children:"Cancelar"}),(0,i.jsx)(v.Z,{variant:"contained",color:"primary",onClick:l(c),children:"Confirmar"})]})]})})})};var O=o(84220),V=o(29308),w=o(67569),_=o(3893),W=o(88475);let M=()=>{var e,t;let{user:o,loggedUnity:n}=(0,a.useContext)(g.V),[k,D]=(0,a.useState)(),[P,S]=(0,a.useState)(null),[y,F]=(0,a.useState)(),[C,B]=(0,a.useState)(),[q,R]=(0,a.useState)(!1),[M,N]=(0,a.useState)(),[A,T]=(0,a.useState)(!1),[H,U]=(0,a.useState)([]),X=s(),z=(0,p.g_)(X.pathname),{setTitle:G}=(0,a.useContext)(j.f),{setValue:J,register:K,handleSubmit:L,reset:Q,formState:{errors:Y}}=(0,r.cI)(),$=async e=>{let t={unidadeID:n.unidadeID,header:e.header,blocks:e.blocks,arrRemovedItems:H,orientacoes:e.orientations};D(null),console.log("\uD83D\uDE80 ~ onSubmit:",t);try{await h.h.put("".concat(z,"/fornecedor/updateData"),t).then(e=>{Z.ZP.success(p.OD.successUpdate),T(!A)})}catch(o){console.log(o)}},ee=(e,t,o,i)=>{let n=i.itens;n=n.filter(t=>{let o=e.itens.some(e=>e.item&&t.id===e.item.id);return!o});let s=[...o];s[t].optionsBlock.itens=n,F(s)},et=e=>{var t;let o=[...y];o[e].itens.push({ordem:(null===(t=o[e].itens)||void 0===t?void 0:t.length)+1,obs:1,status:1,obrigatorio:1}),F(o),J("blocks.[".concat(e,"].itens.[").concat(o[e].itens.length-1,"].new"),!0),ee(o[e],e,y,P)},eo=(e,t,o)=>{if(console.log("\uD83D\uDE80 ~ length:",y[t].itens.length),1===y[t].itens.length){Z.ZP.error("Voc\xea deve ter ao menos um item!");return}let i=[...H];i.push(e),U(i);let n=[...y],s=[...y[t].itens];s.splice(o,1),n[t].itens=s,F(n),console.log("\uD83D\uDE80 ~ newBlock:",s),J("blocks.[".concat(t,"].itens"),s),ee(y[t],t,y,P)},ei=e=>{N(null),h.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{N(e.data)}),N&&R(!0)},en=()=>{let e=[...y];e.push({dados:{ordem:e.length+1,nome:"",status:1},categorias:[],atividades:[],optionsBlock:{itens:[...P.itens],alternativas:[...P.alternativas]},itens:[{parFormularioID:1,new:!0,ordem:"1",nome:"",status:1,item:null,alternativa:null}]}),F(e)},es=()=>{try{h.h.post("".concat(z,"/fornecedor/getData"),{unidadeID:n.unidadeID}).then(e=>{console.log("getdata",e.data),D(e.data.header),F(e.data.blocks),S({categorias:e.data.options.categorias,atividades:e.data.options.atividades,itens:e.data.options.itens,alternativas:e.data.options.alternativas}),B(e.data.orientations),Q(e.data),setTimeout(()=>{e.data.blocks.map((t,o)=>{ee(t,o,e.data.blocks,e.data.options)})},3e3)})}catch(e){console.log(e)}};return(0,a.useEffect)(()=>{G("Formul\xe1rio do Fornecedor"),es()},[A]),(0,i.jsx)(i.Fragment,{children:k?(0,i.jsxs)("form",{onSubmit:L($),children:[k&&(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(b.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>L($)}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(c.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(m.ZP,{item:!0,md:4,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),k.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"header.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...K("header.[".concat(t,"].parFornecedorID"))}),(0,i.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"header.[".concat(t,"].mostra"),value:e.mostra,register:K}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"header.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:K})]}))]})})})]}),!y&&(0,i.jsx)(I.Z,{}),y&&y.map((o,n)=>{var s,a,r,c,p,h,b,j,g,Z;return(0,i.jsx)(l.Z,{md:12,sx:{mt:4},children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(n,"].dados.parFornecedorBlocoID"),value:o.dados.parFornecedorBlocoID,...K("blocks.[".concat(n,"].dados.parFornecedorBlocoID"))}),(0,i.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(V.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(n,"].dados.ordem"),value:o.dados.ordem,required:!0,register:K,errors:null==Y?void 0:null===(s=Y.blocks)||void 0===s?void 0:null===(a=s[n])||void 0===a?void 0:null===(r=a.dados)||void 0===r?void 0:r.ordem}),(0,i.jsx)(V.Z,{xs:12,md:9,title:"Nome do Bloco",name:"blocks.[".concat(n,"].dados.nome"),value:o.dados.nome,required:!0,register:K,errors:null==Y?void 0:null===(c=Y.blocks)||void 0===c?void 0:null===(p=c[n])||void 0===p?void 0:null===(h=p.dados)||void 0===h?void 0:h.nome}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Ativo",name:"blocks.[".concat(n,"].dados.status"),value:y[n].dados.status,register:K}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Observa\xe7\xe3o",name:"blocks.[".concat(n,"].dados.obs"),value:y[n].dados.obs,register:K}),(0,i.jsx)(O.Z,{xs:12,md:5,multiple:!0,title:"Mostrar esse bloco quando \xe9",name:"blocks.[".concat(n,"].categorias"),value:o.categorias,required:!0,options:P.categorias,register:K,setValue:J,errors:null==Y?void 0:null===(b=Y.blocks)||void 0===b?void 0:null===(j=b[n])||void 0===j?void 0:j.categorias}),(0,i.jsx)(O.Z,{xs:12,md:7,multiple:!0,title:"Atividade(s)",name:"blocks.[".concat(n,"].atividades"),value:o.atividades,required:!1,options:P.atividades,register:K,setValue:J,errors:null==Y?void 0:null===(g=Y.blocks)||void 0===g?void 0:null===(Z=g[n])||void 0===Z?void 0:Z.atividades})]}),(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mt:4},children:"Itens"}),o.itens&&o.itens.map((o,s)=>{var a,r,l,d,c,p,h,b,j,g,Z,I,k;return(0,i.jsxs)(m.ZP,{id:"item-".concat(n,"-").concat(s),container:!0,spacing:2,sx:{my:1},children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(n,"].itens.[").concat(s,"].parFornecedorBlocoItemID"),value:o.parFornecedorBlocoItemID,...K("blocks.[".concat(n,"].itens.[").concat(s,"].parFornecedorBlocoItemID"))}),(0,i.jsx)(V.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(n,"].itens.[").concat(s,"].ordem"),value:o.ordem,required:!0,register:K,errors:null==Y?void 0:null===(a=Y.blocks)||void 0===a?void 0:null===(r=a[n])||void 0===r?void 0:null===(l=r.itens)||void 0===l?void 0:null===(d=l[s])||void 0===d?void 0:d.ordem}),(0,i.jsx)(O.Z,{xs:12,md:4,title:y[n].itens[s].itemID?"Item [".concat(y[n].itens[s].itemID,"]"):"Item",name:"blocks.[".concat(n,"].itens.[").concat(s,"].item"),value:null!==(e=y[n].itens[s].item)&&void 0!==e?e:null,required:!0,options:null===(c=y[n].optionsBlock)||void 0===c?void 0:c.itens,register:K,setValue:J,errors:null==Y?void 0:null===(p=Y.blocks)||void 0===p?void 0:null===(h=p[n])||void 0===h?void 0:null===(b=h.itens)||void 0===b?void 0:null===(j=b[s])||void 0===j?void 0:j.item}),(0,i.jsx)(O.Z,{xs:12,md:2,title:"Alternativa",name:"blocks.[".concat(n,"].itens.[").concat(s,"].alternativa"),value:null!==(t=y[n].itens[s].alternativa)&&void 0!==t?t:null,required:!0,options:P.alternativas,register:K,setValue:J,errors:null==Y?void 0:null===(g=Y.blocks)||void 0===g?void 0:null===(Z=g[n])||void 0===Z?void 0:null===(I=Z.itens)||void 0===I?void 0:null===(k=I[s])||void 0===k?void 0:k.alternativa}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Ativo",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].status"),value:y[n].itens[s].status,register:K}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Obs",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].obs"),value:y[n].itens[s].obs,register:K}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Obrigat\xf3rio",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].obrigatorio"),value:y[n].itens[s].obrigatorio,register:K}),(0,i.jsx)(m.ZP,{item:!0,xs:12,md:1,children:(0,i.jsxs)(x.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(u.Z,{variant:"caption",children:0==s?"Pontua\xe7\xe3o":""}),(0,i.jsx)(v.Z,{style:0===o.pontuacao?{opacity:.3}:{},title:o.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!o.parFornecedorBlocoID,onClick:()=>ei(o),children:(0,i.jsx)(f.Z,{icon:"ic:baseline-assessment"})})]})}),(0,i.jsx)(W.Z,{xs:12,md:1,title:0==s?"Remover":"",index:n,removeItem:eo,item:o,pending:o.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]},s)}),q&&M&&(0,i.jsx)(E,{openModal:q,setOpenModalConfirmScore:R,itemScore:M,setItemScore:N}),(0,i.jsx)(m.ZP,{container:!0,spacing:4,sx:{mt:4},children:(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(f.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){et(n)},children:"Inserir Item"})})})]})},n)}),(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,i.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(f.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){en()},children:"Inserir Bloco"})}),C&&(0,i.jsx)(l.Z,{md:12,sx:{mt:4},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.ZP,{container:!0,spacing:4,children:(0,i.jsx)(V.Z,{xs:12,md:12,title:"Orienta\xe7\xf5es",name:"orientations.obs",required:!1,value:null==C?void 0:C.obs,multiline:!0,rows:4,register:K})})})})]}):(0,i.jsx)(I.Z,{})})},N=()=>{var e,t;let{user:o,loggedUnity:n}=(0,a.useContext)(g.V),[x,k]=(0,a.useState)(),[D,P]=(0,a.useState)(),[S,y]=(0,a.useState)(null),[F,C]=(0,a.useState)([]),[B,q]=(0,a.useState)(null),[R,E]=(0,a.useState)(!1),[M,N]=(0,a.useState)([]),A=s(),T=(0,p.g_)(A.pathname),{setTitle:H}=(0,a.useContext)(j.f),{setValue:U,register:X,reset:z,handleSubmit:G,formState:{errors:J}}=(0,r.cI)(),K=async e=>{let t={unidadeID:n.unidadeID,header:e.header,products:e.products,blocks:e.blocks,arrRemovedItems:M,orientacoes:e.orientacoes};k(null),console.log("onSubmit: ",t);try{await h.h.put("".concat(T,"/recebimentoMp/updateData"),t).then(e=>{Z.ZP.success(p.OD.successUpdate),E(!R)})}catch(o){console.log(o)}},L=e=>{let t=[...F];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),C(t),ee(t[e],e,F,S)},Q=()=>{let e=[...F];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),C(e)},Y=()=>{try{h.h.post("".concat(T,"/recebimentoMp/getData"),{unidadeID:n.unidadeID}).then(e=>{console.log("getData: ",e.data),k(e.data.header),P(e.data.products),C(e.data.blocks),q(e.data.orientacoes.obs),y(e.data.options),z(e.data),setTimeout(()=>{e.data.blocks.map((t,o)=>{ee(t,o,e.data.blocks,e.data.options)})},3e3)})}catch(e){console.log(e)}},$=(e,t,o)=>{if(console.log("\uD83D\uDE80 ~ length:",F[t].itens.length),1===F[t].itens.length){Z.ZP.error("Voc\xea deve ter ao menos um item!");return}let i=[...M];i.push(e),N(i);let n=[...F],s=[...F[t].itens];s.splice(o,1),n[t].itens=s,C(n),console.log("\uD83D\uDE80 ~ newBlock:",s),U("blocks.[".concat(t,"].itens"),s),ee(F[t],t,F,S)},ee=(e,t,o,i)=>{let n=i.itens;n=n.filter(t=>{let o=e.itens.some(e=>e.item&&t.id===e.item.id);return!o});let s=[...o];s[t].optionsBlock.itens=n,C(s)};return(0,a.useEffect)(()=>{H("Formul\xe1rio do Recebimento de MP"),Y()},[R]),console.log("errors: ",J),(0,i.jsx)(i.Fragment,{children:x?(0,i.jsxs)("form",{onSubmit:G(K),children:[x&&(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(b.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>G(K)}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(c.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(m.ZP,{item:!0,md:4,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),x.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"header.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,...X("headers.[".concat(t,"].parRecebimentompID"))}),(0,i.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"header.[".concat(t,"].mostra"),value:e.mostra,register:X}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"header.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:X})]}))]})})})]}),D&&(0,i.jsx)(l.Z,{sx:{mt:4},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(c.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(m.ZP,{item:!0,md:4,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(m.ZP,{item:!0,md:3,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),D.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentompProdutoID,...X("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,i.jsx)(m.ZP,{item:!0,md:4,children:e.nomeCampo}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"products.[".concat(t,"].mostra"),value:e.mostra,register:X}),(0,i.jsx)(_.Z,{xs:12,md:3,title:"",name:"products.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:X})]}))]})})})}),F&&F.map((o,n)=>{var s,a,r,c,x,p;return(0,i.jsx)(l.Z,{md:12,sx:{mt:4},children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(n+1)}),(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(n,"].parRecebimentompBlocoID"),defaultValue:o.dados.parRecebimentompBlocoID,...X("blocks.[".concat(n,"].parRecebimentompBlocoID"))}),(0,i.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(V.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(n,"].dados.ordem"),value:o.dados.ordem,required:!0,register:X,errors:null==J?void 0:null===(s=J.blocks)||void 0===s?void 0:null===(a=s[n])||void 0===a?void 0:null===(r=a.dados)||void 0===r?void 0:r.ordem}),(0,i.jsx)(V.Z,{xs:12,md:9,title:"Nome do Bloco",name:"blocks.[".concat(n,"].dados.nome"),value:o.dados.nome,required:!0,register:X,errors:null==J?void 0:null===(c=J.blocks)||void 0===c?void 0:null===(x=c[n])||void 0===x?void 0:null===(p=x.dados)||void 0===p?void 0:p.nome}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Ativo",name:"blocks.[".concat(n,"].dados.status"),value:F[n].dados.status,register:X}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Observa\xe7\xe3o",name:"blocks.[".concat(n,"].dados.obs"),value:F[n].dados.obs,register:X})]}),(0,i.jsxs)(m.ZP,{container:!0,spacing:4,sx:{mt:0},children:[(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Itens"})}),o.itens&&o.itens.map((o,s)=>{var a,r,l,d,c,m,u,x,v,p,h,b;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(n,"].itens.[").concat(s,"].parRecebimentompBlocoItemID"),defaultValue:o.parRecebimentompBlocoItemID,...X("blocks.[".concat(n,"].itens.[").concat(s,"].parRecebimentompBlocoItemID"))}),(0,i.jsx)(V.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(n,"].itens.[").concat(s,"].ordem"),value:o.ordem,required:!0,register:X,errors:null==J?void 0:null===(a=J.blocks)||void 0===a?void 0:null===(r=a[n])||void 0===r?void 0:null===(l=r.itens)||void 0===l?void 0:null===(d=l[s])||void 0===d?void 0:d.ordem}),(0,i.jsx)(O.Z,{xs:12,md:5,title:F[n].itens[s].itemID?"Item [".concat(F[n].itens[s].itemID,"]"):"Item",name:"blocks.[".concat(n,"].itens.[").concat(s,"].item"),value:null!==(e=F[n].itens[s].item)&&void 0!==e?e:null,required:!0,options:S.itens,register:X,setValue:U,errors:null==J?void 0:null===(c=J.blocks)||void 0===c?void 0:null===(m=c[n])||void 0===m?void 0:null===(u=m.itens)||void 0===u?void 0:null===(x=u[s])||void 0===x?void 0:x.item}),(0,i.jsx)(O.Z,{xs:12,md:2,title:"Alternativa",name:"blocks.[".concat(n,"].itens.[").concat(s,"].alternativa"),value:null!==(t=F[n].itens[s].alternativa)&&void 0!==t?t:null,required:!0,options:S.alternativas,register:X,setValue:U,errors:null==J?void 0:null===(v=J.blocks)||void 0===v?void 0:null===(p=v[n])||void 0===p?void 0:null===(h=p.itens)||void 0===h?void 0:null===(b=h[s])||void 0===b?void 0:b.alternativa}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Ativo",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].status"),value:F[n].itens[s].status,register:X}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Obs",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].obs"),value:F[n].itens[s].obs,register:X}),(0,i.jsx)(w.Z,{xs:12,md:1,title:"Obrigat\xf3rio",index:s,name:"blocks.[".concat(n,"].itens.[").concat(s,"].obrigatorio"),value:F[n].itens[s].obrigatorio,register:X}),(0,i.jsx)(W.Z,{xs:12,md:1,title:0==s?"Remover":"",index:n,removeItem:$,item:o,pending:o.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]})}),(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(f.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){L(n)},children:"Inserir Item"})})]})]})},n)}),(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,i.jsx)(v.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(f.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){Q()},children:"Inserir Bloco"})}),x&&(0,i.jsx)(l.Z,{md:12,sx:{mt:4},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.ZP,{container:!0,spacing:4,children:(0,i.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(V.Z,{xs:12,md:12,title:"Orienta\xe7\xf5es",name:"orientacoes.obs",required:!1,value:null==B?void 0:B.obs,multiline:!0,rows:4,register:X})})})})})]}):(0,i.jsx)(I.Z,{})})},A=()=>{let e=s().query.id;return(0,i.jsxs)(i.Fragment,{children:[1==e&&(0,i.jsx)(M,{}),2==e&&(0,i.jsx)(N,{}),!e&&(0,i.jsx)("div",{children:"Formul\xe1rio n\xe3o encontrado"})]})};var T=A}},function(e){e.O(0,[2064,7536,3548,9774,2888,179],function(){return e(e.s=64876)}),_N_E=e.O()}]);