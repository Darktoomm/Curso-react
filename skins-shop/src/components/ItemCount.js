import {useState} from "react";

function ItemCount( {stock,initial, changeButton, onAdd}) {

    const [count, setCount] = useState(initial);

    const handleClickPlus = () =>{
        if (stock > count){
            setCount(count + 1);
        }
        else {
            alert('Su cantidad supera el stock');
        }
    }
    const handleClickMinus = () =>{
        if (count > initial){
            setCount(count - 1);
        }
        else
           alert('Su cantidad supera el stock');
    }
    const handleOnAdd = () => {
        onAdd(count);
        setCount(initial);
    }
    return (
        <>
            <div className="inline-flex">
                <button onClick={handleClickMinus} className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    -
                </button>
                <p className="ml-5 mr-5 text-xl font-bold mt-2"> {count} </p>
                <button onClick={handleClickPlus} className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    +
                </button>
                
                {!changeButton && <button onClick={handleOnAdd} className="text-xl ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Add to cart
                </button>}
            </div>
        </>
    );
}

export default ItemCount;
