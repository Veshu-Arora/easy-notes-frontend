import React, {Component} from 'react';
import '../css/UserSignupForm.css';
import axios from 'axios';

class CreateNewGroupForm extends Component{
    constructor(){
        super()
        this.state = {
            group_name:'',
            group_code:'',
            password:'',
            description:'',
        }
    }
 

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    

    createNewGroup = () => {
        if(this.state.group_name && this.state.group_code && this.state.password && this.state.description)
        {
         
            axios({
                method: 'post',
                url: 'http://127.0.0.1:5000/publicgroups',
                data: {
                  group_name:this.state.group_name,
                  group_code:this.state.group_code,
                  password:this.state.password,
                  description:this.state.description,
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

                    <h2 className="create-new-account">Create New Social Group</h2>

                    <input 
                    type="text" 
                    name="group_name" 
                    autoComplete="off" 
                    placeholder="Group Name" 
                    required="" 
                    value={this.state.group_name}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="text" 
                    name="group_code" 
                    autoComplete="off" 
                    placeholder="Group Code" 
                    required="" 
                    value={this.state.group_code}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="password" 
                    name="password" 
                    autoComplete="off" 
                    placeholder="Group Login Password" 
                    required="" 
                    value={this.state.password}
                    onChange={(event) => this.handleChange(event)}/>

                    <input 
                    type="text" 
                    name="description" 
                    autoComplete="off" 
                    placeholder="Group Description" 
                    required="" 
                    value={this.state.description}
                    onChange={(event) => this.handleChange(event)}/>

                    <button className="create-account-button" onClick={() => this.createNewGroup()} >Create Group </button>
                    <button className="close-signup-button" onClick={this.props.toggleCreateNewGroupForm}>Close</button>

                </div>
	        </div>
        )
    }
}


 
export default CreateNewGroupForm;


