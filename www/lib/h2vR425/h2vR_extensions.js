/* h2vR_extensions.js version 4.2.5
    last modified at May 04 2017
    (c)2011-2017 tyz@freefielder.jp 
		h2vR.js is distributed under the license : http://tategaki.info/h2vr/license.php .
    For detail , please visit http://tategaki.info/h2vr/
		Contact : tyz@freefielder.jp
    ** Don't remove this copyright message **
*/
var h2vR={version:"4.2.5",requied:411,verCheck:function(){return h2vr?1*h2vr.version.replace(/\./g,"")<h2vR.requied?(console.log("h2vR.jsを最新バージョンにしてください"),!1):!0:(console.log("h2vR.convert() - h2vR.jsが読み込まれていません"),!1)},convert:function(e){h2vR.verCheck()&&setTimeout(function(e){var t,r,g=h2vr;for(t=0;t<g.target.length;t++)if(g.target[t].ele.id==e){r=g.target[t];break}if(!r){if(!g.getById(e))return;g.target[g.target.length]=new g.h2v(g.getById(e)),t=g.target.length-1}0!=g.target[t].ele.offsetHeight&&(g.target[t].ele.sA("class",g.target[t].ele.gA("class").replace("h2vr_thru","").trim()),g.target[t].horizontal=!1,g.convert(g.target[t]))}(e),5)},switcher:function(e){h2vR.verCheck()&&setTimeout(function(e){var t,r,g,a=h2vr;for(r=0;r<a.target.length;r++)if(a.target[r].ele.id==e){t=a.target[r];break}if(g=a.getById(e),!t){if(!g)return;a.target[r]=new a.h2v(g),t=a.target[r]}if(0!=g.offsetHeight)if(a.getByClass(g,"h2v").length){g.innerHTML="";var n=g.gA("class"),h=g.gA("style");g.parentNode.rpC(t.org.cN(!0),g),g=a.getById(e),n&&g.sA("class",n),h&&g.sA("style",h),t.ele=a.getById(e),a.target[r].ele=a.getById(e),a.target[r].horizontal=!0}else a.target[r].pagewidth=Math.round(a.PX(a.getStyle(t.ele,"width"))),h2vR.convert(e)}(e),5)}};