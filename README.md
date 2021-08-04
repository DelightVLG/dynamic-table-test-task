# Тестовое задание в компанию ACS (второй вариант)
> При создании приложения был использован компонентный подход. Применен роутинг, можно переключаться между <br/>
> двумя страницами. DynamicTable - динамическая таблица, которая заполняется в случайном порядке <br/>
> квадратами случайного цвета и спустя минуту цикл повторяется. <br/>
> Video - простой компонент с лайв видео. <br/>

## Запуск проекта
▪️ Распакуйте архив <br/>
▪️ На компьютере должен быть установлен `node.js` <br/>
▪️ В корневой папке проекта:  <br/>
`npm run start` — запускает приложение локально на `http://localhost:3000` <br/>
`npm run build` — собирает приложения для деплоя <br/>


## Используемые технологии
▪ React + React Router<br/>
▪ TypeScript <br/>
▪ HTML5 <br/>
▪ CSS3 <br/>
▪ SASS <br/>


## Notes
 Самой сложное было - это реализовать динамическую таблицу. Сложность была  в том, что квадраты должны </br>
 заполняться в случайном порядке и отрисовываться только на еще не заполненных позициях. </br>
 Решение придумал сам - использовал `grid-area` для темлейта таблицы с индексами позиций, </br>
 создал перемешанный массив из цифр от 1 до 50 и отрисовывал компонент DynamicCell </br>
 с пропсами `position: случайный индекс` и `color: генератор случайного цвета`. </br>
 Через пол минуты цикл повторяется.
