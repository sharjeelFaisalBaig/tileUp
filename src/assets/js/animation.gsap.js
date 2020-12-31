/*!
* ScrollMagic v2.0.6 (2018-10-08)
* The javascript library for magical scroll interactions.
* (c) 2018 Jan Paepke (@janpaepke)
* Project Website: http://scrollmagic.io
*
* @version 2.0.6
* @license Dual licensed under MIT license and GPL.
* @author Jan Paepke - e-mail@janpaepke.de
*
* @file ScrollMagic GSAP Animation Plugin.
*
* requires: GSAP ~1.14
* Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
* Greensock License info at http://www.greensock.com/licensing/
*/(function(root,factory){if(typeof define==='function'&&define.amd){define(['ScrollMagic','TweenMax','TimelineMax'],factory);}else if(typeof exports==='object'){require('gsap');factory(require('scrollmagic'),TweenMax,TimelineMax);}else{factory(root.ScrollMagic||(root.jQuery&&root.jQuery.ScrollMagic),root.TweenMax||root.TweenLite,root.TimelineMax||root.TimelineLite);}}(this,function(ScrollMagic,Tween,Timeline){"use strict";var NAMESPACE="animation.gsap";var
console=window.console||{},err=Function.prototype.bind.call(console.error||console.log||function(){},console);if(!ScrollMagic){err("("+NAMESPACE+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");}
if(!Tween){err("("+NAMESPACE+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");}
ScrollMagic.Scene.addOption("tweenChanges",false,function(val){return!!val;});ScrollMagic.Scene.extend(function(){var Scene=this,_tween;var log=function(){if(Scene._log){Array.prototype.splice.call(arguments,1,0,"("+NAMESPACE+")","->");Scene._log.apply(this,arguments);}};Scene.on("progress.plugin_gsap",function(){updateTweenProgress();});Scene.on("destroy.plugin_gsap",function(e){Scene.removeTween(e.reset);});var updateTweenProgress=function(){if(_tween){var
progress=Scene.progress(),state=Scene.state();if(_tween.repeat&&_tween.repeat()===-1){if(state==='DURING'&&_tween.paused()){_tween.play();}else if(state!=='DURING'&&!_tween.paused()){_tween.pause();}}else if(progress!=_tween.progress()){if(Scene.duration()===0){if(progress>0){_tween.play();}else{_tween.reverse();}}else{if(Scene.tweenChanges()&&_tween.tweenTo){_tween.tweenTo(progress*_tween.duration());}else{_tween.progress(progress).pause();}}}}};Scene.setTween=function(TweenObject,duration,params){var newTween;if(arguments.length>1){if(arguments.length<3){params=duration;duration=1;}
TweenObject=Tween.to(TweenObject,duration,params);}
try{if(Timeline){newTween=new Timeline({smoothChildTiming:true}).add(TweenObject);}else{newTween=TweenObject;}
newTween.pause();}catch(e){log(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");return Scene;}
if(_tween){Scene.removeTween();}
_tween=newTween;if(TweenObject.repeat&&TweenObject.repeat()===-1){_tween.repeat(-1);_tween.yoyo(TweenObject.yoyo());}
if(Scene.tweenChanges()&&!_tween.tweenTo){log(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");}
if(_tween&&Scene.controller()&&Scene.triggerElement()&&Scene.loglevel()>=2){var
triggerTweens=Tween.getTweensOf(Scene.triggerElement()),vertical=Scene.controller().info("vertical");triggerTweens.forEach(function(value,index){var
tweenvars=value.vars.css||value.vars,condition=vertical?(tweenvars.top!==undefined||tweenvars.bottom!==undefined):(tweenvars.left!==undefined||tweenvars.right!==undefined);if(condition){log(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");return false;}});}
if(parseFloat(TweenLite.version)>=1.14){var
list=_tween.getChildren?_tween.getChildren(true,true,false):[_tween],newCallback=function(){log(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");};for(var i=0,thisTween,oldCallback;i<list.length;i++){thisTween=list[i];if(oldCallback!==newCallback){oldCallback=thisTween.vars.onOverwrite;thisTween.vars.onOverwrite=function(){if(oldCallback){oldCallback.apply(this,arguments);}
newCallback.apply(this,arguments);};}}}
log(3,"added tween");updateTweenProgress();return Scene;};Scene.removeTween=function(reset){if(_tween){if(reset){_tween.progress(0).pause();}
_tween.kill();_tween=undefined;log(3,"removed tween (reset: "+(reset?"true":"false")+")");}
return Scene;};});}));