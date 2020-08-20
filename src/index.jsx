import React from "react"; // импортируем реакт
import ReactDOM from "react-dom"; // Один раз в индексе (отвечает за точку входа)
import App from "./app" // выходим из  файла и берем app

// Принимает 2 аргумента. Первый - приложение(основной компонент)
// Второй - место куда будем рендерить(отрисовывать) приложение

// <App>...</App>
ReactDOM.render(
  <App />, 
  document.querySelector(`#root`)
);