!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,a,u,l,f,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function T(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,l=setTimeout(h,t),s?T(e):u}function N(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=g();if(N(e))return O(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?v(n,a-(e-c)):n}(e))}function O(e){return l=void 0,b&&r?T(e):(r=i=void 0,u)}function S(){var e=g(),n=N(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(h,t),T(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=y(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(y(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},S.flush=function(){return void 0===l?u:O(g())},S}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var f=a.test(e);return f||u.test(e)?l(e.slice(2),f?2:8):i.test(e)?NaN:+e}var T=document.querySelector(".feedback-form");console.log(T);var j="feedback-form-state",N=document.querySelector('.feedback-form [name="email"]');console.log(N);var h,O=document.querySelector('.feedback-form [name="message"]'),S={email:email="",message:message=""};console.log(S),h=JSON.parse(localStorage.getItem(j)||""),N.setAttribute("value",h.email),O.textContent=h.message,console.log(S);T.addEventListener("input",(function(e){if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");var t=e.currentTarget.elements,n=t.email,o=t.message;"INPUT"===e.target.nodeName?S.email=n.value:S.message=o.value,_.throttle((function(){var e=JSON.stringify(S);localStorage.setItem(j,e)}),500)}));T.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),T.reset(),e.currentTarget.reset(),S.email=email.value,S.message=message.value,N.setAttribute("value",""),O.textContent="",console.log(S)}))}();
//# sourceMappingURL=03-feedback.7d1be646.js.map