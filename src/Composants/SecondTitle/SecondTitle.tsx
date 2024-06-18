
import React from "react";
import logoNoir from "../../assets/LogoBam/Stout.webp";

interface SecondTitleProps {
    textContent : string;
    className?: string;
}

const SecondTitle: React.FC<SecondTitleProps> = ({textContent, className}) => {


    return (

        <div className={`second_title ${className || ""}`}>
            <img className="second_title_picture" src={logoNoir}/>
            <h2 className="second_title_sub">{textContent}</h2>
        </div>
    )

}

export default SecondTitle;