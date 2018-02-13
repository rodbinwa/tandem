
function myFunction() {
    var x = document.getElementById("my-desktop-nav");
    if (x.className === "desktop-nav") {
        x.className += ".display-nav";
    } else {
        x.className = "desktop-nav";
    }
}
