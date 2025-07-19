import React from "react";
import styles from "../styles/header.module.scss";

function Header(props) {
  return (
    // Шапка
    <header className={styles.header} >
      {/* Левая часть шапки */}
    <div className={styles.headerLeft}>
      <img src="/img/logo.svg"></img>
      <div className={styles.headerLeftText}>
        <h1>Pizza Time</h1>
        <p>Самая вкусная пицца в Чечне</p>
      </div>
    </div>

    {/* Правая часть шапки */}
    <div className={styles.headerRight}>
      <nav style={{ cursor: 'pointer' }} onClick={props.onClickCard}>

        {/* Список элементов в правой части шапки */}
        <ul>
          <li>
            {/* Сумма в корзине */}
            <span>500₽</span>
          </li>

          <li>
            {/* Иконка корзины */}
            <img src="/img/korzina.svg"></img>
            <span>3</span>
          </li>
        </ul>

      </nav>
    </div>
  </header>
  );
}

export default Header;