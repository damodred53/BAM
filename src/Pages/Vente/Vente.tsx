
import { Link } from "react-router-dom";
import NavBar from "../../Composants/NavBar/NavBar";
import Footer from "../../Composants/Footer/Footer";
import SecondTitle from "../../Composants/SecondTitle/SecondTitle";
import GoogleMap from "../../Composants/GoogleMap";
import BigHeaderDescription from "../../Composants/BigPictureDescription/BigPictureDescription";
import Entrepot from "../../assets/entrepot.webp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Vente = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    return (

        <section>
            <NavBar />
            <BigHeaderDescription picture={Entrepot} />
            <hr className="brown_bare2"></hr>
            <SecondTitle className="second_title_vente" textContent="URGENCE BAM !!"/>
            <div className="vente">
                <p className="vente_paragraph">Vous pouvez retrouver nos produits dans les différents points de vente listés ci-dessous
                    sur la carte. Nous vendons aussi en direct aux marchés de Montlfours (17h30 à 19h) et d'Argentré (17h à 19h30). 
                    Pour les commandes, n'hésitez pas à nous contacter.
                </p>
                <p className="vente_paragraph">Une urgence BAM ? n'hésitez pas à nous contacter en cliquant par ici : <Link to="/#contact">contactez-nous</Link></p>
            </div>

            <div>
                <h2 className="vente_subtitle">Nos différents points de vente</h2>
                <GoogleMap />
            </div>
            <Footer />


        </section>
           
    )
}

export default Vente;