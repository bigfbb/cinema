
import React from "react";
import {NavLink} from "react-router-dom"

class Header extends React.Component {


    render() {
        return (
            <div>
            <header className="header">
               <NavLink  to="/"><img id="gImg" src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png" alt='Grid-Academy'  /></NavLink> 
                <NavLink id="navLink" to="/Profile">Profile</NavLink>
            </header>
          
            </div>
        )
    }
}

export default Header;