
import React from "react";
import { NavLink } from "react-router-dom"
import BurgerMenu from "../../assets/menu.svg"

const NavBar = () => {

    return (

        <div className="navBar">
            <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
            <img className="navBar_logo"/>
            <div className="navBar_pages">
                <ul className="navBar_pages_list">
                    <li className="navBar_pages_list_links"><NavLink to="/">La BAM en quelques mots</NavLink></li>
                    <li className="navBar_pages_list_links"><NavLink to="/description">La BAM en plus de mots</NavLink></li>
                    <li className="navBar_pages_list_links"><NavLink to="/vente">Une urgence BAM ?</NavLink></li>
                </ul>
            </div>
            <div className="navBar_menu">
                <img className="navBar_menu_picture"  src={BurgerMenu}/>
            </div>
        </div>

    )
}

export default NavBar;