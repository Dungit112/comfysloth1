// import "./App.css";
import Navbar from './component/header/navbar';
import Footer from './component/footer/Footer';
import Products from './component/products/Products';
import ProductDetail from './component/products/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './component/cards/Card';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Card} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
