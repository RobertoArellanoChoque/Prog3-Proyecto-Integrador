import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CardB extends Component {

  mostrarDetalle (e){
    let hideText = document.getElementById('hideText')
    hideText.classList.toggle('info-show')
  }

  render(){

  return (
    <div className="hijo">
      <div className="imagen-port">
        {this.props.format === "person" ?
          <>
            <a href={`/detallepelicula/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/original${this.props.perfil}`} alt="no hay foto" /></a>
            <h3>{this.props.persona}</h3>
          </>
          :
          <>
            {
              this.props.imagen === "" || this.props.imagen === null ? <a href={`/detallepelicula/id/${this.props.id}`}><img src='./img/noFoto.jpg' alt="no hay foto" /></a>
                :
                <a href={`/detallepelicula/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/original${this.props.imagen}`} alt={this.props.poster_path} /></a>
            }
            {this.props.format === "movie" ?
              <h3>{this.props.title}</h3>
              :
              <h3>{this.props.name}</h3>
            }
            <span className='info' id='hideText' >
            <p  >{this.props.overview}</p>


            </span>
            <button><Link to={`/detallepelicula/id/${this.props.id}`}>Detalle</Link></button>
            <button onClick={() => this.mostrarDetalle()} >Ver mas</button>

          </>
        }
      </div>
    </div>
  )
      }
}

export default CardB