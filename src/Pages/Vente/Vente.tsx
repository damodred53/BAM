
import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import Footer from "../../Composants/Footer/Footer";
import BigHeaderPicture from "../../Composants/BigHeaderPicture/BigHeaderPicture";
import SecondTitle from "../../Composants/SecondTitle/SecondTitle";
import PointsDeVente from "../../points_de_vente.png";
import GoogleMap from "../../Composants/GoogleMap";


const Vente = () => {

    return (

       
        <section>
            <NavBar />
            <BigHeaderPicture />
            <hr className="brown_bare2"></hr>
            <SecondTitle className="second_title_vente" textContent="URGENCE BAM !!"/>
            <div className="vente">
            <p className="vente_paragraph">LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            
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