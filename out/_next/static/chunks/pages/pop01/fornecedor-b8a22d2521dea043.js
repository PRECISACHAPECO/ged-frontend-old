(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{49998:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pop01/fornecedor",function(){return s(58827)}])},47842:function(e,t,s){"use strict";var n=s(85893),o=s(70754),r=s(61953);let i=()=>(0,n.jsx)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(o.Z,{})});t.Z=i},46749:function(e,t,s){"use strict";s.d(t,{Lo:function(){return u},OD:function(){return d},OL:function(){return c},g_:function(){return x}});var n=s(85893),o=s(29630),r=s(41664),i=s.n(r),a=s(7071);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"}},c=(e,t)=>t.map((s,r)=>{let c=t[r].field;return{...s,flex:s.size,renderCell:s=>(0,n.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:(0,n.jsx)(i(),{href:"".concat(e,"/").concat(s.row.id),children:t&&t.map((e,t)=>{if(e.field===c){if("status"!=e.field)return s.row[e.field];{let o=l[s.row.status];return(0,n.jsx)(a.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),d={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},u=e=>{let t=e.split("/"),s=t[t.length-1];return"novo"==s?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")}},58827:function(e,t,s){"use strict";s.r(t);var n=s(85893),o=s(67294),r=s(60664),i=s(90879),a=s(91359),l=s(60565),c=s(40039),d=s(47842),u=s(11163),x=s(46749),p=s(49837);let f=()=>{let{user:e}=(0,o.useContext)(c.V),[t,s]=(0,o.useState)(null),f=(0,u.useRouter)(),m=f.pathname,{setTitle:h}=(0,o.useContext)(l.f);(0,o.useEffect)(()=>{let t=async()=>{await r.h.get(m+"/"+e.unidadeID,{headers:{"function-name":"getList"}}).then(e=>{s(e.data),h("Fornecedor")})};t()},[]);let j=(0,x.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome Fantasia",field:"nomeFantasia",size:.5},{title:"CNPJ",field:"cnpj",size:.2},{title:"Cidade",field:"cidade",size:.2},{title:"UF",field:"estado",size:.1},{title:"Status",field:"status",size:.1}]);return(0,n.jsxs)(n.Fragment,{children:[!t&&(0,n.jsx)(d.Z,{}),t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{children:(0,n.jsx)(a.Z,{sx:{pt:"0"},children:(0,n.jsx)(i.Z,{rows:t,columns:j,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=f},90879:function(e,t,s){"use strict";s.d(t,{Z:function(){return Z}});var n=s(85893),o=s(67294),r=s(73338),i=s(75680),a=s(61953),l=s(67836),c=s(80562),d=s(50853),u=s(11163),x=s.n(u),p=s(91359),f=s(75084),m=s(41664),h=s.n(m),j=s(21609);let g=e=>{let{btnNew:t,btnPrint:s}=e,o=x();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,n.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[s&&(0,n.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&(0,n.jsx)(h(),{href:"".concat(o.pathname,"/novo"),children:(0,n.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(j.Z,{icon:"ic:outline-plus"}),children:"Novo"})})]})})})},b=e=>(0,n.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,n.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,n.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,n.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,n.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,n.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,n.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,n.jsx)(d.M,{})]}),(0,n.jsx)(a.Z,{children:(0,n.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint})})]}),w=e=>{let{rows:t,columns:s,buttonsHeader:a}=e,[l]=(0,o.useState)(t),[c,d]=(0,o.useState)(10),[u,x]=(0,o.useState)(""),[p,f]=(0,o.useState)([]),m=e=>{x(e);let t=e.toLowerCase().split(" ").filter(e=>""!==e),s=l.filter(e=>t.every(t=>Object.keys(e).some(s=>-1!==e[s].toString().toLowerCase().indexOf(t))));e.length&&s.length>0?f(s):f([])};return(0,n.jsx)(r._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:s,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:u?p:l,onPageSizeChange:e=>d(e),componentsProps:{toolbar:{value:u,clearSearch:()=>m(""),onChange:e=>m(e.target.value),buttonsHeader:a}}})};var Z=w}},function(e){e.O(0,[359,774,888,179],function(){return e(e.s=49998)}),_N_E=e.O()}]);