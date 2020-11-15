// const filter = "win16|win32|win64|mac|macintel";
// if (navigator.platform) {
//   if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
//     //mobile
//     console.log("mobile 접속");
//     // location.href = "./index_m.html";
//   } else {
//     //pc
//     console.log("pc 접속");
//     // location.href = "./index.html";
//   }
// }
// var ratio = window.devicePixelRatio;
// if (ratio > 1) {
//   window.location.href = "./index_m.html";
// }
// let mobile = false;
// console.log("dsa");
// var uAgent = navigator.userAgent.toLowerCase();
// // 아래는 모바일 장치들의 모바일 페이지 접속을위한 스크립트
// var mobilePhones = new Array("iphone", "ipod", "ipad", "android", "blackberry", "windows ce", "nokia", "webos", "opera mini", "sonyericsson", "opera mobi", "iemobile");
// for (var i = 0; i < mobilePhones.length; i++) {
//   if (uAgent.indexOf(mobilePhones[i]) != -1 && mobile == false) {
//     mobile = true;
//     console.log("asd");
//     location.href = "./index_m.html";
//   } else {
//     console.log("asddddddd");
//     // location.href = "./index.html";
//   }
// }

// if (
//   navigator.userAgent.match(/iPhone/i) || // iPhone 일경우
//   navigator.userAgent.match(/iPod/i) || // iPod 일경우
//   navigator.userAgent.match(/Windows CE/i) || // Windows CE 일경우
//   navigator.userAgent.match(/Symbian/i) || // Symbian 일경우
//   navigator.userAgent.match(/BlackBerry/i) || // BlackBerry 일경우
//   navigator.userAgent.match(/Android/i)
// ) {
//   // Android 일경우
//   window.location.href = "./index_m.html";

// }

let mobile = false;

mobile = true;
if (navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
  //스마트폰일 때 실행 될 스크립트
  console.log("모바일");
  if (mobile == false) {
    location.href = "./index_m.html";
  }
} else {
  console.log("웹");
  if (mobile == false) {
    location.href = "./index.html";
  }
}
