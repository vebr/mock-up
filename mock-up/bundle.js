!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);n(2),n(6),n(7);jQuery(document).ready(function(e){e(".cd-dropdown-trigger").on("click",function(e){e.preventDefault(),n()}),e(".cd-dropdown .cd-close").on("click",function(e){e.preventDefault(),n()}),e(".has-children").children("a").on("click",function(t){t.preventDefault(),e(this).next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")});var t=e(".cd-dropdown-wrapper").hasClass("open-to-left")?"left":"right";function n(){var t=!e(".cd-dropdown").hasClass("dropdown-is-active");e(".cd-dropdown").toggleClass("dropdown-is-active",t),e(".cd-dropdown-trigger").toggleClass("dropdown-is-active",t),t||e(".cd-dropdown").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e(".has-children ul").addClass("is-hidden"),e(".move-out").removeClass("move-out"),e(".is-active").removeClass("is-active")})}e(".cd-dropdown-content").menuAim({activate:function(t){e(t).children().addClass("is-active").removeClass("fade-out"),0==e(".cd-dropdown-content .fade-in").length&&e(t).children("ul").addClass("fade-in")},deactivate:function(t){e(t).children().removeClass("is-active"),(0==e("li.has-children:hover").length||e("li.has-children:hover").is(e(t)))&&(e(".cd-dropdown-content").find(".fade-in").removeClass("fade-in"),e(t).children("ul").addClass("fade-out"))},exitMenu:function(){return e(".cd-dropdown-content").find(".is-active").removeClass("is-active"),!0},submenuDirection:t}),e(".go-back").on("click",function(){var t=e(this);e(this).parent("ul").parent(".has-children").parent("ul");t.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")}),Modernizr.input.placeholder||(e("[placeholder]").focus(function(){var t=e(this);t.val()==t.attr("placeholder")&&t.val("")}).blur(function(){var t=e(this);""!=t.val()&&t.val()!=t.attr("placeholder")||t.val(t.attr("placeholder"))}).blur(),e("[placeholder]").parents("form").submit(function(){e(this).find("[placeholder]").each(function(){var t=e(this);t.val()==t.attr("placeholder")&&t.val("")})}))}),$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>300?($(".navbar-change").css("color","red"),$(".navbar-change").css("background","#FECF3B")):$(".navbar-change").css("background","")})}),jQuery(document).ready(function(e){e(".cd-testimonials-wrapper").flexslider({selector:".cd-testimonials > li",animation:"slide",controlNav:!1,slideshow:!1,smoothHeight:!0,start:function(){e(".cd-testimonials").children("li").css({opacity:1,position:"relative"})}}),e(".cd-see-all").on("click",function(){e(".cd-testimonials-all").addClass("is-visible")}),e(".cd-testimonials-all .close-btn").on("click",function(){e(".cd-testimonials-all").removeClass("is-visible")}),e(document).keyup(function(t){"27"==t.which&&e(".cd-testimonials-all").removeClass("is-visible")}),e(".cd-testimonials-all-wrapper").children("ul").masonry({itemSelector:".cd-testimonials-item"})})},function(e,t,n){(function(e){!function(t){t.flexslider=function(n,a){var i=t(n);i.vars=t.extend({},t.flexslider.defaults,a);var o,r=i.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click touchend MSPointerUp",u="",d="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,h={};t.data(n,"flexslider",i),h={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=t(i.vars.selector,i),i.container=t(i.containerSelector,i),i.count=i.slides.length,i.syncExists=t(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=d?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return i.pfx=t[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=t(i.vars.controlsContainer).length>0&&t(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=t(i.vars.manualControls).length>0&&t(i.vars.manualControls)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&h.controlNav.setup(),i.vars.directionNav&&h.directionNav.setup(),i.vars.keyboard&&(1===t(i.containerSelector).length||i.vars.multipleKeyboard)&&t(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var n=39===t?i.getTarget("next"):37===t&&i.getTarget("prev");i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t){e.preventDefault();var n=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(n,i.vars.pauseOnAction)}),i.vars.pausePlay&&h.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&h.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&h.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&h.asNav.setup(),l&&i.vars.touch&&h.touch(),(!m||m&&i.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",h.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),s?(n._slider=i,i.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var n=t(this),a=n.index();t(i.vars.asNavFor).data("flexslider").animating||n.hasClass("active")||(i.direction=i.currentItem<a?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(e){e.preventDefault();var n=t(this),a=n.index();0>=n.offset().left-t(i).scrollLeft()&&n.hasClass(r+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):t(i.vars.asNavFor).data("flexslider").animating||n.hasClass(r+"active-slide")||(i.direction=i.currentItem<a?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?h.controlNav.setupManual():h.controlNav.setupPaging()},setupPaging:function(){var e,n,a="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",o=1;if(i.controlNavScaffold=t('<ol class="'+r+"control-nav "+r+a+'"></ol>'),i.pagingCount>1)for(var s=0;s<i.pagingCount;s++){if(n=i.slides.eq(s),e="thumbnails"===i.vars.controlNav?'<img src="'+n.attr("data-thumb")+'"/>':"<a>"+o+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var l=n.attr("data-thumbcaption");""!=l&&void 0!=l&&(e+='<span class="'+r+'caption">'+l+"</span>")}i.controlNavScaffold.append("<li>"+e+"</li>"),o++}i.controlsContainer?t(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),h.controlNav.set(),h.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(e){if(e.preventDefault(),""===u||u===e.type){var n=t(this),a=i.controlNav.index(n);n.hasClass(r+"active")||(i.direction=a>i.currentSlide?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction))}""===u&&(u=e.type),h.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,h.controlNav.active(),i.controlNav.bind(c,function(e){if(e.preventDefault(),""===u||u===e.type){var n=t(this),a=i.controlNav.index(n);n.hasClass(r+"active")||(i.direction=a>i.currentSlide?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction))}""===u&&(u=e.type),h.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=t("."+r+"control-nav li "+e,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(e,n){i.pagingCount>1&&"add"===e?i.controlNavScaffold.append(t("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),h.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(n,e):h.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+r+'direction-nav"><li><a class="'+r+'prev" href="#">'+i.vars.prevText+'</a></li><li><a class="'+r+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.controlsContainer?(t(i.controlsContainer).append(e),i.directionNav=t("."+r+"direction-nav li a",i.controlsContainer)):(i.append(e),i.directionNav=t("."+r+"direction-nav li a",i)),h.directionNav.update(),i.directionNav.bind(c,function(e){var n;e.preventDefault(),(""===u||u===e.type)&&(n=t(this).hasClass(r+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(n,i.vars.pauseOnAction)),""===u&&(u=e.type),h.setToClearWatchedEvent()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+r+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(e),i.pausePlay=t("."+r+"pauseplay a",i.controlsContainer)):(i.append(e),i.pausePlay=t("."+r+"pauseplay a",i)),h.pausePlay.update(i.vars.slideshow?r+"pause":r+"play"),i.pausePlay.bind(c,function(e){e.preventDefault(),(""===u||u===e.type)&&(t(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===u&&(u=e.type),h.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").html(i.vars.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").html(i.vars.pauseText)}},touch:function(){function t(e){g=e.touches[0].pageX,y=e.touches[0].pageY,u=d?o-y:o-g;(!(h=d?Math.abs(u)<Math.abs(g-r):Math.abs(u)<Math.abs(y-r))||Number(new Date)-f>500)&&(e.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(u/=0===i.currentSlide&&0>u||i.currentSlide===i.last&&u>0?Math.abs(u)/c+2:1),i.setProps(l+u,"setTouch")))}function a(){if(n.removeEventListener("touchmove",t,!1),i.animatingTo===i.currentSlide&&!h&&null!==u){var e=v?-u:u,s=e>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(s)&&(Number(new Date)-f<550&&Math.abs(e)>50||Math.abs(e)>c/2)?i.flexAnimate(s,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}n.removeEventListener("touchend",a,!1),o=null,r=null,u=null,l=null}var o,r,l,c,u,f,h=!1,g=0,y=0,w=0;s?(n.style.msTouchAction="none",n._gesture=new MSGesture,n._gesture.target=n,n.addEventListener("MSPointerDown",function(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),n._gesture.addPointer(e.pointerId),w=0,c=d?i.h:i.w,f=Number(new Date),l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c)},!1),n._slider=i,n.addEventListener("MSGestureChange",function(t){t.stopPropagation();var a=t.target._slider;if(a){var i=-t.translationX,o=-t.translationY;return u=w+=d?o:i,h=d?Math.abs(w)<Math.abs(-i):Math.abs(w)<Math.abs(-o),t.detail===t.MSGESTURE_FLAG_INERTIA?void e(function(){n._gesture.stop()}):void((!h||Number(new Date)-f>500)&&(t.preventDefault(),!m&&a.transitions&&(a.vars.animationLoop||(u=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/c+2:1)),a.setProps(l+u,"setTouch"))))}},!1),n.addEventListener("MSGestureEnd",function(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!h&&null!==u){var n=v?-u:u,a=n>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(a)&&(Number(new Date)-f<550&&Math.abs(n)>50||Math.abs(n)>c/2)?t.flexAnimate(a,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}o=null,r=null,u=null,l=null,w=0}},!1)):n.addEventListener("touchstart",function(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),c=d?i.h:i.w,f=Number(new Date),g=e.touches[0].pageX,y=e.touches[0].pageY,l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c,o=d?y:g,r=d?g:y,n.addEventListener("touchmove",t,!1),n.addEventListener("touchend",a,!1))},!1)},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?h.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):d?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&h.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!d||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(e){var n=t(i.vars.sync).data("flexslider"),a=i.animatingTo;switch(e){case"animate":n.flexAnimate(a,i.vars.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}},uniqueID:function(e){return e.find("[id]").each(function(){var e=t(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(h.pauseInvisible.visProp=e[t]+"Hidden");if(h.pauseInvisible.visProp){var n=h.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){h.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){return document[h.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(o),o=setTimeout(function(){u=""},3e3)}},i.flexAnimate=function(e,n,a,o,s){if(i.vars.animationLoop||e===i.currentSlide||(i.direction=e>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<e?"next":"prev"),!i.animating&&(i.canAdvance(e,s)||a)&&i.is(":visible")){if(f&&o){var c=t(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===e||e===i.count-1,c.flexAnimate(e,!0,!1,!0,s),i.direction=i.currentItem<e?"next":"prev",c.direction=i.direction,Math.ceil((e+1)/i.visible)-1===i.currentSlide||0===e)return i.currentItem=e,i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),!1;i.currentItem=e,i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),e=Math.floor(e/i.visible)}if(i.animating=!0,i.animatingTo=e,n&&i.pause(),i.vars.before(i),i.syncExists&&!s&&h.sync("animate"),i.vars.controlNav&&h.controlNav.active(),p||i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),i.atEnd=0===e||e===i.last,i.vars.directionNav&&h.directionNav.update(),e===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(e).css({opacity:1,zIndex:2}),i.wrapup(w)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(e).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var u,g,y,w=d?i.slides.filter(":first").height():i.computedW;p?(u=i.vars.itemMargin,g=(y=(i.itemW+u)*i.move*i.animatingTo)>i.limit&&1!==i.visible?i.limit:y):g=0===i.currentSlide&&e===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*w:0:i.currentSlide===i.last&&0===e&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*w:v?(i.count-1-e+i.cloneOffset)*w:(e+i.cloneOffset)*w,i.setProps(g,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(w)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(w)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(w)})}i.vars.smoothHeight&&h.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&h.pausePlay.update("play"),i.syncExists&&h.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&h.pausePlay.update("pause"),i.syncExists&&h.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var n=f?i.pagingCount-1:i.last;return!!t||(!(!f||i.currentItem!==i.count-1||0!==e||"prev"!==i.direction)||(!f||0!==i.currentItem||e!==i.pagingCount-1||"next"===i.direction)&&(!(e===i.currentSlide&&!f)&&(!!i.vars.animationLoop||(!i.atEnd||0!==i.currentSlide||e!==n||"next"===i.direction)&&(!i.atEnd||i.currentSlide!==n||0!==e||"next"!==i.direction))))},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,n){var a=function(){var n=e||(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo;return-1*function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}()+"px"}();i.transitions&&(a=d?"translate3d(0,"+a+",0)":"translate3d("+a+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.container.css("transition-duration",n)),i.args[i.prop]=a,(i.transitions||void 0===n)&&i.container.css(i.args),i.container.css("transform",a)},i.setup=function(e){var n,a;m?(i.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&h.smoothHeight()):("init"===e&&(i.viewport=t('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(a=t.makeArray(i.slides).reverse(),i.slides=t(a),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==e&&i.container.find(".clone").remove(),h.uniqueID(i.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(i.container),h.uniqueID(i.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(i.container)),i.newSlides=t(i.vars.selector,i),n=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,d&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===e?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,float:"left",display:"block"}),i.vars.smoothHeight&&h.smoothHeight()},"init"===e?100:0)));p||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,n=i.vars.minItems,a=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.minW=n?n*i.itemT:i.w,i.maxW=a?a*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(n-1))/n:i.maxW<i.w?(i.w-t*(a-1))/a:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?h.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),h.controlNav.update("remove",i.last))),i.vars.directionNav&&h.directionNav.update()},i.addSlide=function(e,n){var a=t(e);i.count+=1,i.last=i.count-1,d&&v?void 0!==n?i.slides.eq(i.count-n).after(a):i.container.prepend(a):void 0!==n?i.slides.eq(n).before(a):i.container.append(a),i.update(n,"add"),i.slides=t(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(e){var n=isNaN(e)?i.slides.index(t(e)):e;i.count-=1,i.last=i.count-1,isNaN(e)?t(e,i.slides).remove():d&&v?i.slides.eq(i.last).remove():i.slides.eq(e).remove(),i.doMath(),i.update(n,"remove"),i.slides=t(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},h.init()},t(window).blur(function(){focused=!1}).focus(function(){focused=!0}),t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var n=t(this),a=e.selector?e.selector:".slides > li",i=n.find(a);1===i.length&&!0===e.allowOneSlide||0===i.length?(i.fadeIn(400),e.start&&e.start(n)):void 0===n.data("flexslider")&&new t.flexslider(this,e)});var n=t(this).data("flexslider");switch(e){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof e&&n.flexAnimate(e,!0)}}}(jQuery)}).call(this,n(3).setImmediate)},function(e,t,n){(function(e){var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var a,i=1,o={},r=!1,s=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?a=function(e){t.nextTick(function(){u(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&u(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},a=function(t){e.port2.postMessage(t)}}():s&&"onreadystatechange"in s.createElement("script")?function(){var e=s.documentElement;a=function(t){var n=s.createElement("script");n.onreadystatechange=function(){u(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():a=function(e){setTimeout(u,0,e)},l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return o[i]=r,a(i),i++},l.clearImmediate=c}function c(e){delete o[e]}function u(e){if(r)setTimeout(u,0,e);else{var t=o[e];if(t){r=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a)}}(t)}finally{c(e),r=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,a,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:r}catch(e){a=r}}();var l,c=[],u=!1,d=-1;function v(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=s(v);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){!function(e){e.fn.menuAim=function(t){return this.each(function(){(function(t){var n=e(this),a=null,i=[],o=null,r=null,s=e.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:e.noop,exit:e.noop,activate:e.noop,deactivate:e.noop,exitMenu:e.noop},t),l=function(e){e!=a&&(a&&s.deactivate(a),s.activate(e),a=e)},c=function(e){var t=u();t?r=setTimeout(function(){c(e)},t):l(e)},u=function(){if(!a||!e(a).is(s.submenuSelector))return 0;var t=n.offset(),r={x:t.left,y:t.top-s.tolerance},l={x:t.left+n.outerWidth(),y:r.y},c={x:t.left,y:t.top+n.outerHeight()+s.tolerance},u={x:t.left+n.outerWidth(),y:c.y},d=i[i.length-1],v=i[0];if(!d)return 0;if(v||(v=d),v.x<t.left||v.x>u.x||v.y<t.top||v.y>u.y)return 0;if(o&&d.x==o.x&&d.y==o.y)return 0;function p(e,t){return(t.y-e.y)/(t.x-e.x)}var m=l,f=u;"left"==s.submenuDirection?(m=c,f=r):"below"==s.submenuDirection?(m=u,f=c):"above"==s.submenuDirection&&(m=r,f=l);var h=p(d,m),g=p(d,f),y=p(v,m),w=p(v,f);return h<y&&g>w?(o=d,300):(o=null,0)};n.mouseleave(function(){r&&clearTimeout(r);s.exitMenu(this)&&(a&&s.deactivate(a),a=null)}).find(s.rowSelector).mouseenter(function(){r&&clearTimeout(r);s.enter(this),c(this)}).mouseleave(function(){s.exit(this)}).click(function(){l(this)}),e(document).mousemove(function(e){i.push({x:e.pageX,y:e.pageY}),i.length>3&&i.shift()})}).call(this,t)}),this}}(jQuery)},function(e,t){!function(){var e=document.getElementsByClassName("js-cd-top")[0],t=300,n=1200;function a(){var a=window.scrollY||document.documentElement.scrollTop;a>t?o(e,"cd-top--show"):function e(t,n){var a=n.split(" ");if(t.classList)t.classList.remove(a[0]);else if(i(t,a[0])){var o=new RegExp("(\\s|^)"+a[0]+"(\\s|$)");t.className=t.className.replace(o," ")}a.length>1&&e(t,a.slice(1).join(" "))}(e,"cd-top--show"),a>n&&o(e,"cd-top--fade-out"),scrolling=!1}function i(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function o(e,t){var n=t.split(" ");e.classList?e.classList.add(n[0]):i(e,n[0])||(e.className+=" "+n[0]),n.length>1&&o(e,n.slice(1).join(" "))}scrolling=!1,e&&(window.addEventListener("scroll",function(e){scrolling||(scrolling=!0,window.requestAnimationFrame?window.requestAnimationFrame(a):setTimeout(a,250))}),e.addEventListener("click",function(e){e.preventDefault(),window.requestAnimationFrame?function(e){var t=window.scrollY||document.documentElement.scrollTop,n=null,a=function(i){n||(n=i);var o=i-n,r=Math.max(Math.easeInOutQuad(o,t,-t,e),0);window.scrollTo(0,r),o<e&&window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}(700):window.scrollTo(0,0)})),Math.easeInOutQuad=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}}()}]);