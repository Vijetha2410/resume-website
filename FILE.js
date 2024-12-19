// Example: Alert message when visiting the resume page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("resume.html")) {
        alert("Welcome to the Resume Page!");
    }
});
