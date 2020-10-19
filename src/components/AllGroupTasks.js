import React, {Component} from 'react';
import '../css/AllTasks.css';  // WE WILL USE THE CSS OF ALL TASKS FOR NOW
import { connect } from 'react-redux';
import axios from 'axios';
import {groupTodosAction} from '../redux/actions/groupTodosAction';
import {apiUrl} from '../constants';


class AllGroupTasks extends Component{
    constructor(){
        super()
        this.state = {
            // email:'',
            pending:true,
            date:[],
            todos:[]
        }
    }


    componentDidMount() {
        
        this.getTodos();
        // alert(JSON.stringify(this.props.getgroupInfo.data.response_data.group_code))

    }


    getTodos = () => {
      
        axios({
            method: 'get',
            url: `${apiUrl}/getpublicgrouptodos/${this.props.getgroupInfo.data.response_data.group_code}`,
            }).then((res)=>{
                if(!res.data.response_data.status){
                    this.setState({
                        pending:false,
                        todos:[]
                    })
                }else{
                    this.setState({
                        pending:false,
                        todos:res.data.response_data.todos_exists
                    })
                }
                
                // send only the data that will be required later
                this.props.sendGroupTodos(res.data.response_data.todos_exists)
            }).catch((err)=>{
                alert(" All Group Task Error: " + err);
        });  

    }


    render(){ 
        return(
            <div className = 'heading-and-all-tasks'>
                <div className="heading">
                    <span className="text-or-logo">All Tasks</span>
                </div>

                <div className="all-tasks">
                    {this.pending?<center><h1>Loading</h1></center>:(<div>
                        
                        {this.state.todos.map((todo)=>{
                            return(
                                <div>
                                    <div className = 'todo-date'>{todo.expires_on}</div>

                                    <div className = 'todo-text-and-time'>
                                        <div className = 'todo-text'>{todo.description}</div>
                                        <div className = 'todo-time'>{todo.expires_at}</div>
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


const mapStateToProps = (state) => {

    // console.log("User reducer ka data jo ki all tasks me aa rha h " + JSON.stringify(state.userReducer));
    return {
      getgroupInfo : state.groupInfoReducer,
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendGroupTodos: (data) => dispatch(groupTodosAction(data))   
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(AllGroupTasks);
