import React, { useContext, useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContextProvider, {
  ContextBackground,
} from "../../context/contextBackground";

import Biografia from "../Biografia/Biografia";
import Contacto from "../Contacto/Contacto";
import NavbarTwo from "../Navbar/NavbarTwo";
import Principal from "../Principal/Principal";
import Proyectos from "../Proyectos/Proyectos";

import Tecnologias from "../Tecnologias/Tecnologias";
import { Div } from "./styles/homeTwo";

export default function HomeTwo() {
  const context = useContext(ContextBackground);
  const { background } = context;

  return (
    <Div intensidad={background}>
      <Routes>
        <Route path="/home" element={<Principal />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<Principal />} />
      </Routes>
      <NavbarTwo />
    </Div>
  );
}
