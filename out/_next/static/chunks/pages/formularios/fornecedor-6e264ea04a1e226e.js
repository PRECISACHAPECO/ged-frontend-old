(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7463],{59424:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/fornecedor",function(){return o(18442)}])},45061:function(e,r,o){"use strict";var n=o(85893),a=o(75084),t=o(29620),i=o(77745),s=o(95398),l=o(76779),c=o(44642);o(21609);var d=o(55343),u=o(67836),m=o(29630),p=o(19604),x=o(67294),h=o(82747);let f=e=>{let{title:r,text:o,handleClose:f,openModal:j,handleSubmit:g,cnpj:v,inputEmail:b,btnCancel:C,btnConfirm:Z,btnCancelColor:F,btnConfirmColor:D}=e,[y,I]=(0,x.useState)(null),[w,N]=(0,x.useState)(!1);return console.log("dialog email: ",y),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.Z,{open:j,onClose:f,"aria-labelledby":"form-dialog-title",children:[(0,n.jsx)(i.Z,{id:"form-dialog-title",children:r}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{sx:{mb:3},children:o}),b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(u.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&w,inputProps:{onChange(e){I(e.target.value),N(!(0,h.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&w&&(0,n.jsx)(m.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(p.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(l.Z,{className:"dialog-actions-dense",children:[C&&(0,n.jsx)(a.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),Z&&(0,n.jsx)(a.Z,{variant:"contained",disabled:b&&(null==y?void 0:y.length)>0&&w,color:D||"error",onClick:b&&v?()=>{g(v,y),I(null),f()}:b&&!v?()=>{g(y),I(null),f()}:()=>{g(),f()},children:"Confirmar"})]})]})})};r.Z=f},47842:function(e,r,o){"use strict";var n=o(85893),a=o(70754),t=o(61953);let i=()=>(0,n.jsx)(t.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,n.jsx)(a.Z,{})});r.Z=i},49540:function(e,r,o){"use strict";o.d(r,{X1:function(){return c},p6:function(){return s},q:function(){return l}});var n=o(30381),a=o.n(n),t=o(68214),i=o.n(t);function s(e,r){let o=a()(e),n=o.format(r);return n}function l(e){let r=i()(e).toString();return r}function c(e){return e.replace(/[^0-9]/g,"")}},46749:function(e,r,o){"use strict";o.d(r,{Lo:function(){return m},OD:function(){return u},OE:function(){return x},OL:function(){return d},WR:function(){return c},g_:function(){return p}});var n=o(85893),a=o(29630),t=o(41664),i=o.n(t),s=o(7071);o(67294),o(40039);var l=o(60664);o(50196);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,r)=>r.map((o,t)=>{let l=r[t].field;return{...o,flex:o.size,renderCell:o=>(0,n.jsx)(i(),{href:"".concat(e,"/").concat(o.row.id),children:(0,n.jsx)(a.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let a=c[o.row.status];return(0,n.jsx)(s.Z,{size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let r=e.split("/"),o=r[r.length-1];return"novo"==o?"new":"edit"},p=e=>{let r=e.split("/");return r.pop(),r.join("/")},x=e=>{let r=e.route;l.h.post(r,e.params,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(r);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,r,o){"use strict";function n(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function a(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function t(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function i(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}o.d(r,{Bk:function(){return t},CL:function(){return s},PK:function(){return n},Tc:function(){return i},VL:function(){return a}})},82747:function(e,r,o){"use strict";function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,o=e.substring(0,r),n=e.substring(r),a=0,t=r-7;for(let i=r;i>=1;i--)a+=o.charAt(r-i)*t--,t<2&&(t=9);let s=a%11<2?0:11-a%11;if(s!=n.charAt(0))return!1;r+=1,o=e.substring(0,r),a=0,t=r-7;for(let l=r;l>=1;l--)a+=o.charAt(r-l)*t--,t<2&&(t=9);return(s=a%11<2?0:11-a%11)==n.charAt(1)}function a(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=0;for(let n=1;n<=9;n++)o+=parseInt(e.substring(n-1,n))*(11-n);if((10==(r=10*o%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;o=0;for(let a=1;a<=10;a++)o+=parseInt(e.substring(a-1,a))*(12-a);return(10==(r=10*o%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}o.d(r,{dI:function(){return t},sw:function(){return a},zk:function(){return n}})},18442:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return k}});var n=o(85893),a=o(67294),t=o(60664),i=o(40372),s=o(91359),l=o(60565),c=o(40039),d=o(29620),u=o(77745),m=o(95398),p=o(44642),x=o(79072),h=o(55343),f=o(67836),j=o(29630),g=o(19604),v=o(75084),b=o(76779),C=o(11163),Z=o(21609),F=o(49540),D=o(34175),y=o(82747),I=o(87536),w=o(86501),N=o(45061);let P=e=>{var r;let{handleClose:o,openModal:i,makeFornecedor:s,loadingSave:P}=e;(0,C.useRouter)();let[E,S]=(0,a.useState)(!1),{user:z,loggedUnity:$}=(0,a.useContext)(c.V),{handleSearch:k}=(0,a.useContext)(l.f),[A,T]=(0,a.useState)(null),[_,J]=(0,a.useState)(null),[L,M]=(0,a.useState)(!1),[R,O]=(0,a.useState)(null),[q,H]=(0,a.useState)(!1),[U,V]=(0,a.useState)(!1),[B,W]=(0,a.useState)(!1),[G,X]=(0,a.useState)(!1);console.log("unidade logada: "+$.nomeFantasia);let{handleSubmit:K,formState:{errors:Q},setValue:Y,register:ee}=(0,I.cI)({});console.log("\uD83D\uDE80 ~ errors:",Q),console.log("\uD83D\uDE80 ~ email:",R);let er=()=>{X(!0),setTimeout(()=>{X(!1)},5e3);let e=(0,F.q)((0,F.X1)(_)),r=(0,F.q)($.unidadeID),o=window.location.origin,n="".concat(o,"/fornecedor?c=").concat(e,"&u=").concat(r);navigator.clipboard.writeText(n)},eo=async e=>{console.log("getFornecedorByCnpj: ",e),e&&18===e.length&&((0,y.zk)(e)?(S(!0),H(!1),await t.h.post("/formularios/fornecedor/cnpj",{unidadeID:$.unidadeID,cnpj:e}).then(r=>{console.log("\uD83D\uDE80 ~ getFornecedorByCnpj response:",r.data),T(r.data),J(e),S(!1)})):(J(null),H(!0)))},en=async()=>{console.log("filtra no contexto..."),k(_),o()},ea=async()=>{S(!0),await t.h.post("/formularios/fornecedor/fornecedorStatus",{unidadeID:$.unidadeID,cnpj:_,status:1}).then(e=>{200===e.status?(T(e.data),w.Am.success("Fornecedor reativado com sucesso")):w.Am.error("Erro ao reativar fornecedor"),S(!1)})},et=()=>{W(!0)},ei=e=>{console.log("\uD83D\uDE80 ~ onSubmit ~ values:",e)};return(0,a.useEffect)(()=>{console.log("ON USEeFFECT: ",P),eo(_),T(null),K(ei),J(null),O(null)},[i,P]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{open:i,onClose:o,"aria-labelledby":"form-dialog-title",children:[(0,n.jsx)(u.Z,{id:"form-dialog-title",children:"Habilitar novo fornecedor"}),(0,n.jsxs)(m.Z,{children:[(0,n.jsxs)(p.Z,{sx:{mb:3},children:["Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa ficar\xe1 apta a preencher formul\xe1rios para a ",$.nomeFantasia,"."]}),(0,n.jsx)("form",{onSubmit:K(ei),children:(0,n.jsxs)(x.ZP,{container:!0,children:[(0,n.jsx)(x.ZP,{item:!0,xs:12,md:12,children:(0,n.jsxs)(h.Z,{fullWidth:!0,children:[(0,n.jsx)(f.Z,{defaultValue:(null==A?void 0:A.cnpj)?A.cnpj:"",label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",error:q,...ee("cnpj",{required:!0,validate:e=>(0,y.zk)(e)||"CNPJ inv\xe1lido"}),helperText:null===(r=Q.cnpj)||void 0===r?void 0:r.message,inputProps:{maxLength:18,onChange(e){T(null),Y("cnpj",(0,D.PK)(e.target.value)),J((0,D.PK)(e.target.value)),eo(e.target.value),M(!1)}}}),q&&(0,n.jsx)(j.Z,{variant:"body2",color:"error",children:"Por favor, insira um CNPJ v\xe1lido!"})]})}),A&&A.isFornecedor&&!A.hasFormulario&&L&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,n.jsx)(h.Z,{fullWidth:!0,children:(0,n.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...ee("email",{required:!0,validate:e=>e.includes("@")||"E-mail inv\xe1lido"}),error:U,helperText:U?"Insira um e-mail v\xe1lido":null,inputProps:{onChange(e){Y("email",e.target.value),O(e.target.value),V(!(0,y.dI)(e.target.value))}}})})}),(0,n.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:2},children:(0,n.jsx)(g.Z,{severity:"info",children:"Um e-mail ser\xe1 enviado para o fornecedor com as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio"})})]})]})}),A&&(0,n.jsx)(x.ZP,{container:!0,sx:{mt:2},children:(0,n.jsx)(x.ZP,{item:!0,xs:12,md:12,children:A.isFornecedor&&A.hasFormulario?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.Z,{severity:"success",children:["Esse CNPJ est\xe1 habilitado como um Fornecedor da ",$.nomeFantasia]}),(0,n.jsx)(v.Z,{startIcon:(0,n.jsx)(Z.Z,{icon:G?"mdi:check-bold":"iconamoon:copy-bold"}),sx:{mt:2},onClick:G?null:er,style:{cursor:G?"default":"pointer"},children:G?"Copiado!":"Copiar Link do Formul\xe1rio"})]}):A.isFornecedor&&!A.hasFormulario?(0,n.jsx)(g.Z,{severity:"warning",children:"Esse CNPJ j\xe1 \xe9 seu fornecedor, mas n\xe3o h\xe1 nenhum formul\xe1rio criado"}):!A.isFornecedor&&A.hasFormulario?(0,n.jsx)(g.Z,{severity:"warning",children:"Esse CNPJ n\xe3o est\xe1 mais ativo como um fornecedor mas possui formul\xe1rios preenchidos"}):A.isFornecedor||A.hasFormulario?null:(0,n.jsx)(g.Z,{severity:"info",children:"Esse CNPJ ainda n\xe3o \xe9 seu fornecedor"})})})]}),(0,n.jsxs)(b.Z,{className:"dialog-actions-dense",sx:{mx:2,mb:2},children:[(0,n.jsx)(v.Z,{variant:"outlined",onClick:o,children:"Fechar"}),A&&(A.isFornecedor&&A.hasFormulario||!A.isFornecedor&&A.hasFormulario||!A.isFornecedor&&!A.hasFormulario)&&(0,n.jsx)(v.Z,{variant:"contained",onClick:A.isFornecedor&&A.hasFormulario?en:!A.isFornecedor&&A.hasFormulario?ea:A.isFornecedor||A.hasFormulario?null:et,children:A.isFornecedor&&A.hasFormulario?"Filtrar formul\xe1rios":!A.isFornecedor&&A.hasFormulario?"Reativar fornecedor":A.isFornecedor||A.hasFormulario?null:"Tornar meu fornecedor"})]})]}),(0,n.jsx)(N.Z,{title:"Confirmar novo fornecedor",text:"Tem certeza que deseja tornar o CNPJ ".concat(_," um fornecedor ativo na ").concat($.nomeFantasia," ? Se sim, o mesmo poder\xe1 preencher formul\xe1rios de Fornecedor para a sua empresa."),handleClose:()=>W(!1),openModal:B,handleSubmit:s,inputEmail:!0,cnpj:_,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary"})]})};var E=o(47842),S=o(46749),z=o(49837);let $=()=>{let{user:e,loggedUnity:r}=(0,a.useContext)(c.V),[o,d]=(0,a.useState)(null),u=(0,C.useRouter)(),m=u.pathname,{setTitle:p}=(0,a.useContext)(l.f),[x,h]=(0,a.useState)(!1),[f,j]=(0,a.useState)(!1);console.log("result: ",o);let g=()=>{h(!0)};(0,a.useEffect)(()=>{let o=async()=>{await t.h.post("".concat(m,"/getList"),{unidadeID:r.unidadeID,papelID:e.papelID,cnpj:e.cnpj?e.cnpj:null}).then(e=>{d(e.data),p("Fornecedor")})};o()},[f]);let v=async(o,n)=>{try{j(!0),await t.h.post("".concat(m,"/makeFornecedor"),{usuarioID:e.usuarioID,unidadeID:r.unidadeID,papelID:e.papelID,cnpj:o}).then(e=>{200===e.status?(w.Am.success("Fornecedor habilitado com sucesso"),console.log("tornou um fornecedor....."),n&&b(n,o)):w.Am.error("Erro ao tornar fornecedor"),j(!1)})}catch(a){console.log(a)}},b=(e,o)=>{if(e&&(0,y.dI)(e)){let n={unidadeID:r.unidadeID,cnpj:o,destinatario:e};t.h.post("".concat(m,"/sendMail"),{data:n}).then(e=>{w.Am.success("E-mail enviado com sucesso")}).catch(e=>{console.error("Erro ao enviar email",e)})}},Z=async()=>{await t.h.post("".concat(m,"/getList"),{unidadeID:r.unidadeID,papelID:e.papelID,cnpj:e.cnpj?e.cnpj:null}).then(e=>{d(e.data),p("Fornecedor")})};(0,a.useEffect)(()=>{Z()},[f]),console.log("dados do bakc",o);let F=1==e.papelID?[{headerName:"ID",field:"id",size:.1},{headerName:"Data da Avalia\xe7\xe3o",field:"dataAvaliacao",size:.2},{headerName:"Nome Fantasia",field:"fantasia",size:.4},{headerName:"CNPJ",field:"cnpj",size:.1},{headerName:"Cidade",field:"cidade",size:.2},{headerName:"Status",field:"status",size:.2}]:[{headerName:"ID",field:"id",size:.1},{headerName:"Data da Avalia\xe7\xe3o",field:"dataAvaliacao",size:.2},{headerName:"F\xe1brica",field:"fabrica",size:.4},{headerName:"CNPJ",field:"cnpjFabrica",size:.2},{headerName:"Cidade",field:"cidade",size:.2},{headerName:"Status",field:"status",size:.2}],D=(0,S.OL)(m,F);return(0,n.jsxs)(n.Fragment,{children:[!o&&(0,n.jsx)(E.Z,{}),o&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(z.Z,{children:(0,n.jsx)(s.Z,{sx:{pt:"0"},children:(0,n.jsx)(i.Z,{rows:o,columns:D,buttonsHeader:{btnNew:1==e.papelID,btnPrint:!0,openModal:1==e.papelID?g:null}})})})}),(0,n.jsx)(P,{openModal:x,handleClose:()=>h(!1),makeFornecedor:v,loadingSave:f})]})};var k=$},40372:function(e,r,o){"use strict";o.d(r,{Z:function(){return F}});var n=o(85893),a=o(67294),t=o(11163),i=o.n(t),s=o(87630),l=o(75680),c=o(61953),d=o(67836),u=o(80562),m=o(50853),p=o(91359),x=o(75084),h=o(41664),f=o.n(h),j=o(40039),g=o(21609);let v=e=>{let{btnNew:r,btnPrint:o,openModal:t}=e,s=i(),{routes:l}=(0,a.useContext)(j.V);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[o&&(0,n.jsx)(x.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),r&&l.find(e=>e.rota===s.pathname&&e.inserir)&&(0,n.jsx)(f(),{href:t?"":"".concat(s.pathname,"/novo"),children:(0,n.jsx)(x.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:t||null,children:"Novo"})})]})})})},b=e=>(0,n.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,n.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,n.jsx)(d.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,n.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,n.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,n.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,n.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,n.jsx)(m.M,{})]}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(v,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var C=o(60565);let Z=e=>{let{rows:r,columns:o,buttonsHeader:i}=e,{handleSearch:c,pageSize:d,setPageSize:u,searchText:m,filteredData:p,setData:x,data:h}=(0,a.useContext)(C.f);x(r);let f=(0,t.useRouter)(),j=f.pathname;return(0,n.jsx)(s._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:o,pageSize:d,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:m?p:h,onRowClick:e=>f.push("".concat(j,"/").concat(e.row.id)),onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:m,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:i}}})};var F=Z},42480:function(){}},function(e){e.O(0,[4885,7536,2064,7630,9516,8214,9774,2888,179],function(){return e(e.s=59424)}),_N_E=e.O()}]);