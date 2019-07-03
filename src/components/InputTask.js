import React, { Component } from 'react';

export class InputTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };
        this.saveValue = this.saveValue.bind(this);
    }

    saveValue(event){
        let newList = this.props.list;
        let newTask = {
            label: "",
            done: false
        }
        if(event.key === 'Enter'){
            if (newList.length === 0){
                fetch("http://localhost:8000/api/user/user",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => {return resp.json()})
                .then(respJSON => {console.log(respJSON)})
                .catch(err => {console.log(err)});
            }
            newTask.label = event.target.value
            newList.push(newTask);
            fetch("http://localhost:8000/api/user/user",{
                method: 'PUT',
                body: JSON.stringify(newList), 
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => {return resp.json()})
            .then(respJSON => {console.log(respJSON)})
            .catch(err => {console.log(err)});
            this.props.update() 
        }
    }

    render(){
        return(
            <div>
                <input className="lead inputTask" type="text" placeholder="¿Qué tienes que hacer?" 
                    onKeyPress={this.saveValue}/>
            </div>
            );
    }
}