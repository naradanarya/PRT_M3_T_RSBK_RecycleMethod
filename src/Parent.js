import { Component } from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Timer from "./Timer"
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false,
        komponen3: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`komponen1 ${prevState.komponen1} komponen2 ${prevState.komponen2} komponen3 ${prevState.komponen3}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Anda yakin?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    ubahkomponen3 = () => {
        this.setState((state) => {
            return { komponen3: !this.state.komponen3 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Child1 /> : ''}
                <Button bsStyle="primary" onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'Tutup' : 'Lihat'} Saya!</Button>
                <br/>
                {this.state.komponen2 ? <Child2 /> : ''}
                <Button bsStyle="primary" onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'Selesai' : 'Mulai'} Menghitung!</Button>
                <br/>
                {this.state.komponen3 ? <Timer /> : ''}
                <Button bsStyle="primary" onClick={this.ubahkomponen3}>{this.state.komponen3 ? 'Tutup' : 'Lihat'} Jam</Button>
            </div>
        );
    }
}
export default Parent;