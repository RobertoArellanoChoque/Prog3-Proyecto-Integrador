import React from 'react'
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Detalle from './pages/detalle/Detalle';
import NotFound from './pages/notfound/Notfound';
import Album from './components/album/Album';
import Songs from './components/song/Songs';
import Favoritos from './pages/favoritos/Favoritos';
import verMas from './pages/verMas/verMas';


function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/detalle" component={Detalle}/> 
      <Route path="/favoritos" component={Favoritos}/> 
      <Route path="/vermas" component={verMas}/>
      <Route component={NotFound}/>
      </Switch>

    </div>


  );
}

export default App;
