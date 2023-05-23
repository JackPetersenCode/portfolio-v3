import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { HiOutlineMail } from "react-icons/hi";


const FlexChild = styled.div`
    width: 100%;
    padding: 20px;
    margin: 20px;

    background-color: rgb(180,180,180);
`
const FlexText = styled.div`
    padding: 20px;
    background-color: rgb(15, 15, 15);
    box-shadow: 0 0 10px rgb(15, 15, 15), 0 0 10px rgb(15, 15, 15);
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    border-radius: 5px; 
    font-size: x-large;
`
const TitleDiv = styled.div`
    font-size: x-large;
    font-weight: 600;
    color: rgb(238,238,238);
`
const Line = styled.div`
    height: 3px;
    background-image: linear-gradient(to right, rgb(238,238,238), rgb(15,15,15));
`
const MailDiv = styled.span`
    margin-right: 5px;
`

const Contact = () => {

    return (
        <>
            <FlexText>
                <TitleDiv>
                    <MailDiv>
                        <HiOutlineMail />
                    </MailDiv>
                    Let's Connect                                       
                    <br></br>
                    <Line></Line>                    
                </TitleDiv>
                <ContactForm />
            </FlexText>
        </>
    )
}

export default Contact;