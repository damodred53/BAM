
import NatureProgresLogo from "../../assets/nature_et_progres.webp";

const NatureProgres = () => {

    return (

            <div className="nature">
                <h2 className="nature_title"> LA BAM EST DIURÉTIQUE ET BONNE POUR LA PLANETE</h2>
                <div className="nature_div">
                    <img className="nature_div_picture" src={NatureProgresLogo}/>
                    
                </div>

                <div className="nature_new_div">
                    <h3 className="nature_new_div_title">C’est pas faux! </h3>
                    <p className="nature_new_div_paragraph">Nous sommes en accord avec pleins de Grands Sujets Planétaires et travaillons sur des réponses locales propres à notre activité : </p>
                        
                    <ul className="nature_new_div_list">
                        <li className="nature_new_div_list_element">Filères courtes (en achat et vente: vers le 100% Mayenne)</li>
                        <li className="nature_new_div_list_element">Bio à 100% et sans OGM</li>
                        <li className="nature_new_div_list_element">Zéro déchets (récup  des emballages en état, consignes des bouteilles 75 cl et 33cl et réemploi)</li>
                        <li className="nature_new_div_list_element">Anti-gaspi</li>
                        <li className="nature_new_div_list_element">Démocratie (en SCIC: 1personne = 1 voix)</li>
                        <li className="nature_new_div_list_element">Coopération avec d’autres brasseries et d’autres entreprises.</li>
                        <li className="nature_new_div_list_element">Education populaire</li>
                    </ul>
                        
                    <p className="nature_new_div_paragraph" >La mention Nature et Progrès valide notre démarche et nous fait progresser. <br/>Tout est bien présenté ci-dessous: </p>
                    
                    <a target="_blank" href="https://natureetprogres.org/?Mention"><p className="link">Aller sur le site officiel</p></a>
                </div>

            </div>
            
    )
}

export default NatureProgres;