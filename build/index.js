"use strict";
(() => {
    const el = document.querySelector("#title");
    if (!el)
        return;
    const s = el.innerHTML;
    let i = 0;
    const interval = setInterval(() => {
        i++;
        if (i > s.length)
            return clearInterval(interval);
        el.innerHTML = s.substring(0, i) + (i != s.length ? "|" : "");
    }, 100);
})();
