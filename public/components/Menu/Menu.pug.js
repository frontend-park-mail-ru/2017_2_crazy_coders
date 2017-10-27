function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menuTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug":"div.menu\n    each butt in data.buttons\n        button(\n            class=butt.class\n            id=butt.id\n        )=butt.text\n\ndiv.auth-user-login\n    h1(align='middle')= data.user\n\n"};
;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + "\u003Cdiv class=\"menu\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
// iterate data.buttons
;(function(){
  var $$obj = data.buttons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var butt = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([butt.class], [true]), false, false)+pug_attr("id", butt.id, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = butt.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var butt = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([butt.class], [true]), false, false)+pug_attr("id", butt.id, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = butt.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + "\u003Cdiv class=\"auth-user-login\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + "\u003Ch1 align=\"middle\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fcomponents\u002FMenu\u002FMenu.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.user) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}