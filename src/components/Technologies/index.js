import React from "react";
import { Container, Wrapper, Text, Description } from "./styled";

function Technologies() {
  return (
      <Container>
      <Wrapper>
      <Text><p>Meus conhecimentos:</p></Text>
        <Description>
          <h2>FRONTEND</h2>
          <div> 
          <p>
            Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
            <br/>
            Criação de sites responsivos seguindo princípio de Mobile First.
          </p>

         
        </div>
          </Description>

        <Description>
          <h2>BACKEND</h2>
          <p>
            Aplicações utilizando NodeJS, Typescript e MySQL.
            <br/>
             Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </p>
        </Description>
      </Wrapper>
    </Container>
  );
}

export default Technologies;
