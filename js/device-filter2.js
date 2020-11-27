// const filter = "win16|win32|win64|mac|macintel";

function deviceFilterW() {
    if (window.innerWidth > 400) {
        window.location.href = "./index.html";
    }
}
deviceFilterW();

window.addEventListener("resize", deviceFilterW);
