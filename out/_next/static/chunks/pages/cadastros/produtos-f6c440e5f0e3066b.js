(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1132],{51756:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/produtos",function(){return n(58993)}])},47842:function(e,t,n){"use strict";var o=n(85893),r=n(70754),a=n(61953);let s=()=>(0,o.jsx)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(r.Z,{})});t.Z=s},49540:function(e,t,n){"use strict";n.d(t,{X1:function(){return c},p6:function(){return i},q:function(){return l}});var o=n(30381),r=n.n(o),a=n(68214),s=n.n(a);function i(e,t){let n=r()(e),o=n.format(t);return o}function l(e){let t=s()(e).toString();return t}function c(e){return e.replace(/[^0-9]/g,"")}},46749:function(e,t,n){"use strict";n.d(t,{HD:function(){return g},Lo:function(){return x},OD:function(){return p},OE:function(){return m},OL:function(){return d},WR:function(){return u},g_:function(){return f}});var o=n(85893),r=n(29630),a=n(49540),s=n(41664),i=n.n(s),l=n(7071);n(67294),n(40039);var c=n(60664);n(50196);let u={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,t)=>t.map((n,a)=>{let s=t[a].field;return{...n,flex:n.size,renderCell:n=>(0,o.jsx)(i(),{href:"".concat(e,"/").concat(n.row.id),children:(0,o.jsx)(r.Z,{variant:"body2",sx:{color:"text.primary"},children:t&&t.map((e,t)=>{if(e.field===s){if("status"!=e.field)return n.row[e.field];{let r=u[n.row.status];return(0,o.jsx)(l.Z,{size:"small",skin:"light",color:r.color,label:r.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},t)}}})})})}}),p={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},x=e=>{let t=e.split("/"),n=t[t.length-1];return"novo"==n?"new":"edit"},f=e=>{let t=e.split("/");return t.pop(),t.join("/")},m=e=>{let t=e.route;c.h.post(t,e.params,{responseType:"arraybuffer"}).then(e=>{let t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})};function g(e,t,n){return j(e,t,n)}function h(e,t){let n=new Date,o=new Date(n);"=="===e?o.setDate(o.getDate()+t):">="===e?o.setDate(o.getDate()+t):"<="===e&&o.setDate(o.getDate()-t);let r=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0"),i="".concat(r,"-").concat(a,"-").concat(s);return i}let j=(e,t,n)=>{console.log("\uD83D\uDE80 ~ numDays:",n);let o=new Date;o.setUTCHours(0,0,0,0);let r=new Date(t);r.setUTCHours(0,0,0,0);let s="dataAtual"==e?"==":"dataPassado"==e?"<=":"dataFutura"==e?">=":"==";if(!s)return;let i="",l="";"<="==s?(l=h(s,n),i=o.toISOString().substr(0,10)):">="==s?(l=o.toISOString().substr(0,10),i=h(s,n)):(l=o.toISOString().substr(0,10),i=o.toISOString().substr(0,10));let c="",u=()=>(console.log("type",s),c="=="==s?"A data deve ser a atual":"<="==s?"Insira uma data entre hoje e ".concat((0,a.p6)(l,"DD/MM/YYYY"),"."):">="==s?"Insira uma data entre hoje e ".concat((0,a.p6)(i,"DD/MM/YYYY"),"."):"");if(isNaN(r.getTime()))return u(),{status:!1,dataIni:l,dataFim:i,message:c};{let d=r.getTime(),p=new Date(l).getTime(),x=new Date(i).getTime(),f=d>=p&&d<=x,m=!!f;return f||m||(console.log("\xe9 diferente do periodo"),u()),{status:m,dataIni:l,dataFim:i,message:!f&&!m&&c}}}},58993:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(67294),a=n(60664),s=n(40372),i=n(91359),l=n(60565),c=n(40039),u=n(47842),d=n(11163),p=n(46749),x=n(49837);let f=()=>{let[e,t]=(0,r.useState)(null),n=(0,d.useRouter)(),f=n.pathname,{setTitle:m}=(0,r.useContext)(l.f),{user:g,loggedUnity:h}=(0,r.useContext)(c.V);(0,r.useEffect)(()=>{let e=async()=>{await a.h.post(f,{unidadeID:h.unidadeID}).then(e=>{t(e.data),m("Produto")})};e()},[]);let j=(0,p.OL)(f,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.6},{title:"Unidade de Medida",field:"unidadeMedida",size:.2},{title:"Status",field:"status",size:.1}]);return(0,o.jsxs)(o.Fragment,{children:[!e&&(0,o.jsx)(u.Z,{}),e&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(i.Z,{sx:{pt:"0"},children:(0,o.jsx)(s.Z,{rows:e,columns:j,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};f.acl={action:"read",subject:"acl-page"},t.default=f},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var o=n(85893),r=n(67294),a=n(11163),s=n.n(a),i=n(87630),l=n(75680),c=n(61953),u=n(67836),d=n(80562),p=n(50853),x=n(91359),f=n(75084),m=n(41664),g=n.n(m),h=n(40039),j=n(21609);let w=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,i=s(),{routes:l}=(0,r.useContext)(h.V);return console.log("rota banco",l[10]),console.log("rota navbegador",i.pathname),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,o.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,o.jsx)(f.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,o.jsx)(g(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,o.jsx)(f.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},b=e=>(0,o.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(u.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(d.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)(p.M,{})]}),(0,o.jsx)(c.Z,{children:(0,o.jsx)(w,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var D=n(60565);let v=e=>{let{rows:t,columns:n,buttonsHeader:s}=e,{handleSearch:c,pageSize:u,setPageSize:d,searchText:p,filteredData:x,setData:f,data:m}=(0,r.useContext)(D.f);f(t);let g=(0,a.useRouter)(),h=g.pathname;return(0,o.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:p?x:m,onRowClick:e=>g.push("".concat(h,"/").concat(e.row.id)),onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:s}}})};var Z=v},42480:function(){}},function(e){e.O(0,[4885,6668,8214,7630,9516,9774,2888,179],function(){return e(e.s=51756)}),_N_E=e.O()}]);