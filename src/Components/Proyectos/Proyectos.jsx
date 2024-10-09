import React from "react";
import useCreateProject from "../../hooks/useCreateProject";

const Proyectos = () => {
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
      deploy: "/public/assets/Images/boVR.png",
      type:"image"

    },
    {
      videoURL: "",
      titulo: "Aplicacion mobile Retail",
      descripcion:
        "Aplicacion para conteo y visualizacion de productos, generación de etiquetas de supermercado, pedidos a proveedor. Con funcionalidades de lectura de codigos de barra mediante camara y detección del producto.\nCon tecnologias React native con expo, redux.",
      formatoVideo: "video/mp4",
      deploy: "/public/assets/Images/appmobileVR.jpg",
      type:"image"
    },
    {
      // videoURL: "/assets/videoProyectos/PiHenry.mp4",
      titulo: "App react native gestion formularios.",
      descripcion: "Aplicacion mobile para gestionar creacion de formularios.",
      deploy: "https://test-app-ifarming.netlify.app",
      // formatoVideo: "video/mp4",
    },
    // {
    //   videoURL: "/assets/videoProyectos/CotizadorCriptos.mp4",
    //   titulo: "Cotiza criptomonedas",
    //   descripcion:
    //     "SPA creada principalmente para repaso y practica de hooks react usando Html,Css,React, Styled Components.",
    //   deploy: "https://galocotizadorcriptomonedas.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/BuscadorImagenes.mp4",
    //   titulo: "Buscador Imagenes",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje de hooks de react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galobuscadorimagenes.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/BuscadorBebidas.mp4",
    //   titulo: "Buscador de Bebidas",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galobuscadorbebidas.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/AppClima.mp4",
    //   titulo: "Mira el clima de tu ciudad",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galoappclima.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/AppNoticias.mp4",
    //   titulo: "Observa las principales noticias de Argentina",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galobuscadornoticias.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/FrasesBreakingBad.mp4",
    //   titulo: "Descubri las frases celebres de Breaking Bad",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galoappbreakingbadfrases.netlify.app/",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/AppPresupuesto.mp4",
    //   titulo: "Arma tu presupuesto, controla tus gastos",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galocalcularpresupuesto.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    // {
    //   videoURL: "/assets/videoProyectos/AppTurnos.mp4",
    //   titulo: "SPA, administracion de turnos veterinaria",
    //   descripcion:
    //     "SPA creada principalmente para repaso y aprendizaje react. Utilizando principalmente Html, Css, React, Styled Components",
    //   deploy: "https://galoturnosveterinaria.netlify.app",
    //   formatoVideo: "video/mp4",
    // },
    {
      videoURL: "https://vimeo.com/778854630",
      titulo: "SPA Proyecto web hostel",
      descripcion:
        "SPA creada como proyecto grupal junto a 6 compañeros. Utilizando principalmente Html, Css, React, Redux, Bootstrap, Styled Components, nodeJS, express, postgreSQL ",
      formatoVideo: "video/mp4",
      deploy: "https://hostel-project.vercel.app",
    },
    // {
    //   videoURL: "/assets/videoProyectos/cotizadorseguro.mp4",
    //   titulo: "Cotizador seguros auto",
    //   descripcion:
    //     "SPA creada como proyecto grupal junto a 6 compañeros. Utilizando principalmente Html, Css, React, Redux, Bootstrap, Styled Components, nodeJS, express, postgreSQL ",
    //   formatoVideo: "video/mp4",
    //   deploy: "https://galocotizadorseguro.netlify.app",
    // },
    {
      videoURL: "",
      titulo: "Festilandia Cotillon",
      descripcion:
        "E-commerce realizado con React,Redux, React-Bootstrap, Nodejs, Express, Sequelize. Con deploy en vps mediante nginx y aplicado CI/CD para despliegue automatico. (Por ahora solo esta en modo catalogo, proximamente el se habilitara para el cliente la compra de productos.) ",
      formatoVideo: "video/mp4",
      deploy: "https://festilandiacotillon.com",
    },
  ];
  const [Projects] = useCreateProject(proyecto);
  return (
    <>
      <Projects />
    </>
  );
};

export default Proyectos;
