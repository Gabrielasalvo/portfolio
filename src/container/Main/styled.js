import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;

  background-color: red;
  -webkit-font-smoothing: antialiased;
  /* opacity:0.3 */

`;

export const Name = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 0.29px;
 
`;

export const DivMain = styled.div`
  /* margin-top: 20px;
  margin-left: 20px; */
  margin:0 auto;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  width: 90%;
  background-color: purple;
  padding-left: 50px;
  color: #fff;
  font-weight: lighter;
  font-size: 50px;
  letter-spacing: 0.29px;
  
  @media (max-width: 400px) {
    background: inherit;
    margin:0 auto;
  }

  p:nth-child(2n) {
    font-size: 24px;
  }
  p:nth-child(3n) {
    font-size: 16px;
  }
`;

export const SocialIcons = styled.div `
display:flex;
font-size:33px;
flex-direction:column;
padding: 20px;
margin:0 70vw;


`



