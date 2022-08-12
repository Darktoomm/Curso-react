import React, {useContext} from 'react'
import {CartContext} from "./CartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import {collection, doc, serverTimestamp, setDoc} from "firebase/firestore"
import { db } from "../utils/firebaseConfig";

export const CartContainer = () => {
  const data = useContext(CartContext);

  const onRemove = (res) => {
    data.removeToCart(res);
  };
  const onClear = () => {
    data.clear();
  };
  const calculoTotal = () => {
    data.calcTotal();
  };
  const createOrder = () => {
    let itemsForDb = data.cartList.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.quantity
    }))
    let order = {
      buyer : {
        email: "tcatalano@leafnoise.io",
        name: "Tomas Catalano",
        phone: "1150505048",
      },
      date: serverTimestamp(),
      items: itemsForDb,
      total: data.calcTotal(),
    }

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection (db, "orders"))
      await setDoc(newOrderRef,order);
      return newOrderRef
    }

    createOrderInFirestore()
      .then(res => alert('Se creo la orden ID=' + res.id))
      .catch(e => console.log(e))

    data.clear()
  }

  console.log("la data",data);

  return (
    <>
      {data.cartList.length > 0 ? (
        <div>
          <div className="grid grid-cols-6 gap-4 uppercase text-xs text-gray text-center border-b border-gray-2 mx-8 pb-8">
            <div className=""></div>
            <p className="ml-20	">nombre</p>
            <p className="ml-24	">cantidad</p>
            <p className="ml-28	">precio</p>
            <p className="ml-32	">total</p>
            <div></div>
          </div>
          {data.cartList.map((item, index) => (
            <CartItem item={item} key={index} onRemove={onRemove} />
          ))}
          <div className="flex w-full justify-end p-8">
            <Button
              color="gray"
              description="vaciar carrito"
              icon="delete"
              onClick={onClear}/>
          </div>
          <div className="flex w-full justify-end p-8">
            <Button
              color="gray"
              description="Crear orden"
              onClick={createOrder}/>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center p-80">
          <p className="font-bold text-gray">
            Todavía no hay productos en el carrito.
          </p>
        </div>
      )}
    </>
  )
}
export default CartContainer;
