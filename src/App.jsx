import './App.css';
import  Navbar  from './components/Navbar';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import { ItemListContainer } from './container/ItemListContainer';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartContext';


function App() {
 return (
<CartProvider>
 <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Todos Nuestros Productos"/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
  </CartProvider>
  );
}

export default App;
