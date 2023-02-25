import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: radial-gradient(circle, #0000006b, #000000c3);
  @media (max-width: 416px) {
    width: 100%;
  }
  @media (max-width: 376px) {
    width: 95%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    justify-content: space-between;
    height: 40vh;
  }
  @media (max-width: 416px) {
    gap: 0.5em;
  }
`;
export const Legend = styled.legend`
  font-family: "Acme";
  font-size: 1.4vw;
  margin: 0 0;
  color: white;
  //movil
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
  width: 50%;

  @media (max-width: 1280px) {
    height: 100%;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 416px) {
    width: 100%;
    padding: 0 1em;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
`;
export const WrapperInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  textarea {
    border-radius: 5px;
  }

  //laptop
  @media (max-width: 1280px) {
    justify-content: space-between;
    height: 15%;
  }
  @media (max-width: 416px) {
    height: 15%;
  }
`;
export const Label = styled.label`
  font-family: "Acme";
  color: white;
  font-size: 0.7vw;
  @media (max-width: 1280px) {
    font-size: 1.2em;
  }
`;
export const InputsContacto = styled.input`
  display: flex;
  border: none;
  height: 70%;
  width: 80%;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
  color: white;
  padding-left: 1em;
  background-color: rgba(0, 0, 0, 0.493);
  transition: 1s all;
  :focus {
    height: 2em;
    color: black;
    background-color: rgba(255, 249, 249, 0.493);

    ::placeholder {
      color: black;
    }
  }
  @media (max-width: 1280px) {
    height: 70%;
    :focus {
      padding: 1em 1em;
      height: 100%;
    }
  }
`;

export const WrapperTextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40%;

  @media (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40%;
  }
`;
export const TextArea = styled.textarea`
  width: 80%;
  height: 5em;
  background-color: rgba(0, 0, 0, 0.493);
  padding-left: 1em;
  transition: 1s all;
  :focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.493);
    ::placeholder {
      color: black;
      font-weight: 300;
    }
  }

  @media (max-width: 1280px) {
  }
`;
export const InputSubmit = styled.input`
  display: flex;
  width: 100%;
  height: 2em;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.493);
  transition: 1s all;
  :hover {
    background-color: rgba(255, 255, 255, 0.493);
    cursor: pointer;
    color: black;
  }
`;

//datos contacto ----------------------------------------->>

export const WrapperDatosContacto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  gap: 0.3rem;
  @media (max-width: 1280px) {
    height: 18em;
    padding: 1em 0;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: auto;
`;
export const LogoDato = styled.img`
  height: auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapperDato = styled.div`
  display: flex;
  align-items: center;
`;
export const Dato = styled.span`
  text-align: center;
  color: #fff;
`;

export const LinkContacto = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5em;
`;

export const ButtonEmailToMe = styled.button`
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.493);
  width: 20%;
  height: auto;
  padding: 0.4em 0;
  margin-top: 1em;
  border-radius: 5px;
  transition: 1s all;
  :hover {
    background-color: rgba(255, 255, 255, 0.493);
    cursor: pointer;
    color: black;
  }
  @media (max-width: 416px) {
    width: 100%;
  }
  @media (max-width: 376px) {
    width: 100%;
    border: none;
  }
`;
