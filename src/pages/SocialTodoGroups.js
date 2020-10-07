import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import SocialTodoGroupsHeader from '../components/SocialTodoGroupsHeader';
import SocialTodoGroupsBody from '../components/SocialTodoGroupsBody';
import GroupLoginForm from '../components/GroupLoginForm';
import CreateNewGroupForm from '../components/CreateNewGroupForm';
// import './App.css'


class SocialTodoGroups extends Component {

 constructor(){
   super();
   this.state ={
     group_login_form_is_visible:false,
   }
 }

 
 toggleGroupLoginForm =()=>{
  this.setState((prevState)=>({
    group_login_form_is_visible: !prevState.group_login_form_is_visible
  }))
}


componentDidMount(){
  console.log(JSON.stringify(this.props));
}

  render(){
    return (

        <div className="app-container">

            {/* <Header toggleSignupForm={this.toggleSignupForm} toggleLoginForm={this.toggleLoginForm} toggleCreateNewGroupForm = {this.toggleCreateNewGroupForm} /> */}

            <SocialTodoGroupsHeader />

		        <SocialTodoGroupsBody toggleGroupLoginForm = {this.toggleGroupLoginForm}/>

            {this.state.group_login_form_is_visible?<GroupLoginForm history={this.props.history} toggleGroupLoginForm = {this.toggleGroupLoginForm} />:null}
            
	    </div>

    );
  }
}
export default SocialTodoGroups;
