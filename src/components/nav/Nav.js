import React from 'react' 
import {Link} from 'react-router-dom'


export default function Nav() {
  return (

    <header>
        <nav>
                <div className="burguermenu">
                            
                </div>
                <div className="logo">
                        <img src="./img/logo.png" />
                    </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/">Inicio</Link>
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/vermas">Ver más</Link>
                </div>  
                <div className="header-nav">
                    <Link className="header-nav" to='/favoritos' aria-current="page">Favoritos</Link>
                </div>
                <div className= "header-busqueda">
                        <form action="" method="GET">
                            <input type="search" name="busqueda"  placeholder="Buscar películas o series"/>
                            <p className="alert"></p>
                        </form>
                        <a href="./results.html"><i className="fas fa-search lupa"></i></a>
                </div>
          </nav>
    </header>
            
  )
}