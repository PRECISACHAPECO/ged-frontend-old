(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{94516:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/unidade",function(){return n(78736)}])},47842:function(e,t,n){"use strict";var o=n(85893),s=n(70754),r=n(61953);let i=()=>(0,o.jsx)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(s.Z,{})});t.Z=i},46749:function(e,t,n){"use strict";n.d(t,{Lo:function(){return d},OD:function(){return u},OL:function(){return c},g_:function(){return x}});var o=n(85893),s=n(29630),r=n(41664),i=n.n(r),a=n(7071);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},c=(e,t)=>t.map((n,r)=>{let c=t[r].field;return{...n,flex:n.size,renderCell:n=>(0,o.jsx)(s.Z,{variant:"body2",sx:{color:"text.primary"},children:(0,o.jsx)(i(),{href:"".concat(e,"/").concat(n.row.id),children:t&&t.map((e,t)=>{if(e.field===c){if("status"!=e.field)return n.row[e.field];{let s=l[n.row.status];return(0,o.jsx)(a.Z,{size:"small",skin:"light",color:s.color,label:s.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},d=e=>{let t=e.split("/"),n=t[t.length-1];return"novo"==n?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")}},78736:function(e,t,n){"use strict";n.r(t);var o=n(85893),s=n(67294),r=n(60664),i=n(90879),a=n(91359),l=n(60565),c=n(47842),u=n(11163),d=n(46749),x=n(49837);let p=()=>{let[e,t]=(0,s.useState)(null),n=(0,u.useRouter)(),p=n.pathname,{setTitle:f}=(0,s.useContext)(l.f);(0,s.useEffect)(()=>{let e=async()=>{await r.h.get(p).then(e=>{t(e.data),f("Unidade")})};e()},[]);let m=(0,d.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nomeFantasia",size:.8},{title:"Status",field:"status",size:.1}]);return(0,o.jsxs)(o.Fragment,{children:[!e&&(0,o.jsx)(c.Z,{}),e&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(a.Z,{sx:{pt:"0"},children:(0,o.jsx)(i.Z,{rows:e,columns:m,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=p},90879:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var o=n(85893),s=n(67294),r=n(73338),i=n(75680),a=n(61953),l=n(67836),c=n(80562),u=n(50853),d=n(11163),x=n.n(d),p=n(91359),f=n(75084),m=n(41664),h=n.n(m),j=n(21609);let g=e=>{let{btnNew:t,btnPrint:n}=e,s=x();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,o.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,o.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&(0,o.jsx)(h(),{href:"".concat(s.pathname,"/novo"),children:(0,o.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"ic:outline-plus"}),children:"Novo"})})]})})})},w=e=>(0,o.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)(u.M,{})]}),(0,o.jsx)(a.Z,{children:(0,o.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint})})]}),b=e=>{let{rows:t,columns:n,buttonsHeader:a}=e,[l]=(0,s.useState)(t),[c,u]=(0,s.useState)(10),[d,x]=(0,s.useState)(""),[p,f]=(0,s.useState)([]),m=e=>{x(e);let t=e.toLowerCase().split(" ").filter(e=>""!==e),n=l.filter(e=>t.every(t=>Object.keys(e).some(n=>-1!==e[n].toString().toLowerCase().indexOf(t))));e.length&&n.length>0?f(n):f([])};return(0,o.jsx)(r._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:d?p:l,onPageSizeChange:e=>u(e),componentsProps:{toolbar:{value:d,clearSearch:()=>m(""),onChange:e=>m(e.target.value),buttonsHeader:a}}})};var v=b}},function(e){e.O(0,[359,774,888,179],function(){return e(e.s=94516)}),_N_E=e.O()}]);