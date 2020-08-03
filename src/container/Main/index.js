import React from "react";
import Header from "../../components//Header/";
import Fragment from "react";
import  curriculo  from '../../documents/gabriela_salvo.pdf'

import {
  Container,
  DivMain,
  Name,
  SocialIcons,
  WrapperMain,
  StyledPhoto,
  PhotoFilter,
  Description,
  Technologies,
  TextDescription,
  PdfButton
} from "./styled";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import photo from "../../assets/img/photo.jpeg";

function Main() {
  const knowledges = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Node",
    "React",
    "Redux",
    "AWS",
  ];
  return (
    <Container>
      <Header />
      <WrapperMain>
        <Description>
          <Name>
            <h1>Eu sou a Gabriela</h1>
            <h4>Desenvolvedora FullStack</h4>
           
            <p>HTML | CSS| JavaScript| Node| React | Redux | SQL| AWS</p>
          
          <SocialIcons>
            <FaGithub />
              <FaTelegram />
              <FaLinkedin />
              </SocialIcons>
 
          <a href={curriculo} download="gabriela_salvo.pdf"><button>CV  em PDF</button></a>
          </Name>
          
        </Description>
        <PhotoFilter />
      </WrapperMain>
    </Container>
  );
}

export default Main;
