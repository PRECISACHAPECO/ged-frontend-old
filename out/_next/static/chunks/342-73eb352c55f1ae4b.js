"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{91342:function(e,a,l){l.d(a,{Z:function(){return $}});var r=l(85893),n=l(11163),o=l.n(n),s=l(67294),i=l(60664),t=l(49837),d=l(91359),c=l(79072),m=l(55343),u=l(67836),h=l(29630),x=l(74231),p=l(87536),j=l(47533),Z=l(32631),f=l(86501),b=l(10825),g=l(46749),v=l(60033);function C(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}var P=l(30381),y=l.n(P);function _(e,a){let l=y()(e),r=l.format(a);return r}let D=()=>{let[e,a]=(0,s.useState)(!1),[l,n]=(0,s.useState)(""),{id:P}=o().query,y=o(),D=(0,g.Lo)(y.pathname),$=(0,g.g_)(y.pathname),B=(0,s.useRef)(null),S=x.Ry().shape({nomeFantasia:x.Z_().required(""),razaoSocial:x.Z_().nullable(),cnpj:x.Z_().nullable().test("","",function(e){let{errorCnpj:a}=this.parent;return!a&&function(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let a=e.length-2,l=e.substring(0,a),r=e.substring(a),n=0,o=a-7;for(let s=a;s>=1;s--)n+=l.charAt(a-s)*o--,o<2&&(o=9);let i=n%11<2?0:11-n%11;if(i!=r.charAt(0))return!1;a+=1,l=e.substring(0,a),n=0,o=a-7;for(let t=a;t>=1;t--)n+=l.charAt(a-t)*o--,o<2&&(o=9);return(i=n%11<2?0:11-n%11)==r.charAt(1)}(e)}),errorCnpj:x.O7().notRequired(),responsavel:x.Z_().nullable(),email:x.Z_().nullable(),dataCadastro:x.Z_().nullable(),telefone1:x.Z_().nullable(),telefone2:x.Z_().nullable(),cep:x.Z_().nullable(),logradouro:x.Z_().nullable(),complemento:x.Z_().nullable(),numero:x.Z_().nullable(),bairro:x.Z_().nullable(),cidade:x.Z_().nullable(),uf:x.Z_().nullable(),status:x.Z_().nullable()}),{control:Q,handleSubmit:W,formState:{errors:N},reset:w,watch:F}=(0,p.cI)({resolver:(0,j.X)(S)}),z=async e=>{if(9==e.length){let a=e.replace(/\D/g,"");i.h.get("https://viacep.com.br/ws/"+a+"/json/").then(e=>{w({...F(),logradouro:e.data.logradouro,bairro:e.data.bairro,cidade:e.data.localidade,uf:e.data.uf})})}},E=async e=>{let a={...e,dataCadastro:_(e.dataCadastro,"YYYY-MM-DD")};try{"new"===D?(await i.h.post("".concat($,"/novo"),a),y.push($),f.ZP.success(g.OD.successNew),w(a)):"edit"===D&&(await i.h.put("".concat($,"/").concat(P),a),f.ZP.success(g.OD.successUpdate),console.log("editado"),console.log(a))}catch(l){l.response&&409===l.response.status?f.ZP.error(g.OD.errorRepeated):console.log(l)}},L=async()=>{try{await i.h.delete("".concat($,"/").concat(P)),y.push($),f.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(f.ZP.error(g.OD.pendingDelete),a(!1)):console.log(e)}};return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await i.h.get("".concat($,"/").concat(P));w(e.data),n(e.data)}catch(a){console.log(a)}};e(),"new"===D&&B.current.focus()},[]),(0,r.jsxs)(r.Fragment,{children:[JSON.stringify(N),(0,r.jsx)(t.Z,{children:(0,r.jsxs)("form",{onSubmit:W(E),children:[(0,r.jsx)(v.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>W(E),btnDelete:"edit"===D,onclickDelete:()=>a(!0)}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"nomeFantasia",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Nome Fantasia",onChange:l,placeholder:"Nome Fantasia",error:Boolean(N.nomeFantasia),"aria-describedby":"validation-schema-nome",inputRef:B})}}),N.nomeFantasia&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:N.nomeFantasia.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"razaoSocial",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Raz\xe3o Social",onChange:l,placeholder:"Nome",error:Boolean(N.razaoSocial),"aria-describedby":"validation-schema-razaoSocial"})}}),N.razaoSocial&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-razaoSocial",children:N.razaoSocial.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"cnpj",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:(null!=a?a:"").replace(/\D/g,"").replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2"),label:"CNPJ",onChange:l,placeholder:"CNPJ",error:Boolean(N.cnpj),"aria-describedby":"validation-schema-cnpj",inputProps:{maxLength:18}})}}),N.cnpj&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cnpj"})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"responsavel",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Respons\xe1vel",onChange:l,placeholder:"Respons\xe1vel",error:Boolean(N.responsavel),"aria-describedby":"validation-schema-responsavel"})}}),N.responsavel&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-responsavel",children:N.responsavel.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"email",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Email",onChange:l,placeholder:"Email",error:Boolean(N.email),"aria-describedby":"validation-schema-email"})}}),N.email&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-email",children:N.email.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"telefone1",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:C(null!=a?a:""),label:"Telefone 1",onChange:l,placeholder:"Telefone 1",error:Boolean(N.telefone1),"aria-describedby":"validation-schema-telefone1",inputProps:{maxLength:16}})}}),N.telefone1&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-telefone1",children:N.telefone1.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"telefone2",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:C(null!=a?a:""),label:"Telefone 2",onChange:l,placeholder:"Telefone 2",error:Boolean(N.telefone2),"aria-describedby":"validation-schema-telefone2",inputProps:{maxLength:16}})}}),N.telefone2&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-telefone2",children:N.telefone2.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"cep",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:(null!=a?a:"").replace(/\D/g,"").replace(/^(\d{5})(\d)/,"$1-$2"),label:"CEP",onChange(e){l(e),z(e.target.value)},placeholder:"CEP",error:Boolean(N.cep),"aria-describedby":"validation-schema-cep",inputProps:{maxLength:9}})}}),N.cep&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cep",children:N.cep.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"logradouro",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Logradouro",onChange:l,placeholder:"Logradouro",error:Boolean(N.logradouro),"aria-describedby":"validation-schema-logradouro"})}}),N.logradouro&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-logradouro",children:N.logradouro.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"complemento",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Complemento",onChange:l,placeholder:"Complemento",error:Boolean(N.complemento),"aria-describedby":"validation-schema-complemento"})}}),N.complemento&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-complemento",children:N.complemento.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"numero",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"N\xfamero",onChange:l,placeholder:"N\xfamero",error:Boolean(N.numero),"aria-describedby":"validation-schema-numero"})}}),N.numero&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-numero",children:N.numero.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"bairro",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:null!=a?a:"",label:"Bairro",onChange:l,placeholder:"Bairro",error:Boolean(N.bairro),"aria-describedby":"validation-schema-bairro"})}}),N.bairro&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-bairro",children:N.bairro.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"cidade",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{label:"Cidade",onChange:l,placeholder:"Cidade",error:Boolean(N.cidade),"aria-describedby":"validation-schema-cidade",value:null!=a?a:"",defaultValue:"aaaaa"})}}),N.cidade&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-cidade",children:N.cidade.message})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(m.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Qr,{name:"uf",control:Q,render(e){let{field:{value:a,onChange:l}}=e;return(0,r.jsx)(u.Z,{value:(null!=a?a:"").toUpperCase().replace(/[^A-Z]/g,""),label:"UF",onChange:l,placeholder:"UF",error:Boolean(N.uf),"aria-describedby":"validation-schema-uf",inputProps:{maxLength:2}})}}),N.uf&&(0,r.jsx)(Z.Z,{sx:{color:"error.main"},id:"validation-schema-uf",children:N.uf.message})]})})]})})]})}),"edit"===D&&(0,r.jsxs)(h.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",_(l.dataCadastro,"DD/MM/YYYY")]}),(0,r.jsx)(b.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:e,handleClose:()=>a(!1),handleSubmit:L,btnCancelar:!0,btnConfirmar:!0})]})};var $=D}}]);