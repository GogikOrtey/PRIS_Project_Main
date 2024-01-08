
// ------------------------------------------------------------------- //
// 	            Ждём, пока DOM-модель полностью загрузится:	           //                                              
// ------------------------------------------------------------------- // 

document.addEventListener('DOMContentLoaded', function() { 
    
    //UpdateDevelomMode();

    // Скрывет все блоки с классом "block-qu", в начале
    const elements = document.querySelectorAll('.block-qu');

    elements.forEach(element => {
      element.style.display = 'none';
    });

    // Также скрывает все особые блоки и кнопки, в начале
    // document.getElementsByClassName('butt-final')[0].style.display = 'none';
    // document.getElementsByClassName('block-request')[0].style.display = 'none';
    // document.querySelector('.butt-final-2').style.display = 'none';
    // document.querySelector('.reauest-2-only-color').style.display = 'none';

    // document.querySelector('.loadd').style.display = 'none';
    // document.querySelector('.result-cards').style.display = 'none';
    // document.querySelector('.zero-reauest').style.display = 'none';

    // ------------------------------------------------------------------- //
    // 	             Обработчик событий для кнопки старта:	               //                                              
    // ------------------------------------------------------------------- // 

    // document.querySelector('.load-req').addEventListener('click', function() {
    //     AllReq();
    // });

    AllReq();

    // ------------------------------------------------------------------- //
    // 	                Случайный цвет для кнопок ответа:	               //
    // ------------------------------------------------------------------- // 

    // Случайный цвет (зелёный/жёлтый/красный), в зависимости от класса кнопки:

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



    // ------------------------------------------------------------------- //
    // 	      Обрабатываю нажатие на кнопку "Показать результаты":	       //                                              
    // ------------------------------------------------------------------- // 

    //FinalButtonProc();

    // ------------------------------------------------------------------- //
    // 	        Обрабатываю нажатие на кнопку "Пройти ещё раз"             //
    // ------------------------------------------------------------------- // 

    // Перезагружаю страницу, если нажата кнопка "Пройти ещё раз"
    //ReloadPageButtonProc();
});


function AllReq() {
    console.log("Отправляем на сервер запрос: " + strRequare);
    SQL_RQ_FromSwever(strRequare);
}




// ------------------------------------------ //
// 	          Создание SQL-запроса:           //
// ------------------------------------------ // 

strRequare = "SELECT * FROM MainTable";
//strRequare = "SELECT plant_name FROM MainTable";

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

        // // Перемешиваем получившийся массив в случайном порядке
        // data.sort(function(a, b) {
        //     return 0.5 - Math.random();
        // });        

        plantNames = OnPageWeu_02(data);

        if(plantNames == "Пустой ответ" || isGreenZeroRequest === true || data.length == 0) {
            // Показываем карточку "Мы не смогли подобрать для вас растения"

            ZeroReauest_Show(); 
        } else {

            ShowAllCards(data);

            //docWrite_01(plantNames, data);

            // //document.querySelector('.block-request .answ p').innerText = plantNames;
            // let block = document.querySelector('.block-request .answ');
            // block.innerHTML = ''; // Очистка содержимого блока
            // data.forEach(name => {
            //     let p = document.createElement('p');
            //     p.innerText = "Растение " + name.plant_name;
            //     block.appendChild(p);
            // });
            // let p = document.createElement('p');
            // p.innerText = "Всего названий: " + data.length;
            // block.appendChild(p);
        }  
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

function ShowAllCards(data) {
    // Получаем элемент, в который будем добавлять карточки
    let container = document.q uerySelector('.card-holder');

    let limitter = 18;
    let intCounter = 0;

    // Проходим по каждому элементу в массиве данных
    data.forEach(item => {
        if(intCounter < limitter) {
            // Создаем элементы для карточки
            let card = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');
            
            // Устанавливаем атрибуты и содержимое для элементов
            card.className = 'card';
            img.src = `img/all-plants-photo/Растение ${item.plant_name}.jpg`;
            span.textContent = item.plant_name;
            
            // Добавляем img и span в card
            card.appendChild(img);
            card.appendChild(span);
            
            // Добавляем card в container
            container.appendChild(card);
            intCounter++;
        }
    });
}

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

// Перезагружаю страницу, если нажата кнопка "Пройти ещё раз"
// [Эта процедура вызывается после загрузки всей DOM-модели страницы, в самом верху этого скрипта]
function ReloadPageButtonProc() {
    document.querySelector('.butt-final-2').addEventListener('click', function() {
        location.reload();
    });    
}

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
