const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const email = submitForm.elements.email.value.trim();
    const password = submitForm.elements.password.value.trim();

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }

    console.log(`Email: ${email}, Password: ${password}`);
    submitForm.reset();
}
