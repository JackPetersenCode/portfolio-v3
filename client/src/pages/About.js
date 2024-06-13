import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const PicDiv = styled.div`
    display: flex;
    justify-content: center;    
    margin-top: 10px;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 5s;
    -moz-animation: fadeIn 5s;
    -o-animation: fadeIn 5s;
    -ms-animation: fadeIn 5s;
    
    `
const StyledSpan = styled.div`
    color: rgb(160, 226, 232);
    border: solid 2px rgb(50, 136, 147);
    margin: 5px;
    padding: 5px;
    font-size: small;
    border-radius: 5px;
    &:hover {
        color: rgb(238,238,238);
        background-color: rgba(50, 136, 147, .5);
        border: solid 2px rgb(160, 226, 232);
    }
`
const PicContainer = styled.div`
    width: 100%;
`

/**
 *         <div style={{ 
          height: '100vh',
          backgroundImage: `url(tropical5.jpg)`,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
 */
const TechSkillsParent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
`
const Line = styled.div`
    height: 3px;
    background-image: linear-gradient(to right, rgb(238,238,238), rgb(8, 8, 8));
`
const StyledH1 = styled.h1`
    color: rgb(238,238,238);
`
const SkillsDivTitle = styled.div`
    font-size: small;
    margin-top: 10px;
    margin-right: 10px;
    text-align: right;
    min-width: 100px;
    white-space: nowrap;
    color: rgb(210,210,210);
    @media screen and (max-width: 768px) {
        min-width: 70px;
    }
`
const SkillsContainer = styled.div`
    margin-left: 20px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`
const InnerContainer = styled.div`
    display: flex;
    
`

const About = () => {

    return (
        <div>
              <StyledH1>About Me</StyledH1>
              <Line></Line> 
              <div className="parent-div-about">
                <div className="text-div">                  
                    Jack Petersen here, a self-taught software developer with a professional track record of creativity and success in multiple industries. As a career bartender, I did everything from managing a high-volume sports bar to managing the bar program at the Five Easy Pieces camp at the Bohemian Grove; one of the most exclusive, elite clubs in the world. As a self-taught musician, I was signed by Tammy Miranda Music Productions in Austin, Tx, where I booked weekly residencies at the historical Maggie Mae's and Recess Arcade Bar on Austin's famous Sixth Street. I established consistent work with various venues across Texas with a solo “loop pedal” act averaging 4-5 performances a week and frequently substituted as a bassist or guitarist for the production company.
                    <br></br>
                    <br></br> 
                    As a sports fan, I couldn't wait to apply my new-found technical knowledge to the world of basketball analytics. My first portfolio project, <a href="https://www.hoopscoop.org">The Hoop Scoop</a>, includes a prop bet optimizer tool, a fantasy basketball mini game, advanced sortable/filterable statistics, shot chart visualizations, and a predictions algorithm with a 63.66% success rate across eight seasons of data. My dog and I are also big frisbee-golfers. She's an eight-year-old Australian Cattle Dog with a big personality named 'Mama'. 
                    <br></br>
                    <br></br>
                    Shoot me an email or call anytime! I would love to chat about the value I can bring to your company/organization.  
                </div>
                <PicContainer>
                  <PicDiv>
                      <img className="profile-pic" src="jack5.png" />
                  </PicDiv>
                  
                  <SkillsContainer>
                    <InnerContainer>
                      <SkillsDivTitle>
                          Languages:
                      </SkillsDivTitle>
                      <TechSkillsParent>
                          <StyledSpan>JavaScript</StyledSpan>
                          <StyledSpan>TypeScript</StyledSpan>                          
                          <StyledSpan>Python</StyledSpan>
                          <StyledSpan>C#</StyledSpan>
                      </TechSkillsParent>
                    </InnerContainer>

                    <InnerContainer>
                    <SkillsDivTitle>
                        Front-end:
                    </SkillsDivTitle>
                      <TechSkillsParent>
                        <StyledSpan>HTML5</StyledSpan>
                        <StyledSpan>CSS3</StyledSpan>
                        <StyledSpan>Styled Components</StyledSpan>
                        <StyledSpan>Bootstrap</StyledSpan>
                        <StyledSpan>React.js</StyledSpan>
                        <StyledSpan>React Testing/Jest</StyledSpan>
                        <StyledSpan>Third-party API</StyledSpan>
                      </TechSkillsParent>
                    </InnerContainer>

                    <InnerContainer>
                      <SkillsDivTitle>
                          Back-end:
                      </SkillsDivTitle>
                      <TechSkillsParent>
                        <StyledSpan>.NET</StyledSpan>
                        <StyledSpan>Flask</StyledSpan>
                        <StyledSpan>Express.js</StyledSpan>
                        <StyledSpan>Node.js</StyledSpan>
                        <StyledSpan>SQL</StyledSpan>
                        <StyledSpan>Swagger</StyledSpan>
                        <StyledSpan>API Design</StyledSpan>
                        <StyledSpan>Mocha/Chai</StyledSpan>
                        <StyledSpan>Django</StyledSpan>
                        <StyledSpan>Redis</StyledSpan>
                        <StyledSpan>Postman</StyledSpan>
                      </TechSkillsParent>
                    </InnerContainer>

                    <InnerContainer>
                      <SkillsDivTitle>
                          Cloud:
                      </SkillsDivTitle>
                      <TechSkillsParent>
                          <StyledSpan>AWS</StyledSpan>
                          <StyledSpan>Heroku</StyledSpan>
                      </TechSkillsParent>
                    </InnerContainer>

                  </SkillsContainer>
                </PicContainer>
                
              </div>
            
        </div>
    )
}

export default About;