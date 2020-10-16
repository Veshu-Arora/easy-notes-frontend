import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import GroupDashboardHeader from '../components/GroupDashboardHeader'
import GroupDashboardBody from '../components/GroupDashboardBody';
import ConfirmDeleteFormGroup from '../components/ConfirmDeleteFormGroup';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import './App.css'


class GroupDashboard extends Component {

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
   if(!this.props.getGroupSessionData.active){
      
      return <Redirect to="/"/>;

   }

    return (

      <div className="app-container">

        <GroupDashboardHeader/>

		    <GroupDashboardBody toggleConfirmDeleteForm = {this.toggleConfirmDeleteForm} />

        {this.state.confirm_delete_form_is_visible?<ConfirmDeleteFormGroup toggleConfirmDeleteForm = {this.toggleConfirmDeleteForm} />:null}

	    </div>

    );

  }

}
const mapStateToProps = (state) => {
  return {
    getGroupSessionData : state.groupSessionReducer
  }
}
export default connect(mapStateToProps,null)(GroupDashboard);
