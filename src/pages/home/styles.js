import styled from "styled-components";
import backgroundStars from "../../assets/Estrelas.png";
import logoHome from "../../assets/tropaDigital.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Advent Pro", "Roboto", sans-serif;
  width: 100vw;
  height: 100vh;
  background: #ff6c22;
`;

export const Content = styled.div`
  background: #ffffff;
  width: 950px;
  height: 500px;
  border-radius: 4px;
  background-image: url(${backgroundStars});
  background-repeat: no-repeat;
  background-position: right;
`;

export const LogoHome = styled.div`
  background-image: url(${logoHome});
  background-repeat: no-repeat;
  margin-left: 140px;
  margin-bottom: -300px;
`;

export const ImgDivNotebook = styled.div`
  margin-left: 350px;
  margin-top: 88px;
`;

export const Painel = styled.div`
  text-align: start;
  margin-left: 60px;
`;

export const H1 = styled.h1`
  font-size: 29px;
  color: #8d8d8d;
`;
export const Span = styled.span`
  color: #ff6c22;
`;

export const InformationsDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 13px;
`;

export const ButtonLogin = styled.button`
  margin-top: 13px;
  width: 151px;
  height: 44px;
  background-color: #2eafb2;
  border-radius: 5px;
  border: none;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;
