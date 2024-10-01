var L=Object.defineProperty;var M=(r,e,t)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var w=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t);import{i as O,j as E,d as k,k as $,s as l,g as H,m as f,n as q,l as z,h as C,F as y,b as D}from"./index-iGRhHhaY.js";import{c as T,A as G}from"./aggregate-base-rpFAq55Q.js";import{H as W}from"./harvest-scheduler-2-eCNpfP.js";import"./session-entity-L9wlHB7X.js";import"./invoke-yZTpZaXg.js";const V=/([a-z0-9]+)$/i;function K(r){if(!r)return;const e=r.match(V);if(e)return e[1]}var X=/^\n+|\n+$/g,j=65530;function J(r){return Q(r).replace(X,"")}function Q(r){var e;if(r.length>100){var t=r.length-100;e=r.slice(0,50).join(`
`),e+=`
< ...truncated `+t+` lines... >
`,e+=r.slice(-50).join(`
`)}else e=r.join(`
`);return e}function Y(r){return r.length>j?r.substr(0,j):r}function F(r){if(typeof r!="string")return"";const e=T(r),t=T(O);return e===t?"<inline>":e}var Z=/function (.+?)\s*\(/,x=/^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,ee=/^\s*(?:(\S*|global code)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i,re=/^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,te=/^\s*at Function code \(Function code:\d+:\d+\)\s*/i;function ae(r){var e=null;try{if(e=se(r),e)return e}catch{}try{if(e=ie(r),e)return e}catch{}try{if(e=ce(r),e)return e}catch{}return{mode:"failed",stackString:"",frames:[]}}function se(r){if(!r.stack)return null;var e=r.stack.split(`
`).reduce(ne,{frames:[],stackLines:[],wrapperSeen:!1});return e.frames.length?{mode:"stack",name:r.name||I(r),message:r.message,stackString:J(e.stackLines),frames:e.frames}:null}function ne(r,e){let t=oe(e);if(!t)return r.stackLines.push(e),r;if(ue(t.func)&&(r.wrapperSeen=!0),!r.wrapperSeen){let a=F(t.url);a!==t.url&&(e=e.replace(t.url,a),t.url=a),r.stackLines.push(e),r.frames.push(t)}return r}function oe(r){var e=r.match(ee);if(e||(e=r.match(x)),e)return{url:e[2],func:e[1]!=="Anonymous function"&&e[1]!=="global code"&&e[1]||null,line:+e[3],column:e[4]?+e[4]:null};if(r.match(re)||r.match(te)||r==="anonymous")return{func:"evaluated code"}}function ie(r){if(!("line"in r))return null;var e=r.name||I(r);if(!r.sourceURL)return{mode:"sourceline",name:e,message:r.message,stackString:e+": "+r.message+`
    in evaluated code`,frames:[{func:"evaluated code"}]};var t=F(r.sourceURL),a=e+": "+r.message+`
    at `+t;return r.line&&(a+=":"+r.line,r.column&&(a+=":"+r.column)),{mode:"sourceline",name:e,message:r.message,stackString:a,frames:[{url:t,line:r.line,column:r.column}]}}function ce(r){var e=r.name||I(r);return e?{mode:"nameonly",name:e,message:r.message,stackString:e+": "+r.message,frames:[]}:null}function I(r){var e=Z.exec(String(r.constructor));return e&&e.length>1?e[1]:"unknown"}function ue(r){return r&&r.indexOf("nrWrapper")>=0}function d(r){var e=0,t;if(!r||!r.length)return e;for(var a=0;a<r.length;a++)t=r.charCodeAt(a),e=(e<<5)-e+t,e=e|0;return e}class he extends G{constructor(e,t){var a;super(e,t,E),a=this,this.stackReported={},this.observedAt={},this.pageviewReported={},this.errorCache={},this.currentBody=void 0,this.errorOnPage=!1,this.ee.on("interactionSaved",s=>this.onInteractionSaved(s)),this.ee.on("interactionDiscarded",s=>this.onInteractionDiscarded(s)),k("err",function(){return a.storeError(...arguments)},this.featureName,this.ee),k("ierr",function(){return a.storeError(...arguments)},this.featureName,this.ee);const o=$(this.agentIdentifier,"jserrors.harvestTimeSeconds")||10,n=new W("jserrors",{onFinished:function(){return a.onHarvestFinished(...arguments)}},this);n.harvest.on("jserrors",function(){return a.onHarvestStarted(...arguments)}),this.ee.on("drain-".concat(this.featureName),()=>{this.blocked||n.startTimer(o)}),k("block-err",()=>{this.blocked=!0,n.stopTimer(!0)},this.featureName,this.ee),this.drain()}onHarvestStarted(e){var t=this.aggregator.take(["err","ierr","xhr"]);e.retry&&(this.currentBody=t);var a={body:t,qs:{}},o=l(H(this.agentIdentifier).releaseIds);return o!=="{}"&&(a.qs.ri=o),t&&t.err&&t.err.length&&!this.errorOnPage&&(a.qs.pve="1",this.errorOnPage=!0),a}onHarvestFinished(e){e.retry&&this.currentBody&&(f(this.currentBody,(t,a)=>{for(var o=0;o<a.length;o++){var n=a[o],s=this.getBucketName(t,n.params,n.custom);this.aggregator.merge(t,s,n.metrics,n.params,n.custom)}}),this.currentBody=null)}nameHash(e){return d("".concat(e.exceptionClass,"_").concat(e.message,"_").concat(e.stack_trace||e.browser_stack_hash))}getBucketName(e,t,a){return e==="xhr"?d(l(t))+":"+d(l(a)):this.nameHash(t)+":"+d(l(a))}buildCanonicalStackString(e){for(var t="",a=0;a<e.frames.length;a++){var o=e.frames[a],n=K(o.func);t&&(t+=`
`),n&&(t+=n+"@"),typeof o.url=="string"&&(t+=o.url),o.line&&(t+=":"+o.line)}return t}storeError(e,t,a,o){var N,A,R;t=t||q();const n=H(this.agentIdentifier);let s;if(!a&&n.onerror&&(s=n.onerror(e),s&&!(typeof s.group=="string"&&s.group.length)))return;var u=ae(e),m=this.buildCanonicalStackString(u);const i={stackHash:d(m),exceptionClass:u.name,request_uri:(N=z)==null?void 0:N.location.pathname};u.message&&(i.message=""+u.message),s!=null&&s.group&&(i.errorGroup=s.group);var c=d("".concat(u.name,"_").concat(u.message,"_").concat(u.stackString));this.stackReported[c]?i.browser_stack_hash=d(u.stackString):(this.stackReported[c]=!0,i.stack_trace=Y(u.stackString),this.observedAt[c]=n.offset+t),i.releaseIds=l(n.releaseIds),this.pageviewReported[c]||(i.pageview=1,this.pageviewReported[c]=!0),(R=(A=n==null?void 0:n.session)==null?void 0:A.state)!=null&&R.sessionReplayMode&&(i.hasReplay=!0),i.firstOccurrenceTimestamp=this.observedAt[c];var g=a?"ierr":"err",h={time:t};const v=[g,c,i,h];if(C("errorAgg",v,void 0,y.sessionTrace,this.ee),C("errorAgg",v,void 0,y.spa,this.ee),C("errorAgg",v,void 0,y.sessionReplay,this.ee),this.blocked)return;var _=D(this.agentIdentifier).jsAttributes;if(i._interactionId!=null)this.errorCache[i._interactionId]=this.errorCache[i._interactionId]||[],this.errorCache[i._interactionId].push([g,c,i,h,_,o]);else{var S={};f(_,b),o&&f(o,b);var U=d(l(S)),B=c+":"+U;this.aggregator.store(g,B,i,h,S)}function b(P,p){S[P]=p&&typeof p=="object"?l(p):p}}onInteractionSaved(e){!this.errorCache[e.id]||this.blocked||(this.errorCache[e.id].forEach(t=>{var a={},o=t[4],n=t[5];f(o,c),f(e.root.attrs.custom,c),f(n,c);var s=t[2];s.browserInteractionId=e.root.attrs.id,delete s._interactionId,s._interactionNodeId&&(s.parentNodeId=s._interactionNodeId.toString(),delete s._interactionNodeId);var u=t[1]+e.root.attrs.id,m=d(l(a)),i=u+":"+m;this.aggregator.store(t[0],i,s,t[3],a);function c(g,h){a[g]=h&&typeof h=="object"?l(h):h}}),delete this.errorCache[e.id])}onInteractionDiscarded(e){!this.errorCache||!this.errorCache[e.id]||this.blocked||(this.errorCache[e.id].forEach(t=>{var a={},o=t[4],n=t[5];f(o,c),f(e.root.attrs.custom,c),f(n,c);var s=t[2];delete s._interactionId,delete s._interactionNodeId;var u=t[1],m=d(l(a)),i=u+":"+m;this.aggregator.store(t[0],i,t[2],t[3],a);function c(g,h){a[g]=h&&typeof h=="object"?l(h):h}}),delete this.errorCache[e.id])}}w(he,"featureName",E);export{he as Aggregate};
