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
import PeliculasP from './pages/peliculasP/PeliculasP';
import PeliculasV from './pages/peliculasV/PeliculasV';
import SeriesP from './pages/seriesP/SeriesP';
import SeriesV from './pages/seriesV/SeriesV';

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
      <Route path="/peliculasP" component={PeliculasP}/>
      <Route path="/peliculasV" component={PeliculasV}/>
      <Route path="/seriesP" component={SeriesP}/>
      <Route path="/seriesV" component={SeriesV}/>
      <Route component={NotFound}/>
      </Switch>
      <Footer></Footer>
    </div>


  );
}

export default App;
