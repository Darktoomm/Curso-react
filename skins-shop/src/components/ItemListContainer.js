import ItemCount from "./ItemCount";
import {productos} from "../utils/products";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

function ItemListContainer({greeting}) {

    const [productList, setProductList] = useState([]);
    const {id} = useParams();
    const categoryList = [1,2];
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
              categoryList.forEach((item) => {
                if (parseInt(id) === item) {
                  const productsListFilter = [];
                  res.filter((data) => {
                    if (data.category === parseInt(id)) {
                      productsListFilter.push(data);
                      setProductList(productsListFilter);
                    }
                  });
                } else if (id === undefined) {
                  setProductList(res);
                }
              });
            })
            .catch((err) =>
              alert(
                "La página no se encuentra disponible en este momento, por favor intente más tarde"
              )
            );
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
