let buttons = document.querySelectorAll('.show_alert_button');
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("Я люблю свою Жену Ксюшу!");
    });
});