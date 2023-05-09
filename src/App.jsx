import './App.css';
import Navbar from './components/Navbar';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import { ItenListContainer } from './container/ItenListContainer';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

const onAdd = stock => console.log("Stock actual: " + stock)


return (
    <BrowserRouter>
      
    
      <Navbar/>
      <Routes>
        <Route 
        path="/"
        element={<ItenListContainer greeting="Productos"/>}
        
        />
         <Route 
        path="/category/:id"
        element={<ItenListContainer greeting="Productos"/>}
        
        />
         <Route 
        path="/item/:id"
        element={<ItemDetailContainer onAdd={onAdd} />}
        
        />
      </Routes>
      
      </BrowserRouter>
    
    
    
    
  );
}

export default App;
