import React, { Component } from "react";
import CardS from '../../components/card/CardS';


class SeriesV extends Component {
    constructor() {
        super();
        this.state = {
          cargando: true,
          seriesV: [],
          favoritos: [],
          busqueda: [],
          filterBy: "",
          mas: ""
        };
        console.log(this.state.busqueda)
      }
      componentDidMount() {
        const seriesV = "https://api.themoviedb.org/3/tv/top_rated?api_key=fcb65972de75954111563f90b05f9fed"
        fetch(seriesV)
          .then((res) => res.json())
          .then(datos => {
            console.log(datos)
            return this.setState({
              mas: datos.page,
              seriesV: datos.results.slice(0,15)
            })
          })
          .catch(err => console.log(err))
      }
      agregarMas() {
        // Logica para agregar mas personajes
        const mas = `https://api.themoviedb.org/3/tv/top_rated?api_key=c0945689b0a582e110971301d6ea8be2&language=es&page=${this.state.mas+1}`;
         fetch(mas)
          .then(res => res.json())
          .then(data => {
              this.setState({
               mas: data.page,
               seriesV: this.state.seriesV.concat(data.results)
              })
           })
           .catch(err => console.log(err))
        
     
     }

    render(){
        return (
        <>
        <div className="titulo">
               <h2>•  SERIES MÁS VALORADAS •</h2>
               <button className="verMas" onClick={() => this.agregarMas()}> Más series</button>
          </div>
          <div className="contenedor1">
          {
                this.state.cargando === false ? (
                  <p>Cargando</p>
                ) :
                  (this.state.seriesV.map(serie => (
                    <CardS
                      key={serie.id}
                      serie={serie}
    
                    />)
                  ))
              }
          </div>
        </>
        
    )

    }
    
}
export default SeriesV