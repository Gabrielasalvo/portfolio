import styled from "styled-components";
import { theme } from "../../Theme";
import photo from "../../assets/img/photo.jpeg";
import portfolio from "../../assets/img/portfolio.jpeg";
import portfolio01 from "../../assets/img/portfolio01.jpeg";


export const Container = styled.div`
  width: 100vw;
`;

export const WrapperMain = styled.div`
  background-image: url(${portfolio01});
  background-position-x: left;

  h1 {
    margin-top: 20vh;
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
 
     @media (max-width: 980px) {
     
      align-items: center;
    justify-content: center

     
   } 
   @media (max-width: 500px) {
   h1 {
     display:flex;
     font-size:1.8em;
     align-self:center;
     margin-top:0;
     
   }

  
  }
  
  }
 
`;

export const StyledPhoto = styled.img`
  z-index: -1;
`;
export const PhotoFilter = styled.div`
  background-color: ${theme.dustyteal};
  display: flex;
`;

export const TextDescription = styled.div`
  width: 100vw;
  /* margin:0 15vh; */
`;

export const Technologies = styled.div`
  display: flex;
  font-size: 4em;
  font-weight: bold;
  @media (max-width: 980px) {
    font-size: 1em;
  }
  /* text-align:center; */
`;

export const Name = styled.div`
  margin: 150px 200px;
  h4 {
    font-size: 1.2;
    font-weight: lighter;

    @media (max-width: 980px) {
      margin-top: -34px;
    }
  }
  p {
    font-size: 0.6em;
    font-family: "Montserrat-Regular";
  }
  
`;

export const SocialIcons = styled.div`
  margin-top: 5vh;
  display: flex;
  width: 15vw;
  -webkit-justify-content: space-between;

  @media (max-width: 1000px) {
    display: flex;
    width:30vh;

  
  }


`;
export const Button = styled.button `

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
:hover {
  background-color: darkgreen;
}

@media (max-width: 800px) {
  width:20vw;
  height: 50px;
 
  font-size: 0.6em;
  
 ;
}

`
  
  

