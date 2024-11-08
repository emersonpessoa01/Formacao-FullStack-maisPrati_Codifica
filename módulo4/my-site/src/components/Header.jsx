import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}
