(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8550],{92012:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registro",function(){return n(5467)}])},34175:function(e,i,n){"use strict";function o(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function r(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function l(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function s(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function a(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(i,{Bk:function(){return l},CL:function(){return a},PK:function(){return o},Tc:function(){return s},VL:function(){return r}})},82747:function(e,i,n){"use strict";function o(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let i=e.length-2,n=e.substring(0,i),o=e.substring(i),r=0,l=i-7;for(let s=i;s>=1;s--)r+=n.charAt(i-s)*l--,l<2&&(l=9);let a=r%11<2?0:11-r%11;if(a!=o.charAt(0))return!1;i+=1,n=e.substring(0,i),r=0,l=i-7;for(let t=i;t>=1;t--)r+=n.charAt(i-t)*l--,l<2&&(l=9);return(a=r%11<2?0:11-r%11)==o.charAt(1)}function r(e){let i;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let o=1;o<=9;o++)n+=parseInt(e.substring(o-1,o))*(11-o);if((10==(i=10*n%11)||11===i)&&(i=0),i!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(i=10*n%11)||11===i)&&(i=0),i===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(i,{dI:function(){return l},sw:function(){return r},zk:function(){return o}})},5467:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return K}});var o=n(85893),r=n(61953),l=n(61225),s=n(67074),a=n(62097),t=n(88942),d=n(51514),u=n(67294),c=n(44044),x=n(98948),m=n(94071),p=n(29630),h=n(79072),f=n(75084),v=n(67836),j=n(34175),Z=n(87536),g=n(60664),b=n(21609),y=n(55343);let C=e=>{var i,n,l,s,a,t,d,u,c,x,m,C,S,w,P,F;let{handleNext:D,handlePrev:M,setDataGlobal:k,dataGlobal:z}=e,{register:I,handleSubmit:W,setValue:N,formState:{errors:$}}=(0,Z.cI)({}),_=e=>{var i;k({usuario:{...null==z?void 0:z.usuario,fields:{...null==z?void 0:null===(i=z.usuario)||void 0===i?void 0:i.fields,...e}}}),D()},E=async e=>{9===e.length&&g.h.get("https://viacep.com.br/ws/".concat(e,"/json/")).then(e=>{var i;N("logradouro",e.data.logradouro),N("bairro",null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.bairro),N("cidade",e.data.localidade),N("uf",e.data.uf)})};return(0,o.jsxs)("form",{onSubmit:W(_),children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Informa\xe7\xf5es opcionais"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es opcionais"})]}),(0,o.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Telefone",fullWidth:!0,name:"telefone",defaultValue:null==z?void 0:null===(i=z.usuario)||void 0===i?void 0:null===(n=i.fields)||void 0===n?void 0:n.telefone,...I("telefone"),onChange(e){N("telefone",(0,j.Bk)(e.target.value))},inputProps:{maxLength:15,type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Cep",placeholder:"Cep",defaultValue:null==z?void 0:null===(l=z.usuario)||void 0===l?void 0:null===(s=l.fields)||void 0===s?void 0:s.cep,name:"cep",fullWidth:!0,...I("cep"),onChange(e){N("cep",(0,j.Tc)(e.target.value)),E(e.target.value)},inputProps:{maxLength:9,type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Rua",placeholder:"Rua",defaultValue:null==z?void 0:null===(a=z.usuario)||void 0===a?void 0:null===(t=a.fields)||void 0===t?void 0:t.logradouro,name:"logradouro",...I("logradouro"),fullWidth:!0})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"N\xfamero",defaultValue:null==z?void 0:null===(d=z.usuario)||void 0===d?void 0:null===(u=d.fields)||void 0===u?void 0:u.numero,placeholder:"N\xfamero",name:"numero",fullWidth:!0,...I("numero"),inputProps:{type:"tel",inputMode:"numeric"}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Complemento",defaultValue:null==z?void 0:null===(c=z.usuario)||void 0===c?void 0:null===(x=c.fields)||void 0===x?void 0:x.complemento,placeholder:"Complemento",name:"complemento",fullWidth:!0,...I("complemento")})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(y.Z,{fullWidth:!0,children:(0,o.jsx)(v.Z,{defaultValue:null==z?void 0:null===(m=z.usuario)||void 0===m?void 0:null===(C=m.fields)||void 0===C?void 0:C.bairro,label:"Bairro",placeholder:"Bairro",name:"bairro",...I("bairro",{required:!1})})})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Cidade",placeholder:"Cidade",defaultValue:null==z?void 0:null===(S=z.usuario)||void 0===S?void 0:null===(w=S.fields)||void 0===w?void 0:w.cidade,name:"cidade",fullWidth:!0,...I("cidade")})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"Estado",placeholder:"Estado",defaultValue:null==z?void 0:null===(P=z.usuario)||void 0===P?void 0:null===(F=P.fields)||void 0===F?void 0:F.uf,name:"uf",fullWidth:!0,...I("uf"),onChange(e){N("uf",(0,j.CL)(e.target.value))},inputProps:{maxLength:2}})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,children:(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(f.Z,{color:"secondary",variant:"contained",onClick:M,startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{type:"submit",variant:"contained",onClick:W,endIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]})})]})]})};var S=n(74231),w=n(47533),P=n(82747),F=n(11163),D=n.n(F),M=n(58316),k=n(9041),z=n(19604),I=n(39063),W=n(80562),N=n(41664),$=n.n(N);n(74865);let _=e=>{var i,n,l,s,a,t,d,c,x,m,C,F,N,_,E,q,T,L,A,V;let{handleNext:R,setDataGlobal:G,dataGlobal:J}=e,B=D();B.pathname;let[O,X]=(0,u.useState)(null),H=(0,u.useRef)(null),[K,U]=(0,u.useState)({showPassword:!1,showConfirmPassword:!1}),Q=()=>{U({...K,showPassword:!K.showPassword})},Y=e=>{e.preventDefault()},ee=()=>{U({...K,showConfirmPassword:!K.showConfirmPassword})},ei=e=>{e.preventDefault()},en=S.Ry().shape({cnpj:S.Z_().nullable().required("CNPJ \xe9 obrigat\xf3rio").test("cnpj","CNPJ inv\xe1lido",function(e){let{errorCnpj:i}=this.parent;return!i&&(0,P.zk)(e)}),nomeFantasia:S.Z_().nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Nome Fantasia \xe9 obrigat\xf3rio")}),email:S.Z_().email("Email inv\xe1lido").nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Email \xe9 obrigat\xf3rio")}),razaoSocial:S.Z_().nullable().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Cidade \xe9 obrigat\xf3rio")}),senha:S.Z_().when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Senha \xe9 obrigat\xf3rio").min(4,"Senha deve ter no m\xednimo 4 caracteres")}),confirmaSenha:S.Z_().oneOf([S.iH("senha")],"As senhas n\xe3o conferem").when("cnpj",{is(e){var i;return(null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.exists)===!1},then:S.Z_().required("Confirma\xe7\xe3o de senha \xe9 obrigat\xf3rio").min(4,"Senha deve ter no m\xednimo 4 caracteres")})}),{register:eo,handleSubmit:er,setValue:el,formState:{errors:es}}=(0,Z.cI)({resolver:(0,w.X)(en)}),ea=e=>{if(18===e.length&&(0,P.zk)(e))g.h.post("/registro-fornecedor",{value:e},{headers:{"function-name":"VerifyCnpjTableFactory"}}).then((e,i)=>{X(e.data)}),g.h.post("/registro-fornecedor",{cnpj:e},{headers:{"function-name":"handleGetCnpj"}}).then((i,n)=>{var o,r;console.log("\uD83D\uDE80 ~ :",i.data),i.data.length>0?G({usuario:{...null==J?void 0:J.usuario,exists:!0,fields:{...null==J?void 0:null===(o=J.usuario)||void 0===o?void 0:o.fields,...i.data[0]}}}):G({usuario:{...null==J?void 0:J.usuario,exists:!1,fields:{...null==J?void 0:null===(r=J.usuario)||void 0===r?void 0:r.fields,cnpj:e}}})});else{var i;G({usuario:{...null==J?void 0:J.usuario,exists:null,fields:{...null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.fields}}})}},et=e=>{var i;R(e),G({usuario:{...null==J?void 0:J.usuario,fields:{...null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:i.fields,...e}}})},ed=B.query.u,eu=B.query.c,ec=async(e,i)=>{await g.h.post("/login-fornecedor/setAcessLink",{data:{unidadeID:e,cnpj:i}}).then((e,i)=>{ea(e.data[0].cnpj),el("cnpj",e.data[0].cnpj)})};return(0,u.useEffect)(()=>{ed&&eu&&(ec(ed,eu),setTimeout(()=>{H.current.focus()},500))},[ed,eu]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:er(et),children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Informa\xe7\xf5es obrigat\xf3rios"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es obrigat\xf3rias"})]}),(0,o.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{label:"CNPJ",fullWidth:!0,...eo("cnpj",{required:!0}),error:es.cnpj&&!0,helperText:es.cnpj&&es.cnpj.message,defaultValue:null==J?void 0:null===(i=J.usuario)||void 0===i?void 0:null===(n=i.fields)||void 0===n?void 0:n.cnpj,onChange(e){ea(e.target.value)},inputProps:{maxLength:18,type:"tel",inputMode:"numeric",onChange(e){el("cnpj",(0,j.PK)(e.target.value))}}})}),!O&&(null==J?void 0:null===(l=J.usuario)||void 0===l?void 0:l.exists)===!1&&(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,o.jsx)(z.Z,{severity:"warning",children:"Antes de realizar o cadastro, \xe9 necess\xe1rio que uma f\xe1brica habilite o seu CNPJ como um fornecedor."})}),J&&(null==J?void 0:null===(s=J.usuario)||void 0===s?void 0:s.exists)===!1&&!0===O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Nome Fantasia",defaultValue:null==J?void 0:null===(a=J.usuario)||void 0===a?void 0:null===(t=a.fields)||void 0===t?void 0:t.nomeFantasia,...eo("nomeFantasia",{required:!0}),error:es.nomeFantasia&&!0,inputRef:H,helperText:es.nomeFantasia&&es.nomeFantasia.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Raz\xe3o Social",className:"required",defaultValue:null==J?void 0:null===(d=J.usuario)||void 0===d?void 0:null===(c=d.fields)||void 0===c?void 0:c.razaoSocial,...eo("razaoSocial",{required:!0}),error:es.razaoSocial&&!0,helperText:es.razaoSocial&&es.razaoSocial.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Email Institucional",defaultValue:null==J?void 0:null===(x=J.usuario)||void 0===x?void 0:null===(m=x.fields)||void 0===m?void 0:m.email,...eo("email",{required:!0}),error:es.email&&!0,helperText:es.email&&es.email.message})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-password",color:es.senha?"error":"",children:"Senha"}),(0,o.jsx)(I.Z,{label:"Senha",id:"input-password",type:K.showPassword?"text":"password",name:"senha",...eo("senha"),endAdornment:(0,o.jsx)(k.Z,{position:"end",children:(0,o.jsx)(W.Z,{edge:"end",onClick:Q,onMouseDown:Y,children:(0,o.jsx)(b.Z,{icon:K.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:es.senha&&!0,helperText:es.senha&&es.senha.message})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-confirm-password",style:{color:es.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,o.jsx)(I.Z,{label:"Confirme a senha",name:"confirmaSenha",...eo("confirmaSenha"),id:"input-confirm-password",type:K.showConfirmPassword?"text":"password",endAdornment:(0,o.jsx)(k.Z,{position:"end",children:(0,o.jsx)(W.Z,{edge:"end",onClick:ee,onMouseDown:ei,children:(0,o.jsx)(b.Z,{icon:K.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:es.confirmaSenha&&!0}),(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"error.main"},children:es.confirmaSenha&&es.confirmaSenha.message})]})})]}),J&&(null==J?void 0:null===(C=J.usuario)||void 0===C?void 0:C.exists)===!0&&(0,o.jsxs)(h.ZP,{item:!0,xs:12,md:12,children:[(0,o.jsx)("h3",{children:"CNPJ j\xe1 cadastrado"}),(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:"100px"},children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:2},children:[(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:"Nome Fantasia:"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:null==J?void 0:null===(F=J.usuario)||void 0===F?void 0:F.fields.nomeFantasia})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",gap:2},children:[(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:"Email Institucional:"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:null==J?void 0:null===(N=J.usuario)||void 0===N?void 0:N.fields.email})]})]}),(0,o.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:(null==J?void 0:null===(_=J.usuario)||void 0===_?void 0:null===(E=_.fields)||void 0===E?void 0:E.existsFornecedor)>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{href:"/fornecedor",component:$(),sx:{color:"primary.main",textDecoration:"none"},children:"Fazer login"}),(0,o.jsx)(p.Z,{href:"/fornecedor",component:$(),sx:{color:"primary.main",textDecoration:"none"},children:"Esqueceu a senha?"})]})})]}),(null==J?void 0:null===(q=J.usuario)||void 0===q?void 0:null===(T=q.fields)||void 0===T?void 0:T.existsFornecedor)===0&&O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{sx:{color:"text.primary",marginTop:"10px"},children:"Empresa j\xe1 cadastrada, apenas \xe9 necessario criar um usu\xe1rio"}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,mt:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-password",color:es.senha?"error":"",children:"Senha"}),(0,o.jsx)(I.Z,{label:"Senha",id:"input-password",type:K.showPassword?"text":"password",name:"senha",...eo("senha"),endAdornment:(0,o.jsx)(k.Z,{position:"end",children:(0,o.jsx)(W.Z,{edge:"end",onClick:Q,onMouseDown:Y,children:(0,o.jsx)(b.Z,{icon:K.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:es.senha&&!0,helperText:es.senha&&es.senha.message})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:6,mt:6,children:(0,o.jsxs)(y.Z,{fullWidth:!0,children:[(0,o.jsx)(M.Z,{htmlFor:"input-confirm-password",style:{color:es.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,o.jsx)(I.Z,{label:"Confirme a senha",name:"confirmaSenha",...eo("confirmaSenha"),id:"input-confirm-password",type:K.showConfirmPassword?"text":"password",endAdornment:(0,o.jsx)(k.Z,{position:"end",children:(0,o.jsx)(W.Z,{edge:"end",onClick:ee,onMouseDown:ei,children:(0,o.jsx)(b.Z,{icon:K.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:es.confirmaSenha&&!0}),(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"error.main"},children:es.confirmaSenha&&es.confirmaSenha.message})]})})]})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(f.Z,{disabled:!0,variant:"contained",startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{disabled:!O||(null==J?void 0:null===(L=J.usuario)||void 0===L?void 0:L.exists)===!0&&(null==J?void 0:null===(A=J.usuario)||void 0===A?void 0:null===(V=A.fields)||void 0===V?void 0:V.existsFornecedor)>0,type:"submit",variant:"contained",onClick:er,endIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",marginTop:10,flexWrap:"wrap",justifyContent:"start"},children:[(0,o.jsx)(p.Z,{sx:{mr:2,color:"text.secondary"},children:"Fazer login?"}),(0,o.jsx)(p.Z,{href:"/fornecedor",component:$(),sx:{color:"primary.main",textDecoration:"none"},children:"Login"})]})]})]})]})})};var E=n(86501),q=n(17288);n(61310);let T=e=>{var i,n,l,s,a,t,d;let{handlePrev:c,dataGlobal:x,setDataGlobal:m}=e;D();let[v,j]=(0,u.useState)(!0),[Z,y]=(0,u.useState)(!1),C=(0,q.a)(),S=()=>{y(!0),g.h.post("/registro-fornecedor",{data:x},{headers:{"function-name":"handleSaveFornecedor"}}).then(e=>{201===e.status?E.ZP.error(e.data.message):(E.ZP.success("Cadastro efetuado com sucesso!"),setTimeout(()=>{var e;E.ZP.success("Efetuando login no sistema");let{cnpj:i,senha:n}=null==x?void 0:null===(e=x.usuario)||void 0===e?void 0:e.fields;C.loginFornecedor({cnpj:i,password:n,rememberMe:v},e=>{})},2e3))}).catch(e=>{E.ZP.error(e.message)})};return(0,u.useEffect)(()=>{var e,i,n,o,r,l,s;let a={logradouro:null==x?void 0:null===(e=x.usuario)||void 0===e?void 0:e.fields.logradouro,numero:null==x?void 0:null===(i=x.usuario)||void 0===i?void 0:i.fields.numero,complemento:null==x?void 0:null===(n=x.usuario)||void 0===n?void 0:n.fields.complemento,bairro:null==x?void 0:null===(o=x.usuario)||void 0===o?void 0:o.fields.bairro,cidade:null==x?void 0:null===(r=x.usuario)||void 0===r?void 0:r.fields.cidade,uf:null==x?void 0:null===(l=x.usuario)||void 0===l?void 0:l.fields.uf},t=Object.entries(a).map(e=>{let[i,n]=e;if(n)return"".concat(n,", ")}).join("").slice(0,-2)+".";m({usuario:{...null==x?void 0:x.usuario,fields:{...null==x?void 0:null===(s=x.usuario)||void 0===s?void 0:s.fields,enderecoCompleto:t}}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(p.Z,{variant:"h5",children:"Verifique as informa\xe7\xf5es"}),(0,o.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Envie se estiver tudo certo"})]}),(0,o.jsx)(h.ZP,{container:!0,spacing:5,children:(0,o.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"CNPJ"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(i=x.usuario)||void 0===i?void 0:i.fields.cnpj})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Nome Fantasia"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(n=x.usuario)||void 0===n?void 0:n.fields.nomeFantasia})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Raz\xe3o Social"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(l=x.usuario)||void 0===l?void 0:l.fields.razaoSocial})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Email Institucional"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(s=x.usuario)||void 0===s?void 0:s.fields.email})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Telefone"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(a=x.usuario)||void 0===a?void 0:a.fields.telefone})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Cep"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(t=x.usuario)||void 0===t?void 0:t.fields.cep})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Endere\xe7o"}),(0,o.jsx)(p.Z,{sx:{color:"text.primary"},children:null==x?void 0:null===(d=x.usuario)||void 0===d?void 0:d.fields.enderecoCompleto})]})]}),(0,o.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",mt:5},children:[(0,o.jsx)(f.Z,{color:"secondary",variant:"contained",onClick:c,startIcon:(0,o.jsx)(b.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,o.jsx)(f.Z,{type:"submit",onClick:S,disabled:Z,color:"success",variant:"contained",children:"Concluir"})]})]})})]})};var L=n(41796);let A=(0,s.ZP)(r.Z)(()=>({width:20,height:20,borderWidth:3,borderRadius:"50%",borderStyle:"solid"})),V=e=>{let{active:i,completed:n,error:r}=e,l=(0,a.Z)();return r?(0,o.jsx)(b.Z,{icon:"mdi:alert",fontSize:20,color:l.palette.error.main,transform:"scale(1.2)"}):n?(0,o.jsx)(b.Z,{icon:"mdi:check-circle",fontSize:20,color:l.palette.primary.main,transform:"scale(1.2)"}):(0,o.jsx)(A,{sx:{borderColor:i?"primary.main":(0,L.Fq)(l.palette.primary.main,.3)}})},R=(0,s.ZP)(r.Z)(e=>{let{theme:i}=e;return{[i.breakpoints.down("md")]:{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}},"& .MuiStep-root":{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center"},"& .step-number":{fontWeight:600,letterSpacing:.25,fontSize:"2.125rem",marginRight:i.spacing(2.5),color:i.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"0.875rem",letterSpacing:"0.1px",color:i.palette.text.primary},"& .step-subtitle":{fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.4px",color:i.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:i.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:i.palette.error.main}}},"& .MuiStepConnector-root":{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:i.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:(0,L.Fq)(i.palette.primary.main,.3)}},"& .MuiStepper-alternativeLabel":{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:i.spacing(1)}}},"& .MuiStepper-vertical":{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:i.spacing(2.25),borderColor:i.palette.primary.main},"& .button-wrapper":{marginTop:i.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:i.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:i.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}}}),G=[{title:"Dados obrigat\xf3rios",subtitle:"Insira os dados obrigat\xf3rios"},{title:"Dados opcionais",subtitle:"Insira os dados opcionais"},{title:"Finalizar",subtitle:"Finalize o cadastro"}],J=()=>{let[e,i]=(0,u.useState)(0),[n,r]=(0,u.useState)(),l=()=>{i(e+1)},s=()=>{0!==e&&i(e-1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R,{sx:{mb:10},children:(0,o.jsx)(x.Z,{activeStep:e,children:G.map((e,i)=>(0,o.jsx)(c.Z,{children:(0,o.jsx)(m.Z,{StepIconComponent:V,children:(0,o.jsxs)("div",{className:"step-label",children:[(0,o.jsx)(p.Z,{className:"step-number",children:"0".concat(i+1)}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.Z,{className:"step-title",children:e.title}),(0,o.jsx)(p.Z,{className:"step-subtitle",children:e.subtitle})]})]})})},i))})}),(e=>{switch(e){case 0:return(0,o.jsx)(_,{handleNext:l,setDataGlobal:r,dataGlobal:n});case 1:return(0,o.jsx)(C,{handleNext:l,handlePrev:s,setDataGlobal:r,dataGlobal:n});case 2:return(0,o.jsx)(T,{handlePrev:s,setDataGlobal:r,dataGlobal:n});default:return null}})(e)]})};(0,s.ZP)("img")({maxWidth:200,height:"auto",maxHeight:"100%"});let B=(0,s.ZP)(r.Z)(e=>{let{theme:i}=e;return{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:i.spacing(12),[i.breakpoints.up("lg")]:{maxWidth:480},[i.breakpoints.down(1285)]:{maxWidth:400},[i.breakpoints.up("xl")]:{maxWidth:635}}}),O=(0,s.ZP)(r.Z)(e=>{let{theme:i}=e;return{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:i.spacing(6),backgroundColor:i.palette.background.paper,[i.breakpoints.up("sm")]:{padding:i.spacing(12)}}}),X=(0,s.ZP)(r.Z)(e=>{let{theme:i}=e;return{maxWidth:700,margin:i.spacing(0,"auto"),[i.breakpoints.up("md")]:{width:700}}}),H=()=>{let e=(0,a.Z)(),{settings:i}=(0,d.r)(),n=(0,l.Z)(e.breakpoints.down("lg")),{skin:s}=i;return(0,o.jsxs)(r.Z,{className:"content-right",children:[n?null:(0,o.jsx)(B,{children:(0,o.jsx)("img",{src:"/images/storyset/fornecedorRegistro.svg",width:520})}),(0,o.jsx)("img",{alt:"mask",src:"https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-3/images/pages/misc-mask-light.png",className:"css-84vgca",style:{position:"absolute",zIndex:"-1",bottom:"0",left:"0",width:"100%"}}),(0,o.jsx)(O,{sx:"bordered"!==s||n?{}:{borderLeft:"1px solid ".concat(e.palette.divider)},children:(0,o.jsx)(X,{children:(0,o.jsx)(J,{})})})]})};H.getLayout=e=>(0,o.jsx)(t.Z,{children:e}),H.guestGuard=!0;var K=H}},function(e){e.O(0,[7536,4231,5991,9774,2888,179],function(){return e(e.s=92012)}),_N_E=e.O()}]);