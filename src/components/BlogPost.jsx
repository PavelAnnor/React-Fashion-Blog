import "../styles/blogPost.css"
export default function BlogPost(props){


    return (
      <article className="blogPost">
        <time className="grey_text">{props.time}</time>
        <h3 className="blogTitle">{props.title}</h3>
        <img src={props.imgSrc} />

        <div className="blogContentDiv">

          <div className="firstLetter">
            <p className="grey_text">{props.children.innerHtml}</p>
          </div>

        <div className="blogText grey_text"></div>
            {props.children}
        </div>

        <h4 className="continueText red_text">Continues...</h4>
      </article>
    );

    


}