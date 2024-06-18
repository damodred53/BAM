import React from "react";

interface BigHeaderDescriptionProps {
    picture : string;
}

const BigHeaderDescription: React.FC<BigHeaderDescriptionProps> = ({picture}) => {


    return (
        <div className="bigheaderpicture">
            <img className="bigheaderpicture_picture" src={picture} alt="image de haut de page"/>
        </div>
    )
}

export default BigHeaderDescription;