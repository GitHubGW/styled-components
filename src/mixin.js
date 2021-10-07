import { css } from "styled-components";

export const buttonStyle = css`
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: dodgerblue;
  color: white;
  font-size: 25px;
  border-radius: 6px;
  cursor: pointer;
  width: 140px;
  box-sizing: border-box;
  margin: 5px 0;
  display: block;

  &:hover {
    background-color: skyblue;
  }
`;
