
import React from "react";
import logoNoir from "../../assets/LogoBam/Stout.webp";

interface SecondTitleProps {
    textContent : string;
    className?: string;
}

const SecondTitle: React.FC<SecondTitleProps> = ({textContent, className}) => {


    return (

        <div className={`second_title ${className || ""}`}>
            <img className="second_title_picture" src={logoNoir} alt="logo de la BAM de couleur noir" />
            <h2 className="second_title_sub">{textContent}</h2>
        </div>
    )

}

export default SecondTitle;