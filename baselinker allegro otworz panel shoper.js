// ==UserScript==
// @name     Baselinker otwórz panel shoper
// @version  1
// @grant    none
// @include  *.baselinker.com/allegro_auctions.php*
// ==/UserScript==

function runElevatedScript(fn) {
    var script = window.document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    window.document.body.appendChild(script); // run the script
    window.document.body.removeChild(script); // clean up
}

runElevatedScript(function () {

    function PopupCenter(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = (window.screenLeft != undefined ? window.screenLeft : screen.left) / window.devicePixelRatio;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + (dualScreenLeft);
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'noreferrer, scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }

    window.onbtnclickshoper = function (btn) {
        hl(btn.parentElement.parentElement.parentElement);
        var idspan = btn.parentElement.getElementsByClassName("prod_id")[0];
        var id = idspan.innerText;
        var url = "https://" + idspan.parentElement.innerText.split("|")[0].trim() + "/admin/products/edit/id/" + id;
        PopupCenter(url, "_blank", screen.width / 2, screen.height / 1.5);
    }

    setInterval(function () {
        var spans = document.getElementById("table_auctions_containter").getElementsByClassName("prod_id");
        for (var i = 0; i < spans.length; i++) {
            try {

                var span = spans[i];
                if (span.parentElement.getElementsByClassName("panel-open-link").length > 0) {
                    continue;
                }
                var url = "https://" + span.parentElement.innerText.split("|")[0].trim() + "/admin/stock/list#/filter_search/" + span.innerText;
                var a = document.createElement("a");

                a.setAttribute("onclick", "hl(this.parentElement.parentElement.parentElement)");
                a.href = url;
                a.className = "panel-open-link btn btn-xs";
                a.style = "border-radius: 3px !important; margin-left: 5px;";

                a.innerHTML = "<span class=\"fa fa-copy\"></span> Shoper";
                a.rel = "noreferrer";
                a.target = "_blank";
                span.parentElement.appendChild(a);

                var btnEdit = document.createElement("button");
                btnEdit.setAttribute("onclick", "onbtnclickshoper(this);");
                btnEdit.className = "panel-open-link btn btn-xs";
                btnEdit.style = "border-radius: 3px !important; margin-left: 5px;";
                btnEdit.innerHTML = "<span class=\"fa fa-pencil\"></span>";

                span.parentElement.appendChild(btnEdit);
            } catch (err) { }
        }
    }, 500);
});


