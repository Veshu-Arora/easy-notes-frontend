import React, {Component} from 'react';
import '../css/DeleteTasks.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {apiUrl} from '../constants';

import {deleteTodoIdAction} from '../redux/actions/deleteTodoIdAction';


class DeleteTasks extends Component{
    constructor(){
        super()
        this.state = {
            todo_id:'',
        }
    }


    deleteThisTodo = (id) =>{
        this.props.sendDeleteTodoId(id);
        this.props.toggleConfirmDeleteForm()
    }


    // deleteTodo = (id) => {
        
    //     axios({
    //         method: 'delete',
    //         url: `${apiUrl}/personaltodos`,
    //         data: {
    //             todo_id : id
    //         }
    //         }).then((res)=>{
    //             alert(JSON.stringify(res.data));
    //         }).catch((err)=>{
    //             alert(" Delete Todo Error : " + err);
    //     });   
       
    // }   



    render(){

        if (this.props.personalTodos.data === undefined){
            return(
            
                <div className = 'heading-and-delete-tasks'>

                    <div className="heading">

                        <span className="text-or-logo">Delete Tasks</span>

                    </div>
                   
                    <div className="delete-tasks">
                        <div className = "default-message">
                            <h1>Hey there!</h1>
                            <br/>
                            <h2>You have not created any todos Yet!</h2>
                            <br/>
                            <h2>Click on "Create New Task" to create Todos!</h2>
                        </div>
                    </div>
                </div>)
            }
        
        return(

            <div className = 'heading-and-delete-tasks'>

                <div className="heading">

                    <span className="text-or-logo">Delete Tasks</span>

                </div>

                <div className="delete-tasks">

                    {this.state.pending?<center><h1>Loading</h1></center>:(<div>

                        {this.props.personalTodos.data.map((todo) => {
                            return(
                                <div>
                                    <div className = 'todo-date'>{todo.expires_on}</div>
                                    
                                    <div className = 'todo-text-and-delete-button'>

                                        <div className = 'todo-text'>{todo.description}</div>
                                        <div className = 'delete-task-button-container'> <button onClick = {() => this.deleteThisTodo(todo.id)} > Delete </button> </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>)}

                </div>

            </div>    

        )
    }
} 


const mapDispatchToProps = (dispatch) => {
    return ({
      sendDeleteTodoId: (data) => dispatch(deleteTodoIdAction(data))
    })
}


const mapStateToProps = (state) => {

    return {
      personalTodos : state.personalTodosReducer  // Gets the User's Personal Todos which are then rendered on the page
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTasks);
