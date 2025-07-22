import { AppContext } from "../App";
import React from "react";
import axios from "axios";

const useCart = () => {
    const { cardItems, setCardItems } = React.useContext(AppContext);



    const totalPrice = cardItems.reduce((sum, item) => sum + item.price, 0);

    return { cardItems, setCardItems, totalPrice};
};

export default useCart;
