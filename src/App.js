import React, { Component } from 'react';
import './App.css';
import { InputTask } from './components/InputTask.js';
import { TaskList } from './components/TaskList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      counter: 0
    };
    this.updateList = this.updateList.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }
  componentDidMount(){
    this.updateList()
  }
  updateList(){
    fetch("http://localhost:8000/api/user/user")
    .then(resp => {return resp.json()})
    .then(respJSON => {
      console.log(respJSON)
      this.setState({
        list: respJSON, 
        counter: respJSON.length
      })
    })
    .catch(err => console.log(err))
  }

  deleteAll(){
    fetch("http://localhost:8000/api/user/user", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(resp => {
      console.log(resp)
    })
    .catch(err => console.log(err))
    this.updateList()
  }

  render(){
  return (
    <div className="App">
      <div className="center">
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
      <div className="center">
        <button className="btn btn-info mt-3" onClick={this.deleteAll}>Eliminar todas las tareas</button>
      </div>
    </div>
  );}
}

export default App;
