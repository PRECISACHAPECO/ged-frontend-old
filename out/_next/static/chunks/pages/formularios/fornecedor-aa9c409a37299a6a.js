(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7463],{59424:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/fornecedor",function(){return n(18442)}])},45061:function(e,r,n){"use strict";var a=n(85893),o=n(75084),t=n(29620),l=n(77745),i=n(95398),s=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),m=n(55343),x=n(67836),p=n(67294),h=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:r,text:n,handleClose:f,openModal:g,handleSubmit:j,cnpj:v,gruposAnexo:Z,inputEmail:b,btnCancel:C,btnConfirm:F,grupoAnexosFornecedor:y,btnCancelColor:D,btnConfirmColor:I,closeAfterSave:P,listErrors:N}=e,[S,w]=(0,p.useState)(null),[$,E]=(0,p.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(t.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&f()},children:[(0,a.jsx)(l.Z,{id:"form-dialog-title",children:r}),(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(c.Z,{sx:{mb:3},children:[n,N&&N.status&&(0,a.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,a.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:N.errors.map((e,r)=>(0,a.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,a.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==S?void 0:S.length)>0&&$,inputProps:{onChange(e){w(e.target.value),E(!(0,h.dI)(e.target.value))}}}),(null==S?void 0:S.length)>0&&$&&(0,a.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,a.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,a.jsxs)(s.Z,{className:"dialog-actions-dense",children:[C&&(0,a.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),F&&(0,a.jsx)(o.Z,{variant:"contained",disabled:b&&(null==S?void 0:S.length)>0&&$||N&&N.status,color:I||"error",onClick:b&&v?()=>{j(v,Z,S),w(null),P&&f()}:b&&!v?()=>{j(S),w(null),P&&f()}:()=>{j(),P&&f()},children:"Confirmar"})]})]})})};r.Z=f},67569:function(e,r,n){"use strict";var a=n(85893),o=n(79072),t=n(61953),l=n(29630),i=n(22841),s=n(75158);let c=e=>{let{xs:r,md:n,title:c,index:d,name:u,typePage:m,value:x,register:p}=e;return(0,a.jsx)(o.ZP,{item:!0,xs:r,md:n,children:(0,a.jsxs)(t.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(l.Z,{variant:"caption",children:d&&0!=d?"":c}),(0,a.jsx)(i.Z,{control:(0,a.jsx)(s.Z,{sx:{ml:4},...p(u),defaultChecked:!0==x||1==x||"new"==m})})]})})};r.Z=c},3893:function(e,r,n){"use strict";var a=n(85893),o=n(79072),t=n(61953),l=n(22841),i=n(75158);let s=e=>{let{xs:r,md:n,title:s,index:c,name:d,typePage:u,value:m,register:x}=e;return(0,a.jsx)(o.ZP,{item:!0,xs:r,md:n,children:(0,a.jsx)(t.Z,{display:"flex",flexDirection:"column",alignItems:"start",sx:{my:2},children:(0,a.jsx)(l.Z,{control:(0,a.jsx)(i.Z,{name:d,...x(d),defaultChecked:m}),label:s,sx:{"&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}})})})};r.Z=s},29308:function(e,r,n){"use strict";var a=n(85893),o=n(67294),t=n(79072),l=n(55343),i=n(67836),s=n(34175);let c=e=>{let{xs:r,md:n,title:c,name:d,rows:u,value:m,type:x,mask:p,getAddressByCep:h,multiline:f,disabled:g,required:j,register:v,errors:Z}=e,b=(0,o.useRef)(null);return(0,a.jsx)(t.ZP,{item:!0,xs:r,md:n,sx:{my:1},children:(0,a.jsx)(l.Z,{fullWidth:!0,children:(0,a.jsx)(i.Z,{multiline:f,defaultValue:null!=m?m:"",label:c,rows:u,type:null!=x?x:"text",placeholder:c,name:d,disabled:g,"aria-describedby":"validation-schema-nome",error:Z,...v(d,{required:j}),inputRef:b,onChange(e){"cnpj"===p?e.target.value=(0,s.PK)(e.target.value):"cep"===p?(e.target.value=(0,s.Tc)(e.target.value),h(e.target.value)):"telefone"===p?e.target.value=(0,s.Bk)(e.target.value):"estado"===p?e.target.value=(0,s.CL)(e.target.value):"cpf"===p?e.target.value=(0,s.VL)(e.target.value):"rg"===p?e.target.value=(0,s.cH)(e.target.value):e.target.value=e.target.value},inputProps:"cnpj"===p?{maxLength:18,type:"tel",inputMode:"numeric"}:"cep"===p?{maxLength:9,type:"tel",inputMode:"numeric"}:"telefone"===p?{maxLength:14}:"cpf"===p?{maxLength:14}:"rg"===p?{maxLength:11}:"estado"===p?{maxLength:2}:{}})})})};r.Z=c},88475:function(e,r,n){"use strict";var a=n(85893),o=n(79072),t=n(61953),l=n(29630),i=n(72389),s=n(80562),c=n(21609);let d=e=>{let{xs:r,md:n,title:d,removeItem:u,item:m,pending:x,index:p,textSuccess:h,textError:f}=e;return h=h||"Remover este item",f=f||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,a.jsx)(o.ZP,{item:!0,xs:r,md:n,children:(0,a.jsxs)(t.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(l.Z,{variant:"caption",children:d}),(0,a.jsx)(i.Z,{title:1==x?f:h,children:(0,a.jsx)(s.Z,{color:"error",onClick(){1!=x&&u(m,p)},sx:{opacity:1==x?.5:1,cursor:1==x?"default":"pointer"},children:(0,a.jsx)(c.Z,{icon:"tabler:trash-filled"})})})]})})};r.Z=d},84220:function(e,r,n){"use strict";var a=n(85893),o=n(79072),t=n(55343),l=n(35966),i=n(67836);n(67294);let s=e=>{let{xs:r,md:n,title:s,options:c,block:d,optionsSelected:u,indexFather:m,name:x,type:p,limitTags:h,value:f,required:g,disabled:j,register:v,multiple:Z,setValue:b,errors:C,handleRegistroEstabelecimento:F}=e;return(0,a.jsx)(o.ZP,{item:!0,xs:r,md:n,sx:{my:1},children:(0,a.jsx)(t.Z,{fullWidth:!0,children:(0,a.jsx)(l.Z,{multiple:Z,limitTags:h,options:c,getOptionLabel:e=>e.nome,defaultValue:Z?f.map(e=>c.find(r=>r.nome===e.nome)):null!=f?f:{nome:""},disabled:j,...v(x,{required:g}),onChange(e,r){console.log("\uD83D\uDE80 Select => onChange:",r),b(x,r),"registroestabelecimento"==p&&F(r?r.id:null)},renderInput:e=>(0,a.jsx)(i.Z,{...e,label:s,placeholder:s,error:C})})})})};r.Z=s},47842:function(e,r,n){"use strict";var a=n(85893),o=n(70754),t=n(61953);let l=e=>{let{text:r}=e;return(0,a.jsxs)(t.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)("p",{children:null!=r?r:"Carregando..."})]})};r.Z=l},34175:function(e,r,n){"use strict";function a(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function o(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function t(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function l(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function i(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(r,{Bk:function(){return l},CL:function(){return s},PK:function(){return a},Tc:function(){return i},VL:function(){return o},cH:function(){return t}})},82747:function(e,r,n){"use strict";function a(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,n=e.substring(0,r),a=e.substring(r),o=0,t=r-7;for(let l=r;l>=1;l--)o+=n.charAt(r-l)*t--,t<2&&(t=9);let i=o%11<2?0:11-o%11;if(i!=a.charAt(0))return!1;r+=1,n=e.substring(0,r),o=0,t=r-7;for(let s=r;s>=1;s--)o+=n.charAt(r-s)*t--,t<2&&(t=9);return(i=o%11<2?0:11-o%11)==a.charAt(1)}function o(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let a=1;a<=9;a++)n+=parseInt(e.substring(a-1,a))*(11-a);if((10==(r=10*n%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;n=0;for(let o=1;o<=10;o++)n+=parseInt(e.substring(o-1,o))*(12-o);return(10==(r=10*n%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(r,{dI:function(){return t},sw:function(){return o},zk:function(){return a}})},18442:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return A}});var a=n(85893),o=n(67294),t=n(31727),l=n(40372),i=n(91359),s=n(60565),c=n(40039),d=n(29620),u=n(77745),m=n(95398),x=n(44642),p=n(79072),h=n(55343),f=n(67836),g=n(29630),j=n(19604),v=n(75084),Z=n(35966),b=n(76779),C=n(11163);n(84220);var F=n(21609),y=n(49540),D=n(34175),I=n(82747),P=n(87536),N=n(86501),S=n(45061);let w=e=>{var r;let{handleClose:n,openModal:l,makeFornecedor:i,loadingSave:w}=e;(0,C.useRouter)();let[$,E]=(0,o.useState)(!1),{user:k,loggedUnity:z}=(0,o.useContext)(c.V),{handleSearch:A}=(0,o.useContext)(s.f),[L,T]=(0,o.useState)(null),[M,_]=(0,o.useState)(null),[J,V]=(0,o.useState)(!1),[R,H]=(0,o.useState)(null),[q,W]=(0,o.useState)(!1),[B,O]=(0,o.useState)(!1),[G,K]=(0,o.useState)(!1),[X,U]=(0,o.useState)(!1),[Q,Y]=(0,o.useState)([]),[ee,er]=(0,o.useState)([]),{handleSubmit:en,formState:{errors:ea},setValue:eo,register:et}=(0,P.cI)({}),el=()=>{U(!0),setTimeout(()=>{U(!1)},5e3);let e=(0,y.q)((0,y.X1)(M)),r=(0,y.q)(z.unidadeID),n=window.location.origin,a="".concat(n,"/fornecedor?c=").concat(e,"&u=").concat(r);navigator.clipboard.writeText(a)},ei=async e=>{e&&18===e.length&&(console.log("getFornecedorByCnpj: ",e),(0,I.zk)(e)?(E(!0),W(!1),await t.h.post("/formularios/fornecedor/cnpj",{unidadeID:z.unidadeID,cnpj:e}).then(r=>{console.log("\uD83D\uDE80 ~ getFornecedorByCnpj response:",r.data),T(r.data),_(e),E(!1)})):(_(null),W(!0)))},es=async()=>{console.log("filtra no contexto..."),A(M),n()},ec=async()=>{E(!0),await t.h.post("/formularios/fornecedor/fornecedorStatus",{unidadeID:z.unidadeID,cnpj:M,status:1}).then(e=>{200===e.status?(T(e.data),N.Am.success("Fornecedor reativado com sucesso")):N.Am.error("Erro ao reativar fornecedor"),E(!1)})},ed=()=>{K(!0)},eu=async()=>{await t.h.post("/formularios/fornecedor/getGruposAnexo",{unidadeID:z.unidadeID}).then(e=>{Y(e.data)}).catch(e=>{console.log("\uD83D\uDE80 ~ error:",e)})},em=e=>{console.log("\uD83D\uDE80 ~ onSubmit ~ values:",e)};return(0,o.useEffect)(()=>{eu()},[]),(0,o.useEffect)(()=>{ei(M),T(null),en(em),_(null),H(null)},[l,w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.Z,{open:l,onClose:n,"aria-labelledby":"form-dialog-title",children:[(0,a.jsx)(u.Z,{id:"form-dialog-title",children:"Habilitar novo fornecedor"}),(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(x.Z,{sx:{mb:3},children:["Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa ficar\xe1 apta a preencher formul\xe1rios para a ",z.nomeFantasia,"."]}),(0,a.jsx)("form",{onSubmit:en(em),children:(0,a.jsxs)(p.ZP,{container:!0,children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:12,children:(0,a.jsxs)(h.Z,{fullWidth:!0,children:[(0,a.jsx)(f.Z,{defaultValue:(null==L?void 0:L.cnpj)?L.cnpj:"",label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",error:q,...et("cnpj",{required:!0,validate:e=>(0,I.zk)(e)||"CNPJ inv\xe1lido"}),helperText:null===(r=ea.cnpj)||void 0===r?void 0:r.message,inputProps:{maxLength:18,onChange(e){T(null),eo("cnpj",(0,D.PK)(e.target.value)),_((0,D.PK)(e.target.value)),ei(e.target.value),V(!1)}}}),q&&(0,a.jsx)(g.Z,{variant:"body2",color:"error",children:"Por favor, insira um CNPJ v\xe1lido!"})]})}),L&&L.isFornecedor&&!L.hasFormulario&&J&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...et("email",{required:!0,validate:e=>e.includes("@")||"E-mail inv\xe1lido"}),error:B,helperText:B?"Insira um e-mail v\xe1lido":null,inputProps:{onChange(e){eo("email",e.target.value),H(e.target.value),O(!(0,I.dI)(e.target.value))}}})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:12,sx:{mt:2},children:(0,a.jsx)(j.Z,{severity:"info",children:"Um e-mail ser\xe1 enviado para o fornecedor com as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio"})})]})]})}),L&&(0,a.jsx)(p.ZP,{container:!0,sx:{mt:2},children:(0,a.jsx)(p.ZP,{item:!0,xs:12,md:12,children:L.isFornecedor&&L.hasFormulario?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(j.Z,{severity:"success",children:["Esse CNPJ est\xe1 habilitado como um Fornecedor da ",z.nomeFantasia]}),(0,a.jsx)(v.Z,{startIcon:(0,a.jsx)(F.Z,{icon:X?"mdi:check-bold":"iconamoon:copy-bold"}),sx:{mt:2},onClick:X?null:el,style:{cursor:X?"default":"pointer"},children:X?"Copiado!":"Copiar Link do Formul\xe1rio"})]}):L.isFornecedor&&!L.hasFormulario?(0,a.jsx)(j.Z,{severity:"warning",children:"Esse CNPJ j\xe1 \xe9 seu fornecedor, mas n\xe3o h\xe1 nenhum formul\xe1rio criado"}):!L.isFornecedor&&L.hasFormulario?(0,a.jsx)(j.Z,{severity:"warning",children:"Esse CNPJ n\xe3o est\xe1 mais ativo como um fornecedor mas possui formul\xe1rios preenchidos"}):L.isFornecedor||L.hasFormulario?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:12,sx:{my:1},children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(Z.Z,{multiple:!0,limitTags:5,options:Q,getOptionLabel:e=>e.nome,defaultValue:[],...et("gruposAnexo"),onChange(e,r){console.log("\uD83D\uDE80 Select => onChange:",r),er(r)},renderInput:e=>(0,a.jsx)(f.Z,{...e,label:"Grupos de Anexo",placeholder:"Grupos de Anexo"})})})}),(0,a.jsx)(j.Z,{severity:"info",sx:{mt:3},children:"Esse CNPJ ainda n\xe3o \xe9 seu fornecedor"})]})})})]}),(0,a.jsxs)(b.Z,{className:"dialog-actions-dense",sx:{mx:2,mb:2},children:[(0,a.jsx)(v.Z,{variant:"outlined",onClick:n,children:"Fechar"}),L&&(L.isFornecedor&&L.hasFormulario||!L.isFornecedor&&L.hasFormulario||!L.isFornecedor&&!L.hasFormulario)&&(0,a.jsx)(v.Z,{variant:"contained",onClick:L.isFornecedor&&L.hasFormulario?es:!L.isFornecedor&&L.hasFormulario?ec:L.isFornecedor||L.hasFormulario?null:ed,children:L.isFornecedor&&L.hasFormulario?"Filtrar formul\xe1rios":!L.isFornecedor&&L.hasFormulario?"Reativar fornecedor":L.isFornecedor||L.hasFormulario?null:"Tornar meu fornecedor"})]})]}),(0,a.jsx)(S.Z,{title:"Confirmar novo fornecedor",text:"Tem certeza que deseja tornar o CNPJ ".concat(M," um fornecedor ativo na ").concat(z.nomeFantasia," ? Se sim, o mesmo poder\xe1 preencher formul\xe1rios de Fornecedor para a sua empresa."),handleClose(){K(!1)},openModal:G,handleSubmit:i,inputEmail:!0,closeAfterSave:!0,cnpj:M,gruposAnexo:ee,grupoAnexosFornecedor:!0,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary"})]})};var $=n(47842),E=n(46749),k=n(49837);let z=()=>{let{user:e,loggedUnity:r}=(0,o.useContext)(c.V),[n,d]=(0,o.useState)(null),u=(0,C.useRouter)(),m=u.pathname,{setTitle:x}=(0,o.useContext)(s.f),[p,h]=(0,o.useState)(!1),[f,g]=(0,o.useState)(!1);console.log("result: ",n);let j=()=>{h(!0)},v=async(n,a,o)=>{console.log("\uD83D\uDE80 ~ makeFornecedor => gruposAnexo:",a);try{g(!0),await t.h.post("".concat(m,"/makeFornecedor"),{usuarioID:e.usuarioID,unidadeID:r.unidadeID,papelID:e.papelID,cnpj:n,gruposAnexo:a}).then(e=>{200===e.status?(N.Am.success("Fornecedor habilitado com sucesso"),o&&Z(o,n)):N.Am.error("Erro ao tornar fornecedor"),g(!1)})}catch(l){console.log(l)}},Z=(e,n)=>{if(e&&(0,I.dI)(e)){let a={unidadeID:r.unidadeID,cnpj:n,destinatario:e};t.h.post("".concat(m,"/sendMail"),{data:a}).then(e=>{N.Am.success("E-mail enviado com sucesso")}).catch(e=>{console.error("Erro ao enviar email",e)})}},b=async()=>{console.log("getList> ",m),await t.h.post("".concat(m,"/getList"),{unidadeID:r.unidadeID,papelID:e.papelID,cnpj:e.cnpj?e.cnpj:null}).then(e=>{d(e.data),x("Fornecedor")})};(0,o.useEffect)(()=>{b()},[f]),console.log("dados do bakc",n);let F=1==e.papelID?[{headerName:"ID",field:"id",size:1},{headerName:"Data da Avalia\xe7\xe3o",field:"data",size:1},{headerName:"Fornecedor",field:"fornecedor",size:1},{headerName:"CNPJ",field:"cnpj",size:1},{headerName:"Cidade",field:"cidade",size:1},{headerName:"Respons\xe1vel",field:"responsavel",size:1},{headerName:"Status",field:"status",size:1}]:2==e.papelID?[{headerName:"ID",field:"id",size:1},{headerName:"Data da Avalia\xe7\xe3o",field:"data",size:1},{headerName:"F\xe1brica",field:"fabrica",size:1},{headerName:"CNPJ",field:"cnpj",size:1},{headerName:"Cidade",field:"cidade",size:1},{headerName:"Respons\xe1vel",field:"responsavel",size:1},{headerName:"Status",field:"status",size:1}]:[],y=(0,E.OL)(m,F);return(0,a.jsxs)(a.Fragment,{children:[!n&&(0,a.jsx)($.Z,{}),n&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(k.Z,{children:(0,a.jsx)(i.Z,{sx:{pt:"0"},children:(0,a.jsx)(l.Z,{rows:n,columns:y,buttonsHeader:{btnNew:1==e.papelID,btnPrint:!0,openModal:1==e.papelID?j:null}})})})}),(0,a.jsx)(w,{openModal:p,handleClose:()=>h(!1),makeFornecedor:v,loadingSave:f})]})};var A=z},40372:function(e,r,n){"use strict";n.d(r,{Z:function(){return F}});var a=n(85893),o=n(67294),t=n(11163),l=n.n(t),i=n(87630),s=n(75680),c=n(61953),d=n(67836),u=n(80562),m=n(50853),x=n(91359),p=n(75084),h=n(41664),f=n.n(h),g=n(40039),j=n(21609);let v=e=>{let{btnNew:r,btnPrint:n,openModal:t}=e,i=l(),{routes:s}=(0,o.useContext)(g.V);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,a.jsxs)(c.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,a.jsx)(p.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,a.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),r&&s.find(e=>e.rota===i.pathname&&e.inserir)&&(0,a.jsx)(f(),{href:t?"":"".concat(i.pathname,"/novo"),children:(0,a.jsx)(p.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,a.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:t||null,children:"Novo"})})]})})})},Z=e=>(0,a.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,a.jsxs)(c.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,a.jsx)(d.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,a.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,a.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,a.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,a.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,a.jsx)(m.M,{})]}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(v,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var b=n(60565);let C=e=>{let{rows:r,columns:n,buttonsHeader:l}=e,{handleSearch:c,pageSize:d,setPageSize:u,searchText:m,filteredData:x,setData:p,data:h}=(0,o.useContext)(b.f);p(r);let f=(0,t.useRouter)(),g=f.pathname;return(0,a.jsx)(i._,{localeText:s.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:d,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:Z},rows:m?x:h,onRowClick:e=>f.push("".concat(g,"/").concat(e.row.id)),onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:m,clearSearch:()=>c(""),onChange:e=>c(e.target.value),buttonsHeader:l}}})};var F=C}},function(e){e.O(0,[2064,7536,1082,9774,2888,179],function(){return e(e.s=59424)}),_N_E=e.O()}]);