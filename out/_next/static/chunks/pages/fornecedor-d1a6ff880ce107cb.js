(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1828],{75158:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(63366),i=r(87462),o=r(67294),a=r(86010),s=r(94780),l=r(41796),c=r(37743),d=r(54235),u=r(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),x=r(36622),f=r(78884),g=r(67074),v=r(1588),j=r(34867);function Z(e){return(0,j.Z)("MuiCheckbox",e)}let b=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:t,indeterminate:r,color:n}=e,o={root:["root",r&&"indeterminate",`color${(0,x.Z)(n)}`]},a=(0,s.Z)(o,Z,t);return(0,i.Z)({},t,a)},k=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,x.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,u.jsx)(h,{}),$=(0,u.jsx)(p,{}),P=(0,u.jsx)(m,{}),_=o.forwardRef(function(e,t){var r,s;let l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:p=$,indeterminate:h=!1,indeterminateIcon:m=P,inputProps:x,size:g="medium",className:v}=l,j=(0,n.Z)(l,y),Z=h?m:p,b=h?m:c,_=(0,i.Z)({},l,{color:d,indeterminate:h,size:g}),N=w(_);return(0,u.jsx)(k,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":h},x),icon:o.cloneElement(Z,{fontSize:null!=(r=Z.props.fontSize)?r:g}),checkedIcon:o.cloneElement(b,{fontSize:null!=(s=b.props.fontSize)?s:g}),ownerState:_,ref:t,className:(0,a.Z)(N.root,v)},j,{classes:N}))});var N=_},47913:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fornecedor",function(){return r(61514)}])},34175:function(e,t,r){"use strict";function n(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function i(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function o(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function a(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}r.d(t,{Bk:function(){return o},CL:function(){return s},PK:function(){return n},Tc:function(){return a},VL:function(){return i}})},82747:function(e,t,r){"use strict";function n(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),i=0,o=t-7;for(let a=t;a>=1;a--)i+=r.charAt(t-a)*o--,o<2&&(o=9);let s=i%11<2?0:11-i%11;if(s!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),i=0,o=t-7;for(let l=t;l>=1;l--)i+=r.charAt(t-l)*o--,o<2&&(o=9);return(s=i%11<2?0:11-i%11)==n.charAt(1)}function i(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let i=1;i<=10;i++)r+=parseInt(e.substring(i-1,i))*(12-i);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}r.d(t,{s:function(){return i},z:function(){return n}})},61514:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(85893),i=r(67294),o=r(41664),a=r.n(o),s=r(75084),l=r(75158),c=r(67836),d=r(58316),u=r(80562),p=r(61953),h=r(55343),m=r(61225),x=r(39063),f=r(67074),g=r(62097),v=r(32631),j=r(9041),Z=r(29630),b=r(22841),y=r(34175),w=r(82747),k=r(21609),C=r(74231),$=r(87536),P=r(47533);r(17288),r(40039);var _=r(431);let N=()=>(0,i.useContext)(_.Y);var S=r(19550),O=r(51514),z=r(30152),I=r(88942),B=r(34361);let V=(0,f.ZP)(p.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(20),paddingRight:"0 !important",[t.breakpoints.down("lg")]:{padding:t.spacing(10)}}}),W=(0,f.ZP)("img")(e=>{let{theme:t}=e;return{maxWidth:"48rem",[t.breakpoints.down("xl")]:{maxWidth:"38rem"},[t.breakpoints.down("lg")]:{maxWidth:"30rem"}}}),E=(0,f.ZP)(p.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:400},[t.breakpoints.up("lg")]:{maxWidth:450}}}),M=(0,f.ZP)(p.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.down("md")]:{maxWidth:400}}}),U=(0,f.ZP)(Z.Z)(e=>{let{theme:t}=e;return{fontWeight:600,letterSpacing:"0.18px",marginBottom:t.spacing(1.5),[t.breakpoints.down("md")]:{marginTop:t.spacing(8)}}}),D=(0,f.ZP)(b.Z)(e=>{let{theme:t}=e;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),F=C.Ry().shape({cnpj:C.Z_().required("O CNPJ \xe9 obrigat\xf3rio").min(18,"O CNPJ deve ser preenchido completamente").max(18).test("O CNPJ \xe9 v\xe1lido","O CNPJ \xe9 inv\xe1lido",e=>(0,w.z)(e)),password:C.Z_().min(4,"A senha deve conter pelo menos 4 caracteres").required("A senha \xe9 obrigat\xf3ria")}),L={password:"",cnpj:""},A=e=>{let{units:t}=e,[r,o]=(0,i.useState)(!0),[f,b]=(0,i.useState)(!1),w=N(),C=(0,g.Z)();(0,S.Z)();let{settings:_}=(0,O.r)(),I=(0,m.Z)(C.breakpoints.down("md")),{skin:A}=_,{control:J,setError:R,handleSubmit:q,formState:{errors:H}}=(0,$.cI)({defaultValues:L,mode:"onBlur",resolver:(0,P.X)(F)}),T=e=>{let{cnpj:t,password:n}=e;w.login({cnpj:t,password:n,rememberMe:r},()=>{R("cnpj",{type:"manual",message:"CNPJ e/ou senha inv\xe1lidos!"})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(p.Z,{className:"content-right",children:[I?null:(0,n.jsxs)(p.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)(V,{children:(0,n.jsx)(W,{alt:"login-illustration",src:"/images/pages/".concat("bordered"===A?"auth-v2-login-illustration-bordered":"auth-v2-login-illustration","-").concat(C.palette.mode,".png")})}),(0,n.jsx)(B.Z,{})]}),(0,n.jsx)(E,{sx:"bordered"!==A||I?{}:{borderLeft:"1px solid ".concat(C.palette.divider)},children:(0,n.jsx)(p.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,n.jsxs)(M,{children:[(0,n.jsxs)(p.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:[(0,n.jsxs)("svg",{width:47,fill:"none",height:26,viewBox:"0 0 268 150",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:C.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint0_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:C.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:C.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint1_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:C.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"}),(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint0_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{}),(0,n.jsx)("stop",{offset:"1",stopOpacity:"0"})]}),(0,n.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint1_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{}),(0,n.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]}),(0,n.jsx)(Z.Z,{variant:"h6",sx:{ml:2,lineHeight:1,fontWeight:700,fontSize:"1.5rem !important"},children:z.Z.templateName})]}),(0,n.jsxs)(p.Z,{sx:{mb:6},children:[(0,n.jsx)(U,{variant:"h4",children:"Bem vindo Fornecedor"}),(0,n.jsx)(Z.Z,{variant:"body2",children:"Digite seu CNPJ e senha para come\xe7ar"})]}),(0,n.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:q(T),children:[(0,n.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,n.jsx)($.Qr,{name:"cnpj",control:J,rules:{required:!0},render(e){let{field:{value:t,onChange:r,onBlur:i}}=e;return(0,n.jsx)(c.Z,{autoFocus:!0,label:"CNPJ",value:(0,y.PK)(null!=t?t:""),onBlur:i,onChange:r,error:Boolean(H.cnpj),placeholder:"00.000.000/0000-00",inputProps:{maxLength:18}})}}),H.cnpj&&(0,n.jsx)(v.Z,{sx:{color:"error.main"},children:H.cnpj.message})]}),(0,n.jsxs)(h.Z,{fullWidth:!0,children:[(0,n.jsx)(d.Z,{htmlFor:"auth-login-v2-password",error:Boolean(H.password),children:"Senha"}),(0,n.jsx)($.Qr,{name:"password",control:J,rules:{required:!0},render(e){let{field:{value:t,onChange:r,onBlur:i}}=e;return(0,n.jsx)(x.Z,{value:t,onBlur:i,label:"Senha",onChange:r,id:"auth-login-v2-password",error:Boolean(H.password),type:f?"text":"password",endAdornment:(0,n.jsx)(j.Z,{position:"end",children:(0,n.jsx)(u.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:()=>b(!f),children:(0,n.jsx)(k.Z,{icon:f?"mdi:eye-outline":"mdi:eye-off-outline",fontSize:20})})})})}}),H.password&&(0,n.jsx)(v.Z,{sx:{color:"error.main"},id:"",children:H.password.message})]}),(0,n.jsxs)(p.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,n.jsx)(D,{label:"Lembrar-me",control:(0,n.jsx)(l.Z,{checked:r,onChange:e=>o(e.target.checked)})}),(0,n.jsx)(Z.Z,{variant:"body2",component:a(),href:"/forgot-password",sx:{color:"primary.main",textDecoration:"none"},children:"Esqueceu sua senha?"})]}),(0,n.jsx)(s.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Entrar"}),(0,n.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(Z.Z,{sx:{mr:2,color:"text.secondary"},children:"\xc9 um fornecedor novo?"}),(0,n.jsx)(Z.Z,{href:"/registro",component:a(),sx:{color:"primary.main",textDecoration:"none"},children:"Registre-se"})]})]})]})})})]})})};A.getLayout=e=>(0,n.jsx)(I.Z,{children:e}),A.guestGuard=!0;var J=A},34361:function(e,t,r){"use strict";var n=r(85893),i=r(61225),o=r(67074),a=r(62097);let s=(0,o.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"17.5%"}}}),l=e=>{let{image:t}=e,r=(0,a.Z)(),o=(0,i.Z)(r.breakpoints.down("md")),l=t||"/images/pages/auth-v2-login-mask-".concat(r.palette.mode,".png");return o?null:(0,n.jsx)(n.Fragment,{children:t&&"string"!=typeof t?t:(0,n.jsx)(s,{alt:"mask",src:l})})};t.Z=l},47533:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(87536),i=function(e,t,r){if(e&&"reportValidity"in e){var i=(0,n.U2)(r,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},o=function(e,t){var r=function(r){var n=t.fields[r];n&&n.ref&&"reportValidity"in n.ref?i(n.ref,r,e):n.refs&&n.refs.forEach(function(t){return i(t,r,e)})};for(var n in t.fields)r(n)},a=function(e,t){t.shouldUseNativeValidation&&o(e,t);var r={};for(var i in e){var a=(0,n.U2)(t.fields,i);(0,n.t8)(r,i,Object.assign(e[i],{ref:a&&a.ref}))}return r},s=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(i,s,l){try{return Promise.resolve(function(n,a){try{var c=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](i,Object.assign({abortEarly:!1},t,{context:s}))).then(function(e){return l.shouldUseNativeValidation&&o({},l),{values:r.rawValues?i:e,errors:{}}}))}catch(d){return a(d)}return c&&c.then?c.then(void 0,a):c}(0,function(e){var t;if(!e.inner)throw e;return{values:{},errors:a((t=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var i=e[r.path].types,o=i&&i[r.type];e[r.path]=(0,n.KN)(r.path,t,e,r.type,o?[].concat(o,r.message):r.message)}return e},{})),l)}}))}catch(c){return Promise.reject(c)}}}}},function(e){e.O(0,[7536,4231,9774,2888,179],function(){return e(e.s=47913)}),_N_E=e.O()}]);