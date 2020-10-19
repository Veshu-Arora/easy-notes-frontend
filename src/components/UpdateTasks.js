import React, {Component} from 'react';
import '../css/UpdateTasks.css';
import { connect } from 'react-redux';
import axios from 'axios';

import {activeTabAction} from '../redux/actions/activeTabAction';
import {updateTodoIdAction} from '../redux/actions/updateTodoIdAction';


class UpdateTasks extends Component{

    updateThisTodo = (id) =>{
        this.props.sendActiveTab(5);
        this.props.sendTodoId(id);
    }


    render(){

        if (this.props.personalTodos.data === undefined){
            return(
            
                <div className = 'heading-and-update-tasks'>

                    <div className="heading">

                        <span className="text-or-logo">Update Tasks</span>

                    </div>
                   
                    <div className="update-tasks">
                        <div className = "default-message">
                            <h1>Hey there!</h1>
                            <br/>
                            <h2>You have not created any todos Yet!</h2>
                            <br/>
                            <h2>Click on "Create New Task" to create Todos!</h2>
                        </div>
                    </div>
                </div>
            )
        }

        return(

            <div className = 'heading-and-update-tasks'>

                <div className="heading">

                    <span className="text-or-logo">Update Tasks</span>

                </div>

                <div className="update-tasks">
                        {this.props.personalTodos.data.map((todo) => {
                            return(
                                <div>
                                    <div className = 'todo-date'>{todo.expires_on}</div>

                                    <div className = 'todo-text-and-update-button'>
                                        <div className = 'todo-text'>{todo.description}</div>
                                        <div className = 'update-task-button-container'> <button onClick = {() => this.updateThisTodo(todo.id)} > Update </button> </div>
                                    </div>
                                </div>    
                            )
                        })}
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    // console.log("dekh toh dhyan se " + JSON.stringify(state.userReducer));
    return {
      personalTodos : state.personalTodosReducer
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return ({
      sendActiveTab: (data) => dispatch(activeTabAction(data)), 
      sendTodoId: (data) => dispatch(updateTodoIdAction(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTasks);