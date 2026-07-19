
import "../styles/header.css"
import "../styles/util.css"
export default function Header(props){


    return (
      <header>
        <h1 className="title red_text">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
        {props.children}
      </header>
    );
}