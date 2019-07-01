import React, { Component } from 'react';

let newList = [];

export class InputTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };
        this.saveValue = this.saveValue.bind(this);
    }

    saveValue(event){
        newList = this.props.list;
        if(event.key === 'Enter'){
            newList.push(event.target.value);
            this.props.update(newList)
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