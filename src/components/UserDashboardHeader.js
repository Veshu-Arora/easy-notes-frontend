import React, {Component} from 'react';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/UserDashboardHeader.css';
import { connect } from 'react-redux';
import {sessionAction} from '../redux/actions/sessionAction';
import {userAction} from '../redux/actions/userAction';
import {logoutAction} from '../redux/actions/logoutAction';


class UserDashboardHeader extends Component {

  logout = () => {
    this.props.sendUserInfo({});
    this.props.sendSessionData(false);
    this.props.sendLogoutSignal();
    localStorage.clear();
  }

  render(){
    return (
      
      <div className="header-container">

		    <div className="easy-notes-logo-card-container">

          <EasyNotesLogoCard />

        </div>

		    <div className="user-info-container">

          <div className="user-name-and-logout-button">

            <button onClick = {() => this.logout()}>Logout</button>

            <div className = "user-name">{this.props.userData.data.response_data.first_name}</div>

          </div>  

		    </div>

	    </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    sendUserInfo: (data) => dispatch(userAction(data)),  
    sendSessionData: (data) => dispatch(sessionAction(data)),
    sendLogoutSignal: (data) => dispatch(logoutAction(data))   
  })
}

const mapStateToProps = (state) => {
  return {
    userData : state.userReducer,
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardHeader);






