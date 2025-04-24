document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorLabel = document.getElementById('error-msg');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); //prevents default form submission

        //Create URLSearchParams from the form data
        const formData = new FormData(form);
        const searchParams = new URLSearchParams();

        for (const pair of formData) {
            searchParams.append(pair[0], pair[1]);
        }

        try {
            const response = await fetch(form.action, {
                method:form.method,
                body:searchParams,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const resultText = await response.text();

            //if login successful, redirect:
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                errorLabel.textContent = 'Name/Password combination does not match our records.';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});