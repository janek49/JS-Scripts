// ==UserScript==
// @name        Baselinker Allegro Taskbar
// @namespace   pl.janbartula.baselinker.taskbar
// @description Baselinker Allegro pasek zadań zawsze widoczny
// @include	    *.baselinker.com/allegro_auctions.php*
// @version     1.0
// ==/UserScript==

setInterval(function () {
    var div = document.getElementById("table_auctions_containter");

    if (div == null) {
        return;
    }

    var table = div.getElementsByTagName("table")[0];
    var rows = table.getElementsByTagName("tr");

    var footer = div.getElementsByClassName("table-footer")[1];

    if (rows.length < 20) {
        var style = footer.getAttribute("style");
        if (style == null || style == "") {
            footer.setAttribute("style", "");
            footer.previousSibling.setAttribute("style", "");
        }
        return;
    }

    var width = div.offsetWidth;
    footer.setAttribute("style", "position: fixed; bottom: 1em; width:" + width + "px; background: white; border: 1px solid black;");
    footer.previousSibling.setAttribute("style", "margin-bottom: 100px;");
}, 1000);