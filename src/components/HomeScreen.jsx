import styled from "styled-components"

import { DisplayElement } from './displayElement';

const CardHomeScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFB6C7;    
`

function HomeScreen() {

    DisplayElement()
    return (
        <CardHomeScreen id="HomeScreebox">

        </CardHomeScreen>
    )
}

export default HomeScreen