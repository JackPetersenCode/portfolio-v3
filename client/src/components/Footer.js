import React from 'react';
import { FaCopyright, FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const gitStyle = () => ({
    padding: "10px",
})

const copySpan = () => ({
    color: "rgb(210,210,210)",
})
const Footer = () => {
    return (
        <div>
            <Link to="https://www.linkedin.com/in/JackPetersenCode" className="linkStyle">
                <TiSocialLinkedinCircular size={80}/>
            </Link>
            <Link to="https://www.github.com/JackPetersenCode" className="linkStyle">
                <FaGithub size={70} style={{padding: "5px"}} />
            </Link>
            <div>
                <span style={copySpan()}>&copy; 2023 | JackPetersenCode</span>
            </div>
        </div>
    )
}

export default Footer;