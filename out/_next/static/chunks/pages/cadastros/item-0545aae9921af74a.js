(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31],{68473:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item",function(){return o(67257)}])},47842:function(e,t,o){"use strict";var r=o(85893),s=o(70754),n=o(61953);let i=()=>(0,r.jsx)(n.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,r.jsx)(s.Z,{})});t.Z=i},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return d},OD:function(){return u},OL:function(){return c},g_:function(){return x}});var r=o(85893),s=o(29630),n=o(41664),i=o.n(n),l=o(7071);let a={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},c=(e,t)=>t.map((o,n)=>{let c=t[n].field;return{...o,flex:o.size,renderCell:o=>(0,r.jsx)(s.Z,{variant:"body2",sx:{color:"text.primary"},children:(0,r.jsx)(i(),{href:"".concat(e,"/").concat(o.row.id),children:t&&t.map((e,t)=>{if(e.field===c){if("status"!=e.field)return o.row[e.field];{let s=a[o.row.status];return(0,r.jsx)(l.Z,{size:"small",skin:"light",color:s.color,label:s.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},d=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")}},67257:function(e,t,o){"use strict";o.r(t);var r=o(85893),s=o(67294),n=o(60664),i=o(90879),l=o(91359),a=o(60565),c=o(47842),u=o(11163),d=o(46749),x=o(49837);let p=()=>{let[e,t]=(0,s.useState)(null),o=(0,u.useRouter)(),p=o.pathname,{setTitle:m}=(0,s.useContext)(a.f);(0,s.useEffect)(()=>{let e=async()=>{await n.h.get(p).then(e=>{t(e.data),m("Item")})};e()},[]);let f=(0,d.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.6},{title:"Formul\xe1rio",field:"formulario",size:.2},{title:"Status",field:"status",size:.1}]);return(0,r.jsxs)(r.Fragment,{children:[!e&&(0,r.jsx)(c.Z,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{children:(0,r.jsx)(l.Z,{sx:{pt:"0"},children:(0,r.jsx)(i.Z,{rows:e,columns:f,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=p},90879:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var r=o(85893),s=o(67294),n=o(73338),i=o(75680),l=o(61953),a=o(67836),c=o(80562),u=o(50853),d=o(11163),x=o.n(d),p=o(91359),m=o(75084),f=o(41664),h=o.n(f),j=o(21609);let g=e=>{let{btnNew:t,btnPrint:o}=e,s=x();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[o&&(0,r.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&(0,r.jsx)(h(),{href:"".concat(s.pathname,"/novo"),children:(0,r.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"ic:outline-plus"}),children:"Novo"})})]})})})},w=e=>(0,r.jsxs)(l.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(a.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(l.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(u.M,{})]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint})})]}),b=e=>{let{rows:t,columns:o,buttonsHeader:l}=e,[a]=(0,s.useState)(t),[c,u]=(0,s.useState)(10),[d,x]=(0,s.useState)(""),[p,m]=(0,s.useState)([]),f=e=>{x(e);let t=e.toLowerCase().split(" ").filter(e=>""!==e),o=a.filter(e=>t.every(t=>Object.keys(e).some(o=>-1!==e[o].toString().toLowerCase().indexOf(t))));e.length&&o.length>0?m(o):m([])};return(0,r.jsx)(n._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:o,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:d?p:a,onPageSizeChange:e=>u(e),componentsProps:{toolbar:{value:d,clearSearch:()=>f(""),onChange:e=>f(e.target.value),buttonsHeader:l}}})};var v=b}},function(e){e.O(0,[359,774,888,179],function(){return e(e.s=68473)}),_N_E=e.O()}]);