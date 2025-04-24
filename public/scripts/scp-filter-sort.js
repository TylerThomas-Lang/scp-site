let fbtn = document.getElementById("filter-btn");
let sbtn = document.getElementById("sort-btn");
let fmenu = document.getElementById("filter-menu");
let smenu = document.getElementById("sort-menu");

fbtn.onclick = function() {
    fmenu.classList.toggle("active");
    if(smenu.classList.contains("active")) {
        smenu.classList.toggle("active");
    }
};
sbtn.onclick = function() {
    smenu.classList.toggle("active");
    if(fmenu.classList.contains("active")) {
        fmenu.classList.toggle("active");
    }
};