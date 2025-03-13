import{S as c,i as l}from"./assets/vendor-BAUT2DIV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=function(s){const o=new URLSearchParams({key:"49322620-5f00be843ea1be6db390f9d83",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},f=function({webformatURL:s,largeImageURL:o,tags:t,likes:n,views:e,comments:r,downloads:i}){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${t}"
      />
    </a>
   
    <ul class = "description-list">
        <li class="description"><span>Likes</span> ${n}</li>
        <li class="description"><span>Views</span> ${e}</li>
        <li class="description"><span>Comments</span> ${r}</li>
        <li class="description"><span>Downloads</span> ${i}</li>
        </ul>
      
  </li>`},d=function(){new c(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()},a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=()=>{a.loader.style.display="inline-block",a.gallery.style.display="none"},p=()=>{a.loader.style.display="none",a.gallery.style.display="flex"},g=function(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){alert("Please enter a valid data");return}m(),u(o).then(({hits:t})=>{if(t.length===0){l.error({messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e4}),a.form.reset(),a.gallery.innerHTML="";return}const n=t.map(e=>f(e)).join("");a.gallery.innerHTML=n,d(),a.form.reset()}).catch(t=>{l.error({messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Oops! Something went wrong. Please try again later.",timeout:1e4})}).finally(p)};a.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
