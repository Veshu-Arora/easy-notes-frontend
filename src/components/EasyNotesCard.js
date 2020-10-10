import React, {Component} from 'react';
import '../css/EasyNotesCard.css';


class EasyNotesCard extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(

             <div className="easy-notes-card">

                <div className="text-or-logo">Easy <br/> Notes</div>

                <hr/>

                <div className='description-text'>
                   Easy Notes allows you to manage your day to day tasks and in a more efficient manner
                   thereby improving your overall productivity
                </div>

            </div>

        )
    }
}    

export default EasyNotesCard;