import './App.css';
import NavBar  from './components/NavBar'
import ItemListContainer  from './components/Containers/ItemListContainer'
import ItemDetailContainer from './components/Containers/ItemDetailContainer'
function App() {
  return (
    <div className="grid-areas">
      <NavBar className="nav"/>
      <ItemListContainer className="main" saludo="aca irán los azulejos" />
      <ItemDetailContainer />
    </div>
    
  );
}

export default App;
