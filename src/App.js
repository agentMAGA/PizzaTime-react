import Header from "./components/header";
import Drawer from "./components/drawer";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Order from "./components/order";


export const AppContext = React.createContext({});







function App() {
  // Все пиццы
  const [items, setItems] = React.useState([]);

  // Корзина
  const [cardItems, setCardItems] = React.useState([]);

  // Поиск пиццы
  const [searchValue, setSearchValue] = React.useState("");

  // Корзина открыта
  const [cardOpened, setCardOpened] = React.useState(false);

  // Рендер заглушек
  const [isLoading, setIsLoading] = React.useState(true);

  // Загрузка пицц
  React.useEffect(() => {
    setIsLoading(true);

    axios.get("https://687779a8dba809d901ef8e66.mockapi.io/test/items")
    .then((res) => {
      setItems(res.data);
    })
      .finally(() => {
        setIsLoading(false);
      });
    axios.get("https://687779a8dba809d901ef8e66.mockapi.io/test/card")
    .then((res) => {
      setCardItems(res.data);
    })
    
  }, []);

  // Добавление в корзину
  const onAddToCard = (obj) => {
    axios.post("https://687779a8dba809d901ef8e66.mockapi.io/test/card", obj).then((res) => {
      setCardItems(prev => [...prev, res.data]);
    });
  }

  // Удаление из корзины
  const onRemoveItem = (id) => {
    axios.delete(`https://687779a8dba809d901ef8e66.mockapi.io/test/card/${id}`).then((res) => {
      setCardItems(prev => prev.filter((item) => item.id !== id));
    }).catch((error) => {
      console.error('Ошибка при удалении:', error);
    });
  }


  // Поиск пиццы
  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  }




  return (
    <AppContext.Provider value={{
      cardItems,
      setCardItems,
      items,
      setItems,
      cardOpened,
      setCardOpened,
      onAddToCard,
      onRemoveItem,
      onSearchValue,
      searchValue,
      isLoading,
      setIsLoading,
      setSearchValue,

    }}>
      {/* Главный контейнер */}
    <div className="App">



      {/* Корзина */}
      {cardOpened ? (
        <Drawer


          onClose={() => setCardOpened(false)}

        />
      ) : null}


      {/* Шапка */}
      <Header
        onClickCard={() => setCardOpened(true)}
      />

      <Routes>

        <Route path="/" element={
        <Home/>
          } exact/>

          <Route path="/order" element={<Order />} exact/>

      </Routes>


    </div>
    </AppContext.Provider>
  );
}

export default App;

