(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7836],{19964:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/usuario",function(){return o(78241)}])},47842:function(e,t,o){"use strict";var n=o(85893),r=o(70754),s=o(61953);let a=()=>(0,n.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(r.Z,{})});t.Z=a},46749:function(e,t,o){"use strict";o.d(t,{Lo:function(){return p},OD:function(){return d},OE:function(){return f},OL:function(){return u},WR:function(){return c},g_:function(){return x}});var n=o(85893),r=o(29630),s=o(41664),a=o.n(s),i=o(7071);o(67294),o(40039);var l=o(60664);o(50196);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},u=(e,t)=>t.map((o,s)=>{let l=t[s].field;return{...o,flex:o.size,renderCell:o=>(0,n.jsx)(a(),{href:"".concat(e,"/").concat(o.row.id),children:(0,n.jsx)(r.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let r=c[o.row.status];return(0,n.jsx)(i.Z,{size:"small",skin:"light",color:r.color,label:r.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),d={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let t=e.split("/"),o=t[t.length-1];return"novo"==o?"new":"edit"},x=e=>{let t=e.split("/");return t.pop(),t.join("/")},f=e=>{let t=e.route;l.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(t);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},78241:function(e,t,o){"use strict";o.r(t);var n=o(85893),r=o(67294),s=o(60664),a=o(40372),i=o(91359),l=o(60565),c=o(40039),u=o(47842),d=o(11163),p=o(46749),x=o(49837);let f=()=>{let[e,t]=(0,r.useState)(null),o=(0,d.useRouter)(),f=o.pathname,{setTitle:m}=(0,r.useContext)(l.f),{user:h,loggedUnity:j}=(0,r.useContext)(c.V);(0,r.useEffect)(()=>{let e=async()=>{await s.h.get("".concat(f,"?unidadeID=").concat(j.unidadeID,"&papelID=").concat(j.papelID)).then(e=>{t(e.data),m("Usu\xe1rio")})};e()},[]);let w=(0,p.OL)(f,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,n.jsxs)(n.Fragment,{children:[!e&&(0,n.jsx)(u.Z,{}),e&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(i.Z,{sx:{pt:"0"},children:(0,n.jsx)(a.Z,{rows:e,columns:w,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=f},40372:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var n=o(85893),r=o(67294),s=o(11163),a=o.n(s),i=o(46852),l=o(75680),c=o(61953),u=o(67836),d=o(80562),p=o(50853),x=o(91359),f=o(75084),m=o(41664),h=o.n(m),j=o(40039),w=o(21609);let b=e=>{let{btnNew:t,btnPrint:o,openModal:s}=e,i=a(),{routes:l}=(0,r.useContext)(j.V);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[o&&(0,n.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(w.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,n.jsx)(h(),{href:s?"":"".concat(i.pathname,"/novo"),children:(0,n.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(w.Z,{icon:"ic:outline-plus"}),onClick:s||null,children:"Novo"})})]})})})},g=e=>(0,n.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,n.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,n.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,n.jsx)(w.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,n.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,n.jsx)(w.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,n.jsx)(p.M,{})]}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(b,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var v=o(60565);let Z=e=>{let{rows:t,columns:o,buttonsHeader:a}=e,{handleSearch:c,pageSize:u,setPageSize:d,searchText:p,filteredData:x,setData:f,data:m}=(0,r.useContext)(v.f);f(t);let h=(0,s.useRouter)(),j=h.pathname;return(0,n.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:o,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:g},rows:p?x:m,onRowClick:e=>h.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:a}}})};var C=Z}},function(e){e.O(0,[315,9516,9774,2888,179],function(){return e(e.s=19964)}),_N_E=e.O()}]);