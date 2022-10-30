// ==UserScript==
// @name         Baselinker auto toggle params
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://panel-d.baselinker.com/ebay_sell_form.php*
// @match        https://panel-d.baselinker.com/allegro_sell_form.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baselinker.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    if (!$('#p0_params_tr').is(':visible')) {
        $('button[data-original-title="Parametry kategorii"]').click()
    }

    if (!$('#p0_extra_tr').is(':visible')) {
        $('#p0_extra_tr').toggle()
    }

    setInterval(function(){
      if($("[name=BestOffer]")[0] && $("[name=BestOffer]").val() != "No")
        $("[name=BestOffer]").val("Yes")
    }, 1000);
}, false);