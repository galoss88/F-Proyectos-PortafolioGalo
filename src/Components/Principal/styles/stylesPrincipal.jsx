import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperTexto = styled.div`
  background: radial-gradient(circle, #0000006b, #000000c3);
  border-radius: 5px;
  padding: 1.5em;
  h1 {
    color: white;
    font-weight: bolder;
    font-size: 4em;
    text-shadow: 0 0 0 0 #edede9;
    box-shadow: 0 0 0 0;
    animation: aparecer 2s both;
    @keyframes aparecer {
      from {
        transform: translateY(-200%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      font-size: 2.3em;
      font-weight: bolder;
    }
    @media (max-width: 375px) {
      font-size: 1.5em;
    }
  }
  p {
    margin-top: 0.5rem;

    animation: aparecer 1s 2s both;
    @keyframes aparecer {
      from {
        transform: translateY(-200%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    color: #fff;
    text-shadow: 0 0 0 0 #f4f4f4;
    box-shadow: 0 0 0 0;
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    @media (max-width: 768px) {
    }
  }
`;
