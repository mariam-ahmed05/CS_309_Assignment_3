const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;

    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    if (age === "") {
        document.getElementById("ageError").textContent =
            "Age is required.";
        isValid = false;
    } else if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
        document.getElementById("ageError").textContent =
            "Please enter a valid positive age.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Registration successful!";

        form.reset();
    }

});
