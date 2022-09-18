
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="hijo">
        <div className="imagen-port">
          <a href={`/detallepelicula/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} alt={this.props.poster_path} /></a>
          <h3>{this.props.title}</h3>
          <p>{this.props.overview}</p>
          {/* <button className="btn btn-primary" onClick={() => { props.favorito(props.pelicula) }} >Favoritos  ⭐</button> */}
          <button><Link to={`/detallepelicula/id/${this.props.id}`}>Detalle</Link></button>
          <button><Link to={`//id/${this.props.id}`}>Ver Más</Link></button>
        </div>
      </div>
    )
  }
}

export default Card
