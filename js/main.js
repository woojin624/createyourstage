const sList = document.querySelector("section.main > article.main-title > div > div.underline > .ul-wrap > ul");
const sListEls = document.querySelectorAll("section.main > article.main-title > div > div.underline > .ul-wrap > ul > li");
const sListStage = document.querySelector("section.main > article.main-title > div");
const sListUnderline = document.querySelector("section.main > article.main-title > div > div.underline");
const sListStageElement = document.querySelector("section.main > article.main-title > div > div.underline > .ul-wrap > ul > li:nth-child(5) > img");

let sListTime = 400;
let sListTotalTime = 400 * sListEls.length;
let sListIndex = -1;

let sListUp = setInterval(function () {
    sList.style.top = sListIndex * -100 + "%";
    sListIndex++;
    if (sListIndex == 5) {
        setTimeout(() => clearInterval(sListUp));
        setTimeout(function () {
            sListStage.style.color = "#96ff00";
            sListStageElement.style.transform = "scale(1)";
        }, 400);
    }
}, sListTime);
