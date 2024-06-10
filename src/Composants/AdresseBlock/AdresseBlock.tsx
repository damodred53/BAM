
import React from "react";
import Curseur from "../../assets/Curseur.png";
import Enveloppe from "../../assets/enveloppe.svg";
import Telephone from "../../assets/Telephone.png";
import imageBam from "../../assets/imageBAM.png";


const AdresseBlock = () => {


    return (

        <section className="adresseBlock">
            <h2 className="adresseBlock_title">CONTACT</h2>

            <div className="adresseBlock_maindiv">
                <img className="adresseBlock_maindiv_picture" src={imageBam}/>
                <div className="adresseBlock_maindiv_subdiv">
                    <img className="adresseBlock_maindiv_subdiv_logo"  src={Curseur} />
                    <p className="adresseBlock_maindiv_subdiv_paragraph">ZA du Mottay Route de Sacé 53240 MONTFLOURS</p>
                </div>
                <div className="adresseBlock_maindiv_subdiv">
                    <div>
                        <img className="adresseBlock_maindiv_subdiv_logo" src={Telephone}/>
                        <p className="adresseBlock_maindiv_subdiv_paragraph">Cliquer pour voir</p>
                    </div>
                    <div>
                        <img className="adresseBlock_maindiv_subdiv_logo" src={Enveloppe} />
                        <p className="adresseBlock_maindiv_subdiv_paragreaph">Cliquer pour voir</p>
                    </div>
                </div>
            </div>

        </section>

    )
}
export default AdresseBlock;