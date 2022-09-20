(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=document.getElementById("pomodoroTimerLengthInput"),n=document.getElementById("shortBreakLengthInput"),r=document.getElementById("longBreakLengthInput"),o={getSelectedChoice:e=>document.querySelector(`.${e}--selected`),getTimerLength:e=>{let i=Number({pomodoro:t,"short break":n,"long break":r}[e].value);return o.minToSec(i)},minToSec:e=>60*Number(e),secToMin:e=>Number(e)/60};Storage.prototype.setObject=function(e,t){this.setItem(e,JSON.stringify(t))},Storage.prototype.getObject=function(e){var t=this.getItem(e);return t&&JSON.parse(t)};const i=document.getElementById("pomodoroTimerLengthInput"),c=document.getElementById("shortBreakLengthInput"),s=document.getElementById("longBreakLengthInput"),l=e.p+"9462ed3419b3a9206c36550007da8482.mp3",m=new Audio(l);m.volume=.5;const a={start:()=>{d.current.timer.running=!0,E.setTimerText("PAUSE");let e=new Date;e.setSeconds(e.getSeconds()+d.current.timer.timeLeft),window.mainTimer=setInterval((()=>{let t=new Date,n=1e3*d.current.timer.type.length,r=e-t,o=n-r;E.updateProgressBar(o,n),d.current.timer.timeLeft=Math.ceil(r/1e3),d.saveLocal(),E.setCurrentTime(),r<=0&&(m.play(),a.stop(),d.current.timer.completed=!0,d.current.timer.running=!1,E.setTimerText("RESTART"))}),10)},load:()=>{if(0===d.current.timer.timeLeft)return void a.reset();let e=d.current.timer.timeLeft===d.current.timer.type.length?"START":"RESUME";E.setTimerText(e),E.setCurrentTime(),d.current.timer.running=!1;let t=d.current.timer.type.length,n=d.current.timer.timeLeft;t==n?E.resetProgressBar():E.updateProgressBar(t-n,t)},stop:()=>{clearInterval(window.mainTimer),d.current.timer.running=!1,d.saveLocal()},reset:()=>{a.stop(),d.setDefault(),E.resetProgressBar(),a.load(),d.saveLocal()},pause:()=>{a.stop(),E.setTimerText("RESUME")}};let d={current:{timer:{type:{name:"pomodoro",length:1500,id:"timer--1"},timeLeft:1500,running:!1,completed:!1},settings:{lengths:{pomodoro:1500,"short break":300,"long break":900},accentColor:{id:"color--1",content:"rgb(248, 114, 114)"},font:{id:"font--1",content:'"Kumbh Sans", sans-serif'}}},saveLocal:()=>{localStorage.setObject("savedStates",d.current)},update:()=>{(function(){let e=o.getSelectedChoice("color"),t=o.getSelectedChoice("font"),n=o.getSelectedChoice("timer"),r=getComputedStyle(e).backgroundColor,l=getComputedStyle(t).fontFamily,{timeLeft:m,running:a,completed:u}=d.current.timer,g={timer:{type:{name:n.textContent,length:o.getTimerLength(n.textContent),id:n.id},timeLeft:m,running:a,completed:u},settings:{lengths:{pomodoro:o.minToSec(i.value),"short break":o.minToSec(c.value),"long break":o.minToSec(s.value)},accentColor:{id:e.id,content:r},font:{id:t.id,content:l}}};d.current=g})(),E.setAccentColor(),E.setFont(),a.reset(),d.saveLocal()},setDefault:()=>{d.current.timer.timeLeft=d.current.timer.type.length,d.current.timer.running=!1,d.current.timer.completed=!1},retrieveLocalData:()=>{let e=localStorage.getObject("savedStates");null!==e&&(d.current=e),E.loadPage()}};const u=document.getElementById("settings"),g=document.getElementById("pageMask"),h=document.getElementById("timeLeft"),p=document.getElementById("timerText"),y=document.getElementById("progressBar"),L=document.getElementById("pomodoroTimerLengthInput"),f=document.getElementById("shortBreakLengthInput"),B=document.getElementById("longBreakLengthInput"),E={toggleSettings:()=>{E.toggleHidden(u),E.toggleHidden(g)},toggleHidden:e=>{e.classList.toggle("hidden")},resetProgressBar:()=>{y.style.background="var(--clr-accent-current)"},updateProgressBar:(e,t)=>{y.style.background=`conic-gradient(\n      var(--clr-accent-current) ${e*(360/t)}deg,\n      hsl(234deg, 39%, 14%) ${e*(360/t)}deg\n    )`},setCurrentTime:(e=d.current.timer.timeLeft)=>{let t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60);(e=e-3600*t-60*n)<10&&(e="0"+e),n<10&&(n="0"+n),t<10&&(t="0"+t);let r=`${n}:${e}`;t>0&&(r=`${t}:${n}`),h.textContent=r},setTimerText:e=>{p.textContent=e},setChoice:(e,t)=>{const n=o.getSelectedChoice(t),r=document.getElementById(e);n.classList.remove(`${t}--selected`),r.classList.add(`${t}--selected`)},setTimerType:()=>{E.setChoice(d.current.timer.type.id,"timer")},setTimerLengthInputs:()=>{L.value=o.secToMin(d.current.settings.lengths.pomodoro),f.value=o.secToMin(d.current.settings.lengths["short break"]),B.value=o.secToMin(d.current.settings.lengths["long break"])},setAccentColor:()=>{document.documentElement.style.setProperty("--clr-accent-current",`${d.current.settings.accentColor.content}`),E.setChoice(d.current.settings.accentColor.id,"color")},setFont:()=>{document.documentElement.style.setProperty("--font-current",`${d.current.settings.font.content}`),E.setChoice(d.current.settings.font.id,"font")},loadPage:()=>{E.setAccentColor(),E.setFont(),E.setTimerLengthInputs(),E.setTimerType(),a.load()}},I=document.getElementById("timerBtn"),S=document.getElementById("timerResetBtn"),T=document.getElementById("settingsApplyBtn"),v=document.getElementById("showSettingsBtn"),C=document.getElementById("exitSettingsBtn"),b=Array.from(document.querySelectorAll(".increment")),k=Array.from(document.querySelectorAll(".timeInput")),w=document.getElementById("fontChoices"),A=document.getElementById("colorChoices"),$=document.getElementById("timerChoices"),x={setUpListeners:function(){T.addEventListener("click",this.handlers.applySettings),v.addEventListener("click",E.toggleSettings),C.addEventListener("click",E.toggleSettings),I.addEventListener("click",this.handlers.timerBtn),S.addEventListener("click",a.reset),this.addChoiceListeners(w),this.addChoiceListeners(A),this.addChoiceListeners($),k.forEach((e=>e.addEventListener("change",this.handlers.timeInput))),b.forEach((e=>e.addEventListener("click",this.handlers.incrementInputValue)))},addChoiceListeners:e=>{Array.from(e.children).forEach((e=>e.addEventListener("click",x.handlers.choiceChange)))},handlers:{applySettings:()=>{E.toggleSettings(),d.update()},timerBtn:()=>{d.current.timer.running?a.pause():d.current.timer.completed?(a.reset(),a.start()):a.start()},choiceChange:function(){let e=this.closest(".choices-container").id.replace("Choices","");E.setChoice(this.id,e),"timer"===e&&d.update()},incrementInputValue:function(){let e=this.closest(".sub-option_data").querySelector("input"),t=Number(e.max),n=Number(e.value),r=Number(e.step);this.classList.contains("increment--down")&&(r*=-1);let o=n+r;o>=1&&o<=t&&(e.value=n+r)},timeInput:function(){let e=this.value,t=Number(this.max);e<1&&(this.value=1),e>t&&(this.value=t)}}};x.setUpListeners(),d.retrieveLocalData()})();