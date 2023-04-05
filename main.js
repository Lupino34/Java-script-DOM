// Dom
// Навигация по документу


// Самые верхние элементы дерева доступные как свойства обьекта document

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodiElement);

//                     // Получаем обьект Body
// const bodyElement = document.body;
//                     // Первый и последний дочерние элементы
// // const firstChildNode = bodyElement.firstChild;
// // const lastChildNode = bodyElement.lastChild;

// // console.log(firstChildNode);
// // console.log(lastChildNode);
//                 // Коллекция childNodes содержит список всех детей, включая текстовые узлы
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);
//                 // Для проверки дочерних узлов существует такая специальная функция hasChildNodes()
// console.log(bodyElement.hasChildNodes()); 
//                 //Как мы увидели, childNodes похож на массив. На самом деле это не массив, а коллекция - особый перебираемый обьект - псевдомассив.
                
//                 // --- ОТЛИЧИЕ от Массива:
//                 // 1. Для перебора массива мы можем использовать for..of;
//                 // 2. Методы массивов не будут работать, потому что коллекция - это не массив.

//                 // Перебор коллекции
// for (let node of childNodes) {
//      console.log(node) // покажит все узлы коллекции
// }

//                     // Получаем обьект Body
//                     const bodyElement = document.body;
// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;

// console.log(previousSiblingNode)
// console.log(nextSiblingNode)
// console.log(parentNode)


// //               Получаем обьект Body   
            //   const bodyElement = document.body;
//             //   DOM
//             // Навигация по документу
//             // Навигация только по элементам

//             // Навигационные свойства, описанные выше, относятся ко всем узлам в документе.
//             // В часности, в childNodes находятся и текстовые узлы и узлы элементы и узлы-комментарии, если они есть.

//             // Получаем коллекцию всех дочерних узлов
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// //              Но для большенства задач текстовые узлы и узлы - комментарии нам не нужны. Мы хотим манипулировать узлами-элементами, которые представляют собой теги и формируют структуру страницы.

// //              Получаем коллекцию всех дочерних элементов
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren)
//                  ОСНОВНЫЕ СВОЙСТВА ПО НАВИГАЦИОННЫМ ЭЛЕМЕНТАМ:
//          есть обьект body,
//  для того чтобы обратиться к его предыдущему Элементу мы используем previousElementSibling и попадаем в head.
// Если хотим обратиться к следуещему элементу то используем nextSibling.
// Если хотим обратиться к родительскому элементу используем parentElements. 
// Если хотим обрптиться ко всем дочерним элемнтам используем children
// Ecли хотим обратиться к первому дочернему элементу используем firstChil.
// Eсли хотим обратится к последнему дочернему элементу используем lastChild.


//                      2. ПОИСК ОБЬЕКТА (querySelectorAll) css.
// Самый универсальный метод поиска, он возвращает все элементы внутри elem,
// удолетворяющие данному css-селектору.
// Этот метод действительно мощный, потому что можно использовать любой css-селектор.

// // ПОИСК ПО СЕЛЕКТОРУ КЛАССОВ
// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne)

// // ПОИСК ПО СЕЛЕКТОРУ ТЕГА
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo)

// // ПОИСК ПО СМЕШАНОМУ СЕЛЕКТОРУ ТЕГА И КЛАССА
// const elemsThree = document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree)

// // ПОИСК ПО ТЕГУ ПЕРВОГО УРОВНЯ ВЛОЖЕНОСТИ
// const elemsFour = document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour)

// // ПОИСК ПО НЕСКОЛЬКИМ КЛАССАМ
// const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsFive)

// // ПОИСК ПО ВЛОЖЕННЫМ КЛАССАМ
// const elemsSix = document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsSix)

// // ПОИСК ПО ID
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven)

// // ПОИСК ПО АТРИБУТУ
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// // ПОИСК ПО АТРИБУТУ СО ЗНАЧЕНИЕМ
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine)
                        // Получение конкретного элемента коллекции
// const elems = document.querySelectorAll('li');
// console.log(elems[2]);
// //                     for
// // for (const item of elems) {
// //     console.log(item)
// // }
// //                     forEach 
// elems.forEach(item =>
//     {console.log(item);

// })


                // Искать можно не только в document
// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems)


                                // Поиск элемента с помощью querySelector
//  const lessonList = document.querySelector('.lesson__list');
//  console.log(lessonList)                              
//                          Поиск c помощью getElementById(id уникален, поиск только в document)
// const elems = document.getElementById('listItem');
// console.log(elems)

//                          Поиск c помощью getElemetsByTagName (Elements)
// const elems = document.getElementsByTagName('li');
// console.log(elems)

//                            Поиск c помощью getElemetsByClassName (Elements) - elem.getElementsClassName(className) - возвращает элементы которые имеют данный CSS - класс
// const elems = document.getElementsByClassName('lesson__item-list');
// console.log(elems)

//                         Поиск производьного элемента
//        closest
// Метод elem.closest(css) ищет ближайщего предка,
// который соответствует css - селектору. Сам элемент
// тоже включается впоиск.

// Предки элемента это родитель, родитель родителя,
// его родитель и так далее. Вместе они образуют 
// иерархию от элемента до вершины.

// другимы словами, метод closest поднимается вверх от элемента
// и проверяет каждого из родителей .Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка , либо null, если такой элемент не найден. 

// Напомню свойство parentElement возвращает только непосредственного родителя элемента

// const elem = document.querySelector('.lesson__item-sub-list');
// const parentList = elem.closest('.lesson__list');
// console.log(parentList)
// Очень полезный метод, часто используется для проверки на существование того или иного родителя, либо для изменения родителя конкретного элемента

//                                  Проверка matches

// Ни чего не ищет, а проверяет, удолетворяет ли элемент CSS - селектору, и возвращает true или false.

// const elems = document.querySelectorAll('.lesson__item-list');
// for (let elem of elems) {
//     if (elem.matches('[class$="lesson__item-list_red"]')) {
//         console.log('Красный');

//     } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
//         console.log('Синий');
// } 
// }

// Стоит добавить, что получив обьект тем или иным способом мы можем применить свойство навигации о котором говорили ранеее 

// const text = document.querySelector('.lesson__text');
// const list = text.nextElementSibling;
// console.log(list)

//                DOM. 
//        Изменение документа

//   Содержимое элемента innerHTML

// //   Получаем обьект 
// const textElement = document.querySelector('.lesson__text');

// // Получаем содержимое обьекта "как есть" вместе HTML
// const textElementContext = textElement.innerHTML;
// console.log(textElementContext);



// // Перезаписываем содержимое обьекта
// textElement.innerHTML = `<p>${textElementContext}</p> <p>Живи, а работай в<span class="yellow"> свободное</span> время !</p>`;
// console.log(textElement.innerHTML);

//                  Изменение документа 
// // Содержимое элемента целиком outerHTML
// const textElement = document.querySelector('.lesson__text');
// // // Получаем содержимое обьекта "как есть" вместе HTML
// const textElementContext = textElement.outerHTML;
// console.log(textElementContext);

// textElement.outerHTML = `<p>Живи, а работай в <span class="yellow">свободное</span> время !!!</p>`;
// console.log(textElement.outerHTML);

//       Просто текст элемента textContent(с помощью textContent можем получить только текст, без тегов Html)
// //  Получаем обьект
// const textElement = document.querySelector('.lesson__text');
// const textElementContent = textElement.textContent;
// console.log(textElementContent)

// // Полезная возможность textContent - записывать текст "безопасным способом"
// textElement.textContent =`<p>Живи, а работай в <span class="yellow">свободное</span> время !!!</p>`;
// console.log(textElement.textContent);

//      data.
// Содержимое текстового узла/ комментария

// Получаем обьект 
// const textElement = document.querySelector('.lesson__text');
// const getComment = textElement.nextSibling;

// console.log(getComment);
// console.log(getComment.data);

// // Изменение текстового узла/ комментария
// getComment.data = ' Привет';
// console.log(getComment.data)

// Создание элементов и узлов.
// Создание нового элеимента(тега)
// const newElement = document.createElement('div');
// console.log(newElement)

// // Наполняем новый элемент
// newElement.innerHTML = `живи, работай в <span class="yellow">свободное</span> время !`;
// console.log(newElement);

// // Создание нового текстового узла
// const newText = document.createTextNode('Привет!');
// console.log(newText);

//                    МЕТОДЫ ВСТАВКИ
//       Получаем обьект
// const textElement = document.querySelector('.lesson__text');
// //      Создание нового элемента (тега)
// const newElement = document.createElement('div')
// //      Наполняем новый элемент
// newElement.innerHTML = `живи, работай в <span class="yellow">свободное</span> время !`;

//      Вставляем новый элемент...
// Перед обьектом
// textElement.before(newElement);
// // После обьекта
// textElement.after(newElement);
// ...внутрь и вначало обьекта
// textElement.prepend(newElement);
// ...внутрь и конец обьекта
// textElement.append(newElement)
                    // ОБРАЗЕЦ ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА
// const textElement = document.querySelector('.lesson__list');
// const newElement = document.createElement('li')
// newElement.innerHTML = `Новый пункт lupino`
// textElement.prepend(newElement,'Привет всем welcome');

// const textElement = document.querySelector('.lesson__text');
// const newElement = document.createElement('li')
// newElement.innerHTML = `Новый пункт lupino`
// textElement.prepend(newElement)

//          Методы вставки !!!!
// insertAdjacentHTML/text/Element

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// // Вставляем текст, HTML, элемент
// textElement.insertAdjacentHTML(
//     'afterend',
//     `<p>Живи, а работай в <span class="yellow">свободное</span> время !!!</p>`
// );
// textElement.insertAdjacentHTML(
//     'beforebegin',
//    `<div class="seven"><p>Lupino - <span class="yellow"> super</span></p></div>`
// );
//                      Пример как сделать проще
// // Создание нового элемента (тега)
const newElement = document.createElement('div');
// Добавляем к div класс
newElement.classList.add('red')
// Наполняем новый элемент 
newElement.innerHTML = `<p class="one">Живи, кайфуй, а работай в <span class="yellow">свободное</span> время !!!</p>`;
// // Вставляем элемент
textElement.insertAdjacentElement(
    'beforebegin',
    newElement
)

// "beforebegin" - вставляет html непосредственно перед textElement,
// "afterbegin" - вставляет html в начало textElement,
// "beforeend" - вставляет html в конец textElement,
// "afterend" вствляет html непосредственно после textElement.

//                     // Управление стилями
//                     // Получаем элемент
// const element = document.querySelector('.lesson__item-list_red');
// const elementTwo = document.querySelector('.lesson__item-list_blue')
//                 // Задаем стиль с помощью CSS свойства
// element.style.color = "red"  ;
// elementTwo.style.color = "blue"

// //   element.style
// // Для свойства из нескольких слов используют camelCase:
// // margin-bottom
// element.style.marginBottom = "8px";
// // z-index
// element.style.zIndex = "10"
// // каждое свойство CSS пишется отдельно
//                             // сброс стиля CSS
// element.style.marginBottom = "";
//                          Полная перезапись стилей
//                              style.cssText

// // Получаем элемент
// const element = document.querySelector('.lesson__item-list_red');

// element.style.cssText = `
//     margin-bottom: 10px;
//     color:red;
//     `;// минус этого свойства cssText полностью перезаписывает свойства CSS

//                      Вычесленные стили.  getComputedStyle(element, [pseudo])
// Получаем элемент
// const element = document.querySelector('.lesson__item-list_red');

// // // Получаем значение свойства
// // // Только если оно записано в атрибуте style
// // console.log(element.style.fontSize);

// // //              Получаем значение вложеное уже
// //     // Стиль элементов
// const elementStyle = getComputedStyle(element);
// // console.log(elementStyle.fontSize)// 16px
// //     // Стиль псевдоэлемента
// // const elementBeforeStyle = getComputedStyle(element, "::before");
// // console.log(elementBeforeStyle.backgroundColor)//rgba(0, 0, 0, 0)
// //                  Получение точного значения
// console.log(elementStyle.paddingLeft);
// //      Получаем не предсказуемую запись
// console.log(elementStyle.padding)

// КАК УЖЕ ПОНЯЛИ, ИЗ js МЫ МОЖЕМ УПРАВЛЯТЬ КАК КЛАССАМИ ТАК И СТИЛЯМИ ОБЬЕКТА.

// УПРАВЛЯТЬ КЛАССАМИ - БОЛЕЕ ПРИОРИТЕТНЫЙ ВАРИАНТ ПО СРАВНЕНИЮ СО СТИЛЯМИ.

// МАНИПУЛИРОВАТЬ СВОЙСТВОМ STYLE СЛЕДУЕТ ТОЛЬКО В ТОМ СЛУЧАЕ, ЕСЛИ КЛАССЫ НАМ ПОМОЧЬ НЕ МОГУТ. НАПРИМЕР, ПРИ ИЗМЕНЕНИИ КООРДИНАТОВ ОБЬЕКТА НА ЛЕТУ.

// ОДНИМ СЛОВОМ, ЕСЛИ МЫ МОЖЕМ ВОЗЛОЖИТЬ РЕШЕНИЕ ТОЙ ИЛИ ИНОЙ ЗАДАЧИ НА ПЛЕЧИ CSS ПУТЕМ МАНИПУЛЯЦИИ С КЛАССАМИ, ТОТ ТАК И СЛЕДУЕТ ДЕЛАТЬ!