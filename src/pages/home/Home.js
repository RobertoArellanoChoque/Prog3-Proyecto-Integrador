import React, { Component } from 'react';
import Card from '../../components/card/Card';
import CardS from '../../components/card/cardS';
import CardB from '../../components/card/CardB';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      popularesP: [],
      valoradosP: [],
      popularesS: [],
      valoradosS: [],
      busqueda:[],
      filterBy: ""
      
    };
    
  }

  componentDidMount() {

    const popularesP = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(popularesP)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          popularesP: datos.results.slice(0, 5),
        })
      })
      .catch(err => console.log(err))

    const valoradosP = "https://api.themoviedb.org/3/movie/top_rated?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(valoradosP)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          valoradosP: datos.results.slice(0, 5),
        })
      })
      .catch(err => console.log(err))

    const popularesS = "https://api.themoviedb.org/3/tv/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(popularesS)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          popularesS: datos.results.slice(0, 5),
        })
      })
      .catch(err => console.log(err))

    const valoradosS = "https://api.themoviedb.org/3/tv/top_rated?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(valoradosS)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          valoradosS: datos.results.slice(0, 5),
        })
      })
      .catch(err => console.log(err))
  }

  filtrarPersonajes(filtro){
    const peliculasPo = `https://api.themoviedb.org/3/search/multi?api_key=cd97ce54561a25ea3bbdfae70457a394&language=es&query=${filtro}`
    fetch(peliculasPo)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          busqueda: datos.results.slice(0, 5),
        })
      })
      .catch(err => console.log(err))
    
  }
  handleChage(e) {
    this.setState({
      filterBy: e.target.value
    },()=>{
      this.filtrarPersonajes(this.state.filterBy)
    })
  }

handleSubmit(e){
  e.preventDefault()
  console.log(this.state.nombre)


}
componentDidUpdate(){

}
render() {
  return (


    <>
      <form onSubmit={(e) => { this.handleSubmit(e) }} >
        <label></label>
        <input
          type="text"
          name="nombre"
          onChange={(e) => { this.handleChage(e) }}
          value={this.state.filterBy}
        />
        <button type="submit"  >Enviar</button>

      </form>
      {this.state.filterBy <= "0" ? 
      <>
      <div class="titulo">
        <h2>• LO MÁS VISTO EN PELÍCULAS •</h2>
      </div>
      <section className='contenedor'>
        {this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
          this.state.popularesP.map(pelicula => (
            <Card key={pelicula.id} pelicula={pelicula} />)
          )
        )
        }
      </section>
      <div className="titulo">
        <h2>• PELÍCULAS MÁS VALORADAS •</h2>
      </div>
      <section className='contenedor1'>
        {this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
          this.state.valoradosP.map(pelicula => (
            <Card key={pelicula.id} pelicula={pelicula} />)
          )
        )
        }
      </section>
      

      <div class="titulo">
        <h2>• LO MÁS VISTO EN SERIES •</h2>
      </div>
      <section className='contenedor'>
        {this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
          this.state.popularesS.map(serie => (
            <CardS key={serie.id} serie={serie} />)
          )
        )
        }
      </section>
      <div class="titulo">
        <h2>• SERIES MÁS VALORADAS •</h2>
      </div>
      <section className='contenedor1'>
        {this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
          this.state.valoradosS.map(serie => (
            <CardS key={serie.id} serie={serie} />)
          )
        )
        }
      </section> 
      </>
      
      : 
      <>
      {this.state.busqueda.map(buscado => (
        <CardB

        id = {buscado.id}
        name = {buscado.original_name}
        title = {buscado.original_title}
        overview = {buscado.overview}
        
        
        />
      ))}
      </> 
      }
      </>
      

    


  )


}
}
export default Home;
