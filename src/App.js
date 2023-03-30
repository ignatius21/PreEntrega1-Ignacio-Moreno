
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fondo from './img/1.jpg';

function App() {
  return (
    <>
      <header>
        <a href='/' className="col-md-6 text-decoration-none  tienda text-dark mb-4">
          Tienda <span className="text-primary">Muebles</span>
        </a>
        <Navbar/>
        <ItemListContainer backgroundImage={fondo}/>
      </header>
    </>
  );
}

export default App;
