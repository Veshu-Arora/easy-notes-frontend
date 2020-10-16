import React, {Component} from 'react';
import '../css/UserLoginForm.css';  //  WE WILL USE THE CSS OF THE ISER LOGIN FORM FOR NOW
import axios from 'axios';
import { connect } from 'react-redux';
import {groupInfoAction} from '../redux/actions/groupInfoAction';
import {groupSessionAction} from '../redux/actions/groupSessionAction';


class GroupLoginForm extends Component{
    constructor(){
        super()
        this.state = {
            group_code:'',
            password:'',
            group_id:''
        }
    }


    componentDidMount() {
        
        this.setState({
            group_id : this.props.getGroupId.data
        })

    }


    handleChange = (event) => {
        this.setState({
          [event.target.name]:event.target.value  
        })
    };


   

    login = () => {

        if(this.state.group_code && this.state.password){

            axios({
                method: 'get',
                url: `http://127.0.0.1:5000/publicgrouplogin/${this.state.group_id}/${this.state.group_code}/${this.state.password}`,
              }).then((res)=>{
                // alert(JSON.stringify(res.data.response_data))
                if(res.data.response_data.status){
                    this.props.sendGroupSessionData(true);
                    this.props.sendGroupInfo(res.data);               
                    this.props.history.push('/groupdashboard');
                }else{
                    alert(res.data.response_data.message)
                }
                
              }).catch((err)=>{
                  console.log("Group Login Error : " + err);
            })

        }

    }


    render(){
        return(

            <div className="form-popup form login-form" id="myForm">
                <div action="/addrequest" className="form-container" method="POST">

                    <h2 className="create-new-account">Group Login</h2>

                    <input 
                    type="text" 
                    name="group_code" 
                    autoComplete="off" 
                    placeholder="Group Code" 
                    required="" 
                    value={this.state.group_code}
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
                    <button className="close-signup-button" onClick={this.props.toggleGroupLoginForm} >Close</button>
                
                </div>
            </div>
        )
    }   

}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendGroupInfo: (data) => dispatch(groupInfoAction(data)),  
        sendGroupSessionData: (data) => dispatch(groupSessionAction(data))   
    })
}


const mapStateToProps = (state) => {
    return {
      getGroupId : state.groupIdReducer
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(GroupLoginForm);
