import React from 'react'
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import DetallePelicula from './pages/DetallePelicula/DetallePelicula';
import DetalleSerie from './pages/DetalleSerie/DetalleSerie';
import NotFound from './pages/notfound/Notfound';
import Favoritos from './pages/favoritos/Favoritos';
import verMas from './pages/verMas/verMas';


function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/detallepelicula/id/:id" component={DetallePelicula}/>
      <Route path="/detalleserie/id/:id" component={DetalleSerie}/>
      <Route path="/favoritos" component={Favoritos}/> 
      <Route path="/vermas" component={verMas}/>
      <Route component={NotFound}/>
      </Switch>
      <Footer></Footer>
    </div>


  );
}

export default App;
