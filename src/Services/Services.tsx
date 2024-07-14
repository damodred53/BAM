
const handleDisplayPresentation = () => {

    let eachPresentation : NodeListOf<HTMLElement>;
    try {
         eachPresentation = document.querySelectorAll('.presentation');
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

export const fetchDropdownDatas = async () => {


    try {
        const result = await fetch("./DataBAM/dropdownData.json");
        
        const data = await result.json();

        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données du dropdown ", error);
        throw error;
    }
    
}

export const handleBeerData = async () => {

        try {
            const response = await fetch("./DataBAM/DataBam.json");
            const data = await response.json();
            return data;

        } catch (error) {
            console.log("Impossible d'aller chercher les données", error);
        }
}


export default handleDisplayPresentation;