import useCart from "../hooks/useCart";
import React from "react";

function Order() {


    const {cardItems, totalPrice, onRemoveItem} = useCart();

    const [order, setOrder] = React.useState([]);


    React.useEffect(() => {
        setOrder(cardItems);
    }, [cardItems]);

    return (
        <div>
            <h1>Оформление заказа</h1>
            <div>

            </div>
        </div>
    )
}

export default Order;