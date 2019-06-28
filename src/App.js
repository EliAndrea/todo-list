import React, { Component } from 'react';
import './App.css';
import { InputTarea } from './components/Input.js';
import { ListaTareas } from './components/ListaTareas.js';

let listaInicial = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      lista: listaInicial,
      contador: listaInicial.length
    };
    this.modificarLista = this.modificarLista.bind(this);
  }
  
  componentDidMount(){
    fetch("http://assets.breatheco.de/apis/fake/todos/user/eli")
      .then((response)=>
        { 
          return response.json; 
        })
      .then((responseJSON) =>{
        let lista = responseJSON;
        for(let i=0; i<lista.length; i++){
          listaInicial.push(lista[i]["label"]);
        }
        });
  }
  
  modificarLista(arr){
    this.setState({lista: arr, contador: arr.length});
  }
  render(){
  return (
    <div className="App">
      <div className="titulo">Todo</div>
        <div className="hoja">
          <InputTarea lista={this.state.lista} modificar={this.modificarLista}/>
            {this.state.contador !== 0 ? (
            <ListaTareas lista={this.state.lista} modificar={this.modificarLista}/>
            ) : (
            <div>No tasks, add a task</div>
            )}
        <div>{this.state.contador} item left</div>
      </div>
    </div>
  );}
}

export default App;
