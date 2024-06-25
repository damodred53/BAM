import Footer from "../../Composants/Footer/Footer";
import NavBar from "../../Composants/NavBar/NavBar";

const Erreur = () => {

    return (
        <div>
            <NavBar />
            <h1 className="erreur">Ceci est la page d'erreur de la BAM</h1>
            <Footer />
        </div>
    )
}

export default Erreur;