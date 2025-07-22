import React from "react";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Header(props) {

  const {cardItems, totalPrice} = useCart();

  return (
    // Шапка
    <header className={styles.header} >
      {/* Левая часть шапки */}
      <Link className={styles.headerLeft} to="/">
    <div className={styles.headerLeft}>
      <img src="/img/logo.svg"></img>
      <div className={styles.headerLeftText}>
        <h1>Pizza Time</h1>
        <p>Самая вкусная пицца в Чечне</p>
      </div>
    </div>
    </Link>

    {/* Правая часть шапки */}
    <div className={styles.headerRight}>
      <nav style={{ cursor: 'pointer' }} onClick={props.onClickCard}>

        {/* Список элементов в правой части шапки */}
        <ul>
          <li>
            {/* Сумма в корзине */}
            <span>{totalPrice}₽</span>
          </li>

          <li>
            {/* Иконка корзины */}
            <img src="/img/korzina.svg"></img>
            <span>{cardItems.length}</span>
          </li>
        </ul>

      </nav>
    </div>
  </header>
  );
}

export default Header;