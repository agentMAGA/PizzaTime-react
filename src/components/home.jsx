import Card from "./card";
import styles from "../styles/card.module.scss";
import stylesHome from "../styles/home.module.scss";



function Home({items, searchValue, setSearchValue, onSearchValue, onAddToCard, cardItems, setCardItems}  ) {
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

          {/* Фильтрация пицц */}
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, id) => (
            // Карточка пиццы
            <Card
              key={id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickAddCard={() => {
                if (cardItems.find((cartItem) => cartItem.title === item.title)) {
                  setCardItems(cardItems.filter((cartItem) => cartItem.title !== item.title));
                } else {
                  onAddToCard(item);
                }
              }}
              isAdded={cardItems.some((cartItem) => cartItem.title === item.title)}


            />
          ))}




        </div>
      </div>
      </>
    )
}

export default Home;