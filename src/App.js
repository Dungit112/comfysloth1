// import "./App.css";
import { Route, Switch } from 'react-router-dom';
import About from './component/about/About';
import Card from './component/cards/Card';
import Footer from './component/footer/Footer';
import Navbar from './component/header/Navbar';
import Home from './component/home/Home';
import ProductDetail from './component/products/ProductDetail';
import Products from './component/products/Products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Card} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Products} />
        <Route exact path="/home" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
