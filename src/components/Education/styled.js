import styled from 'styled-components'
import { theme } from '../../Theme/'


export const Container = styled.div`
background-color: ${theme.darkgreen};

color: #FFF;
    h1 {
        text-align:center;
        font-weight:lighter;
        font-size:2.5em;
        margin-top: 0;
        padding-top: 8vh;
    }

`
export const Wrapper = styled.div `
display:grid;
grid-template-columns: 1fr 1fr;
text-align:center;
text-transform: uppercase;
p {
    margin: 0 auto;
    width: 35vw;
    text-align: justify;
}
@media (max-width: 800px ) {
display:flex;
flex-direction:column;
word-break: break-all;
margin:0 auto;
p{
    width:70vw;
    font-size:1.3em;
}

}


  
`