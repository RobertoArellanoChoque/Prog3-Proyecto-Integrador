import React from 'react'
import {Link} from 'react-router-dom'

function CardB(props) {
    
  return (
    <div className="hijo">
        <div className="imagen-port">
            <a href={`/detallepelicula/id/${props.id}`}><img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.poster_path}/></a>
            {props.name === undefined ?
            <h3>{props.title}</h3>
            :
            <h3>{props.name}</h3>
            
        }
            
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
            <button><Link to={`/detallepelicula/id/${props.id}`}>Detalle</Link></button>
            <button><Link to={`//id/${props.id}`}>Ver Más</Link></button>
        </div>
    </div>
  )
}

export default CardB