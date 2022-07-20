import {useState} from "react";

function ItemCount( {stock,initial}) {
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
    return (
        <>
            <div className="inline-flex">
                <button onClick={handleClickMinus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    -
                </button>
                <p> {count} </p>
                <button onClick={handleClickPlus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    +
                </button>
            </div>
        </>
    );
}

export default ItemCount;
