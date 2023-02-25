import React from "react";
import useCreateButtonNav from "../../hooks/useCreateButtonNav";
import { Menu, Tooltip, WrapperItems } from "./styles/navbarTwo";
import "./styles/navbarTwo.css";
export default function NavbarTwo() {
  const dataButtonMenu = [
    { id: "principal", nameIcon: "home-outline" },
    { id: "biografia", nameIcon: "body-outline" },
    { id: "tecnologias", nameIcon: "bulb-outline" },
    { id: "proyectos", nameIcon: "briefcase-outline" },
    { id: "contacto", nameIcon: "chatbox-outline" },
  ];
  const [ButtonMenu, setActivo] = useCreateButtonNav(dataButtonMenu);
  return (
    <Menu>
      <WrapperItems>
        <ButtonMenu />
      </WrapperItems>
    </Menu>
  );
}
