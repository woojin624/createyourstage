// const filter = "win16|win32|win64|mac|macintel";
function deviceFilterM() {
    if (window.innerWidth <= 400) {
        window.location.href = "./index_m.html";
    }
}
deviceFilterM();

window.addEventListener("resize", deviceFilterM);
