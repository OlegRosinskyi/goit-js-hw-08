var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),l=Object.prototype.toString,c=Math.max,s=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var o,r,i,a,u,f,l=0,d=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,u=setTimeout(h,t),d?y(e):a}function N(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-l>=i}function h(){var e=m();if(N(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return b?s(n,i-(e-l)):n}(e))}function j(e){return u=void 0,p&&o?y(e):(o=r=void 0,a)}function O(){var e=m(),n=N(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(b)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=v(t)||0,g(n)&&(d=!!n.leading,i=(b="maxWait"in n)?c(v(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=g(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");console.log(b);const p=document.querySelector('.feedback-form [name="email"]');console.log(p);const y=document.querySelector('.feedback-form [name="message"]'),T={email:email="",message:message=""};console.log(T),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")||"");p.setAttribute("value",e.email),y.textContent=e.message}(),console.log(T);b.addEventListener("input",(e=>{if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");{const{elements:{email:t,message:n}}=e.currentTarget;"INPUT"===e.target.nodeName?T.email=t.value:T.message=n.value}_.throttle((()=>{const e=JSON.stringify(T);localStorage.setItem("feedback-form-state",e)}),500)}));b.addEventListener("submit",(e=>{e.preventDefault(),console.log(T),b.reset(),e.currentTarget.reset(),T.email="".value,T.message="".value,p.setAttribute("value",""),y.textContent="",console.log(T)}));
//# sourceMappingURL=03-feedback.ec6dc2ed.js.map
