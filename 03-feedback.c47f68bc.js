!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(h,t),s?p(e):u}function N(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(N(e))return O(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function O(e){return l=void 0,m&&o?p(e):(o=i=void 0,u)}function S(){var e=b(),n=N(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(T(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},S.flush=function(){return void 0===l?u:O(b())},S}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");console.log(j);var N="feedback-form-state",h=document.querySelector('.feedback-form [name="email"]');console.log(h);var O,S=document.querySelector('.feedback-form [name="message"]'),w={email:email="",message:message=""};console.log(w),O=JSON.parse(localStorage.getItem(N)||""),h.setAttribute("value",O.email),S.textContent=O.message,console.log(w);j.addEventListener("input",e(t)((function(e){if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");var t=e.currentTarget.elements,n=t.email,o=t.message;"INPUT"===e.target.nodeName?w.email=n.value:w.message=o.value;var r=JSON.stringify(w);localStorage.setItem(N,r),console.log(w)}),500));j.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),j.reset(),e.currentTarget.reset(),w.email=email.value,w.message=message.value,h.setAttribute("value",""),S.textContent="",console.log(w)}))}();
//# sourceMappingURL=03-feedback.c47f68bc.js.map
