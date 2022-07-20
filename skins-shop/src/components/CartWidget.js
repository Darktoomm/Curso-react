import CartIcon from "../icons/CartIcon";

function NavBar() {
    return (
        <div>
            <a href="#"
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white "><CartIcon className="text-sm"/></a>
        </div>
    );
}

export default NavBar;
