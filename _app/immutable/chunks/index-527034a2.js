function j(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function S(){return Object.create(null)}function p(t){t.forEach(P)}function T(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function ot(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function ut(t,n,e,i,r,s){if(r){const o=D(n,e,i,s);t.p(o,r)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t){return t&&T(t.destroy)?t.destroy:j}let $=!1;function L(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:J(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],o=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[c],a)}}function W(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){$&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function dt(){return A(" ")}function _t(){return A("")}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){V(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function mt(t,n,e){return X(t,n,e,R)}function Y(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function pt(t){return Y(t," ")}function yt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function gt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function xt(t){E().$$.on_mount.push(t)}function bt(t){E().$$.after_update.push(t)}function $t(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=Z(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function Et(t,n){return E().$$.context.set(t,n),n}const _=[],M=[],x=[],B=[],q=Promise.resolve();let w=!1;function z(){w||(w=!0,q.then(F))}function vt(){return z(),q}function k(t){x.push(t)}const v=new Set;let g=0;function F(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),tt(n.$$)}for(h(null),_.length=0,g=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(_.length);for(;B.length;)B.pop()();w=!1,v.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let d;function wt(){d={r:0,c:[],p:d}}function kt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function jt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function At(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function Nt(t){t&&t.c()}function St(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=t.$$;r&&r.m(n,e),i||k(()=>{const c=s.map(P).filter(T);o?o.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(k)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Mt(t,n,e,i,r,s,o,l=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:j,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...C)=>{const N=C.length?C[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=N)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](N),a&&rt(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){L();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(Q)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),G(),F()}h(c)}class Bt{$destroy(){it(this,1),this.$destroy=j}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{At as A,Ct as B,it as C,H as D,vt as E,ot as F,ut as G,st as H,lt as I,W as J,ft as K,$t as L,Bt as S,dt as a,at as b,pt as c,kt as d,_t as e,nt as f,wt as g,Q as h,Mt as i,Et as j,bt as k,R as l,mt as m,j as n,xt as o,U as p,ht as q,gt as r,ct as s,jt as t,A as u,Y as v,yt as w,Nt as x,St as y,et as z};
