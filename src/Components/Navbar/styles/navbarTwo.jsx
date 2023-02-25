import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 3%;
  top: 30%;
  gap: 3rem;
  width: auto;
  height: auto;
  z-index: 1;
  @media (orientation: landscape) and (max-height: 415px) {
    top: 0;
  }
  @media (max-width: 416px) {
    flex-direction: row;

    right: 0%;
    top: 0%;
    width: 100vw;
  }
  @media (max-width: 376px) {
    flex-direction: row;
    width: 100vw;
  }
`;
export const WrapperItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 3em;
  @media (max-width: 416px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-height: 740px) and(max-width:360px) {
    gap: 1em;
  }
  @media (max-width: 376px) {
    flex-direction: row;
    width: 100%;
  }
  @media (orientation: landscape) and (max-height: 415px) {
    gap: 0;
  }
`;

export const MenuItem = styled.button`
  display: flex;
  position: relative;
  padding: 1rem 1rem;
  font-size: 2rem;
  box-shadow: 0 0 0.8rem #d8af26;
  border-radius: ${({ activo }) => (activo ? "50%" : "0")};
  transition: 1s all ease-in-out;
  background-color: black;
  :hover {
    cursor: pointer;

    background-color: white;
    transition: transform 1s;
    border-radius: 50%;

    #icono {
      color: black;
    }
    transform: scale(1.5);
  }
  justify-content: center;
  align-items: center;
  //Responsive laptops
  @media (max-width: 1280px) {
    margin: 1em 0;
  }
  @media (max-width: 416px) {
  }
  @media (max-width: 375px) {
  }
  @media (orientation: landscape) and (max-height: 415px) {
    gap: 0;
    padding: 0.8rem;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -18px;
  left: -4px;
  font-size: small;
  pointer-events: none;
  color: white;
  :hover {
  }
`;
