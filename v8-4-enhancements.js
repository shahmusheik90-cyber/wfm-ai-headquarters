// WFM AI Headquarters V8.4 progressive enhancement. Local visual simulation only.
(()=>{'use strict';
const ready=()=>{
const controls=document.getElementById('controls'),hud=document.getElementById('hud');
if(!controls||!hud)return;
const btn=document.createElement('button');btn.type='button';btn.textContent='ⓘ Hide tips';btn.setAttribute('aria-pressed','false');
btn.addEventListener('click',()=>{const hide=hud.classList.toggle('hq-hide');btn.textContent=hide?'ⓘ Show tips':'ⓘ Hide tips';btn.setAttribute('aria-pressed',String(hide));});
controls.insertBefore(btn,controls.firstChild);
const style=document.createElement('style');style.textContent='#hud.hq-hide{display:none}@media(max-width:850px){#controls{left:8px;right:8px;bottom:8px;max-height:110px;overflow-x:auto;flex-wrap:nowrap;touch-action:pan-x}#controls button{white-space:nowrap;flex:0 0 auto}#hud{top:8px;left:8px;max-width:180px;font-size:10px;padding:8px}#workDock{bottom:68px}}';document.head.appendChild(style);
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();