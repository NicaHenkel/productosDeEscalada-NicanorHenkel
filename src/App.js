import Navbar from "./components/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/itemCount";

function App() {
  function handleOnAdd (count){
    alert(`Se agrego ${count} al carrito de compras`)
  }
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= "Aca van a ir las imagenes de los productos"/>
      <ItemCount stock= {5} initial={1} onAdd= {handleOnAdd}/> 
      <ItemCount stock= {10} initial={1} onAdd= {handleOnAdd}/> 
    </div>
  );
}

export default App;
