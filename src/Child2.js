import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Child2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('Byeee2')
    }
    render() {
        return (
            <div>
                <h4>Menghitung</h4>
                <Button bsStyle="primary" onClick={this.tambahAngka}>+</Button>
                <Button bsStyle="primary" onClick={this.kurangiAngka}>-</Button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;