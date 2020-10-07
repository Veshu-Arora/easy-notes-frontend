import React, {Component} from 'react';
import EasyNotesLogoCard from './EasyNotesLogoCard';
import '../css/UserDashboardHeader.css';
import { connect } from 'react-redux';


class GroupDashboardHeader extends Component {
  constructor(){
    super()
      this.state ={
        
      }
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

          {/* <div className="user-name">{this.props.userData.data.response_data.first_name}</div> */}
          <div className="user-name">{this.props.getgroupInfo.data.response_data.group_name}</div>

		    </div>

	    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getgroupInfo : state.groupInfoReducer
  }  
}

export default connect(mapStateToProps, null)(GroupDashboardHeader);






