import styled from "styled-components";
import { theme } from "../../Theme";
import photo from "../../assets/img/photo.jpeg";
import portfolio from "../../assets/img/portfolio.jpeg"
import portfolio01 from "../../assets/img/portfolio01.jpeg"


export const Container = styled.div`
  width: 100vw;
  
`;

export const WrapperMain = styled.div`
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
  background-image:url(${portfolio01});
  background-position-x:left;
  /* background-position:cover; */
 
  
  h1{
    margin-top:100px;
   
  }
  
`;

export const Description = styled.div`

  display: flex;
  flex-direction: column;
  background-color: ${theme.dusty};
  -webkit-font-smoothing: antialiased;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  font-weight: lighter;
  font-size: 30px;
  height: -webkit-fill-available;
  /* div:nth-child(2n) {
    width:30vw;
    text-align:center;
    display:flex;
    justify-content:space-evenly;
  } */
  
 
`;

export const StyledPhoto = styled.img`
  z-index: -1;
`;
export const PhotoFilter = styled.div`
  background-color: ${theme.dustyteal};
  display: flex;
`;

export const TextDescription = styled.div `
width: 100vw;
/* margin:0 15vh; */

 `

export const Technologies = styled.div`
display:flex;
font-size: 18px;
font-weight:bold;
/* text-align:center; */

`



// export const DivMain = styled.div`

//   @media (max-width: 400px) {
//     background: inherit;
//     margin:0 auto;
//   }

//   p:nth-child(2n) {
//     font-size: 24px;
//   }
//   p:nth-child(3n) {
//     font-size: 16px;
//   }
// `;

export const Name = styled.div`

margin:150px 200px;
h4{
  font-size:1.2;
  font-weight: lighter;
}
p{
  font-size:18px;
  font-family:"Montserrat-Regular"
 
}
button {
  border-radius: 8px;
    box-shadow: 2px 2px 10px #000;
    padding: 5px 14px;
    color: white;
    background-color: #012940;
    border: none;
    width: -webkit-fit-content;
    width: fit-content;
    outline: none;
    margin: 15px 0px;
    :hover{
      background-color:darkgreen;
    }
}
`

export const SocialIcons = styled.div`
  margin-top:5vh;
  display:flex;
  width: 15vw;
  -webkit-justify-content: space-between;
 
`;

export const PdfButton = styled.button `
background-color: red;
`
