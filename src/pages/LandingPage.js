import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import Header from '../components/Header'
import Body from '../components/Body';
import UserSignupForm from '../components/UserSignupForm'
import UserLoginForm from '../components/UserLoginForm';
import CreateNewGroupForm from '../components/CreateNewGroupForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import './App.css'


class LandingPage extends Component {

 constructor(){
   super();
   this.state ={
     signup_form_is_visible:false,
     login_form_is_visible:false,
     create_new_group_form_is_visible:false,
   }
 }
 

 toggleSignupForm =()=>{
   this.setState((prevState)=>({
     signup_form_is_visible: !prevState.signup_form_is_visible
   }))
 }

 toggleLoginForm =()=>{
  this.setState((prevState)=>({
    login_form_is_visible: !prevState.login_form_is_visible
  }))
 }


 toggleCreateNewGroupForm =()=>{
  this.setState((prevState)=>({
    create_new_group_form_is_visible: !prevState.create_new_group_form_is_visible
  }))
 }


 componentDidMount() {
   alert((<h1>Hey there! What's up? You see, this is my first React project and i am a developer, not a designer. 
   So, Please don't judge me for the design! Have a good day! &#128512;</h1>).props.children)
 }


  render(){

    if(this.props.getGroupSessionData.active){
      
      return <Redirect to="/groupdashboard"/>;
    }

    if(this.props.getSessionData.active){
      
      return <Redirect to="/userdashboard"/>;
    }

    return (

      <div className="app-container">

        <Header toggleSignupForm={this.toggleSignupForm} toggleLoginForm={this.toggleLoginForm} toggleCreateNewGroupForm = {this.toggleCreateNewGroupForm} />

		    <Body/>

      {this.state.signup_form_is_visible?<UserSignupForm toggleSignupForm = {this.toggleSignupForm} />:null}

      {this.state.login_form_is_visible?<UserLoginForm history={this.props.history} toggleLoginForm = {this.toggleLoginForm} />:null}
    
      {this.state.create_new_group_form_is_visible?<CreateNewGroupForm toggleCreateNewGroupForm = {this.toggleCreateNewGroupForm} />:null}
        
	    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    getGroupSessionData : state.groupSessionReducer,
    getSessionData : state.sessionReducer,
    userData : state.userReducer,
  }
}
export default connect(mapStateToProps,null)(LandingPage);


