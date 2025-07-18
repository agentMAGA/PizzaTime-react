import React from "react";
import styles from "./drawer.module.scss";

function Drawer({onClose , items = []}) {
  return (
    <div className={styles.overlay} style={{ display: 'block' }}>
      <div className={styles.drawer}>

        <div className={styles.drawerHeader}>
          <h2>Корзина</h2>
          <img src="/img/button-remove.svg" onClick={onClose} />
        </div>

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
                <img src="/img/button-remove.svg"  />
              </div>
            </div>
            ))}
          </div>
        </div>

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
