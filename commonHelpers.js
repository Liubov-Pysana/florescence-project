(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new Swiper(".swiper",{slidesPerView:2,spaceBetween:14,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const f=document.querySelectorAll(".faq-question"),m=document.querySelectorAll(".faq-item.active");f.forEach(r=>{r.addEventListener("click",()=>{const o=r.parentElement;m.forEach(s=>{s!==o&&s.classList.remove("active")}),o.classList.toggle("active")})});const p=document.querySelectorAll(".advantages-item"),a=document.querySelectorAll(".details-text");p.forEach((r,o)=>{r.addEventListener("click",()=>{a.forEach(s=>s.classList.remove("active")),a[o].classList.add("active")})});const l=document.querySelector(".burger-menu"),v=document.querySelector(".burger-close"),n=document.querySelector(".header-navigation"),d=document.body;function g(){n.classList.add("active"),d.classList.add("is-hidden")}function u(){n.classList.remove("active"),d.classList.remove("is-hidden")}l.addEventListener("click",g);v.addEventListener("click",u);document.addEventListener("click",r=>{!n.contains(r.target)&&!l.contains(r.target)&&u()});
//# sourceMappingURL=commonHelpers.js.map
