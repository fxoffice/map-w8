mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaWxrb3Zza3kiLCJhIjoiY20zNGI3ejNsMXBpYjJpc2FrNzRiMmoxbCJ9.mP73e1WrGJUSHriWgvyLPg';
const map = new mapboxgl.Map({
    container: 'map', // ID контейнера
    style: 'mapbox://styles/mapbox/streets-v11', // Стиль мапи
    center: [30.5234, 50.4501], // Координати для центру карти (Київ)
    zoom: 10 // Рівень масштабу
});

function performAction(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            if (data === "moveMapToLviv()") {
                moveMapToLviv();
            } else if (data === "moveMapToMyko()") {
                moveMapToMyko();
            } else if (data === "moveMapToTernopil()") { // Обробка тільки для кнопки 4
                moveMapToTernopil();
            } else {
                alert(data); // Відображаємо повідомлення для всіх інших відповідей
            }
        })
        .catch(error => console.error('Помилка:', error));
}

// Функція для переміщення карти до Львова
function moveMapToLviv() {
    map.flyTo({
        center: [24.0316, 49.8429], // Координати Львова
        zoom: 12 // Новий рівень масштабу
    });
}

// Функція для переміщення карти до Миколаєва
function moveMapToMyko() {
    map.flyTo({
        center: [31.9946, 46.9677], // Координати Миколаєва
        zoom: 12 // Новий рівень масштабу
    });
}

// Функція для переміщення карти до Тернополя (лише для кнопки 4)
function moveMapToTernopil() {
    map.flyTo({
        center: [25.5948, 49.5535], // Координати Тернополя
        zoom: 12 // Новий рівень масштабу
    });
}
