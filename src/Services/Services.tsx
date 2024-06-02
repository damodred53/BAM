
const handleDisplayPresentation = ( isVisible ) => {

    let eachPresentation : NodeListOf<HTMLElement>;
    try {
         eachPresentation = document.querySelectorAll('.presentation');
         console.log("Voici ma longueur de liste : ", eachPresentation.length);
        console.log(eachPresentation);
         if (eachPresentation.length >= 1) {
            eachPresentation.forEach((presentation) => {

                presentation.classList.add('hidden');
                presentation.classList.remove('visible');
            })
         }


    } catch (error) {
        console.log("impossible de récupérer toutes les présentations des bières ", error);
    }

}

export default handleDisplayPresentation;