import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from './components/CartContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartContextProvider from "./components/CartContext";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <header><NavBar/></header>
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/category/:id" element={<ItemListContainer />}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/cart" element={<CartContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;