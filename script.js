let buttons = document.querySelectorAll('.show_alert_button');
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("Я люблю свою Жену Ксюшу!");
    });
});

let buttons_ilya = document.querySelectorAll('.show_alert_button_ilya');
buttons_ilya.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("Я люблю своего Мужа Илюшу!");
    });
});