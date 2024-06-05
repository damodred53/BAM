
import React from "react";
import logoNoir from "../../assets/LogoBam/Stout.webp";

const SecondTitle = ({textContent}) => {

    return (

        <div className="second_title">
            <img className="second_title_picture" src={logoNoir}/>
            <h2 className="second_title_sub">{textContent}</h2>
        </div>
    )

}

export default SecondTitle;