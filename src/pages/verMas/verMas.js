import React from "react";
import './Vermas.css'
import { Link } from "react-router-dom";

const verMas = () => {

    return (
       <>
         <div className="titulo">
            <h2>• SELECCIONA LO QUE DESEAS VER •</h2>
        </div>
        <section className='contenedor1'>
            <div className="vertodo">
                <Link className = "vertodo " aria-current="page" to="/peliculasP"> <button> VER TODAS LAS PELÍCULAS POPULARES </button> 
                <img src={`./img/populares.png`} alt={`peliculas populares`} /> </Link>
            </div>
            <div className="vertodo">
                <Link className = "vertodo " aria-current="page" to="/peliculasV"> <button> VER TODAS LAS PELÍCULAS MEJORES VALORADAS</button> 
                <img src={`./img/valoradas.png`} alt={`peliculas valoradas`} /> </Link>
            </div>
            <div className="vertodo">
                <Link className = "vertodo " aria-current="page" to="/seriesP"> <button> VER TODAS LAS SERIES POPULARES </button>
                <img src={`./img/popu.png`} alt ={`series populares`}/> </Link>
            </div>
           <div className="vertodo">
                <Link className = "vertodo " aria-current="page" to="/seriesV"> <button> VER TODAS LAS SERIES MEJORES VALORADAS</button>
                <img src={`./img/top-rated.png`} alt ={`series valoradas`}/>   </Link>
           </div>
           
        </section>
      
       </>
        
    )



};

export default verMas