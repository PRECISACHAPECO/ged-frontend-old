"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7536],{87536:function(e,t,r){r.d(t,{KN:function(){return E},Qr:function(){return O},U2:function(){return m},cI:function(){return e_},t8:function(){return j}});var a=r(67294),i=e=>"checkbox"===e.type,s=e=>e instanceof Date,l=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&n(e)&&!s(e),o=e=>u(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,f=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,d=(e,t)=>e.has(f(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;let a=c(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return y(a)||a===e?y(e[t])?r:e[t]:a};let h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},v={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},p=a.createContext(null),b=()=>a.useContext(p);var _=(e,t,r,a=!0)=>{let i={defaultValues:t._defaultValues};for(let s in e)Object.defineProperty(i,s,{get(){let i=s;return t._proxyFormState[i]!==g.all&&(t._proxyFormState[i]=!a||g.all),r&&(r[i]=!0),e[i]}});return i},V=e=>u(e)&&!Object.keys(e).length,A=(e,t,r)=>{let{name:a,...i}=e;return V(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!r||g.all))},w=e=>Array.isArray(e)?e:[e],F=(e,t,r)=>r&&t?e===t:!e||!t||e===t||w(e).some(e=>e&&(e.startsWith(t)||t.startsWith(e)));function k(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}var S=e=>"string"==typeof e,x=(e,t,r,a)=>{let i=Array.isArray(e);return S(e)?(a&&t.watch.add(e),m(r,e)):i?e.map(e=>(a&&t.watch.add(e),m(r,e))):(a&&(t.watchAll=!0),r)},D=e=>"function"==typeof e,C=e=>{for(let t in e)if(D(e[t]))return!0;return!1};let O=e=>e.render(function(e){let t=b(),{name:r,control:i=t.control,shouldUnregister:s}=e,l=d(i._names.array,r),n=function(e){let t=b(),{control:r=t.control,name:i,defaultValue:s,disabled:l,exact:n}=e||{},o=a.useRef(i);o.current=i,k({disabled:l,subject:r._subjects.watch,callback:a.useCallback(e=>{if(F(o.current,e.name,n)){let t=x(o.current,r._names,e.values||r._formValues);d(y(o.current)||u(t)&&!C(t)?{...t}:Array.isArray(t)?[...t]:y(t)?s:t)}},[r,n,s])});let[f,d]=a.useState(y(s)?r._getWatch(i):s);return a.useEffect(()=>r._removeUnmounted()),f}({control:i,name:r,defaultValue:m(i._formValues,r,m(i._defaultValues,r,e.defaultValue)),exact:!0}),f=function(e){let t=b(),{control:r=t.control,disabled:i,name:s,exact:l}=e||{},[n,u]=a.useState(r._formState),o=a.useRef(!0),f=a.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=a.useRef(s);return d.current=s,k({disabled:i,callback:a.useCallback(e=>o.current&&F(d.current,e.name,l)&&A(e,f.current)&&u({...r._formState,...e}),[r,l]),subject:r._subjects.state}),a.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]),_(n,r,f.current,!1)}({control:i,name:r}),c=a.useRef(i.register(r,{...e.rules,value:n}));return a.useEffect(()=>{let e=(e,t)=>{let r=m(i._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{let t=i._options.shouldUnregister||s;(l?t&&!i._stateFlags.action:t)?i.unregister(r):e(r,!1)}},[r,i,l,s]),{field:{name:r,value:n,onChange:a.useCallback(e=>c.current.onChange({target:{value:o(e),name:r},type:h.CHANGE}),[r]),onBlur:a.useCallback(()=>c.current.onBlur({target:{value:m(i._formValues,r),name:r},type:h.BLUR}),[r,i]),ref(e){let t=m(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(f.errors,r)},isDirty:{enumerable:!0,get:()=>!!m(f.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!m(f.touchedFields,r)},error:{enumerable:!0,get:()=>m(f.errors,r)}})}}(e));var E=(e,t,r,a,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:i||!0}}:{},T=e=>/^\w*$/.test(e),U=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function j(e,t,r){let a=-1,i=T(t)?[t]:U(t),s=i.length,l=s-1;for(;++a<s;){let n=i[a],o=r;if(a!==l){let f=e[n];o=u(f)||Array.isArray(f)?f:isNaN(+i[a+1])?{}:[]}e[n]=o,e=e[n]}return e}let B=(e,t,r)=>{for(let a of r||Object.keys(e)){let i=m(e,a);if(i){let{_f:s,...l}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else u(l)&&B(l,t)}}};var L=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),N=(e,t,r)=>{let a=c(m(e,r));return j(a,"root",t[r]),j(e,r,a),e},M=e=>"boolean"==typeof e,R=e=>"file"===e.type,q=e=>S(e)||a.isValidElement(e),H=e=>"radio"===e.type,P=e=>e instanceof RegExp;let I={value:!1,isValid:!1},W={value:!0,isValid:!0};var $=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?W:{value:e[0].value,isValid:!0}:W:I}return I};let G={isValid:!1,value:null};var K=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,G):G;function Q(e,t,r="validate"){if(q(e)||Array.isArray(e)&&e.every(q)||M(e)&&!e)return{type:r,message:q(e)?e:"",ref:t}}var z=e=>u(e)&&!P(e)?e:{value:e,message:""},J=async(e,t,r,a,s)=>{let{ref:n,refs:o,required:f,maxLength:d,minLength:c,min:y,max:m,pattern:h,validate:g,name:p,valueAsNumber:b,mount:_,disabled:A}=e._f;if(!_||A)return{};let w=o?o[0]:n,F=e=>{a&&w.reportValidity&&(w.setCustomValidity(M(e)?"":e||" "),w.reportValidity())},k={},x=H(n),C=i(n),O=(b||R(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=E.bind(null,p,r,k),U=(e,t,r,a=v.maxLength,i=v.minLength)=>{let s=e?t:r;k[p]={type:e?a:i,message:s,ref:n,...T(e?a:i,s)}};if(s?!Array.isArray(t)||!t.length:f&&(!(x||C)&&(O||l(t))||M(t)&&!t||C&&!$(o).isValid||x&&!K(o).isValid)){let{value:j,message:B}=q(f)?{value:!!f,message:f}:z(f);if(j&&(k[p]={type:v.required,message:B,ref:w,...T(v.required,B)},!r))return F(B),k}if(!O&&(!l(y)||!l(m))){let L,N;let I=z(m),W=z(y);if(l(t)||isNaN(t)){let G=n.valueAsDate||new Date(t),J=e=>new Date(new Date().toDateString()+" "+e),X="time"==n.type,Y="week"==n.type;S(I.value)&&t&&(L=X?J(t)>J(I.value):Y?t>I.value:G>new Date(I.value)),S(W.value)&&t&&(N=X?J(t)<J(W.value):Y?t<W.value:G<new Date(W.value))}else{let Z=n.valueAsNumber||(t?+t:t);l(I.value)||(L=Z>I.value),l(W.value)||(N=Z<W.value)}if((L||N)&&(U(!!L,I.message,W.message,v.max,v.min),!r))return F(k[p].message),k}if((d||c)&&!O&&(S(t)||s&&Array.isArray(t))){let ee=z(d),et=z(c),er=!l(ee.value)&&t.length>ee.value,ea=!l(et.value)&&t.length<et.value;if((er||ea)&&(U(er,ee.message,et.message),!r))return F(k[p].message),k}if(h&&!O&&S(t)){let{value:ei,message:es}=z(h);if(P(ei)&&!t.match(ei)&&(k[p]={type:v.pattern,message:es,ref:n,...T(v.pattern,es)},!r))return F(es),k}if(g){if(D(g)){let el=await g(t),en=Q(el,w);if(en&&(k[p]={...en,...T(v.validate,en.message)},!r))return F(en.message),k}else if(u(g)){let eu={};for(let eo in g){if(!V(eu)&&!r)break;let ef=Q(await g[eo](t),w,eo);ef&&(eu={...ef,...T(eo,ef.message)},F(ef.message),r&&(k[p]=eu))}if(!V(eu)&&(k[p]={ref:w,...eu},!r))return k}}return F(!0),k},X=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},Y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function Z(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(Y&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||X(e))for(let a in e)t[a]=Z(e[a]);else t=e;return t}var ee=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched});function et(e,t){let r;let a=T(t)?[t]:U(t),i=1==a.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=y(e)?a++:e[t[a++]];return e}(e,a),s=a[a.length-1];i&&delete i[s];for(let l=0;l<a.slice(0,-1).length;l++){let n,o=-1,f=a.slice(0,-(l+1)),d=f.length-1;for(l>0&&(r=e);++o<f.length;){let c=f[o];n=n?n[c]:e[c],d===o&&(u(n)&&V(n)||Array.isArray(n)&&function(e){for(let t in e)if(!y(e[t]))return!1;return!0}(n))&&(r?delete r[c]:delete e[c]),r=n}}return e}function er(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe(){e=e.filter(e=>e!==t)}}),a=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:a}}var ea=e=>l(e)||!n(e);function ei(e,t){if(ea(e)||ea(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let i of r){let l=e[i];if(!a.includes(i))return!1;if("ref"!==i){let n=t[i];if(s(l)&&s(n)||u(l)&&u(n)||Array.isArray(l)&&Array.isArray(n)?!ei(l,n):l!==n)return!1}}return!0}var es=e=>{let t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},el=e=>"select-multiple"===e.type,en=e=>H(e)||i(e),eu=e=>es(e)&&e.isConnected;function eo(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let a in e)Array.isArray(e[a])||u(e[a])&&!C(e[a])?(t[a]=Array.isArray(e[a])?[]:{},eo(e[a],t[a])):l(e[a])||(t[a]=!0);return t}var ef=(e,t)=>(function e(t,r,a){let i=Array.isArray(t);if(u(t)||i)for(let s in t)Array.isArray(t[s])||u(t[s])&&!C(t[s])?y(r)||ea(a[s])?a[s]=Array.isArray(t[s])?eo(t[s],[]):{...eo(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!ei(t[s],r[s]);return a})(e,t,eo(t)),ed=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&S(e)?new Date(e):a?a(e):e;function ec(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:R(t)?t.files:H(t)?K(e.refs).value:el(t)?[...t.selectedOptions].map(({value:e})=>e):i(t)?$(e.refs).value:ed(y(t.value)?e.ref.value:t.value,e)}var ey=(e,t,r,a)=>{let i={};for(let s of e){let l=m(t,s);l&&j(i,s,l._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:a}},em=e=>y(e)?void 0:P(e)?e.source:u(e)?P(e.value)?e.value.source:e.value:e,eh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eg(e,t,r){let a=m(e,r);if(a||T(r))return{error:a,name:r};let i=r.split(".");for(;i.length;){let s=i.join("."),l=m(t,s),n=m(e,s);if(l&&!Array.isArray(l)&&r!==s)break;if(n&&n.type)return{name:s,error:n};i.pop()}return{name:r}}var ev=(e,t,r,a,i)=>!i.isOnAll&&(!r&&i.isOnTouch?!(t||e):(r?a.isOnBlur:i.isOnBlur)?!e:(r?!a.isOnChange:!i.isOnChange)||e),ep=(e,t)=>!c(m(e,t)).length&&et(e,t);let eb={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function e_(e={}){let t=a.useRef(),[r,n]=a.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...eb,...e},a={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},u=Z(r.defaultValues)||{},f=r.shouldUnregister?{}:Z(u),v={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},b=0,_={},A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},F={watch:er(),array:er(),state:er()},k=ee(r.mode),C=ee(r.reValidateMode),O=r.criteriaMode===g.all,E=e=>t=>{clearTimeout(b),b=window.setTimeout(e,t)},T=async e=>{let t=!1;return A.isValid&&(t=r.resolver?V((await W()).errors):await G(n,!0),e||t===a.isValid||(a.isValid=t,F.state.next({isValid:t}))),t},U=(e,t=[],r,i,s=!0,l=!0)=>{if(i&&r){if(v.action=!0,l&&Array.isArray(m(n,e))){let o=r(m(n,e),i.argA,i.argB);s&&j(n,e,o)}if(A.errors&&l&&Array.isArray(m(a.errors,e))){let d=r(m(a.errors,e),i.argA,i.argB);s&&j(a.errors,e,d),ep(a.errors,e)}if(A.touchedFields&&l&&Array.isArray(m(a.touchedFields,e))){let c=r(m(a.touchedFields,e),i.argA,i.argB);s&&j(a.touchedFields,e,c)}A.dirtyFields&&(a.dirtyFields=ef(u,f)),F.state.next({isDirty:Q(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else j(f,e,t)},q=(e,t)=>{j(a.errors,e,t),F.state.next({errors:a.errors})},H=(e,t,r,a)=>{let i=m(n,e);if(i){let s=m(f,e,y(r)?m(u,e):r);y(s)||a&&a.defaultChecked||t?j(f,e,t?s:ec(i._f)):eo(e,s),v.mount&&T()}},P=(e,t,r,i,s)=>{let l=!1,n={name:e},o=m(a.touchedFields,e);if(A.isDirty){let f=a.isDirty;a.isDirty=n.isDirty=Q(),l=f!==n.isDirty}if(A.dirtyFields&&(!r||i)){let d=m(a.dirtyFields,e),c=ei(m(u,e),t);c?et(a.dirtyFields,e):j(a.dirtyFields,e,!0),n.dirtyFields=a.dirtyFields,l=l||d!==m(a.dirtyFields,e)}return r&&!o&&(j(a.touchedFields,e,r),n.touchedFields=a.touchedFields,l=l||A.touchedFields&&o!==r),l&&s&&F.state.next(n),l?n:{}},I=async(r,i,s,l)=>{let n=m(a.errors,r),u=A.isValid&&a.isValid!==i;if(e.delayError&&s?(t=E(()=>q(r,s)))(e.delayError):(clearTimeout(b),t=null,s?j(a.errors,r,s):et(a.errors,r)),(s?!ei(n,s):n)||!V(l)||u){let o={...l,...u?{isValid:i}:{},errors:a.errors,name:r};a={...a,...o},F.state.next(o)}_[r]--,A.isValidating&&!Object.values(_).some(e=>e)&&(F.state.next({isValidating:!1}),_={})},W=async e=>r.resolver?await r.resolver({...f},r.context,ey(e||p.mount,n,r.criteriaMode,r.shouldUseNativeValidation)):{},$=async e=>{let{errors:t}=await W();if(e)for(let r of e){let i=m(t,r);i?j(a.errors,r,i):et(a.errors,r)}else a.errors=t;return t},G=async(e,t,i={valid:!0})=>{for(let s in e){let l=e[s];if(l){let{_f:n,...u}=l;if(n){let o=p.array.has(n.name),d=await J(l,m(f,n.name),O,r.shouldUseNativeValidation,o);if(d[n.name]&&(i.valid=!1,t))break;t||(m(d,n.name)?o?N(a.errors,d,n.name):j(a.errors,n.name,d[n.name]):et(a.errors,n.name))}u&&await G(u,t,i)}}return i.valid},K=()=>{for(let e of p.unMount){let t=m(n,e);t&&(t._f.refs?t._f.refs.every(e=>!eu(e)):!eu(t._f.ref))&&eC(e)}p.unMount=new Set},Q=(e,t)=>(e&&t&&j(f,e,t),!ei(eF(),u)),z=(e,t,r)=>{let a={...v.mount?f:y(t)?u:S(e)?{[e]:t}:t};return x(e,p,a,r)},X=t=>c(m(v.mount?f:u,t,e.shouldUnregister?m(u,t,[]):[])),eo=(e,t,r={})=>{let a=m(n,e),s=t;if(a){let u=a._f;u&&(u.disabled||j(f,e,ed(t,u)),s=Y&&es(u.ref)&&l(t)?"":t,el(u.ref)?[...u.ref.options].forEach(e=>e.selected=s.includes(e.value)):u.refs?i(u.ref)?u.refs.length>1?u.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value)):u.refs[0]&&(u.refs[0].checked=!!s):u.refs.forEach(e=>e.checked=e.value===s):R(u.ref)?u.ref.value="":(u.ref.value=s,u.ref.type||F.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&P(e,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},e_=(e,t,r)=>{for(let a in t){let i=t[a],l=`${e}.${a}`,u=m(n,l);!p.array.has(e)&&ea(i)&&(!u||u._f)||s(i)?eo(l,i,r):e_(l,i,r)}},eV=(e,t,r={})=>{let i=m(n,e),s=p.array.has(e),o=Z(t);j(f,e,o),s?(F.array.next({name:e,values:f}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(a.dirtyFields=ef(u,f),F.state.next({name:e,dirtyFields:a.dirtyFields,isDirty:Q(e,o)}))):!i||i._f||l(o)?eo(e,o,r):e_(e,o,r),L(e,p)&&F.state.next({}),F.watch.next({name:e})},eA=async e=>{let i=e.target,s=i.name,l=m(n,s);if(l){let u,d;let c=i.type?ec(l._f):o(e),y=e.type===h.BLUR||e.type===h.FOCUS_OUT,g=!eh(l._f)&&!r.resolver&&!m(a.errors,s)&&!l._f.deps||ev(y,m(a.touchedFields,s),a.isSubmitted,C,k),v=L(s,p,y);j(f,s,c),y?(l._f.onBlur&&l._f.onBlur(e),t&&t(0)):l._f.onChange&&l._f.onChange(e);let b=P(s,c,y,!1),A=!V(b)||v;if(y||F.watch.next({name:s,type:e.type}),g)return A&&F.state.next({name:s,...v?{}:b});if(!y&&v&&F.state.next({}),_[s]=(_[s],1),F.state.next({isValidating:!0}),r.resolver){let{errors:w}=await W([s]),S=eg(a.errors,n,s),x=eg(w,n,S.name||s);u=x.error,s=x.name,d=V(w)}else u=(await J(l,m(f,s),O,r.shouldUseNativeValidation))[s],d=await T(!0);l._f.deps&&ew(l._f.deps),I(s,d,u,b)}},ew=async(e,t={})=>{let i,s;let l=w(e);if(F.state.next({isValidating:!0}),r.resolver){let u=await $(y(e)?e:l);i=V(u),s=e?!l.some(e=>m(u,e)):i}else e?((s=(await Promise.all(l.map(async e=>{let t=m(n,e);return await G(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&T():s=i=await G(n);return F.state.next({...!S(e)||A.isValid&&i!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:i}:{},errors:a.errors,isValidating:!1}),t.shouldFocus&&!s&&B(n,e=>e&&m(a.errors,e),e?l:p.mount),s},eF=e=>{let t={...u,...v.mount?f:{}};return y(e)?t:S(e)?m(t,e):e.map(e=>m(t,e))},ek=(e,t)=>({invalid:!!m((t||a).errors,e),isDirty:!!m((t||a).dirtyFields,e),isTouched:!!m((t||a).touchedFields,e),error:m((t||a).errors,e)}),eS=e=>{e?w(e).forEach(e=>et(a.errors,e)):a.errors={},F.state.next({errors:a.errors})},ex=(e,t,r)=>{let i=(m(n,e,{_f:{}})._f||{}).ref;j(a.errors,e,{...t,ref:i}),F.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},eD=(e,t)=>D(e)?F.watch.subscribe({next:r=>e(z(void 0,t),r)}):z(e,t,!0),eC=(e,t={})=>{for(let i of e?w(e):p.mount)p.mount.delete(i),p.array.delete(i),m(n,i)&&(t.keepValue||(et(n,i),et(f,i)),t.keepError||et(a.errors,i),t.keepDirty||et(a.dirtyFields,i),t.keepTouched||et(a.touchedFields,i),r.shouldUnregister||t.keepDefaultValue||et(u,i));F.watch.next({}),F.state.next({...a,...t.keepDirty?{isDirty:Q()}:{}}),t.keepIsValid||T()},eO=(e,t={})=>{let a=m(n,e),i=M(t.disabled);return j(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),p.mount.add(e),a?i&&j(f,e,t.disabled?void 0:m(f,e,ec(a._f))):H(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:em(t.min),max:em(t.max),minLength:em(t.minLength),maxLength:em(t.maxLength),pattern:em(t.pattern)}:{},name:e,onChange:eA,onBlur:eA,ref(i){if(i){eO(e,t),a=m(n,e);let s=y(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,l=en(s),o=a._f.refs||[];(l?o.find(e=>e===s):s===a._f.ref)||(j(n,e,{_f:{...a._f,...l?{refs:[...o.filter(eu),s,...Array.isArray(m(u,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),H(e,!1,void 0,s))}else(a=m(n,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(d(p.array,e)&&v.action)&&p.unMount.add(e)}}},eE=()=>r.shouldFocusError&&B(n,e=>e&&m(a.errors,e),p.mount),eT=(e,t)=>async i=>{i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let s=!0,l=Z(f);F.state.next({isSubmitting:!0});try{if(r.resolver){let{errors:u,values:o}=await W();a.errors=u,l=o}else await G(n);V(a.errors)?(F.state.next({errors:{},isSubmitting:!0}),await e(l,i)):(t&&await t({...a.errors},i),eE())}catch(d){throw s=!1,d}finally{a.isSubmitted=!0,F.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:V(a.errors)&&s,submitCount:a.submitCount+1,errors:a.errors})}},eU=(e,t={})=>{m(n,e)&&(y(t.defaultValue)?eV(e,m(u,e)):(eV(e,t.defaultValue),j(u,e,t.defaultValue)),t.keepTouched||et(a.touchedFields,e),t.keepDirty||(et(a.dirtyFields,e),a.isDirty=t.defaultValue?Q(e,m(u,e)):Q()),!t.keepError&&(et(a.errors,e),A.isValid&&T()),F.state.next({...a}))},ej=(t,r={})=>{let i=t||u,s=Z(i),l=t&&!V(t)?s:u;if(r.keepDefaultValues||(u=i),!r.keepValues){if(r.keepDirtyValues)for(let o of p.mount)m(a.dirtyFields,o)?j(l,o,m(f,o)):eV(o,m(l,o));else{if(Y&&y(t))for(let d of p.mount){let c=m(n,d);if(c&&c._f){let h=Array.isArray(c._f.refs)?c._f.refs[0]:c._f.ref;try{if(es(h)){h.closest("form").reset();break}}catch(g){}}}n={}}f=e.shouldUnregister?r.keepDefaultValues?Z(u):{}:s,F.array.next({values:l}),F.watch.next({values:l})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,F.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?a.isDirty:!!(r.keepDefaultValues&&!ei(t,u)),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?a.dirtyFields:r.keepDefaultValues&&t?ef(u,t):{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eB=(e,t)=>ej(D(e)?e(f):e,t),eL=(e,t={})=>{let r=m(n,e),a=r&&r._f;if(a){let i=a.refs?a.refs[0]:a.ref;i.focus&&(i.focus(),t.shouldSelect&&i.select())}};return{control:{register:eO,unregister:eC,getFieldState:ek,_executeSchema:W,_focusError:eE,_getWatch:z,_getDirty:Q,_updateValid:T,_removeUnmounted:K,_updateFieldArray:U,_getFieldArray:X,_subjects:F,_proxyFormState:A,get _fields(){return n},get _formValues(){return f},get _stateFlags(){return v},set _stateFlags(value){v=value},get _defaultValues(){return u},get _names(){return p},set _names(value){p=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:ew,register:eO,handleSubmit:eT,watch:eD,setValue:eV,getValues:eF,reset:eB,resetField:eU,clearErrors:eS,unregister:eC,setError:ex,setFocus:eL,getFieldState:ek}}(e),formState:r});let u=t.current.control;return u._options=e,k({subject:u._subjects.state,callback:a.useCallback(e=>{A(e,u._proxyFormState,!0)&&(u._formState={...u._formState,...e},n({...u._formState}))},[u])}),a.useEffect(()=>{u._stateFlags.mount||(u._proxyFormState.isValid&&u._updateValid(),u._stateFlags.mount=!0),u._stateFlags.watch&&(u._stateFlags.watch=!1,u._subjects.state.next({})),u._removeUnmounted()}),a.useEffect(()=>{r.submitCount&&u._focusError()},[u,r.submitCount]),t.current.formState=_(r,u),t.current}}}]);