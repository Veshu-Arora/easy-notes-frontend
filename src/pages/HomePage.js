import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
// import Header from '../components/Header'
// import Body from '../components/Body';
// import UserSignupForm from '../components/UserSignupForm'
// import UserLoginForm from '../components/UserLoginForm';
// import './App.css'


class LandingPage extends Component {
 constructor(){
   super();
   this.state ={
     signup_form_is_visible:false,
     login_form_is_visible:false
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

  render(){
    return (

      <div className="app-container">

        <h1>THIS IS USER'S HOME PAGE</h1>
        
        
	    </div>

    );
  }
}
export default LandingPage;
