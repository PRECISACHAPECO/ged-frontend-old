(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9288],{12504:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/atividade",function(){return o(68043)}])},47842:function(e,t,o){"use strict";var r=o(85893),n=o(70754),s=o(61953);let i=()=>(0,r.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,r.jsx)(n.Z,{})});t.Z=i},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return p},OD:function(){return u},OE:function(){return f},OL:function(){return d},WR:function(){return c},g_:function(){return x}});var r=o(85893),n=o(29630),s=o(41664),i=o.n(s),a=o(7071);o(67294),o(40039);var l=o(60664);o(50196);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((o,s)=>{let l=t[s].field;return{...o,flex:o.size,renderCell:o=>(0,r.jsx)(i(),{href:"".concat(e,"/").concat(o.row.id),children:(0,r.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let n=c[o.row.status];return(0,r.jsx)(a.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},f=e=>{let t=e.route;l.h.get(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(t);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},68043:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(67294),s=o(60664),i=o(40372),a=o(91359),l=o(60565),c=o(47842),d=o(11163),u=o(46749),p=o(49837);let x=()=>{let[e,t]=(0,n.useState)(null),o=(0,d.useRouter)(),x=o.pathname,{setTitle:f}=(0,n.useContext)(l.f);(0,n.useEffect)(()=>{let e=async()=>{await s.h.get(x).then(e=>{t(e.data),f("Atividade")})};e()},[]);let m=(0,u.OL)(x,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,r.jsxs)(r.Fragment,{children:[!e&&(0,r.jsx)(c.Z,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(a.Z,{sx:{pt:"0"},children:(0,r.jsx)(i.Z,{rows:e,columns:m,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=x},40372:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var r=o(85893),n=o(67294),s=o(11163),i=o.n(s),a=o(46852),l=o(75680),c=o(61953),d=o(67836),u=o(80562),p=o(50853),x=o(91359),f=o(75084),m=o(41664),h=o.n(m),j=o(40039),w=o(21609);let b=e=>{let{btnNew:t,btnPrint:o,openModal:s}=e,a=i(),{routes:l}=(0,n.useContext)(j.V);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[o&&(0,r.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(w.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===a.pathname&&e.inserir)&&(0,r.jsx)(h(),{href:s?"":"".concat(a.pathname,"/novo"),children:(0,r.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(w.Z,{icon:"ic:outline-plus"}),onClick:s||null,children:"Novo"})})]})})})},g=e=>(0,r.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(d.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(w.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(w.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(p.M,{})]}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(b,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var v=o(60565);let Z=e=>{let{rows:t,columns:o,buttonsHeader:i}=e,{handleSearch:c,pageSize:d,setPageSize:u,searchText:p,filteredData:x,setData:f,data:m}=(0,n.useContext)(v.f);f(t);let h=(0,s.useRouter)(),j=h.pathname;return(0,r.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:o,pageSize:d,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:g},rows:p?x:m,onRowClick:e=>h.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:i}}})};var y=Z}},function(e){e.O(0,[315,9516,9774,2888,179],function(){return e(e.s=12504)}),_N_E=e.O()}]);