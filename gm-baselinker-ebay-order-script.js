// ==UserScript==
// @name         BaseLinker eBay Order
// @namespace    http://jbcode.pl/
// @version      0.1
// @description  Open BaseLinker order in eBay seller dashboard
// @author       JBCODE
// @include      *baselinker.com/orders.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baselinker.com

// ==/UserScript==

setTimeout(function(){
 setInterval(function(){

     if(document.getElementById("gm_ext_ebay") !== null)return;

     var button = document.createElement("a");
     button.setAttribute("class", "btn btn-default btn-labeled");
     button.id = "gm_ext_ebay";
     button.innerText = "Otwórz na eBayu";
     button.href = "https://www.ebay.de/sh/ord/details?orderid=" + document.getElementById("order_info_extra_field_2").innerText;
     button.target="_blank";

     var div = document.createElement("div");
     div.setAttribute("style", "margin-bottom: 5px;");
     div.setAttribute("class", "btn-group");

     div.appendChild(button);

     var ctx = document.getElementById("table_order_products").parentElement;
     ctx.insertBefore(div, ctx.lastElementChild);

 }, 1000);
},1000);

