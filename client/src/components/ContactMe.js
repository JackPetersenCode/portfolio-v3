import React, { useRef } from 'react';
import styled from 'styled-components';


const StyledContactForm = styled.div`
    width: 500px;

    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: large;

        input {
            width: 100%;
            height: 35px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(6, 206, 158, 1);
            }
        }

        textarea {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100px;
            min-height: 100px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1)
            }
        }

        label {
            margin-top: 1rem;
        }
        
        input[type="submit"] {
            margin-top: 2rem;
            cursor: pointer;
            background: rgb(249, 185, 14);
            color: white;
            border: none;
        }
    }
`

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('send the form')
  };

  return (
    <StyledContactForm>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </StyledContactForm>
  );
};

export default ContactMe;