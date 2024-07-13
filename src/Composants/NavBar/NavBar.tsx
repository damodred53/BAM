
import { NavLink } from "react-router-dom"
import BurgerMenu from "../../assets/white_menu.webp"
import LogoBam  from "../../assets/logo_navbar.webp"
import { useState } from "react";


const NavBar = () => {

   const [isHeaderVisible, setIsHeaderVisible ] = useState(true);

   const handleDisplayHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
   }

    return (

        
        <div >
            {isHeaderVisible ? 
            
                <div className="navBar">
                    <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
                    <img className="navBar_logo" src={LogoBam}/>
                    <div className="navBar_pages">
                        <ul className="navBar_pages_list">
                            <li><NavLink className="navBar_pages_list_links" to="/" >La BAM en quelques mots</NavLink></li>
                            <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de mots</NavLink></li>
                            <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                        </ul>
                    </div>
                    <div className="hidden_menu">
                        
                            <ul className="hidden_menu_navBar_pages_list">
                                <li><NavLink className="navBar_pages_list_links" to="/" >La BAM en <br/> quelques mots</NavLink></li>
                                <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de <br/> mots</NavLink></li>
                                <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                            </ul>
                        
                    </div>
                </div> 
        
             : 
                
                <div className="navBar_absolute">
                    <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
                    <img className="navBar_logo" src={LogoBam}/>
                    <div className="navBar_pages">
                        <ul className="navBar_pages_list">
                            <li><NavLink className="navBar_pages_list_links" to="/BAM/" >La BAM en quelques mots</NavLink></li>
                            <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de mots</NavLink></li>
                            <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                        </ul>
                    </div>
                    <div className="hidden_menu">
                        
                            <ul className="hidden_menu_navBar_pages_list">
                                <li><NavLink className="navBar_pages_list_links" to="/BAM/" >La BAM en <br/> quelques mots</NavLink></li>
                                <li><NavLink className="navBar_pages_list_links" to="/description">La BAM en plus de <br/> mots</NavLink></li>
                                <li><NavLink className="navBar_pages_list_links" to="/vente">Une urgence BAM ?</NavLink></li>
                            </ul>
                        
                    </div>
                </div>
                }

                <div className="navBar_menu">
                    <img className="navBar_menu_picture" onClick={handleDisplayHeader} title="cliquez pour renvoyer en haut le menu de navigation recliquez pour le rappeler" src={BurgerMenu} />
                </div>
            
        </div>
        
    )
}

export default NavBar;