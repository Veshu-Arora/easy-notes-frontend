import React, {Component} from 'react';
import '../css/EasyNotesFeatureCards.css';


class EasyNotesFeatureCards extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(

            <div className = 'easy-notes-card-container'>

                <div className="easy-notes-card">

                    <div className="text-or-logo">Personal <br/> Todos</div>

                    <hr/>

                    <div className='description-text'>
                        Helps you to see and manage all your tasks anytime anywhere
                    </div>

                </div>


                <div className="easy-notes-card">

                    <div className="text-or-logo">Create Social Todo Groups</div>

                    <hr/>

                    <div className='description-text'>
                        Helps you to create social groups in which teams can work together
                    </div>

                </div>


                <div className="easy-notes-card">

                    <div className="text-or-logo">See Social Todo Groups</div>

                    <hr/>

                    <div className='description-text'>
                        Access any social group with a valid id and password even without an account
                    </div>
                        
                </div> 

            </div>

        )
    }
}    

export default EasyNotesFeatureCards;