import React from "react";
import {
  Dato,
  LinkContacto,
  LogoDato,
  WrapperDato,
  WrapperDatosContacto,
  WrapperLogo,
} from "../Components/Contacto/styles/contacto";

const useCreateLinkContactame = (contacto) => {
  const contactoMap = () => (
    <WrapperDatosContacto>
      {contacto.map((red, index) => (
        <React.Fragment key={index}>
          <WrapperLogo>
            <LogoDato src={red.logoURL || ""} />
          </WrapperLogo>
          <WrapperDato>
            <Dato>
              {red.type === "email" ? (
                <LinkContacto
                  onClick={() => (window.location = `mailto:${red.direccion}`)}
                >
                  {red.direccion}
                </LinkContacto>
              ) : (
                <LinkContacto
                  onClick={() => window.open(red.direccion, "_blank")}
                >
                  {red.nameRed}
                </LinkContacto>
              )}
            </Dato>
          </WrapperDato>
        </React.Fragment>
      ))}
    </WrapperDatosContacto>
  );

  return [contactoMap];
};

export default useCreateLinkContactame;
