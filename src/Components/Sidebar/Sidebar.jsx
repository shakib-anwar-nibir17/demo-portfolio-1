import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo">
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="logo" />
      </Link>

      <nav>
        <NavLink exact={true} activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact={true}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact={true}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nibir17shakib/"
          >
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shakib-anwar-nibir17"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
