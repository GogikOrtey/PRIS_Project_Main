

// Ждём, пока DOM-модель полностью загрузится
document.addEventListener('DOMContentLoaded', function() { 
    // Для кнопки старта прописываем событие по нажатию
    document.querySelector('.butt-start').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        console.log("123");
        document.getElementById('block-a').style.display = 'grid';
        document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';

    });

});