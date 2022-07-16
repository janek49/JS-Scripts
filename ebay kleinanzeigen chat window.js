// ==UserScript==
// @name         Kleinanzeigen Toolkit
// @namespace    https://jbtrade31.pl
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.ebay-kleinanzeigen.de/m-nachrichten.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay-kleinanzeigen.de
// @grant        none
// ==/UserScript==

window.addEventListener('load', function () {
    setTimeout(() => {

        var container = document.getElementById("messagebox-bundle");
        var btn = document.createElement("button");
        btn.innerText = "Expand chat window";

        container.insertBefore(btn, container.children[0]);

        btn.onclick = function () { 
            if(this.innerText == "Expand chat window"){
                document.getElementsByClassName("Messagebox--Grid--Row2")[0].setAttribute("style", "height: 100%");
                this.innerText = "Collapse chat window";
            }else{
                document.getElementsByClassName("Messagebox--Grid--Row2")[0].setAttribute("style", "");
                this.innerText = "Expand chat window";
            }
        };

    }, 1000);
}, false);