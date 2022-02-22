import './NavBar.css'
function Propia() {
  
  const style = {color: 'white', fontSize: '40px',letterSpacing:'10px'}
  return (
    
    <nav>
      <h1 id="h1Title" >PlastiBox</h1>
      
      <ul class="nav-links">
          <li><a href="">Ofertas</a></li>
          <li><a href="">Categorías</a></li>
          <li><a href="">Mis Compras</a></li>
      </ul>
    </nav>
  );
}

export default Propia