"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{33310:function(e,n,t){var o=t(85893),a=t(11163),i=t.n(a),r=t(67294),s=t(46749),c=t(31727),l=t(21609),d=t(7071),u=t(84220),m=t(49837),x=t(91359),p=t(79072),h=t(72389),g=t(80562),j=t(55343),Z=t(44731),v=t(67836),f=t(35966),b=t(75084),C=t(58316),y=t(39063),D=t(9041),P=t(29630),I=t(76992),w=t(29618),S=t(47028),k=t(75158),G=t(87536),F=t(86501),A=t(45061),E=t(89191),O=t(40039),q=t(26829),N=t(50720),V=t(54623),W=t(13860),z=t.n(W);t(57548);var L=t(29308);t(50287);let U=()=>{var e,n,t,a,W,U,M,_;let[Y,R]=(0,r.useState)(!1),[T,$]=(0,r.useState)(),{id:K}=i().query,Q=i(),B=(0,s.Lo)(Q.pathname),H=(0,s.g_)(Q.pathname),{user:J,setUser:X,loggedUnity:ee}=(0,r.useContext)(O.V),[en,et]=(0,r.useState)(!1),[eo,ea]=(0,r.useState)(!1),[ei,er]=(0,r.useState)(null),{control:es,handleSubmit:ec,formState:{errors:el},watch:ed,reset:eu,setValue:em,register:ex}=(0,G.cI)({});console.log("errors: ",el),T&&T.units&&T.units.map((e,n)=>{em("units[".concat(n,"].papel"),e.papel),em("units[".concat(n,"].profissao"),e.profissao),em("units[".concat(n,"].cargo"),e.cargos)});let[ep,eh]=(0,r.useState)({showPassword:!1,showConfirmPassword:!1}),eg=()=>{eh({...ep,showPassword:!ep.showPassword})},ej=()=>{eh({...ep,showConfirmPassword:!ep.showConfirmPassword})},[eZ,ev]=(0,r.useState)(!1),ef=async e=>{console.log("\uD83D\uDE80 ~ onSubmit:",e);try{if("new"===B){let n=await c.h.post("".concat(H,"/novo"),e);Q.replace("".concat(H,"/").concat(n.data.id)),F.ZP.success(s.OD.successNew)}else"edit"===B&&(await c.h.put("".concat(H,"/").concat(K),e),F.ZP.success(s.OD.successUpdate),console.log("\uD83D\uDE80 ~ values:",e))}catch(t){t.response&&409===t.response.status?F.ZP.error(s.OD.errorRepeated):console.log(t)}},eb=async()=>{try{await c.h.delete("".concat(H,"/").concat(K)),Q.push(H),F.ZP.success(s.OD.successDelete)}catch(e){e.response&&409===e.response.status?(F.ZP.error(s.OD.pendingDelete),R(!1)):console.log(e)}},eC=()=>{let e=[...T.units];e.push({unidade:null,papel:null,profissao:null,cargos:[],status:!0}),$({...T,units:e})},ey=e=>(n,t)=>{et(!!t&&e)},eD=e=>(n,t)=>{ea(!!t&&e)},eP=(0,r.useRef)(null),eI=()=>{eP.current.click()},ew=async e=>{let n=e.target.files[0];if(console.log("\uD83D\uDE80 ~ selectedFile:",n),n){let t=new FormData;t.append("photoProfile",n),await c.h.post("".concat(H,"/photo-profile/").concat(K),t).then(e=>{er(e.data),console.log("id",K),console.log("user.usuarioID",J.usuarioID),J.usuarioID==K&&X({...J,imagem:e.data}),F.ZP.success("Foto de perfil atualizada com sucesso!")}).catch(e=>{console.log(e),F.ZP.error("Erro ao atualizar foto de perfil, tente novamente!")})}},eS=async()=>{try{await c.h.delete("".concat(H,"/photo-profile/").concat(K)),er(null),J.usuarioID==K&&X({...J,imagem:null}),F.ZP.success("Foto de perfil removida com sucesso!")}catch(e){console.log(e),F.ZP.error("Erro ao remover foto de perfil, tente novamente!")}};return(0,r.useEffect)(()=>{let e=async()=>{try{let e=await c.h.get("".concat(H,"/").concat(K,"?unidadeID=").concat(ee.unidadeID,"&papelID=").concat(ee.papelID,"&admin=").concat(J.admin));$(e.data),er(e.data.imagem),console.log("\uD83D\uDE80 ~ getData: ",e.data)}catch(n){console.log(n)}};"edit"===B&&e()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:ec(ef),children:[("new"==B||T)&&(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(E.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>ec(ef),btnDelete:"edit"===B,onclickDelete:()=>R(!0)}),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("input",{type:"hidden",value:J.admin,name:"admin",...ex("admin")}),(0,o.jsx)("input",{type:"hidden",value:null==T?void 0:T.usuarioUnidadeID,name:"usuarioUnidadeID",...ex("usuarioUnidadeID")}),(0,o.jsx)("input",{type:"hidden",value:null==ee?void 0:ee.unidadeID,name:"unidadeID",...ex("unidadeID")}),(0,o.jsx)("input",{type:"hidden",value:null==ee?void 0:ee.papelID,name:"papelID",...ex("papelID")}),(0,o.jsxs)(p.ZP,{container:!0,spacing:5,sx:{mt:2},children:[(0,o.jsx)(p.ZP,{xs:12,sm:4,md:2,container:!0,spacing:5,children:(0,o.jsxs)(p.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",mx:"17px",height:"250px",width:"250px",position:"relative",mb:"10px",md:{height:"auto",width:"auto"}},children:[ei&&(0,o.jsx)(h.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,o.jsx)(g.Z,{size:"small",sx:{position:"absolute",top:"30px",right:"9px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:eS,children:(0,o.jsx)(l.Z,{icon:"material-symbols:delete-outline"})})}),(0,o.jsx)(h.Z,{title:ei?"Alterar foto":"Inserir foto",placement:"top",children:(0,o.jsxs)(j.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"95%",width:"95%"},children:[(0,o.jsx)("input",{type:"file",ref:eP,style:{display:"none"},onChange:ew}),(0,o.jsx)(Z.Z,{variant:"rounded",alt:"Victor Anderson",sx:{width:"100%",height:"100%",cursor:"pointer"},src:ei,onClick:eI})]})})]})}),(0,o.jsxs)(p.ZP,{xs:12,sm:8,md:10,container:!0,spacing:5,children:[(0,o.jsx)(L.Z,{xs:12,md:4,title:"Nome",name:"nome",value:null==T?void 0:T.nome,required:!0,register:ex,error:el.nome}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(N._,{dateAdapter:q.y,children:(0,o.jsx)(V.M,{label:"Data de Nascimento",locale:z().locale("pt-br"),format:"DD/MM/YYYY",defaultValue:z()(new Date(null==T?void 0:T.dataNascimento)),name:"dataNascimento",onChange:e=>em("dataNascimento",e),renderInput:e=>(0,o.jsx)(v.Z,{...e,variant:"outlined",error:null==el?void 0:el.dataNascimento})})})})}),(0,o.jsx)(L.Z,{xs:12,md:4,title:"E-mail",name:"email",value:null==T?void 0:T.email,required:!0,register:ex,error:el.email}),(0,o.jsx)(L.Z,{xs:12,md:4,title:"CPF",name:"cpf",mask:"cpf",value:null==T?void 0:T.cpf,required:!0,register:ex,error:el.cpf}),(0,o.jsx)(L.Z,{xs:12,md:4,title:"RG",name:"rg",mask:"rg",value:null==T?void 0:T.rg,required:!0,register:ex,error:el.rg}),(0,o.jsx)(L.Z,{xs:12,md:4,title:"Registro Conselho Classe",name:"registroConselhoClasse",value:null==T?void 0:T.registroConselhoClasse,register:ex,error:el.registroConselhoClasse}),T&&0==J.admin&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{title:"Selecione a profiss\xe3o",options:T.profissaoOptions,name:"profissao",idName:"profissaoID",value:null==values?void 0:values.resposta,disabled:disabled,register:ex,setValue:em,errors:null==el?void 0:el.profissao}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(f.Z,{multiple:!0,limitTags:2,options:T.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(a=null==T?void 0:T.cargo)&&void 0!==a?a:[],name:"cargo[]",...ex("cargo",{required:!1}),onChange(e,n){let t=n?n.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];em("cargo",t)},renderInput:e=>(0,o.jsx)(v.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null==el?void 0:el.cargo})})})})]}),T&&"edit"==B&&(0,o.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,o.jsx)(j.Z,{fullWidth:!0,children:(0,o.jsx)(b.Z,{variant:"outlined",startIcon:(0,o.jsx)(l.Z,{icon:"mdi:lock-reset"}),onClick(){ev(!eZ),eZ&&(em("senha",null),em("confirmarSenha",null))},sx:{height:"56px"},children:"Alterar Senha"})})}),("new"==B||eZ)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,o.jsxs)(j.Z,{fullWidth:!0,children:[(0,o.jsx)(C.Z,{htmlFor:"input-confirm-password",children:"Senha"}),(0,o.jsx)(y.Z,{label:"Senha",id:"input-password",type:ep.showPassword?"text":"password",name:"senha",...ex("senha",{required:"new"==B}),endAdornment:(0,o.jsx)(D.Z,{position:"end",children:(0,o.jsx)(g.Z,{edge:"end",onClick:eg,children:(0,o.jsx)(l.Z,{icon:ep.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})})]})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,o.jsxs)(j.Z,{fullWidth:!0,children:[(0,o.jsx)(C.Z,{htmlFor:"input-confirm-password",color:(null===(e=el.confirmarSenha)||void 0===e?void 0:e.message)?"error":"",children:"Confirmar Senha"}),(0,o.jsx)(y.Z,{label:"Confirmar Senha",id:"input-password",type:ep.showConfirmPassword?"text":"password",name:"confirmarSenha",...ex("confirmarSenha",{required:"new"==B,validate:e=>e===ed("senha")||"As senhas n\xe3o conferem."}),error:el.confirmarSenha,endAdornment:(0,o.jsx)(D.Z,{position:"end",children:(0,o.jsx)(g.Z,{edge:"end",onClick:ej,children:(0,o.jsx)(l.Z,{icon:ep.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})}),(null===(n=el.confirmarSenha)||void 0===n?void 0:n.message)&&(0,o.jsx)(P.Z,{variant:"body2",color:"error",children:null===(t=el.confirmarSenha)||void 0===t?void 0:t.message})]})})]})]})]})]})]}),1==J.admin&&"edit"===B&&(0,o.jsxs)(o.Fragment,{children:[T&&T.units&&T.units.map((e,n)=>{var t,a;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",value:e.usuarioUnidadeID,name:"units[".concat(n,"].usuarioUnidadeID"),...ex("units[".concat(n,"].usuarioUnidadeID"))}),(0,o.jsxs)(m.Z,{sx:{mt:4},children:[(0,o.jsxs)(x.Z,{children:[(0,o.jsxs)(P.Z,{variant:"subtitle1",sx:{fontWeight:600},children:[e.unidade?e.unidade.nome:"Nova Unidade",(null===(t=e.unidade)||void 0===t?void 0:t.id)===ee.unidadeID&&(null===(a=e.papel)||void 0===a?void 0:a.id)===ee.papelID&&(0,o.jsx)(d.Z,{size:"small",skin:"light",color:"success",label:"Atual",sx:{mx:2,"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,o.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[e.unidadeID?(0,o.jsx)("input",{type:"hidden",value:e.unidadeID,name:"units[".concat(n,"].unidadeID"),...ex("units[".concat(n,"].unidadeID"))}):(0,o.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(f.Z,{options:T.unidadesOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(W=null==e?void 0:e.unidade)&&void 0!==W?W:null,name:"units[".concat(n,"].unidade"),...ex("units[".concat(n,"].unidade"),{required:!1}),onChange(e,t){let o=t?{id:null==t?void 0:t.unidadeID,nome:null==t?void 0:t.nome}:null;em("units[".concat(n,"].unidade"),o)},renderInput(e){var t,a;return(0,o.jsx)(v.Z,{...e,label:"Selecione a unidade",placeholder:"Selecionar unidade","aria-describedby":"formulario-error",error:null===(t=el.units)||void 0===t?void 0:null===(a=t[n])||void 0===a?void 0:a.unidade})}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(f.Z,{options:T.papelOptions,getOptionLabel:e=>e.nome,defaultValue:null!==(U=e.papel)&&void 0!==U?U:null,name:"units[".concat(n,"].papel"),...ex("units[".concat(n,"].papel"),{required:!1}),onChange(e,t){let o=t?{id:null==t?void 0:t.id,nome:null==t?void 0:t.nome,edit:!0}:null;em("units[".concat(n,"].papel"),o)},renderInput(e){var t,a;return(0,o.jsx)(v.Z,{...e,label:"Selecione o papel",placeholder:"Selecione o papel","aria-describedby":"formulario-error",error:null===(t=el.units)||void 0===t?void 0:null===(a=t[n])||void 0===a?void 0:a.papel})}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(f.Z,{options:T.profissaoOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(M=e.profissao)&&void 0!==M?M:"",name:"units[".concat(n,"].profissao"),...ex("units[".concat(n,"].profissao"),{required:!1}),onChange(e,t){let o=t?{id:null==t?void 0:t.profissaoID,nome:null==t?void 0:t.nome,edit:!0}:null;em("units[".concat(n,"].profissao"),o)},renderInput(e){var t,a;return(0,o.jsx)(v.Z,{...e,label:"Selecione a profiss\xe3o",placeholder:"Selecione a profiss\xe3o","aria-describedby":"formulario-error",error:null===(t=el.units)||void 0===t?void 0:null===(a=t[n])||void 0===a?void 0:a.profissao})}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:e.unidadeID?6:3,children:(0,o.jsx)(f.Z,{multiple:!0,limitTags:2,options:T.cargosOptions,getOptionLabel:e=>e.nome||"",defaultValue:null!==(_=e.cargos)&&void 0!==_?_:[],name:"units[".concat(n,"].cargo[]"),...ex("units[".concat(n,"].cargo"),{required:!1}),onChange(e,t){let o=t?t.map(e=>({id:null==e?void 0:e.id,nome:null==e?void 0:e.nome,edit:!0})):[];em("units[".concat(n,"].cargo"),o)},renderInput(e){var t,a;return(0,o.jsx)(v.Z,{...e,label:"Cargos",placeholder:"Cargos",error:null===(t=el.units)||void 0===t?void 0:null===(a=t[n])||void 0===a?void 0:a.cargo})}})})]})]}),(0,o.jsx)(x.Z,{children:(0,o.jsxs)(I.Z,{expanded:en==="panel-".concat(n),onChange:ey("panel-".concat(n)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,o.jsx)(w.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,o.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,o.jsx)(P.Z,{children:"Permiss\xf5es de Acesso"})}),(0,o.jsx)(S.Z,{children:e.menu&&e.menu.map((e,t)=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,o.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,o.jsx)(P.Z,{variant:"body2",children:e.nome})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,children:(0,o.jsx)(P.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,a)=>(0,o.jsx)(o.Fragment,{children:e.rota?(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,o.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,o.jsx)(P.Z,{variant:"subtitle1",children:e.nome})}),(0,o.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].rota"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].rota"))}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].ler"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].ler")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].inserir"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].inserir")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].editar"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].editar")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].excluir"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].excluir")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].edit"),!0)}})})]})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(I.Z,{expanded:eo==="item-".concat(n,"-").concat(t,"-").concat(a),onChange:eD("item-".concat(n,"-").concat(t,"-").concat(a)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,o.jsx)(w.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,o.jsx)(l.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,o.jsx)(P.Z,{children:e.nome})}),(0,o.jsx)(S.Z,{children:e.submenu&&e.submenu.map((e,i)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,o.jsx)(p.ZP,{item:!0,xs:12,md:8,children:(0,o.jsx)(P.Z,{variant:"subtitle1",children:e.nome})}),(0,o.jsx)("input",{type:"hidden",value:e.rota,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].rota"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].rota"))}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.ler,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].ler"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].ler")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.inserir,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].inserir"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].inserir")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.editar,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].editar"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].editar")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].edit"),!0)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,md:1,sx:{textAlign:"center"},children:(0,o.jsx)(k.Z,{defaultChecked:e.excluir,name:"units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].excluir"),...ex("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].excluir")),onChange(e){em("units[".concat(n,"].menuGroup[").concat(t,"].menu[").concat(a,"].submenu[").concat(i,"].edit"),!0)}})})]})}))})]})})}))]}))})]})})]})]})}),(0,o.jsx)(p.ZP,{container:!0,spacing:5,sx:{my:2},children:(0,o.jsx)(p.ZP,{item:!0,xs:12,md:3,children:(0,o.jsx)(b.Z,{startIcon:(0,o.jsx)(l.Z,{icon:"material-symbols:add-circle-outline-rounded"}),variant:"outlined",onClick(){eC()},children:"Inserir unidade"})})})]})]}),(0,o.jsx)(A.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir dado",openModal:Y,handleClose:()=>R(!1),handleSubmit:eb,btnCancel:!0,btnConfirm:!0})]})};n.Z=U},45061:function(e,n,t){var o=t(85893),a=t(75084),i=t(29620),r=t(77745),s=t(95398),c=t(76779),l=t(44642);t(21609);var d=t(19604),u=t(29630),m=t(55343),x=t(67836),p=t(67294),h=t(82747);t(84220),t(29308),t(67569),t(3893),t(88475);let g=e=>{let{title:n,text:t,handleClose:g,openModal:j,handleSubmit:Z,cnpj:v,gruposAnexo:f,inputEmail:b,btnCancel:C,btnConfirm:y,grupoAnexosFornecedor:D,btnCancelColor:P,btnConfirmColor:I,closeAfterSave:w,listErrors:S}=e,[k,G]=(0,p.useState)(null),[F,A]=(0,p.useState)(!1);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.Z,{open:j,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,n){"backdropClick"!==n&&g()},children:[(0,o.jsx)(r.Z,{id:"form-dialog-title",children:n}),(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(l.Z,{sx:{mb:3},children:[t,S&&S.status&&(0,o.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,o.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:S.errors.map((e,n)=>(0,o.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},n))})]})]}),b&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,o.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&F,inputProps:{onChange(e){G(e.target.value),A(!(0,h.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&F&&(0,o.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,o.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,o.jsxs)(c.Z,{className:"dialog-actions-dense",children:[C&&(0,o.jsx)(a.Z,{variant:"outlined",color:"primary",onClick:g,children:"Cancelar"}),y&&(0,o.jsx)(a.Z,{variant:"contained",disabled:b&&(null==k?void 0:k.length)>0&&F||S&&S.status,color:I||"error",onClick:b&&v?()=>{Z(v,f,k),G(null),w&&g()}:b&&!v?()=>{Z(k),G(null),w&&g()}:()=>{Z(),w&&g()},children:"Confirmar"})]})]})})};n.Z=g},50287:function(e,n,t){var o=t(85893),a=t(79072),i=t(55343),r=t(67836),s=t(87536);let c=e=>{let{xs:n,md:t,title:c,isRequired:l,disabled:d,type:u,value:m,name:x,setDateFormat:p,typeValidation:h,daysValidation:g,dateStatus:j,errors:Z,control:v}=e,f=e=>{let n=new Date(e),t=n.getDate().toString().padStart(2,"0"),o=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getFullYear();return"".concat(a,"-").concat(o,"-").concat(t)};return(0,o.jsx)(a.ZP,{item:!0,xs:n,md:t,children:(0,o.jsx)(i.Z,{fullWidth:!0,children:(0,o.jsx)(s.Qr,{name:x,control:v,render(e){var n,t;let{field:a}=e;return(0,o.jsx)(r.Z,{type:"date",label:c,disabled:!!d,defaultValue:m?f(m):"",onChange(e){a.onChange(e),p(h,u,e.target.value,g)},variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{min:null===(n=j[u])||void 0===n?void 0:n.dataIni,max:null===(t=j[u])||void 0===t?void 0:t.dataFim}})}})})})};n.Z=c},82747:function(e,n,t){function o(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,t=e.substring(0,n),o=e.substring(n),a=0,i=n-7;for(let r=n;r>=1;r--)a+=t.charAt(n-r)*i--,i<2&&(i=9);let s=a%11<2?0:11-a%11;if(s!=o.charAt(0))return!1;n+=1,t=e.substring(0,n),a=0,i=n-7;for(let c=n;c>=1;c--)a+=t.charAt(n-c)*i--,i<2&&(i=9);return(s=a%11<2?0:11-a%11)==o.charAt(1)}function a(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let o=1;o<=9;o++)t+=parseInt(e.substring(o-1,o))*(11-o);if((10==(n=10*t%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;t=0;for(let a=1;a<=10;a++)t+=parseInt(e.substring(a-1,a))*(12-a);return(10==(n=10*t%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(n,{dI:function(){return i},sw:function(){return a},zk:function(){return o}})}}]);