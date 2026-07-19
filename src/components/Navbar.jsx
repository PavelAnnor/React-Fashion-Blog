import "../styles/navbar.css"

export default function Navbar({ links,textColor }) {
  const listItems = links.map((l) => {
    return (
      <li key={l.text}>
        <a href={l.href} style = {{"color":textColor}}>
          <u>{l.text}</u>
        </a>
      </li>
    );
  });

  

  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="navbarList flex">{listItems}</ul>
    </nav>
  );
}
