import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
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
    <>
       <Header titulo="Deezer" subtitulo="Musica"/>        
        {/* <Container /> */}
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/Detalle" component={Detalle} />
          <Route path="/Album" component={Album} />
          <Route path="/Song" component={Songs}/>
          <Route path="/Favoritos" component={Favoritos} />
          <Route path="/verMas" component={verMas} />
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}

export default App;
