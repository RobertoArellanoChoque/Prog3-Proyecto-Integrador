import React, { Component } from "react";

class DetalleSerie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cargando: false,
            id: this.props.match.params.id,
            detail: {},
            serie: [],
            genero: ""
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/tv/${this.state.id}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`
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
                    <h1>{this.state.detail.name}</h1>
                    <div className="contain">

                        <div className="foto-pelicula-popular">
                            <img src={`https://image.tmdb.org/t/p/original${this.state.detail.poster_path}`} alt={this.state.detail.title} />
                        </div>
                        <div className="detalleP">
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <strong>Rating:</strong> <p>{this.state.detail.vote_average}</p>
                        <strong>Fecha de estreno:</strong> <p>{this.state.detail.first_air_date}</p>
                        <strong>Sinópsis:</strong> <p>{this.state.detail.overview}</p>
                        <strong>Género:</strong> <p>{this.state.genero}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DetalleSerie