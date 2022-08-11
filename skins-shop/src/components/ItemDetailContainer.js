import React, {useEffect, useState} from 'react';
import {productos} from "../utils/products";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

let getProducts = (prod) => {
    return new Promise((resolve, reject) => {
        if (prod.length > 0) {
            setTimeout(() => {
                resolve(prod);
            }, 2000);
        } else {
            reject(
                "La página no se encuentra disponible en este momento, por favor intente más tarde"
            );
        }
    });
};

const ItemDetailContainer = () => {
    const [dato,setDato] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fireStoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFireStore = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            return dataFireStore;
          };
          fireStoreFetch()
            .then((res) => {
              res.filter((doc) => {
                if (doc.id === id) {
                  return setDato(doc);
                }
              });
            })
            .catch((err) => alert("Algo ha salido mal."));
    }, [id]);

    return (
        <>  
        {console.log(dato)}
            {dato ? (
                <>
                    <ItemDetail item={dato} />
                </>
            ) : (
                <div className="w-full h-screen flex justify-center items-center">
                    <p className="font-bold">Cargando producto ...</p>
                </div>
            )}
        </>
    );
};

export default ItemDetailContainer;
