import Card from "./card";
import styles from "../styles/card.module.scss";
import stylesHome from "../styles/home.module.scss";



function Home({items, searchValue, setSearchValue, onSearchValue, onAddToCard, cardItems, onRemove , isLoading}  ) {

  // Рендер пицц
  const renderItems = () => {
    
      if (isLoading === true) {
    // Показываем заглушки (например 6 скелетов)
    return (
      <div className={styles.allCard}>
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} isLoading={true} />
        ))}
      </div>
    );
  }

    return items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, id) => (
            // Карточка пиццы
            <Card
              key={id}

              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickAddCard={() => {
                const foundItem = cardItems.find(cartItem => cartItem.title === item.title);
                if (foundItem) {
                  // Удаляем с сервера и из состояния
                  onRemove(foundItem.id);
                } else {
                  // Добавляем
                  onAddToCard(item);
                }
              }}
              isAdded={cardItems.some((cartItem) => cartItem.title === item.title)}
              isLoading = {isLoading}


            />
          ))
  }

  return (
        <>
        {/* Контент */}
        <div className={stylesHome.content}>


        {/* Поиск пиццы */}
        <div className={stylesHome.inputPizza}>
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все пиццы"}</h1>

          <div className={stylesHome.searchBlock}>
            <img src="/img/search.png"></img>
            <input placeholder="Поиск..."  onChange={onSearchValue} value={searchValue}></input>
            {searchValue && <img src="/img/button-remove.svg" onClick={() => setSearchValue("")} />}
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