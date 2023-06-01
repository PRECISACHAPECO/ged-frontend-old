(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9845],{5605:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var i=a(63366),n=a(87462),r=a(67294),s=a(86010),o=a(94780),l=a(41796),d=a(36622),c=a(21109),x=a(80858),p=a(78884),g=a(67074),u=a(1588),h=a(34867);function m(e){return(0,h.Z)("MuiTableCell",e)}let b=(0,u.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var j=a(85893);let f=["align","className","component","padding","scope","size","sortDirection","variant"],v=e=>{let{classes:t,variant:a,align:i,padding:n,size:r,stickyHeader:s}=e,l={root:["root",a,s&&"stickyHeader","inherit"!==i&&`align${(0,d.Z)(i)}`,"normal"!==n&&`padding${(0,d.Z)(n)}`,`size${(0,d.Z)(r)}`]};return(0,o.Z)(l,m,t)},Z=(0,g.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,d.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,d.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${b.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),y=r.forwardRef(function(e,t){let a;let o=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:d,component:g,padding:u,scope:h,size:m,sortDirection:b,variant:y}=o,w=(0,i.Z)(o,f),N=r.useContext(c.Z),k=r.useContext(x.Z),z=k&&"head"===k.variant;a=g||(z?"th":"td");let C=h;!C&&z&&(C="col");let S=y||k&&k.variant,P=(0,n.Z)({},o,{align:l,component:a,padding:u||(N&&N.padding?N.padding:"normal"),size:m||(N&&N.size?N.size:"medium"),sortDirection:b,stickyHeader:"head"===S&&N&&N.stickyHeader,variant:S}),A=v(P),R=null;return b&&(R="asc"===b?"ascending":"descending"),(0,j.jsx)(Z,(0,n.Z)({as:a,ref:t,className:(0,s.Z)(A.root,d),"aria-sort":R,scope:C,ownerState:P},w))});var w=y},21109:function(e,t,a){"use strict";var i=a(67294);let n=i.createContext();t.Z=n},80858:function(e,t,a){"use strict";var i=a(67294);let n=i.createContext();t.Z=n},83102:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/relatorio",function(){return a(4920)}])},51580:function(e,t,a){"use strict";a.r(t);var i=a(85893),n=a(51857),r=a.n(n),s=a(67294),o=a(9008),l=a.n(o),d=a(60664),c=a(29630),x=a(44373),p=a(79072),g=a(90244),u=a(93978),h=a(69417),m=a(5605),b=a(39807);let j=e=>{let{data:t}=e,[a,n]=(0,s.useState)(null),[o,j]=(0,s.useState)(null),[f,v]=(0,s.useState)(null),[Z,y]=(0,s.useState)(null),[w,N]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=async()=>{try{let e=await d.h.post("/relatorio/fornecedor/",t);n(e.data.fields),j(e.data.atividades),v(e.data.sistemaQualidade),y(e.data.blocos),N(!1),setPronto(!0),console.log(e.data)}catch(a){console.error(a),N(!1)}};e()},[]),(0,s.useEffect)(()=>{},[w]);let k=()=>(0,i.jsx)("hr",{style:{margin:0,border:0,borderTop:"1px solid rgba(0, 0, 0, 0.2)",margin:"0 auto"}});return(0,i.jsxs)("div",{className:"jsx-eb7585ba0481713",children:[(0,i.jsxs)("div",{className:"jsx-eb7585ba0481713 container",children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{className:"jsx-eb7585ba0481713 no-print",children:"GED"})}),w?(0,i.jsxs)("div",{style:{paddingBottom:"10px"},className:"jsx-eb7585ba0481713",children:["Carregando dados... ",(0,i.jsx)("h1",{className:"jsx-eb7585ba0481713",children:"esse \xe9 um teste"})]}):a&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"jsx-eb7585ba0481713 content",children:(0,i.jsxs)("div",{className:"jsx-eb7585ba0481713",children:[(0,i.jsx)(c.Z,{variant:"h5",align:"center",sx:{mt:4,mb:12,fontWeight:"bold"},children:"QUESTION\xc1RIO DE AUTO AVALIA\xc7\xc3O DO FORNECEDOR"}),(0,i.jsx)(x.Z,{component:k}),(0,i.jsx)(p.ZP,{container:!0,spacing:3,sx:{pt:2},children:a.map((e,t)=>{var n;return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsxs)(p.ZP,{item:!0,xs:4,children:[(0,i.jsx)(c.Z,{variant:"caption",children:e.title}),(0,i.jsx)(c.Z,{variant:"subtitle1",children:null!==(n=e.value)&&void 0!==n?n:"--"})]}),(t+1)%3==0&&t<a.length-1&&(0,i.jsx)(p.ZP,{item:!0,xs:12,children:(0,i.jsx)(x.Z,{component:k})})]},t)})}),(0,i.jsx)(x.Z,{component:k}),(0,i.jsxs)(p.ZP,{container:!0,spacing:3,sx:{pt:2},children:[(0,i.jsx)(p.ZP,{item:!0,xs:12,children:(0,i.jsxs)(c.Z,{variant:"caption",children:["Categoria(s): ",(0,i.jsx)(c.Z,{variant:"subtitle1",children:o})]})}),(0,i.jsx)(p.ZP,{item:!0,xs:12,children:(0,i.jsxs)(c.Z,{variant:"caption",children:["Atividade(s): ",(0,i.jsx)(c.Z,{variant:"subtitle1",children:o})]})}),(0,i.jsx)(p.ZP,{item:!0,xs:12,children:(0,i.jsxs)(c.Z,{variant:"caption",children:["Sistema(s) de Qualidade:"," ",(0,i.jsx)(c.Z,{variant:"subtitle1",children:f})]})})]}),Z.map((e,t)=>(0,i.jsxs)(g.Z,{className:"table-auto w-full mt-4",children:[(0,i.jsx)(u.Z,{children:(0,i.jsxs)(h.Z,{className:"bg-gray-100 border",children:[(0,i.jsx)(m.Z,{children:e.nome}),(0,i.jsx)(m.Z,{children:"Resposta"}),(0,i.jsx)(m.Z,{children:"Observa\xe7\xf5es"})]})}),(0,i.jsx)(b.Z,{children:e.itens.map((e,t)=>(0,i.jsxs)(h.Z,{children:[(0,i.jsxs)(m.Z,{className:"border -",children:[(0,i.jsxs)("span",{className:"jsx-eb7585ba0481713 opacity-80",children:[e.ordem," - "]}),e.nome]}),(0,i.jsx)(m.Z,{className:"border ",children:e.resposta?e.resposta:""}),(0,i.jsx)(m.Z,{className:"border ",children:e.obsResposta?e.obsResposta:""})]},t))})]},t)),(0,i.jsx)("p",{className:"jsx-eb7585ba0481713 w-2/5 mx-auto mt-20 border-t border-gray-500 text-center",children:"Assinatura do profissional"})]})})})]}),(0,i.jsx)(r(),{id:"eb7585ba0481713",children:".content.jsx-eb7585ba0481713{padding:20px}.container.jsx-eb7585ba0481713{padding:5px 0;width:50%;margin:0 auto;background-color:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);-moz-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1)}.no-print.jsx-eb7585ba0481713{display:none}@media print{.container.jsx-eb7585ba0481713{width:100%;background-color:transparent;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.time-container.jsx-eb7585ba0481713{display:none!important}.content.jsx-eb7585ba0481713{padding:0px}}"})]})};t.default=j},4920:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var i=a(85893),n=a(88942),r=a(51580),s=a(67294),o=a(10160),l=a(21609);let d=e=>{let{savePdf:t}=e,[a,n]=(0,s.useState)(null),r=()=>{console.log("Assinatura eletronica")},d=()=>{window.print()},c=()=>{window.close()},x=[{id:1,title:"Imprimir",color:"primary",size:"large",variant:"contained",icon:"material-symbols:print",function:d},{id:2,title:"Assinar digitalmente",color:"primary",size:"large",variant:"outlined",icon:"fluent:signature-24-filled",function:r},{id:3,title:"Salvar PDF",color:"primary",size:"large",variant:"outlined",icon:"basil:download-solid",function:t},{id:4,title:"Fechar",color:"primary",size:"large",variant:"outlined",icon:"ooui:close",function:c}];return(0,s.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("reportParameters"));n(e),localStorage.removeItem("reportParameters")},[]),(0,i.jsx)("div",{className:"fixed bottom-10 right-8 flex flex-col-reverse gap-2 no-print ",children:x&&x.map(e=>(0,i.jsx)("div",{style:{textAlign:"center"},onClick:e.function,children:(0,i.jsx)(o.Z,{color:e.color,size:e.size,variant:e.variant,children:(0,i.jsx)(l.Z,{icon:e.icon})})},e.id))})},c=e=>{let{children:t}=e,a=()=>{};return(0,i.jsxs)("div",{id:"pageReport",children:[(0,i.jsx)(d,{savePdf:a}),t]})},x=()=>{let e=JSON.parse(localStorage.getItem("reportParameters"));if(e)return"Fornecedor"===e.component?(0,i.jsx)(r.default,{data:e}):(0,i.jsx)("div",{children:"Conteudo n\xe3o encontrado"})};x.getLayout=e=>(0,i.jsx)(n.Z,{children:(0,i.jsx)(c,{children:e})}),x.setConfig=()=>({mode:"light"});var p=x}},function(e){e.O(0,[2176,9774,2888,179],function(){return e(e.s=83102)}),_N_E=e.O()}]);