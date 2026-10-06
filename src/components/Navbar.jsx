import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">نور | Noor</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/quran">Quran</Link>
        <Link to="/hadith">Hadith</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;