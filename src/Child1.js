import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Child1 extends Component {
    state = {
        nama: "Arya"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    gantiNama = () => {
        this.setState((state) => { 
            if (state.nama === "Arya") {
                return {nama : "Amel"}
            } else {
                return { nama: "Arya"}                 
            }
        })
    }

    componentWillUnmount() {
        alert('Byee')
    }
    render() {
        return (
            <div>
                <h4>Nama Saya</h4>
                <Button bsStyle="primary" onClick={this.gantiNama}>Ubah nama!</Button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;