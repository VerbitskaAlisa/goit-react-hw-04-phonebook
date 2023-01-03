import styled from "styled-components";

export const Backdrop = styled.div `
   position: fixed;
   top: 0;
   left: 0;

   width: 100%;
   height: 100%;

   background-color: rgba(0, 0, 0, 0.2);

    opacity: 1;
    transition: opacity 250ms linear,
    visibility 250ms linear;
`;

export const Modal = styled.div `
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     
     display: flex;
     align-items: center;
     justify-content: center;

     width: 450px;
     min-height: 450px;
     background-color: #fff;
     padding: 40px;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
     border-radius: 4px;

     transform: translate(-50%, -50%) scale(1);
     transition: transform 250ms linear;
`;

export const CloseBtn = styled.button `
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 50%;

    opacity: 1;

    transition: opacity 250ms linear;

    &:hover {
       border: 2px solid red;
    }

}
`;

// fcv