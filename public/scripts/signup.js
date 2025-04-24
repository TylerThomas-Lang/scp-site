document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById("form")
    const user_name_input = document.getElementById("log-in-name")
    const user_email_input = document.getElementById("log-in-email")
    const user_password_input = document.getElementById("log-in-pass")
    const user_repeat_password_input = document.getElementById("log-in-repeat-pass")
    const user_name = "Logan Rodriguez"
    const user_email = "q@l.c"
    const user_password = "quaz"
    document.getElementById("sign-up-submit").onclick = () => {
        if (user_password_input.value == user_repeat_password_input.value && user_email_input.value && user_name_input.value && user_password_input.value) {
            localStorage.setItem("user_name", user_name_input.value)
            localStorage.setItem("user_email", user_email_input.value)
            localStorage.setItem("user_password", user_password_input.value)
        }
        else if (user_password_input != user_repeat_password_input) {
            alert("Passwords must be equal")
        }
        console.log(localStorage.getItem("user_name"))
    }
})