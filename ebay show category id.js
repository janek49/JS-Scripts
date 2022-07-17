// ==UserScript==
// @name         eBay show category Id
// @namespace    http://jbcode.pl/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *.ebay.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.de
// @grant        none
// ==/UserScript==

window.addEventListener('load', function () {
    setTimeout(() => {

        var bc = document.getElementById("bc");
        var col = bc.getElementsByClassName("seo-breadcrumb-text");
        var a = col[col.length - 1];

        if (a.getAttribute("href").includes("/p/"))
            a = col[col.length - 2];

        var catIdArr = a.getAttribute("href").split("/");
        var catId = catIdArr[catIdArr.length - 2];

        var h2 = document.createElement("h2");
        h2.innerText = "Category ID: " + catId;
        document.getElementById("RightSummaryPanel").appendChild(h2);

    }, 1000);
}, false);

