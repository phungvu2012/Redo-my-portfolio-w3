var sideBar = document.querySelector(".sidebar");
var closeSideBarBtn = document.querySelector(".sidebar-header__close");
var barHeader = document.querySelector(".header-site__bar");
var sideBarOverlay = document.querySelector(".sidebar__overlay");


closeSideBarBtn.addEventListener("click", function() {
    sideBar.classList.toggle("hide-sidebar", true);
    sideBarOverlay.classList.toggle("d-block", false);
})

barHeader.addEventListener("click", function() {
    sideBar.classList.toggle("hide-sidebar", false);
    sideBarOverlay.classList.toggle("d-block", true);
})

sideBarOverlay.addEventListener("click", function() {
    sideBar.classList.toggle("hide-sidebar", true);
    sideBarOverlay.classList.toggle("d-block", false);
})