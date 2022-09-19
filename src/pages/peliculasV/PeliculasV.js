import React, { Component } from "react";
import Card from '../../components/card/Card';
import './PeliculasV.css'

class PeliculasV extends Component {
  constructor() {
    super();
    this.state = {
      cargando: true,
      valoradosP: [],
      busqueda: [],
      filterBy: "",
      mas: "",
      favoritos: []
    };
    console.log(this.state.busqueda)
  }
  componentDidMount() {
    const valoradosP = "https://api.themoviedb.org/3/movie/top_rated?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(valoradosP)
      .then((res) => res.json())
      .then(datos => {
        console.log(datos)
        return this.setState({
          mas: datos.page,
          valoradosP: datos.results.slice(0, 15)
        })
      })
      .catch(err => console.log(err))
  }

  handleFavoritos(card) {
    if (this.state.favoritos.some(fav => card.id === fav.id)) {

      this.setState({ favoritos: this.state.favoritos.filter(item => item.id !== card.id) }, () => {
        localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
      })
      console.log(this.state.favoritos.filter(item => item.id !== card.id))
    } else {
      this.setState({ favoritos: [...this.state.favoritos, card] }, () => {
        localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
      })
    }
  }

  agregarMas() {
    // Logica para agregar mas personajes
    const mas = `https://api.themoviedb.org/3/movie/top_rated?api_key=c0945689b0a582e110971301d6ea8be2&language=es&page=${this.state.mas + 1}`;
    fetch(mas)
      .then(res => res.json())
      .then(data => {
        this.setState({
          mas: data.page,
          valoradosP: this.state.valoradosP.concat(data.results)
        })
      })
      .catch(err => console.log(err))


  }
  filtrarPersonajes(filtro) {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        let peliculas = data.results
        let peliculasFiltradas = peliculas.filter((pelicula) => {
          return pelicula.title.includes(filtro)
        })
        this.setState({
          popularesP: peliculasFiltradas

        })


      })
      .catch(err => console.log(err))

  }

  handleChage(e) {
    this.setState({
      filterBy: e.target.value
    }, () => {
      this.filtrarPersonajes(this.state.filterBy)
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.filterBy)


  }
  render() {
    return (
      <>
        <div className="busqueda" >
          <form onSubmit={(e) => { this.handleSubmit(e) }}>
            <label></label>
            <input

              type="text"
              name="nombre"
              onChange={(e) => { this.handleChage(e) }}
              value={this.setState.filterBy}
              placeholder="Buscar peliculas  🔍"

            />
          </form>
        </div>
        <div className="titulo">
          <h2>•  PELÍCULAS MÁS VALORADAS •</h2>
          <button className="verMas" onClick={() => this.agregarMas()}>VER MÁS PELÍCULAS</button>
        </div>
        <div className="contenedor">
          {
            this.state.cargando === false ? (
              <p>Cargando</p>
            ) :
              (this.state.valoradosP.map(pelicula => (
                <Card
                  key={pelicula.id}
                  pelicula={pelicula}
                  id={pelicula.id}
                  poster_path={pelicula.poster_path}
                  title={pelicula.title}
                  overview={pelicula.overview}
                  favoritos={(fav) => this.handleFavoritos(fav)}

                />)
              ))
          }
        </div>
      </>

    )
  }
}
export default PeliculasV;