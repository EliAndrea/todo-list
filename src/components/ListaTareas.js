import React, { Component } from 'react';

export class ListaTareas extends Component{
    constructor(props){
        super(props);
        this.eliminarTarea = this.eliminarTarea.bind(this)
    }
    eliminarTarea(arr, index){
        let otraLista = [];
        for(let i=0; i<arr.length; i++){
            if(i !== index){
                otraLista.push(arr[i]);
            }
        }
        this.props.modificar(otraLista);
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.lista.map((tarea,index) => {
                        return(
                            <li key={index}>{tarea}
                                <div className="borrar" onClick={()=>this.eliminarTarea(this.props.lista, index)}> X </div>
                            </li>
                        );
                        })    
                    }
                </ul>
            </div>
            );
    }
        
}