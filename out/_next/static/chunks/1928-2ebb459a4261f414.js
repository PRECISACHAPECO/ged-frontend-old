"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1928],{91928:function(e,r,a){a.d(r,{Z:function(){return D}});var l=a(85893),n=a(11163),o=a.n(n),s=a(67294),i=a(60664),t=a(49837),d=a(91359),c=a(79072),u=a(55343),m=a(67836),h=a(29630),x=a(74231),p=a(87536),f=a(47533),j=a(32631),Z=a(86501),b=a(28315),g=a(46749),v=a(89191),C=a(34175),P=a(30381),y=a.n(P);function _(e,r){let a=y()(e),l=a.format(r);return l}let B=()=>{let[e,r]=(0,s.useState)(!1),[a,n]=(0,s.useState)(""),{id:P}=o().query,y=o(),B=(0,g.Lo)(y.pathname),D=(0,g.g_)(y.pathname),$=(0,s.useRef)(null),S=x.Ry().shape({nome:x.Z_().required(""),razaoSocial:x.Z_().nullable(),cnpj:x.Z_().nullable().test("","",function(e){let{errorCnpj:r}=this.parent;return!r&&function(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,a=e.substring(0,r),l=e.substring(r),n=0,o=r-7;for(let s=r;s>=1;s--)n+=a.charAt(r-s)*o--,o<2&&(o=9);let i=n%11<2?0:11-n%11;if(i!=l.charAt(0))return!1;r+=1,a=e.substring(0,r),n=0,o=r-7;for(let t=r;t>=1;t--)n+=a.charAt(r-t)*o--,o<2&&(o=9);return(i=n%11<2?0:11-n%11)==l.charAt(1)}(e)}),errorCnpj:x.O7().notRequired(),responsavel:x.Z_().nullable(),email:x.Z_().nullable(),dataCadastro:x.Z_().nullable(),telefone1:x.Z_().nullable(),telefone2:x.Z_().nullable(),cep:x.Z_().nullable(),logradouro:x.Z_().nullable(),complemento:x.Z_().nullable(),numero:x.Z_().nullable(),bairro:x.Z_().nullable(),cidade:x.Z_().nullable(),uf:x.Z_().nullable(),status:x.Z_().nullable()}),{control:Q,handleSubmit:W,formState:{errors:N},reset:w,watch:E}=(0,p.cI)({resolver:(0,f.X)(S)}),L=async e=>{if(9==e.length){let r=e.replace(/\D/g,"");i.h.get("https://viacep.com.br/ws/"+r+"/json/").then(e=>{e.data.localidade?(w({...E(),logradouro:e.data.logradouro,bairro:e.data.bairro,cidade:e.data.localidade,uf:e.data.uf}),Z.ZP.success("Endere\xe7o encontrado!")):Z.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},k=async e=>{let r={...e,dataCadastro:_(e.dataCadastro,"YYYY-MM-DD")};try{"new"===B?(await i.h.post("".concat(D,"/novo"),r),y.push(D),Z.ZP.success(g.OD.successNew),w(r)):"edit"===B&&(await i.h.put("".concat(D,"/").concat(P),r),Z.ZP.success(g.OD.successUpdate),console.log("editado"),console.log(r))}catch(a){a.response&&409===a.response.status?Z.ZP.error(g.OD.errorRepeated):console.log(a)}},z=async()=>{try{await i.h.delete("".concat(D,"/").concat(P)),y.push(D),Z.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(Z.ZP.error(g.OD.pendingDelete),r(!1)):console.log(e)}};return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await i.h.get("".concat(D,"/").concat(P));w(e.data),n(e.data)}catch(r){console.log(r)}};e(),"new"===B&&$.current.focus()},[]),(0,l.jsxs)(l.Fragment,{children:[JSON.stringify(N),(0,l.jsx)(t.Z,{children:(0,l.jsxs)("form",{onSubmit:W(k),children:[(0,l.jsx)(v.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>W(k),btnDelete:"edit"===B,onclickDelete:()=>r(!0)}),(0,l.jsx)(d.Z,{children:(0,l.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"nome",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Nome Fantasia",onChange:a,placeholder:"Nome Fantasia",error:Boolean(N.nome),"aria-describedby":"validation-schema-nome",inputRef:$})}}),N.nome&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:N.nome.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"razaoSocial",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Raz\xe3o Social",onChange:a,placeholder:"Nome",error:Boolean(N.razaoSocial),"aria-describedby":"validation-schema-razaoSocial"})}}),N.razaoSocial&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-razaoSocial",children:N.razaoSocial.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cnpj",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(0,C.PK)(null!=r?r:""),label:"CNPJ",onChange:a,placeholder:"CNPJ",error:Boolean(N.cnpj),"aria-describedby":"validation-schema-cnpj",inputProps:{maxLength:18}})}}),N.cnpj&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-cnpj"})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"responsavel",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Respons\xe1vel",onChange:a,placeholder:"Respons\xe1vel",error:Boolean(N.responsavel),"aria-describedby":"validation-schema-responsavel"})}}),N.responsavel&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-responsavel",children:N.responsavel.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"email",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Email",onChange:a,placeholder:"Email",error:Boolean(N.email),"aria-describedby":"validation-schema-email"})}}),N.email&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:N.email.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"telefone1",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(0,C.Bk)(null!=r?r:""),label:"Telefone 1",onChange:a,placeholder:"Telefone 1",error:Boolean(N.telefone1),"aria-describedby":"validation-schema-telefone1",inputProps:{maxLength:16}})}}),N.telefone1&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-telefone1",children:N.telefone1.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"telefone2",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(0,C.Bk)(null!=r?r:""),label:"Telefone 2",onChange:a,placeholder:"Telefone 2",error:Boolean(N.telefone2),"aria-describedby":"validation-schema-telefone2",inputProps:{maxLength:16}})}}),N.telefone2&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-telefone2",children:N.telefone2.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cep",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(0,C.Tc)(null!=r?r:""),label:"CEP",onChange(e){a(e),L(e.target.value)},placeholder:"CEP",error:Boolean(N.cep),"aria-describedby":"validation-schema-cep",inputProps:{maxLength:9}})}}),N.cep&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-cep",children:N.cep.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"logradouro",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Logradouro",onChange:a,placeholder:"Logradouro",error:Boolean(N.logradouro),"aria-describedby":"validation-schema-logradouro"})}}),N.logradouro&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-logradouro",children:N.logradouro.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"complemento",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Complemento",onChange:a,placeholder:"Complemento",error:Boolean(N.complemento),"aria-describedby":"validation-schema-complemento"})}}),N.complemento&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-complemento",children:N.complemento.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"numero",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"N\xfamero",onChange:a,placeholder:"N\xfamero",error:Boolean(N.numero),"aria-describedby":"validation-schema-numero"})}}),N.numero&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-numero",children:N.numero.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"bairro",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:null!=r?r:"",label:"Bairro",onChange:a,placeholder:"Bairro",error:Boolean(N.bairro),"aria-describedby":"validation-schema-bairro"})}}),N.bairro&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-bairro",children:N.bairro.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"cidade",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{label:"Cidade",onChange:a,placeholder:"Cidade",error:Boolean(N.cidade),"aria-describedby":"validation-schema-cidade",value:null!=r?r:"",defaultValue:"aaaaa"})}}),N.cidade&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-cidade",children:N.cidade.message})]})}),(0,l.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(u.Z,{fullWidth:!0,children:[(0,l.jsx)(p.Qr,{name:"uf",control:Q,render(e){let{field:{value:r,onChange:a}}=e;return(0,l.jsx)(m.Z,{value:(0,C.CL)(null!=r?r:""),label:"UF",onChange:a,placeholder:"UF",error:Boolean(N.uf),"aria-describedby":"validation-schema-uf",inputProps:{maxLength:2}})}}),N.uf&&(0,l.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-uf",children:N.uf.message})]})})]})})]})}),"edit"===B&&(0,l.jsxs)(h.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",_(a.dataCadastro,"DD/MM/YYYY")]}),(0,l.jsx)(b.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>r(!1),handleSubmit:z,btnCancel:!0,btnConfirm:!0})]})};var D=B},34175:function(e,r,a){function l(e){return console.log("mask>: ",e),e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function n(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function o(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}a.d(r,{Bk:function(){return n},CL:function(){return s},PK:function(){return l},Tc:function(){return o}})}}]);