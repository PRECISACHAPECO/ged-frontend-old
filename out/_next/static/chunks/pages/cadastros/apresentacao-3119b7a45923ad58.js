(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5012],{63149:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/apresentacao",function(){return r(46703)}])},47842:function(e,t,r){"use strict";var o=r(85893),n=r(70754),s=r(61953);let i=()=>(0,o.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});t.Z=i},46749:function(e,t,r){"use strict";r.d(t,{Lo:function(){return p},OD:function(){return d},OE:function(){return f},OL:function(){return u},g_:function(){return x}});var o=r(85893),n=r(29630),s=r(41664),i=r.n(s),a=r(7071),l=r(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},u=(e,t)=>t.map((r,s)=>{let l=t[s].field;return{...r,flex:r.size,renderCell:r=>(0,o.jsx)(i(),{href:"".concat(e,"/").concat(r.row.id),children:(0,o.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===l){if("status"!=e.field)return r.row[e.field];{let n=c[r.row.status];return(0,o.jsx)(a.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),d={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let t=e.split("/"),r=t[t.length-1];return"novo"==r?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},f=e=>{let t=e.route;l.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),r=URL.createObjectURL(t);window.open(r,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},46703:function(e,t,r){"use strict";r.r(t);var o=r(85893),n=r(67294),s=r(60664),i=r(40372),a=r(91359),l=r(60565),c=r(47842),u=r(11163),d=r(46749),p=r(49837);let x=()=>{let[e,t]=(0,n.useState)(null),r=(0,u.useRouter)(),x=r.pathname,{setTitle:f}=(0,n.useContext)(l.f);(0,n.useEffect)(()=>{let e=async()=>{await s.h.get(x).then(e=>{t(e.data),f("Apresenta\xe7\xe3o")})};e()},[]);let m=(0,d.OL)(x,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,o.jsxs)(o.Fragment,{children:[!e&&(0,o.jsx)(c.Z,{}),e&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{children:(0,o.jsx)(a.Z,{sx:{pt:"0"},children:(0,o.jsx)(i.Z,{rows:e,columns:m,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=x},40372:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var o=r(85893),n=r(67294),s=r(73338),i=r(75680),a=r(61953),l=r(67836),c=r(80562),u=r(50853),d=r(11163),p=r.n(d),x=r(91359),f=r(75084),m=r(41664),h=r.n(m),j=r(21609);let g=e=>{let{btnNew:t,btnPrint:r}=e,n=p();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,o.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,o.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&(0,o.jsx)(h(),{href:"".concat(n.pathname,"/novo"),children:(0,o.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"ic:outline-plus"}),children:"Novo"})})]})})})},w=e=>(0,o.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)(u.M,{})]}),(0,o.jsx)(a.Z,{children:(0,o.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint})})]}),b=e=>{let{rows:t,columns:r,buttonsHeader:a}=e,[l]=(0,n.useState)(t),[c,u]=(0,n.useState)(10),[d,p]=(0,n.useState)(""),[x,f]=(0,n.useState)([]),m=e=>{p(e);let t=e.toLowerCase().split(" ").filter(e=>""!==e),r=l.filter(e=>t.every(t=>Object.keys(e).some(r=>-1!==e[r].toString().toLowerCase().indexOf(t))));e.length&&r.length>0?f(r):f([])};return(0,o.jsx)(s._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:r,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:d?x:l,onPageSizeChange:e=>u(e),componentsProps:{toolbar:{value:d,clearSearch:()=>m(""),onChange:e=>m(e.target.value),buttonsHeader:a}}})};var v=b}},function(e){e.O(0,[8359,9774,2888,179],function(){return e(e.s=63149)}),_N_E=e.O()}]);