import {NavLink } from "react-router-dom";
import "./stylesNavBar.scss";

function Navbar (){
    return (
        <div className="container">
            <div className="navbar">
                <img src="../img\poulpe.png" alt="Poulpe" />
                <div className="navlink">
                    <NavLink to="/" className={"link"}>Présentation</NavLink>
                    <NavLink to="/professionnel" className={"link"}>Professionnnel</NavLink>
                    <NavLink to="/calendrier" className={"link"}>Calendrier</NavLink>
                    <NavLink to="/contact" className={"link"}>Contact</NavLink>
                </div>                
            </div>
        </div>
    )
}

export default Navbar;