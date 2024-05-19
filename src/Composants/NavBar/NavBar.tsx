
import React from "react";
import { NavLink } from "react-router-dom"
import BurgerMenu from "../../assets/white_menu.svg"
import LogoBam  from "../../assets/logo_navbar.svg"

const NavBar = () => {

    return (

        <div className="navBar">
            <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
            <img className="navBar_logo" src={LogoBam}/>
            <div className="navBar_pages">
                <ul className="navBar_pages_list">
                    <li><NavLink className="navBar_pages_list_links" to="/">La BAM en quelques mots</NavLink></li>
                    <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de mots</NavLink></li>
                    <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                </ul>
            </div>
            <div className="navBar_menu">
                <img className="navBar_menu_picture"  src={BurgerMenu}/>
            </div>
        </div>

    )
}

export default NavBar;