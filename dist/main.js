(()=>{"use strict";(function(e){const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");function o(e){return e<10&&(e="0"+e),e}const l=setInterval(c,1e3);function c(){const e=function(){const e=(new Date("16 may 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),a=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),seconds:t,minutes:a}}();t.textContent=o(e.hours),a.textContent=o(e.minutes),n.textContent=o(e.seconds),e.timeRemaining<=0&&(t.textContent="00",a.textContent="00",n.textContent="00",clearInterval(l))}c()})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{const a=t.target,n=a.closest(".menu"),o=a.closest(".close-btn"),l=a.closest(".active-menu");n?e.classList.add("active-menu"):l&&!o&&"A"!==a.tagName||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");let t,a;function n(e){e.style.opacity=1;let a=e.style.opacity?parseFloat(e.style.opacity):parseInt(e.style.filter)/100;t=requestAnimationFrame((function n(){t=requestAnimationFrame(n),a>=0?(a-=.03,e.style.opacity=a,e.style.filter=`alpha(opacity='${100*a}')`):a<0&&(cancelAnimationFrame(t),e.style.display="none")}))}document.getElementById("form3").style.color="white",document.addEventListener("click",(t=>{let o=t.target;o.matches(".popup-btn")?document.documentElement.clientWidth>=768?function(e){e.style.opacity=0,e.style.display="block";let t=e.style.opacity?parseFloat(e.style.opacity):parseInt(e.style.filter)/100;a=requestAnimationFrame((function n(){a=requestAnimationFrame(n),t<1?(t+=.03,e.style.opacity=t,e.style.filter=`alpha(opacity='${100*t}')`):t>=1&&cancelAnimationFrame(a)}))}(e):(e.style.opacity=1,e.style.display="block"):o.matches(".popup-close")?document.documentElement.clientWidth>=768?n(e):e.style.display="none":(o=o.closest(".popup-content"),o||(document.documentElement.clientWidth>=768?n(e):e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),n=e=>{a.forEach(((a,n)=>{e===n?(t[n].classList.add("active"),a.classList.remove("d-none")):(a.classList.add("d-none"),t[n].classList.remove("active"))}))};n(0),e.addEventListener("click",(e=>{let a=e.target;a=a.closest(".service-header-tab"),a&&t.forEach(((e,t)=>{e===a&&n(t)}))}))})(),(()=>{const e=document.getElementById("all-progects"),t=e.querySelectorAll(".portfolio-item"),a=[];document.querySelectorAll(".dot").forEach((e=>{e.remove()})),t.forEach(((e,t)=>{const n=document.createElement("li");n.classList=0===t?"dot-active dot":"dot",a.push(n),document.querySelector(".portfolio-dots").append(n)}));let n,o=0;const l=(e,t,a)=>{e[t].classList.remove(a)},c=(e,t,a)=>{e[t].classList.add(a)},r=()=>{l(t,o,"portfolio-item-active"),l(a,o,"dot-active"),o++,o>=t.length&&(o=0),c(t,o,"portfolio-item-active"),c(a,o,"dot-active")},s=(e=2e3)=>{n=setInterval(r,e)};e.addEventListener("click",(e=>{e.preventDefault();const n=e.target;n.matches(".portfolio-btn, .dot")&&(l(t,o,"portfolio-item-active"),l(a,o,"dot-active"),n.matches("#arrow-right")?(o++,o>=t.length&&(o=0)):n.matches("#arrow-left")?(o--,o<0&&(o=t.length-1)):n.matches(".dot")&&a.forEach(((e,t)=>{e===n&&(o=t)})),c(t,o,"portfolio-item-active"),c(a,o,"dot-active"))})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()})),s()})(),document.addEventListener("mouseover",(e=>{const t=e.target;t.matches(".command__photo")&&(t.src=t.dataset.img)})),document.addEventListener("mouseout",(e=>{const t=e.target;if(t.matches(".command__photo")){let e=t.src;e=e.substring(0,e.indexOf("a.jpg"))+".jpg",t.src=e}})),document.querySelectorAll(".form-email").forEach((e=>{e.required=!0})),document.addEventListener("input",(e=>{const t=e.target;t.matches(".calc-block>input")?t.value=t.value.replace(/\D/,""):t.matches(".form-name, #form2-name")?t.value=t.value.replace(/[^ А-яа-я]/,""):t.matches("#form2-message")?t.value=t.value.replace(/[^ А-яа-я\.\,\!\:\;\-\)\(]/,""):t.matches(".form-email")?t.value=t.value.replace(/[^\w\-@\.\!~\*']/g,""):t.matches(".form-phone")&&(t.value=t.value.replace(/[^\d\+]/g,""))})),document.addEventListener("blur",(e=>{const t=e.target;if(t.matches(".calc-block>input")){const e=t.value.match(/\d/g);null!==e&&(t.value=e.join(""))}else if(t.matches(".form-name, #form2-name"))t.value=t.value.replace(/\s+/g," "),t.value=t.value.replace(/(\s\-)+/g,""),t.value=t.value.replace(/\-+/g,"-"),t.value=t.value.replace(/^[\s\-]+/gi,""),t.value=t.value.replace(/\w+/gi,""),t.value=t.value.replace(/\-$/gi,""),t.value&&(t.value=t.value.split(/\s+/).map((e=>e[0].toUpperCase()+e.substring(1).toLowerCase())).join(" "));else if(t.matches(".form-email")){let e=t.value.match(/@/);e||""===t.value?(e=t.value.match(/[\w\.]{1,10}@[a-z1-9]{2,10}\.[a-z]{2,3}/gi),e||""===t.value||(alert("Неверно указан домен"),t.value="")):(alert("E-mail должен содержать символ @"),t.value="")}else t.matches(".form-phone")?(t.value=t.value.replace(/^8{1}|^7|\+7/gi,"+7 "),t.value=t.value.replace(/^...([0-9]{3})/g,((e,t)=>`+7 ${t} `)),14!==t.value.length&&""!==t.value&&(t.value="",alert("Проверьте номер"))):t.matches("#form2-message")&&(t.value=t.value.replace(/\s+/g," "),t.value=t.value.replace(/\-+/g,"-"),t.value=t.value.replace(/^[\s\-]+/gi,""),t.value=t.value.replace(/\w+/gi,""),t.value=t.value.replace(/([а-я]{1})/i,((e,t)=>t.toUpperCase())))}),!0),((e=100)=>{const t=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),l=document.getElementById("total");document.querySelector(".calc-block").addEventListener("change",(c=>{const r=c.target;(r.matches("select")||r.matches("input"))&&(()=>{let c=0,r=1,s=1;const i=t.options[t.selectedIndex].value,u=+a.value;let m;n.value>1&&n.value&&(r+=(n.value-1)/10),s=o.value<5&&o.value?2:o.value<10&&o.value?1.5:1,i&&u&&(c=Math.ceil(e*i*u*r*s)),m=requestAnimationFrame((function e(){let t=parseInt(l.textContent);m=requestAnimationFrame(e),t<c?(t+=Math.ceil(.05*(c-t)),l.textContent=t):t>c?(t-=Math.ceil(.05*(t-c)),l.textContent=t):(l.textContent=c,cancelAnimationFrame(m))}))})()}))})(100),(()=>{const e=document.querySelectorAll('[name="user_form"]'),t=document.createElement("div"),a=document.createElement("div");let n;t.appendChild(a),t.style.cssText="font-size: 2rem",e.forEach((e=>{e.addEventListener("submit",(o=>{o.preventDefault(),e.appendChild(t),a.textContent="",t.classList.add("lds-circle");const l=new FormData(e),c={};if(l.forEach(((e,t)=>{c[t]=e})),!c.user_email)throw document.querySelectorAll("input").forEach((e=>{e.value=""})),t.classList.remove("lds-circle"),a.textContent="Не заполнено обязательное поле E-Mail",setTimeout((()=>a.textContent=""),3e3),new Error("email is empty");(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(c).then((o=>{if(200!==o.status)throw new Error("Network status is not 200");t.classList.remove("lds-circle"),a.textContent="Спасибо, мы скоро с Вами свяжемся",setTimeout((()=>a.textContent=""),3e3),document.querySelectorAll("input").forEach((e=>{e.value=""})),e.matches("#form3")&&setTimeout((()=>{document.documentElement.clientWidth>=768?function(e){e.style.opacity=1;let t=e.style.opacity?parseFloat(e.style.opacity):parseInt(e.style.filter)/100;n=requestAnimationFrame((function a(){n=requestAnimationFrame(a),t>=0?(t-=.03,e.style.opacity=t,e.style.filter=`alpha(opacity='${100*t}')`):t<0&&(cancelAnimationFrame(n),e.style.display="none")}))}(document.querySelector(".popup")):document.querySelector(".popup").style.display="none"}),2e3)})).catch((e=>{t.classList.remove("lds-circle"),a.textContent="Что-то пошло не так",setTimeout((()=>a.textContent=""),3e3),console.error(e)}))}))}))})(),(()=>{const e=document.querySelector('[src="images/scroll.svg"]'),t=document.querySelectorAll('[href="#service-block"]')[1],a=document.querySelector('[href="#portfolio"]'),n=document.querySelector('[href="#calc"]'),o=document.querySelector('[href="#command"]'),l=document.querySelector('[href="#connect"]');function c(c){let r;const s=()=>{let i;r=requestAnimationFrame(s),c===e||c===t?i=Math.ceil(document.getElementById("service-block").getBoundingClientRect().top):c===a?i=Math.ceil(document.getElementById("portfolio").getBoundingClientRect().top):c===n?i=Math.ceil(document.getElementById("calc").getBoundingClientRect().top):c===o?i=Math.ceil(document.getElementById("command").getBoundingClientRect().top):c===l?i=Math.ceil(document.getElementById("connect").getBoundingClientRect().top):cancelAnimationFrame(r);let u=Math.ceil(.1*i);i<=10&&(u=2),scrollBy(0,u),(u>=i||document.documentElement.clientHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight)&&cancelAnimationFrame(r)};r=requestAnimationFrame(s)}document.querySelectorAll('[href="#service-block"]')[0],e.addEventListener("click",(e=>{e.preventDefault(),c(e.target)})),t.addEventListener("click",(e=>{e.preventDefault(),c(e.target)})),l.addEventListener("click",(e=>{e.preventDefault(),c(e.target)})),a.addEventListener("click",(e=>{e.preventDefault(),c(e.target)})),n.addEventListener("click",(e=>{e.preventDefault(),c(e.target)})),o.addEventListener("click",(e=>{e.preventDefault(),c(e.target)}))})()})();