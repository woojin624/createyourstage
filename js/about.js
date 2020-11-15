"use strict";

warningPopUp = Array.prototype.slice.call(warningPopUp);

let isPopUp = false;
const graph = document.querySelector(".cir2");
for (let i = 0; i < warningPopUp.length; i++) {
    warningPopUp[i].addEventListener("click", (e) => {
        console.log(isPopUp);
        let idx = e.currentTarget,
            target = warningPopUp.indexOf(idx);

        for (let j = 0; j < warningPopUp.length; j++) {
            warningPopUp[j].classList.remove("on-popup");
            warningPopUp[j].style.zIndex = 2;
            if (isPopUp) {
                warningPopUp[j].classList.add("loaded");
            }
        }

        if (!isPopUp) {
            warningPopUp[target].classList.add("on-popup");
            warningPopUp[target].style.zIndex = 3;
            warningPopUp[target].classList.remove("loaded");
            isPopUp = true;
            if (target === 0) {
                var g = 1;
                var func1 = setInterval(function () {
                    if (g < 81) {
                        color1(g);
                        g++;
                    } else {
                        clearInterval(func1);
                    }
                    console.log("dkdkdkdk");
                }, 10);
                function color1(g) {
                    setTimeout(() => {
                        graph.style.background = `conic-gradient(#7d31f6 0% ${g}%, #ffffff00 ${g}% 100%)`;
                        graph.style.transitionDelay = "background 0.3s";
                    }, 500);
                }
            }
        } else {
            warningPopUp[target].classList.remove("on-popup");
            warningPopUp[target].style.zIndex = 2;
            warningPopUp[target].classList.add("loaded");
            isPopUp = false;
            graph.style.background = "none";
        }
    });
}
