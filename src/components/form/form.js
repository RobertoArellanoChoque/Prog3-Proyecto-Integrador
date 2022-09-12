import React, {Component}  from "react"

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

    handleSubmit(e){
       e.preventDefault() 
       console.log(this.state.nombre)


    }

    render(){
        return (
            <>
            <form onSubmit ={(e) => {this.handleSubmit(e)}} >
                <label></label>
                <input
                type="text"
                name="nombre"
                onChange={(e)=>{this.handleChage(e)}}
                value={this.state.nombre}
                />
                <button type="submit"  >Enviar</button>

            </form>
            </>
        )
    }
}

export default Form