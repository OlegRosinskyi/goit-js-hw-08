function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,l,u=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function T(e){return u=e,f=setTimeout(N,t),c?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=i}function N(){var e=g();if(h(e))return S(e);f=setTimeout(N,function(e){var n=t-(e-l);return s?d(n,i-(e-u)):n}(e))}function S(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function j(){var e=g(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return T(l);if(s)return f=setTimeout(N,t),y(l)}return void 0===f&&(f=setTimeout(N,t)),a}return t=p(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=l=r=f=void 0},j.flush=function(){return void 0===f?a:S(g())},j}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");console.log(y);const T=document.querySelector('.feedback-form [name="email"]');console.log(T);const h=document.querySelector('.feedback-form [name="message"]'),N={emailV:emailV="",messageV:messageV=""};!function(){if(console.log(""!==localStorage.getItem("feedback-form-state")),""!==localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));T.setAttribute("value",e.emailV),h.textContent=e.messageV}}(),console.log(N);y.addEventListener("input",e(n)((e=>{if(e.preventDefault(),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName)return alert("Please fill in all the fields!");{const{elements:{email:t,message:n}}=e.currentTarget;"INPUT"===e.target.nodeName?N.emailV=t.value:N.messageV=n.value}const t=JSON.stringify(N);localStorage.setItem("feedback-form-state",t),console.log(N)}),500));y.addEventListener("submit",(e=>{console.log(N),e.currentTarget.reset(),N.emailV="",N.messageV="",T.hasAttribute("TimeRanges")&&T.removeAttribute("TimeRanges"),""!==h.textContent&&(h.textContent=""),y.reset(),console.log(N)}));
//# sourceMappingURL=03-feedback.94d34b32.js.map