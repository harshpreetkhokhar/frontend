var B=Object.defineProperty;var A=(i,e,t)=>e in i?B(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var y=(i,e,t)=>(A(i,typeof e!="symbol"?e+"":e,t),t);import{x as E,F as u,y as l,o as F,b as x,g as j,l as m,s as T,z as w,A as N}from"./index-iGRhHhaY.js";import{a as b,b as v}from"./nav-timing-PjPsh6mT.js";import{A as R,H as M}from"./aggregate-base-rpFAq55Q.js";import{f as k,a as P}from"./first-paint-m1WSnizM.js";import{t as C}from"./time-to-first-byte-YUHvyvFf.js";function q(i){const e=[],t=E();try{Object.keys(t.initializedAgents[i].features).forEach(r=>{switch(r){case u.ajax:e.push("xhr");break;case u.jserrors:e.push("err");break;case u.pageAction:e.push("ins");break;case u.sessionTrace:e.push("stn");break;case u.spa:e.push("spa");break}})}catch{}return e}class I extends R{constructor(e,t){super(e,t,l),this.timeToFirstByte=0,this.firstByteToWindowLoad=0,this.firstByteToDomContent=0,F?C.subscribe(r=>{let{value:a,entries:f}=r;const n=f[0];this.timeToFirstByte=Math.max(a,this.timeToFirstByte),this.firstByteToWindowLoad=Math.max(Math.round(n.loadEventEnd-this.timeToFirstByte),this.firstByteToWindowLoad),this.firstByteToDomContent=Math.max(Math.round(n.domContentLoadedEventEnd-this.timeToFirstByte),this.firstByteToDomContent),this.sendRum()}):this.sendRum()}sendRum(){var n,g,h;const e=x(this.agentIdentifier),t=j(this.agentIdentifier),r=new M(this);if(!e.beacon)return;e.queueTime&&this.aggregator.store("measures","qt",{value:e.queueTime}),e.applicationTime&&this.aggregator.store("measures","ap",{value:e.applicationTime}),this.aggregator.store("measures","be",{value:this.timeToFirstByte}),this.aggregator.store("measures","fe",{value:this.firstByteToWindowLoad}),this.aggregator.store("measures","dc",{value:this.firstByteToDomContent});const a={tt:e.ttGuid,us:e.user,ac:e.account,pr:e.product,af:q(this.agentIdentifier).join(","),...Object.entries(this.aggregator.get("measures")||{}).reduce((s,o)=>{var p;let[c,d]=o;return s[c]=(p=d.params)==null?void 0:p.value,s},{}),xx:e.extra,ua:e.userAttributes,at:e.atts};t.session&&(a.fsh=Number(t.session.isNew));let f;if(typeof e.jsAttributes=="object"&&Object.keys(e.jsAttributes).length>0&&(f={ja:e.jsAttributes}),m.performance){if(typeof PerformanceNavigationTiming<"u"){const s=(h=(g=(n=m)==null?void 0:n.performance)==null?void 0:g.getEntriesByType("navigation"))==null?void 0:h[0],o={timing:b(t.offset,s,{}),navigation:v(s,{})};a.perf=T(o)}else if(typeof PerformanceTiming<"u"){const s={timing:b(t.offset,m.performance.timing,{},!0),navigation:v(m.performance.navigation,{})};a.perf=T(s)}}a.fp=k.current.value,a.fcp=P.current.value,r.send({endpoint:"rum",payload:{qs:a,body:f},opts:{needResponse:!0,sendEmptyBody:!0},cbFinished:s=>{let{status:o,responseText:c}=s;if(o>=400){this.ee.abort();return}try{w(JSON.parse(c),this.agentIdentifier),this.drain()}catch{this.ee.abort(),N("RUM call failed. Agent shutting down.")}}})}}y(I,"featureName",l);export{I as Aggregate};
