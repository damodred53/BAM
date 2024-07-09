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
import { useState, useEffect } from "react";


const DisplayDataBam = ({ beers }) => {
    const logoToDisplay = [];
    
    /*const [logoToDisplay, setLogoToDisplay] = useState([]);*/
    
    const imagesBAM = [Blanche, Ambrée, Blonde, Brune, Terroir, Masquée, Stout, Mars, Poussin, Noel, Cervoise];
/*console.log(beers);*/

beers.forEach((beer) => {
    
    /*console.log(beer.id)*/
    const result = imagesBAM[beer.id-1];
    
    logoToDisplay.push(result);

    
})

console.log(logoToDisplay);
const handleClick = (e) => {

    e.preventDefault();


}

  return (
    <div className="display">
        
        <div className="display_upperpart">
        
            <>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" onClick={(e)=> handleClick(e)} src={logoToDisplay[0]}/>
                    <img className="display_upperpart_icons_cursor" src={verticalCursor} />
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" src={logoToDisplay[1]} />
                    <img className="display_upperpart_icons_cursor" src={verticalCursor} />
                </div>
                <div className="display_upperpart_icons">
                    <img className="display_upperpart_icons_picture" src={logoToDisplay[2]} />
                    <img className="display_upperpart_icons_cursor" src={verticalCursor} />
                </div>
            </>
           
        </div>

      <div className="display_paragraph">
        <div>
            <img src={Stout} />

        </div>
      </div>
    </div>
  );
};

export default DisplayDataBam;
