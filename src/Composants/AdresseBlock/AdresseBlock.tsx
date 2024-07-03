
import Curseur from "../../assets/Curseur.png";
import Enveloppe from "../../assets/enveloppe.svg";
import Telephone from "../../assets/Telephone.png";
import imageBam from "../../assets/Essai_BAM.png";
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
                <img className="adresseBlock_maindiv_picture" src={imageBam}/>
                <div className="adresseBlock_maindiv_subdiv">
                    <img className="adresseBlock_maindiv_subdiv_logo"  src={Curseur} />
                    <p className="adresseBlock_maindiv_subdiv_paragraph">ZA du Mottay Route de Sacé <br/>53240 Montflours</p>
                </div>
                <div className="adresseBlock_maindiv_subdiv">
                    <div className="adresseBlock_maindiv_subdiv_under" onClick={handleDisplay}>
                        <img className="adresseBlock_maindiv_subdiv_under_logo" src={Telephone}/>
                        {!telephoneNumberDisplay ?
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub">Cliquez pour voir</p>
                            :
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub">06 01 05 34 56</p>
                        }
                        
                    </div>
                    <div className="adresseBlock_maindiv_subdiv_under" onClick={handleDisplay2}>
                        <img className="adresseBlock_maindiv_subdiv_under_logo" src={Enveloppe} />
                        {!mailDisplay ? 
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub">Cliquez pour voir</p>
                            :
                            <p className="adresseBlock_maindiv_subdiv_under_paragraph_sub true_adress">brasserie.montflours@orange.fr</p>
                            }
                        
                    </div>
                </div>
            </div>

        </section>

    )
}
export default AdresseBlock;