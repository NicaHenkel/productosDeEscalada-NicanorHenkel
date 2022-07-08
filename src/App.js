import Navbar from "./components/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= "Aca van a ir las imagenes de los productos"/>
    </div>
  );
}

export default App;
