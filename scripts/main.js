!function(e){"use strict";function s(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,s){var n=c(e,s)?a:t;n(e,s)}var c,t,a;"classList"in document.documentElement?(c=function(e,s){return e.classList.contains(s)},t=function(e,s){e.classList.add(s)},a=function(e,s){e.classList.remove(s)}):(c=function(e,n){return s(n).test(e.className)},t=function(e,s){c(e,s)||(e.className=e.className+" "+s)},a=function(e,n){e.className=e.className.replace(s(n)," ")});var o={hasClass:c,addClass:t,removeClass:a,toggleClass:n,has:c,add:t,remove:a,toggle:n};e.classie=o}(window),function(e){"use strict";function s(){console.log("clicked"),e.has(c,"open")?(e.remove(c,"open"),e.add(c,"close")):e.add(c,"open")}var n=document.getElementById("trigger-overlay"),c=document.querySelector("div.overlay"),t=c.querySelector(".overlay-close");n.addEventListener("click",s),t.addEventListener("click",s)}(window.classie);