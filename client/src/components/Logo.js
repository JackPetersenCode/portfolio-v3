import React from "react";
import styled from "styled-components";

const ParentDiv = styled.div`
    height: 80px;
    width: 80px;
`

const Logo = () => {

    return (
        <ParentDiv>
        
          <svg viewBox="0 0 100 100">
            <path className="path" 
              stroke="rgb(160, 226, 232)" strokeWidth="10" fill="none"
              d="M5 65 C5, 85 25, 85 25, 85 L25, 85 
                  C45, 85 45, 65 45, 65 L45, 5 L65, 5 C85, 5 85, 25 85, 25
                  L85, 25 C85, 45 65, 45 65, 45 L45, 45" />
            
            <path className="path2" 
              stroke="rgb(50, 136, 147)" strokeWidth="10" fill="none"
              d="M15 65 C15, 85 35, 85 35, 85 L35, 85 
                  C55, 85 55, 65 55, 65 L55, 5 L75, 5 C95, 5 95, 25 95, 25
                  L95, 25 C95, 45 75, 45 75, 45 L55, 45" />
          </svg>
        </ParentDiv>
    )
}

export default Logo;