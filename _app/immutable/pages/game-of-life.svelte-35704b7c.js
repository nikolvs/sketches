var Ee=Object.defineProperty;var z=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var Y=(s,e,t)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,A=(s,e)=>{for(var t in e||(e={}))Ae.call(e,t)&&Y(s,t,e[t]);if(z)for(var t of z(e))Re.call(e,t)&&Y(s,t,e[t]);return s};import{S as F,i as V,s as M,e as Ce,c as Oe,a as Se,d as W,b as N,g as Te,K as Be,n as T,L as Ne,w as xe,x as se,y as ne,z as ie,r as re,p as oe,C as ce}from"../chunks/index-fd235262.js";import{_ as Le}from"../chunks/preload-helper-7054b5b2.js";function Pe(s){let e,t,n;return{c(){e=Ce("div"),this.h()},l(i){e=Oe(i,"DIV",{style:!0,class:!0}),Se(e).forEach(W),this.h()},h(){N(e,"style",s[0]),N(e,"class","m-0")},m(i,r){Te(i,e,r),t||(n=Be(s[1].call(null,e)),t=!0)},p(i,[r]){r&1&&N(e,"style",i[0])},i:T,o:T,d(i){i&&W(e),t=!1,n()}}}function De(s,e){return e.forEach(([t,n])=>s[t]=n),s}function qe(s,e,t){let{target:n=void 0}=e,{sketch:i=void 0}=e,{parentDivStyle:r="display: block;"}=e,{debug:o=!1}=e,a;const u=Ne(),m={ref(){u("ref",n)},instance(){u("instance",a)}};function g(h){return t(2,n=h),{destroy(){t(2,n=void 0)}}}return xe(async()=>{const h=await Le(()=>import("../chunks/p5.min-21ab2ccd.js").then(function(d){return d.p}),[]),{default:v}=h,K=Object.entries(h).filter(([d,_e])=>_e instanceof Function&&d[0]!=="_"&&d!=="default");o&&console.log("available p5 native classes",K),a=new v(d=>(d=De(d,K),o&&console.log("p5 instance",d),window._p5Instance=d,i(d)),n),m.ref(),m.instance()}),s.$$set=h=>{"target"in h&&t(2,n=h.target),"sketch"in h&&t(3,i=h.sketch),"parentDivStyle"in h&&t(0,r=h.parentDivStyle),"debug"in h&&t(4,o=h.debug)},[r,g,n,i,o]}class Ie extends F{constructor(e){super(),V(this,e,qe,Pe,M,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Fe(s){let e,t;return e=new Ie({props:{sketch:s[0]}}),{c(){se(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,i){ie(e,n,i),t=!0},p:T,i(n){t||(re(e.$$.fragment,n),t=!0)},o(n){oe(e.$$.fragment,n),t=!1},d(n){ce(e,n)}}}function Ve(s,e,t){let{config:n}=e,{makeSketch:i}=e;const r=o=>{const a=i({p5:o,config:n});o.setup=()=>{a.$setup()},o.draw=()=>{a.$draw()}};return s.$$set=o=>{"config"in o&&t(1,n=o.config),"makeSketch"in o&&t(2,i=o.makeSketch)},[r,n,i]}class Me extends F{constructor(e){super(),V(this,e,Ve,Fe,M,{config:1,makeSketch:2})}}const y=Object.create(null);y.open="0";y.close="1";y.ping="2";y.pong="3";y.message="4";y.upgrade="5";y.noop="6";const O=Object.create(null);Object.keys(y).forEach(s=>{O[y[s]]=s});const Ue={type:"error",data:"parser error"},He=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ke=typeof ArrayBuffer=="function",ze=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,ae=({type:s,data:e},t,n)=>He&&e instanceof Blob?t?n(e):$(e,n):Ke&&(e instanceof ArrayBuffer||ze(e))?t?n(e):$(new Blob([e]),n):n(y[s]+(e||"")),$=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+n)},t.readAsDataURL(s)},X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",E=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let s=0;s<X.length;s++)E[X.charCodeAt(s)]=s;const Ye=s=>{let e=s.length*.75,t=s.length,n,i=0,r,o,a,u;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),g=new Uint8Array(m);for(n=0;n<t;n+=4)r=E[s.charCodeAt(n)],o=E[s.charCodeAt(n+1)],a=E[s.charCodeAt(n+2)],u=E[s.charCodeAt(n+3)],g[i++]=r<<2|o>>4,g[i++]=(o&15)<<4|a>>2,g[i++]=(a&3)<<6|u&63;return m},We=typeof ArrayBuffer=="function",he=(s,e)=>{if(typeof s!="string")return{type:"message",data:le(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:$e(s.substring(1),e)}:O[t]?s.length>1?{type:O[t],data:s.substring(1)}:{type:O[t]}:Ue},$e=(s,e)=>{if(We){const t=Ye(s);return le(t,e)}else return{base64:!0,data:s}},le=(s,e)=>{switch(e){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},ue=String.fromCharCode(30),Xe=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,o)=>{ae(r,!1,a=>{n[o]=a,++i===t&&e(n.join(ue))})})},Je=(s,e)=>{const t=s.split(ue),n=[];for(let i=0;i<t.length;i++){const r=he(t[i],e);if(n.push(r),r.type==="error")break}return n},fe=4;function l(s){if(s)return Ge(s)}function Ge(s){for(var e in l.prototype)s[e]=l.prototype[e];return s}l.prototype.on=l.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};l.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};l.prototype.off=l.prototype.removeListener=l.prototype.removeAllListeners=l.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};l.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};l.prototype.emitReserved=l.prototype.emit;l.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};l.prototype.hasListeners=function(s){return!!this.listeners(s).length};const b=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function de(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const Qe=setTimeout,je=clearTimeout;function B(s,e){e.useNativeTimers?(s.setTimeoutFn=Qe.bind(b),s.clearTimeoutFn=je.bind(b)):(s.setTimeoutFn=setTimeout.bind(b),s.clearTimeoutFn=clearTimeout.bind(b))}const Ze=1.33;function et(s){return typeof s=="string"?tt(s):Math.ceil((s.byteLength||s.size)*Ze)}function tt(s){let e=0,t=0;for(let n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}class st extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class pe extends l{constructor(e){super(),this.writable=!1,B(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new st(e,t,n)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=he(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const ye="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),L=64,nt={};let J=0,R=0,G;function Q(s){let e="";do e=ye[s%L]+e,s=Math.floor(s/L);while(s>0);return e}function me(){const s=Q(+new Date);return s!==G?(J=0,G=s):s+"."+Q(J++)}for(;R<L;R++)nt[ye[R]]=R;function ge(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function it(s){let e={},t=s.split("&");for(let n=0,i=t.length;n<i;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}let we=!1;try{we=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{}const rt=we;function be(s){const e=s.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||rt))return new XMLHttpRequest}catch{}if(!e)try{return new b[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function ot(){}const ct=function(){return new be({xdomain:!1}).responseType!=null}();class at extends pe{constructor(e){if(super(e),this.polling=!1,typeof location!="undefined"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==n}const t=e&&e.forceBase64;this.supportsBinary=ct&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Je(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Xe(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let n="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=me()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port);const i=ge(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new p(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class p extends l{constructor(e,t){super(),B(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=de(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new be(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&t.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document!="undefined"&&(this.index=p.requestsCount++,p.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=ot,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete p.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}p.requestsCount=0;p.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",j);else if(typeof addEventListener=="function"){const s="onpagehide"in b?"pagehide":"unload";addEventListener(s,j,!1)}}function j(){for(let s in p.requests)p.requests.hasOwnProperty(s)&&p.requests[s].abort()}const ht=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),C=b.WebSocket||b.MozWebSocket,Z=!0,lt="arraybuffer",ee=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ut extends pe{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=ee?{}:de(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Z&&!ee?t?new C(e,t):new C(e):new C(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||lt,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;ae(n,this.supportsBinary,r=>{const o={};try{Z&&this.ws.send(r)}catch{}i&&ht(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=me()),this.supportsBinary||(e.b64=1);const i=ge(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}check(){return!!C}}const ft={websocket:ut,polling:at},dt=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,pt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function P(s){const e=s,t=s.indexOf("["),n=s.indexOf("]");t!=-1&&n!=-1&&(s=s.substring(0,t)+s.substring(t,n).replace(/:/g,";")+s.substring(n,s.length));let i=dt.exec(s||""),r={},o=14;for(;o--;)r[pt[o]]=i[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=yt(r,r.path),r.queryKey=mt(r,r.query),r}function yt(s,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&n.splice(0,1),e.substr(e.length-1,1)=="/"&&n.splice(n.length-1,1),n}function mt(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}class w extends l{constructor(e,t={}){super(),e&&typeof e=="object"&&(t=e,e=null),e?(e=P(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=P(t.host).host),B(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=it(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=fe,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new ft[e](n)}open(){let e;if(this.opts.rememberUpgrade&&w.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;w.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;w.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(g(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const v=new Error("probe error");v.transport=t.name,this.emitReserved("upgradeError",v)}}))};function r(){n||(n=!0,g(),t.close(),t=null)}const o=h=>{const v=new Error("probe error: "+h);v.transport=t.name,r(),this.emitReserved("upgradeError",v)};function a(){o("transport closed")}function u(){o("socket closed")}function m(h){t&&h.name!==t.name&&r()}const g=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",u),this.off("upgrading",m)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",u),this.once("upgrading",m),t.open()}onOpen(){if(this.readyState="open",w.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=et(i)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){w.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}w.protocol=fe;function gt(s,e="",t){let n=s;t=t||typeof location!="undefined"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t!="undefined"?s=t.protocol+"//"+s:s="https://"+s),n=P(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const wt=typeof ArrayBuffer=="function",bt=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,ve=Object.prototype.toString,vt=typeof Blob=="function"||typeof Blob!="undefined"&&ve.call(Blob)==="[object BlobConstructor]",kt=typeof File=="function"||typeof File!="undefined"&&ve.call(File)==="[object FileConstructor]";function U(s){return wt&&(s instanceof ArrayBuffer||bt(s))||vt&&s instanceof Blob||kt&&s instanceof File}function S(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(S(s[t]))return!0;return!1}if(U(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return S(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&S(s[t]))return!0;return!1}function _t(s){const e=[],t=s.data,n=s;return n.data=D(t,e),n.attachments=e.length,{packet:n,buffers:e}}function D(s,e){if(!s)return s;if(U(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=D(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=D(s[n],e));return t}return s}function Et(s,e){return s.data=q(s.data,e),s.attachments=void 0,s}function q(s,e){if(!s)return s;if(s&&s._placeholder)return e[s.num];if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=q(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=q(s[t],e));return s}const At=5;var c;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class Rt{constructor(e){this.replacer=e}encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&S(e)?(e.type=e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=_t(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}class H extends l{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string")t=this.decodeString(e),t.type===c.BINARY_EVENT||t.type===c.BINARY_ACK?(this.reconstructor=new Ct(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t);else if(U(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(c[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===c.BINARY_EVENT||n.type===c.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(H.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class Ct{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Et(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var Ot=Object.freeze(Object.defineProperty({__proto__:null,protocol:At,get PacketType(){return c},Encoder:Rt,Decoder:H},Symbol.toStringTag,{value:"Module"}));function f(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const St=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ke extends l{constructor(e,t,n){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[f(e,"open",this.onopen.bind(this)),f(e,"packet",this.onpacket.bind(this)),f(e,"error",this.onerror.bind(this)),f(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(St.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');t.unshift(e);const n={type:c.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){const n=this.flags.timeout;if(n===void 0){this.acks[e]=t;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let r=0;r<this.sendBuffer.length;r++)this.sendBuffer[r].id===e&&this.sendBuffer.splice(r,1);t.call(this,new Error("operation has timed out"))},n);this.acks[e]=(...r)=>{this.io.clearTimeoutFn(i),t.apply(this,[null,...r])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:c.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function k(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}k.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};k.prototype.reset=function(){this.attempts=0};k.prototype.setMin=function(s){this.ms=s};k.prototype.setMax=function(s){this.max=s};k.prototype.setJitter=function(s){this.jitter=s};class I extends l{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,B(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new k({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Ot;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new w(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=f(t,"open",function(){n.onopen(),e&&e()}),r=f(t,"error",o=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",o),e?e(o):n.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const a=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(f(e,"ping",this.onping.bind(this)),f(e,"data",this.ondata.bind(this)),f(e,"error",this.onerror.bind(this)),f(e,"close",this.onclose.bind(this)),f(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n||(n=new ke(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _={};function x(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=gt(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,o=_[i]&&r in _[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return a?u=new I(n,e):(_[i]||(_[i]=new I(n,e)),u=_[i]),t.query&&!e.query&&(e.query=t.queryKey),u.socket(t.path,e)}Object.assign(x,{Manager:I,Socket:ke,io:x,connect:x});const Tt=s=>({}),Bt=({p5:s,config:e})=>({$canvas:null,$setupListeners:[],$drawListeners:[],$setup(){const{canvasWidth:t,canvasHeight:n}=e;this.$canvas=s.createCanvas(t,n),this.setup(e),this.$setupListeners.forEach(i=>i(e))},$draw(){this.draw(e),this.$drawListeners.forEach(t=>t(e))},$onSetup(t){this.$setupListeners.push(t)},$onDraw(t){this.$drawListeners.push(t)}});var Nt=s=>({p5:e,config:t})=>{const n=A(A({},s(e)),Bt({p5:e,config:t}));return Object.assign(n,A({},Tt()))};const te=(s,e)=>Array.from({length:s},()=>Array.from({length:e})),xt=Nt(s=>({grid:null,cols:0,rows:0,resolution:40,colors:{alive:[240,70],dead:[217,67,77,10]},chaos:{alive:10,dead:40},setup(){s.background(240),this.cols=s.ceil(s.width/this.resolution),this.rows=s.ceil(s.height/this.resolution),this.grid=te(this.cols,this.rows);for(let e=0;e<this.cols;e++)for(let t=0;t<this.rows;t++)this.grid[e][t]=s.floor(s.random(2))},draw(){const e=te(this.cols,this.rows);s.noStroke();for(let t=0;t<this.cols;t++)for(let n=0;n<this.rows;n++){const i=this.grid[t][n],r=this.countNeighbors(t,n);i?this.drawAliveCell(t,n):this.drawDeadCell(t,n),!i&&r===3?e[t][n]=1:i&&(r<2||r>3)?e[t][n]=0:e[t][n]=i,this.colors.dead[0]=s.floor(s.random(135,255))}this.grid=e},drawAliveCell(e,t){s.fill(this.colors.alive),s.square(e*this.resolution-s.floor(s.random(this.chaos.alive)),t*this.resolution-s.floor(s.random(this.chaos.alive)),this.resolution)},drawDeadCell(e,t){const n=e*this.resolution+this.resolution/2,i=t*this.resolution+this.resolution/2;s.fill(this.colors.dead),s.circle(n+s.floor(s.random(this.chaos.dead))*(s.random([0,1])?-1:1),i+s.floor(s.random(this.chaos.dead))*(s.random([0,1])?-1:1),this.resolution)},countNeighbors(e,t){let n=0;for(let i=-1;i<2;i++)for(let r=-1;r<2;r++){const o=(e+i+this.cols)%this.cols,a=(t+r+this.rows)%this.rows;n+=this.grid[o][a]}return n-=this.grid[e][t],n}}));function Lt(s){let e,t;return e=new Me({props:{config:s[0],makeSketch:xt}}),{c(){se(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,i){ie(e,n,i),t=!0},p:T,i(n){t||(re(e.$$.fragment,n),t=!0)},o(n){oe(e.$$.fragment,n),t=!1},d(n){ce(e,n)}}}function Pt(s){return[{canvasWidth:1080,canvasHeight:1920}]}class Vt extends F{constructor(e){super(),V(this,e,Pt,Lt,M,{})}}export{Vt as default};