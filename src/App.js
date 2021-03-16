// import "./App.css";
import Navbar from "./component/header/navbar";
import Footer from "./component/footer/Footer";
import Products from "./component/products/Products";
import ProductDetail from "./component/products/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      {/* <ProductDetail/> */}
      <Footer />
    </div>
  );
}

export default App;
