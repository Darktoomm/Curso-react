import ItemCount from "./ItemCount";
import {productos} from "../utils/products";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

let getProds = (prod) => {
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

function ItemListContainer({greeting}) {

    const [productList, setProductList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if (id === undefined) {
            getProds(productos)
                .then((res) => {
                    setProductList(res);
                })
                .catch((error) => alert(error));
        } else {
            getProds(productos.filter((item) => item.category === parseInt(id)))
                .then((res) => {
                    setProductList(res);
                })
                .catch((error) => alert(error));
        }
    }, [id]);


    return (
        <>
            {productList.length > 0 ? (
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <ItemList items={productList}></ItemList>
                </div>
            ) : (
                <div className="w-full h-screen flex justify-center items-center">
                    <p className="font-bold">Cargando productos ...</p>
                </div>
            )}


        </>
    );
}

export default ItemListContainer;
