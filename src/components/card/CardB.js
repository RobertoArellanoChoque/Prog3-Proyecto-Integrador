import React from 'react'
import { Link } from 'react-router-dom'

function CardB(props) {

  return (
    <div className="hijo">
      <div className="imagen-port">
        {props.format === "person" ?
          <>
            <a href={`/detallepelicula/id/${props.id}`}><img src={`https://image.tmdb.org/t/p/original${props.perfil}`} alt="no hay foto" /></a>
            <h3>{props.persona}</h3>
          </>
          :
          <>
            {
              props.imagen === "" || props.imagen === null ? <a href={`/detallepelicula/id/${props.id}`}><img src='./img/noFoto.jpg' alt="no hay foto" /></a>
                :
                <a href={`/detallepelicula/id/${props.id}`}><img src={`https://image.tmdb.org/t/p/original${props.imagen}`} alt={props.poster_path} /></a>
            }
            {props.format === "movie" ?
              <h3>{props.title}</h3>
              :
              <h3>{props.name}</h3>
            }
            <p>{props.overview}</p>
            <button><Link to={`/detallepelicula/id/${props.id}`}>Detalle</Link></button>
            <button><Link to={`//id/${props.id}`}>Ver Más</Link></button>

          </>
        }
      </div>
    </div>
  )
}

export default CardB