import React, {useEffect, useState} from 'react';
import {productos} from "../utils/products";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

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
        if (id === undefined) {
        } else {
            getProducts(productos.filter((item) => item.id === parseInt(id)))
                .then((res) => {
                    setDato(res);
                })
                .catch((error) => alert(error));
        }
    }, [id]);

    return (
        <>
            {dato.length > 0 ? (
                <>
                    <ItemDetail item={dato[0]} />
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
