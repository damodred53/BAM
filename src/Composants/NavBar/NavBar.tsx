
import React from "react";
import { NavLink } from "react-router-dom"
import BurgerMenu from "../../assets/white_menu.svg"
import LogoBam  from "../../assets/logo_navbar.svg"
import { useState } from "react";


const NavBar = () => {

   const [isHeaderVisible, setIsHeaderVisible ] = useState(true);

   const handleDisplayHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
   }

    return (

        <>
        {isHeaderVisible ? 
            <div className="navBar ">
                <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
                <img className="navBar_logo" src={LogoBam}/>
                <div className="navBar_pages">
                    <ul className="navBar_pages_list">
                        <li><NavLink className="navBar_pages_list_links" to="/" >La BAM en <br/> quelques mots</NavLink></li>
                        <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de <br/> mots</NavLink></li>
                        <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                    </ul>
                </div>
            </div>  : ""}
            <div className="navBar_menu">
                <img className="navBar_menu_picture" onClick={handleDisplayHeader}  src={BurgerMenu}/>
            </div>
        
        </>

    )
}

export default NavBar;