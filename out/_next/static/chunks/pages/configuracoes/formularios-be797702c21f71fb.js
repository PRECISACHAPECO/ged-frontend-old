(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6364],{92689:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios",function(){return t(73561)}])},47842:function(e,n,t){"use strict";var r=t(85893),s=t(70754),i=t(61953);let o=e=>{let{text:n}=e;return(0,r.jsxs)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=n?n:"Carregando..."})]})};n.Z=o},73561:function(e,n,t){"use strict";t.r(n);var r=t(85893),s=t(67294),i=t(60664),o=t(40372),a=t(91359),l=t(60565),c=t(47842),u=t(11163),d=t(46749),x=t(49837);let p=()=>{let[e,n]=(0,s.useState)(null),t=(0,u.useRouter)(),p=t.pathname,{setTitle:m}=(0,s.useContext)(l.f);(0,s.useEffect)(()=>{let e=async()=>{await i.h.get(p).then(e=>{n(e.data),m("Formul\xe1rios")})};e()},[]);let h=(0,d.OL)(p,[{title:"ID",field:"id",size:.2},{title:"Nome",field:"nome",size:.8}]);return(0,r.jsxs)(r.Fragment,{children:[!e&&(0,r.jsx)(c.Z,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{children:(0,r.jsx)(a.Z,{sx:{pt:"0"},children:(0,r.jsx)(o.Z,{rows:e,columns:h,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};n.default=p},40372:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(85893),s=t(67294),i=t(11163),o=t.n(i),a=t(87630),l=t(75680),c=t(61953),u=t(67836),d=t(80562),x=t(50853),p=t(91359),m=t(75084),h=t(41664),f=t.n(h),j=t(40039),g=t(21609);let Z=e=>{let{btnNew:n,btnPrint:t,openModal:i}=e,a=o(),{routes:l}=(0,s.useContext)(j.V);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,r.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),n&&l.find(e=>e.rota===a.pathname&&e.inserir)&&(0,r.jsx)(f(),{href:i?"":"".concat(a.pathname,"/novo"),children:(0,r.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:i||null,children:"Novo"})})]})})})},b=e=>(0,r.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(x.M,{})]}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var w=t(60565);let C=e=>{let{rows:n,columns:t,buttonsHeader:o}=e,{handleSearch:c,pageSize:u,setPageSize:d,searchText:x,filteredData:p,setData:m,data:h}=(0,s.useContext)(w.f);m(n);let f=(0,i.useRouter)(),j=f.pathname;return(0,r.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:x?p:h,onRowClick:e=>f.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:x,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:o}}})};var v=C}},function(e){e.O(0,[2064,7630,9516,9774,2888,179],function(){return e(e.s=92689)}),_N_E=e.O()}]);