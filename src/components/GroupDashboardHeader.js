import React, {Component} from 'react';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/UserDashboardHeader.css';
import { connect } from 'react-redux';
import {groupInfoAction} from '../redux/actions/groupInfoAction';
import {groupSessionAction} from '../redux/actions/groupSessionAction';


class GroupDashboardHeader extends Component {

  logout = () => { 
    this.props.sendGroupInfo({});
    this.props.sendGroupSessionData(false);
    localStorage.clear();
  }

  // componentDidMount() {
  //   alert(JSON.stringify(this.props.getgroupInfo.data.response_data.group_name))
  // }

  render(){
    return (
      <div className="header-container">

		    <div className="easy-notes-logo-card-container">

          <EasyNotesLogoCard />

        </div>

		    <div className="user-info-container">

          <div className="user-name">

            <button onClick = {() => this.logout()}>Logout</button>
            
            {/* {this.props.getgroupInfo.data.response_data.group_name} */}
            
          </div>

		    </div>

	    </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
      sendGroupInfo: (data) => dispatch(groupInfoAction(data)),  
      sendGroupSessionData: (data) => dispatch(groupSessionAction(data))   
  })
}


const mapStateToProps = (state) => {
  return {
    getgroupInfo : state.groupInfoReducer
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDashboardHeader);






