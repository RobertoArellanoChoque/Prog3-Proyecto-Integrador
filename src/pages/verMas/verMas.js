import React from "react";

import { Link } from "react-router-dom";

const verMas = () => {

    return (
       <>
         <div className="titulo">
            <h2>• SELECCIONA LO QUE DESEAS VER •</h2>
        </div>
        <section className='contenedor1'>
            <Link className = "verMas " aria-current="page" to="/peliculasP"> <button> Ver Todas las películas populares</button> </Link>
            <Link className = "verMas " aria-current="page" to="/peliculasV"> <button> Ver Todas las películas más valoradas</button> </Link>
            <Link className = "verMas " aria-current="page" to="/seriesP"> <button> Ver Todas las series populares </button> </Link>
            <Link className = "verMas " aria-current="page" to="/seriesV"> <button> Ver Todas las series más valoradas</button> </Link>
        </section>
      
       </>
        
    )



};

export default verMas