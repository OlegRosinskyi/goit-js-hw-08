!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,l=setTimeout(j,t),s?p(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function j(){var e=b();if(h(e))return O(e);l=setTimeout(j,function(e){var n=t-(e-f);return d?v(n,a-(e-c)):n}(e))}function O(e){return l=void 0,m&&o?p(e):(o=i=void 0,u)}function w(){var e=b(),n=h(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(j,t),p(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(T(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},w.flush=function(){return void 0===l?u:O(b())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form");console.log(S);var h="feedback-form-state",j="TimeRanges",O=document.querySelector('.feedback-form [name="email"]');console.log(O);var w=document.querySelector('.feedback-form [name="message"]'),x={email:"",message:""};!function(){if(console.log(localStorage.getItem(h)),console.log(null!==localStorage.getItem(h)),null!==localStorage.getItem(h)){var e=JSON.parse(localStorage.getItem(h));console.log("Restart",e),O.setAttribute("value",e.email),w.textContent=e.message}}();S.addEventListener("input",e(t)((function(e){if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");var t=e.currentTarget.elements,n=t.email,o=t.message;x.email=n.value,x.message=o.value,console.log("Input2",x);var r=JSON.stringify(x);localStorage.setItem(h,r)}),100));S.addEventListener("submit",(function(e){e.preventDefault(),console.log("Submit",x),e.currentTarget.reset(),O.hasAttribute(j)&&O.setAttribute(j,""),""!==w.textContent&&(w.textContent=""),localStorage.removeItem(h),e.currentTarget.reset(),S.reset()}))}();
//# sourceMappingURL=03-feedback.2bd80ba9.js.map
