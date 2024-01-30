import React from "react";
import {
  Card,
  Container,
  Descripcion,
  Imagen,
  LinkDeploy,
  Titulo,
  WrapperCards,
} from "../Components/Proyectos/styles/stylesProyectos";

const useCreateProject = (proyectos) => {
  const proyectosMap = () => (
    <Container>
      <WrapperCards>
        {proyectos &&
          proyectos.map((proyecto, index) => (
            <Card key={index}>
              <Imagen
                src={proyecto.videoURL}
                controls
                muted
                loading="lazy"
                type={proyecto.formatoVideo}
              >
                Video HTML5 no soportado
              </Imagen>
              <Titulo>{proyecto.titulo}</Titulo>
              <Descripcion>{proyecto.descripcion}</Descripcion>

              <LinkDeploy
                onClick={() => window.open(proyecto.deploy, "_blank")}
                rel="noopener noreferrer"
                target="_blank"
              >
                {proyecto.deploy}
              </LinkDeploy>
            </Card>
          ))}
      </WrapperCards>
    </Container>
  );
  return [proyectosMap];
};

export default useCreateProject;
