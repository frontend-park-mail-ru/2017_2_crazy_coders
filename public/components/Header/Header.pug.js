function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function headerTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug":"div#theme-switch\n    h1 switch theme\ndiv.logo\n    p.rotateit= data.nameGame\n    img.logo_img(src='static\u002Fimg\u002Flogo.png')\n"};
;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv id=\"theme-switch\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "switch theme\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cp class=\"rotateit\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.nameGame) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cimg class=\"logo_img\" src=\"static\u002Fimg\u002Flogo.png\"\u002F\u003E\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}