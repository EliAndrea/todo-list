import React, { Component } from 'react';
import './App.css';
import { InputTask } from './components/InputTask.js';
import { TaskList } from './components/TaskList.js';

let initialList = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: initialList,
      counter: initialList.length
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(arr){
    this.setState({list: arr, counter: arr.length});
  }
  render(){
  return (
    <div className="App">
      <div className="title">
        <h1 className="display-4">To do List</h1>
      </div>
      <div className="main page">
        <InputTask list={this.state.list} update={this.updateList}/>
          {this.state.counter !== 0 ? (
          <TaskList list={this.state.list} update={this.updateList}/>
          ) : (
          <div> 
            <p className="lead list-group-item">No hay tareas pendientes, agrega alguna tarea</p>  
          </div>
          )}
      {this.state.counter === 1 ?
        <div className="containerCounter"> 
          <span className="counter">{this.state.counter} tarea</span>
        </div>
      :
        <div className="containerCounter">
          <span className="counter">{this.state.counter} tareas</span>
        </div>
      }
      </div>
      <div className="second page"></div>
      <div className="third page"></div>
    </div>
  );}
}

export default App;
