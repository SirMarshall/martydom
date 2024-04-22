import { useLocation } from "react-router-dom";
import "./index.css";

export default function Navbar({ title }) {
  const location = useLocation();
  const showArrow = !location.pathname.endsWith("/articles");

  return (
    <div id="navbar" className="d-flex justify-content-between align-items-center col-12">
      <div>
        <a href="../" className={`back-button ${!showArrow ? 'hidden' : ''}`}>
          <h1>{"<---"}</h1>
        </a>
      </div>
      <h1>{title}</h1>
      <div></div>
    </div>
  );
}