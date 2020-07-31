import React from "react";
import { Container, DivMain, Name, SocialIcons } from "./styled";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function Main() {
  return (
    <Container>
      <DivMain>
        <div>
          <Name>Oi, eu sou a Gabriela</Name>
          <p>Desenvolvedora FullStack</p>

          <p>
            Apaixonada por desenvolvimento e jogadora de videogame nas horas
            vagas
          </p>
        </div>
      </DivMain>

      <SocialIcons>
        <FaGithub />
        <FaLinkedin />
        <FaTelegram />
      </SocialIcons>
      
    </Container>
  );
}

export default Main;
