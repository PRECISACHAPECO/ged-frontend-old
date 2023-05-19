"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{33310:function(e,n,o){var a=o(85893),t=o(11163),i=o.n(t),r=o(67294),s=o(60664),l=o(21609),c=o(34175),d=o(82747),u=o(7071),m=o(49837),p=o(91359),x=o(79072),h=o(55343),j=o(67836),f=o(35966),Z=o(75084),g=o(58316),v=o(39063),b=o(9041),C=o(80562),y=o(29630),w=o(76992),D=o(29618),P=o(47028),I=o(75158);o(74231);var S=o(87536),k=o(86501),G=o(45061),A=o(46749),$=o(89191),E=o(40039),O=o(26829),F=o(50720),L=o(54623),z=o(13860),V=o.n(z);o(57548);let q=()=>{var e,n,o,t,z,q,N,U,W,R;let[T,_]=(0,r.useState)(!1),[M,Y]=(0,r.useState)(),{id:B}=i().query,H=i(),K=(0,A.Lo)(H.pathname),J=(0,A.g_)(H.pathname),{user:Q,loggedUnity:X}=(0,r.useContext)(E.V),{control:ee,handleSubmit:en,formState:{errors:eo},watch:ea,reset:et,setValue:ei,register:er}=(0,S.cI)({});console.log("errors: ",eo),M&&M.units&&M.units.map((e,n)=>{ei("units[".concat(n,"].papel"),e.papel),ei("units[".concat(n,"].profissao"),e.profissao),ei("units[".concat(n,"].cargo"),e.cargos)});let[es,el]=(0,r.useState)({showPassword:!1,showConfirmPassword:!1}),ec=()=>{el({...es,showPassword:!es.showPassword})},ed=()=>{el({...es,showConfirmPassword:!es.showConfirmPassword})},[eu,em]=(0,r.useState)(!1),ep=async e=>{console.log("\uD83D\uDE80 ~ onSubmit:",e);try{if("new"===K){let n=await s.h.post("".concat(J,"/novo"),e);H.replace("".concat(J,"/").concat(n.data.id)),k.ZP.success(A.OD.successNew)}else"edit"===K&&(await s.h.put("".concat(J,"/").concat(B),e),k.ZP.success(A.OD.successUpdate))}catch(o){o.response&&409===o.response.status?k.ZP.error(A.OD.errorRepeated):console.log(o)}},ex=async()=>{try{await s.h.delete("".concat(J,"/").concat(B)),H.push(J),k.ZP.success(A.OD.successDelete)}catch(e){e.response&&409===e.response.status?(k.ZP.error(A.OD.pendingDelete),_(!1)):console.log(e)}},eh=()=>{let e=[...M.units];e.push({unidade:null,papel:null,profissao:null,cargos:[],status:!0}),Y({...M,units:e})},[ej,ef]=(0,r.useState)(!1),[eZ,eg]=(0,r.useState)(!1),ev=e=>(n,o)=>{ef(!!o&&e)},eb=e=>(n,o)=>{eg(!!o&&e)};return(0,r.useEffect)(()=>{let e=async()=>{try{let e=await s.h.get("".concat(J,"/").concat(B,"?unidadeID=").concat(X.unidadeID,"&papelID=").concat(X.papelID,"&admin=").concat(Q.admin));Y(e.data),console.log("\uD83D\uDE80 ~ getData: ",e.data)}catch(n){console.log(n)}};"edit"===K&&e()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:en(ep),children:[("new"==K||M)&&(0,a.jsxs)(m.Z,{children:[(0,a.jsx)($.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>en(ep),btnDelete:"edit"===K,onclickDelete:()=>_(!0)}),(0,a.jsxs)(p.Z,{children:[(0,a.jsx)("input",{type:"hidden",value:Q.admin,name:"admin",...er("admin")}),(0,a.jsx)("input",{type:"hidden",value:null==M?void 0:M.usuarioUnidadeID,name:"usuarioUnidadeID",...er("usuarioUnidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==X?void 0:X.unidadeID,name:"unidadeID",...er("unidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==X?void 0:X.papelID,name:"papelID",...er("papelID")}),(0,a.jsxs)(x.ZP,{container:!0,spacing:5,children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(j.Z,{defaultValue:null==M?void 0:M.nome,label:"Nome",placeholder:"Nome","aria-describedby":"validation-schema-nome",name:"nome",...er("nome",{required:!0}),error:eo.nome})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(F._,{dateAdapter:O.y,children:(0,a.jsx)(L.M,{label:"Data de Nascimento",locale:V().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:V()(new Date(null==M?void 0:M.dataNascimento)),name:"dataNascimento",onChange:e=>ei("dataNascimento",e),renderInput:e=>(0,a.jsx)(j.Z,{...e,variant:"outlined",error:null==eo?void 0:eo.dataNascimento})})})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(j.Z,{defaultValue:null==M?void 0:M.email,label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...er("email",{required:!0}),error:eo.email})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(j.Z,{defaultValue:null==M?void 0:M.cpf,label:"CPF",placeholder:"CPF","aria-describedby":"validation-schema-nome",name:"cpf",...er("cpf",{required:!0,validate:e=>(0,d.sw)(e)||"CPF inv\xe1lido"}),error:eo.cpf,helperText:null===(e=eo.cpf)||void 0===e?void 0:e.message,inputProps:{maxLength:14,onChange(e){ei("cpf",(0,c.VL)(e.target.value))}}})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(j.Z,{defaultValue:null==M?void 0:M.rg,label:"RG",placeholder:"RG","aria-describedby":"validation-schema-nome",name:"rg",...er("rg",{required:!1}),error:eo.rg})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(j.Z,{defaultValue:null==M?void 0:M.registroConselhoClasse,label:"Registro Conselho Classe",placeholder:"Registro Conselho Classe","aria-describedby":"validation-schema-nome",name:"registroConselhoClasse",...er("registroConselhoClasse",{required:!1}),error:eo.registroConselhoClasse})})}),M&&0==Q.admin&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{options:M.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(z=M.profissao)&&void 0!==z?z:"",name:"profissao",...er("profissao",{required:!1}),onChange(e,n){let o=n?{id:null==n?void 0:n.profissaoID,nome:null==n?void 0:n.nome,edit:!0}:null;ei("profissao",o)},renderInput:e=>(0,a.jsx)(j.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null==eo?void 0:eo.profissao})})})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{multiple:!0,limitTags:2,options:M.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(q=null==M?void 0:M.cargo)&&void 0!==q?q:[],name:"cargo[]",...er("cargo",{required:!1}),onChange(e,n){let o=n?n.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];ei("cargo",o)},renderInput:e=>(0,a.jsx)(j.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null==eo?void 0:eo.cargo})})})})]}),M&&"edit"==K&&(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(Z.Z,{variant:"outlined",startIcon:(0,a.jsx)(l.Z,{icon:"mdi:lock-reset"}),onClick(){em(!eu),eu&&(ei("senha",null),ei("confirmarSenha",null))},sx:{height:"56px"},children:"Alterar Senha"})})}),("new"==K||eu)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(h.Z,{fullWidth:!0,children:[(0,a.jsx)(g.Z,{htmlFor:"input-confirm-password",children:"Senha"}),(0,a.jsx)(v.Z,{label:"Senha",id:"input-password",type:es.showPassword?"text":"password",name:"senha",...er("senha",{required:"new"==K}),endAdornment:(0,a.jsx)(b.Z,{position:"end",children:(0,a.jsx)(C.Z,{edge:"end",onClick:ec,children:(0,a.jsx)(l.Z,{icon:es.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})})]})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(h.Z,{fullWidth:!0,children:[(0,a.jsx)(g.Z,{htmlFor:"input-confirm-password",color:(null===(n=eo.confirmarSenha)||void 0===n?void 0:n.message)?"error":"",children:"Confirmar Senha"}),(0,a.jsx)(v.Z,{label:"Confirmar Senha",id:"input-password",type:es.showConfirmPassword?"text":"password",name:"confirmarSenha",...er("confirmarSenha",{required:"new"==K,validate:e=>e===ea("senha")||"As senhas n\xe3o conferem."}),error:eo.confirmarSenha,endAdornment:(0,a.jsx)(b.Z,{position:"end",children:(0,a.jsx)(C.Z,{edge:"end",onClick:ed,children:(0,a.jsx)(l.Z,{icon:es.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),(null===(o=eo.confirmarSenha)||void 0===o?void 0:o.message)&&(0,a.jsx)(y.Z,{variant:"body2",color:"error",children:null===(t=eo.confirmarSenha)||void 0===t?void 0:t.message})]})})]})]})]})]}),1==Q.admin&&"edit"===K&&(0,a.jsxs)(a.Fragment,{children:[M&&M.units&&M.units.map((e,n)=>{var o,t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",value:e.usuarioUnidadeID,name:"units[".concat(n,"].usuarioUnidadeID"),...er("units[".concat(n,"].usuarioUnidadeID"))}),(0,a.jsxs)(m.Z,{sx:{mt:4},children:[(0,a.jsxs)(p.Z,{children:[(0,a.jsxs)(y.Z,{variant:"subtitle1",sx:{fontWeight:600},children:[e.unidade?e.unidade.nome:"Nova Unidade",(null===(o=e.unidade)||void 0===o?void 0:o.id)===X.unidadeID&&(null===(t=e.papel)||void 0===t?void 0:t.id)===X.papelID&&(0,a.jsx)(u.Z,{size:"small",skin:"light",color:"success",label:"Atual",sx:{mx:2,"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[e.unidadeID?(0,a.jsx)("input",{type:"hidden",value:e.unidadeID,name:"units[".concat(n,"].unidadeID"),...er("units[".concat(n,"].unidadeID"))}):(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(f.Z,{options:M.unidadesOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(N=null==e?void 0:e.unidade)&&void 0!==N?N:null,name:"units[".concat(n,"].unidade"),...er("units[".concat(n,"].unidade"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.unidadeID,nome:null==o?void 0:o.nome}:null;ei("units[".concat(n,"].unidade"),a)},renderInput(e){var o,t;return(0,a.jsx)(j.Z,{...e,label:"Selecione a unidade",placeholder:"Selecionar unidade","aria-describedby":"formulario-error",error:null===(o=eo.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.unidade})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(f.Z,{options:M.papelOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(U=e.papel)&&void 0!==U?U:null,name:"units[".concat(n,"].papel"),...er("units[".concat(n,"].papel"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.id,nome:null==o?void 0:o.nome,edit:!0}:null;ei("units[".concat(n,"].papel"),a)},renderInput(e){var o,t;return(0,a.jsx)(j.Z,{...e,label:"Selecione o papel",placeholder:"Selecione o papel","aria-describedby":"formulario-error",error:null===(o=eo.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.papel})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(f.Z,{options:M.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(W=e.profissao)&&void 0!==W?W:"",name:"units[".concat(n,"].profissao"),...er("units[".concat(n,"].profissao"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.profissaoID,nome:null==o?void 0:o.nome,edit:!0}:null;ei("units[".concat(n,"].profissao"),a)},renderInput(e){var o,t;return(0,a.jsx)(j.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null===(o=eo.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.profissao})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:e.unidadeID?6:3,children:(0,a.jsx)(f.Z,{multiple:!0,limitTags:2,options:M.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(R=e.cargos)&&void 0!==R?R:[],name:"units[".concat(n,"].cargo[]"),...er("units[".concat(n,"].cargo"),{required:!1}),onChange(e,o){let a=o?o.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];ei("units[".concat(n,"].cargo"),a)},renderInput(e){var o,t;return(0,a.jsx)(j.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null===(o=eo.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.cargo})}})})]})]}),(0,a.jsx)(p.Z,{children:(0,a.jsxs)(w.Z,{expanded:ej==="panel-".concat(n),onChange:ev("panel-".concat(n)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(D.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(y.Z,{children:"Permiss\xf5es de Acesso"})}),(0,a.jsx)(P.Z,{children:e.menu&&e.menu.map((e,o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"body2",children:e.nome})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,t)=>(0,a.jsx)(a.Fragment,{children:e.rota?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].rota"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].rota"))}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].ler"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].ler")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].inserir"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].inserir")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].editar"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].editar")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].excluir"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].excluir")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})})]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{expanded:eZ==="item-".concat(n,"-").concat(o,"-").concat(t),onChange:eb("item-".concat(n,"-").concat(o,"-").concat(t)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(D.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(y.Z,{children:e.nome})}),(0,a.jsx)(P.Z,{children:e.submenu&&e.submenu.map((e,i)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].rota"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].rota"))}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].ler"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].ler")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].inserir"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].inserir")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].editar"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].editar")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(I.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].excluir"),...er("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].excluir")),onChange(e){ei("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})})]})}))})]})})}))]}))})]})})]})]})}),(0,a.jsx)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(Z.Z,{startIcon:(0,a.jsx)(l.Z,{icon:"material-symbols:add-circle-outline-rounded"}),variant:"outlined",onClick(){eh()},children:"Inserir unidade"})})})]})]}),(0,a.jsx)(G.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:T,handleClose:()=>_(!1),handleSubmit:ex,btnCancel:!0,btnConfirm:!0})]})};n.Z=q},45061:function(e,n,o){var a=o(85893),t=o(75084),i=o(29620),r=o(77745),s=o(95398),l=o(76779),c=o(44642);o(21609);let d=e=>{let{title:n,text:o,handleClose:d,openModal:u,handleSubmit:m,btnCancel:p,btnConfirm:x,btnCancelColor:h,btnConfirmColor:j}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{open:u,onClose:d,"aria-labelledby":"form-dialog-title",children:[(0,a.jsx)(r.Z,{id:"form-dialog-title",children:n}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(c.Z,{sx:{mb:3},children:o})}),(0,a.jsxs)(l.Z,{className:"dialog-actions-dense",children:[p&&(0,a.jsx)(t.Z,{variant:"outlined",color:"primary",onClick:d,children:"Cancelar"}),x&&(0,a.jsx)(t.Z,{variant:"contained",color:j||"error",onClick:m,children:"Confirmar"})]})]})})};n.Z=d},89191:function(e,n,o){o.d(n,{Z:function(){return b}});var a=o(85893),t=o(11163),i=o.n(t),r=o(67294),s=o(91359),l=o(61953),c=o(75084),d=o(41664),u=o.n(d),m=o(21609),p=o(46749),x=o(73812),h=o(86378),j=o(9942);function f(e){let{disabled:n,generateReport:o,dataReports:t,open:i,anchorEl:r,handleClick:s,handleClose:l}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:r,open:i,onClose:l,TransitionComponent:j.Z,children:t.map(e=>(0,a.jsxs)(h.Z,{onClick(){l(),o(e)},children:[(0,a.jsx)("span",{children:e.identification}),(0,a.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,a.jsx)("span",{children:e.name})]},e.id))})})}var Z=o(40039),g=o(10160);let v=e=>{let{btnCancel:n,btnSave:o,btnSend:t,handleSubmit:d,handleSend:x,btnDelete:h,onclickDelete:j,btnPrint:v,disabled:b,generateReport:C,dataReports:y}=e,w=i(),{user:D,routes:P}=(0,r.useContext)(Z.V),[I,S]=(0,r.useState)(!1),[k,G]=(0,r.useState)(null),A=Boolean(k),$=e=>{G(e.currentTarget)},E=()=>{G(null)},O=(()=>{let e=w.pathname.split("/").slice(0,-1).join("/");return e||w.pathname})();return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>0?S(!0):S(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),console.log("Header: ",o,O),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,a.jsx)(u(),{href:(0,p.g_)(w.pathname),children:(0,a.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,a.jsx)(m.Z,{icon:"material-symbols:arrow-back-rounded"})})}),h&&P.find(e=>e.rota===O&&e.excluir)&&(0,a.jsx)(c.Z,{type:"button",onClick:j,variant:"outlined",color:"error",size:"medium",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:delete-outline"}),children:"Excluir"})]}),(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:"8px"},children:[v&&1===y.length&&(0,a.jsx)(c.Z,{id:"fade-button","aria-controls":A?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":A?"true":void 0,onClick:()=>C(y[0]),color:"primary",disabled:b,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),v&&y.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{id:"fade-button","aria-controls":A?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":A?"true":void 0,onClick:$,color:"primary",disabled:b,variant:"outlined",size:"medium",type:"button",startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:print"}),children:"Imprimir"}),(0,a.jsx)(f,{generateReport:C,dataReports:y,handleClick:$,handleClose:E,open:A,anchorEl:k})]}),o&&P.find(e=>e.rota===O&&e.editar)&&(0,a.jsx)(c.Z,{onClick:d,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:b,startIcon:(0,a.jsx)(m.Z,{icon:"material-symbols:save"}),children:"Salvar"}),t&&2==D.papelID&&(0,a.jsx)(c.Z,{onClick:x,type:"button",variant:"contained",size:"medium",color:"primary",disabled:b,sx:{ml:2},startIcon:(0,a.jsx)(m.Z,{icon:"carbon:send-filled"}),children:"Enviar Formul\xe1rio"}),I&&(0,a.jsx)("div",{className:"\n                                ".concat(I?"fadeIn":"fadeOut","\n                            "),style:{position:"fixed",bottom:"40px",right:"30px",zIndex:"5555",textAlign:"center"},children:(0,a.jsx)(g.Z,{color:"primary",size:"large",onClick:d,type:"submit",variant:"contained",disabled:b,children:(0,a.jsx)(m.Z,{icon:"material-symbols:save"})})})]})]})})};var b=v},46749:function(e,n,o){o.d(n,{Lo:function(){return m},OD:function(){return u},OE:function(){return x},OL:function(){return d},g_:function(){return p}});var a=o(85893),t=o(29630),i=o(41664),r=o.n(i),s=o(7071);o(67294),o(40039);var l=o(60664);let c={1:{title:"Ativo",color:"success"},0:{title:"Inativo",color:"secondary"},10:{title:"Pendente",color:"warning"},20:{title:"Acessou link",color:"info"},30:{title:"Em preenchimento",color:"warning"},40:{title:"Conclu\xeddo",color:"primary"},50:{title:"Reprovado",color:"error"},60:{title:"Aprovado Parcial",color:"warning"},70:{title:"Aprovado",color:"success"}},d=(e,n)=>n.map((o,i)=>{let l=n[i].field;return{...o,flex:o.size,renderCell:o=>(0,a.jsx)(r(),{href:"".concat(e,"/").concat(o.row.id),children:(0,a.jsx)(t.Z,{variant:"body2",sx:{color:"text.primary"},children:n&&n.map((e,n)=>{if(e.field===l){if("status"!=e.field)return o.row[e.field];{let t=c[o.row.status];return(0,a.jsx)(s.Z,{size:"small",skin:"light",color:t.color,label:t.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}},n)}}})})})}}),u={successNew:"Dados salvos com sucesso!",successUpdate:"Dados atualizados com sucesso!",errorNew:"Erro ao salvar os dados!",errorRepeated:"Dados j\xe1 existentes!",errorUpdate:"Erro ao atualizar os dados!",errorDelete:"Erro ao excluir os dados!",successDelete:"Dados exclu\xeddos com sucesso!",pendingDelete:"Dado n\xe3o pode ser excluido, pois j\xe1 est\xe1 sendo utilizado!",errorGet:"Erro ao obter os dados!",successGet:"Dados obtidos com sucesso!"},m=e=>{let n=e.split("/"),o=n[n.length-1];return"novo"==o?"new":"edit"},p=e=>{let n=e.split("/");return n.pop(),n.join("/")},x=e=>{let n=e.route;l.h.post(n,e.params,{responseType:"arraybuffer"}).then(e=>{let n=new Blob([e.data],{type:"application/pdf"}),o=URL.createObjectURL(n);window.open(o,"_blank")}).catch(e=>{console.error("Erro ao gerar relat\xf3rio",e)})}},34175:function(e,n,o){function a(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function t(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function i(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function r(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}o.d(n,{Bk:function(){return i},CL:function(){return s},PK:function(){return a},Tc:function(){return r},VL:function(){return t}})},82747:function(e,n,o){function a(e){if(14!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,o=e.substring(0,n),a=e.substring(n),t=0,i=n-7;for(let r=n;r>=1;r--)t+=o.charAt(n-r)*i--,i<2&&(i=9);let s=t%11<2?0:11-t%11;if(s!=a.charAt(0))return!1;n+=1,o=e.substring(0,n),t=0,i=n-7;for(let l=n;l>=1;l--)t+=o.charAt(n-l)*i--,i<2&&(i=9);return(s=t%11<2?0:11-t%11)==a.charAt(1)}function t(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=0;for(let a=1;a<=9;a++)o+=parseInt(e.substring(a-1,a))*(11-a);if((10==(n=10*o%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;o=0;for(let t=1;t<=10;t++)o+=parseInt(e.substring(t-1,t))*(12-t);return(10==(n=10*o%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}o.d(n,{dI:function(){return i},sw:function(){return t},zk:function(){return a}})}}]);