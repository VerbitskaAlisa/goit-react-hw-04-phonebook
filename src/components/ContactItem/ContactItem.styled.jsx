import styled from "styled-components";

export const DeleteBtn = styled.button `
         background: #FF4742;
         border: 1px solid #FF4742;
         border-radius: 6px;
         box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
         box-sizing: border-box;
         color: #FFFFFF;
         cursor: pointer; 
         display: block;
         font-size: 16px;
         font-weight: 600;
         line-height: 1.36;
         letter-spacing: 0.1em;
         text-transform: uppercase;
         min-height: 40px;
         outline: 0;
         padding: 12px 14px;
         text-align: center;


      &:hover {
          background-color: initial;
          color: #FF4742;
        }
`;

export const NameText = styled.p `
         width: 300px;
         margin-right: 20px;
         font-size: 24px;
         font-weight: 600;
         line-height: 1.36;
         letter-spacing: 0.1em;
`;

export const NumberText = styled.p `
         width: 300px;
         margin-right: 20px; 
         font-size: 24px;
         font-weight: 600;
         line-height: 1.36;
         letter-spacing: 0.1em;
`;