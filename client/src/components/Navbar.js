import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from './ScrollToTop';
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: black;
`
const LogoStyle = styled.div`
    padding: 20px;
    width: 100%;
`
const StyledUl = styled.ul`
    display: flex;   
`
const StyledLi = styled.li`
    margin-left: 20px;
` 
const Burger = styled.div`
    display: none;
    color: rgb(160, 226, 232);
    width: 100%;
    text-align: right;
    @media screen and (max-width: 768px) {
      display: block;
    }


`

const Navbar = ({about, projects, contact}) => {
  
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <NavContainer>
          <ScrollToTop />
          <LogoStyle>
              <Logo />
          </LogoStyle>
          <div className="nav-burger">
            <GiHamburgerMenu size={60} onClick={() => setIsNavExpanded(!isNavExpanded)} />
          </div>
          <div className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
              <div className="nav-item" onClick={() => scrollToSection(about)}>
                    About
              </div>
              <div className="nav-item" onClick={() => scrollToSection(projects)}>
                    Projects
              </div>
              <div className="nav-item" onClick={() => scrollToSection(contact)}>
                    Contact
              </div>
              <div className="nav-item" onClick={() => scrollToSection(contact)}>
                <a className="red-yellow" href="https://drive.google.com/file/d/1Pgf6ysXMLEdjpb2fAEdQ3o0Sjo7jibTU/view?usp=sharing">Resume</a>
              </div>
          </div>
        </NavContainer>
    )
}

export default Navbar;