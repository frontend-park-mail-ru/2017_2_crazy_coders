function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function tableTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug":"div.table\n    div.table__title=data.title\n\n    div.table__content\n        table.table__tag(class=data.classTable)\n            tr.table__tr\n                td.table__td='MOUSE CONTROL'\n                td.table__td\n                    label.table__switch\n                        input(type='checkbox')\n                        span.table__slider\n                tr.table__tr\n                    td.table__td\n                        img.table__image(src='\u002Fimg\u002Fkeyboard.png')\n\n    div.table__back\n        button.table__button(id=data.idButton)='BACK'"};
;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cdiv class=\"table\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cdiv class=\"table__title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cdiv class=\"table__content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctable" + (pug_attr("class", pug_classes(["table__tag",data.classTable], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctr class=\"table__tr\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctd class=\"table__td\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'MOUSE CONTROL') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctd class=\"table__td\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Clabel class=\"table__switch\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cinput type=\"checkbox\"\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cspan class=\"table__slider\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctr class=\"table__tr\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Ctd class=\"table__td\"\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cimg class=\"table__image\" src=\"\u002Fimg\u002Fkeyboard.png\"\u002F\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftr\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cdiv class=\"table__back\"\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"table__button\""+pug_attr("id", data.idButton, true, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FTable\u002FSettings\u002FTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}