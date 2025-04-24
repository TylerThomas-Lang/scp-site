let btn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

btn.onclick = function() {
    if (localStorage.getItem("menu") === "active") {
        menu.classList.remove("active");
        localStorage.setItem("menu", null);
    }
    else {
        menu.classList.add("active");
        localStorage.setItem("menu", "active");
    }
};

if (localStorage.getItem("menu") === "active") {
    menu.classList.add("active");
} 