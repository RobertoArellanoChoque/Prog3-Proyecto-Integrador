import React, { Component } from "react"
import Nav from "../../components/nav/Nav";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            valor: 0,
        }
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                
                <h1>Soy el puto Home</h1>
            </div>

        );
    };
}

export default Home