!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(){"use strict";function e(){if(n=document.querySelectorAll(".activity .js-add-kudo, .group-activity .js-add-kudo"),(r=document.getElementById("stravaKudos"))&&r.parentNode.removeChild(r),n.length){var e=document.createElement("div");e.id="stravaKudos";var t=document.createElement("span");t.innerHTML="Yup!",t.onclick=function(){e.parentNode.removeChild(e);for(var t=0;t<n.length;t++)n[t].click()},e.innerHTML="There are "+n.length+" activities that you havent Kudos'd, would you like to?",e.appendChild(t),document.body.appendChild(e)}}var t=chrome.extension.getURL("styles.css");document.querySelector("head").innerHTML+='<link rel="stylesheet" type="text/css" href="'+t+'" />';var n,r=null;setInterval(e,2500)}]);