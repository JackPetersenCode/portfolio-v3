import React, {useRef, useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "../components/Resume";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import {GiHamburgerMenu} from 'react-icons/gi';

const PicDiv = styled.div`
    padding: 20px;
`
const TextDiv = styled.div`
    resize: both;
    padding: 20px;
    color: white;
    max-width: 300px;
    font-size: large;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HomeDiv = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    @media screen and (max-width: 768px) {
      margin-right: 5%;
      margin-left: 5%;
    }
`
const SectionDiv = styled.div`
    margin-bottom: 50px; 
    border-radius: 5px;
`
const JackDiv = styled.div`

`
const jackDivOnStyle = () => ({
  fontSize: "118px",
  textShadow: "0 0 21px rgb(238,238,238), 0 0 100px rgb(238,238,238)",
  lineHeight: "90px",
  marginBottom: "20px",
  color: "rgb(238,238,238)",
})
const jackDivOffStyle = {
  fontSize: "118px",
  lineHeight: "90px",
  marginBottom: "20px",
  color: "rgb(238,238,238)",
  
  
}
const redDivOnStyle = () => ({
  textShadow: "0 0 21px rgb(160, 226, 232), 0 0 100px rgb(160, 226, 232)",
  color: "rgb(160, 226, 232)",
  fontSize: "40.5px",
  lineHeight: "35px",
  marginBottom: "20px",

})
const redDivOffStyle = () => ({
  color: "rgb(160, 226, 232)",
  fontSize: "40.5px",
  lineHeight: "35px",
  marginBottom: "20px",

})
const yellowDivOnStyle = () => ({
  textShadow: "0 0 21px rgb(50, 136, 147), 0 0 100px rgb(50, 136, 147)",
  color: "rgb(50, 136, 147)",
  lineHeight: "25px",
  marginBottom: "3px"


})
const yellowDivOffStyle = () => ({
  color: "rgb(50, 136, 147)",
  lineHeight: "25px",
  marginBottom: "3px"


})

const IntroContainer = styled.div`
    display: flex;
    align-items: center;
`
const InnerContainer = styled.div`
    display: flex;
    text-align: left;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
`
const SwitchDiv = styled.div`
    text-align: center;
    margin-left: 50px;
    @media screen and (max-width: 768px) {
      margin-left: 5%;
      padding-bottom: 20px;
      margin-right: 5%;
    }
`
const SwitchImg = styled.img`
    max-height: 100px;

`
const BigFlex = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10%;
      @media screen and (max-width: 768px) {
        margin: 5%;
      }
`
const ServiceDiv = styled.div`
    width: 100%;
    margin-right: 20px;
`
const serviceOnStyle = () => ({
    color: "white",
})
const serviceOffStyle = () => ({
  color: "rgb(180,180,180)",
})

const VertFlex = styled.div`
    display: flex;
    flex-direction: column;
`
const TitleFlex = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      align-items: end;
    }
`
const FooterDiv = styled.div`
    
    text-align: center;
    padding: 20px;
    `

const Home = () => {

    const [switchedOn, setSwitchedon] = useState(false);
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const handleSwitch = (e) => {
      setSwitchedon(!switchedOn);
    } 

    return (
        <div className="font-family">
            <div className="bg"></div>
            <Navbar about={about} projects={projects} contact={contact} />
            <BigFlex>
              <div>
                <TitleFlex>
                  <VertFlex>
                    <div className={switchedOn ? "jackDivOnStyle" : "jackDivOffStyle"}>Jack Petersen</div>
                    <div className={switchedOn ? "redDivOnStyle" : "redDivOffStyle"}>FULL-STACK SOFTWARE DEVELOPER</div>
                  </VertFlex>
                  <SwitchDiv onClick={handleSwitch}>
                      {switchedOn ? <SwitchImg src="/on2.png" /> : <SwitchImg src="/off4.png"/>}
                  </SwitchDiv>
                </TitleFlex>
                <IntroContainer>
                  <InnerContainer>
                    <ServiceDiv>
                      <div className={switchedOn ? "yellowDivOnStyle" : "yellowDivOffStyle"}>UX/UI Design</div>
                      <div className={switchedOn ? "serviceOnStyle" : "serviceOffStyle"}>
                        Natural, user-centric designs that prioritize simplicity, consistency, accessibility, and seamless interactions to enhance user satisfaction and overall usability.
                      </div>
                    </ServiceDiv>
                    <ServiceDiv>
                      <div className={switchedOn ? "yellowDivOnStyle" : "yellowDivOffStyle"}>API Development</div>
                      <div className={switchedOn ? "serviceOnStyle" : "serviceOffStyle"}>
                        Intuitive, consistent, and well-documented methods for interacting with the underlying system, bringing your application's data to the user.
                      </div>
                    </ServiceDiv>
                    <ServiceDiv>
                      <div className={switchedOn ? "yellowDivOnStyle" : "yellowDivOffStyle"}>Database Solutions</div>
                      <div className={switchedOn ? "serviceOnStyle" : "serviceOffStyle"}>
                        Ensured data integrity through implementation of proper security measures, regular data back-ups, optimized performance, maintainance and organization of scalable database structures.
                      </div>
                    </ServiceDiv>
                    <ServiceDiv>
                      <div className={switchedOn ? "yellowDivOnStyle" : "yellowDivOffStyle"}>Cloud Deployment</div>
                      <div className={switchedOn ? "serviceOnStyle" : "serviceOffStyle"}>
                        Containerization, leveraging of scalable infrastructure, implementation of CI/CD pipelines, and monitoring of system performance to ensure reliability and scalability.
                      </div>
                    </ServiceDiv>
                  </InnerContainer>
                </IntroContainer>
              </div>

            </BigFlex>
            <HomeDiv>
              <SectionDiv ref={about}>
                <About />
              </SectionDiv>
              <SectionDiv ref={projects}>
                <Projects />
              </SectionDiv>
              <div ref={contact}>
                <Contact />
              </div>
              <FooterDiv>
                <Footer />
              </FooterDiv>
            </HomeDiv>
        </div>
    )
}

export default Home;