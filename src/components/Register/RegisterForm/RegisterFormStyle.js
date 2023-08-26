import { styled } from "styled-components";

export const RegisterFormContainer = styled.form`
    width: 100vw;
    height: auto;
    max-width: 400px;
    padding: 20px;
    border: 1px solid ${props => {return props.$tertiaryColor}};
    box-shadow: rgba(0, 0, 0, 0.75) 0px -1px 18px 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    & .go_to {
        cursor: pointer;
        text-decoration: underline
    }

    & h1 {
        width: 100%;
    }

    & .form_error {
        color: ${props => {return props.$primaryColor}};
        font-size: 0.7rem;
        margin-top: 10px;
    }

    & .full_name {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
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

    @media screen and (max-width: 450px) {

        & .full_name {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        width: 100%;
        max-width: none;
        height: calc(100vh - 80px);

        justify-content: center;
        box-shadow: none;
    }

    @media screen and (max-height: 700px) {
        gap: 20px;

        & .full_name {
            gap: 20px;
        }
    } 
`