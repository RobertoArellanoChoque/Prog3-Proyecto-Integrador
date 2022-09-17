import React, { Component } from "react";
import Card from '../../components/card/Card';

class DetallePelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            detail: {},
            pelicula:[],
            favoritos: []
        }
    }

    componentDidMount() {
        console.log(this.state.favoritos)
        this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [] })
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c0945689b0a582e110971301d6ea8be2`
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                return this.setState({
                    detail: data
                })
            })
            .catch(err => console.log(err))
    }

    handleFavoritos(card) {
        if (this.state.favoritos.some(fav => card.id === fav.id)) {
            this.setState({ favoritos: this.state.favoritos.filter(item => item.id !== card.id) }, () => {
                localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
            })
            console.log(this.state.favoritos.filter(item => item.id !== card.id))
        } else {
            this.setState({ favoritos: [...this.state.favoritos, card] }, () => {
                localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
            })
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.detail.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original${this.state.detail.poster_path}`} alt={this.state.detail.title} />
                <p>Rating: {this.state.detail.vote_average}</p>
                <p>Fecha de estreno: {this.state.detail.release_date}</p>
                <p>Duración: {this.state.detail.runtime}</p>
                <p>Sinópsis: {this.state.detail.overview}</p>
                <p>Género al que pertenece la película: </p>
                <button onClick={() => { this.handleFavoritos() }}> a Favoritos</button>
                <div>
                    {
                        this.state.cargando === false ? (
                            <p>Cargando</p>
                        ) :
                            this.state.pelicula.map(pelicula => (
                                <Card
                                    key={pelicula.id}
                                    pelicula={pelicula}
                                    favorito={(pelicula) => this.handleFavoritos(pelicula)}
                                />)
                            )
                    }
                </div>
            </>

        )
    }
}

export default DetallePelicula

