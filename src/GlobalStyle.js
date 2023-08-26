import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        color: #FFFFFF;
        font-family: "Poppins", sans-serif;
    }

    body {
        overflow-x: hidden;
        background-color: ${props => {return props.$secondaryColor}};
        min-height: 100vh;
    }

    span {
        color: ${props => {return props.$primaryColor}};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[data-autocompleted] {
        background-color: transparent !important;
    }

`

export default GlobalStyle