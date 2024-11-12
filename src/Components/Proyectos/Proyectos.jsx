import React from "react";
import useCreateProject from "../../hooks/useCreateProject";

const proyecto = [
  // {
  //   videoURL: "/assets/videoProyectos/PiHenry.mp4",
  //   titulo: "Proyecto Individual Henry",
  //   descripcion:
  //     "SPA creada como proyecto individual para bootcamp soy henry, principalmente usando Html,Css puro,React,Redux,NodeJS, express, sequelize, postgreSQl",
  //   deploy: "https://pi-countries-roan.vercel.app/",
  //   formatoVideo: "video/mp4",
  // },
  {
    videoURL: "",
    titulo: "Backoffice Retail",
    descripcion:
      "Backoffice gestion de inventarios, etiquetas, conteos, pedidos a proveedor para empresas del rubro del retail.\nTecnologias: React, Nextjs, Redux, Material-Ui, StyledComponents, Socket-Io, Auth0, Nodejs, Express, Google cloud scheduler, pub/sub, Firebase messaging (Notificaciones), Winston, Pdfkit.",
    formatoVideo: "video/mp4",
    deploy: "/assets/Images/boVR.png", // Ruta desde public
    type: "image"
  },
  {
    videoURL: "",
    titulo: "Aplicacion mobile Retail",
    descripcion:
      "Aplicacion para conteo y visualizacion de productos, generación de etiquetas de supermercado, pedidos a proveedor. Con funcionalidades de lectura de codigos de barra mediante camara y detección del producto.\nCon tecnologias React native con expo, redux.",
    formatoVideo: "video/mp4",
    deploy: "/assets/Images/appmobileVR.jpg", // Ruta desde public
    type: "image"
  },
  {
    // videoURL: "/assets/videoProyectos/PiHenry.mp4",
    titulo: "App react native gestion formularios.",
    descripcion: "Aplicacion mobile para gestionar creacion de formularios.",
    deploy: "https://test-app-ifarming.netlify.app",
    // formatoVideo: "video/mp4",
  },
  {
    videoURL: "https://vimeo.com/778854630",
    titulo: "SPA Proyecto web hostel",
    descripcion:
      "SPA creada como proyecto grupal junto a 6 compañeros. Utilizando principalmente Html, Css, React, Redux, Bootstrap, Styled Components, nodeJS, express, postgreSQL ",
    formatoVideo: "video/mp4",
    deploy: "https://hostel-project.vercel.app",
  },
  {
    videoURL: "",
    titulo: "Festilandia Cotillon",
    descripcion:
      "E-commerce realizado con React,Redux, React-Bootstrap, Nodejs, Express, Sequelize. Con deploy en vps mediante nginx y aplicado CI/CD para despliegue automatico. (Por ahora solo esta en modo catalogo, proximamente el se habilitara para el cliente la compra de productos.) ",
    formatoVideo: "video/mp4",
    deploy: "https://festilandiacotillon.com",
  },
];

const Proyectos = () => {
  const [Projects] = useCreateProject(proyecto);
  return (
    <>
      <Projects />
    </>
  );
};

export default Proyectos;
