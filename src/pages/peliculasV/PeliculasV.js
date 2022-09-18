import React, { Component } from "react";
import Card from '../../components/card/Card';

class PeliculasV extends Component{
  constructor() {
         super();
         this.state = {
           cargando: true,
           valoradosP: [],
           favoritos: [],
           busqueda: [],
           filterBy: "",
           mas: ""
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
                   valoradosP: datos.results.slice(0,15)
                 })
               })
               .catch(err => console.log(err))
           }
            agregarMas() {
               // Logica para agregar mas personajes
               const mas = `https://api.themoviedb.org/3/movie/top_rated?api_key=c0945689b0a582e110971301d6ea8be2&language=es&page=${this.state.mas+1}`;
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
        
render(){
  return(
    <>
    <div className="titulo">
           <h2>•  PELÍCULAS MÁS VALORADAS •</h2>
           <button className="verMas" onClick={() => this.agregarMas()}>Más películas</button>
      </div>
      <div className="contenedor1">
      {
            this.state.cargando === false ? (
              <p>Cargando</p>
            ) :
              (this.state.valoradosP.map(pelicula => (
                <Card
                  key={pelicula.id}
                  pelicula={pelicula}

                />)
              ))
          }
      </div>
    </>
      
  )
}
}
   export default PeliculasV; 