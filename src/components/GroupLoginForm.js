import React, {Component} from 'react';
import '../css/UserLoginForm.css';  //  WE WILL USE THE CSS OF THE ISER LOGIN FORM FOR NOW
import axios from 'axios';
import { connect } from 'react-redux';
import {groupInfoAction} from '../redux/actions/groupInfoAction';
// import {sessionAction} from '../redux/actions/sessionAction';


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
                // this.props.sendSessionData(true);
                this.props.sendGroupInfo(res.data);
                alert(JSON.stringify(res))
                this.props.history.push('/groupdashboard');
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
    //   sendSessionData: (data) => dispatch(sessionAction(data))   
    })
}


const mapStateToProps = (state) => {
    return {
      getGroupId : state.groupIdReducer
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(GroupLoginForm);
