import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import UserDashboardHeader from '../components/UserDashboardHeader'
import UserDashboardBody from '../components/UserDashboardBody';
import ConfirmDeleteForm from '../components/ConfirmDeleteForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
// import './App.css'


class UserDashboard extends Component {

  constructor(){
    super();
    this.state ={
      confirm_delete_form_is_visible:false,
    }
  }

  toggleConfirmDeleteForm = () => {
    this.setState((prevState)=>({
      confirm_delete_form_is_visible: !prevState.confirm_delete_form_is_visible
    }))
  }

  render(){
    // true ! = false
   if(!this.props.getSessionData.active){
      
      return <Redirect to="/"/>;
   }

    return (

      <div className="app-container">

        <UserDashboardHeader/>

		    <UserDashboardBody toggleConfirmDeleteForm = {this.toggleConfirmDeleteForm} /> 

        {this.state.confirm_delete_form_is_visible?<ConfirmDeleteForm toggleConfirmDeleteForm = {this.toggleConfirmDeleteForm} />:null}

	    </div>

    );

  }

}
const mapStateToProps = (state) => {
  return {
    getSessionData : state.sessionReducer
  }
}
export default connect(mapStateToProps,null)(UserDashboard);
