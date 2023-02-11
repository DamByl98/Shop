import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path='/produc/:productId' exact element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
