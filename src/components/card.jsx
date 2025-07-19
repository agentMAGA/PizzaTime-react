import styles from "../styles/card.module.scss";
import React from "react";

// Карточка пиццы
function Card({title, price, imgUrl, onClickAddCard, isAdded}) {

  // Добавление в корзину 
  const onClickAdd = () => {
    onClickAddCard();
  };
  



  return (
    
    <div className={styles.card}>
    <img src={imgUrl} width={383} height={383}></img>
    <p>{title}</p>
    <div className={styles.cardBottom}>
      <div className={styles.price}>
        <span>от</span>
        <b>{price} руб.</b>
        <button  onClick={onClickAdd} className={isAdded ? styles.buttonTrue : styles.buttonFalse}>
          <img src={isAdded  ? "/img/plus-orange.svg" : "/img/plus-white.svg"} alt="plus" />

          <p>{isAdded ? "Добавлено" : "Добавить"}</p>
          {/* <span>2</span> */}
        </button>
      </div>
    </div>
  </div>
  );
}

export default Card;

