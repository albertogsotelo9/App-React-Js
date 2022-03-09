import React from 'react'
import './NavBar.css'
import '../../src/App.css'
import Cart from './Widget'

const NavBar = () =>{
  
  return (
      <nav>
        <h1 id="h1Title" >PlastiBox</h1>
        <ul className="nav-links">
            <li><a href="/">Ofertas</a></li>
            <li><a href="/">Categorías</a></li>
            <li><a href="/">Mis Compras</a></li>
        </ul>
        <Cart />
      </nav>
      
    )
    
}

export default NavBar 