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
        return(

            <div className = 'heading-and-update-tasks'>

                <div className="heading">

                    <span className="text-or-logo">Update Tasks</span>

                </div>

                <div className="update-tasks">
                        {/* {this.props.personalTodos.data.map((todo) => {
                            return(
                                <div>
                                    <div className = 'todo-date'>{todo.expires_on}</div>

                                    <div className = 'todo-text-and-update-button'>
                                        <div className = 'todo-text'>{todo.description}</div>
                                        <div className = 'update-task-button-container'> <button onClick = {() => this.updateThisTodo(todo.id)} > Update </button> </div>
                                    </div>
                                </div>    
                            )
                        })} */}
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    // console.log("dekh toh dhyan se " + JSON.stringify(state.userReducer));
    return {
      userData : state.userReducer,
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