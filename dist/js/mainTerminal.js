
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

    document.getElementsByClassName('butt-final')[0].style.display = 'none';
    document.getElementsByClassName('block-request')[0].style.display = 'none';

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

        if(mainCounter == 10) {
            mainCounter = -1;
            document.getElementsByClassName('block-request')[0].style.display = 'block';
            document.getElementsByClassName('butt-final')[0].style.display = 'none';
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

    document.querySelector('#block-a .answ-block-1').addEventListener('click', function() {
        a_InHome = 1
    });    
    document.querySelector('#block-a .answ-block-2').addEventListener('click', function() {
        a_InHome = 2
    });

    document.querySelector('#block-a-2 .answ-block-1').addEventListener('click', function() {
        //a_InHome = 1
        a_1_MinTempInHome = 1
        // Ввод из поля ввода
        //a_1_input_MinTempInHome = ...
        // Если корректно - то isTempCorrect = true
        isTempCorrect = true
    });

    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        // Ввод из поля ввода
        //a_2_input_AVGTempInRegion = ...
        // Если корректно - то isTempCorrect = true
        isTempCorrect = true
    });    
    document.querySelector('#block-a-1 .answ-block-2').addEventListener('click', function() {
        a_2_AVGTempInRegion = 2
        isTempCorrect = true
    });    

    document.querySelector('#block-a-2-1 .answ-block-1-s').addEventListener('click', function() {
        a_2_1_AVGHum = 1
        // Ввод из поля ввода
        //a_2_1_input_AVGHum = ...
        isHumCorrect = false
    });    
    document.querySelector('#block-a-2-1 .answ-block-2-s').addEventListener('click', function() {
        a_2_1_AVGHum = 2
        isHumCorrect = true
    });    
    document.querySelector('#block-a-2-1 .answ-block-3-s').addEventListener('click', function() {
        a_2_1_AVGHum = 3
        isHumCorrect = true
    });    
    document.querySelector('#block-a-2-1 .answ-block-4-s').addEventListener('click', function() {
        a_2_1_AVGHum = 4
        isHumCorrect = true
    });    

    document.querySelector('#block-b .answ-block-1').addEventListener('click', function() {
        b_OncePlant = 1
    });    
    document.querySelector('#block-b .answ-block-2').addEventListener('click', function() {
        b_OncePlant = 2
    });

    document.querySelector('#block-c .answ-block-1').addEventListener('click', function() {
        c_AFlowers = 1
    });    
    document.querySelector('#block-c .answ-block-2').addEventListener('click', function() {
        c_AFlowers = 2
    });
    document.querySelector('#block-c .answ-block-3').addEventListener('click', function() {
        c_AFlowers = 3
    });

    //c-3

    document.querySelector('#block-d .answ-block-1').addEventListener('click', function() {
        d_IsPlod = 1
    });    
    document.querySelector('#block-d .answ-block-2').addEventListener('click', function() {
        d_IsPlod = 2
    });
    document.querySelector('#block-d .answ-block-3').addEventListener('click', function() {
        d_IsPlod = 3
    });

    document.querySelector('#block-e .answ-block-1').addEventListener('click', function() {
        e_StandOnWindow = 1
    });    
    document.querySelector('#block-e .answ-block-2').addEventListener('click', function() {
        e_StandOnWindow = 2
    });

    document.querySelector('#block-e-1 .answ-block-1').addEventListener('click', function() {
        e_1_ASunLight = 1
    });    
    document.querySelector('#block-e-1 .answ-block-2').addEventListener('click', function() {
        e_1_ASunLight = 2
    });
    document.querySelector('#block-e-1 .answ-block-3').addEventListener('click', function() {
        e_1_ASunLight = 3
    });

    document.querySelector('#block-f .answ-block-1').addEventListener('click', function() {
        f_GenerateAOxugen = 1
    });    
    document.querySelector('#block-f .answ-block-2').addEventListener('click', function() {
        f_GenerateAOxugen = 2
    });
    document.querySelector('#block-f .answ-block-3').addEventListener('click', function() {
        f_GenerateAOxugen = 3
    });

    document.querySelector('#block-g .answ-block-1').addEventListener('click', function() {
        g_AFreeProstr = 1
    });    
    document.querySelector('#block-g .answ-block-2').addEventListener('click', function() {
        g_AFreeProstr = 2
    });
    document.querySelector('#block-g .answ-block-3').addEventListener('click', function() {
        g_AFreeProstr = 3
    });

    document.querySelector('#block-h .answ-block-1').addEventListener('click', function() {
        h_NoControl = 1
    });    
    document.querySelector('#block-h .answ-block-2').addEventListener('click', function() {
        h_NoControl = 2
    });
    document.querySelector('#block-h .answ-block-3').addEventListener('click', function() {
        h_NoControl = 3
    });


    // var block = document.getElementById('block-a');
    // var buttons = block.querySelectorAll('.answ-block-1, .answ-block-2');


    // for (var i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', function() {
    //         setTimeout(() => {
    //             mainCounter = 1
                
    //             a_1_MinTempInHome = 0
    //             a_1_input_MinTempInHome = 0
    //             a_2_AVGTempInRegion = 0
    //             a_2_input_AVGTempInRegion = 0
    //             a_2_1_AVGHum = 0
    //             a_2_1_input_AVGHum = 0
    //             b_OncePlant = 0
    //             c_AFlowers = 0
    //             c_3_SelectAColor = ""
    //             d_IsPlod = 0
    //             e_StandOnWindow = 0
    //             e_1_ASunLight = 0
    //             f_GenerateAOxugen = 0
    //             g_AFreeProstr = 0
    //             h_NoControl = 0

    //             CheckAllBlocks();
    //         }, 2);
    //     });
//}
});

let isStart = false;
let isTempCorrect = false;
let isHumCorrect = false;
let isColorCucsSelected = false;
let mainCounter = 0;

// Перераспределение блоков
// Процедура вызывается после нажатия на кнопку в любом блоке
function CheckAllBlocks(){
    if(isStart == true) {
        mainCounter = 1;
    }
    console.log("Update all blocks")

    if(mainCounter >= 1) {
        if (a_InHome == 2) {
            // Улица
            document.getElementById('block-a-1').style.display = 'grid';
            document.getElementById('block-a-2').style.display = 'none';
            removeActiveClass('block-a-2');
            a_1_MinTempInHome = 0;
            a_2_1_AVGHum = 0;
            mainCounter = 4;
            document.getElementById('block-a-2-1').style.display = 'none';
            removeActiveClass('block-a-2-1');
            document.getElementById('block-b').style.display = 'none';
            removeActiveClass('block-b');

        } else if(a_InHome == 1) {
            // Дом
            document.getElementById('block-a-1').style.display = 'none';
            document.getElementById('block-a-2').style.display = 'grid';
            removeActiveClass('block-a-1');
            a_2_AVGTempInRegion = 0;
            mainCounter = 2;
        }
    } else {
        a_InHome = 0;
        document.getElementById('block-a-1').style.display = 'none';
        document.getElementById('block-a-2').style.display = 'none';
        removeActiveClass('block-a-1');
        removeActiveClass('block-a-2');
        document.getElementById('block-a-2-1').style.display = 'none';
        removeActiveClass('block-a-2-1');
        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
    }

    if(mainCounter >= 2) {
        if(isTempCorrect == true && a_InHome == 1) {
            document.getElementById('block-a-2-1').style.display = 'grid';
            mainCounter = 3;
        } else {
            document.getElementById('block-a-2-1').style.display = 'none';
            removeActiveClass('block-a-2-1');
            a_2_1_AVGHum = 0;
        }
    } else {
        document.getElementById('block-a-2-1').style.display = 'none';
        removeActiveClass('block-a-2-1');
        a_2_1_AVGHum = 0;
    }

    if(mainCounter >= 3) {
        if((a_2_AVGTempInRegion != 0 
            || (a_2_1_AVGHum != 0 && isHumCorrect == true)) 
            && (isTempCorrect == true) 
            || (a_InHome == 1 && isHumCorrect == true)){
            document.getElementById('block-b').style.display = 'grid';
            mainCounter = 4;
        } else {
            document.getElementById('block-b').style.display = 'none';
            removeActiveClass('block-b');
            b_OncePlant = 0;
        }
    } else {
        document.getElementById('block-b').style.display = 'none';
        removeActiveClass('block-b');
        b_OncePlant = 0;
    }

    if(mainCounter >= 4) {
        if(b_OncePlant != 0) {
            document.getElementById('block-c').style.display = 'grid';
            mainCounter = 6;
        } else {
            document.getElementById('block-c').style.display = 'none';
            removeActiveClass('block-c');
            c_AFlowers = 0;
        }
    } else {
        document.getElementById('block-c').style.display = 'none';
        removeActiveClass('block-c');
        c_AFlowers = 0;
    }

    if(mainCounter >= 5) {
        if(c_AFlowers == 3) { ////// ЦВЕТА!!!
            document.getElementById('block-c-3').style.display = 'grid';
            isColorCucsSelected = false
            //mainCounter = 6;
            // Здесь нужно будет верно обработать ввод цветов
        } else {
            document.getElementById('block-c-3').style.display = 'none';
            removeActiveClass('block-c-3');
            //mainCounter = 6;
        }
    } else {
        document.getElementById('block-c-3').style.display = 'none';
        removeActiveClass('block-c-3');
    }

    if(mainCounter >= 6) {
        if(c_AFlowers == 1 || c_AFlowers == 2 || isColorCucsSelected == true) {
            document.getElementById('block-d').style.display = 'grid';
            mainCounter = 7;
        } else {
            document.getElementById('block-d').style.display = 'none';
            removeActiveClass('block-d');
            d_IsPlod = 0;
        }
    } else {
        document.getElementById('block-d').style.display = 'none';
        removeActiveClass('block-d');
        d_IsPlod = 0;
    }

    if(mainCounter >= 7) {
        if(a_InHome == 1) {
            if(d_IsPlod != 0) {
                document.getElementById('block-e').style.display = 'grid';
            } else {
                document.getElementById('block-e').style.display = 'none';
                removeActiveClass('block-e');
                e_StandOnWindow = 0;
            }
    
            if(e_StandOnWindow == 1) {
                document.getElementById('block-e-1').style.display = 'grid';
            } else {
                document.getElementById('block-e-1').style.display = 'none';
                removeActiveClass('block-e-1');
                e_1_ASunLight = 0;
            }
    
            if(e_StandOnWindow == 2 || e_1_ASunLight != 0) {
                document.getElementById('block-f').style.display = 'grid';
            } else {
                document.getElementById('block-f').style.display = 'none';
                removeActiveClass('block-f');
                f_GenerateAOxugen = 0;
            }
    
            if(f_GenerateAOxugen != 0) {
                document.getElementById('block-g').style.display = 'grid';
                mainCounter = 8;
            } else {
                document.getElementById('block-g').style.display = 'none';
                removeActiveClass('block-g');
                g_AFreeProstr = 0;
            }
        } else {
            removeActiveClass('block-e');
            removeActiveClass('block-e-1');
            removeActiveClass('block-f');
            removeActiveClass('block-g');

            e_StandOnWindow = 0;
            e_1_ASunLight = 0;
            f_GenerateAOxugen = 0;
            g_AFreeProstr = 0;

            mainCounter = 8;
        }
    }

    if(mainCounter >= 8) {
        if(g_AFreeProstr != 0 || (a_InHome == 2 && d_IsPlod != 0)) {
            document.getElementById('block-h').style.display = 'grid';
            mainCounter = 9;
        } else {
            document.getElementById('block-h').style.display = 'none';
            removeActiveClass('block-h');
            h_NoControl = 0;
        }
    } else {
        document.getElementById('block-h').style.display = 'none';
        removeActiveClass('block-h');
        h_NoControl = 0;
    }

    if(mainCounter >= 9) {
        if(h_NoControl != 0) {
            mainCounter = 10;
            document.getElementsByClassName('butt-final')[0].style.display = 'flex';
        }

        // if(h_NoControl != 0) {
        //     //document.getElementById('block-h').style.display = 'grid';
        //     document.getElementsByClassName('butt-final')[0].style.display = 'flex';
        //     document.getElementsByClassName('block-request')[0].style.display = 'block';
        //     //console.log("I'ts Final!!!");
        //     mainCounter = 10;
        //     //debugPrint();
        // } else {
        //     document.getElementsByClassName('butt-final')[0].style.display = 'none';
        //     document.getElementsByClassName('block-request')[0].style.display = 'none';
        //     //document.getElementById('block-h').style.display = 'none';
        // }
    }
}

function removeActiveClass(parentId) {
    let elements = document.getElementById(parentId).querySelectorAll('.butt-answ');
    for(let i=0; i<elements.length; i++){
        elements[i].classList.remove('active');
    }
}


// Когда вопросы скрываются, их перемменные не обнуляются

function debugPrint(){
    console.log("----------");
    console.log("Debug Print:");
    console.log(`a_InHome: ${a_InHome}`);
    if (a_InHome == 1) {
        console.log(`a_1_MinTempInHome: ${a_1_MinTempInHome}`);
        if (a_1_MinTempInHome == 1) {
            console.log(`a_1_input_MinTempInHome: ${a_1_input_MinTempInHome}`);
        }
    } else {
        console.log(`a_2_AVGTempInRegion: ${a_2_AVGTempInRegion}`);
        if (a_2_AVGTempInRegion == 1) {
            console.log(`a_2_input_AVGTempInRegion: ${a_2_input_AVGTempInRegion}`);
        }
        console.log(`a_2_1_AVGHum: ${a_2_1_AVGHum}`);
        if (a_2_1_AVGHum == 1) {
            console.log(`a_2_1_input_AVGHum: ${a_2_1_input_AVGHum}`);
        }
    }
    
    console.log(`b_OncePlant: ${b_OncePlant}`);
    
    console.log(`c_AFlowers: ${c_AFlowers}`);
    if (c_AFlowers == 3) {
        console.log(`c_3_SelectAColor: ${c_3_SelectAColor}`);
    }
    
    console.log(`d_IsPlod: ${d_IsPlod}`);
    
    console.log(`e_StandOnWindow: ${e_StandOnWindow}`);
    if (e_StandOnWindow == 1) {
        console.log(`e_1_ASunLight: ${e_1_ASunLight}`);
    }
    
    console.log(`f_GenerateAOxugen: ${f_GenerateAOxugen}`);
    
    console.log(`g_AFreeProstr: ${g_AFreeProstr}`);
    
    console.log(`h_NoControl: ${h_NoControl}`);    
}


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

    // Вставляем текст в элемент с тегом p
    // let pElement = document.createElement('p');
    // pElement.textContent = output;
    //document.getElementsByClassName('block-request')[0].appendChild(pElement);
    document.querySelector('.block-request .req p').textContent = output;

}
