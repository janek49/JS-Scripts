// ==UserScript==
// @name     Allegro highlighter
// @version  1
// @grant    none
// @incldue  https://allegro.pl/moje-allegro/sprzedaz/obsluga-ofert/moj-asortyment*
// ==/UserScript==

setInterval(() => {
    var observers = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.includes('obserwują'));
    observers.forEach(function (el) {
        let cc = el.nextElementSibling.innerText;
        if (cc !== '0') {
            el.setAttribute("style", "background-color: yellow;");
            el.nextElementSibling.setAttribute("style", "background-color: yellow;");
        }
    });


    var visitors = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.includes('wizyty'));
    visitors.forEach(function (el) {
        let cc = el.nextElementSibling.innerText;
        if (cc !== '0') {
            el.setAttribute("style", "background-color: #AAFFAA;");
            el.nextElementSibling.setAttribute("style", "background-color: #AAFFAA;");
        } else {
            el.setAttribute("style", "background-color: #FFAAAA;");
            el.nextElementSibling.setAttribute("style", "background-color: #FFAAAA;");
        }
    });
}, 500);