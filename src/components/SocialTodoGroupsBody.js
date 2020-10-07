import React, {Component} from 'react';
import EasyNotesFeatureCards from './EasyNotesFeatureCards';
import GroupListCard from './GroupListCard';
import '../css/SocialTodoGroupsBody.css'
import GroupDescriptionCard from './GroupDescriptionCard';


class SocialTodoGroupsBody extends Component{
    constructor(props){
        super()
        this.state = {
    
        }
    }

    render(){
        return(

            <div className="body-container">

                <div className="side-space">

                    <GroupListCard />

                </div>

		        <div className="main-body">

                    <GroupDescriptionCard toggleGroupLoginForm={this.props.toggleGroupLoginForm} />

                </div>
                
	        </div>
        )
    }
}

export default SocialTodoGroupsBody;