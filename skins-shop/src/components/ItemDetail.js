import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import {CartContext} from "./CartContext";

const ItemDetail = ({item}) => {

    const [changeButton,setChangeButton] = useState(false);
    const [ItemsCount, setItemsCount] = useState(0);
    const data = useContext(CartContext);
    console.log("la data",data);

    const onAdd = (quantity) => {
        setChangeButton(true);
        if (!data.isInCart(item.id)) {
            setItemsCount(quantity);
            data.addToCart(item, quantity);
        } else {
            alert("Este producto ya existe en el carrito.");
        }
    }



    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{item.title}</h2>
                        <p className="mt-4 text-gray-500">{item.description}</p>
                        <h3 className="text-xl mt-2 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{item.price}</h3>
                        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div id={item.id} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900">{item.type}</dt>
                                    <dd className="mt-2 text-sm text-gray-500">{item.weapon}</dd>
                                </div>
                        </dl>
                    </div>
                    <div className="gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src={item.picture}
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="bg-gray-100 rounded-lg"
                        />
                    </div>
                    {ItemsCount === 0 ? (<ItemCount stock={item.stock} initial={ItemsCount} onAdd={onAdd} changeButton={changeButton}></ItemCount>):
                        (<Link to="/cart"><button className="text-xl ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Checkout </button></Link>)}
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
