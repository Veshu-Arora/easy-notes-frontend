import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {userAction} from '../redux/actions/userAction';
import {sessionAction} from '../redux/actions/sessionAction';
import '../css/UserLoginForm.css';


class UserLoginForm extends Component{
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


   

login = () => {
    if(this.state.email && this.state.password){
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/login/${this.state.email}/${this.state.password}`,
            }).then((res)=>{
            if(res.data.response_data.status){
                this.props.sendUserInfo(res.data);
                this.props.sendSessionData(true);
                this.props.history.push('/userdashboard')
            }else{
                alert("account does not exist");
            }
            }).catch((err)=>{
                console.log("User Login Error : " + err);
            }); 
    }
}


    render(){
        return(

            <div className="form-popup form login-form" id="myForm">
                <div action="/addrequest" className="form-container" method="POST">

                    <h2 className="create-new-account">User Login</h2>

                    <input 
                    type="text" 
                    name="email" 
                    autoComplete="off" 
                    placeholder="Email" 
                    required="" 
                    value={this.state.userId}
                    onChange={(event) => this.handleChange(event)} />

                    <input 
                    type="password" 
                    name="password" 
                    autoComplete="off" 
                    placeholder="Password" 
                    required="" 
                    value={this.state.password}
                    onChange={(event) => this.handleChange(event)} />


                    <button className="create-account-button" onClick={() => this.login()}>Login</button>
                    <button className="close-signup-button" onClick={this.props.toggleLoginForm}>Close</button>

                </div>
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => {
    return ({
      sendUserInfo: (data) => dispatch(userAction(data)),  
      sendSessionData: (data) => dispatch(sessionAction(data))   
    })
}

export default connect(null, mapDispatchToProps)(UserLoginForm);
