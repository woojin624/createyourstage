"use strict";

/* 어바웃과 디자인 페이지 사이의 픽셀 인터랙션 */
const gridWrap = document.querySelector(".grid-wrap");
const grid = document.querySelector(".grid");
const sellDiv = '<div class="sell"></div>';
let row = grid.querySelectorAll(".row");
let col = 30;

row = Array.prototype.slice.call(row);

/* 각 row에 sell 30개씩 생성 */
for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col; j++) {
        row[i].innerHTML += `${sellDiv}`;
    }
}

let sell = document.querySelectorAll(".sell");
sell = Array.prototype.slice.call(sell);

/* shuffle */
Array.prototype.shuffle = function () {
    let length = this.length;
    while (length) {
        let index = Math.floor(Math.random() * length--);
        let temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }
    return this;
};
sell.shuffle();

const pixelArticle = document.querySelector("article.pixel");
const pixelAbsoluteTop = window.pageYOffset + pixelArticle.getBoundingClientRect().top;
const pixelLogoWrap = document.querySelector("div.pixel-logo-wrap");
const pixelLogoLeft = document.querySelector("div.pixel-logo-wrap > div.c-wrap");
const pixelLogoRight = document.querySelector("div.pixel-logo-wrap > div.s-wrap");

// 3번째 빈 박스 탑값
const pixelEmpty1 = document.querySelector(".pixel-empty1");
const pixelEmpty1AbsoluteTop = window.pageYOffset + pixelEmpty1.getBoundingClientRect().top;
// 4번째 빈 박스 탑값
const pixelEmpty2 = document.querySelector(".pixel-empty2");
const pixelEmpty2AbsoluteTop = window.pageYOffset + pixelEmpty2.getBoundingClientRect().top;
// 5번째 빈 박스 탑값
const pixelEmpty3 = document.querySelector(".pixel-empty3");
const pixelEmpty3AbsoluteTop = window.pageYOffset + pixelEmpty3.getBoundingClientRect().top;

// 로고 채우는 5개 박스
const pixelPWrapEls = document.querySelectorAll("div.pixel-logo-wrap > div > div.p-wrap");
// 로고 채우는 2개 박스
const pixelSmallPWrapEls = document.querySelectorAll("div.pixel-logo-wrap > div.s-wrap > div.p-wrap > p.dangsin > span");

let pixelBack = false;

// 그리드 선
const pGridWrapEls = document.querySelectorAll("div.p-grid-wrap");
const pGridWrapVEls = document.querySelectorAll("div.p-grid-wrap-v");
const pixelGrid = document.querySelector("div.pixel-logo-wrap2");

// 픽셀 스크롤 이벤트
window.addEventListener("scroll", function () {
    value = window.scrollY;
    // 스크롤 값이 pixelAbsoluteTop 보다 커질 경우
    if (value >= pixelAbsoluteTop) {
        // 각 sell 컬러 채우기
        let i = 0;
        if (pixelBack == false) {
            function pixel() {
                sell[i].style.backgroundColor = "#8a11ff";
                sell[i].style.border = "1px solid #8a11ff";
                i++;
                if (i >= 300) {
                    clearInterval(pixelAppear);
                }
            }
            const pixelAppear = setInterval(pixel, 2);
            pixelBack = true;
        }
    } else {
        // 각 sell 컬러 빼기
        let i = 0;
        if (pixelBack == true) {
            function pixell() {
                sell[i].style.backgroundColor = "transparent";
                sell[i].style.border = "1px solid transparent";
                i++;
                if (i >= 300) {
                    clearInterval(pixelDisappear);
                }
            }
            const pixelDisappear = setInterval(pixell, 1);
            pixelBack = false;
        }
    }

    // 픽셀 구간 텍스트 생성하는 부분
    // 왼쪽 텍스트
    if (value >= pixelAbsoluteTop + halfVh && value < pixelEmpty1AbsoluteTop) {
        pixelLogoLeft.style.opacity = ((value - (pixelAbsoluteTop + halfVh)) * 100) / halfVh + "%";
    }
    if (value < pixelAbsoluteTop + halfVh) {
        pixelLogoLeft.style.opacity = 0;
    }
    if (value >= pixelEmpty1AbsoluteTop) {
        pixelLogoLeft.style.opacity = "100%";
    }
    // 오른쪽 텍스트
    if (value >= pixelEmpty1AbsoluteTop && value < pixelEmpty1AbsoluteTop + halfVh) {
        pixelLogoRight.style.opacity = ((value - pixelEmpty1AbsoluteTop) * 100) / halfVh + "%";
    }
    if (value < pixelEmpty1AbsoluteTop) {
        pixelLogoRight.style.opacity = 0;
    }
    if (value >= pixelEmpty1AbsoluteTop + halfVh) {
        pixelLogoRight.style.opacity = "100%";
    }
    // 텍스트 채워지는 부분
    if (value >= pixelEmpty1AbsoluteTop + halfVh && value < pixelEmpty2AbsoluteTop) {
        for (let i = 0; i < pixelPWrapEls.length; i++) {
            pixelPWrapEls[i].style.backgroundSize = ((value - (pixelEmpty1AbsoluteTop + halfVh)) * 100) / halfVh + "% 76px";
        }
        pixelSmallPWrapEls[0].style.backgroundSize = "76px " + ((value - (pixelEmpty1AbsoluteTop + halfVh)) * 100) / halfVh + "%";
        pixelSmallPWrapEls[1].style.backgroundSize = "76px " + ((value - (pixelEmpty1AbsoluteTop + halfVh)) * 100) / halfVh + "%";
    }
    if (value < pixelEmpty1AbsoluteTop + halfVh) {
        for (let i = 0; i < pixelPWrapEls.length; i++) {
            pixelPWrapEls[i].style.backgroundSize = "0% 76px";
        }
        pixelSmallPWrapEls[0].style.backgroundSize = "76px 0%";
        pixelSmallPWrapEls[1].style.backgroundSize = "76px 0%";
    }
    if (value >= pixelEmpty2AbsoluteTop) {
        for (let i = 0; i < pixelPWrapEls.length; i++) {
            pixelPWrapEls[i].style.backgroundSize = "100% 76px";
        }
        pixelSmallPWrapEls[0].style.backgroundSize = "76px 100%";
        pixelSmallPWrapEls[1].style.backgroundSize = "76px 100%";
    }
    // 보라색 사각형 빠져나가는 부분
    if (value >= pixelEmpty2AbsoluteTop && value < pixelEmpty2AbsoluteTop + halfVh) {
        gridWrap.style.top = -((value - pixelEmpty2AbsoluteTop) * 100) / halfVh + "%";
    }
    if (value < pixelEmpty2AbsoluteTop) {
        gridWrap.style.top = 0;
    }
    if (value >= pixelEmpty2AbsoluteTop + halfVh) {
        gridWrap.style.top = "-100%";
    }
    // 로고 설명 등장
    if (value >= pixelEmpty2AbsoluteTop + halfVh / 2 && value < pixelEmpty3AbsoluteTop - halfVh / 2) {
        pixelGrid.style.opacity = ((value - (pixelEmpty2AbsoluteTop + halfVh / 2)) * 100) / halfVh + "%";
    }
    if (value < pixelEmpty2AbsoluteTop + halfVh / 2) {
        pixelGrid.style.opacity = 0;
    }
    if (value >= pixelEmpty3AbsoluteTop - halfVh / 2) {
        pixelGrid.style.opacity = 100 + "%";
    }
    // 로고 그리드 등장
    if (value >= pixelEmpty2AbsoluteTop + halfVh && value < pixelEmpty3AbsoluteTop) {
        for (let i = 0; i < pGridWrapEls.length; i++) {
            pGridWrapEls[i].style.width = ((value - (pixelEmpty2AbsoluteTop + halfVh)) * 300) / halfVh + "px";
        }
        for (let i = 0; i < pGridWrapVEls.length; i++) {
            pGridWrapVEls[i].style.height = ((value - (pixelEmpty2AbsoluteTop + halfVh)) * 300) / halfVh + "px";
        }
    }
    if (value < pixelEmpty2AbsoluteTop + halfVh) {
        for (let i = 0; i < pGridWrapEls.length; i++) {
            pGridWrapEls[i].style.width = 0;
        }
        for (let i = 0; i < pGridWrapVEls.length; i++) {
            pGridWrapVEls[i].style.height = 0;
        }
    }
    if (value >= pixelEmpty3AbsoluteTop) {
        for (let i = 0; i < pGridWrapEls.length; i++) {
            pGridWrapEls[i].style.width = "300px";
        }
        for (let i = 0; i < pGridWrapVEls.length; i++) {
            pGridWrapVEls[i].style.height = "300px";
        }
    }
});
