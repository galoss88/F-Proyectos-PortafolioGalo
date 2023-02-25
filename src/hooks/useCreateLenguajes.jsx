import React from "react";
import {
  ContainerLogos,
  DivLogo,
  Logo,
  Section,
  // Titulo,
} from "../Components/Tecnologias/styles/tecnologias";

const useCreateLenguajes = (lenguajes) => {
  const mapLenguajes = () => (
    <Section>
      <ContainerLogos>
        {lenguajes.map((lenguaje) => (
          <DivLogo key={lenguaje.name}>
            <Logo src={lenguaje.urlLogo} alt={lenguaje.name}></Logo>
            <label>{lenguaje.name}</label>
          </DivLogo>
        ))}
      </ContainerLogos>
    </Section>
  );

  return [mapLenguajes];
};

export default useCreateLenguajes;
