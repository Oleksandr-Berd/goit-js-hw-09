!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a=o("iU1Pc"),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),i=document.querySelector('[name="amount"]'),c=document.querySelector('[type="submit"]'),f=0,s=0,p=0;l.addEventListener("input",(function(e){return f=e.currentTarget.value})),d.addEventListener("input",(function(e){return s=e.currentTarget.value})),i.addEventListener("input",(function(e){return p=e.currentTarget.value})),c.addEventListener("click",(function(n){n.preventDefault(),delay=Number(f),step=Number(s),amount=p,console.log("undefined"==typeof delay?"undefined":e(u)(delay));var t=0,r=setInterval((function(){var n=Math.random()>.3;(t+=1)>1&&(delay=t*step+Number(f)-step),n?e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(delay,"ms")):e(a).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(delay,"ms")),t>=amount&&clearInterval(r)}),delay)}))}();
//# sourceMappingURL=03-promises.e1304abb.js.map
