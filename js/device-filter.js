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
console.log("dsa");
var uAgent = navigator.userAgent.toLowerCase();
// 아래는 모바일 장치들의 모바일 페이지 접속을위한 스크립트
var mobilePhones = new Array("iphone", "ipod", "ipad", "android", "blackberry", "windows ce", "nokia", "webos", "opera mini", "sonyericsson", "opera mobi", "iemobile");
for (var i = 0; i < mobilePhones.length; i++) {
  if (uAgent.indexOf(mobilePhones[i]) != -1) {
    console.log("asd");
    location.href = "./index_m.html";
  }
}
