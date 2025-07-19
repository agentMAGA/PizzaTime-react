import React from "react";
import styles from "../styles/drawer.module.scss";

// Корзина
function Drawer({ onClose, onRemove, onRemoveItem, items = [] }) {
  return (
    <div className={styles.overlay} style={{ display: 'block' }}>
      <div className={styles.drawer}>
        {/* Заголовок корзины */}
        <div className={styles.drawerHeader}>
          <h2>Корзина</h2>
          <img src="/img/button-remove.svg" onClick={onClose} />
        </div>

        {/* Список пицц в корзине */}
        {items.length > 0 ? (
          <div className={styles.cardItemList}>
            <div className={styles.cardItemTop}>

              {items.map((item) => (

                <div className={styles.cardItem}>
                  <img src={item.imgUrl} />
                  <div className={styles.cardItemPizza}>
                    <div className={styles.cardItemPizzaText}>
                      <p>{item.title}</p>
                      <b>от {item.price} руб.</b>
                    </div>
                  </div>
                  <div className={styles.cardItemPizzaButton}>
                    <img src="/img/button-remove.svg" onClick={() => onRemove(item.id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) :
          // Корзина пуста
          (
            <div className={styles.emptyCart}>
              <p>Корзина пуста</p>
            </div>
          )}

        {/* Итого */}
        <div className={styles.Item}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>250 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>12.50 руб.</b>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Drawer;
