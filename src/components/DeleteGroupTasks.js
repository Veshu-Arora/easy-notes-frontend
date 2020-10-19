import React, {Component} from 'react';
import '../css/DeleteTasks.css';  //  FOR NOW WE WILL USE THE SAME CSS AS OF Delete Tasks
import { connect } from 'react-redux';
import axios from 'axios';
import {apiUrl} from '../constants';

import {deleteGroupTodoIdAction} from '../redux/actions/deleteGroupTodoIdAction';

class DeleteGroupTasks extends Component{
    constructor(){
        super()
        this.state = {
            todo_id:'',
        }
    }

    deleteThisGroupTodo = (id) =>{
        this.props.sendDeleteTodoId(id);
        this.props.toggleConfirmDeleteForm()
    }


    // componentDidMount() {
    //     this.getTodos();
    // }


    // getTodos = () => {
      
    //     axios({
    //         method: 'get',
    //         url: `${apiUrl}/getpersonaltodos/${this.props.userData.data.response_data.email}`,
    //         }).then((res)=>{
    //             this.setState({
    //                 pending:false
    //             })
    //         }).catch((err)=>{
    //             console.log(" Delete Todo Error: " + err);
    //     });  

    // }



    // deleteTodo = (id) => {
        
    //     axios({
    //         method: 'delete',
    //         url: `${apiUrl}/publicgrouptodos`,
    //         data: {
    //             todo_id : id
    //         }
    //         }).then((res)=>{
    //             alert(JSON.stringify(res.data));
    //         }).catch((err)=>{
    //             alert(" Delete Group Todo Error : " + err);
    //     });   
       
    // }   



    render(){

        if (this.props.getGroupTodos.data === undefined){
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

                </div>
            )
        }

        return(

            <div className = 'heading-and-delete-tasks'>

                <div className="heading">

                    <span className="text-or-logo">Delete Tasks</span>

                </div>

                <div className="delete-tasks">

                    {this.state.pending?<center><h1>Loading</h1></center>:(<div>

                        {this.props.getGroupTodos.data.map((todo) => {
                            return(
                                <div>
                                    <div className = 'todo-date'>{todo.expires_on}</div>
                                    
                                    <div className = 'todo-text-and-delete-button'>
                                        <div className = 'todo-text'>{todo.description}</div>
                                        <div className = 'delete-task-button-container'> <button onClick = {() => this.deleteThisGroupTodo(todo.id)} > Delete </button> </div>
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
      sendDeleteTodoId: (data) => dispatch(deleteGroupTodoIdAction(data))
    })
}


const mapStateToProps = (state) => {
    // console.log("Delete group Task me reducer se aane wala data". state);
    return {
      getGroupTodos : state.groupTodosReducer  // Gets the group todos which are then rendered on the page
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGroupTasks);
