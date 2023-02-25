import styled from "styled-components";
const urlBackground = "/background/background.jpg";

const background = {
  principal:
    "radial-gradient(circle,rgba(202, 186, 57, 0.7) 0%,rgb(1, 1, 1,0.9)30%),url(/background/background.jpg)",
  biografia:
    "linear-gradient(180deg, rgba(202, 185, 57, 0.345) 0%,rgba(0, 0, 0, 0.692)20%),url(/background/background.jpg)",
  tecnologias:
    "linear-gradient(180deg, rgba(202, 185, 57, 0.345) 0%,rgba(0, 0, 0, 0.692)20%),url(/background/background.jpg)",
  proyectos:
    "linear-gradient(180deg, rgba(202, 185, 57, 0.345) 0%,rgba(0, 0, 0, 0.692)20%),url(/background/background.jpg)",
  contacto:
    "linear-gradient(180deg, rgba(202, 185, 57, 0.345) 0%,rgba(0, 0, 0, 0.692)20%),url(/background/background.jpg)",
};
const { principal, biografia, tecnologias, proyectos, contacto } = background;
export const Div = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  background: ${({ intensidad }) => {
    switch (intensidad) {
      case "principal": {
        return principal;
      }
      case "biografia": {
        return biografia;
      }
      case "tecnologias": {
        return tecnologias;
      }
      case "proyectos": {
        return proyectos;
      }
      case "contacto": {
        return contacto;
      }
      default:
        return principal;
    }
  }};
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  animation: aparecer 4s normal both;
  @keyframes aparecer {
    0% {
      opacity: 0.95;
    }

    100% {
      opacity: 1;
    }
  }
  //laptops
  @media (max-width: 1280px) {
    height: auto;
  }
  //tablets
  //movil
  @media (max-width: 416px) {
    flex-direction: column;
   height: auto;
   
    
  }
  @media (max-width: 376px) {
   flex-direction: column;
   width: 100%;
   justify-content: center;
   align-items: center;
  }
`;
