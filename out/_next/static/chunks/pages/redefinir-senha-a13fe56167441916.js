<<<<<<<< HEAD:out/_next/static/chunks/pages/redefinir-senha-e72dbd480f227466.js
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4199],{91359:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var o=n(87462),s=n(63366),t=n(67294),a=n(86010),i=n(94780),d=n(67074),l=n(78884),c=n(1588),w=n(34867);function u(e){return(0,w.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var m=n(85893);let h=["className","component"],f=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},u,r)},x=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=t.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:t,component:i="div"}=n,d=(0,s.Z)(n,h),c=(0,o.Z)({},n,{component:i}),w=f(c);return(0,m.jsx)(x,(0,o.Z)({as:i,className:(0,a.Z)(w.root,t),ownerState:c,ref:r},d))});var p=Z},49837:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var o=n(87462),s=n(63366),t=n(67294),a=n(86010),i=n(94780),d=n(67074),l=n(78884),c=n(70918),w=n(1588),u=n(34867);function m(e){return(0,u.Z)("MuiCard",e)}(0,w.Z)("MuiCard",["root"]);var h=n(85893);let f=["className","raised"],x=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},m,r)},Z=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),p=t.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCard"}),{className:t,raised:i=!1}=n,d=(0,s.Z)(n,f),c=(0,o.Z)({},n,{raised:i}),w=x(c);return(0,h.jsx)(Z,(0,o.Z)({className:(0,a.Z)(w.root,t),elevation:i?8:void 0,ref:r,ownerState:c},d))});var v=p},19261:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/redefinir-senha",function(){return n(47791)}])},47791:function(e,r,n){"use strict";n.r(r);var o=n(85893),s=n(67294),t=n(41664),a=n.n(t),i=n(60664),d=n(61953),l=n(75084),c=n(29630),w=n(58316),u=n(80562),m=n(91359),h=n(55343),f=n(39063),x=n(67074),Z=n(62097),p=n(49837),v=n(9041),g=n(21609);n(30152);var j=n(88942),P=n(32414),N=n(41099),C=n(87536),b=n(11163),y=n.n(b),_=n(86501);let k=(0,x.ZP)(p.Z)(e=>{let{theme:r}=e;return{[r.breakpoints.up("sm")]:{width:"28rem"}}}),D=()=>{let[e,r]=(0,s.useState)({showNewPassword:!1,showConfirmNewPassword:!1}),n=y(),t=n.query.type;(0,Z.Z)();let x=()=>{r({...e,showNewPassword:!e.showNewPassword})},p=e=>{e.preventDefault()},j=()=>{r({...e,showConfirmNewPassword:!e.showConfirmNewPassword})},b=e=>{e.preventDefault()},{handleSubmit:D,formState:{errors:M},register:S,watch:A}=(0,C.cI)({}),I=e=>{let r=n.query.userId,o={senha:e.newPassword,usuarioID:r};i.h.post("/esqueceuSenha/newPassword",{data:o}).then(e=>{200===e.status?(_.Am.success("Senha redefinida com sucesso!"),n.push("login"===t?"/login":"/fornecedor")):_.Am.error("Erro ao redefinir senha!")})};return(0,o.jsxs)(d.Z,{className:"content-center",children:[(0,o.jsx)(k,{sx:{zIndex:1},children:(0,o.jsxs)(m.Z,{sx:{p:e=>"".concat(e.spacing(15.5,7,8)," !important")},children:[(0,o.jsx)(d.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(N.Z,{})}),(0,o.jsxs)(d.Z,{sx:{mb:6},children:[(0,o.jsx)(c.Z,{variant:"h5",sx:{mb:1.5,letterSpacing:"0.18px",fontWeight:600},children:"Redefinir senha \uD83D\uDD12"}),(0,o.jsx)(c.Z,{variant:"body2",children:"Sua nova senha deve ser diferente das senhas usadas anteriormente"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:D(I),children:[(0,o.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(w.Z,{htmlFor:"auth-reset-password-new-password",color:(null==M?void 0:M.newPassword)?"error":"",children:"Nova senha"}),(0,o.jsx)(f.Z,{autoFocus:!0,label:"New Password",name:"newPassword",id:"auth-reset-password-new-password",type:e.showNewPassword?"text":"password",...S("newPassword",{required:!0,validate:e=>e.length>=4||"A senha deve conter no m\xednimo 4 d\xedgitos."}),error:M.newPassword,endAdornment:(0,o.jsx)(v.Z,{position:"end",children:(0,o.jsx)(u.Z,{edge:"end",onClick:x,"aria-label":"toggle password visibility",onMouseDown:p,children:(0,o.jsx)(g.Z,{icon:e.showNewPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),M.newPassword&&(0,o.jsx)(c.Z,{variant:"caption",color:"error",children:M.newPassword.message})]}),(0,o.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(w.Z,{htmlFor:"input-confirmNewPassword",color:(null==M?void 0:M.confirmNewPassword)?"error":"",children:"Confirme a senha"}),(0,o.jsx)(f.Z,{label:"Confirm Password",name:"confirmNewPassword",id:"auth-reset-password-confirm-password",type:e.showConfirmNewPassword?"text":"password",...S("confirmNewPassword",{required:!0,validate:{matchesPassword:e=>e===A("newPassword")||"As senhas n\xe3o conferem.",minLength:e=>e.length>=4||"A senha deve conter no m\xednimo 4 d\xedgitos."}}),error:M.confirmNewPassword,endAdornment:(0,o.jsx)(v.Z,{position:"end",children:(0,o.jsx)(u.Z,{edge:"end","aria-label":"toggle password visibility",onClick:j,onMouseDown:b,children:(0,o.jsx)(g.Z,{icon:e.showConfirmNewPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),M.confirmNewPassword&&(0,o.jsx)(c.Z,{variant:"caption",color:"error",children:M.confirmNewPassword.message})]}),(0,o.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25},children:"Definir nova senha"}),(0,o.jsx)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsxs)(c.Z,{component:a(),href:"login"===t?"/login":"/fornecedor",sx:{display:"flex","& svg":{mr:1.5},alignItems:"center",color:"primary.main",textDecoration:"none",justifyContent:"center"},children:[(0,o.jsx)(g.Z,{icon:"mdi:chevron-left",fontSize:"2rem"}),(0,o.jsx)("span",{children:"Volte ao login"})]})})]})]})}),(0,o.jsx)(P.Z,{})]})};D.getLayout=e=>(0,o.jsx)(j.Z,{children:e}),D.guestGuard=!0,r.default=D},32414:function(e,r,n){"use strict";var o=n(85893),s=n(61225),t=n(67074),a=n(62097);let i=(0,t.ZP)("img")(e=>{let{theme:r}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[r.breakpoints.down("lg")]:{bottom:"10%"}}}),d=e=>{let{image:r}=e,n=(0,a.Z)(),t=(0,s.Z)(n.breakpoints.down("md")),d=r||"/images/pages/auth-v1-login-mask-".concat(n.palette.mode,".png");return t?null:(0,o.jsx)(i,{alt:"mask",src:d})};r.Z=d}},function(e){e.O(0,[7536,9774,2888,179],function(){return e(e.s=19261)}),_N_E=e.O()}]);
========
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4199],{91359:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var o=n(87462),s=n(63366),t=n(67294),a=n(86010),i=n(94780),d=n(67074),l=n(78884),c=n(1588),w=n(34867);function u(e){return(0,w.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var m=n(85893);let h=["className","component"],f=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},u,r)},x=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=t.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:t,component:i="div"}=n,d=(0,s.Z)(n,h),c=(0,o.Z)({},n,{component:i}),w=f(c);return(0,m.jsx)(x,(0,o.Z)({as:i,className:(0,a.Z)(w.root,t),ownerState:c,ref:r},d))});var p=Z},49837:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var o=n(87462),s=n(63366),t=n(67294),a=n(86010),i=n(94780),d=n(67074),l=n(78884),c=n(70918),w=n(1588),u=n(34867);function m(e){return(0,u.Z)("MuiCard",e)}(0,w.Z)("MuiCard",["root"]);var h=n(85893);let f=["className","raised"],x=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},m,r)},Z=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),p=t.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCard"}),{className:t,raised:i=!1}=n,d=(0,s.Z)(n,f),c=(0,o.Z)({},n,{raised:i}),w=x(c);return(0,h.jsx)(Z,(0,o.Z)({className:(0,a.Z)(w.root,t),elevation:i?8:void 0,ref:r,ownerState:c},d))});var v=p},19261:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/redefinir-senha",function(){return n(47791)}])},47791:function(e,r,n){"use strict";n.r(r);var o=n(85893),s=n(67294),t=n(41664),a=n.n(t),i=n(31727),d=n(61953),l=n(75084),c=n(29630),w=n(58316),u=n(80562),m=n(91359),h=n(55343),f=n(39063),x=n(67074),Z=n(62097),p=n(49837),v=n(9041),g=n(21609);n(30152);var j=n(88942),P=n(32414),N=n(41099),C=n(87536),b=n(11163),y=n.n(b),_=n(86501);let k=(0,x.ZP)(p.Z)(e=>{let{theme:r}=e;return{[r.breakpoints.up("sm")]:{width:"28rem"}}}),D=()=>{let[e,r]=(0,s.useState)({showNewPassword:!1,showConfirmNewPassword:!1}),n=y(),t=n.query.type;(0,Z.Z)();let x=()=>{r({...e,showNewPassword:!e.showNewPassword})},p=e=>{e.preventDefault()},j=()=>{r({...e,showConfirmNewPassword:!e.showConfirmNewPassword})},b=e=>{e.preventDefault()},{handleSubmit:D,formState:{errors:M},register:S,watch:A}=(0,C.cI)({}),I=e=>{let r=n.query.userId,o={senha:e.newPassword,usuarioID:r};i.h.post("/esqueceuSenha/newPassword",{data:o}).then(e=>{200===e.status?(_.Am.success("Senha redefinida com sucesso!"),n.push("login"===t?"/login":"/fornecedor")):_.Am.error("Erro ao redefinir senha!")})};return(0,o.jsxs)(d.Z,{className:"content-center",children:[(0,o.jsx)(k,{sx:{zIndex:1},children:(0,o.jsxs)(m.Z,{sx:{p:e=>"".concat(e.spacing(15.5,7,8)," !important")},children:[(0,o.jsx)(d.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(N.Z,{})}),(0,o.jsxs)(d.Z,{sx:{mb:6},children:[(0,o.jsx)(c.Z,{variant:"h5",sx:{mb:1.5,letterSpacing:"0.18px",fontWeight:600},children:"Redefinir senha \uD83D\uDD12"}),(0,o.jsx)(c.Z,{variant:"body2",children:"Sua nova senha deve ser diferente das senhas usadas anteriormente"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:D(I),children:[(0,o.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(w.Z,{htmlFor:"auth-reset-password-new-password",color:(null==M?void 0:M.newPassword)?"error":"",children:"Nova senha"}),(0,o.jsx)(f.Z,{autoFocus:!0,label:"New Password",name:"newPassword",id:"auth-reset-password-new-password",type:e.showNewPassword?"text":"password",...S("newPassword",{required:!0,validate:e=>e.length>=4||"A senha deve conter no m\xednimo 4 d\xedgitos."}),error:M.newPassword,endAdornment:(0,o.jsx)(v.Z,{position:"end",children:(0,o.jsx)(u.Z,{edge:"end",onClick:x,"aria-label":"toggle password visibility",onMouseDown:p,children:(0,o.jsx)(g.Z,{icon:e.showNewPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),M.newPassword&&(0,o.jsx)(c.Z,{variant:"caption",color:"error",children:M.newPassword.message})]}),(0,o.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(w.Z,{htmlFor:"input-confirmNewPassword",color:(null==M?void 0:M.confirmNewPassword)?"error":"",children:"Confirme a senha"}),(0,o.jsx)(f.Z,{label:"Confirm Password",name:"confirmNewPassword",id:"auth-reset-password-confirm-password",type:e.showConfirmNewPassword?"text":"password",...S("confirmNewPassword",{required:!0,validate:{matchesPassword:e=>e===A("newPassword")||"As senhas n\xe3o conferem.",minLength:e=>e.length>=4||"A senha deve conter no m\xednimo 4 d\xedgitos."}}),error:M.confirmNewPassword,endAdornment:(0,o.jsx)(v.Z,{position:"end",children:(0,o.jsx)(u.Z,{edge:"end","aria-label":"toggle password visibility",onClick:j,onMouseDown:b,children:(0,o.jsx)(g.Z,{icon:e.showConfirmNewPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),M.confirmNewPassword&&(0,o.jsx)(c.Z,{variant:"caption",color:"error",children:M.confirmNewPassword.message})]}),(0,o.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25},children:"Definir nova senha"}),(0,o.jsx)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsxs)(c.Z,{component:a(),href:"login"===t?"/login":"/fornecedor",sx:{display:"flex","& svg":{mr:1.5},alignItems:"center",color:"primary.main",textDecoration:"none",justifyContent:"center"},children:[(0,o.jsx)(g.Z,{icon:"mdi:chevron-left",fontSize:"2rem"}),(0,o.jsx)("span",{children:"Volte ao login"})]})})]})]})}),(0,o.jsx)(P.Z,{})]})};D.getLayout=e=>(0,o.jsx)(j.Z,{children:e}),D.guestGuard=!0,r.default=D},32414:function(e,r,n){"use strict";var o=n(85893),s=n(61225),t=n(67074),a=n(62097);let i=(0,t.ZP)("img")(e=>{let{theme:r}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[r.breakpoints.down("lg")]:{bottom:"10%"}}}),d=e=>{let{image:r}=e,n=(0,a.Z)(),t=(0,s.Z)(n.breakpoints.down("md")),d=r||"/images/pages/auth-v1-login-mask-".concat(n.palette.mode,".png");return t?null:(0,o.jsx)(i,{alt:"mask",src:d})};r.Z=d}},function(e){e.O(0,[7536,9774,2888,179],function(){return e(e.s=19261)}),_N_E=e.O()}]);
>>>>>>>> d3c319b72bedc60899820f5cd9d34e8bd4d33d56:out/_next/static/chunks/pages/redefinir-senha-a13fe56167441916.js