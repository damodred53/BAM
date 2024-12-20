
import NavBar from "../../Composants/NavBar/NavBar";
import BigHeaderPicture from "../../Composants/BigHeaderPicture/BigHeaderPicture";
import Vitrine from "../../Composants/Vitrine/Vitrine";
import { Provider } from "react-redux";
import { store } from "../../../redux";
import SecondTitle from "../../Composants/SecondTitle/SecondTitle";
import CardLandingPage from "../../Composants/CardLandingPage/CardLandingPage";
import Biere from "../../assets/beer.webp";
import AdresseBlock from "../../Composants/AdresseBlock/AdresseBlock";
import Footer from "../../Composants/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DataBamZone from "../../Composants/DataBamZone/DataBamZone";


const LandingPage = () => {

    const location = useLocation();

    

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => { 
                    element.scrollIntoView({ behavior: "smooth" });
                 }, 600);
            } else {
                window.scrollTo(0,0)
            }
        }
    }, [location]);

    return (

        <>
        <Provider store={store}>
        
            <NavBar />
            <section >
                <div className="landingpage">
                    <BigHeaderPicture />
                    <hr className="brown_bare"></hr>
                    
                    <div className="landingpage_texte">
                        <h2 className="landingpage_main">LA BAM EN QUELQUES MOTS</h2>
                        <div className="landingpage_title"> 
                            <h3>Brasserie Associative de Montflours. En 3 mots, tout est dit ou presque…</h3>
                        </div>
                        <article className="landingpage_texte_presentation">

                            <p>
                                <strong className="landingpage_texte_presentation_strong"> - Brasserie:</strong> Depuis 2009, on brasse de la bière à Montflours en Mayenne (53). 
                                D’abord sur le champ du brassage amateur, puis en véritable activité économique avec deux salariés. 
                                Que ce soit en fermentation haute ou basse, en brassage mono- ou multipaliers, blondes, ambrées ou brunes 
                                sortent des cuves de la BAM. Une production aujourd’hui de 400 hl/an entre recettes 
                                ayant fait leurs preuves et expérimentations, mais toujours à base de matières premières issues de 
                                l’agriculture biologique. La labellisation Nature et Progrès vient renforcer cet engagement, en adéquation également
                                avec les valeurs sociales qu’entend défendre la BAM.
                            </p>

                            <p>
                                <strong className="landingpage_texte_presentation_strong"> - Associative:</strong> La BAM a toujours voulu expérimenter, apprendre et transmettre sur le brassage. 
                                Sur la base de cette volonté, une dynamique collective a été lancée, dans un premier temps, sous forme 
                                associative, prolongée par le passage en SCIC, société coopérative d’intérêt collectif, en 2013. 
                                Constituée de 98 sociétaires, avec un comité de pilotage et un gérant qui rendent compte chaque année 
                                de la bonne conduite du projet en assemblée générale.
                            </p>

                            <p>
                                <strong className="landingpage_texte_presentation_strong"> - Montflours:</strong> L’objet de la BAM a toujours été la fabrication et la vente de bières biologiques en Mayenne. 
                                Les premiers brassins ont vu le jour à Montflours (250 hab) et la BAM y est toujours installée. 
                                Participer aux dynamiques locales est un leitmotiv. Pour la plus grande part des recettes de la BAM l’orge est 
                                produite par des agriculteurs Mayennais et les houblons viennent de la région.
                            </p>

                        </article>
                        
                    </div>

                    <blockquote className="landingpage_quote">
                        “Une pinte de bière est un mets de roi.” 
                        <cite> - William Shakespeare - </cite>
                    </blockquote>

                    
                    
                </div>
                <DataBamZone />
                <Vitrine />
                <SecondTitle textContent="A vot’service !!" />

                

                <div className="article">
                    <CardLandingPage title={"Formation"} content={"Le meilleur moyen de comprendre la fabrication de la bière, c’est de la faire ! Nous proposons un atelier de brassage de bière en petit volume. Pendant cette journée dans nos locaux, vous brassez votre propre bière, repartez avec le fermenteur chez vous pour faire le suivi de fermentation et revenez pour le conditionnement 15 jours après." } information={"Formation le samedi de 10h à 16h30 sur réservation.Tarif 200€ pour 2 personnes + 35€/personne supplémentaire"} />
                    <CardLandingPage content={Biere}  />
                    <CardLandingPage title={"Commande de fûts"} content={"Nous proposons des fûts en 20 et 30 L pour vos événements : blonde et ambrée toute l'année et autres bières sur commande. Prêt gratuit d'une tireuse et de gobelets, sous réservation. Reprise des fûts non-percutés."} />
                </div>

                <blockquote className="landingpage_quote centerflex">
                        <p> “BAM : la bière est artisanale, la brasserie est associative” </p>
                </blockquote>

                

                <span id="contact">
                    <AdresseBlock />
                </span>
                
                <Footer />
                
                
                
            </section>
            
            </Provider>
        </>

    )
}

export default LandingPage;