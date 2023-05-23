import React, { useState } from "react";
import portfolio from "../apis/portfolio";
import InputField from "./InputField";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import styled from "styled-components";
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: 'rgb(0,0,0)',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const TextDiv = styled.div`
    padding-top: 20px;
    width: 100%;
`
const MessageDiv = styled.div`
    padding-top: 20px;
    width: 100%;
`
const StyledButton = styled.button`
    width: 100%;
    border: none;
    margin-top: 20px;
    padding: 9px;
    border-radius: 5px;
    color: white;
    background-color: rgb(50, 136, 147);
    &:hover {
        color: rgb(0, 255, 183);
    }
`
function ContactForm() {

    const height = 100

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function submitEmail(e) {
        e.preventDefault();
        portfolio({
            method: "POST", 
            url:"/api/sendEmail", 
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        }).then((response) => {
            console.log(response.data)
            if (response.data === 'email sent') {
                alert("Message Sent."); 
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    function resetForm() {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }



    return (
        <div>
            <TextDiv>
                <ThemeProvider theme={theme}>
                  <TextField 
                    fullWidth
                    id="filled-basic"
                    onChange={(e) => setName(e.target.value)}
                    variant="filled"
                    label="Name"
                    color="primary"
                    style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '5px'}}
                    value={name}
                  />
                </ThemeProvider>
            </TextDiv>
            <TextDiv>
                <ThemeProvider theme={theme}>
                  <TextField 
                    fullWidth
                    id="filled-basic"
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    label="Email"
                    color="primary"

                    style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '5px'}}
                    value={email}
                  />
                </ThemeProvider>
            </TextDiv>
            <TextDiv>
                <ThemeProvider theme={theme}>
                  <TextField 
                    fullWidth
                    id="filled-basic"
                    onChange={(e) => setSubject(e.target.value)}
                    variant="filled"
                    color="primary"

                    label="Subject"
                    style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '5px'}}
                    value={subject}
                  />
                </ThemeProvider>
            </TextDiv>
            <TextDiv>
                <ThemeProvider theme={theme}>
                  <TextField 
                    fullWidth
                    id="filled-basic"
                    onChange={(e) => setMessage(e.target.value)}
                    variant="filled"
                    label="Message"
                    color="primary"
                    style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '5px'}}
                    value={message}
                    multiline
                      /* styles the input component */
                    InputProps={{
                        style: {
                          height,
                          padding: '0 14px',
                        },
                    }}
                  />
                </ThemeProvider>
            </TextDiv>
            <StyledButton onClick={submitEmail} >Send</StyledButton>
        </div>

    );
}

export default ContactForm;