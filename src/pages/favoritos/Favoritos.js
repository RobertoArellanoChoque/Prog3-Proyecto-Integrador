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
            <>  
            {this.state.favoritos.map( item=> (
                <Card
                key={item.id}
                pelicula={item}
                />



            ) )}
            
            </>
        )
    }
}

export default Favorito