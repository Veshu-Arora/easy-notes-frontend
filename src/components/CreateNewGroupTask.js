import React, {Component} from 'react';
import '../css/CreateNewTask.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {apiUrl} from '../constants';

import {activeTabAction} from '../redux/actions/activeTabAction';



class CreateNewGroupTask extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            description:'',
            expires_on:'',
            belongs_to:'',
            expires_at:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };


    componentDidMount() {
        this.setState({
            // created_by : this.props.userData.data.response_data.email
            belongs_to : '11111'
        })
        console.log("CREATED BY KI STATE SET KARNE K BAAD", this.state.belongs_to)
    }


    createGroupTodo = () => {
        
        if(this.state.title && this.state.description && this.state.expires_on && this.state.belongs_to && this.state.expires_at)
        {
        
            axios({
                method: 'post',
                url: `${apiUrl}/publicgrouptodos`,
                data: {
                  title:this.state.title,
                  description:this.state.description,
                  expires_on:this.state.expires_on,
                  belongs_to:this.state.belongs_to,
                  expires_at:this.state.expires_at
                }
              }).then((res)=>{
                    alert(res.data.response_data.message);
              }).catch((err)=>{
                    alert("Create Group Todo Error : " + err);
              });   
        }
       
    }


    render(){
        // console.log("ESDRFTGYBHNDXFCGVB N", JSON.stringify(this.props.userData.data.response_data.email));
        return(

            <div className = 'heading-and-create-new-task'>

                <div className="heading">

                    <span className="text-or-logo">Create New Task</span>

                </div>

                <div className = 'create-new-task-container'>
                    
                    <div className="task-name-input-container">

                        <input
                        type = 'text'
                        name = 'title' 
                        placeholder = 'Task name (title)' 
                        value={this.state.title}
                        onChange={(event) => this.handleChange(event)}/>

                    </div>

                    <div className="task-description-input-container">

                        <input
                        type = 'text'
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

                        <button className = 'discard-button' onClick = {() => this.props.sendActiveTab(1)} > Discard </button>
                        <button className = 'create-button' onClick = {() => this.createGroupTodo()}> Create </button>

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
    // console.log("dekh toh dhyan se " + JSON.stringify(state.userReducer));
    return {
      userData : state.userReducer
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewGroupTask);

