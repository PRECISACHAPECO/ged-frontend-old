(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8550],{92012:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registro",function(){return n(5467)}])},34175:function(e,i,n){"use strict";function o(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function r(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function l(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function a(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function s(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function t(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(i,{Bk:function(){return a},CL:function(){return t},PK:function(){return o},Tc:function(){return s},VL:function(){return r},cH:function(){return l}})},82747:function(e,i,n){"use strict";function o(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let i=e.length-2,n=e.substring(0,i),o=e.substring(i),r=0,l=i-7;for(let a=i;a>=1;a--)r+=n.charAt(i-a)*l--,l<2&&(l=9);let s=r%11<2?0:11-r%11;if(s!=o.charAt(0))return!1;i+=1,n=e.substring(0,i),r=0,l=i-7;for(let t=i;t>=1;t--)r+=n.charAt(i-t)*l--,l<2&&(l=9);return(s=r%11<2?0:11-r%11)==o.charAt(1)}function r(e){let i;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let o=1;o<=9;o++)n+=parseInt(e.substring(o-1,o))*(11-o);if((10==(i=10*n%11)||11===i)&&(i=0),i!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(i=10*n%11)||11===i)&&(i=0),i===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(i,{dI:function(){return l},sw:function(){return r},zk:function(){return o}})},5467:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return K}});var o=n(85893),r=n(61953),l=n(61225),a=n(67074),s=n(62097),t=n(88942),d=n(51514),u=n(67294),c=n(44044),x=n(98948),m=n(94071),p=n(29630),h=n(79072),f=n(75084),v=n(67836),j=n(34175),g=n(87536),Z=n(75442),b=n(21609),y=n(55343);let C=e=>{var i,n,l,a,s,t,d,c,x,m,C,S,w,P,F,D;let{handleNext:M,handlePrev:$,setDataGlobal:k,dataGlobal:z}=e,[I,W]=(0,u.useState)(null),{register:N,handleSubmit:_,setValue:E,formState:{errors:q}}=(0,g.cI)({}),T=e=>{var i;k({usuario:{...null==z?void 0:z.usuario,fields:{...null==z?void 0:null===(i=z.usuario)||void 0===i?void 0:i.fields,...e}}}),console.log("values",e),M()},L=async e=>{9===e.length?Z.h.get("https://viacep.com.br/ws/".concat(e,"/json/")).then(e=>{W(e.data)}):W(null)};return(0,u.useEffect)(()=>{E("logradouro",null==I?void 0:I.logradouro),E("bairro",null==I?void 0:I.bairro),E("cidade",null==I?void 0:I.localidade),E("uf",null==I?void 0:I.uf)},[I,L]),(0,o.jsxs)("form",{onSubmit:_(T),children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Informa\xe7\xf5es opcionais"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es opcionais"})]}),(0,o.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Telefone",fullWidth:!0,name:"telefone",defaultValue:null==z?void 0:null===(i=z.usuario)||void 0===i?void 0:null===(n=i.fields)||void 0===n?void 0:n.telefone,...N("telefone"),onChange(e){E("telefone",(0,j.Bk)(e.target.value))},inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Cep",placeholder:"Cep",defaultValue:null==z?void 0:null===(l=z.usuario)||void 0===l?void 0:null===(a=l.fields)||void 0===a?void 0:a.cep,name:"cep",fullWidth:!0,...N("cep"),onChange(e){E("cep",(0,j.Tc)(e.target.value)),L(e.target.value)},inputProps:{maxLength:9,type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Rua",placeholder:"Rua",defaultValue:I||(null==z?void 0:null===(s=z.usuario)||void 0===s?void 0:null===(t=s.fields)||void 0===t?void 0:t.logradouro),name:"logradouro",...N("logradouro"),fullWidth:!0})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"N\xfamero",defaultValue:null==z?void 0:null===(d=z.usuario)||void 0===d?void 0:null===(c=d.fields)||void 0===c?void 0:c.numero,placeholder:"N\xfamero",name:"numero",fullWidth:!0,...N("numero"),inputProps:{type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Complemento",defaultValue:null==z?void 0:null===(x=z.usuario)||void 0===x?void 0:null===(m=x.fields)||void 0===m?void 0:m.complemento,placeholder:"Complemento",name:"complemento",fullWidth:!0,...N("complemento")})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(y.Z,{fullWidth:!0,children:(0,o.jsx)(v.Z,{defaultValue:null==z?void 0:null===(C=z.usuario)||void 0===C?void 0:null===(S=C.fields)||void 0===S?void 0:S.bairro,label:"Bairro",placeholder:"Bairro",name:"bairro",...N("bairro",{required:!1})})})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Cidade",placeholder:"Cidade",defaultValue:null==z?void 0:null===(w=z.usuario)||void 0===w?void 0:null===(P=w.fields)||void 0===P?void 0:P.cidade,name:"cidade",fullWidth:!0,...N("cidade")})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Estado",placeholder:"Estado",defaultValue:null==z?void 0:null===(F=z.usuario)||void 0===F?void 0:null===(D=F.fields)||void 0===D?void 0:D.uf,name:"uf",fullWidth:!0,...N("uf"),onChange(e){E("uf",(0,j.CL)(e.target.value))},inputProps:{maxLength:2}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,children:(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(f.Z,{color:"secondary",variant:"contained",onClick:$,startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{type:"submit",variant:"contained",onClick:_,endIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]})})]})]})};var S=n(74231),w=n(47533),P=n(82747),F=n(11163),D=n.n(F),M=n(58316),$=n(9041),k=n(19604),z=n(39063),I=n(80562),W=n(41664),N=n.n(W);n(74865);let _=e=>{var i,n,l,a,s,t,d,c,x,m,C,F,W,_,E,q,T,L,A,V;let{handleNext:R,setDataGlobal:G,dataGlobal:J}=e,B=D();B.pathname;let[O,H]=(0,u.useState)(null),[X,K]=(0,u.useState)(null),U=(0,u.useRef)(null);console.log("exist",O),console.log("dataglobal",J);let[Q,Y]=(0,u.useState)({showPassword:!1,showConfirmPassword:!1}),ee=()=>{Y({...Q,showPassword:!Q.showPassword})},ei=e=>{e.preventDefault()},en=()=>{Y({...Q,showConfirmPassword:!Q.showConfirmPassword})},eo=e=>{e.preventDefault()},er=S.Ry().shape({cnpj:S.Z_().nullable().required("CNPJ \xe9 obrigat\xf3rio").test("cnpj","CNPJ inv\xe1lido",function(e){let{errorCnpj:i}=this.parent;return!i&&(0,P.zk)(e)}),nomeFantasia:S.Z_().nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Nome Fantasia \xe9 obrigat\xf3rio")}),email:S.Z_().email("Email inv\xe1lido").nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Email \xe9 obrigat\xf3rio")}),razaoSocial:S.Z_().nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Cidade \xe9 obrigat\xf3rio")}),senha:S.Z_().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Senha \xe9 obrigat\xf3rio").min(4,"Senha deve ter no m\xednimo 4 caracteres")}),confirmaSenha:S.Z_().oneOf([S.iH("senha")],"As senhas n\xe3o conferem").when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Confirma\xe7\xe3o de senha \xe9 obrigat\xf3rio").min(4,"Senha deve ter no m\xednimo 4 caracteres")})}),{register:el,handleSubmit:ea,setValue:es,formState:{errors:et}}=(0,g.cI)({resolver:(0,w.X)(er)}),ed=e=>{if(18===e.length&&(0,P.zk)(e))Z.h.post("/registro-fornecedor",{value:e},{headers:{"function-name":"VerifyCnpjTableFactory"}}).then((e,i)=>{H(e.data)}),Z.h.post("/registro-fornecedor",{cnpj:e},{headers:{"function-name":"handleGetCnpj"}}).then((i,n)=>{var o,r;console.log("\uD83D\uDE80 ~ :",i.data),i.data.length>0?G({usuario:{...null==J?void 0:J.usuario,exists:!0,fields:{...null==J?void 0:null===(o=J.usuario)||void 0===o?void 0:o.fields,...i.data[0]}}}):G({usuario:{...null==J?void 0:J.usuario,exists:!1,fields:{...null==J?void 0:null===(r=J.usuario)||void 0===r?void 0:r.fields,cnpj:e}}})});else{var i;G({usuario:{...null==J?void 0:J.usuario,exists:null,fields:{...null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.fields}}})}},eu=e=>{var i;R(e),G({usuario:{...null==J?void 0:J.usuario,fields:{...null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.fields,...e}}})},ec=B.query.u,ex=B.query.c,em=async(e,i)=>{await Z.h.post("/login-fornecedor/setAcessLink",{data:{unidadeID:e,cnpj:i}}).then((e,i)=>{ed(e.data[0].cnpj),es("cnpj",e.data[0].cnpj)})};return(0,u.useEffect)(()=>{ec&&ex&&(em(ec,ex),setTimeout(()=>{var e;null==U||null===(e=U.current)||void 0===e||e.focus()},500))},[ec,ex]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:ea(eu),children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Informa\xe7\xf5es obrigat\xf3rios"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es obrigat\xf3rias"})]}),(0,o.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"CNPJ",fullWidth:!0,...el("cnpj",{required:!0}),error:et.cnpj&&!0,helperText:et.cnpj&&et.cnpj.message,defaultValue:null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:null===(n=i.fields)||void 0===n?void 0:n.cnpj,onChange(e){ed(e.target.value)},inputProps:{maxLength:18,type:"tel",inputMode:"numeric",onChange(e){es("cnpj",(0,j.PK)(e.target.value))}}})}),!O&&(null==J?void 0:null===(l=J.usuario)||void 0===l?void 0:l.exists)===!1&&(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(k.Z,{severity:"warning",children:"Antes de realizar o cadastro, \xe9 necess\xe1rio que uma f\xe1brica habilite o seu CNPJ como um fornecedor."})}),J&&(null==J?void 0:null===(a=J.usuario)||void 0===a?void 0:a.exists)===!1&&!0===O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Nome Fantasia",defaultValue:null==J?void 0:null===(s=J.usuario)||void 0===s?void 0:null===(t=s.fields)||void 0===t?void 0:t.nomeFantasia,...el("nomeFantasia",{required:!0}),error:et.nomeFantasia&&!0,inputRef:U,helperText:et.nomeFantasia&&et.nomeFantasia.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Raz\xe3o Social",className:"required",defaultValue:null==J?void 0:null===(d=J.usuario)||void 0===d?void 0:null===(c=d.fields)||void 0===c?void 0:c.razaoSocial,...el("razaoSocial",{required:!0}),error:et.razaoSocial&&!0,helperText:et.razaoSocial&&et.razaoSocial.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Email Institucional",defaultValue:null==J?void 0:null===(x=J.usuario)||void 0===x?void 0:null===(m=x.fields)||void 0===m?void 0:m.email,...el("email",{required:!0}),error:et.email&&!0,helperText:et.email&&et.email.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-password",color:et.senha?"error":"",children:"Senha"}),(0,o.jsx)(z.Z,{label:"Senha",id:"input-password",type:Q.showPassword?"text":"password",name:"senha",...el("senha"),endAdornment:(0,o.jsx)($.Z,{position:"end",children:(0,o.jsx)(I.Z,{edge:"end",onClick:ee,onMouseDown:ei,children:(0,o.jsx)(b.Z,{icon:Q.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:et.senha&&!0,helperText:et.senha&&et.senha.message})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-confirm-password",style:{color:et.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,o.jsx)(z.Z,{label:"Confirme a senha",name:"confirmaSenha",...el("confirmaSenha"),id:"input-confirm-password",type:Q.showConfirmPassword?"text":"password",onChange(e){K(e.target.value),console.log("dentro do onchange",e.target.value)},endAdornment:(0,o.jsx)($.Z,{position:"end",children:(0,o.jsx)(I.Z,{edge:"end",onClick:en,onMouseDown:eo,children:(0,o.jsx)(b.Z,{icon:Q.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:et.confirmaSenha&&!0}),(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"error.main"},children:et.confirmaSenha&&et.confirmaSenha.message})]})})]}),J&&(null==J?void 0:null===(C=J.usuario)||void 0===C?void 0:C.exists)===!0&&(0,o.jsxs)(h.ZP,{item:!0,xs:12,md:12,children:[(0,o.jsx)("h3",{children:"CNPJ j\xe1 cadastrado"}),(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:"100px"},children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:2},children:[(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:"Nome Fantasia:"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:null==J?void 0:null===(F=J.usuario)||void 0===F?void 0:F.fields.nomeFantasia})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:2},children:[(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:"Email Institucional:"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:null==J?void 0:null===(W=J.usuario)||void 0===W?void 0:W.fields.email})]})]}),(0,o.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:(null==J?void 0:null===(_=J.usuario)||void 0===_?void 0:null===(E=_.fields)||void 0===E?void 0:E.existsFornecedor)>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{href:"/fornecedor",component:N(),sx:{color:"primary.main",textDecoration:"none"},children:"Fazer login"}),(0,o.jsx)(p.Z,{href:"/fornecedor",component:N(),sx:{color:"primary.main",textDecoration:"none"},children:"Esqueceu a senha?"})]})})]}),(null==J?void 0:null===(q=J.usuario)||void 0===q?void 0:null===(T=q.fields)||void 0===T?void 0:T.existsFornecedor)===0&&O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{sx:{color:"text.primary",marginTop:"10px"},children:"Empresa j\xe1 cadastrada, apenas \xe9 necessario criar um usu\xe1rio"}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,mt:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-password",color:et.senha?"error":"",children:"Senha"}),(0,o.jsx)(z.Z,{label:"Senha",id:"input-password",type:Q.showPassword?"text":"password",name:"senha",...el("senha"),endAdornment:(0,o.jsx)($.Z,{position:"end",children:(0,o.jsx)(I.Z,{edge:"end",onClick:ee,onMouseDown:ei,children:(0,o.jsx)(b.Z,{icon:Q.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:et.senha&&!0,helperText:et.senha&&et.senha.message})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,mt:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-confirm-password",style:{color:et.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,o.jsx)(z.Z,{label:"Confirme a senha",name:"confirmaSenha",...el("confirmaSenha"),id:"input-confirm-password",type:Q.showConfirmPassword?"text":"password",onChange(e){K(e.target.value),console.log("dentro do onchange",e.target.value)},endAdornment:(0,o.jsx)($.Z,{position:"end",children:(0,o.jsx)(I.Z,{edge:"end",onClick:en,onMouseDown:eo,children:(0,o.jsx)(b.Z,{icon:Q.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:et.confirmaSenha&&!0}),(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"error.main"},children:et.confirmaSenha&&et.confirmaSenha.message})]})})]})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(f.Z,{disabled:!0,variant:"contained",startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{disabled:!O||(null==J?void 0:null===(L=J.usuario)||void 0===L?void 0:L.exists)===!0&&(null==J?void 0:null===(A=J.usuario)||void 0===A?void 0:null===(V=A.fields)||void 0===V?void 0:V.existsFornecedor)>0||X<=0||null==X||void 0==X,type:"submit",variant:"contained",onClick:ea,endIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",marginTop:10,flexWrap:"wrap",justifyContent:"start"},children:[(0,o.jsx)(p.Z,{sx:{mr:2,color:"text.secondary"},children:"Fazer login?"}),(0,o.jsx)(p.Z,{href:"/fornecedor",component:N(),sx:{color:"primary.main",textDecoration:"none"},children:"Login"})]})]})]})]})})};var E=n(86501),q=n(17288);n(61310);let T=e=>{var i,n,l,a,s,t,d;let{handlePrev:c,dataGlobal:x,setDataGlobal:m}=e;D();let[v,j]=(0,u.useState)(!0),[g,y]=(0,u.useState)(!1),C=(0,q.a)(),S=()=>{y(!0),Z.h.post("/registro-fornecedor",{data:x},{headers:{"function-name":"handleSaveFornecedor"}}).then(e=>{201===e.status?E.ZP.error(e.data.message):(E.ZP.success("Cadastro efetuado com sucesso!"),setTimeout(()=>{var e;E.ZP.success("Efetuando login no sistema");let{cnpj:i,senha:n}=null==x?void 0:null===(e=x.usuario)||void 0===e?void 0:e.fields;C.loginFornecedor({cnpj:i,password:n,rememberMe:v},e=>{})},2e3))}).catch(e=>{E.ZP.error(e.message)})};return(0,u.useEffect)(()=>{var e,i,n,o,r,l,a;let s={logradouro:null==x?void 0:null===(e=x.usuario)||void 0===e?void 0:e.fields.logradouro,numero:null==x?void 0:null===(i=x.usuario)||void 0===i?void 0:i.fields.numero,complemento:null==x?void 0:null===(n=x.usuario)||void 0===n?void 0:n.fields.complemento,bairro:null==x?void 0:null===(o=x.usuario)||void 0===o?void 0:o.fields.bairro,cidade:null==x?void 0:null===(r=x.usuario)||void 0===r?void 0:r.fields.cidade,uf:null==x?void 0:null===(l=x.usuario)||void 0===l?void 0:l.fields.uf},t=Object.entries(s).map(e=>{let[i,n]=e;if(n)return"".concat(n,", ")}).join("").slice(0,-2)+".";m({usuario:{...null==x?void 0:x.usuario,fields:{...null==x?void 0:null===(a=x.usuario)||void 0===a?void 0:a.fields,enderecoCompleto:t}}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Verifique as informa\xe7\xf5es"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Envie se estiver tudo certo"})]}),(0,o.jsx)(h.ZP,{container:!0,spacing:5,children:(0,o.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"CNPJ"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(i=x.usuario)||void 0===i?void 0:i.fields.cnpj})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Nome Fantasia"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(n=x.usuario)||void 0===n?void 0:n.fields.nomeFantasia})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Raz\xe3o Social"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(l=x.usuario)||void 0===l?void 0:l.fields.razaoSocial})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Email Institucional"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(a=x.usuario)||void 0===a?void 0:a.fields.email})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Telefone"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(s=x.usuario)||void 0===s?void 0:s.fields.telefone})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Cep"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(t=x.usuario)||void 0===t?void 0:t.fields.cep})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Endere\xe7o"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(d=x.usuario)||void 0===d?void 0:d.fields.enderecoCompleto})]})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",mt:5},children:[(0,o.jsx)(f.Z,{color:"secondary",variant:"contained",onClick:c,startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{type:"submit",onClick:S,disabled:g,color:"success",variant:"contained",children:"Concluir"})]})]})})]})};var L=n(41796);let A=(0,a.ZP)(r.Z)(()=>({width:20,height:20,borderWidth:3,borderRadius:"50%",borderStyle:"solid"})),V=e=>{let{active:i,completed:n,error:r}=e,l=(0,s.Z)();return r?(0,o.jsx)(b.Z,{icon:"mdi:alert",fontSize:20,color:l.palette.error.main,transform:"scale(1.2)"}):n?(0,o.jsx)(b.Z,{icon:"mdi:check-circle",fontSize:20,color:l.palette.primary.main,transform:"scale(1.2)"}):(0,o.jsx)(A,{sx:{borderColor:i?"primary.main":(0,L.Fq)(l.palette.primary.main,.3)}})},R=(0,a.ZP)(r.Z)(e=>{let{theme:i}=e;return{[i.breakpoints.down("md")]:{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}},"& .MuiStep-root":{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center"},"& .step-number":{fontWeight:600,letterSpacing:.25,fontSize:"2.125rem",marginRight:i.spacing(2.5),color:i.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"0.875rem",letterSpacing:"0.1px",color:i.palette.text.primary},"& .step-subtitle":{fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.4px",color:i.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:i.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:i.palette.error.main}}},"& .MuiStepConnector-root":{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:i.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:(0,L.Fq)(i.palette.primary.main,.3)}},"& .MuiStepper-alternativeLabel":{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:i.spacing(1)}}},"& .MuiStepper-vertical":{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:i.spacing(2.25),borderColor:i.palette.primary.main},"& .button-wrapper":{marginTop:i.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:i.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:i.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}}}),G=[{title:"Dados obrigat\xf3rios",subtitle:"Insira os dados obrigat\xf3rios"},{title:"Dados opcionais",subtitle:"Insira os dados opcionais"},{title:"Finalizar",subtitle:"Finalize o cadastro"}],J=()=>{let[e,i]=(0,u.useState)(0),[n,r]=(0,u.useState)(),l=()=>{i(e+1)},a=()=>{0!==e&&i(e-1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R,{sx:{mb:10},children:(0,o.jsx)(x.Z,{activeStep:e,children:G.map((e,i)=>(0,o.jsx)(c.Z,{children:(0,o.jsx)(m.Z,{StepIconComponent:V,children:(0,o.jsxs)("div",{className:"step-label",children:[(0,o.jsx)(p.Z,{className:"step-number",children:"0".concat(i+1)}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.Z,{className:"step-title",children:e.title}),(0,o.jsx)(p.Z,{className:"step-subtitle",children:e.subtitle})]})]})})},i))})}),(e=>{switch(e){case 0:return(0,o.jsx)(_,{handleNext:l,setDataGlobal:r,dataGlobal:n});case 1:return(0,o.jsx)(C,{handleNext:l,handlePrev:a,setDataGlobal:r,dataGlobal:n});case 2:return(0,o.jsx)(T,{handlePrev:a,setDataGlobal:r,dataGlobal:n});default:return null}})(e)]})};(0,a.ZP)("img")({maxWidth:200,height:"auto",maxHeight:"100%"});let B=(0,a.ZP)(r.Z)(e=>{let{theme:i}=e;return{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:i.spacing(12),[i.breakpoints.up("lg")]:{maxWidth:480},[i.breakpoints.down(1285)]:{maxWidth:400},[i.breakpoints.up("xl")]:{maxWidth:635}}}),O=(0,a.ZP)(r.Z)(e=>{let{theme:i}=e;return{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:i.spacing(6),backgroundColor:i.palette.background.paper,[i.breakpoints.up("sm")]:{padding:i.spacing(12)}}}),H=(0,a.ZP)(r.Z)(e=>{let{theme:i}=e;return{maxWidth:700,margin:i.spacing(0,"auto"),[i.breakpoints.up("md")]:{width:700}}}),X=()=>{let e=(0,s.Z)(),{settings:i}=(0,d.r)(),n=(0,l.Z)(e.breakpoints.down("lg")),{skin:a}=i;return(0,o.jsxs)(r.Z,{className:"content-right",children:[n?null:(0,o.jsx)(B,{children:(0,o.jsx)("img",{src:"/images/storyset/fornecedorRegistro.svg",width:520})}),(0,o.jsx)("img",{alt:"mask",src:"https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-3/images/pages/misc-mask-light.png",className:"css-84vgca",style:{position:"absolute",zIndex:"-1",bottom:"0",left:"0",width:"100%"}}),(0,o.jsx)(O,{sx:"bordered"!==a||n?{}:{borderLeft:"1px solid ".concat(e.palette.divider)},children:(0,o.jsx)(H,{children:(0,o.jsx)(J,{})})})]})};X.getLayout=e=>(0,o.jsx)(t.Z,{children:e}),X.guestGuard=!0;var K=X}},function(e){e.O(0,[7536,9491,8828,9774,2888,179],function(){return e(e.s=92012)}),_N_E=e.O()}]);