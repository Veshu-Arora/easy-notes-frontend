import React, {Component} from 'react';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/UserDashboardHeader.css';
import { connect } from 'react-redux';


class UserDashboardHeader extends Component {
  constructor(){
    super()
      this.state ={
        
      }
  }

  render(){
    return (
      <div className="header-container">

		    <div className="easy-notes-logo-card-container">

          <EasyNotesLogoCard />

        </div>

		    <div className="user-info-container">

          <div className="user-name">{this.props.userData.data.response_data.first_name}</div>

		    </div>

	    </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("dekh toh dhyan se " + JSON.stringify(state.userReducer));
  return {
    userData : state.userReducer,
  }
  
}

export default connect(mapStateToProps, null)(UserDashboardHeader);






