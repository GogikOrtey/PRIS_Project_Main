
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

    // Скрывет все блоки с классом "block-qu", в начале
    const elements = document.querySelectorAll('.block-qu');

    elements.forEach(element => {
      element.style.display = 'none';
    });

    document.getElementsByClassName('butt-final')[0].style.display = 'none';
    document.getElementsByClassName('block-request')[0].style.display = 'none';
    document.querySelector('.butt-final-2').style.display = 'none';

    // Для кнопки старта прописываем событие по нажатию
    document.querySelector('.butt-start').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        console.log("123");
        document.getElementById('block-a').style.display = 'grid';
        document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';
        isStart = true;
    });

    // Для кнопки старта прописываем событие по нажатию
    document.querySelector('.butt-final').addEventListener('click', function() {
        // По нажатию кнопки Старт, скрываем один блок, и показываем другой:

        if(_mainCounter == 10) {
            _mainCounter = -1;
            document.getElementsByClassName('block-request')[0].style.display = 'grid';
            document.getElementsByClassName('butt-final')[0].style.display = 'none';
            document.querySelector('.butt-final-2').style.display = 'flex';
            debugPrint_2();

            elements.forEach(element => {
                element.style.display = 'none';
            });

            console.log("Final*");
        }
    });

    // Добавляю событие: При нажатии на любую кнопку
    document.querySelectorAll('.butt-answ').forEach(button => {
        button.addEventListener('click', function() {
            //CheckAllBlocks(); // Вызываю обновление всех блоков
            setTimeout(() => {
                CheckAllBlocks(); // Update all the blocks after a 10 millisecond delay
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

    let currentLetterButtonDown = "";

    SetButtonSelection();

    // var block = document.getElementById('block-a');
    // var buttons = block.querySelectorAll('.answ-block-1, .answ-block-2');

    document.querySelector('.butt-final-2').addEventListener('click', function() {
        location.reload();
    });    
});

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
function CheckAllBlocks(){

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
            // a_InHome == 2
            // // (a_InHome == 2 &&
            // //     ((isHumCorrect == true)
            // //     || (a_2_1_AVGHum != 0)))
            // || (RQ_2 <= 0 && a_InHome == 1)
            // || (a_2_1_AVGHum != 0 && isHumCorrect == true)
        )


        // if(
        //     a_InHome == 2
        //     // (a_InHome == 2 &&
        //     //     ((isHumCorrect == true)
        //     //     || (a_2_1_AVGHum != 0)))
        //     || (RQ_2 <= 0 && a_InHome == 1)
        //     || (a_2_1_AVGHum != 0 && isHumCorrect == true)
        // )     
        
        // (((a_2_AVGTempInRegion != 0 
        //     || (a_2_1_AVGHum != 0 && isHumCorrect == true)) 
        //     && (isTempCorrect == true))
        //     && (RQ_2 <= 0 && a_InHome == 1)
        //     ) || ((a_InHome == 1 && isHumCorrect == true))
            
            
            
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
        if(c_AFlowers == 3) { ////// ЦВЕТА!!!
            ShowBlock('block-c-3');
            isColorCucsSelected = false
            //_mainCounter = 6;
            // Здесь нужно будет верно обработать ввод цветов
        } else {
            // removeActiveClass('block-c-3');
            HideBlock('block-c-3');
            //_mainCounter = 6;
        }
    } else {
        HideBlock('block-c-3');
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

    document.querySelectorAll('.main-counter')[0].textContent = _mainCounter;    
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



//let isTempCorrect = false;
//let isHumCorrect = false;





















function SetButtonSelection() {


    





    document.querySelector('#block-a .answ-block-1').addEventListener('click', function() {
        a_InHome = 1
        //currentLetterButtonDown = "a";

        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
    });    
    document.querySelector('#block-a .answ-block-2').addEventListener('click', function() {
        a_InHome = 2
        //currentLetterButtonDown = "a";

        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
    });

    document.querySelector('#block-a-2 .answ-block-1').addEventListener('click', function() {
        //a_InHome = 1
        a_1_MinTempInHome = 1
        // Ввод из поля ввода
        //a_1_input_MinTempInHome = ...
        // Если корректно - то isTempCorrect = true
        
        //isTempCorrect = true
        //currentLetterButtonDown = "a-2";
    });

    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        // Ввод из поля ввода
        //a_2_input_AVGTempInRegion = ...
        // Если корректно - то isTempCorrect = true
        isTempCorrect = false
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
    });    
    document.querySelector('#block-a-2-1 .answ-block-2-s').addEventListener('click', function() {
        a_2_1_AVGHum = 2
        isHumCorrect = true
        //currentLetterButtonDown = "a-2-1";
    });    
    document.querySelector('#block-a-2-1 .answ-block-3-s').addEventListener('click', function() {
        a_2_1_AVGHum = 3
        isHumCorrect = true
        //currentLetterButtonDown = "a-2-1";
    });    
    document.querySelector('#block-a-2-1 .answ-block-4-s').addEventListener('click', function() {
        a_2_1_AVGHum = 4
        isHumCorrect = true
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
    });    
    document.querySelector('#block-c .answ-block-2').addEventListener('click', function() {
        c_AFlowers = 2
        //currentLetterButtonDown = "c";
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

// Вставляем полученные значения переменных в форму запроса
function debugPrint_2(){
    let output = "Текст запроса: [Тестовый]\n";
    output += "Debug Print:\n";
    output += `a_InHome: ${a_InHome}\n`;
    if (a_InHome == 1) {
        output += `a_1_MinTempInHome: ${a_1_MinTempInHome}\n`;
        if (a_1_MinTempInHome == 1) {
            output += `a_1_input_MinTempInHome: ${a_1_input_MinTempInHome}\n`;
        }
    } else {
        output += `a_2_AVGTempInRegion: ${a_2_AVGTempInRegion}\n`;
        if (a_2_AVGTempInRegion == 1) {
            output += `a_2_input_AVGTempInRegion: ${a_2_input_AVGTempInRegion}\n`;
        }
        output += `a_2_1_AVGHum: ${a_2_1_AVGHum}\n`;
        if (a_2_1_AVGHum == 1) {
            output += `a_2_1_input_AVGHum: ${a_2_1_input_AVGHum}\n`;
        }
    }
    
    output += `b_OncePlant: ${b_OncePlant}\n`;
    
    output += `c_AFlowers: ${c_AFlowers}\n`;
    if (c_AFlowers == 3) {
        output += `c_3_SelectAColor: ${c_3_SelectAColor}\n`;
    }
    
    output += `d_IsPlod: ${d_IsPlod}\n`;
    
    output += `e_StandOnWindow: ${e_StandOnWindow}\n`;
    if (e_StandOnWindow == 1) {
        output += `e_1_ASunLight: ${e_1_ASunLight}\n`;
    }
    
    output += `f_GenerateAOxugen: ${f_GenerateAOxugen}\n`;
    
    output += `g_AFreeProstr: ${g_AFreeProstr}\n`;
    
    output += `h_NoControl: ${h_NoControl}\n`;    

    document.querySelector('.block-request .req p').textContent = output;
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
