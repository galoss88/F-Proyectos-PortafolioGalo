import React, { useState } from "react";
import useCreateLinkContactame from "../../hooks/useCreateLinkContactame";
import useSendEmailToMe from "../../hooks/useSendEmailToMe";
import linkRedes from "../../Info/linkMisRedes";
import { Container, ButtonEmailToMe } from "./styles/contacto";

const Contacto = () => {
  const [showSendEmailToMe, setShowSendEmailToMe] = useState(true);
  const [DatosContacto] = useCreateLinkContactame(linkRedes);
  const [FormSendEmailToMe] = useSendEmailToMe(
    showSendEmailToMe,
    setShowSendEmailToMe
  );

  if (showSendEmailToMe)
    return (
      <Container>
        <DatosContacto />
        <ButtonEmailToMe
          onClick={() => setShowSendEmailToMe(!showSendEmailToMe)}
        >
          Envieme un email
        </ButtonEmailToMe>
      </Container>
    );
  return (
    <Container>
      <FormSendEmailToMe />
    </Container>
  );
};
export default Contacto;
