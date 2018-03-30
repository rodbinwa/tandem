
// function myFunction() {
//     var x = document.getElementById("my-desktop-nav");
//     if (x.className === "desktop-nav") {
//         x.className += ".display-nav";
//     } else {
//         x.className = "desktop-nav";
//     }
// }
$(document).ready(function() {
    $("#nav-hamburger").on("click", function(){
        event.preventDefault();
        $("#my-desktop-nav" ).toggleClass("display-nav");
        // $(".desktop-nav").slideToggle();
    });
});