import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../css/ConfirmDeleteForm.css';


class ConfirmDeleteForm extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]:event.target.value  
        })
    };


    // componentDidMount() {
    //     alert(this.props.getDeleteTodoId.data)
    // }
   

    deleteTodo = (id) => {
        
        axios({
            method: 'delete',
            url: 'http://127.0.0.1:5000/personaltodos',
            data: {
                todo_id : id
            }
            }).then((res)=>{
            alert(JSON.stringify(res.data.response_data.message));
            }).catch((err)=>{
                console.log(" Delete Todo Error : " + err);
        });   
       
    }


    render(){
        return(

            <div className="form-popup form login-form" id="myForm">
                <div action="/addrequest" className="form-container" method="POST">

                    <h3 className="question">Are You Sure you want to delete this todo?</h3>

                    <button className="close-form-button" onClick={this.props.toggleConfirmDeleteForm}>Close</button>

                    <button className="delete-button" onClick = {() => {
                        this.deleteTodo(this.props.getDeleteTodoId.data)
                        this.props.toggleConfirmDeleteForm()}}>
                            Delete
                    </button>

                </div>
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
      getDeleteTodoId : state.deleteTodoIdReducer
    }
    
}

export default connect(mapStateToProps, null)(ConfirmDeleteForm);
