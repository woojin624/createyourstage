"use strict";
const modeSelector = document.querySelector(".mode-selector");
const modeCircle = document.querySelector(".mode-circle");
const navLogo = document.querySelector(".nav-bar > h1.logo");

navLogo.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
navList[0].addEventListener("click", () => {
    window.scrollTo(0, vh - 50);
});
navList[1].addEventListener("click", () => {
    window.scrollTo(0, pixelEmpty2AbsoluteTop + halfVh + 10);
});
navList[2].addEventListener("click", () => {
    window.scrollTo(0, serviceSectionAbsoluteTop + 10);
});
navList[3].addEventListener("click", () => {
    window.scrollTo(0, 30000);
});

/* dark / light mode */
// main
const mainMockup = document.querySelector("div.main-back > img.main-mockup");

// icon
let iconGrid = document.querySelector("img.icon-grid");
let icons = document.querySelector("div.icons > img");

// workth
let workthMockup = document.querySelector(".wt-mockup");
let workthMockupBack = document.querySelector(".wt-mockupback");
let workths = document.querySelectorAll("img.wt-screen");
let workthsCount = 5;
workths = Array.prototype.slice.call(workths);

let isDark = false;

// service main
let mainLeftBody = document.querySelector("img.left-body");
let mainLeftWidget1 = document.querySelector("img.left-widget1");
let mainLeftWidget2 = document.querySelector("img.left-widget2");
let mainRightBody = document.querySelector("img.right-body");
let mainRightWidget1 = document.querySelector("img.right-widget1");
let mainRightWidget2 = document.querySelector("img.right-widget2");
let mainRightWidget3 = document.querySelector("img.right-widget3");
let mainRightWidget4 = document.querySelector("img.right-widget4");
let mainWidget1 = document.querySelector("img.main-widget1");
let mainWidget2 = document.querySelector("img.main-widget2");
let mainWidget3 = document.querySelector("img.main-widget3");

// join, subs
let joinMockup = document.querySelector("img.join-mockup");
let join1 = document.querySelector("img.join1");
let join2 = document.querySelector("img.join2");
let join3 = document.querySelector("img.join3");

// mode
let modeMockup = document.querySelector("img.md-mockup");
let modeScreen = document.querySelector("img.md-screen");
let onstageSelect = document.querySelector("img.onstage-widget");
let backstageSelect = document.querySelector("img.backstage-widget");

// trend
let trendMockup = document.querySelector("img.trend-mockup");
let trendHome = document.querySelector(".trend-home");
let trendWidget1 = document.querySelector(".trend-home-widget1");
let trendWidget2 = document.querySelector(".trend-home-widget2");

// trend2

let trendScreen1 = document.querySelectorAll("img.trend-screen1");
let trendScreen2 = document.querySelectorAll("img.trend-screen2");
let trendScreen21 = document.querySelectorAll("img.trend-screen2-1");
let trendScreen3 = document.querySelectorAll("img.trend-screen3");

// item
let itemFirMockup = document.querySelector(".item-fir-mockup > .item-mockup");
let itemHome = document.querySelector(".item-home");
let itemCategory = document.querySelector(".item-category");
let itemDetail = document.querySelector(".item-detail");
let itemSecMockup = document.querySelector(".item-sec-mockup > .item-mockup");
let itemSearch = document.querySelector("img.item-search");

// mypage
let mypagePoint = document.querySelector("div.point img");

let mypageMockup = document.querySelector(".mypage-img-wrap > img.mockup-base");
let mypageAbsolute = document.querySelector("img.mypage-absolute");
let mypageWidget1 = document.querySelector("img.mypage-widget1");
let mypageWidget2 = document.querySelector("img.mypage-widget2");
let mypageCalendar = document.querySelector("img.mypage-calendar");
let mypageSchedule = document.querySelector("img.mypage-schedule");

let mypageGuide = document.querySelector(".guide-img-wrap > img");
let mypageGuideWidget1 = document.querySelector(".guide-widget > .guide-widget1");
let mypageGuideWidget2 = document.querySelector(".guide-widget > .guide-widget2");

// 커뮤니티
let commuBaloon = document.querySelector("div.baloon > img");
let commuMockup = document.querySelector("img.com-mockup");
let commuWid1 = document.querySelector("img.com-wid1");
let commuWid2 = document.querySelector("img.com-wid2");
let commuWid3 = document.querySelector("img.com-wid3");
let commuWid4 = document.querySelector("img.com-wid4");
let commuWid5 = document.querySelector("img.com-wid5");
let commuWid6 = document.querySelector("img.com-wid6");
let commuWidMake = document.querySelector(".com-pop1 > img");
let commuWidPeople = document.querySelector(".com-pop2 > img");
let commuWidChat = document.querySelector(".com-pop3 > img");
let commuWidQna1 = document.querySelector(".com-pop4 > img");
let commuWidQna2 = document.querySelector(".com-pop5 > img");

// mockup
let appleDevice = document.querySelector("article.device > img");
let imacVideo = document.querySelector("video#mockup-video");

if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
} else {
    setTheme("theme-light");
}

onstageSelect.addEventListener("click", () => {
    if (isDark === false) {
        toggleTheme();
        modeChange();
    }
});

backstageSelect.addEventListener("click", () => {
    if (isDark === true) {
        toggleTheme();
        modeChange();
    }
});

modeSelector.addEventListener("click", () => {
    toggleTheme();
    modeChange();
});

function modeChange() {
    if (isDark === false) {
        isDark = true;

        // 메인
        modeCircle.classList.add("dark");
        mainMockup.setAttribute("src", "./img/main-mockup-dark.png");
        // 아이콘
        iconGrid.setAttribute("src", "./img/icon-grid-dark.png");
        bigIconsSrc = ["./img/icon-heart-dark.png", "./img/icon-item-dark.png", "./img/icon-community-dark.png"];
        icons.setAttribute("src", "./img/icon-dark.png");

        // 워크스루 이미지
        let workthsIdx = 0;
        workthMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        workthMockupBack.setAttribute("src", "./img/mockup/mockup-base-darkback.png");
        for (let i = 2; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/darkmode/workth${i}-dark.png`);
            workthsIdx++;
        }
        for (let i = 1; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/darkmode/workth${i}-dark.png`);
            workthsIdx++;
        }
        for (let i = 1; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/darkmode/workth${i}-dark.png`);
            workthsIdx++;
        }

        // 모드 선택
        onstageSelect.setAttribute("src", "./img/onstage-aa-select.png");
        backstageSelect.setAttribute("src", "./img/backstage-aa-noselect.png");
        modeMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        modeScreen.setAttribute("src", "./img/mockup/mode-dark.png");

        // 회원가입, 구독
        joinMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        join1.setAttribute("src", "./img/mockup/darkmode/join1-dark.png");
        join2.setAttribute("src", "./img/mockup/darkmode/join2-dark.png");
        join3.setAttribute("src", "./img/mockup/darkmode/join3-subscribe-dark.png");

        // 서비스 메인
        mainLeftBody.setAttribute("src", "./img/mockup/main-article/left/left-body-dark.png");
        mainLeftWidget1.setAttribute("src", "./img/mockup/main-article/left/left-widget1-dark.png");
        mainLeftWidget2.setAttribute("src", "./img/mockup/main-article/left/left-widget2-dark.png");
        mainRightBody.setAttribute("src", "./img/mockup/main-article/right/right-body-dark.png");
        mainRightWidget1.setAttribute("src", "./img/mockup/main-article/right/widget1-dark.png");
        mainRightWidget2.setAttribute("src", "./img/mockup/main-article/right/widget2-dark.png");
        mainRightWidget3.setAttribute("src", "./img/mockup/main-article/right/widget3-dark.png");
        mainRightWidget4.setAttribute("src", "./img/mockup/main-article/right/widget4-dark.png");
        mainWidget1.setAttribute("src", "./img/mockup/widget/widget-home1-dark.png");
        mainWidget2.setAttribute("src", "./img/mockup/widget/widget-home2-dark.png");
        mainWidget3.setAttribute("src", "./img/mockup/widget/widget-home3-dark.png");

        // 트렌드
        trendMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        trendHome.setAttribute("src", "./img/mockup/trend-home-dark.png");
        trendWidget1.setAttribute("src", "./img/mockup/widget/widget-trend-home1-dark.png");
        trendWidget2.setAttribute("src", "./img/mockup/widget/widget-trend-home2-dark.png");

        // 트렌드2
        trendScreen1[0].setAttribute("src", "./img/mockup/darkmode/trend-home-dark.png");
        trendScreen1[1].setAttribute("src", "./img/mockup/darkmode/trend-home-dark.png");
        trendScreen2[0].setAttribute("src", "./img/mockup/darkmode/trend2-dark.png");
        trendScreen2[1].setAttribute("src", "./img/mockup/darkmode/trend2-dark.png");
        trendScreen21[0].setAttribute("src", "./img/mockup/darkmode/trend2-1-dark.png");
        trendScreen21[1].setAttribute("src", "./img/mockup/darkmode/trend2-1-dark.png");
        trendScreen21[2].setAttribute("src", "./img/mockup/darkmode/trend2-1-dark.png");
        trendScreen3[0].setAttribute("src", "./img/mockup/darkmode/trend3-dark.png");
        trendScreen3[1].setAttribute("src", "./img/mockup/darkmode/trend3-dark.png");

        // 아이템
        itemFirMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        itemHome.setAttribute("src", "./img/mockup/darkmode/item-home-dark.png");
        itemCategory.setAttribute("src", "./img/mockup/darkmode/item-category-dark.png");
        itemDetail.setAttribute("src", "./img/mockup/darkmode/item-detail-dark.png");
        itemSecMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        itemSearch.setAttribute("src", "./img/mockup/darkmode/item-search-dark.png");

        // 마이페이지
        mypagePoint.setAttribute("src", "./img/mockup/mypage-point-dark.png");
        mypageMockup.setAttribute("src", "./img/mockup/mockup-base-dark.png");
        mypageAbsolute.setAttribute("src", "./img/mockup/mypage-home-dark.png");
        mypageWidget1.setAttribute("src", "./img/mockup/widget/widget-mypage-home-dark-1.png");
        mypageWidget2.setAttribute("src", "./img/mockup/widget/widget-mypage-home-dark-2.png");
        mypageCalendar.setAttribute("src", "./img/mockup/widget/widget-mypage-home-4-dark.png");
        mypageSchedule.setAttribute("src", "./img/mockup/widget/widget-mypage-home-3-dark.png");
        mypageGuide.setAttribute("src", "./img/mockup/mypage-guide-dark.png");
        mypageGuideWidget1.setAttribute("src", "./img/mockup/widget/widget-mypage-guide-dark-1.png");
        mypageGuideWidget2.setAttribute("src", "./img/mockup/widget/widget-mypage-guide-dark-2.png");

        // 커뮤니티
        commuBaloon.setAttribute("src", "./img/commu/SVG/baloon-dark.svg");
        commuMockup.setAttribute("src", "./img/commu/com-mockup-dark.png");
        commuWid1.setAttribute("src", "./img/commu/com-mock-viol-dark.png");
        commuWid2.setAttribute("src", "./img/commu/com-mock-recom-dark.png");
        commuWid3.setAttribute("src", "./img/commu/com-mock-control-dark.png");
        commuWid4.setAttribute("src", "./img/commu/com-mock-room1-dark.png");
        commuWid5.setAttribute("src", "./img/commu/com-mock-room2-dark.png");
        commuWid6.setAttribute("src", "./img/commu/com-mock-room3-dark.png");
        commuWidMake.setAttribute("src", "./img/commu/com-wid-make-dark.png");
        commuWidPeople.setAttribute("src", "./img/commu/com-wid-people-dark.png");
        commuWidChat.setAttribute("src", "./img/commu/com-wid-chat-dark.png");
        commuWidQna1.setAttribute("src", "./img/commu/com-wid-qna1-dark.png");
        commuWidQna2.setAttribute("src", "./img/commu/com-wid-qna2-dark.png");

        // 목업
        appleDevice.setAttribute("src", "./img/device-shadow-mockup-dark.png");
        imacVideo.setAttribute("src", "./mockup-video-dark.mp4");
    } else if (isDark === true) {
        isDark = false;
        modeCircle.classList.remove("dark");

        // 메인
        mainMockup.setAttribute("src", "./img/main-mockup-white.png");

        // 아이콘
        iconGrid.setAttribute("src", "./img/icon-grid-white.png");
        bigIconsSrc = ["./img/icon-heart-white.png", "./img/icon-item-white.png", "./img/icon-community-white.png"];
        icons.setAttribute("src", "./img/icon-white.png");

        // 워크스루 이미지
        let workthsIdx = 0;
        workthMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        workthMockupBack.setAttribute("src", "./img/mockup/mockup-baseback.png");
        for (let i = 2; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/workth${i}.png`);
            workthsIdx++;
        }
        for (let i = 1; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/workth${i}.png`);
            workthsIdx++;
        }
        for (let i = 1; i <= workthsCount; i++) {
            workths[workthsIdx].setAttribute("src", `./img/mockup/workth${i}.png`);
            workthsIdx++;
        }

        // 모드 선택
        onstageSelect.setAttribute("src", "./img/onstage-aa-noselect.png");
        backstageSelect.setAttribute("src", "./img/backstage-aa-select.png");
        modeMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        modeScreen.setAttribute("src", "./img/mockup/mode-white.png");

        // 회원가입, 구독
        joinMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        join1.setAttribute("src", "./img/mockup/join1.png");
        join2.setAttribute("src", "./img/mockup/join2.png");
        join3.setAttribute("src", "./img/mockup/join3-subscribe.png");

        // 서비스 메인
        mainLeftBody.setAttribute("src", "./img/mockup/main-article/left/left-body.png");
        mainLeftWidget1.setAttribute("src", "./img/mockup/main-article/left/left-widget1.png");
        mainLeftWidget2.setAttribute("src", "./img/mockup/main-article/left/left-widget2.png");
        mainRightBody.setAttribute("src", "./img/mockup/main-article/right/right-body.png");
        mainRightWidget1.setAttribute("src", "./img/mockup/main-article/right/widget1.png");
        mainRightWidget2.setAttribute("src", "./img/mockup/main-article/right/widget2.png");
        mainRightWidget3.setAttribute("src", "./img/mockup/main-article/right/widget3.png");
        mainRightWidget4.setAttribute("src", "./img/mockup/main-article/right/widget4.png");
        mainWidget1.setAttribute("src", "./img/mockup/widget/widget-home1-white.png");
        mainWidget2.setAttribute("src", "./img/mockup/widget/widget-home2-white.png");
        mainWidget3.setAttribute("src", "./img/mockup/widget/widget-home3-white.png");

        // 트렌드
        trendMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        trendHome.setAttribute("src", "./img/mockup/trend-home-white.png");
        trendWidget1.setAttribute("src", "./img/mockup/widget/widget-trend-home1-white.png");
        trendWidget2.setAttribute("src", "./img/mockup/widget/widget-trend-home2-white.png");

        // 트렌드2
        trendScreen1[0].setAttribute("src", "./img/mockup/trend1-white.png");
        trendScreen1[1].setAttribute("src", "./img/mockup/trend1-white.png");
        trendScreen2[0].setAttribute("src", "./img/mockup/trend2-white.png");
        trendScreen2[1].setAttribute("src", "./img/mockup/trend2-white.png");
        trendScreen21[0].setAttribute("src", "./img/mockup/trend2-1-white.png");
        trendScreen21[1].setAttribute("src", "./img/mockup/trend2-1-white.png");
        trendScreen21[2].setAttribute("src", "./img/mockup/trend2-1-white.png");
        trendScreen3[0].setAttribute("src", "./img/mockup/trend3-white.png");
        trendScreen3[1].setAttribute("src", "./img/mockup/trend3-white.png");

        // 아이템
        itemFirMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        itemHome.setAttribute("src", "./img/mockup/item-home.png");
        itemCategory.setAttribute("src", "./img/mockup/item-category.png");
        itemDetail.setAttribute("src", "./img/mockup/item-detail.png");
        itemSecMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        itemSearch.setAttribute("src", "./img/mockup/item-search.png");

        // 마이페이지
        mypagePoint.setAttribute("src", "./img/mockup/mypage-point-white.png");
        mypageMockup.setAttribute("src", "./img/mockup/mockup-base.png");
        mypageAbsolute.setAttribute("src", "./img/mockup/mypage-home-white.png");
        mypageWidget1.setAttribute("src", "./img/mockup/widget/widget-mypage-home-white-1.png");
        mypageWidget2.setAttribute("src", "./img/mockup/widget/widget-mypage-home-white-2.png");
        mypageCalendar.setAttribute("src", "./img/mockup/widget/widget-mypage1-white.png");
        mypageSchedule.setAttribute("src", "./img/mockup/widget/widget-mypage2-white.png");
        mypageGuide.setAttribute("src", "./img/mockup/mypage-guide-white.png");
        mypageGuideWidget1.setAttribute("src", "./img/mockup/widget/widget-mypage-guide-white.png");
        mypageGuideWidget2.setAttribute("src", "./img/mockup/widget/widget-mypage-guide2-white.png");

        // 커뮤니티
        commuBaloon.setAttribute("src", "./img/commu/baloon.png");
        commuMockup.setAttribute("src", "./img/commu/com-mockup.png");
        commuWid1.setAttribute("src", "./img/commu/com-mock-viol.png");
        commuWid2.setAttribute("src", "./img/commu/com-mock-recom.png");
        commuWid3.setAttribute("src", "./img/commu/com-mock-control.png");
        commuWid4.setAttribute("src", "./img/commu/com-mock-room1.png");
        commuWid5.setAttribute("src", "./img/commu/com-mock-room2.png");
        commuWid6.setAttribute("src", "./img/commu/com-mock-room3.png");
        commuWidMake.setAttribute("src", "./img/commu/com-wid-make.png");
        commuWidPeople.setAttribute("src", "./img/commu/com-wid-people.png");
        commuWidChat.setAttribute("src", "./img/commu/com-wid-chat.png");
        commuWidQna1.setAttribute("src", "./img/commu/com-wid-qna1.png");
        commuWidQna2.setAttribute("src", "./img/commu/com-wid-qna2.png");

        // 목업
        appleDevice.setAttribute("src", "./img/device-shadow-mockup-white.png");
        imacVideo.setAttribute("src", "./mockup-video-white.mp4");
    }
}

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}

function startTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
        isDark = false;
    }
}
startTheme();
