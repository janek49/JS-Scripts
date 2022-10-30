// ==UserScript==
// @name         BaseLinker uwaga 0% vat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://panel-d.baselinker.com/inventory_products.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baselinker.com
// @grant        none
// ==/UserScript==

setInterval(() => {
    if (window.saveProduct && !window.oldSaveProduct) {
        window.oldSaveProduct = saveProduct;

        window.saveProduct = function () {
            if ($("input[data-rate='0%'")[0].checked || $("input[id='tax'].form-control.main_field").val() === '') {
                alert("Uwaga! Ustawiłeś VAT 0% - jeśli to pomyłka ustaw poprawną stawkę.");
            }
            oldSaveProduct();
        }
    }
}, 1000);