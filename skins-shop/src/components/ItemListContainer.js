import ItemCount from "./ItemCount";
import {data} from "../utils/products";
import {useState} from "react";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {

    const [productList, setProductList] = useState([]);
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 300);
    });
    myPromise.then((res)=>{
        setProductList(res);
    })
    return (
        <><div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <ItemCount stock={10} initial={1}></ItemCount>
                <ItemList items={productList}></ItemList>
            </div>
        </div>

        </>
    );
}

export default ItemListContainer;
