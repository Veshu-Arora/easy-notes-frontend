import React, {Component} from 'react';
import '../css/GroupDescriptionCard.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {groupIdAction} from '../redux/actions/groupIdAction';

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
      console.log("GET PUBLIC GROUPS CHAL RHA H");
        axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/publicgroups',
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
                    console.log("GET REQUEST KA REPLY: ", JSON.stringify(res.data.response_data.all_public_groups));
                }
                
                // wahi data send karna hai reducer me jiski jarurat hai faltu ka data bhejne ka chutiyapa mat karna
                // this.props.sendPersonalTodos(res.data.response_data.todos_exists)
            }).catch((err)=>{
                console.log(" All Public Groups Error: " + err);
        });  

    }

    // duty = (id)=>{
    //     this.props.sendGroupId(id);
    //     this.props.toggleGroupLoginForm();
    // }
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
