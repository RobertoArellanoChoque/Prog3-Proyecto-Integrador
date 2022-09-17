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


    render() {
        return (
            <div>
                {this.state.favoritos === [] ? <h2>No peliculas favoritas</h2>:
                this.state.favoritos.map ( item =>(
                    <Card
                    
                    key= {item.id}
                    pelicula={item}
                    
                    />
                ) )
                
                }
               
            </div>
        )
    }
}

export default Favorito