import store from './Redux/store';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home"
import Products from "./Component/Products"
import ProductsDetails from "./Component/ProductDetails"
import { Provider } from 'react-redux';




function App() {
  return (
    <Provider store={store}>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product-details' element={<ProductsDetails/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
   
  );
}

export default App;
