"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{33310:function(e,n,o){var a=o(85893),i=o(11163),t=o.n(i),s=o(67294),c=o(60664),r=o(21609),l=o(34175),d=o(82747),u=o(7071),m=o(49837),x=o(91359),p=o(79072),h=o(72389),j=o(80562),Z=o(55343),g=o(44731),f=o(67836),v=o(35966),b=o(75084),C=o(58316),P=o(39063),D=o(9041),y=o(29630),w=o(76992),I=o(29618),S=o(47028),G=o(75158);o(74231);var k=o(87536),F=o(86501),A=o(45061),O=o(46749),q=o(89191),V=o(40039),E=o(26829),W=o(50720),N=o(54623),L=o(13860),U=o.n(L);o(57548);let z=()=>{var e,n,o,i,L,z,R,_,M,T;let[Y,B]=(0,s.useState)(!1),[H,J]=(0,s.useState)(),{id:K}=t().query,Q=t(),X=(0,O.Lo)(Q.pathname),$=(0,O.g_)(Q.pathname),{user:ee,setUser:en,loggedUnity:eo}=(0,s.useContext)(V.V),[ea,ei]=(0,s.useState)(!1),[et,es]=(0,s.useState)(!1),[ec,er]=(0,s.useState)(null),{control:el,handleSubmit:ed,formState:{errors:eu},watch:em,reset:ex,setValue:ep,register:eh}=(0,k.cI)({});console.log("errors: ",eu),H&&H.units&&H.units.map((e,n)=>{ep("units[".concat(n,"].papel"),e.papel),ep("units[".concat(n,"].profissao"),e.profissao),ep("units[".concat(n,"].cargo"),e.cargos)});let[ej,eZ]=(0,s.useState)({showPassword:!1,showConfirmPassword:!1}),eg=()=>{eZ({...ej,showPassword:!ej.showPassword})},ef=()=>{eZ({...ej,showConfirmPassword:!ej.showConfirmPassword})},[ev,eb]=(0,s.useState)(!1),eC=async e=>{console.log("\uD83D\uDE80 ~ onSubmit:",e);try{if("new"===X){let n=await c.h.post("".concat($,"/novo"),e);Q.replace("".concat($,"/").concat(n.data.id)),F.ZP.success(O.OD.successNew)}else"edit"===X&&(await c.h.put("".concat($,"/").concat(K),e),F.ZP.success(O.OD.successUpdate),console.log("\uD83D\uDE80 ~ values:",e))}catch(o){o.response&&409===o.response.status?F.ZP.error(O.OD.errorRepeated):console.log(o)}},eP=async()=>{try{await c.h.delete("".concat($,"/").concat(K)),Q.push($),F.ZP.success(O.OD.successDelete)}catch(e){e.response&&409===e.response.status?(F.ZP.error(O.OD.pendingDelete),B(!1)):console.log(e)}},eD=()=>{let e=[...H.units];e.push({unidade:null,papel:null,profissao:null,cargos:[],status:!0}),J({...H,units:e})},ey=e=>(n,o)=>{ei(!!o&&e)},ew=e=>(n,o)=>{es(!!o&&e)},eI=(0,s.useRef)(null),eS=()=>{eI.current.click()},eG=async e=>{let n=e.target.files[0];if(console.log("\uD83D\uDE80 ~ selectedFile:",n),n){let o=new FormData;o.append("photoProfile",n),await c.h.post("".concat($,"/photo-profile/").concat(K),o).then(e=>{er(e.data),console.log("id",K),console.log("user.usuarioID",ee.usuarioID),ee.usuarioID==K&&en({...ee,imagem:e.data}),F.ZP.success("Foto de perfil atualizada com sucesso!")}).catch(e=>{console.log(e),F.ZP.error("Erro ao atualizar foto de perfil, tente novamente!")})}},ek=async()=>{try{await c.h.delete("".concat($,"/photo-profile/").concat(K)),er(null),ee.usuarioID==K&&en({...ee,imagem:null}),F.ZP.success("Foto de perfil removida com sucesso!")}catch(e){console.log(e),F.ZP.error("Erro ao remover foto de perfil, tente novamente!")}};return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await c.h.get("".concat($,"/").concat(K,"?unidadeID=").concat(eo.unidadeID,"&papelID=").concat(eo.papelID,"&admin=").concat(ee.admin));J(e.data),er(e.data.imagem),console.log("\uD83D\uDE80 ~ getData: ",e.data)}catch(n){console.log(n)}};"edit"===X&&e()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:ed(eC),children:[("new"==X||H)&&(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(q.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>ed(eC),btnDelete:"edit"===X,onclickDelete:()=>B(!0)}),(0,a.jsxs)(x.Z,{children:[(0,a.jsx)("input",{type:"hidden",value:ee.admin,name:"admin",...eh("admin")}),(0,a.jsx)("input",{type:"hidden",value:null==H?void 0:H.usuarioUnidadeID,name:"usuarioUnidadeID",...eh("usuarioUnidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==eo?void 0:eo.unidadeID,name:"unidadeID",...eh("unidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==eo?void 0:eo.papelID,name:"papelID",...eh("papelID")}),(0,a.jsxs)(p.ZP,{container:!0,spacing:5,sx:{mt:2},children:[(0,a.jsx)(p.ZP,{xs:12,sm:4,md:2,container:!0,spacing:5,children:(0,a.jsxs)(p.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",mx:"17px",height:"250px",width:"250px",position:"relative",mb:"10px",md:{height:"auto",width:"auto"}},children:[ec&&(0,a.jsx)(h.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,a.jsx)(j.Z,{size:"small",sx:{position:"absolute",top:"30px",right:"9px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:ek,children:(0,a.jsx)(r.Z,{icon:"material-symbols:delete-outline"})})}),(0,a.jsx)(h.Z,{title:ec?"Alterar foto":"Inserir foto",placement:"top",children:(0,a.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"95%",width:"95%"},children:[(0,a.jsx)("input",{type:"file",ref:eI,style:{display:"none"},onChange:eG}),(0,a.jsx)(g.Z,{variant:"rounded",alt:"Victor Anderson",sx:{width:"100%",height:"100%",cursor:"pointer"},src:ec,onClick:eS})]})})]})}),(0,a.jsxs)(p.ZP,{xs:12,sm:8,md:10,container:!0,spacing:5,children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:null==H?void 0:H.nome,label:"Nome",placeholder:"Nome","aria-describedby":"validation-schema-nome",name:"nome",...eh("nome",{required:!0}),error:eu.nome})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(W._,{dateAdapter:E.y,children:(0,a.jsx)(N.M,{label:"Data de Nascimento",locale:U().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:U()(new Date(null==H?void 0:H.dataNascimento)),name:"dataNascimento",onChange:e=>ep("dataNascimento",e),renderInput:e=>(0,a.jsx)(f.Z,{...e,variant:"outlined",error:null==eu?void 0:eu.dataNascimento})})})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:null==H?void 0:H.email,label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...eh("email",{required:!0}),error:eu.email})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:null==H?void 0:H.cpf,label:"CPF",placeholder:"CPF","aria-describedby":"validation-schema-nome",name:"cpf",...eh("cpf",{required:!0,validate:e=>(0,d.sw)(e)||"CPF inv\xe1lido"}),error:eu.cpf,helperText:null===(e=eu.cpf)||void 0===e?void 0:e.message,inputProps:{maxLength:14,onChange(e){ep("cpf",(0,l.VL)(e.target.value))}}})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:null==H?void 0:H.rg,label:"RG",placeholder:"RG","aria-describedby":"validation-schema-nome",name:"rg",...eh("rg",{required:!1}),error:eu.rg})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{defaultValue:null==H?void 0:H.registroConselhoClasse,label:"Registro Conselho Classe",placeholder:"Registro Conselho Classe","aria-describedby":"validation-schema-nome",name:"registroConselhoClasse",...eh("registroConselhoClasse",{required:!1}),error:eu.registroConselhoClasse})})}),H&&0==ee.admin&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(v.Z,{options:H.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(L=H.profissao)&&void 0!==L?L:"",name:"profissao",...eh("profissao",{required:!1}),onChange(e,n){let o=n?{id:null==n?void 0:n.profissaoID,nome:null==n?void 0:n.nome,edit:!0}:null;ep("profissao",o)},renderInput:e=>(0,a.jsx)(f.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null==eu?void 0:eu.profissao})})})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(v.Z,{multiple:!0,limitTags:2,options:H.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(z=null==H?void 0:H.cargo)&&void 0!==z?z:[],name:"cargo[]",...eh("cargo",{required:!1}),onChange(e,n){let o=n?n.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];ep("cargo",o)},renderInput:e=>(0,a.jsx)(f.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null==eu?void 0:eu.cargo})})})})]}),H&&"edit"==X&&(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(Z.Z,{fullWidth:!0,children:(0,a.jsx)(b.Z,{variant:"outlined",startIcon:(0,a.jsx)(r.Z,{icon:"mdi:lock-reset"}),onClick(){eb(!ev),ev&&(ep("senha",null),ep("confirmarSenha",null))},sx:{height:"56px"},children:"Alterar Senha"})})}),("new"==X||ev)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(Z.Z,{fullWidth:!0,children:[(0,a.jsx)(C.Z,{htmlFor:"input-confirm-password",children:"Senha"}),(0,a.jsx)(P.Z,{label:"Senha",id:"input-password",type:ej.showPassword?"text":"password",name:"senha",...eh("senha",{required:"new"==X}),endAdornment:(0,a.jsx)(D.Z,{position:"end",children:(0,a.jsx)(j.Z,{edge:"end",onClick:eg,children:(0,a.jsx)(r.Z,{icon:ej.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})})]})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(Z.Z,{fullWidth:!0,children:[(0,a.jsx)(C.Z,{htmlFor:"input-confirm-password",color:(null===(n=eu.confirmarSenha)||void 0===n?void 0:n.message)?"error":"",children:"Confirmar Senha"}),(0,a.jsx)(P.Z,{label:"Confirmar Senha",id:"input-password",type:ej.showConfirmPassword?"text":"password",name:"confirmarSenha",...eh("confirmarSenha",{required:"new"==X,validate:e=>e===em("senha")||"As senhas n\xe3o conferem."}),error:eu.confirmarSenha,endAdornment:(0,a.jsx)(D.Z,{position:"end",children:(0,a.jsx)(j.Z,{edge:"end",onClick:ef,children:(0,a.jsx)(r.Z,{icon:ej.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),(null===(o=eu.confirmarSenha)||void 0===o?void 0:o.message)&&(0,a.jsx)(y.Z,{variant:"body2",color:"error",children:null===(i=eu.confirmarSenha)||void 0===i?void 0:i.message})]})})]})]})]})]})]}),1==ee.admin&&"edit"===X&&(0,a.jsxs)(a.Fragment,{children:[H&&H.units&&H.units.map((e,n)=>{var o,i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",value:e.usuarioUnidadeID,name:"units[".concat(n,"].usuarioUnidadeID"),...eh("units[".concat(n,"].usuarioUnidadeID"))}),(0,a.jsxs)(m.Z,{sx:{mt:4},children:[(0,a.jsxs)(x.Z,{children:[(0,a.jsxs)(y.Z,{variant:"subtitle1",sx:{fontWeight:600},children:[e.unidade?e.unidade.nome:"Nova Unidade",(null===(o=e.unidade)||void 0===o?void 0:o.id)===eo.unidadeID&&(null===(i=e.papel)||void 0===i?void 0:i.id)===eo.papelID&&(0,a.jsx)(u.Z,{size:"small",skin:"light",color:"success",label:"Atual",sx:{mx:2,"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,a.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[e.unidadeID?(0,a.jsx)("input",{type:"hidden",value:e.unidadeID,name:"units[".concat(n,"].unidadeID"),...eh("units[".concat(n,"].unidadeID"))}):(0,a.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:H.unidadesOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(R=null==e?void 0:e.unidade)&&void 0!==R?R:null,name:"units[".concat(n,"].unidade"),...eh("units[".concat(n,"].unidade"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.unidadeID,nome:null==o?void 0:o.nome}:null;ep("units[".concat(n,"].unidade"),a)},renderInput(e){var o,i;return(0,a.jsx)(f.Z,{...e,label:"Selecione a unidade",placeholder:"Selecionar unidade","aria-describedby":"formulario-error",error:null===(o=eu.units)||void 0===o?void 0:null===(i=o[n])||void 0===i?void 0:i.unidade})}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:H.papelOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(_=e.papel)&&void 0!==_?_:null,name:"units[".concat(n,"].papel"),...eh("units[".concat(n,"].papel"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.id,nome:null==o?void 0:o.nome,edit:!0}:null;ep("units[".concat(n,"].papel"),a)},renderInput(e){var o,i;return(0,a.jsx)(f.Z,{...e,label:"Selecione o papel",placeholder:"Selecione o papel","aria-describedby":"formulario-error",error:null===(o=eu.units)||void 0===o?void 0:null===(i=o[n])||void 0===i?void 0:i.papel})}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:H.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(M=e.profissao)&&void 0!==M?M:"",name:"units[".concat(n,"].profissao"),...eh("units[".concat(n,"].profissao"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.profissaoID,nome:null==o?void 0:o.nome,edit:!0}:null;ep("units[".concat(n,"].profissao"),a)},renderInput(e){var o,i;return(0,a.jsx)(f.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null===(o=eu.units)||void 0===o?void 0:null===(i=o[n])||void 0===i?void 0:i.profissao})}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:e.unidadeID?6:3,children:(0,a.jsx)(v.Z,{multiple:!0,limitTags:2,options:H.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(T=e.cargos)&&void 0!==T?T:[],name:"units[".concat(n,"].cargo[]"),...eh("units[".concat(n,"].cargo"),{required:!1}),onChange(e,o){let a=o?o.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];ep("units[".concat(n,"].cargo"),a)},renderInput(e){var o,i;return(0,a.jsx)(f.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null===(o=eu.units)||void 0===o?void 0:null===(i=o[n])||void 0===i?void 0:i.cargo})}})})]})]}),(0,a.jsx)(x.Z,{children:(0,a.jsxs)(w.Z,{expanded:ea==="panel-".concat(n),onChange:ey("panel-".concat(n)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(I.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(r.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(y.Z,{children:"Permiss\xf5es de Acesso"})}),(0,a.jsx)(S.Z,{children:e.menu&&e.menu.map((e,o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"body2",children:e.nome})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(y.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,i)=>(0,a.jsx)(a.Fragment,{children:e.rota?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].rota"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].rota"))}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].ler"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].ler")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].inserir"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].inserir")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].editar"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].editar")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].excluir"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].excluir")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].edit"),!0)}})})]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{expanded:et==="item-".concat(n,"-").concat(o,"-").concat(i),onChange:ew("item-".concat(n,"-").concat(o,"-").concat(i)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(I.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(r.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(y.Z,{children:e.nome})}),(0,a.jsx)(S.Z,{children:e.submenu&&e.submenu.map((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(y.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].rota"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].rota"))}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].ler"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].ler")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].inserir"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].inserir")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].editar"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].editar")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(G.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].excluir"),...eh("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].excluir")),onChange(e){ep("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(i,"].submenu[").concat(t,"].edit"),!0)}})})]})}))})]})})}))]}))})]})})]})]})}),(0,a.jsx)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:(0,a.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(b.Z,{startIcon:(0,a.jsx)(r.Z,{icon:"material-symbols:add-circle-outline-rounded"}),variant:"outlined",onClick(){eD()},children:"Inserir unidade"})})})]})]}),(0,a.jsx)(A.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:Y,handleClose:()=>B(!1),handleSubmit:eP,btnCancel:!0,btnConfirm:!0})]})};n.Z=z}}]);