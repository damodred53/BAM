
interface CardLandingPageProp {
    content : React.ReactNode;
    title? : string;
    information? : string
}

const CardLandingPage: React.FC<CardLandingPageProp> = ({title, content, information}) => {


    
    let trueContent = content;
    let sentenceLength = 0;

    if (typeof content === "string") {
         sentenceLength = content.length;
         console.log(sentenceLength)
    }

    

    if (typeof content === "string" && content.includes("webp")) {
        trueContent = <img className="article_card_picture" src={content} alt="image illustrative d'une bière" ></img>;
    } else {
        trueContent = <><h3 className="article_card_subtitle">{title}</h3><p className={`${sentenceLength < 220 ? 'article_card_shortText' : ''} article_card_paragraph`}>{content}</p> 
        {information ?
            <p className={`${sentenceLength < 220 ? 'article_card_shortText' : ''} article_card_information`}>{information}</p>
        :""
        }
        </>
    }
  
/* <p className={`${sentenceLength < 220 ? 'article_card_shortText' : ''} article_card_information`}> */

    return (

        <article className="article_card">
            <span className="article_card_span">{trueContent}</span>
        </article>
    )

}

export default CardLandingPage;