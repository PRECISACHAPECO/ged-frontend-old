(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6138],{94516:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/unidade",function(){return o(78736)}])},47842:function(e,t,o){"use strict";var n=o(85893),r=o(70754),s=o(61953);let i=()=>(0,n.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(r.Z,{})});t.Z=i},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return p},OD:function(){return d},OE:function(){return f},OL:function(){return u},g_:function(){return x}});var n=o(85893),r=o(29630),s=o(41664),i=o.n(s),a=o(7071);o(67294),o(40039);var l=o(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},u=(e,t)=>t.map((o,s)=>{let l=t[s].field;return{...o,flex:o.size,renderCell:o=>(0,n.jsx)(i(),{href:"".concat(e,"/").concat(o.row.id),children:(0,n.jsx)(r.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let r=c[o.row.status];return(0,n.jsx)(a.Z,{size:"small",skin:"light",color:r.color,label:r.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),d={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},f=e=>{let t=e.route;l.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(t);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},78736:function(e,t,o){"use strict";o.r(t);var n=o(85893),r=o(67294),s=o(60664),i=o(40372),a=o(91359),l=o(60565),c=o(40039),u=o(47842),d=o(11163),p=o(46749),x=o(49837);let f=()=>{let[e,t]=(0,r.useState)(null),o=(0,d.useRouter)(),f=o.pathname,{setTitle:m}=(0,r.useContext)(l.f),{user:h}=(0,r.useContext)(c.V);(0,r.useEffect)(()=>{let e=async()=>{await s.h.get("".concat(f,"?usuarioID=").concat(h.usuarioID)).then(e=>{t(e.data),m("Unidade")})};e()},[]);let j=(0,p.OL)(f,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,n.jsxs)(n.Fragment,{children:[!e&&(0,n.jsx)(u.Z,{}),e&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(a.Z,{sx:{pt:"0"},children:(0,n.jsx)(i.Z,{rows:e,columns:j,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=f},40372:function(e,t,o){"use strict";o.d(t,{Z:function(){return Z}});var n=o(85893),r=o(67294),s=o(11163),i=o.n(s),a=o(73338),l=o(75680),c=o(61953),u=o(67836),d=o(80562),p=o(50853),x=o(91359),f=o(75084),m=o(41664),h=o.n(m),j=o(40039),w=o(21609);let g=e=>{let{btnNew:t,btnPrint:o,openModal:s}=e,a=i(),{routes:l}=(0,r.useContext)(j.V);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[o&&(0,n.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(w.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===a.pathname&&e.inserir)&&(0,n.jsx)(h(),{href:s?"":"".concat(a.pathname,"/novo"),children:(0,n.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(w.Z,{icon:"ic:outline-plus"}),onClick:s||null,children:"Novo"})})]})})})},b=e=>(0,n.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,n.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,n.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,n.jsx)(w.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,n.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,n.jsx)(w.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,n.jsx)(p.M,{})]}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]}),v=e=>{let{rows:t,columns:o,buttonsHeader:i}=e,[c]=(0,r.useState)(t),[u,d]=(0,r.useState)(10),[p,x]=(0,r.useState)(""),[f,m]=(0,r.useState)([]),h=(0,s.useRouter)(),j=h.pathname,w=e=>{x(e);let t=e.toLowerCase().split(" ").filter(e=>""!==e),o=c.filter(e=>t.every(t=>Object.keys(e).some(o=>-1!==e[o].toString().toLowerCase().indexOf(t))));e.length&&o.length>0?m(o):m([])};return(0,n.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:o,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:p?f:c,onRowClick:e=>h.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>w(""),onChange:e=>w(e.target.value),buttonsHeader:i}}})};var Z=v}},function(e){e.O(0,[8359,9774,2888,179],function(){return e(e.s=94516)}),_N_E=e.O()}]);