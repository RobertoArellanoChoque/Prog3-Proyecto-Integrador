import React, { Component } from "react";

class Song extends Component {
    componentDidMount() {
        const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10"
        fetch(url)
            .then(response => response.json())
            .then(datos => 
                this.setState({
                    canciones: datos.title
                }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default Song