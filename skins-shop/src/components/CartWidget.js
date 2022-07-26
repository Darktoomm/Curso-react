import CartIcon from "../icons/CartIcon";

function CartWidget() {
    return (
        <div>
            <p
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white "><CartIcon className="text-sm"/></p>
        </div>
    );
}

export default CartWidget;
