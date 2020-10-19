import React, {Component} from 'react';
import '../css/UpdateTask.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {apiUrl} from '../constants';

import {activeTabAction} from '../redux/actions/activeTabAction';


class UpdateGroupTask extends Component{
    constructor(){
        super()
        this.state = {
            todo_id:'',
            title:'',
            description:'',
            expires_on:'',
            belongs_to:'',
            expires_at:''
        }
    }


    componentDidMount() {

        // alert(JSON.stringify(this.props.getGroupTodos))

        this.updateThisGroupTask();

        // alert(JSON.stringify(this.updateThisGroupTask()))
        // alert(JSON.stringify(this.props.updateTodoId))

        this.setState({
            todo_id : this.props.updateTodoId.data,
            belongs_to : this.updateThisGroupTask()[0].belongs_to,
            title : this.updateThisGroupTask()[0].title,
            description : this.updateThisGroupTask()[0].description,
            expires_on : this.updateThisGroupTask()[0].expires_on,
            expires_at : this.updateThisGroupTask()[0].expires_at
        })

        // alert(this.state.belongs_to)
        // // alert(JSON.stringify(this.updateThisTask()[0].created_by))

    }



    updateThisGroupTask = () => {
        let taskToUpdate = this.props.getGroupTodos.data.filter((row) => {
            if(row.id === this.props.updateTodoId.data){
                return row;
            }
        })
        return taskToUpdate; 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };


    updateTodo = () => {
        
        if(this.state.title && this.state.description && this.state.expires_on && this.state.belongs_to && this.state.expires_at && this.state.todo_id)
        {
         
            axios({
                method: 'put',
                url: `${apiUrl}/publicgrouptodos`,
                data: {
                  todo_id : this.state.todo_id,
                  title:this.state.title,
                  description:this.state.description,
                  expires_on:this.state.expires_on,
                  belongs_to:this.state.belongs_to,
                  expires_at:this.state.expires_at
                }
              }).then((res)=>{
                    alert(res.data.response_data.message);
                    this.props.sendActiveTab(1);
              }).catch((err)=>{
                    alert("Update Group Todo Error : " + err);
              });   
        }
       
    }


    render(){
        // alert(JSON.stringify(this.props.personalTodos.data.response_data.todos_exists[0]))
        // alert(JSON.stringify(this.props.updateTodoId.data))
        return(
           
            <div className = 'heading-and-update-task'>

                <div className="heading">

                    <span className="text-or-logo">Update</span>

                </div>

                <div className = 'update-task-container'>

                    
                    <div className="task-name-input-container">

                        <input
                        name = 'title' 
                        placeholder = 'Task name (title)' 
                        value={this.state.title}
                        onChange={(event) => this.handleChange(event)}/>

                    </div>

                    <div className="task-description-input-container">

                        <input
                        name = 'description'   
                        placeholder = 'Add a Description'
                        value={this.state.description}
                        onChange={(event) => this.handleChange(event)} />

                    </div>

                    <div className="task-date-container">

                        <input
                        type = 'date'
                        name = 'expires_on'  
                        placeholder = 'Expires on (Date)'
                        value={this.state.expires_on}
                        onChange={(event) => this.handleChange(event)} />


                    </div>

                    <div className="task-time-container">

                        <input
                        type = 'time'
                        name = 'expires_at'  
                        placeholder = 'Expires at (Time)'
                        value={this.state.expires_at}
                        onChange={(event) => this.handleChange(event)} />


                    </div>


                    <div className = 'button-container'>

                        <button className = 'discard-button' onClick = {() => this.props.sendActiveTab(3)} > Discard </button>
                        <button className = 'update-button' onClick = {() => this.updateTodo()} > Update </button>

                    </div>

                </div>

            </div>    

        )
    }
} 



const mapDispatchToProps = (dispatch) => {
    return ({
      sendActiveTab: (data) => dispatch(activeTabAction(data))   
    })
}



const mapStateToProps = (state) => {

    return {
      getGroupTodos : state.groupTodosReducer,
      updateTodoId : state.updateGroupTodoIdReducer
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGroupTask);

