
import IrregulomadairePicture from "../../assets/Irregulomadaire.svg";
import numero1 from "../../Irregulomadaires/Irregulo_1.pdf";
import numero2 from "../../Irregulomadaires/Irregulo_2.pdf";
import numero3 from "../../Irregulomadaires/Irregulo_3.pdf";
import numero4 from "../../Irregulomadaires/Irregulo_4.pdf";
import numero5 from "../../Irregulomadaires/Irregulo_5.pdf";
import numero6 from "../../Irregulomadaires/Irregulo_6.pdf";
import numero7 from "../../Irregulomadaires/Irregulo_7.pdf";
import numero8 from "../../Irregulomadaires/Irregulo_8.pdf";
import numero9 from "../../Irregulomadaires/Irregulo_9.pdf";
import numero10 from "../../Irregulomadaires/Irregulo_10.pdf";

const Irregulomadaire = () => {

    return (

        <div className="irregulomadaire">
            <h1 className="irregulomadaire_title">LECTURE SAINE : A CONSOMMER SANS MODÉRATION ET EN PLUS ÇA COUTE RIEN ! </h1>

            <div className="irregulomadaire_presentation">
                <p className="irregulomadaire_presentation_paragraph">
                    Vous pouvez télécharger gratuitement tous les numéros de notre journal en cliquant sur les numéros ci-dessous. 
                </p>
                <img className="irregulomadaire_presentation_picture" src={IrregulomadairePicture} alt="bannière du journal"/>
            </div>

            <div className="irregulomadaire_numero">
                <a className="irregulomadaire_numero_link" href={numero1} download="Irregulo_1.pdf">Numéro 1</a>
                <a className="irregulomadaire_numero_link" href={numero2} download="Irregulo_2.pdf">Numéro 2</a>
                <a className="irregulomadaire_numero_link" href={numero3} download="irregulo_3.pdf">Numéro 3</a>
                <a className="irregulomadaire_numero_link" href={numero4} download="irregulo_4.pdf">Numéro 4</a>
                <a className="irregulomadaire_numero_link" href={numero5} download="irregulo_5.pdf">Numéro 5</a>
                <a className="irregulomadaire_numero_link" href={numero6} download="irregulo_6.pdf">Numéro 6</a>
                <a className="irregulomadaire_numero_link" href={numero7} download="irregulo_7.pdf">Numéro 7</a>
                <a className="irregulomadaire_numero_link" href={numero8} download="irregulo_8.pdf">Numéro 8</a>
                <a className="irregulomadaire_numero_link" href={numero9} download="irregulo_9.pdf">Numéro 9</a>
                <a className="irregulomadaire_numero_link" href={numero10} download="irregulo_10.pdf">Numéro 10</a>
            </div>

        </div>
    )
}

export default Irregulomadaire;