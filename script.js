window.onload = function() {
    let loadingIndicator = document.getElementById("loading");
    let verificationBox = document.getElementById("verificationBox");

    setTimeout(() => {
        loadingIndicator.style.display = "none"; // Hide loading animation
        verificationBox.classList.remove("hidden"); // Show checked verification box
    }, 5000); // 5-second delay
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let studentId = document.getElementById("studentId");
    let password = document.getElementById("password");
    let idError = document.getElementById("idError");
    let passwordError = document.getElementById("passwordError");

    let studentIdValid = /^\d{6}$/.test(studentId.value);
    let passwordValid = /^\d{8}$/.test(password.value);

    if (!studentIdValid) {
        idError.textContent = "Incorrect Student ID";
        studentId.value = ""; // Clear invalid input
    } else {
        idError.textContent = ""; // Remove error message if input is valid
    }

    if (!passwordValid) {
        passwordError.textContent = "Incorrect Password";
        password.value = ""; // Clear invalid input
    } else {
        passwordError.textContent = ""; // Remove error message if input is valid
    }

    if (studentIdValid && passwordValid) {
        // Simulated authentication (Replace with actual verification logic)
        if (studentId.value === "224123" && password.value === "30082005") { 
            window.location.href = "dashpage/dashboard.html"; // Redirect to new page
        } else {
            idError.textContent = "Incorrect Student ID";
            passwordError.textContent = "Incorrect Password";
            studentId.value = "";
            password.value = "";
        }
    }
});
