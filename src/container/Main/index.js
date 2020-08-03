import React from "react";
import Header from "../../components/Header/";
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
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
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
            <a href="https://github.com/Gabrielasalvo" target="blank">
                <FaGithub />
                </a>
              <a href="https://www.linkedin.com/in/gabriela-salvo1991/" target="blank"><FaLinkedin />
              </a>

             <a href="https://t.me/gabrielasalvo" target="blank"> 
             <FaTelegram /></a>

              <a href="https://api.whatsapp.com/send?phone=5522999440789text=sua%20mensagem" target="blank"> <FaWhatsapp /></a>
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
