(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3825],{19604:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(63366),a=n(87462),o=n(67294),l=n(86010),i=n(94780),s=n(41796),d=n(67074),c=n(78884),u=n(36622),p=n(70918),m=n(1588),f=n(34867);function v(e){return(0,f.Z)("MuiAlert",e)}let h=(0,m.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var g=n(80562),x=n(54235),Z=n(85893),C=(0,x.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),j=(0,x.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),$=(0,x.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),b=(0,x.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=n(96903);let A=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","variant"],S=e=>{let{variant:t,color:n,severity:r,classes:a}=e,o={root:["root",`${t}${(0,u.Z)(n||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(o,v,a)},w=(0,d.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,u.Z)(n.color||n.severity)}`]]}})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode?s._j:s.$n,r="light"===e.palette.mode?s.$n:s._j,o=t.color||t.severity;return(0,a.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:n(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:r(e.palette[o].light,.9),[`& .${h.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[o].main:e.palette[o].light}},o&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:n(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${h.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[o].main:e.palette[o].light}},o&&"filled"===t.variant&&(0,a.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main)}))}),M=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),k=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),I={success:(0,Z.jsx)(C,{fontSize:"inherit"}),warning:(0,Z.jsx)(j,{fontSize:"inherit"}),error:(0,Z.jsx)($,{fontSize:"inherit"}),info:(0,Z.jsx)(b,{fontSize:"inherit"})},N=o.forwardRef(function(e,t){var n,o;let i=(0,c.Z)({props:e,name:"MuiAlert"}),{action:s,children:d,className:u,closeText:p="Close",color:m,components:f={},componentsProps:v={},icon:h,iconMapping:x=I,onClose:C,role:j="alert",severity:$="success",variant:b="standard"}=i,N=(0,r.Z)(i,A),z=(0,a.Z)({},i,{color:m,severity:$,variant:b}),L=S(z),E=null!=(n=f.CloseButton)?n:g.Z,R=null!=(o=f.CloseIcon)?o:y.Z;return(0,Z.jsxs)(w,(0,a.Z)({role:j,elevation:0,ownerState:z,className:(0,l.Z)(L.root,u),ref:t},N,{children:[!1!==h?(0,Z.jsx)(M,{ownerState:z,className:L.icon,children:h||x[$]||I[$]}):null,(0,Z.jsx)(P,{ownerState:z,className:L.message,children:d}),null!=s?(0,Z.jsx)(k,{ownerState:z,className:L.action,children:s}):null,null==s&&C?(0,Z.jsx)(k,{ownerState:z,className:L.action,children:(0,Z.jsx)(E,(0,a.Z)({size:"small","aria-label":p,title:p,color:"inherit",onClick:C},v.closeButton,{children:(0,Z.jsx)(R,(0,a.Z)({fontSize:"small"},v.closeIcon))}))}):null]}))});var z=N},91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(94780),s=n(67074),d=n(78884),c=n(1588),u=n(34867);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var m=n(85893);let f=["className","component"],v=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)},h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:o,component:i="div"}=n,s=(0,a.Z)(n,f),c=(0,r.Z)({},n,{component:i}),u=v(c);return(0,m.jsx)(h,(0,r.Z)({as:i,className:(0,l.Z)(u.root,o),ownerState:c,ref:t},s))});var x=g},49837:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(94780),s=n(67074),d=n(78884),c=n(70918),u=n(1588),p=n(34867);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=n(85893);let v=["className","raised"],h=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)},g=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCard"}),{className:o,raised:i=!1}=n,s=(0,a.Z)(n,v),c=(0,r.Z)({},n,{raised:i}),u=h(c);return(0,f.jsx)(g,(0,r.Z)({className:(0,l.Z)(u.root,o),elevation:i?8:void 0,ref:t,ownerState:c},s))});var Z=x},3511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/esqueceu-sua-senha",function(){return n(9361)}])},34175:function(e,t,n){"use strict";function r(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function a(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function o(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function l(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function i(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(t,{Bk:function(){return o},CL:function(){return i},PK:function(){return r},Tc:function(){return l},VL:function(){return a}})},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),a=0,o=t-7;for(let l=t;l>=1;l--)a+=n.charAt(t-l)*o--,o<2&&(o=9);let i=a%11<2?0:11-a%11;if(i!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),a=0,o=t-7;for(let s=t;s>=1;s--)a+=n.charAt(t-s)*o--,o<2&&(o=9);return(i=a%11<2?0:11-a%11)==r.charAt(1)}function a(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let a=1;a<=10;a++)n+=parseInt(e.substring(a-1,a))*(12-a);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return o},sw:function(){return a},zk:function(){return r}})},9361:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(41664),o=n.n(a),l=n(60664),i=n(61953),s=n(75084),d=n(67836),c=n(29630),u=n(91359),p=n(67074),m=n(62097),f=n(49837),v=n(55343),h=n(21609);n(30152);var g=n(88942),x=n(32414),Z=n(67294),C=n(87536),j=n(34175),$=n(82747),b=n(11163),y=n.n(b),A=n(86501),S=n(41099),w=n(19604);let M=(0,p.ZP)(f.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:450}}}),P=()=>{var e,t,n;let a=(0,m.Z)(),[p,f]=(0,Z.useState)(),[g,b]=(0,Z.useState)(),[P,k]=(0,Z.useState)(),I=y(),N=null==g?void 0:null===(e=g.email)||void 0===e?void 0:e.replace(/^(.{3}).*@/,"$1****@");(0,Z.useEffect)(()=>{f(I.query.type)},[]);let{handleSubmit:z,formState:{errors:L},setValue:E,register:R}=(0,C.cI)({});function D(e){b(""),"login"==p&&14==e.length&&(0,$.sw)(e)?l.h.post("esqueceuSenha/validation?type=".concat(p),{data:e}).then(e=>{b(e.data)}):"fornecedor"==p&&18==e.length&&(0,$.zk)(e)&&(console.log("ENVIA PRO BACKEND"),l.h.post("esqueceuSenha/validation?type=".concat(p),{data:e}).then(e=>{b(e.data)}))}console.log("errors",L);let _=e=>{let t={...e,email:null==g?void 0:g.email,nome:null==g?void 0:g.nome,usuarioID:null==g?void 0:g.usuarioID};l.h.post("/esqueceuSenha?type=".concat(p),{data:t}).then(e=>{200===e.status?A.Am.success("Email enviado com sucesso!"):A.Am.error("Erro ao enviar email, tente novamente!")})};return(0,r.jsxs)(i.Z,{className:"content-center",children:[(0,r.jsx)(M,{sx:{zIndex:1},style:{width:"min(500px, 96%)"},children:(0,r.jsxs)(u.Z,{sx:{p:e=>"".concat(e.spacing(15.5,7,8)," !important")},children:[(0,r.jsx)(i.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(S.Z,{})}),(0,r.jsxs)(i.Z,{sx:{mb:6.5},children:[(0,r.jsx)(c.Z,{variant:"h5",sx:{mb:1.5,letterSpacing:"0.18px",fontWeight:600},children:"Esqueceu sua senha? \uD83D\uDD12"}),(0,r.jsx)(c.Z,{variant:"body2",children:"login"===p?"Digite seu CPF e enviaremos instru\xe7\xf5es para redefinir sua senha":"Digite seu CNPJ e enviaremos instru\xe7\xf5es para redefinir sua senha"})]}),(0,r.jsxs)("form",{onSubmit:z(_),children:["login"===p?(0,r.jsx)(v.Z,{fullWidth:!0,children:(0,r.jsx)(d.Z,{label:"CPF",placeholder:"CPF","aria-describedby":"validation-schema-nome",name:"cpf",...R("cpf",{required:!0,validate:e=>(0,$.sw)(e)||"CPF inv\xe1lido"}),error:L.cpf,helperText:null===(t=L.cpf)||void 0===t?void 0:t.message,inputProps:{maxLength:14,onChange(e){E("cpf",(0,j.VL)(e.target.value)),D(e.target.value),k(e.target.value)}}})}):(0,r.jsx)(v.Z,{fullWidth:!0,children:(0,r.jsx)(d.Z,{label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",...R("cnpj",{required:!0,validate:e=>(0,$.zk)(e)||"CNPJ inv\xe1lido"}),error:null==L?void 0:L.cnpj,helperText:null==L?void 0:null===(n=L.cnpj)||void 0===n?void 0:n.message,inputProps:{maxLength:18,onChange(e){E("cnpj",(0,j.PK)(e.target.value)),D(e.target.value),k(e.target.value)}}})}),(null==g?void 0:g.email)&&(0,$.dI)(null==g?void 0:g.email)&&(0,r.jsx)(w.Z,{severity:"info",sx:{mt:2},children:(0,r.jsxs)(c.Z,{variant:"body2",children:["Um link para a redefini\xe7\xe3o da senha ser\xe1 enviado para ",N]})}),!g&&(null==P?void 0:P.length)==("login"==p?14:18)&&(0,r.jsx)(w.Z,{severity:"error",sx:{mt:2},children:(0,r.jsxs)(c.Z,{variant:"body2",children:["Esse ","login"==p?"CPF":"CNPJ"," n\xe3o est\xe1 na nossa base de dados!"]})}),(0,r.jsx)(s.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25,mt:4},disabled:!(null==g?void 0:g.email)||!(0,$.dI)(null==g?void 0:g.email),children:"Enviar"}),(0,r.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(c.Z,{component:o(),href:"login"===p?"/login":"/fornecedor",sx:{display:"flex","& svg":{mr:1.5},alignItems:"center",color:"primary.main",textDecoration:"none",justifyContent:"center"},children:[(0,r.jsx)(h.Z,{icon:"mdi:chevron-left",fontSize:"2rem"}),(0,r.jsx)("span",{children:"Voltar para o login"})]})})]})]})}),(0,r.jsx)(x.Z,{image:"/images/pages/auth-v1-forgot-password-mask-".concat(a.palette.mode,".png")})]})};P.getLayout=e=>(0,r.jsx)(g.Z,{children:e}),P.guestGuard=!0,t.default=P},32414:function(e,t,n){"use strict";var r=n(85893),a=n(61225),o=n(67074),l=n(62097);let i=(0,o.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"10%"}}}),s=e=>{let{image:t}=e,n=(0,l.Z)(),o=(0,a.Z)(n.breakpoints.down("md")),s=t||"/images/pages/auth-v1-login-mask-".concat(n.palette.mode,".png");return o?null:(0,r.jsx)(i,{alt:"mask",src:s})};t.Z=s}},function(e){e.O(0,[7536,9774,2888,179],function(){return e(e.s=3511)}),_N_E=e.O()}]);