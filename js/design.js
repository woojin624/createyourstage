const color = document.querySelector("section.design > div.color-wrap > div.color");
const colorAbsoluteTop = window.pageYOffset + color.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    if (value >= colorAbsoluteTop - 300) {
        color.style.width = "100vw";
    }
});

const graphicBox = document.querySelectorAll("div.graphic-grid");
const graphicImg = document.querySelectorAll("div.graphic-img");
const graphicRect = document.querySelectorAll("div.rect-wrap > div.rect");
const graphicCir = document.querySelectorAll("div.graphic-img.graphic5 > div");

const bigIcon = document.querySelector('img.big-icon');
let bigIconsSrc = ['./img/icon-heart-white.png', './img/icon-item-white.png', './img/icon-community-white.png'];


const iconChange = setInterval(iconChan, 800);
let iconIdx = 0;
function iconChan(){
    bigIcon.setAttribute('src', bigIconsSrc[iconIdx]);
    iconIdx++;
    if(iconIdx === 3){
        iconIdx = 0;
    }
}


for (let i = 0; i < graphicBox.length; i++) {
    graphicBox[i].addEventListener("mouseenter", () => {
        graphicImg[i].style.animationPlayState = "paused";
    });
    graphicBox[i].addEventListener("mouseleave", () => {
        graphicImg[i].style.animationPlayState = "running";
    });

    graphicBox[3].addEventListener("mouseenter", () => {
        graphicRect[1].style.animationPlayState = "paused";
        graphicRect[2].style.animationPlayState = "paused";
    });
    graphicBox[3].addEventListener("mouseleave", () => {
        graphicRect[1].style.animationPlayState = "running";
        graphicRect[2].style.animationPlayState = "running";
    });

    graphicBox[graphicBox.length - 1].addEventListener("mouseenter", () => {
        graphicCir[0].style.animationPlayState = "paused";
        graphicCir[1].style.animationPlayState = "paused";
    });
    graphicBox[graphicBox.length - 1].addEventListener("mouseleave", () => {
        graphicCir[0].style.animationPlayState = "running";
        graphicCir[1].style.animationPlayState = "running";
    });
}
