import React , { Component }from "react";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

class PeliculasP extends Component{
    constructor() {
        super();
        this.state = {
          cargando: false,
          popularesP: [],
          busqueda:[],
          filterBy: "",
          mas: ""
        };
        
      }
      componentDidMount() {

        const popularesP = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
        fetch(popularesP)
          .then((res) => res.json())
          .then(datos => {
            console.log(datos)
            return this.setState({
              popularesP: datos.results,
              cargando:true,
            //   mas: datos.mas
            })
          })
          .catch(err => console.log(err))}

        //   agregarMas() {
        //     // Logica para agregar mas personajes
        //     const url = `https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed&language=es&page=${this.state.mas+1}`;
        //     fetch(url)
        //       .then( res => res.json())
        //       .then( data => { this.setState({
        //           mas: data.info.mas,
        //           popularesP: this.state.popularesP.concat(data.results)
        //         })
        //       .catch( err => console.log(err))
        //       })
           
        // }
 render(){
    return (
        <>
        <div className="titulo">
            <h2>• LO MÁS VISTO EN PELÍCULAS •</h2>
            <button className='btn btn-primary mb-3 mt-3' onClick={() => this.agregarMas()}>Más películas</button>
      
         </div>
           
      <div className='contenedor1'>
      {
        this.state.cargando === false ? (
           <p>Cargando</p>
         ):
        (this.state.popularesP.map(pelicula =>(
            <Card 
              key={pelicula.id} 
             pelicula={pelicula}
             
            />)
        ))
        }
    </div>
       
         </>
         
);}
    
}

export default PeliculasP; 