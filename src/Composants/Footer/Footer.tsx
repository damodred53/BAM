
import React from "react";
import logoNoir from "../../assets/LogoBam/Stout.webp";
import NatureProgres from "../../assets/natureEtProgres.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {


    return (

        <div className="footer">
            <img className="footer_logo" src={logoNoir} />
            <div className="footer_div">
                <h3 className="footer_div_title">Copyright 2024 © Brasserie associative de Montflours</h3>
                <p ><NavLink className="footer_div_paragraph" to='/legales'>Mentions légales</NavLink></p>
             </div>

            <img className="footer_label" src={NatureProgres} />
        </div>

    )
}

export default Footer;