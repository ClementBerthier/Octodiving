import { useState } from "react";
import {NavLink} from "react-router-dom";
import "./stylesNavBar.scss";


function NavBar (){
    const [showLinks, setShowLinks]= useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

 

    return (
        <div className="navbar">
            <div className="responsiveElement">
                <button
                    className="burger"
                    onClick={handleShowLinks}
                >
                    <span className="burgerBar"></span>
                </button>
                <a href="/" className="clubName">
                    <img src="../img/nom-vectoriel-nb.png" alt="clubName"  />
                </a>
                <NavLink to="/contact" className={"link contactLink"}>Contact</NavLink>
            </div>

            <div className={`navlink ${showLinks ? "showNav" : "hideNav"}`}>
                <a href="/" className={"linkLogo"}>
                    <img src="../img/Logo-poulpe.png" alt="Poulpe" />
                </a>
                <NavLink to="/" className={"link"}>Présentation</NavLink>
                <NavLink to="/professionnel" className={"link"}>Professionnnel</NavLink>
                <NavLink to="/calendrier" className={"link"}>Calendrier</NavLink>
                <NavLink to="/contact" className={"link"}>Contact</NavLink>
            </div>
                         
        </div>
    )
}

export default NavBar;