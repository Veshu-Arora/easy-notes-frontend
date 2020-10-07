import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import GroupDashboardHeader from '../components/GroupDashboardHeader'
import GroupDashboardBody from '../components/GroupDashboardBody';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
// import './App.css'


class GroupDashboard extends Component {

  render(){

    // true ! = false
   if(!this.props.getSessionData.active){
      
      // return <Redirect to="/"/>;

      return(

      <div className="app-container">

        <GroupDashboardHeader/>

		    <GroupDashboardBody/> 

	    </div>)
   }

    return (

      <div className="app-container">

        <GroupDashboardHeader/>

		    <GroupDashboardBody/> 

	    </div>

    );

  }

}
const mapStateToProps = (state) => {
  return {
    getSessionData : state.sessionReducer  // Gets the User's Personal Todos which are rendered on the page
  }
}
export default connect(mapStateToProps,null)(GroupDashboard);
