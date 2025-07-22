import React from "react";
import styles from "../styles/drawer.module.scss";
import useCart from "../hooks/useCart";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

// Корзина
function Drawer({ onClose }) {

  const {cardItems, totalPrice,} = useCart();
  const {onRemoveItem} = React.useContext(AppContext);


  return (

    <div className={styles.overlay} style={{ display: 'block' }}>
      <div className={styles.drawer}>
        {/* Заголовок корзины */}
        <div className={styles.drawerHeader}>
          <h2>Корзина</h2>
          <img src="/img/button-remove.svg" onClick={onClose} />
        </div>

        {/* Список пицц в корзине */}
        {cardItems.length > 0 ? (

          // Корзина не пуста
          <>
            <div className={styles.cardItemList}>
              <div className={styles.cardItemTop}>

                {cardItems.map((item) => (

                  <div className={styles.cardItem}>
                    <img src={item.imgUrl} />
                    <div className={styles.cardItemPizza}>
                      <div className={styles.cardItemPizzaText}>
                        <p>{item.title}</p>
                        <b>от {item.price} руб.</b>
                      </div>
                    </div>
                    <div className={styles.cardItemPizzaButton}>
                      <img src="/img/button-remove.svg" onClick={() => onRemoveItem(item.id)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Итого */}
            <div className={styles.Item}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
              </ul>
              {/* Оформить заказ */}
              <Link to="/order">
                <button className={styles.button} onClick={onClose}>Оформить заказ</button>
              </Link>
            </div>

          </>

        ) :
          // Корзина пуста
          (
            <div className={styles.emptyCart}>
              <p>Корзина пуста</p>
            </div>
          )}


      </div>
    </div>
  );
}

export default Drawer;
