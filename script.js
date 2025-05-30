console.log("JavaScript работает!");

alert("Добро пожаловать на мой сайт!");

// Кнопка 1 — "Нажми на меня"
const button = document.getElementById("helloBtn");
button.addEventListener("click", function () {
    alert("Привет, Кирилл! Это JavaScript в действии ✨");
});

// Кнопка 2 — "Сменить тему"
const themeBtn = document.getElementById("toggleThemeBtn");

// Проверка темы при загрузке
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Обработчик нажатия
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Сохраняем выбранную тему
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
// Находим кнопку по ID
const btn = document.getElementById("learnBtn");

// Когда кликают — запускаем функцию
btn.addEventListener("click", () => {
    // Показываем простое сообщение
    alert("Я изучаю HTML, CSS, JavaScript и C#!");
});
