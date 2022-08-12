import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


function NavBar() {
  return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link to="/">
                  <span className="font-semibold text-xl tracking-tight">Skin-shop</span>
              </Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <Link to="/">
                      <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                          Inicio
                      </p>
                  </Link>
                  <Link to="/category/1">
                      <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                          Rifles
                      </p>
                  </Link>
                  <Link to="/category/2">
                      <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                          Pistolas
                      </p>
                  </Link>
              </div>
              <Link to="/cart">
                  <CartWidget/>
              </Link>
          </div>
      </nav>
  );
}

export default NavBar;
