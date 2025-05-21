const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Fixing animation smoothness
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".form-container").forEach(form => {
        form.style.transition = "transform 0.6s ease-in-out, opacity 0.6s ease-in-out";
    });
    document.querySelector(".toggle").style.transition = "transform 0.6s ease-in-out";
    document.querySelector(".toggle-container").style.transition = "transform 0.6s ease-in-out";
});
