// Для скролла
const imageContainer = document.getElementById('imageContainer');
const mainTextElement = document.getElementById('mainText');
const imageWidth = 1300;

let currentImageIndex = 0;

const descriptions = [
    "Видео - контроль на любом устройстве в прямом эфире. <br>С возможностью хранения записи вплоть до 7 дней",
    "Интуитивно понятный интерфейс. Зайдите в личный кабинет и смотри трансляции со всех камер",
    "Доступ из любого места и в любое время ко всем камерам видеонаблюдения в два щелчка"
];

function scrollImages(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    } else if (currentImageIndex >= imageContainer.children.length) {
        currentImageIndex = imageContainer.children.length - 1;
    }

    const translateX = -currentImageIndex * imageWidth;

    imageContainer.style.transform = `translate(${translateX}px)`;

    updateText(currentImageIndex);
}

function updateText(index) {
    mainTextElement.innerHTML = descriptions[index];
}

updateText(0);

// Для Всплыв.формы заявки
const openFormButton = document.getElementById('openForm');
const popupForm = document.getElementById('popupForm');

openFormButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

function closeFormRequest() {
    popupForm.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        closeFormRequest();
    }
});

// Для формы входа
const openFormButtonSignUp = document.getElementById('openFormSignUp');
const popupFormSignUp = document.getElementById('popup-form-SignUp');
const mainContainer = document.getElementById('mainContainer');

openFormButtonSignUp.addEventListener('click', () => {
    popupFormSignUp.style.display = 'block';
});

function closeFormSignUp() {
    popupFormSignUp.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === popupFormSignUp) {
        closeFormSignUp();
    }
});