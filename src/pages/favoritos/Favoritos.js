import React, {Component} from "react"
import Card from "../../components/card/Card"

class Favorito extends Component {

    constructor(){
        super()
        this.state={ 
            favoritos:[]
        }
        
    }

    componentDidMount () {
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
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

    handleButton(){
        this.setState({boton: !this.state.button}, ()=>{this.handleFavoritos(this.state.favoritos)})
    }

    render() {
        console.log(this.state.favoritos)
        return (
            <div>
                {this.state.favoritos[0] === null ? <h2>No peliculas favoritas</h2>:
                this.state.favoritos.map ( item =>(
                    <Card
                    
                    key= {item.id}
                    title={item.title}
                    poster_path={item.poster_path}
                    overview={item.overview}
                    favorito={(pelicula) => this.handleFavoritos(pelicula)}
                    
                    />
                ) )
                
                }
               
            </div>
        )
    }
}

export default Favorito