
import NatureProgresLogo from "../../assets/nature_et_progres.svg";

const NatureProgres = () => {

    return (

            <div className="nature">
                <h2 className="nature_title"> LA BAM EST DIURÉTIQUE ET BONNE POUR LA PLANETE</h2>
                <div className="nature_div">
                    <img className="nature_div_picture" src={NatureProgresLogo}/>
                    <p className="nature_div_paragraph">
                        Nature et Progrès est une association de 
                        consommateurs, d'agriculteurs producteurs et 
                        d'artisans transformateurs fondée en 1964.
                        Elle est l'acteur historique de la promotion 
                        du développement de l'agrobiologie en France et en Belgique.
                    </p>
                </div>

                <div className="nature_div_2">
                    <div className="nature_div_2_environnement">
                        <h3 className="nature_div_2_environnement_title">ENVIRONNEMENT</h3>
                        <p className="nature_div_2_environnement_paragraph">
                            L'étiquette indique que les produits répondent aux exigences de l'agriculture biologique. 
                            La charte de Nature et Progrès définit en outre un ensemble de règles plus strictes concernant l'utilisation de la biodiversité, 
                            la saisonnalité, le bien-être animal, à chaîne courte et l'utilisation des ressources.
                            Un nombre de substances nocives sont interdites lors de la production. 
                            Les produits doivent être biodégradables.
                        </p>
                    </div>
                    <div className="nature_div_2_social">
                        <h3 className="nature_div_2_social_title">SOCIAL</h3>
                        <p className="nature_div_2_social_paragraph">
                            La charte de Nature et Progrès impose un certain nombre de critères en termes 
                            de transparence, solidarité, diffusion des connaissances et financement éthique de l'entreprise.
                        </p>
                    </div>
                </div>
            </div>
            
    )
}

export default NatureProgres;