// ==UserScript==
// @name         Remove bilibili topic panel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  nobody needs that
// @author       陈睿
// @match        https://t.bilibili.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let elemenDetection = setInterval(function(){
        if (document.getElementsByClassName('topic-panel')[0] != undefined) {
            let panels = document.getElementsByClassName('topic-panel')
            // console.log("panels[0]", panels[0])
            panels[0].style.display = "none"
            // console.log("panels[0].style.display", panels[0].style.display)
            clearInterval(elemenDetection)
        }
    }, 1)

})();
