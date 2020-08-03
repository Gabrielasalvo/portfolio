import styled from "styled-components";
import React from "react";
import { theme } from "../../Theme";

export const HeaderStyle = styled.div`
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  height: 65px;
  background-color: transparent;
 
  
`;
export const NavStyle = styled.div`
  display: flex;
  background-color: ${theme.twilight};

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  opacity: 0.7;
    position: fixed;
    width: inherit;
    
  @media (max-width: 400px) {
    justify-content: center;
    font-size: 18px;
  }
`;

export const Name = styled.a`
  color: #ffff;
  font-family: Montserrat-Bold;
  letter-spacing: -1px;
  font-size: 20px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  
 
 }

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
