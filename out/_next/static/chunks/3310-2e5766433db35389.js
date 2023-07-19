"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{33310:function(e,n,o){var a=o(85893),t=o(11163),i=o.n(t),s=o(67294),c=o(46749),r=o(60664),l=o(21609),d=o(7071),u=o(49837),m=o(91359),x=o(79072),p=o(72389),h=o(80562),j=o(55343),g=o(44731),Z=o(67836),v=o(35966),f=o(75084),b=o(58316),C=o(39063),D=o(9041),P=o(29630),y=o(76992),w=o(29618),I=o(47028),S=o(75158),G=o(87536),k=o(86501),A=o(45061),F=o(89191),O=o(40039),q=o(26829),E=o(50720),N=o(54623),V=o(13860),U=o.n(V);o(57548);var z=o(29308);o(50287);let L=()=>{var e,n,o,t,V,L,W,_;let[M,R]=(0,s.useState)(!1),[T,Y]=(0,s.useState)(),{id:B}=i().query,H=i(),J=(0,c.Lo)(H.pathname),K=(0,c.g_)(H.pathname),{user:Q,setUser:X,loggedUnity:$}=(0,s.useContext)(O.V),[ee,en]=(0,s.useState)(!1),[eo,ea]=(0,s.useState)(!1),[et,ei]=(0,s.useState)(null),{control:es,handleSubmit:ec,formState:{errors:er},watch:el,reset:ed,setValue:eu,register:em}=(0,G.cI)({});console.log("errors: ",er),T&&T.units&&T.units.map((e,n)=>{eu("units[".concat(n,"].papel"),e.papel),eu("units[".concat(n,"].profissao"),e.profissao),eu("units[".concat(n,"].cargo"),e.cargos)});let[ex,ep]=(0,s.useState)({showPassword:!1,showConfirmPassword:!1}),eh=()=>{ep({...ex,showPassword:!ex.showPassword})},ej=()=>{ep({...ex,showConfirmPassword:!ex.showConfirmPassword})},[eg,eZ]=(0,s.useState)(!1),ev=async e=>{console.log("\uD83D\uDE80 ~ onSubmit:",e);try{if("new"===J){let n=await r.h.post("".concat(K,"/novo"),e);H.replace("".concat(K,"/").concat(n.data.id)),k.ZP.success(c.OD.successNew)}else"edit"===J&&(await r.h.put("".concat(K,"/").concat(B),e),k.ZP.success(c.OD.successUpdate),console.log("\uD83D\uDE80 ~ values:",e))}catch(o){o.response&&409===o.response.status?k.ZP.error(c.OD.errorRepeated):console.log(o)}},ef=async()=>{try{await r.h.delete("".concat(K,"/").concat(B)),H.push(K),k.ZP.success(c.OD.successDelete)}catch(e){e.response&&409===e.response.status?(k.ZP.error(c.OD.pendingDelete),R(!1)):console.log(e)}},eb=()=>{let e=[...T.units];e.push({unidade:null,papel:null,profissao:null,cargos:[],status:!0}),Y({...T,units:e})},eC=e=>(n,o)=>{en(!!o&&e)},eD=e=>(n,o)=>{ea(!!o&&e)},eP=(0,s.useRef)(null),ey=()=>{eP.current.click()},ew=async e=>{let n=e.target.files[0];if(console.log("\uD83D\uDE80 ~ selectedFile:",n),n){let o=new FormData;o.append("photoProfile",n),await r.h.post("".concat(K,"/photo-profile/").concat(B),o).then(e=>{ei(e.data),console.log("id",B),console.log("user.usuarioID",Q.usuarioID),Q.usuarioID==B&&X({...Q,imagem:e.data}),k.ZP.success("Foto de perfil atualizada com sucesso!")}).catch(e=>{console.log(e),k.ZP.error("Erro ao atualizar foto de perfil, tente novamente!")})}},eI=async()=>{try{await r.h.delete("".concat(K,"/photo-profile/").concat(B)),ei(null),Q.usuarioID==B&&X({...Q,imagem:null}),k.ZP.success("Foto de perfil removida com sucesso!")}catch(e){console.log(e),k.ZP.error("Erro ao remover foto de perfil, tente novamente!")}};return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await r.h.get("".concat(K,"/").concat(B,"?unidadeID=").concat($.unidadeID,"&papelID=").concat($.papelID,"&admin=").concat(Q.admin));Y(e.data),ei(e.data.imagem),console.log("\uD83D\uDE80 ~ getData: ",e.data)}catch(n){console.log(n)}};"edit"===J&&e()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:ec(ev),children:[("new"==J||T)&&(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(F.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>ec(ev),btnDelete:"edit"===J,onclickDelete:()=>R(!0)}),(0,a.jsxs)(m.Z,{children:[(0,a.jsx)("input",{type:"hidden",value:Q.admin,name:"admin",...em("admin")}),(0,a.jsx)("input",{type:"hidden",value:null==T?void 0:T.usuarioUnidadeID,name:"usuarioUnidadeID",...em("usuarioUnidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==$?void 0:$.unidadeID,name:"unidadeID",...em("unidadeID")}),(0,a.jsx)("input",{type:"hidden",value:null==$?void 0:$.papelID,name:"papelID",...em("papelID")}),(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{mt:2},children:[(0,a.jsx)(x.ZP,{xs:12,sm:4,md:2,container:!0,spacing:5,children:(0,a.jsxs)(x.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",mx:"17px",height:"250px",width:"250px",position:"relative",mb:"10px",md:{height:"auto",width:"auto"}},children:[et&&(0,a.jsx)(p.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,a.jsx)(h.Z,{size:"small",sx:{position:"absolute",top:"30px",right:"9px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:eI,children:(0,a.jsx)(l.Z,{icon:"material-symbols:delete-outline"})})}),(0,a.jsx)(p.Z,{title:et?"Alterar foto":"Inserir foto",placement:"top",children:(0,a.jsxs)(j.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"95%",width:"95%"},children:[(0,a.jsx)("input",{type:"file",ref:eP,style:{display:"none"},onChange:ew}),(0,a.jsx)(g.Z,{variant:"rounded",alt:"Victor Anderson",sx:{width:"100%",height:"100%",cursor:"pointer"},src:et,onClick:ey})]})})]})}),(0,a.jsxs)(x.ZP,{xs:12,sm:8,md:10,container:!0,spacing:5,children:[(0,a.jsx)(z.Z,{xs:12,md:4,title:"Nome",name:"nome",value:null==T?void 0:T.nome,required:!0,register:em,error:er.nome}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(E._,{dateAdapter:q.y,children:(0,a.jsx)(N.M,{label:"Data de Nascimento",locale:U().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:U()(new Date(null==T?void 0:T.dataNascimento)),name:"dataNascimento",onChange:e=>eu("dataNascimento",e),renderInput:e=>(0,a.jsx)(Z.Z,{...e,variant:"outlined",error:null==er?void 0:er.dataNascimento})})})})}),(0,a.jsx)(z.Z,{xs:12,md:4,title:"E-mail",name:"email",value:null==T?void 0:T.email,required:!0,register:em,error:er.email}),(0,a.jsx)(z.Z,{xs:12,md:4,title:"CPF",name:"cpf",mask:"cpf",value:null==T?void 0:T.cpf,required:!0,register:em,error:er.cpf}),(0,a.jsx)(z.Z,{xs:12,md:4,title:"RG",name:"rg",mask:"rg",value:null==T?void 0:T.rg,required:!0,register:em,error:er.rg}),(0,a.jsx)(z.Z,{xs:12,md:4,title:"Registro Conselho Classe",name:"registroConselhoClasse",value:null==T?void 0:T.registroConselhoClasse,register:em,error:er.registroConselhoClasse}),T&&0==Q.admin&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Select,{title:"Selecione a profiss\xe3o",options:T.profissaoOptions,name:"profissao",idName:"profissaoID",value:values.resposta,disabled:disabled,register:em,setValue:eu,errors:null==er?void 0:er.profissao}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(v.Z,{multiple:!0,limitTags:2,options:T.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(t=null==T?void 0:T.cargo)&&void 0!==t?t:[],name:"cargo[]",...em("cargo",{required:!1}),onChange(e,n){let o=n?n.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];eu("cargo",o)},renderInput:e=>(0,a.jsx)(Z.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null==er?void 0:er.cargo})})})})]}),T&&"edit"==J&&(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(j.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{variant:"outlined",startIcon:(0,a.jsx)(l.Z,{icon:"mdi:lock-reset"}),onClick(){eZ(!eg),eg&&(eu("senha",null),eu("confirmarSenha",null))},sx:{height:"56px"},children:"Alterar Senha"})})}),("new"==J||eg)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(j.Z,{fullWidth:!0,children:[(0,a.jsx)(b.Z,{htmlFor:"input-confirm-password",children:"Senha"}),(0,a.jsx)(C.Z,{label:"Senha",id:"input-password",type:ex.showPassword?"text":"password",name:"senha",...em("senha",{required:"new"==J}),endAdornment:(0,a.jsx)(D.Z,{position:"end",children:(0,a.jsx)(h.Z,{edge:"end",onClick:eh,children:(0,a.jsx)(l.Z,{icon:ex.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})})]})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(j.Z,{fullWidth:!0,children:[(0,a.jsx)(b.Z,{htmlFor:"input-confirm-password",color:(null===(e=er.confirmarSenha)||void 0===e?void 0:e.message)?"error":"",children:"Confirmar Senha"}),(0,a.jsx)(C.Z,{label:"Confirmar Senha",id:"input-password",type:ex.showConfirmPassword?"text":"password",name:"confirmarSenha",...em("confirmarSenha",{required:"new"==J,validate:e=>e===el("senha")||"As senhas n\xe3o conferem."}),error:er.confirmarSenha,endAdornment:(0,a.jsx)(D.Z,{position:"end",children:(0,a.jsx)(h.Z,{edge:"end",onClick:ej,children:(0,a.jsx)(l.Z,{icon:ex.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),(null===(n=er.confirmarSenha)||void 0===n?void 0:n.message)&&(0,a.jsx)(P.Z,{variant:"body2",color:"error",children:null===(o=er.confirmarSenha)||void 0===o?void 0:o.message})]})})]})]})]})]})]}),1==Q.admin&&"edit"===J&&(0,a.jsxs)(a.Fragment,{children:[T&&T.units&&T.units.map((e,n)=>{var o,t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",value:e.usuarioUnidadeID,name:"units[".concat(n,"].usuarioUnidadeID"),...em("units[".concat(n,"].usuarioUnidadeID"))}),(0,a.jsxs)(u.Z,{sx:{mt:4},children:[(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(P.Z,{variant:"subtitle1",sx:{fontWeight:600},children:[e.unidade?e.unidade.nome:"Nova Unidade",(null===(o=e.unidade)||void 0===o?void 0:o.id)===$.unidadeID&&(null===(t=e.papel)||void 0===t?void 0:t.id)===$.papelID&&(0,a.jsx)(d.Z,{size:"small",skin:"light",color:"success",label:"Atual",sx:{mx:2,"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[e.unidadeID?(0,a.jsx)("input",{type:"hidden",value:e.unidadeID,name:"units[".concat(n,"].unidadeID"),...em("units[".concat(n,"].unidadeID"))}):(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:T.unidadesOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(V=null==e?void 0:e.unidade)&&void 0!==V?V:null,name:"units[".concat(n,"].unidade"),...em("units[".concat(n,"].unidade"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.unidadeID,nome:null==o?void 0:o.nome}:null;eu("units[".concat(n,"].unidade"),a)},renderInput(e){var o,t;return(0,a.jsx)(Z.Z,{...e,label:"Selecione a unidade",placeholder:"Selecionar unidade","aria-describedby":"formulario-error",error:null===(o=er.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.unidade})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:T.papelOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(L=e.papel)&&void 0!==L?L:null,name:"units[".concat(n,"].papel"),...em("units[".concat(n,"].papel"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.id,nome:null==o?void 0:o.nome,edit:!0}:null;eu("units[".concat(n,"].papel"),a)},renderInput(e){var o,t;return(0,a.jsx)(Z.Z,{...e,label:"Selecione o papel",placeholder:"Selecione o papel","aria-describedby":"formulario-error",error:null===(o=er.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.papel})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(v.Z,{options:T.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(W=e.profissao)&&void 0!==W?W:"",name:"units[".concat(n,"].profissao"),...em("units[".concat(n,"].profissao"),{required:!1}),onChange(e,o){let a=o?{id:null==o?void 0:o.profissaoID,nome:null==o?void 0:o.nome,edit:!0}:null;eu("units[".concat(n,"].profissao"),a)},renderInput(e){var o,t;return(0,a.jsx)(Z.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null===(o=er.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.profissao})}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:e.unidadeID?6:3,children:(0,a.jsx)(v.Z,{multiple:!0,limitTags:2,options:T.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(_=e.cargos)&&void 0!==_?_:[],name:"units[".concat(n,"].cargo[]"),...em("units[".concat(n,"].cargo"),{required:!1}),onChange(e,o){let a=o?o.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];eu("units[".concat(n,"].cargo"),a)},renderInput(e){var o,t;return(0,a.jsx)(Z.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null===(o=er.units)||void 0===o?void 0:null===(t=o[n])||void 0===t?void 0:t.cargo})}})})]})]}),(0,a.jsx)(m.Z,{children:(0,a.jsxs)(y.Z,{expanded:ee==="panel-".concat(n),onChange:eC("panel-".concat(n)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(w.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(P.Z,{children:"Permiss\xf5es de Acesso"})}),(0,a.jsx)(I.Z,{children:e.menu&&e.menu.map((e,o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(P.Z,{variant:"body2",children:e.nome})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,children:(0,a.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,t)=>(0,a.jsx)(a.Fragment,{children:e.rota?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(P.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].rota"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].rota"))}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].ler"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].ler")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].inserir"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].inserir")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].editar"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].editar")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].excluir"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].excluir")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].edit"),!0)}})})]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(y.Z,{expanded:eo==="item-".concat(n,"-").concat(o,"-").concat(t),onChange:eD("item-".concat(n,"-").concat(o,"-").concat(t)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,a.jsx)(w.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,a.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(P.Z,{children:e.nome})}),(0,a.jsx)(I.Z,{children:e.submenu&&e.submenu.map((e,i)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,a.jsx)(x.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(P.Z,{variant:"subtitle1",children:e.nome})}),(0,a.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].rota"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].rota"))}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].ler"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].ler")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].inserir"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].inserir")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].editar"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].editar")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})}),(0,a.jsx)(x.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].excluir"),...em("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].excluir")),onChange(e){eu("units[".concat(n,"].menuGroup[").concat(o,"].menu[").concat(t,"].submenu[").concat(i,"].edit"),!0)}})})]})}))})]})})}))]}))})]})})]})]})}),(0,a.jsx)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:(0,a.jsx)(x.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(f.Z,{startIcon:(0,a.jsx)(l.Z,{icon:"material-symbols:add-circle-outline-rounded"}),variant:"outlined",onClick(){eb()},children:"Inserir unidade"})})})]})]}),(0,a.jsx)(A.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:M,handleClose:()=>R(!1),handleSubmit:ef,btnCancel:!0,btnConfirm:!0})]})};n.Z=L}}]);