var menuBtn = document.querySelectorAll('.mobile-menu-btn')[0]
var navMobile = document.querySelectorAll('.nav-mobile')[0]
var closeBtn = document.querySelectorAll('.nav__mobile-close')[0]
var overlay = document.querySelectorAll('.nav-overlay')[0]
var eCoinImg = document.querySelectorAll('.content4___img')[0]



closeBtn.onclick = function () {
    navMobile.style.transform = "translateX(320px)";
    navMobile.style.transition = "all 1s"
    overlay.style.display = "none";
    overlay.style.transition = "ease-in 1s"
}
menuBtn.onclick = function () {
    navMobile.style.transform = "translateX(0px)";
    overlay.style.display = "block";
    overlay.style.transition = "ease-in 1s"
}
overlay.onclick = function () {
    navMobile.style.transform = "translateX(320px)";
    overlay.style.display = "none";
}
