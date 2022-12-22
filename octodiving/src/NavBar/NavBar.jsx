import {NavLink } from "react-router-dom";
import "./stylesNavBar.scss";

function Navbar (){
    return (
        <div className="navbar">
            <div className="navlink">
                <img src="../img/Logo-poulpe.png" alt="Poulpe" />
                <NavLink to="/" className={"link"}>Présentation</NavLink>
                <NavLink to="/professionnel" className={"link"}>Professionnnel</NavLink>
                <NavLink to="/calendrier" className={"link"}>Calendrier</NavLink>
                <NavLink to="/contact" className={"link"}>Contact</NavLink>
            </div>                
        </div>
    )
}

export default Navbar;