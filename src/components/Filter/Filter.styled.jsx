import styled from "styled-components";

export const Label = styled.label `
    display: flex;
    flex-direction: column;

    font-size: 24px;
    font-weight: 600;
    line-height: 1.36;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

export const Input = styled.input`

    width: 400px;
    font-size: 22px;
    height: 36px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgba(0, 14, 65, 0.4);
    outline: none;
    color: #000000;
    &:focus {
      border-color: red;
     }
`;

