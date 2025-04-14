import './App.css';
import HomePage from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageProduits from './pages/PageProduits';
import Apropos from './pages/Apropos';
import Navbarone from './components/Acceuil/Navbar1';
import Navbar from './components/Acceuil/Navbar';
import Electronique from './components/Electronique/Elecronique';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbarone/>
      <Navbar/>
       <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>

       <Routes>
         <Route path="/À-propos" element = {<Apropos/>}/>
       </Routes>

       <Routes>
         <Route path="/Produits/Extincteurs" element = {<PageProduits/>}/>
       </Routes>

       <Routes>
         <Route path="/Services" element = {<HomePage/>}/>
       </Routes>

       <Routes>
         <Route path="/contact" element = {<Contact/>}/>
       </Routes>

       <Routes>
         <Route path="/Produits/controle-d'acces" element = {<Electronique/>} />
       </Routes>
    </div>
    </Router>
   
  );
}

export default App;
