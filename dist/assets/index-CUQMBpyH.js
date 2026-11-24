(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function ug(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pd={exports:{}},Qo={},md={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function K_(){if(km)return Nt;km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(U,ne,ie){this.props=U,this.context=ne,this.refs=A,this.updater=ie||g}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(U,ne,ie){this.props=U,this.context=ne,this.refs=A,this.updater=ie||g}var b=T.prototype=new S;b.constructor=T,E(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,C={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function R(U,ne,ie){var Y,pe={},ve=null,me=null;if(ne!=null)for(Y in ne.ref!==void 0&&(me=ne.ref),ne.key!==void 0&&(ve=""+ne.key),ne)P.call(ne,Y)&&!M.hasOwnProperty(Y)&&(pe[Y]=ne[Y]);var re=arguments.length-2;if(re===1)pe.children=ie;else if(1<re){for(var q=Array(re),Re=0;Re<re;Re++)q[Re]=arguments[Re+2];pe.children=q}if(U&&U.defaultProps)for(Y in re=U.defaultProps,re)pe[Y]===void 0&&(pe[Y]=re[Y]);return{$$typeof:i,type:U,key:ve,ref:me,props:pe,_owner:C.current}}function O(U,ne){return{$$typeof:i,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function F(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function I(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ie){return ne[ie]})}var V=/\/+/g;function K(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?I(""+U.key):ne.toString(36)}function B(U,ne,ie,Y,pe){var ve=typeof U;(ve==="undefined"||ve==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(ve){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case i:case e:me=!0}}if(me)return me=U,pe=pe(me),U=Y===""?"."+K(me,0):Y,w(pe)?(ie="",U!=null&&(ie=U.replace(V,"$&/")+"/"),B(pe,ne,ie,"",function(Re){return Re})):pe!=null&&(F(pe)&&(pe=O(pe,ie+(!pe.key||me&&me.key===pe.key?"":(""+pe.key).replace(V,"$&/")+"/")+U)),ne.push(pe)),1;if(me=0,Y=Y===""?".":Y+":",w(U))for(var re=0;re<U.length;re++){ve=U[re];var q=Y+K(ve,re);me+=B(ve,ne,ie,q,pe)}else if(q=v(U),typeof q=="function")for(U=q.call(U),re=0;!(ve=U.next()).done;)ve=ve.value,q=Y+K(ve,re++),me+=B(ve,ne,ie,q,pe);else if(ve==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return me}function ee(U,ne,ie){if(U==null)return U;var Y=[],pe=0;return B(U,Y,"","",function(ve){return ne.call(ie,ve,pe++)}),Y}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=ie)},function(ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var X={current:null},$={transition:null},Z={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:$,ReactCurrentOwner:C};function j(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:ee,forEach:function(U,ne,ie){ee(U,function(){ne.apply(this,arguments)},ie)},count:function(U){var ne=0;return ee(U,function(){ne++}),ne},toArray:function(U){return ee(U,function(ne){return ne})||[]},only:function(U){if(!F(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Nt.Component=y,Nt.Fragment=t,Nt.Profiler=o,Nt.PureComponent=T,Nt.StrictMode=r,Nt.Suspense=h,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Nt.act=j,Nt.cloneElement=function(U,ne,ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Y=E({},U.props),pe=U.key,ve=U.ref,me=U._owner;if(ne!=null){if(ne.ref!==void 0&&(ve=ne.ref,me=C.current),ne.key!==void 0&&(pe=""+ne.key),U.type&&U.type.defaultProps)var re=U.type.defaultProps;for(q in ne)P.call(ne,q)&&!M.hasOwnProperty(q)&&(Y[q]=ne[q]===void 0&&re!==void 0?re[q]:ne[q])}var q=arguments.length-2;if(q===1)Y.children=ie;else if(1<q){re=Array(q);for(var Re=0;Re<q;Re++)re[Re]=arguments[Re+2];Y.children=re}return{$$typeof:i,type:U.type,key:pe,ref:ve,props:Y,_owner:me}},Nt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Nt.createElement=R,Nt.createFactory=function(U){var ne=R.bind(null,U);return ne.type=U,ne},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(U){return{$$typeof:d,render:U}},Nt.isValidElement=F,Nt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:oe}},Nt.memo=function(U,ne){return{$$typeof:f,type:U,compare:ne===void 0?null:ne}},Nt.startTransition=function(U){var ne=$.transition;$.transition={};try{U()}finally{$.transition=ne}},Nt.unstable_act=j,Nt.useCallback=function(U,ne){return X.current.useCallback(U,ne)},Nt.useContext=function(U){return X.current.useContext(U)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(U){return X.current.useDeferredValue(U)},Nt.useEffect=function(U,ne){return X.current.useEffect(U,ne)},Nt.useId=function(){return X.current.useId()},Nt.useImperativeHandle=function(U,ne,ie){return X.current.useImperativeHandle(U,ne,ie)},Nt.useInsertionEffect=function(U,ne){return X.current.useInsertionEffect(U,ne)},Nt.useLayoutEffect=function(U,ne){return X.current.useLayoutEffect(U,ne)},Nt.useMemo=function(U,ne){return X.current.useMemo(U,ne)},Nt.useReducer=function(U,ne,ie){return X.current.useReducer(U,ne,ie)},Nt.useRef=function(U){return X.current.useRef(U)},Nt.useState=function(U){return X.current.useState(U)},Nt.useSyncExternalStore=function(U,ne,ie){return X.current.useSyncExternalStore(U,ne,ie)},Nt.useTransition=function(){return X.current.useTransition()},Nt.version="18.3.1",Nt}var Bm;function $h(){return Bm||(Bm=1,md.exports=K_()),md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function Z_(){if(zm)return Qo;zm=1;var i=$h(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var m,x={},v=null,g=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(g=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(x[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)x[m]===void 0&&(x[m]=h[m]);return{$$typeof:e,type:d,key:v,ref:g,props:x,_owner:o.current}}return Qo.Fragment=t,Qo.jsx=c,Qo.jsxs=c,Qo}var Hm;function J_(){return Hm||(Hm=1,pd.exports=Z_()),pd.exports}var k=J_(),Mt=$h();const Q_=ug(Mt);var Pl={},gd={exports:{}},Zn={},vd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function ex(){return Gm||(Gm=1,(function(i){function e($,Z){var j=$.length;$.push(Z);e:for(;0<j;){var U=j-1>>>1,ne=$[U];if(0<o(ne,Z))$[U]=Z,$[j]=ne,j=U;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],j=$.pop();if(j!==Z){$[0]=j;e:for(var U=0,ne=$.length,ie=ne>>>1;U<ie;){var Y=2*(U+1)-1,pe=$[Y],ve=Y+1,me=$[ve];if(0>o(pe,j))ve<ne&&0>o(me,pe)?($[U]=me,$[ve]=j,U=ve):($[U]=pe,$[Y]=j,U=Y);else if(ve<ne&&0>o(me,j))$[U]=me,$[ve]=j,U=ve;else break e}}return Z}function o($,Z){var j=$.sortIndex-Z.sortIndex;return j!==0?j:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var h=[],f=[],m=1,x=null,v=3,g=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var Z=t(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=$)r(f),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=t(f)}}function w($){if(A=!1,b($),!E)if(t(h)!==null)E=!0,oe(P);else{var Z=t(f);Z!==null&&X(w,Z.startTime-$)}}function P($,Z){E=!1,A&&(A=!1,S(R),R=-1),g=!0;var j=v;try{for(b(Z),x=t(h);x!==null&&(!(x.expirationTime>Z)||$&&!I());){var U=x.callback;if(typeof U=="function"){x.callback=null,v=x.priorityLevel;var ne=U(x.expirationTime<=Z);Z=i.unstable_now(),typeof ne=="function"?x.callback=ne:x===t(h)&&r(h),b(Z)}else r(h);x=t(h)}if(x!==null)var ie=!0;else{var Y=t(f);Y!==null&&X(w,Y.startTime-Z),ie=!1}return ie}finally{x=null,v=j,g=!1}}var C=!1,M=null,R=-1,O=5,F=-1;function I(){return!(i.unstable_now()-F<O)}function V(){if(M!==null){var $=i.unstable_now();F=$;var Z=!0;try{Z=M(!0,$)}finally{Z?K():(C=!1,M=null)}}else C=!1}var K;if(typeof T=="function")K=function(){T(V)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ee=B.port2;B.port1.onmessage=V,K=function(){ee.postMessage(null)}}else K=function(){y(V,0)};function oe($){M=$,C||(C=!0,K())}function X($,Z){R=y(function(){$(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){E||g||(E=!0,oe(P))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function($){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var j=v;v=Z;try{return $()}finally{v=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var j=v;v=$;try{return Z()}finally{v=j}},i.unstable_scheduleCallback=function($,Z,j){var U=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?U+j:U):j=U,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,$={id:m++,callback:Z,priorityLevel:$,startTime:j,expirationTime:ne,sortIndex:-1},j>U?($.sortIndex=j,e(f,$),t(h)===null&&$===t(f)&&(A?(S(R),R=-1):A=!0,X(w,j-U))):($.sortIndex=ne,e(h,$),E||g||(E=!0,oe(P))),$},i.unstable_shouldYield=I,i.unstable_wrapCallback=function($){var Z=v;return function(){var j=v;v=Z;try{return $.apply(this,arguments)}finally{v=j}}}})(_d)),_d}var Vm;function tx(){return Vm||(Vm=1,vd.exports=ex()),vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function nx(){if(Wm)return Zn;Wm=1;var i=$h(),e=tx();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function v(n){return h.call(x,n)?!0:h.call(m,n)?!1:f.test(n)?x[n]=!0:(m[n]=!0,!1)}function g(n,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,l,u){if(s===null||typeof s>"u"||g(n,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(n,s,l,u,p,_,N){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=N}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];y[s]=new A(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new A(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new A(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(S,T);y[s]=new A(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,s,l,u){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,u)&&(l=null),u||p===null?v(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,s,l):n.setAttribute(s,l))))}var w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),C=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),I=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),$=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+n}var ie=!1;function Y(n,s){if(!n||ie)return"";ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ge){var u=ge}Reflect.construct(n,[],s)}else{try{s.call()}catch(ge){u=ge}n.call(s.prototype)}else{try{throw Error()}catch(ge){u=ge}n()}}catch(ge){if(ge&&u&&typeof ge.stack=="string"){for(var p=ge.stack.split(`
`),_=u.stack.split(`
`),N=p.length-1,H=_.length-1;1<=N&&0<=H&&p[N]!==_[H];)H--;for(;1<=N&&0<=H;N--,H--)if(p[N]!==_[H]){if(N!==1||H!==1)do if(N--,H--,0>H||p[N]!==_[H]){var te=`
`+p[N].replace(" at new "," at ");return n.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",n.displayName)),te}while(1<=N&&0<=H);break}}}finally{ie=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function pe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case C:return"Portal";case O:return"Profiler";case R:return"StrictMode";case K:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return s=n.displayName||null,s!==null?s:ve(n.type)||"Memo";case oe:s=n._payload,n=n._init;try{return ve(n(s))}catch{}}return null}function me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function q(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Re(n){var s=q(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(N){u=""+N,_.call(this,N)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(N){u=""+N},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function we(n){n._valueTracker||(n._valueTracker=Re(n))}function Te(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return n&&(u=q(n)?n.checked?"true":"false":n.value),n=u,n!==l?(s.setValue(n),!0):!1}function Pe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ae(n,s){var l=s.checked;return j({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function xe(n,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=re(s.value!=null?s.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Me(n,s){s=s.checked,s!=null&&b(n,"checked",s,!1)}function Ce(n,s){Me(n,s);var l=re(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Je(n,s.type,l):s.hasOwnProperty("defaultValue")&&Je(n,s.type,re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ae(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Je(n,s,l){(s!=="number"||Pe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ye=Array.isArray;function ut(n,s,l,u){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+re(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function xt(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function wt(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ye(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:re(l)}}function J(n,s){var l=re(s.value),u=re(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Wt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ue,Xt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,u,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Ue=Ue||document.createElement("div"),Ue.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function st(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z=["Webkit","ms","Moz","O"];Object.keys(dt).forEach(function(n){z.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),dt[s]=dt[n]})});function L(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||dt.hasOwnProperty(n)&&dt[n]?(""+s).trim():s+"px"}function ue(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=L(l,s[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var Ie=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(n,s){if(s){if(Ie[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function He(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var We=null;function ye(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Be=null,W=null;function Ee(n){if(n=ko(n)){if(typeof Se!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Xa(s),Se(n.stateNode,n.type,s))}}function _e(n){Be?W?W.push(n):W=[n]:Be=n}function Ve(){if(Be){var n=Be,s=W;if(W=Be=null,Ee(n),s)for(n=0;n<s.length;n++)Ee(s[n])}}function Oe(n,s){return n(s)}function Ge(){}var at=!1;function bt(n,s,l){if(at)return n(s,l);at=!0;try{return Oe(n,s,l)}finally{at=!1,(Be!==null||W!==null)&&(Ge(),Ve())}}function De(n,s){var l=n.stateNode;if(l===null)return null;var u=Xa(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ht=!1;if(d)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){ht=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{ht=!1}function je(n,s,l,u,p,_,N,H,te){var ge=Array.prototype.slice.call(arguments,3);try{s.apply(l,ge)}catch(Le){this.onError(Le)}}var Ft=!1,sn=null,ti=!1,ys=null,_o={onError:function(n){Ft=!0,sn=n}};function kc(n,s,l,u,p,_,N,H,te){Ft=!1,sn=null,je.apply(_o,arguments)}function Ta(n,s,l,u,p,_,N,H,te){if(kc.apply(this,arguments),Ft){if(Ft){var ge=sn;Ft=!1,sn=null}else throw Error(t(198));ti||(ti=!0,ys=ge)}}function Li(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Di(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ss(n){if(Li(n)!==n)throw Error(t(188))}function Aa(n){var s=n.alternate;if(!s){if(s=Li(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,u=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Ss(p),n;if(_===u)return Ss(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=_;else{for(var N=!1,H=p.child;H;){if(H===l){N=!0,l=p,u=_;break}if(H===u){N=!0,u=p,l=_;break}H=H.sibling}if(!N){for(H=_.child;H;){if(H===l){N=!0,l=_,u=p;break}if(H===u){N=!0,u=_,l=p;break}H=H.sibling}if(!N)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function xo(n){return n=Aa(n),n!==null?jr(n):null}function jr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=jr(n);if(s!==null)return s;n=n.sibling}return null}var yo=e.unstable_scheduleCallback,So=e.unstable_cancelCallback,Kr=e.unstable_shouldYield,Bc=e.unstable_requestPaint,tn=e.unstable_now,Ra=e.unstable_getCurrentPriorityLevel,Mo=e.unstable_ImmediatePriority,Ca=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,Pa=e.unstable_LowPriority,D=e.unstable_IdlePriority,Q=null,he=null;function ce(n){if(he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var le=Math.clz32?Math.clz32:Xe,$e=Math.log,Qe=Math.LN2;function Xe(n){return n>>>=0,n===0?32:31-($e(n)/Qe|0)|0}var qe=64,tt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tt(n,s){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,N=l&268435455;if(N!==0){var H=N&~p;H!==0?u=vt(H):(_&=N,_!==0&&(u=vt(_)))}else N=l&~p,N!==0?u=vt(N):_!==0&&(u=vt(_));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)l=31-le(s),p=1<<l,u|=n[l],s&=~p;return u}function nt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(n,s){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var N=31-le(_),H=1<<N,te=p[N];te===-1?((H&l)===0||(H&u)!==0)&&(p[N]=nt(H,s)):te<=s&&(n.expiredLanes|=H),_&=~H}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $t(){var n=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),n}function Ht(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function un(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-le(s),n[s]=l}function it(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-le(l),_=1<<p;s[p]=0,u[p]=-1,n[p]=-1,l&=~_}}function _n(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var u=31-le(l),p=1<<u;p&s|n[u]&s&&(n[u]|=s),l&=~p}}var lt=0;function Ii(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xn,vr,yi,Fi,Dt,fn=!1,Dn=[],kt=null,qt=null,bn=null,_r=new Map,Eo=new Map,xr=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(n,s){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":_r.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(s.pointerId)}}function wo(n,s,l,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ko(s),s!==null&&vr(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function xv(n,s,l,u,p){switch(s){case"focusin":return kt=wo(kt,n,s,l,u,p),!0;case"dragenter":return qt=wo(qt,n,s,l,u,p),!0;case"mouseover":return bn=wo(bn,n,s,l,u,p),!0;case"pointerover":var _=p.pointerId;return _r.set(_,wo(_r.get(_)||null,n,s,l,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Eo.set(_,wo(Eo.get(_)||null,n,s,l,u,p)),!0}return!1}function Mf(n){var s=Zr(n.target);if(s!==null){var l=Li(s);if(l!==null){if(s=l.tag,s===13){if(s=Di(l),s!==null){n.blockedOn=s,Dt(n.priority,function(){yi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=Hc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);We=u,l.target.dispatchEvent(u),We=null}else return s=ko(l),s!==null&&vr(s),n.blockedOn=l,!1;s.shift()}return!0}function Ef(n,s,l){Na(n)&&l.delete(s)}function yv(){fn=!1,kt!==null&&Na(kt)&&(kt=null),qt!==null&&Na(qt)&&(qt=null),bn!==null&&Na(bn)&&(bn=null),_r.forEach(Ef),Eo.forEach(Ef)}function bo(n,s){n.blockedOn===s&&(n.blockedOn=null,fn||(fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function To(n){function s(p){return bo(p,n)}if(0<Dn.length){bo(Dn[0],n);for(var l=1;l<Dn.length;l++){var u=Dn[l];u.blockedOn===n&&(u.blockedOn=null)}}for(kt!==null&&bo(kt,n),qt!==null&&bo(qt,n),bn!==null&&bo(bn,n),_r.forEach(s),Eo.forEach(s),l=0;l<xr.length;l++)u=xr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Mf(l),l.blockedOn===null&&xr.shift()}var Es=w.ReactCurrentBatchConfig,La=!0;function Sv(n,s,l,u){var p=lt,_=Es.transition;Es.transition=null;try{lt=1,zc(n,s,l,u)}finally{lt=p,Es.transition=_}}function Mv(n,s,l,u){var p=lt,_=Es.transition;Es.transition=null;try{lt=4,zc(n,s,l,u)}finally{lt=p,Es.transition=_}}function zc(n,s,l,u){if(La){var p=Hc(n,s,l,u);if(p===null)ru(n,s,u,Da,l),Sf(n,u);else if(xv(p,n,s,l,u))u.stopPropagation();else if(Sf(n,u),s&4&&-1<_v.indexOf(n)){for(;p!==null;){var _=ko(p);if(_!==null&&xn(_),_=Hc(n,s,l,u),_===null&&ru(n,s,u,Da,l),_===p)break;p=_}p!==null&&u.stopPropagation()}else ru(n,s,u,null,l)}}var Da=null;function Hc(n,s,l,u){if(Da=null,n=ye(u),n=Zr(n),n!==null)if(s=Li(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Di(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Da=n,null}function wf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ra()){case Mo:return 1;case Ca:return 4;case Ms:case Pa:return 16;case D:return 536870912;default:return 16}default:return 16}}var yr=null,Gc=null,Ia=null;function bf(){if(Ia)return Ia;var n,s=Gc,l=s.length,u,p="value"in yr?yr.value:yr.textContent,_=p.length;for(n=0;n<l&&s[n]===p[n];n++);var N=l-n;for(u=1;u<=N&&s[l-u]===p[_-u];u++);return Ia=p.slice(n,1<u?1-u:void 0)}function Fa(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function Tf(){return!1}function ni(n){function s(l,u,p,_,N){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=N,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ua:Tf,this.isPropagationStopped=Tf,this}return j(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),s}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=ni(ws),Ao=j({},ws,{view:0,detail:0}),Ev=ni(Ao),Wc,Xc,Ro,Oa=j({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(Wc=n.screenX-Ro.screenX,Xc=n.screenY-Ro.screenY):Xc=Wc=0,Ro=n),Wc)},movementY:function(n){return"movementY"in n?n.movementY:Xc}}),Af=ni(Oa),wv=j({},Oa,{dataTransfer:0}),bv=ni(wv),Tv=j({},Ao,{relatedTarget:0}),$c=ni(Tv),Av=j({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=ni(Av),Cv=j({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pv=ni(Cv),Nv=j({},ws,{data:0}),Rf=ni(Nv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Iv[n])?!!s[n]:!1}function Yc(){return Fv}var Uv=j({},Ao,{key:function(n){if(n.key){var s=Lv[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ov=ni(Uv),kv=j({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=ni(kv),Bv=j({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),zv=ni(Bv),Hv=j({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=ni(Hv),Vv=j({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=ni(Vv),Xv=[9,13,27,32],qc=d&&"CompositionEvent"in window,Co=null;d&&"documentMode"in document&&(Co=document.documentMode);var $v=d&&"TextEvent"in window&&!Co,Pf=d&&(!qc||Co&&8<Co&&11>=Co),Nf=" ",Lf=!1;function Df(n,s){switch(n){case"keyup":return Xv.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Yv(n,s){switch(n){case"compositionend":return If(s);case"keypress":return s.which!==32?null:(Lf=!0,Nf);case"textInput":return n=s.data,n===Nf&&Lf?null:n;default:return null}}function qv(n,s){if(bs)return n==="compositionend"||!qc&&Df(n,s)?(n=bf(),Ia=Gc=yr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pf&&s.locale!=="ko"?null:s.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!jv[n.type]:s==="textarea"}function Uf(n,s,l,u){_e(u),s=Ga(s,"onChange"),0<s.length&&(l=new Vc("onChange","change",null,l,u),n.push({event:l,listeners:s}))}var Po=null,No=null;function Kv(n){ep(n,0)}function ka(n){var s=Ps(n);if(Te(s))return n}function Zv(n,s){if(n==="change")return s}var Of=!1;if(d){var jc;if(d){var Kc="oninput"in document;if(!Kc){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Kc=typeof kf.oninput=="function"}jc=Kc}else jc=!1;Of=jc&&(!document.documentMode||9<document.documentMode)}function Bf(){Po&&(Po.detachEvent("onpropertychange",zf),No=Po=null)}function zf(n){if(n.propertyName==="value"&&ka(No)){var s=[];Uf(s,No,n,ye(n)),bt(Kv,s)}}function Jv(n,s,l){n==="focusin"?(Bf(),Po=s,No=l,Po.attachEvent("onpropertychange",zf)):n==="focusout"&&Bf()}function Qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ka(No)}function e_(n,s){if(n==="click")return ka(s)}function t_(n,s){if(n==="input"||n==="change")return ka(s)}function n_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Si=typeof Object.is=="function"?Object.is:n_;function Lo(n,s){if(Si(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(s,p)||!Si(n[p],s[p]))return!1}return!0}function Hf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,s){var l=Hf(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=s&&u>=s)return{node:l,offset:s-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hf(l)}}function Vf(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Vf(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Wf(){for(var n=window,s=Pe();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=Pe(n.document)}return s}function Zc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function i_(n){var s=Wf(),l=n.focusedElem,u=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Vf(l.ownerDocument.documentElement,l)){if(u!==null&&Zc(l)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=Gf(l,_);var N=Gf(l,u);p&&N&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==N.node||n.focusOffset!==N.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(s),n.extend(N.node,N.offset)):(s.setEnd(N.node,N.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r_=d&&"documentMode"in document&&11>=document.documentMode,Ts=null,Jc=null,Do=null,Qc=!1;function Xf(n,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qc||Ts==null||Ts!==Pe(u)||(u=Ts,"selectionStart"in u&&Zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Do&&Lo(Do,u)||(Do=u,u=Ga(Jc,"onSelect"),0<u.length&&(s=new Vc("onSelect","select",null,s,l),n.push({event:s,listeners:u}),s.target=Ts)))}function Ba(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var As={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},eu={},$f={};d&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function za(n){if(eu[n])return eu[n];if(!As[n])return n;var s=As[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in $f)return eu[n]=s[l];return n}var Yf=za("animationend"),qf=za("animationiteration"),jf=za("animationstart"),Kf=za("transitionend"),Zf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,s){Zf.set(n,s),a(s,[n])}for(var tu=0;tu<Jf.length;tu++){var nu=Jf[tu],s_=nu.toLowerCase(),o_=nu[0].toUpperCase()+nu.slice(1);Sr(s_,"on"+o_)}Sr(Yf,"onAnimationEnd"),Sr(qf,"onAnimationIteration"),Sr(jf,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Kf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Qf(n,s,l){var u=n.type||"unknown-event";n.currentTarget=l,Ta(u,s,void 0,n),n.currentTarget=null}function ep(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var _=void 0;if(s)for(var N=u.length-1;0<=N;N--){var H=u[N],te=H.instance,ge=H.currentTarget;if(H=H.listener,te!==_&&p.isPropagationStopped())break e;Qf(p,H,ge),_=te}else for(N=0;N<u.length;N++){if(H=u[N],te=H.instance,ge=H.currentTarget,H=H.listener,te!==_&&p.isPropagationStopped())break e;Qf(p,H,ge),_=te}}}if(ti)throw n=ys,ti=!1,ys=null,n}function Jt(n,s){var l=s[uu];l===void 0&&(l=s[uu]=new Set);var u=n+"__bubble";l.has(u)||(tp(s,n,2,!1),l.add(u))}function iu(n,s,l){var u=0;s&&(u|=4),tp(l,n,u,s)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Ha]){n[Ha]=!0,r.forEach(function(l){l!=="selectionchange"&&(a_.has(l)||iu(l,!1,n),iu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ha]||(s[Ha]=!0,iu("selectionchange",!1,s))}}function tp(n,s,l,u){switch(wf(s)){case 1:var p=Sv;break;case 4:p=Mv;break;default:p=zc}l=p.bind(null,s,l,n),p=void 0,!ht||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function ru(n,s,l,u,p){var _=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var N=u.tag;if(N===3||N===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(N===4)for(N=u.return;N!==null;){var te=N.tag;if((te===3||te===4)&&(te=N.stateNode.containerInfo,te===p||te.nodeType===8&&te.parentNode===p))return;N=N.return}for(;H!==null;){if(N=Zr(H),N===null)return;if(te=N.tag,te===5||te===6){u=_=N;continue e}H=H.parentNode}}u=u.return}bt(function(){var ge=_,Le=ye(l),Fe=[];e:{var Ne=Zf.get(n);if(Ne!==void 0){var Ze=Vc,rt=n;switch(n){case"keypress":if(Fa(l)===0)break e;case"keydown":case"keyup":Ze=Ov;break;case"focusin":rt="focus",Ze=$c;break;case"focusout":rt="blur",Ze=$c;break;case"beforeblur":case"afterblur":Ze=$c;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=zv;break;case Yf:case qf:case jf:Ze=Rv;break;case Kf:Ze=Gv;break;case"scroll":Ze=Ev;break;case"wheel":Ze=Wv;break;case"copy":case"cut":case"paste":Ze=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=Cf}var ot=(s&4)!==0,pn=!ot&&n==="scroll",de=ot?Ne!==null?Ne+"Capture":null:Ne;ot=[];for(var se=ge,fe;se!==null;){fe=se;var ze=fe.stateNode;if(fe.tag===5&&ze!==null&&(fe=ze,de!==null&&(ze=De(se,de),ze!=null&&ot.push(Uo(se,ze,fe)))),pn)break;se=se.return}0<ot.length&&(Ne=new Ze(Ne,rt,null,l,Le),Fe.push({event:Ne,listeners:ot}))}}if((s&7)===0){e:{if(Ne=n==="mouseover"||n==="pointerover",Ze=n==="mouseout"||n==="pointerout",Ne&&l!==We&&(rt=l.relatedTarget||l.fromElement)&&(Zr(rt)||rt[Ki]))break e;if((Ze||Ne)&&(Ne=Le.window===Le?Le:(Ne=Le.ownerDocument)?Ne.defaultView||Ne.parentWindow:window,Ze?(rt=l.relatedTarget||l.toElement,Ze=ge,rt=rt?Zr(rt):null,rt!==null&&(pn=Li(rt),rt!==pn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Ze=null,rt=ge),Ze!==rt)){if(ot=Af,ze="onMouseLeave",de="onMouseEnter",se="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Cf,ze="onPointerLeave",de="onPointerEnter",se="pointer"),pn=Ze==null?Ne:Ps(Ze),fe=rt==null?Ne:Ps(rt),Ne=new ot(ze,se+"leave",Ze,l,Le),Ne.target=pn,Ne.relatedTarget=fe,ze=null,Zr(Le)===ge&&(ot=new ot(de,se+"enter",rt,l,Le),ot.target=fe,ot.relatedTarget=pn,ze=ot),pn=ze,Ze&&rt)t:{for(ot=Ze,de=rt,se=0,fe=ot;fe;fe=Rs(fe))se++;for(fe=0,ze=de;ze;ze=Rs(ze))fe++;for(;0<se-fe;)ot=Rs(ot),se--;for(;0<fe-se;)de=Rs(de),fe--;for(;se--;){if(ot===de||de!==null&&ot===de.alternate)break t;ot=Rs(ot),de=Rs(de)}ot=null}else ot=null;Ze!==null&&np(Fe,Ne,Ze,ot,!1),rt!==null&&pn!==null&&np(Fe,pn,rt,ot,!0)}}e:{if(Ne=ge?Ps(ge):window,Ze=Ne.nodeName&&Ne.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Ne.type==="file")var ct=Zv;else if(Ff(Ne))if(Of)ct=t_;else{ct=Qv;var mt=Jv}else(Ze=Ne.nodeName)&&Ze.toLowerCase()==="input"&&(Ne.type==="checkbox"||Ne.type==="radio")&&(ct=e_);if(ct&&(ct=ct(n,ge))){Uf(Fe,ct,l,Le);break e}mt&&mt(n,Ne,ge),n==="focusout"&&(mt=Ne._wrapperState)&&mt.controlled&&Ne.type==="number"&&Je(Ne,"number",Ne.value)}switch(mt=ge?Ps(ge):window,n){case"focusin":(Ff(mt)||mt.contentEditable==="true")&&(Ts=mt,Jc=ge,Do=null);break;case"focusout":Do=Jc=Ts=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Xf(Fe,l,Le);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Xf(Fe,l,Le)}var gt;if(qc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bs?Df(n,l)&&(St="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(St="onCompositionStart");St&&(Pf&&l.locale!=="ko"&&(bs||St!=="onCompositionStart"?St==="onCompositionEnd"&&bs&&(gt=bf()):(yr=Le,Gc="value"in yr?yr.value:yr.textContent,bs=!0)),mt=Ga(ge,St),0<mt.length&&(St=new Rf(St,n,null,l,Le),Fe.push({event:St,listeners:mt}),gt?St.data=gt:(gt=If(l),gt!==null&&(St.data=gt)))),(gt=$v?Yv(n,l):qv(n,l))&&(ge=Ga(ge,"onBeforeInput"),0<ge.length&&(Le=new Rf("onBeforeInput","beforeinput",null,l,Le),Fe.push({event:Le,listeners:ge}),Le.data=gt))}ep(Fe,s)})}function Uo(n,s,l){return{instance:n,listener:s,currentTarget:l}}function Ga(n,s){for(var l=s+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=De(n,l),_!=null&&u.unshift(Uo(n,_,p)),_=De(n,s),_!=null&&u.push(Uo(n,_,p))),n=n.return}return u}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,s,l,u,p){for(var _=s._reactName,N=[];l!==null&&l!==u;){var H=l,te=H.alternate,ge=H.stateNode;if(te!==null&&te===u)break;H.tag===5&&ge!==null&&(H=ge,p?(te=De(l,_),te!=null&&N.unshift(Uo(l,te,H))):p||(te=De(l,_),te!=null&&N.push(Uo(l,te,H)))),l=l.return}N.length!==0&&n.push({event:s,listeners:N})}var l_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(l_,`
`).replace(c_,"")}function Va(n,s,l){if(s=ip(s),ip(n)!==s&&l)throw Error(t(425))}function Wa(){}var su=null,ou=null;function au(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,u_=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(h_)}:lu;function h_(n){setTimeout(function(){throw n})}function cu(n,s){var l=s,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),To(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);To(s)}function Mr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Cs,Oo="__reactProps$"+Cs,Ki="__reactContainer$"+Cs,uu="__reactEvents$"+Cs,f_="__reactListeners$"+Cs,p_="__reactHandles$"+Cs;function Zr(n){var s=n[Ui];if(s)return s;for(var l=n.parentNode;l;){if(s=l[Ki]||l[Ui]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=sp(n);n!==null;){if(l=n[Ui])return l;n=sp(n)}return s}n=l,l=n.parentNode}return null}function ko(n){return n=n[Ui]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[Oo]||null}var du=[],Ns=-1;function Er(n){return{current:n}}function Qt(n){0>Ns||(n.current=du[Ns],du[Ns]=null,Ns--)}function jt(n,s){Ns++,du[Ns]=n.current,n.current=s}var wr={},In=Er(wr),$n=Er(!1),Jr=wr;function Ls(n,s){var l=n.type.contextTypes;if(!l)return wr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(n){return n=n.childContextTypes,n!=null}function $a(){Qt($n),Qt(In)}function op(n,s,l){if(In.current!==wr)throw Error(t(168));jt(In,s),jt($n,l)}function ap(n,s,l){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,me(n)||"Unknown",p));return j({},l,u)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,Jr=In.current,jt(In,n),jt($n,$n.current),!0}function lp(n,s,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=ap(n,s,Jr),u.__reactInternalMemoizedMergedChildContext=n,Qt($n),Qt(In),jt(In,n)):Qt($n),jt($n,l)}var Zi=null,qa=!1,hu=!1;function cp(n){Zi===null?Zi=[n]:Zi.push(n)}function m_(n){qa=!0,cp(n)}function br(){if(!hu&&Zi!==null){hu=!0;var n=0,s=lt;try{var l=Zi;for(lt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}Zi=null,qa=!1}catch(p){throw Zi!==null&&(Zi=Zi.slice(n+1)),yo(Mo,br),p}finally{lt=s,hu=!1}}return null}var Ds=[],Is=0,ja=null,Ka=0,di=[],hi=0,Qr=null,Ji=1,Qi="";function es(n,s){Ds[Is++]=Ka,Ds[Is++]=ja,ja=n,Ka=s}function up(n,s,l){di[hi++]=Ji,di[hi++]=Qi,di[hi++]=Qr,Qr=n;var u=Ji;n=Qi;var p=32-le(u)-1;u&=~(1<<p),l+=1;var _=32-le(s)+p;if(30<_){var N=p-p%5;_=(u&(1<<N)-1).toString(32),u>>=N,p-=N,Ji=1<<32-le(s)+p|l<<p|u,Qi=_+n}else Ji=1<<_|l<<p|u,Qi=n}function fu(n){n.return!==null&&(es(n,1),up(n,1,0))}function pu(n){for(;n===ja;)ja=Ds[--Is],Ds[Is]=null,Ka=Ds[--Is],Ds[Is]=null;for(;n===Qr;)Qr=di[--hi],di[hi]=null,Qi=di[--hi],di[hi]=null,Ji=di[--hi],di[hi]=null}var ii=null,ri=null,rn=!1,Mi=null;function dp(n,s){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function hp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,ii=n,ri=Mr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,ii=n,ri=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Qr!==null?{id:Ji,overflow:Qi}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,ii=n,ri=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(rn){var s=ri;if(s){var l=s;if(!hp(n,s)){if(mu(n))throw Error(t(418));s=Mr(l.nextSibling);var u=ii;s&&hp(n,s)?dp(u,l):(n.flags=n.flags&-4097|2,rn=!1,ii=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,ii=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Za(n){if(n!==ii)return!1;if(!rn)return fp(n),rn=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!au(n.type,n.memoizedProps)),s&&(s=ri)){if(mu(n))throw pp(),Error(t(418));for(;s;)dp(n,s),s=Mr(s.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){ri=Mr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}ri=null}}else ri=ii?Mr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=ri;n;)n=Mr(n.nextSibling)}function Fs(){ri=ii=null,rn=!1}function vu(n){Mi===null?Mi=[n]:Mi.push(n)}var g_=w.ReactCurrentBatchConfig;function Bo(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(N){var H=p.refs;N===null?delete H[_]:H[_]=N},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ja(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function mp(n){var s=n._init;return s(n._payload)}function gp(n){function s(de,se){if(n){var fe=de.deletions;fe===null?(de.deletions=[se],de.flags|=16):fe.push(se)}}function l(de,se){if(!n)return null;for(;se!==null;)s(de,se),se=se.sibling;return null}function u(de,se){for(de=new Map;se!==null;)se.key!==null?de.set(se.key,se):de.set(se.index,se),se=se.sibling;return de}function p(de,se){return de=Dr(de,se),de.index=0,de.sibling=null,de}function _(de,se,fe){return de.index=fe,n?(fe=de.alternate,fe!==null?(fe=fe.index,fe<se?(de.flags|=2,se):fe):(de.flags|=2,se)):(de.flags|=1048576,se)}function N(de){return n&&de.alternate===null&&(de.flags|=2),de}function H(de,se,fe,ze){return se===null||se.tag!==6?(se=ld(fe,de.mode,ze),se.return=de,se):(se=p(se,fe),se.return=de,se)}function te(de,se,fe,ze){var ct=fe.type;return ct===M?Le(de,se,fe.props.children,ze,fe.key):se!==null&&(se.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===oe&&mp(ct)===se.type)?(ze=p(se,fe.props),ze.ref=Bo(de,se,fe),ze.return=de,ze):(ze=Ml(fe.type,fe.key,fe.props,null,de.mode,ze),ze.ref=Bo(de,se,fe),ze.return=de,ze)}function ge(de,se,fe,ze){return se===null||se.tag!==4||se.stateNode.containerInfo!==fe.containerInfo||se.stateNode.implementation!==fe.implementation?(se=cd(fe,de.mode,ze),se.return=de,se):(se=p(se,fe.children||[]),se.return=de,se)}function Le(de,se,fe,ze,ct){return se===null||se.tag!==7?(se=ls(fe,de.mode,ze,ct),se.return=de,se):(se=p(se,fe),se.return=de,se)}function Fe(de,se,fe){if(typeof se=="string"&&se!==""||typeof se=="number")return se=ld(""+se,de.mode,fe),se.return=de,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case P:return fe=Ml(se.type,se.key,se.props,null,de.mode,fe),fe.ref=Bo(de,null,se),fe.return=de,fe;case C:return se=cd(se,de.mode,fe),se.return=de,se;case oe:var ze=se._init;return Fe(de,ze(se._payload),fe)}if(Ye(se)||Z(se))return se=ls(se,de.mode,fe,null),se.return=de,se;Ja(de,se)}return null}function Ne(de,se,fe,ze){var ct=se!==null?se.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ct!==null?null:H(de,se,""+fe,ze);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:return fe.key===ct?te(de,se,fe,ze):null;case C:return fe.key===ct?ge(de,se,fe,ze):null;case oe:return ct=fe._init,Ne(de,se,ct(fe._payload),ze)}if(Ye(fe)||Z(fe))return ct!==null?null:Le(de,se,fe,ze,null);Ja(de,fe)}return null}function Ze(de,se,fe,ze,ct){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return de=de.get(fe)||null,H(se,de,""+ze,ct);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case P:return de=de.get(ze.key===null?fe:ze.key)||null,te(se,de,ze,ct);case C:return de=de.get(ze.key===null?fe:ze.key)||null,ge(se,de,ze,ct);case oe:var mt=ze._init;return Ze(de,se,fe,mt(ze._payload),ct)}if(Ye(ze)||Z(ze))return de=de.get(fe)||null,Le(se,de,ze,ct,null);Ja(se,ze)}return null}function rt(de,se,fe,ze){for(var ct=null,mt=null,gt=se,St=se=0,Rn=null;gt!==null&&St<fe.length;St++){gt.index>St?(Rn=gt,gt=null):Rn=gt.sibling;var Bt=Ne(de,gt,fe[St],ze);if(Bt===null){gt===null&&(gt=Rn);break}n&&gt&&Bt.alternate===null&&s(de,gt),se=_(Bt,se,St),mt===null?ct=Bt:mt.sibling=Bt,mt=Bt,gt=Rn}if(St===fe.length)return l(de,gt),rn&&es(de,St),ct;if(gt===null){for(;St<fe.length;St++)gt=Fe(de,fe[St],ze),gt!==null&&(se=_(gt,se,St),mt===null?ct=gt:mt.sibling=gt,mt=gt);return rn&&es(de,St),ct}for(gt=u(de,gt);St<fe.length;St++)Rn=Ze(gt,de,St,fe[St],ze),Rn!==null&&(n&&Rn.alternate!==null&&gt.delete(Rn.key===null?St:Rn.key),se=_(Rn,se,St),mt===null?ct=Rn:mt.sibling=Rn,mt=Rn);return n&&gt.forEach(function(Ir){return s(de,Ir)}),rn&&es(de,St),ct}function ot(de,se,fe,ze){var ct=Z(fe);if(typeof ct!="function")throw Error(t(150));if(fe=ct.call(fe),fe==null)throw Error(t(151));for(var mt=ct=null,gt=se,St=se=0,Rn=null,Bt=fe.next();gt!==null&&!Bt.done;St++,Bt=fe.next()){gt.index>St?(Rn=gt,gt=null):Rn=gt.sibling;var Ir=Ne(de,gt,Bt.value,ze);if(Ir===null){gt===null&&(gt=Rn);break}n&&gt&&Ir.alternate===null&&s(de,gt),se=_(Ir,se,St),mt===null?ct=Ir:mt.sibling=Ir,mt=Ir,gt=Rn}if(Bt.done)return l(de,gt),rn&&es(de,St),ct;if(gt===null){for(;!Bt.done;St++,Bt=fe.next())Bt=Fe(de,Bt.value,ze),Bt!==null&&(se=_(Bt,se,St),mt===null?ct=Bt:mt.sibling=Bt,mt=Bt);return rn&&es(de,St),ct}for(gt=u(de,gt);!Bt.done;St++,Bt=fe.next())Bt=Ze(gt,de,St,Bt.value,ze),Bt!==null&&(n&&Bt.alternate!==null&&gt.delete(Bt.key===null?St:Bt.key),se=_(Bt,se,St),mt===null?ct=Bt:mt.sibling=Bt,mt=Bt);return n&&gt.forEach(function(j_){return s(de,j_)}),rn&&es(de,St),ct}function pn(de,se,fe,ze){if(typeof fe=="object"&&fe!==null&&fe.type===M&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:e:{for(var ct=fe.key,mt=se;mt!==null;){if(mt.key===ct){if(ct=fe.type,ct===M){if(mt.tag===7){l(de,mt.sibling),se=p(mt,fe.props.children),se.return=de,de=se;break e}}else if(mt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===oe&&mp(ct)===mt.type){l(de,mt.sibling),se=p(mt,fe.props),se.ref=Bo(de,mt,fe),se.return=de,de=se;break e}l(de,mt);break}else s(de,mt);mt=mt.sibling}fe.type===M?(se=ls(fe.props.children,de.mode,ze,fe.key),se.return=de,de=se):(ze=Ml(fe.type,fe.key,fe.props,null,de.mode,ze),ze.ref=Bo(de,se,fe),ze.return=de,de=ze)}return N(de);case C:e:{for(mt=fe.key;se!==null;){if(se.key===mt)if(se.tag===4&&se.stateNode.containerInfo===fe.containerInfo&&se.stateNode.implementation===fe.implementation){l(de,se.sibling),se=p(se,fe.children||[]),se.return=de,de=se;break e}else{l(de,se);break}else s(de,se);se=se.sibling}se=cd(fe,de.mode,ze),se.return=de,de=se}return N(de);case oe:return mt=fe._init,pn(de,se,mt(fe._payload),ze)}if(Ye(fe))return rt(de,se,fe,ze);if(Z(fe))return ot(de,se,fe,ze);Ja(de,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,se!==null&&se.tag===6?(l(de,se.sibling),se=p(se,fe),se.return=de,de=se):(l(de,se),se=ld(fe,de.mode,ze),se.return=de,de=se),N(de)):l(de,se)}return pn}var Us=gp(!0),vp=gp(!1),Qa=Er(null),el=null,Os=null,_u=null;function xu(){_u=Os=el=null}function yu(n){var s=Qa.current;Qt(Qa),n._currentValue=s}function Su(n,s,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===l)break;n=n.return}}function ks(n,s){el=n,_u=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(qn=!0),n.firstContext=null)}function fi(n){var s=n._currentValue;if(_u!==n)if(n={context:n,memoizedValue:s,next:null},Os===null){if(el===null)throw Error(t(308));Os=n,el.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return s}var ts=null;function Mu(n){ts===null?ts=[n]:ts.push(n)}function _p(n,s,l,u){var p=s.interleaved;return p===null?(l.next=l,Mu(s)):(l.next=p.next,p.next=l),s.interleaved=l,er(n,u)}function er(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Tr=!1;function Eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,er(n,l)}return p=u.interleaved,p===null?(s.next=s,Mu(u)):(s.next=p.next,p.next=s),u.interleaved=s,er(n,l)}function tl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,l|=u,s.lanes=l,_n(n,l)}}function yp(n,s){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var N={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=N:_=_.next=N,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function nl(n,s,l,u){var p=n.updateQueue;Tr=!1;var _=p.firstBaseUpdate,N=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var te=H,ge=te.next;te.next=null,N===null?_=ge:N.next=ge,N=te;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,H=Le.lastBaseUpdate,H!==N&&(H===null?Le.firstBaseUpdate=ge:H.next=ge,Le.lastBaseUpdate=te))}if(_!==null){var Fe=p.baseState;N=0,Le=ge=te=null,H=_;do{var Ne=H.lane,Ze=H.eventTime;if((u&Ne)===Ne){Le!==null&&(Le=Le.next={eventTime:Ze,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var rt=n,ot=H;switch(Ne=s,Ze=l,ot.tag){case 1:if(rt=ot.payload,typeof rt=="function"){Fe=rt.call(Ze,Fe,Ne);break e}Fe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=ot.payload,Ne=typeof rt=="function"?rt.call(Ze,Fe,Ne):rt,Ne==null)break e;Fe=j({},Fe,Ne);break e;case 2:Tr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ne=p.effects,Ne===null?p.effects=[H]:Ne.push(H))}else Ze={eventTime:Ze,lane:Ne,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Le===null?(ge=Le=Ze,te=Fe):Le=Le.next=Ze,N|=Ne;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ne=H,H=Ne.next,Ne.next=null,p.lastBaseUpdate=Ne,p.shared.pending=null}}while(!0);if(Le===null&&(te=Fe),p.baseState=te,p.firstBaseUpdate=ge,p.lastBaseUpdate=Le,s=p.shared.interleaved,s!==null){p=s;do N|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);rs|=N,n.lanes=N,n.memoizedState=Fe}}function Sp(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var zo={},Oi=Er(zo),Ho=Er(zo),Go=Er(zo);function ns(n){if(n===zo)throw Error(t(174));return n}function wu(n,s){switch(jt(Go,s),jt(Ho,n),jt(Oi,zo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Lt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Lt(s,n)}Qt(Oi),jt(Oi,s)}function Bs(){Qt(Oi),Qt(Ho),Qt(Go)}function Mp(n){ns(Go.current);var s=ns(Oi.current),l=Lt(s,n.type);s!==l&&(jt(Ho,n),jt(Oi,l))}function bu(n){Ho.current===n&&(Qt(Oi),Qt(Ho))}var on=Er(0);function il(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Tu=[];function Au(){for(var n=0;n<Tu.length;n++)Tu[n]._workInProgressVersionPrimary=null;Tu.length=0}var rl=w.ReactCurrentDispatcher,Ru=w.ReactCurrentBatchConfig,is=0,an=null,yn=null,Tn=null,sl=!1,Vo=!1,Wo=0,v_=0;function Fn(){throw Error(t(321))}function Cu(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!Si(n[l],s[l]))return!1;return!0}function Pu(n,s,l,u,p,_){if(is=_,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,rl.current=n===null||n.memoizedState===null?S_:M_,n=l(u,p),Vo){_=0;do{if(Vo=!1,Wo=0,25<=_)throw Error(t(301));_+=1,Tn=yn=null,s.updateQueue=null,rl.current=E_,n=l(u,p)}while(Vo)}if(rl.current=ll,s=yn!==null&&yn.next!==null,is=0,Tn=yn=an=null,sl=!1,s)throw Error(t(300));return n}function Nu(){var n=Wo!==0;return Wo=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?an.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function pi(){if(yn===null){var n=an.alternate;n=n!==null?n.memoizedState:null}else n=yn.next;var s=Tn===null?an.memoizedState:Tn.next;if(s!==null)Tn=s,yn=n;else{if(n===null)throw Error(t(310));yn=n,n={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},Tn===null?an.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function Xo(n,s){return typeof s=="function"?s(n):s}function Lu(n){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=yn,p=u.baseQueue,_=l.pending;if(_!==null){if(p!==null){var N=p.next;p.next=_.next,_.next=N}u.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,u=u.baseState;var H=N=null,te=null,ge=_;do{var Le=ge.lane;if((is&Le)===Le)te!==null&&(te=te.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),u=ge.hasEagerState?ge.eagerState:n(u,ge.action);else{var Fe={lane:Le,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};te===null?(H=te=Fe,N=u):te=te.next=Fe,an.lanes|=Le,rs|=Le}ge=ge.next}while(ge!==null&&ge!==_);te===null?N=u:te.next=H,Si(u,s.memoizedState)||(qn=!0),s.memoizedState=u,s.baseState=N,s.baseQueue=te,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do _=p.lane,an.lanes|=_,rs|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Du(n){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var N=p=p.next;do _=n(_,N.action),N=N.next;while(N!==p);Si(_,s.memoizedState)||(qn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,u]}function Ep(){}function wp(n,s){var l=an,u=pi(),p=s(),_=!Si(u.memoizedState,p);if(_&&(u.memoizedState=p,qn=!0),u=u.queue,Iu(Ap.bind(null,l,u,n),[n]),u.getSnapshot!==s||_||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,$o(9,Tp.bind(null,l,u,p,s),void 0,null),An===null)throw Error(t(349));(is&30)!==0||bp(l,s,p)}return p}function bp(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=an.updateQueue,s===null?(s={lastEffect:null,stores:null},an.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function Tp(n,s,l,u){s.value=l,s.getSnapshot=u,Rp(s)&&Cp(n)}function Ap(n,s,l){return l(function(){Rp(s)&&Cp(n)})}function Rp(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!Si(n,l)}catch{return!0}}function Cp(n){var s=er(n,1);s!==null&&Ti(s,n,1,-1)}function Pp(n){var s=ki();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:n},s.queue=n,n=n.dispatch=y_.bind(null,an,n),[s.memoizedState,n]}function $o(n,s,l,u){return n={tag:n,create:s,destroy:l,deps:u,next:null},s=an.updateQueue,s===null?(s={lastEffect:null,stores:null},an.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,s.lastEffect=n)),n}function Np(){return pi().memoizedState}function ol(n,s,l,u){var p=ki();an.flags|=n,p.memoizedState=$o(1|s,l,void 0,u===void 0?null:u)}function al(n,s,l,u){var p=pi();u=u===void 0?null:u;var _=void 0;if(yn!==null){var N=yn.memoizedState;if(_=N.destroy,u!==null&&Cu(u,N.deps)){p.memoizedState=$o(s,l,_,u);return}}an.flags|=n,p.memoizedState=$o(1|s,l,_,u)}function Lp(n,s){return ol(8390656,8,n,s)}function Iu(n,s){return al(2048,8,n,s)}function Dp(n,s){return al(4,2,n,s)}function Ip(n,s){return al(4,4,n,s)}function Fp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Up(n,s,l){return l=l!=null?l.concat([n]):null,al(4,4,Fp.bind(null,s,n),l)}function Fu(){}function Op(n,s){var l=pi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Cu(s,u[1])?u[0]:(l.memoizedState=[n,s],n)}function kp(n,s){var l=pi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Cu(s,u[1])?u[0]:(n=n(),l.memoizedState=[n,s],n)}function Bp(n,s,l){return(is&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=l):(Si(l,s)||(l=$t(),an.lanes|=l,rs|=l,n.baseState=!0),s)}function __(n,s){var l=lt;lt=l!==0&&4>l?l:4,n(!0);var u=Ru.transition;Ru.transition={};try{n(!1),s()}finally{lt=l,Ru.transition=u}}function zp(){return pi().memoizedState}function x_(n,s,l){var u=Nr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Hp(n))Gp(s,l);else if(l=_p(n,s,l,u),l!==null){var p=Gn();Ti(l,n,u,p),Vp(l,s,u)}}function y_(n,s,l){var u=Nr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Gp(s,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var N=s.lastRenderedState,H=_(N,l);if(p.hasEagerState=!0,p.eagerState=H,Si(H,N)){var te=s.interleaved;te===null?(p.next=p,Mu(s)):(p.next=te.next,te.next=p),s.interleaved=p;return}}catch{}finally{}l=_p(n,s,p,u),l!==null&&(p=Gn(),Ti(l,n,u,p),Vp(l,s,u))}}function Hp(n){var s=n.alternate;return n===an||s!==null&&s===an}function Gp(n,s){Vo=sl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Vp(n,s,l){if((l&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,l|=u,s.lanes=l,_n(n,l)}}var ll={readContext:fi,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},S_={readContext:fi,useCallback:function(n,s){return ki().memoizedState=[n,s===void 0?null:s],n},useContext:fi,useEffect:Lp,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,ol(4194308,4,Fp.bind(null,s,n),l)},useLayoutEffect:function(n,s){return ol(4194308,4,n,s)},useInsertionEffect:function(n,s){return ol(4,2,n,s)},useMemo:function(n,s){var l=ki();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var u=ki();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=x_.bind(null,an,n),[u.memoizedState,n]},useRef:function(n){var s=ki();return n={current:n},s.memoizedState=n},useState:Pp,useDebugValue:Fu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=Pp(!1),s=n[0];return n=__.bind(null,n[1]),ki().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var u=an,p=ki();if(rn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),An===null)throw Error(t(349));(is&30)!==0||bp(u,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Lp(Ap.bind(null,u,_,n),[n]),u.flags|=2048,$o(9,Tp.bind(null,u,_,l,s),void 0,null),l},useId:function(){var n=ki(),s=An.identifierPrefix;if(rn){var l=Qi,u=Ji;l=(u&~(1<<32-le(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=Wo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=v_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},M_={readContext:fi,useCallback:Op,useContext:fi,useEffect:Iu,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Lu,useRef:Np,useState:function(){return Lu(Xo)},useDebugValue:Fu,useDeferredValue:function(n){var s=pi();return Bp(s,yn.memoizedState,n)},useTransition:function(){var n=Lu(Xo)[0],s=pi().memoizedState;return[n,s]},useMutableSource:Ep,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1},E_={readContext:fi,useCallback:Op,useContext:fi,useEffect:Iu,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Du,useRef:Np,useState:function(){return Du(Xo)},useDebugValue:Fu,useDeferredValue:function(n){var s=pi();return yn===null?s.memoizedState=n:Bp(s,yn.memoizedState,n)},useTransition:function(){var n=Du(Xo)[0],s=pi().memoizedState;return[n,s]},useMutableSource:Ep,useSyncExternalStore:wp,useId:zp,unstable_isNewReconciler:!1};function Ei(n,s){if(n&&n.defaultProps){s=j({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Uu(n,s,l,u){s=n.memoizedState,l=l(u,s),l=l==null?s:j({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var cl={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var u=Gn(),p=Nr(n),_=tr(u,p);_.payload=s,l!=null&&(_.callback=l),s=Ar(n,_,p),s!==null&&(Ti(s,n,p,u),tl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var u=Gn(),p=Nr(n),_=tr(u,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Ar(n,_,p),s!==null&&(Ti(s,n,p,u),tl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Gn(),u=Nr(n),p=tr(l,u);p.tag=2,s!=null&&(p.callback=s),s=Ar(n,p,u),s!==null&&(Ti(s,n,u,l),tl(s,n,u))}};function Wp(n,s,l,u,p,_,N){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,N):s.prototype&&s.prototype.isPureReactComponent?!Lo(l,u)||!Lo(p,_):!0}function Xp(n,s,l){var u=!1,p=wr,_=s.contextType;return typeof _=="object"&&_!==null?_=fi(_):(p=Yn(s)?Jr:In.current,u=s.contextTypes,_=(u=u!=null)?Ls(n,p):wr),s=new s(l,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cl,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),s}function $p(n,s,l,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==n&&cl.enqueueReplaceState(s,s.state,null)}function Ou(n,s,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Eu(n);var _=s.contextType;typeof _=="object"&&_!==null?p.context=fi(_):(_=Yn(s)?Jr:In.current,p.context=Ls(n,_)),p.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Uu(n,s,_,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&cl.enqueueReplaceState(p,p.state,null),nl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,s){try{var l="",u=s;do l+=pe(u),u=u.return;while(u);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:p,digest:null}}function ku(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Bu(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function Yp(n,s,l){l=tr(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){gl||(gl=!0,ed=u),Bu(n,s)},l}function qp(n,s,l){l=tr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;l.payload=function(){return u(p)},l.callback=function(){Bu(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Bu(n,s),typeof u!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var N=s.stack;this.componentDidCatch(s.value,{componentStack:N!==null?N:""})}),l}function jp(n,s,l){var u=n.pingCache;if(u===null){u=n.pingCache=new w_;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(l)||(p.add(l),n=k_.bind(null,n,s,l),s.then(n,n))}function Kp(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Zp(n,s,l,u,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=tr(-1,1),s.tag=2,Ar(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var b_=w.ReactCurrentOwner,qn=!1;function Hn(n,s,l,u){s.child=n===null?vp(s,null,l,u):Us(s,n.child,l,u)}function Jp(n,s,l,u,p){l=l.render;var _=s.ref;return ks(s,p),u=Pu(n,s,l,u,_,p),l=Nu(),n!==null&&!qn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,nr(n,s,p)):(rn&&l&&fu(s),s.flags|=1,Hn(n,s,u,p),s.child)}function Qp(n,s,l,u,p){if(n===null){var _=l.type;return typeof _=="function"&&!ad(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,em(n,s,_,u,p)):(n=Ml(l.type,null,u,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,(n.lanes&p)===0){var N=_.memoizedProps;if(l=l.compare,l=l!==null?l:Lo,l(N,u)&&n.ref===s.ref)return nr(n,s,p)}return s.flags|=1,n=Dr(_,u),n.ref=s.ref,n.return=s,s.child=n}function em(n,s,l,u,p){if(n!==null){var _=n.memoizedProps;if(Lo(_,u)&&n.ref===s.ref)if(qn=!1,s.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(qn=!0);else return s.lanes=n.lanes,nr(n,s,p)}return zu(n,s,l,u,p)}function tm(n,s,l){var u=s.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Gs,si),si|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,jt(Gs,si),si|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:l,jt(Gs,si),si|=u}else _!==null?(u=_.baseLanes|l,s.memoizedState=null):u=l,jt(Gs,si),si|=u;return Hn(n,s,p,l),s.child}function nm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function zu(n,s,l,u,p){var _=Yn(l)?Jr:In.current;return _=Ls(s,_),ks(s,p),l=Pu(n,s,l,u,_,p),u=Nu(),n!==null&&!qn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,nr(n,s,p)):(rn&&u&&fu(s),s.flags|=1,Hn(n,s,l,p),s.child)}function im(n,s,l,u,p){if(Yn(l)){var _=!0;Ya(s)}else _=!1;if(ks(s,p),s.stateNode===null)dl(n,s),Xp(s,l,u),Ou(s,l,u,p),u=!0;else if(n===null){var N=s.stateNode,H=s.memoizedProps;N.props=H;var te=N.context,ge=l.contextType;typeof ge=="object"&&ge!==null?ge=fi(ge):(ge=Yn(l)?Jr:In.current,ge=Ls(s,ge));var Le=l.getDerivedStateFromProps,Fe=typeof Le=="function"||typeof N.getSnapshotBeforeUpdate=="function";Fe||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(H!==u||te!==ge)&&$p(s,N,u,ge),Tr=!1;var Ne=s.memoizedState;N.state=Ne,nl(s,u,N,p),te=s.memoizedState,H!==u||Ne!==te||$n.current||Tr?(typeof Le=="function"&&(Uu(s,l,Le,u),te=s.memoizedState),(H=Tr||Wp(s,l,H,u,Ne,te,ge))?(Fe||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(s.flags|=4194308)):(typeof N.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=te),N.props=u,N.state=te,N.context=ge,u=H):(typeof N.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{N=s.stateNode,xp(n,s),H=s.memoizedProps,ge=s.type===s.elementType?H:Ei(s.type,H),N.props=ge,Fe=s.pendingProps,Ne=N.context,te=l.contextType,typeof te=="object"&&te!==null?te=fi(te):(te=Yn(l)?Jr:In.current,te=Ls(s,te));var Ze=l.getDerivedStateFromProps;(Le=typeof Ze=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(H!==Fe||Ne!==te)&&$p(s,N,u,te),Tr=!1,Ne=s.memoizedState,N.state=Ne,nl(s,u,N,p);var rt=s.memoizedState;H!==Fe||Ne!==rt||$n.current||Tr?(typeof Ze=="function"&&(Uu(s,l,Ze,u),rt=s.memoizedState),(ge=Tr||Wp(s,l,ge,u,Ne,rt,te)||!1)?(Le||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(u,rt,te),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(u,rt,te)),typeof N.componentDidUpdate=="function"&&(s.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof N.componentDidUpdate!="function"||H===n.memoizedProps&&Ne===n.memoizedState||(s.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ne===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=rt),N.props=u,N.state=rt,N.context=te,u=ge):(typeof N.componentDidUpdate!="function"||H===n.memoizedProps&&Ne===n.memoizedState||(s.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ne===n.memoizedState||(s.flags|=1024),u=!1)}return Hu(n,s,l,u,_,p)}function Hu(n,s,l,u,p,_){nm(n,s);var N=(s.flags&128)!==0;if(!u&&!N)return p&&lp(s,l,!1),nr(n,s,_);u=s.stateNode,b_.current=s;var H=N&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&N?(s.child=Us(s,n.child,null,_),s.child=Us(s,null,H,_)):Hn(n,s,H,_),s.memoizedState=u.state,p&&lp(s,l,!0),s.child}function rm(n){var s=n.stateNode;s.pendingContext?op(n,s.pendingContext,s.pendingContext!==s.context):s.context&&op(n,s.context,!1),wu(n,s.containerInfo)}function sm(n,s,l,u,p){return Fs(),vu(p),s.flags|=256,Hn(n,s,l,u),s.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,s,l){var u=s.pendingProps,p=on.current,_=!1,N=(s.flags&128)!==0,H;if((H=N)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),jt(on,p&1),n===null)return gu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(N=u.children,n=u.fallback,_?(u=s.mode,_=s.child,N={mode:"hidden",children:N},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=N):_=El(N,u,0,null),n=ls(n,u,l,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=Vu(l),s.memoizedState=Gu,n):Wu(s,N));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return T_(n,s,N,u,H,p,l);if(_){_=u.fallback,N=s.mode,p=n.child,H=p.sibling;var te={mode:"hidden",children:u.children};return(N&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=te,s.deletions=null):(u=Dr(p,te),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=Dr(H,_):(_=ls(_,N,l,null),_.flags|=2),_.return=s,u.return=s,u.sibling=_,s.child=u,u=_,_=s.child,N=n.child.memoizedState,N=N===null?Vu(l):{baseLanes:N.baseLanes|l,cachePool:null,transitions:N.transitions},_.memoizedState=N,_.childLanes=n.childLanes&~l,s.memoizedState=Gu,u}return _=n.child,n=_.sibling,u=Dr(_,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=u,s.memoizedState=null,u}function Wu(n,s){return s=El({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function ul(n,s,l,u){return u!==null&&vu(u),Us(s,n.child,null,l),n=Wu(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function T_(n,s,l,u,p,_,N){if(l)return s.flags&256?(s.flags&=-257,u=ku(Error(t(422))),ul(n,s,N,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=u.fallback,p=s.mode,u=El({mode:"visible",children:u.children},p,0,null),_=ls(_,p,N,null),_.flags|=2,u.return=s,_.return=s,u.sibling=_,s.child=u,(s.mode&1)!==0&&Us(s,n.child,null,N),s.child.memoizedState=Vu(N),s.memoizedState=Gu,_);if((s.mode&1)===0)return ul(n,s,N,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,_=Error(t(419)),u=ku(_,u,void 0),ul(n,s,N,u)}if(H=(N&n.childLanes)!==0,qn||H){if(u=An,u!==null){switch(N&-N){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|N))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,er(n,p),Ti(u,n,p,-1))}return od(),u=ku(Error(t(421))),ul(n,s,N,u)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=B_.bind(null,n),p._reactRetry=s,null):(n=_.treeContext,ri=Mr(p.nextSibling),ii=s,rn=!0,Mi=null,n!==null&&(di[hi++]=Ji,di[hi++]=Qi,di[hi++]=Qr,Ji=n.id,Qi=n.overflow,Qr=s),s=Wu(s,u.children),s.flags|=4096,s)}function am(n,s,l){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Su(n.return,s,l)}function Xu(n,s,l,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=l,_.tailMode=p)}function lm(n,s,l){var u=s.pendingProps,p=u.revealOrder,_=u.tail;if(Hn(n,s,u.children,l),u=on.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,l,s);else if(n.tag===19)am(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(jt(on,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&il(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Xu(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&il(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Xu(s,!0,l,null,_);break;case"together":Xu(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function dl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function nr(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),rs|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Dr(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Dr(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function A_(n,s,l){switch(s.tag){case 3:rm(s),Fs();break;case 5:Mp(s);break;case 1:Yn(s.type)&&Ya(s);break;case 4:wu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;jt(Qa,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(jt(on,on.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?om(n,s,l):(jt(on,on.current&1),n=nr(n,s,l),n!==null?n.sibling:null);jt(on,on.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(n.flags&128)!==0){if(u)return lm(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),jt(on,on.current),u)break;return null;case 22:case 23:return s.lanes=0,tm(n,s,l)}return nr(n,s,l)}var cm,$u,um,dm;cm=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$u=function(){},um=function(n,s,l,u){var p=n.memoizedProps;if(p!==u){n=s.stateNode,ns(Oi.current);var _=null;switch(l){case"input":p=ae(n,p),u=ae(n,u),_=[];break;case"select":p=j({},p,{value:void 0}),u=j({},u,{value:void 0}),_=[];break;case"textarea":p=xt(n,p),u=xt(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Wa)}be(l,u);var N;l=null;for(ge in p)if(!u.hasOwnProperty(ge)&&p.hasOwnProperty(ge)&&p[ge]!=null)if(ge==="style"){var H=p[ge];for(N in H)H.hasOwnProperty(N)&&(l||(l={}),l[N]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?_||(_=[]):(_=_||[]).push(ge,null));for(ge in u){var te=u[ge];if(H=p!=null?p[ge]:void 0,u.hasOwnProperty(ge)&&te!==H&&(te!=null||H!=null))if(ge==="style")if(H){for(N in H)!H.hasOwnProperty(N)||te&&te.hasOwnProperty(N)||(l||(l={}),l[N]="");for(N in te)te.hasOwnProperty(N)&&H[N]!==te[N]&&(l||(l={}),l[N]=te[N])}else l||(_||(_=[]),_.push(ge,l)),l=te;else ge==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,H=H?H.__html:void 0,te!=null&&H!==te&&(_=_||[]).push(ge,te)):ge==="children"?typeof te!="string"&&typeof te!="number"||(_=_||[]).push(ge,""+te):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(te!=null&&ge==="onScroll"&&Jt("scroll",n),_||H===te||(_=[])):(_=_||[]).push(ge,te))}l&&(_=_||[]).push("style",l);var ge=_;(s.updateQueue=ge)&&(s.flags|=4)}},dm=function(n,s,l,u){l!==u&&(s.flags|=4)};function Yo(n,s){if(!rn)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Un(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,s}function R_(n,s,l){var u=s.pendingProps;switch(pu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(s),null;case 1:return Yn(s.type)&&$a(),Un(s),null;case 3:return u=s.stateNode,Bs(),Qt($n),Qt(In),Au(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Za(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mi!==null&&(id(Mi),Mi=null))),$u(n,s),Un(s),null;case 5:bu(s);var p=ns(Go.current);if(l=s.type,n!==null&&s.stateNode!=null)um(n,s,l,u,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Un(s),null}if(n=ns(Oi.current),Za(s)){u=s.stateNode,l=s.type;var _=s.memoizedProps;switch(u[Ui]=s,u[Oo]=_,n=(s.mode&1)!==0,l){case"dialog":Jt("cancel",u),Jt("close",u);break;case"iframe":case"object":case"embed":Jt("load",u);break;case"video":case"audio":for(p=0;p<Io.length;p++)Jt(Io[p],u);break;case"source":Jt("error",u);break;case"img":case"image":case"link":Jt("error",u),Jt("load",u);break;case"details":Jt("toggle",u);break;case"input":xe(u,_),Jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Jt("invalid",u);break;case"textarea":wt(u,_),Jt("invalid",u)}be(l,_),p=null;for(var N in _)if(_.hasOwnProperty(N)){var H=_[N];N==="children"?typeof H=="string"?u.textContent!==H&&(_.suppressHydrationWarning!==!0&&Va(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&Va(u.textContent,H,n),p=["children",""+H]):o.hasOwnProperty(N)&&H!=null&&N==="onScroll"&&Jt("scroll",u)}switch(l){case"input":we(u),Ae(u,_,!0);break;case"textarea":we(u),Wt(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=Wa)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{N=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=N.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=N.createElement(l,{is:u.is}):(n=N.createElement(l),l==="select"&&(N=n,u.multiple?N.multiple=!0:u.size&&(N.size=u.size))):n=N.createElementNS(n,l),n[Ui]=s,n[Oo]=u,cm(n,s,!1,!1),s.stateNode=n;e:{switch(N=He(l,u),l){case"dialog":Jt("cancel",n),Jt("close",n),p=u;break;case"iframe":case"object":case"embed":Jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Io.length;p++)Jt(Io[p],n);p=u;break;case"source":Jt("error",n),p=u;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),p=u;break;case"details":Jt("toggle",n),p=u;break;case"input":xe(n,u),p=ae(n,u),Jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=j({},u,{value:void 0}),Jt("invalid",n);break;case"textarea":wt(n,u),p=xt(n,u),Jt("invalid",n);break;default:p=u}be(l,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var te=H[_];_==="style"?ue(n,te):_==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&Xt(n,te)):_==="children"?typeof te=="string"?(l!=="textarea"||te!=="")&&st(n,te):typeof te=="number"&&st(n,""+te):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?te!=null&&_==="onScroll"&&Jt("scroll",n):te!=null&&b(n,_,te,N))}switch(l){case"input":we(n),Ae(n,u,!1);break;case"textarea":we(n),Wt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+re(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?ut(n,!!u.multiple,_,!1):u.defaultValue!=null&&ut(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Wa)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Un(s),null;case 6:if(n&&s.stateNode!=null)dm(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=ns(Go.current),ns(Oi.current),Za(s)){if(u=s.stateNode,l=s.memoizedProps,u[Ui]=s,(_=u.nodeValue!==l)&&(n=ii,n!==null))switch(n.tag){case 3:Va(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(u.nodeValue,l,(n.mode&1)!==0)}_&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ui]=s,s.stateNode=u}return Un(s),null;case 13:if(Qt(on),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&ri!==null&&(s.mode&1)!==0&&(s.flags&128)===0)pp(),Fs(),s.flags|=98560,_=!1;else if(_=Za(s),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ui]=s}else Fs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Un(s),_=!1}else Mi!==null&&(id(Mi),Mi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(on.current&1)!==0?Sn===0&&(Sn=3):od())),s.updateQueue!==null&&(s.flags|=4),Un(s),null);case 4:return Bs(),$u(n,s),n===null&&Fo(s.stateNode.containerInfo),Un(s),null;case 10:return yu(s.type._context),Un(s),null;case 17:return Yn(s.type)&&$a(),Un(s),null;case 19:if(Qt(on),_=s.memoizedState,_===null)return Un(s),null;if(u=(s.flags&128)!==0,N=_.rendering,N===null)if(u)Yo(_,!1);else{if(Sn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(N=il(n),N!==null){for(s.flags|=128,Yo(_,!1),u=N.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)_=l,n=u,_.flags&=14680066,N=_.alternate,N===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=N.childLanes,_.lanes=N.lanes,_.child=N.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=N.memoizedProps,_.memoizedState=N.memoizedState,_.updateQueue=N.updateQueue,_.type=N.type,n=N.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return jt(on,on.current&1|2),s.child}n=n.sibling}_.tail!==null&&tn()>Vs&&(s.flags|=128,u=!0,Yo(_,!1),s.lanes=4194304)}else{if(!u)if(n=il(N),n!==null){if(s.flags|=128,u=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Yo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!N.alternate&&!rn)return Un(s),null}else 2*tn()-_.renderingStartTime>Vs&&l!==1073741824&&(s.flags|=128,u=!0,Yo(_,!1),s.lanes=4194304);_.isBackwards?(N.sibling=s.child,s.child=N):(l=_.last,l!==null?l.sibling=N:s.child=N,_.last=N)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=tn(),s.sibling=null,l=on.current,jt(on,u?l&1|2:l&1),s):(Un(s),null);case 22:case 23:return sd(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(si&1073741824)!==0&&(Un(s),s.subtreeFlags&6&&(s.flags|=8192)):Un(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function C_(n,s){switch(pu(s),s.tag){case 1:return Yn(s.type)&&$a(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Bs(),Qt($n),Qt(In),Au(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return bu(s),null;case 13:if(Qt(on),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Fs()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Qt(on),null;case 4:return Bs(),null;case 10:return yu(s.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var hl=!1,On=!1,P_=typeof WeakSet=="function"?WeakSet:Set,et=null;function Hs(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){dn(n,s,u)}else l.current=null}function Yu(n,s,l){try{l()}catch(u){dn(n,s,u)}}var hm=!1;function N_(n,s){if(su=La,n=Wf(),Zc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var N=0,H=-1,te=-1,ge=0,Le=0,Fe=n,Ne=null;t:for(;;){for(var Ze;Fe!==l||p!==0&&Fe.nodeType!==3||(H=N+p),Fe!==_||u!==0&&Fe.nodeType!==3||(te=N+u),Fe.nodeType===3&&(N+=Fe.nodeValue.length),(Ze=Fe.firstChild)!==null;)Ne=Fe,Fe=Ze;for(;;){if(Fe===n)break t;if(Ne===l&&++ge===p&&(H=N),Ne===_&&++Le===u&&(te=N),(Ze=Fe.nextSibling)!==null)break;Fe=Ne,Ne=Fe.parentNode}Fe=Ze}l=H===-1||te===-1?null:{start:H,end:te}}else l=null}l=l||{start:0,end:0}}else l=null;for(ou={focusedElem:n,selectionRange:l},La=!1,et=s;et!==null;)if(s=et,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,et=n;else for(;et!==null;){s=et;try{var rt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var ot=rt.memoizedProps,pn=rt.memoizedState,de=s.stateNode,se=de.getSnapshotBeforeUpdate(s.elementType===s.type?ot:Ei(s.type,ot),pn);de.__reactInternalSnapshotBeforeUpdate=se}break;case 3:var fe=s.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){dn(s,s.return,ze)}if(n=s.sibling,n!==null){n.return=s.return,et=n;break}et=s.return}return rt=hm,hm=!1,rt}function qo(n,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Yu(s,l,_)}p=p.next}while(p!==u)}}function fl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function qu(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function fm(n){var s=n.alternate;s!==null&&(n.alternate=null,fm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ui],delete s[Oo],delete s[uu],delete s[f_],delete s[p_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ju(n,s,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Wa));else if(u!==4&&(n=n.child,n!==null))for(ju(n,s,l),n=n.sibling;n!==null;)ju(n,s,l),n=n.sibling}function Ku(n,s,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ku(n,s,l),n=n.sibling;n!==null;)Ku(n,s,l),n=n.sibling}var Pn=null,wi=!1;function Rr(n,s,l){for(l=l.child;l!==null;)gm(n,s,l),l=l.sibling}function gm(n,s,l){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(Q,l)}catch{}switch(l.tag){case 5:On||Hs(l,s);case 6:var u=Pn,p=wi;Pn=null,Rr(n,s,l),Pn=u,wi=p,Pn!==null&&(wi?(n=Pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Pn.removeChild(l.stateNode));break;case 18:Pn!==null&&(wi?(n=Pn,l=l.stateNode,n.nodeType===8?cu(n.parentNode,l):n.nodeType===1&&cu(n,l),To(n)):cu(Pn,l.stateNode));break;case 4:u=Pn,p=wi,Pn=l.stateNode.containerInfo,wi=!0,Rr(n,s,l),Pn=u,wi=p;break;case 0:case 11:case 14:case 15:if(!On&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,N=_.destroy;_=_.tag,N!==void 0&&((_&2)!==0||(_&4)!==0)&&Yu(l,s,N),p=p.next}while(p!==u)}Rr(n,s,l);break;case 1:if(!On&&(Hs(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(H){dn(l,s,H)}Rr(n,s,l);break;case 21:Rr(n,s,l);break;case 22:l.mode&1?(On=(u=On)||l.memoizedState!==null,Rr(n,s,l),On=u):Rr(n,s,l);break;default:Rr(n,s,l)}}function vm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new P_),s.forEach(function(u){var p=z_.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function bi(n,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var _=n,N=s,H=N;e:for(;H!==null;){switch(H.tag){case 5:Pn=H.stateNode,wi=!1;break e;case 3:Pn=H.stateNode.containerInfo,wi=!0;break e;case 4:Pn=H.stateNode.containerInfo,wi=!0;break e}H=H.return}if(Pn===null)throw Error(t(160));gm(_,N,p),Pn=null,wi=!1;var te=p.alternate;te!==null&&(te.return=null),p.return=null}catch(ge){dn(p,s,ge)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_m(s,n),s=s.sibling}function _m(n,s){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bi(s,n),Bi(n),u&4){try{qo(3,n,n.return),fl(3,n)}catch(ot){dn(n,n.return,ot)}try{qo(5,n,n.return)}catch(ot){dn(n,n.return,ot)}}break;case 1:bi(s,n),Bi(n),u&512&&l!==null&&Hs(l,l.return);break;case 5:if(bi(s,n),Bi(n),u&512&&l!==null&&Hs(l,l.return),n.flags&32){var p=n.stateNode;try{st(p,"")}catch(ot){dn(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,N=l!==null?l.memoizedProps:_,H=n.type,te=n.updateQueue;if(n.updateQueue=null,te!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&Me(p,_),He(H,N);var ge=He(H,_);for(N=0;N<te.length;N+=2){var Le=te[N],Fe=te[N+1];Le==="style"?ue(p,Fe):Le==="dangerouslySetInnerHTML"?Xt(p,Fe):Le==="children"?st(p,Fe):b(p,Le,Fe,ge)}switch(H){case"input":Ce(p,_);break;case"textarea":J(p,_);break;case"select":var Ne=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ze=_.value;Ze!=null?ut(p,!!_.multiple,Ze,!1):Ne!==!!_.multiple&&(_.defaultValue!=null?ut(p,!!_.multiple,_.defaultValue,!0):ut(p,!!_.multiple,_.multiple?[]:"",!1))}p[Oo]=_}catch(ot){dn(n,n.return,ot)}}break;case 6:if(bi(s,n),Bi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(ot){dn(n,n.return,ot)}}break;case 3:if(bi(s,n),Bi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{To(s.containerInfo)}catch(ot){dn(n,n.return,ot)}break;case 4:bi(s,n),Bi(n);break;case 13:bi(s,n),Bi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Qu=tn())),u&4&&vm(n);break;case 22:if(Le=l!==null&&l.memoizedState!==null,n.mode&1?(On=(ge=On)||Le,bi(s,n),On=ge):bi(s,n),Bi(n),u&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!Le&&(n.mode&1)!==0)for(et=n,Le=n.child;Le!==null;){for(Fe=et=Le;et!==null;){switch(Ne=et,Ze=Ne.child,Ne.tag){case 0:case 11:case 14:case 15:qo(4,Ne,Ne.return);break;case 1:Hs(Ne,Ne.return);var rt=Ne.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Ne,l=Ne.return;try{s=u,rt.props=s.memoizedProps,rt.state=s.memoizedState,rt.componentWillUnmount()}catch(ot){dn(u,l,ot)}}break;case 5:Hs(Ne,Ne.return);break;case 22:if(Ne.memoizedState!==null){Sm(Fe);continue}}Ze!==null?(Ze.return=Ne,et=Ze):Sm(Fe)}Le=Le.sibling}e:for(Le=null,Fe=n;;){if(Fe.tag===5){if(Le===null){Le=Fe;try{p=Fe.stateNode,ge?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=Fe.stateNode,te=Fe.memoizedProps.style,N=te!=null&&te.hasOwnProperty("display")?te.display:null,H.style.display=L("display",N))}catch(ot){dn(n,n.return,ot)}}}else if(Fe.tag===6){if(Le===null)try{Fe.stateNode.nodeValue=ge?"":Fe.memoizedProps}catch(ot){dn(n,n.return,ot)}}else if((Fe.tag!==22&&Fe.tag!==23||Fe.memoizedState===null||Fe===n)&&Fe.child!==null){Fe.child.return=Fe,Fe=Fe.child;continue}if(Fe===n)break e;for(;Fe.sibling===null;){if(Fe.return===null||Fe.return===n)break e;Le===Fe&&(Le=null),Fe=Fe.return}Le===Fe&&(Le=null),Fe.sibling.return=Fe.return,Fe=Fe.sibling}}break;case 19:bi(s,n),Bi(n),u&4&&vm(n);break;case 21:break;default:bi(s,n),Bi(n)}}function Bi(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(pm(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(st(p,""),u.flags&=-33);var _=mm(n);Ku(n,_,p);break;case 3:case 4:var N=u.stateNode.containerInfo,H=mm(n);ju(n,H,N);break;default:throw Error(t(161))}}catch(te){dn(n,n.return,te)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function L_(n,s,l){et=n,xm(n)}function xm(n,s,l){for(var u=(n.mode&1)!==0;et!==null;){var p=et,_=p.child;if(p.tag===22&&u){var N=p.memoizedState!==null||hl;if(!N){var H=p.alternate,te=H!==null&&H.memoizedState!==null||On;H=hl;var ge=On;if(hl=N,(On=te)&&!ge)for(et=p;et!==null;)N=et,te=N.child,N.tag===22&&N.memoizedState!==null?Mm(p):te!==null?(te.return=N,et=te):Mm(p);for(;_!==null;)et=_,xm(_),_=_.sibling;et=p,hl=H,On=ge}ym(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,et=_):ym(n)}}function ym(n){for(;et!==null;){var s=et;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:On||fl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!On)if(l===null)u.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ei(s.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Sp(s,_,u);break;case 3:var N=s.updateQueue;if(N!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Sp(s,N,l)}break;case 5:var H=s.stateNode;if(l===null&&s.flags&4){l=H;var te=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&l.focus();break;case"img":te.src&&(l.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ge=s.alternate;if(ge!==null){var Le=ge.memoizedState;if(Le!==null){var Fe=Le.dehydrated;Fe!==null&&To(Fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||s.flags&512&&qu(s)}catch(Ne){dn(s,s.return,Ne)}}if(s===n){et=null;break}if(l=s.sibling,l!==null){l.return=s.return,et=l;break}et=s.return}}function Sm(n){for(;et!==null;){var s=et;if(s===n){et=null;break}var l=s.sibling;if(l!==null){l.return=s.return,et=l;break}et=s.return}}function Mm(n){for(;et!==null;){var s=et;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{fl(4,s)}catch(te){dn(s,l,te)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(te){dn(s,p,te)}}var _=s.return;try{qu(s)}catch(te){dn(s,_,te)}break;case 5:var N=s.return;try{qu(s)}catch(te){dn(s,N,te)}}}catch(te){dn(s,s.return,te)}if(s===n){et=null;break}var H=s.sibling;if(H!==null){H.return=s.return,et=H;break}et=s.return}}var D_=Math.ceil,pl=w.ReactCurrentDispatcher,Zu=w.ReactCurrentOwner,mi=w.ReactCurrentBatchConfig,Ot=0,An=null,gn=null,Nn=0,si=0,Gs=Er(0),Sn=0,jo=null,rs=0,ml=0,Ju=0,Ko=null,jn=null,Qu=0,Vs=1/0,ir=null,gl=!1,ed=null,Cr=null,vl=!1,Pr=null,_l=0,Zo=0,td=null,xl=-1,yl=0;function Gn(){return(Ot&6)!==0?tn():xl!==-1?xl:xl=tn()}function Nr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Nn!==0?Nn&-Nn:g_.transition!==null?(yl===0&&(yl=$t()),yl):(n=lt,n!==0||(n=window.event,n=n===void 0?16:wf(n.type)),n)}function Ti(n,s,l,u){if(50<Zo)throw Zo=0,td=null,Error(t(185));un(n,l,u),((Ot&2)===0||n!==An)&&(n===An&&((Ot&2)===0&&(ml|=l),Sn===4&&Lr(n,Nn)),Kn(n,u),l===1&&Ot===0&&(s.mode&1)===0&&(Vs=tn()+500,qa&&br()))}function Kn(n,s){var l=n.callbackNode;Pt(n,s);var u=Tt(n,n===An?Nn:0);if(u===0)l!==null&&So(l),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(l!=null&&So(l),s===1)n.tag===0?m_(wm.bind(null,n)):cp(wm.bind(null,n)),d_(function(){(Ot&6)===0&&br()}),l=null;else{switch(Ii(u)){case 1:l=Mo;break;case 4:l=Ca;break;case 16:l=Ms;break;case 536870912:l=D;break;default:l=Ms}l=Lm(l,Em.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function Em(n,s){if(xl=-1,yl=0,(Ot&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ws()&&n.callbackNode!==l)return null;var u=Tt(n,n===An?Nn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Sl(n,u);else{s=u;var p=Ot;Ot|=2;var _=Tm();(An!==n||Nn!==s)&&(ir=null,Vs=tn()+500,os(n,s));do try{U_();break}catch(H){bm(n,H)}while(!0);xu(),pl.current=_,Ot=p,gn!==null?s=0:(An=null,Nn=0,s=Sn)}if(s!==0){if(s===2&&(p=nn(n),p!==0&&(u=p,s=nd(n,p))),s===1)throw l=jo,os(n,0),Lr(n,u),Kn(n,tn()),l;if(s===6)Lr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!I_(p)&&(s=Sl(n,u),s===2&&(_=nn(n),_!==0&&(u=_,s=nd(n,_))),s===1))throw l=jo,os(n,0),Lr(n,u),Kn(n,tn()),l;switch(n.finishedWork=p,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:as(n,jn,ir);break;case 3:if(Lr(n,u),(u&130023424)===u&&(s=Qu+500-tn(),10<s)){if(Tt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=lu(as.bind(null,n,jn,ir),s);break}as(n,jn,ir);break;case 4:if(Lr(n,u),(u&4194240)===u)break;for(s=n.eventTimes,p=-1;0<u;){var N=31-le(u);_=1<<N,N=s[N],N>p&&(p=N),u&=~_}if(u=p,u=tn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*D_(u/1960))-u,10<u){n.timeoutHandle=lu(as.bind(null,n,jn,ir),u);break}as(n,jn,ir);break;case 5:as(n,jn,ir);break;default:throw Error(t(329))}}}return Kn(n,tn()),n.callbackNode===l?Em.bind(null,n):null}function nd(n,s){var l=Ko;return n.current.memoizedState.isDehydrated&&(os(n,s).flags|=256),n=Sl(n,s),n!==2&&(s=jn,jn=l,s!==null&&id(s)),n}function id(n){jn===null?jn=n:jn.push.apply(jn,n)}function I_(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],_=p.getSnapshot;p=p.value;try{if(!Si(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Lr(n,s){for(s&=~Ju,s&=~ml,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-le(s),u=1<<l;n[l]=-1,s&=~u}}function wm(n){if((Ot&6)!==0)throw Error(t(327));Ws();var s=Tt(n,0);if((s&1)===0)return Kn(n,tn()),null;var l=Sl(n,s);if(n.tag!==0&&l===2){var u=nn(n);u!==0&&(s=u,l=nd(n,u))}if(l===1)throw l=jo,os(n,0),Lr(n,s),Kn(n,tn()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,as(n,jn,ir),Kn(n,tn()),null}function rd(n,s){var l=Ot;Ot|=1;try{return n(s)}finally{Ot=l,Ot===0&&(Vs=tn()+500,qa&&br())}}function ss(n){Pr!==null&&Pr.tag===0&&(Ot&6)===0&&Ws();var s=Ot;Ot|=1;var l=mi.transition,u=lt;try{if(mi.transition=null,lt=1,n)return n()}finally{lt=u,mi.transition=l,Ot=s,(Ot&6)===0&&br()}}function sd(){si=Gs.current,Qt(Gs)}function os(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,u_(l)),gn!==null)for(l=gn.return;l!==null;){var u=l;switch(pu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$a();break;case 3:Bs(),Qt($n),Qt(In),Au();break;case 5:bu(u);break;case 4:Bs();break;case 13:Qt(on);break;case 19:Qt(on);break;case 10:yu(u.type._context);break;case 22:case 23:sd()}l=l.return}if(An=n,gn=n=Dr(n.current,null),Nn=si=s,Sn=0,jo=null,Ju=ml=rs=0,jn=Ko=null,ts!==null){for(s=0;s<ts.length;s++)if(l=ts[s],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,_=l.pending;if(_!==null){var N=_.next;_.next=p,u.next=N}l.pending=u}ts=null}return n}function bm(n,s){do{var l=gn;try{if(xu(),rl.current=ll,sl){for(var u=an.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}sl=!1}if(is=0,Tn=yn=an=null,Vo=!1,Wo=0,Zu.current=null,l===null||l.return===null){Sn=1,jo=s,gn=null;break}e:{var _=n,N=l.return,H=l,te=s;if(s=Nn,H.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var ge=te,Le=H,Fe=Le.tag;if((Le.mode&1)===0&&(Fe===0||Fe===11||Fe===15)){var Ne=Le.alternate;Ne?(Le.updateQueue=Ne.updateQueue,Le.memoizedState=Ne.memoizedState,Le.lanes=Ne.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Ze=Kp(N);if(Ze!==null){Ze.flags&=-257,Zp(Ze,N,H,_,s),Ze.mode&1&&jp(_,ge,s),s=Ze,te=ge;var rt=s.updateQueue;if(rt===null){var ot=new Set;ot.add(te),s.updateQueue=ot}else rt.add(te);break e}else{if((s&1)===0){jp(_,ge,s),od();break e}te=Error(t(426))}}else if(rn&&H.mode&1){var pn=Kp(N);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Zp(pn,N,H,_,s),vu(zs(te,H));break e}}_=te=zs(te,H),Sn!==4&&(Sn=2),Ko===null?Ko=[_]:Ko.push(_),_=N;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var de=Yp(_,te,s);yp(_,de);break e;case 1:H=te;var se=_.type,fe=_.stateNode;if((_.flags&128)===0&&(typeof se.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Cr===null||!Cr.has(fe)))){_.flags|=65536,s&=-s,_.lanes|=s;var ze=qp(_,H,s);yp(_,ze);break e}}_=_.return}while(_!==null)}Rm(l)}catch(ct){s=ct,gn===l&&l!==null&&(gn=l=l.return);continue}break}while(!0)}function Tm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function od(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),An===null||(rs&268435455)===0&&(ml&268435455)===0||Lr(An,Nn)}function Sl(n,s){var l=Ot;Ot|=2;var u=Tm();(An!==n||Nn!==s)&&(ir=null,os(n,s));do try{F_();break}catch(p){bm(n,p)}while(!0);if(xu(),Ot=l,pl.current=u,gn!==null)throw Error(t(261));return An=null,Nn=0,Sn}function F_(){for(;gn!==null;)Am(gn)}function U_(){for(;gn!==null&&!Kr();)Am(gn)}function Am(n){var s=Nm(n.alternate,n,si);n.memoizedProps=n.pendingProps,s===null?Rm(n):gn=s,Zu.current=null}function Rm(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=R_(l,s,si),l!==null){gn=l;return}}else{if(l=C_(l,s),l!==null){l.flags&=32767,gn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Sn=6,gn=null;return}}if(s=s.sibling,s!==null){gn=s;return}gn=s=n}while(s!==null);Sn===0&&(Sn=5)}function as(n,s,l){var u=lt,p=mi.transition;try{mi.transition=null,lt=1,O_(n,s,l,u)}finally{mi.transition=p,lt=u}return null}function O_(n,s,l,u){do Ws();while(Pr!==null);if((Ot&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(it(n,_),n===An&&(gn=An=null,Nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||vl||(vl=!0,Lm(Ms,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=mi.transition,mi.transition=null;var N=lt;lt=1;var H=Ot;Ot|=4,Zu.current=null,N_(n,l),_m(l,n),i_(ou),La=!!su,ou=su=null,n.current=l,L_(l),Bc(),Ot=H,lt=N,mi.transition=_}else n.current=l;if(vl&&(vl=!1,Pr=n,_l=p),_=n.pendingLanes,_===0&&(Cr=null),ce(l.stateNode),Kn(n,tn()),s!==null)for(u=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(gl)throw gl=!1,n=ed,ed=null,n;return(_l&1)!==0&&n.tag!==0&&Ws(),_=n.pendingLanes,(_&1)!==0?n===td?Zo++:(Zo=0,td=n):Zo=0,br(),null}function Ws(){if(Pr!==null){var n=Ii(_l),s=mi.transition,l=lt;try{if(mi.transition=null,lt=16>n?16:n,Pr===null)var u=!1;else{if(n=Pr,Pr=null,_l=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,et=n.current;et!==null;){var _=et,N=_.child;if((et.flags&16)!==0){var H=_.deletions;if(H!==null){for(var te=0;te<H.length;te++){var ge=H[te];for(et=ge;et!==null;){var Le=et;switch(Le.tag){case 0:case 11:case 15:qo(8,Le,_)}var Fe=Le.child;if(Fe!==null)Fe.return=Le,et=Fe;else for(;et!==null;){Le=et;var Ne=Le.sibling,Ze=Le.return;if(fm(Le),Le===ge){et=null;break}if(Ne!==null){Ne.return=Ze,et=Ne;break}et=Ze}}}var rt=_.alternate;if(rt!==null){var ot=rt.child;if(ot!==null){rt.child=null;do{var pn=ot.sibling;ot.sibling=null,ot=pn}while(ot!==null)}}et=_}}if((_.subtreeFlags&2064)!==0&&N!==null)N.return=_,et=N;else e:for(;et!==null;){if(_=et,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qo(9,_,_.return)}var de=_.sibling;if(de!==null){de.return=_.return,et=de;break e}et=_.return}}var se=n.current;for(et=se;et!==null;){N=et;var fe=N.child;if((N.subtreeFlags&2064)!==0&&fe!==null)fe.return=N,et=fe;else e:for(N=se;et!==null;){if(H=et,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:fl(9,H)}}catch(ct){dn(H,H.return,ct)}if(H===N){et=null;break e}var ze=H.sibling;if(ze!==null){ze.return=H.return,et=ze;break e}et=H.return}}if(Ot=p,br(),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(Q,n)}catch{}u=!0}return u}finally{lt=l,mi.transition=s}}return!1}function Cm(n,s,l){s=zs(l,s),s=Yp(n,s,1),n=Ar(n,s,1),s=Gn(),n!==null&&(un(n,1,s),Kn(n,s))}function dn(n,s,l){if(n.tag===3)Cm(n,n,l);else for(;s!==null;){if(s.tag===3){Cm(s,n,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cr===null||!Cr.has(u))){n=zs(l,n),n=qp(s,n,1),s=Ar(s,n,1),n=Gn(),s!==null&&(un(s,1,n),Kn(s,n));break}}s=s.return}}function k_(n,s,l){var u=n.pingCache;u!==null&&u.delete(s),s=Gn(),n.pingedLanes|=n.suspendedLanes&l,An===n&&(Nn&l)===l&&(Sn===4||Sn===3&&(Nn&130023424)===Nn&&500>tn()-Qu?os(n,0):Ju|=l),Kn(n,s)}function Pm(n,s){s===0&&((n.mode&1)===0?s=1:(s=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var l=Gn();n=er(n,s),n!==null&&(un(n,s,l),Kn(n,l))}function B_(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),Pm(n,l)}function z_(n,s){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),Pm(n,l)}var Nm;Nm=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||$n.current)qn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return qn=!1,A_(n,s,l);qn=(n.flags&131072)!==0}else qn=!1,rn&&(s.flags&1048576)!==0&&up(s,Ka,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;dl(n,s),n=s.pendingProps;var p=Ls(s,In.current);ks(s,l),p=Pu(null,s,u,n,p,l);var _=Nu();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yn(u)?(_=!0,Ya(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Eu(s),p.updater=cl,s.stateNode=p,p._reactInternals=s,Ou(s,u,n,l),s=Hu(null,s,u,!0,_,l)):(s.tag=0,rn&&_&&fu(s),Hn(null,s,p,l),s=s.child),s;case 16:u=s.elementType;e:{switch(dl(n,s),n=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=G_(u),n=Ei(u,n),p){case 0:s=zu(null,s,u,n,l);break e;case 1:s=im(null,s,u,n,l);break e;case 11:s=Jp(null,s,u,n,l);break e;case 14:s=Qp(null,s,u,Ei(u.type,n),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ei(u,p),zu(n,s,u,p,l);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ei(u,p),im(n,s,u,p,l);case 3:e:{if(rm(s),n===null)throw Error(t(387));u=s.pendingProps,_=s.memoizedState,p=_.element,xp(n,s),nl(s,u,null,l);var N=s.memoizedState;if(u=N.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=zs(Error(t(423)),s),s=sm(n,s,u,l,p);break e}else if(u!==p){p=zs(Error(t(424)),s),s=sm(n,s,u,l,p);break e}else for(ri=Mr(s.stateNode.containerInfo.firstChild),ii=s,rn=!0,Mi=null,l=vp(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fs(),u===p){s=nr(n,s,l);break e}Hn(n,s,u,l)}s=s.child}return s;case 5:return Mp(s),n===null&&gu(s),u=s.type,p=s.pendingProps,_=n!==null?n.memoizedProps:null,N=p.children,au(u,p)?N=null:_!==null&&au(u,_)&&(s.flags|=32),nm(n,s),Hn(n,s,N,l),s.child;case 6:return n===null&&gu(s),null;case 13:return om(n,s,l);case 4:return wu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Us(s,null,u,l):Hn(n,s,u,l),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ei(u,p),Jp(n,s,u,p,l);case 7:return Hn(n,s,s.pendingProps,l),s.child;case 8:return Hn(n,s,s.pendingProps.children,l),s.child;case 12:return Hn(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,_=s.memoizedProps,N=p.value,jt(Qa,u._currentValue),u._currentValue=N,_!==null)if(Si(_.value,N)){if(_.children===p.children&&!$n.current){s=nr(n,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var H=_.dependencies;if(H!==null){N=_.child;for(var te=H.firstContext;te!==null;){if(te.context===u){if(_.tag===1){te=tr(-1,l&-l),te.tag=2;var ge=_.updateQueue;if(ge!==null){ge=ge.shared;var Le=ge.pending;Le===null?te.next=te:(te.next=Le.next,Le.next=te),ge.pending=te}}_.lanes|=l,te=_.alternate,te!==null&&(te.lanes|=l),Su(_.return,l,s),H.lanes|=l;break}te=te.next}}else if(_.tag===10)N=_.type===s.type?null:_.child;else if(_.tag===18){if(N=_.return,N===null)throw Error(t(341));N.lanes|=l,H=N.alternate,H!==null&&(H.lanes|=l),Su(N,l,s),N=_.sibling}else N=_.child;if(N!==null)N.return=_;else for(N=_;N!==null;){if(N===s){N=null;break}if(_=N.sibling,_!==null){_.return=N.return,N=_;break}N=N.return}_=N}Hn(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,ks(s,l),p=fi(p),u=u(p),s.flags|=1,Hn(n,s,u,l),s.child;case 14:return u=s.type,p=Ei(u,s.pendingProps),p=Ei(u.type,p),Qp(n,s,u,p,l);case 15:return em(n,s,s.type,s.pendingProps,l);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ei(u,p),dl(n,s),s.tag=1,Yn(u)?(n=!0,Ya(s)):n=!1,ks(s,l),Xp(s,u,p),Ou(s,u,p,l),Hu(null,s,u,!0,n,l);case 19:return lm(n,s,l);case 22:return tm(n,s,l)}throw Error(t(156,s.tag))};function Lm(n,s){return yo(n,s)}function H_(n,s,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,s,l,u){return new H_(n,s,l,u)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G_(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ee)return 14}return 2}function Dr(n,s){var l=n.alternate;return l===null?(l=gi(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ml(n,s,l,u,p,_){var N=2;if(u=n,typeof n=="function")ad(n)&&(N=1);else if(typeof n=="string")N=5;else e:switch(n){case M:return ls(l.children,p,_,s);case R:N=8,p|=8;break;case O:return n=gi(12,l,s,p|2),n.elementType=O,n.lanes=_,n;case K:return n=gi(13,l,s,p),n.elementType=K,n.lanes=_,n;case B:return n=gi(19,l,s,p),n.elementType=B,n.lanes=_,n;case X:return El(l,p,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:N=10;break e;case I:N=9;break e;case V:N=11;break e;case ee:N=14;break e;case oe:N=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=gi(N,l,s,p),s.elementType=n,s.type=u,s.lanes=_,s}function ls(n,s,l,u){return n=gi(7,n,u,s),n.lanes=l,n}function El(n,s,l,u){return n=gi(22,n,u,s),n.elementType=X,n.lanes=l,n.stateNode={isHidden:!1},n}function ld(n,s,l){return n=gi(6,n,null,s),n.lanes=l,n}function cd(n,s,l){return s=gi(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function V_(n,s,l,u,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ud(n,s,l,u,p,_,N,H,te){return n=new V_(n,s,l,H,te),s===1?(s=1,_===!0&&(s|=8)):s=0,_=gi(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(_),n}function W_(n,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:u==null?null:""+u,children:n,containerInfo:s,implementation:l}}function Dm(n){if(!n)return wr;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return ap(n,l,s)}return s}function Im(n,s,l,u,p,_,N,H,te){return n=ud(l,u,!0,n,p,_,N,H,te),n.context=Dm(null),l=n.current,u=Gn(),p=Nr(l),_=tr(u,p),_.callback=s??null,Ar(l,_,p),n.current.lanes=p,un(n,p,u),Kn(n,u),n}function wl(n,s,l,u){var p=s.current,_=Gn(),N=Nr(p);return l=Dm(l),s.context===null?s.context=l:s.pendingContext=l,s=tr(_,N),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Ar(p,s,N),n!==null&&(Ti(n,p,N,_),tl(n,p,N)),N}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function dd(n,s){Fm(n,s),(n=n.alternate)&&Fm(n,s)}function X_(){return null}var Um=typeof reportError=="function"?reportError:function(n){console.error(n)};function hd(n){this._internalRoot=n}Tl.prototype.render=hd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));wl(n,s,null,null)},Tl.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ss(function(){wl(null,n,null,null)}),s[Ki]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Fi();n={blockedOn:null,target:n,priority:s};for(var l=0;l<xr.length&&s!==0&&s<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Mf(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function $_(n,s,l,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var ge=bl(N);_.call(ge)}}var N=Im(s,u,n,0,null,!1,!1,"",Om);return n._reactRootContainer=N,n[Ki]=N.current,Fo(n.nodeType===8?n.parentNode:n),ss(),N}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var ge=bl(te);H.call(ge)}}var te=ud(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=te,n[Ki]=te.current,Fo(n.nodeType===8?n.parentNode:n),ss(function(){wl(s,te,l,u)}),te}function Rl(n,s,l,u,p){var _=l._reactRootContainer;if(_){var N=_;if(typeof p=="function"){var H=p;p=function(){var te=bl(N);H.call(te)}}wl(s,N,n,p)}else N=$_(l,s,n,p,u);return bl(N)}xn=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=vt(s.pendingLanes);l!==0&&(_n(s,l|1),Kn(s,tn()),(Ot&6)===0&&(Vs=tn()+500,br()))}break;case 13:ss(function(){var u=er(n,1);if(u!==null){var p=Gn();Ti(u,n,1,p)}}),dd(n,1)}},vr=function(n){if(n.tag===13){var s=er(n,134217728);if(s!==null){var l=Gn();Ti(s,n,134217728,l)}dd(n,134217728)}},yi=function(n){if(n.tag===13){var s=Nr(n),l=er(n,s);if(l!==null){var u=Gn();Ti(l,n,s,u)}dd(n,s)}},Fi=function(){return lt},Dt=function(n,s){var l=lt;try{return lt=n,s()}finally{lt=l}},Se=function(n,s,l){switch(s){case"input":if(Ce(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==n&&u.form===n.form){var p=Xa(u);if(!p)throw Error(t(90));Te(u),Ce(u,p)}}}break;case"textarea":J(n,l);break;case"select":s=l.value,s!=null&&ut(n,!!l.multiple,s,!1)}},Oe=rd,Ge=ss;var Y_={usingClientEntryPoint:!1,Events:[ko,Ps,Xa,_e,Ve,rd]},Jo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xo(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Q=Cl.inject(q_),he=Cl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,Zn.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(s))throw Error(t(200));return W_(n,s,null,l)},Zn.createRoot=function(n,s){if(!fd(n))throw Error(t(299));var l=!1,u="",p=Um;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=ud(n,1,!1,null,null,l,!1,u,p),n[Ki]=s.current,Fo(n.nodeType===8?n.parentNode:n),new hd(s)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xo(s),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ss(n)},Zn.hydrate=function(n,s,l){if(!Al(s))throw Error(t(200));return Rl(null,n,s,!0,l)},Zn.hydrateRoot=function(n,s,l){if(!fd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,_="",N=Um;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(N=l.onRecoverableError)),s=Im(s,null,n,1,l??null,p,!1,_,N),n[Ki]=s.current,Fo(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Tl(s)},Zn.render=function(n,s,l){if(!Al(s))throw Error(t(200));return Rl(null,n,s,!1,l)},Zn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1},Zn.unstable_batchedUpdates=rd,Zn.unstable_renderSubtreeIntoContainer=function(n,s,l,u){if(!Al(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,s,l,!1,u)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Xm;function ix(){if(Xm)return gd.exports;Xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),gd.exports=nx(),gd.exports}var $m;function rx(){if($m)return Pl;$m=1;var i=ix();return Pl.createRoot=i.createRoot,Pl.hydrateRoot=i.hydrateRoot,Pl}var sx=rx();const ox=ug(sx);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dg=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Mt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...d},h)=>Mt.createElement("svg",{ref:h,...lx,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:dg("lucide",o),...d},[...c.map(([f,m])=>Mt.createElement(f,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(i,e)=>{const t=Mt.forwardRef(({className:r,...o},a)=>Mt.createElement(cx,{ref:a,iconNode:e,className:dg(`lucide-${ax(i)}`,r),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=en("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=en("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=en("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=en("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=en("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=en("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=en("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=en("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=en("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=en("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=en("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=en("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=en("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=en("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=en("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=en("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=en("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=en("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=en("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=en("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=en("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=en("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=en("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=en("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=en("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lx=[{id:"earth",name:"Tierra",g:9.81,badge:"🌍 9.81 m/s²"},{id:"moon",name:"Luna",g:1.62,badge:"🌙 1.62 m/s²"},{id:"mars",name:"Marte",g:3.72,badge:"🔴 3.72 m/s²"},{id:"jupiter",name:"Júpiter",g:24.79,badge:"🟠 24.79 m/s²"}],vi={incline_pulley:{id:"incline_pulley",name:"Plano Inclinado + Polea y Cuerda",shortName:"Plano Inclinado / Polea",category:"Dinámica & Leyes de Newton",description:"Bloque m₁ sobre rampa inclinada un ángulo θ con fricción μ, conectado mediante una cuerda ideal y polea a un bloque colgante m₂ (pon m₂ = 0 para plano inclinado simple).",params:{m1:6,m2:4.5,angle:30,muK:.15,muS:.22,fExt:0,g:9.81}},horizontal_table:{id:"horizontal_table",name:"Mesa Horizontal con Polea y Dos Bloques",shortName:"Mesa + Polea",category:"Sistemas Conectados",description:"Bloque m₁ sobre una superficie horizontal con fricción μ y fuerza externa opcional F_ext a un ángulo α, conectado por cuerda y polea a una masa colgante m₂.",params:{m1:5,m2:3,muK:.2,muS:.28,fExt:10,fAngle:0,g:9.81}},atwood:{id:"atwood",name:"Máquina de Atwood (Polea Ideal)",shortName:"Máquina de Atwood",category:"Tensión y Poleas",description:"Dos masas m₁ y m₂ suspendidas verticalmente de una cuerda inextensible que pasa por una polea sin fricción.",params:{m1:7,m2:4,g:9.81}},spring_block:{id:"spring_block",name:"Sistema Masa-Resorte (Ley de Hooke)",shortName:"Masa-Resorte",category:"Energía & Oscilaciones",description:"Bloque de masa m acoplado a un resorte de constante elástica k sobre una superficie con fricción μ_k.",params:{m1:3,k:45,x0:2.2,muK:.04,g:9.81}},projectile:{id:"projectile",name:"Tiro Parabólico / Proyectil 2D",shortName:"Proyectil 2D",category:"Cinemática 2D",description:"Lanzamiento de un proyectil de masa m desde una altura h₀ con velocidad inicial v₀ y ángulo de elevación θ.",params:{m1:2,v0:22,angle:45,h0:2,g:9.81}},pendulum:{id:"pendulum",name:"Péndulo Simple & Tensión Radial",shortName:"Péndulo Simple",category:"Dinámica Circular",description:"Esfera de masa m suspendida de una cuerda de longitud L que oscila bajo gravedad mostrando tensión y componentes radial/tangencial del peso.",params:{m1:2.5,length:3.5,angle0:40,damping:.02,g:9.81}},sandbox_game:{id:"sandbox_game",name:"Modo Juego: Constructor Libre de Cuerdas y Objetos",shortName:"🎮 Constructor / Juego",category:"Laboratorio Libre",description:"Agrega bloques, rampas, poleas, cuerdas y fuerzas con el mouse. Conéctalos libremente, simula en tiempo real y pídele al LLM de AWS Bedrock que resuelva lo que armaste.",params:{g:9.81}}};function eh(i,e,t={}){const r=Number(e.g??9.81);if(i==="incline_pulley"){const o=Math.max(.1,Number(e.m1??6)),a=Math.max(0,Number(e.m2??4.5)),c=Number(e.angle??30),d=c*Math.PI/180,h=Math.max(0,Number(e.muK??.15)),f=Math.max(h,Number(e.muS??.2)),m=Number(e.fExt??0),x=o*r,v=x*Math.sin(d),g=x*Math.cos(d),E=g,A=a*r,y=f*E,S=h*E,T=A+m-v;let b=0,w=0,P="En reposo (Equilibrio Estático)";const C=Number(t.v??0);if(Math.abs(C)>.01){const F=Math.sign(C);w=-F*S,b=(T+w)/(o+a),P=F>0?"m₁ sube por la rampa / m₂ desciende":"m₁ se desliza rampa abajo / m₂ asciende"}else if(Math.abs(T)<=y)b=0,w=-T,P="Equilibrio Estático (|F_impulsora| ≤ f_s,máx)";else{const F=Math.sign(T);w=-F*S,b=(T+w)/(o+a),P=F>0?"m₁ acelera rampa arriba / m₂ baja":"m₁ acelera rampa abajo / m₂ sube"}const M=a>0?Math.max(0,a*(r-b)):0,R=[{id:"m1",label:`Bloque m₁ (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:c,subtitle:`Sobre plano inclinado θ = ${c}°`,vectors:[{id:"W1",symbol:"W₁ = m₁g",name:"Peso",magnitude:x,angleDeg:-90,color:"#f43f5e",formula:`${o} × ${r.toFixed(2)} = ${x.toFixed(2)} N`},{id:"W1x",symbol:"W₁ₓ = m₁g·senθ",name:"Comp. Peso paralela",magnitude:v,angleDeg:180+c,color:"#fb7185",dashed:!0,formula:`${x.toFixed(1)}·sen(${c}°) = ${v.toFixed(2)} N`},{id:"W1y",symbol:"W₁ᵧ = m₁g·cosθ",name:"Comp. Peso perpendicular",magnitude:g,angleDeg:-90+c,color:"#fda4af",dashed:!0,formula:`${x.toFixed(1)}·cos(${c}°) = ${g.toFixed(2)} N`},{id:"N1",symbol:"N₁",name:"Fuerza Normal",magnitude:E,angleDeg:90+c,color:"#38bdf8",formula:`m₁g·cos(${c}°) = ${E.toFixed(2)} N`},...a>0?[{id:"T",symbol:"T",name:"Tensión de Cuerda",magnitude:M,angleDeg:c,color:"#fbbf24",formula:`m₂(g - a) = ${M.toFixed(2)} N`}]:[],...Math.abs(m)>.01?[{id:"Fext",symbol:"F_ext",name:"Fuerza Aplicada",magnitude:Math.abs(m),angleDeg:m>=0?c:180+c,color:"#34d399",formula:`${Math.abs(m).toFixed(2)} N`}]:[],...Math.abs(w)>.01?[{id:"fr",symbol:Math.abs(b)===0?"f_s":"f_k",name:Math.abs(b)===0?"Fricción Estática":"Fricción Cinética",magnitude:Math.abs(w),angleDeg:w>=0?c:180+c,color:"#fb923c",formula:Math.abs(b)===0?`|F_imp| = ${Math.abs(w).toFixed(2)} N (≤ ${y.toFixed(2)} N)`:`μ_k·N₁ = ${h} × ${E.toFixed(2)} = ${Math.abs(w).toFixed(2)} N`}]:[]],equations:[`∑F_y' = N₁ - m₁g·cos(${c}°) = 0  ⇒  N₁ = ${E.toFixed(2)} N`,`∑F_x' = ${a>0?"T + ":""}${m!==0?"F_ext + ":""}f_r - m₁g·sen(${c}°) = m₁·a`]}];a>0&&R.push({id:"m2",label:`Bloque Colgante m₂ (${a.toFixed(1)} kg)`,mass:a,axisAngleDeg:0,subtitle:"Suspendido verticalmente de la polea",vectors:[{id:"W2",symbol:"W₂ = m₂g",name:"Peso de m₂",magnitude:A,angleDeg:-90,color:"#f43f5e",formula:`${a} × ${r.toFixed(2)} = ${A.toFixed(2)} N`},{id:"T2",symbol:"T",name:"Tensión de Cuerda",magnitude:M,angleDeg:90,color:"#fbbf24",formula:`T = ${M.toFixed(2)} N`}],equations:["∑F_y = m₂g - T = m₂·a",`T = m₂(g - a) = ${a.toFixed(1)}(${r.toFixed(2)} - (${b.toFixed(2)})) = ${M.toFixed(2)} N`]});const O=[{title:"1. Descomposición del Peso y Fuerza Normal en la Rampa",detail:`Rotamos el eje X' paralelo al plano inclinado (${c}°). El peso W₁ = m₁g = ${x.toFixed(2)} N se descompone en:`,formula:`W₁ₓ = m₁g·sen(${c}°) = ${v.toFixed(2)} N   |   W₁ᵧ = m₁g·cos(${c}°) = ${g.toFixed(2)} N`},{title:"2. Cálculo de la Normal y Fricción Límite",detail:"Como no hay movimiento perpendicular a la rampa (∑F_y' = 0), la Normal equilibra a W₁ᵧ:",formula:`N₁ = ${E.toFixed(2)} N   ⇒   f_{s,máx} = μ_s·N₁ = ${y.toFixed(2)} N,   f_k = μ_k·N₁ = ${S.toFixed(2)} N`},{title:"3. Segunda Ley de Newton al Sistema Acoplado",detail:a>0?"Sumando las ecuaciones de m₁ (eje X' subiendo rampa) y m₂ (eje Y bajando), la tensión interna T se cancela:":"Aplicando ∑F_x' = m₁·a a lo largo del plano inclinado:",formula:a>0?`a = (m₂g + F_ext - m₁g·senθ + f_r) / (m₁ + m₂) = ${b.toFixed(3)} m/s²`:`a = (F_ext - m₁g·senθ + f_r) / m₁ = ${b.toFixed(3)} m/s²`},...a>0?[{title:"4. Determinación de la Tensión en la Cuerda (T)",detail:`Sustituyendo la aceleración a = ${b.toFixed(3)} m/s² en la ecuación del bloque colgante m₂:`,formula:`T = m₂(g - a) = ${a} × (${r.toFixed(2)} - ${b.toFixed(3)}) = ${M.toFixed(2)} N`}]:[]];return{sceneType:i,motionState:P,summary:{acceleration:b,tension:M,normal1:E,friction:Math.abs(w),w1x:v,w1y:g,w2:A},fbdBodies:R,steps:O}}if(i==="horizontal_table"){const o=Math.max(.1,Number(e.m1??5)),a=Math.max(0,Number(e.m2??3)),c=Math.max(0,Number(e.muK??.2)),d=Math.max(c,Number(e.muS??.28)),h=Number(e.fExt??0),f=Number(e.fAngle??0),m=f*Math.PI/180,x=o*r,v=h*Math.cos(m),g=h*Math.sin(m),E=Math.max(0,x-g),A=a*r,y=d*E,S=c*E,T=A+v;let b=0,w=0,P="En reposo";Math.abs(T)<=y&&Math.abs(t.v??0)<.01?(b=0,w=-T,P="Equilibrio Estático (Fricción estática retiene el sistema)"):(w=-Math.sign(T||1)*S,b=(T+w)/(o+a),P=b>0?"m₁ acelera a la derecha y m₂ desciende":"Sistema desacelera o se mueve a la izquierda");const C=a>0?Math.max(0,a*(r-b)):0,M=[{id:"m1",label:`Bloque en Mesa m₁ (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:0,subtitle:`Superficie horizontal (μ_k = ${c})`,vectors:[{id:"W1",symbol:"W₁ = m₁g",name:"Peso",magnitude:x,angleDeg:-90,color:"#f43f5e",formula:`${x.toFixed(2)} N`},{id:"N1",symbol:"N₁",name:"Fuerza Normal",magnitude:E,angleDeg:90,color:"#38bdf8",formula:`m₁g - F_ext·senα = ${E.toFixed(2)} N`},...a>0?[{id:"T",symbol:"T",name:"Tensión",magnitude:C,angleDeg:0,color:"#fbbf24",formula:`${C.toFixed(2)} N`}]:[],...Math.abs(h)>.01?[{id:"Fext",symbol:"F_ext",name:"Fuerza Externa",magnitude:Math.abs(h),angleDeg:h>=0?f:180+f,color:"#34d399",formula:`${h.toFixed(1)} N ∠ ${f}°`}]:[],...Math.abs(w)>.01?[{id:"fr",symbol:"f_r",name:"Fricción",magnitude:Math.abs(w),angleDeg:w>=0?0:180,color:"#fb923c",formula:`${Math.abs(w).toFixed(2)} N`}]:[]],equations:[`∑F_y = N₁ + F_ext·sen(${f}°) - m₁g = 0  ⇒  N₁ = ${E.toFixed(2)} N`,`∑F_x = T + F_ext·cos(${f}°) - f_k = m₁·a`]},...a>0?[{id:"m2",label:`Bloque Colgante m₂ (${a.toFixed(1)} kg)`,mass:a,axisAngleDeg:0,subtitle:"Colgando de la polea en el borde",vectors:[{id:"W2",symbol:"W₂ = m₂g",name:"Peso de m₂",magnitude:A,angleDeg:-90,color:"#f43f5e",formula:`${A.toFixed(2)} N`},{id:"T2",symbol:"T",name:"Tensión",magnitude:C,angleDeg:90,color:"#fbbf24",formula:`${C.toFixed(2)} N`}],equations:[`∑F_y = m₂g - T = m₂·a  ⇒  T = ${C.toFixed(2)} N`]}]:[]],R=[{title:"1. Equilibrio Vertical sobre el Bloque m₁ (Fuerza Normal)",detail:`Considerando la componente vertical de la fuerza externa F_ext·sen(${f}°):`,formula:`N₁ = m₁g - F_ext·sen(${f}°) = ${x.toFixed(2)} - ${g.toFixed(2)} = ${E.toFixed(2)} N`},{title:"2. Fuerza de Fricción en la Mesa",detail:`Calculamos la fricción máxima estática y cinética con N₁ = ${E.toFixed(2)} N:`,formula:`f_{s,máx} = ${y.toFixed(2)} N   |   f_k = μ_k·N₁ = ${S.toFixed(2)} N`},{title:"3. Aceleración y Tensión del Sistema",detail:"Combinando las ecuaciones de movimiento de ambos bloques:",formula:`a = ${b.toFixed(3)} m/s²   |   T = m₂(g - a) = ${C.toFixed(2)} N`}];return{sceneType:i,motionState:P,summary:{acceleration:b,tension:C,normal1:E,friction:Math.abs(w),w2:A},fbdBodies:M,steps:R}}if(i==="atwood"){const o=Math.max(.1,Number(e.m1??7)),a=Math.max(.1,Number(e.m2??4)),c=o*r,d=a*r,h=(o-a)*r/(o+a),f=2*o*a*r/(o+a),m=Math.abs(h)<.001?"Equilibrio (m₁ = m₂)":h>0?"m₁ desciende y m₂ asciende con aceleración constante":"m₂ desciende y m₁ asciende con aceleración constante",x=[{id:"m1",label:`Masa Izquierda m₁ (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:0,subtitle:`Aceleración vertical: ${(-h).toFixed(2)} m/s²`,vectors:[{id:"W1",symbol:"W₁ = m₁g",name:"Peso m₁",magnitude:c,angleDeg:-90,color:"#f43f5e",formula:`${c.toFixed(2)} N`},{id:"T1",symbol:"T",name:"Tensión",magnitude:f,angleDeg:90,color:"#fbbf24",formula:`${f.toFixed(2)} N`}],equations:["∑F_y = T - m₁g = -m₁·a"]},{id:"m2",label:`Masa Derecha m₂ (${a.toFixed(1)} kg)`,mass:a,axisAngleDeg:0,subtitle:`Aceleración vertical: ${h.toFixed(2)} m/s²`,vectors:[{id:"W2",symbol:"W₂ = m₂g",name:"Peso m₂",magnitude:d,angleDeg:-90,color:"#f43f5e",formula:`${d.toFixed(2)} N`},{id:"T2",symbol:"T",name:"Tensión",magnitude:f,angleDeg:90,color:"#fbbf24",formula:`${f.toFixed(2)} N`}],equations:["∑F_y = T - m₂g = m₂·a"]}],v=[{title:"1. Ecuaciones de Newton para cada Masa",detail:"Tomando el sentido de movimiento de m₁ hacia abajo y m₂ hacia arriba:",formula:"m₁g - T = m₁·a     y     T - m₂g = m₂·a"},{title:"2. Cálculo de la Aceleración (a)",detail:"Sumando ambas ecuaciones para eliminar la tensión T:",formula:`a = ((m₁ - m₂) / (m₁ + m₂))·g = ((${o} - ${a}) / (${o+a})) × ${r.toFixed(2)} = ${h.toFixed(3)} m/s²`},{title:"3. Cálculo de la Tensión en la Cuerda (T)",detail:"Sustituyendo la aceleración en cualquiera de las dos ecuaciones:",formula:`T = (2·m₁·m₂ / (m₁ + m₂))·g = ${f.toFixed(2)} N`}];return{sceneType:i,motionState:m,summary:{acceleration:h,tension:f,w1:c,w2:d},fbdBodies:x,steps:v}}if(i==="spring_block"){const o=Math.max(.1,Number(e.m1??3)),a=Math.max(1,Number(e.k??45)),c=Number(e.x0??2.2),d=Math.max(0,Number(e.muK??.04)),h=Number(t.x??c),f=Number(t.v??0),m=o*r,x=m,v=-a*h,g=Math.abs(f)>.01?-Math.sign(f)*d*x:0,E=(v+g)/o,A=Math.sqrt(a/o),y=2*Math.PI/A,S=[{id:"m1",label:`Bloque Acoplado m (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:0,subtitle:`Posición instantánea x = ${h.toFixed(2)} m`,vectors:[{id:"W1",symbol:"W = mg",name:"Peso",magnitude:m,angleDeg:-90,color:"#f43f5e",formula:`${m.toFixed(2)} N`},{id:"N1",symbol:"N",name:"Fuerza Normal",magnitude:x,angleDeg:90,color:"#38bdf8",formula:`${x.toFixed(2)} N`},{id:"Fe",symbol:"F_e = -kx",name:"Fuerza Restauradora del Resorte",magnitude:Math.abs(v),angleDeg:v>=0?0:180,color:"#34d399",formula:`-${a} × (${h.toFixed(2)}) = ${v.toFixed(2)} N`},...Math.abs(g)>.01?[{id:"fk",symbol:"f_k",name:"Fricción Cinética",magnitude:Math.abs(g),angleDeg:g>=0?0:180,color:"#fb923c",formula:`${Math.abs(g).toFixed(2)} N`}]:[]],equations:[`F_e = -k·x = -${a}·(${h.toFixed(2)}) = ${v.toFixed(2)} N`,`ω₀ = √(k/m) = ${A.toFixed(2)} rad/s   |   Periodo T = ${y.toFixed(2)} s`]}],T=[{title:"1. Ley de Hooke y Fuerza Restauradora",detail:`Para una elongación inicial x₀ = ${c.toFixed(2)} m y constante k = ${a} N/m:`,formula:`F_{e,máx} = -k·x₀ = ${(-a*c).toFixed(2)} N`},{title:"2. Frecuencia Angular y Periodo de Oscilación",detail:"A partir de la ecuación diferencial m·x'' + k·x = 0:",formula:`ω = √(k / m) = √(${a} / ${o}) = ${A.toFixed(3)} rad/s   ⇒   T = 2π/ω = ${y.toFixed(3)} s`},{title:"3. Energía Mecánica del Oscilador",detail:"Energía potencial elástica máxima almacenada al inicio:",formula:`E_m = ½·k·x₀² = 0.5 × ${a} × (${c})² = ${(.5*a*c*c).toFixed(2)} J`}];return{sceneType:i,motionState:`Oscilación Armónica (ω = ${A.toFixed(2)} rad/s, T = ${y.toFixed(2)} s)`,summary:{acceleration:E,springForce:v,normal1:x,omega:A,period:y,maxEnergy:.5*a*c*c},fbdBodies:S,steps:T}}if(i==="projectile"){const o=Math.max(.1,Number(e.m1??2)),a=Math.max(1,Number(e.v0??22)),c=Number(e.angle??45),d=c*Math.PI/180,h=Math.max(0,Number(e.h0??2)),f=a*Math.cos(d),m=a*Math.sin(d),x=(m+Math.sqrt(m*m+2*r*h))/r,v=f*x,g=h+m*m/(2*r),E=o*r,A=Number(t.vy??m),y=Math.hypot(f,A),S=Math.atan2(A,f)*180/Math.PI,T=[{id:"m1",label:`Proyectil en Vuelo (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:0,subtitle:"En vuelo libre la única fuerza es el peso W = mg",vectors:[{id:"W1",symbol:"W = mg",name:"Fuerza Gravitatoria (Peso)",magnitude:E,angleDeg:-90,color:"#f43f5e",formula:`${o} × ${r.toFixed(2)} = ${E.toFixed(2)} N`},{id:"vx",symbol:"vₓ (cte)",name:"Velocidad Horizontal",magnitude:f,angleDeg:0,color:"#38bdf8",dashed:!0,formula:`v₀·cos(${c}°) = ${f.toFixed(2)} m/s`},{id:"vy",symbol:"vᵧ(t)",name:"Velocidad Vertical",magnitude:Math.abs(A),angleDeg:A>=0?90:-90,color:"#a78bfa",dashed:!0,formula:`v₀ᵧ - g·t = ${A.toFixed(2)} m/s`},{id:"v",symbol:"v⃗(t)",name:"Vector Velocidad Total",magnitude:y,angleDeg:S,color:"#34d399",formula:`|v⃗| = ${y.toFixed(2)} m/s`}],equations:[`∑F_x = 0  ⇒  a_x = 0,  v_x = ${f.toFixed(2)} m/s (MRU)`,`∑F_y = -mg  ⇒  a_y = -${r.toFixed(2)} m/s² (MRUA)`]}],b=[{title:"1. Componentes Iniciales de la Velocidad",detail:`Descomponiendo v₀ = ${a} m/s con ángulo θ = ${c}°:`,formula:`v₀ₓ = v₀·cos(${c}°) = ${f.toFixed(2)} m/s   |   v₀ᵧ = v₀·sen(${c}°) = ${m.toFixed(2)} m/s`},{title:"2. Altura Máxima (y_máx)",detail:"En el punto más alto de la parábola, v_y = 0:",formula:`y_{máx} = h₀ + v₀ᵧ² / (2g) = ${h} + (${m.toFixed(2)})² / (2 × ${r.toFixed(2)}) = ${g.toFixed(2)} m`},{title:"3. Tiempo de Vuelo y Alcance Horizontal (R)",detail:"Resolviendo y(t) = h₀ + v₀ᵧ·t - ½g·t² = 0:",formula:`t_{vuelo} = ${x.toFixed(2)} s   ⇒   Alcance R = v₀ₓ · t_{vuelo} = ${v.toFixed(2)} m`}];return{sceneType:i,motionState:`Trayectoria Parabólica (Alcance: ${v.toFixed(1)} m, H_máx: ${g.toFixed(1)} m)`,summary:{acceleration:-r,v0x:f,v0y:m,tFlight:x,maxRange:v,maxHeight:g},fbdBodies:T,steps:b}}if(i==="pendulum"){const o=Math.max(.1,Number(e.m1??2.5)),a=Math.max(.5,Number(e.length??3.5)),c=Number(e.angle0??40),d=Number(t.theta??c*Math.PI/180),h=Number(t.omega??0),f=d*180/Math.PI,m=o*r,x=m*Math.cos(d),v=m*Math.sin(d),g=Math.abs(h*a),E=x+o*g*g/a,A=-r*Math.sin(d),y=g*g/a,S=2*Math.PI*Math.sqrt(a/r),T=90-f,b=[{id:"m1",label:`Esfera del Péndulo (${o.toFixed(1)} kg)`,mass:o,axisAngleDeg:-f,subtitle:`Ángulo instantáneo θ = ${f.toFixed(1)}°`,vectors:[{id:"W",symbol:"W = mg",name:"Peso",magnitude:m,angleDeg:-90,color:"#f43f5e",formula:`${m.toFixed(2)} N`},{id:"T",symbol:"T",name:"Tensión de la Cuerda",magnitude:E,angleDeg:T,color:"#fbbf24",formula:`mg·cosθ + m·v²/L = ${E.toFixed(2)} N`},{id:"Wt",symbol:"W_t = mg·senθ",name:"Componente Tangencial (Restauradora)",magnitude:Math.abs(v),angleDeg:d>=0?180-f:-f,color:"#fb7185",dashed:!0,formula:`${Math.abs(v).toFixed(2)} N`},{id:"Wr",symbol:"W_r = mg·cosθ",name:"Componente Radial",magnitude:Math.abs(x),angleDeg:T-180,color:"#fda4af",dashed:!0,formula:`${Math.abs(x).toFixed(2)} N`}],equations:[`∑F_radial = T - mg·cosθ = m·v²/L  ⇒  T = ${E.toFixed(2)} N`,`∑F_tangencial = -mg·senθ = m·a_t  ⇒  a_t = ${A.toFixed(2)} m/s²`]}],w=[{title:"1. Descomposición en Ejes Radial y Tangencial",detail:`En un ángulo θ = ${f.toFixed(1)}°, descomponemos el peso W = ${m.toFixed(2)} N:`,formula:`W_r = mg·cosθ = ${x.toFixed(2)} N   |   W_t = mg·senθ = ${Math.abs(v).toFixed(2)} N`},{title:"2. Tensión de la Cuerda (Fuerza Centrípeta)",detail:"La tensión debe equilibrar W_r y proveer la aceleración centrípeta a_c = v²/L:",formula:`T = mg·cosθ + m·v²/L = ${E.toFixed(2)} N`},{title:"3. Periodo de Oscilación",detail:`Para una longitud L = ${a} m y gravedad g = ${r.toFixed(2)} m/s²:`,formula:`T₀ ≈ 2π·√(L / g) = ${S.toFixed(3)} s`}];return{sceneType:i,motionState:`Oscilación Pendular (Tensión T = ${E.toFixed(1)} N, Periodo ≈ ${S.toFixed(2)} s)`,summary:{acceleration:A,centripetalAcc:y,tension:E,period:S},fbdBodies:b,steps:w}}return Dx(e,t)}function Dx(i,e={}){const t=Number(i.g??9.81),r=e.sandboxObjects||[],o=e.sandboxRopes||[],a=r.filter(g=>g.type==="block"||g.type==="hanging_mass"),c=[],d=[];let h=0,f=0;if(a.length===0)return{sceneType:"sandbox_game",motionState:"Agrega bloques, poleas y cuerdas en el lienzo",summary:{acceleration:0,tension:0},fbdBodies:[],steps:[{title:"Constructor Interactivo Listo",detail:"Usa la barra de herramientas del Modo Juego para añadir bloques, rampas, poleas y conectarlos con cuerdas.",formula:"∑F⃗ = m·a⃗"}]};const m=o[0];let x=m?a.find(g=>g.id===m.fromId):null,v=m?a.find(g=>g.id===m.toId):null;if(x&&v){const g=Number(x.mass||5),E=Number(v.mass||4),A=(Number(x.angleDeg)||0)*Math.PI/180,y=(Number(v.angleDeg)||0)*Math.PI/180,S=Number(x.mu||.15),T=Number(v.mu||0),b=g*t,w=E*t,P=x.type==="hanging_mass"?0:b*Math.cos(A),C=v.type==="hanging_mass"?0:w*Math.cos(y),M=S*P,R=T*C,O=x.type==="hanging_mass"?b:b*Math.sin(A)-Number(x.fExt||0),I=(v.type==="hanging_mass"?w:w*Math.sin(y)+Number(v.fExt||0))-O,V=M+R;if(Math.abs(I)<=V)h=0;else{const K=Math.sign(I);h=(I-K*V)/(g+E)}f=v.type==="hanging_mass"?Math.max(0,E*(t-h)):Math.max(0,g*h+O+M),d.push({title:`1. Sistema Acoplado por Cuerda (${x.label} ↔ ${v.label})`,detail:"Dos cuerpos conectados por cuerda ideal comparten la misma magnitud de aceleración |a| y tensión T:",formula:`m₁ = ${g} kg,  m₂ = ${E} kg   ⇒   a = ${h.toFixed(2)} m/s²,   T = ${f.toFixed(2)} N`})}return a.forEach((g,E)=>{const A=Number(g.mass||4),y=Number(g.angleDeg||0),S=y*Math.PI/180,T=Number(g.mu??.15),b=Number(g.fExt||0),w=g.type==="hanging_mass",P=A*t,C=w?P:P*Math.sin(S),M=w?0:P*Math.cos(S),R=w?0:M,O=w?0:T*R,F=o.some(B=>B.fromId===g.id||B.toId===g.id),I=F?f:0,V=F?h:w?t:(b-C+(Math.abs(b-C)>O?-Math.sign(b-C)*O:-(b-C)))/A;!F&&E===0&&(h=V);const K=[{id:`W_${g.id}`,symbol:"W = mg",name:"Peso",magnitude:P,angleDeg:-90,color:"#f43f5e",formula:`${A} × ${t.toFixed(2)} = ${P.toFixed(2)} N`}];w||(K.push({id:`N_${g.id}`,symbol:"N",name:"Fuerza Normal",magnitude:R,angleDeg:90+y,color:"#38bdf8",formula:`${R.toFixed(2)} N`}),y!==0&&K.push({id:`Wx_${g.id}`,symbol:"mg·senθ",name:"Comp. Peso Paralela",magnitude:Math.abs(C),angleDeg:180+y,color:"#fb7185",dashed:!0,formula:`${Math.abs(C).toFixed(2)} N`}),O>.01&&K.push({id:`fk_${g.id}`,symbol:"f_r",name:"Fricción",magnitude:O,angleDeg:y+(V>=0?180:0),color:"#fb923c",formula:`μ·N = ${O.toFixed(2)} N`})),F&&K.push({id:`T_${g.id}`,symbol:"T",name:"Tensión de Cuerda",magnitude:I,angleDeg:w?90:y,color:"#fbbf24",formula:`${I.toFixed(2)} N`}),Math.abs(b)>.01&&K.push({id:`Fext_${g.id}`,symbol:"F_ext",name:"Fuerza Aplicada",magnitude:Math.abs(b),angleDeg:b>=0?y:180+y,color:"#34d399",formula:`${b.toFixed(1)} N`}),c.push({id:g.id,label:`${g.label||`Objeto ${E+1}`} (${A.toFixed(1)} kg)`,mass:A,axisAngleDeg:w?0:y,subtitle:w?"Masa suspendida por cuerda":y!==0?`En rampa θ = ${y}°, μ = ${T}`:`Superficie horizontal, μ = ${T}`,vectors:K,equations:w?[`∑F_y = T - mg = m·a  ⇒  W = ${P.toFixed(2)} N`]:[`∑F_y' = N - mg·cos(${y}°) = 0  ⇒  N = ${R.toFixed(2)} N`,`∑F_x' = ${F?"T + ":""}${b?"F_ext ":""}- mg·sen(${y}°) - f_r = m·a`]}),d.push({title:`Análisis Dinámico de ${g.label||`Bloque ${E+1}`} (${A} kg)`,detail:w?`Cuerpo colgante sometido a su peso W = ${P.toFixed(2)} N y tensión T = ${I.toFixed(2)} N.`:`Sobre plano a ${y}°: Normal N = ${R.toFixed(2)} N, Fricción f_r = ${O.toFixed(2)} N.`,formula:`a = ${V.toFixed(2)} m/s²`})}),{sceneType:"sandbox_game",motionState:o.length>0?`Sistema con ${a.length} cuerpos y ${o.length} cuerda(s) activa(s)`:`Escena libre con ${a.length} cuerpo(s)`,summary:{acceleration:h,tension:f,bodiesCount:a.length,ropesCount:o.length},fbdBodies:c,steps:d}}const qm=[{id:"prob_incline_pulley",title:"Problema Clásico: Dos bloques en plano inclinado con polea",badge:"Dinámica + Polea",statement:"Un bloque m₁ = 8.0 kg descansa sobre un plano inclinado a θ = 35° respecto a la horizontal con coeficiente de fricción cinética μ_k = 0.18. Está unido mediante una cuerda ligera que pasa por una polea sin fricción a una masa colgante m₂ = 6.5 kg. Calcula: a) Los diagramas de cuerpo libre de ambos bloques, b) La magnitud de la aceleración del sistema y c) La tensión T en la cuerda.",sceneType:"incline_pulley",params:{m1:8,m2:6.5,angle:35,muK:.18,muS:.25,fExt:0,g:9.81}},{id:"prob_table_pulley",title:"Bloque en mesa rugosa conectado a masa colgante",badge:"Sistemas Conectados",statement:"Un bloque m₁ = 5.0 kg sobre una mesa horizontal con coeficiente de fricción μ_k = 0.20 es jalado por una cuerda conectada a un bloque colgante m₂ = 3.5 kg que pasa por una polea en el borde. Además se aplica una fuerza externa F_ext = 12 N hacia la derecha. Halla la aceleración y la tensión.",sceneType:"horizontal_table",params:{m1:5,m2:3.5,muK:.2,muS:.25,fExt:12,fAngle:0,g:9.81}},{id:"prob_atwood",title:"Máquina de Atwood con masas de 9 kg y 5 kg",badge:"Poleas & Tensión",statement:"En una máquina de Atwood ideal, dos bloques de masas m₁ = 9.0 kg y m₂ = 5.0 kg cuelgan verticalmente a ambos lados de una polea sin masa ni fricción. Determina la aceleración de cada bloque y la tensión en la cuerda.",sceneType:"atwood",params:{m1:9,m2:5,g:9.81}},{id:"prob_projectile",title:"Lanzamiento de proyectil desde plataforma a 4 m",badge:"Cinemática 2D",statement:"Se dispara una esfera de 2.0 kg desde una plataforma de h₀ = 4.0 m de altura con velocidad inicial v₀ = 24 m/s y ángulo de elevación de 40°. Determina la altura máxima, el tiempo total de vuelo y el alcance horizontal.",sceneType:"projectile",params:{m1:2,v0:24,angle:40,h0:4,g:9.81}},{id:"prob_spring",title:"Oscilador Masa-Resorte con fricción ligera",badge:"Ley de Hooke",statement:"Un bloque de m = 4.0 kg está sujeto a un resorte horizontal de constante elástica k = 64 N/m. Se estira x₀ = 2.0 m desde el equilibrio y se suelta desde el reposo sobre una pista con μ_k = 0.03. Determina la fuerza restauradora máxima, la frecuencia angular ω y el periodo T.",sceneType:"spring_block",params:{m1:4,k:64,x0:2,muK:.03,g:9.81}}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="187",oo={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ix=0,jm=1,Fx=2,dc=1,fg=2,aa=3,ms=0,ei=1,fr=2,ao=0,ua=1,Km=2,Zm=3,Jm=4,Ux=5,io=100,Ox=101,kx=102,Bx=103,zx=104,Hx=200,Gx=201,Vx=202,Wx=203,pg=204,mg=205,Xx=206,$x=207,Yx=208,qx=209,jx=210,Kx=211,Zx=212,Jx=213,Qx=214,th=0,nh=1,ih=2,fa=3,rh=4,sh=5,oh=6,ah=7,gg=0,ey=1,ty=2,mr=0,vg=1,_g=2,xg=3,Nc=4,yg=5,Sg=6,Mg=7,Eg=300,co=301,pa=302,xd=303,yd=304,lh=1e3,pr=1001,ch=1002,Ln=1003,ny=1004,Nl=1005,Qn=1006,Sd=1007,Gr=1008,li=1009,wg=1010,bg=1011,ma=1012,qh=1013,Yi=1014,Vi=1015,qi=1016,jh=1017,Kh=1018,uo=1020,Tg=35902,Ag=35899,Rg=1021,Cg=1022,Wi=1023,Xr=1026,Vr=1027,Pg=1028,Zh=1029,gs=1030,Jh=1031,Qh=1033,hc=33776,fc=33777,pc=33778,mc=33779,uh=35840,dh=35841,hh=35842,fh=35843,ph=36196,mh=37492,gh=37496,vh=37488,_h=37489,xc=37490,xh=37491,yh=37808,Sh=37809,Mh=37810,Eh=37811,wh=37812,bh=37813,Th=37814,Ah=37815,Rh=37816,Ch=37817,Ph=37818,Nh=37819,Lh=37820,Dh=37821,Ih=36492,Fh=36494,Uh=36495,Oh=36283,kh=36284,yc=36285,Bh=36286,iy=3200,zh=0,ry=1,Hr="",xi="srgb",Sc="srgb-linear",Mc="linear",Yt="srgb",Md=7680,sy=519,oy=512,ay=513,ly=514,Ng=515,cy=516,uy=517,Lg=518,Dg=519,dy=35044,Qm="300 es",Ni=2e3,ga=2001;function hy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ec(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fy(){const i=Ec("canvas");return i.style.display="block",i}const e0={};function t0(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ig(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function _t(...i){i=Ig(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function zt(...i){i=Ig(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gc(...i){const e=i.join(" ");e in e0||(e0[e]=!0,_t(...i))}function py(i,e,t){return new Promise(function(r,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const my={[th]:th,[ih]:oh,[rh]:rh,[fa]:sh,[nh]:nh,[oh]:ih,[ah]:ah,[sh]:fa};class qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,wc=180/Math.PI;function mo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function gy(i,e){return(i%e+e)%e}function Ed(i,e,t){return(1-t)*i+t*e}function vy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _y(i,e){if(e.constructor===Float32Array)return i;const t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function xy(i,e){if(e.constructor===Float32Array)return i;const t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const yy={DEG2RAD:vc},vf=class vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vf.prototype.isVector2=!0;let ke=vf;class $r{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,d){let h=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3],v=a[c+0],g=a[c+1],E=a[c+2],A=a[c+3];if(x!==A||h!==v||f!==g||m!==E){let y=h*v+f*g+m*E+x*A;y<0&&(v=-v,g=-g,E=-E,A=-A,y=-y);let S=1-d;if(y<.9995){const T=Math.acos(y),b=Math.sin(T);S=Math.sin(S*T)/b,d=Math.sin(d*T)/b,h=h*S+v*d,f=f*S+g*d,m=m*S+E*d,x=x*S+A*d}else{h=h*S+v*d,f=f*S+g*d,m=m*S+E*d,x=x*S+A*d;const T=1/Math.sqrt(h*h+f*f+m*m+x*x);h*=T,f*=T,m*=T,x*=T}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,a,c){const d=r[o],h=r[o+1],f=r[o+2],m=r[o+3],x=a[c],v=a[c+1],g=a[c+2],E=a[c+3];return e[t]=d*E+m*x+h*g-f*v,e[t+1]=h*E+m*v+f*x-d*g,e[t+2]=f*E+m*g+d*v-h*x,e[t+3]=m*E-d*x-h*v-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(r/2),m=d(o/2),x=d(a/2),v=h(r/2),g=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=v*m*x+f*g*E,this._y=f*g*x-v*m*E,this._z=f*m*E+v*g*x,this._w=f*m*x-v*g*E;break;case"YXZ":this._x=v*m*x+f*g*E,this._y=f*g*x-v*m*E,this._z=f*m*E-v*g*x,this._w=f*m*x+v*g*E;break;case"ZXY":this._x=v*m*x-f*g*E,this._y=f*g*x+v*m*E,this._z=f*m*E+v*g*x,this._w=f*m*x-v*g*E;break;case"ZYX":this._x=v*m*x-f*g*E,this._y=f*g*x+v*m*E,this._z=f*m*E-v*g*x,this._w=f*m*x+v*g*E;break;case"YZX":this._x=v*m*x+f*g*E,this._y=f*g*x+v*m*E,this._z=f*m*E-v*g*x,this._w=f*m*x-v*g*E;break;case"XZY":this._x=v*m*x-f*g*E,this._y=f*g*x-v*m*E,this._z=f*m*E+v*g*x,this._w=f*m*x+v*g*E;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],d=t[5],h=t[9],f=t[2],m=t[6],x=t[10],v=r+d+x;if(v>0){const g=.5/Math.sqrt(v+1);this._w=.25/g,this._x=(m-h)*g,this._y=(a-f)*g,this._z=(c-o)*g}else if(r>d&&r>x){const g=2*Math.sqrt(1+r-d-x);this._w=(m-h)/g,this._x=.25*g,this._y=(o+c)/g,this._z=(a+f)/g}else if(d>x){const g=2*Math.sqrt(1+d-r-x);this._w=(a-f)/g,this._x=(o+c)/g,this._y=.25*g,this._z=(h+m)/g}else{const g=2*Math.sqrt(1+x-r-d);this._w=(c-o)/g,this._x=(a+f)/g,this._y=(h+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=r*m+c*d+o*f-a*h,this._y=o*m+c*h+a*d-r*f,this._z=a*m+c*f+r*h-o*d,this._w=c*m-r*d-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,a=-a,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _f=class _f{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(n0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(n0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*o-d*r),m=2*(d*t-a*o),x=2*(a*r-c*t);return this.x=t+h*f+c*x-d*m,this.y=r+h*m+d*f-a*x,this.z=o+h*x+a*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,d=t.y,h=t.z;return this.x=o*h-a*d,this.y=a*c-r*h,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_f.prototype.isVector3=!0;let G=_f;const wd=new G,n0=new $r,xf=class xf{constructor(e,t,r,o,a,c,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,d,h,f)}set(e,t,r,o,a,c,d,h,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=a,m[5]=h,m[6]=r,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],d=r[3],h=r[6],f=r[1],m=r[4],x=r[7],v=r[2],g=r[5],E=r[8],A=o[0],y=o[3],S=o[6],T=o[1],b=o[4],w=o[7],P=o[2],C=o[5],M=o[8];return a[0]=c*A+d*T+h*P,a[3]=c*y+d*b+h*C,a[6]=c*S+d*w+h*M,a[1]=f*A+m*T+x*P,a[4]=f*y+m*b+x*C,a[7]=f*S+m*w+x*M,a[2]=v*A+g*T+E*P,a[5]=v*y+g*b+E*C,a[8]=v*S+g*w+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*d*f-r*a*m+r*d*h+o*a*f-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],x=m*c-d*f,v=d*h-m*a,g=f*a-c*h,E=t*x+r*v+o*g;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*f-m*r)*A,e[2]=(d*r-o*c)*A,e[3]=v*A,e[4]=(m*t-o*h)*A,e[5]=(o*a-d*t)*A,e[6]=g*A,e[7]=(r*h-f*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,d){const h=Math.cos(a),f=Math.sin(a);return this.set(r*h,r*f,-r*(h*c+f*d)+c+e,-o*f,o*h,-o*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return gc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return gc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return gc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xf.prototype.isMatrix3=!0;let Et=xf;const bd=new Et,i0=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){const i={enabled:!0,workingColorSpace:Sc,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Yt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(o.r=lo(o.r),o.g=lo(o.g),o.b=lo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hr?Mc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Sc]:{primaries:e,whitePoint:r,transfer:Mc,toXYZ:i0,fromXYZ:r0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:i0,fromXYZ:r0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),i}const Ut=Sy();function gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class My{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Xs===void 0&&(Xs=Ec("canvas")),Xs.width=e.width,Xs.height=e.height;const o=Xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Xs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=gr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ey=0;class tf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?a.push(Td(o[c].image)):a.push(Td(o[c]))}else a=Td(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Td(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?My.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let wy=0;const Ad=new G;class Xn extends qr{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=pr,o=pr,a=Qn,c=Gr,d=Wi,h=li,f=Xn.DEFAULT_ANISOTROPY,m=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=mo(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Eg;Xn.DEFAULT_ANISOTROPY=1;const yf=class yf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const h=e.elements,f=h[0],m=h[4],x=h[8],v=h[1],g=h[5],E=h[9],A=h[2],y=h[6],S=h[10];if(Math.abs(m-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(f+g+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(f+1)/2,w=(g+1)/2,P=(S+1)/2,C=(m+v)/4,M=(x+A)/4,R=(E+y)/4;return b>w&&b>P?b<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(b),o=C/r,a=M/r):w>P?w<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(w),r=C/o,a=R/o):P<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),r=M/a,o=R/a),this.set(r,o,a,t),this}let T=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(v-m)*(v-m));return Math.abs(T)<.001&&(T=1),this.x=(y-E)/T,this.y=(x-A)/T,this.z=(v-m)/T,this.w=Math.acos((f+g+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yf.prototype.isVector4=!0;let ln=yf;class by extends qr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=new Xn({width:e,height:t,depth:r.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new tf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends by{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fg extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Pc=class Pc{constructor(e,t,r,o,a,c,d,h,f,m,x,v,g,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,d,h,f,m,x,v,g,E,A,y)}set(e,t,r,o,a,c,d,h,f,m,x,v,g,E,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=d,S[13]=h,S[2]=f,S[6]=m,S[10]=x,S[14]=v,S[3]=g,S[7]=E,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(o),f=Math.sin(o),m=Math.cos(a),x=Math.sin(a);if(e.order==="XYZ"){const v=c*m,g=c*x,E=d*m,A=d*x;t[0]=h*m,t[4]=-h*x,t[8]=f,t[1]=g+E*f,t[5]=v-A*f,t[9]=-d*h,t[2]=A-v*f,t[6]=E+g*f,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,g=h*x,E=f*m,A=f*x;t[0]=v+A*d,t[4]=E*d-g,t[8]=c*f,t[1]=c*x,t[5]=c*m,t[9]=-d,t[2]=g*d-E,t[6]=A+v*d,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,g=h*x,E=f*m,A=f*x;t[0]=v-A*d,t[4]=-c*x,t[8]=E+g*d,t[1]=g+E*d,t[5]=c*m,t[9]=A-v*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,g=c*x,E=d*m,A=d*x;t[0]=h*m,t[4]=E*f-g,t[8]=v*f+A,t[1]=h*x,t[5]=A*f+v,t[9]=g*f-E,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,g=c*f,E=d*h,A=d*f;t[0]=h*m,t[4]=A-v*x,t[8]=E*x+g,t[1]=x,t[5]=c*m,t[9]=-d*m,t[2]=-f*m,t[6]=g*x+E,t[10]=v-A*x}else if(e.order==="XZY"){const v=c*h,g=c*f,E=d*h,A=d*f;t[0]=h*m,t[4]=-x,t[8]=f*m,t[1]=v*x+A,t[5]=c*m,t[9]=g*x-E,t[2]=E*x-g,t[6]=d*m,t[10]=A*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,Ry)}lookAt(e,t,r){const o=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Fr.crossVectors(r,oi),Fr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Fr.crossVectors(r,oi)),Fr.normalize(),Ll.crossVectors(oi,Fr),o[0]=Fr.x,o[4]=Ll.x,o[8]=oi.x,o[1]=Fr.y,o[5]=Ll.y,o[9]=oi.y,o[2]=Fr.z,o[6]=Ll.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],d=r[4],h=r[8],f=r[12],m=r[1],x=r[5],v=r[9],g=r[13],E=r[2],A=r[6],y=r[10],S=r[14],T=r[3],b=r[7],w=r[11],P=r[15],C=o[0],M=o[4],R=o[8],O=o[12],F=o[1],I=o[5],V=o[9],K=o[13],B=o[2],ee=o[6],oe=o[10],X=o[14],$=o[3],Z=o[7],j=o[11],U=o[15];return a[0]=c*C+d*F+h*B+f*$,a[4]=c*M+d*I+h*ee+f*Z,a[8]=c*R+d*V+h*oe+f*j,a[12]=c*O+d*K+h*X+f*U,a[1]=m*C+x*F+v*B+g*$,a[5]=m*M+x*I+v*ee+g*Z,a[9]=m*R+x*V+v*oe+g*j,a[13]=m*O+x*K+v*X+g*U,a[2]=E*C+A*F+y*B+S*$,a[6]=E*M+A*I+y*ee+S*Z,a[10]=E*R+A*V+y*oe+S*j,a[14]=E*O+A*K+y*X+S*U,a[3]=T*C+b*F+w*B+P*$,a[7]=T*M+b*I+w*ee+P*Z,a[11]=T*R+b*V+w*oe+P*j,a[15]=T*O+b*K+w*X+P*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],d=e[5],h=e[9],f=e[13],m=e[2],x=e[6],v=e[10],g=e[14],E=e[3],A=e[7],y=e[11],S=e[15],T=h*g-f*v,b=d*g-f*x,w=d*v-h*x,P=c*g-f*m,C=c*v-h*m,M=c*x-d*m;return t*(A*T-y*b+S*w)-r*(E*T-y*P+S*C)+o*(E*b-A*P+S*M)-a*(E*w-A*C+y*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],d=e[9],h=e[2],f=e[6],m=e[10];return t*(c*m-d*f)-r*(a*m-d*h)+o*(a*f-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],x=e[9],v=e[10],g=e[11],E=e[12],A=e[13],y=e[14],S=e[15],T=t*d-r*c,b=t*h-o*c,w=t*f-a*c,P=r*h-o*d,C=r*f-a*d,M=o*f-a*h,R=m*A-x*E,O=m*y-v*E,F=m*S-g*E,I=x*y-v*A,V=x*S-g*A,K=v*S-g*y,B=T*K-b*V+w*I+P*F-C*O+M*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/B;return e[0]=(d*K-h*V+f*I)*ee,e[1]=(o*V-r*K-a*I)*ee,e[2]=(A*M-y*C+S*P)*ee,e[3]=(v*C-x*M-g*P)*ee,e[4]=(h*F-c*K-f*O)*ee,e[5]=(t*K-o*F+a*O)*ee,e[6]=(y*w-E*M-S*b)*ee,e[7]=(m*M-v*w+g*b)*ee,e[8]=(c*V-d*F+f*R)*ee,e[9]=(r*F-t*V-a*R)*ee,e[10]=(E*C-A*w+S*T)*ee,e[11]=(x*w-m*C-g*T)*ee,e[12]=(d*O-c*I-h*R)*ee,e[13]=(t*I-r*O+o*R)*ee,e[14]=(A*b-E*P-y*T)*ee,e[15]=(m*P-x*b+v*T)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,d=e.y,h=e.z,f=a*c,m=a*d;return this.set(f*c+r,f*d-o*h,f*h+o*d,0,f*d+o*h,m*d+r,m*h-o*c,0,f*h-o*d,m*h+o*c,a*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,d=t._z,h=t._w,f=a+a,m=c+c,x=d+d,v=a*f,g=a*m,E=a*x,A=c*m,y=c*x,S=d*x,T=h*f,b=h*m,w=h*x,P=r.x,C=r.y,M=r.z;return o[0]=(1-(A+S))*P,o[1]=(g+w)*P,o[2]=(E-b)*P,o[3]=0,o[4]=(g-w)*C,o[5]=(1-(v+S))*C,o[6]=(y+T)*C,o[7]=0,o[8]=(E+b)*M,o[9]=(y-T)*M,o[10]=(1-(v+A))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=$s.set(o[0],o[1],o[2]).length();const d=$s.set(o[4],o[5],o[6]).length(),h=$s.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ai.copy(this);const f=1/c,m=1/d,x=1/h;return Ai.elements[0]*=f,Ai.elements[1]*=f,Ai.elements[2]*=f,Ai.elements[4]*=m,Ai.elements[5]*=m,Ai.elements[6]*=m,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,t.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,o,a,c,d=Ni,h=!1){const f=this.elements,m=2*a/(t-e),x=2*a/(r-o),v=(t+e)/(t-e),g=(r+o)/(r-o);let E,A;if(h)E=a/(c-a),A=c*a/(c-a);else if(d===Ni)E=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(d===ga)E=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=x,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,a,c,d=Ni,h=!1){const f=this.elements,m=2/(t-e),x=2/(r-o),v=-(t+e)/(t-e),g=-(r+o)/(r-o);let E,A;if(h)E=1/(c-a),A=c/(c-a);else if(d===Ni)E=-2/(c-a),A=-(c+a)/(c-a);else if(d===ga)E=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=x,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=E,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Pc.prototype.isMatrix4=!0;let Zt=Pc;const $s=new G,Ai=new Zt,Ay=new G(0,0,0),Ry=new G(1,1,1),Fr=new G,Ll=new G,oi=new G,s0=new Zt,o0=new $r;class Yr{constructor(e=0,t=0,r=0,o=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],d=o[8],h=o[1],f=o[5],m=o[9],x=o[2],v=o[6],g=o[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,g),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,g),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Ct(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,g),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(d,g));break;case"XZY":this._z=Math.asin(-Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-m,g),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return s0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return o0.setFromEuler(this),this.setFromQuaternion(o0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cy=0;const a0=new G,Ys=new $r,rr=new Zt,Dl=new G,ea=new G,Py=new G,Ny=new $r,l0=new G(1,0,0),c0=new G(0,1,0),u0=new G(0,0,1),d0={type:"added"},Ly={type:"removed"},qs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class mn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new G,t=new Yr,r=new $r,o=new G(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Et}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(c0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return a0.copy(e).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(c0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(ea,Dl,this.up):rr.lookAt(Dl,ea,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),Ys.setFromRotationMatrix(rr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),qs.child=e,this.dispatchEvent(qs),qs.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ly),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Ny,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const x=h[f];a(e.shapes,x)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(a(e.materials,this.material[h]));o.material=d}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(a(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),x=c(e.shapes),v=c(e.skeletons),g=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),g.length>0&&(r.animations=g),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ci extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dy={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),S=this._getHandJoint(f,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],v=m.position.distanceTo(x.position),g=.02,E=.005;f.inputState.pinching&&v>g+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=g-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ci;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Pd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=gy(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Pd(c,a,e+1/3),this.g=Pd(c,a,e),this.b=Pd(c,a,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(a){a!==void 0&&parseFloat(a)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Og[e.toLowerCase()];return r!==void 0?this.setHex(r,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ut.workingToColorSpace(Bn.copy(this),e),Math.round(Ct(Bn.r*255,0,255))*65536+Math.round(Ct(Bn.g*255,0,255))*256+Math.round(Ct(Bn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Bn.copy(this),t);const r=Bn.r,o=Bn.g,a=Bn.b,c=Math.max(r,o,a),d=Math.min(r,o,a);let h,f;const m=(d+c)/2;if(d===c)h=0,f=0;else{const x=c-d;switch(f=m<=.5?x/(c+d):x/(2-c-d),c){case r:h=(o-a)/x+(o<a?6:0);break;case o:h=(a-r)/x+2;break;case a:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=xi){Ut.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,r=Bn.g,o=Bn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Il);const r=Ed(Ur.h,Il.h,t),o=Ed(Ur.s,Il.s,t),a=Ed(Ur.l,Il.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new At;At.NAMES=Og;class Lc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nf extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new G,sr=new G,Nd=new G,or=new G,js=new G,Ks=new G,h0=new G,Ld=new G,Dd=new G,Id=new G,Fd=new ln,Ud=new ln,Od=new ln;class Pi{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ri.subVectors(e,t),o.cross(Ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ri.subVectors(o,t),sr.subVectors(r,t),Nd.subVectors(e,t);const c=Ri.dot(Ri),d=Ri.dot(sr),h=Ri.dot(Nd),f=sr.dot(sr),m=sr.dot(Nd),x=c*f-d*d;if(x===0)return a.set(0,0,0),null;const v=1/x,g=(f*h-d*m)*v,E=(c*m-d*h)*v;return a.set(1-g-E,E,g)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,o,a,c,d,h){return this.getBarycoord(e,t,r,o,or)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,or.x),h.addScaledVector(c,or.y),h.addScaledVector(d,or.z),h)}static getInterpolatedAttribute(e,t,r,o,a,c){return Fd.setScalar(0),Ud.setScalar(0),Od.setScalar(0),Fd.fromBufferAttribute(e,t),Ud.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Fd,a.x),c.addScaledVector(Ud,a.y),c.addScaledVector(Od,a.z),c}static isFrontFacing(e,t,r,o){return Ri.subVectors(r,t),sr.subVectors(e,t),Ri.cross(sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ri.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Pi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,d;js.subVectors(o,r),Ks.subVectors(a,r),Ld.subVectors(e,r);const h=js.dot(Ld),f=Ks.dot(Ld);if(h<=0&&f<=0)return t.copy(r);Dd.subVectors(e,o);const m=js.dot(Dd),x=Ks.dot(Dd);if(m>=0&&x<=m)return t.copy(o);const v=h*x-m*f;if(v<=0&&h>=0&&m<=0&&h-m>0)return c=h/(h-m),t.copy(r).addScaledVector(js,c);Id.subVectors(e,a);const g=js.dot(Id),E=Ks.dot(Id);if(E>=0&&g<=E)return t.copy(a);const A=g*f-h*E;if(A<=0&&f>=0&&E<=0)return d=f/(f-E),t.copy(r).addScaledVector(Ks,d);const y=m*E-g*x;if(y<=0&&x-m>=0&&g-E>=0)return h0.subVectors(a,o),d=(x-m)/(x-m+(g-E)),t.copy(o).addScaledVector(h0,d);const S=1/(y+A+v);return c=A*S,d=v*S,t.copy(r).addScaledVector(js,c).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=a.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(a,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Ul.subVectors(this.max,ta),Zs.subVectors(e.a,ta),Js.subVectors(e.b,ta),Qs.subVectors(e.c,ta),Or.subVectors(Js,Zs),kr.subVectors(Qs,Js),cs.subVectors(Zs,Qs);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-cs.z,cs.y,Or.z,0,-Or.x,kr.z,0,-kr.x,cs.z,0,-cs.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-cs.y,cs.x,0];return!kd(t,Zs,Js,Qs,Ul)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,Zs,Js,Qs,Ul))?!1:(Ol.crossVectors(Or,kr),t=[Ol.x,Ol.y,Ol.z],kd(t,Zs,Js,Qs,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new G,new G,new G,new G,new G,new G,new G,new G],Ci=new G,Fl=new Ea,Zs=new G,Js=new G,Qs=new G,Or=new G,kr=new G,cs=new G,ta=new G,Ul=new G,Ol=new G,us=new G;function kd(i,e,t,r,o){for(let a=0,c=i.length-3;a<=c;a+=3){us.fromArray(i,a);const d=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),h=e.dot(us),f=t.dot(us),m=r.dot(us);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const vn=new G,kl=new ke;let Iy=0;class Wr extends qr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=dy,this.updateRanges=[],this.gpuType=Vi,this.version=0,this._normalizationScale=e!==void 0?ef(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_y(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):xy(e,this.array)}}class kg extends Wr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Bg extends Wr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vt extends Wr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Fy=new Ea,na=new G,Bd=new G;class wa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Fy.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Bd)),this.expandByPoint(na.copy(e.center).sub(Bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uy=0;const _i=new Zt,zd=new mn,eo=new G,ai=new Ea,ia=new Ea,Cn=new G;class hn extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hy(e)?Bg:kg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Et().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,r){return _i.makeTranslation(e,t,r),this.applyMatrix4(_i),this}scale(e,t,r){return _i.makeScale(e,t,r),this.applyMatrix4(_i),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const d=t[a];ia.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(ai.min,ia.min),ai.expandByPoint(Cn),Cn.addVectors(ai.max,ia.max),ai.expandByPoint(Cn)):(ai.expandByPoint(ia.min),ai.expandByPoint(ia.max))}ai.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)Cn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Cn));if(t)for(let a=0,c=t.length;a<c;a++){const d=t[a],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)Cn.fromBufferAttribute(d,f),h&&(eo.fromBufferAttribute(e,f),Cn.add(eo)),o=Math.max(o,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Wr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],h=[],f=new Uint8Array(r.count);for(let O=0;O<r.count;O++)d[O]=new G,h[O]=new G;const m=new G,x=new G,v=new G,g=new ke,E=new ke,A=new ke,y=new G,S=new G;function T(O,F,I){f[O]=f[F]=f[I]=1,m.fromBufferAttribute(r,O),x.fromBufferAttribute(r,F),v.fromBufferAttribute(r,I),g.fromBufferAttribute(a,O),E.fromBufferAttribute(a,F),A.fromBufferAttribute(a,I),x.sub(m),v.sub(m),E.sub(g),A.sub(g);const V=1/(E.x*A.y-A.x*E.y);isFinite(V)&&(y.copy(x).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(V),S.copy(v).multiplyScalar(E.x).addScaledVector(x,-A.x).multiplyScalar(V),d[O].add(y),d[F].add(y),d[I].add(y),h[O].add(S),h[F].add(S),h[I].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,F=b.length;O<F;++O){const I=b[O],V=I.start,K=I.count;for(let B=V,ee=V+K;B<ee;B+=3)T(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new G,P=new G,C=new G,M=new G;function R(O){C.fromBufferAttribute(o,O),M.copy(C);const F=d[O];w.copy(F),w.sub(C.multiplyScalar(C.dot(F))).normalize(),P.crossVectors(M,F);const V=P.dot(h[O])<0?-1:1;c.setXYZW(O,w.x,w.y,w.z,V)}for(let O=0,F=r.count;O<F;++O)f[O]&&R(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Wr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,g=r.count;v<g;v++)r.setXYZ(v,0,0,0);const o=new G,a=new G,c=new G,d=new G,h=new G,f=new G,m=new G,x=new G;if(e)for(let v=0,g=e.count;v<g;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),m.subVectors(c,a),x.subVectors(o,a),m.cross(x),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),f.fromBufferAttribute(r,y),d.add(m),h.add(m),f.add(m),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,g=t.count;v<g;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,a),x.subVectors(o,a),m.cross(x),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,x=d.normalized,v=new f.constructor(h.length*m);let g=0,E=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?g=h[A]*d.data.stride+d.offset:g=h[A]*m;for(let S=0;S<m;S++)v[E++]=f[g++]}return new Wr(v,m,x)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],f=e(h,r);t.setAttribute(d,f)}const a=this.morphAttributes;for(const d in a){const h=[],f=a[d];for(let m=0,x=f.length;m<x;m++){const v=f[m],g=e(v,r);h.push(g)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const f=r[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let x=0,v=f.length;x<v;x++){const g=f[x];m.push(g.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],x=a[f];for(let v=0,g=x.length;v<g;v++)m.push(x[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const x=c[f];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new G,Oy=new G,ky=new Et;class hr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Hd.subVectors(r,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Hd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ky.getNormalMatrix(e),o=this.coplanarPoint(Hd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let By=0;class xs extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ua,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pg,this.blendDst=mg,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Md,this.stencilZFail=Md,this.stencilZPass=Md,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const d in a){const h=a[d];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new hr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ke().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new G,Gd=new G,Bl=new G,zl=new G;class Dc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gd.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),zl.copy(this.origin).sub(Gd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Bl),d=zl.dot(this.direction),h=-zl.dot(Bl),f=zl.lengthSq(),m=Math.abs(1-c*c);let x,v,g,E;if(m>0)if(x=c*h-d,v=c*d-h,E=a*m,x>=0)if(v>=-E)if(v<=E){const A=1/m;x*=A,v*=A,g=x*(x+c*v+2*d)+v*(c*x+v+2*h)+f}else v=a,x=Math.max(0,-(c*v+d)),g=-x*x+v*(v+2*h)+f;else v=-a,x=Math.max(0,-(c*v+d)),g=-x*x+v*(v+2*h)+f;else v<=-E?(x=Math.max(0,-(-c*a+d)),v=x>0?-a:Math.min(Math.max(-a,-h),a),g=-x*x+v*(v+2*h)+f):v<=E?(x=0,v=Math.min(Math.max(-a,-h),a),g=v*(v+2*h)+f):(x=Math.max(0,-(c*a+d)),v=x>0?a:Math.min(Math.max(-a,-h),a),g=-x*x+v*(v+2*h)+f);else v=c>0?-a:a,x=Math.max(0,-(c*v+d)),g=-x*x+v*(v+2*h)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Gd).addScaledVector(Bl,v),g}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,d,h;const f=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,v=this.origin;return f>=0?(r=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(r=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),x>=0?(d=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,d=this.direction,h=d.x,f=d.y,m=d.z,x=e.x-c.x,v=e.y-c.y,g=e.z-c.z,E=t.x-c.x,A=t.y-c.y,y=t.z-c.z,S=r.x-c.x,T=r.y-c.y,b=r.z-c.z,w=Math.abs(h),P=Math.abs(f),C=Math.abs(m);let M,R,O,F,I,V,K,B,ee,oe,X,$;if(w>=P&&w>=C?(O=h,V=x,ee=E,$=S,h>=0?(M=f,R=m,F=v,I=g,K=A,B=y,oe=T,X=b):(M=m,R=f,F=g,I=v,K=y,B=A,oe=b,X=T)):P>=C?(O=f,V=v,ee=A,$=T,f>=0?(M=m,R=h,F=g,I=x,K=y,B=E,oe=b,X=S):(M=h,R=m,F=x,I=g,K=E,B=y,oe=S,X=b)):(O=m,V=g,ee=y,$=b,m>=0?(M=h,R=f,F=x,I=v,K=E,B=A,oe=S,X=T):(M=f,R=h,F=v,I=x,K=A,B=E,oe=T,X=S)),O===0)return null;const Z=M/O,j=R/O,U=1/O,ne=F-Z*V,ie=I-j*V,Y=K-Z*ee,pe=B-j*ee,ve=oe-Z*$,me=X-j*$,re=ve*pe-me*Y,q=ne*me-ie*ve,Re=Y*ie-pe*ne;if(o){if(re<0||q<0||Re<0)return null}else if((re<0||q<0||Re<0)&&(re>0||q>0||Re>0))return null;const we=re+q+Re;if(we===0)return null;const Te=U*(re*V+q*ee+Re*$);return(we>0?Te<0:Te>0)?null:this.at(Te/we,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zg extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const f0=new Zt,ds=new Dc,Hl=new wa,p0=new G,Gl=new G,Vl=new G,Wl=new G,Vd=new G,Xl=new G,m0=new G,$l=new G;class ft extends mn{constructor(e=new hn,t=new zg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(a&&d){Xl.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const m=d[h],x=a[h];m!==0&&(Vd.fromBufferAttribute(x,e),c?Xl.addScaledVector(Vd,m):Xl.addScaledVector(Vd.sub(t),m))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(a),ds.copy(e.ray).recast(e.near),!(Hl.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Hl,p0)===null||ds.origin.distanceToSquared(p0)>(e.far-e.near)**2))&&(f0.copy(a).invert(),ds.copy(e.ray).applyMatrix4(f0),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,d=a.index,h=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,x=a.attributes.normal,v=a.groups,g=a.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const y=v[E],S=c[y.materialIndex],T=Math.max(y.start,g.start),b=Math.min(d.count,Math.min(y.start+y.count,g.start+g.count));for(let w=T,P=b;w<P;w+=3){const C=d.getX(w),M=d.getX(w+1),R=d.getX(w+2);o=Yl(this,S,e,r,f,m,x,C,M,R),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,g.start),A=Math.min(d.count,g.start+g.count);for(let y=E,S=A;y<S;y+=3){const T=d.getX(y),b=d.getX(y+1),w=d.getX(y+2);o=Yl(this,c,e,r,f,m,x,T,b,w),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const y=v[E],S=c[y.materialIndex],T=Math.max(y.start,g.start),b=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let w=T,P=b;w<P;w+=3){const C=w,M=w+1,R=w+2;o=Yl(this,S,e,r,f,m,x,C,M,R),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,g.start),A=Math.min(h.count,g.start+g.count);for(let y=E,S=A;y<S;y+=3){const T=y,b=y+1,w=y+2;o=Yl(this,c,e,r,f,m,x,T,b,w),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function zy(i,e,t,r,o,a,c,d){let h;if(e.side===ei?h=r.intersectTriangle(c,a,o,!0,d):h=r.intersectTriangle(o,a,c,e.side===ms,d),h===null)return null;$l.copy(d),$l.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo($l);return f<t.near||f>t.far?null:{distance:f,point:$l.clone(),object:i}}function Yl(i,e,t,r,o,a,c,d,h,f){i.getVertexPosition(d,Gl),i.getVertexPosition(h,Vl),i.getVertexPosition(f,Wl);const m=zy(i,e,t,r,Gl,Vl,Wl,m0);if(m){const x=new G;Pi.getBarycoord(m0,Gl,Vl,Wl,x),o&&(m.uv=Pi.getInterpolatedAttribute(o,d,h,f,x,new ke)),a&&(m.uv1=Pi.getInterpolatedAttribute(a,d,h,f,x,new ke)),c&&(m.normal=Pi.getInterpolatedAttribute(c,d,h,f,x,new G),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:d,b:h,c:f,normal:new G,materialIndex:0};Pi.getNormal(Gl,Vl,Wl,v.normal),m.face=v,m.barycoord=x}return m}class Hy extends Xn{constructor(e=null,t=1,r=1,o,a,c,d,h,f=Ln,m=Ln,x,v){super(null,c,d,h,f,m,o,a,x,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hs=new wa,Gy=new ke(.5,.5),ql=new G;class va{constructor(e=new hr,t=new hr,r=new hr,o=new hr,a=new hr,c=new hr){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(a),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni,r=!1){const o=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],f=a[3],m=a[4],x=a[5],v=a[6],g=a[7],E=a[8],A=a[9],y=a[10],S=a[11],T=a[12],b=a[13],w=a[14],P=a[15];if(o[0].setComponents(f-c,g-m,S-E,P-T).normalize(),o[1].setComponents(f+c,g+m,S+E,P+T).normalize(),o[2].setComponents(f+d,g+x,S+A,P+b).normalize(),o[3].setComponents(f-d,g-x,S-A,P-b).normalize(),r)o[4].setComponents(h,v,y,w).normalize(),o[5].setComponents(f-h,g-v,S-y,P-w).normalize();else if(o[4].setComponents(f-h,g-v,S-y,P-w).normalize(),t===Ni)o[5].setComponents(f+h,g+v,S+y,P+w).normalize();else if(t===ga)o[5].setComponents(h,v,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=Gy.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const g0=new Zt;class rf{constructor(){this.coordinateSystem=Ni,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const a=t[o];g0.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),r[o]===void 0&&(r[o]=new va),r[o].setFromProjectionMatrix(g0,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new va),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new rf().copy(this)}}class _a extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new G,Tc=new G,v0=new Zt,ra=new Dc,jl=new wa,Wd=new G,_0=new G;class Ac extends mn{constructor(e=new hn,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)bc.fromBufferAttribute(t,o-1),Tc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=bc.distanceTo(Tc);e.setAttribute("lineDistance",new Vt(r,1))}else _t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(o),jl.radius+=a,e.ray.intersectsSphere(jl)===!1)return;v0.copy(o).invert(),ra.copy(e.ray).applyMatrix4(v0);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const g=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let A=g,y=E-1;A<y;A+=f){const S=m.getX(A),T=m.getX(A+1),b=Kl(this,e,ra,h,S,T,A);b&&t.push(b)}if(this.isLineLoop){const A=m.getX(E-1),y=m.getX(g),S=Kl(this,e,ra,h,A,y,E-1);S&&t.push(S)}}else{const g=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let A=g,y=E-1;A<y;A+=f){const S=Kl(this,e,ra,h,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=Kl(this,e,ra,h,E-1,g,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function Kl(i,e,t,r,o,a,c){const d=i.geometry.attributes.position;if(bc.fromBufferAttribute(d,o),Tc.fromBufferAttribute(d,a),t.distanceSqToSegment(bc,Tc,Wd,_0)>r)return;Wd.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Wd);if(!(f<e.near||f>e.far))return{distance:f,point:_0.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const x0=new G,y0=new G;class Vy extends Ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)x0.fromBufferAttribute(t,o),y0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+x0.distanceTo(y0);e.setAttribute("lineDistance",new Vt(r,1))}else _t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hg extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S0=new Zt,Hh=new Dc,Zl=new wa,Jl=new G;class Wy extends mn{constructor(e=new hn,t=new Hg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(o),Zl.radius+=a,e.ray.intersectsSphere(Zl)===!1)return;S0.copy(o).invert(),Hh.copy(e.ray).applyMatrix4(S0);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=r.index,x=r.attributes.position;if(f!==null){const v=Math.max(0,c.start),g=Math.min(f.count,c.start+c.count);for(let E=v,A=g;E<A;E++){const y=f.getX(E);Jl.fromBufferAttribute(x,y),M0(Jl,y,h,o,e,t,this)}}else{const v=Math.max(0,c.start),g=Math.min(x.count,c.start+c.count);for(let E=v,A=g;E<A;E++)Jl.fromBufferAttribute(x,E),M0(Jl,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function M0(i,e,t,r,o,a,c){const d=Hh.distanceSqToPoint(i);if(d<t){const h=new G;Hh.closestPointToPoint(i,h),h.applyMatrix4(r);const f=o.ray.origin.distanceTo(h);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Gg extends Xn{constructor(e=[],t=co,r,o,a,c,d,h,f,m){super(e,t,r,o,a,c,d,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Xn{constructor(e,t,r=Yi,o,a,c,d=Ln,h=Ln,f,m=Xr,x=1){if(m!==Xr&&m!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:x};super(v,o,a,c,d,h,m,r,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vg extends ho{constructor(e,t=Yi,r=co,o,a,c=Ln,d=Ln,h,f=Xr){const m={width:e,height:e,depth:1},x=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,d,h,f),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wg extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kt extends hn{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const d=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],m=[],x=[];let v=0,g=0;E("z","y","x",-1,-1,r,t,e,c,a,0),E("z","y","x",1,-1,r,t,-e,c,a,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,a,4),E("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(h),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(x,2));function E(A,y,S,T,b,w,P,C,M,R,O){const F=w/M,I=P/R,V=w/2,K=P/2,B=C/2,ee=M+1,oe=R+1;let X=0,$=0;const Z=new G;for(let j=0;j<oe;j++){const U=j*I-K;for(let ne=0;ne<ee;ne++){const ie=ne*F-V;Z[A]=ie*T,Z[y]=U*b,Z[S]=B,f.push(Z.x,Z.y,Z.z),Z[A]=0,Z[y]=0,Z[S]=C>0?1:-1,m.push(Z.x,Z.y,Z.z),x.push(ne/M),x.push(1-j/R),X+=1}}for(let j=0;j<R;j++)for(let U=0;U<M;U++){const ne=v+U+ee*j,ie=v+U+ee*(j+1),Y=v+(U+1)+ee*(j+1),pe=v+(U+1)+ee*j;h.push(ne,ie,pe),h.push(ie,Y,pe),$+=6}d.addGroup(g,$,O),g+=$,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ui extends hn{constructor(e=1,t=1,r=1,o=32,a=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:d,thetaLength:h};const f=this;o=Math.floor(o),a=Math.floor(a);const m=[],x=[],v=[],g=[];let E=0;const A=[],y=r/2;let S=0;T(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(m),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2));function T(){const w=new G,P=new G;let C=0;const M=(t-e)/r;for(let R=0;R<=a;R++){const O=[],F=R/a,I=F*(t-e)+e;for(let V=0;V<=o;V++){const K=V/o,B=K*h+d,ee=Math.sin(B),oe=Math.cos(B);P.x=I*ee,P.y=-F*r+y,P.z=I*oe,x.push(P.x,P.y,P.z),w.set(ee,M,oe).normalize(),v.push(w.x,w.y,w.z),g.push(K,1-F),O.push(E++)}A.push(O)}for(let R=0;R<o;R++)for(let O=0;O<a;O++){const F=A[O][R],I=A[O+1][R],V=A[O+1][R+1],K=A[O][R+1];(e>0||O!==0)&&(m.push(F,I,K),C+=3),(t>0||O!==a-1)&&(m.push(I,V,K),C+=3)}f.addGroup(S,C,0),S+=C}function b(w){const P=E,C=new ke,M=new G;let R=0;const O=w===!0?e:t,F=w===!0?1:-1;for(let V=1;V<=o;V++)x.push(0,y*F,0),v.push(0,F,0),g.push(.5,.5),E++;const I=E;for(let V=0;V<=o;V++){const B=V/o*h+d,ee=Math.cos(B),oe=Math.sin(B);M.x=O*oe,M.y=y*F,M.z=O*ee,x.push(M.x,M.y,M.z),v.push(0,F,0),C.x=ee*.5+.5,C.y=oe*.5*F+.5,g.push(C.x,C.y),E++}for(let V=0;V<o;V++){const K=P+V,B=I+V;w===!0?m.push(B,B+1,K):m.push(B+1,B,K),R+=3}f.addGroup(S,R,w===!0?1:2),S+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sf extends ui{constructor(e=1,t=1,r=32,o=1,a=!1,c=0,d=Math.PI*2){super(0,e,t,r,o,a,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:d}}static fromJSON(e){return new sf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class of extends hn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],c=[];d(o),f(r),m(),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(a.slice(),3)),this.setAttribute("uv",new Vt(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const b=new G,w=new G,P=new G;for(let C=0;C<t.length;C+=3)g(t[C+0],b),g(t[C+1],w),g(t[C+2],P),h(b,w,P,T)}function h(T,b,w,P){const C=P+1,M=[];for(let R=0;R<=C;R++){M[R]=[];const O=T.clone().lerp(w,R/C),F=b.clone().lerp(w,R/C),I=C-R;for(let V=0;V<=I;V++)V===0&&R===C?M[R][V]=O:M[R][V]=O.clone().lerp(F,V/I)}for(let R=0;R<C;R++)for(let O=0;O<2*(C-R)-1;O++){const F=Math.floor(O/2);O%2===0?(v(M[R][F+1]),v(M[R+1][F]),v(M[R][F])):(v(M[R][F+1]),v(M[R+1][F+1]),v(M[R+1][F]))}}function f(T){const b=new G;for(let w=0;w<a.length;w+=3)b.x=a[w+0],b.y=a[w+1],b.z=a[w+2],b.normalize().multiplyScalar(T),a[w+0]=b.x,a[w+1]=b.y,a[w+2]=b.z}function m(){const T=new G;for(let b=0;b<a.length;b+=3){T.x=a[b+0],T.y=a[b+1],T.z=a[b+2];const w=y(T)/2/Math.PI+.5,P=S(T)/Math.PI+.5;c.push(w,1-P)}E(),x()}function x(){for(let T=0;T<c.length;T+=6){const b=c[T+0],w=c[T+2],P=c[T+4],C=Math.max(b,w,P),M=Math.min(b,w,P);C>.9&&M<.1&&(b<.2&&(c[T+0]+=1),w<.2&&(c[T+2]+=1),P<.2&&(c[T+4]+=1))}}function v(T){a.push(T.x,T.y,T.z)}function g(T,b){const w=T*3;b.x=e[w+0],b.y=e[w+1],b.z=e[w+2]}function E(){const T=new G,b=new G,w=new G,P=new G,C=new ke,M=new ke,R=new ke;for(let O=0,F=0;O<a.length;O+=9,F+=6){T.set(a[O+0],a[O+1],a[O+2]),b.set(a[O+3],a[O+4],a[O+5]),w.set(a[O+6],a[O+7],a[O+8]),C.set(c[F+0],c[F+1]),M.set(c[F+2],c[F+3]),R.set(c[F+4],c[F+5]),P.copy(T).add(b).add(w).divideScalar(3);const I=y(P);A(C,F+0,T,I),A(M,F+2,b,I),A(R,F+4,w,I)}}function A(T,b,w,P){P<0&&T.x===1&&(c[b]=T.x-1),w.x===0&&w.z===0&&(c[b]=P/2/Math.PI+.5)}function y(T){return Math.atan2(T.z,-T.x)}function S(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.vertices,e.indices,e.radius,e.detail)}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_t("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),a+=r.distanceTo(o),t.push(a),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const a=r.length;let c;t?c=t:c=e*r[a-1];let d=0,h=a-1,f;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),f=r[o]-c,f<0)d=o+1;else if(f>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(a-1);const m=r[o],v=r[o+1]-m,g=(c-m)/v;return(o+g)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),d=this.getPoint(a),h=t||(c.isVector2?new ke:new G);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new G,o=[],a=[],c=[],d=new G,h=new Zt;for(let g=0;g<=e;g++){const E=g/e;o[g]=this.getTangentAt(E,new G)}a[0]=new G,c[0]=new G;let f=Number.MAX_VALUE;const m=Math.abs(o[0].x),x=Math.abs(o[0].y),v=Math.abs(o[0].z);m<=f&&(f=m,r.set(1,0,0)),x<=f&&(f=x,r.set(0,1,0)),v<=f&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),a[0].crossVectors(o[0],d),c[0].crossVectors(o[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),c[g]=c[g-1].clone(),d.crossVectors(o[g-1],o[g]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ct(o[g-1].dot(o[g]),-1,1));a[g].applyMatrix4(h.makeRotationAxis(d,E))}c[g].crossVectors(o[g],a[g])}if(t===!0){let g=Math.acos(Ct(a[0].dot(a[e]),-1,1));g/=e,o[0].dot(d.crossVectors(a[0],a[e]))>0&&(g=-g);for(let E=1;E<=e;E++)a[E].applyMatrix4(h.makeRotationAxis(o[E],g*E)),c[E].crossVectors(o[E],a[E])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class af extends ji{constructor(e=0,t=0,r=1,o=1,a=0,c=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new ke){const r=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const d=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(d),f=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=h-this.aX,g=f-this.aY;h=v*m-g*x+this.aX,f=v*x+g*m+this.aY}return r.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xy extends af{constructor(e,t,r,o,a,c){super(e,t,r,r,o,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function lf(){let i=0,e=0,t=0,r=0;function o(a,c,d,h){i=a,e=d,t=-3*a+3*c-2*d-h,r=2*a-2*c+d+h}return{initCatmullRom:function(a,c,d,h,f){o(c,d,f*(d-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,d,h,f,m,x){let v=(c-a)/f-(d-a)/(f+m)+(d-c)/m,g=(d-c)/m-(h-c)/(m+x)+(h-d)/x;v*=m,g*=m,o(c,d,v,g)},calc:function(a){const c=a*a,d=c*a;return i+e*a+t*c+r*d}}}const E0=new G,w0=new G,Xd=new lf,$d=new lf,Yd=new lf;class cf extends ji{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new G){const r=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let d=Math.floor(c),h=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/a)+1)*a:h===0&&d===a-1&&(d=a-2,h=1);let f,m;this.closed||d>0?f=o[(d-1)%a]:(w0.subVectors(o[0],o[1]).add(o[0]),f=w0);const x=o[d%a],v=o[(d+1)%a];if(this.closed||d+2<a?m=o[(d+2)%a]:(E0.subVectors(o[a-1],o[a-2]).add(o[a-1]),m=E0),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let E=Math.pow(f.distanceToSquared(x),g),A=Math.pow(x.distanceToSquared(v),g),y=Math.pow(v.distanceToSquared(m),g);A<1e-4&&(A=1),E<1e-4&&(E=A),y<1e-4&&(y=A),Xd.initNonuniformCatmullRom(f.x,x.x,v.x,m.x,E,A,y),$d.initNonuniformCatmullRom(f.y,x.y,v.y,m.y,E,A,y),Yd.initNonuniformCatmullRom(f.z,x.z,v.z,m.z,E,A,y)}else this.curveType==="catmullrom"&&(Xd.initCatmullRom(f.x,x.x,v.x,m.x,this.tension),$d.initCatmullRom(f.y,x.y,v.y,m.y,this.tension),Yd.initCatmullRom(f.z,x.z,v.z,m.z,this.tension));return r.set(Xd.calc(h),$d.calc(h),Yd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new G().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function b0(i,e,t,r,o){const a=(r-e)*.5,c=(o-t)*.5,d=i*i,h=i*d;return(2*t-2*r+a+c)*h+(-3*t+3*r-2*a-c)*d+a*i+t}function $y(i,e){const t=1-i;return t*t*e}function Yy(i,e){return 2*(1-i)*i*e}function qy(i,e){return i*i*e}function da(i,e,t,r){return $y(i,e)+Yy(i,t)+qy(i,r)}function jy(i,e){const t=1-i;return t*t*t*e}function Ky(i,e){const t=1-i;return 3*t*t*i*e}function Zy(i,e){return 3*(1-i)*i*i*e}function Jy(i,e){return i*i*i*e}function ha(i,e,t,r,o){return jy(i,e)+Ky(i,t)+Zy(i,r)+Jy(i,o)}class Xg extends ji{constructor(e=new ke,t=new ke,r=new ke,o=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ke){const r=t,o=this.v0,a=this.v1,c=this.v2,d=this.v3;return r.set(ha(e,o.x,a.x,c.x,d.x),ha(e,o.y,a.y,c.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qy extends ji{constructor(e=new G,t=new G,r=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new G){const r=t,o=this.v0,a=this.v1,c=this.v2,d=this.v3;return r.set(ha(e,o.x,a.x,c.x,d.x),ha(e,o.y,a.y,c.y,d.y),ha(e,o.z,a.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $g extends ji{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eS extends ji{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends ji{constructor(e=new ke,t=new ke,r=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ke){const r=t,o=this.v0,a=this.v1,c=this.v2;return r.set(da(e,o.x,a.x,c.x),da(e,o.y,a.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends ji{constructor(e=new G,t=new G,r=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new G){const r=t,o=this.v0,a=this.v1,c=this.v2;return r.set(da(e,o.x,a.x,c.x),da(e,o.y,a.y,c.y),da(e,o.z,a.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jg extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){const r=t,o=this.points,a=(o.length-1)*e,c=Math.floor(a),d=a-c,h=o[c===0?c:c-1],f=o[c],m=o[c>o.length-2?o.length-1:c+1],x=o[c>o.length-3?o.length-1:c+2];return r.set(b0(d,h.x,f.x,m.x,x.x),b0(d,h.y,f.y,m.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ke().fromArray(o))}return this}}var Rc=Object.freeze({__proto__:null,ArcCurve:Xy,CatmullRomCurve3:cf,CubicBezierCurve:Xg,CubicBezierCurve3:Qy,EllipseCurve:af,LineCurve:$g,LineCurve3:eS,QuadraticBezierCurve:Yg,QuadraticBezierCurve3:qg,SplineCurve:jg});class tS extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=r){const c=o[a]-r,d=this.curves[a],h=d.getLength(),f=h===0?0:1-c/h;return d.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,a=this.curves;o<a.length;o++){const c=a[o],d=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(d);for(let f=0;f<h.length;f++){const m=h[f];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Rc[o.type]().fromJSON(o))}return this.cacheLengths=null,this}}class T0 extends tS{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new $g(this.currentPoint.clone(),new ke(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const a=new Yg(this.currentPoint.clone(),new ke(e,t),new ke(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,a,c){const d=new Xg(this.currentPoint.clone(),new ke(e,t),new ke(r,o),new ke(a,c));return this.curves.push(d),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new jg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,a,c){const d=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+d,t+h,r,o,a,c),this}absarc(e,t,r,o,a,c){return this.absellipse(e,t,r,r,o,a,c),this}ellipse(e,t,r,o,a,c,d,h){const f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+f,t+m,r,o,a,c,d,h),this}absellipse(e,t,r,o,a,c,d,h){const f=new af(e,t,r,o,a,c,d,h);if(this.curves.length>0){const x=f.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(f);const m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kg extends T0{constructor(e){super(e),this.uuid=mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new T0().fromJSON(o))}return this}}function nS(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let a=Zg(i,0,o,t,!0);const c=[];if(!a||a.next===a.prev)return c;let d,h,f;if(r&&(a=aS(i,e,a,t)),i.length>80*t){d=i[0],h=i[1];let m=d,x=h;for(let v=t;v<o;v+=t){const g=i[v],E=i[v+1];g<d&&(d=g),E<h&&(h=E),g>m&&(m=g),E>x&&(x=E)}f=Math.max(m-d,x-h),f=f!==0?32767/f:0}return xa(a,c,t,d,h,f,0),c}function Zg(i,e,t,r,o){let a;if(o===_S(i,e,t,r)>0)for(let c=e;c<t;c+=r)a=A0(c/r|0,i[c],i[c+1],a);else for(let c=t-r;c>=e;c-=r)a=A0(c/r|0,i[c],i[c+1],a);return a&&fo(a,a.next)&&(Sa(a),a=a.next),a}function vs(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(fo(t,t.next)||cn(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function xa(i,e,t,r,o,a,c){if(!i)return;!c&&a&&hS(i,r,o,a);let d=i;for(;i.prev!==i.next;){const h=i.prev,f=i.next;if(a?rS(i,r,o,a):iS(i)){e.push(h.i,i.i,f.i),Sa(i),i=f.next,d=f.next;continue}if(i=f,i===d){c?c===1?(i=sS(vs(i),e),xa(i,e,t,r,o,a,2)):c===2&&oS(i,e,t,r,o,a):xa(vs(i),e,t,r,o,a,1);break}}}function iS(i){const e=i.prev,t=i,r=i.next;if(cn(e,t,r)>=0)return!1;const o=e.x,a=t.x,c=r.x,d=e.y,h=t.y,f=r.y,m=Math.min(o,a,c),x=Math.min(d,h,f),v=Math.max(o,a,c),g=Math.max(d,h,f);let E=r.next;for(;E!==e;){if(E.x>=m&&E.x<=v&&E.y>=x&&E.y<=g&&la(o,d,a,h,c,f,E.x,E.y)&&cn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function rS(i,e,t,r){const o=i.prev,a=i,c=i.next;if(cn(o,a,c)>=0)return!1;const d=o.x,h=a.x,f=c.x,m=o.y,x=a.y,v=c.y,g=Math.min(d,h,f),E=Math.min(m,x,v),A=Math.max(d,h,f),y=Math.max(m,x,v),S=Gh(g,E,e,t,r),T=Gh(A,y,e,t,r);let b=i.prevZ,w=i.nextZ;for(;b&&b.z>=S&&w&&w.z<=T;){if(b.x>=g&&b.x<=A&&b.y>=E&&b.y<=y&&b!==o&&b!==c&&la(d,m,h,x,f,v,b.x,b.y)&&cn(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=g&&w.x<=A&&w.y>=E&&w.y<=y&&w!==o&&w!==c&&la(d,m,h,x,f,v,w.x,w.y)&&cn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=S;){if(b.x>=g&&b.x<=A&&b.y>=E&&b.y<=y&&b!==o&&b!==c&&la(d,m,h,x,f,v,b.x,b.y)&&cn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=T;){if(w.x>=g&&w.x<=A&&w.y>=E&&w.y<=y&&w!==o&&w!==c&&la(d,m,h,x,f,v,w.x,w.y)&&cn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function sS(i,e){let t=i;do{const r=t.prev,o=t.next.next;!fo(r,o)&&Qg(r,t,t.next,o)&&ya(r,o)&&ya(o,r)&&(e.push(r.i,t.i,o.i),Sa(t),Sa(t.next),t=i=o),t=t.next}while(t!==i);return vs(t)}function oS(i,e,t,r,o,a){let c=i;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&mS(c,d)){let h=ev(c,d);c=vs(c,c.next),h=vs(h,h.next),xa(c,e,t,r,o,a,0),xa(h,e,t,r,o,a,0);return}d=d.next}c=c.next}while(c!==i)}function aS(i,e,t,r){const o=[];for(let a=0,c=e.length;a<c;a++){const d=e[a]*r,h=a<c-1?e[a+1]*r:i.length,f=Zg(i,d,h,r,!1);f===f.next&&(f.steiner=!0),o.push(pS(f))}o.sort(lS);for(let a=0;a<o.length;a++)t=cS(o[a],t);return t}function lS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const r=(i.next.y-i.y)/(i.next.x-i.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function cS(i,e){const t=uS(i,e);if(!t)return e;const r=ev(t,i);return vs(r,r.next),vs(t,t.next)}function uS(i,e){let t=e;const r=i.x,o=i.y;let a=-1/0,c;if(fo(i,t))return t;do{if(fo(i,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const x=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=r&&x>a&&(a=x,c=t.x<t.next.x?t:t.next,x===r))return c}t=t.next}while(t!==e);if(!c)return null;const d=c,h=c.x,f=c.y;let m=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&Jg(o<f?r:a,o,h,f,o<f?a:r,o,t.x,t.y)){const x=Math.abs(o-t.y)/(r-t.x);ya(t,i)&&(x<m||x===m&&(t.x>c.x||t.x===c.x&&dS(c,t)))&&(c=t,m=x)}t=t.next}while(t!==d);return c}function dS(i,e){return cn(i.prev,i,e.prev)<0&&cn(e.next,i,i.next)<0}function hS(i,e,t,r){let o=i;do o.z===0&&(o.z=Gh(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,fS(o)}function fS(i){let e,t=1;do{let r=i,o;i=null;let a=null;for(e=0;r;){e++;let c=r,d=0;for(let f=0;f<t&&(d++,c=c.nextZ,!!c);f++);let h=t;for(;d>0||h>0&&c;)d!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,d--):(o=c,c=c.nextZ,h--),a?a.nextZ=o:i=o,o.prevZ=a,a=o;r=c}a.nextZ=null,t*=2}while(e>1);return i}function Gh(i,e,t,r,o){return i=(i-t)*o|0,e=(e-r)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jg(i,e,t,r,o,a,c,d){return(o-c)*(e-d)>=(i-c)*(a-d)&&(i-c)*(r-d)>=(t-c)*(e-d)&&(t-c)*(a-d)>=(o-c)*(r-d)}function la(i,e,t,r,o,a,c,d){return!(i===c&&e===d)&&Jg(i,e,t,r,o,a,c,d)}function mS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gS(i,e)&&(ya(i,e)&&ya(e,i)&&vS(i,e)&&(cn(i.prev,i,e.prev)||cn(i,e.prev,e))||fo(i,e)&&cn(i.prev,i,i.next)>0&&cn(e.prev,e,e.next)>0)}function cn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fo(i,e){return i.x===e.x&&i.y===e.y}function Qg(i,e,t,r){const o=ec(cn(i,e,t)),a=ec(cn(i,e,r)),c=ec(cn(t,r,i)),d=ec(cn(t,r,e));return!!(o!==a&&c!==d||o===0&&Ql(i,t,e)||a===0&&Ql(i,r,e)||c===0&&Ql(t,i,r)||d===0&&Ql(t,e,r))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function gS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ya(i,e){return cn(i.prev,i,i.next)<0?cn(i,e,i.next)>=0&&cn(i,i.prev,e)>=0:cn(i,e,i.prev)<0||cn(i,i.next,e)<0}function vS(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function ev(i,e){const t=Vh(i.i,i.x,i.y),r=Vh(e.i,e.x,e.y),o=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,a.next=r,r.prev=a,r}function A0(i,e,t,r){const o=Vh(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _S(i,e,t,r){let o=0;for(let a=e,c=t-r;a<t;a+=r)o+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return o}class xS{static triangulate(e,t,r=2){return nS(e,t,r)}}class so{static area(e){const t=e.length;let r=0;for(let o=t-1,a=0;a<t;o=a++)r+=e[o].x*e[a].y-e[a].x*e[o].y;return r*.5}static isClockWise(e){return so.area(e)<0}static triangulateShape(e,t){const r=[],o=[],a=[];R0(e),C0(r,e);let c=e.length;t.forEach(R0);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,C0(r,t[h]);const d=xS.triangulate(r,o);for(let h=0;h<d.length;h+=3)a.push(d.slice(h,h+3));return a}}function R0(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function C0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class uf extends hn{constructor(e=new Kg([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],a=[];for(let d=0,h=e.length;d<h;d++){const f=e[d];c(f)}this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.computeVertexNormals();function c(d){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,x=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,E=t.bevelSize!==void 0?t.bevelSize:g-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const S=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:yS;let b,w=!1,P,C,M,R;if(S){b=S.getSpacedPoints(m),w=!0,v=!1;const ae=S.isCatmullRomCurve3?S.closed:!1;P=S.computeFrenetFrames(m,ae),C=new G,M=new G,R=new G}v||(y=0,g=0,E=0,A=0);const O=d.extractPoints(f);let F=O.shape;const I=O.holes;if(!so.isClockWise(F)){F=F.reverse();for(let ae=0,xe=I.length;ae<xe;ae++){const Me=I[ae];so.isClockWise(Me)&&(I[ae]=Me.reverse())}}function K(ae){const Me=10000000000000001e-36;let Ce=ae[0];for(let Ae=1;Ae<=ae.length;Ae++){const Je=Ae%ae.length,Ye=ae[Je],ut=Ye.x-Ce.x,xt=Ye.y-Ce.y,wt=ut*ut+xt*xt,J=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(Ce.x),Math.abs(Ce.y)),Wt=Me*J*J;if(wt<=Wt){ae.splice(Je,1),Ae--;continue}Ce=Ye}}K(F),I.forEach(K);const B=I.length,ee=F;for(let ae=0;ae<B;ae++){const xe=I[ae];F=F.concat(xe)}function oe(ae,xe,Me){return xe||zt("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(xe,Me)}const X=F.length;function $(ae,xe,Me){let Ce,Ae,Je;const Ye=ae.x-xe.x,ut=ae.y-xe.y,xt=Me.x-ae.x,wt=Me.y-ae.y,J=Ye*Ye+ut*ut,Wt=Ye*wt-ut*xt;if(Math.abs(Wt)>Number.EPSILON){const pt=Math.sqrt(J),Lt=Math.sqrt(xt*xt+wt*wt),Ue=xe.x-ut/pt,Xt=xe.y+Ye/pt,st=Me.x-wt/Lt,dt=Me.y+xt/Lt,z=((st-Ue)*wt-(dt-Xt)*xt)/(Ye*wt-ut*xt);Ce=Ue+Ye*z-ae.x,Ae=Xt+ut*z-ae.y;const L=Ce*Ce+Ae*Ae;if(L<=2)return new ke(Ce,Ae);Je=Math.sqrt(L/2)}else{let pt=!1;Ye>Number.EPSILON?xt>Number.EPSILON&&(pt=!0):Ye<-Number.EPSILON?xt<-Number.EPSILON&&(pt=!0):Math.sign(ut)===Math.sign(wt)&&(pt=!0),pt?(Ce=-ut,Ae=Ye,Je=Math.sqrt(J)):(Ce=Ye,Ae=ut,Je=Math.sqrt(J/2))}return new ke(Ce/Je,Ae/Je)}const Z=[];for(let ae=0,xe=ee.length,Me=xe-1,Ce=ae+1;ae<xe;ae++,Me++,Ce++)Me===xe&&(Me=0),Ce===xe&&(Ce=0),Z[ae]=$(ee[ae],ee[Me],ee[Ce]);const j=[];let U,ne=Z.concat();for(let ae=0,xe=B;ae<xe;ae++){const Me=I[ae];U=[];for(let Ce=0,Ae=Me.length,Je=Ae-1,Ye=Ce+1;Ce<Ae;Ce++,Je++,Ye++)Je===Ae&&(Je=0),Ye===Ae&&(Ye=0),U[Ce]=$(Me[Ce],Me[Je],Me[Ye]);j.push(U),ne=ne.concat(U)}let ie;if(y===0)ie=so.triangulateShape(ee,I);else{const ae=[],xe=[];for(let Me=0;Me<y;Me++){const Ce=Me/y,Ae=g*Math.cos(Ce*Math.PI/2),Je=E*Math.sin(Ce*Math.PI/2)+A;for(let Ye=0,ut=ee.length;Ye<ut;Ye++){const xt=oe(ee[Ye],Z[Ye],Je);q(xt.x,xt.y,-Ae),Ce===0&&ae.push(xt)}for(let Ye=0,ut=B;Ye<ut;Ye++){const xt=I[Ye];U=j[Ye];const wt=[];for(let J=0,Wt=xt.length;J<Wt;J++){const pt=oe(xt[J],U[J],Je);q(pt.x,pt.y,-Ae),Ce===0&&wt.push(pt)}Ce===0&&xe.push(wt)}}ie=so.triangulateShape(ae,xe)}const Y=ie.length,pe=E+A;for(let ae=0;ae<X;ae++){const xe=v?oe(F[ae],ne[ae],pe):F[ae];w?(M.copy(P.normals[0]).multiplyScalar(xe.x),C.copy(P.binormals[0]).multiplyScalar(xe.y),R.copy(b[0]).add(M).add(C),q(R.x,R.y,R.z)):q(xe.x,xe.y,0)}for(let ae=1;ae<=m;ae++)for(let xe=0;xe<X;xe++){const Me=v?oe(F[xe],ne[xe],pe):F[xe];w?(M.copy(P.normals[ae]).multiplyScalar(Me.x),C.copy(P.binormals[ae]).multiplyScalar(Me.y),R.copy(b[ae]).add(M).add(C),q(R.x,R.y,R.z)):q(Me.x,Me.y,x/m*ae)}for(let ae=y-1;ae>=0;ae--){const xe=ae/y,Me=g*Math.cos(xe*Math.PI/2),Ce=E*Math.sin(xe*Math.PI/2)+A;for(let Ae=0,Je=ee.length;Ae<Je;Ae++){const Ye=oe(ee[Ae],Z[Ae],Ce);q(Ye.x,Ye.y,x+Me)}for(let Ae=0,Je=I.length;Ae<Je;Ae++){const Ye=I[Ae];U=j[Ae];for(let ut=0,xt=Ye.length;ut<xt;ut++){const wt=oe(Ye[ut],U[ut],Ce);w?q(wt.x,wt.y+b[m-1].y,b[m-1].x+Me):q(wt.x,wt.y,x+Me)}}}ve(),me();function ve(){const ae=o.length/3;if(v){let xe=0,Me=X*xe;for(let Ce=0;Ce<Y;Ce++){const Ae=ie[Ce];Re(Ae[2]+Me,Ae[1]+Me,Ae[0]+Me)}xe=m+y*2,Me=X*xe;for(let Ce=0;Ce<Y;Ce++){const Ae=ie[Ce];Re(Ae[0]+Me,Ae[1]+Me,Ae[2]+Me)}}else{for(let xe=0;xe<Y;xe++){const Me=ie[xe];Re(Me[2],Me[1],Me[0])}for(let xe=0;xe<Y;xe++){const Me=ie[xe];Re(Me[0]+X*m,Me[1]+X*m,Me[2]+X*m)}}r.addGroup(ae,o.length/3-ae,0)}function me(){const ae=o.length/3;let xe=0;re(ee,xe),xe+=ee.length;for(let Me=0,Ce=I.length;Me<Ce;Me++){const Ae=I[Me];re(Ae,xe),xe+=Ae.length}r.addGroup(ae,o.length/3-ae,1)}function re(ae,xe){let Me=ae.length;for(;--Me>=0;){const Ce=Me;let Ae=Me-1;Ae<0&&(Ae=ae.length-1);for(let Je=0,Ye=m+y*2;Je<Ye;Je++){const ut=X*Je,xt=X*(Je+1),wt=xe+Ce+ut,J=xe+Ae+ut,Wt=xe+Ae+xt,pt=xe+Ce+xt;we(wt,J,Wt,pt)}}}function q(ae,xe,Me){h.push(ae),h.push(xe),h.push(Me)}function Re(ae,xe,Me){Te(ae),Te(xe),Te(Me);const Ce=o.length/3,Ae=T.generateTopUV(r,o,Ce-3,Ce-2,Ce-1);Pe(Ae[0]),Pe(Ae[1]),Pe(Ae[2])}function we(ae,xe,Me,Ce){Te(ae),Te(xe),Te(Ce),Te(xe),Te(Me),Te(Ce);const Ae=o.length/3,Je=T.generateSideWallUV(r,o,Ae-6,Ae-3,Ae-2,Ae-1);Pe(Je[0]),Pe(Je[1]),Pe(Je[3]),Pe(Je[1]),Pe(Je[2]),Pe(Je[3])}function Te(ae){o.push(h[ae*3+0]),o.push(h[ae*3+1]),o.push(h[ae*3+2])}function Pe(ae){a.push(ae.x),a.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return SS(t,r,e)}static fromJSON(e,t){const r=[];for(let a=0,c=e.shapes.length;a<c;a++){const d=t[e.shapes[a]];r.push(d)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Rc[o.type]().fromJSON(o)),new uf(r,e.options)}}const yS={generateTopUV:function(i,e,t,r,o){const a=e[t*3],c=e[t*3+1],d=e[r*3],h=e[r*3+1],f=e[o*3],m=e[o*3+1];return[new ke(a,c),new ke(d,h),new ke(f,m)]},generateSideWallUV:function(i,e,t,r,o,a){const c=e[t*3],d=e[t*3+1],h=e[t*3+2],f=e[r*3],m=e[r*3+1],x=e[r*3+2],v=e[o*3],g=e[o*3+1],E=e[o*3+2],A=e[a*3],y=e[a*3+1],S=e[a*3+2];return Math.abs(d-m)<Math.abs(c-f)?[new ke(c,1-h),new ke(f,1-x),new ke(v,1-E),new ke(A,1-S)]:[new ke(d,1-h),new ke(m,1-x),new ke(g,1-E),new ke(y,1-S)]}};function SS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let r=0,o=i.length;r<o;r++){const a=i[r];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class df extends of{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new df(e.radius,e.detail)}}class go extends hn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,d=Math.floor(r),h=Math.floor(o),f=d+1,m=h+1,x=e/d,v=t/h,g=[],E=[],A=[],y=[];for(let S=0;S<m;S++){const T=S*v-c;for(let b=0;b<f;b++){const w=b*x-a;E.push(w,-T,0),A.push(0,0,1),y.push(b/d),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let T=0;T<d;T++){const b=T+f*S,w=T+f*(S+1),P=T+1+f*(S+1),C=T+1+f*S;g.push(b,w,C),g.push(w,P,C)}this.setIndex(g),this.setAttribute("position",new Vt(E,3)),this.setAttribute("normal",new Vt(A,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends hn{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let f=0;const m=[],x=new G,v=new G,g=[],E=[],A=[],y=[];for(let S=0;S<=r;S++){const T=[],b=S/r,w=c+b*d,P=e*Math.cos(w),C=Math.sqrt(e*e-P*P);let M=0;S===0&&c===0?M=.5/t:S===r&&h===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const O=R/t,F=o+O*a;x.x=-C*Math.cos(F),x.y=P,x.z=C*Math.sin(F),E.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),y.push(O+M,1-b),T.push(f++)}m.push(T)}for(let S=0;S<r;S++)for(let T=0;T<t;T++){const b=m[S][T+1],w=m[S][T],P=m[S+1][T],C=m[S+1][T+1];(S!==0||c>0)&&g.push(b,w,C),(S!==r-1||h<Math.PI)&&g.push(w,P,C)}this.setIndex(g),this.setAttribute("position",new Vt(E,3)),this.setAttribute("normal",new Vt(A,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $i extends hn{constructor(e=1,t=.4,r=12,o=48,a=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:a,thetaStart:c,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const h=[],f=[],m=[],x=[],v=new G,g=new G,E=new G;for(let A=0;A<=r;A++){const y=c+A/r*d;for(let S=0;S<=o;S++){const T=S/o*a;g.x=(e+t*Math.cos(y))*Math.cos(T),g.y=(e+t*Math.cos(y))*Math.sin(T),g.z=t*Math.sin(y),f.push(g.x,g.y,g.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),E.subVectors(g,v).normalize(),m.push(E.x,E.y,E.z),x.push(S/o),x.push(A/r)}}for(let A=1;A<=r;A++)for(let y=1;y<=o;y++){const S=(o+1)*A+y-1,T=(o+1)*(A-1)+y-1,b=(o+1)*(A-1)+y,w=(o+1)*A+y;h.push(S,T,w),h.push(T,b,w)}this.setIndex(h),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ic extends hn{constructor(e=new qg(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,r=1,o=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:a};const c=e.computeFrenetFrames(t,a);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const d=new G,h=new G,f=new ke;let m=new G;const x=[],v=[],g=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2));function A(){for(let b=0;b<t;b++)y(b);y(a===!1?t:0),T(),S()}function y(b){m=e.getPointAt(b/t,m);const w=c.normals[b],P=c.binormals[b];for(let C=0;C<=o;C++){const M=C/o*Math.PI*2,R=Math.sin(M),O=-Math.cos(M);h.x=O*w.x+R*P.x,h.y=O*w.y+R*P.y,h.z=O*w.z+R*P.z,h.normalize(),v.push(h.x,h.y,h.z),d.x=m.x+r*h.x,d.y=m.y+r*h.y,d.z=m.z+r*h.z,x.push(d.x,d.y,d.z)}}function S(){for(let b=1;b<=t;b++)for(let w=1;w<=o;w++){const P=(o+1)*(b-1)+(w-1),C=(o+1)*b+(w-1),M=(o+1)*b+w,R=(o+1)*(b-1)+w;E.push(P,C,R),E.push(C,M,R)}}function T(){for(let b=0;b<=t;b++)for(let w=0;w<=o;w++)f.x=b/t,f.y=w/o,g.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ic(new Rc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function po(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];if(P0(o))o.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(P0(o[0])){const a=[];for(let c=0,d=o.length;c<d;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(i){const e={};for(let t=0;t<i.length;t++){const r=po(i[t]);for(const o in r)e[o]=r[o]}return e}function P0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function MS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const ES={clone:po,merge:Vn};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _s extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new ke().fromArray(o.value);break;case"v3":this.uniforms[r].value=new G().fromArray(o.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Zt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class TS extends _s{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class It extends xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AS extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RS extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fc extends mn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const qd=new Zt,N0=new G,L0=new G;class hf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;N0.setFromMatrixPosition(e.matrixWorld),t.position.copy(N0),L0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(L0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){qd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(qd,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,c=o?o.z/a.x:1,d=o?o.w/a.y:1,h=o?o.x/a.x:0,f=o?o.y/a.y:0;e.coordinateSystem===ga||e.reversedDepth?t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+f,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+f,0,0,.5,.5,0,0,0,1),t.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tc=new G,nc=new $r,zi=new G;class nv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(tc,nc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new G,D0=new ke,I0=new ke;class Wn extends nv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,D0,I0),t.subVectors(I0,D0)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*r/f,o*=c.width/h,r*=c.height/f}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class CS extends hf{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=wc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(r!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=r,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class PS extends Fc{constructor(e,t,r=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=r,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new CS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class NS extends hf{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class iv extends Fc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new NS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rv extends nv{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class LS extends hf{constructor(){super(new rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ma extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new LS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ff extends Fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const to=-90,no=1;class Wh extends mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(to,no,e,t);o.layers=this.layers,this.add(o);const a=new Wn(to,no,e,t);a.layers=this.layers,this.add(a);const c=new Wn(to,no,e,t);c.layers=this.layers,this.add(c);const d=new Wn(to,no,e,t);d.layers=this.layers,this.add(d);const h=new Wn(to,no,e,t);h.layers=this.layers,this.add(h);const f=new Wn(to,no,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,d,h]=t;for(const f of t)this.remove(f);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ga)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,d,h,f,m]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),r.texture.mipmapsAutoUpdate=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(x,v,g),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class DS extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class sv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,_t("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class F0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class IS extends Vy{constructor(e=10,t=10,r=4473924,o=8947848){r=new At(r),o=new At(o);const a=t/2,c=e/t,d=e/2,h=[],f=[];for(let v=0,g=0,E=-d;v<=t;v++,E+=c){h.push(-d,0,E,d,0,E),h.push(E,0,-d,E,0,d);const A=v===a?r:o;A.toArray(f,g),g+=3,A.toArray(f,g),g+=3,A.toArray(f,g),g+=3,A.toArray(f,g),g+=3}const m=new hn;m.setAttribute("position",new Vt(h,3)),m.setAttribute("color",new Vt(f,3));const x=new _a({vertexColors:!0,toneMapped:!1});super(m,x),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const U0=new G;let ic,jd;class FS extends mn{constructor(e=new G(0,0,1),t=new G(0,0,0),r=1,o=16776960,a=r*.2,c=a*.2){super(),this.type="ArrowHelper",ic===void 0&&(ic=new hn,ic.setAttribute("position",new Vt([0,0,0,0,1,0],3)),jd=new sf(.5,1,5,1),jd.translate(0,-.5,0)),this.position.copy(t),this.line=new Ac(ic,new _a({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ft(jd,new zg({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,a,c)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{U0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(U0,t)}}setLength(e,t=e*.2,r=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(r,t,r),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class US extends qr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function O0(i,e,t,r){const o=OS(r);switch(t){case Rg:return i*e;case Pg:return i*e/o.components*o.byteLength;case Zh:return i*e/o.components*o.byteLength;case gs:return i*e*2/o.components*o.byteLength;case Jh:return i*e*2/o.components*o.byteLength;case Cg:return i*e*3/o.components*o.byteLength;case Wi:return i*e*4/o.components*o.byteLength;case Qh:return i*e*4/o.components*o.byteLength;case hc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dh:case fh:return Math.max(i,16)*Math.max(e,8)/4;case uh:case hh:return Math.max(i,8)*Math.max(e,8)/2;case ph:case mh:case vh:case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gh:case xc:case xh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Fh:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oh:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yc:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OS(i){switch(i){case li:case wg:return{byteLength:1,components:1};case ma:case bg:case qi:return{byteLength:2,components:1};case jh:case Kh:return{byteLength:2,components:4};case Yi:case qh:case Vi:return{byteLength:4,components:1};case Tg:case Ag:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let i=null,e=!1,t=null,r=null;function o(a,c){r=i.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function kS(i){const e=new WeakMap;function t(d,h){const f=d.array,m=d.usage,x=f.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,f,m),d.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=i.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,f){const m=h.array,x=h.updateRanges;if(i.bindBuffer(f,d),x.length===0)i.bufferSubData(f,0,m);else{x.sort((g,E)=>g.start-E.start);let v=0;for(let g=1;g<x.length;g++){const E=x[v],A=x[g];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let g=0,E=x.length;g<E;g++){const A=x[g];i.bufferSubData(f,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(i.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,d,h),f.version=d.version}}return{get:o,remove:a,update:c}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,PM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:BS,alphahash_pars_fragment:zS,alphamap_fragment:HS,alphamap_pars_fragment:GS,alphatest_fragment:VS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:$S,batching_pars_vertex:YS,batching_vertex:qS,begin_vertex:jS,beginnormal_vertex:KS,bsdfs:ZS,iridescence_fragment:JS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:oM,color_vertex:aM,common:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:fM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:_M,envmap_pars_vertex:xM,envmap_physical_pars_fragment:PM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:wM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:CM,lights_toon_fragment:NM,lights_toon_pars_fragment:LM,lights_phong_fragment:DM,lights_phong_pars_fragment:IM,lights_physical_fragment:FM,lights_physical_pars_fragment:UM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,lightprobes_pars_fragment:zM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:$M,map_particle_fragment:YM,map_particle_pars_fragment:qM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:KM,morphinstance_vertex:ZM,morphcolor_vertex:JM,morphnormal_vertex:QM,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:d1,opaque_fragment:h1,packing:f1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:v1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:S1,shadowmap_vertex:M1,shadowmask_pars_fragment:E1,skinbase_vertex:w1,skinning_pars_vertex:b1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:P1,tonemapping_pars_fragment:N1,transmission_fragment:L1,transmission_pars_fragment:D1,uv_pars_fragment:I1,uv_pars_vertex:F1,uv_vertex:U1,worldpos_vertex:O1,background_vert:k1,background_frag:B1,backgroundCube_vert:z1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:W1,depth_frag:X1,distance_vert:$1,distance_frag:Y1,equirect_vert:q1,equirect_frag:j1,linedashed_vert:K1,linedashed_frag:Z1,meshbasic_vert:J1,meshbasic_frag:Q1,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:aE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:dE,points_vert:hE,points_frag:fE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:vE},Ke={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Vn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Vn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Vn([Ke.points,Ke.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Vn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Vn([Ke.common,Ke.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Vn([Ke.sprite,Ke.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Vn([Ke.common,Ke.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Vn([Ke.lights,Ke.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const rc={r:0,b:0,g:0},_E=new Zt,av=new Et;av.set(-1,0,0,0,1,0,0,0,1);function xE(i,e,t,r,o,a){const c=new At(0);let d=o===!0?0:1,h,f,m=null,x=0,v=null;function g(T){let b=T.isScene===!0?T.background:null;if(b&&b.isTexture){const w=T.backgroundBlurriness>0;b=e.get(b,w)}return b}function E(T){let b=!1;const w=g(T);w===null?y(c,d):w&&w.isColor&&(y(w,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(T,b){const w=g(b);w&&w.isCubeTexture?(f===void 0&&(f=new ft(new Kt(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:po(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=w,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(b.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(av),f.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,(m!==w||x!==w.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,m=w,x=w.version,v=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new ft(new go(2,2),new _s({name:"BackgroundMaterial",uniforms:po(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||x!==w.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,m=w,x=w.version,v=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function y(T,b){T.getRGB(rc,tv(i)),t.buffers.color.setClear(rc.r,rc.g,rc.b,b,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,b=1){c.set(T),d=b,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,y(c,d)},render:E,addToRenderList:A,dispose:S}}function yE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,c=!1;function d(I,V,K,B,ee){let oe=!1;const X=x(I,B,K,V);a!==X&&(a=X,f(a.object)),oe=g(I,B,K,ee),oe&&E(I,B,K,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,w(I,V,K,B),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function h(){return i.createVertexArray()}function f(I){return i.bindVertexArray(I)}function m(I){return i.deleteVertexArray(I)}function x(I,V,K,B){const ee=B.wireframe===!0;let oe=r[V.id];oe===void 0&&(oe={},r[V.id]=oe);const X=I.isInstancedMesh===!0?I.id:0;let $=oe[X];$===void 0&&($={},oe[X]=$);let Z=$[K.id];Z===void 0&&(Z={},$[K.id]=Z);let j=Z[ee];return j===void 0&&(j=v(h()),Z[ee]=j),j}function v(I){const V=[],K=[],B=[];for(let ee=0;ee<t;ee++)V[ee]=0,K[ee]=0,B[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:B,object:I,attributes:{},index:null}}function g(I,V,K,B){const ee=a.attributes,oe=V.attributes;let X=0;const $=K.getAttributes();for(const Z in $)if($[Z].location>=0){const U=ee[Z];let ne=oe[Z];if(ne===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),U===void 0||U.attribute!==ne||ne&&U.data!==ne.data)return!0;X++}return a.attributesNum!==X||a.index!==B}function E(I,V,K,B){const ee={},oe=V.attributes;let X=0;const $=K.getAttributes();for(const Z in $)if($[Z].location>=0){let U=oe[Z];U===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));const ne={};ne.attribute=U,U&&U.data&&(ne.data=U.data),ee[Z]=ne,X++}a.attributes=ee,a.attributesNum=X,a.index=B}function A(){const I=a.newAttributes;for(let V=0,K=I.length;V<K;V++)I[V]=0}function y(I){S(I,0)}function S(I,V){const K=a.newAttributes,B=a.enabledAttributes,ee=a.attributeDivisors;K[I]=1,B[I]===0&&(i.enableVertexAttribArray(I),B[I]=1),ee[I]!==V&&(i.vertexAttribDivisor(I,V),ee[I]=V)}function T(){const I=a.newAttributes,V=a.enabledAttributes;for(let K=0,B=V.length;K<B;K++)V[K]!==I[K]&&(i.disableVertexAttribArray(K),V[K]=0)}function b(I,V,K,B,ee,oe,X){X===!0?i.vertexAttribIPointer(I,V,K,ee,oe):i.vertexAttribPointer(I,V,K,B,ee,oe)}function w(I,V,K,B){A();const ee=B.attributes,oe=K.getAttributes(),X=V.defaultAttributeValues;for(const $ in oe){const Z=oe[$];if(Z.location>=0){let j=ee[$];if(j===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const U=j.normalized,ne=j.itemSize,ie=e.get(j);if(ie===void 0)continue;const Y=ie.buffer,pe=ie.type,ve=ie.bytesPerElement,me=pe===i.INT||pe===i.UNSIGNED_INT||j.gpuType===qh;if(j.isInterleavedBufferAttribute){const re=j.data,q=re.isInterleavedBuffer===!0?re.stride:re.itemSize,Re=j.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let we=0;we<Z.locationSize;we++)S(Z.location+we,re.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<Z.locationSize;we++)y(Z.location+we);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let we=0;we<Z.locationSize;we++)b(Z.location+we,ne/Z.locationSize,pe,U,q*ve,(Re+ne/Z.locationSize*we)*ve,me)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)S(Z.location+re,j.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<Z.locationSize;re++)y(Z.location+re);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let re=0;re<Z.locationSize;re++)b(Z.location+re,ne/Z.locationSize,pe,U,ne*ve,ne/Z.locationSize*re*ve,me)}}else if(X!==void 0){const U=X[$];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(Z.location,U);break;case 3:i.vertexAttrib3fv(Z.location,U);break;case 4:i.vertexAttrib4fv(Z.location,U);break;default:i.vertexAttrib1fv(Z.location,U)}}}}T()}function P(){O();for(const I in r){const V=r[I];for(const K in V){const B=V[K];for(const ee in B){const oe=B[ee];for(const X in oe)m(oe[X].object),delete oe[X];delete B[ee]}}delete r[I]}}function C(I){if(r[I.id]===void 0)return;const V=r[I.id];for(const K in V){const B=V[K];for(const ee in B){const oe=B[ee];for(const X in oe)m(oe[X].object),delete oe[X];delete B[ee]}}delete r[I.id]}function M(I){for(const V in r){const K=r[V];for(const B in K){const ee=K[B];if(ee[I.id]===void 0)continue;const oe=ee[I.id];for(const X in oe)m(oe[X].object),delete oe[X];delete ee[I.id]}}}function R(I){for(const V in r){const K=r[V],B=I.isInstancedMesh===!0?I.id:0,ee=K[B];if(ee!==void 0){for(const oe in ee){const X=ee[oe];for(const $ in X)m(X[$].object),delete X[$];delete ee[oe]}delete K[B],Object.keys(K).length===0&&delete r[V]}}}function O(){F(),c=!0,a!==o&&(a=o,f(a.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:R,releaseStatesOfProgram:M,initAttributes:A,enableAttribute:y,disableUnusedAttributes:T}}function SE(i,e,t){let r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function c(h,f,m){m!==0&&(i.drawArraysInstanced(r,h,f,m),t.update(f,r,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,f,0,m);let v=0;for(let g=0;g<m;g++)v+=f[g];t.update(v,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=d}function ME(i,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Wi&&r.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){const R=M===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==li&&M!==Vi&&!R&&r.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(_t("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&x===!1;t.reversedDepthBuffer===!0&&x===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&x===!0&&_t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:g,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:w,maxSamples:P,samples:C}}function EE(i){const e=this;let t=null,r=0,o=!1,a=!1;const c=new hr,d=new Et,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const g=x.length!==0||v||r!==0||o;return o=v,r=x.length,g},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,v){t=m(x,v,0)},this.setState=function(x,v,g){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!o||E===null||E.length===0||a&&!y)a?m(null):f();else{const T=a?0:r,b=T*4;let w=S.clippingState||null;h.value=w,w=m(E,v,b,g);for(let P=0;P!==b;++P)w[P]=t[P];S.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(x,v,g,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=h.value,E!==!0||y===null){const S=g+A*4,T=v.matrixWorldInverse;d.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let b=0,w=g;b!==A;++b,w+=4)c.copy(x[b]).applyMatrix4(T,d),c.normal.toArray(y,w),y[w+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}class pf extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Kt(5,5,5),a=new _s({name:"CubemapFromEquirect",uniforms:po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:ao});a.uniforms.tEquirect.value=t;const c=new ft(o,a),d=t.minFilter;return t.minFilter===Gr&&(t.minFilter=Qn),new Wh(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}const k0=256,wE=3,bE=20,lv=256,cv=16,TE=3,AE=new G,RE=new At;class Cc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wh(1,10,null),this._boxMesh=new ft(new Kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:d=AE}=a,h=this._renderer;this._setSize(c);const f=this._allocateTarget(),m=this._getSourceTarget(!0);t>0&&(m.texture.mipmapsAutoUpdate=!1);const x=h.autoClear,v=h.autoClearColor,g=h.autoClearDepth,E=h.autoClearStencil,A=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,A===null&&(e.background=h.getClearColor(RE));const y=new Wh(r,o,m);return y.position.copy(d),y.update(h,e),h.autoClear=x,h.autoClearColor=v,h.autoClearDepth=g,h.autoClearStencil=E,e.background=A,t>0&&(m.texture.mipmapsAutoUpdate=!0,this._blur(f,t)),this._applyPMREM(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(k0,vy(e))}_fromTexture(e,t){e.mapping===co||e.mapping===pa?this._setSize(e.image.length===0?k0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=B0(e,!1,!1),r=Math.log2(e)-wE;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=B0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,a=this._cubeCamera;o.material=r,a.renderTarget=e,a.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),a.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===co||e.mapping===pa?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=z0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=CE(),this._integrationMaterial=PE());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/cv);for(let c=0;c<=r;c++){const d=Cc.lodToRoughness(c,r);if(c>r-TE)a.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{const h=d>0?Math.log2(t)+.5*Math.log2(6/(lv*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=h,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=NE());const r=this._blurMaterial,o=r.uniforms,a=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=a.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(a,0,r)}}function B0(i,e,t){return new pf(i,{minFilter:Gr,generateMipmaps:e,type:qi,colorSpace:Sc,depthBuffer:t})}function ba(i,e,t){return new _s({name:i,uniforms:e,vertexShader:Rt.cube_vert,fragmentShader:t,side:ei,blending:ao,depthTest:!1,depthWrite:!1})}function CE(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lv}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function PE(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function NE(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function z0(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function H0(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function LE(i){let e=new WeakMap,t=new WeakMap,r=null;function o(v,g=!1){return v==null?null:g?c(v):a(v)}function a(v){if(v&&v.isTexture){const g=v.mapping;if(g===xd||g===yd)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new pf(E.height);return A.fromEquirectangularTexture(i,v),e.set(v,A),v.addEventListener("dispose",f),d(A.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const g=v.mapping,E=g===xd||g===yd,A=g===co||g===pa;if(E||A){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Cc(i)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const T=v.image;return E&&T&&T.height>0||A&&T&&h(T)?(r===null&&(r=new Cc(i)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",m),y.texture):null}}}return v}function d(v,g){return g===xd?v.mapping=co:g===yd&&(v.mapping=pa),v}function h(v){let g=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&g++;return g===E}function f(v){const g=v.target;g.removeEventListener("dispose",f);const E=e.get(g);E!==void 0&&(e.delete(g),E.dispose())}function m(v){const g=v.target;g.removeEventListener("dispose",m);const E=t.get(g);E!==void 0&&(t.delete(g),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function DE(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&gc("WebGLRenderer: "+r+" extension not supported."),o}}}function IE(i,e,t,r){const o={},a=new WeakMap,c=new FinalizationRegistry(E=>delete o[E]);function d(E){h(E.target)}function h(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete o[E.id],c.unregister(E);const A=a.get(E);A&&(e.remove(A),a.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(E,A){return o[A.id]!==void 0||(A.addEventListener("dispose",d),o[A.id]=new WeakRef(A),c.register(A,A.id,A),t.memory.geometries++),A}function m(E){const A=E.attributes;for(const y in A)e.update(A[y],i.ARRAY_BUFFER)}function x(E){const A=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const T=A!==null?A.array.length:y.array.length/3-1,b=y.count>=65535?Bg:kg,w=new b(Math.ceil(T/3)*6,1),P=w.array;if(A!==null){const M=A.array;S=A.version;for(let R=0,O=0;R<T;R+=3){const F=M[R+0],I=M[R+1],V=M[R+2];P[O++]=F,P[O++]=I,P[O++]=I,P[O++]=V,P[O++]=V,P[O++]=F}}else{S=y.version;for(let M=0,R=0;M<T;M+=3){const O=M+0,F=M+1,I=M+2;P[R++]=O,P[R++]=F,P[R++]=F,P[R++]=I,P[R++]=I,P[R++]=O}}w.version=S;const C=a.get(E);C&&e.remove(C),a.set(E,w)}function v(E){const A=a.get(E);if(A){const y=E.index;y!==null&&A.version<y.version&&x(E)}else x(E);return a.get(E)}function g(){for(const E in o){const A=o[E].deref();A!==void 0&&h(A)}}return{get:f,update:m,getWireframeAttribute:v,dispose:g}}function FE(i,e,t){let r;function o(x){r=x}let a,c;function d(x){a=x.type,c=x.bytesPerElement}function h(x,v){i.drawElements(r,v,a,x*c),t.update(v,r,1)}function f(x,v,g){g!==0&&(i.drawElementsInstanced(r,v,a,x*c,g),t.update(v,r,g))}function m(x,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,a,x,0,g);let A=0;for(let y=0;y<g;y++)A+=v[y];t.update(A,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=m}function UE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(a/3);break;case i.LINES:t.lines+=d*(a/2);break;case i.LINE_STRIP:t.lines+=d*(a-1);break;case i.LINE_LOOP:t.lines+=d*a;break;case i.POINTS:t.points+=d*a;break;default:zt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function OE(i,e,t){const r=new WeakMap,o=new ln;function a(c,d,h){const f=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=m!==void 0?m.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let F=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",F)};var g=F;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let P=d.attributes.position.count*w,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const M=new Float32Array(P*C*4*x),R=new Fg(M,P,C,x);R.type=Vi,R.needsUpdate=!0;const O=w*4;for(let I=0;I<x;I++){const V=S[I],K=T[I],B=b[I],ee=P*C*4*I;for(let oe=0;oe<V.count;oe++){const X=oe*O;E===!0&&(o.fromBufferAttribute(V,oe),M[ee+X+0]=o.x,M[ee+X+1]=o.y,M[ee+X+2]=o.z,M[ee+X+3]=0),A===!0&&(o.fromBufferAttribute(K,oe),M[ee+X+4]=o.x,M[ee+X+5]=o.y,M[ee+X+6]=o.z,M[ee+X+7]=0),y===!0&&(o.fromBufferAttribute(B,oe),M[ee+X+8]=o.x,M[ee+X+9]=o.y,M[ee+X+10]=o.z,M[ee+X+11]=B.itemSize===4?o.w:1)}}v={count:x,texture:R,size:new ke(P,C)},r.set(d,v),d.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<f.length;y++)E+=f[y];const A=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function kE(i,e,t,r,o){let a=new WeakMap;function c(f){const m=o.render.frame,x=f.geometry,v=e.get(f,x);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==m&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,m))),f.isSkinnedMesh){const g=f.skeleton;a.get(g)!==m&&(g.update(),a.set(g,m))}return v}function d(){a=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const BE={[vg]:"LINEAR_TONE_MAPPING",[_g]:"REINHARD_TONE_MAPPING",[xg]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Sg]:"AGX_TONE_MAPPING",[Mg]:"NEUTRAL_TONE_MAPPING",[yg]:"CUSTOM_TONE_MAPPING"};function zE(i,e,t,r,o,a){const c=new Xi(e,t,{type:i,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,h=null,f=null;const m=new hn;m.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const x=new TS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new ft(m,x),g=new rv(-1,1,1,-1,0,1);let E=null,A=null,y=!1,S,T=null,b=[],w=!1;this.setSize=function(P,C){c.setSize(P,C),d!==null&&d.setSize(P,C),h!==null&&h.setSize(P,C);for(let M=0;M<b.length;M++){const R=b[M];R.setSize&&R.setSize(P,C)}},this.setEffects=function(P){b=P,w=b.length>0&&b[0].isRenderPass===!0;const C=c.width,M=c.height;b.length>0&&d===null&&(d=new Xi(C,M,{type:qi,depthBuffer:!1,stencilBuffer:!1}),h=new Xi(C,M,{type:qi,depthBuffer:!1,stencilBuffer:!1}));const R=o===!0&&b.some(O=>O.needsDepthTexture===!0);R!==(c.depthTexture!==null)&&(R===!0&&f===null&&(f=new ho(C,M),a===!0&&(f.format=Vr,f.type=uo)),c.dispose(),c.depthTexture=R?f:null,c.resolveDepthBuffer=R,c.storeMultisampledDepthBuffer=R);for(let O=0;O<b.length;O++){const F=b[O];F.setSize&&F.setSize(C,M),R&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(f)}},this.begin=function(P,C){if(y||P.toneMapping===mr&&b.length===0)return!1;if(T=C,C!==null){const M=C.width,R=C.height;(c.width!==M||c.height!==R)&&this.setSize(M,R)}return w===!1&&P.setRenderTarget(c),S=P.toneMapping,P.toneMapping=mr,!0},this.hasRenderPass=function(){return w},this.end=function(P,C){P.toneMapping=S,y=!0;let M=c,R=d;for(let O=0;O<b.length;O++){const F=b[O];F.enabled!==!1&&(F.render(P,R,M,C),F.needsSwap!==!1&&(M=R,R=R===d?h:d))}if(E!==P.outputColorSpace||A!==P.toneMapping){E=P.outputColorSpace,A=P.toneMapping,x.defines={},Ut.getTransfer(E)===Yt&&(x.defines.SRGB_TRANSFER="");const O=BE[A];O&&(x.defines[O]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=M.texture,P.setRenderTarget(T),P.render(v,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),h!==null&&h.dispose(),m.dispose(),x.dispose()}}const uv=new Xn,dv=new ho(1,1),hv=new Vg(1),fv=new Fg,pv=new Ty,mv=new Gg,G0=[],V0=[],W0=new Float32Array(16),X0=new Float32Array(9),$0=new Float32Array(4);function vo(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let a=G0[o];if(a===void 0&&(a=new Float32Array(o),G0[o]=a),e!==0){r.toArray(a,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(a,d)}return a}function En(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function wn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Uc(i,e){let t=V0[e];t===void 0&&(t=new Int32Array(e),V0[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function HE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2fv(this.addr,e),wn(t,e)}}function VE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;i.uniform3fv(this.addr,e),wn(t,e)}}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4fv(this.addr,e),wn(t,e)}}function XE(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;$0.set(r),i.uniformMatrix2fv(this.addr,!1,$0),wn(t,r)}}function $E(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;X0.set(r),i.uniformMatrix3fv(this.addr,!1,X0),wn(t,r)}}function YE(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;W0.set(r),i.uniformMatrix4fv(this.addr,!1,W0),wn(t,r)}}function qE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2iv(this.addr,e),wn(t,e)}}function KE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3iv(this.addr,e),wn(t,e)}}function ZE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4iv(this.addr,e),wn(t,e)}}function JE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2uiv(this.addr,e),wn(t,e)}}function ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3uiv(this.addr,e),wn(t,e)}}function tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4uiv(this.addr,e),wn(t,e)}}function Oc(i){return i.version===0&&(i.compareFunction=Dg,i.needsUpdate=!0),i}function nw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?a=Oc(dv):a=uv,t.setTexture2D(e||a,o)}function iw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||pv,o)}function rw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Oc(hv):a=mv,t.setTextureCube(e||a,o)}function sw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||fv,o)}function ow(i){switch(i){case 5126:return HE;case 35664:return GE;case 35665:return VE;case 35666:return WE;case 35674:return XE;case 35675:return $E;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return jE;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return QE;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function aw(i,e){i.uniform1fv(this.addr,e)}function lw(i,e){const t=vo(e,this.size,2);i.uniform2fv(this.addr,t)}function cw(i,e){const t=vo(e,this.size,3);i.uniform3fv(this.addr,t)}function uw(i,e){const t=vo(e,this.size,4);i.uniform4fv(this.addr,t)}function dw(i,e){const t=vo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hw(i,e){const t=vo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fw(i,e){const t=vo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pw(i,e){i.uniform1iv(this.addr,e)}function mw(i,e){i.uniform2iv(this.addr,e)}function gw(i,e){i.uniform3iv(this.addr,e)}function vw(i,e){i.uniform4iv(this.addr,e)}function _w(i,e){i.uniform1uiv(this.addr,e)}function xw(i,e){i.uniform2uiv(this.addr,e)}function yw(i,e){i.uniform3uiv(this.addr,e)}function Sw(i,e){i.uniform4uiv(this.addr,e)}function Mw(i,e,t){const r=this.cache,o=e.length,a=Uc(t,o);En(r,a)||(i.uniform1iv(this.addr,a),wn(r,a));let c;this.type===i.SAMPLER_2D_SHADOW?c=Oc(dv):c=uv;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,a[d])}function Ew(i,e,t){const r=this.cache,o=e.length,a=Uc(t,o);En(r,a)||(i.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||pv,a[c])}function ww(i,e,t){const r=this.cache,o=e.length,a=Uc(t,o);En(r,a)||(i.uniform1iv(this.addr,a),wn(r,a));let c;this.type===i.SAMPLER_CUBE_SHADOW?c=Oc(hv):c=mv;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,a[d])}function bw(i,e,t){const r=this.cache,o=e.length,a=Uc(t,o);En(r,a)||(i.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||fv,a[c])}function Tw(i){switch(i){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return hw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return xw;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return bw}}class Aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}}class Rw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tw(t.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const d=o[a];d.setValue(e,t[d.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function Y0(i,e){i.seq.push(e),i.map[e.id]=e}function Pw(i,e,t){const r=i.name,o=r.length;for(Kd.lastIndex=0;;){const a=Kd.exec(r),c=Kd.lastIndex;let d=a[1];const h=a[2]==="]",f=a[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===o){Y0(t,f===void 0?new Aw(d,i,e):new Rw(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new Cw(d),Y0(t,x)),t=x}}}class _c{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);Pw(d,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const d=t[a],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function q0(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Nw=37297;let Lw=0;function Dw(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const j0=new Et;function Iw(i){Ut._getMatrix(j0,Ut.workingColorSpace,i);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(i)){case Mc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function K0(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Dw(i.getShaderSource(e),d)}else return a}function Fw(i,e){const t=Iw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Uw={[vg]:"Linear",[_g]:"Reinhard",[xg]:"Cineon",[Nc]:"ACESFilmic",[Sg]:"AgX",[Mg]:"Neutral",[yg]:"Custom"};function Ow(i,e){const t=Uw[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new G;function kw(){Ut.getLuminanceCoefficients(sc);const i=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function zw(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Hw(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=i.getActiveAttrib(e,o),c=a.name;let d=1;a.type===i.FLOAT_MAT2&&(d=2),a.type===i.FLOAT_MAT3&&(d=3),a.type===i.FLOAT_MAT4&&(d=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function ca(i){return i!==""}function Z0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function J0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(Gw,Vw)}function Vw(i,e){const t=Rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xh(t)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(i){return i.replace(Ww,Xw)}function Xw(i,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function eg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $w={[dc]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function Yw(i){return $w[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qw={[pa]:"ENVMAP_MODE_REFRACTION"};function jw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kw={[gg]:"ENVMAP_BLENDING_MULTIPLY",[ey]:"ENVMAP_BLENDING_MIX",[ty]:"ENVMAP_BLENDING_ADD"};function Zw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kw[i.combine]||"ENVMAP_BLENDING_NONE"}function Jw(i,e,t,r){const o=i.getContext(),a=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=Yw(t),f=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",m=jw(t),x=Zw(t),v=Bw(t),g=zw(a),E=o.createProgram();let A,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),A.length>0&&(A+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),y.length>0&&(y+=`
`)):(A=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?Rt.tonemapping_pars_fragment:"",t.toneMapping!==mr?Ow("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Fw("linearToOutputTexel",t.outputColorSpace),kw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),c=Xh(c),c=Z0(c,t),c=J0(c,t),d=Xh(d),d=Z0(d,t),d=J0(d,t),c=Q0(c),d=Q0(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,A=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,y=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=S+A+c,b=S+y+d,w=q0(o,o.VERTEX_SHADER,T),P=q0(o,o.FRAGMENT_SHADER,b);o.attachShader(E,w),o.attachShader(E,P),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function C(F){if(i.debug.checkShaderErrors){const I=o.getProgramInfoLog(E)||"",V=o.getShaderInfoLog(w)||"",K=o.getShaderInfoLog(P)||"",B=I.trim(),ee=V.trim(),oe=K.trim();let X=!0,$=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,w,P);else{const Z=K0(o,w,"vertex"),j=K0(o,P,"fragment");zt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+Z+`
`+j)}else B!==""?_t("WebGLProgram: Program Info Log:",B):(ee===""||oe==="")&&($=!1);$&&(F.diagnostics={runnable:X,programLog:B,vertexShader:{log:ee,prefix:A},fragmentShader:{log:oe,prefix:y}})}o.deleteShader(w),o.deleteShader(P),M=new _c(o,E),R=Hw(o,E)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(E,Nw)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=P,this}let Qw=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tb(e),t.set(e,r)),r}}class tb{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}}function nb(i){return i===gs||i===xc||i===yc}function ib(i,e,t,r,o,a){const c=new Ug,d=new eb,h=new Set,f=[],m=new Map,x=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return h.add(M),M===0?"uv":`uv${M}`}function E(M,R,O,F,I,V){const K=F.fog,B=I.geometry,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,X=e.get(M.envMap||ee,oe),$=v[M.type];let Z=r.precision;M.precision!==null&&(Z=r.getMaxPrecision(M.precision),Z!==M.precision&&_t("WebGLProgram.getParameters:",M.precision,"not supported, using",Z,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,U=j!==void 0?j.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let ie,Y,pe,ve;if($){const je=Gi[$];ie=je.vertexShader,Y=je.fragmentShader}else{ie=M.vertexShader,Y=M.fragmentShader;const je=d.getVertexShaderStage(M),Ft=d.getFragmentShaderStage(M);d.update(M,je,Ft),pe=je.id,ve=Ft.id}const me=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),q=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,we=!!M.map,Te=!!M.matcap,Pe=!!X,ae=Pe&&X.isPMREMTexture===!0,xe=!!M.aoMap,Me=!!M.lightMap,Ce=!!M.bumpMap&&M.wireframe===!1,Ae=!!M.normalMap,Je=!!M.displacementMap,Ye=!!M.emissiveMap,ut=!!M.metalnessMap,xt=!!M.roughnessMap,wt=M.anisotropy>0,J=M.clearcoat>0,Wt=M.diffuseRoughness>0,pt=M.dispersion>0,Lt=M.retroreflectivity>0,Ue=M.iridescence>0,Xt=M.sheen>0,st=M.transmission>0,dt=wt&&!!M.anisotropyMap,z=J&&!!M.clearcoatMap,L=J&&!!M.clearcoatNormalMap,ue=J&&!!M.clearcoatRoughnessMap,Ie=Wt&&!!M.diffuseRoughnessMap,be=Ue&&!!M.iridescenceMap,He=Ue&&!!M.iridescenceThicknessMap,We=Xt&&!!M.sheenColorMap,ye=Xt&&!!M.sheenRoughnessMap,Se=!!M.specularMap,Be=!!M.specularColorMap,W=!!M.specularIntensityMap,Ee=st&&!!M.transmissionMap,_e=st&&!!M.thicknessMap,Ve=!!M.gradientMap,Oe=!!M.alphaMap,Ge=M.alphaTest>0,at=!!M.alphaHash,bt=!!M.extensions;let De=mr;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(De=i.toneMapping);const ht=ae?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,yt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:Y,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:Z,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:q,instancingColor:q&&I.instanceColor!==null,instancingMorph:q&&I.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:we,matcap:Te,envMap:Pe,envMapMode:Pe&&X.mapping,envMapPMREM:ae,envMapMaxLod:ae?ht.length-1:null,envMapSize:ae?ht[0].width:null,aoMap:xe,lightMap:Me,bumpMap:Ce,normalMap:Ae,displacementMap:Je,emissiveMap:Ye,normalMapObjectSpace:Ae&&M.normalMapType===ry,normalMapTangentSpace:Ae&&M.normalMapType===zh,packedNormalMap:Ae&&M.normalMapType===zh&&nb(M.normalMap.format),metalnessMap:ut,roughnessMap:xt,anisotropy:wt,anisotropyMap:dt,clearcoat:J,clearcoatMap:z,clearcoatNormalMap:L,clearcoatRoughnessMap:ue,diffuseRoughness:Wt,diffuseRoughnessMap:Ie,dispersion:pt,retroreflection:Lt,iridescence:Ue,iridescenceMap:be,iridescenceThicknessMap:He,sheen:Xt,sheenColorMap:We,sheenRoughnessMap:ye,specularMap:Se,specularColorMap:Be,specularIntensityMap:W,transmission:st,transmissionMap:Ee,thicknessMap:_e,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===ua&&M.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Ge,alphaHash:at,combine:M.combine,mapUv:we&&g(M.map.channel),aoMapUv:xe&&g(M.aoMap.channel),lightMapUv:Me&&g(M.lightMap.channel),bumpMapUv:Ce&&g(M.bumpMap.channel),normalMapUv:Ae&&g(M.normalMap.channel),displacementMapUv:Je&&g(M.displacementMap.channel),emissiveMapUv:Ye&&g(M.emissiveMap.channel),metalnessMapUv:ut&&g(M.metalnessMap.channel),roughnessMapUv:xt&&g(M.roughnessMap.channel),anisotropyMapUv:dt&&g(M.anisotropyMap.channel),clearcoatMapUv:z&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:L&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ie&&g(M.diffuseRoughnessMap.channel),iridescenceMapUv:be&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:He&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(M.sheenRoughnessMap.channel),specularMapUv:Se&&g(M.specularMap.channel),specularColorMapUv:Be&&g(M.specularColorMap.channel),specularIntensityMapUv:W&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:_e&&g(M.thicknessMap.channel),alphaMapUv:Oe&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ae||wt),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(we||Oe),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&Ae===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:re,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:V.filter(je=>je.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ut.getTransfer(M.map.colorSpace)===Yt,decodeVideoTextureEmissive:Ye&&M.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(M.emissiveMap.colorSpace)===Yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fr,flipSided:M.side===ei,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:bt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&M.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=h.has(1),yt.vertexUv2s=h.has(2),yt.vertexUv3s=h.has(3),h.clear(),yt}function A(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)R.push(O),R.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(R,M),S(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapPMREM),M.push(R.envMapMaxLod),M.push(R.envMapSize),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.diffuseRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.numSunLights),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numSunLightShadows),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.numLightProbeGrids),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.retroreflection&&c.enable(24),R.diffuseRoughness&&c.enable(25),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function T(M){const R=v[M.type];let O;if(R){const F=Gi[R];O=ES.clone(F.uniforms)}else O=M.uniforms;return O}function b(M,R){let O=m.get(R);return O!==void 0?++O.usedTimes:(O=new Jw(i,R,M,o),f.push(O),m.set(R,O)),O}function w(M){if(--M.usedTimes===0){const R=f.indexOf(M);f[R]=f[f.length-1],f.pop(),m.delete(M.cacheKey),M.destroy()}}function P(M){d.remove(M)}function C(){d.dispose()}return{getParameters:E,getProgramCacheKey:A,getUniforms:T,acquireProgram:b,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:C}}function rb(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function o(c,d,h){i.get(c)[d]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ng(){const i=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(v){let g=0;return v.isInstancedMesh&&(g+=2),v.isSkinnedMesh&&(g+=1),g}function d(v,g,E,A,y,S){let T=i[e];return T===void 0?(T={id:v.id,object:v,geometry:g,material:E,materialVariant:c(v),groupOrder:A,renderOrder:v.renderOrder,z:y,group:S},i[e]=T):(T.id=v.id,T.object=v,T.geometry=g,T.material=E,T.materialVariant=c(v),T.groupOrder=A,T.renderOrder=v.renderOrder,T.z=y,T.group=S),e++,T}function h(v,g,E,A,y,S,T){T.reversedDepth===!0&&(y=-y);const b=d(v,g,E,A,y,S);E.transmission>0?r.push(b):E.transparent===!0?o.push(b):t.push(b)}function f(v,g,E,A,y,S){const T=d(v,g,E,A,y,S);E.transmission>0?r.unshift(T):E.transparent===!0?o.unshift(T):t.unshift(T)}function m(v,g){t.length>1&&t.sort(v||sb),r.length>1&&r.sort(g||tg),o.length>1&&o.sort(g||tg)}function x(){for(let v=e,g=i.length;v<g;v++){const E=i[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:h,unshift:f,finish:x,sort:m}}function ob(){let i=new WeakMap;function e(r,o){const a=i.get(r);let c;return a===void 0?(c=new ng,i.set(r,[c])):o>=a.length?(c=new ng,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function ab(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new At};break;case"SpotLight":t={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function lb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cb=0;function ub(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function db(i){const e=new ab,t=lb(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new G);const o=new G,a=new Zt,c=new Zt;function d(f){let m=0,x=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let g=0,E=0,A=0,y=0,S=0,T=0,b=0,w=0,P=0,C=0,M=0,R=0,O=0,F=0;f.sort(ub);for(let V=0,K=f.length;V<K;V++){const B=f[V],ee=B.color,oe=B.intensity,X=B.distance;let $=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===gs?$=B.shadow.map.texture:$=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=ee.r*oe,x+=ee.g*oe,v+=ee.b*oe;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(B.sh.coefficients[Z],oe);F++}else if(B.isSunLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,U=t.get(B);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[E]=U,r.sunShadowMap[E]=$;const ne=j.getViewportCount();for(let ie=0;ie<ne;ie++)r.sunShadowMatrix[A+ie]=j.getMatrix(ie),r.sunShadowCascade[A+ie]=j._cascadeData[ie];A+=ne,E++}r.sun[g]=Z,g++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,U=t.get(B);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=B.shadow.matrix,P++}r.directional[y]=Z,y++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(ee).multiplyScalar(oe),Z.distance=X,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,r.spot[T]=Z;const j=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,j.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[T]=j.matrix,B.castShadow){const U=t.get(B);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,r.spotShadow[T]=U,r.spotShadowMap[T]=$,M++}T++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(ee).multiplyScalar(oe),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=Z,b++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const j=B.shadow,U=t.get(B);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,r.pointShadow[S]=U,r.pointShadowMap[S]=$,r.pointShadowMatrix[S]=B.shadow.matrix,C++}r.point[S]=Z,S++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(oe),Z.groundColor.copy(B.groundColor).multiplyScalar(oe),r.hemi[w]=Z,w++}}b>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=v;const I=r.hash;(I.sunLength!==g||I.directionalLength!==y||I.pointLength!==S||I.spotLength!==T||I.rectAreaLength!==b||I.hemiLength!==w||I.numSunShadows!==E||I.numDirectionalShadows!==P||I.numPointShadows!==C||I.numSpotShadows!==M||I.numSpotMaps!==R||I.numLightProbes!==F)&&(r.sun.length=g,r.directional.length=y,r.spot.length=T,r.rectArea.length=b,r.point.length=S,r.hemi.length=w,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,I.sunLength=g,I.directionalLength=y,I.pointLength=S,I.spotLength=T,I.rectAreaLength=b,I.hemiLength=w,I.numSunShadows=E,I.numDirectionalShadows=P,I.numPointShadows=C,I.numSpotShadows=M,I.numSpotMaps=R,I.numLightProbes=F,r.version=cb++)}function h(f,m){let x=0,v=0,g=0,E=0,A=0,y=0;const S=m.matrixWorldInverse;for(let T=0,b=f.length;T<b;T++){const w=f[T];if(w.isSunLight){const P=r.sun[x];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(S),x++}else if(w.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(w.isSpotLight){const P=r.spot[E];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),E++}else if(w.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(S),c.identity(),a.copy(w.matrixWorld),a.premultiply(S),c.extractRotation(a),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),A++}else if(w.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(S),g++}else if(w.isHemisphereLight){const P=r.hemi[y];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(S),y++}}}return{setup:d,setupView:h,state:r}}function ig(i){const e=new db(i),t=[],r=[],o=[];function a(x){m.camera=x,t.length=0,r.length=0,o.length=0}function c(x){x.isLightProbeGrid?o.push(x):t.push(x)}function d(x){r.push(x)}function h(){e.setup(t),o.sort((x,v)=>x.priority-v.priority||x.id-v.id)}function f(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:m,setupLights:h,setupLightsView:f,pushLight:c,pushShadow:d}}function hb(i){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let d;return c===void 0?(d=new ig(i),e.set(o,[d])):a>=c.length?(d=new ig(i),c.push(d)):d=c[a],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],gb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],rg=new Zt,sa=new G,Zd=new G;function vb(i,e,t){let r=new va;const o=new ke,a=new ke,c=new ln,d=new AS,h=new RS,f={},m=t.maxTextureSize,x={[ms]:ei,[ei]:ms,[fr]:fr},v=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:fb,fragmentShader:pb}),g=v.clone();g.defines.HORIZONTAL_PASS=1;const E=new hn;E.setAttribute("position",new Wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ft(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let S=this.type;this.render=function(C,M,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===fg&&(_t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dc);const O=i.getRenderTarget(),F=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ao),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=S!==this.type;K&&M.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(ee=>ee.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,ee=C.length;B<ee;B++){const oe=C[B],X=oe.shadow;if(X===void 0){_t("WebGLShadowMap:",oe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const $=X.getFrameExtents();o.multiply($),a.copy(X.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/$.x),o.x=a.x*$.x,X.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/$.y),o.y=a.y*$.y,X.mapSize.y=a.y));const Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||K===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===aa){if(oe.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Xi(o.x,o.y,{format:gs,type:qi,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),X.map.texture.name=oe.name+".shadowMap",X.map.depthTexture=new ho(o.x,o.y,Vi),X.map.depthTexture.name=oe.name+".shadowMapDepth",X.map.depthTexture.format=Xr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln}else oe.isPointLight?(X.map=new pf(o.x),X.map.depthTexture=new Vg(o.x,Yi)):(X.map=new Xi(o.x,o.y),X.map.depthTexture=new ho(o.x,o.y,Yi)),X.map.depthTexture.name=oe.name+".shadowMap",X.map.depthTexture.format=Xr,this.type===dc?(X.map.depthTexture.compareFunction=Z?Lg:Ng,X.map.depthTexture.minFilter=Qn,X.map.depthTexture.magFilter=Qn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==o.x||X.map.height!==o.y)&&X.map.setSize(o.x,o.y);const j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();oe.isPointLight!==!0&&X.updateMatrices(oe,R);const U=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:R.layers;for(let ne=0;ne<j;ne++){const ie=X.getCamera(ne);if(oe.isPointLight){const Y=X.camera,pe=X.matrix,ve=oe.distance||Y.far;ve!==Y.far&&(Y.far=ve,Y.updateProjectionMatrix()),sa.setFromMatrixPosition(oe.matrixWorld),Y.position.copy(sa),Zd.copy(Y.position),Zd.add(mb[ne]),Y.up.copy(gb[ne]),Y.lookAt(Zd),Y.updateMatrixWorld(),pe.makeTranslation(-sa.x,-sa.y,-sa.z),rg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),X._frustum.setFromProjectionMatrix(rg,Y.coordinateSystem,Y.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(X.map),i.clear());const Y=X.getViewport(ne);c.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),V.viewport(c)}r=X.getFrustum(ne),w(M,R,ie,oe,U,this.type)}X.isPointLightShadow!==!0&&this.type===aa&&T(X,R),X.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(O,F,I)};function T(C,M){const R=e.update(A);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null?C.mapPass=new Xi(o.x,o.y,{format:gs,type:qi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),v.uniforms.shadow_pass.value=C.map.depthTexture,v.uniforms.resolution.value.set(C.map.width,C.map.height),v.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(M,null,R,v,A,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(M,null,R,g,A,null)}function b(C,M,R,O){let F=null;const I=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)F=I;else if(F=R.isPointLight===!0?h:d,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const V=F.uuid,K=M.uuid;let B=f[V];B===void 0&&(B={},f[V]=B);let ee=B[K];ee===void 0&&(ee=F.clone(),B[K]=ee,M.addEventListener("dispose",P)),F=ee}if(F.visible=M.visible,F.wireframe=M.wireframe,O===aa?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:x[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const V=i.properties.get(F);V.light=R}return F}function w(C,M,R,O,F,I){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===aa)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),ee=C.material;if(Array.isArray(ee)){const oe=B.groups;for(let X=0,$=oe.length;X<$;X++){const Z=oe[X],j=ee[Z.materialIndex];if(j&&j.visible){const U=b(C,j,O,I);C.onBeforeShadow(i,C,M,R,B,U,Z),i.renderBufferDirect(R,null,B,U,C,Z),C.onAfterShadow(i,C,M,R,B,U,Z)}}}else if(ee.visible){const oe=b(C,ee,O,I);C.onBeforeShadow(i,C,M,R,B,oe,null),i.renderBufferDirect(R,null,B,oe,C,null),C.onAfterShadow(i,C,M,R,B,oe,null)}}const K=C.children;for(let B=0,ee=K.length;B<ee;B++)w(K[B],M,R,O,F,I)}function P(C){C.target.removeEventListener("dispose",P);for(const R in f){const O=f[R],F=C.target.uuid;F in O&&(O[F].dispose(),delete O[F])}}}function _b(i,e){function t(){let W=!1;const Ee=new ln;let _e=null;const Ve=new ln(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!W&&(i.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,Ge,at,bt,De){De===!0&&(Oe*=bt,Ge*=bt,at*=bt),Ee.set(Oe,Ge,at,bt),Ve.equals(Ee)===!1&&(i.clearColor(Oe,Ge,at,bt),Ve.copy(Ee))},reset:function(){W=!1,_e=null,Ve.set(-1,0,0,0)}}}function r(){let W=!1,Ee=!1,_e=null,Ve=null,Oe=null;return{setReversed:function(Ge){if(Ee!==Ge){const at=e.get("EXT_clip_control");Ge?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ee=Ge;const bt=Oe;Oe=null,this.setClear(bt)}},getReversed:function(){return Ee},setTest:function(Ge){Ge?re(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(Ge){_e!==Ge&&!W&&(i.depthMask(Ge),_e=Ge)},setFunc:function(Ge){if(Ee&&(Ge=my[Ge]),Ve!==Ge){switch(Ge){case th:i.depthFunc(i.NEVER);break;case nh:i.depthFunc(i.ALWAYS);break;case ih:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case rh:i.depthFunc(i.EQUAL);break;case sh:i.depthFunc(i.GEQUAL);break;case oh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ve=Ge}},setLocked:function(Ge){W=Ge},setClear:function(Ge){Oe!==Ge&&(Oe=Ge,Ee&&(Ge=1-Ge),i.clearDepth(Ge))},reset:function(){W=!1,_e=null,Ve=null,Oe=null,Ee=!1}}}function o(){let W=!1,Ee=null,_e=null,Ve=null,Oe=null,Ge=null,at=null,bt=null,De=null;return{setTest:function(ht){W||(ht?re(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(ht){Ee!==ht&&!W&&(i.stencilMask(ht),Ee=ht)},setFunc:function(ht,yt,je){(_e!==ht||Ve!==yt||Oe!==je)&&(i.stencilFunc(ht,yt,je),_e=ht,Ve=yt,Oe=je)},setOp:function(ht,yt,je){(Ge!==ht||at!==yt||bt!==je)&&(i.stencilOp(ht,yt,je),Ge=ht,at=yt,bt=je)},setLocked:function(ht){W=ht},setClear:function(ht){De!==ht&&(i.clearStencil(ht),De=ht)},reset:function(){W=!1,Ee=null,_e=null,Ve=null,Oe=null,Ge=null,at=null,bt=null,De=null}}}const a=new t,c=new r,d=new o;let h={};const f=new WeakMap;let m={},x={},v={},g=new WeakMap,E=[],A=null,y=!1,S=null,T=null,b=null,w=null,P=null,C=null,M=null,R=new At(0,0,0),O=0,F=!1,I=null,V=null,K=null,B=null,ee=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=$>=2);let j=null,U={};const ne=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Y=new ln().fromArray(ne),pe=new ln().fromArray(ie);function ve(W,Ee,_e,Ve){const Oe=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(W,Ge),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<_e;at++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ee+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return Ge}const me={};me[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),re(i.DEPTH_TEST),c.setFunc(fa),Ce(!1),Ae(jm),re(i.CULL_FACE),xe(ao);function re(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function q(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function Re(W,Ee){return v[W]!==Ee?(i.bindFramebuffer(W,Ee),v[W]=Ee,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ee),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function we(W,Ee){let _e=E,Ve=!1;if(W){_e=g.get(Ee),_e===void 0&&(_e=[],g.set(Ee,_e));const Oe=W.textures;if(_e.length!==Oe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,at=Oe.length;Ge<at;Ge++)_e[Ge]=i.COLOR_ATTACHMENT0+Ge;_e.length=Oe.length,Ve=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ve=!0);Ve&&i.drawBuffers(_e)}function Te(W){return A!==W?(i.useProgram(W),A=W,!0):!1}const Pe={[io]:i.FUNC_ADD,[Ox]:i.FUNC_SUBTRACT,[kx]:i.FUNC_REVERSE_SUBTRACT};Pe[Bx]=i.MIN,Pe[zx]=i.MAX;const ae={[Hx]:i.ZERO,[Gx]:i.ONE,[Vx]:i.SRC_COLOR,[pg]:i.SRC_ALPHA,[jx]:i.SRC_ALPHA_SATURATE,[Yx]:i.DST_COLOR,[Xx]:i.DST_ALPHA,[Wx]:i.ONE_MINUS_SRC_COLOR,[mg]:i.ONE_MINUS_SRC_ALPHA,[qx]:i.ONE_MINUS_DST_COLOR,[$x]:i.ONE_MINUS_DST_ALPHA,[Kx]:i.CONSTANT_COLOR,[Zx]:i.ONE_MINUS_CONSTANT_COLOR,[Jx]:i.CONSTANT_ALPHA,[Qx]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Ee,_e,Ve,Oe,Ge,at,bt,De,ht){if(W===ao){y===!0&&(q(i.BLEND),y=!1);return}if(y===!1&&(re(i.BLEND),y=!0),W!==Ux){if(W!==S||ht!==F){if((T!==io||P!==io)&&(i.blendEquation(i.FUNC_ADD),T=io,P=io),ht)switch(W){case ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Km:i.blendFunc(i.ONE,i.ONE);break;case Zm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",W);break}else switch(W){case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Km:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zm:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jm:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",W);break}b=null,w=null,C=null,M=null,R.set(0,0,0),O=0,S=W,F=ht}return}Oe=Oe||Ee,Ge=Ge||_e,at=at||Ve,(Ee!==T||Oe!==P)&&(i.blendEquationSeparate(Pe[Ee],Pe[Oe]),T=Ee,P=Oe),(_e!==b||Ve!==w||Ge!==C||at!==M)&&(i.blendFuncSeparate(ae[_e],ae[Ve],ae[Ge],ae[at]),b=_e,w=Ve,C=Ge,M=at),(bt.equals(R)===!1||De!==O)&&(i.blendColor(bt.r,bt.g,bt.b,De),R.copy(bt),O=De),S=W,F=!1}function Me(W,Ee){W.side===fr?q(i.CULL_FACE):re(i.CULL_FACE);let _e=W.side===ei;Ee&&(_e=!_e),Ce(_e),W.blending===ua&&W.transparent===!1?xe(ao):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ve=W.stencilWrite;d.setTest(Ve),Ve&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function Ae(W){W!==Ix?(re(i.CULL_FACE),W!==V&&(W===jm?i.cullFace(i.BACK):W===Fx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),V=W}function Je(W){W!==K&&(X&&i.lineWidth(W),K=W)}function Ye(W,Ee,_e){W?(re(i.POLYGON_OFFSET_FILL),(B!==Ee||ee!==_e)&&(B=Ee,ee=_e,c.getReversed()&&(Ee=-Ee,_e=-_e),i.polygonOffset(Ee,_e))):q(i.POLYGON_OFFSET_FILL)}function ut(W){W?re(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function xt(W){W===void 0&&(W=i.TEXTURE0+oe-1),j!==W&&(i.activeTexture(W),j=W)}function wt(W,Ee,_e){_e===void 0&&(j===null?_e=i.TEXTURE0+oe-1:_e=j);let Ve=U[_e];Ve===void 0&&(Ve={type:void 0,texture:void 0},U[_e]=Ve),(Ve.type!==W||Ve.texture!==Ee)&&(j!==_e&&(i.activeTexture(_e),j=_e),i.bindTexture(W,Ee||me[W]),Ve.type=W,Ve.texture=Ee)}function J(){const W=U[j];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function pt(){try{i.compressedTexImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Lt(){try{i.texSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function Ue(){try{i.texSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Xt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function dt(){try{i.texStorage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function z(){try{i.texStorage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function L(){try{i.texImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function ue(){try{i.texImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Ie(W){return x[W]!==void 0?x[W]:i.getParameter(W)}function be(W,Ee){x[W]!==Ee&&(i.pixelStorei(W,Ee),x[W]=Ee)}function He(W){Y.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Y.copy(W))}function We(W){pe.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),pe.copy(W))}function ye(W,Ee){let _e=f.get(Ee);_e===void 0&&(_e=new WeakMap,f.set(Ee,_e));let Ve=_e.get(W);Ve===void 0&&(Ve=i.getUniformBlockIndex(Ee,W.name),i.uniformBlockBinding(Ee,Ve,Ve),_e.set(W,Ve))}function Se(W,Ee,_e){const Oe=f.get(Ee).get(W);h[Oe]!==_e&&(i.bindBufferBase(i.UNIFORM_BUFFER,Oe,_e),h[Oe]=_e)}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},x={},j=null,U={},v={},h={},g=new WeakMap,E=[],A=null,y=!1,S=null,T=null,b=null,w=null,P=null,C=null,M=null,R=new At(0,0,0),O=0,F=!1,I=null,V=null,K=null,B=null,ee=null,Y.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:re,disable:q,bindFramebuffer:Re,drawBuffers:we,useProgram:Te,setBlending:xe,setMaterial:Me,setFlipSided:Ce,setCullFace:Ae,setLineWidth:Je,setPolygonOffset:Ye,setScissorTest:ut,activeTexture:xt,bindTexture:wt,unbindTexture:J,compressedTexImage2D:Wt,compressedTexImage3D:pt,texImage2D:L,texImage3D:ue,pixelStorei:be,getParameter:Ie,updateUBOMapping:ye,uniformBlockBinding:Se,texStorage2D:dt,texStorage3D:z,texSubImage2D:Lt,texSubImage3D:Ue,compressedTexSubImage2D:Xt,compressedTexSubImage3D:st,scissor:He,viewport:We,reset:Be}}function xb(i,e,t,r,o,a,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ke,m=new WeakMap,x=new Set;let v;const g=new WeakMap,E=new Set,A=new FinalizationRegistry(z=>E.delete(z));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,L){return y?new OffscreenCanvas(z,L):Ec("canvas")}function T(z,L,ue){let Ie=1;const be=dt(z);if((be.width>ue||be.height>ue)&&(Ie=ue/Math.max(be.width,be.height)),Ie<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const He=Math.floor(Ie*be.width),We=Math.floor(Ie*be.height);v===void 0&&(v=S(He,We));const ye=L?S(He,We):v;return ye.width=He,ye.height=We,ye.getContext("2d").drawImage(z,0,0,He,We),_t("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+He+"x"+We+")."),ye}else return"data"in z&&_t("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),z;return z}function b(z){return z.generateMipmaps}function w(z){i.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(z,L,ue,Ie,be,He=!1){if(z!==null){if(i[z]!==void 0)return i[z];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let We;Ie&&(We=e.get("EXT_texture_norm16"),We||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=L;if(L===i.RED&&(ue===i.FLOAT&&(ye=i.R32F),ue===i.HALF_FLOAT&&(ye=i.R16F),ue===i.UNSIGNED_BYTE&&(ye=i.R8),ue===i.UNSIGNED_SHORT&&We&&(ye=We.R16_EXT),ue===i.SHORT&&We&&(ye=We.R16_SNORM_EXT)),L===i.RED_INTEGER&&(ue===i.UNSIGNED_BYTE&&(ye=i.R8UI),ue===i.UNSIGNED_SHORT&&(ye=i.R16UI),ue===i.UNSIGNED_INT&&(ye=i.R32UI),ue===i.BYTE&&(ye=i.R8I),ue===i.SHORT&&(ye=i.R16I),ue===i.INT&&(ye=i.R32I)),L===i.RG&&(ue===i.FLOAT&&(ye=i.RG32F),ue===i.HALF_FLOAT&&(ye=i.RG16F),ue===i.UNSIGNED_BYTE&&(ye=i.RG8),ue===i.UNSIGNED_SHORT&&We&&(ye=We.RG16_EXT),ue===i.SHORT&&We&&(ye=We.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(ue===i.UNSIGNED_BYTE&&(ye=i.RG8UI),ue===i.UNSIGNED_SHORT&&(ye=i.RG16UI),ue===i.UNSIGNED_INT&&(ye=i.RG32UI),ue===i.BYTE&&(ye=i.RG8I),ue===i.SHORT&&(ye=i.RG16I),ue===i.INT&&(ye=i.RG32I)),L===i.RGB_INTEGER&&(ue===i.UNSIGNED_BYTE&&(ye=i.RGB8UI),ue===i.UNSIGNED_SHORT&&(ye=i.RGB16UI),ue===i.UNSIGNED_INT&&(ye=i.RGB32UI),ue===i.BYTE&&(ye=i.RGB8I),ue===i.SHORT&&(ye=i.RGB16I),ue===i.INT&&(ye=i.RGB32I)),L===i.RGBA_INTEGER&&(ue===i.UNSIGNED_BYTE&&(ye=i.RGBA8UI),ue===i.UNSIGNED_SHORT&&(ye=i.RGBA16UI),ue===i.UNSIGNED_INT&&(ye=i.RGBA32UI),ue===i.BYTE&&(ye=i.RGBA8I),ue===i.SHORT&&(ye=i.RGBA16I),ue===i.INT&&(ye=i.RGBA32I)),L===i.RGB&&(ue===i.UNSIGNED_SHORT&&We&&(ye=We.RGB16_EXT),ue===i.SHORT&&We&&(ye=We.RGB16_SNORM_EXT),ue===i.UNSIGNED_INT_5_9_9_9_REV&&(ye=i.RGB9_E5),ue===i.UNSIGNED_INT_10F_11F_11F_REV&&(ye=i.R11F_G11F_B10F)),L===i.RGBA){const Se=He?Mc:Ut.getTransfer(be);ue===i.FLOAT&&(ye=i.RGBA32F),ue===i.HALF_FLOAT&&(ye=i.RGBA16F),ue===i.UNSIGNED_BYTE&&(ye=Se===Yt?i.SRGB8_ALPHA8:i.RGBA8),ue===i.UNSIGNED_SHORT&&We&&(ye=We.RGBA16_EXT),ue===i.SHORT&&We&&(ye=We.RGBA16_SNORM_EXT),ue===i.UNSIGNED_SHORT_4_4_4_4&&(ye=i.RGBA4),ue===i.UNSIGNED_SHORT_5_5_5_1&&(ye=i.RGB5_A1)}return(ye===i.R16F||ye===i.R32F||ye===i.RG16F||ye===i.RG32F||ye===i.RGBA16F||ye===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function M(z,L){let ue;return z?L===null||L===Yi||L===uo?ue=i.DEPTH24_STENCIL8:L===Vi?ue=i.DEPTH32F_STENCIL8:L===ma&&(ue=i.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Yi||L===uo?ue=i.DEPTH_COMPONENT24:L===Vi?ue=i.DEPTH_COMPONENT32F:L===ma&&(ue=i.DEPTH_COMPONENT16),ue}function R(z,L){return b(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ln&&z.minFilter!==Qn?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function O(z){const L=new WeakRef(z);r.get(z).__ref=L,E.add(L),A.register(z,L,L)}function F(z){const L=r.get(z).__ref;L!==void 0&&(E.delete(L),A.unregister(L))}function I(z){K(z.target)}function V(z){B(z.target)}function K(z){z.removeEventListener("dispose",I),F(z),oe(z),z.isVideoTexture&&m.delete(z),z.isHTMLTexture&&x.delete(z)}function B(z){z.removeEventListener("dispose",V),F(z),$(z)}function ee(){for(const z of E){const L=z.deref();L!==void 0&&(L.isRenderTarget===!0?B(L):K(L))}E.clear(),x.clear()}function oe(z){const L=r.get(z);if(L.__webglInit===void 0)return;const ue=z.source,Ie=g.get(ue);if(Ie){const be=Ie[L.__cacheKey];be.usedTimes--,be.usedTimes===0&&X(z),Object.keys(Ie).length===0&&g.delete(ue)}r.remove(z)}function X(z){const L=r.get(z);i.deleteTexture(L.__webglTexture);const ue=z.source,Ie=g.get(ue);delete Ie[L.__cacheKey],c.memory.textures--}function $(z){const L=r.get(z);L.__depthDisposeCallback&&L.__depthDisposeCallback();const ue=z.depthTexture;if(ue&&ue.renderTarget===z&&K(ue),z.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(L.__webglFramebuffer[be]))for(let He=0;He<L.__webglFramebuffer[be].length;He++)i.deleteFramebuffer(L.__webglFramebuffer[be][He]);else i.deleteFramebuffer(L.__webglFramebuffer[be]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[be])}else{if(Array.isArray(L.__webglFramebuffer))for(let be=0;be<L.__webglFramebuffer.length;be++)i.deleteFramebuffer(L.__webglFramebuffer[be]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let be=0;be<L.__webglColorRenderbuffer.length;be++)L.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[be]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const Ie=z.textures;for(let be=0,He=Ie.length;be<He;be++){const We=r.get(Ie[be]);We.__webglTexture&&(i.deleteTexture(We.__webglTexture),c.memory.textures--),r.remove(Ie[be])}r.remove(z)}let Z=0;function j(){Z=0}function U(){return Z}function ne(z){Z=z}function ie(){const z=Z;return z>=o.maxTextures&&_t("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,z}function Y(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.mipmapsAutoUpdate),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()}function pe(z,L){const ue=r.get(z);if(z.isVideoTexture&&Xt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ue.__version!==z.version){const Ie=z.image;if(Ie===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(Ie.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(ue,z,L);return}}else z.isExternalTexture&&(ue.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture,i.TEXTURE0+L)}function ve(z,L){const ue=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ue.__version!==z.version){Me(ue,z,L);return}else z.isExternalTexture&&(ue.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ue.__webglTexture,i.TEXTURE0+L)}function me(z,L){const ue=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ue.__version!==z.version){Me(ue,z,L);return}t.bindTexture(i.TEXTURE_3D,ue.__webglTexture,i.TEXTURE0+L)}function re(z,L){const ue=r.get(z);if(z.version>0&&ue.__version!==z.version){Ce(ue,z,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture,i.TEXTURE0+L)}const q={[lh]:i.REPEAT,[pr]:i.CLAMP_TO_EDGE,[ch]:i.MIRRORED_REPEAT},Re={[Ln]:i.NEAREST,[ny]:i.NEAREST_MIPMAP_NEAREST,[Nl]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Sd]:i.LINEAR_MIPMAP_NEAREST,[Gr]:i.LINEAR_MIPMAP_LINEAR},we={[oy]:i.NEVER,[Dg]:i.ALWAYS,[ay]:i.LESS,[Ng]:i.LEQUAL,[ly]:i.EQUAL,[Lg]:i.GEQUAL,[cy]:i.GREATER,[uy]:i.NOTEQUAL};function Te(z,L){if(L.type===Vi&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Qn||L.magFilter===Sd||L.magFilter===Nl||L.magFilter===Gr||L.minFilter===Qn||L.minFilter===Sd||L.minFilter===Nl||L.minFilter===Gr)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,q[L.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,q[L.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,q[L.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,Re[L.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,Re[L.minFilter]),L.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,we[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Ln||L.minFilter!==Nl&&L.minFilter!==Gr||L.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||r.get(L).__currentAnisotropy){const ue=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,o.getMaxAnisotropy())),r.get(L).__currentAnisotropy=L.anisotropy}}}function Pe(z,L){let ue=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",I),O(L));const Ie=L.source;let be=g.get(Ie);be===void 0&&(be={},g.set(Ie,be));const He=Y(L);if(He!==z.__cacheKey){be[He]===void 0&&(be[He]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ue=!0),be[He].usedTimes++;const We=be[z.__cacheKey];We!==void 0&&(be[z.__cacheKey].usedTimes--,We.usedTimes===0&&X(L)),z.__cacheKey=He,z.__webglTexture=be[He].texture}return ue}function ae(z,L,ue){return Math.floor(Math.floor(z/ue)/L)}function xe(z,L,ue,Ie){const He=z.updateRanges;if(He.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,ue,Ie,L.data);else{He.sort((W,Ee)=>W.start-Ee.start);let We=0;for(let W=1;W<He.length;W++){const Ee=He[We],_e=He[W],Ve=Ee.start+Ee.count,Oe=ae(_e.start,L.width,4),Ge=ae(Ee.start,L.width,4);_e.start<=Ve+1&&Oe===Ge&&ae(_e.start+_e.count-1,L.width,4)===Oe?Ee.count=Math.max(Ee.count,_e.start+_e.count-Ee.start):(++We,He[We]=_e)}He.length=We+1;const ye=t.getParameter(i.UNPACK_ROW_LENGTH),Se=t.getParameter(i.UNPACK_SKIP_PIXELS),Be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let W=0,Ee=He.length;W<Ee;W++){const _e=He[W],Ve=Math.floor(_e.start/4),Oe=Math.ceil(_e.count/4),Ge=Ve%L.width,at=Math.floor(Ve/L.width),bt=Oe,De=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,at),t.texSubImage2D(i.TEXTURE_2D,0,Ge,at,bt,De,ue,Ie,L.data)}z.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ye),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function Me(z,L,ue){let Ie=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Ie=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Ie=i.TEXTURE_3D);const be=Pe(z,L),He=L.source;t.bindTexture(Ie,z.__webglTexture,i.TEXTURE0+ue);const We=r.get(He);if(He.version!==We.__version||be===!0){if(t.activeTexture(i.TEXTURE0+ue),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){const De=Ut.getPrimaries(Ut.workingColorSpace),ht=L.colorSpace===Hr?null:Ut.getPrimaries(L.colorSpace),yt=L.colorSpace===Hr||De===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let Se=T(L.image,!1,o.maxTextureSize);Se=st(L,Se);const Be=a.convert(L.format,L.colorSpace),W=a.convert(L.type);let Ee=C(L.internalFormat,Be,W,L.normalized,L.colorSpace,L.isVideoTexture);Te(Ie,L);let _e;const Ve=L.mipmaps,Oe=L.isVideoTexture!==!0,Ge=We.__version===void 0||be===!0,at=He.dataReady,bt=R(L,Se);if(L.isDepthTexture)Ee=M(L.format===Vr,L.type),Ge&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ee,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,Ee,Se.width,Se.height,0,Be,W,null));else if(L.isDataTexture)if(Ve.length>0){Oe&&Ge&&t.texStorage2D(i.TEXTURE_2D,bt,Ee,Ve[0].width,Ve[0].height);for(let De=0,ht=Ve.length;De<ht;De++)_e=Ve[De],Oe?at&&t.texSubImage2D(i.TEXTURE_2D,De,0,0,_e.width,_e.height,Be,W,_e.data):t.texImage2D(i.TEXTURE_2D,De,Ee,_e.width,_e.height,0,Be,W,_e.data);L.generateMipmaps=!1}else Oe?(Ge&&t.texStorage2D(i.TEXTURE_2D,bt,Ee,Se.width,Se.height),at&&xe(L,Se,Be,W)):t.texImage2D(i.TEXTURE_2D,0,Ee,Se.width,Se.height,0,Be,W,Se.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Oe&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ee,Ve[0].width,Ve[0].height,Se.depth);for(let De=0,ht=Ve.length;De<ht;De++)if(_e=Ve[De],L.format!==Wi)if(Be!==null)if(Oe){if(at)if(L.layerUpdates.size>0){const yt=O0(_e.width,_e.height,L.format,L.type);for(const je of L.layerUpdates){const Ft=_e.data.subarray(je*yt/_e.data.BYTES_PER_ELEMENT,(je+1)*yt/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,je,_e.width,_e.height,1,Be,Ft)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,_e.width,_e.height,Se.depth,Be,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,De,Ee,_e.width,_e.height,Se.depth,0,_e.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?at&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,_e.width,_e.height,Se.depth,Be,W,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,De,Ee,_e.width,_e.height,Se.depth,0,Be,W,_e.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{Oe&&Ge&&t.texStorage2D(i.TEXTURE_2D,bt,Ee,Ve[0].width,Ve[0].height);for(let De=0,ht=Ve.length;De<ht;De++)_e=Ve[De],L.format!==Wi?Be!==null?Oe?at&&t.compressedTexSubImage2D(i.TEXTURE_2D,De,0,0,_e.width,_e.height,Be,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,De,Ee,_e.width,_e.height,0,_e.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?at&&t.texSubImage2D(i.TEXTURE_2D,De,0,0,_e.width,_e.height,Be,W,_e.data):t.texImage2D(i.TEXTURE_2D,De,Ee,_e.width,_e.height,0,Be,W,_e.data)}else if(L.isDataArrayTexture)if(Oe){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ee,Se.width,Se.height,Se.depth),at)if(L.layerUpdates.size>0){const De=O0(Se.width,Se.height,L.format,L.type);for(const ht of L.layerUpdates){const yt=Se.data.subarray(ht*De/Se.data.BYTES_PER_ELEMENT,(ht+1)*De/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,Se.width,Se.height,1,Be,W,yt)}L.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Be,W,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,Se.width,Se.height,Se.depth,0,Be,W,Se.data);else if(L.isData3DTexture)Oe?(Ge&&t.texStorage3D(i.TEXTURE_3D,bt,Ee,Se.width,Se.height,Se.depth),at&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Be,W,Se.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,Se.width,Se.height,Se.depth,0,Be,W,Se.data);else if(L.isFramebufferTexture){if(Ge)if(Oe)t.texStorage2D(i.TEXTURE_2D,bt,Ee,Se.width,Se.height);else{let De=Se.width,ht=Se.height;for(let yt=0;yt<bt;yt++)t.texImage2D(i.TEXTURE_2D,yt,Ee,De,ht,0,Be,W,null),De>>=1,ht>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){const De=i.canvas;if(De.hasAttribute("layoutsubtree")||De.setAttribute("layoutsubtree","true"),Se.parentNode!==De){De.appendChild(Se),x.add(L),De.onpaint=ht=>{const yt=ht.changedElements;for(const je of x)yt.includes(je.image)&&(je.needsUpdate=!0)},De.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Se);else{const yt=i.RGBA,je=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,je,Ft,Se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Oe&&Ge){const De=dt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,bt,Ee,De.width,De.height)}for(let De=0,ht=Ve.length;De<ht;De++)_e=Ve[De],Oe?at&&t.texSubImage2D(i.TEXTURE_2D,De,0,0,Be,W,_e):t.texImage2D(i.TEXTURE_2D,De,Ee,Be,W,_e);L.generateMipmaps=!1}else if(Oe){if(Ge){const De=dt(Se);t.texStorage2D(i.TEXTURE_2D,bt,Ee,De.width,De.height)}at&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,W,Se)}else t.texImage2D(i.TEXTURE_2D,0,Ee,Be,W,Se);b(L)&&L.mipmapsAutoUpdate===!0&&w(Ie),We.__version=He.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ce(z,L,ue){if(L.image.length!==6)return;const Ie=Pe(z,L),be=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ue);const He=r.get(be);if(be.version!==He.__version||Ie===!0){t.activeTexture(i.TEXTURE0+ue);const We=Ut.getPrimaries(Ut.workingColorSpace),ye=L.colorSpace===Hr?null:Ut.getPrimaries(L.colorSpace),Se=L.colorSpace===Hr||We===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Be=L.isCompressedTexture||L.image[0].isCompressedTexture,W=L.image[0]&&L.image[0].isDataTexture,Ee=[];for(let je=0;je<6;je++)!Be&&!W?Ee[je]=T(L.image[je],!0,o.maxCubemapSize):Ee[je]=W?L.image[je].image:L.image[je],Ee[je]=st(L,Ee[je]);const _e=Ee[0],Ve=a.convert(L.format,L.colorSpace),Oe=a.convert(L.type);let Ge=C(L.internalFormat,Ve,Oe,L.normalized,L.colorSpace);const at=L.isVideoTexture!==!0,bt=He.__version===void 0||Ie===!0,De=be.dataReady;let ht=R(L,_e);Te(i.TEXTURE_CUBE_MAP,L);let yt;if(L.isDepthTexture){if(Ge=M(L.format===Vr,L.type),bt)if(at)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ge,_e.width,_e.height);else for(let je=0;je<6;je++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ge,_e.width,_e.height,0,Ve,Oe,null)}else if(Be){at&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ge,_e.width,_e.height);for(let je=0;je<6;je++){yt=Ee[je].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const sn=yt[Ft];L.format!==Wi?Ve!==null?at?De&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft,0,0,sn.width,sn.height,Ve,sn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft,Ge,sn.width,sn.height,0,sn.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft,0,0,sn.width,sn.height,Ve,Oe,sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft,Ge,sn.width,sn.height,0,Ve,Oe,sn.data)}}}else{if(yt=L.mipmaps,at&&bt){yt.length>0&&ht++;const je=dt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ge,je.width,je.height)}for(let je=0;je<6;je++)if(W){at?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Ee[je].width,Ee[je].height,Ve,Oe,Ee[je].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ge,Ee[je].width,Ee[je].height,0,Ve,Oe,Ee[je].data);for(let Ft=0;Ft<yt.length;Ft++){const ti=yt[Ft].image[je].image;at?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft+1,0,0,ti.width,ti.height,Ve,Oe,ti.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft+1,Ge,ti.width,ti.height,0,Ve,Oe,ti.data)}}else{at?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Ve,Oe,Ee[je]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ge,Ve,Oe,Ee[je]);for(let Ft=0;Ft<yt.length;Ft++){const sn=yt[Ft];at?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft+1,0,0,Ve,Oe,sn.image[je]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ft+1,Ge,Ve,Oe,sn.image[je])}}}b(L)&&L.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),He.__version=be.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ae(z,L,ue,Ie,be,He){const We=a.convert(ue.format,ue.colorSpace),ye=a.convert(ue.type),Se=C(ue.internalFormat,We,ye,ue.normalized,ue.colorSpace),Be=r.get(L),W=r.get(ue);if(W.__renderTarget=L,!Be.__hasExternalTextures){const Ee=Math.max(1,L.width>>He),_e=Math.max(1,L.height>>He);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,He,Se,Ee,_e,L.depth,0,We,ye,null):t.texImage2D(be,He,Se,Ee,_e,0,We,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),Ue(L)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,be,W.__webglTexture,0,Lt(L)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ie,be,W.__webglTexture,He),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(z,L,ue){if(i.bindRenderbuffer(i.RENDERBUFFER,z),L.depthBuffer){const Ie=L.depthTexture,be=Ie&&Ie.isDepthTexture?Ie.type:null,He=M(L.stencilBuffer,be),We=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(L)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(L),He,L.width,L.height):ue?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(L),He,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,He,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,z)}else{const Ie=L.textures;for(let be=0;be<Ie.length;be++){const He=Ie[be],We=a.convert(He.format,He.colorSpace),ye=a.convert(He.type),Se=C(He.internalFormat,We,ye,He.normalized,He.colorSpace);Ue(L)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(L),Se,L.width,L.height):ue?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(L),Se,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Se,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(z,L,ue){const Ie=L.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const be=r.get(L.depthTexture);be.__renderTarget=L;const He=Ie?L.depthTexture.image[0]:L.depthTexture.image;(!be.__webglTexture||He.width!==L.width||He.height!==L.height)&&(He.width=L.width,He.height=L.height,L.depthTexture.needsUpdate=!0),Ie?re(L.depthTexture,0):pe(L.depthTexture,0);const We=be.__webglTexture,ye=Lt(L),Se=Ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+ue:i.TEXTURE_2D,Be=L.depthTexture.format===Vr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===Xr)Ue(L)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,Se,We,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,Be,Se,We,0);else if(L.depthTexture.format===Vr)Ue(L)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,Se,We,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,Be,Se,We,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(z){const L=r.get(z),ue=z.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==z.depthTexture){const Ie=z.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),Ie){const be=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,Ie.removeEventListener("dispose",be)};Ie.addEventListener("dispose",be),L.__depthDisposeCallback=be}L.__boundDepthTexture=Ie}if(z.depthTexture&&!L.__autoAllocateDepthBuffer)if(ue)for(let Ie=0;Ie<6;Ie++)Ye(L.__webglFramebuffer[Ie],z,Ie);else z.texture.mipmaps.length>0?Ye(L.__webglFramebuffer[0],z,0):Ye(L.__webglFramebuffer,z,0);else if(ue){L.__webglDepthbuffer=[];for(let Ie=0;Ie<6;Ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[Ie]),L.__webglDepthbuffer[Ie]===void 0)L.__webglDepthbuffer[Ie]=i.createRenderbuffer(),Je(L.__webglDepthbuffer[Ie],z,!1);else{const be=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=L.__webglDepthbuffer[Ie];i.bindRenderbuffer(i.RENDERBUFFER,He),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,He)}}else if(z.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),Je(L.__webglDepthbuffer,z,!1);else{const be=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,He),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,He)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(z,L,ue){const Ie=r.get(z);L!==void 0&&Ae(Ie.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ue!==void 0&&ut(z)}function wt(z){const L=z.texture,ue=r.get(z),Ie=r.get(L);z.addEventListener("dispose",V),O(z);const be=z.textures,He=z.isWebGLCubeRenderTarget===!0,We=be.length>1;if(We||(Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture()),Ie.__version=L.version,c.memory.textures++),He){ue.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(L.mipmaps.length>0){ue.__webglFramebuffer[ye]=[];for(let Se=0;Se<L.mipmaps.length;Se++)ue.__webglFramebuffer[ye][Se]=i.createFramebuffer()}else ue.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(L.mipmaps.length>0){ue.__webglFramebuffer=[];for(let ye=0;ye<L.mipmaps.length;ye++)ue.__webglFramebuffer[ye]=i.createFramebuffer()}else ue.__webglFramebuffer=i.createFramebuffer();if(We)for(let ye=0,Se=be.length;ye<Se;ye++){const Be=r.get(be[ye]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),c.memory.textures++)}if(z.samples>0&&Ue(z)===!1){ue.__webglMultisampledFramebuffer=i.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let ye=0;ye<be.length;ye++){const Se=be[ye];ue.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);const Be=a.convert(Se.format,Se.colorSpace),W=a.convert(Se.type),Ee=C(Se.internalFormat,Be,W,Se.normalized,Se.colorSpace,z.isXRRenderTarget===!0),_e=Lt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Ee,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ue.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(ue.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(He){t.bindTexture(i.TEXTURE_CUBE_MAP,Ie.__webglTexture),Te(i.TEXTURE_CUBE_MAP,L);for(let ye=0;ye<6;ye++)if(L.mipmaps.length>0)for(let Se=0;Se<L.mipmaps.length;Se++)Ae(ue.__webglFramebuffer[ye][Se],z,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Se);else Ae(ue.__webglFramebuffer[ye],z,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);b(L)?w(i.TEXTURE_CUBE_MAP):L.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}else if(We){for(let ye=0,Se=be.length;ye<Se;ye++){const Be=be[ye],W=r.get(Be);let Ee=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ee=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,W.__webglTexture),Te(Ee,Be),Ae(ue.__webglFramebuffer,z,Be,i.COLOR_ATTACHMENT0+ye,Ee,0),b(Be)&&w(Ee)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ye=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ie.__webglTexture),Te(ye,L),L.mipmaps.length>0)for(let Se=0;Se<L.mipmaps.length;Se++)Ae(ue.__webglFramebuffer[Se],z,L,i.COLOR_ATTACHMENT0,ye,Se);else Ae(ue.__webglFramebuffer,z,L,i.COLOR_ATTACHMENT0,ye,0);b(L)?w(ye):L.mipmaps.length>0&&i.texParameteri(ye,i.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}z.depthBuffer&&ut(z)}function J(z){const L=z.textures;for(let ue=0,Ie=L.length;ue<Ie;ue++){const be=L[ue];if(b(be)&&be.mipmapsAutoUpdate===!0){const He=P(z),We=r.get(be).__webglTexture;t.bindTexture(He,We),w(He),t.unbindTexture()}}}const Wt=[];function pt(z){if(z.samples>0){if(Ue(z)===!1){const L=z.textures,ue=z.width,Ie=z.height;let be=i.COLOR_BUFFER_BIT;const He=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=r.get(z),ye=L.length>1;if(ye)for(let Be=0;Be<L.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Be=0;Be<L.length;Be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);const W=r.get(L[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,ue,Ie,0,0,ue,Ie,be,i.NEAREST),h===!0&&(Wt.length=0,Wt.push(i.COLOR_ATTACHMENT0+Be),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Wt.push(He),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Be=0;Be<L.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);const W=r.get(L[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,W,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&h){const L=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function Lt(z){return Math.min(o.maxSamples,z.samples)}function Ue(z){const L=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Xt(z){const L=c.render.frame;m.get(z)!==L&&(m.set(z,L),z.update())}function st(z,L){const ue=z.colorSpace,Ie=z.format,be=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ue!==Sc&&ue!==Hr&&(Ut.getTransfer(ue)===Yt?(Ie!==Wi||be!==li)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",ue)),L}function dt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(f.width=z.naturalWidth||z.width,f.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(f.width=z.displayWidth,f.height=z.displayHeight):(f.width=z.width,f.height=z.height),f}this.allocateTextureUnit=ie,this.resetTextureUnits=j,this.getTextureUnits=U,this.setTextureUnits=ne,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=me,this.setTextureCube=re,this.rebindTextures=xt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ue,this.dispose=ee}function yb(i,e){function t(r,o=Hr){let a;const c=Ut.getTransfer(o);if(r===li)return i.UNSIGNED_BYTE;if(r===jh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Ag)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===wg)return i.BYTE;if(r===bg)return i.SHORT;if(r===ma)return i.UNSIGNED_SHORT;if(r===qh)return i.INT;if(r===Yi)return i.UNSIGNED_INT;if(r===Vi)return i.FLOAT;if(r===qi)return i.HALF_FLOAT;if(r===Rg)return i.ALPHA;if(r===Cg)return i.RGB;if(r===Wi)return i.RGBA;if(r===Xr)return i.DEPTH_COMPONENT;if(r===Vr)return i.DEPTH_STENCIL;if(r===Pg)return i.RED;if(r===Zh)return i.RED_INTEGER;if(r===gs)return i.RG;if(r===Jh)return i.RG_INTEGER;if(r===Qh)return i.RGBA_INTEGER;if(r===hc||r===fc||r===pc||r===mc)if(c===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===dh||r===hh||r===fh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph||r===mh||r===gh||r===vh||r===_h||r===xc||r===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ph||r===mh)return c===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===vh)return a.COMPRESSED_R11_EAC;if(r===_h)return a.COMPRESSED_SIGNED_R11_EAC;if(r===xc)return a.COMPRESSED_RG11_EAC;if(r===xh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===yh||r===Sh||r===Mh||r===Eh||r===wh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Nh||r===Lh||r===Dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Th)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ah)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===Fh||r===Uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ih)return c===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===kh||r===yc||r===Bh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Oh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===uo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const Sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Wg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new _s({vertexShader:Sb,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new go(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wb extends qr{constructor(e,t){super();const r=this;let o=null,a=1,c=null,d="local-floor",h=1,f=null,m=null,x=null,v=null,g=null,E=null;const A=typeof XRWebGLBinding<"u",y=new Eb,S={},T=t.getContextAttributes();let b=null,w=null;const P=[],C=[],M=new ke;let R=null,O=null;const F=new Wn;F.viewport=new ln;const I=new Wn;I.viewport=new ln;const V=[F,I],K=new DS;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=P[Y];return pe===void 0&&(pe=new Cd,P[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=P[Y];return pe===void 0&&(pe=new Cd,P[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=P[Y];return pe===void 0&&(pe=new Cd,P[Y]=pe),pe.getHandSpace()};function oe(Y){const pe=C.indexOf(Y.inputSource);if(pe===-1)return;const ve=P[pe];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,f||c),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",$);for(let Y=0;Y<P.length;Y++){const pe=C[Y];pe!==null&&(C[Y]=null,P[Y].disconnect(pe))}B=null,ee=null,y.reset();for(const Y in S)delete S[Y];if(e.setRenderTarget(b),g=null,v=null,x=null,o=null,w=null,ie.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),O!==null){const Y=O.camera;Y.fov=O.fov,Y.zoom=O.zoom,Y.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,r.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return v!==null?v:g},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",X),o.addEventListener("inputsourceschange",$),T.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,me=null,re=null;T.depth&&(re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Vr:Xr,me=T.stencil?uo:Yi);const q={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:a};x=this.getBinding(),v=x.createProjectionLayer(q),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new Xi(v.textureWidth,v.textureHeight,{format:Wi,type:li,depthTexture:new ho(v.textureWidth,v.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Xi(g.framebufferWidth,g.framebufferHeight,{format:Wi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await o.requestReferenceSpace(d),ie.setContext(o),ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(Y){for(let pe=0;pe<Y.removed.length;pe++){const ve=Y.removed[pe],me=C.indexOf(ve);me>=0&&(C[me]=null,P[me].disconnect(ve))}for(let pe=0;pe<Y.added.length;pe++){const ve=Y.added[pe];let me=C.indexOf(ve);if(me===-1){for(let q=0;q<P.length;q++)if(q>=C.length){C.push(ve),me=q;break}else if(C[q]===null){C[q]=ve,me=q;break}if(me===-1)break}const re=P[me];re&&re.connect(ve)}}function Z(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let pe=Y.near,ve=Y.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),K.near=I.near=F.near=pe,K.far=I.far=F.far=ve,(B!==K.near||ee!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),B=K.near,ee=K.far),K.layers.mask=Y.layers.mask|6,F.layers.mask=K.layers.mask&-5,I.layers.mask=K.layers.mask&-3;const me=Y.parent,re=K.cameras;Z(K,me);for(let q=0;q<re.length;q++)Z(re[q],me);K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),O===null&&Y.isPerspectiveCamera&&(O={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,K,me)};function j(Y,pe,ve){ve===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&g===null))return h},this.setFoveation=function(Y){h=Y,v!==null&&(v.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(Y){return S[Y]};let U=null;function ne(Y,pe){if(m=pe.getViewerPose(f||c),E=pe,m!==null){const ve=m.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let me=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,me=!0);for(let we=0;we<ve.length;we++){const Te=ve[we];let Pe=null;if(g!==null)Pe=g.getViewport(Te);else{const xe=x.getViewSubImage(v,Te);Pe=xe.viewport,we===0&&(e.setRenderTargetTextures(w,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(w))}let ae=V[we];ae===void 0&&(ae=new Wn,ae.layers.enable(we),ae.viewport=new ln,V[we]=ae),ae.matrix.fromArray(Te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),we===0&&(K.matrix.copy(ae.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),me===!0&&K.cameras.push(ae)}const re=o.enabledFeatures;if(re&&re.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const we=x.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&y.init(we,o.renderState)}if(re&&re.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let we=0;we<ve.length;we++){const Te=ve[we].camera;if(Te){let Pe=S[Te];Pe||(Pe=new Wg,S[Te]=Pe);const ae=x.getCameraImage(Te);Pe.sourceTexture=ae}}}}for(let ve=0;ve<P.length;ve++){const me=C[ve],re=P[ve];me!==null&&re!==void 0&&re.update(me,pe,f||c)}U&&U(Y,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),E=null}const ie=new ov;ie.setAnimationLoop(ne),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const bb=new Zt,gv=new Et;gv.set(-1,0,0,0,1,0,0,0,1);function Tb(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,tv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,T,b,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),x(y,S)):S.isMeshPhongMaterial?(a(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),v(y,S),S.isMeshPhysicalMaterial&&g(y,S,w)):S.isMeshMatcapMaterial?(a(y,S),E(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),A(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?h(y,S,T,b):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ei&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ei&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=e.get(S),b=T.envMap,w=T.envMapRotation;b&&(y.envMap.value=b,y.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(w)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(gv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,T,b){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=b*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function g(y,S,T){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ei&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const T=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Ab(i,e,t,r){let o={},a={};function c(T,b){const w=b.program;r.uniformBlockBinding(T,w,o[T.id])}function d(T,b){let w=o[T.id];w===void 0&&(E(T),w=h(T),o[T.id]=w,T.addEventListener("dispose",y));const P=b.program;r.updateUBOMapping(T,P);const C=e.render.frame;a[T.id]!==C&&(f(T),a[T.id]=C)}function h(T){const b=i.createBuffer(),w=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,P),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function f(T){const b=o[T.id],w=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,M=w.length;C<M;C++){const R=w[C];if(Array.isArray(R))for(let O=0,F=R.length;O<F;O++)m(R[O],C,O,P);else m(R,C,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,b,w,P){if(v(T,b,w,P)===!0){const C=T.__offset,M=T.value;if(Array.isArray(M)){let R=0;for(let O=0;O<M.length;O++){const F=M[O],I=A(F,!0);x(F,T.__data,R),R+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else x(M,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,T.__data)}}function x(T,b,w){typeof T=="number"||typeof T=="boolean"?b[w]=T:T.isMatrix3?(b[w]=T.elements[0],b[w+1]=T.elements[1],b[w+2]=T.elements[2],b[w+3]=0,b[w+4]=T.elements[3],b[w+5]=T.elements[4],b[w+6]=T.elements[5],b[w+7]=0,b[w+8]=T.elements[6],b[w+9]=T.elements[7],b[w+10]=T.elements[8],b[w+11]=0):ArrayBuffer.isView(T)?b.set(T.subarray(0,b.length-w),w):T.toArray(b,w)}function v(T,b,w,P){const C=T.value,M=b+"_"+w;if(Array.isArray(C)){P[M]===void 0&&(P[M]=[]);const R=P[M];let O=!1;for(let F=0;F<C.length;F++)g(C[F],R,F)===!0&&(O=!0);return O}return g(C,P,M)}function g(T,b,w){if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:ArrayBuffer.isView(T)?b[w]=T.slice():b[w]=T.clone(),!0;{const P=b[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[w]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(P.equals(T)===!1)return P.copy(T),!0}}return!1}function E(T){const b=T.uniforms;let w=0;const P=16;for(let M=0,R=b.length;M<R;M++){const O=Array.isArray(b[M])?b[M]:[b[M]];for(let F=0,I=O.length;F<I;F++){const V=O[F],K=Array.isArray(V.value)?V.value:[V.value],B=Array.isArray(b[M])||Array.isArray(V.value);let ee=w;for(let X=0,$=K.length;X<$;X++){const Z=K[X],j=A(Z,B),U=w%P,ne=U%j.boundary,ie=U+ne;w+=ne,ie!==0&&P-ie<j.storage&&(w+=P-ie),X===0&&(ee=w),w+=j.storage}const oe=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new oe((w-ee)/Float32Array.BYTES_PER_ELEMENT),V.__offset=ee}}const C=w%P;return C>0&&(w+=P-C),T.__size=w,T.__cache={},this}function A(T,b){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=16,w.storage=48):T.isMatrix4?(w.boundary=16,w.storage=64):T.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(w.boundary=16,w.storage=T.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",T),b===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function y(T){const b=T.target;b.removeEventListener("dispose",y),i.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function S(){for(const T in o)i.deleteBuffer(o[T]);o={},a={}}return{bind:c,update:d,dispose:S}}const Rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function Cb(){return Hi===null&&(Hi=new Hy(Rb,16,16,gs,qi),Hi.name="DFG_LUT",Hi.minFilter=Qn,Hi.magFilter=Qn,Hi.wrapS=pr,Hi.wrapT=pr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class mf{constructor(e={}){const{canvas:t=fy(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:g=li}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const A=g,y=new Set([Qh,Jh,Zh]),S=new Set([li,Yi,ma,uo,jh,Kh]),T=new Uint32Array(4),b=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let P=null,C=null;const M=[],R=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let I=!1,V=null,K=null,B=null,ee=null;this._outputColorSpace=xi;let oe=0,X=0,$=null,Z=-1,j=null;const U=new ln,ne=new ln;let ie=null;const Y=new At(0);let pe=0,ve=t.width,me=t.height,re=1,q=null,Re=null;const we=new ln(0,0,ve,me),Te=new ln(0,0,ve,me);let Pe=!1;const ae=new va,xe=new rf;let Me=!1,Ce=!1;const Ae=new Zt,Je=new G,Ye=new ln,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function wt(){return $===null?re:1}let J=r;function Wt(D,Q){return t.getContext(D,Q)}let pt,Lt,Ue,Xt,st,dt,z,L,ue,Ie,be,He,We,ye,Se,Be,W,Ee,_e,Ve,Oe,Ge,at;try{const D={alpha:!0,depth:o,stencil:a,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",je,!1),J===null){const Q="webgl2";if(J=Wt(Q,D),J===null)throw Wt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(D){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),zt("WebGLRenderer: "+D.message),D}function bt(){pt=new DE(J),pt.init(),Oe=new yb(J,pt),Lt=new ME(J,pt,e,Oe),Ue=new _b(J,pt),Lt.reversedDepthBuffer&&v&&Ue.buffers.depth.setReversed(!0),K=J.createFramebuffer(),B=J.createFramebuffer(),ee=J.createFramebuffer(),Xt=new UE(J),st=new rb,dt=new xb(J,pt,Ue,st,Lt,Oe,Xt),z=new LE(F),L=new kS(J),Ge=new yE(J,L),ue=new IE(J,L,Xt,Ge),Ie=new kE(J,ue,L,Ge,Xt),Ee=new OE(J,Lt,dt),Se=new EE(st),be=new ib(F,z,pt,Lt,Ge,Se),He=new Tb(F,st),We=new ob,ye=new hb(pt),W=new xE(F,z,Ue,Ie,E,h),Be=new vb(F,Ie,Lt),at=new Ab(J,Xt,Lt,Ue),_e=new SE(J,pt,Xt),Ve=new FE(J,pt,Xt),Xt.programs=be.programs,F.capabilities=Lt,F.extensions=pt,F.properties=st,F.renderLists=We,F.shadowMap=Be,F.state=Ue,F.info=Xt}A!==li&&(O=new zE(A,t.width,t.height,d,o,a));const De=new wb(F,J);this.xr=De,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(D){D!==void 0&&(re=D,this.setSize(ve,me,!1))},this.getSize=function(D){return D.set(ve,me)},this.setSize=function(D,Q,he=!0){if(De.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=D,me=Q,t.width=Math.floor(D*re),t.height=Math.floor(Q*re),he===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(ve*re,me*re).floor()},this.setDrawingBufferSize=function(D,Q,he){ve=D,me=Q,re=he,t.width=Math.floor(D*he),t.height=Math.floor(Q*he),this.setViewport(0,0,D,Q)},this.setEffects=function(D){if(A===li){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Q=0;Q<D.length;Q++)if(D[Q].isOutputPass===!0){_t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(we)},this.setViewport=function(D,Q,he,ce){D.isVector4?we.set(D.x,D.y,D.z,D.w):we.set(D,Q,he,ce),Ue.viewport(U.copy(we).multiplyScalar(wt()).round())},this.getScissor=function(D){return D.copy(Te)},this.setScissor=function(D,Q,he,ce){D.isVector4?Te.set(D.x,D.y,D.z,D.w):Te.set(D,Q,he,ce),Ue.scissor(ne.copy(Te).multiplyScalar(wt()).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(D){Ue.setScissorTest(Pe=D)},this.setOpaqueSort=function(D){q=D},this.setTransparentSort=function(D){Re=D},this.getClearColor=function(D){return D.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,he=!0){let ce=0;if(D){let le=!1;if($!==null){const $e=$.texture.format;le=y.has($e)}if(le){const $e=$.texture.type,Qe=S.has($e),Xe=W.getClearColor(),qe=W.getClearAlpha(),tt=Xe.r,vt=Xe.g,Tt=Xe.b;Qe?(T[0]=tt,T[1]=vt,T[2]=Tt,T[3]=qe,J.clearBufferuiv(J.COLOR,0,T)):(b[0]=tt,b[1]=vt,b[2]=Tt,b[3]=qe,J.clearBufferiv(J.COLOR,0,b))}else ce|=J.COLOR_BUFFER_BIT}Q&&(ce|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&J.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),V=D},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),W.dispose(),We.dispose(),ye.dispose(),dt.dispose(),st.dispose(),z.dispose(),Ie.dispose(),ue.dispose(),Ge.dispose(),at.dispose(),be.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ta),De.removeEventListener("sessionend",Li),Di.stop()};function ht(D){D.preventDefault(),t0("WebGLRenderer: Context Lost."),I=!0}function yt(){t0("WebGLRenderer: Context Restored."),I=!1;const D=Xt.autoReset,Q=Be.enabled,he=Be.autoUpdate,ce=Be.needsUpdate,le=Be.type;bt(),Xt.autoReset=D,Be.enabled=Q,Be.autoUpdate=he,Be.needsUpdate=ce,Be.type=le}function je(D){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ft(D){const Q=D.target;Q.removeEventListener("dispose",Ft),sn(Q)}function sn(D){ti(D),st.remove(D)}function ti(D){const Q=st.get(D).programs;Q!==void 0&&(Q.forEach(function(he){be.releaseProgram(he)}),D.isShaderMaterial&&be.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,he,ce,le,$e){Q===null&&(Q=ut);const Qe=le.isMesh&&le.matrixWorld.determinantAffine()<0,Xe=Mo(D,Q,he,ce,le);Ue.setMaterial(ce,Qe);let qe=he.index,tt=1;if(ce.wireframe===!0){if(qe=ue.getWireframeAttribute(he),qe===void 0)return;tt=2}const vt=he.drawRange,Tt=he.attributes.position;let nt=vt.start*tt,Pt=(vt.start+vt.count)*tt;$e!==null&&(nt=Math.max(nt,$e.start*tt),Pt=Math.min(Pt,($e.start+$e.count)*tt)),qe!==null?(nt=Math.max(nt,0),Pt=Math.min(Pt,qe.count)):Tt!=null&&(nt=Math.max(nt,0),Pt=Math.min(Pt,Tt.count));const nn=Pt-nt;if(nn<0||nn===1/0)return;Ge.setup(le,ce,Xe,he,qe);let $t,Ht=_e;if(qe!==null&&($t=L.get(qe),Ht=Ve,Ht.setIndex($t)),le.isMesh)ce.wireframe===!0?(Ue.setLineWidth(ce.wireframeLinewidth*wt()),Ht.setMode(J.LINES)):Ht.setMode(J.TRIANGLES);else if(le.isLine){let un=ce.linewidth;un===void 0&&(un=1),Ue.setLineWidth(un*wt()),le.isLineSegments?Ht.setMode(J.LINES):le.isLineLoop?Ht.setMode(J.LINE_LOOP):Ht.setMode(J.LINE_STRIP)}else le.isPoints?Ht.setMode(J.POINTS):le.isSprite&&Ht.setMode(J.TRIANGLES);if(le.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const un=le._multiDrawStarts,it=le._multiDrawCounts,_n=le._multiDrawCount,lt=qe?L.get(qe).bytesPerElement:1,Ii=st.get(ce).currentProgram.getUniforms();for(let xn=0;xn<_n;xn++)Ii.setValue(J,"_gl_DrawID",xn),Ht.render(un[xn]/lt,it[xn])}else if(le.isInstancedMesh)Ht.renderInstances(nt,nn,le.count);else if(he.isInstancedBufferGeometry){const un=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,it=Math.min(he.instanceCount,un);Ht.renderInstances(nt,nn,it)}else Ht.render(nt,nn)};function ys(D,Q,he,ce){V!==null&&D.isNodeMaterial&&V.setObject(ce,D),Me===!0&&Se.setState(D,he,!1),D.transparent===!0&&D.side===fr&&D.forceSinglePass===!1?(D.side=ei,D.needsUpdate=!0,Kr(D,Q,ce),D.side=ms,D.needsUpdate=!0,Kr(D,Q,ce),D.side=fr):Kr(D,Q,ce)}this.compile=function(D,Q,he=null){he===null&&(he=D),V!==null&&V.renderStart(D,Q,he),C=ye.get(he),C.init(Q),R.push(C),he.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(C.pushLight(le),le.castShadow&&C.pushShadow(le))}),D!==he&&D.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(C.pushLight(le),le.castShadow&&C.pushShadow(le))}),C.setupLights(),V!==null&&V.updateLights(C.state.lightsArray),Ce=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,Ce),Me===!0&&Se.setGlobalState(this.clippingPlanes,Q),V!==null&&Be.render(C.state.shadowsArray,he,Q);const ce=new Set;return D.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const $e=le.material;if($e)if(Array.isArray($e))for(let Qe=0;Qe<$e.length;Qe++){const Xe=$e[Qe];ys(Xe,he,Q,le),ce.add(Xe)}else ys($e,he,Q,le),ce.add($e)}),C=R.pop(),V!==null&&V.renderEnd(),ce},this.compileAsync=function(D,Q,he=null){const ce=this.compile(D,Q,he);return new Promise(le=>{function $e(){if(ce.forEach(function(Qe){const qe=st.get(Qe).currentProgram;(qe===void 0||qe.isReady())&&ce.delete(Qe)}),ce.size===0){le(D);return}setTimeout($e,10)}pt.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let _o=null;function kc(D){_o&&_o(D)}function Ta(){Di.stop()}function Li(){Di.start()}const Di=new ov;Di.setAnimationLoop(kc),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(D){_o=D,De.setAnimationLoop(D),D===null?Di.stop():Di.start()},De.addEventListener("sessionstart",Ta),De.addEventListener("sessionend",Li),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;V!==null&&V.renderStart(D,Q);const he=De.enabled===!0&&De.isPresenting===!0,ce=O!==null&&($===null||he)&&O.begin(F,$);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),D.isScene===!0&&D.onBeforeRender(F,D,Q,$),C=ye.get(D,R.length),C.init(Q),C.state.textureUnits=dt.getTextureUnits(),R.push(C),Ae.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Q.isArrayCamera?xe.setFromArrayCamera(Q):ae.setFromProjectionMatrix(Ae,Ni,Q.reversedDepth),Ce=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,Ce),P=We.get(D,M.length),P.init(),M.push(P),this.info.render.frame++,De.enabled===!0&&De.isPresenting===!0){const Qe=F.xr.getDepthSensingMesh();Qe!==null&&Ss(Qe,Q,-1/0,F.sortObjects)}Ss(D,Q,0,F.sortObjects),P.finish(),V!==null&&V.updateLights(C.state.lightsArray),F.sortObjects===!0&&P.sort(q,Re),xt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,xt&&W.addToRenderList(P,D),this.info.autoReset===!0&&this.info.reset(),Me===!0&&Se.beginShadows();const le=C.state.shadowsArray;if(Be.render(le,D,Q),Me===!0&&Se.endShadows(),(ce&&O.hasRenderPass())===!1){const Qe=P.opaque,Xe=P.transmissive;if(C.setupLights(),Q.isArrayCamera){const qe=Q.cameras;if(Xe.length>0)for(let tt=0,vt=qe.length;tt<vt;tt++){const Tt=qe[tt];xo(Qe,Xe,D,Tt)}xt&&W.render(D);for(let tt=0,vt=qe.length;tt<vt;tt++){const Tt=qe[tt];Aa(P,D,Tt,Tt.viewport)}}else Xe.length>0&&xo(Qe,Xe,D,Q),xt&&W.render(D),Aa(P,D,Q)}$!==null&&X===0&&(dt.updateMultisampleRenderTarget($),dt.updateRenderTargetMipmap($)),ce&&O.end(F),D.isScene===!0&&D.onAfterRender(F,D,Q),Ge.resetDefaultState(),Z=-1,j=null,R.pop(),R.length>0?(C=R[R.length-1],dt.setTextureUnits(C.state.textureUnits),Me===!0&&Se.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,M.pop(),M.length>0?P=M[M.length-1]:P=null,V!==null&&V.renderEnd()};function Ss(D,Q,he,ce){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)he=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){const Qe=Q.isArrayCamera?xe:ae;if(!D.frustumCulled||D.intersectsFrustum(Qe)){ce&&Ye.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ae);const Xe=Ie.update(D),qe=D.material;qe.visible&&P.push(D,Xe,qe,he,Ye.z,null,Q)}}else if(D.isMesh||D.isLine||D.isPoints){const Qe=Q.isArrayCamera?xe:ae;if(!D.frustumCulled||D.intersectsFrustum(Qe)){const Xe=Ie.update(D),qe=D.material;if(ce&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ye.copy(D.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ye.copy(Xe.boundingSphere.center)),Ye.applyMatrix4(D.matrixWorld).applyMatrix4(Ae)),Array.isArray(qe)){const tt=Xe.groups;for(let vt=0,Tt=tt.length;vt<Tt;vt++){const nt=tt[vt],Pt=qe[nt.materialIndex];Pt&&Pt.visible&&P.push(D,Xe,Pt,he,Ye.z,nt,Q)}}else qe.visible&&P.push(D,Xe,qe,he,Ye.z,null,Q)}}}const $e=D.children;for(let Qe=0,Xe=$e.length;Qe<Xe;Qe++)Ss($e[Qe],Q,he,ce)}function Aa(D,Q,he,ce){const{opaque:le,transmissive:$e,transparent:Qe}=D;C.setupLightsView(he),Me===!0&&Se.setGlobalState(F.clippingPlanes,he),ce&&Ue.viewport(U.copy(ce)),le.length>0&&jr(le,Q,he),$e.length>0&&jr($e,Q,he),Qe.length>0&&jr(Qe,Q,he),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function xo(D,Q,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ce.id]===void 0){const nt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ce.id]=new Xi(1,1,{generateMipmaps:!0,type:nt?qi:li,minFilter:Gr,samples:Math.max(4,Lt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const $e=C.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||U;$e.setSize(Qe.z*F.transmissionResolutionScale,Qe.w*F.transmissionResolutionScale);const Xe=F.getRenderTarget(),qe=F.getActiveCubeFace(),tt=F.getActiveMipmapLevel();F.setRenderTarget($e),F.getClearColor(Y),pe=F.getClearAlpha(),pe<1&&F.setClearColor(16777215,.5),F.clear(),xt&&W.render(he);const vt=F.toneMapping;F.toneMapping=mr;const Tt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),C.setupLightsView(ce),Me===!0&&Se.setGlobalState(F.clippingPlanes,ce),jr(D,he,ce),dt.updateMultisampleRenderTarget($e),dt.updateRenderTargetMipmap($e),pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Pt=0,nn=Q.length;Pt<nn;Pt++){const $t=Q[Pt],{object:Ht,geometry:un,material:it,group:_n}=$t;if(it.side===fr&&Ht.layers.test(ce.layers)){const lt=it.side;it.side=ei,it.needsUpdate=!0,yo(Ht,he,ce,un,it,_n),it.side=lt,it.needsUpdate=!0,nt=!0}}nt===!0&&(dt.updateMultisampleRenderTarget($e),dt.updateRenderTargetMipmap($e))}F.setRenderTarget(Xe,qe,tt),F.setClearColor(Y,pe),Tt!==void 0&&(ce.viewport=Tt),F.toneMapping=vt}function jr(D,Q,he){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let le=0,$e=D.length;le<$e;le++){const Qe=D[le],{object:Xe,geometry:qe,group:tt}=Qe;let vt=Qe.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),Xe.layers.test(he.layers)&&yo(Xe,Q,he,qe,vt,tt)}}function yo(D,Q,he,ce,le,$e){V!==null&&le.isNodeMaterial&&V.setObject(D,le),D.onBeforeRender(F,Q,he,ce,le,$e),D.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),le.onBeforeRender(F,Q,he,ce,D,$e),le.transparent===!0&&le.side===fr&&le.forceSinglePass===!1?(le.side=ei,le.needsUpdate=!0,F.renderBufferDirect(he,Q,ce,le,D,$e),le.side=ms,le.needsUpdate=!0,F.renderBufferDirect(he,Q,ce,le,D,$e),le.side=fr):F.renderBufferDirect(he,Q,ce,le,D,$e),D.onAfterRender(F,Q,he,ce,le,$e)}function So(D){let Q=0;for(const he of D)he.texture!==null&&Q++;return Q}function Kr(D,Q,he){Q.isScene!==!0&&(Q=ut);const ce=st.get(D),le=C.state.lights,$e=C.state.shadowsArray,Qe=le.state.version,Xe=be.getParameters(D,le.state,$e,Q,he,C.state.lightProbeGridArray),qe=be.getProgramCacheKey(Xe);let tt=ce.programs;ce.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Q.environment:null,ce.fog=Q.fog;const vt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ce.envMap=z.get(D.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",Ft),tt=new Map,ce.programs=tt,ce.programVariants=new Map);let Tt=tt.get(qe);if(Tt!==void 0){if(ce.currentProgram===Tt&&ce.lightsStateVersion===Qe)return Ra(D,Xe),Tt}else Xe.uniforms=be.getUniforms(D),V!==null&&D.isNodeMaterial&&V.build(D,he,Xe),D.onBeforeCompile(Xe,F),Tt=be.acquireProgram(Xe,qe),tt.set(qe,Tt),ce.uniforms=Xe.uniforms;const nt=ce.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(nt.clippingPlanes=Se.uniform),Ra(D,Xe),ce.needsLights=Ms(D),ce.lightsStateVersion=Qe,ce.needsLights&&(nt.ambientLightColor.value=le.state.ambient,nt.lightProbe.value=le.state.probe,nt.sunLights.value=le.state.sun,nt.sunLightShadows.value=le.state.sunShadow,nt.directionalLights.value=le.state.directional,nt.directionalLightShadows.value=le.state.directionalShadow,nt.spotLights.value=le.state.spot,nt.spotLightShadows.value=le.state.spotShadow,nt.rectAreaLights.value=le.state.rectArea,nt.ltc_1.value=le.state.rectAreaLTC1,nt.ltc_2.value=le.state.rectAreaLTC2,nt.pointLights.value=le.state.point,nt.pointLightShadows.value=le.state.pointShadow,nt.hemisphereLights.value=le.state.hemi,nt.sunShadowMatrix.value=le.state.sunShadowMatrix,nt.sunShadowCascade.value=le.state.sunShadowCascade,nt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,nt.spotLightMatrix.value=le.state.spotLightMatrix,nt.spotLightMap.value=le.state.spotLightMap,nt.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.numLightProbeGrids=So(C.state.lightProbeGridArray),ce.currentProgram=Tt,ce.uniformsList=null,Tt}function Bc(D,Q,he,ce,le){const $e=st.get(D),Qe=$e.currentProgram.id+","+ce+","+le;let Xe=$e.programVariants.get(Qe);return Xe===void 0?(Xe=Kr(D,Q,he),$e.programVariants.set(Qe,Xe)):($e.currentProgram=Xe,$e.uniformsList=null,$e.outputColorSpace=ce,$e.toneMapping=le),Xe}function tn(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=_c.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Ra(D,Q){const he=st.get(D);he.outputColorSpace=Q.outputColorSpace,he.batching=Q.batching,he.batchingColor=Q.batchingColor,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.instancingMorph=Q.instancingMorph,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Mo(D,Q,he,ce,le){Q.isScene!==!0&&(Q=ut),dt.resetTextureUnits();const $e=Q.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Q.environment:null,Xe=$===null?F.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ut.workingColorSpace,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,tt=z.get(ce.envMap||Qe,qe),vt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Tt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),nt=!!he.morphAttributes.position,Pt=!!he.morphAttributes.normal,nn=!!he.morphAttributes.color;let $t=mr;ce.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=F.toneMapping);const Ht=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,un=Ht!==void 0?Ht.length:0,it=st.get(ce),_n=C.state.lights;if(Me===!0&&(Ce===!0||D!==j)){const kt=D===j&&ce.id===Z;Se.setState(ce,D,kt)}let lt=!1,Ii=!1;ce.version===it.__version?it.needsLights&&it.lightsStateVersion!==_n.state.version||le.isBatchedMesh&&it.batching===!1||!le.isBatchedMesh&&it.batching===!0||le.isBatchedMesh&&it.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&it.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&it.instancing===!1||!le.isInstancedMesh&&it.instancing===!0||le.isSkinnedMesh&&it.skinning===!1||!le.isSkinnedMesh&&it.skinning===!0||le.isInstancedMesh&&it.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&it.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&it.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&it.instancingMorph===!1&&le.morphTexture!==null||it.envMap!==tt||ce.fog===!0&&it.fog!==$e||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Se.numPlanes||it.numIntersection!==Se.numIntersection)||it.vertexAlphas!==vt||it.vertexTangents!==Tt||it.morphTargets!==nt||it.morphNormals!==Pt||it.morphColors!==nn||it.morphTargetsCount!==un||it.numLightProbeGrids!==So(C.state.lightProbeGridArray)?lt=!0:(it.outputColorSpace!==Xe||it.toneMapping!==$t)&&(Ii=!0):(lt=!0,it.__version=ce.version);let xn=it.currentProgram;(lt===!0||Ii===!0)&&(xn=Ii===!0?Bc(ce,Q,le,Xe,$t):Kr(ce,Q,le),V&&ce.isNodeMaterial&&V.onUpdateProgram(ce,xn,it));let vr=!1,yi=!1,Fi=!1;const Dt=xn.getUniforms(),fn=it.uniforms;if(Ue.useProgram(xn.program)&&(vr=!0,yi=!0,Fi=!0),ce.id!==Z&&(Z=ce.id,yi=!0),vr||j!==D){Ue.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Dt.setValue(J,"projectionMatrix",D.projectionMatrix),Dt.setValue(J,"viewMatrix",D.matrixWorldInverse);const qt=Dt.map.cameraPosition;qt!==void 0&&qt.setValue(J,Je.setFromMatrixPosition(D.matrixWorld)),Lt.logarithmicDepthBuffer&&Dt.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Dt.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),j!==D&&(j=D,yi=!0,Fi=!0)}if(it.needsLights&&(_n.state.sunShadowMap.length>0&&Dt.setValue(J,"sunShadowMap",_n.state.sunShadowMap,dt),_n.state.directionalShadowMap.length>0&&Dt.setValue(J,"directionalShadowMap",_n.state.directionalShadowMap,dt),_n.state.spotShadowMap.length>0&&Dt.setValue(J,"spotShadowMap",_n.state.spotShadowMap,dt),_n.state.pointShadowMap.length>0&&Dt.setValue(J,"pointShadowMap",_n.state.pointShadowMap,dt)),le.isSkinnedMesh){Dt.setOptional(J,le,"bindMatrix"),Dt.setOptional(J,le,"bindMatrixInverse");const kt=le.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Dt.setValue(J,"boneTexture",kt.boneTexture,dt))}le.isBatchedMesh&&(Dt.setOptional(J,le,"batchingTexture"),Dt.setValue(J,"batchingTexture",le._matricesTexture,dt),Dt.setOptional(J,le,"batchingIdTexture"),Dt.setValue(J,"batchingIdTexture",le._indirectTexture,dt),Dt.setOptional(J,le,"batchingColorTexture"),le._colorsTexture!==null&&Dt.setValue(J,"batchingColorTexture",le._colorsTexture,dt));const Dn=he.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ee.update(le,he,xn),(yi||it.receiveShadow!==le.receiveShadow)&&(it.receiveShadow=le.receiveShadow,Dt.setValue(J,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Q.environment!==null&&(fn.envMapIntensity.value=Q.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=Cb()),yi){if(Dt.setValue(J,"toneMappingExposure",F.toneMappingExposure),it.needsLights&&Ca(fn,Fi),$e&&ce.fog===!0&&He.refreshFogUniforms(fn,$e),He.refreshMaterialUniforms(fn,ce,re,me,C.state.transmissionRenderTarget[D.id]),it.needsLights&&it.numLightProbeGrids>0){const kt=w;let qt=0;for(const bn of C.state.lightProbeGridArray)bn.texture!==null&&(kt.textures[qt]=bn.texture,kt.min[qt]=bn.boundingBox.min,kt.max[qt]=bn.boundingBox.max,kt.resolution[qt]=bn.resolution,qt++);for(const bn in kt)kt[bn].length=qt;fn.probesSH.value=kt.textures,fn.probesMin.value=kt.min,fn.probesMax.value=kt.max,fn.probesResolution.value=kt.resolution}_c.upload(J,tn(it),fn,dt)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(_c.upload(J,tn(it),fn,dt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Dt.setValue(J,"center",le.center),Dt.setValue(J,"modelViewMatrix",le.modelViewMatrix),Dt.setValue(J,"normalMatrix",le.normalMatrix),Dt.setValue(J,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const kt=ce.uniformsGroups;for(let qt=0,bn=kt.length;qt<bn;qt++){const _r=kt[qt];at.update(_r,xn),at.bind(_r,xn)}}return xn}function Ca(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.sunLights.needsUpdate=Q,D.sunLightShadows.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Ms(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(D,Q,he){const ce=st.get(D);ce.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),st.get(D.texture).__webglTexture=Q,st.get(D.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const he=st.get(D);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,he=0){$=D,oe=Q,X=he;let ce=null,le=!1,$e=!1;if(D){const Xe=st.get(D);if(Xe.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(J.FRAMEBUFFER,Xe.__webglFramebuffer),U.copy(D.viewport),ne.copy(D.scissor),ie=D.scissorTest,Ue.viewport(U),Ue.scissor(ne),Ue.setScissorTest(ie),Z=-1;return}else if(Xe.__webglFramebuffer===void 0)dt.setupRenderTarget(D);else if(Xe.__hasExternalTextures)dt.rebindTextures(D,st.get(D.texture).__webglTexture,st.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const vt=D.depthTexture;if(Xe.__boundDepthTexture!==vt){if(vt!==null&&st.has(vt)&&(D.width!==vt.image.width||D.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(D)}}const qe=D.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&($e=!0);const tt=st.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[Q])?ce=tt[Q][he]:ce=tt[Q],le=!0):D.samples>0&&dt.useMultisampledRTT(D)===!1?ce=st.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?ce=tt[he]:ce=tt,U.copy(D.viewport),ne.copy(D.scissor),ie=D.scissorTest}else U.copy(we).multiplyScalar(re).floor(),ne.copy(Te).multiplyScalar(re).floor(),ie=Pe;if(he!==0&&(ce=K),Ue.bindFramebuffer(J.FRAMEBUFFER,ce)&&Ue.drawBuffers(D,ce),Ue.viewport(U),Ue.scissor(ne),Ue.setScissorTest(ie),le){const Xe=st.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xe.__webglTexture,he)}else if($e){const Xe=Q;for(let qe=0;qe<D.textures.length;qe++){const tt=st.get(D.textures[qe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+qe,tt.__webglTexture,he,Xe)}}else if(D!==null&&he!==0){const Xe=st.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Xe.__webglTexture,he)}Z=-1};function Pa(D){const Q=st.get(D);return(Q.__readFormat!==D.format||Q.__readType!==D.type)&&(Q.__readFormat=D.format,Q.__readType=D.type,Q.__formatReadable=Lt.textureFormatReadable(D.format),Q.__typeReadable=Lt.textureTypeReadable(D.type)),Q}this.readRenderTargetPixels=function(D,Q,he,ce,le,$e,Qe,Xe=0){if(!(D&&D.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe],Array.isArray(qe)&&(qe=qe[0])),qe){Ue.bindFramebuffer(J.FRAMEBUFFER,qe);try{const tt=D.textures[Xe],vt=tt.format,Tt=tt.type;D.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Xe);const nt=Pa(tt);if(nt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ce&&he>=0&&he<=D.height-le&&J.readPixels(Q,he,ce,le,Oe.convert(vt),Oe.convert(Tt),$e)}finally{const tt=$!==null?st.get($).__webglFramebuffer:null;Ue.bindFramebuffer(J.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(D,Q,he,ce,le,$e,Qe,Xe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe],Array.isArray(qe)&&(qe=qe[0])),qe)if(Q>=0&&Q<=D.width-ce&&he>=0&&he<=D.height-le){Ue.bindFramebuffer(J.FRAMEBUFFER,qe);const tt=D.textures[Xe],vt=tt.format,Tt=tt.type;D.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Xe);const nt=Pa(tt);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Pt),J.bufferData(J.PIXEL_PACK_BUFFER,$e.byteLength,J.STREAM_READ),J.readPixels(Q,he,ce,le,Oe.convert(vt),Oe.convert(Tt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const nn=$!==null?st.get($).__webglFramebuffer:null;Ue.bindFramebuffer(J.FRAMEBUFFER,nn);const $t=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await py(J,$t,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Pt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,$e),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Pt),J.deleteSync($t),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,he=0){const ce=Math.pow(2,-he),le=Math.floor(D.image.width*ce),$e=Math.floor(D.image.height*ce),Qe=Q!==null?Q.x:0,Xe=Q!==null?Q.y:0;dt.setTexture2D(D,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,Qe,Xe,le,$e),Ue.unbindTexture()},this.copyTextureToTexture=function(D,Q,he=null,ce=null,le=0,$e=0){let Qe,Xe,qe,tt,vt,Tt,nt,Pt,nn;const $t=D.isCompressedTexture?D.mipmaps[$e]:D.image;if(he!==null)Qe=he.max.x-he.min.x,Xe=he.max.y-he.min.y,qe=he.isBox3?he.max.z-he.min.z:1,tt=he.min.x,vt=he.min.y,Tt=he.isBox3?he.min.z:0;else{const Dt=Math.pow(2,-le);Qe=Math.floor($t.width*Dt),Xe=Math.floor($t.height*Dt),D.isDataArrayTexture?qe=$t.depth:D.isData3DTexture?qe=Math.floor($t.depth*Dt):qe=1,tt=0,vt=0,Tt=0}ce!==null?(nt=ce.x,Pt=ce.y,nn=ce.z):(nt=0,Pt=0,nn=0);const Ht=Oe.convert(Q.format),un=Oe.convert(Q.type);let it;Q.isData3DTexture?(dt.setTexture3D(Q,0),it=J.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(dt.setTexture2DArray(Q,0),it=J.TEXTURE_2D_ARRAY):(dt.setTexture2D(Q,0),it=J.TEXTURE_2D),Ue.activeTexture(J.TEXTURE0),Ue.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Q.flipY),Ue.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Ue.pixelStorei(J.UNPACK_ALIGNMENT,Q.unpackAlignment);const _n=Ue.getParameter(J.UNPACK_ROW_LENGTH),lt=Ue.getParameter(J.UNPACK_IMAGE_HEIGHT),Ii=Ue.getParameter(J.UNPACK_SKIP_PIXELS),xn=Ue.getParameter(J.UNPACK_SKIP_ROWS),vr=Ue.getParameter(J.UNPACK_SKIP_IMAGES);Ue.pixelStorei(J.UNPACK_ROW_LENGTH,$t.width),Ue.pixelStorei(J.UNPACK_IMAGE_HEIGHT,$t.height),Ue.pixelStorei(J.UNPACK_SKIP_PIXELS,tt),Ue.pixelStorei(J.UNPACK_SKIP_ROWS,vt),Ue.pixelStorei(J.UNPACK_SKIP_IMAGES,Tt);const yi=D.isDataArrayTexture||D.isData3DTexture,Fi=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const Dt=st.get(D),fn=st.get(Q),Dn=st.get(Dt.__renderTarget),kt=st.get(fn.__renderTarget);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let qt=0;qt<qe;qt++)yi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,st.get(D).__webglTexture,le,Tt+qt),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,st.get(Q).__webglTexture,$e,nn+qt)),J.blitFramebuffer(tt,vt,tt+Qe,vt+Xe,nt,Pt,nt+Qe,Pt+Xe,J.DEPTH_BUFFER_BIT,J.NEAREST);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(le!==0||D.isRenderTargetTexture||st.has(D)){const Dt=st.get(D),fn=st.get(Q);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,B),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,ee);for(let Dn=0;Dn<qe;Dn++)yi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Dt.__webglTexture,le,Tt+Dn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Dt.__webglTexture,le),Fi?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,fn.__webglTexture,$e,nn+Dn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,fn.__webglTexture,$e),le!==0?J.blitFramebuffer(tt,vt,tt+Qe,vt+Xe,nt,Pt,nt+Qe,Pt+Xe,J.COLOR_BUFFER_BIT,J.NEAREST):Fi?J.copyTexSubImage3D(it,$e,nt,Pt,nn+Dn,tt,vt,Qe,Xe):J.copyTexSubImage2D(it,$e,nt,Pt,tt,vt,Qe,Xe);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Fi?D.isDataTexture||D.isData3DTexture?J.texSubImage3D(it,$e,nt,Pt,nn,Qe,Xe,qe,Ht,un,$t.data):Q.isCompressedArrayTexture?J.compressedTexSubImage3D(it,$e,nt,Pt,nn,Qe,Xe,qe,Ht,$t.data):J.texSubImage3D(it,$e,nt,Pt,nn,Qe,Xe,qe,Ht,un,$t):D.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,$e,nt,Pt,Qe,Xe,Ht,un,$t.data):D.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,$e,nt,Pt,$t.width,$t.height,Ht,$t.data):J.texSubImage2D(J.TEXTURE_2D,$e,nt,Pt,Qe,Xe,Ht,un,$t);Ue.pixelStorei(J.UNPACK_ROW_LENGTH,_n),Ue.pixelStorei(J.UNPACK_IMAGE_HEIGHT,lt),Ue.pixelStorei(J.UNPACK_SKIP_PIXELS,Ii),Ue.pixelStorei(J.UNPACK_SKIP_ROWS,xn),Ue.pixelStorei(J.UNPACK_SKIP_IMAGES,vr),$e===0&&Q.generateMipmaps===!0&&Q.mipmapsAutoUpdate===!0&&J.generateMipmap(it),Ue.unbindTexture()},this.initRenderTarget=function(D){st.get(D).__webglFramebuffer===void 0&&dt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?dt.setTextureCube(D,0):D.isData3DTexture?dt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?dt.setTexture2DArray(D,0):dt.setTexture2D(D,0),Ue.unbindTexture()},this.resetState=function(){oe=0,X=0,$=null,Ue.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function Pb(){const i=Mt.useRef(null);return Mt.useEffect(()=>{const e=i.current;if(!e)return;const t=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight,o=new nf;o.background=new At(0),o.fog=new Lc(0,.045);const a=new Wn(40,t/r,.1,100);a.position.set(0,1.8,10.5);const c=new mf({antialias:!0,powerPreference:"high-performance"});c.setSize(t,r),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=Nc,c.toneMappingExposure=1.25,e.appendChild(c.domElement);const d=new ff(16777215,.25);o.add(d);const h=new PS(16777215,65,30,Math.PI/4,.5,1.5);h.position.set(5,8,6),o.add(h);const f=new Ma(9684477,1.6);f.position.set(-7,4,-5),o.add(f);const m=new iv(16777215,18,22);m.position.set(0,3,-6),o.add(m);const x=new ft(new go(50,50),new It({color:197381,metalness:.85,roughness:.22}));x.rotation.x=-Math.PI/2,x.position.y=-2.2,o.add(x);const v=new ci;v.position.set(0,.4,0),o.add(v);const g=new It({color:16317180,metalness:.96,roughness:.08}),E=new It({color:1579035,metalness:.85,roughness:.28}),A=new It({color:10592682,metalness:.8,roughness:.2}),y=new ft(new ui(.05,.05,5.2,16),E);y.rotation.z=Math.PI/2,y.position.y=2.6,v.add(y);const S=.42,T=2.8,b=2.6,w=[];for(let $=0;$<5;$++){const Z=($-2)*(S*2.02),j=new ci;j.position.set(Z,b,0);const U=new ft(new ui(.012,.012,T,8),A);U.position.y=-T/2,j.add(U);const ne=new ft(new ps(S,40,40),g);ne.position.y=-T,j.add(ne),v.add(j),w.push(j)}const P=new It({color:5395035,metalness:.9,roughness:.18}),C=new ft(new $i(4.4,.018,12,120),P);C.rotation.x=Math.PI/2.6,o.add(C);const M=new ft(new $i(3.6,.014,12,120),P);M.rotation.y=Math.PI/3,o.add(M);const R=280,O=new Float32Array(R*3);for(let $=0;$<R;$++)O[$*3]=(Math.random()-.5)*26,O[$*3+1]=(Math.random()-.5)*14+1,O[$*3+2]=(Math.random()-.5)*18-2;const F=new hn;F.setAttribute("position",new Wr(O,3));const I=new Wy(F,new Hg({color:16777215,size:.035,transparent:!0,opacity:.45}));o.add(I);let V=0;const K=new sv,B={x:0,y:0},ee=$=>{B.x=($.clientX/window.innerWidth-.5)*2,B.y=($.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",ee);const oe=()=>{V=requestAnimationFrame(oe);const $=K.getElapsedTime(),Z=2.65,j=.52,U=Math.sin($*Z);w[0].rotation.z=U<0?U*j:0,w[1].rotation.z=U<0?U*.03:0,w[2].rotation.z=U*.012,w[3].rotation.z=U>0?U*.03:0,w[4].rotation.z=U>0?U*j:0,C.rotation.z=$*.08,M.rotation.x=$*.11,I.rotation.y=$*.015;const ne=Math.sin($*.18)*1.4+B.x*1.1,ie=1.6+Math.cos($*.14)*.35-B.y*.55;a.position.x+=(ne-a.position.x)*.04,a.position.y+=(ie-a.position.y)*.04,a.lookAt(0,.2,0),c.render(o,a)};oe();const X=()=>{if(!e)return;const $=e.clientWidth||window.innerWidth,Z=e.clientHeight||window.innerHeight;a.aspect=$/Z,a.updateProjectionMatrix(),c.setSize($,Z)};return window.addEventListener("resize",X),()=>{cancelAnimationFrame(V),window.removeEventListener("mousemove",ee),window.removeEventListener("resize",X),c.dispose(),c.domElement.parentNode===e&&e.removeChild(c.domElement)}},[]),k.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none"})}function Nb({variant:i}){const e=Mt.useRef(null);return Mt.useEffect(()=>{const t=e.current;if(!t)return;const r=t.clientWidth||320,o=t.clientHeight||180,a=new nf,c=new Wn(40,r/o,.1,50);c.position.set(0,.9,4.2),c.lookAt(0,0,0);const d=new mf({antialias:!0,alpha:!0});d.setSize(r,o),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(d.domElement),a.add(new ff(16777215,.55));const h=new Ma(16777215,1.8);h.position.set(3,5,4),a.add(h);const f=new Ma(9684477,.9);f.position.set(-4,-2,-3),a.add(f);const m=new ci;a.add(m);const x=new It({color:16317180,metalness:.9,roughness:.15}),v=new It({color:2565930,metalness:.75,roughness:.3});if(i==="dynamics"){const y=new ft(new $i(.75,.14,16,48),x);m.add(y);for(let T=0;T<4;T++){const b=new ft(new Kt(.08,1.35,.1),v);b.rotation.z=T*Math.PI/4,m.add(b)}const S=new ft(new Kt(.65,.65,.65),x);S.position.set(1.15,-.55,.2),m.add(S)}else if(i==="oscillations"){const y=[];for(let w=0;w<=80;w++){const P=w/80,C=P*6*Math.PI*2;y.push(new G((P-.5)*2.2,Math.sin(C)*.35,Math.cos(C)*.35))}const S=new cf(y),T=new ft(new Ic(S,80,.06,10,!1),x);m.add(T);const b=new ft(new ps(.42,28,28),v);b.position.set(1.25,0,0),m.add(b)}else{const y=new ft(new df(.48,1),x);m.add(y);const S=new ft(new $i(.95,.025,12,64),x);S.rotation.x=Math.PI/3;const T=new ft(new $i(1.15,.025,12,64),v);T.rotation.y=Math.PI/3,m.add(S,T)}let g=0;const E=new sv,A=()=>{g=requestAnimationFrame(A);const y=E.getElapsedTime();m.rotation.y=y*.55,m.rotation.x=Math.sin(y*.7)*.18,m.position.y=Math.sin(y*1.4)*.08,d.render(a,c)};return A(),()=>{cancelAnimationFrame(g),d.dispose(),d.domElement.parentNode===t&&t.removeChild(d.domElement)}},[i]),k.jsx("div",{ref:e,className:"w-full h-44"})}function Lb({onEnterSimulator:i}){const e=[{code:"01",variant:"dynamics",category:"DINÁMICA & POLEAS",title:"SISTEMAS EN EQUILIBRIO Y MOVIMIENTO",description:"Planos inclinados con fricción estática/cinética, mesas horizontales y máquina de Atwood en modelado 3D en tiempo real.",sceneId:"incline_pulley"},{code:"02",variant:"oscillations",category:"OSCILACIONES & CINEMÁTICA",title:"LEY DE HOOKE, PÉNDULO Y PROYECTILES",description:"Resortes helicoidales dinámicos, péndulos no lineales y trayectorias parabólicas con estela tridimensional.",sceneId:"spring_block"},{code:"03",variant:"ai",category:"LABORATORIO & GRAPH RAG",title:"CONSTRUCTOR LIBRE + ASISTENTE IA",description:"Ensambla cuerpos, cuerdas y poleas personalizadas o sube una fotografía de un problema para resolverlo sin alucinaciones.",sceneId:"sandbox_game"}];return k.jsxs("div",{className:"min-h-screen bg-black text-white flex flex-col",children:[k.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/85 via-black/35 to-transparent",children:k.jsxs("div",{className:"max-w-[1680px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between",children:[k.jsxs("button",{onClick:()=>{const t=document.getElementById("landing-modules");t==null||t.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.26em] uppercase text-white/80 hover:text-white transition cursor-pointer",children:[k.jsx(wx,{className:"w-4 h-4 stroke-[1.5]"}),k.jsx("span",{children:"MENÚ"})]}),k.jsx("div",{className:"text-center",children:k.jsx("span",{className:"text-lg sm:text-xl font-bold tracking-[0.26em] text-white uppercase",children:"PHYSILAB"})}),k.jsxs("button",{onClick:()=>i("incline_pulley"),className:"inline-flex items-center gap-2 text-[10.5px] tracking-[0.24em] uppercase text-white/80 hover:text-white transition cursor-pointer",children:[k.jsx("span",{className:"hidden sm:inline",children:"SIMULADOR"}),k.jsx(hg,{className:"w-4 h-4 stroke-[1.5]"})]})]})}),k.jsxs("section",{className:"relative h-screen w-full flex items-center justify-center px-6 overflow-hidden border-b border-white/10",children:[k.jsx(Pb,{}),k.jsx("div",{className:"absolute inset-0 bg-radial from-black/25 via-black/45 to-black/85 pointer-events-none"}),k.jsxs("div",{className:"relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto",children:[k.jsx("h1",{className:"font-script text-6xl sm:text-8xl lg:text-[7.5rem] text-white leading-none tracking-normal drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)] select-none",children:"PhysiLab"}),k.jsx("p",{className:"mt-6 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-white/80 font-tech",children:"UNA HISTORIA DE FUERZA, PROPORCIÓN Y MOVIMIENTO."}),k.jsx("button",{onClick:()=>i("incline_pulley"),className:"mt-8 rounded-full border border-white/55 px-8 py-3 text-[10px] font-medium tracking-[0.26em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer",children:"DESCUBRIR EL SIMULADOR"})]})]}),k.jsxs("section",{id:"landing-modules",className:"max-w-[1600px] mx-auto w-full px-6 sm:px-12 py-20 sm:py-28",children:[k.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/15",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-[10px] tracking-[0.32em] uppercase text-white/50 font-tech",children:"ARQUITECTURA DEL LABORATORIO"}),k.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-white mt-3",children:"PRECISIÓN EN CADA VECTOR"})]}),k.jsx("p",{className:"text-xs sm:text-sm text-white/60 max-w-md leading-relaxed",children:"Cada escena integra cálculo newtoniano exacto a 60 FPS con modelos tridimensionales interactivos y telemetría en vivo."})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-12",children:e.map(t=>k.jsxs("div",{className:"bg-[#060609] border border-white/15 hover:border-white/40 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center justify-between text-[10px] font-tech tracking-[0.26em] text-white/45 mb-2",children:[k.jsxs("span",{children:["[",t.code,"]"]}),k.jsx("span",{children:t.category})]}),k.jsx(Nb,{variant:t.variant}),k.jsx("h3",{className:"text-base font-medium tracking-[0.14em] uppercase text-white leading-snug mt-2",children:t.title}),k.jsx("p",{className:"text-xs sm:text-[13px] text-white/60 mt-3 leading-relaxed",children:t.description})]}),k.jsxs("button",{onClick:()=>i(t.sceneId),className:"mt-7 inline-flex items-center gap-2 text-[10.5px] tracking-[0.22em] uppercase text-white/80 group-hover:text-white transition cursor-pointer w-fit border-b border-white/25 pb-1 group-hover:border-white",children:["ABRIR MÓDULO",k.jsx(dx,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-1"})]})]},t.code))})]}),k.jsxs("footer",{className:"mt-auto border-t border-white/15 px-6 sm:px-12 py-6 text-[10px] font-tech tracking-[0.24em] uppercase text-white/45 flex flex-wrap items-center justify-between gap-4",children:[k.jsx("span",{children:"PHYSILAB // CLASSICAL MECHANICS & 3D SIMULATION"}),k.jsx("span",{children:"POWERED BY THREE.JS & AWS BEDROCK"})]})]})}const sg={type:"change"},gf={type:"start"},vv={type:"end"},oc=new Dc,og=new hr,Db=Math.cos(70*yy.DEG2RAD),Mn=new G,Jn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jd=1e-6;class Ib extends US{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oo.ROTATE,MIDDLE:oo.DOLLY,RIGHT:oo.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new $r,this._lastTargetPosition=new G,this._quat=new $r().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new F0,this._sphericalDelta=new F0,this._scale=1,this._panOffset=new G,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new G,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ub.bind(this),this._onPointerDown=Fb.bind(this),this._onPointerUp=Ob.bind(this),this._onContextMenu=Wb.bind(this),this._onMouseWheel=zb.bind(this),this._onKeyDown=Hb.bind(this),this._onTouchStart=Gb.bind(this),this._onTouchMove=Vb.bind(this),this._onMouseDown=kb.bind(this),this._onMouseMove=Bb.bind(this),this._interceptControlDown=Xb.bind(this),this._interceptControlUp=$b.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Gt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sg),this.update(),this.state=Gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Jn:r>Math.PI&&(r-=Jn),o<-Math.PI?o+=Jn:o>Math.PI&&(o-=Jn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Mn.length();c=this._clampDistance(d*this._scale);const h=d-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const d=new G(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const f=new G(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(d),this.object.updateMatrixWorld(),c=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<Db?this.object.lookAt(this.target):(og.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(og,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jd||this._lastTargetPosition.distanceToSquared(this.target)>Jd?(this.dispatchEvent(sg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Mn.copy(o).sub(this.target);let a=Mn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*t*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,a=t-r.top,c=r.width,d=r.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(r*r+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Fb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ub(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ob(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vv),this.state=Gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Gt.DOLLY;break;case oo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}break;case oo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(gf)}function Bb(i){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function zb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(i.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vv))}function Hb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1){this.state=Gt.NONE;break}this._handleTouchStartRotate(i),this.state=Gt.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1){this.state=Gt.NONE;break}this._handleTouchStartPan(i),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Gt.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(gf)}function Vb(i){switch(this._trackPointer(i),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Gt.NONE}}function Wb(i){this.enabled!==!1&&i.preventDefault()}function Xb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $b(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oa(i,e,t,r,o){const a=new ci,c=new It({color:r,metalness:.45,roughness:.32}),d=new ft(new Kt(i,e,t),c);d.castShadow=!0,d.receiveShadow=!0,a.add(d);const h=new It({color:o,metalness:.75,roughness:.25}),f=new ft(new Kt(i+.04,.08,t+.04),h);f.position.y=e/2-.02,f.castShadow=!0,a.add(f);const m=new ft(new Kt(i+.04,.08,t+.04),h);m.position.y=-e/2+.02,m.castShadow=!0,a.add(m);const x=new It({color:14870768,metalness:.85,roughness:.2}),v=new ft(new $i(.11,.03,10,20),x);return v.position.set(0,e/2+.11,0),v.castShadow=!0,a.add(v),a}function ac(i,e,t,r){const o=new ci,a=new It({color:t,metalness:.5,roughness:.3}),c=new ft(new ui(i,i*1.04,e,28),a);c.castShadow=!0,c.receiveShadow=!0,o.add(c);const d=new It({color:r,metalness:.8,roughness:.22}),h=new ft(new ui(i*1.06,i*1.06,e*.16,28),d);h.castShadow=!0,o.add(h);const f=new It({color:14870768,metalness:.88,roughness:.18}),m=new ft(new ui(.035,.035,.16,12),f);m.position.y=e/2+.08,o.add(m);const x=new ft(new $i(.1,.028,10,20),f);return x.position.y=e/2+.22,o.add(x),o}function lc(i=.42){const e=new ci,t=new ci,r=new It({color:9741240,metalness:.85,roughness:.25}),o=new It({color:3359061,metalness:.7,roughness:.4}),a=new It({color:16096779,metalness:.7,roughness:.3}),c=new ft(new $i(i,.07,14,36),r);c.castShadow=!0,t.add(c);const d=new ft(new ui(i*.88,i*.88,.08,28),o);d.rotation.x=Math.PI/2,t.add(d);for(let f=0;f<6;f++){const m=new ft(new Kt(.055,i*1.65,.1),a);m.rotation.z=f*Math.PI/3,m.castShadow=!0,t.add(m)}const h=new ft(new ui(.11,.11,.22,16),new It({color:14870768,metalness:.9,roughness:.2}));return h.rotation.x=Math.PI/2,t.add(h),e.add(t),e.userData.wheel=t,e}function cr(i=16498468){const e=new It({color:i,metalness:.15,roughness:.7}),t=new ui(.032,.032,1,10),r=new ft(t,e);return r.castShadow=!0,r}function ur(i,e,t){const r=new G().subVectors(t,e),o=r.length();if(o<.001){i.visible=!1;return}i.visible=!0,i.position.copy(e).addScaledVector(r,.5),i.scale.set(1,o,1),i.quaternion.setFromUnitVectors(new G(0,1,0),r.normalize())}function ag(i,e,t,r=10,o=.26){const a=[],c=r*16,d=Math.max(.4,e-i);for(let f=0;f<=c;f++){const m=f/c,x=i+m*d,v=m*r*Math.PI*2,g=m<.06?m/.06:m>.94?(1-m)/.06:1,E=t+Math.sin(v)*o*g,A=Math.cos(v)*o*g;a.push(new G(x,E,A))}const h=new cf(a);return new Ic(h,c,.045,8,!1)}function Yb(i,e=3718648){if(!i)return e;try{return new At(i).getHex()}catch{return e}}function qb({sceneType:i,params:e,simRef:t,solverRef:r,showVectors:o,sandboxObjects:a,sandboxRopes:c,resetCameraTrigger:d}){const h=Mt.useRef(null),f=Mt.useRef({sceneType:i,params:e,showVectors:o,sandboxObjects:a,sandboxRopes:c});f.current={sceneType:i,params:e,showVectors:o,sandboxObjects:a,sandboxRopes:c};const m=Mt.useRef(null),x=Mt.useRef(null),v=g=>{const E=m.current,A=x.current;!E||!A||(g==="incline_pulley"?(E.position.set(1.5,4.4,9.2),A.target.set(.3,1.6,0)):g==="horizontal_table"?(E.position.set(1.8,4.2,8.8),A.target.set(.5,1.2,0)):g==="atwood"?(E.position.set(0,3.2,8.6),A.target.set(0,2.2,0)):g==="spring_block"?(E.position.set(1.2,3.3,7.6),A.target.set(.4,1,0)):g==="projectile"?(E.position.set(4.5,4.5,11.5),A.target.set(4,2,0)):g==="pendulum"?(E.position.set(0,2.8,8.2),A.target.set(0,2,0)):(E.position.set(0,4.8,10.5),A.target.set(0,1.6,0)),A.update())};return Mt.useEffect(()=>{v(i)},[i,d]),Mt.useEffect(()=>{const g=h.current;if(!g)return;const E=g.clientWidth||920,A=g.clientHeight||500,y=new nf;y.background=new At(461071),y.fog=new Lc(461071,.022);const S=new Wn(45,E/A,.1,120);m.current=S;const T=new mf({antialias:!0,powerPreference:"high-performance"});T.setSize(E,A),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=fg,T.toneMapping=Nc,T.toneMappingExposure=1.15,g.appendChild(T.domElement);const b=new Ib(S,T.domElement);b.enableDamping=!0,b.dampingFactor=.07,b.maxPolarAngle=Math.PI*.52,b.minDistance=3,b.maxDistance=26,x.current=b,v(f.current.sceneType);const w=new ff(13358561,.65);y.add(w);const P=new Ma(16776171,1.8);P.position.set(6,11,7),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=35;const C=10;P.shadow.camera.left=-C,P.shadow.camera.right=C,P.shadow.camera.top=C,P.shadow.camera.bottom=-C,P.shadow.bias=-5e-4,y.add(P);const M=new Ma(3718648,.75);M.position.set(-7,5,-6),y.add(M);const R=new iv(16096779,.45,20);R.position.set(0,4,5),y.add(R);const O=new ft(new go(60,60),new It({color:724761,roughness:.82,metalness:.15}));O.rotation.x=-Math.PI/2,O.position.y=0,O.receiveShadow=!0,y.add(O);const F=new IS(40,40,1976635,1120295);F.position.y=.005,y.add(F);const I=new ci;y.add(I);const V=new ci;y.add(V);let K="",B={};const ee=ne=>{for(;ne.children.length>0;){const ie=ne.children[0];ne.remove(ie),ie.traverse(Y=>{Y.geometry&&Y.geometry.dispose(),Y.material&&(Array.isArray(Y.material)?Y.material.forEach(pe=>pe.dispose()):Y.material.dispose())})}},oe=()=>{ee(I),B={};const{sceneType:ne,params:ie,sandboxObjects:Y,sandboxRopes:pe}=f.current;if(ne==="incline_pulley"){const me=Number(ie.angle??30)*Math.PI/180,re=Number(ie.m1??6),q=Number(ie.m2??4.5),we=Math.max(.9,4*Math.tan(me)),Te=Math.min(3.8,we),Pe=Te/Math.max(.18,Math.tan(me)),ae=Math.hypot(Pe,Te),xe=new Kg;xe.moveTo(-Pe,0),xe.lineTo(Pe,0),xe.lineTo(0,Te),xe.closePath();const Me=new uf(xe,{depth:1.8,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});Me.translate(0,0,-.9);const Ce=new It({color:1976635,metalness:.35,roughness:.55}),Ae=new ft(Me,Ce);Ae.castShadow=!0,Ae.receiveShadow=!0,I.add(Ae);const Je=new It({color:3359061,metalness:.5,roughness:.4}),Ye=new ft(new Kt(ae+.06,.08,1.86),Je);Ye.position.set(-Pe/2,Te/2,0),Ye.rotation.z=me,Ye.receiveShadow=!0,I.add(Ye);const ut=new ft(new Kt(ae+.06,.08,1.86),Je);ut.position.set(Pe/2,Te/2,0),ut.rotation.z=-me,ut.receiveShadow=!0,I.add(ut);const xt=Te,wt=new G(0,xt+.44,0),J=lc(.36);J.position.copy(wt),I.add(J);const Wt=new ft(new Kt(.18,.52,.24),new It({color:6583435,metalness:.8,roughness:.3}));Wt.position.set(0,xt+.22,0),I.add(Wt);const pt=Math.min(1.25,Math.max(.72,.62+re*.042)),Lt=oa(pt*1.25,pt*.85,pt,165063,3718648);I.add(Lt);let Ue=null,Xt=null,st=null;const dt=Math.min(1.25,Math.max(.7,.6+q*.042));q>0&&(Ue=oa(dt*1.25,dt*.85,dt,14753096,16478597),I.add(Ue),Xt=cr(16498468),st=cr(16498468),I.add(Xt,st)),B={theta:me,effBase:Pe,clampedH:Te,slopeLen:ae,pulleyPos:wt,pulley:J,block1:Lt,block2:Ue,rope1:Xt,rope2:st,s1:pt,s2:dt}}else if(ne==="horizontal_table"){const ve=Number(ie.m1??5),me=Number(ie.m2??3),re=2.6,q=6.2,Re=new ft(new Kt(q,.22,2.2),new It({color:1976635,metalness:.35,roughness:.5}));Re.position.set(-.6,re,0),Re.castShadow=!0,Re.receiveShadow=!0,I.add(Re);const we=new It({color:4674921,metalness:.75,roughness:.3});[[-3.4,re/2-.05,-.85],[-3.4,re/2-.05,.85],[2.2,re/2-.05,-.85],[2.2,re/2-.05,.85]].forEach(([wt,J,Wt])=>{const pt=new ft(new Kt(.18,re-.1,.18),we);pt.position.set(wt,J,Wt),pt.castShadow=!0,I.add(pt)});const Pe=-.6+q/2,ae=new G(Pe+.36,re+.34,0),xe=lc(.34);xe.position.copy(ae),I.add(xe);const Me=new ft(new Kt(.45,.12,.2),we);Me.position.set(Pe+.18,re+.16,0),Me.rotation.z=Math.PI/5,I.add(Me);const Ce=Math.min(1.25,Math.max(.75,.65+ve*.045)),Ae=oa(Ce*1.25,Ce*.85,Ce,165063,3718648);I.add(Ae);const Je=Math.min(.58,Math.max(.32,.26+me*.03)),Ye=ac(Je,Je*1.6,14753096,16478597);I.add(Ye);const ut=cr(16498468),xt=cr(16498468);I.add(ut,xt),B={tableY:re,pulleyPos:ae,pulley:xe,block1:Ae,block2:Ye,rope1:ut,rope2:xt,s1:Ce}}else if(ne==="atwood"){const ve=Number(ie.m1??7),me=Number(ie.m2??4),re=new It({color:3359061,metalness:.75,roughness:.3}),q=new ft(new Kt(4.2,.24,.4),re);q.position.set(0,5.2,-.35),q.castShadow=!0,I.add(q),[-1.9,1.9].forEach(Je=>{const Ye=new ft(new Kt(.24,5.2,.3),re);Ye.position.set(Je,2.6,-.35),Ye.castShadow=!0,I.add(Ye)});const Re=new G(0,4.7,0),we=lc(.55);we.position.copy(Re),I.add(we);const Te=new ft(new Kt(.22,.55,.45),re);Te.position.set(0,4.95,-.18),I.add(Te);const Pe=Math.min(.62,Math.max(.34,.28+ve*.03)),ae=Math.min(.62,Math.max(.34,.28+me*.03)),xe=ac(Pe,Pe*1.65,165063,3718648),Me=ac(ae,ae*1.65,14753096,16478597);I.add(xe,Me);const Ce=cr(16498468),Ae=cr(16498468);I.add(Ce,Ae),B={pulleyPos:Re,pulley:we,block1:xe,block2:Me,rope1:Ce,rope2:Ae,r1:Pe,r2:ae}}else if(ne==="spring_block"){const ve=Number(ie.m1??3),me=new ft(new Kt(9.2,.28,2.4),new It({color:1976635,metalness:.4,roughness:.5}));me.position.set(.4,.14,0),me.receiveShadow=!0,I.add(me);const re=new ft(new Kt(.45,2.6,2.4),new It({color:3359061,metalness:.65,roughness:.35}));re.position.set(-4,1.3,0),re.castShadow=!0,re.receiveShadow=!0,I.add(re);const q=new ft(new Kt(.05,.04,2.45),new It({color:1096065,emissive:366185,emissiveIntensity:.5}));q.position.set(.2,.29,0),I.add(q);const Re=Math.min(1.3,Math.max(.78,.68+ve*.05)),we=oa(Re*1.2,Re*.9,Re,165063,3718648);I.add(we);const Te=new It({color:16096779,metalness:.85,roughness:.22}),Pe=new ft(ag(-3.75,-.4,.72),Te);Pe.castShadow=!0,I.add(Pe),B={wallX:-3.77,eqX:.2,block1:we,springMesh:Pe,s1:Re}}else if(ne==="projectile"){const ve=Number(ie.h0??2),me=Number(ie.angle??45),re=.22,q=Math.max(.2,ve*re),Re=new ft(new ui(.45,.6,q,20),new It({color:3359061,metalness:.65,roughness:.35}));Re.position.set(-4.5,q/2,0),Re.castShadow=!0,I.add(Re);const we=new ft(new ui(.18,.22,.95,16),new It({color:16096779,metalness:.75,roughness:.25}));we.position.set(-4.5,q+.15,0),we.rotation.z=-(Math.PI/2-me*Math.PI/180),we.castShadow=!0,I.add(we);const Te=new ft(new ps(.28,28,28),new It({color:3718648,metalness:.75,roughness:.2}));Te.castShadow=!0,I.add(Te);const Pe=new hn,ae=new _a({color:3718648,transparent:!0,opacity:.8}),xe=new Ac(Pe,ae);I.add(xe),B={originX:-4.5,scale:re,ball:Te,trailLine:xe}}else if(ne==="pendulum"){const ve=Number(ie.m1??2.5),me=Number(ie.length??3.5),re=Math.min(4.2,Math.max(2,me*.85)),q=5,Re=new It({color:3359061,metalness:.75,roughness:.3}),we=new ft(new Kt(4.4,.24,.4),Re);we.position.set(0,q+.14,0),we.castShadow=!0,I.add(we),[-2,2].forEach(Ae=>{const Je=new ft(new Kt(.22,q+.2,.28),Re);Je.position.set(Ae,(q+.2)/2,0),Je.castShadow=!0,I.add(Je)});const Te=new ft(new ps(.14,16,16),new It({color:14870768,metalness:.9,roughness:.2}));Te.position.set(0,q,0),I.add(Te);const Pe=Math.min(.55,Math.max(.28,.24+ve*.04)),ae=new ft(new ps(Pe,32,32),new It({color:165063,metalness:.7,roughness:.2}));ae.castShadow=!0,I.add(ae);const xe=cr(16498468);I.add(xe);const Me=new hn,Ce=new Ac(Me,new _a({color:3718648,transparent:!0,opacity:.65}));I.add(Ce),B={pivotY:q,Lworld:re,bob:ae,rod:xe,trailLine:Ce}}else if(ne==="sandbox_game"){const ve={},me=[];Y.forEach(re=>{const q=(Number(re.angleDeg)||0)*Math.PI/180,Re=Number(re.mass||5),we=(re.x-460)/85,Te=(440-re.y)/85;let Pe=null;re.type!=="hanging_mass"&&(Pe=new ft(new Kt(2.6,.14,1.4),new It({color:3359061,metalness:.5,roughness:.45})),Pe.position.set(we,Te-.48,0),Pe.rotation.z=q,Pe.receiveShadow=!0,I.add(Pe));const ae=re.type==="hanging_mass"?ac(Math.min(.5,.26+Re*.025),.75,14753096,16478597):oa(Math.min(1.15,.65+Re*.04),.72,.8,165063,3718648);I.add(ae),ve[re.id]={obj:re,mesh:ae,baseX:we,baseY:Te,angleRad:q}}),pe.forEach(re=>{const q=Y.find(Me=>Me.id===re.fromId),Re=Y.find(Me=>Me.id===re.toId);if(!q||!Re)return;const we=((q.x+Re.x)/2-460)/85,Te=(440-(Math.min(q.y,Re.y)-65))/85,Pe=lc(.32);Pe.position.set(we,Te,0),I.add(Pe);const ae=cr(16498468),xe=cr(16498468);I.add(ae,xe),me.push({fromId:re.fromId,toId:re.toId,pulley:Pe,rope1:ae,rope2:xe})}),B={objHandles:ve,ropeHandles:me}}},X=()=>{const{sceneType:ne,params:ie,sandboxObjects:Y,sandboxRopes:pe}=f.current;return JSON.stringify({st:ne,m1:ie.m1,m2:ie.m2,angle:ie.angle,h0:ie.h0,length:ie.length,sbObjs:Y,sbRopes:pe})},$=ne=>{if(ee(V),!f.current.showVectors)return;const ie=r==null?void 0:r.current;!ie||!ie.fbdBodies||ie.fbdBodies.forEach(Y=>{const pe=ne[Y.id];pe&&Y.vectors.forEach(ve=>{if(ve.id==="W1x"||ve.id==="W1y")return;const me=Number(ve.magnitude||0);if(me<.2)return;const re=Math.min(2.2,Math.max(.55,me*.025)),q=ve.angleDeg*Math.PI/180,Re=new G(Math.cos(q),Math.sin(q),0).normalize(),we=new FS(Re,pe.clone().add(new G(0,0,.35)),re,Yb(ve.color),.22,.14);V.add(we)})})};let Z=0;const j=()=>{Z=requestAnimationFrame(j);const ne=X();ne!==K&&(K=ne,oe());const ie=t.current,{sceneType:Y,params:pe}=f.current,ve={};if(Y==="incline_pulley"&&B.block1){const{theta:me,effBase:re,clampedH:q,pulleyPos:Re,pulley:we,block1:Te,block2:Pe,rope1:ae,rope2:xe,s1:Me,s2:Ce}=B,Ae=Math.max(-1.4,Math.min(1.4,ie.s*.45)),Je=Me*.85/2+.05,Ye=-re/2+Ae*Math.cos(me)-Je*Math.sin(me),ut=q/2+Ae*Math.sin(me)+Je*Math.cos(me);if(Te.position.set(Ye,ut,0),Te.rotation.z=me,ve.m1=new G(Ye,ut,0),we.userData.wheel&&(we.userData.wheel.rotation.z=-ie.pulleyAngle),Pe&&ae&&xe){const xt=Ce*.85/2+.05,wt=re/2+Ae*Math.cos(me)+xt*Math.sin(me),J=q/2-Ae*Math.sin(me)+xt*Math.cos(me);Pe.position.set(wt,J,0),Pe.rotation.z=-me,ve.m2=new G(wt,J,0);const Wt=new G(Ye+Me*.6*Math.cos(me),ut+Me*.6*Math.sin(me),0),pt=new G(Re.x-.25*Math.sin(me),Re.y+.25*Math.cos(me),0),Lt=new G(Re.x+.25*Math.sin(me),Re.y+.25*Math.cos(me),0),Ue=new G(wt-Ce*.6*Math.cos(me),J+Ce*.6*Math.sin(me),0);ur(ae,Wt,pt),ur(xe,Lt,Ue)}}else if(Y==="horizontal_table"&&B.block1){const{tableY:me,pulleyPos:re,pulley:q,block1:Re,block2:we,rope1:Te,rope2:Pe,s1:ae}=B,xe=Math.max(-1.8,Math.min(1.8,ie.s*.52)),Me=-.8+xe,Ce=me+.11+ae*.85/2;Re.position.set(Me,Ce,0),ve.m1=new G(Me,Ce,0),q.userData.wheel&&(q.userData.wheel.rotation.z=-ie.pulleyAngle);const Ae=re.x+.32,Je=Math.max(.55,me-.9-xe);we.position.set(Ae,Je,0),ve.m2=new G(Ae,Je,0),ur(Te,new G(Me+ae*.6,Ce+.1,0),new G(re.x,re.y+.3,0)),ur(Pe,new G(Ae,re.y,0),new G(Ae,Je+.42,0))}else if(Y==="atwood"&&B.block1){const{pulleyPos:me,pulley:re,block1:q,block2:Re,rope1:we,rope2:Te}=B,Pe=Math.max(-1.45,Math.min(1.45,ie.s*.48)),ae=-.53,xe=.53,Me=2.4-Pe,Ce=2.4+Pe;q.position.set(ae,Me,0),Re.position.set(xe,Ce,0),ve.m1=new G(ae,Me,0),ve.m2=new G(xe,Ce,0),re.userData.wheel&&(re.userData.wheel.rotation.z=-ie.pulleyAngle),ur(we,new G(ae,me.y,0),new G(ae,Me+.42,0)),ur(Te,new G(xe,me.y,0),new G(xe,Ce+.42,0))}else if(Y==="spring_block"&&B.block1){const{wallX:me,eqX:re,block1:q,springMesh:Re,s1:we}=B,Te=re+Math.max(-2.1,Math.min(2.6,ie.x*.85)),Pe=.28+we*.9/2;q.position.set(Te,Pe,0),ve.m1=new G(Te,Pe,0);const ae=Te-we*1.2/2;Re.geometry.dispose(),Re.geometry=ag(me,ae,Pe,10,.24)}else if(Y==="projectile"&&B.ball){const{originX:me,scale:re,ball:q,trailLine:Re}=B,we=me+ie.px*re,Te=Math.max(.28,ie.py*re);if(q.position.set(we,Te,0),ve.m1=new G(we,Te,0),ie.trail&&ie.trail.length>1){const Pe=ie.trail.map(ae=>new G(me+ae.x*re,Math.max(.1,ae.y*re),0));Re.geometry.dispose(),Re.geometry=new hn().setFromPoints(Pe)}}else if(Y==="pendulum"&&B.bob){const{pivotY:me,Lworld:re,bob:q,rod:Re,trailLine:we}=B,Te=re*Math.sin(ie.theta),Pe=me-re*Math.cos(ie.theta);if(q.position.set(Te,Pe,0),ve.m1=new G(Te,Pe,0),ur(Re,new G(0,me,0),new G(Te,Pe,0)),ie.pendulumTrail&&ie.pendulumTrail.length>1){const ae=ie.pendulumTrail.map(xe=>new G(re*Math.sin(xe.theta),me-re*Math.cos(xe.theta),0));we.geometry.dispose(),we.geometry=new hn().setFromPoints(ae)}}else if(Y==="sandbox_game"&&B.objHandles){const{objHandles:me,ropeHandles:re}=B,q=ie.s*.4;Object.entries(me).forEach(([Re,we])=>{const{obj:Te,mesh:Pe,baseX:ae,baseY:xe,angleRad:Me}=we,Ce=Te.type==="hanging_mass"?ae:ae+q*Math.cos(Me),Ae=Te.type==="hanging_mass"?xe-q:xe+q*Math.sin(Me);Pe.position.set(Ce,Ae,0),Pe.rotation.z=Te.type==="hanging_mass"?0:Me,ve[Re]=new G(Ce,Ae,0)}),re.forEach(Re=>{const we=ve[Re.fromId],Te=ve[Re.toId];!we||!Te||(Re.pulley.userData.wheel&&(Re.pulley.userData.wheel.rotation.z=-ie.pulleyAngle),ur(Re.rope1,we,Re.pulley.position),ur(Re.rope2,Re.pulley.position,Te))})}$(ve),b.update(),T.render(y,S)};j();const U=()=>{if(!g)return;const ne=g.clientWidth||920,ie=g.clientHeight||500;S.aspect=ne/ie,S.updateProjectionMatrix(),T.setSize(ne,ie)};return window.addEventListener("resize",U),()=>{cancelAnimationFrame(Z),window.removeEventListener("resize",U),b.dispose(),ee(I),ee(V),T.dispose(),T.domElement.parentNode===g&&g.removeChild(T.domElement)}},[]),k.jsx("div",{ref:h,className:"w-full h-full cursor-grab active:cursor-grabbing",title:"Arrastra para rotar en 3D · Rueda para zoom · Clic derecho para desplazar"})}function jb({sceneType:i,params:e,onParamsChange:t,sandboxObjects:r,setSandboxObjects:o,sandboxRopes:a,setSandboxRopes:c,onSolveCurrentSceneWithAI:d,onLiveSolverUpdate:h}){const f=Mt.useRef(null),m=Mt.useRef(null),[x,v]=Mt.useState("3d"),[g,E]=Mt.useState(0),[A,y]=Mt.useState(!0),[S,T]=Mt.useState(1),[b,w]=Mt.useState(!0),[P,C]=Mt.useState(!0),[M,R]=Mt.useState(!0),[O,F]=Mt.useState("b1"),[I,V]=Mt.useState(null),K=Mt.useRef({draggingId:null,offsetX:0,offsetY:0}),B=Mt.useRef({t:0,s:0,v:0,pulleyAngle:0,thermalWork:0,x:e.x0??2,px:0,py:e.h0??2,vx:0,vy:0,trail:[],strobePoints:[],lastStrobeT:0,theta:(e.angle0??40)*Math.PI/180,omega:0,pendulumTrail:[],particles:[]}),ee=()=>{const ie=(e.angle??45)*Math.PI/180,Y=Number(e.v0??22),pe=Number(e.h0??2);B.current={t:0,s:0,v:0,pulleyAngle:0,thermalWork:0,x:Number(e.x0??2.2),px:0,py:pe,vx:Y*Math.cos(ie),vy:Y*Math.sin(ie),trail:[{x:0,y:pe}],strobePoints:[{x:0,y:pe,vx:Y*Math.cos(ie),vy:Y*Math.sin(ie),t:0}],lastStrobeT:0,theta:Number(e.angle0??40)*Math.PI/180,omega:0,pendulumTrail:[],particles:[]}};Mt.useEffect(()=>{ee()},[i,e.m1,e.m2,e.angle,e.muK,e.fExt,e.k,e.x0,e.v0,e.h0,e.length,e.angle0,e.g]),Mt.useEffect(()=>{let ie,Y=performance.now();const pe=ve=>{const me=Math.min(.035,(ve-Y)/1e3);Y=ve;const re=A?me*S:0,q=B.current,Re=eh(i,e,{v:q.v,x:q.x,vy:q.vy,theta:q.theta,omega:q.omega,sandboxObjects:r,sandboxRopes:a});if(m.current=Re,h&&h(Re),re>0){if(q.t+=re,q.particles=q.particles.map(Te=>({...Te,x:Te.x+Te.vx*re,y:Te.y+Te.vy*re,vy:Te.vy+180*re,life:Te.life-re})).filter(Te=>Te.life>0),i==="incline_pulley"||i==="horizontal_table"||i==="atwood"||i==="sandbox_game"){const Te=Number(Re.summary.acceleration||0);q.v+=Te*re;const Pe=q.v*re;q.s+=Pe,q.pulleyAngle+=Pe*28/22;const ae=Number(Re.summary.friction||0);Math.abs(q.v)>.05&&ae>.1&&(q.thermalWork+=ae*Math.abs(Pe));const xe=2.6;q.s>xe?(q.s=xe,q.v=-q.v*.22,Math.abs(q.v)<.15&&(q.v=0)):q.s<-xe&&(q.s=-xe,q.v=-q.v*.22,Math.abs(q.v)<.15&&(q.v=0))}else if(i==="spring_block"){const Te=Math.max(.1,Number(e.m1??3)),Pe=Math.max(1,Number(e.k??45)),ae=Math.max(0,Number(e.muK??.04)),xe=Number(e.g??9.81),Me=4,Ce=re/Me;for(let Ae=0;Ae<Me;Ae++){const Je=Math.abs(q.v)>.008?-Math.sign(q.v)*ae*Te*xe:0,Ye=(-Pe*q.x+Je)/Te;q.v+=Ye*Ce;const ut=q.v*Ce;q.x+=ut,q.thermalWork+=Math.abs(Je*ut)}}else if(i==="projectile"){const Te=Number(e.g??9.81);(q.py>0||q.vy>0||Math.abs(q.vx)>.05)&&(q.px+=q.vx*re,q.vy-=Te*re,q.py+=q.vy*re,q.py<=0&&(q.py=0,Math.abs(q.vy)>1.2?(q.vy=-q.vy*.35,q.vx*=.78):(q.vy=0,q.vx*=Math.max(0,1-2.5*re),Math.abs(q.vx)<.08&&(q.vx=0))),(q.trail.length===0||Math.hypot(q.px-q.trail[q.trail.length-1].x,q.py-q.trail[q.trail.length-1].y)>.35)&&q.trail.push({x:q.px,y:q.py}),q.t-q.lastStrobeT>=.45&&(q.py>0||Math.abs(q.vy)>.2)&&(q.lastStrobeT=q.t,q.strobePoints.push({x:q.px,y:q.py,vx:q.vx,vy:q.vy,t:q.t})))}else if(i==="pendulum"){const Te=Number(e.g??9.81),Pe=Math.max(.5,Number(e.length??3.5)),ae=Number(e.damping??.02),xe=4,Me=re/xe;for(let Ce=0;Ce<xe;Ce++){const Ae=-(Te/Pe)*Math.sin(q.theta)-ae*q.omega;q.omega+=Ae*Me,q.theta+=q.omega*Me}q.pendulumTrail.push({theta:q.theta}),q.pendulumTrail.length>45&&q.pendulumTrail.shift()}}const we=f.current;if(we){const Te=we.getContext("2d");Zb(Te,we.width,we.height,i,e,q,Re,{showVectors:b,showComponents:P,showValues:M,sandboxObjects:r,sandboxRopes:a,selectedObjId:O,connectingFromId:I,isPlaying:A})}ie=requestAnimationFrame(pe)};return ie=requestAnimationFrame(pe),()=>cancelAnimationFrame(ie)},[i,e,A,S,b,P,M,r,a,O,I]);const oe=ie=>{if(i!=="sandbox_game")return;const Y=f.current;if(!Y)return;const pe=Y.getBoundingClientRect(),ve=Y.width/pe.width,me=Y.height/pe.height,re=(ie.clientX-pe.left)*ve,q=(ie.clientY-pe.top)*me;for(let Re=r.length-1;Re>=0;Re--){const we=r[Re];if(Math.hypot(re-we.x,q-we.y)<=48){if(I){I!==we.id&&(a.some(ae=>ae.fromId===I&&ae.toId===we.id||ae.fromId===we.id&&ae.toId===I)||c(ae=>[...ae,{id:`rope_${Date.now()}`,fromId:I,toId:we.id}])),V(null);return}F(we.id),K.current={draggingId:we.id,offsetX:re-we.x,offsetY:q-we.y};return}}},X=ie=>{if(i!=="sandbox_game"||!K.current.draggingId)return;const Y=f.current;if(!Y)return;const pe=Y.getBoundingClientRect(),ve=Y.width/pe.width,me=Y.height/pe.height,re=(ie.clientX-pe.left)*ve,q=(ie.clientY-pe.top)*me,Re=K.current.draggingId;o(we=>we.map(Te=>Te.id===Re?{...Te,x:Math.max(60,Math.min(Y.width-60,re-K.current.offsetX)),y:Math.max(70,Math.min(Y.height-60,q-K.current.offsetY))}:Te))},$=()=>{K.current.draggingId=null},Z=(ie="block")=>{const Y=r.length+1,pe=ie==="hanging_mass"?{id:`obj_${Date.now()}`,type:"hanging_mass",label:`m_${Y}`,mass:4.5,angleDeg:0,mu:0,fExt:0,x:580,y:255}:{id:`obj_${Date.now()}`,type:"block",label:`m_${Y}`,mass:6,angleDeg:Y===1?25:0,mu:.15,fExt:0,x:240+Y%3*95,y:235};o(ve=>[...ve,pe]),F(pe.id),B.current.s=0,B.current.v=0},j=r.find(ie=>ie.id===O)||r[0],U=ie=>{j&&(o(Y=>Y.map(pe=>pe.id===j.id?{...pe,...ie}:pe)),B.current.s=0,B.current.v=0)},ne=()=>{if(!j)return;const ie=j.id;o(Y=>Y.filter(pe=>pe.id!==ie)),c(Y=>Y.filter(pe=>pe.fromId!==ie&&pe.toId!==ie))};return k.jsxs("div",{className:"flex flex-col bg-[#050507] border border-white/15 rounded-2xl overflow-hidden",children:[k.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-black border-b border-white/10",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsxs("button",{onClick:()=>y(!A),className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${A?"bg-white text-black hover:bg-white/90":"bg-white/10 text-white border border-white/25 hover:bg-white/20"}`,children:[A?k.jsx(bx,{className:"w-3.5 h-3.5"}):k.jsx(Tx,{className:"w-3.5 h-3.5"}),A?"Pausar":"Iniciar"]}),k.jsxs("button",{onClick:ee,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer",title:"Reiniciar simulación",children:[k.jsx(Ax,{className:"w-3.5 h-3.5"}),"Reiniciar"]}),k.jsxs("button",{onClick:()=>T(S===1?.5:S===.5?.25:1),className:"px-2.5 py-1 rounded-full text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/35 transition cursor-pointer font-tech",title:"Cambiar velocidad de simulación",children:[S,"x"]})]}),k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsxs("div",{className:"flex items-center bg-[#0a0a0d] border border-white/15 rounded-full p-0.5 text-xs",children:[k.jsxs("button",{onClick:()=>v("3d"),className:`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer ${x==="3d"?"bg-white text-black font-semibold":"text-white/60 hover:text-white"}`,children:[k.jsx(hg,{className:"w-3 h-3"}),"3D"]}),k.jsxs("button",{onClick:()=>v("2d"),className:`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer ${x==="2d"?"bg-white text-black font-semibold":"text-white/60 hover:text-white"}`,children:[k.jsx(Sx,{className:"w-3 h-3"}),"2D"]})]}),k.jsxs("button",{onClick:()=>w(!b),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition cursor-pointer ${b?"bg-white/15 text-white border-white/35":"text-white/50 border-white/15 hover:text-white"}`,children:[k.jsx(vx,{className:"w-3.5 h-3.5"}),"Vectores"]})]})]}),i==="sandbox_game"&&k.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 bg-[#120f1f] border-b border-purple-500/30 font-tech",children:[k.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[k.jsxs("span",{className:"text-[11px] font-bold text-purple-300 flex items-center gap-1 mr-1 uppercase",children:[k.jsx(xx,{className:"w-3.5 h-3.5"})," Ensamblador:"]}),k.jsxs("button",{onClick:()=>Z("block"),className:"flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-sky-500/15 hover:bg-sky-500/25 text-sky-200 border border-sky-500/40 transition cursor-pointer",children:[k.jsx(Ym,{className:"w-3 h-3"})," + BLOQUE RAMPA"]}),k.jsxs("button",{onClick:()=>Z("hanging_mass"),className:"flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-rose-500/15 hover:bg-rose-500/25 text-rose-200 border border-rose-500/40 transition cursor-pointer",children:[k.jsx(Ym,{className:"w-3 h-3"})," + MASA COLGANTE"]}),k.jsxs("button",{onClick:()=>{I?V(null):j&&V(j.id)},className:`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] border transition cursor-pointer ${I?"bg-amber-400 text-black font-bold border-amber-300 animate-pulse":"bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 border-amber-400/40"}`,children:[k.jsx(Mx,{className:"w-3 h-3"}),I?"CLICK EN 2° CUERPO PARA UNIR CUERDA...":"ACOPLAR CON CUERDA"]}),a.length>0&&k.jsx("button",{onClick:()=>c([]),className:"px-2 py-1 rounded text-[10.5px] bg-[#1a1e2b] hover:bg-[#252c3f] text-zinc-400 border border-[#2b3348] cursor-pointer",children:"CORTAR TENSORES"})]}),k.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-bold bg-purple-500/25 hover:bg-purple-500/40 text-purple-200 border border-purple-500/60 shadow-sm transition cursor-pointer",children:[k.jsx(Qd,{className:"w-3.5 h-3.5 text-purple-400"}),"RESOLVER ENSAMBLE CON IA"]})]}),k.jsxs("div",{className:"relative w-full aspect-[16/9] max-h-[480px] bg-slate-950 select-none overflow-hidden",children:[x==="3d"?k.jsxs(k.Fragment,{children:[k.jsx(qb,{sceneType:i,params:e,simRef:B,solverRef:m,showVectors:b,sandboxObjects:r,sandboxRopes:a,resetCameraTrigger:g}),k.jsx("div",{className:"absolute top-3 right-3",children:k.jsxs("button",{onClick:()=>E(ie=>ie+1),className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-[11px] text-white/85 cursor-pointer transition",title:"Restablecer ángulo de cámara 3D",children:[k.jsx(hx,{className:"w-3 h-3"}),"Centrar"]})})]}):k.jsx("canvas",{ref:f,width:920,height:500,onMouseDown:oe,onMouseMove:X,onMouseUp:$,className:`w-full h-full object-contain ${i==="sandbox_game"?"cursor-grab active:cursor-grabbing":""}`}),k.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px]",children:[k.jsxs("div",{className:"flex items-center gap-3.5 text-white/70",children:[k.jsxs("span",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400 inline-block"})," Peso"]}),k.jsxs("span",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 inline-block"})," Normal"]}),k.jsxs("span",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-300 inline-block"})," Tensión"]}),k.jsxs("span",{className:"flex items-center gap-1.5 hidden sm:flex",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400 inline-block"})," Fricción"]})]}),k.jsxs("button",{onClick:d,className:"text-white/90 hover:text-white font-medium flex items-center gap-1.5 cursor-pointer text-[11px]",children:[k.jsx(Qd,{className:"w-3.5 h-3.5"})," Explicar en el Chat"]})]})]}),k.jsx("div",{className:"p-4 bg-black border-t border-white/15",children:i==="sandbox_game"?j?k.jsxs("div",{className:"space-y-3",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5",children:[k.jsx(Cx,{className:"w-3.5 h-3.5"})," Propiedades de"," ",j.label," (",j.type==="hanging_mass"?"Masa Colgante":"Bloque en Superficie",") — Arrástralo libremente con el mouse"]}),r.length>1&&k.jsxs("button",{onClick:ne,className:"flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 cursor-pointer",children:[k.jsx(Px,{className:"w-3.5 h-3.5"})," Eliminar objeto"]})]}),k.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[k.jsx(zn,{label:`Masa (${j.label})`,value:j.mass,min:.5,max:25,step:.5,unit:"kg",onChange:ie=>U({mass:ie})}),j.type!=="hanging_mass"&&k.jsxs(k.Fragment,{children:[k.jsx(zn,{label:"Ángulo Rampa (θ)",value:j.angleDeg,min:0,max:65,step:1,unit:"°",onChange:ie=>U({angleDeg:ie})}),k.jsx(zn,{label:"Fricción (μ_k)",value:j.mu,min:0,max:.8,step:.02,unit:"",onChange:ie=>U({mu:ie})}),k.jsx(zn,{label:"Fuerza Externa (F)",value:j.fExt,min:-50,max:50,step:1,unit:"N",onChange:ie=>U({fExt:ie})})]})]})]}):null:k.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3",children:[e.m1!==void 0&&k.jsx(zn,{label:"Masa m₁",value:e.m1,min:.5,max:25,step:.5,unit:"kg",onChange:ie=>t({m1:ie})}),e.m2!==void 0&&k.jsx(zn,{label:"Masa m₂ (Colgante)",value:e.m2,min:0,max:25,step:.5,unit:"kg",onChange:ie=>t({m2:ie})}),e.angle!==void 0&&k.jsx(zn,{label:"Ángulo θ",value:e.angle,min:5,max:75,step:1,unit:"°",onChange:ie=>t({angle:ie})}),e.muK!==void 0&&k.jsx(zn,{label:"Fricción μ_k",value:e.muK,min:0,max:.75,step:.01,unit:"",onChange:ie=>t({muK:ie,muS:Math.max(ie+.05,e.muS||.2)})}),e.fExt!==void 0&&k.jsx(zn,{label:"Fuerza F_ext",value:e.fExt,min:-60,max:60,step:1,unit:"N",onChange:ie=>t({fExt:ie})}),e.k!==void 0&&k.jsx(zn,{label:"Constante k",value:e.k,min:5,max:150,step:1,unit:"N/m",onChange:ie=>t({k:ie})}),e.x0!==void 0&&k.jsx(zn,{label:"Elongación x₀",value:e.x0,min:-3.5,max:3.5,step:.1,unit:"m",onChange:ie=>t({x0:ie})}),e.v0!==void 0&&k.jsx(zn,{label:"Velocidad v₀",value:e.v0,min:5,max:45,step:1,unit:"m/s",onChange:ie=>t({v0:ie})}),e.h0!==void 0&&k.jsx(zn,{label:"Altura h₀",value:e.h0,min:0,max:15,step:.5,unit:"m",onChange:ie=>t({h0:ie})}),e.length!==void 0&&k.jsx(zn,{label:"Longitud Cuerda L",value:e.length,min:1,max:7,step:.2,unit:"m",onChange:ie=>t({length:ie})}),e.angle0!==void 0&&k.jsx(zn,{label:"Ángulo Inicial θ₀",value:e.angle0,min:-75,max:75,step:1,unit:"°",onChange:ie=>t({angle0:ie})}),k.jsx(zn,{label:"Gravedad g",value:e.g??9.81,min:1.6,max:25,step:.1,unit:"m/s²",onChange:ie=>t({g:ie})})]})})]})}function zn({label:i,value:e,min:t,max:r,step:o,unit:a,onChange:c}){return k.jsxs("div",{className:"bg-[#050507] border border-white/15 hover:border-white/35 rounded-xl px-3 py-2.5 transition group",children:[k.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-1 font-tech",children:[k.jsx("span",{className:"text-white/55 group-hover:text-white/85 transition font-medium truncate uppercase tracking-[0.12em] text-[9.5px]",children:i}),k.jsxs("span",{className:"font-semibold text-white",children:[Number(e).toFixed(o<.1?2:o<1?1:0),k.jsx("span",{className:"text-white/45 font-normal ml-0.5 text-[9.5px]",children:a})]})]}),k.jsx("input",{type:"range",min:t,max:r,step:o,value:e,onChange:d=>c(parseFloat(d.target.value)),className:"w-full accent-amber-400 h-1 bg-[#171b26] rounded cursor-pointer"})]})}function cc(i,e,t,r,o,a=null,c=null){if(i.save(),a!==null&&c!==null){const f=i.createLinearGradient(a,c,e,t);f.addColorStop(0,"#334155"),f.addColorStop(.5,"#94a3b8"),f.addColorStop(1,"#475569"),i.strokeStyle=f,i.lineWidth=7,i.lineCap="round",i.beginPath(),i.moveTo(a,c),i.lineTo(e,t),i.stroke(),i.strokeStyle="#1e293b",i.lineWidth=2,i.beginPath(),i.moveTo(a,c),i.lineTo(e,t),i.stroke()}i.shadowColor="rgba(0, 0, 0, 0.55)",i.shadowBlur=10,i.shadowOffsetY=4;const d=i.createRadialGradient(e-r*.25,t-r*.25,2,e,t,r);d.addColorStop(0,"#475569"),d.addColorStop(.72,"#1e293b"),d.addColorStop(.88,"#f59e0b"),d.addColorStop(1,"#b45309"),i.fillStyle=d,i.beginPath(),i.arc(e,t,r,0,Math.PI*2),i.fill(),i.shadowColor="transparent",i.save(),i.translate(e,t),i.rotate(o),i.strokeStyle="#94a3b8",i.lineWidth=2.2;const h=6;for(let f=0;f<h;f++){const m=f*Math.PI*2/h;i.beginPath(),i.moveTo(0,0),i.lineTo((r-4)*Math.cos(m),(r-4)*Math.sin(m)),i.stroke()}i.fillStyle="#0f172a";for(let f=0;f<h;f++){const m=(f+.5)*Math.PI*2/h,x=r*.52;i.beginPath(),i.arc(x*Math.cos(m),x*Math.sin(m),r*.14,0,Math.PI*2),i.fill()}i.restore(),i.fillStyle="#e2e8f0",i.strokeStyle="#0f172a",i.lineWidth=2,i.beginPath(),i.arc(e,t,Math.max(4.5,r*.22),0,Math.PI*2),i.fill(),i.stroke(),i.restore()}function dr(i,e,t,r,o){i.save(),i.strokeStyle="rgba(0, 0, 0, 0.45)",i.lineWidth=5,i.beginPath(),i.moveTo(e,t+2),i.lineTo(r,o+2),i.stroke(),i.strokeStyle="#d97706",i.lineWidth=4,i.lineCap="round",i.beginPath(),i.moveTo(e,t),i.lineTo(r,o),i.stroke(),i.strokeStyle="#fde68a",i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.moveTo(e,t),i.lineTo(r,o),i.stroke(),i.restore()}function zr(i,e,t,r,o,a="blue",c=!1){i.save();const d={blue:{top:"#38bdf8",mid:"#0284c7",bot:"#0369a1",border:c?"#fde047":"#bae6fd"},crimson:{top:"#fb7185",mid:"#e11d48",bot:"#9f1239",border:c?"#fde047":"#fecdd3"}},h=d[a]||d.blue;i.shadowColor="rgba(0, 0, 0, 0.55)",i.shadowBlur=12,i.shadowOffsetY=4;const f=i.createLinearGradient(0,-t/2,0,t/2);f.addColorStop(0,h.top),f.addColorStop(.18,h.mid),f.addColorStop(1,h.bot),i.fillStyle=f,i.strokeStyle=h.border,i.lineWidth=c?3:2,i.beginPath(),i.roundRect(-e/2,-t/2,e,t,7),i.fill(),i.stroke(),i.shadowColor="transparent",i.strokeStyle="rgba(255, 255, 255, 0.22)",i.lineWidth=1,i.beginPath(),i.roundRect(-e/2+4,-t/2+4,e-8,t-8,4),i.stroke(),i.fillStyle="rgba(15, 23, 42, 0.55)";const m=e/2-7,x=t/2-7;[[-m,-x],[m,-x],[-m,x],[m,x]].forEach(([v,g])=>{i.beginPath(),i.arc(v,g,2,0,Math.PI*2),i.fill()}),i.fillStyle="rgba(2, 6, 23, 0.55)",i.beginPath(),i.roundRect(-e*.38,-14,e*.76,28,5),i.fill(),i.fillStyle="#ffffff",i.font="bold 12px JetBrains Mono, monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(r,0,-4),i.fillStyle="#e2e8f0",i.font="10.5px JetBrains Mono, monospace",i.fillText(`${Number(o).toFixed(1)} kg`,0,9),i.fillStyle="#fde047",i.beginPath(),i.arc(0,0,2.8,0,Math.PI*2),i.fill(),i.restore()}function fs(i,e,t,r,o,a=14,c=10){i.save();const d=r-e,h=o-t,f=Math.hypot(d,h),m=Math.atan2(h,d);i.translate(e,t),i.rotate(m),i.strokeStyle="rgba(148, 163, 184, 0.32)",i.lineWidth=1.3;for(let x=6;x<f-4;x+=a)i.beginPath(),i.moveTo(x,0),i.lineTo(x-c*.7,c),i.stroke();i.restore()}function uc(i,e,t,r,o,a){if(!a||a<=.01)return;i.save();const c=r-e,d=o-t,h=Math.hypot(c,d),f=Math.atan2(d,c),m=Math.min(4.5,1.2+a*6);i.translate(e,t),i.rotate(f),i.strokeStyle="rgba(251, 146, 60, 0.65)",i.lineWidth=1.4,i.beginPath(),i.moveTo(0,0);for(let x=0;x<=h;x+=6)i.lineTo(x,x/6%2===0?-m:0);i.stroke(),i.restore()}function Kb(i,e,t,r,o,a,c,d,h=!1,f=1.45){if(o<.05)return;const m=Math.min(142,Math.max(36,o*f)),x=-r*Math.PI/180,v=e+m*Math.cos(x),g=t+m*Math.sin(x);i.save(),i.strokeStyle=a,i.fillStyle=a,i.lineWidth=h?2.2:3.2,h?i.setLineDash([5,4]):(i.shadowColor=a,i.shadowBlur=6),i.beginPath(),i.moveTo(e,t),i.lineTo(v,g),i.stroke(),i.setLineDash([]),i.shadowColor="transparent";const E=11,A=Math.atan2(g-t,v-e);i.beginPath(),i.moveTo(v,g),i.lineTo(v-E*Math.cos(A-Math.PI/6.5),g-E*Math.sin(A-Math.PI/6.5)),i.lineTo(v-E*Math.cos(A+Math.PI/6.5),g-E*Math.sin(A+Math.PI/6.5)),i.closePath(),i.fill();const y=d?`${c} (${o.toFixed(1)}N)`:c;i.font="bold 11px JetBrains Mono, monospace";const S=i.measureText(y).width,T=v+16*Math.cos(A),b=g+16*Math.sin(A);return i.fillStyle="rgba(2, 6, 23, 0.9)",i.beginPath(),i.roundRect(T-S/2-5,b-9.5,S+10,19,5),i.fill(),i.strokeStyle=a,i.lineWidth=1.1,i.stroke(),i.fillStyle=a,i.textAlign="center",i.textBaseline="middle",i.fillText(y,T,b),i.restore(),{ex:v,ey:g,len:m}}function lg(i,e,t,r,o,a=1.45){if(o<=1||r<.5)return;const c=Math.min(142,Math.max(36,r*a)),d=o*Math.PI/180,h=c*Math.sin(d),f=c*Math.cos(d),m=e-h*Math.cos(d),x=t+h*Math.sin(d),v=e+f*Math.sin(d),g=t+f*Math.cos(d),E=e,A=t+c;i.save(),i.strokeStyle="rgba(251, 113, 133, 0.45)",i.lineWidth=1.5,i.setLineDash([3,3]),i.beginPath(),i.moveTo(m,x),i.lineTo(E,A),i.lineTo(v,g),i.stroke(),i.setLineDash([]),i.strokeStyle="#fda4af",i.beginPath();const y=Math.min(34,f*.45),S=Math.PI/2-d,T=Math.PI/2;i.arc(e,t,y,S,T),i.stroke(),i.fillStyle="#fda4af",i.font="bold 10px JetBrains Mono, monospace",i.fillText(`θ=${o}°`,e+8,t+y+11),i.restore()}function Zb(i,e,t,r,o,a,c,d){i.clearRect(0,0,e,t);const h=i.createRadialGradient(e*.5,t*.35,40,e*.5,t*.5,e*.75);h.addColorStop(0,"#0f172a"),h.addColorStop(1,"#020617"),i.fillStyle=h,i.fillRect(0,0,e,t),i.strokeStyle="rgba(56, 189, 248, 0.045)",i.lineWidth=1;for(let T=0;T<e;T+=25)i.beginPath(),i.moveTo(T,0),i.lineTo(T,t),i.stroke();for(let T=0;T<t;T+=25)i.beginPath(),i.moveTo(0,T),i.lineTo(e,T),i.stroke();i.strokeStyle="rgba(56, 189, 248, 0.09)";for(let T=0;T<e;T+=100)i.beginPath(),i.moveTo(T,0),i.lineTo(T,t),i.stroke();for(let T=0;T<t;T+=100)i.beginPath(),i.moveTo(0,T),i.lineTo(e,T),i.stroke();i.save(),i.fillStyle="rgba(2, 6, 23, 0.88)",i.strokeStyle="rgba(56, 189, 248, 0.35)",i.lineWidth=1.2,i.beginPath(),i.roundRect(14,12,420,66,12),i.fill(),i.stroke(),i.fillStyle="#38bdf8",i.font="bold 12px Inter, sans-serif",i.fillText(c.motionState||"Simulación Activa",26,30),i.fillStyle="#f8fafc",i.font="bold 11.5px JetBrains Mono, monospace";const f=Number(c.summary.acceleration||0),m=c.summary.tension?`  |  T = ${Number(c.summary.tension).toFixed(1)} N`:"",x=c.summary.normal1?`  |  N = ${Number(c.summary.normal1).toFixed(1)} N`:"";i.fillText(`a = ${f.toFixed(2)} m/s²${m}${x}`,26,49),i.fillStyle="#94a3b8",i.font="11px JetBrains Mono, monospace",i.fillText(`t = ${a.t.toFixed(2)} s   |   v = ${a.v.toFixed(2)} m/s   |   Δs = ${a.s.toFixed(2)} m`,26,67),i.restore();const v=Number(o.m1||4)+Number(o.m2||0),g=r==="projectile"?.5*Number(o.m1||2)*(a.vx*a.vx+a.vy*a.vy):r==="pendulum"?.5*Number(o.m1||2.5)*Math.pow(a.omega*Number(o.length||3.5),2):.5*v*a.v*a.v,E=r==="spring_block"?.5*Number(o.k||45)*a.x*a.x:0;i.save(),i.fillStyle="rgba(2, 6, 23, 0.88)",i.strokeStyle="rgba(148, 163, 184, 0.25)",i.beginPath(),i.roundRect(e-245,12,230,58,12),i.fill(),i.stroke(),i.fillStyle="#cbd5e1",i.font="bold 10.5px Inter, sans-serif",i.fillText("BALANCE ENERGÉTICO EN VIVO",e-232,28),i.font="11px JetBrains Mono, monospace",i.fillStyle="#34d399",i.fillText(`K = ${g.toFixed(1)} J`,e-232,46),i.fillStyle=r==="spring_block"?"#38bdf8":"#fb923c",i.fillText(r==="spring_block"?`U_e = ${E.toFixed(1)} J`:`E_f = ${a.thermalWork.toFixed(1)} J`,e-135,46);const A=Math.max(10,g+E+a.thermalWork),y=Math.min(204,g/A*204);i.fillStyle="#1e293b",i.fillRect(e-232,54,204,7),i.fillStyle="#34d399",i.fillRect(e-232,54,y,7),i.restore();const S=(T,b,w)=>{if(!d.showVectors)return;const P=c.fbdBodies.find(C=>C.id===w);P&&P.vectors.forEach(C=>{C.dashed&&!d.showComponents||Kb(i,T,b,C.angleDeg,C.magnitude,C.color,C.symbol.split("=")[0].trim(),d.showValues,C.dashed)})};if(a.particles.forEach(T=>{i.save(),i.fillStyle=`rgba(251, 146, 60, ${Math.min(1,T.life*2.5)})`,i.beginPath(),i.arc(T.x,T.y,T.size,0,Math.PI*2),i.fill(),i.restore()}),r==="incline_pulley"){const T=Number(o.angle??30),b=T*Math.PI/180,w=115,P=408,C=410,M=w+C*Math.cos(b),R=P-C*Math.sin(b);i.strokeStyle="#64748b",i.lineWidth=3,i.beginPath(),i.moveTo(45,P),i.lineTo(e-45,P),i.stroke(),fs(i,45,P,e-45,P,16,11);const O=i.createLinearGradient(w,R,M,P);O.addColorStop(0,"rgba(30, 41, 59, 0.95)"),O.addColorStop(1,"rgba(15, 23, 42, 0.95)"),i.fillStyle=O,i.strokeStyle="#94a3b8",i.lineWidth=2.8,i.beginPath(),i.moveTo(w,P),i.lineTo(M,P),i.lineTo(M,R),i.closePath(),i.fill(),i.stroke(),i.strokeStyle="rgba(71, 85, 105, 0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(w+(M-w)*.45,P),i.lineTo(w+(M-w)*.45,P-C*.45*Math.sin(b)),i.moveTo(w+(M-w)*.75,P),i.lineTo(w+(M-w)*.75,P-C*.75*Math.sin(b)),i.stroke(),uc(i,w,P,M,R,o.muK),i.strokeStyle="#38bdf8",i.lineWidth=2.2,i.beginPath(),i.arc(w,P,68,-b,0),i.stroke(),i.fillStyle="rgba(56, 189, 248, 0.12)",i.beginPath(),i.moveTo(w,P),i.arc(w,P,68,-b,0),i.closePath(),i.fill(),i.fillStyle="#38bdf8",i.font="bold 13px JetBrains Mono, monospace",i.fillText(`θ = ${T}°`,w+76,P-15);const F=Number(o.m1??6),I=Math.min(92,Math.max(62,54+F*2.2)),V=Math.min(62,Math.max(42,36+F*1.4)),K=a.s*42,B=Math.max(75,Math.min(C-65,C*.52+K)),ee=w+B*Math.cos(b),oe=P-B*Math.sin(b);d.isPlaying&&Math.abs(a.v)>.15&&Number(o.muK)>.02&&Math.random()<.55&&a.particles.push({x:ee+(Math.random()-.5)*20,y:oe+(Math.random()-.5)*6,vx:-Math.sign(a.v)*(35+Math.random()*45)*Math.cos(b),vy:-25-Math.random()*35,size:1.5+Math.random()*2,life:.35+Math.random()*.25});const X=ee-V/2*Math.sin(b),$=oe-V/2*Math.cos(b),Z=Number(o.m2??0),j=22,U=M+26*Math.cos(b-Math.PI/5),ne=R-26*Math.sin(b+Math.PI/5);if(Z>0){const ie=Math.min(76,Math.max(52,44+Z*2)),Y=Math.min(60,Math.max(42,36+Z*1.5)),pe=U+j,ve=Math.max(ne+58,Math.min(P-Y/2-4,ne+145+K)),me=X+I/2*Math.cos(b),re=$-I/2*Math.sin(b),q=U-j*Math.sin(b),Re=ne-j*Math.cos(b);dr(i,me,re,q,Re),dr(i,pe,ne,pe,ve-Y/2),cc(i,U,ne,j,a.pulleyAngle,M,R),i.save(),i.translate(pe,ve),zr(i,ie,Y,"m₂",Z,"crimson"),i.restore(),S(pe,ve,"m2")}i.save(),i.translate(X,$),i.rotate(-b),zr(i,I,V,"m₁",F,"blue"),i.restore(),d.showComponents&&(i.save(),i.translate(X,$),i.rotate(-b),i.strokeStyle="rgba(148, 163, 184, 0.35)",i.setLineDash([4,4]),i.beginPath(),i.moveTo(-125,0),i.lineTo(125,0),i.moveTo(0,-125),i.lineTo(0,125),i.stroke(),i.restore(),lg(i,X,$,F*(o.g||9.81),T)),S(X,$,"m1");return}if(r==="horizontal_table"){const P=i.createLinearGradient(0,250,0,278);P.addColorStop(0,"#334155"),P.addColorStop(1,"#0f172a"),i.fillStyle=P,i.strokeStyle="#94a3b8",i.lineWidth=2.5,i.beginPath(),i.roundRect(95,250,470,26,4),i.fill(),i.stroke(),i.fillStyle="#1e293b",i.fillRect(123,276,20,175),i.fillRect(517,276,20,175),i.strokeRect(123,276,20,175),i.strokeRect(517,276,20,175),uc(i,105,250,555,250,o.muK);const C=Number(o.m1??5),M=Math.min(92,Math.max(64,54+C*2.2)),R=Math.min(62,Math.max(44,36+C*1.4)),O=a.s*42,F=Math.max(95+M/2+15,Math.min(565-M/2-20,325+O)),I=250-R/2;d.isPlaying&&Math.abs(a.v)>.15&&Number(o.muK)>.02&&Math.random()<.5&&a.particles.push({x:F+(Math.random()-.5)*28,y:248,vx:-Math.sign(a.v)*(35+Math.random()*40),vy:-20-Math.random()*35,size:1.5+Math.random()*2,life:.35});const V=22,K=587,B=242,ee=Number(o.m2??3);if(ee>0){const oe=Math.min(76,Math.max(52,44+ee*2)),X=Math.min(60,Math.max(42,36+ee*1.5)),$=K+V,Z=Math.max(B+60,Math.min(410,310+O));dr(i,F+M/2,I,K,B-V),dr(i,$,B,$,Z-X/2),cc(i,K,B,V,a.pulleyAngle,565,258),i.save(),i.translate($,Z),zr(i,oe,X,"m₂",ee,"crimson"),i.restore(),S($,Z,"m2")}i.save(),i.translate(F,I),zr(i,M,R,"m₁",C,"blue"),i.restore(),S(F,I,"m1");return}if(r==="atwood"){const T=e/2,b=135,w=52;i.strokeStyle="#94a3b8",i.lineWidth=4,i.beginPath(),i.moveTo(T-140,62),i.lineTo(T+140,62),i.stroke(),fs(i,T+140,62,T-140,62,14,10);const P=Number(o.m1??7),C=Number(o.m2??4),M=Math.min(82,Math.max(56,46+P*2)),R=Math.min(64,Math.max(44,36+P*1.5)),O=Math.min(82,Math.max(56,46+C*2)),F=Math.min(64,Math.max(44,36+C*1.5)),I=a.s*42,V=Math.max(205,Math.min(410,295+I)),K=Math.max(205,Math.min(410,295-I)),B=T-w,ee=T+w;i.strokeStyle="rgba(148, 163, 184, 0.3)",i.lineWidth=1.5,i.beginPath(),i.moveTo(T-165,190),i.lineTo(T-165,415);for(let oe=200;oe<=410;oe+=42)i.moveTo(T-172,oe),i.lineTo(T-158,oe);i.stroke(),dr(i,B,b,B,V-R/2),dr(i,ee,b,ee,K-F/2),cc(i,T,b,w,-a.pulleyAngle,T,62),i.save(),i.translate(B,V),zr(i,M,R,"m₁",P,"blue"),i.restore(),i.save(),i.translate(ee,K),zr(i,O,F,"m₂",C,"crimson"),i.restore(),S(B,V,"m1"),S(ee,K,"m2");return}if(r==="spring_block"){const P=Number(o.m1??3),C=Math.min(92,Math.max(66,56+P*2.5)),M=Math.min(68,Math.max(48,40+P*1.8)),R=Math.max(210,Math.min(e-95,465+a.x*78)),O=325-M/2;i.strokeStyle="#94a3b8",i.lineWidth=4,i.beginPath(),i.moveTo(115,145),i.lineTo(115,325),i.lineTo(e-55,325),i.stroke(),fs(i,115,145,115,325,14,-10),fs(i,115,325,e-55,325,16,11),uc(i,125,325,e-65,325,o.muK),i.strokeStyle="rgba(52, 211, 153, 0.5)",i.setLineDash([6,5]),i.lineWidth=2,i.beginPath(),i.moveTo(465,155),i.lineTo(465,353),i.stroke(),i.setLineDash([]),i.fillStyle="#34d399",i.font="bold 12px JetBrains Mono, monospace",i.fillText("x = 0 (Equilibrio)",407,146);const F=16,I=123,V=R-C/2-6,K=O;i.fillStyle="#64748b",i.fillRect(115,K-18,8,36),i.fillRect(V,K-18,6,36);const B=(V-I)/F;for(let ee=0;ee<F;ee++){const oe=I+ee*B,X=I+(ee+.5)*B,$=I+(ee+1)*B;i.strokeStyle="#0369a1",i.lineWidth=4.5,i.beginPath(),i.moveTo(X,K-20),i.lineTo($,K+20),i.stroke(),i.strokeStyle="#7dd3fc",i.lineWidth=4.5,i.beginPath(),i.moveTo(oe,K+20),i.lineTo(X,K-20),i.stroke()}i.save(),i.translate(R,O),zr(i,C,M,"m",P,"blue"),i.restore(),i.strokeStyle="#38bdf8",i.lineWidth=1.8,i.beginPath(),i.moveTo(465,347),i.lineTo(R,347),i.stroke(),i.fillStyle="#38bdf8",i.font="bold 11.5px JetBrains Mono, monospace",i.textAlign="center",i.fillText(`x = ${a.x.toFixed(2)} m`,(465+R)/2,363),S(R,O,"m1");return}if(r==="projectile"){const w=Math.max(30,c.summary.maxRange||50),P=Math.max(14,c.summary.maxHeight||20),C=Math.min((e-210)/w,300/P);i.strokeStyle="#64748b",i.lineWidth=3,i.beginPath(),i.moveTo(40,415),i.lineTo(e-40,415),i.stroke(),fs(i,40,415,e-40,415,18,10);const M=w>80?20:w>35?10:5;i.fillStyle="#94a3b8",i.font="10px JetBrains Mono, monospace",i.textAlign="center";for(let X=0;X<=w*1.1;X+=M){const $=105+X*C;$<e-45&&(i.beginPath(),i.moveTo($,411),i.lineTo($,420),i.stroke(),i.fillText(`${X}m`,$,432))}const R=(o.h0||0)*C;if(R>2){const X=i.createLinearGradient(77,0,133,0);X.addColorStop(0,"#1e293b"),X.addColorStop(.5,"#475569"),X.addColorStop(1,"#1e293b"),i.fillStyle=X,i.strokeStyle="#94a3b8",i.lineWidth=2,i.fillRect(77,415-R,56,R),i.strokeRect(77,415-R,56,R)}const O=(o.angle??45)*Math.PI/180;i.save(),i.translate(105,415-R),i.rotate(-O),i.fillStyle="#334155",i.strokeStyle="#94a3b8",i.lineWidth=2,i.beginPath(),i.roundRect(-8,-9,38,18,4),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(56, 189, 248, 0.25)",i.setLineDash([5,5]),i.lineWidth=2,i.beginPath();const F=c.summary.tFlight||3;for(let X=0;X<=60;X++){const $=X/60*F,Z=c.summary.v0x*$,j=(o.h0||0)+c.summary.v0y*$-.5*(o.g||9.81)*$*$,U=105+Z*C,ne=415-Math.max(0,j)*C;X===0?i.moveTo(U,ne):i.lineTo(U,ne)}i.stroke(),i.setLineDash([]),a.strobePoints.forEach(X=>{const $=105+X.x*C,Z=415-X.y*C;i.fillStyle="rgba(56, 189, 248, 0.28)",i.beginPath(),i.arc($,Z,7,0,Math.PI*2),i.fill()}),i.strokeStyle="#34d399",i.lineWidth=3,i.beginPath(),a.trail.forEach((X,$)=>{const Z=105+X.x*C,j=415-X.y*C;$===0?i.moveTo(Z,j):i.lineTo(Z,j)}),i.stroke();const I=105+a.px*C,V=415-a.py*C;i.fillStyle="rgba(0, 0, 0, 0.45)",i.beginPath(),i.ellipse(I,415,Math.max(5,14-a.py*.2),3.5,0,0,Math.PI*2),i.fill();const K=i.createRadialGradient(I-4,V-4,2,I,V,14);K.addColorStop(0,"#bae6fd"),K.addColorStop(.4,"#0284c7"),K.addColorStop(1,"#0f172a"),i.fillStyle=K,i.strokeStyle="#7dd3fc",i.lineWidth=2,i.beginPath(),i.arc(I,V,13,0,Math.PI*2),i.fill(),i.stroke();const B=(c.summary.v0y||0)/(o.g||9.81),ee=105+(c.summary.v0x||0)*B*C,oe=415-(c.summary.maxHeight||0)*C;i.strokeStyle="rgba(251, 191, 36, 0.45)",i.setLineDash([3,3]),i.beginPath(),i.moveTo(ee,oe),i.lineTo(ee,415),i.stroke(),i.setLineDash([]),i.fillStyle="#fbbf24",i.font="bold 11px JetBrains Mono, monospace",i.fillText(`H_máx = ${(c.summary.maxHeight||0).toFixed(1)}m`,ee,oe-10),S(I,V,"m1");return}if(r==="pendulum"){const T=e/2,b=98,w=Math.min(255,Math.max(130,Number(o.length??3.5)*60)),P=T+w*Math.sin(a.theta),C=b+w*Math.cos(a.theta);i.strokeStyle="#94a3b8",i.lineWidth=4,i.beginPath(),i.moveTo(T-110,b),i.lineTo(T+110,b),i.stroke(),fs(i,T+110,b,T-110,b,14,10),i.strokeStyle="rgba(56, 189, 248, 0.35)",i.lineWidth=1.5,i.beginPath(),i.arc(T,b,56,0,Math.PI),i.stroke(),i.strokeStyle="rgba(148, 163, 184, 0.3)",i.setLineDash([5,5]),i.beginPath(),i.moveTo(T,b),i.lineTo(T,b+w+35),i.stroke(),i.setLineDash([]),a.pendulumTrail.length>1&&(i.strokeStyle="rgba(56, 189, 248, 0.35)",i.lineWidth=3,i.beginPath(),a.pendulumTrail.forEach((F,I)=>{const V=T+w*Math.sin(F.theta),K=b+w*Math.cos(F.theta);I===0?i.moveTo(V,K):i.lineTo(V,K)}),i.stroke()),dr(i,T,b,P,C),i.fillStyle="#e2e8f0",i.beginPath(),i.arc(T,b,6,0,Math.PI*2),i.fill();const M=Number(o.m1??2.5),R=Math.min(34,Math.max(22,18+M*2.5)),O=i.createRadialGradient(P-R*.3,C-R*.3,3,P,C,R);O.addColorStop(0,"#bae6fd"),O.addColorStop(.45,"#0284c7"),O.addColorStop(1,"#0f172a"),i.fillStyle=O,i.strokeStyle="#7dd3fc",i.lineWidth=2.2,i.beginPath(),i.arc(P,C,R,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.font="bold 11.5px JetBrains Mono, monospace",i.textAlign="center",i.fillText(`${M}kg`,P,C+4),S(P,C,"m1");return}if(r==="sandbox_game"){const T=d.sandboxObjects||[],b=d.sandboxRopes||[],w=a.s*32;b.forEach(P=>{const C=T.find(oe=>oe.id===P.fromId),M=T.find(oe=>oe.id===P.toId);if(!C||!M)return;const R=(Number(C.angleDeg)||0)*Math.PI/180,O=(Number(M.angleDeg)||0)*Math.PI/180,F=C.x+(C.type==="hanging_mass"?0:w*Math.cos(R)),I=C.y+(C.type==="hanging_mass"?w:-w*Math.sin(R)),V=M.x+(M.type==="hanging_mass"?0:w*Math.cos(O)),K=M.y+(M.type==="hanging_mass"?w:-w*Math.sin(O)),B=(C.x+M.x)/2,ee=Math.min(C.y,M.y)-65;dr(i,F,I,B,ee),dr(i,B,ee,V,K),cc(i,B,ee,19,a.pulleyAngle,B,ee-28)}),T.forEach(P=>{const C=(Number(P.angleDeg)||0)*Math.PI/180,M=d.selectedObjId===P.id,R=d.connectingFromId===P.id,O=P.type==="hanging_mass"?P.x:P.x+w*Math.cos(C),F=P.type==="hanging_mass"?P.y+w:P.y-w*Math.sin(C),I=Number(P.mass||5),V=Math.min(88,Math.max(60,50+I*2)),K=Math.min(60,Math.max(44,36+I*1.4));i.save(),i.translate(O,F),P.type!=="hanging_mass"&&(i.rotate(-C),i.strokeStyle="#94a3b8",i.lineWidth=3.5,i.beginPath(),i.moveTo(-105,K/2+2),i.lineTo(105,K/2+2),i.stroke(),fs(i,-105,K/2+2,105,K/2+2,14,9),uc(i,-100,K/2+2,100,K/2+2,P.mu)),zr(i,V,K,P.label,I,P.type==="hanging_mass"?"crimson":"blue",M||R),i.restore(),d.showComponents&&P.type!=="hanging_mass"&&Number(P.angleDeg)>0&&lg(i,O,F,I*(o.g||9.81),Number(P.angleDeg)),S(O,F,P.id)});return}}function Jb({solver:i}){if(!i)return null;const e=i.fbdBodies||[],t=i.steps||[];return k.jsxs("div",{className:"space-y-3.5",children:[k.jsxs("div",{className:"bg-[#050507] border border-white/15 rounded-2xl p-4 sm:p-5",children:[k.jsxs("div",{className:"flex items-center justify-between mb-3.5 border-b border-white/15 pb-3",children:[k.jsxs("div",{className:"flex items-center gap-2.5",children:[k.jsx("div",{className:"w-7 h-7 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white",children:k.jsx(px,{className:"w-3.5 h-3.5"})}),k.jsxs("div",{children:[k.jsx("h3",{className:"font-heading text-xs sm:text-sm font-medium text-white tracking-[0.16em] uppercase",children:"VECTORES DE CUERPO LIBRE // PARTÍCULA PUNTUAL (DCL)"}),k.jsx("p",{className:"font-tech text-[10px] tracking-[0.12em] text-white/45",children:"PROYECCIÓN CARTESIANA ROTADA EN EL CENTRO DE MASA (CM)"})]})]}),k.jsxs("span",{className:"font-tech text-[10px] tracking-[0.15em] px-3 py-0.5 rounded-full bg-black text-white border border-white/25",children:["NODOS ACTIVOS: 0",e.length]})]}),k.jsx("div",{className:`grid gap-3.5 ${e.length>1?"grid-cols-1 md:grid-cols-2":"grid-cols-1"}`,children:e.map(r=>k.jsxs("div",{className:"bg-[#0e1119] border border-[#202637] rounded-lg p-3 flex flex-col justify-between",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center justify-between border-b border-[#1c2232] pb-2 mb-2.5",children:[k.jsxs("div",{children:[k.jsx("h4",{className:"font-tech text-xs font-bold text-zinc-100 uppercase",children:r.label}),k.jsx("p",{className:"font-tech text-[10px] text-zinc-500",children:r.subtitle})]}),r.axisAngleDeg!==0&&k.jsxs("span",{className:"font-tech text-[10px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/35 font-semibold",children:["θ = ",r.axisAngleDeg,"°"]})]}),k.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[k.jsx("div",{className:"w-40 h-40 shrink-0 bg-[#07090e] rounded-lg border border-[#1f2536] flex items-center justify-center relative shadow-inner",children:k.jsx(Qb,{body:r})}),k.jsx("div",{className:"flex-1 w-full space-y-1 font-tech",children:r.vectors.map(o=>k.jsxs("div",{className:"flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#131722] border border-[#20273a]",children:[k.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[k.jsx("span",{className:"w-2 h-2 rounded-full shrink-0 shadow-xs",style:{backgroundColor:o.color}}),k.jsxs("div",{className:"truncate",children:[k.jsx("span",{className:"font-bold text-zinc-200",children:o.symbol}),k.jsxs("span",{className:"text-zinc-500 text-[10px] ml-1.5 hidden xs:inline",children:["(",o.name,")"]})]})]}),k.jsxs("span",{className:"font-bold text-[10.5px] ml-2 shrink-0",style:{color:o.color},children:[o.magnitude.toFixed(1)," N"]})]},o.id))})]})]}),k.jsxs("div",{className:"mt-3 pt-2 border-t border-[#1a1f2c] space-y-1",children:[k.jsx("div",{className:"font-tech text-[9.5px] uppercase tracking-wider text-zinc-500 font-semibold",children:"∑F⃗ = m·a⃗ (2ª LEY DE NEWTON):"}),r.equations.map((o,a)=>k.jsx("div",{className:"font-tech text-[11px] text-emerald-300 bg-[#07130e] border border-emerald-900/60 rounded px-2.5 py-1 font-medium",children:o},a))]})]},r.id))})]}),k.jsxs("div",{className:"bg-[#0b0d13] border border-[#212738] rounded-xl p-3.5 sm:p-4 shadow-xl",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-3 border-b border-[#1c2230] pb-2.5",children:[k.jsx("div",{className:"w-6 h-6 rounded bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400",children:k.jsx(mx,{className:"w-3.5 h-3.5"})}),k.jsxs("div",{children:[k.jsx("h3",{className:"font-heading text-xs sm:text-sm font-bold text-zinc-100 tracking-wide uppercase",children:"DESGLOSE ANALÍTICO SECUENCIAL"}),k.jsx("p",{className:"font-tech text-[10.5px] text-zinc-500",children:"RECALCULADO DINÁMICO EN VIVO ANTE CUALQUIER VARIACIÓN"})]})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:t.map((r,o)=>k.jsxs("div",{className:"bg-[#0e1119] border border-[#202637] rounded-lg p-3 space-y-1.5",children:[k.jsxs("div",{className:"flex items-center gap-1.5 font-tech text-xs font-bold text-amber-300",children:[k.jsx(fx,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),k.jsx("span",{children:r.title})]}),k.jsx("p",{className:"text-[11.5px] text-zinc-400 leading-relaxed",children:r.detail}),k.jsx("div",{className:"font-tech text-[11px] text-amber-200 bg-[#07090f] border border-[#1e2434] rounded px-2.5 py-1.5 overflow-x-auto",children:r.formula})]},o))})]})]})}function Qb({body:i}){const r=Math.max(10,...i.vectors.map(a=>a.magnitude)),o=-(i.axisAngleDeg||0);return k.jsxs("svg",{viewBox:"0 0 160 160",className:"w-full h-full",children:[k.jsx("circle",{cx:80,cy:80,r:58,fill:"none",stroke:"rgba(245, 158, 11, 0.1)",strokeDasharray:"2 3"}),k.jsx("circle",{cx:80,cy:80,r:32,fill:"none",stroke:"rgba(255, 255, 255, 0.05)"}),k.jsxs("g",{transform:`rotate(${o} 80 80)`,children:[k.jsx("line",{x1:15,y1:80,x2:145,y2:80,stroke:"rgba(148, 163, 184, 0.28)",strokeWidth:"1.2",strokeDasharray:"3 3"}),k.jsx("line",{x1:80,y1:15,x2:80,y2:145,stroke:"rgba(148, 163, 184, 0.28)",strokeWidth:"1.2",strokeDasharray:"3 3"}),k.jsx("text",{x:134,y:76,fill:"#64748b",fontSize:"8.5",fontFamily:"monospace",children:"+X'"}),k.jsx("text",{x:84,y:26,fill:"#64748b",fontSize:"8.5",fontFamily:"monospace",children:"+Y'"})]}),i.vectors.map(a=>{if(a.magnitude<.05)return null;const c=Math.max(22,Math.min(56,a.magnitude/r*54)),d=-a.angleDeg*Math.PI/180,h=80+c*Math.cos(d),f=80+c*Math.sin(d),m=5.5,x=Math.atan2(f-80,h-80),v=h-m*Math.cos(x-Math.PI/6),g=f-m*Math.sin(x-Math.PI/6),E=h-m*Math.cos(x+Math.PI/6),A=f-m*Math.sin(x+Math.PI/6),y=80+(c+12)*Math.cos(d),S=80+(c+12)*Math.sin(d),T=a.symbol.split("=")[0].trim();return k.jsxs("g",{children:[k.jsx("line",{x1:80,y1:80,x2:h,y2:f,stroke:a.color,strokeWidth:a.dashed?"1.6":"2.4",strokeDasharray:a.dashed?"3 2":void 0}),k.jsx("polygon",{points:`${h},${f} ${v},${g} ${E},${A}`,fill:a.color}),k.jsx("text",{x:y,y:S+3,fill:a.color,fontSize:"9",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:T})]},a.id)}),k.jsx("circle",{cx:80,cy:80,r:4.5,fill:"#f59e0b",stroke:"#000000",strokeWidth:"2"})]})}function e2(i){const e=document.createElement("canvas");e.width=760,e.height=420;const t=e.getContext("2d");t.fillStyle="#0f172a",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(148, 163, 184, 0.08)",t.lineWidth=1;for(let o=0;o<e.width;o+=24)t.beginPath(),t.moveTo(o,0),t.lineTo(o,e.height),t.stroke();for(let o=0;o<e.height;o+=24)t.beginPath(),t.moveTo(0,o),t.lineTo(e.width,o),t.stroke();t.fillStyle="#38bdf8",t.font="bold 16px Inter, sans-serif",t.fillText(`PROBLEMA DE MECÁNICA — ${i.badge.toUpperCase()}`,28,36),t.fillStyle="#e2e8f0",t.font="14px Inter, sans-serif",t2(t,i.statement,28,64,704,21);const r=i.params||{};return t.save(),t.translate(0,145),i.sceneType==="incline_pulley"?(t.strokeStyle="#94a3b8",t.fillStyle="rgba(51, 65, 85, 0.6)",t.lineWidth=2.5,t.beginPath(),t.moveTo(120,220),t.lineTo(420,220),t.lineTo(420,70),t.closePath(),t.fill(),t.stroke(),t.strokeStyle="#38bdf8",t.beginPath(),t.arc(120,220,48,-Math.atan2(150,300),0),t.stroke(),t.fillStyle="#38bdf8",t.font="bold 14px JetBrains Mono, monospace",t.fillText(`θ = ${r.angle}°`,175,210),t.strokeStyle="#fbbf24",t.fillStyle="#1e293b",t.beginPath(),t.arc(435,62,18,0,Math.PI*2),t.fill(),t.stroke(),t.save(),t.translate(270,145),t.rotate(-Math.atan2(150,300)),t.fillStyle="#0284c7",t.strokeStyle="#7dd3fc",t.fillRect(-35,-44,70,44),t.strokeRect(-35,-44,70,44),t.fillStyle="#ffffff",t.font="bold 14px JetBrains Mono, monospace",t.fillText(`m₁=${r.m1}kg`,-30,-18),t.restore(),t.strokeStyle="#fbbf24",t.lineWidth=2.5,t.beginPath(),t.moveTo(295,115),t.lineTo(427,48),t.moveTo(453,62),t.lineTo(453,150),t.stroke(),t.fillStyle="#e11d48",t.strokeStyle="#fda4af",t.fillRect(423,150,60,46),t.strokeRect(423,150,60,46),t.fillStyle="#ffffff",t.fillText(`m₂=${r.m2}kg`,427,178),t.fillStyle="#fb923c",t.fillText(`μ_k = ${r.muK}`,520,120)):i.sceneType==="atwood"?(t.strokeStyle="#fbbf24",t.fillStyle="#1e293b",t.lineWidth=3,t.beginPath(),t.arc(380,65,32,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(348,65),t.lineTo(348,165),t.moveTo(412,65),t.lineTo(412,195),t.stroke(),t.fillStyle="#0284c7",t.fillRect(316,165,64,48),t.fillStyle="#e11d48",t.fillRect(380,195,64,48),t.fillStyle="#fff",t.font="bold 14px JetBrains Mono, monospace",t.fillText(`m₁=${r.m1}kg`,320,194),t.fillText(`m₂=${r.m2}kg`,384,224)):(t.strokeStyle="#38bdf8",t.lineWidth=2,t.strokeRect(120,60,520,170),t.fillStyle="#7dd3fc",t.font="bold 16px JetBrains Mono, monospace",t.fillText(`Esquema: ${i.title}`,150,110),t.fillStyle="#cbd5e1",t.font="14px JetBrains Mono, monospace",t.fillText(`Parámetros detectables: ${JSON.stringify(r)}`,150,150)),t.restore(),e.toDataURL("image/png")}function t2(i,e,t,r,o,a){const c=e.split(" ");let d="",h=r;for(let f=0;f<c.length;f++){const m=d+c[f]+" ";i.measureText(m).width>o&&f>0?(i.fillText(d,t,h),d=c[f]+" ",h+=a):d=m}i.fillText(d,t,h)}function n2({messages:i,isLoading:e,onSendMessage:t,onSelectSampleProblem:r}){const[o,a]=Mt.useState(""),[c,d]=Mt.useState(null),[h,f]=Mt.useState("image/png"),[m,x]=Mt.useState(!1),v=Mt.useRef(null),g=Mt.useRef(null),E=b=>{if(!b||!b.type.startsWith("image/"))return;f(b.type);const w=new FileReader;w.onload=P=>{d(P.target.result)},w.readAsDataURL(b)},A=b=>{var P;const w=(P=b.clipboardData)==null?void 0:P.items;if(w){for(const C of w)if(C.type.startsWith("image/")){const M=C.getAsFile();E(M);break}}},y=b=>{var P,C;b.preventDefault(),x(!1);const w=(C=(P=b.dataTransfer)==null?void 0:P.files)==null?void 0:C[0];w&&E(w)},S=b=>{b.preventDefault(),!(!o.trim()&&!c||e)&&(t({text:o.trim()||"Analiza esta imagen del problema de mecánica, genera el simulador interactivo, los diagramas de cuerpo libre (DCL) y resuélvelo paso a paso.",imageBase64:c,imageMimeType:h}),a(""),d(null))},T=b=>{const w=e2(b);d(w),f("image/png"),a(b.statement),r&&r(b)};return k.jsxs("div",{onPaste:A,onDragOver:b=>{b.preventDefault(),x(!0)},onDragLeave:()=>x(!1),onDrop:y,className:"relative flex flex-col h-full bg-[#050507] border border-white/15 rounded-2xl overflow-hidden",children:[m&&k.jsx("div",{className:"absolute inset-0 z-30 bg-black/85 backdrop-blur-sm border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center",children:k.jsx("p",{className:"text-xs tracking-[0.26em] uppercase text-white font-tech",children:"SUELTA LA IMAGEN AQUÍ"})}),k.jsxs("div",{className:"px-5 py-3.5 bg-black border-b border-white/15 flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-xs font-medium text-white uppercase tracking-[0.22em]",children:"ASISTENTE DE FÍSICA"}),k.jsx("p",{className:"text-[10px] text-white/45 tracking-[0.14em] uppercase font-tech mt-0.5",children:"ANÁLISIS Y VISIÓN ARTIFICIAL"})]}),k.jsxs("div",{className:"flex items-center gap-2 text-[9.5px] font-tech tracking-[0.2em] uppercase text-white/60",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/80"}),k.jsx("span",{children:"BEDROCK"})]})]}),k.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-6",children:[i.map(b=>{var w;return k.jsx("div",{className:`flex flex-col animate-fade-up ${b.role==="user"?"items-end":"items-start"}`,children:b.role==="user"?k.jsxs("div",{className:"max-w-[85%] bg-[#141418] border border-white/15 rounded-2xl rounded-br-sm px-4 py-3 text-xs text-white leading-relaxed",children:[b.image&&k.jsx("img",{src:b.image,alt:"Problema enviado",className:"max-h-40 rounded-xl border border-white/15 mb-2.5 object-contain bg-black"}),k.jsx("p",{className:"whitespace-pre-wrap",children:b.content})]}):k.jsxs("div",{className:"max-w-[94%] border-l border-white/25 pl-4 py-0.5 text-xs text-white/80 leading-relaxed space-y-2.5",children:[b.image&&k.jsx("img",{src:b.image,alt:"Imagen",className:"max-h-40 rounded-xl border border-white/15 mb-2 object-contain bg-black"}),k.jsx(i2,{text:b.content}),b.graphRag&&k.jsxs("div",{className:"mt-2 pt-2 border-t border-white/10 flex flex-wrap items-center gap-2 text-[9.5px] font-tech tracking-[0.1em] uppercase text-white/50",children:[k.jsxs("span",{className:"px-2 py-0.5 rounded-full border border-white/20 text-white/80",children:["GRAPH RAG · ",b.graphRag.nodesUsed," NODOS · ",b.graphRag.factsVerified," HECHOS VERIFICADOS"]}),(w=b.graphRag.laws)==null?void 0:w.slice(0,2).map(P=>k.jsx("span",{className:"px-2 py-0.5 rounded-full bg-white/5 border border-white/10",children:P},P))]}),b.graphData&&k.jsx(r2,{graphData:b.graphData})]})},b.id)}),e&&k.jsxs("div",{className:"flex items-center gap-2.5 text-[11px] font-tech tracking-[0.14em] uppercase text-white/65 pl-4 border-l border-white/25 py-1",children:[k.jsx(Ex,{className:"w-3.5 h-3.5 animate-spin text-white"}),k.jsx("span",{children:"ANALIZANDO PROBLEMA..."})]}),k.jsx("div",{ref:g})]}),c&&k.jsxs("div",{className:"mx-5 mb-2 p-2 bg-black border border-white/20 rounded-xl flex items-center gap-3",children:[k.jsx("img",{src:c,alt:"Vista previa",className:"h-12 w-20 object-cover rounded-lg border border-white/15"}),k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("p",{className:"text-[10.5px] text-white font-tech tracking-[0.12em] uppercase",children:"IMAGEN ADJUNTA"}),k.jsx("p",{className:"text-[10px] text-white/50 truncate",children:"Lista para analizar y cargar en el simulador"})]}),k.jsx("button",{type:"button",onClick:()=>d(null),className:"p-1.5 text-white/50 hover:text-white transition cursor-pointer",title:"Quitar imagen",children:k.jsx(Nx,{className:"w-3.5 h-3.5"})})]}),k.jsxs("form",{onSubmit:S,className:"p-4 bg-black border-t border-white/15 space-y-2.5",children:[k.jsxs("div",{className:"flex items-end gap-2.5",children:[k.jsx("textarea",{rows:2,value:o,onChange:b=>a(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),S(b))},placeholder:"Escribe un problema o pega una imagen (Ctrl+V)...",className:"flex-1 bg-[#0a0a0d] border border-white/15 focus:border-white/50 focus:outline-none rounded-2xl px-4 py-2.5 text-xs text-white placeholder-white/35 resize-none transition"}),k.jsx("button",{type:"submit",disabled:e||!o.trim()&&!c,className:"h-10 w-10 rounded-full bg-white text-black hover:bg-white/90 disabled:opacity-25 flex items-center justify-center transition cursor-pointer shrink-0",title:"Enviar",children:k.jsx(Rx,{className:"w-4 h-4"})})]}),k.jsxs("div",{className:"flex items-center justify-between text-[10px] font-tech tracking-[0.16em] uppercase text-white/50",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsxs("button",{type:"button",onClick:()=>{var b;return(b=v.current)==null?void 0:b.click()},className:"inline-flex items-center gap-1.5 hover:text-white transition cursor-pointer",children:[k.jsx(yx,{className:"w-3.5 h-3.5"}),k.jsx("span",{children:"SUBIR IMAGEN"})]}),k.jsx("input",{ref:v,type:"file",accept:"image/*",className:"hidden",onChange:b=>{var w;return E((w=b.target.files)==null?void 0:w[0])}}),k.jsxs("button",{type:"button",onClick:()=>{const b=qm[Math.floor(Math.random()*qm.length)];T(b)},className:"inline-flex items-center gap-1.5 hover:text-white transition cursor-pointer",children:[k.jsx(Qd,{className:"w-3.5 h-3.5"}),k.jsx("span",{children:"EJEMPLO"})]})]}),k.jsx("span",{className:"hidden sm:inline text-white/35",children:"ENTER PARA ENVIAR"})]})]})]})}function i2({text:i}){if(!i)return null;const e=i.split(/(```[\s\S]*?```)/g);return k.jsx("div",{className:"space-y-2.5",children:e.map((t,r)=>{if(t.startsWith("```")&&t.endsWith("```")){const a=t.replace(/^```\w*\n?/,"").replace(/```$/,"");return k.jsx("pre",{className:"bg-black border border-white/15 text-white/90 font-tech text-[11px] p-3 overflow-x-auto",children:a},r)}const o=t.split(`
`);return k.jsx("div",{className:"space-y-1.5",children:o.map((a,c)=>{const d=a.trim();return d?d==="---"?k.jsx("hr",{className:"border-white/15 my-2.5"},c):d.startsWith("### ")?k.jsx("h4",{className:"text-[11.5px] font-semibold text-white pt-1 tracking-[0.14em] uppercase",children:d.replace("### ","")},c):d.startsWith("#### ")?k.jsx("h5",{className:"text-xs font-medium text-white/90 pt-1",children:d.replace("#### ","")},c):d.startsWith("- ")?k.jsxs("div",{className:"flex items-start gap-2 pl-1",children:[k.jsx("span",{className:"text-white/50",children:"•"}),k.jsx("span",{dangerouslySetInnerHTML:{__html:cg(d.slice(2))}})]},c):k.jsx("p",{dangerouslySetInnerHTML:{__html:cg(a)}},c):k.jsx("div",{className:"h-1"},c)})},r)})})}function cg(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-semibold">$1</strong>').replace(/\*(.*?)\*/g,'<em class="text-white/75">$1</em>').replace(/`(.*?)`/g,'<code class="font-tech text-[11px] bg-white/10 text-white px-1.5 py-0.5 rounded">$1</code>')}function r2({graphData:i}){var a;if(!i||!((a=i.nodes)!=null&&a.length))return null;const{title:e,nodes:t,edges:r=[]}=i,o=Object.fromEntries(t.map(c=>[c.id,c]));return k.jsxs("div",{className:"mt-3 bg-black border border-white/15 rounded-xl p-3",children:[k.jsx("div",{className:"text-[10px] font-tech tracking-[0.16em] uppercase text-white/60 mb-2",children:e||"GRAFO DE INTERACCIÓN FÍSICA"}),k.jsxs("svg",{viewBox:"0 0 510 165",className:"w-full h-auto",children:[k.jsx("defs",{children:k.jsx("marker",{id:"graph-arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:k.jsx("path",{d:"M0,0 L6,3 L0,6 Z",fill:"rgba(255,255,255,0.55)"})})}),r.map((c,d)=>{const h=o[c.from],f=o[c.to];if(!h||!f)return null;const m=(h.x+f.x)/2,x=(h.y+f.y)/2-6;return k.jsxs("g",{children:[k.jsx("line",{x1:h.x,y1:h.y,x2:f.x,y2:f.y,stroke:"rgba(255,255,255,0.3)",strokeWidth:"1.2",markerEnd:"url(#graph-arrow)"}),c.label&&k.jsx("text",{x:m,y:x,textAnchor:"middle",fill:"rgba(255,255,255,0.75)",fontSize:"8.5",fontFamily:"Chivo Mono, monospace",children:c.label})]},d)}),t.map(c=>{const d=c.kind==="mass";return k.jsxs("g",{transform:`translate(${c.x}, ${c.y})`,children:[k.jsx("rect",{x:"-40",y:"-13",width:"80",height:"26",rx:"13",fill:d?"#ffffff":"#0b0b0f",stroke:d?"#ffffff":"rgba(255,255,255,0.4)",strokeWidth:"1.2"}),k.jsx("text",{x:"0",y:"3.5",textAnchor:"middle",fill:d?"#000000":"#ffffff",fontSize:"9.5",fontWeight:d?"700":"500",fontFamily:"Montserrat, sans-serif",children:c.label})]},c.id)})]})]})}function s2(){var R;const[i,e]=Mt.useState(!0),[t,r]=Mt.useState("incline_pulley"),[o,a]=Mt.useState(()=>{const O={};return Object.keys(vi).forEach(F=>{O[F]={...vi[F].params}}),O}),[c,d]=Mt.useState([{id:"b1",type:"block",label:"m₁",mass:6,angleDeg:28,mu:.15,fExt:0,x:270,y:255},{id:"b2",type:"hanging_mass",label:"m₂",mass:4.5,angleDeg:0,mu:0,fExt:0,x:560,y:265}]),[h,f]=Mt.useState([{id:"r1",fromId:"b1",toId:"b2"}]),m={mode:"auto"},x=o[t]||vi.incline_pulley.params,[v,g]=Mt.useState(()=>eh("incline_pulley",vi.incline_pulley.params,{})),E=O=>{a(F=>({...F,[t]:{...F[t],...O}}))},A=Mt.useCallback(O=>{g(O)},[]),[y,S]=Mt.useState([{id:"welcome",role:"assistant",content:`### Asistente de Mecánica Clásica

Sistema calibrado en **${(x.g||9.81).toFixed(2)} m/s²**.

Puedes escribir un enunciado físico, pegar una imagen con \`Ctrl+V\` o cargar un ejemplo para generar la simulación 3D y su solución paso a paso.`}]),[T,b]=Mt.useState(!1),w=async({text:O,imageBase64:F=null,imageMimeType:I="image/png"})=>{var B;const V={id:`user_${Date.now()}`,role:"user",content:O,image:F};S(ee=>[...ee,V]),b(!0);const K=eh(t,x,{sandboxObjects:c,sandboxRopes:h});try{const oe=await(await fetch("/api/solve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:O,imageBase64:F,imageMimeType:I,sceneState:{sceneType:t,params:x,sandboxObjects:c,sandboxRopes:h},solverResult:K,awsConfig:m})})).json();if(oe.simulatorUpdate&&oe.simulatorUpdate.sceneType&&vi[oe.simulatorUpdate.sceneType]){const X=oe.simulatorUpdate.sceneType;r(X),oe.simulatorUpdate.params&&a($=>({...$,[X]:{...$[X],...oe.simulatorUpdate.params}}))}S(X=>[...X,{id:`bot_${Date.now()}`,role:"assistant",content:oe.reply||"Problema procesado e inyectado al simulador.",provider:oe.provider||"AWS Bedrock Runtime",graphData:oe.graphData||null,graphRag:oe.graphRag||null}])}catch{const ee=`### 📊 DEDUCCIÓN ANALÍTICA LOCAL (${(B=vi[t])==null?void 0:B.name})
- **Estado Dinámico:** ${K.motionState}
- **Aceleración Neta:** \`${Number(K.summary.acceleration||0).toFixed(3)} m/s²\`
${K.summary.tension?`- **Tensión en Tensor (T):** \`${Number(K.summary.tension).toFixed(2)} N\`
`:""}
---
`+K.steps.map(oe=>`### ${oe.title}
${oe.detail}
\`\`\`
${oe.formula}
\`\`\``).join(`

`);S(oe=>[...oe,{id:`bot_${Date.now()}`,role:"assistant",content:ee,provider:"Local Solver Core // Offline"}])}finally{b(!1)}},P=()=>{var I;const O=((I=vi[t])==null?void 0:I.name)||t,F=t==="sandbox_game"?`Resuelve analíticamente el sistema personalizado: ${c.length} cuerpos (${c.map(V=>`${V.label}=${V.mass}kg en ${V.type==="hanging_mass"?"suspensión vertical":`rampa θ=${V.angleDeg}° con μ=${V.mu}`}`).join(", ")}) y ${h.length} acoplamientos con cuerda. Desglosa los Diagramas de Cuerpo Libre (DCL), la sumatoria de fuerzas en coordenadas rotadas y calcula la aceleración y tensión numéricas.`:`Resuelve paso a paso el problema actual (${O}) con parámetros ${JSON.stringify(x)}, detallando cada vector de fuerza en el Diagrama de Cuerpo Libre (DCL) y aplicando las leyes de Newton.`;w({text:F})},C=O=>{O.sceneType&&vi[O.sceneType]&&(r(O.sceneType),a(F=>({...F,[O.sceneType]:{...F[O.sceneType],...O.params}})))},M=Object.keys(vi);return i?k.jsx(Lb,{onEnterSimulator:O=>{O&&vi[O]&&r(O),e(!1)}}):k.jsxs("div",{className:"min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white/20 selection:text-white",children:[k.jsx("nav",{className:"sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3",children:k.jsxs("div",{className:"max-w-[1680px] mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none",children:[k.jsxs("button",{onClick:()=>e(!0),className:"flex items-center gap-2 pr-4 border-r border-white/15 text-white/75 hover:text-white transition cursor-pointer shrink-0",title:"Volver al inicio",children:[k.jsx(ux,{className:"w-3.5 h-3.5"}),k.jsx("span",{className:"text-xs font-semibold tracking-[0.28em] uppercase",children:"PHYSILAB"})]}),k.jsx("div",{className:"flex items-center gap-1.5",children:M.map(O=>{const F=vi[O],I=t===F.id,V=F.id==="sandbox_game",K={incline_pulley:"Plano Inclinado",horizontal_table:"Mesa + Polea",atwood:"Atwood",spring_block:"Resorte",projectile:"Proyectil",pendulum:"Péndulo",sandbox_game:"Constructor"};return k.jsxs("button",{onClick:()=>r(F.id),className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition cursor-pointer ${I?"bg-white text-black font-semibold":"text-white/55 hover:text-white hover:bg-white/5"}`,children:[V&&k.jsx(_x,{className:`w-3.5 h-3.5 ${I?"text-black":"text-white/60"}`}),k.jsx("span",{children:K[F.id]||F.shortName})]},F.id)})})]})}),k.jsxs("main",{className:"flex-1 max-w-[1680px] w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5",children:[k.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[k.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-1",children:[k.jsx("div",{children:k.jsx("h2",{className:"font-heading text-base font-medium text-white tracking-[0.08em]",children:(R=vi[t])==null?void 0:R.name})}),k.jsxs("div",{className:"flex items-center gap-1.5 bg-[#0a0a0d] border border-white/15 rounded-full px-3 py-1",children:[k.jsx(gx,{className:"w-3.5 h-3.5 text-white/60"}),k.jsx("select",{value:x.g??9.81,onChange:O=>E({g:Number(O.target.value)}),className:"bg-transparent text-xs text-white focus:outline-none cursor-pointer pr-1","aria-label":"Campo gravitatorio",children:Lx.map(O=>k.jsxs("option",{value:O.g,className:"bg-black text-white",children:[O.name," (",O.g," m/s²)"]},O.id))})]})]}),k.jsx(jb,{sceneType:t,params:x,onParamsChange:E,sandboxObjects:c,setSandboxObjects:d,sandboxRopes:h,setSandboxRopes:f,onSolveCurrentSceneWithAI:P,onLiveSolverUpdate:A}),k.jsx(Jb,{solver:v})]}),k.jsx("div",{className:"lg:col-span-5 lg:sticky lg:top-16 lg:h-[calc(100vh-5.5rem)] flex flex-col",children:k.jsx("div",{className:"flex-1 min-h-0 flex flex-col h-full",children:k.jsx(n2,{messages:y,isLoading:T,onSendMessage:w,onSelectSampleProblem:C})})})]}),k.jsxs("footer",{className:"border-t border-[#1b1f2b] bg-[#090b10] px-4 py-2 text-[11px] font-tech text-zinc-500 flex flex-wrap items-center justify-between gap-2",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("span",{children:"PHYSILAB BENCH // CLASSICAL DYNAMICS SIMULATOR"}),k.jsx("span",{className:"hidden sm:inline text-zinc-600",children:"|"}),k.jsx("span",{className:"hidden sm:inline",children:"COORDINATES: DCL-LOCAL (X'-Y')"})]}),k.jsx("div",{className:"flex items-center gap-3",children:k.jsxs("span",{className:"text-zinc-400",children:["AWS BEDROCK RUNTIME: ",k.jsx("strong",{className:"text-emerald-400 font-normal",children:"ENABLED"})]})})]})]})}ox.createRoot(document.getElementById("root")).render(k.jsx(Q_.StrictMode,{children:k.jsx(s2,{})}));
