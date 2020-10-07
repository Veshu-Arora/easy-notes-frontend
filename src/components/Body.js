import React, {Component} from 'react';
import EasyNotesFeatureCards from './EasyNotesFeatureCards';
import EasyNotesCard from './EasyNotesCard';
import '../css/Body.css'


class Body extends Component{
    constructor(props){
        super()
        this.state = {
    
        }
    }

    render(){
        return(

            <div className="body-container">

                <div className="side-space">

                    <EasyNotesCard />

                </div>

		        <div className="main-body">

                    <EasyNotesFeatureCards />

                </div>
                
	        </div>
        )
    }
}

export default Body;