import React, {Component} from 'react';
import AllTasks from './AllTasks';
import CreateNewTask from './CreateNewTask';
import UpdateTasks from './UpdateTasks';
import DeleteTasks from './DeleteTasks';
import EasyNotesFeatureCards from './EasyNotesFeatureCards';
import '../css/MainBody.css';
import { connect } from 'react-redux';


class MainBody extends Component{

    render(){
        return(
            <div className="main-body">

                {/* THE 3 EASY NOTES CARD WILL BE RENDERED ON THE LANDING PAGE ONLY */}

                {this.props.active_tab.data === 0?<EasyNotesFeatureCards />:null}

                {/* THE BELOW COMPONENTS WILL BE RENDERED ON USER DASHBOARD */}

                {/* 1. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "All Tasks" */}

                {this.props.active_tab.data === 1?<AllTasks />:null}
                                

                {/* 2. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Create New Task" */}

                {this.props.active_tab.data === 2?<CreateNewTask />:null}


                {/* 3. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Update Tasks" */}

                    
                {this.props.active_tab.data === 3?<UpdateTasks />:null}


                {/* 4. THE BELOW COMPONENTS WILL BE RENDERED ON CLICKING THE "Delete Tasks" */}

                {this.props.active_tab.data === 4?<DeleteTasks />:null}
                    
		        </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
      active_tab : state.activeTabReducer
    }
  }

export default connect(mapStateToProps,null)(MainBody);