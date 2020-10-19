import React, {Component} from 'react';
import '../css/GroupDescriptionCard.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {groupIdAction} from '../redux/actions/groupIdAction';
import {apiUrl} from '../constants';

class GroupDescriptionCard extends Component{
    constructor(){
        super()
        this.state = {
            pending:true,
            public_groups:[]
        }
    }


    componentDidMount() {

        this.getPublicGroups();

    }


    getPublicGroups = () => {
        axios({
            method: 'get',
            url: `${apiUrl}/publicgroups`,
            }).then((res)=>{
                if(!res.data.response_data.status){
                    this.setState({
                        pending:false,
                        public_groups:[]
                    })
                }else{
                    this.setState({
                        pending:false,
                        public_groups:res.data.response_data.all_public_groups
                    })
                    // console.log("GET REQUEST KA REPLY: ", JSON.stringify(res.data.response_data.all_public_groups));
                }
                
            }).catch((err)=>{
                alert(" All Public Groups Error: " + err);
        });  

    }


    render(){
        return(

            <div className = 'group-description-button-container'>

                <div className = "groups-description-button-card">

                    {this.pending?<center><h1>Loading</h1></center>:(<div>

                        {this.state.public_groups.map((public_group)=>{
                            return(

                                <div>

                                    <div className ="groups-description-button">

                                        <div className="groups-card">{public_group.group_name}</div> 

                                        <div className="description-card">{public_group.description}</div> 

                                        <div className="button-card">
                                            <button 
                                            onClick = { ()=> {
                                                this.props.sendGroupId(public_group.id);
                                                this.props.toggleGroupLoginForm();
                                                
                                            }}>
                                                Login
                                            </button> 
                                        </div>

                                    </div> 

                                </div>       

                            )

                        })}

                    </div>)}        

                </div>
                    
            </div> 
        

        )
    }
} 


const mapDispatchToProps = (dispatch) => {
    return ({
      sendGroupId: (data) => dispatch(groupIdAction(data))  
    })
}

export default connect(null, mapDispatchToProps)(GroupDescriptionCard);
