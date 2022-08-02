import React from "react";

const CartItem = ({ item, onRemove }) => {
    console.log(onRemove);
    return (
        <div className="flex justify-between items-center  rounded-2xl shadow-lg p-8 m-8	">
            <img className=" max-w-xs md:max-w-sm h-40" src={item.picture} />
            <p>
                {item.type} {item.title}
            </p>
            <p>{item.quantity} Unid</p>
            <p>{item.price} c/u</p>
            <p>${parseInt(item.price.replace('$',"")) * item.quantity}</p>
            <button
                onClick={() => {
                    onRemove(item);
                }}
            >
                {" "}
                <img src="/icon_delete.svg" className="w-6 mx-2 fill-red" />
            </button>
        </div>
    );
};
export default CartItem;