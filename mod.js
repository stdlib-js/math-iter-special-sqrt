// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function _(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,l,f,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(c(n=r[s]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=P.exec(r);n;)(t=r.slice(o,P.lastIndex-n[0].length)).length&&e.push(t),e.push(k(n)),o=P.lastIndex,n=P.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function A(r){return"string"==typeof r}function B(r){var t,e,n;if(!A(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=V(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var F,C=Object.prototype,L=C.toString,G=C.__defineGetter__,I=C.__defineSetter__,M=C.__lookupGetter__,N=C.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(M.call(r,t)||N.call(r,t)?(n=r.__proto__,r.__proto__=C,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var R=F;function $(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var U=/./;function X(r){return"boolean"==typeof r}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function q(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,t){return null!=r&&D.call(r,t)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(r){var t,e,n;if(null==r)return z.call(r);e=r[K],t=H(r,K);try{r[K]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[K]=e:delete r[K],n}:function(r){return z.call(r)},Y=Boolean,rr=Boolean.prototype.toString;var tr=q();function er(r){return"object"==typeof r&&(r instanceof Y||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return X(r)||er(r)}function or(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ur?ur:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=fr.document&&fr.document.childNodes,pr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;$(yr,"REGEXP",br);var vr=Z();var gr=Object.prototype.toString;var dr="function"==typeof J?J.toStringTag:"";var wr,hr=vr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return gr.call(r);e=r[dr],t=H(r,dr);try{r[dr]=void 0}catch(t){return gr.call(r)}return n=gr.call(r),t?r[dr]=e:delete r[dr],n}:function(r){return gr.call(r)};wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===hr(r)};var _r=wr;function mr(r){return null!==r&&"object"==typeof r}var jr=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(mr);function Sr(r){var t,e,n,o;if(("Object"===(e=Q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=br.exec(n.toString()))return t[1]}return mr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(mr,"isObjectLikeArray",jr);var Er="function"==typeof U||"object"==typeof pr||"function"==typeof sr?function(r){return Sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Sr(r).toLowerCase():t};function Or(r){return"function"===Er(r)}var Tr=/./,xr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Pr,kr=Object.defineProperty,Vr=Object.prototype,Ar=Vr.toString,Br=Vr.__defineGetter__,Fr=Vr.__defineSetter__,Cr=Vr.__lookupGetter__,Lr=Vr.__lookupSetter__;Pr=function(){try{return xr({},"x",{}),!0}catch(r){return!1}}()?kr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Ar.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Ar.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Cr.call(r,t)||Lr.call(r,t)?(n=r.__proto__,r.__proto__=Vr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Br&&Br.call(r,t,e.get),a&&Fr&&Fr.call(r,t,e.set),r};var Gr=Pr;function Ir(r,t,e){Gr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Mr(r){return"boolean"==typeof r}var Nr=Z();function Rr(){return Nr&&"symbol"==typeof Symbol.toStringTag}var $r=Object.prototype.toString;var Ur="function"==typeof J?J.toStringTag:"";var Xr=Rr()?function(r){var t,e,n;if(null==r)return $r.call(r);e=r[Ur],t=H(r,Ur);try{r[Ur]=void 0}catch(t){return $r.call(r)}return n=$r.call(r),t?r[Ur]=e:delete r[Ur],n}:function(r){return $r.call(r)},Zr=Boolean.prototype.toString;var Wr=Rr();function qr(r){return"object"==typeof r&&(r instanceof Y||(Wr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Xr(r)))}function zr(r){return Mr(r)||qr(r)}function Dr(){return new Function("return this;")()}Ir(zr,"isPrimitive",Mr),Ir(zr,"isObject",qr);var Hr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof ur?ur:null,Qr="object"==typeof globalThis?globalThis:null;var Yr=function(r){if(arguments.length){if(!Mr(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Dr()}if(Qr)return Qr;if(Hr)return Hr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")}(),rt=Yr.document&&Yr.document.childNodes,tt=Int8Array;function et(){return/^\s*function\s*([^(]*)/i}var nt=/^\s*function\s*([^(]*)/i;function ot(r){return null!==r&&"object"==typeof r}Ir(et,"REGEXP",nt);var it=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ot);function at(r){var t,e,n,o;if(("Object"===(e=Xr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=nt.exec(n.toString()))return t[1]}return ot(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ir(ot,"isObjectLikeArray",it);var ut="function"==typeof Tr||"object"==typeof tt||"function"==typeof rt?function(r){return at(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?at(r).toLowerCase():t};function ct(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===ut(r)}(r.next)}function lt(r){return"number"==typeof r}var ft=Number,st=ft.prototype.toString;var pt=q();function yt(r){return"object"==typeof r&&(r instanceof ft||(pt?function(r){try{return st.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function bt(r){return lt(r)||yt(r)}$(bt,"isPrimitive",lt),$(bt,"isObject",yt);var vt="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null;var gt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var wt,ht=Object.defineProperty,_t=Object.prototype,mt=_t.toString,jt=_t.__defineGetter__,St=_t.__defineSetter__,Et=_t.__lookupGetter__,Ot=_t.__lookupSetter__;wt=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?ht:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Et.call(r,t)||Ot.call(r,t)?(n=r.__proto__,r.__proto__=_t,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&St&&St.call(r,t,e.set),r};var Tt=wt;function xt(r,t,e){Tt(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Pt(r){return"boolean"==typeof r}var kt=Z();function Vt(){return kt&&"symbol"==typeof Symbol.toStringTag}var At=Object.prototype.toString;var Bt="function"==typeof J?J.toStringTag:"";var Ft=Vt()?function(r){var t,e,n;if(null==r)return At.call(r);e=r[Bt],t=H(r,Bt);try{r[Bt]=void 0}catch(t){return At.call(r)}return n=At.call(r),t?r[Bt]=e:delete r[Bt],n}:function(r){return At.call(r)},Ct=Boolean.prototype.toString;var Lt=Vt();function Gt(r){return"object"==typeof r&&(r instanceof Y||(Lt?function(r){try{return Ct.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Ft(r)))}function It(r){return Pt(r)||Gt(r)}function Mt(){return new Function("return this;")()}xt(It,"isPrimitive",Pt),xt(It,"isObject",Gt);var Nt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,$t="object"==typeof ur?ur:null,Ut="object"==typeof globalThis?globalThis:null;var Xt=function(r){if(arguments.length){if(!Pt(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Mt()}if(Ut)return Ut;if(Nt)return Nt;if(Rt)return Rt;if($t)return $t;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Xt.document&&Xt.document.childNodes,Wt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var zt=/^\s*function\s*([^(]*)/i;function Dt(r){return null!==r&&"object"==typeof r}xt(qt,"REGEXP",zt);var Ht=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Dt);function Jt(r){var t,e,n,o;if(("Object"===(e=Ft(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=zt.exec(n.toString()))return t[1]}return Dt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}xt(Dt,"isObjectLikeArray",Ht);var Kt="function"==typeof gt||"object"==typeof Wt||"function"==typeof Zt?function(r){return Jt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Jt(r).toLowerCase():t};function Qt(r){return"function"===Kt(r)}var Yt=Object,re=/./,te="function"==typeof Object.defineProperty?Object.defineProperty:null;var ee,ne=Object.defineProperty,oe=Object.prototype,ie=oe.toString,ae=oe.__defineGetter__,ue=oe.__defineSetter__,ce=oe.__lookupGetter__,le=oe.__lookupSetter__;ee=function(){try{return te({},"x",{}),!0}catch(r){return!1}}()?ne:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ie.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ie.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ce.call(r,t)||le.call(r,t)?(n=r.__proto__,r.__proto__=oe,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ae&&ae.call(r,t,e.get),a&&ue&&ue.call(r,t,e.set),r};var fe=ee;function se(r,t,e){fe(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function pe(r){return"boolean"==typeof r}var ye=Z();function be(){return ye&&"symbol"==typeof Symbol.toStringTag}var ve=Object.prototype.toString;var ge="function"==typeof J?J.toStringTag:"";var de=be()?function(r){var t,e,n;if(null==r)return ve.call(r);e=r[ge],t=H(r,ge);try{r[ge]=void 0}catch(t){return ve.call(r)}return n=ve.call(r),t?r[ge]=e:delete r[ge],n}:function(r){return ve.call(r)},we=Boolean.prototype.toString;var he=be();function _e(r){return"object"==typeof r&&(r instanceof Y||(he?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===de(r)))}function me(r){return pe(r)||_e(r)}function je(){return new Function("return this;")()}se(me,"isPrimitive",pe),se(me,"isObject",_e);var Se="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Oe="object"==typeof ur?ur:null,Te="object"==typeof globalThis?globalThis:null;var xe=function(r){if(arguments.length){if(!pe(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return je()}if(Te)return Te;if(Se)return Se;if(Ee)return Ee;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=xe.document&&xe.document.childNodes,ke=Int8Array;function Ve(){return/^\s*function\s*([^(]*)/i}var Ae=/^\s*function\s*([^(]*)/i;function Be(r){return null!==r&&"object"==typeof r}se(Ve,"REGEXP",Ae);var Fe=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!_r(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Be);function Ce(r){var t,e,n,o;if(("Object"===(e=de(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ae.exec(n.toString()))return t[1]}return Be(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}se(Be,"isObjectLikeArray",Fe);var Le="function"==typeof re||"object"==typeof ke||"function"==typeof Pe?function(r){return Ce(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ce(r).toLowerCase():t};var Ge,Ie,Me=Object.getPrototypeOf;Ie=Object.getPrototypeOf,Ge="function"===Le(Ie)?Me:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===de(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ne=Ge;var Re=Object.prototype;function $e(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!_r(r)}(r)&&(t=function(r){return null==r?null:(r=Yt(r),Ne(r))}(r),!t||!H(r,"constructor")&&H(t,"constructor")&&Qt(t.constructor)&&"[object Function]"===Ft(t.constructor)&&H(t,"isPrototypeOf")&&Qt(t.isPrototypeOf)&&(t===Re||function(r){var t;for(t in r)if(!H(r,t))return!1;return!0}(r)))}function Ue(r,t){return $e(t)?(H(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Xe(r,t,e){var n,o,i,a;if(!ct(r))throw new TypeError(B("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Or(t))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ue(n,e)))throw i;return $(o={},"next",u),$(o,"return",c),vt&&Or(r[vt])&&$(o,vt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:lt(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Xe(r[vt](),t,n)}}var Ze=Math.sqrt;function We(r){return Xe(r,Ze)}export{We as default};
//# sourceMappingURL=mod.js.map
