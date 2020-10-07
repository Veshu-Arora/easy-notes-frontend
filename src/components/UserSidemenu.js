import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../css/UserSidemenu.css';

import {activeTabAction} from '../redux/actions/activeTabAction';



class UserSidemenu extends Component{
    constructor(){
        super()
        this.state = {
            active_tab:99
        }
    }


    render(){
        return(

            <div className = 'question-and-user-sidemenu'>

                <div className="side-menu-question">

                    <span className="text-or-logo">What would you like to do?</span>

                </div>

                <div className="user-sidemenu">

                    <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(1)}>  &#9734;   All Tasks  </span>

                    <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(2)}>  &#9734;  Create New Task  </span>

                    <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(3)}>  &#9734;  Update Task  </span>

                    <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(4)}>&#9734;  Delete Tasks  </span>

                    {/* <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(5)}>  &#9734;  Completed Tasks  </span>

                    <span className="text-or-logo" onClick = {() => this.props.sendActiveTab(6)}>  &#9734;  Remaining Tasks  </span> */}

                </div>

            </div>

        )
    }
}  


const mapDispatchToProps = (dispatch) => {
    return ({
      sendActiveTab: (data) => dispatch(activeTabAction(data))   
    })
}

export default connect(null, mapDispatchToProps)(UserSidemenu);