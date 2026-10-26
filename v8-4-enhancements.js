// WFM AI Headquarters V8.4 progressive enhancement. Local visual simulation only.
(()=>{'use strict';
const ready=()=>{
const controls=document.getElementById('controls'),hud=document.getElementById('hud');
if(!controls||!hud)return;
const btn=document.createElement('button');btn.type='button';btn.textContent='ⓘ Hide tips';btn.setAttribute('aria-pressed','false');
btn.addEventListener('click',()=>{const hide=hud.classList.toggle('hq-hide');btn.textContent=hide?'ⓘ Show tips':'ⓘ Hide tips';btn.setAttribute('aria-pressed',String(hide));});
controls.insertBefore(btn,controls.firstChild);

const toolbar=document.createElement('div');toolbar.id='hq-quickbar';toolbar.setAttribute('aria-label','Quick actions');
toolbar.innerHTML='<span>HQ QUICK ACCESS</span><button type="button" id="hq-wfm">◈ WFM Office</button><button type="button" id="hq-tasks">☰ Task Queue</button><button type="button" id="hq-demo">▣ Sample Work</button>';
const view=document.getElementById('view');if(view)view.appendChild(toolbar);
document.getElementById('hq-wfm').addEventListener('click',()=>document.getElementById('focusWfm')?.click());
document.getElementById('hq-tasks').addEventListener('click',()=>document.getElementById('panelBtn')?.click());
document.getElementById('hq-demo').addEventListener('click',()=>document.getElementById('previewDemo')?.click());
const style=document.createElement('style');style.textContent='#hud.hq-hide{display:none}@media(max-width:850px){#controls{left:8px;right:8px;bottom:8px;max-height:110px;overflow-x:auto;flex-wrap:nowrap;touch-action:pan-x}#controls button{white-space:nowrap;flex:0 0 auto}#hud{top:8px;left:8px;max-width:180px;font-size:10px;padding:8px}#workDock{bottom:68px}}';style.textContent+='#hq-quickbar{position:absolute;top:10px;right:10px;z-index:3;display:flex;align-items:center;gap:5px;background:#091d2be8;border:1px solid #256f73;border-radius:10px;padding:6px}#hq-quickbar span{font-size:10px;color:#7dded8;margin:0 4px}#hq-quickbar button{font-size:11px;padding:7px}@media(max-width:850px){#hq-quickbar{top:auto;bottom:57px;left:8px;right:auto;max-width:calc(100% - 16px);overflow-x:auto}#hq-quickbar span{display:none}#hq-quickbar button{white-space:nowrap}}';document.head.appendChild(style);
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();