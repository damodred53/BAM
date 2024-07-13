
interface CardLandingPageProp {
    content : React.ReactNode;
    title? : string;
}

const CardLandingPage: React.FC<CardLandingPageProp> = ({title, content}) => {

    let trueContent = content;

    if (typeof content === "string" && content.includes("webp")) {
        trueContent = <img className="article_card_picture" src={content}></img>;
    } else {
        trueContent = <><h4 className="article_card_subtitle">{title}</h4><p className="article_card_paragraph">{content}</p></>
    }
  

    return (

        <article className="article_card">
            <span className="article_card_span">{trueContent}</span>
        </article>
    )

}

export default CardLandingPage;