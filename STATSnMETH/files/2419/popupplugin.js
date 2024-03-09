window.bioEp={bgEl:{},popupEl:{},closeBtnEl:{},shown:false,overflowDefault:"visible",html:"",css:"",fonts:[],delay:2,showOnDelay:false,cookieExp:30,cookieManager:{create:function(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
document.cookie=name+"="+value+expires+"; path=/";},get:function(name){var nameEQ=name+"=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}
return null;},erase:function(name){this.create(name,"",-1);}},checkCookie:function(){if(this.cookieExp<=0){this.cookieManager.erase("bioep_shown");return false;}
if(this.cookieManager.get("bioep_shown")=="true")
return true;this.cookieManager.create("bioep_shown","true",this.cookieExp);return false;},addCSS:function(){for(var i=0;i<this.fonts.length;i++){var font=document.createElement("link");font.href=this.fonts[i];font.type="text/css";font.rel="stylesheet";font.rel="stylesheet";document.head.appendChild(font);}},addPopup:function(){this.bgEl=document.createElement("div");this.bgEl.id="news-signup_bg";document.body.appendChild(this.bgEl);if(document.getElementById("news-signup"))
this.popupEl=document.getElementById("news-signup");else{this.popupEl=document.createElement("div");this.popupEl.id="news-signup";this.popupEl.innerHTML=this.html;document.body.appendChild(this.popupEl);}},showPopup:function(){if(this.shown)return;this.bgEl.style.visibility="visible";this.popupEl.style.visibility="visible";this.popupEl.style.opacity="1";this.popupEl.style.transform="scale(1)";this.popupEl.style.webkitTransform="scale(1)";this.popupEl.style.transition="0.4s, opacity 0.4s";this.popupEl.style.webkitTransform="0.4s, opacity 0.4s";this.overflowDefault=document.body.style.overflow;document.body.style.overflow="hidden";this.shown=true;},hidePopup:function(){this.bgEl.style.visibility="hidden";this.popupEl.style.visibility="hidden";this.popupEl.style.opacity="0";this.popupEl.style.transform="scale(0.5)";this.popupEl.style.webkitTransform="scale(0.5)";this.popupEl.style.transition="0.2s, opacity 0.2s, visibility 0s 0.2s";this.popupEl.style.webkitTransform="0.2s, opacity 0.2s, visibility 0s 0.2s";document.body.style.overflow=this.overflowDefault;},addEvent:function(obj,event,callback){if(obj.addEventListener)
obj.addEventListener(event,callback,false);else if(obj.attachEvent)
obj.attachEvent("on"+event,callback);},loadEvents:function(){this.addEvent(document,"mouseout",function(e){e=e?e:window.event;var from=e.relatedTarget||e.toElement;if(!from||from.nodeName==="HTML")
bioEp.showPopup();});this.closebtn=document.getElementById("news-signup_close");this.addEvent(this.closebtn,"click",function(){bioEp.hidePopup();});},setOptions:function(opts){this.html=(typeof opts.html==='undefined')?this.html:opts.html;this.css=(typeof opts.css==='undefined')?this.css:opts.css;this.fonts=(typeof opts.fonts==='undefined')?this.fonts:opts.fonts;this.delay=(typeof opts.delay==='undefined')?this.delay:opts.delay;this.showOnDelay=(typeof opts.showOnDelay==='undefined')?this.showOnDelay:opts.showOnDelay;this.cookieExp=(typeof opts.cookieExp==='undefined')?this.cookieExp:opts.cookieExp;},domReady:function(callback){(document.readyState==="interactive"||document.readyState==="complete")?callback():this.addEvent(document,"DOMContentLoaded",callback);},init:function(opts){if(typeof opts!=='undefined')
this.setOptions(opts);this.addCSS();this.domReady(function(){if(bioEp.checkCookie())return;bioEp.addPopup();setTimeout(function(){bioEp.loadEvents();if(bioEp.showOnDelay)
bioEp.showPopup();},bioEp.delay*1000);});}}
window.onload=function(){document.getElementById("news_signup_email").focus();};bioEp.init({fonts:['https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300'],cookieExp:0});$(document).ready(function(){var h=new Image();h.src=waitImage;$("#signup-form").submit(function(){var d=$("#news_signup_email").val();var e=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;var f=this.action;ajaxaddress=f.replace(/subscribe/,'asubscribe');$('#signup-form').html('<img src="'+h.src+'" width="'+h.width+'" height="'+h.height+'" border="0" alt="Please wait" title="hacker9 newsletter" />');if(e.test(d)){var g=$.ajax({type:'POST',url:ajaxaddress,crossDomain:true,data:"email="+d,success:function(a,b,c){if(a.search(/FAIL/)>=0){document.location=f+"&email="+d}else{$('#phplistsubscriberesult').html("<div id='subscribemessage'></div>");$('#subscribemessage').html(a).hide().fadeIn(1500);$("#signup-form").hide();document.cookie="phplistsubscribed=yes"}},error:function(a,b,c){document.location=f+"&email="+d}})}else{document.location=f+"&email="+d}
return false});$("#news_signup_email").val(pleaseEnter);$("#news_signup_email").focus(function(){var v=$("#news_signup_email").val();if(v==pleaseEnter){$("#news_signup_email").val("")}});$("#news_signup_email").blur(function(){var v=$("#news_signup_email").val();if(v==""){$("#emailaddress").val(pleaseEnter)}});var i=document.cookie;if(i.indexOf('phplistsubscribed=yes')>=0){$("#signup-form").html(thanksForSubscribing)}});$.ajaxTransport("+*",function(d,e,f){if(jQuery.browser.msie&&window.XDomainRequest){var g;return{send:function(b,c){g=new XDomainRequest();g.open("get",d.url+"&"+d.data);g.onload=function(){if(this.contentType.match(/\/xml/)){var a=new ActiveXObject("Microsoft.XMLDOM");a.async=false;a.loadXML(this.responseText);c(200,"success",[a])}else{c(200,"success",[this.responseText])}};g.ontimeout=function(){c(408,"error",["The request timed out."])};g.onerror=function(){c(404,"error",["The requested resource could not be found."])};g.send()},abort:function(){if(g)g.abort()}}}});if(pleaseEnter==undefined){var pleaseEnter="Enter your email"}
if(thanksForSubscribing==undefined){var thanksForSubscribing='<div class="subscribed">Thanks for subscribing. Please click the link in the confirmation email you will receive.</div>'}
if(waitImage==undefined){var waitImage='https://s3.amazonaws.com/phplist/img/busy.gif'}