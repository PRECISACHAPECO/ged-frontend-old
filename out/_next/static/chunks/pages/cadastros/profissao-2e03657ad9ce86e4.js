(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6674],{44597:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/profissao",function(){return r(37585)}])},47842:function(t,e,r){"use strict";var a=r(85893),s=r(70754),n=r(61953);let o=()=>(0,a.jsx)(n.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,a.jsx)(s.Z,{})});e.Z=o},49540:function(t,e,r){"use strict";r.d(e,{X1:function(){return l},p6:function(){return i},q:function(){return u}});var a=r(30381),s=r.n(a),n=r(68214),o=r.n(n);function i(t,e){let r=s()(t),a=r.format(e);return a}function u(t){let e=o()(t).toString();return e}function l(t){return t.replace(/[^0-9]/g,"")}},46749:function(t,e,r){"use strict";r.d(e,{HD:function(){return x},Lo:function(){return m},OD:function(){return c},OE:function(){return p},OL:function(){return d},WR:function(){return l},g_:function(){return g}});var a=r(85893),s=r(29630);r(49540);var n=r(41664),o=r.n(n),i=r(7071);r(67294),r(40039);var u=r(60664);r(50196);let l={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(t,e)=>e.map((r,n)=>{let u=e[n].field;return{...r,flex:r.size,renderCell:r=>(0,a.jsx)(o(),{href:"".concat(t,"/").concat(r.row.id),children:(0,a.jsx)(s.Z,{variant:"body2",sx:{color:"text.primary"},children:e&&e.map((t,e)=>{if(t.field===u){if("status"!=t.field)return r.row[t.field];{let s=l[r.row.status];return(0,a.jsx)(i.Z,{size:"small",skin:"light",color:s.color,label:s.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},e)}}})})})}}),c={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=t=>{let e=t.split("/"),r=e[e.length-1];return"novo"==r?"new":"edit"},g=t=>{let e=t.split("/");return e.pop(),e.join("/")},p=t=>{let e=t.route;u.h.post(e,t.params,{responseType:"arraybuffer"}).then(t=>{let e=new Blob([t.data],{type:"application/pdf"}),r=URL.createObjectURL(e);window.open(r,"_blank")}).catch(t=>{console.error("Erro ao gerar relat\xf3rio",t)})};function x(t,e){let r=new Date;r.setUTCHours(0,0,0,0);let a=new Date(e);switch(t){case"atual":if((a=new Date(e)).setUTCHours(0,0,0,0),a.toISOString().substr(0,10)===r.toISOString().substr(0,10))return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser a data atual"};case"hoje_menor":if((a=new Date(e)).setUTCHours(0,0,0,0),a.getTime()<=r.getTime())return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser inferior ou igual a atual"};case"hoje_maior":if((a=new Date(e)).setUTCHours(0,0,0,0),a.getTime()>=r.getTime())return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser superior ou igual a atual"};case"hoje_menor_ate_1":(a=new Date(e)).setUTCHours(0,0,0,0);let s=new Date;if(s.setUTCHours(0,0,0,0),s.setFullYear(r.getFullYear()+1),a.getTime()<=r.getTime()&&a.getTime()<=s.getTime())return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser igual ou supeior at\xe9 1 ano a partir da data atual"};case"hoje_menor_ate_10":(a=new Date(e)).setUTCHours(0,0,0,0);let n=new Date;if(n.setUTCHours(0,0,0,0),n.setFullYear(r.getFullYear()+10),a.getTime()<=r.getTime()&&a.getTime()<=n.getTime())return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser igual ou supeior at\xe9 10 anos a partir da data atual"};case"hoje_menor_ate_100":(a=new Date(e)).setUTCHours(0,0,0,0);let o=new Date;if(o.setUTCHours(0,0,0,0),o.setFullYear(r.getFullYear()+100),a.getTime()<=r.getTime()&&a.getTime()<=o.getTime())return{status:!0,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10)};return{status:!1,dataIni:r.toISOString().substr(0,10),dataFim:r.toISOString().substr(0,10),message:"A data deve ser igual ou supeior at\xe9 100 anos a partir da data atual"};default:return"A data digitada \xe9 inv\xe1lida."}}},37585:function(t,e,r){"use strict";r.r(e);var a=r(85893),s=r(67294),n=r(60664),o=r(40372),i=r(91359),u=r(60565),l=r(47842),d=r(11163),c=r(46749),m=r(49837);let g=()=>{let[t,e]=(0,s.useState)(null),r=(0,d.useRouter)(),g=r.pathname,{setTitle:p}=(0,s.useContext)(u.f);(0,s.useEffect)(()=>{let t=async()=>{await n.h.get(g).then(t=>{e(t.data),p("Profiss\xe3o")})};t()},[]);let x=(0,c.OL)(g,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,a.jsxs)(a.Fragment,{children:[!t&&(0,a.jsx)(l.Z,{}),t&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m.Z,{children:(0,a.jsx)(i.Z,{sx:{pt:"0"},children:(0,a.jsx)(o.Z,{rows:t,columns:x,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};e.default=g},40372:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var a=r(85893),s=r(67294),n=r(11163),o=r.n(n),i=r(87630),u=r(75680),l=r(61953),d=r(67836),c=r(80562),m=r(50853),g=r(91359),p=r(75084),x=r(41664),f=r.n(x),S=r(40039),b=r(21609);let h=t=>{let{btnNew:e,btnPrint:r,openModal:n}=t,i=o(),{routes:u}=(0,s.useContext)(S.V);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[r&&(0,a.jsx)(p.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,a.jsx)(b.Z,{icon:"mdi:printer"}),children:"Imprimir"}),e&&u.find(t=>t.rota===i.pathname&&t.inserir)&&(0,a.jsx)(f(),{href:n?"":"".concat(i.pathname,"/novo"),children:(0,a.jsx)(p.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,a.jsx)(b.Z,{icon:"ic:outline-plus"}),onClick:n||null,children:"Novo"})})]})})})},I=t=>(0,a.jsxs)(l.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:t=>t.spacing(8,0,0,0)},children:[(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,a.jsx)(d.Z,{size:"medium",value:t.value,onChange:t.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,a.jsx)(l.Z,{sx:{mr:2,display:"flex"},children:(0,a.jsx)(b.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,a.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:t.clearSearch,children:(0,a.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,a.jsx)(m.M,{})]}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(h,{btnNew:t.buttonsHeader.btnNew,btnPrint:t.buttonsHeader.btnPrint,openModal:t.buttonsHeader.openModal})})]});var w=r(60565);let j=t=>{let{rows:e,columns:r,buttonsHeader:o}=t,{handleSearch:l,pageSize:d,setPageSize:c,searchText:m,filteredData:g,setData:p,data:x}=(0,s.useContext)(w.f);p(e);let f=(0,n.useRouter)(),S=f.pathname;return(0,a.jsx)(i._,{localeText:u.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:r,pageSize:d,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:I},rows:m?g:x,onRowClick:t=>f.push("".concat(S,"/").concat(t.row.id)),onPageSizeChange:t=>c(t),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:m,clearSearch:()=>l(""),onChange:t=>l(t.target.value),buttonsHeader:o}}})};var v=j},42480:function(){}},function(t){t.O(0,[4885,6668,8214,7630,9516,9774,2888,179],function(){return t(t.s=44597)}),_N_E=t.O()}]);