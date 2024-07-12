
import logoNoir from "../../assets/LogoBam/Stout.webp";
import NatureProgres from "../../assets/nature_progres.png";
import { NavLink } from "react-router-dom";

const Footer = () => {


    return (

        <div className="footer">
            <img className="footer_logo" src={logoNoir} />
            <div className="footer_div">
                <h3 className="footer_div_title">Copyright 2024 © Brasserie associative de Montflours</h3>
                <p ><NavLink className="footer_div_paragraph" to='/legales'>Mentions légales</NavLink></p>
             </div>

            <a href="https://natureetprogres.org/?Accueil" target="_blank"><img className="footer_label" src={NatureProgres} alt="logo du label Nature et Découverte"/></a>
        </div>

    )
}

export default Footer;