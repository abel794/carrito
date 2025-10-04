import ProductoList from "./modules/productos/ProductoList.jsx";
import Header from "./layout/Header.jsx"
import Footer from "./layout/Footer.jsx"
import './App.css'
function App() {
  return (
    <>
    <Header/>
      <h1>Carrito 🛒</h1>
      <ProductoList />
      <Footer/>
    </>
  );
}

export default App;
