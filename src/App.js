import React from 'react'
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import DetallePelicula from './pages/DetallePelicula/DetallePelicula';
import NotFound from './pages/notfound/Notfound';
// import Album from './components/album/Album';
// import Songs from './components/song/Songs';
import Favoritos from './pages/favoritos/Favoritos';
import verMas from './pages/verMas/verMas';


function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/detallepelicula/id/:id" component={DetallePelicula}/> 
      <Route path="/favoritos" component={Favoritos}/> 
      <Route path="/vermas" component={verMas}/>
      <Route component={NotFound}/>
      </Switch>
      <Footer></Footer>
    </div>


  );
}

export default App;
