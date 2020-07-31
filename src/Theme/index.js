import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    padding:0;
    font-family:Montserrat-Bold;
    -webkit-font-smoothing: antialiased
  
  }
  * {
    box-sizing: border-box;
    
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }
  ul{
    list-style-type:none;
    padding:0;
    margin:0
  }
`;

export const theme = {
    dusty: "rgba(77, 138, 124, 0.46)",
    twilight: "rgba(10, 73, 88, 0.67)",
    greentea: "#4d8a7c",
    darkgreen: "#0a4958",
    orange: "#f2b33e",
    darkblue: "#012940",
    lightgreen:"#c5db94",
    lightyellow:"#fff38b",
    oldrose: "#feb681"

}