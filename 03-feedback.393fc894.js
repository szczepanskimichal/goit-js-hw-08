!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return d.Date.now()};function g(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),s?g(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?g(e):(i=r=void 0,u)}function T(){var e=y(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(y())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),S=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]');window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("stan-formularza-opinii"));e&&(S.value=e.email||"",O.value=e.message||"")}));var h=e(t)((function(){var e={email:S.value,message:O.value};localStorage.setItem("stan-formularza-opinii",JSON.stringify(e))}),500);j.addEventListener("input",h),j.addEventListener("submit",(function(e){e.preventDefault(),""===S.value||""===O.value?console.log("Proszę wypełnić wszystkie pola przed wysłaniem"):(console.log("Formularz został wysłany!",{email:S.value,message:O.value}),localStorage.removeItem("stan-formularza-opinii"),j.reset())}))}();
//# sourceMappingURL=03-feedback.393fc894.js.map
