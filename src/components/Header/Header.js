import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../../Assets/logo.png";

const ResumeLink = "https://drive.google.com/file/d/1HFJu2A_GRwC5x5twH6y7kUzT2ProxQbs/view?usp=sharing";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to='/' >
            <img src={logo} alt="Logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="skills" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href={ResumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
