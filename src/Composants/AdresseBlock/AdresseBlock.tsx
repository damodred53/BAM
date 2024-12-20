
import Curseur from "../../assets/Curseur.webp";
import Enveloppe from "../../assets/enveloppe.webp";
import Telephone from "../../assets/Telephone.webp";
import imageBam from "../../assets/image_BAM.webp";
import { useState } from "react";


const AdresseBlock = () => {

    const [telephoneNumberDisplay, setTelephoneNumberDisplay] = useState(false);
    const [mailDisplay, setMailDisplay] = useState(false);

    const handleDisplay = () => {
        setTelephoneNumberDisplay(!telephoneNumberDisplay);
    };

    const handleDisplay2 = () => {
        setMailDisplay(!mailDisplay);
    };

    return (

        <section className="adresseBlock">
            <h2 className="adresseBlock_title">CONTACT</h2>

            <div className="adresseBlock_maindiv">
                <img className="adresseBlock_maindiv_picture" src={imageBam} alt="vue satellite de l'entreprise"/>
                <div className="adresseBlock_maindiv_subdiv">
                    <img className="adresseBlock_maindiv_subdiv_logo"  src={Curseur} alt="curseur" />
                    <p className="adresseBlock_maindiv_subdiv_paragraph">ZA du Mottay Route de Sacé <br/>53240 Montflours</p>
                </div>
                <div className="adresseBlock_maindiv_subdiv">
                    <div className="adresseBlock_maindiv_subdiv_under" onClick={handleDisplay}>
                        <img className="adresseBlock_maindiv_subdiv_under_logo" src={Telephone} alt="icone de téléphone" />
                        {!telephoneNumberDisplay ?
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub">Cliquez pour voir</p>
                            :
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub"><a className="num_tel" href="tel:0601053456">06 01 05 34 56</a></p>
                        }
                        
                    </div>
                    <div className="adresseBlock_maindiv_subdiv_under" onClick={handleDisplay2}>
                        <img className="adresseBlock_maindiv_subdiv_under_logo" src={Enveloppe} alt="icone d'enveloppe" />
                        {!mailDisplay ? 
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub">Cliquez pour voir</p>
                            :
                            <a className="adresseBlock_maindiv_subdiv_under_paragraph_sub true_adress" href="mailto:'brasserie.montflours@orange.fr"
                            >brasserie.montflours@orange.fr</a>
                        }
                    </div>
                </div>
            </div>

        </section>

    )
}
export default AdresseBlock;