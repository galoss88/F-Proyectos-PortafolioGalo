import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 2em;
  //laptops
  @media (max-width: 1280px) {
    width: 70vw;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 70%;

    justify-content: center;
    align-items: center;
  }
  @media (max-width: 416px) {
    
    max-height: 100%;

    margin: 2em;
  }
  @media (max-width: 376px) {
    
    height: auto;

    margin: 2em;
  }
`;

export const WrapperCards = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 1rem;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
    grid-template-row: 200px;
  }
  @media (max-width: 416px) {
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    grid-template-row: auto;
    padding: 0;
    gap: 0;
    margin-top: 18%;
  }
  @media (max-width: 376px) {
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-row: auto;
    
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.1rem;
  max-width: 40vw;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 1280px) {
    width: 100%;
    justify-content: space-between;
    max-width: 80vw;
  }
  @media (max-width: 768px) {
    margin-top: 0.5em;
    justify-content: space-between;
  }
  @media (max-width: 416px) {
    width: 95vw;
    max-width: initial;
    margin-top: 1em;
    justify-content: space-between;
  }

  @media (max-width: 376px) {
    width: 95vw;
    max-width: initial;
    justify-content: space-between;
  }
`;
export const Imagen = styled.video`
  :hover {
    transform: scale(1.3) translate(0%, 0%);
    box-shadow: 0 0rem 1rem 0.5rem white;
  }

  @media (max-width: 1280px) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: 768px) {
    height: 80%;
    width: 100%;
  }
  @media (max-width: 416px) {
    width: 100%;
    :hover {
      transform: scale(1);
      box-shadow: 0 0rem 1rem 0.5rem white;
    }
  }
  @media (max-width: 376px) {
    :hover {
      transform: scale(1);
      box-shadow: 0 0rem 1rem 0.5rem white;
    }
  }
`;
export const Titulo = styled.h2`
  word-wrap: break-word;
  margin: 0.1em 0.2em;
  font-size: 1.8em;
  color: white;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 2em;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
  @media (max-width: 416px) {
    font-size: 1.5em;
  }
  @media (max-width: 376px) {
    font-size: 1.4em;
  }
`;
export const Descripcion = styled.p`
  margin: 0.1em 0.2em;
  font-size: 1.5em;
  color: white;
  line-height: 2em;
  @media (max-width: 1280px) {
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    height: 10%;
  }
  @media (max-width: 416px) {
    height: 20%;
    
  }
  @media (max-width: 376px) {
    width: 100%;

  }
`;

export const LinkDeploy = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  @media (max-width: 1280px) {
    font-size: 1em;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
  @media (max-width: 416px) {
    font-size: 1em;
  }
  @media (max-width: 376px) {
    font-size: 1em;
    padding: 1em 0;
  }
`;
