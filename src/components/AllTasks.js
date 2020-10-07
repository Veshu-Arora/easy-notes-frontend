import React, {Component} from 'react';
import '../css/AllTasks.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {personalTodosAction} from '../redux/actions/personalTodosAction';


class AllTasks extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            pending:true,
            date:[],
            todos:[]
        }
    }


    componentDidMount() {
        
        this.getTodos();

    }


    getTodos = () => {
      
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/getpersonaltodos/${this.props.userData.data.response_data.email}`,
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
                
                // wahi data send karna hai reducer me jiski jarurat hai faltu ka data bhejne ka chutiyapa mat karna
                this.props.sendPersonalTodos(res.data.response_data.todos_exists)
            }).catch((err)=>{
                console.log(" All Task Error: " + err);
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
      userData : state.userReducer
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return ({
      sendPersonalTodos: (data) => dispatch(personalTodosAction(data))   
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);
