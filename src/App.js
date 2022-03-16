import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import NavBar  from './components/NavBar'
import ItemListContainer  from './components/Containers/ItemListContainer'
import ItemDetailContainer from './components/Containers/ItemDetailContainer'
import Cart from './components/Catalogo/Cart'

function App() {
  return (
    
        
              <BrowserRouter>
                    <div className="grid-areas">
                      <NavBar className="nav"/>
                      <Routes>
                      
                        <Route path="/item/:detalleId" element={<ItemDetailContainer />}/>
                        <Route path="/cart" element= {<Cart />} />
                        <Route path="/"  element= {   <ItemListContainer className="main" saludo="aca irán los azulejos" />}/>
                        <Route path="/categoria/:categoriaId"  element= {   <ItemListContainer className="main" saludo="aca irán los azulejos" />}/>
                        <Route path="/categoria/:categoriaId/:detalleId"  element= {   <ItemListContainer className="main" saludo="aca irán los azulejos"/>}/>
                        <Route path="/*" element={<Navigate to="/"  replace/>}/>
                      
                      </Routes>
                    </div>
              </BrowserRouter>
    
  );
}

export default App;
