import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
let  {poster_path, title, overview, id} = props.pelicula

  return (
    <div className="hijo">
        <div className="imagen-port">
            <a href={`/detallepelicula/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></a>
            <h3>{title}</h3>
            <p>{overview}</p>
            <button className="btn btn-primary" onClick={()=>{props.favorito(props.pelicula)}} >Favoritos  ⭐</button>
            <button><Link to={`/detallepelicula/id/${id}`}>Detalle</Link></button>
            <button><Link to={`//id/${id}`}>Ver Más</Link></button>
        </div>
    </div>
  )
}

export default Card
