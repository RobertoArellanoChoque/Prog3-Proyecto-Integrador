import React, { Component } from "react"

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
                <h1>Soy el puto Home</h1>
            </div>

        );
    };
}

export default Home