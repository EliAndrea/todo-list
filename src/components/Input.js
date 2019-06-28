import React, { Component } from 'react';

let nuevaLista = [];

export class InputTarea extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "What needs to be done?"
        };
        this.capturarValor = this.capturarValor.bind(this);
    }

    capturarValor(event){
        nuevaLista = this.props.lista;
        if(event.key === 'Enter'){
            nuevaLista.push(event.target.value);
            this.props.modificar(nuevaLista)
        }
    }

    render(){
        return(
            <div>
                <input type="text" defaultValue = {this.state.value} onKeyPress={this.capturarValor}/>
            </div>
            );
    }
}