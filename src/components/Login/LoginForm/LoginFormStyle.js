import { styled } from "styled-components";

export const LoginFormContainer = styled.form`
    width: 100vw;
    height: auto;
    max-width: 400px;
    border: 1px solid ${props => {return props.$tertiaryColor}};
    box-shadow: rgba(0, 0, 0, 0.75) 0px -1px 18px 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 20px;

    & .go_to {
        cursor: pointer;
        text-decoration: underline
    }

    & h1 {
        width: 100%;
    }

    & .input_field {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        & input {
            background-color: ${props => {return props.$secondaryColor}} !important; 
            border: none;
            outline: none;
            border-bottom: 1px solid #FFFFFF;

            &:focus {
                border-bottom: 1px solid ${props => {return props.$primaryColor}};
            }
        }
    }

    & .submit {
        width: 200px;
        height: 40px;
        border: none;
        background-color: ${props => {return props.$primaryColor}};
    }
`