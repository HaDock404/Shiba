import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        display: flex;
        flex-direction column;
        width: 100%;
        height: 200vh;
        max-width: 100%;
        overflow-x: hidden;
    }
    body::-webkit-scrollbar {
        background: rgba(255, 0, 153, 0);
        width: 10px;
      }
    body::-webkit-scrollbar-track {
        background: rgba(255, 0, 153, 0);
    }
    body::-webkit-scrollbar-thumb {
        background: #FF0099;
        border-radius: 10px;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle