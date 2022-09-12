import React, {Component}  from "react"
import { Link, Route, Switch} from 'react-router-dom';

class Form extends Component {

    constructor (){
        super()
        this.state ={
            nombre:""
        }
    }

    controlCambios(e){
        this.setState({
            value: e.target.value,
        },
        () => console.log(this.state.value)
        );
    }

    handleChage(e){
        this.setState({
            nombre: e.target.value
        })
        console.log(this.state.nombre)
    }

    render(){
        return (
            <>
            <form>
                <label></label>
                <input
                type="text"
                name="nombre"
                onChange={(e)=>{this.handleChage(e)}}
                value={this.state.nombre}
                

                />

            </form>
            </>
        )
    }
}

export default Form