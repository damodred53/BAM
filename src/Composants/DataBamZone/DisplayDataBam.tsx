
import Blanche from "../../assets/LogoBam/Blanche.webp";
import Ambrée from "../../assets/LogoBam/Ambrée.webp";
import Blonde from "../../assets/LogoBam/Blonde.webp";
import Brune from "../../assets/LogoBam/Brune.webp";
import Terroir from "../../assets/LogoBam/Terroir.webp";
import Masquée from "../../assets/LogoBam/Masquée.webp";
import Stout from "../../assets/LogoBam/Stout.webp";
import Mars from "../../assets/LogoBam/Mars.webp";
import Poussin from "../../assets/LogoBam/Poussin.webp";
import Noel from "../../assets/LogoBam/Noël.webp";
import Cervoise from "../../assets/LogoBam/Cervoise.webp";
import Curseur from "../../assets/darkArrow.webp";
import { useState} from "react";


const DisplayDataBam = ({ beers }) => {
    const logoToDisplay = [];
    const [textToDisplay, setTextToDisplay] = useState();
    const [nameToDisplay, setNameToDisplay] = useState();

    
    const imagesBAM = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée, Stout, Mars, Poussin, Noel, Cervoise];


beers.forEach((beer) => {
    
    const result = imagesBAM[beer.id-1];
    
    logoToDisplay.push(result);
    
    
})
console.log(beers)
const handleClick = (e, presentation, name) => {

    e.preventDefault();
    setTextToDisplay(presentation);
    setNameToDisplay(name)
    
}
  return (
    <div className="display">
        
        <div className="display_upperpart">
        
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e,  beers[0]?.presentation, beers[0]?.name)} src={logoToDisplay[0]}/>
                    <p className="display_upperpart_icons_paragraph">{beers[0]?.name}</p>
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e,  beers[1]?.presentation, beers[1]?.name)} src={logoToDisplay[1]} />
                    <p className="display_upperpart_icons_paragraph">{beers[1]?.name}</p>
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e,  beers[2]?.presentation, beers[2]?.name)} src={logoToDisplay[2]} />
                    <p className="display_upperpart_icons_paragraph">{beers[2]?.name}</p>
                </div>
            
        </div>

      <div className="display_paragraph">
        {textToDisplay && nameToDisplay? <>
        <h3 className="display_paragraph_name">{nameToDisplay}  :</h3>
        <p className="display_paragraph_text">{textToDisplay}</p></>
         : 
        <p className="display_paragraph_text">Cliquer sur une bière pour en lire la description</p>};
        <div className="display_paragraph_logo">
            <img src={Stout} />
        </div>
      </div>
    </div>
  );
};

export default DisplayDataBam;
