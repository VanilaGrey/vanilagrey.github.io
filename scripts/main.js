(()=>{var a=(n,t,e=0)=>{let r=n.split(""),o=0,i=setInterval(()=>{t.textContent+=r[o],o++,o===r.length&&clearInterval(i)},e)};var l=n=>t=>{let{intervalContent:e}=t.dataset;t.hidden=!1,a(e,t,n)};var s=60;document.querySelectorAll("[data-interval-content]").forEach(l(s));})();