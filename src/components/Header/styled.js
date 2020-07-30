import styled from "styled-components";
import React from "react";
import { theme } from "../../Theme";

export const HeaderStyle = styled.div`
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  height: 60px;
  background-color: rgba(77, 138, 124, 0.5);
`;
export const NavStyle = styled.div`
  display: flex;
  background-color: ${theme.twilight};
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  
 
`;

export const Name = styled.a `

    color: #ffff;
    font-family:Montserrat-Bold;
    letter-spacing:-1px;
    font-size:20px;
    font-weight:bold;
    -webkit-font-smoothing: antialiased;
    
`

export const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    padding: 5px;
   
    a {
        color: #ffff;
         -webkit-font-smoothing: antialiased;
    }

  }
  
`;
export const SpacingDiv = styled.div`
  height: inherit;
  width: 30%;

  @media (max-width: 400px) {
    display: none;
  }
`;
