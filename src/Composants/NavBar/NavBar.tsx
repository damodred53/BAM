
import { NavLink } from "react-router-dom"
import BAMMenu from "../../assets/cercleWhite.png"
import Burger from "../../assets/go up.svg"
import LogoBam  from "../../assets/logo_navbar.webp"


const NavBar = () => {


    const handleGoUp = () => {
        window.scrollTo(0,0)
    }

    return (

        <div >
            
            
                <div className="navBar">
                    <h1 className="navBar_title">Bienvenue à la Brasserie Associative de Montflours</h1>
                    <img className="navBar_logo" src={LogoBam} alt="logo de l'entreprise BAM"/>
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
        

                <div className="navBar_menu">
                    <img className="navBar_menu_burger" onClick={handleGoUp} title="Retour rapide au sommaire"  src={Burger} />
                    <img className="navBar_menu_picture" onClick={handleGoUp} title="Retour rapide au sommaire"  src={BAMMenu} />
                </div>
            
        </div>
        
    )
}

export default NavBar;