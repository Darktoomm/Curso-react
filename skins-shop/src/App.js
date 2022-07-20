import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <header><NavBar></NavBar></header>
        <ItemListContainer greeting={'hola mundo'}></ItemListContainer>
    </div>
  );
}

export default App;
