"use strict";

// 각 페이지의 함수를 여기에 모아두었습니다.

// 비디오를 재생하는 함수
function videoPlay() {
    videoService.play();
}

// 비디오를 일시정지하는 함수
function videoPause() {
    videoService.pause();
}

// 비디오를 정지하는 함수
function videoStop() {
    videoService.pause();
    videoService.currentTime = 0;
}

// 스크롤을 0.8초간 정지
function scrollStop() {
    body.style.overflowY = "hidden";
    setTimeout(() => (body.style.overflowY = "auto"), 800);
}
