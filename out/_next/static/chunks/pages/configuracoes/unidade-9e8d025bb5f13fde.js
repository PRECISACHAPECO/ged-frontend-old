(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6138],{94516:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/unidade",function(){return n(78736)}])},47842:function(e,t,n){"use strict";var r=n(85893),o=n(70754),a=n(61953);let s=()=>(0,r.jsx)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,r.jsx)(o.Z,{})});t.Z=s},49540:function(e,t,n){"use strict";n.d(t,{X1:function(){return c},p6:function(){return i},q:function(){return l}});var r=n(30381),o=n.n(r),a=n(68214),s=n.n(a);function i(e,t){let n=o()(e),r=n.format(t);return r}function l(e){let t=s()(e).toString();return t}function c(e){return e.replace(/[^0-9]/g,"")}},46749:function(e,t,n){"use strict";n.d(t,{HD:function(){return g},Lo:function(){return x},OD:function(){return p},OE:function(){return m},OL:function(){return d},WR:function(){return u},g_:function(){return f}});var r=n(85893),o=n(29630),a=n(49540),s=n(41664),i=n.n(s),l=n(7071);n(67294),n(40039);var c=n(60664);n(50196);let u={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((n,a)=>{let s=t[a].field;return{...n,flex:n.size,renderCell:n=>(0,r.jsx)(i(),{href:"".concat(e,"/").concat(n.row.id),children:(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===s){if("status"!=e.field)return n.row[e.field];{let o=u[n.row.status];return(0,r.jsx)(l.Z,{size:"small",skin:"light",color:o.color,label:o.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),p={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},x=e=>{let t=e.split("/"),n=t[t.length-1];return"novo"==n?"new":"edit"},f=e=>{let t=e.split("/");return t.pop(),t.join("/")},m=e=>{let t=e.route;c.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})};function g(e,t,n){return D(e,t,n)}function h(e,t){let n=new Date,r=new Date(n);"=="===e?r.setDate(r.getDate()+t):">="===e?r.setDate(r.getDate()+t):"<="===e&&r.setDate(r.getDate()-t);let o=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0"),i="".concat(o,"-").concat(a,"-").concat(s);return i}let D=(e,t,n)=>{console.log("\uD83D\uDE80 ~ numDays:",n);let r=new Date;r.setUTCHours(0,0,0,0);let o=new Date(t);o.setUTCHours(0,0,0,0);let s="dataAtual"==e?"==":"dataPassado"==e?"<=":"dataFutura"==e?">=":"==";if(!s)return;let i="",l="";"<="==s?(l=h(s,n),i=r.toISOString().substr(0,10)):">="==s?(l=r.toISOString().substr(0,10),i=h(s,n)):(l=r.toISOString().substr(0,10),i=r.toISOString().substr(0,10));let c="",u=()=>(console.log("type",s),c="=="==s?"A data deve ser a atual":"<="==s?"Insira uma data entre hoje e ".concat((0,a.p6)(l,"DD/MM/YYYY"),"."):">="==s?"Insira uma data entre hoje e ".concat((0,a.p6)(i,"DD/MM/YYYY"),"."):"");if(isNaN(o.getTime()))return u(),{status:!1,dataIni:l,dataFim:i,message:c};{let d=o.getTime(),p=new Date(l).getTime(),x=new Date(i).getTime(),f=d>=p&&d<=x,m=!!f;return f||m||(console.log("\xe9 diferente do periodo"),u()),{status:m,dataIni:l,dataFim:i,message:!f&&!m&&c}}}},78736:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),a=n(60664),s=n(40372),i=n(91359),l=n(60565),c=n(40039),u=n(47842),d=n(11163),p=n(46749),x=n(49837);let f=()=>{let[e,t]=(0,o.useState)(null),n=(0,d.useRouter)(),f=n.pathname,{setTitle:m}=(0,o.useContext)(l.f),{user:g,loggedUnity:h}=(0,o.useContext)(c.V);(0,o.useEffect)(()=>{let e=async()=>{await a.h.get("".concat(f,"?admin=").concat(g.admin,"&unidadeID=").concat(h.unidadeID,"&usuarioID=").concat(g.usuarioID)).then(e=>{t(e.data),m("Unidade")})};e()},[]);let D=(0,p.OL)(f,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,r.jsxs)(r.Fragment,{children:[!e&&(0,r.jsx)(u.Z,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{children:(0,r.jsx)(i.Z,{sx:{pt:"0"},children:(0,r.jsx)(s.Z,{rows:e,columns:D,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=f},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(85893),o=n(67294),a=n(11163),s=n.n(a),i=n(87630),l=n(75680),c=n(61953),u=n(67836),d=n(80562),p=n(50853),x=n(91359),f=n(75084),m=n(41664),g=n.n(m),h=n(40039),D=n(21609);let j=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,i=s(),{routes:l}=(0,o.useContext)(h.V);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,r.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(D.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,r.jsx)(g(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,r.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(D.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},w=e=>(0,r.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(D.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(D.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(p.M,{})]}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var b=n(60565);let v=e=>{let{rows:t,columns:n,buttonsHeader:s}=e,{handleSearch:c,pageSize:u,setPageSize:d,searchText:p,filteredData:x,setData:f,data:m}=(0,o.useContext)(b.f);f(t);let g=(0,a.useRouter)(),h=g.pathname;return(0,r.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:p?x:m,onRowClick:e=>g.push("".concat(h,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:s}}})};var Z=v},42480:function(){}},function(e){e.O(0,[4885,6668,8214,7630,9516,9774,2888,179],function(){return e(e.s=94516)}),_N_E=e.O()}]);