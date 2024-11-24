// Функция для отображения уведомления
function showAlert() {
    alert("Добро пожаловать в Курск!");
}

// Применяем обработчик событий на заголовок
document.addEventListener("DOMContentLoaded", function() {
    const welcomeHeader = document.querySelector("h1");
    welcomeHeader.addEventListener("click", showAlert);

    // Эффект плавного появления изображения
    const image = document.querySelector("img");
    image.style.opacity = 0;
    setTimeout(() => {
        image.style.transition = "opacity 1s";
        image.style.opacity = 1;
    }, 500);

    // Эффект изменения фона кнопки при наведении
    const changeTextButton = document.createElement("button");
    changeTextButton.textContent = "Изменить текст";
    changeTextButton.className = "btn btn-primary";

    changeTextButton.addEventListener("mouseover", () => {
        changeTextButton.style.backgroundColor = "#0056b3"; // Темно-синий
    });

    changeTextButton.addEventListener("mouseout", () => {
        changeTextButton.style.backgroundColor = ""; // Сбрасываем цвет
    });

    changeTextButton.addEventListener("click", changeText);
    document.body.appendChild(changeTextButton);
});

