import styled from "styled-components";
export const DivBiografia = styled.div`
  /* grid-column: 1/3; */
  display: flex;
  margin: 1rem auto;
  border-radius: 30px;
  height: auto;
  max-width: 60%;
  padding: 1.5rem 0rem;
  justify-content: center;
  overflow: scroll;
  //oculta scrollbar y sigue funcional
  ::-webkit-scrollbar {
    display: none;
  }
  background: radial-gradient(circle, #0000006b, #0000005e);
  transition: transform 1s ease-in-out;
  :hover {
    transform: scale(1.2);
    background: radial-gradient(circle, #ffffffa2, #beb9b9ce);
    p {
      color: black;
    }
  }
  justify-content: center;
  gap: 2rem;

  //responsive
  @media (orientation: landscape)and (max-height:415px) {
    gap: 0;
    max-width: 70%;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  @media (max-width: 768px) {
    max-width: 70%;
    :hover {
      transform: scale(1.1);
      background: radial-gradient(circle, #ffffffa2, #beb9b9ce);
    }
  }
  @media (max-width: 416px) {
    flex-direction: column;
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 1em;
    gap: 0;
    align-items: center;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 1);
    border-radius: 5px;
  }
  @media (max-width: 376px) {
    flex-direction: column;
    width: 100vw;
    height: 40vh;
    margin: 0;
    padding: 1em;
    justify-content: space-between;
    align-items: start;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 1);
    border-radius: 5px;
  }
`;
export const FotoBiografia = styled.div`
  background-image: url("/fotoBiografia/fotoBiografia.jpg");
  background-size: cover;
  border-radius: 50%;
  width: 40%;
  height: 40vh;
  @media (orientation: landscape)and (max-height:415px) {
    background-position: center;
    background-size: 70% 100%;
    background-repeat: no-repeat;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 15%;
    height: 20vh;
    margin-left: 0.1rem;
    background-position: center;
  }
  @media (max-width: 416px) {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 30%;
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 60%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const TextoBiografia = styled.p`
  margin: auto 0;
  font-size: 1.4em;
  font-family: sans-serif, Arial, Helvetica, sans-serif, helvetica;
  word-wrap: break-word;
  font-weight: bold;
  text-indent: 20px;
  line-height: 1.2;
  padding: 1rem;
  text-align: justify;
  white-space: normal;
  color: white;
  line-height: 1.5em;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 80%;
    font-size: 1.3em;
  }
  @media (max-width: 416px) {
    max-width: 100%;
    font-size: 1em;
  }
  @media (max-width: 376px) {
    max-width: 100%;
    font-size: 1em;
    padding: 0;
    margin: 0;
  }
`;
