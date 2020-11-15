// main
const mainBackTwo = document.querySelector("div.main-back2");

// nav
const navList = document.querySelectorAll("ul.nav-list > li");

// video
const body = document.querySelector("body");
const videoSection = document.querySelector("section.video");
const videoWrap = document.querySelector("section.video > div.video-wrap");
const videoService = document.querySelector("section.video > div.video-wrap > video");
const videoAbsoluteTop = window.pageYOffset + videoSection.getBoundingClientRect().top;
const myVideo = document.getElementById("service-video");
const videoTitle = document.querySelector("section.video > div.video-wrap > img");
const videoBtns = document.querySelector("div.video-btn");
const videoPlayBtn = document.querySelector("div.video-btn > i.fa-play");
const videoPauseBtn = document.querySelector("div.video-btn > i.fa-pause");
let isPlay = false;
let videoCheck = false;
// overview
const overviewSection = document.querySelector("section.overview");
const overviewWrapAbsoluteTop = window.pageYOffset + overviewSection.getBoundingClientRect().top;
// about
const aboutSection = document.querySelector("section.about");
let warningPopUp = document.querySelectorAll("div.warning-pop-up");

const aboutTitle = document.querySelector(".about-wrap > .about-title");
const youtuberLeft = document.querySelector(".youtuber-wrap > .newbie");
const youtuberRight = document.querySelector(".youtuber-wrap > .popular");

const aboutWrap = document.querySelector("section.about > article.about-wrap");
const aboutWrapAbsoluteTop = window.pageYOffset + aboutWrap.getBoundingClientRect().top;

// service section
const serviceSection = document.querySelector("section.service");
const serviceSectionAbsoluteTop = window.pageYOffset + serviceSection.getBoundingClientRect().top;

// workth
const workthWrap = document.querySelector("article.work-through");
const workthWrapAbsoluteTop = window.pageYOffset + workthWrap.getBoundingClientRect().top;
let workthLeft = 330;
let sliderInterval = null;
let sliderFunction = true;
let timeId = null;
let iii = 1;
let idx = 5;
const workthEls = document.querySelectorAll("article.work-through > .mock-up > .img-wrap > .workth-wrap > .wt-screen");
const workthWrapper = document.querySelector("article.work-through > .mock-up > .img-wrap > .workth-wrap");

// join
const joinArticle = document.querySelector("article.join-wrap");
const joinAbsoluteTop = window.pageYOffset + joinArticle.getBoundingClientRect().top;
// main
const mainArticle = document.querySelector("article.main");
const mainAbsoluteTop = window.pageYOffset + mainArticle.getBoundingClientRect().top;
// trend
const trendArticle = document.querySelector("article.trend");
const trendAbsoluteTop = window.pageYOffset + trendArticle.getBoundingClientRect().top;
const trendMockUpArea = document.querySelector(".trend-mockup-area");
const trendHomeWidget = document.querySelector(".trend-home-widget2");
const trendHomeP = document.querySelector(".trend-mockup-area p");
// trend2
const trend2Article = document.querySelector("article.trend2");
const trend2AbsoluteTop = window.pageYOffset + trend2Article.getBoundingClientRect().top;
const trend2Line1 = document.querySelector("article.trend2 > .big-circle .l1");
const trend2Line2 = document.querySelector("article.trend2 > .big-circle .l2");
const trend2Line3 = document.querySelector("article.trend2 > .big-circle .l3");

// item
const itemArticle = document.querySelector("article.item");
const itemAbsoluteTop = window.pageYOffset + itemArticle.getBoundingClientRect().top;
const itemSlideEls = document.querySelectorAll(".item-slide1 img");

// mypage
const restArticle = document.querySelector("article.rest");
const restAbsoluteTop = window.pageYOffset + restArticle.getBoundingClientRect().top;
const mypagePlan = document.querySelector("div.mypage-plan");

// footer
const footer = document.querySelector("footer");
const footerAbsoluteBottom = window.pageYOffset + footer.getBoundingClientRect().bottom;

//
const headerNav = document.querySelector("header");
// viewport 사이즈
let vh = window.innerHeight;
let halfVh = window.innerHeight / 2;

// 페이지 로딩되기 직전 스크롤 맨위로
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* 비디오 컨트롤 */
videoWrap.addEventListener("click", (e) => {
    if (isPlay == false) {
        videoPauseBtn.style.display = "block";
        videoPlayBtn.style.display = "none";
        isPlay = true;
        videoService.play();
        console.log("isPlay :", isPlay);
    } else if (isPlay == true) {
        videoPauseBtn.style.display = "none";
        videoPlayBtn.style.display = "block";
        isPlay = false;
        videoService.pause();
        console.log("isPlay :", isPlay);
    }
});

videoWrap.addEventListener("mouseenter", (e) => {
    if (isPlay == true) {
        videoBtns.style.opacity = 1;
        console.log("mouseenter");
    }
    console.log("!!!!");
});
videoWrap.addEventListener("mouseleave", (e) => {
    if (isPlay == true) {
        videoBtns.style.opacity = 0;
        console.log("mouseleave");
    }
});

// 스크롤 이벤트 시작
window.addEventListener("scroll", function () {
    value = window.scrollY;
    console.log(value);

    // 스크롤 0 일때 백그라운드 동그라미 원위치
    if (value == 0) {
        mainBackTwo.style.top = -150 + "%";
        headerNav.classList.remove("on");
    }
    if (value > 0) {
        mainBackTwo.style.top = -150 + "%";
        headerNav.classList.add("on");
    }

    // 스크롤 0에서 500일때 백그라운드 동그라미 이동
    if (value >= 0 && value < 500) {
        mainBackTwo.style.top = -150 + value / 10 + "%";
    }

    // 스크롤 500보다 높을 때 동그라미 -100%
    if (value >= 500) {
        mainBackTwo.style.top = -100 + "%";
    }

    // 스크롤이 videoAbsoluteTop (1146) 보다 커질 경우
    // 비디오의 크기가 커지고 오버뷰 투명도를 0으로 낮춘다
    if (value >= videoAbsoluteTop) {
        videoWrap.style.width = "80vw";
        videoService.style.width = "80vw";
        videoTitle.style.opacity = 0;
        overviewSection.style.opacity = 0;
        videoWrap.style.pointerEvents = "auto";

        if (isPlay == false) {
            videoBtns.style.opacity = 1;
            videoBtns.style.visibility = "visible";
            // isPlay = true;
        }

        // 만약 videoCheck가 false일 경우 스크롤 잠깐 멈추고 videoCheck 트루로
        if (videoCheck == false) {
            scrollStop();
            videoCheck = true;
        }

        if (value >= aboutWrapAbsoluteTop - vh + 100) {
            videoBtns.style.opacity = 0;
            videoBtns.style.visibility = "hidden";

            // isPlay를 false로 변경
            isPlay = false;
            videoPauseBtn.style.display = "none";
            videoPlayBtn.style.display = "block";
            videoStop();
        }

        // 반대로 // 스크롤이 videoAbsoluteTop (1146) 보다 작아질 경우
        // 비디오의 크기가 원위치되고 오버뷰 투명도를 1으로 되돌린다
    } else {
        videoWrap.style.width = "60vw";
        videoService.style.width = "60vw";
        videoTitle.style.opacity = 1;
        overviewSection.style.opacity = 1;

        videoBtns.style.opacity = 0;
        videoBtns.style.transition = "opacity .2s";
        videoBtns.style.visibility = "hidden";
        videoWrap.style.pointerEvents = "none";

        // videoCheck를 false로 변경
        videoCheck = false;

        // isPlay를 false로 변경
        isPlay = false;
        videoPauseBtn.style.display = "none";
        videoPlayBtn.style.display = "block";
        videoStop();
    }

    // 만약 스크롤이 aboutWrapAbsoluteTop (2394) 보다 크고 aboutWrapAbsoluteTop (2394) + vh의 절반 보다 작을 경우
    // 워닝팝업들에 클래스를 추가하여 화면에 띄운다.
    if (value >= aboutWrapAbsoluteTop) {
        warningPopUp[0].classList.add("loaded");
        setTimeout(function () {
            warningPopUp[1].classList.add("loaded");
        }, 150);
        setTimeout(function () {
            warningPopUp[2].classList.add("loaded");
        }, 300);
        setTimeout(function () {
            warningPopUp[3].classList.add("loaded");
        }, 450);
        setTimeout(function () {
            warningPopUp[4].classList.add("loaded");
        }, 600);
        setTimeout(function () {
            for (let i = 0; i < warningPopUp.length; i++) {
                warningPopUp[i].style.transition = "0.3s linear";
            }
        }, 800);
        // 반대로 스크롤이 범위에서 벗어날 경우
        // 워닝팝업에서 클래스를 제거하고 트랜지션을 원래대로 돌린다.
    } else {
        for (let i = 0; i < warningPopUp.length; i++) {
            warningPopUp[i].style.transition = "0.7s cubic-bezier(0.59, 0.33, 0.64, 1.52)";
            warningPopUp[i].classList.remove("loaded");
        }
    }

    // 만약 스크롤이 aboutWrapAbsoluteTop (2394) 보다 커질 경우
    // 비디오 섹션을 숨긴다
    if (value >= aboutWrapAbsoluteTop) {
        videoSection.style.visibility = "hidden";
        videoSection.style.pointerEvent = "none";
    } else {
        videoSection.style.visibility = "visible";
        videoSection.style.pointerEvent = "auto";
    }
    if (value >= aboutWrapAbsoluteTop + halfVh) {
        aboutWrap.style.opacity = "0";
    } else {
        aboutWrap.style.opacity = "1";
    }
    if (value >= aboutWrapAbsoluteTop + vh) {
        aboutWrap.style.pointerEvent = "none";
        aboutWrap.style.opacity = "0";
    } else {
        aboutWrap.style.pointerEvent = "auto";
    }

    if (value >= joinAbsoluteTop - halfVh / 2 && value < joinAbsoluteTop + vh + halfVh) {
        joinArticle.classList.add("active");
    } else {
        joinArticle.classList.remove("active");
    }

    // 만약 스크롤이 workthWrapAbsoluteTop - halfVh 보다 크거나 value < workthWrapAbsoluteTop + vh + halfVh 보다 작으면
    // 슬라이드 함수 작동
    if (value >= workthWrapAbsoluteTop - halfVh / 2 && value < workthWrapAbsoluteTop + vh + halfVh) {
        if (sliderFunction == true) {
            StartTime();
        }
        sliderFunction = false;
    }
    if (value < workthWrapAbsoluteTop - halfVh / 2) {
        sliderInterval = null;
        StopTime();
        timeId = null;
        sliderFunction = true;
    }
    if (value >= workthWrapAbsoluteTop + vh + halfVh) {
        sliderInterval = null;
        StopTime();
        timeId = null;
        sliderFunction = true;
    }

    // // 워크스루 슬라이더를 작동하는 함수
    function StartTime() {
        if (sliderFunction == true) {
            DisplayWork();
            timeId = setInterval(DisplayWork, sliderInterval);
            sliderFunction = false;
        }
    }
    // // 워크스루 슬라이더를 멈추는 함수
    function StopTime() {
        if (timeId != null) {
            clearInterval(timeId);
        }
    }
    // 슬라이더가 움직이는 타이머 1.5초 마다 슬라이드 이동
    function DisplayWork() {
        workthWrapper.style.left = -1305 - workthLeft * iii + "px";
        for (let j = 0; j < workthEls.length; j++) {
            workthEls[j].classList.remove("focus");
        }
        workthEls[idx].classList.add("focus");
        sliderInterval = 1800;
        iii++;
        idx++;
        for (let j = 0; j < workthEls.length; j++) {
            workthEls[j].style.transition = "1.3s ease-in-out";
        }
        workthWrapper.style.transition = "1.3s ease-in-out";
        if (iii == 7) {
            for (let j = 0; j < workthEls.length; j++) {
                workthEls[j].style.transition = "0s";
            }
            workthWrapper.style.transition = "0s";
            workthWrapper.style.left = -1305 + "px";
            for (let j = 0; j < workthEls.length; j++) {
                workthEls[j].classList.remove("focus");
            }
            workthEls[4].classList.add("focus");
            sliderInterval = 0;
            iii = 1;
            idx = 5;
        }
    }

    // 메인 목업 클래스 추가 제거
    if (value >= mainAbsoluteTop - halfVh / 2) {
        mainArticle.classList.add("focus");
    }
    if (value < mainAbsoluteTop - halfVh / 2) {
        mainArticle.classList.remove("focus");
    }

    if (value >= trendAbsoluteTop - halfVh / 2) {
        // 만약 스크롤이 trendAbsoluteTop 보다 커질 경우
        // 목업이 등장/제거 된다.
        trendMockUpArea.style.bottom = "-125px";
        trendMockUpArea.style.transitionDelay = 0;
        trendHomeWidget.style.left = "345px";
        trendHomeWidget.style.transition = ".6s ease-out";
        trendHomeWidget.style.transitionDelay = ".8s";
        trendHomeP.style.transform = "translateX(0)";
        trendHomeP.style.transitionDelay = ".8s";
    }
    if (value < trendAbsoluteTop - halfVh / 2) {
        trendMockUpArea.style.bottom = "-100%";
        trendHomeWidget.style.left = "43px";
        trendHomeWidget.style.transition = ".6s ease-in";
        trendHomeP.style.transform = "translateX(-150%)";
    }

    // 트렌드2 이미지 스크롤
    if (value >= trend2AbsoluteTop - halfVh && value < trend2AbsoluteTop + vh) {
        trend2Line1.style.transform = "translate(0, " + -((value - (trend2AbsoluteTop - halfVh)) * 800) / (vh + halfVh) + "px)";
        trend2Line2.style.transform = "translate(0, " + -((value - (trend2AbsoluteTop - halfVh)) * 600) / (vh + halfVh) + "px)";
        trend2Line3.style.transform = "translate(0, " + -((value - (trend2AbsoluteTop - halfVh)) * 800) / (vh + halfVh) + "px)";
    }
    if (value < trend2AbsoluteTop - halfVh) {
        trend2Line1.style.transform = "translate(0, 0px)";
        trend2Line2.style.transform = "translate(0, 0px)";
        trend2Line3.style.transform = "translate(0, 0px)";
    }
    if (value >= trend2AbsoluteTop + vh) {
        trend2Line1.style.transform = "translate(0, -800px)";
        trend2Line2.style.transform = "translate(0, -600px)";
        trend2Line3.style.transform = "translate(0, -800px)";
    }

    // 아이템 아티클 관련
    // 만약 스크롤이 itemAbsoluteTop - halfVh/2 보다 커지면 onSlide 추가
    if (value >= itemAbsoluteTop - halfVh / 2) {
        for (let i = 1; i < itemSlideEls.length; i++) {
            itemSlideEls[i].classList.add("onSlide");
        }
    }
    if (value < itemAbsoluteTop - halfVh / 2) {
        for (let i = 1; i < itemSlideEls.length; i++) {
            itemSlideEls[i].classList.remove("onSlide");
        }
    }

    if (value >= restAbsoluteTop + 500 && value < restAbsoluteTop + 720) {
        mypagePlan.style.bottom = -(value - (restAbsoluteTop + 500)) + "px";
    }
    if (value < restAbsoluteTop + 500) {
        mypagePlan.style.bottom = 0;
    }
    if (value >= restAbsoluteTop + 720) {
        mypagePlan.style.bottom = -220 + "px";
    }

    /* nav */
    function RemoveActive() {
        for (var i = 0; i < navList.length; i++) {
            navList[i].classList.remove("active");
        }
    }
    if (value < overviewWrapAbsoluteTop) {
        RemoveActive();
    }
    if (value >= overviewWrapAbsoluteTop) {
        RemoveActive();
        navList[0].classList.add("active");
    }
    if (value >= pixelEmpty2AbsoluteTop + halfVh) {
        RemoveActive();
        navList[1].classList.add("active");
    }
    if (value >= serviceSectionAbsoluteTop) {
        RemoveActive();
        navList[2].classList.add("active");
    }
    if (value >= footerAbsoluteBottom - vh - 400) {
        RemoveActive();
        navList[3].classList.add("active");
    }
});
