import React from "react";
import Card from "./card";
import styles from "../styles/card.module.scss";
import stylesHome from "../styles/home.module.scss";
import { AppContext } from "../App";




function Home(  ) {

  const state = React.useContext(AppContext);

  // Рендер пицц
  const renderItems = () => {
    
      if (state.isLoading) {
    // Показываем заглушки (например 6 скелетов)
    return (
      <div className={styles.allCard}>
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} isLoading={true} />
        ))}
      </div>
    );
  }

    return state.items
          .filter((item) => item.title.toLowerCase().includes(state.searchValue.toLowerCase()))
          .map((item, id) => (
            // Карточка пиццы
            <Card
              key={id}

              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickAddCard={() => {
                const foundItem = state.cardItems.find(cartItem => cartItem.title === item.title);
                if (foundItem) {
                  // Удаляем с сервера и из состояния
                  state.onRemoveItem(foundItem.id);
                } else {
                  // Добавляем
                  state.onAddToCard(item);
                }
              }}
              isAdded={state.cardItems.some((cartItem) => cartItem.title === item.title)}
              isLoading = {state.isLoading}


            />
          ))
  }

  return (
        <>
        {/* Контент */}
        <div className={stylesHome.content}>


        {/* Поиск пиццы */}
        <div className={stylesHome.inputPizza}>
          <h1>{state.searchValue ? `Поиск по запросу: ${state.searchValue}` : "Все пиццы"}</h1>

          <div className={stylesHome.searchBlock}>
            <img src="/img/search.png"></img>
            <input placeholder="Поиск..."  onChange={state.onSearchValue} value={state.searchValue}></input>
            {state.searchValue && <img src="/img/button-remove.svg" onClick={() => state.setSearchValue("")} />}
          </div>
        </div>

        {/* Список пицц */}
          <div className={styles.allCard}>

            
            {renderItems()}

          </div>
      </div>
      </>
    )
}

export default Home;