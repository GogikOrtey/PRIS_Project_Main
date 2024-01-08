
// a: Вы будете выращивать растения дома, или на улице?

a_InHome = 0 
// 1 - На улице
// 2 - Дома

// a_1: Какая наименьшая температура бывает в вашем регионе?

a_1_MinTempInHome = 0
// 1 - [Поле ввода от 15 до 35]
a_1_input_MinTempInHome = 0
// 2 - Не имеет значения, так как я планирую выращивать растения летом

// a_2: Какая средняя температура в вашем доме?

a_2_AVGTempInRegion = 0
// 1 - [Поле ввода от 3 до 30]
a_2_input_AVGTempInRegion = 0

// a_2_1: Какая примерная влажность в вашем доме?

a_2_1_AVGHum = 0
// 1 - [Поле ввода от 20 до 90]
a_2_1_input_AVGHum = 0
// 2 - Сухо
// 3 - Влажно
// 4 - Умеренная влажность

// b: Вы хотите подобрать одно растение, или сразу несколько?

b_OncePlant = 0
// 1 - Одно
// 2 - Несколько

// c: Вы хотите, что бы это растение было с цветами, или без?

c_AFlowers = 0
// 1 - Без цветов
// 2 - Не важно
// 3 - С цветами

// c_3: Выберете желаемый цвет - один или несколько (вводите числа через пробел)

c_3_SelectAColor = ""
// 1 - Белый
// 2 - Красный
// 3 - Оранжевый
// 4 - Жёлтый
// 5 - Голубой
// 6 - Синий
// 7 - Филоетовый
// 8 - Розовый
// 9 - Серебрянный
// 10 - Бордовый
// 11 - Разноцветный

// d: Вы хотите, что бы это растение было плодоносным?

d_IsPlod = 0
// 1 - Да
// 2 - Не важно
// 3 - Нет

// e: Вы будете ставить растения на окне?

e_StandOnWindow = 0
// 1 - Да
// 2 - Нет

// e_1: На ваше окно падает прямой солнечный свет?

e_1_ASunLight = 0
// 1 - Да
// 2 - Иногда
// 3 - Очень редко

// f: Для вас важно, что бы растение вырабатывало кислород?

f_GenerateAOxugen = 0
// 1 - Да, важно
// 2 - Было бы неплохо, но это не очень важно
// 3 - Мне без разницы на это

// g: Как много пространства под растения, в вашем доме?

g_AFreeProstr = 0
// 1 - Очень мало
// 2 - Средне
// 3 - Достаточно много

// h: Насколько вы хотите оставлять растения без присмотра?

h_NoControl = 0
// 1 - Ненадолго (на 3-5 дней)
// 2 - На 1-2 недели
// 3 - До месяца


// Ждём, пока DOM-модель полностью загрузится
document.addEventListener('DOMContentLoaded', function() { 

    // Скрывет все блоки с классом "block-qu", в начале
    const elements = document.querySelectorAll('.block-qu');

    elements.forEach(element => {
      element.style.display = 'none';
    });

    // Для кнопки старта прописываем событие по нажатию
    document.querySelector('.butt-start').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        console.log("123");
        document.getElementById('block-a').style.display = 'grid';
        document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';
    });



    // Создайте объект для хранения информации о кнопках и блоках
    let buttonBlockMap = {
        'block-a': {
            'answ-block-1': 'block-a-1',
            'answ-block-2': 'block-a-2'
        },
        // Добавьте другие блоки по мере необходимости
    };

    // Функция для отображения определенного блока
    function showBlock(blockId) {
        //hideAllBlocks();
        document.getElementById(blockId).style.display = 'grid';
        blockState[blockId] = true;
    }

    // Добавьте обработчики событий для кнопок
    document.querySelectorAll('.butt-answ').forEach(button => {
        button.addEventListener('click', function() {
            // Сначала уберите стиль :active со всех кнопок в этом блоке
            this.parentElement.querySelectorAll('.butt-answ').forEach(otherButton => {
                otherButton.classList.remove('active');
            });

            // Затем добавьте стиль :active к нажатой кнопке
            this.classList.add('active');
        });
    });

    //document.querySelector('#block-a-1').style.display = 'block';

    document.querySelector('#block-a .answ-block-1').addEventListener('click', function() {
        a_InHome = 1
    });
    
    document.querySelector('#block-a .answ-block-2').addEventListener('click', function() {
        a_InHome = 2
    });

    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        // Ввод из поля ввода
        //a_2_input_AVGTempInRegion = ...
    });
    
    document.querySelector('#block-a-1 .answ-block-2').addEventListener('click', function() {
        //a_InHome = 1
        a_1_MinTempInHome = 1
        // Ввод из поля ввода
        //a_1_input_MinTempInHome = ...
    });
    

    // // Добавьте обработчики событий для кнопок
    // document.querySelectorAll('button').forEach(button => {
    //     button.addEventListener('click', function() {
    //         let parentBlockId = this.parentElement.id;
    //         let buttonClass = this.className;
    //         if (buttonBlockMap[parentBlockId] && buttonBlockMap[parentBlockId][buttonClass]) {
    //             showBlock(buttonBlockMap[parentBlockId][buttonClass]);
    //         }
    //     });
    // });


});