var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var o,r,i,u,a,f,c=0,d=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(O,t),d?g(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-c>=i}function O(){var e=m();if(S(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-f);return b?s(n,i-(e-c)):n}(e))}function h(e){return a=void 0,y&&o?g(e):(o=r=void 0,u)}function T(){var e=m(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(b)return a=setTimeout(O,t),g(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=v(t)||0,p(n)&&(d=!!n.leading,i=(b="maxWait"in n)?l(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},T.flush=function(){return void 0===a?u:h(m())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=p(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}document.querySelector('button[type="submit"]');const b=document.querySelector('input[type="email"]'),y=document.querySelector('textarea[name="message"]');let g={};g=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{email:"",message:""};(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(b.value=e.email,y.value=e.message):(b.value="",y.value="")})();
//# sourceMappingURL=03-feedback.244cd0dc.js.map