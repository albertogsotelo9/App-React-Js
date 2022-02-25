import './App.css';
import NavBar  from './components/NavBar'
import ItemListContainer  from './components/Catalogo/List'
function App() {
  return (
    <div className="body">
      <NavBar />
      <ItemListContainer />
    </div>
    
  );
}

export default App;
