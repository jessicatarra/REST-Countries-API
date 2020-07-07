import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  input {
    flex: 1;
    border-radius: 5px;
    border: none;
    height: 48px;
    line-height: 48px;
    padding: 2rem;
    font-size: 0.7em;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;

export default function Input({ ...props }) {
  return (
    <InputStyled>
      Input
      <input type="text" {...props} />
    </InputStyled>
  );
}
