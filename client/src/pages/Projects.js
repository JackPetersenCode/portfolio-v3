import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaHtml5, FaNodeJs, FaReact, FaAws} from "react-icons/fa";
import {SiCss3, SiJavascript, SiPostgresql} from "react-icons/si"

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 5s;
    -moz-animation: fadeIn 5s;
    -o-animation: fadeIn 5s;
    -ms-animation: fadeIn 5s;
`
const StyledVideo = styled.video`
    width: 100%;
`
const VideoDiv = styled.div`
    width: 100%;

`
const TextDiv = styled.div`
    width: 100%;
    overflow-y: auto;
    color: rgb(210,210,210);
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
      padding-left: 0px;
      padding-right: 10px;
      padding-top: 10px;
    }
`
const IconDiv = styled.div`
    color: rgb(50, 136, 147);
    padding: 10px;
    &:hover {
      color: rgb(238,238,238);
    }
`
const Line = styled.div`
    height: 3px;
    background-image: linear-gradient(to right, rgb(238,238,238), rgb(8, 8, 8));
`
const ProjectsHeader = styled.h1`
    color: white;
`
const ProjectsDiv =  styled.div`
`
const StyledH3 = styled.h3`
    color: rgb(238,238,238);
`

const Projects = () => {

    return (
        <ProjectsDiv>
            <ProjectsHeader>Projects</ProjectsHeader>
            <Line></Line>                    
            <br></br>
            <div className="video-container">
                <VideoDiv>
                  <StyledVideo autoPlay loop muted id='video'>
                      <source src='thehoopscoop2.mp4' type='video/mp4' />
                  </StyledVideo>
                </VideoDiv>
                <TextDiv>
                  <StyledH3>The Hoop Scoop</StyledH3>
                  I created my own NBA database/API, secured routes with passport.js, and documented my API with swagger: https://www.thehoopscoop.org/api-docs. It features a fantasy basketball mini-game, interactive stat tables, shot-chart visualizations with d3.js, and a predictions and odds page featuring a prediction algorithm with a 62.52% success rate, upcoming games and predictions with moneyline odds, and historical games with expected scores, actual scores and moneyline odds.<br></br>
                  <br></br>
                  Advanced Stats:<br></br>
                  - View all players' traditional, miscellaneous, and hustle stats for the last 8 seasons. 'All players' stat tables are sortable, click on column header to sort ascending or descending. Search historical players in the search bar and view career stat lines.
                  <br></br>
                  <br></br>
  
                  Fantasy Mini Game:<br></br>
                  - Assigned every player from chosen season (current season is default) a dollar value, $1, $2, $3, $4, $5, $6 or $7, seven being the most valuable players. Used the total of the season averages of pts, reb, and ast to determine dollar amount, and created 7 dropdown menus containing all players in the NBA organized by dollar amount assigned.<br></br> 
                  - User, with stat tables at bottom of screen for reference, selects 10 players for his or her team, while not going over the $35 salary cap limit. User roster is displayed dynamically as a drag and drop component, top 5 rows are starters, bottom 5 rows are bench players.<br></br>
                  - Once the user has finished drafting a 10-man roster and the 'Lock in Roster' button is clicked, the computer takes its turn. An array of 10 random integers, each within the range of 1 to 7, and adding up to exactly 35 is created. The integers in the array represent random dollar amounts for players. For each integer in the array, a random player is selected from the corresponding player drop down menu; if the integer is 2, then a random player will be chosen from the $2 player dropdown set, etc. Top 5-dollar value players are set as starters.<br></br>
                  - Once the "Lock in Roster" button is hit, the computer drafts its players, and the game is simulated using a multitude of stats (mostly efficiency or per-minute based). The stats are split into four video-game-like categories and displayed to the user to inform them of the strengths and weaknesses of his or her roster.<br></br>  
                  - Make sure to add your score to the high score list!<br></br><br></br>
  
                  Shot Charts: <br></br>
                  - User selects any player on any team in the given 8 seasons from the drop-down menus, and season/game shot charts are displayed. Once the player is selected, the ‘games’ drop-down menu is activated, and the user has the option to view a shot chart from any specific game the player played in. Made shots are green, missed shots are blue. <br></br>
                  <br></br>
                  
                  Predictions:<br></br>
                  - Displays historical expected/actual results and upcoming predictions and odds for every game in the last 7 seasons. Algorithm success rate is 62.52%.
                </TextDiv>
            </div>
            <LinkContainer>
              <div className="project-links">
                  <a href="https://www.thehoopscoop.org">Live</a>
              </div>
              <div className="project-links">
                  <a href="https://www.github.com/JackPetersenCode/NBA">Code</a>
              </div>
            </LinkContainer>
            <LinkContainer>
              <IconDiv>
                <FaReact size={60}/>
              </IconDiv>
              <IconDiv>
                <SiJavascript size={60}/>
              </IconDiv>
              <IconDiv>
                <FaHtml5 size={60}/>
              </IconDiv>
              <IconDiv>
                <SiCss3 size={60}/>
              </IconDiv>
              <IconDiv>
                <FaNodeJs size={60}/>
              </IconDiv>
              <IconDiv>
                <SiPostgresql size={60}/>
              </IconDiv>
              <IconDiv>
                <FaAws size={60} />
              </IconDiv>
            </LinkContainer>
            <br></br>
            <br></br>
            <br></br>
            <div className="video-container">
                <VideoDiv>
                  <StyledVideo autoPlay loop muted id='video'>
                      <source src='kudos6.mp4' type='video/mp4' />
                  </StyledVideo>
                </VideoDiv>

                <TextDiv>
                  <h3>Kudos To You</h3>
                  www.kudostoyou.net is my new full-stack portfolio project modeled after Yelp.com. KudosToYou features near identical functionality/UI as Yelp, but you can only leave positive reviews. Businesses are rated based on total number of reviews:<br></br>
                  <br></br>
                  Stage 1: "New to Kudos" (0-5 reviews)
                  <br></br>
                  Stage 2: "Kudos Pro" (5-20 reviews)
                  <br></br>
                  Stage 3: "Kudo-tastic" (20-50 reviews)
                  <br></br>
                  Stage 4: "Kudo Masters" (50+ reviews)
                  <br></br>
                  (all subject to change)
                  <br></br>
                  <br></br>
                  For KudosToYou, I decided to expand my front-end skill set and feature a rich UX/UI design while still utilizing all the same backend technologies. New on this app, I was able to secure both the backend and the user's profile session on the front end with passport.js. I also discovered the powerful multer middleware that allows users to upload images to my AWS instance.
                </TextDiv>
            </div>
            <LinkContainer>
              <div className="project-links">
                  <a href="https://www.kudostoyou.net">Live</a>
              </div>
              <div className="project-links">
                  <a href="https://www.github.com/JackPetersenCode/express-app">Code</a>
              </div>
            </LinkContainer>
            <LinkContainer>
              <IconDiv>
                <FaReact size={60}/>
              </IconDiv>
              <IconDiv>
                <SiJavascript size={60}/>
              </IconDiv>
              <IconDiv>
                <FaHtml5 size={60}/>
              </IconDiv>
              <IconDiv>
                <SiCss3 size={60}/>
              </IconDiv>
              <IconDiv>
                <FaNodeJs size={60}/>
              </IconDiv>
              <IconDiv>
                <SiPostgresql size={60}/>
              </IconDiv>
              <IconDiv>
                <FaAws size={60} />
              </IconDiv>
            </LinkContainer>
        </ProjectsDiv>
    )
}

export default Projects;