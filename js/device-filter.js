// const filter = "win16|win32|win64|mac|macintel";
// if (navigator.platform) {
//     if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
//         //mobile
//         console.log("mobile 접속");
//         // location.href = "./index_m.html";
//     } else {
//         //pc
//         console.log("pc 접속");
//         // location.href = './index.html';
//     }
// }
console.log("page-load");
var mobileKeyWords = new Array("iPad", "iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");

for (var word in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
        if (getCookie("VIEW_TYPE") == "PC") {
            location.href = "/index.html"; // PC용 페이지
        } else {
            location.href = "/index_m.html"; // 모바일용 페지지
        }
    }
}
