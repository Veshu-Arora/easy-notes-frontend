import React, {Component} from 'react';
import '../css/GroupListCard.css';


class GroupListCard extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(

             <div className="group-list-card">

                 <h1>Hey, there!</h1>

                 {/* <hr /> */}

                <div className="text-or-logo">Here you will find all the Social Groups along with the description
                explaining what they were specifically made for. Not only can you see the list of all the public 
                groups, but also you can enter and work in your groups just by logging in with the group code and 
                password!
                </div>

            </div>

        )
    }
}    

export default GroupListCard;