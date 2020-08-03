import styled from 'styled-components'
import {theme} from '../../Theme/index'

export const Container = styled.div`
display:flex;
justify-content:space-between;
background-color: ${theme.lightgreen};
padding: 3vw;
`

export const Wrapper = styled.div `

display:grid;
column-gap:20vw;
/* justify-self:center; */
grid-template-columns: 1fr 1fr;
/* grid-template-rows:1fr; */
grid-gap:5vh;
width: 100vw;
text-align:center;
color: white;

`

export const Text = styled.div `
grid-column:1/3;
font-weight:lighter;
grid-auto-rows: ;
text-transform:uppercase;
font-size:2em;

`

export const Description = styled.div `
width:30vw;
margin: 0 auto;

p{
    text-align:justify;
    font-size: 1em;

}

`