(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector(".burger-menu"),a=document.querySelector(".burger-close"),s=document.querySelector(".header-navigation"),d=document.body;function f(){s.classList.add("active"),d.classList.add("is-hidden")}function u(){s.classList.remove("active"),d.classList.remove("is-hidden")}i.addEventListener("click",f);a.addEventListener("click",u);document.addEventListener("click",r=>{!s.contains(r.target)&&!i.contains(r.target)&&u()});
//# sourceMappingURL=commonHelpers.js.map
