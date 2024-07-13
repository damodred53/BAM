import Footer from "../../Composants/Footer/Footer";
import NavBar from "../../Composants/NavBar/NavBar";

const Erreur = () => {

    return (
        <div className="main_erreur">
            
            <NavBar />
            
            
            <h1 className="erreur">Ceci est la page d'erreur de la BAM, bravo de l'avoir trouvé. <br/> Mais en gros la page que vous recherchez n'existe pas !!</h1>
            <Footer />
        </div>
    )
}

export default Erreur;