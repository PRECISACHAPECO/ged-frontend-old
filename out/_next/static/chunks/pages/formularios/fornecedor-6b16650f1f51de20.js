(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7463],{59424:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/fornecedor",function(){return t(14948)}])},47842:function(e,r,t){"use strict";var o=t(85893),n=t(70754),a=t(61953);let s=()=>(0,o.jsx)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%"},children:(0,o.jsx)(n.Z,{})});r.Z=s},46749:function(e,r,t){"use strict";t.d(r,{Lo:function(){return p},OD:function(){return u},OE:function(){return h},OL:function(){return d},g_:function(){return m}});var o=t(85893),n=t(29630),a=t(41664),s=t.n(a),i=t(7071);t(67294),t(40039);var l=t(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou o link",color:"warning"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Fornecedor concluiu preenchimento",color:"warning"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,r)=>r.map((t,a)=>{let l=r[a].field;return{...t,flex:t.size,renderCell:t=>(0,o.jsx)(s(),{href:"".concat(e,"/").concat(t.row.id),children:(0,o.jsx)(n.Z,{variant:"body2",sx:{color:"text.primary"},children:r&&r.map((e,r)=>{if(e.field===l){if("status"!=e.field)return t.row[e.field];{let n=c[t.row.status];return(0,o.jsx)(i.Z,{size:"small",skin:"light",color:n.color,label:n.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},r)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},p=e=>{let r=e.split("/"),t=r[r.length-1];return"novo"==t?"new":"edit"},m=e=>{let r=e.split("/");return r.pop(),r.join("/")},h=e=>{let r=e.route;l.h.post(r,e.params,{responseType:"arraybuffer"}).then(e=>{let r=new Blob([e.data],{type:"application/pdf"}),t=URL.createObjectURL(r);window.open(t,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,r,t){"use strict";function o(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function n(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function a(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function s(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function i(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}t.d(r,{Bk:function(){return a},CL:function(){return i},PK:function(){return o},Tc:function(){return s},VL:function(){return n}})},82747:function(e,r,t){"use strict";function o(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,t=e.substring(0,r),o=e.substring(r),n=0,a=r-7;for(let s=r;s>=1;s--)n+=t.charAt(r-s)*a--,a<2&&(a=9);let i=n%11<2?0:11-n%11;if(i!=o.charAt(0))return!1;r+=1,t=e.substring(0,r),n=0,a=r-7;for(let l=r;l>=1;l--)n+=t.charAt(r-l)*a--,a<2&&(a=9);return(i=n%11<2?0:11-n%11)==o.charAt(1)}function n(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let o=1;o<=9;o++)t+=parseInt(e.substring(o-1,o))*(11-o);if((10==(r=10*t%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;t=0;for(let n=1;n<=10;n++)t+=parseInt(e.substring(n-1,n))*(12-n);return(10==(r=10*t%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(r,{dI:function(){return a},sw:function(){return n},zk:function(){return o}})},14948:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return eo}});var o=t(85893),n=t(67294),a=t(60664),s=t(40372),i=t(91359),l=t(60565),c=t(40039),d=t(29620),u=t(77745),p=t(95398),m=t(44642),h=t(79072),x=t(55343),f=t(67836),g=t(63366),v=t(87462),j=t(86010),Z=t(94780),C=t(41796),b=t(67074),w=t(78884),y=t(36622),F=t(70918),$=t(1588),A=t(34867);function S(e){return(0,A.Z)("MuiAlert",e)}let z=(0,$.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var P=t(80562),I=t(54235),D=(0,I.Z)((0,o.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),E=(0,I.Z)((0,o.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=(0,I.Z)((0,o.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,I.Z)((0,o.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),N=t(96903);let L=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","variant"],R=e=>{let{variant:r,color:t,severity:o,classes:n}=e,a={root:["root",`${r}${(0,y.Z)(t||o)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return(0,Z.Z)(a,S,n)},_=(0,b.ZP)(F.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[t.variant],r[`${t.variant}${(0,y.Z)(t.color||t.severity)}`]]}})(({theme:e,ownerState:r})=>{let t="light"===e.palette.mode?C._j:C.$n,o="light"===e.palette.mode?C.$n:C._j,n=r.color||r.severity;return(0,v.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&"standard"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:o(e.palette[n].light,.9),[`& .${z.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[n].main:e.palette[n].light}},n&&"outlined"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${z.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[n].main:e.palette[n].light}},n&&"filled"===r.variant&&(0,v.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main)}))}),O=(0,b.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),T=(0,b.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,r)=>r.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),H=(0,b.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),J={success:(0,o.jsx)(D,{fontSize:"inherit"}),warning:(0,o.jsx)(E,{fontSize:"inherit"}),error:(0,o.jsx)(k,{fontSize:"inherit"}),info:(0,o.jsx)(M,{fontSize:"inherit"})},V=n.forwardRef(function(e,r){var t,n;let a=(0,w.Z)({props:e,name:"MuiAlert"}),{action:s,children:i,className:l,closeText:c="Close",color:d,components:u={},componentsProps:p={},icon:m,iconMapping:h=J,onClose:x,role:f="alert",severity:Z="success",variant:C="standard"}=a,b=(0,g.Z)(a,L),y=(0,v.Z)({},a,{color:d,severity:Z,variant:C}),F=R(y),$=null!=(t=u.CloseButton)?t:P.Z,A=null!=(n=u.CloseIcon)?n:N.Z;return(0,o.jsxs)(_,(0,v.Z)({role:f,elevation:0,ownerState:y,className:(0,j.Z)(F.root,l),ref:r},b,{children:[!1!==m?(0,o.jsx)(O,{ownerState:y,className:F.icon,children:m||h[Z]||J[Z]}):null,(0,o.jsx)(T,{ownerState:y,className:F.message,children:i}),null!=s?(0,o.jsx)(H,{ownerState:y,className:F.action,children:s}):null,null==s&&x?(0,o.jsx)(H,{ownerState:y,className:F.action,children:(0,o.jsx)($,(0,v.Z)({size:"small","aria-label":c,title:c,color:"inherit",onClick:x},p.closeButton,{children:(0,o.jsx)(A,(0,v.Z)({fontSize:"small"},p.closeIcon))}))}):null]}))});var W=t(76779),B=t(75084);t(21609);var U=t(34175),q=t(82747),G=t(87536),K=t(86501);let X=e=>{var r;let{handleClose:t,openModal:s,unidades:i,setSelectedUnit:l}=e,[g,v]=(0,n.useState)(!1),{loggedUnity:j}=(0,n.useContext)(c.V),[Z,C]=(0,n.useState)(null),[b,w]=(0,n.useState)(null),[y,F]=(0,n.useState)(!1),[$,A]=(0,n.useState)(null),[S,z]=(0,n.useState)(!1);console.log("unidade logada: "+j.nomeFantasia);let{handleSubmit:P,formState:{errors:I},setValue:D,register:E}=(0,G.cI)({});console.log("\uD83D\uDE80 ~ errors:",I);let k=async e=>{e&&18===e.length&&(0,q.zk)(e)?(v(!0),await a.h.post("/formularios/fornecedor/cnpj",{unidadeID:j.unidadeID,cnpj:e}).then(r=>{console.log("\uD83D\uDE80 ~ response:",r.data),C(r.data),w(e),v(!1)})):w(null)},M=async()=>{},N=async()=>{},L=async()=>{v(!0),await a.h.post("/formularios/fornecedor/makeFornecedor",{unidadeID:j.unidadeID,cnpj:b}).then(e=>{200===e.status?(C(e.data),K.Am.success("Fornecedor habilitado com sucesso")):K.Am.error("Erro ao tornar fornecedor"),v(!1)})},R=async()=>{y||F(!0),$&&$.length>0&&(0,q.dI)($)?(console.log("sendmail: ",$),await a.h.post("/formularios/fornecedor/sendMail",{unidadeID:j.unidadeID,cnpj:b,email:$}).then(e=>{200===e.status?K.Am.success("E-mail enviado com sucesso"):K.Am.error("Erro ao enviar e-mail")})):z(!0)},_=e=>{console.log("\uD83D\uDE80 ~ onSubmit ~ values:",e)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(d.Z,{open:s,onClose:t,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(u.Z,{id:"form-dialog-title",children:"Habilitar novo fornecedor"}),(0,o.jsxs)(p.Z,{children:[(0,o.jsxs)(m.Z,{sx:{mb:3},children:["Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa ficar\xe1 apta a preencher formul\xe1rios para a ",j.nomeFantasia,"."]}),(0,o.jsx)("form",{onSubmit:P(_),children:(0,o.jsxs)(h.ZP,{container:!0,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(f.Z,{defaultValue:(null==Z?void 0:Z.cnpj)?Z.cnpj:"",label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",...E("cnpj",{required:!0,validate:e=>(0,q.zk)(e)||"CNPJ inv\xe1lido"}),error:null==I?void 0:I.cnpj,helperText:null===(r=I.cnpj)||void 0===r?void 0:r.message,inputProps:{maxLength:18,onChange(e){C(null),D("cnpj",(0,U.PK)(e.target.value)),k(e.target.value),F(!1)}}})})}),Z&&Z.isFornecedor&&!Z.hasFormulario&&y&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,o.jsx)(x.Z,{fullWidth:!0,children:(0,o.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...E("email",{required:!0,validate:e=>e.includes("@")||"E-mail inv\xe1lido"}),error:S,helperText:S?"Insira um e-mail v\xe1lido":null,inputProps:{onChange(e){D("email",e.target.value),A(e.target.value),z(!(0,q.dI)(e.target.value))}}})})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,sx:{mt:2},children:(0,o.jsx)(V,{severity:"info",children:"Um e-mail ser\xe1 enviado para o fornecedor com as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio"})})]})]})}),Z&&(0,o.jsx)(h.ZP,{container:!0,sx:{mt:2},children:(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,children:Z.isFornecedor&&Z.hasFormulario?(0,o.jsxs)(V,{severity:"info",children:["Esse CNPJ j\xe1 possui formul\xe1rios preenchidos pra ",j.nomeFantasia]}):Z.isFornecedor&&!Z.hasFormulario?(0,o.jsx)(V,{severity:"success",children:"Esse CNPJ j\xe1 \xe9 seu fornecedor, mas ainda n\xe3o preencheu nenhum formul\xe1rio"}):!Z.isFornecedor&&Z.hasFormulario?(0,o.jsx)(V,{severity:"warning",children:"Esse CNPJ n\xe3o est\xe1 mais ativo como um fornecedor mas possui formul\xe1rios preenchidos"}):Z.isFornecedor||Z.hasFormulario?null:(0,o.jsx)(V,{severity:"info",children:"Esse CNPJ ainda n\xe3o \xe9 seu fornecedor"})})})]}),(0,o.jsxs)(W.Z,{className:"dialog-actions-dense",sx:{mx:2,mb:2},children:[(0,o.jsx)(B.Z,{variant:"outlined",onClick:t,children:"Cancelar"}),Z&&(0,o.jsx)(B.Z,{variant:"contained",onClick:Z.isFornecedor&&Z.hasFormulario?M:Z.isFornecedor&&!Z.hasFormulario?R:!Z.isFornecedor&&Z.hasFormulario?N:Z.isFornecedor||Z.hasFormulario?null:L,children:Z.isFornecedor&&Z.hasFormulario?"Filtrar formul\xe1rios":Z.isFornecedor&&!Z.hasFormulario?"Enviar e-mail":!Z.isFornecedor&&Z.hasFormulario?"Reativar fornecedor":Z.isFornecedor||Z.hasFormulario?null:"Tornar meu fornecedor"})]})]})})};var Q=t(47842),Y=t(11163),ee=t(46749),er=t(49837);let et=()=>{let{user:e,loggedUnity:r}=(0,n.useContext)(c.V),[t,d]=(0,n.useState)(null),u=(0,Y.useRouter)(),p=u.pathname,{setTitle:m}=(0,n.useContext)(l.f),[h,x]=(0,n.useState)(!1),f=()=>{console.log("openModalNewFornecedor"),x(!0)};(0,n.useEffect)(()=>{let e=async()=>{await a.h.get(p+"/"+r.unidadeID,{headers:{"function-name":"getList"}}).then(e=>{d(e.data),m("Fornecedor")})};e()},[]);let g=(0,ee.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Fantasia",field:"nome",size:.4},{title:"CNPJ",field:"cnpj",size:.2},{title:"Cidade",field:"cidade",size:.2},{title:"UF",field:"estado",size:.1},{title:"Status",field:"status",size:.2}]);return(0,o.jsxs)(o.Fragment,{children:[!t&&(0,o.jsx)(Q.Z,{}),t&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(er.Z,{children:(0,o.jsx)(i.Z,{sx:{pt:"0"},children:(0,o.jsx)(s.Z,{rows:t,columns:g,buttonsHeader:{btnNew:!0,btnPrint:!0,openModal:f}})})})}),(0,o.jsx)(X,{title:"Excluir dado",text:"Tem certeza que deseja excluir?",openModal:h,handleClose:()=>x(!1),btnCancel:!0,btnConfirm:!0})]})};var eo=et},40372:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var o=t(85893),n=t(67294),a=t(11163),s=t.n(a),i=t(73338),l=t(75680),c=t(61953),d=t(67836),u=t(80562),p=t(50853),m=t(91359),h=t(75084),x=t(41664),f=t.n(x),g=t(40039),v=t(21609);let j=e=>{let{btnNew:r,btnPrint:t,openModal:a}=e,i=s(),{routes:l}=(0,n.useContext)(g.V);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(m.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,o.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,o.jsx)(h.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(v.Z,{icon:"mdi:printer"}),children:"Imprimir"}),r&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,o.jsx)(f(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,o.jsx)(h.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,o.jsx)(v.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},Z=e=>(0,o.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(d.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(v.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(v.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)(p.M,{})]}),(0,o.jsx)(c.Z,{children:(0,o.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]}),C=e=>{let{rows:r,columns:t,buttonsHeader:s}=e,[c]=(0,n.useState)(r),[d,u]=(0,n.useState)(10),[p,m]=(0,n.useState)(""),[h,x]=(0,n.useState)([]),f=(0,a.useRouter)(),g=f.pathname,v=e=>{m(e);let r=e.toLowerCase().split(" ").filter(e=>""!==e),t=c.filter(e=>r.every(r=>Object.keys(e).some(t=>-1!==e[t].toString().toLowerCase().indexOf(r))));e.length&&t.length>0?x(t):x([])};return(0,o.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:d,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:Z},rows:p?h:c,onRowClick:e=>f.push("".concat(g,"/").concat(e.row.id)),onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:p,clearSearch:()=>v(""),onChange:e=>v(e.target.value),buttonsHeader:s}}})};var b=C}},function(e){e.O(0,[7536,8359,9774,2888,179],function(){return e(e.s=59424)}),_N_E=e.O()}]);