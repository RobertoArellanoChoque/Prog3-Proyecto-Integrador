import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class CardS extends Component {
  constructor(props){
    super(props)
    this.state = {
      button: JSON.parse(localStorage.getItem('favoritos')).some((fav)=> fav === this.props)
    }
  }

  handleFavoritos(){
    this.setState({button: !this.state.button}, ()=>{this.props.favoritos(this.props.serie)})
  }

  render() {
    return (
      <div className="hijo">
        <div className="imagen-port">
          <a href={`/detalleserie/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} alt={this.props.poster_path} /></a>
          <h3>{this.props.name}</h3>
          <p>{this.props.overview}</p>
          <button className="btn btn-primary" onClick={() => this.handleFavoritos()}>{this.state.button ? 'X' :'⭐' }</button>
          <button><Link to={`/detalleserie/id/${this.props.id}`}>Detalle</Link></button>
          <button><Link to={`//id/${this.props.id}`}>Ver Más</Link></button>
        </div>
      </div>
    )
  }
}

export default CardS