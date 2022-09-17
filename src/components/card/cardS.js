import React from 'react'
import {Link} from 'react-router-dom'

function CardS(props) {
    let  {poster_path, name, overview, id} = props.serie
    
      return (
        <div className="hijo">
          <div className="imagen-port">
              <a href={`/detalleserie/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></a>
              <h3>{name}</h3>
              <p>{overview}</p>
              {/* <button className="btn btn-primary" onClick={()=>{props.favorito(props.serie)}} >Favoritos</button> */}
              <button><Link to={`/detalleserie/id/${id}`}>Detalle</Link></button>
              <button><Link to={`//id/${id}`}>Ver Más</Link></button>
          </div>
      </div>
    )
  }

export default CardS