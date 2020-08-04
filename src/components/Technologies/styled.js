import styled from 'styled-components'
import {theme} from '../../Theme/index'

export const Container = styled.div`
display:flex;
justify-content:space-between;
background-color: ${theme.dustyteal};
opacity: 0.9;
padding: 3vw;

color:white;
`

export const Wrapper = styled.div `

display:grid;
column-gap:20vw;
grid-template-columns: 1fr 1fr;
grid-gap:5vh;
width: 100vw;
text-align:center;
margin-bottom:5vh;

@media (max-width: 800px ) {
font-size:1.4em;
display:flex;
flex-direction:column;
word-break: break-all;

}


`

export const Text = styled.div `
grid-column:1/3;
font-weight:lighter;
grid-auto-rows: ;
text-transform:uppercase;
font-size:2em;

`

export const Description = styled.div `
max-width:30vw;
margin: 0 auto;
@media(max-width: 850px) {
    max-width:70vw;

}

p{
    text-align:justify;
    font-size: 1em;

}

@media (max-width: 700px ) {
display:flex;
flex-direction:column;
p{
    text-align:justify;
    font-size: 1.2em;
    width:100%;
    word-break: break-all;

}

}

`