(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5012],{63149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/apresentacao",function(){return n(46703)}])},47842:function(e,t,n){"use strict";var s=n(85893),r=n(70754),i=n(61953);let a=e=>{let{text:t}=e;return(0,s.jsxs)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=a},46703:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(67294),i=n(75442),a=n(40372),o=n(91359),l=n(60565),c=n(47842),u=n(11163),d=n(46749),x=n(49837);let p=()=>{let[e,t]=(0,r.useState)(null),n=(0,u.useRouter)(),p=n.pathname,{setTitle:h}=(0,r.useContext)(l.f);(0,r.useEffect)(()=>{let e=async()=>{await i.h.get(p).then(e=>{t(e.data),h("Apresenta\xe7\xe3o")})};e()},[]);let m=(0,d.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsxs)(s.Fragment,{children:[!e&&(0,s.jsx)(c.Z,{}),e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x.Z,{children:(0,s.jsx)(o.Z,{sx:{pt:"0"},children:(0,s.jsx)(a.Z,{rows:e,columns:m,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=p},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var s=n(85893),r=n(67294),i=n(11163),a=n.n(i),o=n(87630),l=n(75680),c=n(61953),u=n(67836),d=n(80562),x=n(50853),p=n(91359),h=n(75084),m=n(41664),f=n.n(m),j=n(40039),g=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:i}=e,o=a(),{routes:l}=(0,r.useContext)(j.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,s.jsx)(h.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===o.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:i?"":"".concat(o.pathname,"/novo"),children:(0,s.jsx)(h.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:i||null,children:"Novo"})})]})})})},b=e=>(0,s.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(x.M,{})]}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var w=n(60565);let C=e=>{let{rows:t,columns:n,buttonsHeader:a}=e,{handleSearch:c,pageSize:u,setPageSize:d,searchText:x,filteredData:p,setData:h,data:m}=(0,r.useContext)(w.f);h(t);let f=(0,i.useRouter)(),j=f.pathname;return(0,s.jsx)(o._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:x?p:m,onRowClick:e=>f.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:x,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:a}}})};var v=C}},function(e){e.O(0,[2064,1082,9774,2888,179],function(){return e(e.s=63149)}),_N_E=e.O()}]);