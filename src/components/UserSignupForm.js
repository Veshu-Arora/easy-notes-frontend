import React, {Component} from 'react';
import '../css/UserLoginForm.css';
import axios from 'axios';

class UserSignupForm extends Component{
    constructor(){
        super()
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            password:'',
            confirm_password:'',
        }
    }
 

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    

    register = () => {
        if(this.state.first_name && this.state.last_name && this.state.email && this.state.phone && this.state.password && this.state.confirm_password && this.state.password === this.state.confirm_password)
        {
         
            axios({
                method: 'post',
                url: 'http://127.0.0.1:5000/users',
                data: {
                  first_name:this.state.first_name,
                  last_name:this.state.last_name,
                  email:this.state.email,
                  phone:this.state.phone,
                  password:this.state.password
                }
              }).then((res)=>{
                console.log(JSON.stringify(res.data));
              }).catch((err)=>{
                  console.log("Error : " + err);
              });   
        }
       
    }

    render(){
        return(

            <div className="form-popup signup-form">
	            <div className="form-container" method="POST">

                    <h2 className="create-new-account">Create Your New Account</h2>

                    <input 
                    type="text" 
                    name="first_name" 
                    autoComplete="off" 
                    placeholder="First Name" 
                    required="" 
                    value={this.state.first_name}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="text" 
                    name="last_name" 
                    autoComplete="off" 
                    placeholder="Last Name" 
                    required="" 
                    value={this.state.last_name}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="text" 
                    name="email" 
                    autoComplete="off" 
                    placeholder="Email" 
                    required="" 
                    value={this.state.email}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="text" 
                    name="phone" 
                    autoComplete="off" 
                    placeholder="Phone" 
                    required="" 
                    value={this.state.phone}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="password" 
                    name="password" 
                    autoComplete="off" 
                    placeholder="Password" 
                    required="" 
                    value={this.state.password} 
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="password" 
                    name="confirm_password" 
                    autoComplete="off" 
                    placeholder="Confirm Password" 
                    required="" 
                    value={this.state.confirm_password}
                    onChange={(event) => this.handleChange(event)}/>

                    <button className="create-account-button" onClick={() => this.register()} >Create Account</button>
                    <button className="close-signup-button" onClick={this.props.toggleSignupForm}>Close</button>

                </div>
	        </div>
        )
    }
}


 
export default UserSignupForm;


