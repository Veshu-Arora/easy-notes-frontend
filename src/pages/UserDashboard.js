import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import UserDashboardHeader from '../components/UserDashboardHeader'
import UserDashboardBody from '../components/UserDashboardBody';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
// import './App.css'


class UserDashboard extends Component {

  render(){

    // true ! = false
   if(!this.props.getSessionData.active){
      
      return <Redirect to="/"/>;
   }

    return (

      <div className="app-container">

        <UserDashboardHeader/>

		    <UserDashboardBody/> 

	    </div>

    );

  }

}
const mapStateToProps = (state) => {
  return {
    getSessionData : state.sessionReducer  // Gets the User's Personal Todos which are rendered on the page
  }
}
export default connect(mapStateToProps,null)(UserDashboard);
