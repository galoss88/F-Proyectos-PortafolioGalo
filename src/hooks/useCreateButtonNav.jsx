import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem, Tooltip } from "../Components/Navbar/styles/navbarTwo";
import { ContextBackground } from "../context/contextBackground";

const useCreateButtonNav = (dataButtonMenu) => {
  const [activo, setActivo] = useState(null);
  const navigate = useNavigate();
  const contextBackground = useContext(ContextBackground);
  const { setBackground, background } = contextBackground;
  const redirigirARutas = (e, ruta) => {
    navigate(ruta);
    const id = obtenerIdBotonMenu(e);
    //Seteo fondo pantalla segun la ruta
    setBackground(id);
    //Seteo state activo al nombre del boton que se hizo click para cambiarle estilos en caso de estar activo.
    setActivo(id);
  };
  const obtenerIdBotonMenu = (e) => {
    const id = e.target.getAttribute("id");
    return id;
  };

  const mapButtons = () =>
    dataButtonMenu.map((button) => (
      <MenuItem
        key={button.id}
        activo={activo === button.id}
        onClick={(e) => redirigirARutas(e, `/${button.id}`)}
      >
        <Tooltip>{button.id}</Tooltip>
        <ion-icon id="icono" name={button.nameIcon}></ion-icon>
      </MenuItem>
    ));

  return [mapButtons, setActivo];
};

export default useCreateButtonNav;
