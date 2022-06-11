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

1. [Category.jsx](https://github.com/ivandmitrienko/Game_Store/blob/main/components/pages/Category.jsx) зависит от того какая выбрана категория игр.
2.  




