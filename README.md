# Game_Store

Сайт создан с помощью Create React App.

# Скрипты
Для начала работы с проектом надо установить зависимость введя в консоль npm install или короткую версию npm i.

В каталоге проекта вы можете запустить:

**npm start**

Запускает приложение в режиме разработки (живая dev-сборка + json-server).
Откройте http://localhost:8080,( http://localhost:3000/games - для просмотра файла db.json) чтобы просмотреть его в браузере.

Страница перезагрузится, если вы внесете правки. \

**npm run build**

Собирает проeкт в папку build.
Он правильно связывает React в производственном режиме и оптимизирует сборку для достижения максимальной производительности. Сборка минифицирована, а имена файлов включают хеши.
После этого Ваше приложение готово к развертыванию на сервере!

Подробнее можно прочитать здесь: [deployment](https://create-react-app.dev/docs/deployment/).

# Выполеннные критерии

**Динамичность веб-страниц**

Внешний вид изменяется при изменении роутингов [App.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/App.js) и [Layuot.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/Layout.jsx):

1. [Category.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Category.jsx) зависит от того какая выбрана категория игр, также есть кнопки для просмотра всех игр по данной категории или постранично.
2.  Просмотр всех игр [Homepage.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Homepage.jsx) можно посмотреть все игры нажав кнопу "Показать все".
3.  При выборе игры и нажатии кнопки "Добавит в корзину"  [Basket.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/Basket/Basket.jsx) отражает количество выбраных игр в корзине и общую ценну. При клике по карзине отражается окно с оформлением заказа [BaskenMenu.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/BasketMenu/BasketMenu.jsx) или сообщение "Корзина пуста". После чего при клике по кнопке "Оформить заказ" происходит переход на страницу для оформления заказа [orderPage.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Gamepage/orderPage/orderPage.jsx), где можно увидеть (удалить) выбраные игры и общую сумму
4. На главной странице и страницах по категории кликнув па одной из игр осуществляется переход на [Gamepage](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Gamepage/Gamepage.jsx), где можно ознакомиться с игрой и добавит в корзину.

**Производительность отрисовки**

бесшовное перестраивание интерфейса и роутинг; хотя бы на одной странице отображается более 50 динамичных однородных элементов [Homepage.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Homepage.jsx) можно посмотреть все игры нажав кнопу "Показать все".

**навигация в приложении**

кнопки браузера "вперёд", "назад", "освежить" работают полностью корректно, а также, реализован постраничный просмотр какого-либо длинного списка
[Homepage.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Homepage.jsx), [Category.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Category.jsx),  [Gamepage](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Gamepage/Gamepage.jsx).

**кроссбраузерность**

Данное приложение работаспособна и адаптивна на iphone 12 pro.

**коммуникации**

Данное приложение для загрузки данных широко использует json-server, а также веб-приложение использует "redux-persist" [App.js](https://github.com/ivandmitrienko/Game_Store/blob/main/components/App.js), [index.js](https://github.com/ivandmitrienko/Game_Store/blob/main/components/Redux/index.js) для сохранения данных пользователя и/или для обмена данными с другими пользователями.

**модель данных**

для хранения и передачи данных использованы react-redux и @reduxjs/toolkit (https://github.com/ivandmitrienko/Game_Store/tree/main/components/Redux)



