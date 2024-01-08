
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

// Ждём, пока DOM-модель полностью загрузится
document.addEventListener('DOMContentLoaded', function() { 
    UpdateDevelomMode();

    // Скрывет все блоки с классом "block-qu", в начале
    const elements = document.querySelectorAll('.block-qu');

    elements.forEach(element => {
      element.style.display = 'none';
    });

    document.getElementsByClassName('butt-final')[0].style.display = 'none';
    document.getElementsByClassName('block-request')[0].style.display = 'none';
    document.querySelector('.butt-final-2').style.display = 'none';

    document.querySelector('.loadd').style.display = 'none';
    document.querySelector('.result-cards').style.display = 'none';
    document.querySelector('.zero-reauest').style.display = 'none';

    // Для кнопки старта прописываем событие по нажатию
    document.querySelector('.butt-start').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        console.log("123");
        document.getElementById('block-a').style.display = 'grid';
        document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';
        isStart = true;
    });

    document.querySelector('.butt-final').addEventListener('click', function() {

        if(_mainCounter == 10) {
            _mainCounter = -1;
            if(isDevelopModActive === true) {
                document.getElementsByClassName('block-request')[0].style.display = 'grid';
            }
            
            document.getElementsByClassName('butt-final')[0].style.display = 'none';
            document.querySelector('.butt-final-2').style.display = 'flex';
            document.querySelector('.loadd').style.display = 'grid';
            document.querySelector('.loadd').scrollIntoView({behavior: "smooth"});

            //debugPrint_2();

            //let SQL_Rq = CreateSQLequest();
            //document.querySelector('.block-request .req p').textContent = SQL_Rq;

            let SQL_Rq = CreateSQLequest();
            document.querySelector('.block-request .req p').textContent = SQL_Rq;

            SQL_RQ_FromSwever(SQL_Rq);
            //document.querySelector('.block-request .answ p').textContent = BD_Answer;            

            elements.forEach(element => {
                element.style.display = 'none';
            });

            console.log("Final*");
        }
    });

    var buttons = document.querySelectorAll('.butt-answ');

    // Применяем случайный цвет фона к каждой кнопке - от красного до зелёного
    for (var i = 0; i < buttons.length; i++) {
        var hue = Math.floor(Math.random() * 81) + 20;
        buttons[i].style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)';
    }

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

    //document.querySelector('#block-a-1').style.display = 'block';

    //let currentLetterButtonDown = "";

    SetButtonSelection();

    // var block = document.getElementById('block-a');
    // var buttons = block.querySelectorAll('.answ-block-1, .answ-block-2');

    document.querySelector('.butt-final-2').addEventListener('click', function() {
        location.reload();
    });    
});

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

let isDevelopModActive = false;

let _mainCounter = 0;               // Счётчик состояний

let isStart = false;
let isTempCorrect = false;
let isHumCorrect = false;
let isColorCucsSelected = false;

let isRevertQuwerty = 0;
let RQ_2 = 0;


// Скрывает указанный блок
function HideBlock(nameBlock) {
    document.getElementById(nameBlock).style.display = 'none'; // Скрываю весь блок со страницы
    removeActiveClass(nameBlock); // Убираю выделение у последней нажатой кнопки в этом блоке
}

// Показывает указанный блок
function ShowBlock(nameBlock) {
    let block = document.getElementById(nameBlock);

    block.style.display = 'grid';       
    block.scrollIntoView({behavior: "smooth"});
}

// Перераспределение блоков
// Процедура вызывается после нажатия на кнопку в любом блоке
function CheckAllBlocks() {

    if(isStart == true) {
        _mainCounter = 1;
    }

    console.log("Update all blocks")    

    

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
            //let block = document.getElementById('block-c-3');
            //block.style.display = 'grid';   
            window.scrollTo(0, document.body.scrollHeight);

            //isColorCucsSelected = false
            //_mainCounter = 6;
        } else {
            HideBlock('block-c-3');
            //_mainCounter = 6;
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

function removeActiveClass(parentId) {
    let elements = document.getElementById(parentId).querySelectorAll('.butt-answ');
    for(let i=0; i<elements.length; i++){
        elements[i].classList.remove('active');
    }
}



function CheckCorrectInput1() {
    document.querySelector('.my-input-1').addEventListener('input', function(e) {
        var value = e.target.value;
        var errorElement = document.querySelector('.err-inp-1');
        
        if (value == "" || isNaN(value) || value < -20 || value > 35) {
            errorElement.style.display = 'block';
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

//let isTempCorrect = false;
//let isHumCorrect = false;





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
    // Создание объекта для хранения булевых переменных

      
      // Получение всех кнопок цветов
      let buttons = document.querySelectorAll('.butt-bar-colors .color-s');
      
      // Добавление обработчика событий для каждой кнопки
      buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Получение id кнопки (цвета)
            let color = this.id;
      
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

// ------------> Вот тут надо добавить обработчик выбранных цветов







function SetButtonSelection() {

    SetColorAction();

    document.querySelector('#block-a .answ-block-1').addEventListener('click', function() {
        a_InHome = 1
        //currentLetterButtonDown = "a";

        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
        isTempCorrect = false;
        ZeroingAllVar();
    });    
    document.querySelector('#block-a .answ-block-2').addEventListener('click', function() {
        a_InHome = 2
        //currentLetterButtonDown = "a";

        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
        document.querySelector('.err-inp-2').style.display = 'none';
        document.querySelector('.my-input-2').value = '';
        isTempCorrect = false;
        ZeroingAllVar();
    });

    document.querySelector('#block-a-2 .answ-block-1').addEventListener('click', function() {
        //a_InHome = 1
        a_1_MinTempInHome = 1
        // Ввод из поля ввода
        //a_1_input_MinTempInHome = ...
        // Если корректно - то isTempCorrect = true
        
        //isTempCorrect = true
        //currentLetterButtonDown = "a-2";
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        isHumCorrect = false;
    });
    document.querySelector('.my-input-2').addEventListener('input', function(e) {
        //console.log('Значение поля ввода изменилось: ', e.target.value);
        isTempCorrect = false;
        CheckCorrectInput2();

        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        isHumCorrect = false;
    });

    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        // Ввод из поля ввода
        //a_2_input_AVGTempInRegion = ...
        // Если корректно - то isTempCorrect = true
        isTempCorrect = false;
        CheckCorrectInput1();
        //currentLetterButtonDown = "a-1";
    });    
    document.querySelector('.my-input-1').addEventListener('input', function(e) {
        //console.log('Значение поля ввода изменилось: ', e.target.value);
        CheckCorrectInput1();
    });
    document.querySelector('#block-a-1 .answ-block-2').addEventListener('click', function() {
        a_2_AVGTempInRegion = 2
        isTempCorrect = true
        //currentLetterButtonDown = "a-1";
        document.querySelector('.err-inp-1').style.display = 'none';
        document.querySelector('.my-input-1').value = '';
    });    

    document.querySelector('#block-a-2-1 .answ-block-1-s').addEventListener('click', function() {
        a_2_1_AVGHum = 1
        // Ввод из поля ввода
        //a_2_1_input_AVGHum = ...
        isHumCorrect = false
        //currentLetterButtonDown = "a-2-1";
        CheckCorrectInput3();
    });    
    document.querySelector('.my-input-3').addEventListener('input', function(e) {
        //console.log('Значение поля ввода изменилось: ', e.target.value);
        CheckCorrectInput3();
    });
    document.querySelector('#block-a-2-1 .answ-block-2-s').addEventListener('click', function() {
        a_2_1_AVGHum = 2
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        //currentLetterButtonDown = "a-2-1";
    });    
    document.querySelector('#block-a-2-1 .answ-block-3-s').addEventListener('click', function() {
        a_2_1_AVGHum = 3
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        //currentLetterButtonDown = "a-2-1";
    });    
    document.querySelector('#block-a-2-1 .answ-block-4-s').addEventListener('click', function() {
        a_2_1_AVGHum = 4
        isHumCorrect = true
        document.querySelector('.err-inp-3').style.display = 'none';
        document.querySelector('.my-input-3').value = '';
        //currentLetterButtonDown = "a-2-1";
    });    

    document.querySelector('#block-b .answ-block-1').addEventListener('click', function() {
        b_OncePlant = 1
        //currentLetterButtonDown = "b";
    });    
    document.querySelector('#block-b .answ-block-2').addEventListener('click', function() {
        b_OncePlant = 2
        //currentLetterButtonDown = "b";
    });

    document.querySelector('#block-c .answ-block-1').addEventListener('click', function() {
        c_AFlowers = 1
        //currentLetterButtonDown = "c";
        ColorZeroing() 
    });    
    document.querySelector('#block-c .answ-block-2').addEventListener('click', function() {
        c_AFlowers = 2
        //currentLetterButtonDown = "c";
        ColorZeroing() 
    });
    document.querySelector('#block-c .answ-block-3').addEventListener('click', function() {
        c_AFlowers = 3
        //currentLetterButtonDown = "c";
    });

    //c-3

    document.querySelector('#block-d .answ-block-1').addEventListener('click', function() {
        d_IsPlod = 1
        //currentLetterButtonDown = "d";
    });    
    document.querySelector('#block-d .answ-block-2').addEventListener('click', function() {
        d_IsPlod = 2
        //currentLetterButtonDown = "d";
    });
    document.querySelector('#block-d .answ-block-3').addEventListener('click', function() {
        d_IsPlod = 3
        //currentLetterButtonDown = "d";
    });

    document.querySelector('#block-e .answ-block-1').addEventListener('click', function() {
        e_StandOnWindow = 1
        //currentLetterButtonDown = "e";
    });    
    document.querySelector('#block-e .answ-block-2').addEventListener('click', function() {
        e_StandOnWindow = 2
        //currentLetterButtonDown = "e";
    });

    document.querySelector('#block-e-1 .answ-block-1').addEventListener('click', function() {
        e_1_ASunLight = 1
        //currentLetterButtonDown = "e-1";
    });    
    document.querySelector('#block-e-1 .answ-block-2').addEventListener('click', function() {
        e_1_ASunLight = 2
        //currentLetterButtonDown = "e-1";
    });
    document.querySelector('#block-e-1 .answ-block-3').addEventListener('click', function() {
        e_1_ASunLight = 3
        //currentLetterButtonDown = "e-1";
    });

    document.querySelector('#block-f .answ-block-1').addEventListener('click', function() {
        f_GenerateAOxugen = 1
        //currentLetterButtonDown = "f";
    });    
    document.querySelector('#block-f .answ-block-2').addEventListener('click', function() {
        f_GenerateAOxugen = 2
        //currentLetterButtonDown = "f";
    });
    document.querySelector('#block-f .answ-block-3').addEventListener('click', function() {
        f_GenerateAOxugen = 3
        //currentLetterButtonDown = "f";
    });

    document.querySelector('#block-g .answ-block-1').addEventListener('click', function() {
        g_AFreeProstr = 1
        //currentLetterButtonDown = "g";
    });    
    document.querySelector('#block-g .answ-block-2').addEventListener('click', function() {
        g_AFreeProstr = 2
        //currentLetterButtonDown = "g";
    });
    document.querySelector('#block-g .answ-block-3').addEventListener('click', function() {
        g_AFreeProstr = 3
        //currentLetterButtonDown = "g";
    });

    document.querySelector('#block-h .answ-block-1').addEventListener('click', function() {
        h_NoControl = 1
        //currentLetterButtonDown = "h";
    });    
    document.querySelector('#block-h .answ-block-2').addEventListener('click', function() {
        h_NoControl = 2
        //currentLetterButtonDown = "h";
    });
    document.querySelector('#block-h .answ-block-3').addEventListener('click', function() {
        h_NoControl = 3
        //currentLetterButtonDown = "h";
    });
}

// function SQLteReq() {
//     // Подключаем модуль sqlite3
//     var sqlite3 = require('sqlite3').verbose();

//     // Открываем базу данных SQLite
//     var db = new sqlite3.Database('/путь/к/вашей/базе/данных.db');

//     db.serialize(function() {
//       // Выполняем запрос SELECT
//       db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//         // Выводим результаты в консоль
//         console.log(row.id + ": " + row.info);
//       });
//     });

//     // Закрываем базу данных
//     db.close();
// }

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
            strRequare += " min_temperature >= " + (a_2_input_AVGTempInRegion - windowCompare);
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
        if(colors['lightBlue'] === true) {
            addStr1 += "plant_color_description LIKE '%олубой%' OR ";
        } 
        if(colors['blue'] == true) {
            addStr1 += "plant_color_description LIKE '%иний%' OR ";
        } 
        if(colors['violet'] == true) {
            addStr1 += "plant_color_description LIKE '%илоетовый%' OR ";
        } 
        if(colors['pink'] == true) {
            addStr1 += "plant_color_description LIKE '%озовый%' OR ";
        } 
        if(colors['silver'] == true) {
            addStr1 += "plant_color_description LIKE '%еребрянный%' OR ";
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

    return(outputRequare)
}



// Вставляем полученные значения переменных в форму запроса
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
}


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
str_SortMainReq = ''; // Пока что, для тестов

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

// return "Неверный запрос";

//var sql_2 = "SELECT plant_name FROM MainTable WHERE plant_type_description = 'Уличное' AND (allelopathy_description = 'Нейтральная' OR allelopathy_description = 'Положительная') AND (care_instructions >= 6) ORDER BY is_famous DESC, CASE allelopathy_description WHEN 'Положительная' THEN 1 WHEN 'Нейтральная' THEN 2 ELSE 3 END, CASE plant_color_description WHEN 'разноцветный' THEN 1 WHEN 'белый' THEN 2 WHEN 'жёлтый' THEN 3 WHEN 'голубой' THEN 4 WHEN 'серебристый' THEN 5 WHEN 'бордовый' THEN 6 WHEN 'красный' THEN 7 WHEN 'оранжевый' THEN 8 WHEN 'пёстрый' THEN 9 WHEN 'пурпурный' THEN 10 WHEN 'розовый' THEN 11 WHEN 'синий' THEN 12 WHEN 'фиолетовый' THEN 13 WHEN 'Зелёный с белой каймой' THEN 14 WHEN 'Зелёный с белыми или розовыми разводами' THEN 15 WHEN 'Зелёный с красными прицветниками' THEN 16 WHEN 'Зелёный с пятнами' THEN 17 WHEN 'Зелёный с разноцветными прожилками' THEN 18 WHEN 'Зелёный с серебристым оттенком' THEN 19 ELSE 20 END, area_covered ASC, oxygen_production DESC;";
var sql_2 = "";
let isNotEmptyBDAnswer = false; // Мы получили непустой ответ от БД?

function SQL_RQ_FromSwever(sql_2) {
    // Запрос к БД ратсений:
    $.ajax({
        type: "POST",
        url: "https://gogortey.ru/res/getdata_2.php",
        data: { sql: sql_2 },
        success: function(data_inp) {
            if(data_inp == "0 results[]") {
                console.log("Пустой ответ");
                docWrite_01("Пустой ответ");
                isEmptyBDAnswer = false;
                //.zero-reauest 
                document.querySelector('.zero-reauest').style.display = 'grid';
                document.querySelector('.result-cards').style.display = 'none';
            } else if(data_inp.startsWith("Неверный запрос")) { //if(data_inp == "Неверный запрос") {
                console.log(data_inp);
                docWrite_01(data_inp);
                isEmptyBDAnswer = false;
                document.querySelector('.zero-reauest').style.display = 'grid';
                document.querySelector('.result-cards').style.display = 'none';
            } else {
                isNotEmptyBDAnswer = true;
                var data = JSON.parse(data_inp);
                JSON_Parser_OnConsole(data);
                JSON_Parser_OnHTMLPage(data);
                return(data);
            }
            //console.log(data);
        }
    });

    function JSON_Parser_OnConsole(data) {
        //var data = JSON.parse(xhr.responseText); // преобразуем ответ в JSON
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]); // выводим каждую строку в консоль
        }
    }

    function JSON_Parser_OnHTMLPage(data) {
        var plantNames = ""; // создаем пустую строку

        // Перемешиваем получившийся массив в случайном порядке
        data.sort(function(a, b) {
            return 0.5 - Math.random();
        });        

        plantNames = OnPageWeu_02(data);

        // for (var i = 0; i < data.length; i++) {     

        //     //console.log(data[i]); // выводим каждую строку в консоль

        //     plantNames += data[i].plant_name; // добавляем имя растения в строку            
            
        //     // if (i < data.length - 1) { // если это не последнее растение, добавляем запятую и пробел
        //     //     plantNames += ", ";
        //     // }
        // }
        
        //document.getElementById("your-p-tag-id").innerText = plantNames; // устанавливаем текст для вашего тега <p>
        docWrite_01(plantNames);
    }    
}

function docWrite_01(text) {
    document.querySelector('.block-request .answ p').innerText = text;
    
    document.querySelector('.loadd').style.display = 'none';
    document.querySelector('.result-cards').style.display = 'grid';

    window.plantCards_plantNames = text;
    window.setCards();
}

function OnPageWeu_02(data) {
    let plantNames = "";
    let plantNames_top3 = "";
    let plantNames_next3 = "";
    
    if (isNotEmptyBDAnswer) {
        if (data.length > 7) {
            for (let i = 0; i < 3; i++) {
                plantNames_top3 += data[i].plant_name;
                if (i < 2) { // если это не последнее растение, добавляем запятую и пробел
                    plantNames_top3 += ", ";
                }
            }
            for (let i = 3; i < 7; i++) {
                plantNames_next3 += data[i].plant_name;
                if (i < 6) { // если это не последнее растение, добавляем запятую и пробел
                    plantNames_next3 += ", ";
                }
            }
            plantNames = plantNames_top3 + ", " + plantNames_next3;
        } else {
            for (let i = 0; i < data.length; i++) {
                plantNames += data[i].plant_name;
                if (i < data.length - 1) { // если это не последнее растение, добавляем запятую и пробел
                    plantNames += ", ";
                }
            }
        }
    } else {
        plantNames = "Пустой ответ";
    }

    return plantNames;
}




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
