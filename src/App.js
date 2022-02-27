import './App.css';
import NavBar  from './components/NavBar'
import ItemListContainer  from './components/Catalogo/ItemListContainer'
function App() {
  return (
    <div className="body">
      <NavBar />
      <ItemListContainer saludo="aca irán los azulejos" />
    </div>
    
  );
}

export default App;
