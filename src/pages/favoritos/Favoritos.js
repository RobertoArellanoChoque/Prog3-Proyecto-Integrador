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
                    
                    />
                ) )
                
                }
               
            </div>
        )
    }
}

export default Favorito