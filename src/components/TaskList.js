import React, { Component } from 'react';

export class TaskList extends Component{
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
    }
    deleteTask(arr, index){
        let newList = [];
        for(let i=0; i<arr.length; i++){
            if(i !== index){
                newList.push(arr[i]);
            }
        }
        this.props.update(newList);
    }
    render(){
        return(
            <div>
                <ul className="list-group">
                    {this.props.list.map((task,index) => {
                        return(
                            <li className="list-group-item lead" key={index}>{task}
                                <div className="delete" onClick={()=>this.deleteTask(this.props.list, index)}>
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                        );
                        })    
                    }
                </ul>
            </div>
            );
    }
        
}