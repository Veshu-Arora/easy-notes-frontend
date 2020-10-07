import React, {Component} from 'react';
import GroupSidemenu from './GroupSidemenu';
import AllGroupTasks from './AllGroupTasks';
import CreateNewGroupTask from './CreateNewGroupTask';
import UpdateTasks from './UpdateTasks';
import UpdateTask from './UpdateTask';
import DeleteTasks from './DeleteTasks';
import '../css/UserDashboardBody.css';
import { connect } from 'react-redux';


class GroupDashboardBody extends Component{
    constructor(props){
        super()
        this.state = {

        }
    }

    render(){
        return(

            <div className="body-container">
                <div className="side-space">
                    <GroupSidemenu />
                </div>    
		        <div className="main-body">

                    {/* 1. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "All Tasks" */}
                    {this.props.active_tab.data === 1?<AllGroupTasks />:null}


                    {/* 2. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Create New Task" */}
                    {this.props.active_tab.data === 2?<CreateNewGroupTask />:null}


                    {/* 3. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Update Tasks" */}
                    {/* {this.props.active_tab.data === 3?<UpdateTasks />:null} */}


                    {/* 4. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Delete Tasks" */}
                    {/* {this.props.active_tab.data === 4?<DeleteTasks />:null} */}


                    {/* 5. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Delete Tasks" */}
                    {/* {this.props.active_tab.data === 5?<UpdateTask />:null} */}

                </div>
	        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      active_tab : state.activeTabReducer
    }
  }

export default connect(mapStateToProps,null)(GroupDashboardBody);