import{LitElement as pe,css as he,html as v}from"https://cdn.jsdelivr.net/npm/lit@3.3.1/+esm";import{LitElement as ue,html as me}from"https://cdn.jsdelivr.net/npm/lit@2.7.4/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,q=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),W=new WeakMap;let se=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=W.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&W.set(t,e))}return e}toString(){return this.cssText}};const ge=s=>new se(typeof s=="string"?s:s+"",void 0,F),p=(s,...e)=>{const t=s.length===1?s[0]:e.reduce(((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1]),s[0]);return new se(t,s,F)},fe=(s,e)=>{if(q)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),o=M.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)}},J=q?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ge(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:be,defineProperty:ve,getOwnPropertyDescriptor:ye,getOwnPropertyNames:xe,getOwnPropertySymbols:$e,getPrototypeOf:we}=Object,N=globalThis,Y=N.trustedTypes,_e=Y?Y.emptyScript:"",Ae=N.reactiveElementPolyfillSupport,k=(s,e)=>s,I={toAttribute(s,e){switch(e){case Boolean:s=s?_e:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},oe=(s,e)=>!be(s,e),Z={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&ve(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=ye(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const h=o?.call(this);r?.call(this,a),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Z}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const e=we(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,i=[...xe(t),...$e(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(J(o))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:I;this._$Em=o;const h=a.fromAttribute(t,r.type);this[o]=h??this._$Ej?.get(o)??h,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const o=this.constructor,r=this[e];if(i??=o.getPropertyOptions(e),!((i.hasChanged??oe)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:a}=r,h=this[o];a!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,r,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,Ae?.({ReactiveElement:_}),(N.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,T=B.trustedTypes,K=T?T.createPolicy("lit-html",{createHTML:s=>s}):void 0,re="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ae="?"+y,Se=`<${ae}>`,w=document,C=()=>w.createComment(""),z=s=>s===null||typeof s!="object"&&typeof s!="function",G=Array.isArray,Ee=s=>G(s)||typeof s?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,x=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,ne=/^(?:script|style|textarea|title)$/i,ke=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),n=ke(1),A=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ie=new WeakMap,$=w.createTreeWalker(w,129);function le(s,e){if(!G(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(e):e}const Ce=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",a=E;for(let h=0;h<t;h++){const l=s[h];let u,g,c=-1,f=0;for(;f<l.length&&(a.lastIndex=f,g=a.exec(l),g!==null);)f=a.lastIndex,a===E?g[1]==="!--"?a=Q:g[1]!==void 0?a=X:g[2]!==void 0?(ne.test(g[2])&&(o=RegExp("</"+g[2],"g")),a=x):g[3]!==void 0&&(a=x):a===x?g[0]===">"?(a=o??E,c=-1):g[1]===void 0?c=-2:(c=a.lastIndex-g[2].length,u=g[1],a=g[3]===void 0?x:g[3]==='"'?te:ee):a===te||a===ee?a=x:a===Q||a===X?a=E:(a=x,o=void 0);const b=a===x&&s[h+1].startsWith("/>")?" ":"";r+=a===E?l+Se:c>=0?(i.push(u),l.slice(0,c)+re+l.slice(c)+y+b):l+y+(c===-2?h:b)}return[le(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class L{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const h=e.length-1,l=this.parts,[u,g]=Ce(e,t);if(this.el=L.createElement(u,i),$.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=$.nextNode())!==null&&l.length<h;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(re)){const f=g[a++],b=o.getAttribute(c).split(y),P=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:P[2],strings:b,ctor:P[1]==="."?Le:P[1]==="?"?Re:P[1]==="@"?Pe:O}),o.removeAttribute(c)}else c.startsWith(y)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(ne.test(o.tagName)){const c=o.textContent.split(y),f=c.length-1;if(f>0){o.textContent=T?T.emptyScript:"";for(let b=0;b<f;b++)o.append(c[b],C()),$.nextNode(),l.push({type:2,index:++r});o.append(c[f],C())}}}else if(o.nodeType===8)if(o.data===ae)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(y,c+1))!==-1;)l.push({type:7,index:r}),c+=y.length-1}r++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function S(s,e,t=s,i){if(e===A)return e;let o=i!==void 0?t._$Co?.[i]:t._$Cl;const r=z(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=o:t._$Cl=o),o!==void 0&&(e=S(s,o._$AS(s,e.values),o,i)),e}class ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??w).importNode(t,!0);$.currentNode=o;let r=$.nextNode(),a=0,h=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new R(r,r.nextSibling,this,e):l.type===1?u=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(u=new Me(r,this,e)),this._$AV.push(u),l=i[++h]}a!==l?.index&&(r=$.nextNode(),a++)}return $.currentNode=w,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),z(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=L.createElement(le(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const r=new ze(o,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new L(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new R(this.O(C()),this.O(C()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=S(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==A,a&&(this._$AH=e);else{const h=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=S(this,h[i+l],t,l),u===A&&(u=this._$AH[l]),a||=!z(u)||u!==this._$AH[l],u===m?e=m:e!==m&&(e+=(u??"")+r[l+1]),this._$AH[l]=u}a&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Le extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Re extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Pe extends O{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??m)===A)return;const i=this._$AH,o=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==m&&(i===m||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const Te=B.litHtmlPolyfillSupport;Te?.(L,R),(B.litHtmlVersions??=[]).push("3.3.1");const De=(s,e,t)=>{const i=t?.renderBefore??e;let o=i._$litPart$;if(o===void 0){const r=t?.renderBefore??null;i._$litPart$=o=new R(e.insertBefore(C(),r),r,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class d extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}d._$litElement$=!0,d.finalized=!0,V.litElementHydrateSupport?.({LitElement:d});const Ne=V.litElementPolyfillSupport;Ne?.({LitElement:d});(V.litElementVersions??=[]).push("4.2.1");const D={login:[{name:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{name:"password",type:"password",label:"Password",required:!0,placeholder:"Enter your password"}],signup:[{name:"firstName",type:"text",label:"First Name",required:!0,placeholder:"Enter your first name"},{name:"lastName",type:"text",label:"Last Name",required:!0,placeholder:"Enter your last name"},{name:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{name:"password",type:"password",label:"Password",required:!0,placeholder:"Enter your password"},{name:"confirmPassword",type:"password",label:"Confirm Password",required:!0,placeholder:"Confirm your password"}]},de={login:{title:"Welcome Back",subtitle:"Sign in to your account",submitText:"Sign In",showRememberMe:!0,showForgotPassword:!0,showGoogleSignin:!0},signup:{title:"Create Account",subtitle:"Sign up for a new account",submitText:"Sign Up",showGoogleSignin:!0}},Oe=p`
  .field {
    margin-bottom: 14px; /* tighter spacing */
  }
  
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 0.8rem; /* smaller label */
    color: #374151;
  }
  
  input {
    width: 100%;
    padding: 8px 12px; /* smaller padding */
    border: 1px solid #d1d5db;
    border-radius: 6px; /* less rounded */
    font-size: 0.875rem; /* ~14px */
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
  
  input.error {
    border-color: #ef4444;
  }
  
  .error-message {
    color: #ef4444;
    font-size: 0.75rem; /* smaller error text */
    margin-top: 3px;
  }
  
  .required {
    color: #ef4444;
  }
`;class Ue extends d{static styles=Oe;static properties={name:{type:String},type:{type:String},label:{type:String},placeholder:{type:String},required:{type:Boolean},value:{type:String},error:{type:String}};constructor(){super(),this.type="text",this.value="",this.error=""}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{name:this.name,value:this.value},bubbles:!0}))}render(){return n`
      <div class="field">
        <label for="${this.name}">
          ${this.label}
          ${this.required?n`<span class="required">*</span>`:""}
        </label>
        <input
          id="${this.name}"
          name="${this.name}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          class="${this.error?"error":""}"
          @input="${this._handleInput}"
        />
        ${this.error?n`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}}customElements.define("text-field",Ue);const je=p`
  .auth-options {
    margin: 20px 0;
  }
  
  .remember-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .remember-me input {
    width: 16px;
    height: 16px;
  }
  
  .forgot-password {
    color: #3b82f6;
    text-decoration: none;
    font-size: 14px;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  /* Smaller submit button styles */
  .submit-btn {
    width: 100%;
    padding: 8px 12px; /* Reduced padding */
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px; /* Reduced font size */
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    margin-bottom: 20px;
  }

  .submit-btn:hover {
    background: #2563eb;
  }

  .submit-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  /* Smaller Google button styles */
  .google-btn {
    width: 100%;
    padding: 8px 12px; /* Reduced padding */
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px; /* Reduced font size */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;
  }

  .google-btn:hover {
    background: #f9fafb;
  }

  .google-icon {
    width: 20px;
    height: 20px;
  }
`;class Ie extends d{static styles=je;static properties={mode:{type:String},submitText:{type:String},showRememberMe:{type:Boolean},showForgotPassword:{type:Boolean},showGoogleSignin:{type:Boolean},isLoading:{type:Boolean}};constructor(){super(),this.mode="login",this.submitText="Submit",this.showRememberMe=!1,this.showForgotPassword=!1,this.showGoogleSignin=!1,this.isLoading=!1}_handleSubmit(){this.dispatchEvent(new CustomEvent("form-submit",{bubbles:!0}))}_handleGoogleSignin(){this.dispatchEvent(new CustomEvent("google-signin",{bubbles:!0}))}_handleForgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password",{bubbles:!0}))}render(){return n`
      <div class="auth-options">
        ${this.showRememberMe||this.showForgotPassword?n`
          <div class="remember-forgot">
            ${this.showRememberMe?n`
              <label class="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            `:n`<div></div>`}
            
            ${this.showForgotPassword?n`
              <a href="#" class="forgot-password" @click="${this._handleForgotPassword}">
                Forgot password?
              </a>
            `:""}
          </div>
        `:""}
        
        <button 
          class="submit-btn" 
          ?disabled="${this.isLoading}"
          @click="${this._handleSubmit}"
        >
          ${this.isLoading?"Loading...":this.submitText}
        </button>
        
        ${this.showGoogleSignin?n`
          <div class="divider">or</div>
          <button class="google-btn" @click="${this._handleGoogleSignin}">
            <svg class="google-icon" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        `:""}
      </div>
    `}}customElements.define("auth-buttons",Ie);const He=p`
  .auth-card {
    background: white;
    padding: 1.25rem; /* smaller padding */
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); /* lighter shadow */
    width: 100%;
    max-width: 300px; /* narrower card */
  }

  .form-header {
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .form-title {
    font-size: 1.125rem; /* ~18px */
    font-weight: 600;
    margin-bottom: 0.25rem;
    color:#ffae0b;
  }

  .form-subtitle {
    color:  #1f2937;
    font-size: 0.75rem; /* smaller subtitle */
  }

  .form-fields {
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-footer {
    margin-top: 0.75rem;
    text-align: center;
    font-size: 0.75rem;
  }

  .form-footer a {
    color: #2563eb;
    text-decoration: none;
  }

  .form-footer a:hover {
    text-decoration: underline;
  }
`;class qe extends d{static styles=He;static properties={formData:{type:Object},errors:{type:Object},isLoading:{type:Boolean}};constructor(){super(),this.formData={},this.errors={},this.isLoading=!1}_handleInputChange(e){const{name:t,value:i}=e.detail;this.formData={...this.formData,[t]:i},this.errors[t]&&(this.errors={...this.errors,[t]:""})}_handleFormSubmit(){const e=D.login,t={};e.forEach(i=>{i.required&&!this.formData[i.name]&&(t[i.name]=`${i.label} is required`)}),this.errors=t,Object.keys(t).length===0&&this.dispatchEvent(new CustomEvent("login-submit",{detail:this.formData,bubbles:!0}))}_goToSignup(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate-to-signup",{bubbles:!0}))}render(){const e=de.login,t=D.login;return n`
      <div class="auth-card">
        <div class="form-header">
          <h1 class="form-title">${e.title}</h1>
          <p class="form-subtitle">${e.subtitle}</p>
        </div>

        <div class="form-fields">
          ${t.map(i=>n`
            <text-field
              name="${i.name}"
              type="${i.type}"
              label="${i.label}"
              placeholder="${i.placeholder}"
              ?required="${i.required}"
              .value="${this.formData[i.name]||""}"
              .error="${this.errors[i.name]||""}"
              @input-change="${this._handleInputChange}"
            ></text-field>
          `)}
        </div>

        <auth-buttons
          .submitText="${e.submitText}"
          ?showRememberMe="${e.showRememberMe}"
          ?showForgotPassword="${e.showForgotPassword}"
          ?showGoogleSignin="${e.showGoogleSignin}"
          ?isLoading="${this.isLoading}"
          @form-submit="${this._handleFormSubmit}"
        ></auth-buttons>

        <div class="form-footer">
          <p>Don't have an account? <a href="#" @click="${this._goToSignup}">Sign Up</a></p>
        </div>
      </div>
    `}}customElements.define("login-form",qe);class Fe extends d{static styles=p`
    .auth-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: #f9fafb; /* page background */
      padding: 1rem;
    }
  `;render(){return n`
      <div class="auth-container">
        <slot></slot>
      </div>
    `}}customElements.define("auth-layout",Fe);class Be extends d{static properties={isLoading:{type:Boolean}};constructor(){super(),this.isLoading=!1}_handleLoginSubmit(e){const t=e.detail;this.isLoading=!0,setTimeout(()=>{this.isLoading=!1,alert(`Login successful for ${t.email||"user"}!`),this.dispatchEvent(new CustomEvent("navigate-to",{detail:{path:"/dashboard"},bubbles:!0,composed:!0}))},2e3)}_navigateToSignup(){this.dispatchEvent(new CustomEvent("navigate-to",{detail:{path:"/signup"},bubbles:!0,composed:!0}))}render(){return n`
      <auth-layout>
        <login-form
          ?isLoading="${this.isLoading}"
          @login-submit="${this._handleLoginSubmit}"
          @navigate-to-signup="${this._navigateToSignup}"
        ></login-form>
      </auth-layout>
    `}}customElements.define("login-page",Be);const Ge=p`
  .auth-card {
    background: white;
    padding: 1.5rem; /* slightly more padding for extra fields */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* slightly deeper shadow */
    width: 100%;
    max-width: 400px; /* wider card for more fields */
  }

  .form-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .form-title {
    font-size: 1.25rem; /* ~20px */
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  .form-subtitle {
    color: #6b7280;
    font-size: 0.875rem; /* slightly bigger subtitle */
  }

  .form-fields {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr; /* two columns for wider forms */
    gap: 0.75rem;
  }

  /* Make single-column for smaller screens */
  @media (max-width: 500px) {
    .form-fields {
      grid-template-columns: 1fr;
    }
  }

  .form-footer {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.875rem;
  }

  .form-footer a {
    color: #2563eb;
    text-decoration: none;
  }

  .form-footer a:hover {
    text-decoration: underline;
  }
`;class Ve extends d{static styles=Ge;static properties={formData:{type:Object},errors:{type:Object},isLoading:{type:Boolean}};constructor(){super(),this.formData={},this.errors={},this.isLoading=!1}_handleInputChange(e){const{name:t,value:i}=e.detail;this.formData={...this.formData,[t]:i},this.errors[t]&&(this.errors={...this.errors,[t]:""})}_handleFormSubmit(){const e=D.signup,t={};e.forEach(i=>{i.required&&!this.formData[i.name]&&(t[i.name]=`${i.label} is required`)}),this.formData.password!==this.formData.confirmPassword&&(t.confirmPassword="Passwords do not match"),this.errors=t,Object.keys(t).length===0&&this.dispatchEvent(new CustomEvent("signup-submit",{detail:this.formData,bubbles:!0}))}_goToLogin(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate-to-login",{bubbles:!0}))}render(){const e=de.signup,t=D.signup;return n`
      <div class="auth-card">
        <div class="form-header">
          <h1 class="form-title">${e.title}</h1>
          <p class="form-subtitle">${e.subtitle}</p>
        </div>

        <div class="form-fields">
          ${t.map(i=>n`
            <text-field
              name="${i.name}"
              type="${i.type}"
              label="${i.label}"
              placeholder="${i.placeholder}"
              ?required="${i.required}"
              .value="${this.formData[i.name]||""}"
              .error="${this.errors[i.name]||""}"
              @input-change="${this._handleInputChange}"
            ></text-field>
          `)}
        </div>

        <auth-buttons
          .submitText="${e.submitText}"
          ?showGoogleSignin="${e.showGoogleSignin}"
          ?isLoading="${this.isLoading}"
          @form-submit="${this._handleFormSubmit}"
        ></auth-buttons>

        <div class="form-footer">
          <p>Already have an account? <a href="#" @click="${this._goToLogin}">Log In</a></p>
        </div>
      </div>
    `}}customElements.define("signup-form",Ve);class We extends ue{static properties={isLoading:{type:Boolean}};constructor(){super(),this.isLoading=!1}async _handleSignupSubmit(e){const t=e.detail;this.isLoading=!0;try{console.log("Signup attempt:",t),await new Promise(i=>setTimeout(i,2e3)),alert("Account created successfully!"),this.dispatchEvent(new CustomEvent("navigate-to",{detail:{path:"/login"},bubbles:!0,composed:!0}))}catch(i){console.error(i),alert("Signup failed!")}finally{this.isLoading=!1}}_navigateToLogin(){this.dispatchEvent(new CustomEvent("navigate-to",{detail:{path:"/login"},bubbles:!0,composed:!0}))}render(){return me`
      <auth-layout>
        <signup-form
          ?isLoading="${this.isLoading}"
          @signup-submit="${this._handleSignupSubmit}"
          @navigate-to-login="${this._navigateToLogin}"
        ></signup-form>
      </auth-layout>
    `}}customElements.define("signup-page",We);const Je=p`
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: #ffffff;
  border-bottom: 1.5px solid #e8e2e2;
  box-sizing: border-box;
  font-family: sans-serif;
  flex-shrink: 0;
}

h1 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffae0bff;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-left: 4vh;
}
`;class Ye extends d{static properties={title:{type:String}};static styles=Je;constructor(){super(),this.title="Default Title"}render(){return n`
      <header>
        <h1>${this.title}</h1>
      </header>
    `}}customElements.define("page-header",Ye);class Ze extends d{static properties={mode:{type:Number}};constructor(){super(),this.mode=1}static styles=p`
    :host {
      display: block;
      height: calc(100vh - 60px); /* subtract header height if header is 60px */
      overflow-y: auto; /* THIS makes the content scrollable */
    }

    .page-content {
      margin: 1rem;
      padding: 1rem;
      border-radius: 8px;
      box-sizing: border-box;
      transition: all 0.3s ease;
    }

    :host([mode="1"]) .page-content {
      background-color: #ffffff;
      border: 1px solid #e6dfdfff;
    }

    :host([mode="2"]) .page-content {
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
  `;render(){return n`
      <div class="page-content">
        <slot></slot>
      </div>
    `}}customElements.define("page-content",Ze);const Ke=p`
.table-container { 
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb; 
    box-shadow: 0 1px 3px rgba(30, 27, 27, 0.1); 
}

/* Remove previous table-header (filter / columns) */
.table-header { display: none; }

table { 
    width: 100%; 
    border-collapse: collapse; 
}

thead { background: #f5f8fa; }

th { 
    padding: 8px 12px; 
    text-align: left; 
    font-weight: 500; 
    font-size: 12px; 
    color: #0f0f0f; 
    text-transform: uppercase; 
    letter-spacing: 0.05em; 
}

td { 
    padding: 8px 12px; 
    font-size: 13px; 
    color: #374151; 
    border-bottom: 1px solid #f3f4f6; 
    vertical-align: top;
}

/* Mode-specific styles */
:host(.mode-1) table th { border: 1px solid #ccc; }
:host(.mode-1) table td { border-bottom: 1px solid #ccc; }

:host(.mode-2) table th, 
:host(.mode-2) table td { border-bottom: 1px solid #ccc; }

:host(.mode-3) table th, 
:host(.mode-3) table td { border: none; }

.no-data, .loading { text-align: center; padding: 32px; color: #9ca3af; }

.user-cell { 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    min-width: 160px; 
}

.user-info { min-width: 0; }
.user-name { 
    font-weight: 500; 
    color: #111827; 
    margin: 0 0 1px 0; 
    font-size: 13px; 
    line-height: 1.2;
}
.user-email { 
    color: #6b7280; 
    font-size: 11px; 
    margin: 0; 
    line-height: 1.2; 
}

.report-cell { display: flex; gap: 8px; max-width: 280px; align-items: flex-start; }
.report-image { 
    width: 40px; 
    height: 30px; 
    border-radius: 4px; 
    object-fit: cover; 
    border: 1px solid #e5e7eb; 
    flex-shrink: 0; 
}
.report-details { min-width: 0; flex: 1; }
.report-type { 
    font-weight: 500;
    color: #111827; 
    margin: 0 0 2px 0; 
    font-size: 12px; 
    line-height: 1.2; 
}
.report-description { 
    color: #6b7280; 
    font-size: 11px; 
    margin: 0 0 3px 0; 
    line-height: 1.3; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
}
.report-location { 
    color: #9ca3af; 
    font-size: 10px; 
    display: flex; 
    align-items: center; 
    gap: 2px; 
    margin: 0; 
    line-height: 1.2; 
}

.status-badge { 
    display: inline-flex;
    align-items: center; 
    padding: 2px 6px; 
    border-radius: 10px; 
    font-size: 10px; 
    font-weight: 500; 
    text-transform: capitalize; 
}
.status-pending { background: #fef3c7; color: #92400e; }
.status-approved { background: #d1fae5; color: #065f46; }
.status-rejected { background: #fee2e2; color: #991b1b; }

.priority-badge { 
    display: inline-flex; 
    align-items: center; 
    padding: 2px 5px; 
    border-radius: 8px; 
    font-size: 9px; 
    font-weight: 500; 
    text-transform: capitalize;
}
.priority-high { background: #fee2e2; color: #991b1b; }
.priority-medium { background: #fef3c7; color: #92400e; }
.priority-low { background: #dbeafe; color: #1e40af; }

.action-menu { position: relative; display: inline-block; }

.menu-trigger {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    font-size: 24px;
    color: #ffae0b;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
     transform: rotate(90deg);
}

.menu-dropdown { 
    position: absolute; 
    top: 100%; right: 0; 
    background: white; 
    border: 1px solid #e5e7eb; 
    border-radius: 6px; 
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); 
    z-index: 1000; 
    min-width: 120px; 
    opacity: 0; 
    visibility: hidden; 
    transform: translateY(-8px); 
    transition: all 0.15s ease-out; 
}
.menu-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); }

.menu-item {
    display: flex; 
    align-items: center; 
    gap: 6px; 
    width: 100%;
    padding: 6px 10px; 
    text-align: left; 
    border: none; 
    background: none; 
    cursor: pointer; 
    font-size: 11px; 
    color: #374151; 
    transition: background-color 0.1s; 
    
}
.menu-item:hover { background: #f3f4f6; color: #111827; }
.menu-item.approve:hover { background: #f0fdf4; }
.menu-item.reject:hover { background: #fef2f2; }

.date-cell { font-size: 11px; color: #000; white-space: nowrap; }

.pagination { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: #f5f9fc; 
    color: #000; 
    font-size: 12px; 
    border-top: 1px solid #e5e7eb; 
}

.pagination-controls { display: flex; gap: 4px; }
.pagination-btn {
    background: #242526;
    border: 1px solid #131314ff;
    border-radius: 4px;
    padding: 4px 8px;
    color: #fbfbfb;
    cursor: pointer; 
    font-size: 11px; 
}
.pagination-btn:disabled { opacity: 0.5; cursor: not-allowed; }
`;class Qe extends d{static properties={src:{type:String},alt:{type:String},size:{type:Number}};static styles=p`
    :host {
      display: inline-block;
    }

    img {
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.2s;
    }

    img:hover {
      transform: scale(1.05);
    }
  `;constructor(){super(),this.src="/src/assets/default-avatar.jpg",this.alt="User Avatar",this.size=84}render(){return n`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.size}"
        height="${this.size}"
        @click="${this.handleClick}"
      />
    `}handleClick(){this.dispatchEvent(new CustomEvent("avatar-click",{detail:{message:"Avatar clicked"},bubbles:!0,composed:!0}))}}customElements.define("user-avatar",Qe);class Xe extends d{static properties={data:{type:Array},conf:{type:Array},loading:{type:Boolean},openMenuId:{type:String},mode:{type:Number}};static styles=Ke;constructor(){super(),this.openMenuId=null,this.mode=1}updated(e){e.has("mode")&&(this.classList.remove("mode-1","mode-2","mode-3"),this.classList.add(`mode-${this.mode}`))}toggleMenu(e,t){t.stopPropagation(),this.openMenuId=this.openMenuId===e?null:e}closeAllMenus(){this.openMenuId=null}handleAction(e,t){this.closeAllMenus(),this.dispatchEvent(new CustomEvent("table-action",{detail:{action:e,item:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>this.closeAllMenus())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",()=>this.closeAllMenus())}render(){return this.loading?n`<div class="table-container"><div class="loading">Loading...</div></div>`:this.data?.length?n`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              ${this.conf.map(e=>n`<th>${e.header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.data.map(e=>n`
              <tr>
                ${this.conf.map(t=>n`
                  <td>${t.html?t.html(e[t.property],e,i=>this.handleAction(i,e),this):e[t.property]}</td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>

        <div class="pagination">
          <span>0 of ${this.data?.length||0} row(s) selected.</span>
          <div class="pagination-controls">
            <button class="pagination-btn">Previous</button>
            <button class="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    `:n`<div class="table-container"><div class="no-data">No data available</div></div>`}}customElements.define("data-table",Xe);const U=p`
  :host {
    display: block;
    min-height: 100vh;             /* full viewport height */
    background-color:  #ffffffff;     /* greyish white */
    box-sizing: border-box;
    font-family: sans-serif;
  }
`,H=[{id:"report_001",fullName:"Ideon M Dequilla",email:"ggdequilla69@gmail.com",phoneNumber:"09206936850",reportType:"Potholes",description:"Large pothole on main road causing traffic issues and potential vehicle damage. This needs immediate attention.",location:"El Monteverde, Taytay, 1920 Rizal",imageUrl:["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"],status:"pending",priority:"high",reportedAt:new Date("2025-08-20T14:27:58Z"),userId:"user1"},{id:"report_002",fullName:"John Doe Cruz",email:"john.doe@email.com",phoneNumber:"09171234567",reportType:"Street Light",description:"Broken streetlight needs immediate replacement for safety concerns during nighttime.",location:"Main Street, Antipolo City",imageUrl:["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop"],status:"approved",priority:"medium",reportedAt:new Date("2025-08-19T09:15:30Z"),userId:"user2"},{id:"report_003",fullName:"Maria Santos",email:"maria.santos@email.com",phoneNumber:"09351234567",reportType:"Road Sign",description:"Damaged road sign blocking visibility for drivers approaching intersection.",location:"Ortigas Avenue, Pasig City",imageUrl:["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"],status:"rejected",priority:"low",reportedAt:new Date("2025-08-18T16:45:20Z"),userId:"user3"},{id:"report_004",fullName:"Anna Rodriguez",email:"anna.rodriguez@gmail.com",phoneNumber:"09281234567",reportType:"Road Crack",description:"Major road crack expanding across the entire lane, causing vehicle alignment issues.",location:"Commonwealth Avenue, Quezon City",imageUrl:["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop"],status:"pending",priority:"high",reportedAt:new Date("2025-08-21T08:30:15Z"),userId:"user4"}];function et(s){return s?.split(" ").map(e=>e[0]).join("").substring(0,2).toUpperCase()||"U"}function tt(s,e){return n`
    <div class="user-cell">
      <div class="user-avatar">
        ${et(e.fullName)}
      </div>
      <div class="user-info">
        <div class="user-name">${e.fullName}</div>
        <div class="user-email">${e.email}</div>
      </div>
    </div>
  `}function it(s,e){const t=e.imageUrl?.[0]||"https://via.placeholder.com/40x30/e5e7eb/9ca3af?text=IMG";return n`
    <div class="report-cell">
      <img src="${t}" alt="Report" class="report-image" />
      <div class="report-details">
        <div class="report-type">${e.reportType}</div>
        <div class="report-description">${e.description}</div>
        <div class="report-location">
          📍 ${e.location}
        </div>
      </div>
    </div>
  `}function st(s,e){return n`<span class="status-badge status-${s}">${s}</span>`}function ot(s,e){return n`<span class="priority-badge priority-${s}">${s}</span>`}function rt(s){return s?(s.toDate?s.toDate():new Date(s)).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function at(s,e){return n`<div class="date-cell">${rt(e.reportedAt)}</div>`}function nt(s,e,t,i){const o=e.status==="pending",r=i.openMenuId===e.id;return n`
    <div class="action-menu">
      <button 
        class="menu-trigger"
        @click=${a=>i.toggleMenu(e.id,a)}>
        ⋮
      </button>
      <div class="menu-dropdown ${r?"open":""}">
        <button 
          class="menu-item"
          @click=${()=>t("view")}>
          👁️ View
        </button>
        ${o?n`
          <button 
            class="menu-item approve"
            @click=${()=>t("approve")}>
            ✅ Approve
          </button>
          <button 
            class="menu-item reject"
            @click=${()=>t("reject")}>
            ❌ Reject
          </button>
        `:n`
          <button 
            class="menu-item"
            @click=${()=>t("reopen")}>
            🔄 Reopen
          </button>
        `}
      </div>
    </div>
  `}const ce=[{property:"user",header:"Reporter",html:tt},{property:"report",header:"Report",html:it},{property:"status",header:"Status",html:st},{property:"priority",header:"Priority",html:ot},{property:"date",header:"Date",html:at},{property:"actions",header:"",html:nt}];class lt extends d{static styles=U;render(){return n`
      <page-header title="Dashboard"></page-header>
      <page-content mode="1">
        <h2>Recent Reports</h2>
        <p style="color: #6b7280; margin-bottom: 16px;">
          Latest road maintenance reports submitted by users
        </p>

        <!-- Recent Reports Table: no thead, just tbody -->
       <h2>Recent Reports</h2>
                  <data-table 
                    .data=${this.reports||H} 
                    .conf=${ce} 
                    mode="2">
                  </data-table>
      </page-content>
    `}}customElements.define("dashboard-page",lt);class dt extends d{static properties={reports:{type:Array},loading:{type:Boolean}};static styles=U;constructor(){super(),this.reports=H,this.loading=!1}async loadReports(){this.loading=!0;try{await new Promise(e=>setTimeout(e,1e3)),this.reports=H}catch(e){console.error("Error loading reports:",e)}finally{this.loading=!1}}async updateReportStatus(e,t){try{this.reports=this.reports.map(i=>i.id===e?{...i,status:t,reviewedAt:new Date,reviewedBy:"admin@roadfix.com"}:i),console.log(`Report ${e} status updated to ${t}`)}catch(i){console.error("Error updating report status:",i)}}handleTableAction(e){const{action:t,item:i}=e.detail;switch(t){case"approve":this.updateReportStatus(i.id,"approved");break;case"reject":this.updateReportStatus(i.id,"rejected");break;case"view":console.log("Viewing report:",i.id);break}}connectedCallback(){super.connectedCallback(),this.loadReports()}render(){return n`
            <page-header title="Reports Management"></page-header>
            <page-content mode="1">
                <div style="margin-bottom: 24px;">
                    <h2>Reports List</h2>
                    <p style="color: #6b7280; margin-top: 8px;">
                        Manage and review road maintenance reports
                    </p>
                </div>
                <data-table 
                  .data=${this.reports} 
                  .conf=${ce}
                  .loading=${this.loading}
                  mode="2"  <!-- Classic bordered table with headers and row borders -->
                  @table-action=${this.handleTableAction}>
                </data-table>
            </page-content>
        `}}customElements.define("reports-page",dt);const ct=[{fname:"Ideon",lname:"Dequilla",email:"ggdequilla69@gmail.com",role:"user",reportsCount:10,pendingCount:10,isActive:!0},{fname:"Alice",lname:"Johnson",email:"alice@example.com",role:"admin",reportsCount:5,pendingCount:1,isActive:!1}];function pt(s){return n`
    <span style="color:${s?"green":"red"}; font-weight:bold;">
      ${s?"Yes":"No"}
    </span>
  `}const ht=[{property:"fname",header:"First Name"},{property:"lname",header:"Last Name"},{property:"email",header:"Email"},{property:"role",header:"Role"},{property:"reportsCount",header:"Reports"},{property:"pendingCount",header:"Pending"},{property:"isActive",header:"Active",html:s=>pt(s)}];class ut extends d{static styles=U;render(){return n`
      <page-header title="Users"></page-header>
      <page-content mode="1">
        <h2>Users List</h2>
                  <data-table 
                .data=${ct} 
                .conf=${ht}
                mode="3"> <!-- Only bottom borders for a cleaner look -->
              </data-table>
      </page-content>
    `}}customElements.define("users-page",ut);class mt extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .layout-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 16px;
      width: 100%;
      min-height: 400px;
    }

    .div1 {
      grid-column: span 3 / span 3;
    }

    .div2 {
      grid-column: span 2 / span 2;
      grid-row: span 5 / span 5;
      grid-column-start: 4;
    }

    .div3 {
      grid-column: span 3 / span 3;
      grid-row: span 4 / span 4;
      grid-row-start: 2;
    }

    ::slotted(*) {
      width: 100%;
      box-sizing: border-box;
    }
  `;render(){return n`
      <div class="layout-container">
        <div class="div1">
          <slot name="one"></slot>
        </div>
        <div class="div2">
          <slot name="two"></slot>
        </div>
        <div class="div3">
          <slot name="three"></slot>
        </div>
      </div>
    `}}customElements.define("settings-layout",mt);class gt extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      display: flex;
      position: relative;
      background: #fff;
      border-radius: 12px;
      border: 1.2px solid #adadadff;
      min-height: 100px;
      overflow: hidden;
    }

    /* Left colored bar stretches full height */
    .left-bar {
      width: 32px;
      background-color: #43454C;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      align-self: stretch; /* makes it stretch full height of flex container */
      flex-shrink: 0;
    }

    .content {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      padding: 16px;
    }

    .avatar-container {
      position: relative;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }

    user-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .camera-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 2px solid #000;
      font-family: 'Material Symbols Outlined';
      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      color: black;
      font-size: 18px;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .name {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .role,
    .joined-date {
      font-size: 0.9rem;
      color: gray;
    }

    .status {
      font-size: 0.75rem;
      color: #28a745;
    }

    /* Verified badge on the right */
    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background-color: #007bff;
      color: white;
      font-size: 0.75rem;
      padding: 2px 6px;
      border-radius: 4px;
      z-index: 1;
    }
  `;render(){return n`
      <div class="profile-card">
        <div class="left-bar"></div>
        <div class="content">
          <div class="avatar-container">
            <user-avatar size="80"></user-avatar>
            <div class="camera-icon" @click=${this.changeAvatar}>add_photo_alternate</div>
          </div>
          <div class="info">
            <div class="name">John Doe</div>
            <div class="role">Roadfix Admin</div>
    
            <div class="joined-date">Joined: Jan 1, 2022</div>
          </div>
        </div>
        <div class="badge">Verified</div>
      </div>
    `}changeAvatar(){alert("Change avatar clicked")}}customElements.define("profile-header",gt);class ft extends d{static properties={type:{type:String},size:{type:String},disabled:{type:Boolean}};static styles=p`
    button {
      font-family: Arial, sans-serif;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
      font-size: 0.85rem;
      padding: 0.45rem 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Types */
    button.primary {
      background-color: #007bff;
      color: #fff;
    }

    button.primary:hover:not(:disabled) {
      background-color: #0056b3;
    }

    button.secondary {
      background-color: #e0e0e0;
      color: #333;
    }

    button.secondary:hover:not(:disabled) {
      background-color: #d5d5d5;
    }

    button.danger {
      background-color: #dc3545;
      color: #fff;
    }

    button.danger:hover:not(:disabled) {
      background-color: #a71d2a;
    }

    /* Sizes */
    button.small {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

    button.medium {
      font-size: 0.85rem;
      padding: 0.45rem 0.9rem;
    }

    button.large {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  `;constructor(){super(),this.type="primary",this.size="medium",this.disabled=!1}render(){return n`
      <button
        class="${this.type} ${this.size}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `}}customElements.define("app-button",ft);class bt extends d{static properties={editing:{type:Boolean}};constructor(){super(),this.editing=!1}static styles=p`
    :host {
      display: block;
      width: 100%;
      font-family: Arial, sans-serif;
      font-size: 0.9rem;
      color: #333;
    }

    .material-symbols-outlined {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      font-family: 'Material Symbols Outlined';
      font-size: 28px;
      color: white; /* default color when not editing */
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .material-symbols-outlined.active {
      color: #ffae0b; /* gold-orange when editing */
    }

    .form-card {
      background: #fff;
      border-radius: 10px;
      border: 1.2px solid #adadadff;
      overflow: hidden;
    }

    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
      font-weight: bold;
      color: white;
      padding: 20px 24px;
      background-color: #43454C;
    }

    form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
      padding: 20px 24px;
      align-items: start;
    }

    form > div {
      display: flex;
      flex-direction: column;
    }

    label {
      display: block;
      font-weight: 500;
      margin-bottom: 6px;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 0.95rem;
      box-sizing: border-box;
      background-color: #f5f5f5;
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    input:not(:disabled),
    select:not(:disabled),
    textarea:not(:disabled) {
      background-color: white;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 3px rgba(0,123,255,0.3);
    }

    textarea {
      resize: vertical;
      height: 60px;
    }

    input:disabled, select:disabled, textarea:disabled {
      cursor: not-allowed;
    }

    .save-button {
      margin-top: 16px;
      grid-column: 1 / -1;
    }
  `;render(){return n`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=edit_square"
      />

      <div class="form-card">
        <div class="form-header">
          Personal Information
          <span
            class="material-symbols-outlined ${this.editing?"active":""}"
            @click="${this.toggleEdit}"
          >
            edit_square
          </span>
        </div>

        <form @submit="${this.handleSubmit}">
          <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="mi">MI</label>
            <input type="text" id="mi" name="mi" maxlength="1" .disabled="${!this.editing}" />
          </div>
          <div>
            <label for="birthDate">Birth Date</label>
            <input type="date" id="birthDate" name="birthDate" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="contact">Contact</label>
            <input type="tel" id="contact" name="contact" .disabled="${!this.editing}" required />
          </div>
          <div>
            <label for="gender">Gender</label>
            <select id="gender" name="gender" .disabled="${!this.editing}">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="homeAddress">Address</label>
            <textarea id="homeAddress" name="homeAddress" .disabled="${!this.editing}" required></textarea>
          </div>

          ${this.editing?n`<div class="save-button">
                <app-button type="primary" size="medium" @click="${this.handleSubmit}">
                  Save
                </app-button>
              </div>`:""}
        </form>
      </div>
    `}toggleEdit(){this.editing=!this.editing}handleSubmit(e){e.preventDefault();const t=new FormData(this.shadowRoot.querySelector("form")),i={};t.forEach((o,r)=>i[r]=o),console.log("Form submitted:",i),alert("Personal information submitted!"),this.editing=!1}}customElements.define("personal-info-form",bt);class vt extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-title {
      font-weight: bold;
      font-size: 0.95rem;
      margin: 0;
      text-align: center;
    }

    .section-description {
      font-size: 0.8rem;
      color: #555;
      text-align: center;
      margin-bottom: 8px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      font-size: 0.85rem;
    }

    input {
      padding: 6px 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-top: 4px;
      font-size: 0.85rem;
    }
  `;render(){return n`
      <div class="section">
        <div class="section-title">Change Email</div>
        <div class="section-description">
          Update your email address to receive account notifications at your new email.
        </div>

        <form @submit=${this.handleSubmit}>
          <label>
            New Email
            <input type="email" placeholder="Enter new email" required />
          </label>
          <app-button type="primary" size="medium">Update Email</app-button>
        </form>
      </div>
    `}handleSubmit(e){e.preventDefault(),alert("Email updated (simulated).")}}customElements.define("change-email-card",vt);class yt extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-title {
      font-weight: bold;
      font-size: 0.95rem;
      margin: 0;
      text-align: center;
    }

    .section-description {
      font-size: 0.8rem;
      color: #555;
      text-align: center;
      margin-bottom: 8px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      font-size: 0.85rem;
    }

    input {
      padding: 6px 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-top: 4px;
      font-size: 0.85rem;
    }

    .reminder {
      background-color: #f9f9f9;
      padding: 6px;
      border-left: 3px solid #007AFF;
      font-size: 0.75rem;
      color: #333;
      border-radius: 3px;
    }
  `;render(){return n`
      <div class="section">
        <div class="section-title">Change Password</div>
        <div class="section-description">
          Choose a strong password to protect your account and keep it secure.
        </div>

        <form @submit=${this.handleSubmit}>
          <label>
            Current Password
            <input type="password" placeholder="Current password" required />
          </label>
          <label>
            New Password
            <input type="password" placeholder="New password" required />
          </label>
          <app-button type="primary" size="medium">Change Password</app-button>
        </form>
      </div>
    `}handleSubmit(e){e.preventDefault(),alert("Password updated (simulated).")}}customElements.define("change-password-card",yt);class xt extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      font-weight: bold;
      font-size: 0.95rem;
      margin: 0;
      padding-bottom: 8px;
      color: #000000ff;
      text-align: center;
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: stretch; /* stretch vertically */
      border-radius: 1px;
      overflow: hidden;
      width: fit-content; /* shrink to fit content */
      margin: 0 auto; /* center the buttons */
    }

    .action {
      text-align: center;
      padding: 6px 12px; /* reduce horizontal space */
      font-size: 0.9rem;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
      transition: text-decoration 0.2s;
    }

    .action:hover {
      text-decoration: underline; /* underline on hover */
    }

    .action + .action {
      border-left: 1.2px solid #ddd; /* vertical divider */
    }

    .disable {
      color: #ff6606ff;
      font-weight: bold;
    }

    .delete {
      color: #c62828;
      font-weight: bold;
    }

    .notice {
      font-size: 0.8rem;
      color: #474545ff;
      text-align: center;
      margin-top: 12px;
    }
  `;render(){return n`
      <div class="section">
        <div class="section-title">Account Termination</div>

        <div class="actions">
          <div class="action disable" @click=${this.disableAccount}>
            Deactivate Account
          </div>
          <div class="action delete" @click=${this.deleteAccount}>
            Delete Account
          </div>
        </div>

        <div class="notice">
          You can temporarily deactivate your account or permanently delete it. Deleting is irreversible.
        </div>
      </div>
    `}disableAccount(){confirm("Are you sure you want to deactivate your account?")&&alert("Account deactivated (simulated).")}deleteAccount(){confirm("Are you sure you want to permanently delete your account? This cannot be undone.")&&alert("Account deleted (simulated).")}}customElements.define("termination-card",xt);class $t extends d{static styles=p`
    :host {
      display: block;
      width: 100%;
    }

    /* Material Symbols styling for icons (not bold) */
    .material-symbols-outlined {
      font-variation-settings:
        'FILL' 0,  /* ensures icon is not bold/filled */
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      font-family: 'Material Symbols Outlined';
      font-size: 24px;
      color: black;
      cursor: pointer;
    }

    .account-card {
      background: #fff;
      padding: 16px;
      border-radius: 8px;
      border: 1.2px solid #adadadff;
      font-family: Arial, sans-serif;
      font-size: 0.9rem;
    }

    .card-title {
      display: flex;
      align-items: center;
      justify-content: space-between; /* icon on the right */
      font-weight: bold; /* text stays bold */
      font-size: 1rem;
      color: #ffae0b;
      margin-left: -16px;
      margin-right: -16px;
      padding: 0 16px 12px;
      border-bottom: 1.2px solid #adadadff;
    }

    .section {
      margin-left: -16px;
      margin-right: -16px;
      padding: 16px;
      border-bottom: 1.2px solid #adadadff;
    }

    .section:last-of-type {
      border-bottom: none;
    }
  `;render(){return n`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=manage_accounts"
      />
      <div class="account-card">
        <div class="card-title">
          Manage Your Account
          <span class="material-symbols-outlined">manage_accounts</span>
        </div>

        <div class="section">
          <change-email-card></change-email-card>
        </div>

        <div class="section">
          <change-password-card></change-password-card>
        </div>

        <div class="section">
          <termination-card></termination-card>
        </div>
      </div>
    `}}customElements.define("manage-account-card",$t);class wt extends d{static styles=U;render(){return n`
      <page-header title="Settings / Profile"></page-header>
      <page-content mode="2">
        <settings-layout>
          <!-- top-left -->
          <profile-header slot="one"></profile-header>

          <!-- RIGHT SIDE = Manage Account wrapper card -->
          <manage-account-card slot="two"></manage-account-card>

          <!-- bottom-left = personal info -->
          <personal-info-form slot="three"></personal-info-form>
        </settings-layout>
      </page-content>
    `}}customElements.define("settings-page",wt);class _t extends d{static styles=p`
    :host {
      display: block;
      padding: 1.5rem;
      font-family: sans-serif;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f4f4f4;
    }

    tr:hover {
      background-color: #f9f9f9;
    }
  `;static properties={logs:{type:Array}};constructor(){super(),this.logs=[{time:"2025-09-04 09:00",user:"Admin",action:"Logged in"},{time:"2025-09-04 09:15",user:"Admin",action:"Viewed Reports"},{time:"2025-09-04 09:30",user:"User1",action:"Submitted Report"}]}render(){return n`
      <h1>Activity Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${this.logs.map(e=>n`
            <tr>
              <td>${e.time}</td>
              <td>${e.user}</td>
              <td>${e.action}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}}customElements.define("logs-page",_t);const At=p`
:host {
  --active-color: #ffae0b;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: var(--sidebar-width, 110px);
  transition: width 0.3s ease;
}

aside {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #43454C;
  overflow: hidden;
  width: 100%;
}

:host([collapsed]) {
  width: var(--sidebar-collapsed-width, 70px);
}

/* Logo */
.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.logo {
  max-width: 60px;
  height: auto;
  transition: max-width 0.3s ease;
}

:host([collapsed]) .logo {
  max-width: 36px;
}

/* Navigation */
nav {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

nav li {
  margin: 0.25rem 0;
  width: 100%;
}

nav a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  width: 100%;
  color: #fff;
  border-radius: 6px;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

/* Active link (icon + label) */
nav li.active a,
nav a.active {
  color: var(--active-color);
}

nav li.active a .material-symbols-outlined,
nav li.active a .label {
  color: var(--active-color);
}

nav a .label {
  font-size: 0.7rem;
  margin-top: 0.25rem;
  text-align: center;
}

:host([collapsed]) nav a .label {
  display: none;
}

/* Logout */
.logout {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem; /* moved up slightly from bottom */
  
}

.logout button {
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
  cursor: pointer;
  background: transparent;
   flex-direction: column; /* Add this */
}

:host([collapsed]) .logout .label {
  display: none;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  :host {
    width: var(--sidebar-collapsed-width, 70px);
  }

  nav a {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  nav a .label {
    display: none;
  }

  .logo-section .logo {
    max-width: 36px;
  }
}
`;class St extends d{static properties={open:{type:Boolean,reflect:!0},title:{type:String}};static styles=p`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 1000;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.35);
      font-family: Arial, sans-serif;
    }

    :host([open]) {
      display: flex;
    }

    .modal {
      background: #fff;
      border-radius: 8px;
      max-width: 360px;
      width: 85%;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-size: 0.85rem;
      position: relative;
    }

    .modal-header {
      padding: 0.6rem 1rem;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
      font-size: 0.9rem;
    }

    .modal-body {
      padding: 0.8rem 1rem;
      color: #333;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 0.6rem 1rem;
      border-top: 1px solid #e0e0e0;
    }
  `;constructor(){super(),this.open=!1,this.title=""}_handleOutsideClick=e=>{};close(){this.open=!1,this.dispatchEvent(new CustomEvent("modal-closed"))}render(){return n`
      <div class="modal">
        ${this.title?n`<div class="modal-header">${this.title}</div>`:""}
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("app-modal",St);class Et extends d{static properties={first:{type:String},second:{type:String},firstColor:{type:String},secondColor:{type:String}};static styles=p`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 1rem;
    }

    .first {
      display: inline;
    }

    .second {
      display: inline;
    }
  `;constructor(){super(),this.first="",this.second="",this.firstColor="#242526",this.secondColor="#ffae0b"}render(){return n`
      <span class="first" style="color:${this.firstColor}">${this.first}</span>
      <span class="second" style="color:${this.secondColor}">${this.second}</span>
    `}}customElements.define("dual-title",Et);class kt extends d{static styles=At;static properties={collapsed:{type:Boolean,reflect:!0},activeRoute:{type:String},logoutModalOpen:{type:Boolean}};constructor(){super(),this.collapsed=!1,this.activeRoute=window.location.hash||"#/dashboard",this.logoutModalOpen=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",()=>{this.activeRoute=window.location.hash,this.requestUpdate()})}_openLogoutModal(){this.logoutModalOpen=!0}_confirmLogout(){this.logoutModalOpen=!1,window.location.hash="/login"}_closeModal(){this.logoutModalOpen=!1}_goToDashboard(){window.location.hash="#/dashboard",this.activeRoute="#/dashboard"}render(){return n`
      <aside>
        <div class="logo-section" @click="${this._goToDashboard}" style="cursor:pointer;">
          <img src="/src/assets/roadfix-adminlogo.png" alt="RoadFix Logo" class="logo" />
        </div>

        <nav>
          <ul>
            <li class="${this.activeRoute==="#/dashboard"?"active":""}">
              <a href="#/dashboard" class="${this.activeRoute==="#/dashboard"?"active":""}">
                <span class="material-symbols-outlined">dashboard</span>
                <span class="label">Overview</span>
              </a>
            </li>
            <li class="${this.activeRoute==="#/user"?"active":""}">
              <a href="#/user" class="${this.activeRoute==="#/user"?"active":""}">
                <span class="material-symbols-outlined">groups</span>
                <span class="label">Members</span>
              </a>
            </li>
            <li class="${this.activeRoute==="#/reports"?"active":""}">
              <a href="#/reports" class="${this.activeRoute==="#/reports"?"active":""}">
                <span class="material-symbols-outlined">report</span>
                <span class="label">Reports</span>
              </a>
            </li>
            <li class="${this.activeRoute==="#/logs"?"active":""}">
              <a href="#/logs" class="${this.activeRoute==="#/logs"?"active":""}">
                <span class="material-symbols-outlined">history</span>
                <span class="label">Logs</span>
              </a>
            </li>
            <li class="${this.activeRoute==="#/settings"?"active":""}">
              <a href="#/settings" class="${this.activeRoute==="#/settings"?"active":""}">
                <span class="material-symbols-outlined">settings_account_box</span>
                <span class="label">My Account</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="logout">
          <button @click="${this._openLogoutModal}">
            <span class="material-symbols-outlined">logout</span>
            <span class="label">Logout</span>
          </button>
        </div>
      </aside>

      <!-- Logout Confirmation Modal -->
      <app-modal .open="${this.logoutModalOpen}">
        <dual-title first="Confirm " second="Logout"></dual-title>
        <p style="margin-top:0.5rem;">Are you sure you want to log out?</p>
        <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem;">
          <app-button type="secondary" size="medium" @click="${this._closeModal}">Cancel</app-button>
          <app-button type="danger" size="medium" @click="${this._confirmLogout}">Logout</app-button>
        </div>
      </app-modal>
    `}}customElements.define("app-sidebar",kt);const Ct=p`
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.content {
  flex: 1;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  margin-left: var(--sidebar-width, 110px);
}

.layout.collapsed .content {
  margin-left: 70px;
}

/* Toggle button centered between sidebar and content */
.sidebar-toggle {
  position: absolute;
  top: 50%;
  left: var(--sidebar-width, 110px);
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0d0d0dff;
  background: #ffae0b;
  cursor: pointer;
  transition: left 0.3s ease;
}

.layout.collapsed .sidebar-toggle {
  left: 70px;
}

@media (max-width: 768px) {
  .content {
    margin-left: 70px;
  }
  .sidebar-toggle {
    left: 70px;
  }
}
`;class zt extends d{static styles=Ct;static properties={collapsed:{type:Boolean}};constructor(){super();const e=localStorage.getItem("sidebarCollapsed");this.collapsed=e==="true"}render(){const e=this.collapsed?70:110;return n`
      <div class="layout ${this.collapsed?"collapsed":"expanded"}"
           style="--sidebar-width: ${e}px">

        <app-sidebar .collapsed="${this.collapsed}"></app-sidebar>

        <button class="sidebar-toggle" @click="${this._handleToggle}">
          ${this.collapsed?"➡":"⬅"}
        </button>

        <div class="content">
          <slot></slot> <!-- page-header + page-content -->
        </div>
      </div>
    `}_handleToggle(){this.collapsed=!this.collapsed,localStorage.setItem("sidebarCollapsed",this.collapsed)}}customElements.define("dashboard-layout",zt);class Lt extends pe{static styles=he`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  `;static properties={route:{type:String}};constructor(){super(),this.route=this._getCurrentRoute(),window.addEventListener("hashchange",()=>{this.route=this._getCurrentRoute()})}_getCurrentRoute(){return window.location.hash.replace("#","")||"/login"}navigate(e){window.location.hash=e,this.route=e}connectedCallback(){super.connectedCallback(),this.addEventListener("navigate-to",e=>{this.navigate(e.detail.path)})}render(){switch(this.route){case"/login":return v`<auth-layout><login-page></login-page></auth-layout>`;case"/signup":return v`<auth-layout><signup-page></signup-page></auth-layout>`;case"/dashboard":return v`<dashboard-layout @navigate=${e=>this.navigate(e.detail)}><dashboard-page></dashboard-page></dashboard-layout>`;case"/user":return v`<dashboard-layout @navigate=${e=>this.navigate(e.detail)}><users-page></users-page></dashboard-layout>`;case"/reports":return v`<dashboard-layout @navigate=${e=>this.navigate(e.detail)}><reports-page></reports-page></dashboard-layout>`;case"/logs":return v`<dashboard-layout @navigate=${e=>this.navigate(e.detail)}><logs-page></logs-page></dashboard-layout>`;case"/settings":return v`<dashboard-layout @navigate=${e=>this.navigate(e.detail)}><settings-page></settings-page></dashboard-layout>`;default:return v`<h2>Page not found. <a href="#/login">Go to Login</a></h2>`}}}customElements.define("my-app",Lt);
