var ve=e=>{throw TypeError(e)};var me=(e,t,n)=>t.has(e)||ve("Cannot "+n);var M=(e,t,n)=>(me(e,t,"read from private field"),n?n.call(e):t.get(e)),F=(e,t,n)=>t.has(e)?ve("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,_)=>(me(e,t,"write to private field"),_?_.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&_(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Y,p,Re,H,ye,De,oe,We,ue,ie,le,O={},Fe=[],et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function fe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function K(e,t,n){var _,r,o,i={};for(o in t)o=="key"?_=t[o]:o=="ref"?r=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Y.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return j(e,i,_,r,null)}function j(e,t,n,_,r){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Re,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(o),o}function L(e){return e.children}function P(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function Be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Be(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!G.__r++||ye!==p.debounceRendering)&&((ye=p.debounceRendering)||De)(G)}function G(){var e,t,n,_,r,o,i,a;for(H.sort(oe);e=H.shift();)e.__d&&(t=H.length,_=void 0,o=(r=(n=e).__v).__e,i=[],a=[],n.__P&&((_=x({},r)).__v=r.__v+1,p.vnode&&p.vnode(_),pe(n.__P,_,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,i,o??T(r),!!(32&r.__u),a),_.__v=r.__v,_.__.__k[_.__i]=_,je(i,_,a),_.__e!=o&&Be(_)),H.length>t&&H.sort(oe));G.__r=0}function qe(e,t,n,_,r,o,i,a,c,s,h){var l,d,u,b,w,k,v=_&&_.__k||Fe,m=t.length;for(c=tt(n,t,v,c,m),l=0;l<m;l++)(u=n.__k[l])!=null&&(d=u.__i===-1?O:v[u.__i]||O,u.__i=l,k=pe(e,u,d,r,o,i,a,c,s,h),b=u.__e,u.ref&&d.ref!=u.ref&&(d.ref&&de(d.ref,null,u),h.push(u.ref,u.__c||b,u)),w==null&&b!=null&&(w=b),4&u.__u||d.__k===u.__k?c=Ve(u,c,e):typeof u.type=="function"&&k!==void 0?c=k:b&&(c=b.nextSibling),u.__u&=-7);return n.__e=w,c}function tt(e,t,n,_,r){var o,i,a,c,s,h=n.length,l=h,d=0;for(e.__k=new Array(r),o=0;o<r;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(c=o+d,(i=e.__k[o]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?j(null,i,null,null,null):ee(i)?j(L,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?j(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,a=null,(s=i.__i=nt(i,n,c,l))!==-1&&(l--,(a=n[s])&&(a.__u|=2)),a==null||a.__v===null?(s==-1&&d--,typeof i.type!="function"&&(i.__u|=4)):s!=c&&(s==c-1?d--:s==c+1?d++:(s>c?d--:d++,i.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<h;o++)(a=n[o])!=null&&!(2&a.__u)&&(a.__e==_&&(_=T(a)),ze(a,a));return _}function Ve(e,t,n){var _,r;if(typeof e.type=="function"){for(_=e.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=e,t=Ve(_[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=T(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Z(e,t){return t=t||[],e==null||typeof e=="boolean"||(ee(e)?e.some(function(n){Z(n,t)}):t.push(e)),t}function nt(e,t,n,_){var r,o,i=e.key,a=e.type,c=t[n];if(c===null||c&&i==c.key&&a===c.type&&!(2&c.__u))return n;if(_>(c!=null&&!(2&c.__u)?1:0))for(r=n-1,o=n+1;r>=0||o<t.length;){if(r>=0){if((c=t[r])&&!(2&c.__u)&&i==c.key&&a===c.type)return r;r--}if(o<t.length){if((c=t[o])&&!(2&c.__u)&&i==c.key&&a===c.type)return o;o++}}return-1}function be(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||et.test(t)?n:n+"px"}function q(e,t,n,_,r){var o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||be(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||be(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(We,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_?n.u=_.u:(n.u=ue,e.addEventListener(t,o?le:ie,o)):e.removeEventListener(t,o?le:ie,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ke(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ue++;else if(t.t<n.u)return;return n(p.event?p.event(t):t)}}}function pe(e,t,n,_,r,o,i,a,c,s){var h,l,d,u,b,w,k,v,m,A,$,D,I,he,W,te,ne,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=t.__e=n.__e]),(h=p.__b)&&h(t);e:if(typeof C=="function")try{if(v=t.props,m="prototype"in C&&C.prototype.render,A=(h=C.contextType)&&_[h.__c],$=h?A?A.props.value:h.__:_,n.__c?k=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new C(v,$):(t.__c=l=new P(v,$),l.constructor=C,l.render=rt),A&&A.sub(l),l.props=v,l.state||(l.state={}),l.context=$,l.__n=_,d=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&C.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=x({},l.__s)),x(l.__s,C.getDerivedStateFromProps(v,l.__s))),u=l.props,b=l.state,l.__v=t,d)m&&C.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&C.getDerivedStateFromProps==null&&v!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,$),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,$)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(U){U&&(U.__=t)}),D=0;D<l._sb.length;D++)l.__h.push(l._sb[D]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,$),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,b,w)})}if(l.context=$,l.props=v,l.__P=e,l.__e=!1,I=p.__r,he=0,m){for(l.state=l.__s,l.__d=!1,I&&I(t),h=l.render(l.props,l.state,l.context),W=0;W<l._sb.length;W++)l.__h.push(l._sb[W]);l._sb=[]}else do l.__d=!1,I&&I(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++he<25);l.state=l.__s,l.getChildContext!=null&&(_=x(x({},_),l.getChildContext())),m&&!d&&l.getSnapshotBeforeUpdate!=null&&(w=l.getSnapshotBeforeUpdate(u,b)),a=qe(e,ee(te=h!=null&&h.type===L&&h.key==null?h.props.children:h)?te:[te],t,n,_,r,o,i,a,c,s),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),k&&(l.__E=l.__=null)}catch(U){if(t.__v=null,c||o!=null)if(U.then){for(t.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else for(ne=o.length;ne--;)fe(o[ne]);else t.__e=n.__e,t.__k=n.__k;p.__e(U,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=_t(n.__e,t,n,_,r,o,i,c,s);return(h=p.diffed)&&h(t),128&t.__u?void 0:a}function je(e,t,n){for(var _=0;_<n.length;_++)de(n[_],n[++_],n[++_]);p.__c&&p.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function _t(e,t,n,_,r,o,i,a,c){var s,h,l,d,u,b,w,k=n.props,v=t.props,m=t.type;if(m=="svg"?r="http://www.w3.org/2000/svg":m=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(s=0;s<o.length;s++)if((u=o[s])&&"setAttribute"in u==!!m&&(m?u.localName==m:u.nodeType==3)){e=u,o[s]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(r,m,v.is&&v),a&&(p.__m&&p.__m(t,o),a=!1),o=null}if(m===null)k===v||a&&e.data===v||(e.data=v);else{if(o=o&&Y.call(e.childNodes),k=n.props||O,!a&&o!=null)for(k={},s=0;s<e.attributes.length;s++)k[(u=e.attributes[s]).name]=u.value;for(s in k)if(u=k[s],s!="children"){if(s=="dangerouslySetInnerHTML")l=u;else if(!(s in v)){if(s=="value"&&"defaultValue"in v||s=="checked"&&"defaultChecked"in v)continue;q(e,s,null,u,r)}}for(s in v)u=v[s],s=="children"?d=u:s=="dangerouslySetInnerHTML"?h=u:s=="value"?b=u:s=="checked"?w=u:a&&typeof u!="function"||k[s]===u||q(e,s,u,k[s],r);if(h)a||l&&(h.__html===l.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),qe(e,ee(d)?d:[d],t,n,_,m=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,i,o?o[0]:n.__k&&T(n,0),a,c),o!=null)for(s=o.length;s--;)fe(o[s]);a||(s="value",m=="progress"&&b==null?e.removeAttribute("value"):b!==void 0&&(b!==e[s]||m=="progress"&&!b||m=="option"&&b!==k[s])&&q(e,s,b,k[s],r),s="checked",w!==void 0&&w!==e[s]&&q(e,s,w,k[s],r))}return e}function de(e,t,n){try{if(typeof e=="function"){var _=typeof e.__u=="function";_&&e.__u(),_&&t==null||(e.__u=e(t))}else e.current=t}catch(r){p.__e(r,n)}}function ze(e,t,n){var _,r;if(p.unmount&&p.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||de(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){p.__e(o,t)}_.base=_.__P=null}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&ze(_[r],t,n||typeof e.type!="function");n||fe(e.__e),e.__c=e.__=e.__e=void 0}function rt(e,t,n){return this.constructor(e,n)}function ot(e,t,n){var _,r,o,i;t==document&&(t=document.documentElement),p.__&&p.__(e,t),r=(_=typeof n=="function")?null:t.__k,o=[],i=[],pe(t,e=(!_&&n||t).__k=K(L,null,[e]),r||O,O,t.namespaceURI,!_&&n?[n]:r?null:t.firstChild?Y.call(t.childNodes):null,o,!_&&n?n:r?r.__e:t.firstChild,_,i),je(o,e,i)}Y=Fe.slice,p={__e:function(e,t,n,_){for(var r,o,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,_||{}),i=r.__d),i)return r.__E=r}catch(a){e=a}throw e}},Re=0,P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ge(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},P.prototype.render=L,H=[],De=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,We=/(PointerCapture)$|Capture$/i,ue=0,ie=ke(!1),le=ke(!0);var it=0;function f(e,t,n,_,r,o){t||(t={});var i,a,c=t;"ref"in t&&(i=t.ref,delete t.ref);var s={type:e,props:c,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--it,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(a in i)c[a]===void 0&&(c[a]=i[a]);return p.vnode&&p.vnode(s),s}var Q,y,_e,we,se=0,Je=[],g=p,Ce=g.__b,Se=g.__r,Pe=g.diffed,$e=g.__c,Ne=g.unmount,xe=g.__;function Ke(e,t){g.__h&&g.__h(y,e,se||t),se=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function E(e){return se=1,lt(Ge,e)}function lt(e,t,n){var _=Ke(Q++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Ge(void 0,t),function(a){var c=_.__N?_.__N[0]:_.__[0],s=_.t(c,a);c!==s&&(_.__N=[s,_.__[1]],_.__c.setState({}))}],_.__c=y,!y.u)){var r=function(a,c,s){if(!_.__c.__H)return!0;var h=_.__c.__H.__.filter(function(d){return!!d.__c});if(h.every(function(d){return!d.__N}))return!o||o.call(this,a,c,s);var l=_.__c.props!==a;return h.forEach(function(d){if(d.__N){var u=d.__[0];d.__=d.__N,d.__N=void 0,u!==d.__[0]&&(l=!0)}}),o&&o.call(this,a,c,s)||l};y.u=!0;var o=y.shouldComponentUpdate,i=y.componentWillUpdate;y.componentWillUpdate=function(a,c,s){if(this.__e){var h=o;o=void 0,r(a,c,s),o=h}i&&i.call(this,a,c,s)},y.shouldComponentUpdate=r}return _.__N||_.__}function st(e,t){var n=Ke(Q++,3);!g.__s&&ut(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function at(){for(var e;e=Je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ae),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){y=null,Ce&&Ce(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),xe&&xe(e,t)},g.__r=function(e){Se&&Se(e),Q=0;var t=(y=e.__c).__H;t&&(_e===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(z),t.__h.forEach(ae),t.__h=[],Q=0)),_e=y},g.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Je.push(t)!==1&&we===g.requestAnimationFrame||((we=g.requestAnimationFrame)||ct)(at)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),_e=y=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(_){return!_.__||ae(_)})}catch(_){t.some(function(r){r.__h&&(r.__h=[])}),t=[],g.__e(_,n.__v)}}),$e&&$e(e,t)},g.unmount=function(e){Ne&&Ne(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{z(_)}catch(r){t=r}}),n.__H=void 0,t&&g.__e(t,n.__v))};var Ee=typeof requestAnimationFrame=="function";function ct(e){var t,n=function(){clearTimeout(_),Ee&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Ee&&(t=requestAnimationFrame(n))}function z(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function ae(e){var t=y;e.__c=e.__(),y=t}function ut(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Ge(e,t){return typeof t=="function"?t(e):t}function J({value:e,onChange:t,type:n,placeholder:_,onEnter:r,autofocus:o}){return f("div",{class:"TextInput",children:[f("input",{type:n,value:e,onInput:i=>t(i.currentTarget.value),autofocus:o,onKeyDown:r?i=>{i.key==="Enter"&&r()}:void 0}),f("label",{class:e?"subsided":void 0,children:_})]})}var R,N;class ft{constructor(){F(this,R,new WebSocket("wss://kliensoldali.azurewebsites.net/"));F(this,N,[]);M(this,R).addEventListener("message",t=>{var _;let n=JSON.parse(t.data);switch(console.log(n),n.type){case"error":alert(n.message);break;case"login":this.inbox=n.inbox;break;case"message":let r=n.channelId;(_=this.inbox.conversations.find(o=>o.channelId===r))==null||_.lastMessages.push(n.message);break;case"conversationAdded":this.inbox.conversations.push(n.conversation);break}for(let r of M(this,N))r()})}send(t){M(this,R).send(JSON.stringify(t))}addListener(t){B(this,N,[...M(this,N),t])}removeListener(t){B(this,N,M(this,N).filter(n=>n!==t))}}R=new WeakMap,N=new WeakMap;const S=new ft;function pt(){let[e,t]=E(""),[n,_]=E(""),[r,o]=E(""),[i,a]=E(!1);function c(){i?S.send({type:"register",email:e,password:n,displayName:r,staySignedIn:!0}):S.send({type:"login",email:e,password:n,staySignedIn:!0})}return f("div",{class:"Login",children:[f("span",{class:"logo",children:"🗪"}),f(J,{type:"email",placeholder:"Email (someone@example.com)",value:e,onChange:t}),f(J,{type:"password",placeholder:"Password",value:n,onChange:_,onEnter:c}),i&&f(J,{type:"text",placeholder:"Display Name (Agent Smith)",value:r,onChange:o}),f("button",{type:"button",onClick:c,children:i?"Register":"Login"}),f("p",{children:[i?"Switch back to ":"Have no account yet? Go and ",f("a",{href:"",onClick:s=>{s.preventDefault(),a(!i)},children:i?"Login":"Register"})]})]})}function Ze({buttonContent:e,onClick:t,...n}){return f("div",{class:"TextInputAndButton",children:[f(J,{...n,onEnter:t}),f("button",{type:"button",onClick:t,children:e})]})}function dt({conversation:e,selected:t,onSelect:n}){let _=e.lastMessages.length>0?e.lastMessages[e.lastMessages.length-1]:null,r=_&&new Date(_.timeStamp).toLocaleTimeString();return f("div",{class:"ConversationCard"+(t?" selected":""),onClick:()=>n(),children:[f("div",{children:[f("h3",{children:e.name}),f("time",{datetime:r,children:r})]}),f("span",{children:_==null?void 0:_.content})]})}function ht({selected:e,onSelect:t}){let[n,_]=E("");return f("div",{class:"LeftPane",children:[f("p",{children:["My tag: ",S.inbox.user.tag]}),f(Ze,{value:n,onChange:_,buttonContent:"Invite",placeholder:"Tag",onClick:()=>{n&&(_(""),S.send({type:"contactRequest",email:n,firstMessage:"Hello"}))}}),f("div",{className:"conversations",children:S.inbox.conversations.map(r=>f(dt,{conversation:r,selected:r===e,onSelect:()=>t(r)},r.channelId))})]})}function ce(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function He(e,t){this.props=e,this.context=t}function vt(e,t){function n(r){var o=this.props.ref,i=o==r.ref;return!i&&o&&(o.call?o(null):o.current=null),t?!t(this.props,r)||!i:ce(this.props,r)}function _(r){return this.shouldComponentUpdate=n,K(e,r)}return _.displayName="Memo("+(e.displayName||e.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_}(He.prototype=new P).isPureReactComponent=!0,He.prototype.shouldComponentUpdate=function(e,t){return ce(this.props,e)||ce(this.state,t)};var Le=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Le&&Le(e)};var mt=p.__e;p.__e=function(e,t,n,_){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}mt(e,t,n,_)};var Me=p.unmount;function Qe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=function(_,r){for(var o in r)_[o]=r[o];return _}({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return Qe(_,t,n)})),e}function Xe(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return Xe(_,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function re(){this.__u=0,this.o=null,this.__b=null}function Ye(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.i=null,this.l=null}p.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Me&&Me(e)},(re.prototype=new P).__c=function(e,t){var n=t.__c,_=this;_.o==null&&(_.o=[]),_.o.push(n);var r=Ye(_.__v),o=!1,i=function(){o||(o=!0,n.__R=null,r?r(a):a())};n.__R=i;var a=function(){if(!--_.__u){if(_.state.__a){var c=_.state.__a;_.__v.__k[0]=Xe(c,c.__c.__P,c.__c.__O)}var s;for(_.setState({__a:_.__b=null});s=_.o.pop();)s.forceUpdate()}};_.__u++||32&t.__u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(i,i)},re.prototype.componentWillUnmount=function(){this.o=[]},re.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=Qe(this.__b,n,_.__O=_.__P)}this.__b=null}var r=t.__a&&K(L,null,e.fallback);return r&&(r.__u&=-33),[K(L,null,t.__a?null:e.children),r]};var Te=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(V.prototype=new P).__a=function(e){var t=this,n=Ye(t.__v),_=t.l.get(e);return _[0]++,function(r){var o=function(){t.props.revealOrder?(_.push(r),Te(t,e,_)):r()};n?n(o):o()}},V.prototype.render=function(e){this.i=null,this.l=new Map;var t=Z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Te(e,n,t)})};var yt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,gt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,bt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,kt=/[A-Z0-9]/g,wt=typeof document<"u",Ct=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ae=p.event;function St(){}function Pt(){return this.cancelBubble}function $t(){return this.defaultPrevented}p.event=function(e){return Ae&&(e=Ae(e)),e.persist=St,e.isPropagationStopped=Pt,e.isDefaultPrevented=$t,e.nativeEvent=e};var Nt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ie=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,_=t.type,r={},o=_.indexOf("-")===-1;for(var i in n){var a=n[i];if(!(i==="value"&&"defaultValue"in n&&a==null||wt&&i==="children"&&_==="noscript"||i==="class"||i==="className")){var c=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":c==="translate"&&a==="no"?a=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?i="ondblclick":c!=="onchange"||_!=="input"&&_!=="textarea"||Ct(n.type)?c==="onfocus"?i="onfocusin":c==="onblur"?i="onfocusout":bt.test(i)&&(i=c):c=i="oninput":o&&gt.test(i)?i=i.replace(kt,"-$&").toLowerCase():a===null&&(a=void 0),c==="oninput"&&r[i=c]&&(i="oninputCapture"),r[i]=a}}_=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Z(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),_=="select"&&r.defaultValue!=null&&(r.value=Z(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Nt)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=yt,Ie&&Ie(e)};var Ue=p.__r;p.__r=function(e){Ue&&Ue(e),e.__c};var Oe=p.diffed;p.diffed=function(e){Oe&&Oe(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const xt=vt(({message:e,own:t})=>f("div",{className:"MessageCard"+(t?" own":""),children:f("div",{className:"bubble",children:[f("span",{className:"text",children:e.content}),f("span",{className:"time",children:new Date(e.timeStamp).toLocaleTimeString()})]})}));function Et({conversation:e}){let[t,n]=E("");return f("div",{class:"RightPane",children:!!e&&f(L,{children:[f("div",{class:"conversation-header",children:f("p",{children:e.name})}),f("div",{class:"messages",children:e.lastMessages.map(_=>f(xt,{message:_,own:_.senderId===S.inbox.user.id},_.timeStamp))}),f(Ze,{value:t,onChange:n,buttonContent:"Send",placeholder:"Write a message...",onClick:()=>{S.send({type:"message",channelId:e.channelId,referenceTo:0,contentType:0,content:t}),n("")}})]})})}function Ht(){let[e,t]=E();return f("div",{class:"Main",children:[f(ht,{selected:e,onSelect:t}),f(Et,{conversation:e})]})}var X;class Lt{constructor(){F(this,X);isSecureContext&&(async()=>B(this,X,await navigator.serviceWorker.register("sw.js")))()}}X=new WeakMap;new Lt;function Mt(){let[e,t]=E(1);return console.log("App render count: "+e),st(()=>{const n=()=>t(_=>_+1);return S.addListener(n),()=>S.removeListener(n)},[]),S.inbox?f(Ht,{}):f(pt,{})}ot(f(Mt,{}),document.getElementById("app"));
