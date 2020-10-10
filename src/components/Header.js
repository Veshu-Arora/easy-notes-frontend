import React, {Component} from 'react';
import USER_IMAGE from '../assets/images/user.svg';
import '../css/Header.css';

class Header extends Component {
  constructor(){
    super()
      this.state ={
  
      }
  }

  render(){
    return (
      <div className="header-container">

		    <div className="login-container">

          <div className = "user-image-container">
            <img alt="User Login" className = "user-image" src ={USER_IMAGE} onClick={this.props.toggleLoginForm} title = "Login" />
          </div>

        </div>

		    <div className="signup-container">

        {/* {this.state.logged_in === false?<button className="signup-button"  onClick={this.props.toggleSignupForm} >SIGNUP</button>:null} */}

			    <button className="signup-button"  onClick={this.props.toggleSignupForm} >SIGNUP</button>
          <button className="signup-button"  onClick={this.props.toggleCreateNewGroupForm} >CREATE GROUP</button>
          
		    </div>

	    </div>
    );
  }
}

export default Header;






