import React, {Component} from 'react';
import SocialTodoGroupsHeadingCard from './SocialTodoGroupsHeadingCard';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/SocialTodoGroupsHeader.css';
import { connect } from 'react-redux';


class SocialTodoGroupsHeader extends Component {
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

        <SocialTodoGroupsHeadingCard />

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

export default connect(mapStateToProps, null)(SocialTodoGroupsHeader);






