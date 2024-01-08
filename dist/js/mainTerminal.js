
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

let isStart = false;

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
        isStart = true;
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
    });

    document.querySelector('#block-a-1 .answ-block-1').addEventListener('click', function() {
        a_2_AVGTempInRegion = 1
        // Ввод из поля ввода
        //a_2_input_AVGTempInRegion = ...
        // Если корректно - то isTempCorrect = true
        isTempCorrect = false
    });    
    document.querySelector('#block-a-1 .answ-block-2').addEventListener('click', function() {
        a_2_AVGTempInRegion = 2
        isTempCorrect = true
    });    
    
    document.querySelector('#block-a-2-1 .answ-block-1-s').addEventListener('click', function() {
        a_2_1_AVGHum = 1
        // Ввод из поля ввода
        //a_2_1_input_AVGHum = ...
    });    
    document.querySelector('#block-a-2-1 .answ-block-2-s').addEventListener('click', function() {
        a_2_1_AVGHum = 2
    });    
    document.querySelector('#block-a-2-1 .answ-block-3-s').addEventListener('click', function() {
        a_2_1_AVGHum = 3
    });    
    document.querySelector('#block-a-2-1 .answ-block-4-s').addEventListener('click', function() {
        a_2_1_AVGHum = 4
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

});

let isTempCorrect = false;

// Перераспределение блоков
// Процедура вызывается после нажатия на кнопку в любом блоке
function CheckAllBlocks(){
    if(isStart == true) {
        console.log("Update all blocks")

        if (a_InHome == 2) {
            document.getElementById('block-a-1').style.display = 'grid';
            document.getElementById('block-a-2').style.display = 'none';
            //document.getElementsByClassName('descr-qu-1-grad')[0].style.display = 'none';
        } else if(a_InHome == 1) {
            document.getElementById('block-a-1').style.display = 'none';
            document.getElementById('block-a-2').style.display = 'grid';
        }



        if((a_2_AVGTempInRegion != 0 || a_2_1_AVGHum != 0) && (isTempCorrect == true)){
            document.getElementById('block-b').style.display = 'grid';
        } else {
            document.getElementById('block-b').style.display = 'none';
        }
    }
}

function debugPrint(){
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
