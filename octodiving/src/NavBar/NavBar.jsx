import {NavLink } from "react-router-dom";
import "./stylesNavBar.scss";

function Navbar (){
    return (
        <div className="navbar">
            <img src="" alt="Poulpe" />
            <NavLink to="/">Présentation</NavLink>
            <NavLink to="/professionnel">Professionnnel</NavLink>
            <NavLink to="/calendrier">Calendrier</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navbar;