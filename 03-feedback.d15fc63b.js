!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(j,t),s?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=b();if(h(e))return N(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function N(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function O(){var e=b(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(j,t),p(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(T(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:N(b())},O}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form");console.log(S);var h="feedback-form-state",j="TimeRanges",N=document.querySelector('.feedback-form [name="email"]');console.log(N);var O=document.querySelector('.feedback-form [name="message"]'),w={},x="",E="";!function(){if(console.log(""!==localStorage.getItem(h)),""!==localStorage.getItem(h)){var e=JSON.parse(localStorage.getItem(h));N.setAttribute("value",e.email),O.textContent=e.message}}();S.addEventListener("input",e(t)((function(e){if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");var t=e.currentTarget.elements,n=t.email,r=t.message;"INPUT"===e.target.nodeName?x=n.value:E=r.value,w.email=x,w.message=E;var o=JSON.stringify(w);localStorage.setItem(h,o)}),100));S.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),x="",E="",N.hasAttribute(j)&&N.setAttribute(j,""),""!==O.textContent&&(O.textContent=""),e.currentTarget.reset(),S.reset()}))}();
//# sourceMappingURL=03-feedback.d15fc63b.js.map
