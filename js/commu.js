"use strict";

const commuArticle = document.querySelector("article.commu");
const commuAbsoluteTop = window.pageYOffset + commuArticle.getBoundingClientRect().top;
const commuAbsoluteBottom = window.pageYOffset + commuArticle.getBoundingClientRect().bottom;
const comStart = document.querySelector(".com-start");

const comWrap = document.querySelector(".com-wrap");
const comAT = commuAbsoluteTop + 200;
const comATB = commuAbsoluteBottom - (vh + halfVh) - (commuAbsoluteTop + 200);
let vConATB;

const comWidEls = document.querySelectorAll(".com-wrap > .widget-wrap > img");
const comPopEls = document.querySelectorAll(".com-wrap > .pop-wrap > figure");
const comDotLine1 = document.querySelector(".commu-sticky > .line-wrap > .line1");
const comDotLine2 = document.querySelector(".commu-sticky > .line-wrap > .line2");
window.addEventListener("scroll", function () {
    value = window.scrollY;

    if (value >= commuAbsoluteTop && value < commuAbsoluteTop + 600) {
        comStart.style.opacity = 200 - (value - commuAbsoluteTop) / 3 + "%";
        comStart.style.marginTop = -(value - commuAbsoluteTop) / 3 + "px";
    }
    if (value < commuAbsoluteTop) {
        comStart.style.opacity = 200 + "%";
        comStart.style.marginTop = 0 + "px";
    }
    if (value >= commuAbsoluteTop + 600) {
        comStart.style.opacity = 0 + "%";
        comStart.style.marginTop = -200 + "px";
    }
    vConATB = (value - comAT) / comATB;
    if (value >= commuAbsoluteTop + 200 && value < commuAbsoluteBottom - (vh + halfVh)) {
        comWrap.style.transform = "translate(-50%, -50%) scale(" + (1 - vConATB + vConATB * 0.2) + ")";
        comWidEls[0].style.transform = "translate(" + (80 - vConATB * 130) + "%, " + (-500 + vConATB * 450) + "%) scale(" + (1.2 - vConATB * 0.2) + ")";
        comWidEls[1].style.transform = "translate(" + (-400 + vConATB * 350) + "%, " + (-300 + vConATB * 250) + "%) scale(" + (1.7 - vConATB * 0.7) + ")";
        comWidEls[2].style.transform = "translate(" + (570 - vConATB * 620) + "%, " + (-600 + vConATB * 550) + "%) scale(" + (2 - vConATB) + ")";
        comWidEls[3].style.transform = "translate(" + (-220 + vConATB * 170) + "%, " + (30 - vConATB * 80) + "%) scale(" + (1.3 - vConATB * 0.3) + ")";
        comWidEls[4].style.transform = "translate(" + (170 - vConATB * 220) + "%, " + (100 - vConATB * 150) + "%) scale(" + (1.4 - vConATB * 0.4) + ")";
        comWidEls[5].style.transform = "translate(" + (-160 + vConATB * 110) + "%, " + (330 - vConATB * 380) + "%) scale(" + (1.3 - vConATB * 0.3) + ")";

        comPopEls[0].style.transform = "translate(" + (-180 + vConATB * 130) + "%, " + (-170 + vConATB * 120) + "%) scale(" + (1.5 - vConATB * 0.5) + ")";
        comPopEls[1].style.transform = "translate(" + (150 - vConATB * 200) + "%, " + (-160 + vConATB * 110) + "%) scale(" + (1.6 - vConATB * 0.6) + ")";
        comPopEls[2].style.transform = "translate(" + (90 - vConATB * 140) + "%, " + (150 - vConATB * 200) + "%) scale(" + (1.7 - vConATB * 0.7) + ")";
        comPopEls[3].style.transform = "translate(" + (-330 + vConATB * 280) + "%, " + (60 - vConATB * 110) + "%) scale(" + (1.6 - vConATB * 0.6) + ")";
        comPopEls[4].style.transform = "translate(" + (-130 + vConATB * 80) + "%, " + (200 - vConATB * 250) + "%) scale(" + (1.5 - vConATB * 0.5) + ")";
    }

    // 커뮤화면 전
    if (value < commuAbsoluteTop + 200) {
        comWrap.style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[0].style.transform = "translate(80%, -500%) scale(1.2)";
        comWidEls[1].style.transform = "translate(-400%, -300%) scale(1.7)";
        comWidEls[2].style.transform = "translate(570%, -600%) scale(2)";
        comWidEls[3].style.transform = "translate(-220%, 30%) scale(1.3)";
        comWidEls[4].style.transform = "translate(170%, 100%) scale(1.4)";
        comWidEls[5].style.transform = "translate(-160%, 330%) scale(1.3)";

        comPopEls[0].style.transform = "translate(-180%, -170%) scale(1.5)";
        comPopEls[1].style.transform = "translate(150%, -160%) scale(1.6)";
        comPopEls[2].style.transform = "translate(90%, 150%) scale(1.7)";
        comPopEls[3].style.transform = "translate(-330%, 60%) scale(1.6)";
        comPopEls[4].style.transform = "translate(-130%, 200%) scale(1.5)";
    }

    // 커뮤화면 후
    if (value >= commuAbsoluteBottom - (vh + halfVh)) {
        comWrap.style.transform = "translate(-50%, -50%) scale(0.2)";
        comWidEls[0].style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[1].style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[2].style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[3].style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[4].style.transform = "translate(-50%, -50%) scale(1)";
        comWidEls[5].style.transform = "translate(-50%, -50%) scale(1)";

        comPopEls[0].style.transform = "translate(-50%, -50%) scale(1)";
        comPopEls[1].style.transform = "translate(-50%, -50%) scale(1)";
        comPopEls[2].style.transform = "translate(-50%, -50%) scale(1)";
        comPopEls[3].style.transform = "translate(-50%, -50%) scale(1)";
        comPopEls[4].style.transform = "translate(-50%, -50%) scale(1)";
    }
    if (value >= commuAbsoluteBottom - (vh + halfVh) && value < commuAbsoluteBottom - vh) {
        comDotLine1.style.width = 15 + ((value - (commuAbsoluteBottom - (vh + halfVh))) * 40) / halfVh + "%";
        comDotLine2.style.width = 15 + ((value - (commuAbsoluteBottom - (vh + halfVh))) * 40) / halfVh + "%";
    }
    if (value < commuAbsoluteBottom - (vh + halfVh)) {
        comDotLine1.style.width = "15%";
        comDotLine2.style.width = "15%";
    }
    if (value >= commuAbsoluteBottom - vh) {
        comDotLine1.style.width = "55%";
        comDotLine2.style.width = "55%";
    }
});


