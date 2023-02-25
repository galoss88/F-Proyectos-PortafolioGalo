import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 50vw;
  height: auto;
  background: radial-gradient(circle, #0000006b, #0000005e);
  padding: 2rem;
  border-radius: 10px;
  justify-content: center;
  transition: 3s all;
  :hover {
    background: radial-gradient(circle, #ffffffa2, #beb9b9ce);
    transform: scale(1.5);
  }
  @media (max-width: 416px) {
    width: 100%;
    :hover {
    background: radial-gradient(circle, #ffffffa2, #beb9b9ce);
    transform: scale(1);
  }
  }
  @media (max-width: 376px) {
    width: 100%;
    :hover {
      transform: scale(1);
    }
  }
`;
export const Section = styled.section`
  display: flex;

  justify-content: center;
  @media (max-width: 376px) {
    width: 95%;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  gap: 2rem;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 416px) {
    width: 100%;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
`;
//LOGO Y NOMBRE
export const DivLogo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;

  align-items: center;

  label {
    text-align: center;
    color: white;
    font-size: 1vw;
  }
  @media (max-width: 376px) {
    label {
      text-align: center;
      color: white;
      font-size: 3vw;
    }
  }
`;
export const Logo = styled.img`
  height: 80%;
  width: 7rem;
  @media (max-width: 376px) {
  }
`;
