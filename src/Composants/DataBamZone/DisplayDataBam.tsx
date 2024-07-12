import verticalCursor from "../../assets/vertical_cursor.svg";
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
import Curseur from "../../assets/darkArrow.png";
import { useState} from "react";


const DisplayDataBam = ({ beers }) => {
    const logoToDisplay = [];
    const [textToDisplay, setTextToDisplay] = useState();

    
    const imagesBAM = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée, Stout, Mars, Poussin, Noel, Cervoise];


beers.forEach((beer) => {
    
    /*console.log(beer.id)*/
    const result = imagesBAM[beer.id-1];
    
    logoToDisplay.push(result);
    
    
})

/*console.log(logoToDisplay);*/
const handleClick = (e, beers:number, presentation:string) => {

    e.preventDefault();
    setTextToDisplay(presentation);
}
/*console.log(textToDisplay)*/
  return (
    <div className="display">
        
        <div className="display_upperpart">
        
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e, beers[0]?.id, beers[0]?.presentation)} src={logoToDisplay[0]}/>
                    <img className="display_upperpart_icons_cursor" src={Curseur} />
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e, beers[1]?.id, beers[1]?.presentation)} src={logoToDisplay[1]} />
                    <img className="display_upperpart_icons_cursor" src={Curseur} />
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e, beers[2]?.id, beers[2]?.presentation)} src={logoToDisplay[2]} />
                    {beers[2]?.id ? <img className="display_upperpart_icons_cursor" src={Curseur} /> : ""}
                </div>
            
        </div>

      <div className="display_paragraph">
        {textToDisplay ? <p className="display_paragraph_text">{textToDisplay}</p> : <p className="display_paragraph_text">Cliquer sur une bière pour en lire la description</p>};
        <div className="display_paragraph_logo">
            <img src={Stout} />
        </div>
      </div>
    </div>
  );
};

export default DisplayDataBam;
