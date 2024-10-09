import React, { useState } from "react";
import {
  Card,
  CloseButton,
  Container,
  Descripcion,
  Imagen,
  LinkDeploy,
  ModalContent,
  ModalWrapper,
  Titulo,
  Video,
  WrapperCards,
} from "../Components/Proyectos/styles/stylesProyectos";

const useCreateProject = (proyectos) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  const proyectosMap = () => (
    <Container>
      <WrapperCards>
        {proyectos &&
          proyectos.map((proyecto, index) => {
            const isImage = proyecto.type === "image";
            return (
              <Card key={index}>
                {isImage ? (
                  <Imagen
                    src={proyecto.deploy}
                    alt="Imagen"
                    onClick={() =>
                      openModal(
                        <Imagen
                          src={proyecto.deploy}
                          alt="Imagen ampliada"
                          isModal
                        />
                      )
                    }
                  />
                ) : (
                  <Video
                    src={proyecto.deploy}
                    controls
                    muted
                    loading="lazy"
                    type={proyecto.formatoVideo}
                    onClick={() =>
                      openModal(
                        <Video src={proyecto.deploy} controls muted autoPlay />
                      )
                    }
                  >
                    Video HTML5 no soportado
                  </Video>
                )}

                <Titulo>{proyecto.titulo}</Titulo>
                <Descripcion>{proyecto.descripcion}</Descripcion>
                {isImage ? null : (
                  <LinkDeploy
                    onClick={() => window.open(proyecto.deploy, "_blank")}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {proyecto.deploy}
                  </LinkDeploy>
                )}
              </Card>
            );
          })}
      </WrapperCards>

      {modalVisible && (
        <ModalWrapper onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            {modalContent}
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  );

  return [proyectosMap];
};

export default useCreateProject;
