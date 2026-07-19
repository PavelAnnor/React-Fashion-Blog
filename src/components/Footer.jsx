import "../styles/footer.css"
export default function Footer(props){

    return (
      <footer>
        {props.children}
        <p className="grey_text"> &copy; 2013 Valet Industries, Inc</p>
      </footer>
    );

}