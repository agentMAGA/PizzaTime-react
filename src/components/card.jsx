import styles from "../styles/card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader"

// Карточка пиццы
function Card({ title, price, imgUrl, onClickAddCard, isAdded, isLoading}) {

  // Добавление в корзину 
  const onClickAdd = () => {
    onClickAddCard();
  };



  return (

    <div className={styles.card}>
    {
      isLoading ?
      
      // Заглушка
        (<ContentLoader 
        speed = { 2 }
        width = { 490 }
        height = { 550 }
        viewBox = "0 0 490 550"
        backgroundColor = "#f3f3f3"
        foregroundColor = "#ecebeb"
        >
        <rect x = "9" y = "428" rx = "3" ry = "3" width = "381" height = "17" /> 
        <circle cx="193" cy="193" r="193" /> 
        <rect x="9" y="460" rx="3" ry="3" width="381" height="17" /> 
        <rect x="9" y="492" rx="3" ry="3" width="235" height="17" />
        </ContentLoader > )
        
        :

        // Реальная карточка
        (<div>
        <img src={imgUrl} width={383} height={383}></img>
        <p>{title}</p>
        <div className={styles.cardBottom}>
          <div className={styles.price}>
            <span>от</span>
            <b>{price} руб.</b>
            <button onClick={onClickAdd} className={isAdded ? styles.buttonTrue : styles.buttonFalse}>
              <img src={isAdded ? "/img/plus-orange.svg" : "/img/plus-white.svg"} alt="plus" />

              <p>{isAdded ? "Добавлено" : "Добавить"}</p>
              {/* <span>2</span> */}
            </button>
          </div>
        </div>
        </div>
      

    )}
    </div>


  );
}

export default Card;

