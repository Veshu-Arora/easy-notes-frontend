import React, {Component} from 'react';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/UserDashboardHeader.css';
import { connect } from 'react-redux';
import {sessionAction} from '../redux/actions/sessionAction';
import {userAction} from '../redux/actions/userAction';


class UserDashboardHeader extends Component {

  logout = () => {
    this.props.sendUserInfo({});
    this.props.sendSessionData(false);
    localStorage.clear();
  }

  render(){
    return (
      
      <div className="header-container">

		    <div className="easy-notes-logo-card-container">

          <EasyNotesLogoCard />

        </div>

		    <div className="user-info-container">

          <div className="user-name">

            {/* <div>{this.props.userData.data.response_data.first_name}</div> */}

            <button onClick = {() => this.logout()}>Logout</button>

          </div>  

		    </div>

	    </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    sendUserInfo: (data) => dispatch(userAction(data)),  
    sendSessionData: (data) => dispatch(sessionAction(data))   
  })
}

const mapStateToProps = (state) => {
  return {
    userData : state.userReducer,
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardHeader);






