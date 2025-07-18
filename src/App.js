import Card from "./Card/card";
import Header from "./components/header";
import Drawer from "./components/drawer";
import styles from "../src/Card/card.module.scss";
import React from "react";






function App() {
  const [items, setItems] = React.useState([]);

  const [cardItems, setCardItems] = React.useState([]);

  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
  fetch("https://687779a8dba809d901ef8e66.mockapi.io/test/items").then((res) => {
    return res.json();
  }).then((json) => {
    setItems(json);
  });
}, []);







  return (
    <div className="App">



          {cardOpened ? <Drawer items={cardItems}       onClose={() => setCardOpened(false)}/> : null}


      <Header 
      onClickCard={() => setCardOpened(true)}

      />

      <div className="content">

        <div className="input-pizza">
          <h1>Все пиццы</h1>

          <div className="search-block">
            <img src="/img/search.png"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className={styles.allCard}>

          {items.map((item) => (
            <Card 
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onClickAddCard={() => setCardItems([...cardItems, item])}
            
            />
          ))}




        </div>
      </div>
    </div>
  );
}

export default App;

