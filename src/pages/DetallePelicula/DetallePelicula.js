import React, { Component } from "react";
import Card from '../../components/card/Card';
import './DetalleP.css'

class DetallePelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cargando: false,
            id: this.props.match.params.id,
            detail: {},
            pelicula: [],
            button: [],
            genero:""
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c0945689b0a582e110971301d6ea8be2`
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                return this.setState({
                    cargando: true,
                    detail: data,
                    genero: data.genres[0].name
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="d-pelicula">
                    <h1>• {this.state.detail.title} • </h1>
                    
                    <div className="contain">
                        <div className="foto-pelicula-popular">
                            <img src={`https://image.tmdb.org/t/p/original${this.state.detail.poster_path}`} alt={this.state.detail.title} />
                        </div>
                        <div className="detalleP">
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <strong>Rating:</strong> <p>{this.state.detail.vote_average}</p>
                            <strong>Fecha de estreno:</strong> <p>{this.state.detail.release_date}</p>
                            <strong>Duración:</strong> <p>{this.state.detail.runtime}</p>
                            <strong>Sinópsis:</strong> <p>{this.state.detail.overview}</p>
                            <strong>Género:</strong> <p>{this.state.genero}</p>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default DetallePelicula

