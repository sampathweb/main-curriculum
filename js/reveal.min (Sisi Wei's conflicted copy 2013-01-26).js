/*!
 * reveal.js 2.0 r18
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 * 
 * Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se
 */
var Reveal=(function(){var k=".reveal .slides>section",b=".reveal .slides>section.present>section",e=!!("ontouchstart" in window),N={controls:true,progress:true,history:false,keyboard:true,loop:false,autoSlide:0,mouseWheel:true,rollingLinks:true,transition:"default",dependencies:[]},l=0,c=0,w,E,ac=[],d={},P="WebkitPerspective" in document.body.style||"MozPerspective" in document.body.style||"msPerspective" in document.body.style||"OPerspective" in document.body.style||"perspective" in document.body.style,m="WebkitTransform" in document.body.style||"MozTransform" in document.body.style||"msTransform" in document.body.style||"OTransform" in document.body.style||"transform" in document.body.style,x=0,j=0,B=0,W={startX:0,startY:0,startSpan:0,startCount:0,handled:false,threshold:40};
function h(ad){if((!m&&!P)){document.body.setAttribute("class","no-transforms");return;}r(N,ad);d.wrapper=document.querySelector(".reveal");d.progress=document.querySelector(".reveal .progress");
d.progressbar=document.querySelector(".reveal .progress span");if(N.controls){d.controls=document.querySelector(".reveal .controls");d.controlsLeft=document.querySelector(".reveal .controls .left");
d.controlsRight=document.querySelector(".reveal .controls .right");d.controlsUp=document.querySelector(".reveal .controls .up");d.controlsDown=document.querySelector(".reveal .controls .down");
}R();if(navigator.userAgent.match(/(iphone|ipod|android)/i)){document.documentElement.style.overflow="scroll";document.body.style.height="120%";window.addEventListener("load",X,false);
window.addEventListener("orientationchange",X,false);}}function R(){var ae=[],ai=[];for(var af=0,ad=N.dependencies.length;af<ad;af++){var ag=N.dependencies[af];
if(!ag.condition||ag.condition()){if(ag.async){ai.push(ag.src);}else{ae.push(ag.src);}if(typeof ag.callback==="function"){head.ready(ag.src.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[0],ag.callback);
}}}function ah(){head.js.apply(null,ai);F();}if(ae.length){head.ready(ah);head.js.apply(null,ae);}else{ah();}}function F(){C();I();H();K();}function I(){if(P===false){N.transition="linear";
}if(N.controls&&d.controls){d.controls.style.display="block";}if(N.progress&&d.progress){d.progress.style.display="block";}if(N.transition!=="default"){d.wrapper.classList.add(N.transition);
}if(N.mouseWheel){document.addEventListener("DOMMouseScroll",n,false);document.addEventListener("mousewheel",n,false);}if(N.rollingLinks){J();}}function C(){document.addEventListener("touchstart",y,false);
document.addEventListener("touchmove",Z,false);document.addEventListener("touchend",S,false);window.addEventListener("hashchange",u,false);if(N.keyboard){document.addEventListener("keydown",aa,false);
}if(N.controls&&d.controls){d.controlsLeft.addEventListener("click",o(z),false);d.controlsRight.addEventListener("click",o(i),false);d.controlsUp.addEventListener("click",o(s),false);
d.controlsDown.addEventListener("click",o(D),false);}}function Q(){document.removeEventListener("keydown",aa,false);document.removeEventListener("touchstart",y,false);
document.removeEventListener("touchmove",Z,false);document.removeEventListener("touchend",S,false);window.removeEventListener("hashchange",u,false);if(N.controls&&d.controls){d.controlsLeft.removeEventListener("click",o(z),false);
d.controlsRight.removeEventListener("click",o(i),false);d.controlsUp.removeEventListener("click",o(s),false);d.controlsDown.removeEventListener("click",o(D),false);
}}function r(ae,ad){for(var af in ad){ae[af]=ad[af];}}function O(af,ad){var ag=af.x-ad.x,ae=af.y-ad.y;return Math.sqrt(ag*ag+ae*ae);}function o(ad){return function(ae){ae.preventDefault();
ad.call();};}function X(){setTimeout(function(){window.scrollTo(0,1);},0);}function aa(ae){if(ae.target.contentEditable!="inherit"||ae.shiftKey||ae.altKey||ae.ctrlKey||ae.metaKey){return;
}var ad=false;switch(ae.keyCode){case 80:case 33:U();ad=true;break;case 78:case 34:v();ad=true;break;case 72:case 37:z();ad=true;break;case 76:case 39:i();
ad=true;break;case 75:case 38:s();ad=true;break;case 74:case 40:D();ad=true;break;case 36:L(0);ad=true;break;case 35:L(Number.MAX_VALUE);ad=true;break;
case 32:V()?Y():v();ad=true;break;case 13:if(V()){Y();ad=true;}break;}if(ad){ae.preventDefault();}else{if(ae.keyCode===27&&P){T();ae.preventDefault();}}K();
}function y(ad){W.startX=ad.touches[0].clientX;W.startY=ad.touches[0].clientY;W.startCount=ad.touches.length;if(ad.touches.length===2){W.startSpan=O({x:ad.touches[1].clientX,y:ad.touches[1].clientY},{x:W.startX,y:W.startY});
}}function Z(ai){if(!W.handled){var ag=ai.touches[0].clientX;var af=ai.touches[0].clientY;if(ai.touches.length===2&&W.startCount===2){var ah=O({x:ai.touches[1].clientX,y:ai.touches[1].clientY},{x:W.startX,y:W.startY});
if(Math.abs(W.startSpan-ah)>W.threshold){W.handled=true;if(ah<W.startSpan){G();}else{Y();}}}else{if(ai.touches.length===1){var ae=ag-W.startX,ad=af-W.startY;
if(ae>W.threshold&&Math.abs(ae)>Math.abs(ad)){W.handled=true;z();}else{if(ae<-W.threshold&&Math.abs(ae)>Math.abs(ad)){W.handled=true;i();}else{if(ad>W.threshold){W.handled=true;
s();}else{if(ad<-W.threshold){W.handled=true;D();}}}}}}ai.preventDefault();}}function S(ad){W.handled=false;}function n(ad){clearTimeout(x);x=setTimeout(function(){var ae=ad.detail||-ad.wheelDelta;
if(ae>0){v();}else{U();}},100);}function u(ad){H();}function J(){if(P&&!("msPerspective" in document.body.style)){var ae=document.querySelectorAll(".reveal .slides section a:not(.image)");
for(var af=0,ad=ae.length;af<ad;af++){var ag=ae[af];if(ag.textContent&&!ag.querySelector("img")&&(!ag.className||!ag.classList.contains(ag,"roll"))){ag.classList.add("roll");
ag.innerHTML='<span data-title="'+ag.text+'">'+ag.innerHTML+"</span>";}}}}function G(){d.wrapper.classList.add("overview");var ad=Array.prototype.slice.call(document.querySelectorAll(k));
for(var ai=0,ag=ad.length;ai<ag;ai++){var af=ad[ai],am="translateZ(-2500px) translate("+((ai-l)*105)+"%, 0%)";af.setAttribute("data-index-h",ai);af.style.display="block";
af.style.WebkitTransform=am;af.style.MozTransform=am;af.style.msTransform=am;af.style.OTransform=am;af.style.transform=am;if(!af.classList.contains("stack")){af.addEventListener("click",A,true);
}var al=Array.prototype.slice.call(af.querySelectorAll("section"));for(var ah=0,ae=al.length;ah<ae;ah++){var ak=al[ah],aj="translate(0%, "+((ah-c)*105)+"%)";
ak.setAttribute("data-index-h",ai);ak.setAttribute("data-index-v",ah);ak.style.display="block";ak.style.WebkitTransform=aj;ak.style.MozTransform=aj;ak.style.msTransform=aj;
ak.style.OTransform=aj;ak.style.transform=aj;ak.addEventListener("click",A,true);}}}function Y(){d.wrapper.classList.remove("overview");var ag=Array.prototype.slice.call(document.querySelectorAll(".reveal .slides section"));
for(var af=0,ad=ag.length;af<ad;af++){var ae=ag[af];ae.style.WebkitTransform="";ae.style.MozTransform="";ae.style.msTransform="";ae.style.OTransform="";
ae.style.transform="";ae.removeEventListener("click",A);}a();}function V(){return d.wrapper.classList.contains("overview");}function A(ad){if(V()){ad.preventDefault();
Y();l=this.getAttribute("data-index-h");c=this.getAttribute("data-index-v");a();}}function ab(ae,ag){var ai=Array.prototype.slice.call(document.querySelectorAll(ae)),aj=ai.length;
if(aj){if(N.loop){ag%=aj;if(ag<0){ag=aj+ag;}}ag=Math.max(Math.min(ag,aj-1),0);for(var ah=0;ah<aj;ah++){var ad=ai[ah];if(V()===false){var ak=Math.abs((ag-ah)%(aj-3))||0;
ad.style.display=ak>3?"none":"block";}ai[ah].classList.remove("past");ai[ah].classList.remove("present");ai[ah].classList.remove("future");if(ah<ag){ai[ah].classList.add("past");
}else{if(ah>ag){ai[ah].classList.add("future");}}if(ad.querySelector("section")){ai[ah].classList.add("stack");}}ai[ag].classList.add("present");var af=ai[ag].getAttribute("data-state");
if(af){ac=ac.concat(af.split(" "));}}else{ag=0;}return ag;}function a(aj,an){w=E;var ag=ac.concat();ac.length=0;var am=l,ae=c;l=ab(k,aj===undefined?l:aj);
c=ab(b,an===undefined?c:an);stateLoop:for(var ah=0,ak=ac.length;ah<ak;ah++){for(var af=0;af<ag.length;af++){if(ag[af]===ac[ah]){ag.splice(af,1);continue stateLoop;
}}document.documentElement.classList.add(ac[ah]);p(ac[ah]);}while(ag.length){document.documentElement.classList.remove(ag.pop());}if(N.progress&&d.progress){d.progressbar.style.width=(l/(document.querySelectorAll(k).length-1))*window.innerWidth+"px";
}if(V()){G();}q();clearTimeout(B);B=setTimeout(g,1500);var ad=document.querySelectorAll(k);var al=ad[l],ai=al.querySelectorAll("section");E=ai[c]||al;if(l!==am||c!==ae){p("slidechanged",{indexh:l,indexv:c,previousSlide:w,currentSlide:E});
}else{w=null;}if(w){w.classList.remove("present");}}function q(){if(!N.controls||!d.controls){return;}var ad=f();[d.controlsLeft,d.controlsRight,d.controlsUp,d.controlsDown].forEach(function(ae){ae.classList.remove("enabled");
});if(ad.left){d.controlsLeft.classList.add("enabled");}if(ad.right){d.controlsRight.classList.add("enabled");}if(ad.up){d.controlsUp.classList.add("enabled");
}if(ad.down){d.controlsDown.classList.add("enabled");}}function f(){var ad=document.querySelectorAll(k);var ae=document.querySelectorAll(b);return{left:l>0,right:l<ad.length-1,up:c>0,down:c<ae.length-1};
}function H(){var af=window.location.hash.slice(2).split("/");var ae=parseInt(af[0])||0;var ad=parseInt(af[1])||0;L(ae,ad);}function g(){if(N.history){var ad="/";
if(l>0||c>0){ad+=l;}if(c>0){ad+="/"+c;}window.location.hash=ad;}}function p(ae,ad){var af=document.createEvent("HTMLEvents",1,2);af.initEvent(ae,true,true);
r(af,ad);d.wrapper.dispatchEvent(af);}function t(){if(document.querySelector(b+".present")){var ae=document.querySelectorAll(b+".present .fragment:not(.visible)");
if(ae.length){ae[0].classList.add("visible");p("fragmentshown",{fragment:ae[0]});return true;}}else{var ad=document.querySelectorAll(k+".present .fragment:not(.visible)");
if(ad.length){ad[0].classList.add("visible");p("fragmentshown",{fragment:ad[0]});return true;}}return false;}function M(){if(document.querySelector(b+".present")){var ae=document.querySelectorAll(b+".present .fragment.visible");
if(ae.length){ae[ae.length-1].classList.remove("visible");p("fragmenthidden",{fragment:ae[ae.length-1]});return true;}}else{var ad=document.querySelectorAll(k+".present .fragment.visible");
if(ad.length){ad[ad.length-1].classList.remove("visible");p("fragmenthidden",{fragment:ad[ad.length-1]});return true;}}return false;}function K(){clearTimeout(j);
if(N.autoSlide){j=setTimeout(v,N.autoSlide);}}function L(ae,ad){a(ae,ad);}function z(){if(V()||M()===false){a(l-1,0);}}function i(){if(V()||t()===false){a(l+1,0);
}}function s(){if(V()||M()===false){a(l,c-1);}}function D(){if(V()||t()===false){a(l,c+1);}}function U(){if(M()===false){if(f().up){s();}else{var ad=document.querySelector(".reveal .slides>section.past:nth-child("+l+")");
if(ad){c=(ad.querySelectorAll("section").length+1)||0;l--;a();}}}}function v(){if(t()===false){f().down?D():i();}K();}function T(){if(V()){Y();}else{G();
}}return{initialize:h,navigateTo:L,navigateLeft:z,navigateRight:i,navigateUp:s,navigateDown:D,navigatePrev:U,navigateNext:v,toggleOverview:T,addEventListeners:C,removeEventListeners:Q,getIndices:function(){return{h:l,v:c};
},getPreviousSlide:function(){return w;},getCurrentSlide:function(){return E;},getQueryHash:function(){var ad={};location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(ae){ad[ae.split("=").shift()]=ae.split("=").pop();
});return ad;},addEventListener:function(ae,af,ad){if("addEventListener" in window){(d.wrapper||document.querySelector(".reveal")).addEventListener(ae,af,ad);
}},removeEventListener:function(ae,af,ad){if("addEventListener" in window){(d.wrapper||document.querySelector(".reveal")).removeEventListener(ae,af,ad);
}}};})();

var notes = false;

if (document.location.href.indexOf("notes=true") > -1) {
	document.body.className += " annotated";
	notes = true;
}





