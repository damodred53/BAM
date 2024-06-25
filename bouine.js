/*${isVisible ? 'visible' : 'hidden'}*/


<div className="vitrine_second_column">
                {dataBam.map((cardBam) => (
                    cardBam.id >= 7 ? <CardSecondColumn key={cardBam.id} id={cardBam.id} name={cardBam.name} presentation={cardBam.presentation} /> : null
                ))}
            </div>


