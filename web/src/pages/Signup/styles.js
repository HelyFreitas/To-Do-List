import styled from "styled-components";
import Back from "../../assets/backgroundsignup.jpg";

export const ContainerMaster = styled.div`
  height: 100vh;
  width: 100%;

  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 400px;
  height: 500px;

  position: relative;

  border-radius: 10px;

  background-color: #010103;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  &&::before {
    content: "";

    position: absolute;
    top: -50%;
    left: -50%;

    width: 400px;
    height: 400px;

    background: linear-gradient(0deg, transparent, #5080cd, #0c534a);

    transform-origin: right bottom;
    animation: animate 6s linear infinite;
  }

  &&::after {
    content: "";

    position: absolute;
    top: -50%;
    left: -50%;

    width: 400px;
    height: 400px;

    background: linear-gradient(0deg, transparent, #cb54eb, #cb54eb);

    transform-origin: right bottom;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Form = styled.div`
  position: absolute;
  inset: 4px;

  background-color: #010103;

  z-index: 10;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  h1 {
    color: white;

    text-align: center;
  }
`;

export const InputsContainer = styled.div`
  margin-bottom: 50px;
`;

export const LinkContainer = styled.strong`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;

  p {
    color: #cb54eb;
  }

  a {
    text-decoration: none;

    color: #5080cd;
  }
`;
