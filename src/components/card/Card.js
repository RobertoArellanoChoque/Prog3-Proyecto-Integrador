
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      button: JSON.parse(localStorage.getItem('favoritos')).some((fav)=> fav === this.props),
      verMas: true,
    }
  }

  handleFavoritos(){
    this.setState({button: !this.state.button}, ()=>{this.props.favoritos(this.props.pelicula)})
  }

  mostrarDetalle() {
    this.setState({
      verMas: false,
    })
  }
  ocultarDetalle() {
    this.setState({
      verMas: true,
    })
  }

  render() {
    return (
      <div className="hijo">
        <div className="imagen-port">
          <a href={`/detallepelicula/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} alt={this.props.poster_path} /></a>
          <h3>{this.props.title}</h3>

          {this.state.verMas === true ?
                <>
                  <span className='info' id='hideText' >
                    <p  >{this.props.overview}</p>
                  </span>
                  <button><Link to={`/detallepelicula/id/${this.props.id}`}>Detalle</Link></button>
                  <button onClick={() => this.mostrarDetalle()} >Ver mas</button>

                </>
                :
                <>
                  <span className='info-show' id='hideText' >
                    <p  >{this.props.overview}</p>
                  </span>
                  <button><Link to={`/detallepelicula/id/${this.props.id}`}>Detalle</Link></button>
                  <button onClick={() => this.ocultarDetalle()} >Ver menos</button>
                </>
              }
          

          <button className="btn btn-primary" onClick={() => this.handleFavoritos()}>{this.state.button ? 'X' :'⭐' }</button>

          
        </div>
      </div>
    )
  }
}

export default Card
