import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";


// styles

import "./Navbar.css";
// components
import Searchbar from "./searchbar";

export default function Navbar() {
 const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav >
        <Link to="/" className="brand">
          <h1> Cooking Yidu </h1>
        </Link>
        <Searchbar />
        <Link to="/Create"> Create Recipe </Link>
      </nav>
    </div>
  );
}
