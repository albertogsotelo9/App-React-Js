
import React from 'react'
import './NavBar.css'
import Widget from './Widget'

const NavBar = () =>{
  
  return (
      <nav>
        <h1 id="h1Title" >PlastiBox</h1>
        <ul className="nav-links">
            <li><a href="/">Ofertas</a></li>
            <li><a href="/">Categorías</a></li>
            <li><a href="/">Mis Compras</a></li>
        </ul>
        <Widget />
      </nav>
      
    )
    
}

export default NavBar 