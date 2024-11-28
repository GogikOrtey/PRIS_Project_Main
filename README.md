### 🪴Курсовой проект: Сервис по подбору растений для дома

Это проект интерактивного сервиса, которы подберёт для вас наилучшее растение, по указанным домашним условиям и вашим предпочтениям ✨

**Под капотом:** Визуал сайта написан на препроцессорах Pug и Stylus. Обработчик действий пользоваеля, на JS. БД на 220 строк и 16 столбцов, доступна на виртуальном сервере. Сам сайт проекта также находится на хостинге  
Суммарно код проекта набрал более 10 000 строчек кода

🟩 Сервис доступен, можете протестировать его прямо сейчас! 

♾️ https://gogortey.ru/MyLibrary/SelectionPlants/index.html

---

**Вот как он выглядит:**

![](add%20files/01.jpg)

![](add%20files/02.jpg)

<details> <summary> Сайт оптимизирован и под мобильное представление: </summary>

![](add%20files/03.jpg)

</details>

---

**Как велась разработка проекта:**

Это один из моих последний и наверное самых классных проектов из университета 💫

Многие ребята писали подобный проект на C#, но я решил сделать всё через web, тем более что я практически полностью освоил web разработку. Сложным местом была обработка значений в БД, загруженной на хостинг, но я всё равно смело пошёл вперёд, и начал разработку этого проекта

Сначала я выбрал примерно 220 различных наименований растений из википедии. Затем, я нашёл характеристики, от которых они зависят, в процессе роста. Это была температура, влажность, переносимость солнечных лучей, и другое. Однако, также нашлись интересные признаки, такие как Тип климата и Аллелопатия. Последнее - это свойство того, как текущее растение взаимодействует на окружающее. Если аллелопатия положительная, то хорошо. Если нейтральная - то никак, а если отрицательная, то это растение лучше не ставить рядом с другими. 

Я нормировал значения, для большего удобства - привёл их к относительным меркам - например, я измерял силу света, необходимого для растения не в люменах, а в относительной шкале, от 1 до 10. Также, мне помогла декомпозиция таблицы, т.е. её приведение к 3й нормальной форме. Так, я разбил признаки на единичные, что помогло мне построить более эффективный обработчик их значений в будущем

Далее, мне нужно было заполнить этот весь датасет значениями. Но работы было так много, что я поручил сделать её ChatGPT. Это было долго, но планомерно, он заполнил всю таблицу примерно правильными значениями

![](add%20files/swertyhj.png)

Затем я создавал визуал кнопочек. Я выбрал такой стиль, что когда пользователь выбирает одно из предложенных значений, сразу появляется следующий вопрос. И так, пока все нужные значения не будут введены. Цепочка вопросов различается в зависимости от некоторых ответов пользователя. Например, для домашних и уличных растений вопросы достаточно разные

Также, в некоторых кнопочках есть поля ввода. Я достаточно долго дорабатывал визуальный стиль и оформление, и в итоге всё прекрасно стало работать как на компьютере, так и на телефоне

Далее я начал выписывать обработчик перебора БД значений. по введённым критериям. Сначала, для отладки, я написал всё на локальной версии JS, используя sqlite3 как БД. Однако, в последствии оказалось, что у меня не получается внедрить всю БД и ей обработчик в web сайт

Тогда я решил научиться использовать БД на виртуальном сервере. Я использовал свой любимый хостинг Beget, и перенёс а также настроил БД туда, через PHPMyAdmin. Далее, мне нужно было написать обработчик запросов для неё. Оказалось, что обработчики пишутся на языке php, и по этому его мне тоже пришлось освоить)

![](add%20files/Модель%20БД%20растений_04.png)

После этого всё было готово. Сайт сначала принимал значения от пользователя, затем обрабатывал их, и посылал в БД для выборки. И далее выводил пользователю результаты

Да, также я добавил фотографии для каждой картинки, и внедрил их в сайт. Для мобильной версии картинки сильно сжаты. Это не влияет на их качество, но они открываются практически моментально

Затем было ещё немного отладки, и я залил финальную готовую версию на хостинг. Там она доступна и сейчас 

♾️ https://gogortey.ru/MyLibrary/SelectionPlants/index.html

Алгоритм обработки значений введённых пользователем, для подбора растений:

![](add%20files/Алгоритм%20работы%20подбора%20растений_5.png)


