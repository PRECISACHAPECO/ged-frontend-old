(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{75158:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),s=r(94780),l=r(41796),c=r(37743),d=r(54235),u=r(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=r(36622),x=r(78884),g=r(67074),v=r(1588),Z=r(34867);function b(e){return(0,Z.Z)("MuiCheckbox",e)}let y=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=e=>{let{classes:t,indeterminate:r,color:n}=e,i={root:["root",r&&"indeterminate",`color${(0,h.Z)(n)}`]},a=(0,s.Z)(i,b,t);return(0,o.Z)({},t,a)},w=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,h.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),k=(0,u.jsx)(m,{}),$=(0,u.jsx)(p,{}),P=(0,u.jsx)(f,{}),I=i.forwardRef(function(e,t){var r,s;let l=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=k,color:d="primary",icon:p=$,indeterminate:m=!1,indeterminateIcon:f=P,inputProps:h,size:g="medium",className:v}=l,Z=(0,n.Z)(l,j),b=m?f:p,y=m?f:c,I=(0,o.Z)({},l,{color:d,indeterminate:m,size:g}),S=C(I);return(0,u.jsx)(w,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},h),icon:i.cloneElement(b,{fontSize:null!=(r=b.props.fontSize)?r:g}),checkedIcon:i.cloneElement(y,{fontSize:null!=(s=y.props.fontSize)?s:g}),ownerState:I,ref:t,className:(0,a.Z)(S.root,v)},Z,{classes:S}))});var S=I},64167:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(75369)}])},34175:function(e,t,r){"use strict";function n(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function o(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function i(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function a(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}r.d(t,{Bk:function(){return i},CL:function(){return s},PK:function(){return n},Tc:function(){return a},VL:function(){return o}})},82747:function(e,t,r){"use strict";function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),o=0,i=t-7;for(let a=t;a>=1;a--)o+=r.charAt(t-a)*i--,i<2&&(i=9);let s=o%11<2?0:11-o%11;if(s!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),o=0,i=t-7;for(let l=t;l>=1;l--)o+=r.charAt(t-l)*i--,i<2&&(i=9);return(s=o%11<2?0:11-o%11)==n.charAt(1)}function o(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let o=1;o<=10;o++)r+=parseInt(e.substring(o-1,o))*(12-o);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return i},sw:function(){return o},zk:function(){return n}})},75369:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),i=r(11163),a=r.n(i),s=r(41664),l=r.n(s),c=r(75084),d=r(75158),u=r(67836),p=r(58316),m=r(80562),f=r(61953),h=r(55343),x=r(61225),g=r(39063),v=r(67074),Z=r(62097),b=r(32631),y=r(9041),j=r(29630),C=r(22841),w=r(34175),k=r(82747),$=r(21609),P=r(74231),I=r(87536),S=r(47533),D=r(17288),z=r(40039),F=r(19550),V=r(51514),B=r(30152),N=r(88942);r(34361);var _=r(66341),M=r(86501),W=r(41099);(0,v.ZP)(f.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(20),paddingRight:"0 !important",[t.breakpoints.down("lg")]:{padding:t.spacing(10)}}}),(0,v.ZP)("img")(e=>{let{theme:t}=e;return{maxWidth:"48rem",[t.breakpoints.down("xl")]:{maxWidth:"38rem"},[t.breakpoints.down("lg")]:{maxWidth:"30rem"}}});let E=(0,v.ZP)(f.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:400},[t.breakpoints.up("lg")]:{maxWidth:450}}}),L=(0,v.ZP)(f.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.down("md")]:{maxWidth:400}}}),O=(0,v.ZP)(j.Z)(e=>{let{theme:t}=e;return{fontWeight:600,letterSpacing:"0.18px",marginBottom:t.spacing(1.5),[t.breakpoints.down("md")]:{marginTop:t.spacing(8)}}}),U=(0,v.ZP)(C.Z)(e=>{let{theme:t}=e;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),A=P.Ry().shape({cpf:P.Z_().min(14,"O CPF deve ser preenchido completamente").required("O CPF \xe9 obrigat\xf3rio").test("valida-cpf","CPF inv\xe1lido",e=>(0,k.sw)(e)),password:P.Z_().min(4,"A senha deve conter no m\xednimo 4 digitos").required("A senha \xe9 obrigat\xf3ria")}),q={password:"",cpf:""},R=e=>{let{units:t}=e,[r,i]=(0,o.useState)(!0),[s,v]=(0,o.useState)(!1),{openModalSelectUnits:C,setOpenModalSelectUnits:k,unitsUser:P,userAux:N,setLoggedUnity:R,getRoutes:H,getMenu:T}=(0,o.useContext)(z.V),[X,K]=(0,o.useState)(!1),[Q,G]=(0,o.useState)({}),[J,Y]=(0,o.useState)(null);a();let ee=(0,D.a)(),et=(0,Z.Z)();(0,F.Z)();let{settings:er}=(0,V.r)(),en=(0,x.Z)(et.breakpoints.down("md")),{skin:eo}=er,{control:ei,setError:ea,handleSubmit:es,formState:{errors:el}}=(0,I.cI)({defaultValues:q,mode:"onBlur",resolver:(0,S.X)(A)}),ec=e=>{let{cpf:t,password:n}=e;G(e),ee.login({cpf:t,password:n,rememberMe:r,verifyUnits:!0},e=>{ea("cpf",{type:"manual",message:"CPF e/ou senha inv\xe1lidos!"}),e&&e.response&&401===e.response.status&&M.Am.error("CPF e/ou senha inv\xe1lidos!")})},ed=()=>{K(!1),k(null)},eu=()=>{let{cpf:e,password:t}=Q;K(!1),R(J),localStorage.setItem("loggedUnity",JSON.stringify(J)),T(J.papelID),H(N.usuarioID,J.unidadeID,N.admin,J.papelID),ee.login({cpf:e,password:t,rememberMe:r,verifyUnits:!1},()=>{ea("cpf",{type:"manual",message:"CPF e/ou senha inv\xe1lidos!"})})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.Z,{className:"content-right",children:[en?null:(0,n.jsxs)(f.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)("img",{src:"/images/storyset/login.svg",style:{height:"100vh"}}),(0,n.jsx)("img",{alt:"mask",src:"https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-3/images/pages/misc-mask-light.png",className:"css-84vgca",style:{position:"absolute",zIndex:"-1",bottom:"0",left:"0",width:"100%"}})]}),(0,n.jsx)(E,{sx:"bordered"!==eo||en?{}:{borderLeft:"1px solid ".concat(et.palette.divider)},children:(0,n.jsx)(f.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,n.jsxs)(L,{children:[(0,n.jsx)(f.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(W.Z,{})}),(0,n.jsxs)(f.Z,{sx:{mb:6},children:[(0,n.jsx)(O,{variant:"h5",children:"Bem-vindo ao ".concat(B.Z.templateName,"! \uD83D\uDC4B\uD83C\uDFFB")}),(0,n.jsx)(j.Z,{variant:"body2",children:"Digite seu CPF e senha para come\xe7ar"})]}),(0,n.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:es(ec),children:[(0,n.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,n.jsx)(I.Qr,{name:"cpf",control:ei,rules:{required:!0},render(e){let{field:{value:t,onChange:r,onBlur:o}}=e;return(0,n.jsx)(u.Z,{autoFocus:!0,label:"CPF",value:(0,w.VL)(null!=t?t:""),onBlur:o,onChange:r,error:Boolean(el.cpf),placeholder:"000.000.000-00",inputProps:{maxLength:14,type:"tel",inputMode:"numeric"}})}}),el.cpf&&(0,n.jsx)(b.Z,{sx:{color:"error.main"},children:el.cpf.message})]}),(0,n.jsxs)(h.Z,{fullWidth:!0,children:[(0,n.jsx)(p.Z,{htmlFor:"auth-login-v2-password",error:Boolean(el.password),children:"Senha"}),(0,n.jsx)(I.Qr,{name:"password",control:ei,rules:{required:!0},render(e){let{field:{value:t,onChange:r,onBlur:o}}=e;return(0,n.jsx)(g.Z,{value:t,onBlur:o,label:"Senha",onChange:r,id:"auth-login-v2-password",error:Boolean(el.password),type:s?"text":"password",endAdornment:(0,n.jsx)(y.Z,{position:"end",children:(0,n.jsx)(m.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:()=>v(!s),children:(0,n.jsx)($.Z,{icon:s?"mdi:eye-outline":"mdi:eye-off-outline",fontSize:20})})})})}}),el.password&&(0,n.jsx)(b.Z,{sx:{color:"error.main"},id:"",children:el.password.message})]}),(0,n.jsxs)(f.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,n.jsx)(U,{label:"Lembrar-me",control:(0,n.jsx)(d.Z,{checked:r,onChange:e=>i(e.target.checked)})}),(0,n.jsx)(j.Z,{variant:"body2",component:l(),href:"/esqueceu-sua-senha?type=login",sx:{color:"primary.main",textDecoration:"none"},children:"Esqueceu sua senha?"})]}),(0,n.jsx)(c.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Entrar"})]}),(0,n.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(j.Z,{sx:{mr:2,color:"text.secondary"},children:"\xc9 um fornecedor?"}),(0,n.jsx)(j.Z,{href:"/fornecedor",component:l(),sx:{color:"primary.main",textDecoration:"none"},children:"Login"})]})]})})})]}),C&&(0,n.jsx)(_.Z,{openModal:C,handleClose:ed,handleSubmit:eu,unidades:P,setSelectedUnit:Y})]})};R.getLayout=e=>(0,n.jsx)(N.Z,{children:e}),R.guestGuard=!0,t.default=R},34361:function(e,t,r){"use strict";r(85893),(0,r(67074).ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"17.5%"}}})},47533:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(87536),o=function(e,t,r){if(e&&"reportValidity"in e){var o=(0,n.U2)(r,t);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},i=function(e,t){var r=function(r){var n=t.fields[r];n&&n.ref&&"reportValidity"in n.ref?o(n.ref,r,e):n.refs&&n.refs.forEach(function(t){return o(t,r,e)})};for(var n in t.fields)r(n)},a=function(e,t){t.shouldUseNativeValidation&&i(e,t);var r={};for(var o in e){var a=(0,n.U2)(t.fields,o);(0,n.t8)(r,o,Object.assign(e[o],{ref:a&&a.ref}))}return r},s=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(o,s,l){try{return Promise.resolve(function(n,a){try{var c=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},t,{context:s}))).then(function(e){return l.shouldUseNativeValidation&&i({},l),{values:r.rawValues?o:e,errors:{}}}))}catch(d){return a(d)}return c&&c.then?c.then(void 0,a):c}(0,function(e){var t;if(!e.inner)throw e;return{values:{},errors:a((t=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var o=e[r.path].types,i=o&&o[r.type];e[r.path]=(0,n.KN)(r.path,t,e,r.type,i?[].concat(i,r.message):r.message)}return e},{})),l)}}))}catch(c){return Promise.reject(c)}}}}},function(e){e.O(0,[7536,4231,9774,2888,179],function(){return e(e.s=64167)}),_N_E=e.O()}]);