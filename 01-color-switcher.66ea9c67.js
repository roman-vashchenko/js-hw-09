!function(){function t(t){return localStorage.getItem(t)}var o={bodyEl:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};null!==t("color")&&(o.bodyEl.style.backgroundColor=t("color"));var n=null;o.startBtn.addEventListener("click",(function(){o.startBtn.disabled=!0,o.stopBtn.disabled=!1,n=setInterval((function(){var t,n,e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));o.bodyEl.style.backgroundColor=e,t="color",n=e,localStorage.setItem(t,n)}),1e3)})),o.stopBtn.addEventListener("click",(function(){o.startBtn.disabled=!1,o.stopBtn.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.66ea9c67.js.map