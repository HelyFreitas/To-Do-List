import styled from "styled-components";

export const Button = styled.button`
  padding: 14px 20px;

  outline: none;

  border-radius: 10px;
  border: 1px solid #fff;

  max-width: 350px;
  width: 100%;

  cursor: pointer;

  background-color: #fff;
  color: #000;

  font-weight: 600;
  font-size: 16px;

  transition: all 0.4s;

  &:hover {
    border: 1px solid white;

    background-color: transparent;
    color: #fff;

    transition: all 0.4s;
  }
`;
