(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e){startBtnRef=document.querySelector('[data-action="start"]'),stopBtnRef=document.querySelector('[data-action="stop"]'),bodyRef=document.querySelector("body");var n=null,o=!1,a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],c=function(){var t,e,n=(t=0,e=a.length-1,Math.floor(Math.random()*(e-t+1)+t)),o=a[n];bodyRef.style.backgroundColor=o,console.log(o)};startBtnRef.addEventListener("click",(function(){o||(o=!0,n=setInterval(c,1e3))})),stopBtnRef.addEventListener("click",(function(){clearInterval(n),o=!1}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.988ff3cdb76b9848bc4d.js.map