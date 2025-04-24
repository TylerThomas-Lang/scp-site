let subtn = document.getElementById("sign-up");

subtn.onclick = function() {
    let therapy_name = prompt("WARNING!\n\nSCP-999 is currently booked up, please enter your name below so we can schedule you soon", "name");
    if (therapy_name != null) {
        alert("Thank you " + therapy_name + "! Your estimated visit date is 3/25/99999999")
    }
};