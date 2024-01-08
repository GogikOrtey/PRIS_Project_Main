
// a: Вы будете выращивать растения дома, или на улице?

//const { isNull } = require("mathjs")

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

// ------------------------------------------------------------------- //
// 	                   Как работает этот скрипт:	                   //                                              
// ------------------------------------------------------------------- // 

/*

*/

/*
    По названиям:

    "Блок" - это элемент, с классом ".block-qu"
    У всех у них есть свой уникальный маркер - это буква (например, a, b, c или a-1, ...)

    Переходы между блоками (какой появляется после какого), можно посмотреть в диаграмме
    Она должна лежать где-то недалеко от всех фалов этого проекта


*/

// ------------------------------------------------------------------- //
// 	            Ждём, пока DOM-модель полностью загрузится:	           //                                              
// ------------------------------------------------------------------- // 

document.addEventListener('DOMContentLoaded', function() { 
    UpdateDevelomMode();

    // Скрывет все блоки с классом "block-qu", в начале
    const elements = document.querySelectorAll('.block-qu');

    elements.forEach(element => {
      element.style.display = 'none';
    });

    // Также скрывает все особые блоки и кнопки, в начале
    document.getElementsByClassName('butt-final')[0].style.display = 'none';
    document.getElementsByClassName('block-request')[0].style.display = 'none';
    document.querySelector('.butt-final-2').style.display = 'none';
    document.querySelector('.reauest-2-only-color').style.display = 'none';

    document.querySelector('.loadd').style.display = 'none';
    document.querySelector('.result-cards').style.display = 'none';
    document.querySelector('.zero-reauest').style.display = 'none';

    // ------------------------------------------------------------------- //
    // 	             Обработчик событий для кнопки старта:	               //                                              
    // ------------------------------------------------------------------- // 

    document.querySelector('.butt-start').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        console.log("123");
        document.getElementById('block-a').style.display = 'grid';
        document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';
        isStart = true;
    });

    // ------------------------------------------------------------------- //
    // 	            Обрабатываю нажатие на финальную кнопку:	           //                                              
    // ------------------------------------------------------------------- // 

    FinalButtonProc();
    
    // ------------------------------------------------------------------- //
    // 	                Случайный цвет для кнопок ответа:	               //
    // ------------------------------------------------------------------- // 

    // Новая реализация: Случайный цвет (зелёный/жёлтый/красный),
    // в зависимости от класса кнопки:

    var buttons = document.querySelectorAll('.good-button, .gerat-button, .bad-batton');

    function getRandomColor(minHue, maxHue) {
        var hue = Math.floor(Math.random() * (maxHue - minHue + 1)) + minHue;
        return 'hsl(' + hue + ', 100%, 50%)';
    }

    buttons.forEach(function(button) {
        var color;

        // Устанавливаю случайные цвета для кнопок ответов, в зависимости от их классов:
        if (button.classList.contains('good-button')) {
            color = getRandomColor(120, 60);    // От зелёного до жёлтого
        } else if (button.classList.contains('gerat-button')) {
            color = getRandomColor(60, 30);     // От жёлтого до ораньжевого
        } else if (button.classList.contains('bad-batton')) {
            color = getRandomColor(30, 0);      // От ораньжевого до красного
        }
        button.style.backgroundColor = color;
    });
    
    // Старая реализация (случайный цвет от зелёного до красного, для всех кнопок):

    // var buttons = document.querySelectorAll('.butt-answ');
    // function getRandomColor(minHue, maxHue) {
    //     var hue = Math.floor(Math.random() * (maxHue - minHue + 1)) + minHue;
    //     return 'hsl(' + hue + ', 100%, 50%)';
    // }    
    // // Применяем случайный цвет фона к каждой кнопке - от красного до зелёного
    // for (var i = 0; i < buttons.length; i++) {
    //     var hue = Math.floor(Math.random() * 81) + 20;
    //     buttons[i].style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)';
    // }

    // ------------------------------------------------------------------- //
    // 	      Добавляю событие: При нажатии на любую кнопку ответа         //
    // ------------------------------------------------------------------- // 

    // Добавляю событие: При нажатии на любую кнопку
    document.querySelectorAll('.butt-answ').forEach(button => {
        button.addEventListener('click', function() {
            
            //CheckAllBlocks(); // Вызываю обновление всех блоков
            setTimeout(() => {
                CheckAllBlocks(); // Update all the blocks after a 10 millisecond delay
                UpdateDevelomMode();
            }, 1);

            // Добавляю стиль "Нажатой" кнопки к той, которую нажал пользователь
            this.parentElement.querySelectorAll('.butt-answ').forEach(otherButton => {
                // Удаляю стиль "Нажатой" кнопки у всех в этом блоке
                otherButton.classList.remove('active');
            });
            this.classList.add('active'); // Добавляю этот стиль к нажатой
        });
    });

    // ------------------------------------------------------------------- //
    // 	  Обработчик событий для всех кнопок ответов, во всех формах:      //
    // ------------------------------------------------------------------- // 

    SetButtonSelection();

    // ------------------------------------------------------------------- //
    // 	        Обработчик событий для кнопки "Пройти ещё раз"             //
    // ------------------------------------------------------------------- // 

    // Перезагружаю страницу, если нажата кнопка "Пройти ещё раз"
    ReloadPageButtonProc();
});

// Здесь я прописываю обработчики событий, для всех кнопок ответов, во всех формах
// Тут я устанавливаю для переменных нужные значения. Эти переменные объявлены в самом начале этого скрипта
// Далее, по значениям этих переменных, я собираю SQL-запрос

function SetButtonSelection() {

    SetColorAction();

    // a
    document.querySelector('#block-a .answ-block-1').addEventListener('click', function() {
        a_InHome = 1
        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
        isTempCorrect = false;
        ZeroingAllVar();
    });    
    document.querySelector('#block-a .answ-block-2').addEventListener('click', function() {
        a_InHome = 2
        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
        document.querySelector('.err-inp-2').style.display = 'none';
        document.querySelector('.my-input-2').value = '';
        isTempCorrect = false;
        ZeroingAllVar();
    });

    // a-2
    document.querySelector('#block-a-2 .answ-block-1').addEventListener('click', function() {
        a_1_MinTempInHome = 1
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        isHumCorrect = false;
    });
    document.querySelector('.my-input-2').addEventListener('input', function(e) {
        // Если значение поля ввода изменилось:
        isTempCorrect = false;
        CheckCorrectInput2();

        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        isHumCorrect = false;
    });

    // a-1
    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        isTempCorrect = false;
        CheckCorrectInput1();
    });    
    document.querySelector('.my-input-1').addEventListener('input', function(e) {
        // Если значение поля ввода изменилось:
        CheckCorrectInput1();
    });
    document.querySelector('#block-a-1 .answ-block-2').addEventListener('click', function() {
        a_2_AVGTempInRegion = 2
        isTempCorrect = true
        document.querySelector('.err-inp-1').style.display = 'none';
        document.querySelector('.my-input-1').value = '';
    });    

    // a-2-1
    document.querySelector('#block-a-2-1 .answ-block-1-s').addEventListener('click', function() {
        a_2_1_AVGHum = 1
        isHumCorrect = false
        CheckCorrectInput3();
    });    
    document.querySelector('.my-input-3').addEventListener('input', function(e) {
        // Если значение поля ввода изменилось:
        CheckCorrectInput3();
    });
    document.querySelector('#block-a-2-1 .answ-block-2-s').addEventListener('click', function() {
        a_2_1_AVGHum = 2
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
    });    
    document.querySelector('#block-a-2-1 .answ-block-3-s').addEventListener('click', function() {
        a_2_1_AVGHum = 3
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
    });    
    document.querySelector('#block-a-2-1 .answ-block-4-s').addEventListener('click', function() {
        a_2_1_AVGHum = 4
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
    });    

    // b
    document.querySelector('#block-b .answ-block-1').addEventListener('click', function() {
        b_OncePlant = 1
    });    
    document.querySelector('#block-b .answ-block-2').addEventListener('click', function() {
        b_OncePlant = 2
    });

    // c
    document.querySelector('#block-c .answ-block-1').addEventListener('click', function() {
        c_AFlowers = 1
        ColorZeroing() 
    });    
    document.querySelector('#block-c .answ-block-2').addEventListener('click', function() {
        c_AFlowers = 2
        ColorZeroing() 
    });
    document.querySelector('#block-c .answ-block-3').addEventListener('click', function() {
        c_AFlowers = 3
    });

    // c-3 - обработчик выбора цветов - прописан отдельно (выше этой функции)

    // d
    document.querySelector('#block-d .answ-block-1').addEventListener('click', function() {
        d_IsPlod = 1
    });    
    document.querySelector('#block-d .answ-block-2').addEventListener('click', function() {
        d_IsPlod = 2
    });
    document.querySelector('#block-d .answ-block-3').addEventListener('click', function() {
        d_IsPlod = 3
    });

    // e
    document.querySelector('#block-e .answ-block-1').addEventListener('click', function() {
        e_StandOnWindow = 1
    });    
    document.querySelector('#block-e .answ-block-2').addEventListener('click', function() {
        e_StandOnWindow = 2
    });

    // e-1
    document.querySelector('#block-e-1 .answ-block-1').addEventListener('click', function() {
        e_1_ASunLight = 1
    });    
    document.querySelector('#block-e-1 .answ-block-2').addEventListener('click', function() {
        e_1_ASunLight = 2
    });
    document.querySelector('#block-e-1 .answ-block-3').addEventListener('click', function() {
        e_1_ASunLight = 3
    });

    // f
    document.querySelector('#block-f .answ-block-1').addEventListener('click', function() {
        f_GenerateAOxugen = 1
    });    
    document.querySelector('#block-f .answ-block-2').addEventListener('click', function() {
        f_GenerateAOxugen = 2
    });
    document.querySelector('#block-f .answ-block-3').addEventListener('click', function() {
        f_GenerateAOxugen = 3
    });

    // g
    document.querySelector('#block-g .answ-block-1').addEventListener('click', function() {
        g_AFreeProstr = 1
    });    
    document.querySelector('#block-g .answ-block-2').addEventListener('click', function() {
        g_AFreeProstr = 2
    });
    document.querySelector('#block-g .answ-block-3').addEventListener('click', function() {
        g_AFreeProstr = 3
    });

    // h
    document.querySelector('#block-h .answ-block-1').addEventListener('click', function() {
        h_NoControl = 1
    });    
    document.querySelector('#block-h .answ-block-2').addEventListener('click', function() {
        h_NoControl = 2
    });
    document.querySelector('#block-h .answ-block-3').addEventListener('click', function() {
        h_NoControl = 3
    });
}

// ------------------------------------------------------------------- //
// 	     Все процедуры, которые использует SetButtonSelection():       //
// ------------------------------------------------------------------- // 

// ------------------------------------------ //
// 	        Проверка input-элементов:         //
// ------------------------------------------ // 

// Проверка правильности ввода, в input-элементах (всех 3х)

function CheckCorrectInput1() {
    document.querySelector('.my-input-1').addEventListener('input', function(e) {
        var value = e.target.value;
        var errorElement = document.querySelector('.err-inp-1');
        
        if (value == "" || isNaN(value) || value < -20 || value > 35) {
            // Проверка на попадание числа в нужные границы
            errorElement.style.display = 'block'; 
            // Если ввод пользователя выходит за границы - мы показываем красный текст ошибки
            isTempCorrect = false;
            a_2_input_AVGTempInRegion = 0;
            a_2_AVGTempInRegion = 0;
        } else {
            errorElement.style.display = 'none';
            isTempCorrect = true;
            a_2_input_AVGTempInRegion = parseInt(value);
            a_2_AVGTempInRegion = 1;
        }

        CheckAllBlocks();
    });
}

function CheckCorrectInput2() {
    document.querySelector('.my-input-2').addEventListener('input', function(e) {
        var value = e.target.value;
        var errorElement = document.querySelector('.err-inp-2');
        
        if (value == "" || isNaN(value) || value < 15 || value > 30) {
            errorElement.style.display = 'block';
            isTempCorrect = false;
            a_1_input_MinTempInHome = 0;
            a_1_MinTempInHome = 0
        } else {
            errorElement.style.display = 'none';
            isTempCorrect = true;
            a_1_input_MinTempInHome = parseInt(value);
            a_1_MinTempInHome = 1
        }

        CheckAllBlocks();
    });
}

function CheckCorrectInput3() {
    document.querySelector('.my-input-3').addEventListener('input', function(e) {
        var value = e.target.value;
        var errorElement = document.querySelector('.err-inp-3');
        
        if (value == "" || isNaN(value) || value < 10 || value > 90) {
            errorElement.style.display = 'block';
            isHumCorrect = false;
            a_2_1_input_AVGHum = 0;
            a_2_1_AVGHum = 0
        } else {
            errorElement.style.display = 'none';
            isHumCorrect = true;
            a_2_1_input_AVGHum = parseInt(value);
            a_2_1_AVGHum = 1
        }

        CheckAllBlocks();
    });
}

// ------------------------------------------ //
// 	         Обработка ввода цветов:          //
// ------------------------------------------ // 

// Массив всех значений цветов (выбраны, или нет)
// Используется только в том случае, если пользователь выбрал блок c-3
let colors = {
    green: false,
    red: false,
    orange: false,
    yellow: false,
    lightBlue: false,
    blue: false,
    violet: false,
    pink: false,
    silver: false,
    multicolor: false
};

function SetColorAction() {
    // Получение всех кнопок цветов
    let buttons = document.querySelectorAll('.butt-bar-colors .color-s');
    
    // Добавление обработчика событий для каждой кнопки
    buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Получение id кнопки (цвета)
          let color = this.id;

          console.log("Нажата кнопка цвета: " + color);
    
          // Изменение значения булевой переменной на противоположное
          colors[color] = !colors[color];
    
          // Изменение стиля элемента в зависимости от значения булевой переменной
          if (colors[color]) {
            this.classList.add('active-2');
          } else {
            this.classList.remove('active-2');
          }

          isColorCucsSelected = CheckCorrectColors();
          //console.log("isColorCucsSelected = " + isColorCucsSelected + " _");

          CheckAllBlocks();
      });
    });  
}

// Сброс всех цветов, и выделения кнопок цветов
// Используется, при надатии любой кнопки в блоке c
function ColorZeroing() {
    for (let color in colors) {
        colors[color] = false;
    }

    // Получение всех элементов .color-s внутри .color-other
    let colorButtons = document.querySelectorAll('.color-other .color-s');

    // Обход всех кнопок цветов
    colorButtons.forEach(button => {
      // Удаление стиля active-2
      button.classList.remove('active-2');
    });
}

// Проверка, выбрал ли пользователь хотя бы один цвет
// Используется только в том случае, если пользователь выбрал блок c-3
function CheckCorrectColors() {
    // Создание переменной
    let isAnyColorActive = false;

    // Проверка, есть ли хотя бы один цвет, который равен true
    for (let color in colors) {
      if (colors[color]) {
        isAnyColorActive = true;
        break;
      }
    }

    return isAnyColorActive;
}

// ------------------------------------------ //
// 	        Все основные переменные:          //
// ------------------------------------------ // 

let isDevelopModActive = false;     // Включён ли режим разработчика?

let _mainCounter = 0;               // Счётчик состояний

let isStart = false;                // Ползователь начал выбирать ответы?
let isTempCorrect = false;          // Значение температуры в поле ввода корректно? (и для дома, и для улицы)
let isHumCorrect = false;           // Значение влажности в поле ввода корректно?
let isColorCucsSelected = false;    // Хотя бы один цвет выбран? (если показан блок выбора цветов c-3)

// ------------------------------------------------------------------- //
// 	       Все процедуры, которые использует CheckAllBlocks():         //
// ------------------------------------------------------------------- // 

// Процедура обновления блоков, для активации элементов разработчика
function UpdateDevelomMode() {
    let elements = Array.from(document.getElementsByClassName('letter-abbr'));

    if(isDevelopModActive === true) {
        elements.forEach(element => {
            element.style.display = 'block';
        });
    } else {
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }
}

// Скрывает указанный блок
function HideBlock(nameBlock) {
    document.getElementById(nameBlock).style.display = 'none'; // Скрываю весь блок со страницы
    removeActiveClass(nameBlock); // Убираю выделение у всех нажатых кнопок в этом блоке
}

// Убираю выделение у всех нажатых кнопок в этом блоке
function removeActiveClass(parentId) {
    let elements = document.getElementById(parentId).querySelectorAll('.butt-answ');
    for(let i=0; i<elements.length; i++){
        elements[i].classList.remove('active');
    }
}

// Показывает указанный блок
function ShowBlock(nameBlock) {
    let block = document.getElementById(nameBlock);

    block.style.display = 'grid';       
    block.scrollIntoView({behavior: "smooth"});
}

// Служебные переменные
let isRevertQuwerty = 0;
let RQ_2 = 0;

// ------------------------------------------------------------------- //
// 	          Основная процедура: Перераспределение блоков             //
// ------------------------------------------------------------------- // 

// Процедура вызывается после нажатия на кнопку в любом блоке
// Эта процедура скрывает или показывает нужные блоки

// Если пользователь нажал ответ в одном блоке, показывается следующий за ним,
// при этом, все блоки, которые ниже него - скрываются, их переменные обнуляются, а выделение кнопочек - сбрасывается.
// Это чем-то похоже на рекурсивную обработку. Если _mainCounter < значения конкретного блока, 
// то обнуляется этот блок, и все блоки которые идут ниже него
function CheckAllBlocks() {

    if(isStart == true) {
        _mainCounter = 1;
    }

    console.log("Update all blocks");    

    if(_mainCounter >= 1) {
        if(a_InHome == 1) {
            // Дом

            HideBlock('block-a-1');             
            ShowBlock('block-a-2');

            a_2_AVGTempInRegion = 0;
            _mainCounter = 2;

            if(isRevertQuwerty>0) isRevertQuwerty--;
        } else if (a_InHome == 2) {
            // Улица

            ShowBlock('block-a-1');
            HideBlock('block-a-2');

            a_1_MinTempInHome = 0;
            a_2_1_AVGHum = 0;
            _mainCounter = 3;

            isRevertQuwerty = 2;
            RQ_2 = 2;

        }
    } else {
        a_InHome = 0;

        HideBlock('block-a-2');
        HideBlock('block-a-1');
    }

    if(_mainCounter >= 2 && isRevertQuwerty <= 0) {
        if(isTempCorrect == true && a_InHome == 1) {
            ShowBlock('block-a-2-1');
            _mainCounter = 3;
            if(RQ_2 > 0) RQ_2--;
        } else {
            HideBlock('block-a-2-1');
            a_2_1_AVGHum = 0;
        }
    } else {
        HideBlock('block-a-2-1');
        a_2_1_AVGHum = 0;
    }

    if(_mainCounter >= 3) {
        if(
            (a_InHome == 1 && isHumCorrect == true) ||
            (a_InHome == 2 && a_2_AVGTempInRegion == 2) ||
            (a_InHome == 2 && a_2_AVGTempInRegion == 1 && isTempCorrect == true)
        )
            {
            ShowBlock('block-b');
            _mainCounter = 4;
        } else {
            HideBlock('block-b');
            b_OncePlant = 0;
        }
    } else {
        HideBlock('block-b');
        b_OncePlant = 0;
    }

    if(_mainCounter >= 4) {
        if(b_OncePlant != 0) {
            ShowBlock('block-c');
            _mainCounter = 6;
        } else {
            HideBlock('block-c');
            c_AFlowers = 0;
        }
    } else {
        HideBlock('block-c');
        c_AFlowers = 0;
    }

    if(_mainCounter >= 5) {
        if(c_AFlowers == 3) {
            ShowBlock('block-c-3');  
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            HideBlock('block-c-3');
            isColorCucsSelected = false

            ColorZeroing();
        }
    } else {
        HideBlock('block-c-3');
        isColorCucsSelected = false
    }

    if(_mainCounter >= 6) {
        if(c_AFlowers == 1 || c_AFlowers == 2 || isColorCucsSelected == true) {
            ShowBlock('block-d');
            _mainCounter = 7;
        } else {
            HideBlock('block-d');
            d_IsPlod = 0;
        }
    } else {
        HideBlock('block-d');
        d_IsPlod = 0;
    }

    if ((_mainCounter >= 7) && (a_InHome == 1)) {
        if(d_IsPlod != 0) {
            ShowBlock('block-e');
        } else {
            HideBlock('block-e');
            e_StandOnWindow = 0;
        }
    
        if(e_StandOnWindow == 1) {
            ShowBlock('block-e-1');
        } else {
            HideBlock('block-e-1');
            e_1_ASunLight = 0;
        }
    
        if(e_StandOnWindow == 2 || e_1_ASunLight != 0) {
            ShowBlock('block-f');
        } else {
            HideBlock('block-f');
            f_GenerateAOxugen = 0;
        }
    
        if(f_GenerateAOxugen != 0) {
            ShowBlock('block-g');
            _mainCounter = 8;
        } else {
            HideBlock('block-g');
            g_AFreeProstr = 0;
        }
    } else {
        HideBlock('block-g');
        HideBlock('block-e');
        HideBlock('block-e-1');
        HideBlock('block-f');

        e_StandOnWindow = 0;
        e_1_ASunLight = 0;
        f_GenerateAOxugen = 0;
        g_AFreeProstr = 0;

        //_mainCounter = 8;
    }    

    if(_mainCounter >= 8 || (_mainCounter >= 7 && a_InHome == 2)) {
        // Либо прошли все блоки по дому, либо мы выбрали улицу
        if(g_AFreeProstr != 0 || (a_InHome == 2 && d_IsPlod != 0)) {
            ShowBlock('block-h');
            _mainCounter = 9;
        } else {
            HideBlock('block-h');
            h_NoControl = 0;
        }
    } else {
        HideBlock('block-h');
        h_NoControl = 0;
    }

    // Финальная кнопка:
    if(_mainCounter >= 9) {
        if(h_NoControl != 0) {
            _mainCounter = 10;
            let block = document.getElementsByClassName('butt-final')[0];

            block.style.display = 'flex';     
            block.scrollIntoView({behavior: "smooth"});
        }
    } else {
        document.getElementsByClassName('butt-final')[0].style.display = 'none';
        document.getElementsByClassName('block-request')[0].style.display = 'none';
    }

    //document.querySelectorAll('.main-counter')[0].textContent = _mainCounter;    
    //console.log("Main-counter = " + _mainCounter);
}

// ------------------------------------------------------------------- //
// 	             Нажатие на кнопку "Подобрать растения"                //
// ------------------------------------------------------------------- // 

// Обработка нажатий на финальную кнопку 
// [Эта процедура вызывается после загрузки всей DOM-модели страницы, в самом верху этого скрипта]
function FinalButtonProc() {
    document.querySelector('.butt-final').addEventListener('click', function() {
        _mainCounter = -1;      // Обнуляем счётчик блоков

        let elements = Array.from(document.getElementsByClassName('block-qu'));

        // Скрываю все блоки
        elements.forEach(element => { 
            element.style.display = 'none';
        });

        // Если режим разработчика включён
        if(isDevelopModActive === true) {
            // Показываем блок с окошечками запроса и ответа от БД:
            document.getElementsByClassName('block-request')[0].style.display = 'grid';
        }
        
        // Показываем блок с гифкой загрузки (пока нам не придёт ответ от БД)
        document.getElementsByClassName('butt-final')[0].style.display = 'none';
        document.querySelector('.loadd').style.display = 'grid';
        document.querySelector('.loadd').scrollIntoView({behavior: "smooth"});

        // Выводим значения всех полученных переменных, в консоль:
        // debugPrint_2();

        // Собираем SQL-запрос
        let SQL_Rq = CreateSQLequest();
        document.querySelector('.block-request .req p').textContent = SQL_Rq;

        // Отправляем этот SQL-запрос на сервер
        SQL_RQ_FromSwever(SQL_Rq);  

        //console.log("Final*");
    });
}    

// ------------------------------------------ //
// 	          Создание SQL-запроса:           //
// ------------------------------------------ // 

// Эта процедура собирает SQL-запрос из значений переменных, 
// которые были получены, когда пользователь нажимал на кнопочки ответов
function CreateSQLequest() {
    let strRequare = "SELECT plant_name FROM MainTable WHERE ";
    let windowCompare = 7; // Окно на температуру
    let windowCompare_2 = 45; // Окно на влажность
    //let windowCompare_Light = 3;

    if (a_InHome === 1) {
        strRequare += "plant_type_description = 'Домашнее' ";
    } else if (a_InHome === 2) {
        strRequare += "plant_type_description = 'Уличное'";
    }

    strRequare += " AND ";

    if (a_InHome === 1) {
        strRequare += "min_temperature >= " + (a_1_input_MinTempInHome - windowCompare);
        strRequare += " AND ";
        strRequare += "max_temperature <= " + (a_1_input_MinTempInHome + windowCompare);
    }

    if (a_2_AVGTempInRegion === 1) {
        if(a_2_input_AVGTempInRegion < 15) {
            strRequare += " min_temperature <= " + (a_2_input_AVGTempInRegion + windowCompare);
        }        
    }

    strRequare += " AND ";

    let bool1 = false;

    if (a_2_1_AVGHum === 2) {
        a_2_1_input_AVGHum = 35;
        bool1 = true;
    } else if (a_2_1_AVGHum === 3) {
        a_2_1_input_AVGHum = 80;
        bool1 = true;
    } else if (a_2_1_AVGHum === 4) {
        a_2_1_input_AVGHum = 55;
        bool1 = true;
    }

    if (bool1 === true || a_2_1_AVGHum === 1) {
        strRequare += "min_humidity >= " + (a_2_1_input_AVGHum - windowCompare_2);
    }

    strRequare += " AND ";

    if (b_OncePlant === 2) {
        strRequare += "(allelopathy_description = 'Нейтральная' OR allelopathy_description = 'Положительная')";
    }

    strRequare += " AND ";

    if (c_AFlowers === 1) {
        strRequare += "plant_color_description LIKE '%елёный%'";
    }

    // Все цвета:

    /*
    let colors = {
        green: false,
        red: false,
        orange: false,
        yellow: false,
        lightBlue: false,
        blue: false,
        violet: false,
        pink: false,
        silver: false,
        multicolor: false
    };

    # 1 - Белый
    # 2 - Красный
    # 3 - Оранжевый
    # 4 - Жёлтый
    # 5 - Голубой
    # 6 - Синий
    # 7 - Филоетовый
    # 8 - Розовый
    # 9 - Серебрянный
    # 10 - Бордовый
    # 11 - Разноцветный
    */

    if(isColorCucsSelected === true){
        let addStr1 = "";

        addStr1 += " AND (";
        if(colors['red'] == true) {
            addStr1 += "plant_color_description LIKE '%расный%' OR ";
        } 
        if(colors['orange'] == true) {
            addStr1 += "plant_color_description LIKE '%ранжевый%' OR ";
        } 
        if(colors['yellow'] == true) {
            addStr1 += "plant_color_description LIKE '%ёлтый%' OR ";
        } 
        if(colors['lightBlue'] == true) {
            addStr1 += "plant_color_description LIKE '%олубой%' OR ";
        } 
        if(colors['blue'] == true) {
            addStr1 += "plant_color_description LIKE '%иний%' OR ";
        } 
        if(colors['violet'] == true) {
            addStr1 += "plant_color_description LIKE '%иолетовый%' OR ";
        } 
        if(colors['pink'] == true) {
            addStr1 += "plant_color_description LIKE '%озовый%' OR ";
        } 
        if(colors['silver'] == true) {
            addStr1 += "plant_color_description LIKE '%еребристый%' OR ";
        } 
        if(colors['multicolor'] == true) {
            addStr1 += "plant_color_description LIKE '%азноцветный%' OR ";
        } 
        if(colors['green'] == true) {
            addStr1 += "plant_color_description LIKE '%елёный%' OR ";
        } 
        

        addStr1 = addStr1.trim(); // Удаляю пробелы в конце строки
    
        if (addStr1.endsWith(' OR')) {
            addStr1 = addStr1.slice(0, -3); // Удаляю AND, если он вылез в коне запроса
        }

        addStr1 += ")";
        strRequare += addStr1;      
    }

    strRequare += " AND ";

    if (d_IsPlod === 1) {
        strRequare += "is_fruitful = 'true'";
    } else if (d_IsPlod === 3) {
        strRequare += "is_fruitful = 'false'";
    }

    strRequare += " AND ";

    if (e_StandOnWindow === 2) {
        strRequare += "(sunlight_tolerance_description = 'Нет' OR sunlight_tolerance_description = 'Средне')";
        strRequare += " AND ";
        strRequare += "max_light <= 8";
    } else if (e_StandOnWindow === 1) {
        strRequare += "min_light >= 3";
    }
    
    strRequare += " AND ";
    
    if (f_GenerateAOxugen === 1) {
        strRequare += "oxygen_production >= 5";
    } else if (f_GenerateAOxugen === 2) {
        strRequare += "oxygen_production >= 3";
    }
    
    strRequare += " AND ";
    
    if (g_AFreeProstr === 1) {
        strRequare += "area_covered <= 4";
    } else if (g_AFreeProstr === 2) {
        strRequare += "area_covered <= 7";
    }
    
    strRequare += " AND ";
    
    if (h_NoControl === 1) {
        strRequare += "care_instructions < 6";
    } else if (h_NoControl === 2) {
        strRequare += "(care_instructions >= 6)";
    }
    
    let remove_extra_and = (sql_query) => {
        while (sql_query.includes(' AND  AND ')) {
            sql_query = sql_query.replace(' AND  AND ', ' AND '); // Удаляю AND, если он появился 2 раза подряд
        }
        while (sql_query.includes(' AND AND ')) {
            sql_query = sql_query.replace(' AND AND ', ' AND '); // Удаляю AND, если он появился 2 раза подряд
        }
    
        sql_query = sql_query.trim(); // Удаляю пробелы в конце строки
    
        if (sql_query.endsWith(' AND')) {
            sql_query = sql_query.slice(0, -4); // Удаляю AND, если он вылез в коне запроса
        }
        return sql_query;
    }
    
    let outputRequare = remove_extra_and(strRequare); // Делаю строку без ошибок, как SQL-запрос
    
    outputRequare += str_SortMainReq;
    
    console.log();
    console.log("Запрос:" + outputRequare);
    console.log();    

    allCountOfRequ = 1;

    return(outputRequare)
}

// Вывод значений всех переменных в форму запроса
function debugPrint_2(){
    let output = "Текст запроса: [Тестовый]\n";
    output += `a_InHome: ${a_InHome}\n`;
    output += `a_1_MinTempInHome: ${a_1_MinTempInHome}\n`;
    output += `a_1_input_MinTempInHome: ${a_1_input_MinTempInHome}\n`;
    output += `a_2_AVGTempInRegion: ${a_2_AVGTempInRegion}\n`;
    output += `a_2_input_AVGTempInRegion: ${a_2_input_AVGTempInRegion}\n`;
    output += `a_2_1_AVGHum: ${a_2_1_AVGHum}\n`;
    output += `a_2_1_input_AVGHum: ${a_2_1_input_AVGHum}\n`;
    output += `b_OncePlant: ${b_OncePlant}\n`;
    output += `c_AFlowers: ${c_AFlowers}\n`;
    output += `c_3_SelectAColor: ${c_3_SelectAColor}\n`;
    output += `d_IsPlod: ${d_IsPlod}\n`;
    output += `e_StandOnWindow: ${e_StandOnWindow}\n`;
    output += `e_1_ASunLight: ${e_1_ASunLight}\n`;
    output += `f_GenerateAOxugen: ${f_GenerateAOxugen}\n`;
    output += `g_AFreeProstr: ${g_AFreeProstr}\n`;
    output += `h_NoControl: ${h_NoControl}\n`;    

    document.querySelector('.block-request .req p').textContent = output;

    // Сейчас эта процедура не используется
}

// Обнуляем все переменные
// Используется, если мы нажали на любую кнопку в блоке a
function ZeroingAllVar() {
    a_1_MinTempInHome = 0
    a_1_input_MinTempInHome = 0
    a_2_AVGTempInRegion = 0
    a_2_input_AVGTempInRegion = 0
    a_2_1_AVGHum = 0
    a_2_1_input_AVGHum = 0
    b_OncePlant = 0
    c_AFlowers = 0
    c_3_SelectAColor = ""
    d_IsPlod = 0
    e_StandOnWindow = 0
    e_1_ASunLight = 0
    f_GenerateAOxugen = 0
    g_AFreeProstr = 0
    h_NoControl = 0
}

// Запрос на сортировку в нужном порядке:
str_SortMainReq = ''; 

// Не использую сортировку в SQL-запросе, т.к. я всё равно перемешиваю все навания, когда получаю их

// str_SortMainReq = `
// ORDER BY 
//     is_famous DESC,
//     CASE allelopathy_description 
//         WHEN 'Положительная' THEN 1 
//         WHEN 'Нейтральная' THEN 2 
//         ELSE 3 
//     END,    
//     CASE plant_color_description 
//         WHEN 'разноцветный' THEN 1 
//         WHEN 'белый' THEN 2 
//         WHEN 'жёлтый' THEN 3 
//         WHEN 'голубой' THEN 4 
//         WHEN 'серебристый' THEN 5 
//         WHEN 'бордовый' THEN 6 
//         WHEN 'красный' THEN 7 
//         WHEN 'оранжевый' THEN 8 
//         WHEN 'пёстрый' THEN 9 
//         WHEN 'пурпурный' THEN 10 
//         WHEN 'розовый' THEN 11 
//         WHEN 'синий' THEN 12 
//         WHEN 'фиолетовый' THEN 13
//         WHEN 'Зелёный с белой каймой' THEN 14
//         WHEN 'Зелёный с белыми или розовыми разводами' THEN 15
//         WHEN 'Зелёный с красными прицветниками' THEN 16
//         WHEN 'Зелёный с пятнами' THEN 17
//         WHEN 'Зелёный с разноцветными прожилками' THEN 18
//         WHEN 'Зелёный с серебристым оттенком' THEN 19
//         ELSE 20
//     END,
//     area_covered ASC,
//     oxygen_production DESC;
// `;

// ------------------------------------------ //
// 	             2й запрос к БД:              //
// ------------------------------------------ // 

let allCountOfRequ = 0; // Общее количество запросов к БД

// 2й запрос к БД - выборка по всем выбранным цветам, без учёта других параметров
// Выполняется, если первый запрос вернул пустой результат
function Requ_2_OnlyGettingColor() {
    if(colors['green'] == true) {
        console.log("Выбран зелёный цвет, говорим, что результатов нету");
        isGreenZeroRequest = true;
        document.querySelector('.zero-reauest').style.display = 'grid';
        document.querySelector('.loadd').style.display = 'none';
        document.querySelector('.result-cards').style.display = 'none';
    } else if(allCountOfRequ < 2) {    
        console.log("Посылаем новый запрос, только с цветами");
        allCountOfRequ = 2;
        document.querySelector('.loadd').style.display = 'grid';

        let addStr1 = "";
    
        if(colors['red'] == true) {
            addStr1 += "plant_color_description LIKE '%расный%' OR ";
        } 
        if(colors['orange'] == true) {
            addStr1 += "plant_color_description LIKE '%ранжевый%' OR ";
        } 
        if(colors['yellow'] == true) {
            addStr1 += "plant_color_description LIKE '%ёлтый%' OR ";
        } 
        if(colors['lightBlue'] == true) {
            addStr1 += "plant_color_description LIKE '%олубой%' OR ";
        } 
        if(colors['blue'] == true) {
            addStr1 += "plant_color_description LIKE '%иний%' OR ";
        } 
        if(colors['violet'] == true) {
            addStr1 += "plant_color_description LIKE '%иолетовый%' OR ";
        } 
        if(colors['pink'] == true) {
            addStr1 += "plant_color_description LIKE '%озовый%' OR ";
        } 
        if(colors['silver'] == true) {
            addStr1 += "plant_color_description LIKE '%еребристый%' OR ";
        } 
        if(colors['multicolor'] == true) {
            addStr1 += "plant_color_description LIKE '%азноцветный%' OR ";
        }         
    
        addStr1 = addStr1.trim(); // Удаляю пробелы в конце строки
    
        if (addStr1.endsWith(' OR')) {
            addStr1 = addStr1.slice(0, -3); // Удаляю OR, если он вылез в коне запроса
        }

        let strRequare = "SELECT plant_name FROM MainTable WHERE ";
        strRequare += addStr1;
        
        //let SQL_Rq = CreateSQLequest();
        document.querySelector('.block-request .req p').textContent = strRequare;

        document.querySelector('.reauest-2-only-color').style.display = 'block';
        document.querySelector('.result-cards .spsp').style.display = 'none';

        SQL_RQ_FromSwever(strRequare);        
    }
}

// ------------------------------------------------------------------- //
// 	   Запрос к серверу, и выполнение SQL-кода, через php скрипт:      //
// ------------------------------------------------------------------- // 

var sql_2 = ""; // Запрос, который мы посылаем к БД чезе подкючение к php скрипту

// Пример запроса:
// var sql_2 = "SELECT plant_name FROM MainTable WHERE plant_type_description = 'Уличное' AND (allelopathy_description = 'Нейтральная' OR allelopathy_description = 'Положительная') AND (care_instructions >= 6)";

let isEmptyBDAnswer = false;    // Мы получили непустой ответ от БД?
let isGreenZeroRequest = false; // Если в нашем 1м запросе уже был указан зелёный цвет (тогда мы не посылаем 2й запрос, а выводим, что нет результатов)

// Запрос к БД растений:
function SQL_RQ_FromSwever(sql_2) {
    // Используем асинхронную функцию для запроса-ответа к серверу
    $.ajax({

        // Подключаемся к php файлу на сервере
        type: "POST",
        url: "https://gogortey.ru/res/getdata_2.php",
        
        // Отправляем туда наш SQL-запрос
        data: { sql: sql_2 },

        // Когда получим ответ:
        success: function(data_inp) {

            // Если сервер вернул пустой ответ:
            if(data_inp == "0 results[]") {                

                console.log("Пустой ответ");
                isEmptyBDAnswer = false;            

                if(allCountOfRequ >= 2) {
                    isGreenZeroRequest = true;
                    ZeroReauest_Show();
                }
                if(colors['green'] == false) {
                    Requ_2_OnlyGettingColor();
                } else {
                    isGreenZeroRequest = true;
                    ZeroReauest_Show();
                }
                
            // Если в нашем SQL-запросе появились лишние функции, типа DELETE или CREATE (была попытка SQL-инъекции)
            } else if(data_inp.startsWith("Неверный запрос")) {                 

                console.log(data_inp);
                isEmptyBDAnswer = false;
                docWrite_01(data_inp);
                
                ZeroReauest_Show();

            // Если мы получили нужный ответ от БД:
            } else {                

                allCountOfRequ = 3; // Устанавливаем, что бы 2й запрос точно не прошёл
                isEmptyBDAnswer = true;

                var data = JSON.parse(data_inp);

                JSON_Parser_OnConsole(data);    // Сначала выводим полученный из БД ответ, в консоль
                JSON_Parser_OnHTMLPage(data);   // Затем, обрабатываем, для вывода на страницу, в карточках

                return(data);
            }
            //console.log(data);
        }
    });

    // Вывод полученного ответа от БД в консоль
    function JSON_Parser_OnConsole(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]); // Выводим каждую строку в консоль
        }
    }

    // Обработка полученного ответа от БД, для вывода в карточки
    function JSON_Parser_OnHTMLPage(data) {
        var plantNames = ""; 

        // Перемешиваем получившийся массив в случайном порядке
        data.sort(function(a, b) {
            return 0.5 - Math.random();
        });        

        plantNames = OnPageWeu_02(data);

        if(plantNames == "Пустой ответ" || isGreenZeroRequest === true || data.length == 0) {
            // Показываем карточку "Мы не смогли подобрать для вас растения"

            ZeroReauest_Show(); 
        } else {
            docWrite_01(plantNames, data);
        }  
    }    

    // Показываем только блок "К сожалению, мы не смогли подобрать для вас растение", и кнопку "Пройти ещё раз"
    function ZeroReauest_Show() {
        document.querySelector('.zero-reauest').style.display = 'grid';
        document.querySelector('.result-cards').style.display = 'none';
        document.querySelector('.reauest-2-only-color').style.display = 'none';
        document.querySelector('.loadd').style.display = 'none';
        document.querySelector('.butt-final-2').style.display = 'flex';
    }
}

// Перебираем данные из массива в строку
function OnPageWeu_02(data) {
    let plantNames = "";

    //console.log("Обрабатываем такую строку:" + data);
    
    if (isEmptyBDAnswer) {
        for (let i = 0; i < data.length; i++) {
            plantNames += data[i].plant_name;
            if (i < data.length - 1) { 
                // Если это не последнее растение, добавляем запятую и пробел
                plantNames += ", ";
            }
        }
    } else {
        plantNames = "Пустой ответ";
    }

    //console.log("На выходе получили такую:" + plantNames);

    return plantNames;
}

// ------------------------------------------ //
// 	         Отображение карточек:            //
// ------------------------------------------ // 

// Показываем блок карточек, и выводим их в нужном порядке
function docWrite_01(text, data) {
    document.querySelector('.loadd').style.display = 'none';
    document.querySelector('.block-request .answ p').innerText = text;
    document.querySelector('.result-cards').style.display = 'grid';   

    document.querySelector('.butt-final-2').style.display = 'flex';
    document.querySelector('.butt-final-2').scrollIntoView({behavior: "smooth"});

    console.log("Отправляем вот такую строку:" + text); 

    randomImgPlantsCard();  // Устанавливаем случайные картинки из набора, на все карточки
    SetNamePlants(data);    // Устанавливаем нужные названия для карточек, из массива
}

// Устанавливает случайные картинки из набора, на все карточки
function randomImgPlantsCard() {
    // Получаем все элементы img внутри .card
    let images = document.querySelectorAll('.card img');

    // Создаем массив с именами файлов изображений
    let imageNames = Array.from({length: 13}, (_, i) => `img/plant-image/P_${String(i+1).padStart(2, '0')}.png`);

    // Перемешиваем массив
    imageNames.sort(() => Math.random() - 0.5);

    // Присваиваем каждому элементу img случайное изображение из массива
    images.forEach((img, index) => {
        img.src = imageNames[index];
    });
}

// Устанавливает нужные названия для карточек, из массива
function SetNamePlants(plantNames_mass) {
    // Пример входной строки:
    // "Геликония, Бувардия, Будра, Жакаранда, Камнеломка, Лаванда, Осока";

    // Получаем все карточки
    let spans = document.querySelectorAll('.card span');

    // Присваиваем каждой карточке название растения из массива
    spans.forEach((span, index) => {
        if (index < plantNames_mass.length) {
            span.textContent = plantNames_mass[index].plant_name;
            span.parentElement.style.display = 'grid';
        } else {
            span.parentElement.style.display = 'none'; // Скрываем лишние карточки
        }
    });

    // Если названий растений меньше 7, но больше 3, показываем только первые 3 карточки
    if (plantNames_mass.length < 7 && plantNames_mass.length > 3) {
        for (let i = 3; i < spans.length; i++) {
            spans[i].parentElement.style.display = 'none';
        }
    }

    // Вот тут добавить логику, что если выбрано "Подобрать 1 растение", то он показывает только 1 карточку --------------------------------------< ВАЖНО
}

// Перезагружаю страницу, если нажата кнопка "Пройти ещё раз"
// [Эта процедура вызывается после загрузки всей DOM-модели страницы, в самом верху этого скрипта]
function ReloadPageButtonProc() {
    document.querySelector('.butt-final-2').addEventListener('click', function() {
        location.reload();
    });    
}


// ...
// Прячет все блоки, и обнуляет все переменные
// function HideAll() {
//     a_1_MinTempInHome = 0
//     a_1_input_MinTempInHome = 0
//     a_2_AVGTempInRegion = 0
//     a_2_input_AVGTempInRegion = 0
//     a_2_1_AVGHum = 0
//     a_2_1_input_AVGHum = 0
//     b_OncePlant = 0
//     c_AFlowers = 0
//     c_3_SelectAColor = ""
//     d_IsPlod = 0
//     e_StandOnWindow = 0
//     e_1_ASunLight = 0
//     f_GenerateAOxugen = 0
//     g_AFreeProstr = 0
//     h_NoControl = 0

//     removeActiveClass('block-a-1');
//     removeActiveClass('block-a-2');
//     removeActiveClass('block-a-2-1');
//     removeActiveClass('block-b');
//     removeActiveClass('block-c');
//     removeActiveClass('block-c-3');
//     removeActiveClass('block-d');
//     removeActiveClass('block-e');
//     removeActiveClass('block-e-1');
//     removeActiveClass('block-f');
//     removeActiveClass('block-g');
//     removeActiveClass('block-h');

//     document.getElementById('block-a-1').style.display = 'none';
//     document.getElementById('block-a-2').style.display = 'none';
//     document.getElementById('block-a-2-1').style.display = 'none';
//     document.getElementById('block-b').style.display = 'none';
//     document.getElementById('block-c').style.display = 'none';
//     document.getElementById('block-c-3').style.display = 'none';
//     document.getElementById('block-d').style.display = 'none';
//     document.getElementById('block-e').style.display = 'none';
//     document.getElementById('block-e-1').style.display = 'none';
//     document.getElementById('block-f').style.display = 'none';
//     document.getElementById('block-g').style.display = 'none';
//     document.getElementById('block-gh').style.display = 'none';
// }

// function debugPrint(){
//     console.log("----------");
//     console.log("Debug Print:");
//     console.log(`a_InHome: ${a_InHome}`);
//     if (a_InHome == 1) {
//         console.log(`a_1_MinTempInHome: ${a_1_MinTempInHome}`);
//         if (a_1_MinTempInHome == 1) {
//             console.log(`a_1_input_MinTempInHome: ${a_1_input_MinTempInHome}`);
//         }
//     } else {
//         console.log(`a_2_AVGTempInRegion: ${a_2_AVGTempInRegion}`);
//         if (a_2_AVGTempInRegion == 1) {
//             console.log(`a_2_input_AVGTempInRegion: ${a_2_input_AVGTempInRegion}`);
//         }
//         console.log(`a_2_1_AVGHum: ${a_2_1_AVGHum}`);
//         if (a_2_1_AVGHum == 1) {
//             console.log(`a_2_1_input_AVGHum: ${a_2_1_input_AVGHum}`);
//         }
//     }
    
//     console.log(`b_OncePlant: ${b_OncePlant}`);
    
//     console.log(`c_AFlowers: ${c_AFlowers}`);
//     if (c_AFlowers == 3) {
//         console.log(`c_3_SelectAColor: ${c_3_SelectAColor}`);
//     }
    
//     console.log(`d_IsPlod: ${d_IsPlod}`);
    
//     console.log(`e_StandOnWindow: ${e_StandOnWindow}`);
//     if (e_StandOnWindow == 1) {
//         console.log(`e_1_ASunLight: ${e_1_ASunLight}`);
//     }
    
//     console.log(`f_GenerateAOxugen: ${f_GenerateAOxugen}`);
    
//     console.log(`g_AFreeProstr: ${g_AFreeProstr}`);
    
//     console.log(`h_NoControl: ${h_NoControl}`);    
// }


// Передаю набор переменных в финальное окошко
