import './App.css';
import NavBar  from './components/NavBar'
import ItemListContainer  from './components/Catalogo/ItemListContainer'
function App() {
  return (
    <div className="grid-areas">
      <NavBar className="nav"/>
      <ItemListContainer className="main" saludo="aca irán los azulejos" />
    </div>
    
  );
}

export default App;
