import styled from "styled-components";

export const Wrap = styled.div `
     margin-bottom: 80px;
`;

export const InputField = styled.div `
    position: relative;
    width: 265px;

    &:not(:last-child) {
      margin-bottom: 60px;
    } 
`;


export const Label = styled.label `
    font-size: 24px;
    font-weight: 600;
    line-height: 1.36;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

export const Input = styled.input`
    font-size: 32px;

    width: 100%;
    height: 42px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgba(0, 14, 65, 0.4);
    outline: none;
    color: #000000;
    &:focus {
      border-color: red;
     }
`;

export const AddButton = styled.button `
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.36;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    margin: 0 auto;


  &:hover {
  background-color: initial;
  color: #FF4742;
   }
`;


