import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
            {/* <img src="https://cdn-icons.flaticon.com/png/512/3541/premium/3541180.png?token=exp=1641413231~hmac=d8344a1444cdcff5096e11e03e7e93a2"/> */}
            <img src="https://cdn-icons.flaticon.com/png/512/5342/premium/5342835.png?token=exp=1641414200~hmac=25a6b758c3719abbcfc6051094e2da88"/>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/753/753352.png"/> */}
            {/* <img src="https://img.icons8.com/nolan/344/github.png"/> */}
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1cIySlkA3gurn8s36mWSZ_kvqyQkisH-p/view?usp=sharing"
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
